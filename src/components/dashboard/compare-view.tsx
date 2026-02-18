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

          {!showSummary && (
            <div className="h-4 w-px bg-border/40 mx-2" />
          )}

          {!showSummary && (
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
                onClick={() => setOnlySharedBenchmarks((prev) => !prev)}
                className={cn(
                  "h-9 rounded-full border-border/60 px-4 text-[11px] font-bold uppercase tracking-wider transition-all",
                  onlySharedBenchmarks ? "bg-primary/5 text-primary border-primary/20" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {onlySharedBenchmarks ? "Shared Only" : "All Results"}
              </Button>
            </div>
          )}
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

          <Popover>
            <PopoverTrigger asChild>
              <Button
                size="sm"
                className="h-9 rounded-full px-5 text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-primary/20"
              >
                <Plus className="mr-1.5 h-3.5 w-3.5" />
                Add Model
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] overflow-hidden rounded-2xl border-border bg-card p-0 shadow-2xl" align="end">
              <Command className="bg-transparent font-mono">
                <CommandInput placeholder="Search models..." className="h-11 border-b border-border/50 text-xs" />
                <CommandList className="max-h-[320px] overflow-y-auto no-scrollbar">
                  <CommandEmpty className="p-6 text-center text-[10px] uppercase tracking-widest text-muted-foreground">No models found</CommandEmpty>
                  <CommandGroup heading="Available Registry" className="p-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
                    {selectableModels.map((model) => {
                      const providerTheme = getProviderTheme(model.provider);
                      return (
                        <CommandItem
                          key={model.id}
                          value={`${model.name} ${model.provider}`}
                          onSelect={() => addModel(model.id)}
                          disabled={compareIds.includes(model.id) || compareIds.length >= 3}
                          className="mb-1 cursor-pointer rounded-xl px-3 py-2.5 transition-colors aria-selected:bg-primary/5 aria-selected:text-primary"
                        >
                           <div className="flex w-full items-center justify-between gap-3">
                             <div className="min-w-0">
                               <span className="block truncate text-sm font-bold tracking-tight" title={model.name}>{model.name}</span>
                               <span className={cn("block truncate text-[10px] font-bold uppercase tracking-wider opacity-70", providerTheme.text)}>{model.provider}</span>
                             </div>
                            {compareIds.includes(model.id) && (
                              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">Added</span>
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

      <section className="grid gap-4 lg:grid-cols-3">
        {selectedModels.map((model, idx) => {
          const providerTheme = getProviderTheme(model.provider);
          const cardMeta = getModelCardMeta(model);

          return (
            <article key={model.id} className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-all hover:border-primary/30">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 space-y-1">
                  <p className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest">Model 0{idx + 1}</p>
                  <h3 className="truncate text-2xl font-display font-bold tracking-tight text-foreground" title={model.name}>{model.name}</h3>
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
                >
                  <X className="h-3.5 w-3.5" />
                </Button>
              </div>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold tracking-tight text-foreground">{cardMeta.confidence.toFixed(1)}%</span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">Confidence</span>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className={cn("flex items-center gap-1.5", cardMeta.tone)}>
                    <span className={cn("h-1.5 w-1.5 rounded-full", cardMeta.dot)} />
                    {cardMeta.label}
                  </span>
                  <span className="text-muted-foreground/60">{model.releaseDate}</span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-muted/50">
                  <div className="h-full bg-primary duration-1000 ease-out motion-reduce:duration-0" style={{ width: `${Math.max(8, cardMeta.confidence)}%` }} />
                </div>
              </div>
            </article>
          );
        })}

        {Array.from({ length: Math.max(0, 3 - selectedModels.length) }).map((_, idx) => (
          <div key={`empty-${idx}`} className="flex min-h-[200px] flex-col items-center justify-center rounded-2xl border border-dashed border-border/60 bg-muted/5 p-6 text-muted-foreground/40 group cursor-pointer hover:bg-muted/10 transition-all">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/20 mb-4 group-hover:scale-110 transition-transform">
              <Plus className="h-5 w-5" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Add Slot 0{selectedModels.length + idx + 1}</p>
          </div>
        ))}
      </section>

      {selectedModels.length > 0 && (
        <div className="grid gap-6 lg:grid-cols-2">
          {selectedModels.length >= 2 ? (
            <div className="rounded-2xl border border-border bg-card overflow-hidden h-[500px]">
              <RadarComparison models={selectedModels} benchmarks={radarBenchmarks} className="h-full w-full" />
            </div>
          ) : (
            <div className="flex h-[500px] items-center justify-center rounded-2xl border border-dashed border-border/60 bg-muted/5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
              Select 2+ models for radar analysis
            </div>
          )}

          <div className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden">
            <div className="border-b border-border/50 bg-muted/10 px-6 py-5">
              <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                {showSummary ? "Capability Variance" : "Performance Delta"}
              </h3>
              <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                {showSummary ? "Category Normalized Averages" : "Benchmark Comparison"}
              </p>
            </div>
            
            <div className="flex-1 p-6 overflow-y-auto no-scrollbar max-h-[400px]">
              <div className="space-y-8">
                {showSummary ? (
                  categoryAverages.map((cat) => (
                    <div key={cat.id} className="space-y-4">
                      <div className="flex items-end justify-between border-b border-border/40 pb-2">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-primary">{cat.name} Avg</span>
                        <span className="font-mono text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest">Scale 100%</span>
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
                                <span className={cn("tabular-nums", seriesColors.text)}>{score.toFixed(1)}%</span>
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
                  ) : detailedBenchmarks.map((benchmark) => (
                    <div key={benchmark.id} className="space-y-4">
                      <div className="flex items-end justify-between border-b border-border/40 pb-2">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-foreground">{benchmark.name}</span>
                        <span className="font-mono text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest">Delta {benchmarkDeltas[benchmark.id]?.toFixed(1) ?? "0.0"}</span>
                      </div>
                      
                      <div className="space-y-4">
                        {selectedModels.map((model, idx) => {
                          const scoreEntry = model.scores[benchmark.id];
                          const score = scoreEntry?.score;
                          const seriesColors = getSeriesColorClasses(idx);

                          if (score === null || score === undefined) {
                            return (
                              <div key={model.id} className="flex items-center justify-between opacity-30">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground truncate max-w-[120px]" title={model.name}>{model.name}</span>
                                <span className="text-[10px] font-mono font-bold text-muted-foreground">--.-</span>
                              </div>
                            );
                          }

                          const width = `${Math.min(normalizeScore(score, benchmark), 100)}%`;
                          return (
                            <div key={model.id} className="space-y-1.5">
                              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                                <div className="flex items-center gap-2 truncate max-w-[180px]" title={model.name}>
                                  <span className="text-muted-foreground truncate">{model.name}</span>
                                  <span className="text-muted-foreground/40 px-1 border border-border/40 rounded text-[8px]">
                                    {scoreEntry.verificationLevel === 'third_party' ? '3rd' : 'Prov'}
                                  </span>
                                </div>
                                <span className={cn("tabular-nums", seriesColors.text)}>
                                  {score.toFixed(1)}{scoreEntry.sourceId === "artificial-analysis" ? "*" : ""}
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
