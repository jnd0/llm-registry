import { Model, Benchmark } from "@/types";

/**
 * Normalizes a raw score to a 0-100 scale based on the benchmark's max score and specific scaling rules.
 */
export function normalizeScore(score: number, benchmark: Benchmark): number {
  const minScore = benchmark.minScore ?? (benchmark.normalization === "elo" || benchmark.id === "lmarena-elo" ? 1000 : 0);
  const normalization = benchmark.normalization ?? (benchmark.id === "lmarena-elo" ? "elo" : "max");

  let normalized = 0;

  if (normalization === "elo" || normalization === "minmax") {
    const denominator = benchmark.maxScore - minScore;
    normalized = denominator > 0 ? ((score - minScore) / denominator) * 100 : 0;
  } else if (normalization === "inverse") {
    normalized = benchmark.maxScore > 0 ? ((benchmark.maxScore - score) / benchmark.maxScore) * 100 : 0;
  } else {
    normalized = benchmark.maxScore > 0 ? (score / benchmark.maxScore) * 100 : 0;
  }

  if (!benchmark.higherIsBetter && normalization !== "inverse") {
    normalized = 100 - normalized;
  }

  return Math.max(0, Math.min(100, normalized));
}

/**
 * Calculates a composite score for a model based on available benchmarks.
 * This is a simple average of normalized scores for now.
 */
export function calculateCompositeScore(model: Model, benchmarks: Benchmark[]): number {
  let total = 0;
  let count = 0;

  benchmarks.forEach((benchmark) => {
    const scoreData = model.scores[benchmark.id];
    if (scoreData && scoreData.score !== null) {
      total += normalizeScore(scoreData.score, benchmark);
      count++;
    }
  });

  return count === 0 ? 0 : Number((total / count).toFixed(1));
}

export function calculateCoverage(model: Model, benchmarks: Benchmark[]): number {
  const definedScores = benchmarks.filter((benchmark) => {
    const scoreData = model.scores[benchmark.id];
    return scoreData && scoreData.score !== null;
  }).length;

  if (benchmarks.length === 0) return 0;
  return Number(((definedScores / benchmarks.length) * 100).toFixed(1));
}

export function calculateCategoryScore(model: Model, benchmarks: Benchmark[], category: Benchmark["category"]): number | null {
  const categoryBenchmarks = benchmarks.filter((benchmark) => benchmark.category === category);
  if (categoryBenchmarks.length === 0) return null;

  let total = 0;
  let count = 0;

  categoryBenchmarks.forEach((benchmark) => {
    const scoreData = model.scores[benchmark.id];
    if (scoreData && scoreData.score !== null) {
      total += normalizeScore(scoreData.score, benchmark);
      count++;
    }
  });

  if (count === 0) return null;
  return Number((total / count).toFixed(1));
}

/**
 * Returns the rank of a model for a specific benchmark compared to all other models.
 */
export function getRank(modelId: string, benchmarkId: string, allModels: Model[]): number | null {
  const modelsWithScore = allModels
    .filter((m) => m.scores[benchmarkId] !== undefined)
    .sort((a, b) => {
      const scoreA = a.scores[benchmarkId]?.score || 0;
      const scoreB = b.scores[benchmarkId]?.score || 0;
      return scoreB - scoreA; // Descending
    });

  const rank = modelsWithScore.findIndex((m) => m.id === modelId);
  return rank === -1 ? null : rank + 1;
}

export function formatCurrency(value: number): string {
    if (value === 0) return "Free";
    return `$${value.toFixed(2)}`;
}
