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
import { ChevronDown } from "lucide-react";

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
      <section className="relative overflow-hidden rounded-2xl border border-border bg-card/50 px-6 py-8 sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_50%)]" />
        
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="label-eyebrow">Registry / Live Benchmarks</p>
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
                <Link href="/about">History</Link>
              </Button>
              <Button asChild size="sm" className="h-9 rounded-full px-5 text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
                <Link href={activeCategorySlug ? `/compare?category=${activeCategorySlug}` : "/compare"}>Compare</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50 px-1">
            Browse Category
          </p>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
            <Link
              href="/"
              className={cn(
                "whitespace-nowrap rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-wider transition-all",
                !activeCategory
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              All Models
            </Link>
            {benchmarkCategories.map((category) => {
              const slug = categoryToSlug(category);
              const isActive = activeCategory === category;
              return (
                <Link
                  key={category}
                  href={`/?category=${slug}`}
                  className={cn(
                    "whitespace-nowrap rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-wider transition-all",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {category}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_2fr_1fr]">
        <article className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6">
          <p className="label-eyebrow text-muted-foreground/70">Total Registry</p>
          <div className="mt-6 flex items-baseline gap-2">
            <p className="font-display text-6xl font-bold tracking-tight text-foreground">{models.length}</p>
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Models</p>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Verified foundation models tracking live performance and provenance.
          </p>
          <div className="mt-8 flex items-center gap-2 border-t border-border/50 pt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>{totalScores.toLocaleString()} Scores Logged</span>
          </div>
        </article>

        <article className="rounded-2xl border border-border bg-card/50 p-6">
          <div className="mb-6 flex items-center justify-between">
            <p className="label-eyebrow text-muted-foreground/70">Top Performers</p>
            <Link href="/" className="text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors">View All</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {quickHighlights.slice(0, 4).map((item) => (
              <div key={item.label} className="group relative overflow-hidden rounded-xl border border-border/50 bg-muted/30 p-4 transition-all hover:border-primary/30 hover:bg-muted/50">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80">{item.label}</p>
                <p className="mt-2 truncate text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">{item.model?.name ?? "TBD"}</p>
                <div className="mt-3 flex items-center justify-between">
                  <p className="font-mono text-sm font-bold text-primary">
                    {item.value === null
                      ? "--"
                      : item.format === "ratio"
                        ? `${item.value.toFixed(1)}x`
                        : `${item.value.toFixed(1)} pts`}
                  </p>
                  <div className="h-1 w-12 rounded-full bg-muted-foreground/20 overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '70%' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#020617] p-6 text-slate-100 shadow-2xl">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Latest Arrival</p>
          
          <div className="mt-6">
            <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
              New
            </span>
            <p className="mt-4 text-3xl font-display font-bold tracking-tight text-white">{latestArrival?.name ?? "Model"}</p>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">{latestArrival?.provider}&apos;s newest entry.</p>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-slate-800 pt-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{latestArrival?.releaseDate}</span>
            {latestArrival && (
              <Link href={`/model/${latestArrival.id}`} className="group flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white hover:text-primary transition-colors">
                Details
                <ChevronDown className="h-3 w-3 -rotate-90 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            )}
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
