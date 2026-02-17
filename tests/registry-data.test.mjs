import test from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { loadExportedArray } = require("../scripts/load-ts-data.cjs");

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const benchmarks = loadExportedArray(path.join(root, "src/data/benchmarks.ts"), "benchmarks");
const models = loadExportedArray(path.join(root, "src/data/models.ts"), "models");

function normalizeScore(score, benchmark) {
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

test("benchmark IDs are unique", () => {
  const ids = benchmarks.map((benchmark) => benchmark.id);
  const unique = new Set(ids);
  assert.equal(unique.size, ids.length);
});

test("all model score keys reference valid benchmark IDs", () => {
  const benchmarkIds = new Set(benchmarks.map((benchmark) => benchmark.id));

  for (const model of models) {
    for (const benchmarkId of Object.keys(model.scores ?? {})) {
      assert.ok(benchmarkIds.has(benchmarkId), `${model.id} references unknown benchmark ${benchmarkId}`);
    }
  }
});

test("fallback benchmark links are anchored by benchmark id", () => {
  const defaultLinks = benchmarks
    .map((benchmark) => benchmark.link)
    .filter((link) => typeof link === "string" && link.startsWith("https://artificialanalysis.ai/evaluations"));

  assert.ok(defaultLinks.length > 0, "Expected at least one evaluations fallback link");
  for (const link of defaultLinks) {
    assert.match(link, /^https:\/\/artificialanalysis\.ai\/evaluations#[a-z0-9-]+$/);
  }
});

test("lower-is-better benchmarks normalize in the correct direction", () => {
  const lowerIsBetterBenchmarks = benchmarks.filter((benchmark) => benchmark.higherIsBetter === false);
  assert.ok(lowerIsBetterBenchmarks.length > 0, "Expected at least one lower-is-better benchmark");

  for (const benchmark of lowerIsBetterBenchmarks) {
    const minScore = benchmark.minScore ?? 0;
    const span = Math.max(benchmark.maxScore - minScore, 1);
    const lowerRaw = minScore + span * 0.1;
    const higherRaw = minScore + span * 0.6;

    const lowerNormalized = normalizeScore(lowerRaw, benchmark);
    const higherNormalized = normalizeScore(higherRaw, benchmark);

    assert.ok(
      lowerNormalized > higherNormalized,
      `${benchmark.id} normalization direction is incorrect (${lowerNormalized} <= ${higherNormalized})`
    );
  }
});
