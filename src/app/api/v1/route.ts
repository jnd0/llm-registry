import { apiAttribution, getLatestScoreDate, jsonWithCache } from "@/lib/api";

// Force static generation
export const dynamic = "force-static";
export const revalidate = 3600;

const staticLastModified = getLatestScoreDate();

export function GET() {
  return jsonWithCache(
    null,
    {
      apiVersion: "v1",
      endpoints: {
        meta: "/api/v1/meta",
        models: "/api/v1/models",
        model: "/api/v1/models/[id]",
        benchmarks: "/api/v1/benchmarks",
        scores: "/api/v1/scores",
        leaderboard: "/api/v1/leaderboards/[category]",
      },
      attribution: apiAttribution,
    },
    {
      lastModified: staticLastModified,
    }
  );
}
