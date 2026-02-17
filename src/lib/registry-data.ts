import "server-only";

import { benchmarks as rawBenchmarks } from "@/data/benchmarks";
import { models as rawModels } from "@/data/models";
import { sources as rawSources } from "@/data/sources";
import { benchmarkArraySchema, modelArraySchema, sourceArraySchema } from "@/types/schema";

type RegistryData = {
  benchmarks: typeof rawBenchmarks;
  models: typeof rawModels;
  sources: typeof rawSources;
};

let cachedRegistryData: RegistryData | null = null;

export function ensureRegistryDataValid(): RegistryData {
  if (cachedRegistryData) return cachedRegistryData;

  const benchmarks = benchmarkArraySchema.parse(rawBenchmarks);
  const models = modelArraySchema.parse(rawModels);
  const sources = sourceArraySchema.parse(rawSources);

  cachedRegistryData = {
    benchmarks,
    models,
    sources,
  };

  return cachedRegistryData;
}

export const { benchmarks, models, sources } = ensureRegistryDataValid();
