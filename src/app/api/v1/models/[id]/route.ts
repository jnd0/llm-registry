import { apiAttribution, getLatestScoreDate, jsonWithCache } from "@/lib/api";
import { findModel, flattenedModels } from "@/lib/registry-data";

// Generate static params for all models
export function generateStaticParams() {
  return flattenedModels.map((model) => ({
    id: model.id,
  }));
}

// Static export
export const dynamic = "force-static";

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
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
