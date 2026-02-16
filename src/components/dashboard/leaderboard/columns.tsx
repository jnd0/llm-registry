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

// Helper for dynamic score coloring
function getScoreColor(score: number, maxScore: number) {
  // If score is ELO (typically > 1000)
  if (maxScore > 100) {
    if (score >= 1350) return "text-primary font-bold drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]";
    if (score >= 1250) return "text-emerald-400 font-medium";
    if (score >= 1150) return "text-amber-400/90";
    return "text-muted-foreground";
  }

  // Percentage-based scoring
  if (score >= 90) return "text-primary font-bold drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]";
  if (score >= 80) return "text-emerald-400 font-medium";
  if (score >= 70) return "text-amber-400/90";
  return "text-muted-foreground";
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
            className="px-0 hover:bg-transparent text-[10px] font-bold font-mono uppercase tracking-widest text-primary w-full justify-start h-10 group/header"
          >
            <span className="border-b border-primary/30 pb-0.5">
              {category} AVG
            </span>
            <ArrowUpDown className="ml-1 h-3 w-3 opacity-0 group-hover/header:opacity-50 transition-opacity" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-zinc-950 border-primary/30 text-zinc-200 p-2 rounded-none">
          <p className="text-[10px] font-mono uppercase tracking-widest">Aggregate performance across all {category} evaluations.</p>
        </TooltipContent>
      </Tooltip>
    ),
    cell: ({ getValue }) => {
      const val = getValue() as number;
      if (val === -1) return <div className="text-muted-foreground/20 text-xs font-mono select-none pl-2">--.-</div>;
      
      const colorClass = getScoreColor(val, 100);
      return (
        <div className="font-mono text-sm font-bold tabular-nums pl-2 py-4">
          <span className={cn(colorClass)}>{val.toFixed(1)}</span>
          <span className="text-[10px] text-muted-foreground/30 ml-1">%</span>
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
          <TooltipContent className="bg-zinc-950 border-primary/30 text-zinc-200 p-2 rounded-none">
            <p className="text-[10px] font-mono uppercase tracking-widest">Select up to 3 systems for head-to-head analysis.</p>
          </TooltipContent>
        </Tooltip>
      ),
      cell: ({ row }) => (
        <div className="flex justify-center pl-4">
           <div className="relative flex items-center group/checkbox">
             <input
              type="checkbox"
              aria-label={`Toggle compare for ${row.original.name}`}
              className="peer appearance-none w-5 h-5 border border-white/20 rounded bg-transparent checked:bg-primary checked:border-primary transition-all cursor-pointer focus:ring-2 focus:ring-primary/20 hover:border-primary/50"
               checked={isCompared(row.original.id)}
               onChange={() => toggleCompare(row.original.id)}
             />
            <Check className="w-3.5 h-3.5 text-primary-foreground absolute left-0.5 top-0.5 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" strokeWidth={3} />
           </div>
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
      size: 50,
    },
    {
      accessorKey: "name",
      header: () => (
        <Tooltip delayDuration={200}>
          <TooltipTrigger className="text-xs font-bold font-mono uppercase tracking-wider text-muted-foreground text-left cursor-help">
            Model System
          </TooltipTrigger>
          <TooltipContent className="bg-zinc-950 border-primary/30 text-zinc-200 p-2 rounded-none">
            <p className="text-[10px] font-mono uppercase tracking-widest">Neural architecture ID and provider details.</p>
          </TooltipContent>
        </Tooltip>
      ),
      cell: ({ row }) => (
        <div className="flex flex-col min-w-[200px] py-2 group/name">
          <Link
            href={`/model/${row.original.id}`}
            className="font-display font-bold text-foreground text-base hover:text-primary tracking-tight transition-colors flex items-center gap-2 group-hover/name:translate-x-1 duration-200"
          >
            {row.original.name}
            <ChevronDown className="w-3 h-3 opacity-0 group-hover/name:opacity-100 -rotate-90 transition-all text-primary/50" />
          </Link>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono bg-white/5 px-2 py-0.5 rounded-sm border border-white/5 group-hover/name:border-white/10 transition-colors">
              {row.original.provider}
            </span>
            {row.original.isOpenSource && (
              <span className="text-[10px] text-emerald-500/90 uppercase tracking-wider font-mono bg-emerald-500/10 px-2 py-0.5 rounded-sm flex items-center gap-1.5 border border-emerald-500/20 shadow-[0_0_8px_-2px_rgba(16,185,129,0.3)]">
                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                Open Weights
              </span>
            )}
          </div>
        </div>
      ),
    },
    {
      accessorKey: "releaseDate",
      header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="px-0 hover:bg-transparent text-xs font-mono text-muted-foreground uppercase tracking-wider h-10 hover:text-foreground transition-colors group/header"
            >
              Release
              <ArrowUpDown className="ml-1 h-3 w-3 opacity-30 group-hover/header:opacity-100 transition-opacity" />
            </Button>
          );
        },
      cell: ({ row }) => (
          <span className="text-xs font-mono text-muted-foreground tabular-nums opacity-80 group-hover/row:opacity-100 transition-opacity">
              {row.original.releaseDate}
          </span>
      ),
    },
    {
      id: "context",
      accessorFn: (row) => row.specs.contextWindow,
      header: () => (
        <Tooltip delayDuration={200}>
          <TooltipTrigger className="text-xs font-bold font-mono uppercase tracking-wider text-muted-foreground text-left cursor-help">
            Ctx Window
          </TooltipTrigger>
          <TooltipContent className="bg-zinc-950 border-primary/30 text-zinc-200 p-2 rounded-none">
            <p className="text-[10px] font-mono uppercase tracking-widest">Maximum sequence length supported by the model (Tokens).</p>
          </TooltipContent>
        </Tooltip>
      ),
      cell: ({ row }) => {
        const val = row.original.specs.contextWindow;
        const displayVal = val >= 1000000 ? `${(val / 1000000).toFixed(0)}M` : `${(val / 1000).toFixed(0)}k`;
        return (
          <div className="font-mono text-xs text-foreground/90 tabular-nums bg-white/5 px-2.5 py-1 rounded-md w-fit border border-white/5 group-hover/row:border-white/10 transition-colors">
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
              className="px-0 hover:bg-transparent text-xs font-bold font-mono uppercase tracking-wider text-muted-foreground w-full justify-start h-10 group/header hover:text-foreground transition-colors"
            >
              Coverage
              <ArrowUpDown className="ml-1.5 h-3 w-3 opacity-0 group-hover/header:opacity-50 transition-opacity text-primary" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-zinc-950 border-primary/30 text-zinc-200 p-2 rounded-none">
            <p className="text-[10px] font-mono uppercase tracking-widest">Benchmark coverage across the full registry.</p>
          </TooltipContent>
        </Tooltip>
      ),
      cell: ({ getValue }) => {
        const value = getValue() as number;
        const tone = value >= 60 ? "text-emerald-400" : value >= 30 ? "text-amber-400" : "text-rose-400";
        return (
          <div className="font-mono text-xs tabular-nums pl-2">
            <span className={cn("font-bold", tone)}>{value.toFixed(1)}</span>
            <span className="text-muted-foreground/50 ml-1">%</span>
          </div>
        );
      },
      enableHiding: true,
    },
    ...categoryAverageColumns,
    ...benchmarks.map((benchmark) => ({
      id: benchmark.id,
      accessorFn: (row: Model) => row.scores[benchmark.id]?.score ?? -1,
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
            className="px-0 hover:bg-transparent text-xs font-bold font-mono uppercase tracking-wider text-muted-foreground w-full justify-start h-10 group/header hover:text-foreground transition-colors"
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
            <div className="text-muted-foreground/20 text-xs font-mono select-none pl-2">--.-</div>
          );

        const source = scoreEntry?.sourceId ? sourceMap.get(scoreEntry.sourceId) : undefined;
        const sourceUrl = scoreEntry?.sourceUrl ?? source?.url ?? benchmark.link;
        const sourceLabel = source?.name ?? "Source";
        const verificationLabel = getVerificationLabel(scoreEntry?.verificationLevel, scoreEntry?.verified);
        const isArtificialAnalysis = scoreEntry?.sourceId === "artificial-analysis";

        const colorClass = getScoreColor(score, benchmark.maxScore);
        
        // Mini bar calculation
        let width = 0;
        if (benchmark.maxScore === 100) {
            width = Math.max(0, Math.min(100, (score - 40) * 1.6)); 
        } else {
            // Scale ELO or other non-100 benchmarks
            const min = benchmark.id === "lmarena-elo" ? 1000 : 0;
            width = Math.max(0, Math.min(100, ((score - min) / (benchmark.maxScore - min)) * 100));
        }

        return (
          <div className="relative group/cell w-full h-10 flex items-center pr-6">
              {/* Background Bar (visualizing score) */}
              <div className="absolute inset-y-2 left-0 bg-white/5 rounded overflow-hidden w-full max-w-[100px] h-6 opacity-0 group-hover/row:opacity-100 transition-opacity duration-300">
                  <div className={cn("h-full opacity-10 transition-all duration-500 ease-out", colorClass.replace('text-', 'bg-'))} style={{ width: `${width}%` }} />
              </div>
              
               <span className={cn("font-mono text-sm relative z-10 tabular-nums pl-2 transition-all group-hover/cell:scale-105 origin-left", colorClass)}>
                  {score.toFixed(benchmark.maxScore > 100 ? 0 : 1)}{isArtificialAnalysis ? "*" : ""}
               </span>
              
               <div
                 className="ml-2 px-1.5 py-0.5 rounded border border-white/10 text-[9px] font-mono uppercase tracking-wider text-muted-foreground/80"
                 title={`${verificationLabel} | ${sourceLabel} | ${scoreEntry?.asOfDate ?? row.original.releaseDate}${sourceUrl ? ` | ${sourceUrl}` : ""}`}
               >
                 {verificationLabel.slice(0, 3)}
               </div>
            </div>
         );
      },
    })),
  ];
}
