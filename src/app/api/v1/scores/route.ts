import { NextRequest } from "next/server";
import { normalizeScore } from "@/lib/stats";
import { apiAttribution, getLatestScoreDate, jsonWithCache } from "@/lib/api";
import { benchmarks, models } from "@/lib/registry-data";

export function GET(request: NextRequest) {
  const modelId = request.nextUrl.searchParams.get("modelId");
  const benchmarkId = request.nextUrl.searchParams.get("benchmarkId");
  const category = request.nextUrl.searchParams.get("category");
  const sourceId = request.nextUrl.searchParams.get("sourceId");
  const limit = Number.parseInt(request.nextUrl.searchParams.get("limit") ?? "500", 10);
  const offset = Number.parseInt(request.nextUrl.searchParams.get("offset") ?? "0", 10);

  const safeLimit = Number.isFinite(limit) ? Math.max(1, Math.min(1000, limit)) : 500;
  const safeOffset = Number.isFinite(offset) ? Math.max(0, offset) : 0;

  const benchmarkById = new Map(benchmarks.map((benchmark) => [benchmark.id, benchmark]));

  const rows = models.flatMap((model) => {
    if (modelId && model.id !== modelId) return [];

    return Object.entries(model.scores).flatMap(([id, scoreEntry]) => {
      if (scoreEntry.score === null || scoreEntry.score === undefined) return [];
      if (benchmarkId && id !== benchmarkId) return [];
      if (sourceId && scoreEntry.sourceId !== sourceId) return [];

      const benchmark = benchmarkById.get(id);
      if (!benchmark) return [];
      if (category && benchmark.category.toLowerCase() !== category.toLowerCase()) return [];

      return {
        modelId: model.id,
        modelName: model.name,
        provider: model.provider,
        benchmarkId: id,
        benchmarkName: benchmark.name,
        category: benchmark.category,
        score: scoreEntry.score,
        normalizedScore: Number(normalizeScore(scoreEntry.score, benchmark).toFixed(1)),
        verified: scoreEntry.verified,
        verificationLevel: scoreEntry.verificationLevel ?? null,
        sourceId: scoreEntry.sourceId ?? null,
        sourceUrl: scoreEntry.sourceUrl ?? null,
        asOfDate: scoreEntry.asOfDate ?? null,
        isArtificialAnalysis: scoreEntry.sourceId === "artificial-analysis",
      };
    });
  });

  const sorted = rows.sort((a, b) => {
    const modelCmp = a.modelName.localeCompare(b.modelName);
    if (modelCmp !== 0) return modelCmp;
    return a.benchmarkName.localeCompare(b.benchmarkName);
  });

  const page = sorted.slice(safeOffset, safeOffset + safeLimit);

  return jsonWithCache(
    request,
    {
      total: sorted.length,
      offset: safeOffset,
      limit: safeLimit,
      scores: page,
      attribution: apiAttribution,
    },
    {
      lastModified: getLatestScoreDate(),
    }
  );
}
