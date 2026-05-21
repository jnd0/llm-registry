import { benchmarks, models } from "@/lib/registry-data";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import Link from "next/link";
import { getHomeMetrics } from "@/lib/home-metrics";
import { DomainCards } from "@/components/dashboard/domain-cards";
import { Skeleton } from "@/components/ui/skeleton";
import { HomeStatsCard } from "@/components/dashboard/home-stats-card";
import { LatestArrivalCard } from "@/components/dashboard/latest-arrival-card";
import { siteName, siteUrl } from "@/lib/site";
import { ClientLeaderboard } from "@/components/dashboard/client-leaderboard";
import { toSafeJsonLd } from "@/lib/security";
import { normalizeScore } from "@/lib/stats";
import { Trophy, Code2, Brain, DollarSign, Zap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "LLM Leaderboard — Compare AI Models by Benchmark Scores",
  description:
    "Compare 1,500+ AI models side by side. Independent benchmark rankings for GPT, Claude, Gemini, DeepSeek, Llama and more — with provenance, pricing, and performance data.",
  keywords: [
    "llm leaderboard",
    "llm comparison",
    "compare ai models",
    "ai benchmark rankings",
    "model benchmark scores",
    "llm performance comparison",
    "best llm 2026",
    "top ai models",
    "gpt vs claude",
    "ai model side by side",
    "llm rankings",
    "ai model benchmark",
    "llm benchmark scores",
    "compare llm",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `LLM Leaderboard — Compare AI Models | ${siteName}`,
    description:
      "Compare 1,500+ AI models side by side. Independent benchmark rankings for GPT, Claude, Gemini, DeepSeek, Llama and more.",
    url: `${siteUrl}/`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Global LLM Leaderboard — Compare AI Models",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `LLM Leaderboard — Compare AI Models | ${siteName}`,
    description:
      "Compare 1,500+ AI models side by side. Independent benchmark rankings for GPT, Claude, Gemini, DeepSeek, Llama and more.",
    images: [`${siteUrl}/opengraph-image.png`],
  },
};

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

function getLeaderHighlights() {
  const benchmarkById = new Map(benchmarks.map((b) => [b.id, b]));
  const bestByBenchmark = new Map<string, { model: (typeof models)[number]; normalizedScore: number }>();

  for (const model of models) {
    for (const [benchmarkId, entry] of Object.entries(model.scores)) {
      if (entry.score === null || entry.score === undefined) continue;
      const benchmark = benchmarkById.get(benchmarkId);
      if (!benchmark) continue;
      const normalized = normalizeScore(entry.score, benchmark);
      const current = bestByBenchmark.get(benchmarkId);
      if (!current || normalized > current.normalizedScore) {
        bestByBenchmark.set(benchmarkId, { model, normalizedScore: normalized });
      }
    }
  }

  const reasoning = bestByBenchmark.get("gpqa-diamond");
  const coding = bestByBenchmark.get("swe-bench-verified") ?? bestByBenchmark.get("human-eval");

  const cheapestTop = [...models]
    .filter((m) => m.specs.pricing.input > 0 && m.scores["gpqa-diamond"]?.score && m.scores["gpqa-diamond"].score > 80)
    .sort((a, b) => a.specs.pricing.input - b.specs.pricing.input)[0];

  const fastest = [...models]
    .filter((m) => m.family === "gemini" || m.family === "grok" || m.name.toLowerCase().includes("flash") || m.name.toLowerCase().includes("fast"))
    .filter((m) => m.scores["gpqa-diamond"]?.score && m.scores["gpqa-diamond"].score > 85)
    .sort((a, b) => b.specs.pricing.input - a.specs.pricing.input)[0];

  const longestContext = [...models].sort((a, b) => b.specs.contextWindow - a.specs.contextWindow)[0];

  const bestOpen = [...models]
    .filter((m) => m.isOpenSource)
    .filter((m) => m.scores["gpqa-diamond"]?.score)
    .sort((a, b) => (b.scores["gpqa-diamond"]?.score ?? 0) - (a.scores["gpqa-diamond"]?.score ?? 0))[0];

  return [
    reasoning
      ? {
          icon: Brain,
          label: "leads on reasoning",
          model: reasoning.model,
          detail: `${reasoning.model.scores["gpqa-diamond"]?.score}% GPQA`,
          color: "text-violet-500",
        }
      : null,
    coding
      ? {
          icon: Code2,
          label: "wins at coding",
          model: coding.model,
          detail: `${coding.model.scores["swe-bench-verified"]?.score ?? coding.model.scores["human-eval"]?.score}% SWE-bench`,
          color: "text-emerald-500",
        }
      : null,
    cheapestTop
      ? {
          icon: DollarSign,
          label: "cheapest frontier model",
          model: cheapestTop,
          detail: `$${cheapestTop.specs.pricing.input}/M tok`,
          color: "text-amber-500",
        }
      : null,
    fastest
      ? {
          icon: Zap,
          label: "fast + strong",
          model: fastest,
          detail: `$${fastest.specs.pricing.input}/M tok`,
          color: "text-sky-500",
        }
      : null,
    longestContext
      ? {
          icon: Globe,
          label: "longest context",
          model: longestContext,
        detail: `${(longestContext.specs.contextWindow / 1_000_000).toFixed(longestContext.specs.contextWindow >= 1_000_000 ? 0 : 1)}M tokens`,
          color: "text-orange-500",
        }
      : null,
    bestOpen
      ? {
          icon: Trophy,
          label: "best open-weights",
          model: bestOpen,
          detail: `${bestOpen.scores["gpqa-diamond"]?.score}% GPQA`,
          color: "text-rose-500",
        }
      : null,
  ].filter(Boolean) as { icon: typeof Trophy; label: string; model: (typeof models)[number]; detail: string; color: string }[];
}

const faqItems = [
  {
    question: "What is the best LLM right now?",
    answer: "The best LLM depends on your use case. For reasoning tasks, models like Claude Opus and Gemini 3.1 Pro lead on GPQA Diamond. For coding, GPT-5.x and Claude Opus dominate SWE-bench. For budget-conscious users, DeepSeek V4 Pro offers frontier quality at a fraction of the cost. Use our comparison tool to find the best model for your specific needs.",
  },
  {
    question: "How do I compare LLM models?",
    answer: "Use the LLM Registry Compare tool to select up to three models and see side-by-side benchmark scores, pricing, context windows, and capability profiles. The comparison defaults to strict shared-benchmark analysis for fair head-to-head evaluation.",
  },
  {
    question: "Which LLM is best for coding?",
    answer: "Based on SWE-bench Verified scores, Claude Opus 4.7 and GPT-5.5 currently lead for software engineering tasks. For code generation benchmarks like HumanEval, GPT-5.3 Codex and Gemini models perform exceptionally well. Check the Coding leaderboard for the latest rankings.",
  },
  {
    question: "What is the cheapest top AI model?",
    answer: "DeepSeek V4 Pro offers frontier-level performance (90%+ GPQA) at approximately $0.44/$0.87 per million input/output tokens — roughly 10x cheaper than comparable models from OpenAI or Anthropic. DeepSeek V4 Flash is even cheaper at $0.14/$0.28 per million tokens.",
  },
  {
    question: "How are LLM benchmark scores normalized?",
    answer: "LLM Registry normalizes all scores to a 0–100 scale. Bounded metrics use max-scaling (score/max × 100). ELO-based metrics use min-max scaling. Lower-is-better metrics are mathematically inverted so that 100 always represents the best performance. See our Methodology page for full details.",
  },
  {
    question: "What is the difference between Verified and Discovered models?",
    answer: "Verified models are manually curated with full provenance tracking — every score has a source ID, verification level, and as-of date. Discovered models are auto-imported from community databases and may have less complete benchmark coverage.",
  },
];

export default function Home() {
  const { totalScores, latestScoreDate } = getHomeMetrics(models, benchmarks);
  const leaders = getLeaderHighlights();

  const latestArrival = [...models]
    .filter((m) => m.releaseDate !== "Unknown")
    .sort((a, b) => b.releaseDate.localeCompare(a.releaseDate))[0];

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "LLM Registry Benchmark Dataset",
    description:
      "Normalized benchmark leaderboard data with provenance and verification tiers for frontier AI models.",
    url: `${siteUrl}/`,
    creator: {
      "@type": "Organization",
      name: siteName,
    },
    keywords: ["LLM benchmarks", "model leaderboard", "AI evaluation", "benchmark provenance"],
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="space-y-5">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toSafeJsonLd(homeStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toSafeJsonLd(faqStructuredData) }} />

      <section className="relative overflow-hidden rounded-2xl border border-border bg-card/50 px-6 py-8 sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_50%)]" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              <p className="label-eyebrow">Registry / Live Benchmarks</p>
              <span className="rounded-full bg-primary/20 border border-primary/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                Beta
              </span>
            </div>
            <h1 className="text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Global LLM Leaderboard
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Compare 1,500+ AI models by benchmark scores, pricing, and capabilities — with full provenance tracking.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-9 rounded-full px-4 text-xs font-semibold uppercase tracking-wider"
              >
                <Link href="/api/v1/scores">Export</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-9 rounded-full px-4 text-xs font-semibold uppercase tracking-wider"
              >
                <Link href="/about">Methodology</Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="h-9 rounded-full px-5 text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20"
              >
                <Link href="/compare">Compare</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {leaders.length > 0 && (
        <section className="space-y-3">
          <p className="label-eyebrow px-1">Current Leaders</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={`/model/${item.model.id}`}
                  className="group flex items-center gap-3 rounded-xl border border-border/40 bg-card/30 px-4 py-3 transition-colors hover:border-primary/30 hover:bg-card/60"
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-card ${item.color}`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.model.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {item.label} · {item.detail}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <section className="grid gap-5 lg:grid-cols-2">
        <HomeStatsCard models={models} benchmarks={benchmarks} totalScores={totalScores} latestScoreDate={latestScoreDate} />
        {latestArrival && <LatestArrivalCard model={latestArrival} />}
      </section>

      <article className="mt-6">
        <DomainCards />
      </article>

      <Suspense fallback={<LoadingShell />}>
        <ClientLeaderboard models={models} benchmarks={benchmarks} />
      </Suspense>

      <section className="mt-10 space-y-6 rounded-2xl border border-border bg-card/30 px-6 py-8 sm:px-10">
        <div className="space-y-2">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-muted-foreground">
            Quick answers about choosing, comparing, and interpreting AI model rankings.
          </p>
        </div>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="group rounded-xl border border-border/40 bg-card/50 px-5 py-4">
              <summary className="cursor-pointer text-sm font-semibold text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
