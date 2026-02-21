import { normalizeScore } from "@/lib/stats";
import { apiAttribution, getLatestScoreDate, jsonWithCache } from "@/lib/api";
import { benchmarks, models } from "@/lib/registry-data";

// Force static generation - no request object needed
export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

// Generate static data at build time
function generateStaticScores() {
  const benchmarkById = new Map(benchmarks.map((benchmark) => [benchmark.id, benchmark]));

  const rows = models.flatMap((model) => {
    return Object.entries(model.scores).flatMap(([id, scoreEntry]) => {
      if (scoreEntry.score === null || scoreEntry.score === undefined) return [];

      const benchmark = benchmarkById.get(id);
      if (!benchmark) return [];

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

  return rows.sort((a, b) => {
    const modelCmp = a.modelName.localeCompare(b.modelName);
    if (modelCmp !== 0) return modelCmp;
    return a.benchmarkName.localeCompare(b.benchmarkName);
  });
}

// Static data generated at build time
const staticScores = generateStaticScores();
const staticLastModified = getLatestScoreDate();

export function GET() {
  return jsonWithCache(
    null, // No request object in static mode
    {
      total: staticScores.length,
      scores: staticScores,
      attribution: apiAttribution,
    },
    {
      lastModified: staticLastModified,
    }
  );
}
