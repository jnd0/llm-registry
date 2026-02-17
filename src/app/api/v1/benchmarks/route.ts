import { NextRequest } from "next/server";
import { benchmarkCategories } from "@/lib/categories";
import { apiAttribution, getLatestScoreDate, jsonWithCache } from "@/lib/api";
import { benchmarks } from "@/lib/registry-data";

export function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category");

  const data = category
    ? benchmarks.filter((benchmark) => benchmark.category.toLowerCase() === category.toLowerCase())
    : benchmarks;

  return jsonWithCache(
    request,
    {
      total: data.length,
      categories: benchmarkCategories,
      benchmarks: data,
      attribution: apiAttribution,
    },
    {
      lastModified: getLatestScoreDate(),
    }
  );
}
