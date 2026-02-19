"use client";

import { Benchmark, Model } from "@/types";
import Link from "next/link";
import { useMemo } from "react";

interface BenchmarkInsightsProps {
  models: Model[];
  benchmark: Benchmark;
  sotaScore: number;
  medianScore: number;
  bestOpen: Model | undefined;
  bestOpenScore: number | null;
}

function ScoreHistogram({ scores, benchmark }: { scores: number[]; benchmark: Benchmark }) {
  const bins = useMemo(() => {
    if (scores.length === 0) return [];
    
    const min = benchmark.minScore ?? 0;
    const max = benchmark.maxScore;
    const range = max - min;
    const binCount = 10;
    const binSize = range / binCount;
    
    const counts = new Array(binCount).fill(0);
    
    for (const score of scores) {
      const binIndex = Math.min(
        Math.floor((score - min) / binSize),
        binCount - 1
      );
      if (binIndex >= 0 && binIndex < binCount) {
        counts[binIndex]++;
      }
    }
    
    const maxCount = Math.max(...counts, 1);
    
    return counts.map((count, idx) => ({
      count,
      percentage: (count / scores.length) * 100,
      height: (count / maxCount) * 100,
      range: `${(min + idx * binSize).toFixed(0)}-${(min + (idx + 1) * binSize).toFixed(0)}`,
    }));
  }, [scores, benchmark]);

  if (bins.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
        Score Distribution
      </p>
      <div className="flex items-end gap-0.5 h-12">
        {bins.map((bin, idx) => (
          <div
            key={idx}
            className="flex-1 bg-primary/60 rounded-t-sm hover:bg-primary transition-colors cursor-default group relative"
            style={{ height: `${bin.height}%` }}
            title={`${bin.range}: ${bin.count} models (${bin.percentage.toFixed(1)}%)`}
          >
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-1.5 py-0.5 rounded bg-popover border border-border text-[9px] font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
              {bin.count}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-1 text-[9px] font-mono text-muted-foreground">
        <span>{benchmark.minScore ?? 0}</span>
        <span>{benchmark.maxScore}{benchmark.unit ?? "%"}</span>
      </div>
    </div>
  );
}

export function BenchmarkInsights({
  models,
  benchmark,
  sotaScore,
  medianScore,
  bestOpen,
  bestOpenScore,
}: BenchmarkInsightsProps) {
  const scores = useMemo(() => 
    models.map((m) => m.scores[benchmark.id]?.score ?? 0).filter((s) => s !== null),
    [models, benchmark.id]
  );

  return (
    <div className="surface-card rounded-xl border border-border/40 p-4">
      <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
        Insights
      </h2>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Current SOTA</span>
          <div className="text-right">
            {models[0] && (
              <Link 
                href={`/model/${models[0].id}`}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors block truncate max-w-[120px]"
              >
                {models[0].name}
              </Link>
            )}
            <span className="font-mono text-sm font-bold text-primary">
              {sotaScore.toFixed(1)}{benchmark.unit ?? "%"}
            </span>
          </div>
        </div>

        {bestOpen && bestOpenScore !== null && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Best Open Source</span>
            <div className="text-right">
              <Link 
                href={`/model/${bestOpen.id}`}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors block truncate max-w-[120px]"
              >
                {bestOpen.name}
              </Link>
              <span className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400">
                {bestOpenScore.toFixed(1)}{benchmark.unit ?? "%"}
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Median Score</span>
          <span className="font-mono text-sm font-semibold text-foreground">
            {medianScore.toFixed(1)}{benchmark.unit ?? "%"}
          </span>
        </div>
      </div>

      <ScoreHistogram scores={scores} benchmark={benchmark} />
    </div>
  );
}
