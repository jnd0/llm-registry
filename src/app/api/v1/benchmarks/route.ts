import { benchmarkCategories } from "@/lib/categories";
import { apiAttribution, getLatestScoreDate, jsonWithCache } from "@/lib/api";
import { benchmarks } from "@/lib/registry-data";

// Force static generation
export const dynamic = "force-static";
export const revalidate = 3600;

const staticLastModified = getLatestScoreDate();

export function GET() {
  return jsonWithCache(
    null,
    {
      total: benchmarks.length,
      categories: benchmarkCategories,
      benchmarks,
      attribution: apiAttribution,
    },
    {
      lastModified: staticLastModified,
    }
  );
}
