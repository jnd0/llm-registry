import { benchmarks, flattenedModels } from "@/lib/registry-data";
import type { Metadata } from "next";
import { ExploreClient } from "./client";

export const metadata: Metadata = {
  title: "Explore",
  description: "Interactive scatter plot for exploring model price vs performance relationships.",
  alternates: {
    canonical: "/explore",
  },
};

export default function ExplorePage() {
  const benchmarkOptions = benchmarks.map((b) => ({
    id: b.id,
    name: b.name,
    category: b.category,
  }));

  return (
    <ExploreClient 
      models={flattenedModels}
      benchmarkOptions={benchmarkOptions}
    />
  );
}
