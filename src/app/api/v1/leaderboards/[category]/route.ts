import { NextRequest } from "next/server";
import { ALL_CATEGORY_SLUG, slugToCategory } from "@/lib/categories";
import { calculateCoverage, normalizeScore } from "@/lib/stats";
import { apiAttribution, getLatestScoreDate, jsonWithCache } from "@/lib/api";
import { benchmarks, models } from "@/lib/registry-data";

interface RouteContext {
  params: Promise<{ category: string }>;
}

export async function GET(request: NextRequest, context: RouteContext) {
  const { category: categorySlug } = await context.params;
  const limitParam = Number.parseInt(request.nextUrl.searchParams.get("limit") ?? "100", 10);
  const limit = Number.isFinite(limitParam) ? Math.max(1, Math.min(500, limitParam)) : 100;

  const resolvedCategory = categorySlug === ALL_CATEGORY_SLUG ? null : slugToCategory(categorySlug);
  if (categorySlug !== ALL_CATEGORY_SLUG && !resolvedCategory) {
    return jsonWithCache(
      request,
      {
        error: "Unknown category",
        category: categorySlug,
      },
      { status: 404, lastModified: getLatestScoreDate() }
    );
  }

  const scopedBenchmarks = resolvedCategory
    ? benchmarks.filter((benchmark) => benchmark.category === resolvedCategory)
    : benchmarks;

  const entries = models
    .map((model) => {
      let scoreCount = 0;
      let totalNormalized = 0;

      for (const benchmark of scopedBenchmarks) {
        const score = model.scores[benchmark.id]?.score;
        if (score === null || score === undefined) continue;

        scoreCount += 1;
        totalNormalized += normalizeScore(score, benchmark);
      }

      const average = scoreCount > 0 ? Number((totalNormalized / scoreCount).toFixed(1)) : null;
      const coverage = resolvedCategory
        ? (scopedBenchmarks.length > 0 ? Number(((scoreCount / scopedBenchmarks.length) * 100).toFixed(1)) : 0)
        : calculateCoverage(model, benchmarks);

      return {
        modelId: model.id,
        modelName: model.name,
        provider: model.provider,
        releaseDate: model.releaseDate,
        average,
        coverage,
        scoreCount,
      };
    })
    .filter((entry) => entry.average !== null)
    .sort((a, b) => {
      const avgA = a.average ?? -1;
      const avgB = b.average ?? -1;
      if (avgB !== avgA) return avgB - avgA;
      if (b.coverage !== a.coverage) return b.coverage - a.coverage;
      return a.modelName.localeCompare(b.modelName);
    })
    .slice(0, limit)
    .map((entry, index) => ({
      rank: index + 1,
      ...entry,
    }));

  return jsonWithCache(
    request,
    {
      category: resolvedCategory ?? "All",
      categorySlug,
      benchmarkCount: scopedBenchmarks.length,
      totalModelsRanked: entries.length,
      leaderboard: entries,
      attribution: apiAttribution,
    },
    {
      lastModified: getLatestScoreDate(),
    }
  );
}
