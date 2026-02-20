import { categoryToSlug, slugToCategory } from "@/lib/categories";
import { calculateCategoryScore, calculateCoverage, normalizeScore } from "@/lib/stats";
import { Benchmark, BenchmarkCategory, Model } from "@/types";
import { slugToDomain, getBenchmarkIdsForDomain, type CapabilityDomain } from "./domains";

export type LeaderboardSortDirection = "asc" | "desc";
export type LicenseFilter = "all" | "open" | "proprietary";
export type CoverageMode = "assisted" | "strict";

export interface LeaderboardQueryParams {
  query: string;
  sortBy: string;
  sortDir: LeaderboardSortDirection;
  page: number;
  pageSize: number;
  license: LicenseFilter;
  domain: CapabilityDomain | null;
  category: BenchmarkCategory | null;
  sources: string[];
  verification: string[];
  coverageMode: CoverageMode;
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
  domain: CapabilityDomain | null;
  category: BenchmarkCategory | null;
  sources: string[];
  verification: string[];
  coverageMode: CoverageMode;
}

interface LeaderboardQueryOptions {
  activeCategory?: BenchmarkCategory | null;
}

const coverageMemo = new WeakMap<Model[], WeakMap<Benchmark[], Map<string, number>>>();
const COVERAGE_ASSIST_ALLOWLIST = new Set(["gpt-5-2"]);

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
  const requestedDomain = readParam(searchParams, "domain") ?? "";
  const requestedSources = readParam(searchParams, "source") ?? "";
  const requestedVerification = readParam(searchParams, "verification") ?? "";
  const requestedCoverageMode = readParam(searchParams, "coverageMode") ?? "assisted";

  const validSortIds = getValidSortIds(benchmarks);
  const fallbackSort = getDefaultSortBy(options.activeCategory ?? null);
  const sortBy = validSortIds.has(requestedSort) ? requestedSort : fallbackSort;

  const sortDir: LeaderboardSortDirection = requestedDir === "asc" ? "asc" : "desc";
  const page = parseIntParam(readParam(searchParams, "page"), 1, 1, 10_000);
  const pageSize = parseIntParam(readParam(searchParams, "pageSize"), 10, 5, 100);
  
  const license: LicenseFilter = 
    requestedLicense === "open" || requestedLicense === "proprietary" 
      ? requestedLicense 
      : "all";

  const domain = slugToDomain(requestedDomain);

  const sources = requestedSources
    ? requestedSources.split(",").map((s) => s.trim()).filter(Boolean)
    : [];

  const verification = requestedVerification
    ? requestedVerification.split(",").map((v) => v.trim()).filter(Boolean)
    : [];

  const coverageMode: CoverageMode = requestedCoverageMode === "strict" ? "strict" : "assisted";

  return {
    query,
    sortBy,
    sortDir,
    page,
    pageSize,
    license,
    domain,
    category: options.activeCategory ?? null,
    sources,
    verification,
    coverageMode,
  };
}

function countAvailableScores(model: Model, benchmarks: Benchmark[]): number {
  let count = 0;
  for (const benchmark of benchmarks) {
    const score = model.scores[benchmark.id]?.score;
    if (score !== null && score !== undefined) count += 1;
  }
  return count;
}

function selectProxyVariant(baseModel: Model, benchmarks: Benchmark[]): Model | null {
  const variants = baseModel.variants ?? [];
  if (variants.length === 0) return null;

  const viable = variants.filter((variant) => countAvailableScores(variant, benchmarks) > 0);
  if (viable.length === 0) return null;

  const exactHigh = viable.find((variant) => variant.id === `${baseModel.id}-high`);
  if (exactHigh) return exactHigh;

  const high = viable.find((variant) => /(^|-)high$/.test(variant.id) || /\bhigh\b/i.test(variant.name));
  if (high) return high;

  return [...viable].sort(
    (a, b) => countAvailableScores(b, benchmarks) - countAvailableScores(a, benchmarks)
  )[0] ?? null;
}

function applyCoverageAssist(models: Model[], benchmarks: Benchmark[], mode: CoverageMode): Model[] {
  if (mode === "strict") return models;

  return models.map((model) => {
    if (!COVERAGE_ASSIST_ALLOWLIST.has(model.id)) return model;

    const proxyVariant = selectProxyVariant(model, benchmarks);
    if (!proxyVariant) return model;

    const observedCount = countAvailableScores(model, benchmarks);
    const proxyCount = countAvailableScores(proxyVariant, benchmarks);

    if (proxyCount <= observedCount) return model;

    const mergedScores: Model["scores"] = { ...model.scores };

    for (const benchmark of benchmarks) {
      const existing = model.scores[benchmark.id]?.score;
      if (existing !== null && existing !== undefined) continue;

      const proxyScore = proxyVariant.scores[benchmark.id];
      if (!proxyScore || proxyScore.score === null || proxyScore.score === undefined) continue;

      mergedScores[benchmark.id] = {
        ...proxyScore,
        verified: false,
        verificationLevel: "estimated",
        sourceId: "model-family-proxy",
        inheritedFrom: proxyVariant.id,
        notes: `Estimated from ${proxyVariant.name} (${proxyVariant.id})`,
      };
    }

    return {
      ...model,
      scores: mergedScores,
    };
  });
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

function matchesDomain(model: Model, domain: CapabilityDomain | null): boolean {
  if (!domain) return true;
  const domainBenchmarkIds = getBenchmarkIdsForDomain(domain);
  return domainBenchmarkIds.some((id) => {
    const score = model.scores[id]?.score;
    return score !== null && score !== undefined;
  });
}

function matchesCategory(model: Model, category: BenchmarkCategory | null, benchmarks: Benchmark[]): boolean {
  if (!category) return true;
  const categoryBenchmarkIds = benchmarks
    .filter((b) => b.category === category)
    .map((b) => b.id);
  return categoryBenchmarkIds.some((id) => {
    const score = model.scores[id]?.score;
    return score !== null && score !== undefined;
  });
}

function getScopedBenchmarkIds(
  benchmarks: Benchmark[],
  params: Pick<LeaderboardQueryParams, "category" | "domain">
): Set<string> | null {
  const categoryScoped = params.category
    ? new Set(benchmarks.filter((benchmark) => benchmark.category === params.category).map((benchmark) => benchmark.id))
    : null;
  const domainScoped = params.domain ? new Set(getBenchmarkIdsForDomain(params.domain)) : null;

  if (!categoryScoped && !domainScoped) return null;
  if (categoryScoped && !domainScoped) return categoryScoped;
  if (!categoryScoped && domainScoped) return domainScoped;

  const intersection = new Set<string>();
  for (const benchmarkId of categoryScoped!) {
    if (domainScoped!.has(benchmarkId)) intersection.add(benchmarkId);
  }
  return intersection;
}

function matchesSources(model: Model, sources: string[], scopedBenchmarkIds: Set<string> | null): boolean {
  if (sources.length === 0) return true;
  return Object.entries(model.scores).some(([benchmarkId, scoreEntry]) => {
    if (scopedBenchmarkIds && !scopedBenchmarkIds.has(benchmarkId)) return false;
    if (scoreEntry.score === null || scoreEntry.score === undefined) return false;
    if (!scoreEntry.sourceId) return false;
    return sources.includes(scoreEntry.sourceId);
  });
}

function matchesVerification(model: Model, verification: string[], scopedBenchmarkIds: Set<string> | null): boolean {
  if (verification.length === 0) return true;
  return Object.entries(model.scores).some(([benchmarkId, scoreEntry]) => {
    if (scopedBenchmarkIds && !scopedBenchmarkIds.has(benchmarkId)) return false;
    if (scoreEntry.score === null || scoreEntry.score === undefined) return false;
    const level = scoreEntry.verificationLevel ?? (scoreEntry.verified ? "provider" : null);
    if (!level) return false;
    return verification.includes(level);
  });
}

export function queryLeaderboardModels(
  models: Model[],
  benchmarks: Benchmark[],
  params: LeaderboardQueryParams
): LeaderboardQueryResult {
  const candidateModels = applyCoverageAssist(models, benchmarks, params.coverageMode);
  const directionFactor = params.sortDir === "asc" ? 1 : -1;
  const scopedBenchmarkIds = getScopedBenchmarkIds(benchmarks, params);

  const filtered = candidateModels.filter(
    (model) => 
      matchesQuery(model, params.query) && 
      matchesLicense(model, params.license) && 
      matchesDomain(model, params.domain) && 
      matchesCategory(model, params.category, benchmarks) &&
      matchesSources(model, params.sources, scopedBenchmarkIds) &&
      matchesVerification(model, params.verification, scopedBenchmarkIds)
  );
  const benchmarkById = new Map(benchmarks.map((benchmark) => [benchmark.id, benchmark]));
  const categoryForSort = params.sortBy.startsWith("avg-")
    ? slugToCategory(params.sortBy.replace(/^avg-/, ""))
    : null;
  const coverageByModelId = params.sortBy === "coverage" ? getCoverageMap(candidateModels, benchmarks) : undefined;

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
    domain: params.domain,
    category: params.category,
    sources: params.sources,
    verification: params.verification,
    coverageMode: params.coverageMode,
  };
}
