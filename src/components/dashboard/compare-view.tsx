"use client";

import { useQueryState, parseAsArrayOf, parseAsString } from "nuqs";
import { Model, Benchmark } from "@/types";
import { Button } from "@/components/ui/button";
import { X, Plus, Minimize2, Grid, BarChart3, Database, LayoutGrid, List, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { normalizeScore } from "@/lib/stats";
import { sources } from "@/data/sources";
import { ALL_CATEGORY_SLUG, categoryToSlug, slugToCategory } from "@/lib/categories";
import dynamic from "next/dynamic";

const RadarComparison = dynamic(
  () => import("./radar-chart").then((mod) => mod.RadarComparison),
  {
    ssr: false,
    loading: () => (
      <Card className="h-full min-h-[500px] bg-card/50 border-border flex items-center justify-center">
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Loading chart...</span>
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

interface CompareViewProps {
  allModels: Model[];
  benchmarks: Benchmark[];
}

export function CompareView({ allModels, benchmarks }: CompareViewProps) {
  const [showSummary, setShowSummary] = useState(true);
  const [onlySharedBenchmarks, setOnlySharedBenchmarks] = useState(true);
  const [compareIds, setCompareIds] = useQueryState(
    "models",
    parseAsArrayOf(parseAsString).withDefault([])
  );
  const [categorySlug, setCategorySlug] = useQueryState(
    "category",
    parseAsString.withDefault(ALL_CATEGORY_SLUG)
  );

  const selectedModels = useMemo(
    () => allModels.filter((model) => compareIds.includes(model.id)),
    [allModels, compareIds]
  );

  const categories = useMemo(() => 
    Array.from(new Set(benchmarks.map(b => b.category))),
    [benchmarks]
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
    if (benchmarkCategoryFilter === ALL_CATEGORY_SLUG) return benchmarks;
    return benchmarks.filter((benchmark) => benchmark.category === benchmarkCategoryFilter);
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

  return (
    <div className="space-y-12 animate-in fade-in duration-700 ease-out">
      {/* Header / Controls */}
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between border-b border-border pb-8 relative group">
        <div className="space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-mono text-primary uppercase tracking-wider mb-2">
             <Database className="w-3 h-3" />
             Comparison Engine
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground">
            Model Analysis
          </h1>
          <p className="text-muted-foreground font-mono text-sm tracking-wide flex items-center gap-3">
            <span className={cn("w-2 h-2 rounded-full", selectedModels.length > 0 ? "bg-emerald-500 animate-pulse" : "bg-muted")}></span>
            {selectedModels.length === 0 
                ? "Status: Awaiting Selection" 
                : `Active Targets: ${selectedModels.length}/3`
            }
          </p>
        </div>
        
        <div className="flex items-center gap-4 relative z-10">
            {/* Model Selector Popover */}
            <Popover>
            <PopoverTrigger asChild>
                <Button 
                    variant="outline" 
                    className="border-primary/30 hover:border-primary text-primary hover:bg-primary/10 font-mono tracking-wider h-11 px-6 uppercase bg-background transition-all shadow-[0_0_15px_-5px_var(--color-primary)] hover:shadow-[0_0_20px_-5px_var(--color-primary)]"
                >
                <Plus className="mr-2 h-4 w-4" /> Add System
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-[280px] bg-background border-border shadow-2xl rounded-lg overflow-hidden" align="end">
                <Command className="bg-transparent text-foreground font-mono">
                <CommandInput placeholder="Search Database..." className="font-mono text-xs uppercase tracking-widest border-b border-border h-12" />
                <CommandList className="max-h-[300px] overflow-y-auto custom-scrollbar">
                    <CommandEmpty className="p-6 text-xs font-mono text-muted-foreground text-center">No Systems Found</CommandEmpty>
                    <CommandGroup heading="Available Models" className="p-2 text-muted-foreground/70 text-[10px] uppercase tracking-wider">
                    {allModels.map((model) => (
                        <CommandItem
                        key={model.id}
                        value={model.name}
                        onSelect={() => addModel(model.id)}
                        disabled={compareIds.includes(model.id)}
                        className="font-mono text-xs uppercase tracking-wider py-2.5 px-3 aria-selected:bg-primary/10 aria-selected:text-primary cursor-pointer transition-colors rounded-md mb-1"
                        >
                        <div className="flex items-center justify-between w-full">
                            <span>{model.name}</span>
                            {compareIds.includes(model.id) && (
                                <span className="text-[9px] bg-primary/20 text-primary px-1.5 py-0.5 rounded ml-2">LOCKED</span>
                            )}
                        </div>
                        </CommandItem>
                    ))}
                    </CommandGroup>
                </CommandList>
                </Command>
            </PopoverContent>
            </Popover>
        </div>
        
        {/* Background Decorative Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>

      {/* Selected Tags Area */}
      <div className="min-h-[60px] flex flex-wrap gap-4 items-center p-4 md:p-6 bg-card/30 border border-dashed border-border rounded-xl relative transition-all duration-300 hover:border-primary/20 hover:bg-card/50 md:sticky md:top-auto sticky top-20 z-20">
        <div className="absolute top-0 right-0 p-3 opacity-20">
            <Grid className="w-4 h-4 text-foreground" />
        </div>
        
        {selectedModels.length === 0 && (
            <div className="w-full flex flex-col items-center justify-center py-8 text-muted-foreground/40 gap-3">
                <Minimize2 className="w-8 h-8 opacity-50" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] animate-pulse">
                    Select Systems to Initialize Comparator
                </span>
            </div>
        )}
        
        {selectedModels.map((model, idx) => (
          <Badge 
            key={model.id} 
            variant="outline" 
            className="pl-3 pr-2 py-2 text-xs bg-background border-primary/20 text-foreground font-mono tracking-wider uppercase group hover:border-primary/50 transition-all shadow-sm hover:shadow-md rounded-md flex items-center gap-2"
          >
            <span className="text-[10px] text-primary/70 font-bold mr-1">0{idx + 1}</span>
            <span className="font-bold">{model.name}</span>
            <div className="w-px h-3 bg-border mx-1" />
            <Button
              variant="ghost"
              size="icon"
              className="h-4 w-4 p-0 hover:bg-destructive/20 hover:text-destructive rounded-full transition-colors"
              onClick={() => removeModel(model.id)}
            >
              <X className="h-3 w-3" />
            </Button>
          </Badge>
        ))}
      </div>

      {selectedModels.length > 0 && (
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 animate-in slide-in-from-bottom-8 duration-700 fade-in fill-mode-forwards">
          {/* Chart */}
          {selectedModels.length >= 2 ? (
            <RadarComparison models={selectedModels} benchmarks={radarBenchmarks} className="h-full min-h-[500px]" />
          ) : (
            <Card className="h-full min-h-[500px] bg-card/50 border-border flex items-center justify-center">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Select 2+ models to render radar
              </span>
            </Card>
          )}

          {/* Diff Table */}
          <Card className="bg-card/50 border-border relative overflow-hidden rounded-xl shadow-lg backdrop-blur-sm h-full flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <CardHeader className="border-b border-border bg-card/30 pb-6">
              <div className="flex items-center justify-between">
                <div>
                    <CardTitle className="font-display text-xl tracking-tight text-foreground flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-primary" /> 
                        {showSummary ? "Capability Variance" : "Performance Delta"}
                    </CardTitle>
                    <CardDescription className="font-mono text-xs tracking-widest text-muted-foreground uppercase mt-1">
                        {showSummary ? "Category Normalized Averages" : "Benchmark-by-Benchmark Comparison"}
                    </CardDescription>
                </div>
                <div className="flex items-center gap-3">
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => setShowSummary(!showSummary)}
                        className={cn("h-8 w-8 rounded-md border border-white/5", showSummary && "text-primary border-primary/20 bg-primary/5")}
                        title={showSummary ? "Switch to Detailed Benchmarks" : "Switch to Category Averages"}
                    >
                        {showSummary ? <LayoutGrid className="w-4 h-4" /> : <List className="w-4 h-4" />}
                    </Button>
                    <div className="flex gap-1 ml-2">
                        {[1,2,3].map(i => <div key={i} className={`w-1 h-1 rounded-full bg-primary/${i*30}`} />)}
                    </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-8 px-6 flex-1">
              {!showSummary && (
                <div className="mb-6 flex items-center gap-3 flex-wrap">
                  <select
                    value={categorySlug}
                    onChange={(event) => setCategorySlug(event.target.value)}
                    className="h-9 rounded-md border border-white/10 bg-background/70 px-3 text-[11px] font-mono uppercase tracking-wider text-muted-foreground"
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
                      "h-9 px-3 text-[10px] font-mono uppercase tracking-wider border-white/10",
                      onlySharedBenchmarks && "border-primary/30 text-primary bg-primary/5"
                    )}
                  >
                    {onlySharedBenchmarks ? "Shared Only" : "Include Partial"}
                  </Button>
                </div>
              )}

              <div className="space-y-8">
                {showSummary ? (
                  categoryAverages.map((cat) => (
                    <div key={cat.id} className="space-y-3 group">
                      <Tooltip delayDuration={200}>
                        <TooltipTrigger asChild>
                          <div className="flex justify-between items-end text-xs font-mono border-b border-border pb-2 mb-2 cursor-help">
                              <span className="font-bold text-primary uppercase tracking-wider group-hover:text-primary transition-colors">{cat.name} AVG</span>
                              <span className="text-[10px] text-muted-foreground/50">MAX: 100%</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-zinc-950 border-primary/30 text-zinc-200 p-3 max-w-[240px] rounded-none shadow-[0_0_15px_rgba(0,243,255,0.1)]">
                          <div className="space-y-1.5">
                            <p className="font-bold text-primary text-[10px] uppercase tracking-widest">{cat.name} Capability</p>
                            <p className="text-[10px] font-mono leading-relaxed opacity-80">
                              {cat.description}
                            </p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                      
                      <div className="space-y-2">
                          {cat.scores.map((scoreObj, idx) => {
                              const score = scoreObj.average;
                              if (score === null) return null;
                              const width = `${Math.min(score, 100)}%`;
                              
                              const colorClass = idx === 0 ? "bg-[oklch(0.82_0.14_190)]" : idx === 1 ? "bg-[oklch(0.70_0.18_320)]" : "bg-[oklch(0.85_0.18_140)]";
                              const textClass = idx === 0 ? "text-[oklch(0.82_0.14_190)]" : idx === 1 ? "text-[oklch(0.70_0.18_320)]" : "text-[oklch(0.85_0.18_140)]";
                              
                              return (
                                  <div key={scoreObj.modelId} className="flex items-center gap-4 text-xs font-mono relative">
                                      <span className="w-24 truncate text-muted-foreground font-medium">{scoreObj.modelName}</span>
                                      <div className="flex-1 h-2 bg-secondary/50 rounded-full overflow-hidden relative">
                                          <div 
                                              className={cn("h-full rounded-full relative transition-all duration-1000 ease-out", colorClass)} 
                                              style={{ width }} 
                                          >
                                              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/20 blur-[1px]" />
                                          </div>
                                      </div>
                                      <span className={cn("w-10 text-right font-bold tabular-nums", textClass)}>
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
                    <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      No benchmarks match current filters.
                    </div>
                  ) : detailedBenchmarks.map((benchmark) => (
                    <div key={benchmark.id} className="space-y-3 group">
                      <Tooltip delayDuration={200}>
                        <TooltipTrigger asChild>
                          <div className="flex justify-between items-end text-xs font-mono border-b border-border pb-2 mb-2 cursor-help">
                               <span className="font-bold text-muted-foreground uppercase tracking-wider group-hover:text-foreground transition-colors">{benchmark.name}</span>
                               <span className="text-[10px] text-muted-foreground/50">DELTA: {benchmarkDeltas[benchmark.id]?.toFixed(1) ?? "0.0"}</span>
                           </div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-zinc-950 border-primary/30 text-zinc-200 p-3 max-w-[240px] rounded-none shadow-[0_0_15px_rgba(0,243,255,0.1)]">
                          <div className="space-y-1.5">
                            <p className="font-bold text-primary text-[10px] uppercase tracking-widest">{benchmark.name}</p>
                            <p className="text-[10px] font-mono leading-relaxed opacity-80">
                              {benchmark.description}
                            </p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                      
                      <div className="space-y-2">
                            {selectedModels.map((model, idx) => {
                              const scoreEntry = model.scores[benchmark.id];
                              const score = scoreEntry?.score;
                              if (score === null || score === undefined) {
                                return (
                                  <div key={model.id} className="flex items-center gap-4 text-xs font-mono relative opacity-50">
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
                              const colorClass = idx === 0 ? "bg-[oklch(0.82_0.14_190)]" : idx === 1 ? "bg-[oklch(0.70_0.18_320)]" : "bg-[oklch(0.85_0.18_140)]";
                              const textClass = idx === 0 ? "text-[oklch(0.82_0.14_190)]" : idx === 1 ? "text-[oklch(0.70_0.18_320)]" : "text-[oklch(0.85_0.18_140)]";
                              
                              return (
                                  <div key={model.id} className="flex items-center gap-4 text-xs font-mono relative">
                                      <div className="w-24">
                                        <span className="truncate text-muted-foreground font-medium block">{model.name}</span>
                                        <span className="text-[9px] text-muted-foreground/70 block truncate">{verificationLabel}</span>
                                      </div>
                                      <div className="flex-1 h-2 bg-secondary/50 rounded-full overflow-hidden relative">
                                          <div 
                                              className={cn("h-full rounded-full relative transition-all duration-1000 ease-out", colorClass)} 
                                              style={{ width }} 
                                          >
                                              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/20 blur-[1px]" />
                                          </div>
                                      </div>
                                      <div className="w-16 text-right">
                                        <span className={cn("font-bold tabular-nums", textClass)}>
                                          {score.toFixed(1)}{isArtificialAnalysis ? "*" : ""}
                                        </span>
                                        <Tooltip delayDuration={200}>
                                          <TooltipTrigger asChild>
                                            <span className="block text-[9px] text-muted-foreground/70 cursor-help truncate">
                                              {scoreEntry?.asOfDate ?? "n/a"}
                                            </span>
                                          </TooltipTrigger>
                                          <TooltipContent className="bg-zinc-950 border-primary/30 text-zinc-200 p-2 rounded-none">
                                            <div className="space-y-1">
                                              <p className="text-[10px] font-mono">Source: {sourceLabel}</p>
                                              {sourceUrl && (
                                                <a
                                                  href={sourceUrl}
                                                  target="_blank"
                                                  rel="noreferrer"
                                                  className="inline-flex items-center gap-1 text-[10px] font-mono text-primary hover:underline"
                                                >
                                                  Open source <ExternalLink className="h-3 w-3" />
                                                </a>
                                              )}
                                            </div>
                                          </TooltipContent>
                                        </Tooltip>
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
        <div className="fixed inset-x-4 bottom-4 z-40 md:hidden rounded-lg border border-white/10 bg-background/95 backdrop-blur px-3 py-2 shadow-xl">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              {selectedModels.length} model{selectedModels.length > 1 ? "s" : ""} selected
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSummary((prev) => !prev)}
                className="h-8 px-2 text-[10px] font-mono uppercase"
              >
                {showSummary ? "Detailed" : "Summary"}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearModels}
                className="h-8 px-2 text-[10px] font-mono uppercase text-muted-foreground"
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
