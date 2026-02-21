"use client";

import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";
import { Benchmark, Model } from "@/types";

// Dynamic imports with SSR disabled - must be in a client component
const FrontierChart = dynamic(
  () => import("@/components/benchmark/frontier-chart").then((mod) => mod.FrontierChart),
  {
    ssr: false,
    loading: () => (
      <Card className="surface-card flex h-[400px] items-center justify-center">
        <span className="text-xs font-mono tracking-[0.12em] text-muted-foreground">Loading chart…</span>
      </Card>
    ),
  }
);

const BenchmarkLeaderboard = dynamic(
  () => import("@/components/benchmark/benchmark-leaderboard").then((mod) => mod.BenchmarkLeaderboard),
  {
    ssr: false,
    loading: () => (
      <Card className="surface-card flex h-[400px] items-center justify-center">
        <span className="text-xs font-mono tracking-[0.12em] text-muted-foreground">Loading leaderboard…</span>
      </Card>
    ),
  }
);

interface BenchmarkClientComponentsProps {
  benchmark: Benchmark;
  models: Model[];
  variantIds: Set<string>;
  sotaScore: number;
}

export function BenchmarkClientComponents({
  benchmark,
  models,
  variantIds,
  sotaScore,
}: BenchmarkClientComponentsProps) {
  return (
    <>
      <div className="surface-card rounded-xl border border-border/40 p-3 sm:p-4">
        <FrontierChart 
          benchmark={benchmark} 
          models={models}
          variantIds={variantIds}
        />
      </div>

      <div className="surface-card rounded-xl border border-border/40 overflow-hidden">
        <BenchmarkLeaderboard 
          benchmark={benchmark} 
          models={models}
          sotaScore={sotaScore}
        />
      </div>
    </>
  );
}
