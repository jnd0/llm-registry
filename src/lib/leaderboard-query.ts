import { categoryToSlug, slugToCategory } from "@/lib/categories";
import { calculateCategoryScore, calculateCoverage, normalizeScore } from "@/lib/stats";
import { Benchmark, BenchmarkCategory, Model } from "@/types";

export type LeaderboardSortDirection = "asc" | "desc";
export type LicenseFilter = "all" | "open" | "proprietary";

export interface LeaderboardQueryParams {
  query: string;
  sortBy: string;
  sortDir: LeaderboardSortDirection;
  page: number;
  pageSize: number;
  license: LicenseFilter;
}

export interface LeaderboardQueryResult {
  rows: Model[];
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
  sortBy: string;
  sortDir: LeaderboardSortDirection;
  query: string;
  license: LicenseFilter;
}

interface LeaderboardQueryOptions {
  activeCategory?: BenchmarkCategory | null;
}

const coverageMemo = new WeakMap<Model[], WeakMap<Benchmark[], Map<string, number>>>();

type SearchParamsLike =
  | URLSearchParams
  | {
      [key: string]: string | string[] | undefined;
    };

function readParam(searchParams: SearchParamsLike, key: string): string | undefined {
  if (searchParams instanceof URLSearchParams) {
    return searchParams.get(key) ?? undefined;
  }

  const value = searchParams[key];
  if (Array.isArray(value)) return value[0];
  return value ?? undefined;
}

function parseIntParam(value: string | undefined, fallback: number, min: number, max: number): number {
  const parsed = Number.parseInt(value ?? "", 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(min, Math.min(max, parsed));
}

export function getValidSortIds(benchmarks: Benchmark[]): Set<string> {
  const sortIds = new Set<string>(["coverage", "releaseDate", "context"]);

  for (const benchmark of benchmarks) {
    sortIds.add(benchmark.id);
    sortIds.add(`avg-${categoryToSlug(benchmark.category)}`);
  }

  return sortIds;
}

export function getDefaultSortBy(activeCategory: BenchmarkCategory | null): string {
  if (activeCategory) {
    return `avg-${categoryToSlug(activeCategory)}`;
  }

  return "coverage";
}

export function parseLeaderboardQueryParams(
  searchParams: SearchParamsLike,
  benchmarks: Benchmark[],
  options: LeaderboardQueryOptions = {}
): LeaderboardQueryParams {
  const query = (readParam(searchParams, "q") ?? "").trim();
  const requestedSort = readParam(searchParams, "sort") ?? "";
  const requestedDir = readParam(searchParams, "dir");
  const requestedLicense = readParam(searchParams, "license") ?? "all";

  const validSortIds = getValidSortIds(benchmarks);
  const fallbackSort = getDefaultSortBy(options.activeCategory ?? null);
  const sortBy = validSortIds.has(requestedSort) ? requestedSort : fallbackSort;

  const sortDir: LeaderboardSortDirection = requestedDir === "asc" ? "asc" : "desc";
  const page = parseIntParam(readParam(searchParams, "page"), 1, 1, 10_000);
  const pageSize = parseIntParam(readParam(searchParams, "pageSize"), 25, 5, 100);
  
  const license: LicenseFilter = 
    requestedLicense === "open" || requestedLicense === "proprietary" 
      ? requestedLicense 
      : "all";

  return {
    query,
    sortBy,
    sortDir,
    page,
    pageSize,
    license,
  };
}

function getCoverageMap(models: Model[], benchmarks: Benchmark[]): Map<string, number> {
  const byBenchmark = coverageMemo.get(models);
  const cached = byBenchmark?.get(benchmarks);
  if (cached) return cached;

  const map = new Map<string, number>();
  for (const model of models) {
    map.set(model.id, calculateCoverage(model, benchmarks));
  }

  const nextByBenchmark = byBenchmark ?? new WeakMap<Benchmark[], Map<string, number>>();
  nextByBenchmark.set(benchmarks, map);
  if (!byBenchmark) {
    coverageMemo.set(models, nextByBenchmark);
  }

  return map;
}

function getSortValue(
  model: Model,
  sortBy: string,
  benchmarks: Benchmark[],
  context: {
    benchmarkById: Map<string, Benchmark>;
    coverageByModelId?: Map<string, number>;
    categoryForSort?: BenchmarkCategory | null;
  }
): number | null {
  if (sortBy === "coverage") {
    return context.coverageByModelId?.get(model.id) ?? calculateCoverage(model, benchmarks);
  }

  if (sortBy === "releaseDate") {
    const timestamp = Date.parse(model.releaseDate);
    return Number.isNaN(timestamp) ? null : timestamp;
  }

  if (sortBy === "context") {
    return model.specs.contextWindow;
  }

  if (sortBy.startsWith("avg-")) {
    const category = context.categoryForSort;
    if (!category) return null;
    return calculateCategoryScore(model, benchmarks, category);
  }

  const benchmark = context.benchmarkById.get(sortBy);
  if (!benchmark) return null;

  const score = model.scores[sortBy]?.score;
  if (score === null || score === undefined) return null;
  return normalizeScore(score, benchmark);
}

function matchesQuery(model: Model, query: string): boolean {
  if (!query) return true;

  const haystack = `${model.name} ${model.id} ${model.provider}`.toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function matchesLicense(model: Model, license: LicenseFilter): boolean {
  if (license === "all") return true;
  if (license === "open") return model.isOpenSource;
  if (license === "proprietary") return !model.isOpenSource;
  return true;
}

export function queryLeaderboardModels(
  models: Model[],
  benchmarks: Benchmark[],
  params: LeaderboardQueryParams
): LeaderboardQueryResult {
  const directionFactor = params.sortDir === "asc" ? 1 : -1;

  const filtered = models.filter(
    (model) => matchesQuery(model, params.query) && matchesLicense(model, params.license)
  );
  const benchmarkById = new Map(benchmarks.map((benchmark) => [benchmark.id, benchmark]));
  const categoryForSort = params.sortBy.startsWith("avg-")
    ? slugToCategory(params.sortBy.replace(/^avg-/, ""))
    : null;
  const coverageByModelId = params.sortBy === "coverage" ? getCoverageMap(models, benchmarks) : undefined;

  const sortValues = new Map<string, number | null>();
  for (const model of filtered) {
    sortValues.set(
      model.id,
      getSortValue(model, params.sortBy, benchmarks, {
        benchmarkById,
        coverageByModelId,
        categoryForSort,
      })
    );
  }

  const sorted = [...filtered].sort((a, b) => {
    const aValue = sortValues.get(a.id);
    const bValue = sortValues.get(b.id);

    const aMissing = aValue === null || aValue === undefined;
    const bMissing = bValue === null || bValue === undefined;

    if (aMissing && bMissing) {
      return a.name.localeCompare(b.name);
    }

    if (aMissing) return 1;
    if (bMissing) return -1;

    if (aValue !== bValue) {
      return aValue < bValue ? -1 * directionFactor : 1 * directionFactor;
    }

    return a.name.localeCompare(b.name);
  });

  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / params.pageSize));
  const page = Math.min(params.page, totalPages);
  const offset = (page - 1) * params.pageSize;
  const rows = sorted.slice(offset, offset + params.pageSize);

  return {
    rows,
    total,
    totalPages,
    page,
    pageSize: params.pageSize,
    sortBy: params.sortBy,
    sortDir: params.sortDir,
    query: params.query,
    license: params.license,
  };
}
