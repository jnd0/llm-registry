"use client";

import { Benchmark, Model } from "@/types";
import { useMemo, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useMergedSearchParams } from "@/hooks/use-merged-search-params";

interface FrontierChartProps {
  benchmark: Benchmark;
  models: Model[];
  variantIds: Set<string>;
  initialView?: "all" | "frontier";
  initialVariants?: boolean;
  initialRange?: "all" | "6m";
}

interface ChartPoint {
  name: string;
  id: string;
  releaseDate: string;
  score: number;
  isOpenSource: boolean;
  provider: string;
  isVariant: boolean;
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
  
  const [hoveredPoint, setHoveredPoint] = useState<ChartPoint | null>(null);
  const [view, setView] = useState<"all" | "frontier">(
    (searchParams.get("view") as "all" | "frontier") || initialView
  );
  const [includeVariants, setIncludeVariants] = useState(
    searchParams.get("variants") === "1" || initialVariants
  );
  const [range, setRange] = useState<"all" | "6m">(
    (searchParams.get("range") as "all" | "6m") || initialRange
  );

  useEffect(() => {
    updateParams({
      view,
      variants: includeVariants ? "1" : "0",
      range,
    });
  }, [view, includeVariants, range, updateParams]);

  const sixMonthsAgo = useMemo(() => {
    const date = new Date();
    date.setMonth(date.getMonth() - 6);
    return date.toISOString().split("T")[0];
  }, []);

  const { chartData, frontierSteps, frontierPointIds } = useMemo(() => {
    let filtered = models;
    
    if (!includeVariants) {
      filtered = models.filter((m) => !variantIds.has(m.id));
    }
    
    if (range === "6m") {
      filtered = filtered.filter((m) => m.releaseDate >= sixMonthsAgo);
    }

    const sorted = filtered
      .map((model) => ({
        name: model.name,
        id: model.id,
        releaseDate: model.releaseDate,
        score: model.scores[benchmark.id]?.score ?? 0,
        isOpenSource: model.isOpenSource,
        provider: model.provider,
        isVariant: variantIds.has(model.id),
      }))
      .sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());

    const frontier: { x: number; y: number }[] = [];
    const stepPoints: { startX: number; endX: number; y: number }[] = [];
    const frontierIds = new Set<string>();
    let bestScore = benchmark.higherIsBetter ? -Infinity : Infinity;
    let lastFrontierX: number | null = null;

    for (const point of sorted) {
      const isBetter = benchmark.higherIsBetter 
        ? point.score > bestScore 
        : point.score < bestScore;
      
      if (isBetter) {
        const currentX = new Date(point.releaseDate).getTime();
        
        if (lastFrontierX !== null) {
          stepPoints.push({
            startX: lastFrontierX,
            endX: currentX,
            y: bestScore,
          });
        }
        
        bestScore = point.score;
        lastFrontierX = currentX;
        frontierIds.add(point.id);
        frontier.push({
          x: currentX,
          y: point.score,
        });
      }
    }

    if (lastFrontierX !== null && sorted.length > 0) {
      const maxX = Math.max(...sorted.map((p) => new Date(p.releaseDate).getTime()));
      stepPoints.push({
        startX: lastFrontierX,
        endX: maxX,
        y: bestScore,
      });
    }

    return { chartData: sorted, frontierSteps: stepPoints, frontierPointIds: frontierIds };
  }, [models, benchmark.id, benchmark.higherIsBetter, includeVariants, range, sixMonthsAgo, variantIds]);

  const dateTicks = useMemo(() => {
    if (chartData.length === 0) return [];
    
    const dates = chartData.map((d) => new Date(d.releaseDate).getTime());
    const minDate = Math.min(...dates);
    const maxDate = Math.max(...dates);
    const dateRange = maxDate - minDate || 1;
    
    const ticks: number[] = [];
    const startYear = new Date(minDate).getFullYear();
    const startMonth = new Date(minDate).getMonth();
    
    let current = new Date(startYear, startMonth, 1).getTime();
    const monthCount = Math.ceil(dateRange / (30 * 24 * 60 * 60 * 1000));
    const step = Math.max(1, Math.floor(monthCount / 5));
    
    while (current <= maxDate) {
      ticks.push(current);
      current = new Date(new Date(current).setMonth(new Date(current).getMonth() + step)).getTime();
    }
    
    return ticks;
  }, [chartData]);

  if (chartData.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center text-sm text-muted-foreground">
        {range === "6m" 
          ? "No models released in the last 6 months"
          : "No data available for this benchmark"}
      </div>
    );
  }

  const observedMaxScore = Math.max(...chartData.map((d) => d.score));
  const observedMinScore = Math.min(...chartData.map((d) => d.score));
  
  const yMin = benchmark.minScore ?? Math.max(0, observedMinScore - (observedMaxScore - observedMinScore) * 0.1);
  const yMax = benchmark.maxScore;
  const adjustedRange = yMax - yMin || 1;

  const dates = chartData.map((d) => new Date(d.releaseDate).getTime());
  const minDate = Math.min(...dates);
  const maxDate = Math.max(...dates);
  const dateRange = maxDate - minDate || 1;
  const datePadding = dateRange * 0.05;
  const adjustedMinDate = minDate - datePadding;
  const adjustedMaxDate = maxDate + datePadding;
  const adjustedDateRange = adjustedMaxDate - adjustedMinDate;

  const chartWidth = 700;
  const chartHeight = 280;
  const padding = { top: 20, right: 20, bottom: 50, left: 55 };

  const innerWidth = chartWidth - padding.left - padding.right;
  const innerHeight = chartHeight - padding.top - padding.bottom;

  const toPixelX = (date: number) => ((date - adjustedMinDate) / adjustedDateRange) * innerWidth;
  const toPixelY = (score: number) => innerHeight * (1 - (score - yMin) / adjustedRange);

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", { month: "short", year: "2-digit" });
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 bg-muted/30 p-0.5 rounded-full border border-border/40">
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

        <div className="flex items-center gap-1 bg-muted/30 p-0.5 rounded-full border border-border/40">
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

        <label className="flex items-center gap-1.5 text-xs text-muted-foreground cursor-pointer">
          <input
            type="checkbox"
            checked={includeVariants}
            onChange={(e) => setIncludeVariants(e.target.checked)}
            className="h-3.5 w-3.5 rounded border-border"
          />
          <span>Include variants</span>
        </label>
      </div>

      <div className="relative">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="w-full h-auto"
          role="img"
          aria-label={`Progress chart for ${benchmark.name}`}
        >
          <defs>
            <linearGradient id="frontierAreaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.15} />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity={0.02} />
            </linearGradient>
          </defs>

          <g transform={`translate(${padding.left}, ${padding.top})`}>
            <line
              x1={0}
              y1={innerHeight}
              x2={innerWidth}
              y2={innerHeight}
              className="stroke-border/50"
              strokeWidth={1}
            />
            <line
              x1={0}
              y1={0}
              x2={0}
              y2={innerHeight}
              className="stroke-border/50"
              strokeWidth={1}
            />

            {[0, 0.25, 0.5, 0.75, 1].map((ratio, idx) => {
              const y = innerHeight * (1 - ratio);
              const score = yMin + adjustedRange * ratio;
              return (
                <g key={idx}>
                  <line
                    x1={0}
                    y1={y}
                    x2={innerWidth}
                    y2={y}
                    className="stroke-border/20"
                    strokeDasharray="4 4"
                  />
                  <text
                    x={-10}
                    y={y}
                    textAnchor="end"
                    alignmentBaseline="middle"
                    className="fill-muted-foreground text-[10px] font-mono"
                  >
                    {score.toFixed(0)}
                  </text>
                </g>
              );
            })}

            {dateTicks.map((tick, idx) => {
              const x = toPixelX(tick);
              return (
                <g key={idx}>
                  <line
                    x1={x}
                    y1={0}
                    x2={x}
                    y2={innerHeight}
                    className="stroke-border/20"
                    strokeDasharray="4 4"
                  />
                  <text
                    x={x}
                    y={innerHeight + 20}
                    textAnchor="middle"
                    className="fill-muted-foreground text-[10px] font-mono"
                  >
                    {formatDate(tick)}
                  </text>
                </g>
              );
            })}

            {frontierSteps.length > 0 && view === "all" && (
              <path
                d={frontierSteps
                  .map((step, idx) => {
                    const x1 = toPixelX(step.startX);
                    const x2 = toPixelX(step.endX);
                    const y = toPixelY(step.y);
                    if (idx === 0) {
                      return `M ${x1} ${y} L ${x2} ${y}`;
                    }
                    return `L ${x1} ${y} L ${x2} ${y}`;
                  })
                  .join(" ")}
                fill="none"
                stroke="var(--primary)"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.7}
              />
            )}

            {(view === "all" ? chartData : chartData.filter((point) => frontierPointIds.has(point.id))).map((point) => {
              const x = toPixelX(new Date(point.releaseDate).getTime());
              const y = toPixelY(point.score);
              const isHovered = hoveredPoint?.id === point.id;
              
              return (
                <g key={point.id}>
                  <circle
                    cx={x}
                    cy={y}
                    r={isHovered ? 7 : 4}
                    className={`cursor-pointer transition-all ${point.isOpenSource ? "fill-emerald-500" : "fill-primary"}`}
                    opacity={isHovered ? 1 : 0.6}
                    stroke={isHovered ? "var(--background)" : "none"}
                    strokeWidth={isHovered ? 2 : 0}
                    onMouseEnter={() => setHoveredPoint(point)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                </g>
              );
            })}
          </g>

          <text
            x={chartWidth / 2}
            y={chartHeight - 8}
            textAnchor="middle"
            className="fill-muted-foreground text-[10px] font-mono"
          >
            Release Date
          </text>
          <text
            x={14}
            y={chartHeight / 2}
            textAnchor="middle"
            transform={`rotate(-90, 14, ${chartHeight / 2})`}
            className="fill-muted-foreground text-[10px] font-mono"
          >
            Score
          </text>
        </svg>

        {hoveredPoint && (
          <div 
            className="absolute pointer-events-none bg-popover border border-border rounded-lg px-3 py-2 shadow-lg z-10"
            style={{
              left: `${((new Date(hoveredPoint.releaseDate).getTime() - adjustedMinDate) / adjustedDateRange) * 100}%`,
              top: "20px",
              transform: "translateX(-50%)",
            }}
          >
            <p className="font-display text-sm font-bold text-foreground">{hoveredPoint.name}</p>
            <p className="text-xs text-muted-foreground">{hoveredPoint.provider}</p>
            <div className="mt-1 flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-primary">
                {hoveredPoint.score.toFixed(1)}{benchmark.unit ?? "%"}
              </span>
              <span className="text-xs text-muted-foreground">{hoveredPoint.releaseDate}</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <span className="h-0.5 w-6 bg-primary rounded opacity-70" />
          <span className="text-xs text-muted-foreground">State of the Art</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-primary opacity-60" />
          <span className="text-xs text-muted-foreground">Proprietary</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-emerald-500 opacity-60" />
          <span className="text-xs text-muted-foreground">Open Source</span>
        </div>
      </div>
    </div>
  );
}
