import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { loadExportedArray } = require("./load-ts-data.cjs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const benchmarks = loadExportedArray(path.join(root, "src/data/benchmarks.ts"), "benchmarks");
const models = loadExportedArray(path.join(root, "src/data/models.ts"), "models");

const categories = Array.from(new Set(benchmarks.map((benchmark) => benchmark.category)));

const benchmarkCoverage = benchmarks
  .map((benchmark) => {
    let modelCount = 0;
    for (const model of models) {
      const score = model.scores?.[benchmark.id]?.score;
      if (score !== null && score !== undefined) modelCount += 1;
    }
    return {
      id: benchmark.id,
      category: benchmark.category,
      models: modelCount,
    };
  })
  .sort((a, b) => a.models - b.models);

const categoryCoverage = categories.map((category) => {
  const categoryBenchmarks = benchmarks.filter((benchmark) => benchmark.category === category);
  const modelsWithAnyScore = models.filter((model) =>
    categoryBenchmarks.some((benchmark) => {
      const score = model.scores?.[benchmark.id]?.score;
      return score !== null && score !== undefined;
    })
  ).length;

  return {
    category,
    benchmarks: categoryBenchmarks.length,
    modelsWithAnyScore,
  };
});

console.log("Category coverage:\n");
for (const row of categoryCoverage) {
  console.log(`- ${row.category}: ${row.modelsWithAnyScore}/${models.length} models, ${row.benchmarks} benchmarks`);
}

console.log("\nLowest benchmark coverage:\n");
for (const row of benchmarkCoverage.slice(0, 20)) {
  console.log(`- ${row.id} (${row.category}): ${row.models} models`);
}
