import "server-only";

import { benchmarks as rawBenchmarks } from "@/data/benchmarks";
import { models as rawModels } from "@/data/models";
import { sources as rawSources } from "@/data/sources";
import { benchmarkArraySchema, modelArraySchema, sourceArraySchema } from "@/types/schema";
import { Model } from "@/types";

type RegistryData = {
  benchmarks: typeof rawBenchmarks;
  models: typeof rawModels;
  sources: typeof rawSources;
  flattenedModels: Model[];
};

let cachedRegistryData: RegistryData | null = null;

function flatten(input: Model[]): Model[] {
  return input.reduce((acc, model) => {
    acc.push(model);
    if (model.variants) {
      acc.push(...flatten(model.variants));
    }
    return acc;
  }, [] as Model[]);
}

export function ensureRegistryDataValid(): RegistryData {
  if (cachedRegistryData) return cachedRegistryData;

  const benchmarks = benchmarkArraySchema.parse(rawBenchmarks);
  const models = modelArraySchema.parse(rawModels);
  const sources = sourceArraySchema.parse(rawSources);
  const flattenedModels = flatten(models);

  cachedRegistryData = {
    benchmarks,
    models,
    sources,
    flattenedModels,
  };

  return cachedRegistryData;
}

export const { benchmarks, models, sources, flattenedModels } = ensureRegistryDataValid();

export function findModel(id: string): Model | undefined {
  return flattenedModels.find((m) => m.id === id);
}

export function findParentModel(variantId: string): Model | undefined {
  return models.find((m) => m.variants?.some((v) => v.id === variantId));
}
