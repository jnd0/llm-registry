"use client";

import { useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { DataTable } from "@/components/dashboard/leaderboard";
import { parseLeaderboardQueryParams, queryLeaderboardModels } from "@/lib/leaderboard-query";
import { Benchmark, Model } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

interface ClientLeaderboardProps {
  models: Model[];
  benchmarks: Benchmark[];
}

function LoadingShell() {
  return (
    <div className="space-y-4 rounded-xl border border-border/40 bg-card/30 p-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-8 w-64" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
      </div>
    </div>
  );
}

function ClientLeaderboardInner({ models, benchmarks }: ClientLeaderboardProps) {
  const searchParams = useSearchParams();

  // Convert URLSearchParams to plain object
  const params = useMemo(() => {
    const plainParams: Record<string, string | undefined> = {};
    searchParams.forEach((value, key) => {
      plainParams[key] = value;
    });
    return plainParams;
  }, [searchParams]);

  // Parse query params (client-side)
  const queryParams = useMemo(
    () => parseLeaderboardQueryParams(params, benchmarks),
    [params, benchmarks]
  );

  // Filter/sort models (client-side with useMemo)
  const leaderboard = useMemo(
    () => queryLeaderboardModels(models, benchmarks, queryParams),
    [models, benchmarks, queryParams]
  );

  return (
    <DataTable
      data={leaderboard.rows}
      benchmarks={benchmarks}
      activeCategory={null}
      activeCategorySlug={null}
      totalRows={leaderboard.total}
      currentPage={leaderboard.page}
      totalPages={leaderboard.totalPages}
      pageSize={leaderboard.pageSize}
      sortBy={leaderboard.sortBy}
      sortDir={leaderboard.sortDir}
      searchQuery={leaderboard.query}
      license={leaderboard.license}
      domain={leaderboard.domain}
      sourcesFilter={leaderboard.sources}
      verificationFilter={leaderboard.verification}
      coverageMode={leaderboard.coverageMode}
    />
  );
}

export function ClientLeaderboard({ models, benchmarks }: ClientLeaderboardProps) {
  return (
    <Suspense fallback={<LoadingShell />}>
      <ClientLeaderboardInner models={models} benchmarks={benchmarks} />
    </Suspense>
  );
}
