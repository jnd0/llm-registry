import { CompareView } from "@/components/dashboard/compare-view";
import { models } from "@/data/models";
import { benchmarks } from "@/data/benchmarks";
import { Suspense } from "react";

export default function ComparePage() {
  return (
    <div className="container py-10">
      <Suspense fallback={<div>Loading comparison...</div>}>
        <CompareView allModels={models} benchmarks={benchmarks} />
      </Suspense>
    </div>
  );
}
