"use client";

import useSWR from 'swr';

export interface ModelMetadata {
  family?: string;
  status?: string;
  trainingCutoff?: string;
  lastUpdated?: string;
  interleavedReasoningField?: string;
  apiSupport?: {
    reasoning?: boolean;
    vision?: boolean;
    tools?: boolean;
    structuredOutput?: boolean;
    attachment?: boolean;
    temperature?: boolean;
    toolCall?: boolean;
    jsonMode?: boolean;
  };
  modalities?: {
    input?: string[];
    output?: string[];
  };
  specs?: {
    contextWindow?: number;
    maxOutputTokens?: number;
    pricing?: {
      input?: number;
      output?: number;
      cacheInput?: number;
      cacheOutput?: number;
      reasoning?: number;
      inputAudio?: number;
      outputAudio?: number;
      contextOver200k?: {
        input: number;
        output: number;
        cacheRead?: number;
      };
    };
  };
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

/**
 * Hook to fetch models.dev metadata dynamically
 * Only loads when needed, reducing initial bundle size
 */
export function useModelsDevMetadata() {
  const { data, error, isLoading, mutate } = useSWR<Record<string, ModelMetadata>>(
    '/api/data/models-dev-metadata.json',
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
    }
  );

  return {
    metadata: data || {},
    isLoading,
    isError: error,
    mutate,
  };
}

/**
 * Get metadata for a specific model
 */
export function useModelMetadata(modelId: string) {
  const { metadata, ...rest } = useModelsDevMetadata();
  
  const modelMetadata = metadata[modelId];
  
  return {
    metadata: modelMetadata,
    ...rest,
  };
}

/**
 * Get all unique families from metadata
 */
export function useModelFamilies() {
  const { metadata, ...rest } = useModelsDevMetadata();
  
  const families = Object.values(metadata)
    .map(m => m?.family)
    .filter((f): f is string => !!f)
    .sort()
    .filter((v, i, a) => a.indexOf(v) === i); // Unique
  
  return {
    families,
    ...rest,
  };
}

/**
 * Get all unique capabilities from metadata
 */
export function useModelCapabilities() {
  const { metadata, ...rest } = useModelsDevMetadata();
  
  const capabilities = new Set<string>();
  
  Object.values(metadata).forEach(m => {
    if (m?.apiSupport) {
      if (m.apiSupport.reasoning) capabilities.add('reasoning');
      if (m.apiSupport.vision) capabilities.add('vision');
      if (m.apiSupport.tools || m.apiSupport.toolCall) capabilities.add('tools');
      if (m.apiSupport.structuredOutput || m.apiSupport.jsonMode) capabilities.add('json');
      if (m.apiSupport.attachment) capabilities.add('attachment');
      if (m.apiSupport.temperature) capabilities.add('temperature');
    }
  });
  
  return {
    capabilities: Array.from(capabilities).sort(),
    ...rest,
  };
}
