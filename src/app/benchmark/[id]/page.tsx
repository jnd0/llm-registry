import { benchmarks, flattenedModels, variantIds } from "@/lib/registry-data";
import { getDomainForBenchmark } from "@/lib/domains";
import { categoryToSlug } from "@/lib/categories";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ExternalLink, ChevronRight } from "lucide-react";
import { BenchmarkLeaderboard } from "@/components/benchmark/benchmark-leaderboard";
import { FrontierChart } from "@/components/benchmark/frontier-chart";
import { BenchmarkInsights } from "@/components/benchmark/benchmark-insights";
import { SimilarBenchmarks } from "@/components/benchmark/similar-benchmarks";
import { ShareButton } from "@/components/benchmark/share-button";
import { siteUrl } from "@/lib/site";

interface BenchmarkPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    view?: string;
    variants?: string;
    range?: string;
    q?: string;
    license?: string;
    sort?: string;
    dir?: string;
  }>;
}

export async function generateStaticParams() {
  return benchmarks.map((benchmark) => ({
    id: benchmark.id,
  }));
}

export async function generateMetadata({ params }: BenchmarkPageProps): Promise<Metadata> {
  const { id } = await params;
  const benchmark = benchmarks.find((b) => b.id === id);
  
  if (!benchmark) {
    return { title: "Benchmark Not Found" };
  }

  return {
    title: `${benchmark.name} Leaderboard`,
    description: benchmark.description,
    alternates: {
      canonical: `/benchmark/${benchmark.id}`,
    },
    openGraph: {
      title: `${benchmark.name} Benchmark Leaderboard`,
      description: benchmark.description,
      url: `${siteUrl}/benchmark/${benchmark.id}`,
      type: "article",
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${benchmark.name} - LLM Registry`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${benchmark.name} Benchmark Leaderboard`,
      description: benchmark.description,
    },
  };
}

export default async function BenchmarkPage({ params, searchParams }: BenchmarkPageProps) {
  const { id } = await params;
  const rawSearchParams = await searchParams;
  const benchmark = benchmarks.find((b) => b.id === id);

  if (!benchmark) {
    notFound();
  }

  const domain = getDomainForBenchmark(benchmark);
  const categorySlug = categoryToSlug(benchmark.category);

  const modelsWithScores = flattenedModels
    .filter((model) => {
      const score = model.scores[benchmark.id]?.score;
      return score !== null && score !== undefined;
    })
    .sort((a, b) => {
      const aScore = a.scores[benchmark.id]?.score ?? 0;
      const bScore = b.scores[benchmark.id]?.score ?? 0;
      return benchmark.higherIsBetter ? bScore - aScore : aScore - bScore;
    });

  const scores = modelsWithScores.map((m) => m.scores[benchmark.id]?.score ?? 0);
  const sotaScore = scores[0] ?? 0;
  const medianScore = scores.length > 0 ? scores[Math.floor(scores.length / 2)] : 0;
  const bestOpen = modelsWithScores.find((m) => m.isOpenSource);
  const bestOpenScore = bestOpen?.scores[benchmark.id]?.score ?? null;

  const asOfDates = modelsWithScores
    .map((m) => m.scores[benchmark.id]?.asOfDate)
    .filter((d): d is string => !!d);
  const asOfRange = asOfDates.length > 0 ? {
    min: asOfDates.sort()[0],
    max: asOfDates.sort()[asOfDates.length - 1],
  } : null;

  return (
    <div className="space-y-4">
      <nav className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
        <Link href="/benchmarks" className="hover:text-foreground transition-colors">
          Benchmarks
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link href={`/leaderboard/${categorySlug}`} className="hover:text-foreground transition-colors">
          {benchmark.category}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground font-medium">{benchmark.name}</span>
      </nav>

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
              {benchmark.name}
            </h1>
            <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-[10px] font-bold text-muted-foreground">
              {benchmark.id}
            </span>
            {domain && (
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                {domain}
              </span>
            )}
            <span className={cn(
              "rounded-full px-2 py-0.5 text-[10px] font-bold",
              benchmark.higherIsBetter 
                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
            )}>
              {benchmark.higherIsBetter ? "Higher is better" : "Lower is better"}
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            {benchmark.description}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {benchmark.link && (
            <a
              href={benchmark.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border/60 px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted/50 transition-colors"
            >
              Website
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {benchmark.paperUrl && (
            <a
              href={benchmark.paperUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border/60 px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted/50 transition-colors"
            >
              Paper
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          <ShareButton />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-1 lg:col-span-2">
          <div className="surface-card rounded-xl border border-border/40 p-3 sm:p-4">
            <FrontierChart 
              benchmark={benchmark} 
              models={modelsWithScores}
              variantIds={variantIds}
              initialView={rawSearchParams.view as "all" | "frontier" | undefined}
              initialVariants={rawSearchParams.variants === "1"}
              initialRange={rawSearchParams.range as "all" | "6m" | undefined}
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="surface-card rounded-xl border border-border/40 p-3 sm:p-4">
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Benchmark Info
            </h2>
            <dl className="space-y-2.5 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Category</dt>
                <dd>
                  <Link 
                    href={`/leaderboard/${categorySlug}`}
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {benchmark.category}
                  </Link>
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Models Evaluated</dt>
                <dd className="font-mono text-foreground">{modelsWithScores.length}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Score Range</dt>
                <dd className="font-mono text-foreground">
                  {benchmark.minScore ?? 0} – {benchmark.maxScore} {benchmark.unit ?? "%"}
                </dd>
              </div>
              {asOfRange && (
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">As of</dt>
                  <dd className="font-mono text-foreground text-xs">
                    {asOfRange.min === asOfRange.max 
                      ? asOfRange.min 
                      : `${asOfRange.min} – ${asOfRange.max}`}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <BenchmarkInsights
            models={modelsWithScores}
            benchmark={benchmark}
            sotaScore={sotaScore}
            medianScore={medianScore}
            bestOpen={bestOpen}
            bestOpenScore={bestOpenScore}
          />
        </div>
      </div>

      <div className="surface-card rounded-xl border border-border/40 overflow-hidden">
        <BenchmarkLeaderboard 
          benchmark={benchmark} 
          models={modelsWithScores}
          sotaScore={sotaScore}
          initialSearch={rawSearchParams.q}
          initialLicense={rawSearchParams.license as "all" | "open" | "proprietary" | undefined}
          initialSort={rawSearchParams.sort}
          initialDir={rawSearchParams.dir as "asc" | "desc" | undefined}
        />
      </div>

      <SimilarBenchmarks currentBenchmark={benchmark} />
    </div>
  );
}
