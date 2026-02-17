import { NextRequest } from "next/server";
import { apiAttribution, getLatestScoreDate, jsonWithCache } from "@/lib/api";
import { models } from "@/lib/registry-data";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const model = models.find((entry) => entry.id === id);

  if (!model) {
    return jsonWithCache(
      request,
      {
        error: "Model not found",
      },
      { status: 404, lastModified: getLatestScoreDate() }
    );
  }

  return jsonWithCache(
    request,
    {
      model,
      attribution: apiAttribution,
    },
    {
      lastModified: getLatestScoreDate(),
    }
  );
}
