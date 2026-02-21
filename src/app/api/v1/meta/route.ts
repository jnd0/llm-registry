import { benchmarkCategories } from "@/lib/categories";
import { apiAttribution, getLatestScoreDate, jsonWithCache } from "@/lib/api";
import { benchmarks, models, sources } from "@/lib/registry-data";

// Force static generation
export const dynamic = "force-static";
export const revalidate = 3600;

const staticLastModified = getLatestScoreDate();

export function GET() {
  return jsonWithCache(
    null,
    {
      apiVersion: "v1",
      generatedAt: new Date().toISOString(),
      latestScoreDate: staticLastModified,
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
      lastModified: staticLastModified,
    }
  );
}
