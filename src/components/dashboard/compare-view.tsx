"use client";

import { useQueryState, parseAsArrayOf, parseAsString } from "nuqs";
import { Model, Benchmark } from "@/types";
import { Button } from "@/components/ui/button";
import { X, Plus, Minimize2, BarChart3, LayoutGrid, List, ExternalLink, Share2, FlaskConical } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState, useMemo, useEffect } from "react";
import { cn } from "@/lib/utils";
import { normalizeScore } from "@/lib/stats";
import { sources } from "@/data/sources";
import { ALL_CATEGORY_SLUG, categoryToSlug, slugToCategory } from "@/lib/categories";
import dynamic from "next/dynamic";
import { getProviderTheme } from "@/lib/provider-identity";

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

const sourceMap = new Map(sources.map((source) => [source.id, source]));

function getHostLabel(url?: string) {
  if (!url) return "Unknown";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "Unknown";
  }
}

function getVerificationLabel(level?: string, verified?: boolean) {
  if (level === "third_party") return "Third-party";
  if (level === "provider") return "Provider";
  if (level === "community") return "Community";
  if (level === "estimated") return "Estimated";
  return verified ? "Verified" : "Unverified";
}

function getSeriesColorClasses(idx: number) {
  if (idx === 0) return { bar: "bg-chart-1", text: "text-chart-1" };
  if (idx === 1) return { bar: "bg-chart-2", text: "text-chart-2" };
  return { bar: "bg-chart-3", text: "text-chart-3" };
}

interface CompareViewProps {
  modelOptions: {
    id: string;
    name: string;
    provider: string;
  }[];
  initialSelectedModels: Model[];
  benchmarks: Benchmark[];
}

export function CompareView({ modelOptions, initialSelectedModels, benchmarks }: CompareViewProps) {
  const [showSummary, setShowSummary] = useState(true);
  const [onlySharedBenchmarks, setOnlySharedBenchmarks] = useState(true);
  const [copied, setCopied] = useState(false);
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

  const benchmarkCategoryFilter = useMemo(() => {
    const category = slugToCategory(categorySlug);
    return category ?? ALL_CATEGORY_SLUG;
  }, [categorySlug]);

  const categoryAverages = useMemo(() => {
    if (!showSummary) return [];

    return categories.map(category => {
      const categoryBenchmarks = benchmarks.filter(b => b.category === category);
      const modelScores = selectedModels.map(model => {
        const scores = categoryBenchmarks
          .map(b => {
            const scoreObj = model.scores[b.id];
            if (!scoreObj || scoreObj.score === null) return null;
            return normalizeScore(scoreObj.score, b);
          })
          .filter((s): s is number => s !== null);
        
        return {
          modelId: model.id,
          modelName: model.name,
          average: scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : null
        };
      });

      return {
        id: category.toLowerCase().replace(/\s+/g, '-'),
        name: category,
        description: `Aggregate performance across all ${category} evaluations.`,
        scores: modelScores
      };
    });
  }, [benchmarks, categories, selectedModels, showSummary]);

  const detailedBenchmarks = useMemo(() => {
    if (showSummary) return [];

    return benchmarks
      .filter((benchmark) => benchmarkCategoryFilter === ALL_CATEGORY_SLUG || benchmark.category === benchmarkCategoryFilter)
      .filter((benchmark) => {
        const availableCount = selectedModels.filter((model) => {
          const score = model.scores[benchmark.id]?.score;
          return score !== null && score !== undefined;
        }).length;

        if (availableCount === 0) return false;
        if (!onlySharedBenchmarks) return true;
        if (selectedModels.length <= 1) return true;
        return availableCount === selectedModels.length;
      })
      .sort((a, b) => {
        if (a.category === b.category) return a.name.localeCompare(b.name);
        return a.category.localeCompare(b.category);
      });
  }, [benchmarkCategoryFilter, benchmarks, onlySharedBenchmarks, selectedModels, showSummary]);

  const benchmarkAvailabilitySummary = useMemo(() => {
    if (showSummary) return null;

    const filtered = benchmarks.filter(
      (benchmark) => benchmarkCategoryFilter === ALL_CATEGORY_SLUG || benchmark.category === benchmarkCategoryFilter
    );

    let shared = 0;
    let partial = 0;
    let empty = 0;

    filtered.forEach((benchmark) => {
      const availableCount = selectedModels.filter((model) => {
        const score = model.scores[benchmark.id]?.score;
        return score !== null && score !== undefined;
      }).length;

      if (availableCount === 0) {
        empty += 1;
      } else if (selectedModels.length <= 1 || availableCount === selectedModels.length) {
        shared += 1;
      } else {
        partial += 1;
      }
    });

    return {
      total: filtered.length,
      shared,
      partial,
      empty,
    };
  }, [benchmarkCategoryFilter, benchmarks, selectedModels, showSummary]);

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
    if (benchmarkCategoryFilter !== ALL_CATEGORY_SLUG) {
      return benchmarks.filter((benchmark) => benchmark.category === benchmarkCategoryFilter);
    }

    const preferredCategories = [
      "Reasoning",
      "Knowledge",
      "Math",
      "Coding",
      "Multimodal",
      "Agentic",
      "Real-world",
    ];

    const selectedCategories = preferredCategories.filter((category) =>
      benchmarks.some((benchmark) => benchmark.category === category)
    ).slice(0, 6);

    if (selectedCategories.length === 0) return benchmarks;

    return benchmarks.filter((benchmark) => selectedCategories.includes(benchmark.category));
  }, [benchmarkCategoryFilter, benchmarks]);

  const removeModel = (id: string) => {
    setCompareIds((prev) => prev?.filter((i) => i !== id) || []);
  };

  const clearModels = () => setCompareIds([]);

  const addModel = (id: string) => {
    if (compareIds.includes(id)) return;
    if (compareIds.length >= 3) return; 
    setCompareIds((prev) => [...(prev || []), id]);
  };

  const getModelCardMeta = (model: Model) => {
    const entries = Object.values(model.scores);
    const normalized = benchmarks
      .map((benchmark) => {
        const score = model.scores[benchmark.id]?.score;
        if (score === null || score === undefined) return null;
        return normalizeScore(score, benchmark);
      })
      .filter((score): score is number => score !== null);

    const baseScore = normalized.length > 0
      ? normalized.reduce((sum, value) => sum + value, 0) / normalized.length
      : 0;

    const confidence = Number(Math.max(0, Math.min(100, 50 + baseScore * 0.5)).toFixed(1));

    const hasProviderOrThirdParty = entries.some((entry) =>
      entry.verificationLevel === "provider" || entry.verificationLevel === "third_party"
    );
    const hasCommunity = entries.some((entry) => entry.verificationLevel === "community");

    if (hasProviderOrThirdParty) {
      return {
        label: "Lab Verified",
        tone: "text-emerald-700 dark:text-emerald-400",
        dot: "bg-emerald-500",
        confidence,
      };
    }

    if (hasCommunity) {
      return {
        label: "Community Report",
        tone: "text-amber-700 dark:text-amber-400",
        dot: "bg-amber-500",
        confidence,
      };
    }

    return {
      label: "Unverified",
      tone: "text-muted-foreground",
      dot: "bg-muted-foreground",
      confidence,
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
    <div className="animate-in fade-in duration-700 ease-out space-y-6 md:space-y-7">
      <section className="surface-panel relative overflow-hidden rounded-2xl px-5 py-6 sm:px-7 sm:py-7">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_-10%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_48%)] dark:bg-[radial-gradient(circle_at_84%_-10%,color-mix(in_oklab,var(--primary)_28%,transparent),transparent_48%)]" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="label-eyebrow">Registry / Benchmarks / Comparison Tool</p>
            <h1 className="text-balance text-4xl font-display font-bold tracking-[-0.03em] text-foreground md:text-6xl">
              Model Comparison
            </h1>
            <p className="max-w-3xl text-sm text-muted-foreground md:text-base md:leading-normal">
              Analyzing performance deltas across reasoning, coding, and knowledge retention benchmarks.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              onClick={handleShareView}
              className="h-11 rounded-lg border-border bg-card px-5 text-sm text-muted-foreground hover:text-foreground"
            >
              <Share2 className="mr-2 h-4 w-4" aria-hidden="true" />
              {copied ? "Copied" : "Share View"}
            </Button>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="h-11 rounded-lg px-5 text-sm shadow-[0_14px_28px_-20px_var(--color-primary)]"
                >
                  <Plus className="mr-1.5 h-4 w-4" aria-hidden="true" />
                  Add Model
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] overflow-hidden rounded-lg border-border bg-background p-0 shadow-2xl" align="end">
                <Command className="bg-transparent text-foreground font-mono">
                  <CommandInput placeholder="Search models..." className="h-11 border-b border-border text-sm" />
                  <CommandList className="max-h-[320px] overflow-y-auto">
                    <CommandEmpty className="p-6 text-center text-xs text-muted-foreground">No models found</CommandEmpty>
                    <CommandGroup heading="Available Models" className="p-2 text-[11px] tracking-[0.1em] text-muted-foreground/70">
                      {selectableModels.map((model) => {
                        const providerTheme = getProviderTheme(model.provider);

                        return (
                          <CommandItem
                            key={model.id}
                            value={`${model.name} ${model.provider}`}
                            onSelect={() => addModel(model.id)}
                            disabled={compareIds.includes(model.id) || compareIds.length >= 3}
                            className="mb-1 cursor-pointer rounded-md px-3 py-2.5 text-sm transition-colors aria-selected:bg-primary/10 aria-selected:text-primary"
                          >
                            <div className="flex w-full items-center justify-between gap-3">
                              <div className="min-w-0">
                                <span className="block truncate">{model.name}</span>
                                <span className={cn("block truncate text-xs", providerTheme.text)}>{model.provider}</span>
                              </div>
                              {compareIds.includes(model.id) && (
                                <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[11px] text-primary">Added</span>
                              )}
                              {!compareIds.includes(model.id) && compareIds.length >= 3 && (
                                <span className="rounded bg-muted px-1.5 py-0.5 text-[11px] text-muted-foreground">Max</span>
                              )}
                            </div>
                          </CommandItem>
                        );
                      })}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </section>

      <section className="grid gap-3 lg:grid-cols-3">
        {selectedModels.map((model, idx) => {
          const providerTheme = getProviderTheme(model.provider);
          const cardMeta = getModelCardMeta(model);

          return (
            <article key={model.id} className="surface-card rounded-2xl p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-[1.75rem] font-display font-bold tracking-tight text-foreground">{model.name}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="font-mono text-[11px] text-primary/70">#{idx + 1}</span>
                    <span className={cn("rounded-sm px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em]", providerTheme.border, providerTheme.bg, providerTheme.text)}>
                      {model.provider}
                    </span>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full p-0 hover:bg-destructive/10 hover:text-destructive"
                  onClick={() => removeModel(model.id)}
                  aria-label={`Remove ${model.name} from comparison`}
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>

              <div className="mt-3 flex items-end gap-2">
                <span className="font-display text-5xl font-bold tracking-[-0.03em] text-foreground">{cardMeta.confidence.toFixed(1)}%</span>
                <span className="pb-1 font-mono text-sm tracking-wide text-primary">CONFIDENCE</span>
              </div>

              <div className="mt-3 flex items-center justify-between text-sm font-mono">
                <span className={cn("inline-flex items-center gap-1.5", cardMeta.tone)}>
                  <span className={cn("h-1.5 w-1.5 rounded-full", cardMeta.dot)} />
                  {cardMeta.label}
                </span>
                <span className="text-muted-foreground">{model.releaseDate}</span>
              </div>

              <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full bg-primary" style={{ width: `${Math.max(8, cardMeta.confidence)}%` }} />
              </div>

              <p className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                Hash · {`sha256:${model.id.slice(0, 6)}...${model.id.slice(-3)}`}
              </p>
            </article>
          );
        })}

        {Array.from({ length: Math.max(0, 3 - selectedModels.length) }).map((_, idx) => (
          <div key={`empty-${idx}`} className="surface-card flex min-h-[216px] flex-col items-center justify-center rounded-2xl border-dashed text-muted-foreground/70">
            {idx === 0 ? <FlaskConical className="mb-3 h-9 w-9" aria-hidden="true" /> : <Minimize2 className="mb-3 h-9 w-9" aria-hidden="true" />}
            <p className="font-mono text-sm tracking-[0.1em]">Add Model to Compare</p>
          </div>
        ))}
      </section>

      {selectedModels.length > 0 && (
        <div className="animate-in slide-in-from-bottom-8 fade-in fill-mode-forwards grid gap-5 duration-700 md:grid-cols-1 lg:grid-cols-2">
          {/* Chart */}
          {selectedModels.length >= 2 ? (
            <RadarComparison models={selectedModels} benchmarks={radarBenchmarks} className="h-full min-h-[500px]" />
          ) : (
            <Card className="surface-card flex h-full min-h-[500px] items-center justify-center">
              <span className="text-sm font-mono tracking-[0.1em] text-muted-foreground">
                Select 2+ models to render radar
              </span>
            </Card>
          )}

          {/* Diff Table */}
          <Card className="surface-card relative flex h-full flex-col overflow-hidden rounded-xl">
            <CardHeader className="border-b border-border bg-card/35 pb-4">
              <div className="flex items-center justify-between">
                <div>
                    <CardTitle className="flex items-center gap-2 font-display text-xl tracking-tight text-foreground">
                        <BarChart3 className="h-5 w-5 text-primary" aria-hidden="true" />
                        {showSummary ? "Capability Variance" : "Performance Delta"}
                    </CardTitle>
                    <CardDescription className="mt-1 text-sm font-mono tracking-[0.1em] text-muted-foreground">
                        {showSummary ? "Category Normalized Averages" : "Benchmark-by-Benchmark Comparison"}
                    </CardDescription>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowSummary(!showSummary)}
                        className={cn("h-8 px-3 text-xs font-medium", showSummary && "border-primary/30 bg-primary/10 text-primary")}
                        title={showSummary ? "Switch to Detailed Benchmarks" : "Switch to Category Averages"}
                    >
                        {showSummary ? <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" /> : <List className="h-3.5 w-3.5" aria-hidden="true" />}
                        {showSummary ? "Summary" : "Detailed"}
                    </Button>
                    <div className="flex gap-1 ml-2">
                        <div className="h-1 w-1 rounded-full bg-primary/30" />
                        <div className="h-1 w-1 rounded-full bg-primary/55" />
                        <div className="h-1 w-1 rounded-full bg-primary/80" />
                    </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 px-5 pb-5 pt-5">
              {!showSummary && (
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <select
                    value={categorySlug}
                    onChange={(event) => setCategorySlug(event.target.value)}
                    aria-label="Filter benchmark category"
                    className="h-9 rounded-md border border-border bg-background px-3 text-sm text-foreground"
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
                    onClick={() => setOnlySharedBenchmarks((prev) => !prev)}
                    className={cn(
                      "h-9 border-border px-3 text-xs font-medium",
                      onlySharedBenchmarks && "border-primary/30 text-primary bg-primary/5"
                    )}
                  >
                    {onlySharedBenchmarks ? "Shared Only" : "Include Partial"}
                  </Button>
                  {benchmarkAvailabilitySummary && (
                    <span className="chip-pill px-2 py-1 text-[11px] font-mono tracking-wide text-muted-foreground">
                      Shared {benchmarkAvailabilitySummary.shared} · Partial {benchmarkAvailabilitySummary.partial} · Empty {benchmarkAvailabilitySummary.empty}
                    </span>
                  )}
                </div>
              )}

              <div className="space-y-6">
                {showSummary ? (
                  categoryAverages.map((cat) => (
                    <div key={cat.id} className="group space-y-2.5">
                      <Tooltip delayDuration={200}>
                        <TooltipTrigger asChild>
                          <div className="mb-2 flex cursor-help items-end justify-between border-b border-border pb-2 text-sm font-mono">
                              <span className="font-semibold tracking-[0.08em] text-primary transition-colors group-hover:text-primary">{cat.name} Avg</span>
                              <span className="text-[11px] text-muted-foreground/65">Max 100%</span>
                           </div>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-[240px] border-border bg-card p-3 text-card-foreground shadow-sm">
                          <div className="space-y-1.5">
                            <p className="text-xs font-semibold text-primary">{cat.name} Capability</p>
                            <p className="text-[11px] font-mono leading-relaxed opacity-85">
                              {cat.description}
                            </p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                      
                      <div className="space-y-1.5">
                          {cat.scores.map((scoreObj, idx) => {
                              const score = scoreObj.average;
                              if (score === null) return null;
                              const width = `${Math.min(score, 100)}%`;
                              
                              const seriesColors = getSeriesColorClasses(idx);
                               
                              return (
                                  <div key={scoreObj.modelId} className="relative flex items-center gap-3 text-sm font-mono">
                                      <span className="w-24 truncate text-muted-foreground">{scoreObj.modelName}</span>
                                      <div className="flex-1 h-2 bg-secondary/50 rounded-full overflow-hidden relative">
                                          <div 
                                              className={cn("h-full rounded-full relative transition-all duration-1000 ease-out", seriesColors.bar)} 
                                              style={{ width }} 
                                          >
                                               <div className="absolute bottom-0 right-0 top-0 w-2 bg-white/15" />
                                          </div>
                                      </div>
                                       <span className={cn("w-10 text-right font-bold tabular-nums", seriesColors.text)}>
                                          {score.toFixed(1)}%
                                      </span>
                                  </div>
                              )
                          })}
                      </div>
                    </div>
                  ))
                ) : (
                  detailedBenchmarks.length === 0 ? (
                    <div className="text-sm font-mono uppercase tracking-[0.1em] text-muted-foreground">
                      No benchmarks match current filters.
                    </div>
                  ) : detailedBenchmarks.map((benchmark) => (
                    <div key={benchmark.id} className="group space-y-2.5">
                      <Tooltip delayDuration={200}>
                        <TooltipTrigger asChild>
                           <div className="mb-2 flex cursor-help items-end justify-between border-b border-border pb-2 text-sm font-mono">
                                <span className="font-semibold tracking-[0.08em] text-muted-foreground transition-colors group-hover:text-foreground">{benchmark.name}</span>
                                <span className="text-[11px] text-muted-foreground/65">Delta {benchmarkDeltas[benchmark.id]?.toFixed(1) ?? "0.0"}</span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-[240px] border-border bg-card p-3 text-card-foreground shadow-sm">
                          <div className="space-y-1.5">
                            <p className="text-xs font-semibold text-primary">{benchmark.name}</p>
                            <p className="text-[11px] font-mono leading-relaxed opacity-85">
                              {benchmark.description}
                            </p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                      
                      <div className="space-y-1.5">
                            {selectedModels.map((model, idx) => {
                              const scoreEntry = model.scores[benchmark.id];
                              const score = scoreEntry?.score;
                              if (score === null || score === undefined) {
                                return (
                                  <div key={model.id} className="relative flex items-center gap-4 text-sm font-mono opacity-50">
                                    <span className="w-24 truncate text-muted-foreground font-medium">{model.name}</span>
                                    <div className="flex-1 h-2 bg-secondary/40 rounded-full" />
                                    <span className="w-10 text-right font-bold tabular-nums text-muted-foreground">--</span>
                                  </div>
                                );
                              }

                              const width = `${Math.min(normalizeScore(score, benchmark), 100)}%`;
                              const source = scoreEntry?.sourceId ? sourceMap.get(scoreEntry.sourceId) : undefined;
                              const sourceUrl = scoreEntry?.sourceUrl ?? source?.url ?? benchmark.link;
                              const sourceLabel = source?.name ?? getHostLabel(sourceUrl);
                              const verificationLabel = getVerificationLabel(scoreEntry?.verificationLevel, scoreEntry?.verified);
                              const isArtificialAnalysis = scoreEntry?.sourceId === "artificial-analysis";
                              
                              // Using our refined chart palette
                              const seriesColors = getSeriesColorClasses(idx);
                              
                              return (
                                  <div key={model.id} className="relative flex items-center gap-4 text-sm font-mono">
                                      <div className="w-24">
                                        <span className="truncate text-muted-foreground font-medium block">{model.name}</span>
                                        <span className="block truncate text-[11px] text-muted-foreground/75">{verificationLabel}</span>
                                      </div>
                                      <div className="flex-1 h-2 bg-secondary/50 rounded-full overflow-hidden relative">
                                          <div 
                                              className={cn("h-full rounded-full relative transition-all duration-1000 ease-out", seriesColors.bar)} 
                                              style={{ width }} 
                                          >
                                               <div className="absolute bottom-0 right-0 top-0 w-2 bg-white/15" />
                                          </div>
                                      </div>
                                      <div className="w-16 text-right">
                                        <span className={cn("font-bold tabular-nums", seriesColors.text)}>
                                          {score.toFixed(1)}{isArtificialAnalysis ? "*" : ""}
                                        </span>
                                        <span className="block truncate text-[11px] text-muted-foreground/75">
                                          {scoreEntry?.asOfDate ?? "Unknown"}
                                        </span>
                                        {sourceUrl && (
                                          <a
                                            href={sourceUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1 text-[11px] font-mono text-primary/90 hover:underline"
                                          >
                                            {sourceLabel} <ExternalLink className="h-3 w-3" />
                                          </a>
                                        )}
                                      </div>
                                   </div>
                                )
                           })}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedModels.length > 0 && (
        <div className="fixed inset-x-4 bottom-4 z-40 rounded-lg border border-border bg-background px-3 py-2 shadow-sm md:hidden">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-mono tracking-wide text-muted-foreground">
              {selectedModels.length} model{selectedModels.length > 1 ? "s" : ""} selected
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSummary((prev) => !prev)}
                className="h-8 px-2 text-xs"
              >
                {showSummary ? "Detailed" : "Summary"}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearModels}
                className="h-8 px-2 text-xs text-muted-foreground"
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
