import { DataTable } from "@/components/dashboard/leaderboard";
import { benchmarks, models } from "@/lib/registry-data";
import { changelog } from "@/data/changelog";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import Link from "next/link";
import { categoryToSlug, slugToCategory } from "@/lib/categories";
import { getHomeMetrics } from "@/lib/home-metrics";
import { parseLeaderboardQueryParams, queryLeaderboardModels } from "@/lib/leaderboard-query";
import { DomainCards } from "@/components/dashboard/domain-cards";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { Skeleton } from "@/components/ui/skeleton";
import { redirect } from "next/navigation";

interface HomePageProps {
  searchParams: Promise<{
    category?: string;
    domain?: string;
    license?: string;
    q?: string;
    sort?: string;
    dir?: string;
    page?: string;
    pageSize?: string;
    source?: string;
    verification?: string;
  }>;
}

export const metadata: Metadata = {
  title: "Leaderboard",
  description: "Explore LLM benchmark leaderboards by category with normalized scoring and provenance.",
  alternates: {
    canonical: "/",
  },
};

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;

  // Redirect old /?category=... URLs to /leaderboard/[category]
  if (params?.category) {
    const category = slugToCategory(params.category);
    if (category) {
      const slug = categoryToSlug(category);
      const remainingParams = new URLSearchParams();
      if (params.q) remainingParams.set("q", params.q);
      if (params.sort) remainingParams.set("sort", params.sort);
      if (params.dir) remainingParams.set("dir", params.dir);
      if (params.page) remainingParams.set("page", params.page);
      if (params.pageSize) remainingParams.set("pageSize", params.pageSize);
      if (params.domain) remainingParams.set("domain", params.domain);
      if (params.license) remainingParams.set("license", params.license);
      const queryString = remainingParams.toString();
      redirect(`/leaderboard/${slug}${queryString ? `?${queryString}` : ""}`);
    }
  }

  const queryParams = parseLeaderboardQueryParams(params, benchmarks);
  const leaderboard = queryLeaderboardModels(models, benchmarks, queryParams);
  const { mappedBenchmarks, quickHighlights, totalScores } = getHomeMetrics(models, benchmarks);

  const latestRelease = changelog[0];

  return (
    <div className="animate-in fade-in duration-500 space-y-5">
      <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-700 dark:text-amber-400 flex items-center gap-3">
        <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse shrink-0" />
        <p><strong>Beta version 0.5.0:</strong> *Information might not be fully accurate. Please report any discrepancies.</p>
      </div>
      <section className="relative overflow-hidden rounded-2xl border border-border bg-card/50 px-6 py-8 sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_50%)]" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="label-eyebrow">Registry / Live Benchmarks</p>
              <span className="rounded-full bg-primary/20 border border-primary/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">Beta</span>
            </div>
            <h1 className="text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Global LLM Leaderboard
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Tracking performance, provenance, and variants across verified foundation models.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-2">
              <Button asChild variant="outline" size="sm" className="h-9 rounded-full px-4 text-xs font-semibold uppercase tracking-wider">
                <Link href="/api/v1/scores">Export</Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="h-9 rounded-full px-4 text-xs font-semibold uppercase tracking-wider">
                <Link href="/about">Methodology</Link>
              </Button>
              <Button asChild size="sm" className="h-9 rounded-full px-5 text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
                <Link href="/compare">Compare</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <article className="mt-8">
        <DomainCards />
      </article>

      <section className="surface-card rounded-xl px-4 py-3">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wide text-muted-foreground">
          <span className="chip-pill px-2 py-1">Mapped IDs {mappedBenchmarks}</span>
          <span className="chip-pill px-2 py-1">Scores {totalScores}</span>
          <span className="chip-pill px-2 py-1">Version {latestRelease?.version ?? "n/a"}</span>
        </div>
      </section>

      <Suspense fallback={
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
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
        </div>
      }>
        <DataTable
          data={leaderboard.rows}
          benchmarks={benchmarks}
          activeCategory={null}
          activeCategorySlug={null}
          totalRows={leaderboard.total}
          currentPage={leaderboard.page}
          totalPages={leaderboard.totalPages}
          sortBy={leaderboard.sortBy}
          sortDir={leaderboard.sortDir}
          searchQuery={leaderboard.query}
          license={leaderboard.license}
          domain={leaderboard.domain}
          sourcesFilter={leaderboard.sources}
          verificationFilter={leaderboard.verification}
        />
      </Suspense>
    </div>
  );
}
