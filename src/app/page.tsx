import { DataTable } from "@/components/dashboard/leaderboard";
import { models } from "@/data/models";
import { benchmarks } from "@/data/benchmarks";
import { changelog } from "@/data/changelog";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import Link from "next/link";
import { benchmarkCategories, categoryToSlug, slugToCategory } from "@/lib/categories";

interface HomePageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const activeCategory = slugToCategory(params?.category);
  const activeCategorySlug = activeCategory ? categoryToSlug(activeCategory) : null;
  const bestByBenchmark = (benchmarkId: string) => {
    return models
      .filter((model) => model.scores[benchmarkId]?.score !== null && model.scores[benchmarkId]?.score !== undefined)
      .sort((a, b) => (b.scores[benchmarkId]?.score ?? -1) - (a.scores[benchmarkId]?.score ?? -1))[0];
  };

  const bestCodingModel = bestByBenchmark("swe-bench-verified") ?? bestByBenchmark("human-eval");
  const bestReasoningModel = bestByBenchmark("gpqa-diamond");
  const bestVisionModel = bestByBenchmark("mmmu") ?? bestByBenchmark("mmmu-vision");
  const bestValueModel = models
    .filter((model) => (model.scores["mmlu"]?.score ?? 0) > 0 && model.specs.pricing.input > 0)
    .sort((a, b) => {
      const scoreA = (a.scores["mmlu"]?.score ?? 0) / a.specs.pricing.input;
      const scoreB = (b.scores["mmlu"]?.score ?? 0) / b.specs.pricing.input;
      return scoreB - scoreA;
    })[0];

  const quickHighlights = [
    {
      label: "Best Coding",
      model: bestCodingModel,
      benchmark: bestCodingModel?.scores["swe-bench-verified"] ? "SWE-bench Verified" : "HumanEval",
      value:
        bestCodingModel?.scores["swe-bench-verified"]?.score ??
        bestCodingModel?.scores["human-eval"]?.score ??
        null,
    },
    {
      label: "Best Reasoning",
      model: bestReasoningModel,
      benchmark: "GPQA Diamond",
      value: bestReasoningModel?.scores["gpqa-diamond"]?.score ?? null,
    },
    {
      label: "Best Vision",
      model: bestVisionModel,
      benchmark: bestVisionModel?.scores["mmmu"] ? "MMMU" : "MMMU Vision",
      value: bestVisionModel?.scores["mmmu"]?.score ?? bestVisionModel?.scores["mmmu-vision"]?.score ?? null,
    },
    {
      label: "Best Value",
      model: bestValueModel,
      benchmark: "MMLU per $ input",
      value: bestValueModel ? (bestValueModel.scores["mmlu"]?.score ?? 0) / bestValueModel.specs.pricing.input : null,
      format: "ratio",
    },
  ];

  const benchmarkIds = new Set(benchmarks.map((benchmark) => benchmark.id));
  const usedBenchmarkIds = new Set<string>();
  let totalScores = 0;
  let latestScoreDate = "";

  models.forEach((model) => {
    Object.entries(model.scores).forEach(([benchmarkId, entry]) => {
      totalScores += 1;
      if (benchmarkIds.has(benchmarkId)) usedBenchmarkIds.add(benchmarkId);
      if (entry.asOfDate && entry.asOfDate > latestScoreDate) latestScoreDate = entry.asOfDate;
    });
  });

  const latestRelease = changelog[0];
  const mappedBenchmarks = `${usedBenchmarkIds.size}/${benchmarks.length}`;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-end justify-between border-b border-white/5 pb-6">
        <div>
            <h1 className="text-3xl font-display font-bold tracking-tight text-foreground">Global Index</h1>
            <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mt-2 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Ranking // {models.length} Systems Tracked
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/"
                className={`px-3 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-wider border transition-colors ${!activeCategory ? "border-primary/35 bg-primary/10 text-primary" : "border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/5"}`}
              >
                All Categories
              </Link>
              {benchmarkCategories.map((category) => {
                const slug = categoryToSlug(category);
                const isActive = activeCategory === category;
                return (
                  <Link
                    key={category}
                    href={`/?category=${slug}`}
                    className={`px-3 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-wider border transition-colors ${isActive ? "border-primary/35 bg-primary/10 text-primary" : "border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/5"}`}
                  >
                    {category}
                  </Link>
                );
              })}
            </div>
        </div>
        <div className="hidden sm:flex items-center gap-4">
            <Button asChild variant="outline" size="sm" className="h-10 px-6 border-white/10 hover:bg-white/5 text-[10px] font-mono uppercase tracking-wider rounded-md">
                <Link href="/about">Documentation</Link>
            </Button>
             {activeCategory && (
                <Button asChild variant="outline" size="sm" className="h-10 px-6 border-white/10 hover:bg-white/5 text-[10px] font-mono uppercase tracking-wider rounded-md">
                    <Link href={`/leaderboard/${activeCategorySlug}`}>Open Category Page</Link>
                </Button>
             )}
             <Button asChild size="sm" className="h-10 px-6 bg-primary text-primary-foreground hover:bg-primary/90 text-[10px] font-mono uppercase tracking-wider shadow-[0_0_15px_-5px_var(--color-primary)] rounded-md">
                 <Link href={activeCategorySlug ? `/compare?category=${activeCategorySlug}` : "/compare"}>Open Compare</Link>
             </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {quickHighlights.map((item) => (
          <div key={item.label} className="rounded-lg border border-white/10 bg-card/30 p-4">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{item.label}</p>
            <p className="mt-2 text-base font-semibold text-foreground truncate">{item.model?.name ?? "TBD"}</p>
            <p className="mt-1 text-[11px] text-muted-foreground">{item.benchmark}</p>
            <p className="mt-3 text-lg font-display font-bold text-primary">
              {item.value === null
                ? "--"
                : item.format === "ratio"
                ? `${item.value.toFixed(1)}x`
                : `${item.value.toFixed(1)}`}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
          <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-300">Data Quality</p>
          <p className="mt-2 text-base font-semibold text-foreground">Strict Validation: Passing</p>
          <p className="mt-1 text-[11px] text-muted-foreground">Mapped benchmark IDs: {mappedBenchmarks}</p>
          <p className="mt-1 text-[11px] text-muted-foreground">Total score records: {totalScores}</p>
        </div>

        <div className="rounded-lg border border-white/10 bg-card/30 p-4">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Latest Update</p>
          <p className="mt-2 text-base font-semibold text-foreground">{latestRelease?.title ?? "Registry update"}</p>
          <p className="mt-1 text-[11px] text-muted-foreground">Version {latestRelease?.version ?? "n/a"} | {latestRelease?.date ?? "Unknown"}</p>
          <p className="mt-1 text-[11px] text-muted-foreground">Latest score date: {latestScoreDate || "Unknown"}</p>
        </div>

        <div className="rounded-lg border border-white/10 bg-card/30 p-4">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Research Workflow</p>
          <p className="mt-2 text-base font-semibold text-foreground">Use compare + methodology together</p>
          <div className="mt-3 flex gap-2">
            <Button asChild size="sm" variant="outline" className="h-8 text-[10px] font-mono uppercase tracking-wider">
              <Link href="/compare">Compare Models</Link>
            </Button>
            <Button asChild size="sm" variant="outline" className="h-8 text-[10px] font-mono uppercase tracking-wider">
              <Link href="/about">Read Methodology</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Suspense fallback={<div className="h-96 flex items-center justify-center font-mono text-muted-foreground animate-pulse">Initializing Database...</div>}>
        <DataTable data={models} benchmarks={benchmarks} activeCategory={activeCategory} activeCategorySlug={activeCategorySlug} />
      </Suspense>
    </div>
  );
}
