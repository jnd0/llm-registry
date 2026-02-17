import { DataTable } from "@/components/dashboard/leaderboard";
import { benchmarks, models } from "@/lib/registry-data";
import { changelog } from "@/data/changelog";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import Link from "next/link";
import { benchmarkCategories, categoryToSlug, slugToCategory } from "@/lib/categories";
import { getHomeMetrics } from "@/lib/home-metrics";
import { parseLeaderboardQueryParams, queryLeaderboardModels } from "@/lib/leaderboard-query";
import { cn } from "@/lib/utils";
import { getProviderTheme } from "@/lib/provider-identity";

interface HomePageProps {
  searchParams: Promise<{
    category?: string;
    q?: string;
    sort?: string;
    dir?: string;
    page?: string;
    pageSize?: string;
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
  const activeCategory = slugToCategory(params?.category);
  const activeCategorySlug = activeCategory ? categoryToSlug(activeCategory) : null;
  const queryParams = parseLeaderboardQueryParams(params, benchmarks, { activeCategory });
  const leaderboard = queryLeaderboardModels(models, benchmarks, queryParams);
  const { latestScoreDate, mappedBenchmarks, quickHighlights, totalScores } = getHomeMetrics(models, benchmarks);

  const latestRelease = changelog[0];
  const latestArrival = [...models].sort((a, b) => b.releaseDate.localeCompare(a.releaseDate))[0];
  const latestArrivalTheme = latestArrival ? getProviderTheme(latestArrival.provider) : null;

  return (
    <div className="animate-in fade-in duration-500 space-y-5">
      <section className="surface-panel relative overflow-hidden rounded-2xl px-5 py-6 sm:px-7 sm:py-7">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_-28%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_40%)] dark:bg-[radial-gradient(circle_at_18%_-28%,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_40%)]" />
        <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:items-end">
          <div className="space-y-4">
            <p className="label-eyebrow">Registry / Benchmarks / Live Leaderboard</p>
            <h1 className="text-4xl font-display font-bold tracking-[-0.03em] text-foreground sm:text-[4.1rem] sm:leading-[0.95]">
              Global Benchmark Leaderboard
            </h1>
            <p className="max-w-4xl text-base text-muted-foreground sm:text-[1.6rem] sm:leading-[1.33]">
              Tracking provenance, performance, and compliance across verified models.
            </p>
            <p className="flex items-center gap-2 font-mono text-sm tracking-wide text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Last updated: <span className="font-semibold text-foreground">{latestScoreDate || "Unknown"}</span>
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <Link
                href="/"
                className={cn(
                  "chip-pill rounded-full px-4 py-2 text-sm font-medium",
                  !activeCategory
                    ? "border-primary/50 bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                All Models
              </Link>
              {benchmarkCategories.slice(0, 5).map((category) => {
                const slug = categoryToSlug(category);
                const isActive = activeCategory === category;
                return (
                  <Link
                    key={category}
                    href={`/?category=${slug}`}
                    className={cn(
                      "chip-pill rounded-full px-4 py-2 text-sm font-medium",
                      isActive
                        ? "border-primary/50 bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {category}
                  </Link>
                );
              })}
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <Button asChild variant="outline" size="sm" className="h-10 px-4 text-sm font-medium">
                <Link href="/api/v1/scores">Export Snapshot</Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="h-10 px-4 text-sm font-medium">
                <Link href="/about">History</Link>
              </Button>
              <Button asChild size="sm" className="h-10 px-4 text-sm font-semibold shadow-[0_12px_28px_-20px_var(--color-primary)] sm:col-span-2">
                <Link href={activeCategorySlug ? `/compare?category=${activeCategorySlug}` : "/compare"}>Open Compare</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.95fr_1.95fr_1fr]">
        <article className="surface-card relative rounded-2xl p-5">
          <p className="label-eyebrow">Registry Stats</p>
          <p className="mt-4 font-display text-6xl font-bold leading-none tracking-[-0.03em] text-foreground">{models.length}</p>
          <p className="mt-1 text-2xl text-muted-foreground">verified</p>
          <p className="mt-2 text-sm text-muted-foreground">Active foundation models tracking live.</p>
          <div className="mt-9 border-t border-border pt-4 font-mono text-sm tracking-wide text-muted-foreground">
            <span className="text-primary">{totalScores}</span> scores logged
          </div>
        </article>

        <article className="surface-card rounded-2xl p-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="label-eyebrow">Top Performers By Category</p>
            <Link href="/" className="text-sm font-medium text-primary hover:underline">View All</Link>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {quickHighlights.slice(0, 4).map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-muted/45 p-3 dark:bg-muted/20">
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">{item.label}</p>
                <p className="mt-2 truncate text-2xl font-semibold tracking-tight text-foreground">{item.model?.name ?? "TBD"}</p>
                <p className="mt-1 font-mono text-sm text-primary">
                  {item.value === null
                    ? "--"
                    : item.format === "ratio"
                      ? `${item.value.toFixed(1)}x`
                      : `${item.value.toFixed(1)} pts`}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-slate-700/70 bg-[linear-gradient(155deg,#030914_12%,#061226_45%,#0b0b13_100%)] p-5 text-slate-100 shadow-[0_10px_40px_-24px_rgba(3,105,161,0.6)]">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-400">Latest Arrival</p>
          <span className="mt-4 inline-flex rounded-full border border-slate-500/60 bg-slate-900/70 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-slate-200">
            New
          </span>
          <p className="mt-4 text-4xl font-display font-bold tracking-[-0.03em] text-white">{latestArrival?.name ?? "Model"}</p>
          <p className="mt-2 text-sm text-slate-300">{latestArrival?.provider ?? "Unknown provider"}&apos;s latest entry with benchmark-ready provenance.</p>
          {latestArrival && latestArrivalTheme && (
            <div className="mt-3">
              <span className={cn("rounded-sm px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em]", latestArrivalTheme.border, latestArrivalTheme.bg, latestArrivalTheme.text)}>
                {latestArrival.provider}
              </span>
            </div>
          )}
          <div className="mt-8 flex items-center justify-between border-t border-slate-700/70 pt-3 font-mono text-xs text-slate-300">
            <span>Added {latestArrival?.releaseDate ?? "Unknown"}</span>
            {latestArrival ? <Link href={`/model/${latestArrival.id}`} className="font-medium text-white hover:underline">View Details</Link> : <span>View Details</span>}
          </div>
        </article>
      </section>

      <section className="surface-card rounded-xl px-4 py-3">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wide text-muted-foreground">
          <span className="chip-pill px-2 py-1">Mapped IDs {mappedBenchmarks}</span>
          <span className="chip-pill px-2 py-1">Scores {totalScores}</span>
          <span className="chip-pill px-2 py-1">Version {latestRelease?.version ?? "n/a"}</span>
        </div>
      </section>

      <Suspense fallback={<div className="surface-card flex h-96 items-center justify-center rounded-xl font-mono text-sm uppercase tracking-[0.12em] text-muted-foreground">Loading Leaderboard…</div>}>
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
        />
      </Suspense>
    </div>
  );
}
