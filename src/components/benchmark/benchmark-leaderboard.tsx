"use client";

import { Benchmark, Model } from "@/types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getProviderTheme } from "@/lib/provider-identity";

interface BenchmarkLeaderboardProps {
  benchmark: Benchmark;
  models: Model[];
}

export function BenchmarkLeaderboard({ benchmark, models }: BenchmarkLeaderboardProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/40 bg-muted/20">
            <th className="px-6 py-3 text-left font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Rank
            </th>
            <th className="px-6 py-3 text-left font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Model
            </th>
            <th className="px-6 py-3 text-left font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Provider
            </th>
            <th className="px-6 py-3 text-left font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Release Date
            </th>
            <th className="px-6 py-3 text-right font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Score
            </th>
            <th className="px-6 py-3 text-center font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              License
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/30">
          {models.map((model, idx) => {
            const score = model.scores[benchmark.id]?.score;
            const theme = getProviderTheme(model.provider);
            
            return (
              <tr
                key={model.id}
                className="group/row hover:bg-muted/30 transition-colors"
              >
                <td className="px-6 py-4">
                  <span
                    className={cn(
                      "inline-flex h-6 w-6 items-center justify-center rounded text-xs font-bold",
                      idx === 0
                        ? "bg-amber-500/20 text-amber-600 dark:text-amber-400"
                        : idx === 1
                          ? "bg-slate-400/20 text-slate-600 dark:text-slate-300"
                          : idx === 2
                            ? "bg-orange-700/20 text-orange-700 dark:text-orange-400"
                            : "bg-muted text-muted-foreground"
                    )}
                  >
                    {idx + 1}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Link
                    href={`/model/${model.id}`}
                    className="font-display font-bold text-foreground group-hover/row:text-primary transition-colors"
                  >
                    {model.name}
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={cn(
                      "inline-block rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                      theme.bg,
                      theme.text
                    )}
                  >
                    {model.provider}
                  </span>
                </td>
                <td className="px-6 py-4 font-mono text-xs text-muted-foreground">
                  {model.releaseDate}
                </td>
                <td className="px-6 py-4 text-right">
                  <span className="font-mono text-sm font-bold text-foreground">
                    {score?.toFixed(1)}{benchmark.unit ?? "%"}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  {model.isOpenSource ? (
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                      Open
                    </span>
                  ) : (
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
                      Proprietary
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {models.length === 0 && (
        <div className="px-6 py-12 text-center text-sm text-muted-foreground">
          No models have been evaluated on this benchmark yet.
        </div>
      )}
    </div>
  );
}
