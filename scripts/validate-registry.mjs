import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { loadExportedArray, loadExportedValue } = require("./load-ts-data.cjs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const strictMode = process.argv.includes("--strict");

const benchmarks = loadExportedArray(path.join(root, "src/data/benchmarks.ts"), "benchmarks");
const baseModels = loadExportedArray(path.join(root, "src/data/models.ts"), "models");
const aaScoreOverrides = loadExportedValue(path.join(root, "src/data/aa-overrides.ts"), "aaScoreOverrides");
const sources = loadExportedArray(path.join(root, "src/data/sources.ts"), "sources");

const models = baseModels.map((model) => {
  const patch = aaScoreOverrides[model.id];
  if (!patch) return model;
  return {
    ...model,
    scores: {
      ...(model.scores ?? {}),
      ...patch,
    },
  };
});

const benchmarkIds = benchmarks.map((benchmark) => benchmark.id);
const sourceIds = new Set(sources.map((source) => source.id));

const errors = [];
const warnings = [];
const info = [];
let missingScoreProvenanceCount = 0;
let missingBenchmarkLinkCount = 0;
let missingBenchmarkUnitCount = 0;
let missingBenchmarkNormalizationCount = 0;

function findDuplicates(values) {
  return [...new Set(values.filter((value, index) => values.indexOf(value) !== index))];
}

const duplicateBenchmarkIds = findDuplicates(benchmarkIds);
if (duplicateBenchmarkIds.length > 0) {
  errors.push(`Duplicate benchmark IDs: ${duplicateBenchmarkIds.join(", ")}`);
}

const benchmarkMap = new Map(benchmarks.map((benchmark) => [benchmark.id, benchmark]));
const usedBenchmarkIds = new Set();

function validateModelRecursive(model) {
  modelIds.push(model.id);
  for (const [benchmarkId, scoreEntry] of Object.entries(model.scores ?? {})) {
    usedBenchmarkIds.add(benchmarkId);

    const benchmark = benchmarkMap.get(benchmarkId);
    if (!benchmark) {
      errors.push(`Model \"${model.id}\" references unknown benchmark ID \"${benchmarkId}\"`);
      continue;
    }

    if (scoreEntry.score !== null) {
      const min = benchmark.minScore ?? (benchmark.normalization === "elo" || benchmark.id === "lmarena-elo" ? 1000 : 0);
      const max = benchmark.maxScore;
      if (typeof scoreEntry.score !== "number" || Number.isNaN(scoreEntry.score)) {
        errors.push(`Model \"${model.id}\" benchmark \"${benchmarkId}\" has non-numeric score.`);
      } else if (scoreEntry.score < min || scoreEntry.score > max) {
        errors.push(`Model \"${model.id}\" benchmark \"${benchmarkId}\" score ${scoreEntry.score} outside [${min}, ${max}]`);
      }
    }

    if (scoreEntry.sourceId && !sourceIds.has(scoreEntry.sourceId)) {
      errors.push(`Model \"${model.id}\" benchmark \"${benchmarkId}\" uses unknown sourceId \"${scoreEntry.sourceId}\"`);
    }

    if (!scoreEntry.sourceId && !scoreEntry.sourceUrl) {
      missingScoreProvenanceCount += 1;
    }
  }

  if (model.variants) {
    for (const variant of model.variants) {
      validateModelRecursive(variant);
    }
  }
}

const modelIds = [];
for (const model of models) {
  validateModelRecursive(model);
}

const duplicateModelIds = findDuplicates(modelIds);
if (duplicateModelIds.length > 0) {
  errors.push(`Duplicate model IDs: ${duplicateModelIds.join(", ")}`);
}

for (const benchmark of benchmarks) {
  if (!benchmark.category) {
    errors.push(`Benchmark \"${benchmark.id}\" missing category.`);
  }
  if (!benchmark.description) {
    errors.push(`Benchmark \"${benchmark.id}\" missing description.`);
  }
  if (!benchmark.link) {
    missingBenchmarkLinkCount += 1;
  }
  if (!benchmark.unit) {
    missingBenchmarkUnitCount += 1;
  }
  if (!benchmark.normalization) {
    missingBenchmarkNormalizationCount += 1;
  }
}

const unusedBenchmarkIds = benchmarkIds.filter((benchmarkId) => !usedBenchmarkIds.has(benchmarkId));
if (unusedBenchmarkIds.length > 0) {
  info.push(`Unused benchmark IDs (no model scores): ${unusedBenchmarkIds.join(", ")}`);
}

if (missingScoreProvenanceCount > 0) {
  warnings.push(`Scores missing provenance (sourceId/sourceUrl): ${missingScoreProvenanceCount}`);
}
if (missingBenchmarkLinkCount > 0) {
  warnings.push(`Benchmarks missing source link: ${missingBenchmarkLinkCount}`);
}
if (missingBenchmarkUnitCount > 0) {
  warnings.push(`Benchmarks missing unit metadata: ${missingBenchmarkUnitCount}`);
}
if (missingBenchmarkNormalizationCount > 0) {
  warnings.push(`Benchmarks missing normalization metadata: ${missingBenchmarkNormalizationCount}`);
}

console.log(`Top-level Models: ${models.length}`);
console.log(`Total Models (incl. variants): ${modelIds.length}`);
console.log(`Sources: ${sources.length}`);
console.log(`Used benchmark IDs: ${usedBenchmarkIds.size}`);

if (info.length > 0) {
  console.log(`\nInfo (${info.length}):`);
  for (const item of info) {
    console.log(`- ${item}`);
  }
}

if (warnings.length > 0) {
  console.log(`\nWarnings (${warnings.length}):`);
  for (const warning of warnings.slice(0, 40)) {
    console.log(`- ${warning}`);
  }
  if (warnings.length > 40) {
    console.log(`- ... ${warnings.length - 40} more warnings`);
  }
}

if (strictMode && warnings.length > 0) {
  errors.push(`Strict mode enabled and ${warnings.length} warning(s) were found.`);
}

if (errors.length > 0) {
  console.error(`\nErrors (${errors.length}):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("\nRegistry validation passed.");
