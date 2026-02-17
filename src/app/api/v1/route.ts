import { NextRequest } from "next/server";
import { apiAttribution, getLatestScoreDate, jsonWithCache } from "@/lib/api";

export function GET(request: NextRequest) {
  return jsonWithCache(
    request,
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
      lastModified: getLatestScoreDate(),
    }
  );
}
