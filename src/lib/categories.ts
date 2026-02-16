import { benchmarks } from "@/data/benchmarks";
import { BenchmarkCategory } from "@/types";

export const ALL_CATEGORY_SLUG = "all";

export const benchmarkCategories: BenchmarkCategory[] = Array.from(
  new Set(benchmarks.map((benchmark) => benchmark.category))
) as BenchmarkCategory[];

export function categoryToSlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function slugToCategory(slug?: string | null): BenchmarkCategory | null {
  if (!slug || slug === ALL_CATEGORY_SLUG) return null;
  return benchmarkCategories.find((category) => categoryToSlug(category) === slug) ?? null;
}
