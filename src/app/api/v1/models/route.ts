import { NextRequest } from "next/server";
import { calculateCoverage } from "@/lib/stats";
import { apiAttribution, getLatestScoreDate, jsonWithCache } from "@/lib/api";
import { benchmarks, models } from "@/lib/registry-data";

export function GET(request: NextRequest) {
  const includeScores = request.nextUrl.searchParams.get("includeScores") === "true";
  const limit = Number.parseInt(request.nextUrl.searchParams.get("limit") ?? "100", 10);
  const offset = Number.parseInt(request.nextUrl.searchParams.get("offset") ?? "0", 10);

  const safeLimit = Number.isFinite(limit) ? Math.max(1, Math.min(500, limit)) : 100;
  const safeOffset = Number.isFinite(offset) ? Math.max(0, offset) : 0;

  const sorted = [...models].sort((a, b) => a.name.localeCompare(b.name));
  const page = sorted.slice(safeOffset, safeOffset + safeLimit);

  const data = page.map((model) => {
    const base = {
      id: model.id,
      name: model.name,
      provider: model.provider,
      releaseDate: model.releaseDate,
      capabilities: model.capabilities,
      isOpenSource: model.isOpenSource,
      specs: model.specs,
      coverage: calculateCoverage(model, benchmarks),
    };

    if (!includeScores) return base;

    return {
      ...base,
      scores: model.scores,
    };
  });

  return jsonWithCache(
    request,
    {
      total: models.length,
      offset: safeOffset,
      limit: safeLimit,
      includeScores,
      models: data,
      attribution: apiAttribution,
    },
    {
      lastModified: getLatestScoreDate(),
    }
  );
}
