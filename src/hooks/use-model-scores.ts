"use client";

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export interface ScoreEntry {
  score: number | null;
  verified?: boolean;
  verificationLevel?: string;
  sourceId?: string;
  sourceUrl?: string;
  asOfDate?: string;
  rawScore?: string;
  notes?: string;
}

export interface ModelScores {
  modelId: string;
  scores: Record<string, ScoreEntry>;
  lastUpdated?: string;
  source?: string;
}

/**
 * Hook to fetch scores for a specific model on-demand
 * Loads individual score JSON files only when needed
 */
export function useModelScores(modelId: string | null) {
  const { data, error, isLoading, mutate } = useSWR<ModelScores>(
    modelId ? `/api/v1/scores/${modelId}.json` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
    }
  );

  return {
    scores: data?.scores || {},
    modelId: data?.modelId || modelId,
    lastUpdated: data?.lastUpdated,
    isLoading,
    isError: error,
    mutate,
  };
}

/**
 * Hook to fetch multiple model scores in parallel
 * Useful for leaderboard views
 */
export function useMultipleModelScores(modelIds: string[]) {
  const scoresRequests = modelIds.map(
    (id) => [`/api/v1/scores/${id}.json`, fetcher] as const
  );

  const { data, error, isLoading } = useSWR(
    scoresRequests.length > 0 ? scoresRequests : null,
    async (requests) => {
      const responses = await Promise.all(
        requests.map(([url, fetcher]) => fetcher(url as string))
      );
      return responses as ModelScores[];
    }
  );

  // Convert array to map for easier lookup
  const scoresMap = data?.reduce(
    (acc, scoreData) => {
      acc[scoreData.modelId] = scoreData.scores;
      return acc;
    },
    {} as Record<string, Record<string, ScoreEntry>>
  );

  return {
    scores: scoresMap || {},
    isLoading,
    isError: error,
  };
}
