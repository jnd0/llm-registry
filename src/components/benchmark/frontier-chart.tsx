"use client";

import { Benchmark, Model } from "@/types";
import { useMemo } from "react";

interface FrontierChartProps {
  benchmark: Benchmark;
  models: Model[];
}

export function FrontierChart({ benchmark, models }: FrontierChartProps) {
  const chartData = useMemo(() => {
    return models
      .map((model) => ({
        name: model.name,
        id: model.id,
        releaseDate: model.releaseDate,
        score: model.scores[benchmark.id]?.score ?? 0,
        isOpenSource: model.isOpenSource,
        provider: model.provider,
      }))
      .sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
  }, [models, benchmark.id]);

  if (chartData.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center text-sm text-muted-foreground">
        No data available for this benchmark
      </div>
    );
  }

  const maxScore = Math.max(...chartData.map((d) => d.score));
  const minScore = Math.min(...chartData.map((d) => d.score));
  const scoreRange = maxScore - minScore || 1;

  const dates = chartData.map((d) => new Date(d.releaseDate).getTime());
  const minDate = Math.min(...dates);
  const maxDate = Math.max(...dates);
  const dateRange = maxDate - minDate || 1;

  const chartWidth = 700;
  const chartHeight = 300;
  const padding = { top: 20, right: 20, bottom: 40, left: 50 };

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        className="w-full h-auto"
        role="img"
        aria-label={`Progress chart for ${benchmark.name}`}
      >
        <defs>
          <linearGradient id="gridGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity={0.1} />
            <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
          </linearGradient>
        </defs>

        <g transform={`translate(${padding.left}, ${padding.top})`}>
          <line
            x1={0}
            y1={chartHeight - padding.top - padding.bottom}
            x2={chartWidth - padding.left - padding.right}
            y2={chartHeight - padding.top - padding.bottom}
            className="stroke-border/50"
            strokeWidth={1}
          />
          <line
            x1={0}
            y1={0}
            x2={0}
            y2={chartHeight - padding.top - padding.bottom}
            className="stroke-border/50"
            strokeWidth={1}
          />

          {[0, 0.25, 0.5, 0.75, 1].map((ratio, idx) => {
            const y = (chartHeight - padding.top - padding.bottom) * (1 - ratio);
            const score = minScore + scoreRange * ratio;
            return (
              <g key={idx}>
                <line
                  x1={0}
                  y1={y}
                  x2={chartWidth - padding.left - padding.right}
                  y2={y}
                  className="stroke-border/20"
                  strokeDasharray="4 4"
                />
                <text
                  x={-8}
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

          {chartData.map((point, idx) => {
            const x = ((new Date(point.releaseDate).getTime() - minDate) / dateRange) * (chartWidth - padding.left - padding.right);
            const y = (chartHeight - padding.top - padding.bottom) * (1 - (point.score - minScore) / scoreRange);
            
            return (
              <g key={point.id}>
                <circle
                  cx={x}
                  cy={y}
                  r={idx === chartData.length - 1 ? 6 : 4}
                  className={
                    point.isOpenSource
                      ? "fill-emerald-500"
                      : "fill-primary"
                  }
                  opacity={idx === chartData.length - 1 ? 1 : 0.7}
                />
                {idx === chartData.length - 1 && (
                  <text
                    x={x}
                    y={y - 12}
                    textAnchor="middle"
                    className="fill-foreground text-[10px] font-medium"
                  >
                    {point.score.toFixed(1)}
                  </text>
                )}
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
          x={12}
          y={chartHeight / 2}
          textAnchor="middle"
          transform={`rotate(-90, 12, ${chartHeight / 2})`}
          className="fill-muted-foreground text-[10px] font-mono"
        >
          Score
        </text>
      </svg>

      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-primary" />
          <span className="text-xs text-muted-foreground">Proprietary</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-emerald-500" />
          <span className="text-xs text-muted-foreground">Open Source</span>
        </div>
      </div>
    </div>
  );
}
