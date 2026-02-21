import { CompareView } from "@/components/dashboard/compare-view";
import { benchmarks, flattenedModels } from "@/lib/registry-data";
import type { Metadata } from "next";
import { Suspense } from "react";
import { siteName, siteUrl } from "@/lib/site";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Compare",
  description: "Compare up to three models side by side across category averages and benchmark-level deltas.",
  keywords: ["llm model comparison", "ai model compare", "benchmark overlap", "llm performance deltas"],
  alternates: {
    canonical: "/compare",
  },
  openGraph: {
    title: `Model Comparison | ${siteName}`,
    description: "Compare up to three models side by side across category averages and benchmark-level deltas.",
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
    title: `Model Comparison | ${siteName}`,
    description: "Compare up to three models side by side across category averages and benchmark-level deltas.",
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

  return (
    <div className="animate-in fade-in duration-700 space-y-8 pb-16">
      <section className="relative overflow-hidden rounded-2xl border border-border bg-card/50 px-6 py-6 sm:px-10 sm:py-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_50%)]" />
        <div className="relative max-w-3xl space-y-4">
          <p className="label-eyebrow text-muted-foreground/70">Registry / Benchmarks / Analysis</p>
          <h1 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Model Comparison
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Compare up to three foundation models side by side across category averages and benchmark-level performance deltas.
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
