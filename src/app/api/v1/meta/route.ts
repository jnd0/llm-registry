import { NextRequest } from "next/server";
import { benchmarkCategories } from "@/lib/categories";
import { apiAttribution, getLatestScoreDate, jsonWithCache } from "@/lib/api";
import { benchmarks, models, sources } from "@/lib/registry-data";

export function GET(request: NextRequest) {
  const latestScoreDate = getLatestScoreDate();

  return jsonWithCache(
    request,
    {
      apiVersion: "v1",
      generatedAt: new Date().toISOString(),
      latestScoreDate,
      counts: {
        models: models.length,
        benchmarks: benchmarks.length,
        categories: benchmarkCategories.length,
        sources: sources.length,
      },
      categories: benchmarkCategories,
      attribution: apiAttribution,
      endpoints: [
        "/api/v1/meta",
        "/api/v1/models",
        "/api/v1/models/[id]",
        "/api/v1/benchmarks",
        "/api/v1/scores",
        "/api/v1/leaderboards/[category]",
      ],
    },
    {
      lastModified: latestScoreDate,
    }
  );
}
