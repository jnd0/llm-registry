import { normalizeScore } from "@/lib/stats";
import { Benchmark, Model } from "@/types";

interface QuickHighlight {
  label: string;
  model?: Model;
  customText?: string;
  benchmark: string;
  value: number | null;
  format?: "ratio" | "points" | string;
}

export interface HomeMetrics {
  quickHighlights: QuickHighlight[];
  mappedBenchmarks: string;
  totalScores: number;
  latestScoreDate: string;
}

const metricsCache = new WeakMap<Model[], WeakMap<Benchmark[], HomeMetrics>>();

export function getHomeMetrics(models: Model[], benchmarks: Benchmark[]): HomeMetrics {
  const byBenchmarkCache = metricsCache.get(models);
  const cached = byBenchmarkCache?.get(benchmarks);
  if (cached) return cached;

  const benchmarkById = new Map(benchmarks.map((benchmark) => [benchmark.id, benchmark]));
  const bestByBenchmark = new Map<string, { model: Model; rawScore: number; normalizedScore: number }>();

  const usedBenchmarkIds = new Set<string>();
  let totalScores = 0;
  let latestScoreDate = "";

  for (const model of models) {
    for (const [benchmarkId, entry] of Object.entries(model.scores)) {
      totalScores += 1;
      if (entry.asOfDate && entry.asOfDate > latestScoreDate) {
        latestScoreDate = entry.asOfDate;
      }

      const benchmark = benchmarkById.get(benchmarkId);
      if (!benchmark) continue;
      usedBenchmarkIds.add(benchmarkId);

      if (entry.score === null || entry.score === undefined) continue;

      const normalizedScore = normalizeScore(entry.score, benchmark);
      const current = bestByBenchmark.get(benchmarkId);
      if (!current || normalizedScore > current.normalizedScore) {
        bestByBenchmark.set(benchmarkId, {
          model,
          rawScore: entry.score,
          normalizedScore,
        });
      }
    }
  }

  const bestCoding = bestByBenchmark.get("swe-bench-verified") ?? bestByBenchmark.get("human-eval");
  const bestReasoning = bestByBenchmark.get("gpqa-diamond");
  const bestVision = bestByBenchmark.get("mmmu") ?? bestByBenchmark.get("mmmu-vision");

  const bestValue = bestByBenchmark.get("arena-hard");
  const bestOpenWeights = bestByBenchmark.get("lmsys-chatbot-arena-leaderboard");

  const metrics: HomeMetrics = {
    quickHighlights: [
      {
        label: "Best Value",
        model: bestValue?.model,
        benchmark: bestByBenchmark.has("arena-hard") ? "Arena Hard" : "MMLU",
        value: bestValue?.rawScore ?? null,
      },
      {
        label: "Best Coding",
        model: bestCoding?.model,
        benchmark: bestByBenchmark.has("swe-bench-verified") ? "SWE-bench Verified" : "HumanEval",
        value: bestCoding?.rawScore ?? null,
      },
      {
        label: "Best Open Weights",
        model: bestOpenWeights?.model,
        benchmark: bestByBenchmark.has("lmsys-chatbot-arena-leaderboard") ? "LMSYS Chatbot Arena" : "GPQA",
        value: bestOpenWeights?.rawScore ?? null,
      },
      {
        label: "Most Accessible",
        model: bestVision?.model,
        benchmark: bestByBenchmark.has("mmmu") ? "MMMU" : "Math",
        value: bestVision?.rawScore ?? null,
      },
    ],
    mappedBenchmarks: `${usedBenchmarkIds.size}/${benchmarks.length}`,
    totalScores,
    latestScoreDate,
  };

  const benchmarkCache = byBenchmarkCache ?? new WeakMap<Benchmark[], HomeMetrics>();
  benchmarkCache.set(benchmarks, metrics);
  if (!byBenchmarkCache) {
    metricsCache.set(models, benchmarkCache);
  }

  return metrics;
}
