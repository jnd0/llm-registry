"use client";

import { CellContext, ColumnDef, HeaderContext } from "@tanstack/react-table";
import { Model, Benchmark } from "@/types";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, ChevronDown, Check } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { sources } from "@/data/sources";
import { normalizeScore } from "@/lib/stats";
import { getProviderTheme } from "@/lib/provider-identity";

const sourceMap = new Map(sources.map((source) => [source.id, source]));

function getVerificationLabel(level?: string, verified?: boolean) {
  if (level === "third_party") return "Third-party";
  if (level === "provider") return "Provider";
  if (level === "community") return "Community";
  if (level === "estimated") return "Estimated";
  return verified ? "Verified" : "Unverified";
}

export interface ModelComputedMetrics {
  coverage: number;
  categoryAverages: Record<string, number | null>;
}

function getScorePillClass(normalizedScore: number) {
  if (normalizedScore >= 85) {
    return "border-emerald-500/25 bg-emerald-500/14 text-emerald-700 dark:text-emerald-300";
  }
  if (normalizedScore >= 70) {
    return "border-blue-500/25 bg-blue-500/14 text-blue-700 dark:text-blue-300";
  }
  if (normalizedScore >= 50) {
    return "border-amber-500/25 bg-amber-500/14 text-amber-700 dark:text-amber-300";
  }
  return "border-rose-500/25 bg-rose-500/14 text-rose-700 dark:text-rose-300";
}

export function createColumns(
  benchmarks: Benchmark[], 
  toggleCompare: (id: string) => void,
  isCompared: (id: string) => boolean,
  metricsByModel: Map<string, ModelComputedMetrics>
): ColumnDef<Model>[] {
  const categories = Array.from(new Set(benchmarks.map(b => b.category)));

  const categoryAverageColumns: ColumnDef<Model>[] = categories.map(category => ({
    id: `avg-${category.toLowerCase().replace(/\s+/g, '-')}`,
    accessorFn: (row: Model) => {
      const metrics = metricsByModel.get(row.id);
      const value = metrics?.categoryAverages[category] ?? null;
      return value ?? -1;
    },
    header: ({ column }) => (
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="group/header h-11 min-h-11 w-full justify-start px-0 font-mono text-xs font-semibold tracking-[0.06em] text-primary/90 hover:bg-transparent hover:text-primary"
            >
              <span className="border-b border-primary/30 pb-0.5">
                {category} AVG
            </span>
            <ArrowUpDown className="ml-1 h-3 w-3 opacity-0 group-hover/header:opacity-50 transition-opacity" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="border-border bg-popover p-2 text-popover-foreground shadow-lg">
          <p className="text-xs font-mono tracking-wide">Aggregate performance across all {category} evaluations.</p>
        </TooltipContent>
      </Tooltip>
    ),
    cell: ({ getValue }) => {
      const val = getValue() as number;
      if (val === -1) {
        return <div className="select-none pl-2 font-mono text-sm text-muted-foreground/30">--.-</div>;
      }

      return (
        <div className="pl-2">
          <span
            className={cn(
              "inline-flex min-w-[84px] items-center justify-center rounded-md border px-2.5 py-1 font-mono text-sm font-semibold tabular-nums",
              getScorePillClass(val)
            )}
          >
            {val.toFixed(1)}%
          </span>
        </div>
      );
    },
    enableHiding: true,
  }));

  return [
    {
      id: "select",
      header: () => (
        <Tooltip delayDuration={200}>
          <TooltipTrigger className="cursor-help">
            <span className="sr-only">Compare</span>
            <div className="w-4 h-4 border border-muted-foreground/30 rounded-sm mx-auto" />
          </TooltipTrigger>
          <TooltipContent className="border-border bg-popover p-2 text-popover-foreground shadow-lg">
            <p className="text-xs font-mono tracking-wide">Select up to 3 systems for head-to-head analysis.</p>
          </TooltipContent>
        </Tooltip>
      ),
      cell: ({ row }) => (
        <div className="flex justify-center pl-4">
            <label className="group/checkbox relative flex h-11 w-11 cursor-pointer items-center justify-center">
              <input
                type="checkbox"
                aria-label={`Toggle compare for ${row.original.name}`}
                className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-border bg-transparent transition-all hover:border-primary/60 checked:border-primary checked:bg-primary focus:ring-2 focus:ring-primary/20"
                checked={isCompared(row.original.id)}
                onChange={() => toggleCompare(row.original.id)}
              />
              <Check className="pointer-events-none absolute h-3.5 w-3.5 text-primary-foreground opacity-0 transition-opacity peer-checked:opacity-100" strokeWidth={3} />
            </label>
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
      size: 64,
    },
    {
      accessorKey: "name",
      header: () => (
        <Tooltip delayDuration={200}>
          <TooltipTrigger className="cursor-help text-left font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground">
            Model System
          </TooltipTrigger>
          <TooltipContent className="border-border bg-popover p-2 text-popover-foreground shadow-lg">
            <p className="text-xs font-mono tracking-wide">Neural architecture ID and provider details.</p>
          </TooltipContent>
        </Tooltip>
      ),
      cell: ({ row }) => {
        const providerTheme = getProviderTheme(row.original.provider);

        return (
          <div className="group/name flex min-w-[220px] flex-col py-2">
            <Link
              href={`/model/${row.original.id}`}
               className="flex items-center gap-2 font-display text-base font-bold tracking-tight text-foreground transition-colors duration-200 hover:text-primary"
            >
              {row.original.name}
              {row.original.variants && row.original.variants.length > 0 && (
                <span className="flex h-4 items-center rounded-full bg-primary/10 px-1.5 font-mono text-[9px] font-bold uppercase tracking-wider text-primary">
                  {row.original.variants.length} Variants
                </span>
              )}
              <ChevronDown className="h-3 w-3 -rotate-90 text-primary/50 opacity-0 transition-all group-hover/name:opacity-100" />
            </Link>
            <div className="mt-2 flex items-center gap-2">
              <span
                className={cn(
                  "rounded-sm px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors",
                  providerTheme.border,
                  providerTheme.bg,
                  providerTheme.text
                )}
              >
                {row.original.provider}
              </span>
              {row.original.isOpenSource && (
                <span className="flex items-center gap-1.5 rounded-sm border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] tracking-[0.08em] text-emerald-700 dark:text-emerald-400">
                  <div className="h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                  Open Weights
                </span>
              )}
            </div>
          </div>
        );
      },
      size: 296,
    },
    {
      accessorKey: "releaseDate",
      header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
               className="group/header h-11 min-h-11 px-0 font-mono text-xs tracking-[0.1em] text-muted-foreground transition-colors hover:bg-transparent hover:text-foreground"
            >
              Release
              <ArrowUpDown className="ml-1 h-3 w-3 opacity-30 group-hover/header:opacity-100 transition-opacity" />
            </Button>
          );
        },
      cell: ({ row }) => (
           <span className="text-sm font-mono text-muted-foreground tabular-nums opacity-80 group-hover/row:opacity-100 transition-opacity">
               {row.original.releaseDate}
           </span>
      ),
    },
    {
      id: "context",
      accessorFn: (row) => row.specs.contextWindow,
      header: () => (
        <Tooltip delayDuration={200}>
          <TooltipTrigger className="cursor-help text-left font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground">
            Ctx Window
          </TooltipTrigger>
          <TooltipContent className="border-border bg-popover p-2 text-popover-foreground shadow-lg">
            <p className="text-xs font-mono tracking-wide">Maximum sequence length supported by the model (tokens).</p>
          </TooltipContent>
        </Tooltip>
      ),
      cell: ({ row }) => {
        const val = row.original.specs.contextWindow;
        const displayVal = val >= 1000000 ? `${(val / 1000000).toFixed(0)}M` : `${(val / 1000).toFixed(0)}k`;
        return (
          <div className="w-fit rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-sm tabular-nums text-foreground/90 transition-colors group-hover/row:border-primary/25">
            {displayVal}
          </div>
        );
      }
    },
    {
      id: "coverage",
      accessorFn: (row) => metricsByModel.get(row.id)?.coverage ?? 0,
      header: ({ column }) => (
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="group/header h-11 min-h-11 w-full justify-start px-0 font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground transition-colors hover:bg-transparent hover:text-foreground"
            >
              Coverage
              <ArrowUpDown className="ml-1.5 h-3 w-3 opacity-0 group-hover/header:opacity-50 transition-opacity text-primary" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="border-border bg-popover p-2 text-popover-foreground shadow-lg">
            <p className="text-xs font-mono tracking-wide">Benchmark coverage across the full registry.</p>
          </TooltipContent>
        </Tooltip>
      ),
    cell: ({ getValue }) => {
      const value = getValue() as number;
      return (
          <div className="pl-2">
            <span
              className={cn(
                "inline-flex min-w-[84px] items-center justify-center rounded-md border px-2.5 py-1 font-mono text-sm font-semibold tabular-nums",
                getScorePillClass(value)
              )}
            >
              {value.toFixed(1)}%
            </span>
          </div>
        );
      },
      enableHiding: true,
      size: 124,
    },
    ...categoryAverageColumns,
    ...benchmarks.map((benchmark) => ({
      id: benchmark.id,
      accessorFn: (row: Model) => {
        const rawScore = row.scores[benchmark.id]?.score;
        if (rawScore === null || rawScore === undefined) return -1;
        return normalizeScore(rawScore, benchmark);
      },
      header: ({ column }: HeaderContext<Model, unknown>) => {
        const shortName = benchmark.id === "swe-bench-verified" ? "SWE" : 
                         benchmark.id === "lmarena-elo" ? "ELO" :
                         benchmark.id === "gpqa-diamond" ? "GPQA" :
                         benchmark.id === "human-eval" ? "HUMA" :
                         benchmark.id === "bigcodebench" ? "BCB" :
                         benchmark.id === "agentbench" ? "AGE" :
                         benchmark.id.toUpperCase().substring(0, 4);
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            title={`${benchmark.name} - ${benchmark.description}`}
            className="group/header h-11 min-h-11 w-full justify-start px-0 font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground transition-colors hover:bg-transparent hover:text-foreground"
          >
            <span className="group-hover/header:text-foreground transition-colors border-b border-transparent group-hover/header:border-primary/50 pb-0.5">
              {shortName}
            </span>
            <ArrowUpDown className="ml-1.5 h-3 w-3 opacity-0 group-hover/header:opacity-50 transition-opacity text-primary" />
          </Button>
        );
      },
      cell: ({ row }: CellContext<Model, unknown>) => {
        const scoreEntry = row.original.scores[benchmark.id];
        const score = scoreEntry?.score;
        if (score === null || score === undefined)
          return (
            <div className="select-none pl-2 font-mono text-sm text-muted-foreground/25">--.-</div>
          );

        const source = scoreEntry?.sourceId ? sourceMap.get(scoreEntry.sourceId) : undefined;
        const sourceUrl = scoreEntry?.sourceUrl ?? source?.url ?? benchmark.link;
        const sourceLabel = source?.name ?? "Source";
        const verificationLabel = getVerificationLabel(scoreEntry?.verificationLevel, scoreEntry?.verified);
        const isArtificialAnalysis = scoreEntry?.sourceId === "artificial-analysis";
        const normalizedScore = normalizeScore(score, benchmark);

        const displayScore = `${score.toFixed(benchmark.maxScore > 100 ? 0 : 1)}${isArtificialAnalysis ? "*" : ""}`;

        return (
          <div className="pl-2">
            <span
              className={cn(
                "inline-flex min-w-[84px] items-center justify-center rounded-md border px-2.5 py-1 font-mono text-sm font-semibold tabular-nums",
                getScorePillClass(normalizedScore)
              )}
              title={`${verificationLabel} | ${sourceLabel} | ${scoreEntry?.asOfDate ?? "unknown date"}${sourceUrl ? ` | ${sourceUrl}` : ""} | normalized ${normalizedScore.toFixed(1)}`}
            >
              {displayScore}
            </span>
          </div>
         );
      },
    })),
  ];
}
