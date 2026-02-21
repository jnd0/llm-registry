import { calculateCoverage } from "@/lib/stats";
import { apiAttribution, getLatestScoreDate, jsonWithCache } from "@/lib/api";
import { benchmarks, models } from "@/lib/registry-data";

// Force static generation
export const dynamic = "force-static";
export const revalidate = 3600;

// Static data generated at build time
const staticModels = [...models]
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((model) => ({
    id: model.id,
    name: model.name,
    provider: model.provider,
    releaseDate: model.releaseDate,
    capabilities: model.capabilities,
    isOpenSource: model.isOpenSource,
    specs: model.specs,
    coverage: calculateCoverage(model, benchmarks),
    scores: model.scores,
  }));

const staticLastModified = getLatestScoreDate();

export function GET() {
  return jsonWithCache(
    null,
    {
      total: models.length,
      models: staticModels,
      attribution: apiAttribution,
    },
    {
      lastModified: staticLastModified,
    }
  );
}
