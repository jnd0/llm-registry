import { Model } from "@/types";
import { flattenedModels, variantIds } from "@/lib/registry-data";
import { getBenchmarkIdsForDomain, CapabilityDomain } from "./domains";
import { benchmarks } from "@/data/benchmarks";
import { normalizeScore } from "./stats";

const benchmarkMap = new Map(benchmarks.map((b) => [b.id, b]));

export interface FrontierDataPoint {
  modelId: string;
  modelName: string;
  provider: string;
  releaseDate: string;
  score: number;
  isOpenSource: boolean;
  isVariant: boolean;
  parentModelId?: string;
}

export interface FrontierChartData {
  benchmarkId: string;
  benchmarkName: string;
  points: FrontierDataPoint[];
  topScore: number;
  topModelId: string;
}

export interface GetFrontierDataOptions {
  includeVariants?: boolean;
  minScore?: number;
  maxPoints?: number;
}

export function getFrontierData(
  benchmarkId: string,
  options: GetFrontierDataOptions = {}
): FrontierChartData | null {
  const { includeVariants = false, minScore = 0, maxPoints = 100 } = options;

  const allModels = flattenedModels;
  const points: FrontierDataPoint[] = [];

  for (const model of allModels) {
    const scoreEntry = model.scores[benchmarkId];
    if (!scoreEntry || scoreEntry.score === null || scoreEntry.score === undefined) {
      continue;
    }

    const score = scoreEntry.score;
    if (score < minScore) continue;

    const isVariant = variantIds.has(model.id);
    
    if (isVariant && !includeVariants) continue;

    points.push({
      modelId: model.id,
      modelName: model.name,
      provider: model.provider,
      releaseDate: model.releaseDate,
      score,
      isOpenSource: model.isOpenSource,
      isVariant,
    });
  }

  if (points.length === 0) {
    return null;
  }

  points.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());

  const limitedPoints = points.slice(-maxPoints);
  
  const benchmark = benchmarks.find((b) => b.id === benchmarkId);
  const benchmarkName = benchmark?.name ?? benchmarkId;
  const higherIsBetter = benchmark?.higherIsBetter ?? true;
  
  const sortedByScore = [...limitedPoints].sort((a, b) => 
    higherIsBetter ? b.score - a.score : a.score - b.score
  );
  const topScore = sortedByScore[0]?.score ?? 0;
  const topModelId = sortedByScore[0]?.modelId ?? "";

  return {
    benchmarkId,
    benchmarkName,
    points: limitedPoints,
    topScore,
    topModelId,
  };
}

export function getFrontierDataForDomain(
  domainId: CapabilityDomain,
  options: GetFrontierDataOptions = {}
): Map<string, FrontierChartData> {
  const benchmarkIds = getBenchmarkIdsForDomain(domainId);
  const results = new Map<string, FrontierChartData>();

  for (const benchmarkId of benchmarkIds) {
    const data = getFrontierData(benchmarkId, options);
    if (data) {
      results.set(benchmarkId, data);
    }
  }

  return results;
}

export function getDomainScoreForModel(
  model: Model,
  domainId: CapabilityDomain
): { average: number; count: number; benchmarks: string[] } | null {
  const benchmarkIds = getBenchmarkIdsForDomain(domainId);

  const normalizedScores: number[] = [];
  const benchmarksWithScores: string[] = [];

  for (const benchmarkId of benchmarkIds) {
    const scoreEntry = model.scores[benchmarkId];
    if (scoreEntry && scoreEntry.score !== null && scoreEntry.score !== undefined) {
      const benchmark = benchmarkMap.get(benchmarkId);
      if (benchmark) {
        normalizedScores.push(normalizeScore(scoreEntry.score, benchmark));
        benchmarksWithScores.push(benchmarkId);
      }
    }
  }

  if (normalizedScores.length === 0) {
    return null;
  }

  const average = normalizedScores.reduce((sum, s) => sum + s, 0) / normalizedScores.length;

  return {
    average: Math.round(average * 10) / 10,
    count: normalizedScores.length,
    benchmarks: benchmarksWithScores,
  };
}

export function getTopModelForDomain(
  domainId: CapabilityDomain
): { modelId: string; modelName: string; average: number } | null {
  const allModels = flattenedModels;
  let topModel: { modelId: string; modelName: string; average: number } | null = null;
  let topAverage = 0;

  for (const model of allModels) {
    const domainScore = getDomainScoreForModel(model, domainId);
    if (domainScore && domainScore.average > topAverage) {
      topAverage = domainScore.average;
      topModel = {
        modelId: model.id,
        modelName: model.name,
        average: domainScore.average,
      };
    }
  }

  return topModel;
}

export function getAverageDomainScore(domainId: CapabilityDomain): number {
  const allModels = flattenedModels;
  const averages: number[] = [];

  for (const model of allModels) {
    const domainScore = getDomainScoreForModel(model, domainId);
    if (domainScore) {
      averages.push(domainScore.average);
    }
  }

  if (averages.length === 0) return 0;

  return Math.round((averages.reduce((sum, a) => sum + a, 0) / averages.length) * 10) / 10;
}
