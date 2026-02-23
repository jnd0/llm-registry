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

function quantile(sortedValues: number[], q: number): number {
  if (sortedValues.length === 0) return 0;
  if (sortedValues.length === 1) return sortedValues[0];
  const pos = (sortedValues.length - 1) * q;
  const lower = Math.floor(pos);
  const upper = Math.ceil(pos);
  if (lower === upper) return sortedValues[lower];
  const weight = pos - lower;
  return sortedValues[lower] * (1 - weight) + sortedValues[upper] * weight;
}

function describeDistribution(scores: number[], min: number, max: number): { label: string; className: string } {
  if (scores.length < 4) {
    return { label: "Limited data", className: "bg-muted text-muted-foreground" };
  }

  const sorted = [...scores].sort((a, b) => a - b);
  const p25 = quantile(sorted, 0.25);
  const p75 = quantile(sorted, 0.75);
  const iqr = p75 - p25;
  const range = Math.max(1, max - min);
  const spreadRatio = iqr / range;

  if (spreadRatio < 0.2) {
    return { label: "Clustered", className: "bg-blue-500/10 text-blue-700 dark:text-blue-300" };
  }
  if (spreadRatio > 0.45) {
    return { label: "Wide spread", className: "bg-amber-500/10 text-amber-700 dark:text-amber-300" };
  }
  return { label: "Balanced", className: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" };
}

function ScoreHistogram({ scores, benchmark }: { scores: number[]; benchmark: Benchmark }) {
  const min = benchmark.minScore ?? 0;
  const max = benchmark.maxScore;

  const { bins, percentileMarkers } = useMemo(() => {
    if (scores.length === 0) {
      return {
        bins: [] as Array<{ count: number; percentage: number; height: number; range: string; start: number; end: number }>,
        percentileMarkers: null,
      };
    }

    const range = Math.max(1, max - min);
    const binCount = 10;
    const binSize = range / binCount;
    const counts = new Array(binCount).fill(0);

    for (const score of scores) {
      const idx = Math.min(binCount - 1, Math.max(0, Math.floor((score - min) / binSize)));
      counts[idx] += 1;
    }

    const maxCount = Math.max(...counts, 1);
    const nextBins = counts.map((count, idx) => {
      const start = min + idx * binSize;
      const end = min + (idx + 1) * binSize;
      return {
        count,
        percentage: (count / scores.length) * 100,
        height: (count / maxCount) * 100,
        range: `${start.toFixed(0)}-${end.toFixed(0)}`,
        start,
        end,
      };
    });

    const sortedScores = [...scores].sort((a, b) => a - b);
    const p10 = quantile(sortedScores, 0.1);
    const p50 = quantile(sortedScores, 0.5);
    const p90 = quantile(sortedScores, 0.9);

    const toPercent = (value: number) => ((value - min) / range) * 100;

    return {
      bins: nextBins,
      percentileMarkers: {
        p10,
        p50,
        p90,
        p10X: toPercent(p10),
        p50X: toPercent(p50),
        p90X: toPercent(p90),
      },
    };
  }, [scores, min, max]);

  if (bins.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
        Score Distribution
      </p>
      <div className="relative">
        <div className="flex h-14 items-end gap-0.5">
          {bins.map((bin, idx) => (
            <div
              key={idx}
              className="group relative flex-1 cursor-default rounded-t-sm bg-primary/60 transition-colors hover:bg-primary"
              style={{ height: `${Math.max(4, bin.height)}%` }}
              title={`${bin.range}: ${bin.count} models (${bin.percentage.toFixed(1)}%)`}
            >
              <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 -translate-x-1/2 whitespace-nowrap rounded border border-border bg-popover px-1.5 py-0.5 font-mono text-[9px] opacity-0 transition-opacity group-hover:opacity-100">
                {bin.count}
              </div>
            </div>
          ))}
        </div>

        {percentileMarkers && (
          <>
            {([
              { key: "P10", x: percentileMarkers.p10X },
              { key: "P50", x: percentileMarkers.p50X },
              { key: "P90", x: percentileMarkers.p90X },
            ] as const).map((marker) => (
              <div
                key={marker.key}
                className="pointer-events-none absolute bottom-0 top-0"
                style={{ left: `${Math.min(99, Math.max(1, marker.x))}%` }}
              >
                <div className="h-full border-l border-dashed border-foreground/40" />
                <span className="absolute -top-4 -translate-x-1/2 font-mono text-[9px] text-muted-foreground">
                  {marker.key}
                </span>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="mt-1 flex justify-between font-mono text-[9px] text-muted-foreground">
        <span>{min}</span>
        <span>
          {max}
          {benchmark.unit ?? "%"}
        </span>
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
  const scores = useMemo(
    () =>
      models
        .map((model) => model.scores[benchmark.id]?.score)
        .filter((score): score is number => score !== null && score !== undefined),
    [models, benchmark.id]
  );

  const distribution = useMemo(
    () => describeDistribution(scores, benchmark.minScore ?? 0, benchmark.maxScore),
    [scores, benchmark.minScore, benchmark.maxScore]
  );

  return (
    <div className="surface-card rounded-xl border border-border/40 p-4">
      <h2 className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
        Insights
      </h2>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Current SOTA</span>
          <div className="text-right">
            {models[0] && (
              <Link
                href={`/model/${models[0].id}`}
                className="block max-w-[120px] truncate text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {models[0].name}
              </Link>
            )}
            <span className="font-mono text-sm font-bold text-primary">
              {sotaScore.toFixed(1)}
              {benchmark.unit ?? "%"}
            </span>
          </div>
        </div>

        {bestOpen && bestOpenScore !== null && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Best Open Source</span>
            <div className="text-right">
              <Link
                href={`/model/${bestOpen.id}`}
                className="block max-w-[120px] truncate text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {bestOpen.name}
              </Link>
              <span className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400">
                {bestOpenScore.toFixed(1)}
                {benchmark.unit ?? "%"}
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Median Score</span>
          <span className="font-mono text-sm font-semibold text-foreground">
            {medianScore.toFixed(1)}
            {benchmark.unit ?? "%"}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Distribution</span>
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${distribution.className}`}>
            {distribution.label}
          </span>
        </div>
      </div>

      <ScoreHistogram scores={scores} benchmark={benchmark} />
    </div>
  );
}
