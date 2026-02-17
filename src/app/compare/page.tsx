import { CompareView } from "@/components/dashboard/compare-view";
import { benchmarks, models } from "@/lib/registry-data";
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

  const initialSelectedModels = models.filter((model) => selectedIds.includes(model.id));
  const modelOptions = models.map((model) => ({
    id: model.id,
    name: model.name,
    provider: model.provider,
  }));

  return (
    <div className="py-2 sm:py-4">
      <Suspense fallback={<div className="surface-card rounded-xl px-6 py-10 text-sm text-muted-foreground">Loading comparison…</div>}>
        <CompareView
          benchmarks={benchmarks}
          modelOptions={modelOptions}
          initialSelectedModels={initialSelectedModels}
        />
      </Suspense>
    </div>
  );
}
