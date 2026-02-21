"use client";

import { useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { DataTable } from "@/components/dashboard/leaderboard";
import { parseLeaderboardQueryParams, queryLeaderboardModels } from "@/lib/leaderboard-query";
import { Benchmark, BenchmarkCategory, Model } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

interface ClientCategoryLeaderboardProps {
  models: Model[];
  benchmarks: Benchmark[];
  activeCategory: BenchmarkCategory;
  activeCategorySlug: string;
}

function LoadingShell() {
  return (
    <div className="surface-card flex h-96 items-center justify-center rounded-xl font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
      Loading Category Leaderboard…
    </div>
  );
}

function ClientCategoryLeaderboardInner({
  models,
  benchmarks,
  activeCategory,
  activeCategorySlug,
}: ClientCategoryLeaderboardProps) {
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
    () => parseLeaderboardQueryParams(params, benchmarks, { activeCategory }),
    [params, benchmarks, activeCategory]
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
      activeCategory={activeCategory}
      activeCategorySlug={activeCategorySlug}
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

export function ClientCategoryLeaderboard(props: ClientCategoryLeaderboardProps) {
  return (
    <Suspense fallback={<LoadingShell />}>
      <ClientCategoryLeaderboardInner {...props} />
    </Suspense>
  );
}
