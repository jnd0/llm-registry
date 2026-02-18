import { benchmarks, flattenedModels } from "@/lib/registry-data";
import { getDomainForBenchmark } from "@/lib/domains";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BenchmarkLeaderboard } from "@/components/benchmark/benchmark-leaderboard";
import { FrontierChart } from "@/components/benchmark/frontier-chart";

interface BenchmarkPageProps {
  params: Promise<{ id: string }>;
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
  };
}

export default async function BenchmarkPage({ params }: BenchmarkPageProps) {
  const { id } = await params;
  const benchmark = benchmarks.find((b) => b.id === id);

  if (!benchmark) {
    notFound();
  }

  const domain = getDomainForBenchmark(benchmark);

  const modelsWithScores = flattenedModels
    .filter((model) => {
      const score = model.scores[benchmark.id]?.score;
      return score !== null && score !== undefined;
    })
    .sort((a, b) => {
      const aScore = a.scores[benchmark.id]?.score ?? 0;
      const bScore = b.scores[benchmark.id]?.score ?? 0;
      return bScore - aScore;
    });

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link href="/benchmarks">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
              {benchmark.name}
            </h1>
            {domain && (
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                {domain}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            {benchmark.description}
          </p>
        </div>
        {benchmark.link && (
          <a
            href={benchmark.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
          >
            Paper
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="surface-card rounded-xl border border-border/40 p-6">
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Progress Over Time
            </h2>
            <FrontierChart benchmark={benchmark} models={modelsWithScores} />
          </div>
        </div>

        <div className="space-y-4">
          <div className="surface-card rounded-xl border border-border/40 p-6">
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Benchmark Info
            </h2>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Category</dt>
                <dd className="font-medium text-foreground">{benchmark.category}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Unit</dt>
                <dd className="font-mono text-foreground">{benchmark.unit ?? "%"}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Models Evaluated</dt>
                <dd className="font-mono text-foreground">{modelsWithScores.length}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Max Score</dt>
                <dd className="font-mono text-foreground">{benchmark.maxScore}</dd>
              </div>
            </dl>
          </div>

          <div className="surface-card rounded-xl border border-border/40 p-6">
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Top Performers
            </h2>
            <ol className="space-y-2">
              {modelsWithScores.slice(0, 5).map((model, idx) => {
                const score = model.scores[benchmark.id]?.score;
                return (
                  <li key={model.id} className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className={cn(
                        "flex h-5 w-5 shrink-0 items-center justify-center rounded text-[10px] font-bold",
                        idx === 0 ? "bg-amber-500/20 text-amber-600 dark:text-amber-400" :
                        idx === 1 ? "bg-slate-400/20 text-slate-600 dark:text-slate-300" :
                        idx === 2 ? "bg-orange-700/20 text-orange-700 dark:text-orange-400" :
                        "bg-muted text-muted-foreground"
                      )}>
                        {idx + 1}
                      </span>
                      <Link 
                        href={`/model/${model.id}`}
                        className="truncate text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {model.name}
                      </Link>
                    </div>
                    <span className="font-mono text-sm font-semibold text-foreground shrink-0">
                      {score?.toFixed(1)}{benchmark.unit ?? "%"}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>

      <div className="surface-card rounded-xl border border-border/40 overflow-hidden">
        <div className="p-6 border-b border-border/40">
          <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Full Leaderboard
          </h2>
        </div>
        <BenchmarkLeaderboard benchmark={benchmark} models={modelsWithScores} />
      </div>
    </div>
  );
}
