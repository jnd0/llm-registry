import { benchmarks, models } from "@/lib/registry-data";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import Link from "next/link";
import { categoryToSlug, slugToCategory } from "@/lib/categories";
import { getHomeMetrics } from "@/lib/home-metrics";
import { DomainCards } from "@/components/dashboard/domain-cards";
import { Skeleton } from "@/components/ui/skeleton";
import { redirect } from "next/navigation";
import { HomeStatsCard } from "@/components/dashboard/home-stats-card";
import { LatestArrivalCard } from "@/components/dashboard/latest-arrival-card";
import { siteName, siteUrl } from "@/lib/site";
import { HomeLeaderboardServer } from "@/components/dashboard/home-leaderboard-server";
import { toSafeJsonLd } from "@/lib/security";

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
  keywords: [
    "llm leaderboard",
    "ai benchmark rankings",
    "model benchmark scores",
    "llm performance comparison",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Global LLM Leaderboard | ${siteName}`,
    description: "Explore LLM benchmark leaderboards by category with normalized scoring and provenance.",
    url: `${siteUrl}/`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Global LLM Leaderboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Global LLM Leaderboard | ${siteName}`,
    description: "Explore LLM benchmark leaderboards by category with normalized scoring and provenance.",
    images: [`${siteUrl}/opengraph-image.png`],
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
      if (params.source) remainingParams.set("source", params.source);
      if (params.verification) remainingParams.set("verification", params.verification);
      const queryString = remainingParams.toString();
      redirect(`/leaderboard/${slug}${queryString ? `?${queryString}` : ""}`);
    }
  }

  const { totalScores, latestScoreDate } = getHomeMetrics(models, benchmarks);

  const latestArrival = [...models].sort((a, b) => b.releaseDate.localeCompare(a.releaseDate))[0];

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "LLM Registry Benchmark Dataset",
    description: "Normalized benchmark leaderboard data with provenance and verification tiers for frontier AI models.",
    url: `${siteUrl}/`,
    creator: {
      "@type": "Organization",
      name: siteName,
    },
    keywords: ["LLM benchmarks", "model leaderboard", "AI evaluation", "benchmark provenance"],
  };

  return (
    <div className="space-y-5">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toSafeJsonLd(homeStructuredData) }} />
      <section className="relative overflow-hidden rounded-2xl border border-border bg-card/50 px-6 py-8 sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_50%)]" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
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

      <section className="grid gap-5 lg:grid-cols-2">
        <HomeStatsCard 
          models={models} 
          benchmarks={benchmarks} 
          totalScores={totalScores}
          latestScoreDate={latestScoreDate}
        />
        {latestArrival && <LatestArrivalCard model={latestArrival} />}
      </section>

      <article className="mt-6">
        <DomainCards />
      </article>

      <Suspense
        fallback={
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
        }
      >
        <HomeLeaderboardServer params={params} />
      </Suspense>
    </div>
  );
}
