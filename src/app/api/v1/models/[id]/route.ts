import { apiAttribution, getLatestScoreDate, jsonWithCache } from "@/lib/api";
import { checkRateLimit } from "@/lib/rate-limit";
import { findModel, flattenedModels } from "@/lib/registry-data";
import { NextRequest } from "next/server";

// Generate static params for all models
export function generateStaticParams() {
  return flattenedModels.map((model) => ({
    id: model.id,
  }));
}

// Static export
export const dynamic = "force-static";

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  
  // Rate limiting (only in production)
  if (process.env.NODE_ENV === "production") {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
    const { allowed, headers } = checkRateLimit(ip);
    
    if (!allowed) {
      return new Response(
        JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
        {
          status: 429,
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
        }
      );
    }
  }

  const model = findModel(id);

  if (!model) {
    return jsonWithCache(
      null,
      {
        error: "Model not found",
      },
      { status: 404, lastModified: getLatestScoreDate() }
    );
  }

  return jsonWithCache(
    null,
    {
      model,
      attribution: apiAttribution,
    },
    {
      lastModified: getLatestScoreDate(),
    }
  );
}
