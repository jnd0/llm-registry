"use client";

import { Benchmark, Model } from "@/types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getProviderTheme } from "@/lib/provider-identity";
import { sources } from "@/data/sources";
import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search, ArrowUpDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMergedSearchParams } from "@/hooks/use-merged-search-params";
import { getFreshnessLevel, formatDaysAgo } from "@/lib/freshness";

const sourceMap = new Map(sources.map((s) => [s.id, s]));

interface BenchmarkLeaderboardProps {
  benchmark: Benchmark;
  models: Model[];
  sotaScore: number;
  initialSearch?: string;
  initialLicense?: "all" | "open" | "proprietary";
  initialSort?: string;
  initialDir?: "asc" | "desc";
}

function getVerificationBadge(level?: string, verified?: boolean) {
  if (level === "third_party") return { label: "3rd Party", class: "bg-blue-500/10 text-blue-600 dark:text-blue-400" };
  if (level === "provider") return { label: "Provider", class: "bg-amber-500/10 text-amber-600 dark:text-amber-400" };
  if (level === "community") return { label: "Community", class: "bg-purple-500/10 text-purple-600 dark:text-purple-400" };
  if (level === "estimated") return { label: "Est.", class: "bg-slate-500/10 text-slate-600 dark:text-slate-400" };
  if (verified) return { label: "Verified", class: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" };
  return { label: "Unverified", class: "bg-muted text-muted-foreground" };
}

function formatParameters(params: string | undefined): string {
  if (!params || params === "Unknown") return "—";
  return params;
}

export function BenchmarkLeaderboard({ 
  benchmark, 
  models, 
  sotaScore,
  initialSearch = "",
  initialLicense = "all",
  initialSort,
  initialDir,
}: BenchmarkLeaderboardProps) {
  const { searchParams, updateParams } = useMergedSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || initialSearch);
  const [licenseFilter, setLicenseFilter] = useState<"all" | "open" | "proprietary">(
    (searchParams.get("license") as "all" | "open" | "proprietary") || initialLicense
  );
  const [sortKey, setSortKey] = useState(searchParams.get("sort") ?? initialSort ?? "score");
  const [sortDir, setSortDir] = useState<"asc" | "desc">(
    (searchParams.get("dir") as "asc" | "desc") ?? initialDir ?? (benchmark.higherIsBetter ? "desc" : "asc")
  );
  const [compareIds, setCompareIds] = useState<string[]>([]);

  useEffect(() => {
    updateParams({
      q: search || null,
      license: licenseFilter !== "all" ? licenseFilter : null,
      sort: sortKey !== "score" ? sortKey : null,
      dir: sortDir !== (benchmark.higherIsBetter ? "desc" : "asc") ? sortDir : null,
    });
  }, [search, licenseFilter, sortKey, sortDir, updateParams, benchmark.higherIsBetter]);

  const hasAAData = useMemo(() => models.some((model) => {
    const scoreEntry = model.scores[benchmark.id];
    const source = scoreEntry?.sourceId ? sourceMap.get(scoreEntry.sourceId) : null;
    return source?.id === "artificial-analysis";
  }), [models, benchmark.id]);

  const filteredModels = useMemo(() => {
    let result = models.filter((model) => {
      const matchesSearch = !search || 
        model.name.toLowerCase().includes(search.toLowerCase()) ||
        model.provider.toLowerCase().includes(search.toLowerCase());
      
      const matchesLicense = licenseFilter === "all" ||
        (licenseFilter === "open" && model.isOpenSource) ||
        (licenseFilter === "proprietary" && !model.isOpenSource);
      
      return matchesSearch && matchesLicense;
    });

    result = [...result].sort((a, b) => {
      let aVal: number | string = 0;
      let bVal: number | string = 0;

      switch (sortKey) {
        case "score":
          aVal = a.scores[benchmark.id]?.score ?? 0;
          bVal = b.scores[benchmark.id]?.score ?? 0;
          break;
        case "releaseDate":
          aVal = a.releaseDate;
          bVal = b.releaseDate;
          break;
        case "provider":
          aVal = a.provider;
          bVal = b.provider;
          break;
        case "parameters":
          aVal = a.specs.parameters ?? "Unknown";
          bVal = b.specs.parameters ?? "Unknown";
          break;
        default:
          aVal = a.scores[benchmark.id]?.score ?? 0;
          bVal = b.scores[benchmark.id]?.score ?? 0;
      }

      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDir === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      
      const numA = typeof aVal === "number" ? aVal : 0;
      const numB = typeof bVal === "number" ? bVal : 0;
      
      if (sortKey === "score" && !benchmark.higherIsBetter) {
        return sortDir === "asc" ? numA - numB : numB - numA;
      }
      
      return sortDir === "asc" ? numA - numB : numB - numA;
    });

    return result;
  }, [models, search, licenseFilter, sortKey, sortDir, benchmark.id, benchmark.higherIsBetter]);

  const toggleCompare = (id: string) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id);
      }
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir(key === "score" && !benchmark.higherIsBetter ? "asc" : "desc");
    }
  };

  const renderSortHeader = (label: string, sortValue: string) => (
    <button
      onClick={() => handleSort(sortValue)}
      className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
    >
      {label}
      <ArrowUpDown className={cn("h-3 w-3", sortKey === sortValue ? "text-primary" : "opacity-30")} />
    </button>
  );

  return (
    <div>
      {compareIds.length > 0 && (
        <div className="sticky top-0 z-20 bg-primary/10 border-b border-primary/20 px-4 py-2 flex items-center justify-between">
          <span className="text-sm font-medium text-primary">
            {compareIds.length} model{compareIds.length > 1 ? "s" : ""} selected
          </span>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-7 text-xs"
              onClick={() => setCompareIds([])}
            >
              Clear
            </Button>
            <Link href={`/compare?models=${compareIds.join(",")}`}>
              <Button size="sm" className="h-7 text-xs">
                Compare Selected
              </Button>
            </Link>
          </div>
        </div>
      )}

      <div className="p-4 border-b border-border/40 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground/60" />
          <Input
            placeholder="Search models..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-8 pl-9 text-sm bg-muted/30 border-border/50"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-muted/30 p-0.5 rounded-full border border-border/40">
            <button
              onClick={() => setLicenseFilter("all")}
              className={cn(
                "h-6 rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider transition-all",
                licenseFilter === "all" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              All
            </button>
            <button
              onClick={() => setLicenseFilter("open")}
              className={cn(
                "h-6 rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider transition-all",
                licenseFilter === "open" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Open
            </button>
            <button
              onClick={() => setLicenseFilter("proprietary")}
              className={cn(
                "h-6 rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider transition-all",
                licenseFilter === "proprietary" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Proprietary
            </button>
          </div>
          
          <span className="text-xs text-muted-foreground font-mono">
            {filteredModels.length} {filteredModels.length === 1 ? "model" : "models"}
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/40 bg-muted/20">
              <th className="w-10 px-3 py-2.5">
                <span className="sr-only">Select</span>
              </th>
              <th className="px-4 py-2.5 text-left font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Rank
              </th>
              <th className="px-4 py-2.5 text-left font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Model
              </th>
              <th className="px-4 py-2.5 text-left font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                {renderSortHeader("Provider", "provider")}
              </th>
              <th className="px-4 py-2.5 text-left font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                {renderSortHeader("Params", "parameters")}
              </th>
              <th className="px-4 py-2.5 text-left font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                {renderSortHeader("Released", "releaseDate")}
              </th>
              <th className="px-4 py-2.5 text-right font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                {renderSortHeader("Score", "score")}
              </th>
              <th className="px-4 py-2.5 text-right font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Gap to SOTA
              </th>
              <th className="px-4 py-2.5 text-center font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                License
              </th>
              <th className="px-4 py-2.5 text-center font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Verification
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {filteredModels.map((model, idx) => {
              const scoreEntry = model.scores[benchmark.id];
              const score = scoreEntry?.score;
              const theme = getProviderTheme(model.provider);
              const verification = getVerificationBadge(scoreEntry?.verificationLevel, scoreEntry?.verified);
              const source = scoreEntry?.sourceId ? sourceMap.get(scoreEntry.sourceId) : null;
              const isAA = source?.id === "artificial-analysis";
              const isCompareSelected = compareIds.includes(model.id);
              const freshness = getFreshnessLevel(scoreEntry?.asOfDate);
              const daysAgo = formatDaysAgo(scoreEntry?.asOfDate);
              
              const gapToSota = score !== null && score !== undefined
                ? benchmark.higherIsBetter 
                  ? sotaScore - score 
                  : score - sotaScore
                : null;
              
              return (
                <tr
                  key={model.id}
                  className={cn(
                    "group/row transition-colors",
                    isCompareSelected ? "bg-primary/5" : "hover:bg-muted/30"
                  )}
                >
                  <td className="px-3 py-3">
                    <button
                      onClick={() => toggleCompare(model.id)}
                      className={cn(
                        "h-5 w-5 rounded border flex items-center justify-center transition-colors",
                        isCompareSelected 
                          ? "bg-primary border-primary text-primary-foreground"
                          : "border-border hover:border-primary"
                      )}
                    >
                      {isCompareSelected && <Check className="h-3 w-3" />}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "inline-flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold",
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
                  <td className="px-4 py-3">
                    <Link
                      href={`/model/${model.id}`}
                      className="font-display font-bold text-foreground group-hover/row:text-primary transition-colors"
                    >
                      {model.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3">
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
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                    {formatParameters(model.specs.parameters)}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                    {model.releaseDate}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="font-mono text-sm font-bold text-foreground inline-flex items-center gap-1">
                      {score?.toFixed(1)}{benchmark.unit ?? "%"}
                      {isAA && <span className="text-primary ml-0.5">*</span>}
                      {freshness === "stale" && (
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" title={`Stale: ${daysAgo}`} />
                      )}
                      {freshness === "aging" && (
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" title={`Aging: ${daysAgo}`} />
                      )}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className={cn(
                      "font-mono text-xs",
                      gapToSota === 0 
                        ? "text-primary font-bold" 
                        : "text-muted-foreground"
                    )}>
                      {gapToSota !== null ? (gapToSota === 0 ? "SOTA" : `+${gapToSota.toFixed(1)}`) : "—"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
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
                  <td className="px-4 py-3 text-center">
                    <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-bold", verification.class)}>
                      {verification.label}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {filteredModels.length === 0 && (
          <div className="px-6 py-12 text-center text-sm text-muted-foreground">
            No models match your filters.
          </div>
        )}
      </div>

      {filteredModels.length > 0 && hasAAData && (
        <div className="px-6 py-2.5 border-t border-border/30 text-xs text-muted-foreground flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span className="text-primary">*</span>
            <span>Data from Artificial Analysis</span>
          </span>
        </div>
      )}
    </div>
  );
}
