import { domainDefinitions, getBenchmarksForDomain, getBenchmarkIdsForDomain, domainToSlug } from "@/lib/domains";
import { flattenedModels } from "@/lib/registry-data";
import { normalizeScore } from "@/lib/stats";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteUrl } from "@/lib/site";

interface DomainPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return domainDefinitions.map((domain) => ({
    slug: domainToSlug(domain.id),
  }));
}

export async function generateMetadata({ params }: DomainPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  const domain = domainDefinitions.find((d) => domainToSlug(d.id) === slug);
  
  if (!domain) {
    return { title: "Domain Not Found" };
  }

  return {
    title: `${domain.label} Benchmarks`,
    description: domain.description,
    alternates: {
      canonical: `/domain/${slug}`,
    },
    openGraph: {
      title: `${domain.label} Benchmarks`,
      description: domain.description,
      url: `${siteUrl}/domain/${slug}`,
      type: "article",
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${domain.label} - LLM Registry`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${domain.label} Benchmarks`,
      description: domain.description,
    },
  };
}

export default async function DomainPage({ params }: DomainPageProps) {
  const { slug } = await params;
  
  const domainDef = domainDefinitions.find((d) => domainToSlug(d.id) === slug);
  
  if (!domainDef) {
    notFound();
  }

  const benchmarks = getBenchmarksForDomain(domainDef.id);
  const benchmarkIds = getBenchmarkIdsForDomain(domainDef.id);
  const benchmarkMap = new Map(benchmarks.map((b) => [b.id, b]));

  const modelsWithScores = flattenedModels
    .filter((model) => {
      return benchmarkIds.some((id) => {
        const score = model.scores[id]?.score;
        return score !== null && score !== undefined;
      });
    })
    .map((model) => {
      const normalizedScores = benchmarkIds
        .map((id) => {
          const scoreEntry = model.scores[id];
          const benchmark = benchmarkMap.get(id);
          if (scoreEntry?.score === null || scoreEntry?.score === undefined || !benchmark) return null;
          return normalizeScore(scoreEntry.score, benchmark);
        })
        .filter((s): s is number => s !== null);
      const avgScore = normalizedScores.length > 0 
        ? normalizedScores.reduce((a, b) => a + b, 0) / normalizedScores.length 
        : 0;
      return { model, avgScore, scoreCount: normalizedScores.length };
    })
    .sort((a, b) => b.avgScore - a.avgScore);

  const topModels = modelsWithScores.slice(0, 10);

  return (
    <div className="space-y-4">
      <nav className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">
          Leaderboard
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground font-medium">{domainDef.label}</span>
      </nav>

      <div>
        <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
          {domainDef.label}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
          {domainDef.longDescription || domainDef.description}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <section className="surface-card rounded-xl border border-border/40 p-4">
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Top Models
            </h2>
            <div className="space-y-2">
              {topModels.map(({ model, avgScore, scoreCount }, idx) => (
                <Link
                  key={model.id}
                  href={`/model/${model.id}`}
                  className="flex items-center justify-between gap-4 p-2 rounded-lg hover:bg-muted/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      "flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold",
                      idx === 0 ? "bg-amber-500/20 text-amber-600 dark:text-amber-400" :
                      idx === 1 ? "bg-slate-400/20 text-slate-600 dark:text-slate-300" :
                      idx === 2 ? "bg-orange-700/20 text-orange-700 dark:text-orange-400" :
                      "bg-muted text-muted-foreground"
                    )}>
                      {idx + 1}
                    </span>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {model.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground font-mono">
                      n={scoreCount}
                    </span>
                    <span className="font-mono text-sm font-bold text-foreground">
                      {avgScore.toFixed(1)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-4">
          <section className="surface-card rounded-xl border border-border/40 p-4">
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Domain Info
            </h2>
            <dl className="space-y-2.5 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Benchmarks</dt>
                <dd className="font-mono text-foreground">{benchmarks.length}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Models Evaluated</dt>
                <dd className="font-mono text-foreground">{modelsWithScores.length}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Categories</dt>
                <dd className="text-foreground">{domainDef.categories.join(", ")}</dd>
              </div>
            </dl>
          </section>

          <section className="surface-card rounded-xl border border-border/40 p-4">
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Benchmarks
            </h2>
            <div className="space-y-2">
              {benchmarks.slice(0, 10).map((benchmark) => (
                <Link
                  key={benchmark.id}
                  href={`/benchmark/${benchmark.id}`}
                  className="block text-sm font-medium text-foreground hover:text-primary transition-colors truncate"
                >
                  {benchmark.name}
                </Link>
              ))}
              {benchmarks.length > 10 && (
                <p className="text-xs text-muted-foreground pt-2">
                  +{benchmarks.length - 10} more benchmarks
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
