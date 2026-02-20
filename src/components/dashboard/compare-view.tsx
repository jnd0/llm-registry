"use client";

import { useQueryState, parseAsArrayOf, parseAsString } from "nuqs";
import { Model, Benchmark } from "@/types";
import { Button } from "@/components/ui/button";
import { X, Plus, Share2, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState, useMemo, useEffect } from "react";
import { cn } from "@/lib/utils";
import { normalizeScore } from "@/lib/stats";
import { ALL_CATEGORY_SLUG, categoryToSlug, slugToCategory } from "@/lib/categories";
import dynamic from "next/dynamic";
import Link from "next/link";
import { getProviderTheme } from "@/lib/provider-identity";
import { sources } from "@/data/sources";

const RadarComparison = dynamic(
  () => import("./radar-chart").then((mod) => mod.RadarComparison),
  {
    ssr: false,
    loading: () => (
      <Card className="surface-card flex h-full min-h-[500px] items-center justify-center">
        <span className="text-xs font-mono tracking-[0.12em] text-muted-foreground">Loading chart…</span>
      </Card>
    ),
  }
);

function getSeriesColorClasses(idx: number) {
  if (idx === 0) return { bar: "bg-chart-1", text: "text-chart-1" };
  if (idx === 1) return { bar: "bg-chart-2", text: "text-chart-2" };
  return { bar: "bg-chart-3", text: "text-chart-3" };
}

const sourceMap = new Map(sources.map((source) => [source.id, source]));
const MIN_RELIABLE_SHARED_BENCHMARKS = 8;

function hasScore(model: Model, benchmarkId: string) {
  const score = model.scores[benchmarkId]?.score;
  return score !== null && score !== undefined;
}

function getVerificationBadge(verificationLevel?: string, verified?: boolean) {
  if (verificationLevel === "third_party") return "3rd";
  if (verificationLevel === "provider") return "Prov";
  if (verificationLevel === "community") return "Comm";
  if (verificationLevel === "estimated") return "Est";
  return verified ? "Prov" : "Unv";
}

interface CompareViewProps {
  modelOptions: {
    id: string;
    name: string;
    provider: string;
    releaseDate: string;
  }[];
  initialSelectedModels: Model[];
  benchmarks: Benchmark[];
}

export function CompareView({ modelOptions, initialSelectedModels, benchmarks }: CompareViewProps) {
  const [showSummary, setShowSummary] = useState(true);
  const [copied, setCopied] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [modelCache, setModelCache] = useState<Record<string, Model>>(() =>
    Object.fromEntries(initialSelectedModels.map((model) => [model.id, model]))
  );
  const [compareIds, setCompareIds] = useQueryState(
    "models",
    parseAsArrayOf(parseAsString).withDefault([])
  );
  const [categorySlug, setCategorySlug] = useQueryState(
    "category",
    parseAsString.withDefault(ALL_CATEGORY_SLUG)
  );
  const [comparisonMode, setComparisonMode] = useQueryState(
    "mode",
    parseAsString.withDefault("strict")
  );

  const onlySharedBenchmarks = comparisonMode !== "explore";

  const selectedModels = useMemo(() => {
    const ids = (compareIds || []).slice(0, 3);
    return ids
      .map((id) => modelCache[id])
      .filter((model): model is Model => Boolean(model));
  }, [compareIds, modelCache]);

  useEffect(() => {
    const ids = (compareIds || []).slice(0, 3);
    if (ids.length === 0) return;

    let cancelled = false;
    const missingIds = ids.filter((id) => !modelCache[id]);
    if (missingIds.length === 0) return;

    const loadMissingModels = async () => {
      const fetched = await Promise.all(
        missingIds.map(async (id) => {
          try {
            const response = await fetch(`/api/v1/models/${encodeURIComponent(id)}`, {
              cache: "no-store",
            });
            if (!response.ok) return null;
            const payload = (await response.json()) as { model?: Model };
            return payload.model ?? null;
          } catch {
            return null;
          }
        })
      );

      if (cancelled) return;

      const validModels = fetched.filter((model): model is Model => Boolean(model));
      if (validModels.length === 0) return;

      setModelCache((previous) => {
        const next = { ...previous };
        validModels.forEach((model) => {
          next[model.id] = model;
        });
        return next;
      });
    };

    void loadMissingModels();

    return () => {
      cancelled = true;
    };
  }, [compareIds, modelCache]);

  const categories = useMemo(() =>
    Array.from(new Set(benchmarks.map(b => b.category))),
    [benchmarks]
  );

  const selectableModels = useMemo(
    () => [...modelOptions].sort((a, b) => {
      const providerCmp = a.provider.localeCompare(b.provider);
      if (providerCmp !== 0) return providerCmp;
      return a.name.localeCompare(b.name);
    }),
    [modelOptions]
  );

  const latestModels = useMemo(
    () => [...modelOptions]
      .filter((m) => !compareIds.includes(m.id))
      .sort((a, b) => b.releaseDate.localeCompare(a.releaseDate)),
    [modelOptions, compareIds]
  );

  const benchmarkCategoryFilter = useMemo(() => {
    const category = slugToCategory(categorySlug);
    return category ?? ALL_CATEGORY_SLUG;
  }, [categorySlug]);

  const scopedBenchmarks = useMemo(() => {
    if (benchmarkCategoryFilter === ALL_CATEGORY_SLUG) {
      return benchmarks;
    }
    return benchmarks.filter((benchmark) => benchmark.category === benchmarkCategoryFilter);
  }, [benchmarkCategoryFilter, benchmarks]);

  const sharedBenchmarkCount = useMemo(() => {
    if (selectedModels.length === 0) return 0;

    return scopedBenchmarks.filter((benchmark) => {
      if (selectedModels.length === 1) {
        return hasScore(selectedModels[0], benchmark.id);
      }
      return selectedModels.every((model) => hasScore(model, benchmark.id));
    }).length;
  }, [scopedBenchmarks, selectedModels]);

  const comparisonQuality = useMemo(() => {
    if (selectedModels.length < 2) return null;

    const totalBenchmarks = scopedBenchmarks.length;
    const sharedCoverage = totalBenchmarks > 0 ? (sharedBenchmarkCount / totalBenchmarks) * 100 : 0;
    const coverageStats = selectedModels.map((model) => {
      const available = scopedBenchmarks.filter((benchmark) => hasScore(model, benchmark.id)).length;
      const coverage = totalBenchmarks > 0 ? (available / totalBenchmarks) * 100 : 0;
      return coverage;
    });
    const averageCoverage = coverageStats.length > 0
      ? coverageStats.reduce((sum, value) => sum + value, 0) / coverageStats.length
      : 0;
    const minimumCoverage = coverageStats.length > 0 ? Math.min(...coverageStats) : 0;

    let reliability: "high" | "medium" | "low" = "low";
    if (sharedBenchmarkCount >= 12 && minimumCoverage >= 50) {
      reliability = "high";
    } else if (sharedBenchmarkCount >= MIN_RELIABLE_SHARED_BENCHMARKS && minimumCoverage >= 35) {
      reliability = "medium";
    }

    return {
      totalBenchmarks,
      sharedBenchmarks: sharedBenchmarkCount,
      sharedCoverage,
      averageCoverage,
      minimumCoverage,
      reliability,
      isReliable: sharedBenchmarkCount >= MIN_RELIABLE_SHARED_BENCHMARKS,
    };
  }, [scopedBenchmarks, selectedModels, sharedBenchmarkCount]);

  const categoryAverages = useMemo(() => {
    if (!showSummary) return [];

    const scopedCategories = Array.from(new Set(scopedBenchmarks.map((benchmark) => benchmark.category)));

    return scopedCategories
      .map((category) => {
        const categoryBenchmarks = scopedBenchmarks.filter((benchmark) => benchmark.category === category);
        const comparableBenchmarks =
          onlySharedBenchmarks && selectedModels.length > 1
            ? categoryBenchmarks.filter((benchmark) => selectedModels.every((model) => hasScore(model, benchmark.id)))
            : categoryBenchmarks;

        const modelScores = selectedModels.map((model) => {
          const normalizedScores = comparableBenchmarks
            .map((benchmark) => {
              const score = model.scores[benchmark.id]?.score;
              if (score === null || score === undefined) return null;
              return normalizeScore(score, benchmark);
            })
            .filter((score): score is number => score !== null);

          return {
            modelId: model.id,
            modelName: model.name,
            average:
              normalizedScores.length > 0
                ? normalizedScores.reduce((sum, value) => sum + value, 0) / normalizedScores.length
                : null,
            availableBenchmarks: normalizedScores.length,
            comparableBenchmarks: comparableBenchmarks.length,
          };
        });

        return {
          id: category.toLowerCase().replace(/\s+/g, "-"),
          name: category,
          description: `Aggregate performance across ${category} evaluations.`,
          benchmarkCount: comparableBenchmarks.length,
          totalBenchmarkCount: categoryBenchmarks.length,
          scores: modelScores,
        };
      })
      .filter((category) => category.scores.some((score) => score.average !== null));
  }, [onlySharedBenchmarks, scopedBenchmarks, selectedModels, showSummary]);

  const detailedBenchmarks = useMemo(() => {
    if (showSummary) return [];

    return scopedBenchmarks
      .filter((benchmark) => {
        const availableCount = selectedModels.filter((model) => hasScore(model, benchmark.id)).length;

        if (availableCount === 0) return false;
        if (!onlySharedBenchmarks) return true;
        if (selectedModels.length <= 1) return true;
        return availableCount === selectedModels.length;
      })
      .sort((a, b) => {
        if (a.category === b.category) return a.name.localeCompare(b.name);
        return a.category.localeCompare(b.category);
      });
  }, [onlySharedBenchmarks, scopedBenchmarks, selectedModels, showSummary]);

  const benchmarkDeltas = useMemo(() => {
    if (showSummary) return {};

    const deltas: Record<string, number> = {};
    detailedBenchmarks.forEach((benchmark) => {
      const normalized = selectedModels
        .map((model) => {
          const score = model.scores[benchmark.id]?.score;
          if (score === null || score === undefined) return null;
          return normalizeScore(score, benchmark);
        })
        .filter((score): score is number => score !== null);

      if (normalized.length < 2) {
        deltas[benchmark.id] = 0;
        return;
      }

      deltas[benchmark.id] = Number((Math.max(...normalized) - Math.min(...normalized)).toFixed(1));
    });
    return deltas;
  }, [detailedBenchmarks, selectedModels, showSummary]);

  const radarBenchmarks = useMemo(() => {
    if (selectedModels.length === 0) return scopedBenchmarks;

    return scopedBenchmarks.filter((benchmark) =>
      selectedModels.some((model) => hasScore(model, benchmark.id))
    );
  }, [scopedBenchmarks, selectedModels]);

  const removeModel = (id: string) => {
    setCompareIds((prev) => prev?.filter((i) => i !== id) || []);
  };

  const clearModels = () => setCompareIds([]);

  const addModel = (id: string) => {
    if (compareIds.includes(id)) return;
    if (compareIds.length >= 3) return;
    setCompareIds((prev) => [...(prev || []), id]);
    setSearchOpen(false);
    setSearchText("");
  };

  const filteredModels = useMemo(() => {
    if (!searchText) return selectableModels.slice(0, 10);
    const search = searchText.toLowerCase();
    return selectableModels
      .filter((m) => 
        m.name.toLowerCase().includes(search) || 
        m.provider.toLowerCase().includes(search)
      )
      .slice(0, 10);
  }, [selectableModels, searchText]);

  const getModelCardMeta = (model: Model) => {
    const scopedScoreEntries = scopedBenchmarks
      .map((benchmark) => model.scores[benchmark.id])
      .filter((entry): entry is Model["scores"][string] => {
        const score = entry?.score;
        return score !== null && score !== undefined;
      });

    const totalBenchmarks = scopedBenchmarks.length;
    const scoredBenchmarks = scopedScoreEntries.length;
    const coverage = totalBenchmarks > 0 ? (scoredBenchmarks / totalBenchmarks) * 100 : 0;

    const strongVerified = scopedScoreEntries.filter((entry) => {
      if (entry.verificationLevel === "provider" || entry.verificationLevel === "third_party") return true;
      return entry.verified && !entry.verificationLevel;
    }).length;
    const communityVerified = scopedScoreEntries.filter((entry) => entry.verificationLevel === "community").length;
    const estimated = scopedScoreEntries.filter((entry) => entry.verificationLevel === "estimated").length;
    const strongVerificationShare = scoredBenchmarks > 0 ? (strongVerified / scoredBenchmarks) * 100 : 0;

    const datedEntries = scopedScoreEntries.filter((entry) => Boolean(entry.asOfDate));
    const latestAsOfDate = datedEntries
      .map((entry) => entry.asOfDate as string)
      .sort((a, b) => b.localeCompare(a))[0] ?? null;

    if (strongVerificationShare >= 60) {
      return {
        label: "Strong Verification",
        tone: "text-emerald-700 dark:text-emerald-400",
        dot: "bg-emerald-500",
        coverage,
        strongVerificationShare,
        scoredBenchmarks,
        totalBenchmarks,
        latestAsOfDate,
      };
    }

    if (strongVerified > 0 || communityVerified > 0) {
      return {
        label: "Partial Verification",
        tone: "text-amber-700 dark:text-amber-400",
        dot: "bg-amber-500",
        coverage,
        strongVerificationShare,
        scoredBenchmarks,
        totalBenchmarks,
        latestAsOfDate,
      };
    }

    if (estimated > 0) {
      return {
        label: "Estimated Data",
        tone: "text-slate-600 dark:text-slate-300",
        dot: "bg-slate-500",
        coverage,
        strongVerificationShare,
        scoredBenchmarks,
        totalBenchmarks,
        latestAsOfDate,
      };
    }

    return {
      label: "Unverified",
      tone: "text-muted-foreground",
      dot: "bg-muted-foreground",
      coverage,
      strongVerificationShare,
      scoredBenchmarks,
      totalBenchmarks,
      latestAsOfDate,
    };
  };

  const handleShareView = async () => {
    const shareUrl = typeof window === "undefined" ? "" : window.location.href;
    if (!shareUrl) return;

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="animate-in fade-in duration-700 ease-out space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4 px-1">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <div className="flex items-center gap-1.5 bg-muted/30 p-1 rounded-full border border-border/40">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSummary(true)}
              className={cn(
                "h-7 rounded-full px-3 text-[11px] font-bold uppercase tracking-wider transition-all",
                showSummary ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Summary
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSummary(false)}
              className={cn(
                "h-7 rounded-full px-3 text-[11px] font-bold uppercase tracking-wider transition-all",
                !showSummary ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Detailed
            </Button>
          </div>

          <div className="h-4 w-px bg-border/40 mx-2" />

          <div className="flex items-center gap-2">
            <select
              value={categorySlug}
              onChange={(event) => setCategorySlug(event.target.value)}
              aria-label="Filter by category"
              className="h-9 rounded-full border border-border/60 bg-muted/20 px-4 text-[11px] font-bold uppercase tracking-wider text-muted-foreground focus:bg-background transition-all outline-none"
            >
              <option value={ALL_CATEGORY_SLUG}>All Categories</option>
              {categories.map((category) => (
                <option key={category} value={categoryToSlug(category)}>
                  {category}
                </option>
              ))}
            </select>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setComparisonMode(onlySharedBenchmarks ? "explore" : "strict")}
              className={cn(
                "h-9 rounded-full border-border/60 px-4 text-[11px] font-bold uppercase tracking-wider transition-all",
                onlySharedBenchmarks ? "bg-primary/5 text-primary border-primary/20" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {onlySharedBenchmarks ? "Strict Shared" : "Exploratory"}
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleShareView}
            className="h-9 rounded-full border-border/60 px-4 text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-all"
          >
            <Share2 className="mr-2 h-3.5 w-3.5" />
            {copied ? "Copied" : "Share"}
          </Button>

          <div className="relative">
            <Button
              size="sm"
              onClick={() => setSearchOpen(!searchOpen)}
              className="h-9 rounded-full px-5 text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-primary/20"
            >
              <Plus className="mr-1.5 h-3.5 w-3.5" />
              Add Model
            </Button>

            {searchOpen && (
              <div className="absolute right-0 top-full mt-2 z-50 w-[320px] rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
                <div className="p-3 border-b border-border/50">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search models..."
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      className="h-10 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                      autoFocus
                    />
                  </div>
                </div>
                <div className="max-h-[300px] overflow-y-auto p-2">
                  {filteredModels.length === 0 ? (
                    <p className="p-4 text-center text-xs text-muted-foreground">No models found</p>
                  ) : (
                    filteredModels.map((model) => {
                      const providerTheme = getProviderTheme(model.provider);
                      const isAdded = compareIds.includes(model.id);
                      return (
                        <button
                          key={model.id}
                          onClick={() => addModel(model.id)}
                          disabled={isAdded || compareIds.length >= 3}
                          className={cn(
                            "w-full rounded-xl px-3 py-2.5 text-left transition-colors",
                            isAdded ? "opacity-50 cursor-not-allowed" : "hover:bg-muted"
                          )}
                        >
                          <div className="flex w-full items-center justify-between gap-3">
                            <div className="min-w-0">
                              <span className="block truncate text-sm font-bold tracking-tight text-foreground">{model.name}</span>
                              <span className={cn("block truncate text-[10px] font-bold uppercase tracking-wider opacity-70", providerTheme.text)}>{model.provider}</span>
                            </div>
                            {isAdded && (
                              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">Added</span>
                            )}
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {comparisonQuality && (
        <section className="rounded-2xl border border-border bg-card/40 px-5 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-1">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground/70">
                Comparison Quality
              </p>
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wider">
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-1",
                    comparisonQuality.reliability === "high"
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                      : comparisonQuality.reliability === "medium"
                        ? "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300"
                        : "border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300"
                  )}
                >
                  {comparisonQuality.reliability} evidence
                </span>
                <span className="text-muted-foreground">
                  Shared {comparisonQuality.sharedBenchmarks}/{comparisonQuality.totalBenchmarks} ({comparisonQuality.sharedCoverage.toFixed(1)}%)
                </span>
                <span className="text-muted-foreground">
                  Avg Coverage {comparisonQuality.averageCoverage.toFixed(1)}% | Min {comparisonQuality.minimumCoverage.toFixed(1)}%
                </span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              {comparisonQuality.isReliable
                ? "Reliable overlap for directional benchmark comparisons."
                : `Low overlap: fewer than ${MIN_RELIABLE_SHARED_BENCHMARKS} shared benchmarks. Avoid hard winner claims.`}
            </p>
          </div>
        </section>
      )}

      <section className="grid gap-4 lg:grid-cols-3">
        {selectedModels.map((model, idx) => {
          const providerTheme = getProviderTheme(model.provider);
          const cardMeta = getModelCardMeta(model);

          return (
            <article key={model.id} className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-all hover:border-primary/30">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 space-y-1">
                  <p className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest">Model 0{idx + 1}</p>
                  <h2 className="truncate text-2xl font-display font-bold tracking-tight text-foreground" title={model.name}>
                    <Link 
                      href={`/model/${model.id}`}
                      className="hover:text-primary transition-colors"
                    >
                      {model.name}
                    </Link>
                  </h2>
                  <div className="pt-1">
                    <span className={cn("rounded-full px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest", providerTheme.border, providerTheme.bg, providerTheme.text)}>
                      {model.provider}
                    </span>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-destructive/5 hover:text-destructive transition-colors"
                  onClick={() => removeModel(model.id)}
                  aria-label={`Remove ${model.name} from comparison`}
                >
                  <X className="h-3.5 w-3.5" />
                </Button>
              </div>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold tracking-tight text-foreground">{cardMeta.coverage.toFixed(1)}%</span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">Coverage</span>
              </div>
              <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                {cardMeta.scoredBenchmarks}/{cardMeta.totalBenchmarks} Benchmarks In Scope
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className={cn("flex items-center gap-1.5", cardMeta.tone)}>
                    <span className={cn("h-1.5 w-1.5 rounded-full", cardMeta.dot)} />
                    {cardMeta.label}
                  </span>
                  <span className="text-muted-foreground/60">{cardMeta.latestAsOfDate ?? "No Date"}</span>
                </div>

                <div className="grid grid-cols-1 gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
                  <span className="rounded-md border border-border/60 bg-muted/20 px-2 py-1">
                    Verified {cardMeta.strongVerificationShare.toFixed(0)}%
                  </span>
                </div>

                <div className="h-1 w-full overflow-hidden rounded-full bg-muted/50">
                  <div
                    className="h-full bg-primary duration-1000 ease-out motion-reduce:duration-0"
                    style={{ width: `${Math.max(8, cardMeta.coverage)}%` }}
                  />
                </div>
              </div>
            </article>
          );
        })}

        {Array.from({ length: Math.max(0, 3 - selectedModels.length) }).map((_, idx) => {
          const slotNum = selectedModels.length + idx + 1;
          const suggestions = latestModels.slice(0, 3);

          return (
            <div
              key={`empty-${idx}`}
              className="flex min-h-[200px] flex-col rounded-2xl border border-dashed border-border/60 bg-muted/5 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">Slot 0{slotNum}</p>
                <Button variant="ghost" size="sm" onClick={() => setSearchOpen(true)} className="h-7 text-[10px] uppercase font-bold tracking-wider px-2 hover:bg-muted text-muted-foreground">
                  <Plus className="mr-1 h-3 w-3" /> Search
                </Button>
              </div>
              {suggestions.length > 0 ? (
                <div className="space-y-2 mt-auto">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/40 mb-3">Suggested Comparisons</p>
                  {suggestions.map(s => (
                    <button
                      key={s.id}
                      onClick={() => addModel(s.id)}
                      className="group flex w-full items-center justify-between rounded-lg border border-border/40 bg-card/50 p-2.5 text-left hover:border-primary/30 hover:bg-muted/50 transition-all"
                    >
                      <div className="min-w-0 flex-1 pr-2">
                        <span className="block truncate text-xs font-bold text-foreground group-hover:text-primary transition-colors">{s.name}</span>
                      </div>
                      <Plus className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex flex-1 items-center justify-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">No suggestions available</p>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {selectedModels.length > 0 && (
        <div className="grid gap-6 lg:grid-cols-2">
          {selectedModels.length >= 2 ? (
            radarBenchmarks.length > 0 ? (
              <div className="rounded-2xl border border-border bg-card overflow-hidden h-[500px]">
                <RadarComparison models={selectedModels} benchmarks={radarBenchmarks} className="h-full w-full" />
              </div>
            ) : (
              <div className="flex h-[500px] items-center justify-center rounded-2xl border border-dashed border-border/60 bg-muted/5 px-8 text-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                No comparable benchmarks in the current scope
              </div>
            )
          ) : (
            <div className="flex h-[500px] items-center justify-center rounded-2xl border border-dashed border-border/60 bg-muted/5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
              Select 2+ models for radar analysis
            </div>
          )}

          <div className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden">
            <div className="border-b border-border/50 bg-muted/10 px-6 py-5">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
                {showSummary ? "Capability Variance" : "Performance Delta"}
              </h2>
              <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                {showSummary ? "Category Normalized Averages" : "Benchmark Comparison"} | {onlySharedBenchmarks ? `Strict ${sharedBenchmarkCount}/${scopedBenchmarks.length}` : "Exploratory"}
              </p>
            </div>

            <div className="flex-1 p-6 overflow-y-auto no-scrollbar max-h-[400px]">
              <div className="space-y-8">
                {showSummary ? (
                  categoryAverages.length === 0 ? (
                    <div className="flex h-full items-center justify-center py-20 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
                      No comparable category data in this scope
                    </div>
                  ) : categoryAverages.map((cat) => (
                    <div key={cat.id} className="space-y-4">
                      <div className="flex items-end justify-between border-b border-border/40 pb-2">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-primary">{cat.name} Avg</span>
                        <span className="font-mono text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest">
                          Evidence {cat.benchmarkCount}/{cat.totalBenchmarkCount}
                        </span>
                      </div>

                      <div className="space-y-3">
                        {cat.scores.map((scoreObj, idx) => {
                          const score = scoreObj.average;
                          if (score === null) return null;
                          const width = `${Math.min(score, 100)}%`;
                          const seriesColors = getSeriesColorClasses(idx);

                          return (
                            <div key={scoreObj.modelId} className="space-y-1.5">
                              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                                <span className="text-muted-foreground truncate max-w-[120px]">{scoreObj.modelName}</span>
                                <span className={cn("tabular-nums", seriesColors.text)}>
                                  {score.toFixed(1)}% {" "}
                                  <span className="text-muted-foreground/70">{scoreObj.availableBenchmarks}/{scoreObj.comparableBenchmarks}</span>
                                </span>
                              </div>
                              <div className="h-1.5 w-full bg-muted/50 rounded-full overflow-hidden">
                                <div
                                  className={cn("h-full ease-out motion-reduce:duration-0", seriesColors.bar)}
                                  style={{ width, transitionDuration: '1000ms' }}
                                />
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))
                ) : (
                  detailedBenchmarks.length === 0 ? (
                    <div className="flex h-full items-center justify-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 py-20">
                      No data matches current filters
                    </div>
                  ) : detailedBenchmarks.map((benchmark) => {
                    const availableModels = selectedModels.filter((model) => hasScore(model, benchmark.id)).length;

                    return (
                      <div key={benchmark.id} className="space-y-4">
                        <div className="flex items-end justify-between border-b border-border/40 pb-2">
                          <span className="text-[11px] font-bold uppercase tracking-widest text-foreground">{benchmark.name}</span>
                          <span className="font-mono text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest">
                            Delta {benchmarkDeltas[benchmark.id]?.toFixed(1) ?? "0.0"} | {availableModels}/{selectedModels.length}
                          </span>
                        </div>

                        <div className="space-y-4">
                          {selectedModels.map((model, idx) => {
                            const scoreEntry = model.scores[benchmark.id];
                            const score = scoreEntry?.score;
                            const seriesColors = getSeriesColorClasses(idx);

                            if (score === null || score === undefined) {
                              return (
                                <div key={model.id} className="space-y-1 opacity-45">
                                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                                    <span className="text-muted-foreground truncate max-w-[140px]" title={model.name}>{model.name}</span>
                                    <span className="font-mono text-muted-foreground">N/A</span>
                                  </div>
                                  <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/60">No reported score</p>
                                </div>
                              );
                            }

                            const width = `${Math.min(normalizeScore(score, benchmark), 100)}%`;
                            const source = scoreEntry.sourceId ? sourceMap.get(scoreEntry.sourceId) : null;
                            const sourceLabel = source?.name ?? "Unknown source";
                            const verificationLabel = getVerificationBadge(scoreEntry.verificationLevel, scoreEntry.verified);

                            return (
                              <div key={model.id} className="space-y-1.5">
                                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                                  <div className="flex items-center gap-2 truncate max-w-[200px]" title={model.name}>
                                    <span className="text-muted-foreground truncate">{model.name}</span>
                                    <span className="rounded border border-border/40 px-1 text-[8px] text-muted-foreground/80">
                                      {verificationLabel}
                                    </span>
                                  </div>
                                  <span className={cn("tabular-nums", seriesColors.text)}>
                                    {score.toFixed(1)}{scoreEntry.sourceId === "artificial-analysis" ? "*" : ""}
                                  </span>
                                </div>

                                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-muted-foreground/65">
                                  <span className="truncate max-w-[62%]" title={sourceLabel}>{sourceLabel}</span>
                                  <span>{scoreEntry.asOfDate ?? "Unknown Date"}</span>
                                </div>

                                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted/50">
                                  <div
                                    className={cn("h-full ease-out motion-reduce:duration-0", seriesColors.bar)}
                                    style={{ width, transitionDuration: "1000ms" }}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedModels.length > 0 && (
        <div className="fixed inset-x-4 bottom-4 z-40 rounded-full border border-border/40 bg-card/80 backdrop-blur-md px-4 py-2 shadow-2xl md:hidden">
          <div className="flex items-center justify-between gap-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              {selectedModels.length} Models
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSummary((prev) => !prev)}
                className="h-7 rounded-full px-3 text-[10px] font-bold uppercase tracking-wider"
              >
                {showSummary ? "Detailed" : "Summary"}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearModels}
                className="h-7 rounded-full px-3 text-[10px] font-bold uppercase tracking-wider text-destructive"
              >
                Clear
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
