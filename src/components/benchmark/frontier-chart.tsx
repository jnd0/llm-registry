"use client";

import { Benchmark, Model } from "@/types";
import { useMemo, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useMergedSearchParams } from "@/hooks/use-merged-search-params";
import { sources } from "@/data/sources";

type ChartView = "all" | "frontier";
type DateRangeMode = "all" | "6m";
type OverlayMode = "none" | "trend" | "percentile" | "all";
type ColorMode = "provider" | "license";

interface FrontierChartProps {
  benchmark: Benchmark;
  models: Model[];
  variantIds: Set<string>;
  initialView?: ChartView;
  initialVariants?: boolean;
  initialRange?: DateRangeMode;
}

interface ChartPoint {
  name: string;
  id: string;
  releaseDate: string;
  timestamp: number;
  score: number;
  isOpenSource: boolean;
  provider: string;
  isVariant: boolean;
  sourceId?: string;
  verificationLevel?: string;
  asOfDate?: string;
}

interface FrontierStep {
  startX: number;
  endX: number;
  y: number;
}

interface BucketStats {
  x: number;
  p25: number;
  p50: number;
  p75: number;
}

const sourceMap = new Map(sources.map((source) => [source.id, source]));

const providerPalette = [
  "#3b82f6",
  "#ef4444",
  "#10b981",
  "#f59e0b",
  "#8b5cf6",
  "#06b6d4",
  "#84cc16",
  "#ec4899",
  "#f97316",
  "#14b8a6",
  "#6366f1",
];

function hashProvider(provider: string): number {
  let hash = 0;
  for (let i = 0; i < provider.length; i += 1) {
    hash = (hash * 31 + provider.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function providerColor(provider: string): string {
  return providerPalette[hashProvider(provider) % providerPalette.length];
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

function formatScore(score: number, benchmark: Benchmark): string {
  if (benchmark.normalization === "elo" || benchmark.unit === "ELO") {
    return score.toFixed(0);
  }
  if (benchmark.maxScore <= 10) {
    return score.toFixed(2);
  }
  return score.toFixed(1);
}

export function FrontierChart({
  benchmark,
  models,
  variantIds,
  initialView = "all",
  initialVariants = false,
  initialRange = "all",
}: FrontierChartProps) {
  const { searchParams, updateParams } = useMergedSearchParams();

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pinnedIds, setPinnedIds] = useState<string[]>([]);

  const [view, setView] = useState<ChartView>(
    (searchParams.get("view") as ChartView) || initialView
  );
  const [includeVariants, setIncludeVariants] = useState(
    searchParams.get("variants") === "1" || initialVariants
  );
  const [range, setRange] = useState<DateRangeMode>(
    (searchParams.get("range") as DateRangeMode) || initialRange
  );
  const [overlay, setOverlay] = useState<OverlayMode>(
    (searchParams.get("overlay") as OverlayMode) || "trend"
  );
  const [colorMode, setColorMode] = useState<ColorMode>(
    (searchParams.get("color") as ColorMode) || "provider"
  );

  useEffect(() => {
    updateParams({
      view,
      variants: includeVariants ? "1" : "0",
      range,
      overlay: overlay !== "trend" ? overlay : null,
      color: colorMode !== "provider" ? colorMode : null,
    });
  }, [view, includeVariants, range, overlay, colorMode, updateParams]);

  const sixMonthsAgo = useMemo(() => {
    const date = new Date();
    date.setMonth(date.getMonth() - 6);
    return date.toISOString().split("T")[0];
  }, []);

  const data = useMemo(() => {
    let filtered = models;

    if (!includeVariants) {
      filtered = models.filter((model) => !variantIds.has(model.id));
    }

    if (range === "6m") {
      filtered = filtered.filter((model) => model.releaseDate >= sixMonthsAgo);
    }

    const points: ChartPoint[] = filtered
      .map((model) => {
        const scoreEntry = model.scores[benchmark.id];
        const score = scoreEntry?.score;
        if (score === null || score === undefined) return null;

        return {
          name: model.name,
          id: model.id,
          releaseDate: model.releaseDate,
          timestamp: new Date(model.releaseDate).getTime(),
          score,
          isOpenSource: model.isOpenSource,
          provider: model.provider,
          isVariant: variantIds.has(model.id),
          sourceId: scoreEntry?.sourceId,
          verificationLevel: scoreEntry?.verificationLevel,
          asOfDate: scoreEntry?.asOfDate,
        };
      })
      .filter((point): point is ChartPoint => Boolean(point))
      .sort((a, b) => {
        if (a.timestamp !== b.timestamp) return a.timestamp - b.timestamp;
        return benchmark.higherIsBetter ? b.score - a.score : a.score - b.score;
      });

    const frontierSteps: FrontierStep[] = [];
    const frontierPointIds = new Set<string>();

    let bestScore = benchmark.higherIsBetter ? -Infinity : Infinity;
    let lastFrontierX: number | null = null;

    for (const point of points) {
      const improves = benchmark.higherIsBetter
        ? point.score > bestScore
        : point.score < bestScore;

      if (!improves) continue;

      if (lastFrontierX !== null) {
        frontierSteps.push({ startX: lastFrontierX, endX: point.timestamp, y: bestScore });
      }

      bestScore = point.score;
      lastFrontierX = point.timestamp;
      frontierPointIds.add(point.id);
    }

    if (lastFrontierX !== null && points.length > 0) {
      frontierSteps.push({
        startX: lastFrontierX,
        endX: Math.max(...points.map((point) => point.timestamp)),
        y: bestScore,
      });
    }

    const getFrontierScoreAt = (timestamp: number): number => {
      if (frontierSteps.length === 0) return 0;
      for (const step of frontierSteps) {
        if (timestamp >= step.startX && timestamp <= step.endX) return step.y;
      }
      if (timestamp < frontierSteps[0].startX) return frontierSteps[0].y;
      return frontierSteps[frontierSteps.length - 1].y;
    };

    const ranked = [...points].sort((a, b) =>
      benchmark.higherIsBetter ? b.score - a.score : a.score - b.score
    );
    const rankMap = new Map(ranked.map((point, idx) => [point.id, idx + 1]));

    const collisionBuckets = new Map<string, ChartPoint[]>();
    for (const point of points) {
      const key = `${point.timestamp}-${point.score.toFixed(4)}`;
      const bucket = collisionBuckets.get(key) ?? [];
      bucket.push(point);
      collisionBuckets.set(key, bucket);
    }

    const jitterMap = new Map<string, { x: number; y: number }>();
    for (const bucket of collisionBuckets.values()) {
      if (bucket.length <= 1) continue;
      bucket.forEach((point, idx) => {
        const angle = (idx / bucket.length) * Math.PI * 2;
        const radius = Math.min(6, 2 + bucket.length);
        jitterMap.set(point.id, {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
        });
      });
    }

    const bucketCount = Math.min(12, Math.max(5, Math.floor(points.length / 5)));
    const minTs = points.length > 0 ? Math.min(...points.map((p) => p.timestamp)) : 0;
    const maxTs = points.length > 0 ? Math.max(...points.map((p) => p.timestamp)) : 0;
    const bucketSpan = Math.max(1, maxTs - minTs);
    const bucketSize = bucketSpan / bucketCount;

    const buckets: number[][] = Array.from({ length: bucketCount }, () => []);
    const bucketCenters = Array.from({ length: bucketCount }, (_, idx) => minTs + bucketSize * (idx + 0.5));

    for (const point of points) {
      const idx = Math.min(bucketCount - 1, Math.floor((point.timestamp - minTs) / Math.max(1, bucketSize)));
      buckets[idx].push(point.score);
    }

    const bucketStats: BucketStats[] = buckets
      .map((bucketScores, idx) => {
        if (bucketScores.length < 2) return null;
        const sortedScores = [...bucketScores].sort((a, b) => a - b);
        return {
          x: bucketCenters[idx],
          p25: quantile(sortedScores, 0.25),
          p50: quantile(sortedScores, 0.5),
          p75: quantile(sortedScores, 0.75),
        };
      })
      .filter((bucket): bucket is BucketStats => Boolean(bucket));

    return {
      points,
      frontierSteps,
      frontierPointIds,
      getFrontierScoreAt,
      rankMap,
      jitterMap,
      bucketStats,
    };
  }, [models, benchmark, includeVariants, range, sixMonthsAgo, variantIds]);

  const dateTicks = useMemo(() => {
    if (data.points.length === 0) return [] as number[];

    const minDate = Math.min(...data.points.map((point) => point.timestamp));
    const maxDate = Math.max(...data.points.map((point) => point.timestamp));
    const monthCount = Math.max(1, Math.ceil((maxDate - minDate) / (30 * 24 * 60 * 60 * 1000)));

    let step = 1;
    if (monthCount > 36) step = 6;
    else if (monthCount > 24) step = 4;
    else if (monthCount > 12) step = 3;
    else if (monthCount > 6) step = 2;

    const ticks: number[] = [];
    let cursor = new Date(new Date(minDate).getFullYear(), new Date(minDate).getMonth(), 1).getTime();
    while (cursor <= maxDate) {
      ticks.push(cursor);
      const d = new Date(cursor);
      d.setMonth(d.getMonth() + step);
      cursor = d.getTime();
    }

    if (ticks.length < 2) {
      ticks.push(maxDate);
    }

    return ticks;
  }, [data.points]);

  const observedMaxScore = data.points.length > 0 ? Math.max(...data.points.map((point) => point.score)) : benchmark.maxScore;
  const observedMinScore = data.points.length > 0 ? Math.min(...data.points.map((point) => point.score)) : benchmark.minScore ?? 0;

  const yMin = benchmark.minScore ?? Math.max(0, observedMinScore - (observedMaxScore - observedMinScore) * 0.1);
  const yMax = benchmark.maxScore;
  const yRange = yMax - yMin || 1;

  const minDate = data.points.length > 0 ? Math.min(...data.points.map((point) => point.timestamp)) : 0;
  const maxDate = data.points.length > 0 ? Math.max(...data.points.map((point) => point.timestamp)) : 1;
  const rawDateRange = maxDate - minDate || 1;
  const datePadding = rawDateRange * 0.05;
  const adjustedMinDate = minDate - datePadding;
  const adjustedMaxDate = maxDate + datePadding;
  const adjustedDateRange = adjustedMaxDate - adjustedMinDate || 1;

  const chartWidth = 720;
  const chartHeight = 320;
  const padding = { top: 16, right: 20, bottom: 56, left: 58 };
  const innerWidth = chartWidth - padding.left - padding.right;
  const innerHeight = chartHeight - padding.top - padding.bottom;

  const toPixelX = useCallback(
    (timestamp: number) => ((timestamp - adjustedMinDate) / adjustedDateRange) * innerWidth,
    [adjustedMinDate, adjustedDateRange, innerWidth]
  );

  const toPixelY = useCallback(
    (score: number) => innerHeight * (1 - (score - yMin) / yRange),
    [innerHeight, yMin, yRange]
  );

  const pointMap = useMemo(() => new Map(data.points.map((point) => [point.id, point])), [data.points]);

  const hoveredPoint = hoveredId ? pointMap.get(hoveredId) ?? null : null;
  const activePinned = pinnedIds.map((id) => pointMap.get(id)).filter((point): point is ChartPoint => Boolean(point));

  const visiblePoints = view === "all"
    ? data.points
    : data.points.filter((point) => data.frontierPointIds.has(point.id));

  const showTrend = overlay === "trend" || overlay === "all";
  const showPercentile = overlay === "percentile" || overlay === "all";

  const onPointClick = (event: { shiftKey: boolean }, id: string) => {
    const shiftPressed = "shiftKey" in event && event.shiftKey;
    setPinnedIds((prev) => {
      const exists = prev.includes(id);
      if (!shiftPressed) {
        if (exists && prev.length === 1) return [];
        return [id];
      }
      if (exists) {
        return prev.filter((value) => value !== id);
      }
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", { month: "short", year: "2-digit" });
  };

  const percentileBandPath = useMemo(() => {
    if (data.bucketStats.length < 2) return "";

    const upper = data.bucketStats
      .map((bucket, idx) => `${idx === 0 ? "M" : "L"} ${toPixelX(bucket.x)} ${toPixelY(bucket.p75)}`)
      .join(" ");

    const lower = [...data.bucketStats]
      .reverse()
      .map((bucket) => `L ${toPixelX(bucket.x)} ${toPixelY(bucket.p25)}`)
      .join(" ");

    return `${upper} ${lower} Z`;
  }, [data.bucketStats, toPixelX, toPixelY]);

  const trendPath = useMemo(() => {
    if (data.bucketStats.length < 2) return "";
    return data.bucketStats
      .map((bucket, idx) => `${idx === 0 ? "M" : "L"} ${toPixelX(bucket.x)} ${toPixelY(bucket.p50)}`)
      .join(" ");
  }, [data.bucketStats, toPixelX, toPixelY]);

  if (data.points.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center text-sm text-muted-foreground">
        {range === "6m" ? "No models released in the last 6 months" : "No data available for this benchmark"}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 rounded-full border border-border/40 bg-muted/30 p-0.5">
          <button
            onClick={() => setView("all")}
            className={cn(
              "h-6 rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider transition-all",
              view === "all" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            All Points
          </button>
          <button
            onClick={() => setView("frontier")}
            className={cn(
              "h-6 rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider transition-all",
              view === "frontier" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Frontier Only
          </button>
        </div>

        <div className="flex items-center gap-1 rounded-full border border-border/40 bg-muted/30 p-0.5">
          <button
            onClick={() => setRange("all")}
            className={cn(
              "h-6 rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider transition-all",
              range === "all" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            All Time
          </button>
          <button
            onClick={() => setRange("6m")}
            className={cn(
              "h-6 rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider transition-all",
              range === "6m" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Last 6 Mo
          </button>
        </div>

        <div className="flex items-center gap-1 rounded-full border border-border/40 bg-muted/30 p-0.5">
          {(["none", "trend", "percentile", "all"] as OverlayMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => setOverlay(mode)}
              className={cn(
                "h-6 rounded-full px-2 text-[10px] font-bold uppercase tracking-wider transition-all",
                overlay === mode ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {mode === "none" ? "No Overlay" : mode}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1 rounded-full border border-border/40 bg-muted/30 p-0.5">
          <button
            onClick={() => setColorMode("provider")}
            className={cn(
              "h-6 rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider transition-all",
              colorMode === "provider" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Provider Color
          </button>
          <button
            onClick={() => setColorMode("license")}
            className={cn(
              "h-6 rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider transition-all",
              colorMode === "license" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            License Color
          </button>
        </div>

        <label className="flex cursor-pointer items-center gap-1.5 text-xs text-muted-foreground">
          <input
            type="checkbox"
            checked={includeVariants}
            onChange={(event) => setIncludeVariants(event.target.checked)}
            className="h-3.5 w-3.5 rounded border-border"
          />
          <span>Include variants</span>
        </label>
      </div>

      {range === "6m" && data.points.length < 5 && (
        <div className="rounded-md border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs text-amber-700 dark:text-amber-300">
          Sparse data in last 6 months. Consider All Time for a more stable trend.
        </div>
      )}

      <div className="relative">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="h-auto w-full"
          role="img"
          aria-label={`Progress chart for ${benchmark.name}`}
        >
          <g transform={`translate(${padding.left}, ${padding.top})`}>
            <line x1={0} y1={innerHeight} x2={innerWidth} y2={innerHeight} className="stroke-border/50" strokeWidth={1} />
            <line x1={0} y1={0} x2={0} y2={innerHeight} className="stroke-border/50" strokeWidth={1} />

            {[0, 0.25, 0.5, 0.75, 1].map((ratio, idx) => {
              const y = innerHeight * (1 - ratio);
              const score = yMin + yRange * ratio;
              return (
                <g key={idx}>
                  <line x1={0} y1={y} x2={innerWidth} y2={y} className="stroke-border/20" strokeDasharray="4 4" />
                  <text
                    x={-10}
                    y={y}
                    textAnchor="end"
                    alignmentBaseline="middle"
                    className="fill-muted-foreground text-[10px] font-mono"
                  >
                    {formatScore(score, benchmark)}
                  </text>
                </g>
              );
            })}

            {dateTicks.map((tick, idx) => {
              const x = toPixelX(tick);
              return (
                <g key={idx}>
                  <line x1={x} y1={0} x2={x} y2={innerHeight} className="stroke-border/20" strokeDasharray="4 4" />
                  <text x={x} y={innerHeight + 20} textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
                    {formatDate(tick)}
                  </text>
                </g>
              );
            })}

            {view === "all" && showPercentile && percentileBandPath && (
              <path d={percentileBandPath} fill="var(--primary)" opacity={0.12} />
            )}

            {view === "all" && showTrend && trendPath && (
              <path
                d={trendPath}
                fill="none"
                stroke="var(--primary)"
                strokeWidth={2}
                strokeDasharray="5 4"
                opacity={0.7}
              />
            )}

            {view === "all" && data.frontierSteps.length > 0 && (
              <path
                d={data.frontierSteps
                  .map((step, idx) => {
                    const x1 = toPixelX(step.startX);
                    const x2 = toPixelX(step.endX);
                    const y = toPixelY(step.y);
                    if (idx === 0) return `M ${x1} ${y} L ${x2} ${y}`;
                    return `L ${x1} ${y} L ${x2} ${y}`;
                  })
                  .join(" ")}
                fill="none"
                stroke="var(--primary)"
                strokeWidth={2.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.8}
              />
            )}

            {visiblePoints.map((point) => {
              const jitter = data.jitterMap.get(point.id) ?? { x: 0, y: 0 };
              const baseX = toPixelX(point.timestamp);
              const baseY = toPixelY(point.score);

              const recencyRatio = rawDateRange > 0 ? (point.timestamp - minDate) / rawDateRange : 0.5;
              const baseRadius = 3.2 + recencyRatio * 1.6;
              const isHovered = hoveredId === point.id;
              const isPinned = pinnedIds.includes(point.id);
              const radius = isPinned ? baseRadius + 1.8 : isHovered ? baseRadius + 1.2 : baseRadius;

              const frontierScore = data.getFrontierScoreAt(point.timestamp);
              const gap = benchmark.higherIsBetter
                ? Math.max(0, frontierScore - point.score)
                : Math.max(0, point.score - frontierScore);

              const fill = colorMode === "provider"
                ? providerColor(point.provider)
                : point.isOpenSource
                  ? "#10b981"
                  : "#3b82f6";

              return (
                <circle
                  key={point.id}
                  cx={baseX + jitter.x}
                  cy={baseY + jitter.y}
                  r={radius}
                  fill={fill}
                  opacity={isPinned || isHovered ? 1 : 0.72}
                  stroke={isPinned ? "var(--foreground)" : isHovered ? "var(--background)" : "none"}
                  strokeWidth={isPinned ? 2.4 : isHovered ? 2 : 0}
                  className="cursor-pointer transition-all"
                  onMouseEnter={() => setHoveredId(point.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={(event) => onPointClick(event, point.id)}
                  onFocus={() => setHoveredId(point.id)}
                  onBlur={() => setHoveredId(null)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onPointClick(event, point.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${point.name}, score ${formatScore(point.score, benchmark)}${benchmark.unit ?? "%"}, rank ${data.rankMap.get(point.id) ?? "?"}, gap ${formatScore(gap, benchmark)}${benchmark.unit ?? "%"}`}
                />
              );
            })}
          </g>

          <text x={chartWidth / 2} y={chartHeight - 8} textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
            Release Date
          </text>
          <text
            x={14}
            y={chartHeight / 2}
            textAnchor="middle"
            transform={`rotate(-90, 14, ${chartHeight / 2})`}
            className="fill-muted-foreground text-[10px] font-mono"
          >
            Score {benchmark.unit ? `(${benchmark.unit})` : ""}
          </text>
        </svg>

        {hoveredPoint && pinnedIds.length === 0 && (
          <div
            className="pointer-events-none absolute z-10 rounded-lg border border-border bg-popover px-3 py-2 shadow-lg"
            style={{
              left: `${((hoveredPoint.timestamp - adjustedMinDate) / adjustedDateRange) * 100}%`,
              top: "20px",
              transform: "translateX(-50%)",
            }}
          >
            <p className="font-display text-sm font-bold text-foreground">{hoveredPoint.name}</p>
            <p className="text-xs text-muted-foreground">{hoveredPoint.provider}</p>
            <div className="mt-1 flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-primary">
                {formatScore(hoveredPoint.score, benchmark)}{benchmark.unit ?? "%"}
              </span>
              <span className="text-xs text-muted-foreground">#{data.rankMap.get(hoveredPoint.id)}</span>
            </div>
          </div>
        )}
      </div>

      {activePinned.length > 0 && (
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {activePinned.map((point) => {
            const frontierScore = data.getFrontierScoreAt(point.timestamp);
            const gap = benchmark.higherIsBetter
              ? Math.max(0, frontierScore - point.score)
              : Math.max(0, point.score - frontierScore);
            const source = point.sourceId ? sourceMap.get(point.sourceId) : undefined;

            return (
              <div key={point.id} className="rounded-lg border border-border/50 bg-card px-3 py-2 text-xs">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-foreground">{point.name}</p>
                    <p className="text-muted-foreground">{point.provider}</p>
                  </div>
                  <button
                    onClick={() => setPinnedIds((prev) => prev.filter((id) => id !== point.id))}
                    className="text-muted-foreground hover:text-foreground"
                    aria-label={`Unpin ${point.name}`}
                  >
                    ×
                  </button>
                </div>
                <div className="mt-1 grid grid-cols-2 gap-x-3 gap-y-1 font-mono text-[11px]">
                  <span className="text-muted-foreground">Score</span>
                  <span className="text-right text-foreground">{formatScore(point.score, benchmark)}{benchmark.unit ?? "%"}</span>
                  <span className="text-muted-foreground">Rank</span>
                  <span className="text-right text-foreground">#{data.rankMap.get(point.id)}</span>
                  <span className="text-muted-foreground">Gap to Frontier</span>
                  <span className="text-right text-foreground">{formatScore(gap, benchmark)}{benchmark.unit ?? "%"}</span>
                  <span className="text-muted-foreground">Released</span>
                  <span className="text-right text-foreground">{point.releaseDate}</span>
                </div>
                <p className="mt-2 truncate text-[11px] text-muted-foreground">
                  {source?.name ?? point.sourceId ?? "Unknown source"}
                  {point.verificationLevel ? ` · ${point.verificationLevel}` : ""}
                  {point.asOfDate ? ` · ${point.asOfDate}` : ""}
                </p>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <span className="h-0.5 w-6 rounded bg-primary opacity-80" />
          <span className="text-xs text-muted-foreground">Frontier</span>
        </div>
        {showTrend && (
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-6 rounded bg-primary opacity-70" style={{ borderTop: "2px dashed var(--primary)" }} />
            <span className="text-xs text-muted-foreground">Median Trend</span>
          </div>
        )}
        {showPercentile && (
          <div className="flex items-center gap-2">
            <span className="h-3 w-6 rounded bg-primary/20" />
            <span className="text-xs text-muted-foreground">P25–P75 Band</span>
          </div>
        )}
        {colorMode === "license" && (
          <>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-blue-500" />
              <span className="text-xs text-muted-foreground">Proprietary</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
              <span className="text-xs text-muted-foreground">Open Source</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
