import { CompareView } from "@/components/dashboard/compare-view";
import { benchmarks, flattenedModels } from "@/lib/registry-data";
import type { Metadata } from "next";
import { Suspense } from "react";

interface ComparePageProps {
  searchParams: Promise<{ models?: string }>;
}

export const metadata: Metadata = {
  title: "Compare",
  description: "Compare up to three models side by side across category averages and benchmark-level deltas.",
  alternates: {
    canonical: "/compare",
  },
};

export default async function ComparePage({ searchParams }: ComparePageProps) {
  const params = await searchParams;
  const selectedIds = Array.from(
    new Set(
      (params.models ?? "")
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean)
    )
  ).slice(0, 3);

  const initialSelectedModels = flattenedModels.filter((model) => selectedIds.includes(model.id));
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
        <Suspense fallback={<div className="surface-card rounded-xl px-6 py-10 text-sm font-mono uppercase tracking-widest text-muted-foreground">Loading comparison…</div>}>
          <CompareView
            benchmarks={benchmarks}
            modelOptions={modelOptions}
            initialSelectedModels={initialSelectedModels}
          />
        </Suspense>
      </div>
    </div>
  );
}
