import { CompareView } from "@/components/dashboard/compare-view";
import { benchmarks, flattenedModels } from "@/lib/registry-data";
import type { Metadata } from "next";
import { Suspense } from "react";
import { siteName, siteUrl } from "@/lib/site";
import { toSafeJsonLd } from "@/lib/security";

export const metadata: Metadata = {
  title: "Compare LLM Models Side by Side — Benchmarks, Pricing & Performance",
  description:
    "Compare AI models head to head across benchmark scores, pricing, context windows, and capabilities. Side-by-side analysis for GPT, Claude, Gemini, DeepSeek, Llama and more.",
  keywords: [
    "llm comparison",
    "compare ai models",
    "ai model side by side",
    "gpt vs claude",
    "llm model comparison",
    "benchmark overlap",
    "llm performance deltas",
    "ai model benchmark comparison",
    "compare llm",
  ],
  alternates: {
    canonical: "/compare",
  },
  openGraph: {
    title: `Compare AI Models Side by Side | ${siteName}`,
    description:
      "Compare AI models head to head across benchmark scores, pricing, context windows, and capabilities.",
    url: `${siteUrl}/compare`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "LLM model comparison dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Compare AI Models Side by Side | ${siteName}`,
    description:
      "Compare AI models head to head across benchmark scores, pricing, context windows, and capabilities.",
    images: [`${siteUrl}/opengraph-image.png`],
  },
};

function LoadingShell() {
  return (
    <div className="surface-card rounded-xl px-6 py-10 text-sm font-mono uppercase tracking-widest text-muted-foreground">
      Loading comparison…
    </div>
  );
}

export default function ComparePage() {
  const modelOptions = flattenedModels.map((model) => ({
    id: model.id,
    name: model.name,
    provider: model.provider,
    releaseDate: model.releaseDate,
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Compare AI Models | ${siteName}`,
    description:
      "Compare AI models head to head across benchmark scores, pricing, context windows, and capabilities.",
    url: `${siteUrl}/compare`,
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
    about: {
      "@type": "Thing",
      name: "AI Model Comparison",
    },
    keywords: ["LLM comparison", "AI model comparison", "benchmark comparison", "GPT vs Claude"],
  };

  return (
    <div className="animate-in fade-in duration-700 space-y-8 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toSafeJsonLd(structuredData) }} />

      <section className="relative overflow-hidden rounded-2xl border border-border bg-card/50 px-6 py-6 sm:px-10 sm:py-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_50%)]" />
        <div className="relative max-w-3xl space-y-4">
          <p className="label-eyebrow text-muted-foreground/70">Registry / Benchmarks / Analysis</p>
          <h1 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Compare AI Models
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Select up to three foundation models and compare them side by side across benchmark scores, pricing, context windows, and capability profiles.
          </p>
        </div>
      </section>

      <div className="py-2 sm:py-4">
        <Suspense fallback={<LoadingShell />}>
          <CompareView
            benchmarks={benchmarks}
            modelOptions={modelOptions}
            initialSelectedModels={[]}
          />
        </Suspense>
      </div>
    </div>
  );
}
