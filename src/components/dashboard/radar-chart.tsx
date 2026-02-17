"use client";

import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useMemo } from "react";
import { Benchmark, Model } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { normalizeScore } from "@/lib/stats";

interface RadarComparisonProps {
  models: Model[];
  benchmarks: Benchmark[];
  className?: string;
}

const COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

interface RadarTooltipEntry {
  color?: string;
  name?: string;
  value?: number;
}

interface RadarTooltipProps {
  active?: boolean;
  payload?: RadarTooltipEntry[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: RadarTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="min-w-[200px] rounded-lg border border-border bg-popover p-4 text-popover-foreground shadow-lg">
        <p className="mb-3 border-b border-border pb-2 font-display text-sm font-bold tracking-tight">
          {label}
        </p>
        {payload.map((entry, index) => (
          <div key={index} className="mb-2 flex items-center justify-between gap-4 last:mb-0">
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="font-mono text-xs tracking-[0.08em] text-muted-foreground">
                {entry.name}
              </span>
            </div>
            <span className="font-mono text-sm font-bold tabular-nums text-foreground">
              {(entry.value ?? 0).toFixed(1)}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function RadarComparison({ models, benchmarks, className }: RadarComparisonProps) {
  const categories = useMemo(
    () => Array.from(new Set(benchmarks.map((benchmark) => benchmark.category))),
    [benchmarks]
  );

  const categoryBenchmarksMap = useMemo(() => {
    const map = new Map<string, Benchmark[]>();
    categories.forEach((category) => {
      map.set(
        category,
        benchmarks.filter((benchmark) => benchmark.category === category)
      );
    });
    return map;
  }, [benchmarks, categories]);

  const data = useMemo(() => categories.map((category) => {
    const categoryBenchmarks = categoryBenchmarksMap.get(category) ?? [];
    const point: Record<string, string | number> = { subject: category, fullMark: 100 };

    models.forEach((model) => {
      const normalizedScores = categoryBenchmarks
        .map((benchmark) => {
          const score = model.scores[benchmark.id]?.score;
          if (score === null || score === undefined) return null;
          return normalizeScore(score, benchmark);
        })
        .filter((score): score is number => score !== null);

      if (normalizedScores.length === 0) {
        point[model.id] = 0;
        return;
      }

      const average = normalizedScores.reduce((acc, score) => acc + score, 0) / normalizedScores.length;
      point[model.id] = Number(average.toFixed(1));
    });

    return point;
  }), [categories, categoryBenchmarksMap, models]);

  if (models.length === 0 || categories.length === 0) return null;

  return (
    <Card className={cn("surface-card group relative overflow-hidden", className)}>
      <CardHeader className="relative z-10 space-y-1 border-b border-border bg-card/70 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-display text-lg tracking-tight text-foreground">
              Intelligence Profile
            </CardTitle>
            <CardDescription className="mt-1 text-xs font-mono tracking-[0.12em] text-muted-foreground">
              Multivariate Analysis · Category Averaged
            </CardDescription>
          </div>
          <div className="h-2 w-2 rounded-full bg-primary" />
        </div>
      </CardHeader>

      <CardContent className="relative z-10 h-[450px] pb-4 pt-8">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid stroke="var(--border)" strokeDasharray="3 3" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: "var(--muted-foreground)", fontSize: 11, fontFamily: "var(--font-geist-mono)", fontWeight: 500 }}
            />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "var(--primary)", strokeWidth: 1, strokeDasharray: "4 4" }} />

            {models.map((model, index) => (
              <Radar
                key={model.id}
                name={model.name}
                dataKey={model.id}
                stroke={COLORS[index % COLORS.length]}
                strokeWidth={2.5}
                fill={COLORS[index % COLORS.length]}
                fillOpacity={0.14}
                dot={{ r: 0, fill: COLORS[index % COLORS.length], strokeWidth: 0 }}
                activeDot={{ r: 6, strokeWidth: 2, stroke: "var(--card)", fill: COLORS[index % COLORS.length] }}
                className="transition-opacity duration-300 hover:opacity-100"
              />
            ))}
            <Legend
              wrapperStyle={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "11px",
                paddingTop: "24px",
                color: "var(--muted-foreground)",
              }}
              iconType="circle"
              formatter={(value) => <span className="text-muted-foreground font-medium ml-1">{value}</span>}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
