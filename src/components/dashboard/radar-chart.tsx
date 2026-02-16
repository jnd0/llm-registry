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
  "#0ea5e9",
  "#f472b6",
  "#10b981",
  "#f59e0b",
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
      <div className="bg-background/95 border border-white/10 p-4 shadow-xl backdrop-blur-md rounded-lg min-w-[200px]">
        <p className="font-display font-bold text-sm text-foreground mb-3 uppercase tracking-wider border-b border-white/10 pb-2">
          {label}
        </p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center justify-between gap-4 mb-2 last:mb-0 group">
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full ring-2 ring-white/10 group-hover:ring-primary/50 transition-all"
                style={{ backgroundColor: entry.color }}
              />
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                {entry.name}
              </span>
            </div>
            <span className="font-mono text-sm font-bold text-foreground tabular-nums group-hover:text-primary transition-colors">
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
    <Card className={cn("bg-card/50 border-white/5 relative overflow-hidden group shadow-lg backdrop-blur-sm", className)}>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 opacity-50 pointer-events-none" />

      <CardHeader className="relative z-10 border-b border-white/5 pb-4 space-y-1">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-display text-lg tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              Intelligence Profile
            </CardTitle>
            <CardDescription className="text-xs font-mono tracking-widest text-muted-foreground uppercase mt-1">
              MULTIVARIATE_ANALYSIS | CATEGORY-AVERAGED
            </CardDescription>
          </div>
          <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)] animate-pulse" />
        </div>
      </CardHeader>

      <CardContent className="h-[450px] relative z-10 pt-8 pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
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
                fillOpacity={0.15}
                dot={{ r: 0, fill: COLORS[index % COLORS.length], strokeWidth: 0 }}
                activeDot={{ r: 6, strokeWidth: 2, stroke: "#fff", fill: COLORS[index % COLORS.length] }}
                className="hover:opacity-100 transition-opacity duration-300 mix-blend-screen"
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
