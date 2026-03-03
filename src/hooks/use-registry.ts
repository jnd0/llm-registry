"use client";

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export interface RegistryModel {
  id: string;
  name: string;
  provider: string;
  releaseDate: string;
  tier: 'verified' | 'discovered';
  hasScores: boolean;
  scoreCount: number;
  family?: string | null;
  [key: string]: any;
}

export interface RegistryManifest {
  generated: string;
  totalModels: number;
  verifiedModels: number;
  discoveredModels: number;
  models: RegistryModel[];
}

export interface UseRegistryOptions {
  includeUnscored?: boolean;
  filterByTier?: 'all' | 'verified' | 'discovered';
  filterByFamily?: string;
  filterByProvider?: string;
}

/**
 * Hook to fetch and filter the registry manifest
 * Loads lightweight model list on-demand
 */
export function useRegistry(options: UseRegistryOptions = {}) {
  const { data, error, isLoading, mutate } = useSWR<RegistryManifest>(
    '/api/registry-manifest.json',
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
    }
  );

  const filteredModels = useRegistryFilter(data?.models || [], options);

  return {
    models: filteredModels,
    total: data?.totalModels || 0,
    verified: data?.verifiedModels || 0,
    discovered: data?.discoveredModels || 0,
    isLoading,
    isError: error,
    mutate,
  };
}

/**
 * Filter registry models based on options
 */
export function useRegistryFilter(
  models: RegistryModel[],
  options: UseRegistryOptions = {}
): RegistryModel[] {
  const {
    includeUnscored = false,
    filterByTier = 'all',
    filterByFamily,
    filterByProvider,
  } = options;

  return models.filter((model) => {
    // Filter by tier
    if (filterByTier === 'verified' && model.tier !== 'verified') {
      return false;
    }
    if (filterByTier === 'discovered' && model.tier !== 'discovered') {
      return false;
    }

    // Filter unscored models (default: show only scored)
    if (!includeUnscored && !model.hasScores) {
      return false;
    }

    // Filter by family
    if (filterByFamily && model.family !== filterByFamily) {
      return false;
    }

    // Filter by provider
    if (filterByProvider && model.provider !== filterByProvider) {
      return false;
    }

    return true;
  });
}

/**
 * Get unique families from registry
 */
export function useRegistryFamilies() {
  const { models, ...rest } = useRegistry({ includeUnscored: true });

  const families = Array.from(
    new Set(models.map((m) => m.family).filter((f): f is string => !!f))
  ).sort();

  return {
    families,
    ...rest,
  };
}

/**
 * Get unique providers from registry
 */
export function useRegistryProviders() {
  const { models, ...rest } = useRegistry({ includeUnscored: true });

  const providers = Array.from(
    new Set(models.map((m) => m.provider))
  ).sort();

  return {
    providers,
    ...rest,
  };
}
