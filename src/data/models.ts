import { Model } from "@/types";
import { aaScoreOverrides } from "@/data/aa-overrides";
import { modelMetadataOverrides, type ModelMetadataOverride } from "@/data/model-metadata-overrides";

const PROVIDER_SOURCE_MAP: Record<string, string> = {
  "OpenAI": "openai-blog",
  "Anthropic": "anthropic-news",
  "Google DeepMind": "google-ai-blog",
  "DeepSeek": "deepseek-news",
  "Meta": "meta-ai",
  "xAI": "xai-news",
  "Mistral": "mistral-news",
  "Alibaba": "artificial-analysis",
  "Microsoft": "microsoft-ai",
  "Cohere": "cohere-news",
  "Moonshot AI": "moonshot-news",
  "Minimax": "artificial-analysis",
  "ByteDance": "bytedance-seed",
  "Amazon": "amazon-nova",
  "BigCode": "artificial-analysis",
  "Databricks": "databricks-ai",
  "Shanghai AI Lab": "artificial-analysis",
  "01.AI": "artificial-analysis",
  "Baichuan": "artificial-analysis",
  "Snowflake": "artificial-analysis",
  "Zhipu AI": "zhipu-news",
  "AI21": "ai21-news",
};

function addScoreProvenance(input: Model[]): Model[] {
  return input.map((model) => {
    const defaultSourceId = PROVIDER_SOURCE_MAP[model.provider] ?? "artificial-analysis";
    const scores = Object.fromEntries(
      Object.entries(model.scores).map(([benchmarkId, scoreEntry]) => {
        return [
          benchmarkId,
          {
            ...scoreEntry,
            verificationLevel: scoreEntry.verificationLevel,
            sourceId: scoreEntry.sourceId ?? defaultSourceId,
            asOfDate: scoreEntry.asOfDate,
          },
        ];
      })
    );

    return {
      ...model,
      scores,
      variants: model.variants ? addScoreProvenance(model.variants) : undefined,
    };
  });
}

function applyScoreOverrides(input: Model[], overrides: Record<string, Model["scores"]>): Model[] {
  return input.map((model) => {
    const patch = overrides[model.id];
    let nextModel = model;
    if (patch) {
      nextModel = {
        ...model,
        scores: {
          ...model.scores,
          ...patch,
        },
      };
    }

    if (nextModel.variants) {
      nextModel.variants = applyScoreOverrides(nextModel.variants, overrides);
    }

    return nextModel;
  });
}

function applyMetadataOverrides(input: Model[], overrides: Record<string, ModelMetadataOverride>): Model[] {
  return input.map((model) => {
    const patch = overrides[model.id];
    let nextModel = model;
    if (patch) {
      const nextSpecs = patch.specs
        ? {
            ...model.specs,
            ...patch.specs,
            pricing: {
              ...model.specs.pricing,
              ...(patch.specs.pricing ?? {}),
            },
          }
        : model.specs;

      nextModel = {
        ...model,
        ...patch,
        specs: nextSpecs,
        scores: model.scores,
      };
    }

    if (nextModel.variants) {
      nextModel.variants = applyMetadataOverrides(nextModel.variants, overrides);
    }

    return nextModel;
  });
}

const rawModels: Model[] = [
  // --- OPENAI ---
  {
    id: "o1",
    name: "o1",
    provider: "OpenAI",
    releaseDate: "2024-12-05",
    capabilities: ["text", "code", "reasoning", "vision"],
    isOpenSource: false,
    specs: {
      contextWindow: 200000,
      parameters: "Reasoning Model",
      pricing: { input: 15.00, output: 60.00 }
    },
    scores: {
      "mmlu": { score: 91.8, verified: true },
      "gpqa-diamond": { score: 78.0, verified: true },
      "math-500": { score: 96.4, verified: true },
      "human-eval": { score: 88.1, verified: true },
      "bigcodebench": { score: 35.5, verified: true },
      "agentbench": { score: 87.6, verified: true },
      "lmarena-elo": { score: 1360, verified: true }
    }
  },
  {
    id: "o1-preview",
    name: "o1-preview",
    provider: "OpenAI",
    releaseDate: "2024-09-12",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 128000,
      parameters: "Reasoning Model",
      pricing: { input: 15.00, output: 60.00 }
    },
    scores: {
      "mmlu": { score: 90.8, verified: true },
      "gpqa-diamond": { score: 78.3, verified: true },
      "math": { score: 94.8, verified: true },
      "aime": { score: 83.3, verified: true },
      "lmarena-elo": { score: 1330, verified: true }
    }
  },
  {
    id: "o1-mini",
    name: "o1-mini",
    provider: "OpenAI",
    releaseDate: "2024-09-12",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 128000,
      parameters: "Small Reasoning",
      pricing: { input: 1.10, output: 4.40 }
    },
    scores: {
      "mmlu": { score: 85.2, verified: true },
      "gpqa-diamond": { score: 60.0, verified: true },
      "math-500": { score: 90.0, verified: true },
      "human-eval": { score: 92.4, verified: true }
    }
  },
  {
    id: "openai-gpt-4o",
    name: "GPT-4o",
    provider: "OpenAI",
    releaseDate: "2024-05-13",
    capabilities: ["text", "code", "vision", "audio"],
    isOpenSource: false,
    specs: {
      contextWindow: 128000,
      parameters: "200B (Estimated)",
      pricing: { input: 2.50, output: 10.00 }
    },
    scores: {
      "mmlu": { score: 88.7, verified: true },
      "gpqa-diamond": { score: 53.6, verified: true },
      "math": { score: 76.6, verified: true },
      "human-eval": { score: 90.2, verified: true },
      "bigcodebench": { score: 31.1, verified: true },
      "agentbench": { score: 90.0, verified: true },
      "superchem": { score: 40.0, verified: false },
      "mmmu": { score: 69.1, verified: true },
      "lmarena-elo": { score: 1388, verified: true }
    }
  },
  {
    id: "openai-gpt-4-5",
    name: "GPT-4.5 (Orion)",
    provider: "OpenAI",
    releaseDate: "2025-02-14",
    capabilities: ["text", "code", "vision"],
    isOpenSource: false,
    specs: {
      contextWindow: 200000,
      parameters: "Orion Engine",
      pricing: { input: 4.50, output: 13.50 }
    },
    scores: {
      "mmlu": { score: 90.2, verified: true },
      "gpqa-diamond": { score: 65.4, verified: true },
      "mmmu": { score: 78.5, verified: true }
    }
  },
  {
    id: "openai-gpt-5-1",
    name: "GPT-5.1",
    provider: "OpenAI",
    releaseDate: "2025-08-15",
    capabilities: ["text", "code", "vision", "audio", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 256000,
      parameters: "Unknown",
      pricing: { input: 2.00, output: 10.00 }
    },
    scores: {
      "mmlu": { score: 91.0, verified: true },
      "gpqa-diamond": { score: 87.3, verified: true },
      "math": { score: 92.0, verified: true },
      "human-eval": { score: 98.2, verified: false, sourceId: "openai-blog" },
      "mmmu": { score: 84.5, verified: false, sourceId: "openai-blog" },
      "lmarena-elo": { score: 1450, verified: false, sourceId: "lmarena" },
      "livebench": { score: 70.48, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
    }
  },
  {
    id: "gpt-5-2-pro",
    name: "GPT-5.2 Pro",
    provider: "OpenAI",
    releaseDate: "2025-12-11",
    capabilities: ["text", "code", "vision", "audio", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 400000,
      parameters: "Unknown (MoE)",
      pricing: { input: 21.00, output: 168.00 }
    },
    scores: {
      "mmlu": { score: 93.2, verified: true, sourceId: "llm-stats", asOfDate: "2026-02-18" },
      "mmlu-pro": { score: 88.5, verified: true, sourceId: "openai-gpt52-announce", asOfDate: "2025-12-11" },
      "gpqa-diamond": { score: 93.2, verified: true, sourceId: "llm-stats", asOfDate: "2026-02-18" },
      "math": { score: 100.0, verified: true, sourceId: "openai-gpt52-announce", asOfDate: "2025-12-11" },
      "aime-2025": { score: 100.0, verified: true, sourceId: "openai-gpt52-announce", asOfDate: "2025-12-11" },
      "human-eval": { score: 95.0, verified: true, sourceId: "openai-gpt52-announce", asOfDate: "2025-12-11" },
      "swe-bench-verified": { score: 80.0, verified: true, sourceId: "openai-gpt52-announce", asOfDate: "2025-12-11" },
      "swe-bench-pro": { score: 55.6, verified: true, sourceId: "openai-gpt52-announce", asOfDate: "2025-12-11" },
      "mmmu-pro": { score: 86.5, verified: true, sourceId: "openai-gpt52-announce", asOfDate: "2025-12-11" },
      "videommmu": { score: 90.5, verified: true, sourceId: "openai-gpt52-announce", asOfDate: "2025-12-11" },
      "hle": { score: 50.0, verified: true, sourceId: "openai-gpt52-announce", asOfDate: "2025-12-11" },
      "arc-agi-1": { score: 86.2, verified: true, sourceId: "openai-gpt52-announce", asOfDate: "2025-12-11" },
      "arc-agi-2": { score: 52.9, verified: true, sourceId: "openai-gpt52-announce", asOfDate: "2025-12-11" },
      "charxiv-rq": { score: 88.7, verified: true, sourceId: "openai-gpt52-announce", asOfDate: "2025-12-11" },
      "lmarena-elo": { score: 1512, verified: true, sourceId: "lmarena", asOfDate: "2026-02-18" }
    }
  },
  {
    id: "gpt-5-2",
    name: "GPT-5.2",
    provider: "OpenAI",
    releaseDate: "2025-12-11",
    capabilities: ["text", "code", "vision", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 512000,
      parameters: "Ultra-High Dense",
      pricing: { input: 1.75, output: 14.00 }
    },
    scores: {
      "mmlu-pro": { score: 85.9, verified: true },
      "hle": { score: 29.9, verified: true },
      "livebench": { score: 48.91, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
    },
    variants: [
      {
        id: "gpt-5-2-high",
        name: "GPT-5.2 High",
        provider: "OpenAI",
        releaseDate: "2025-12-11",
        capabilities: ["text", "code", "vision", "reasoning"],
        isOpenSource: false,
        specs: {
          contextWindow: 512000,
          parameters: "Ultra-High Dense",
          pricing: { input: 1.75, output: 14.00 }
        },
        scores: {
          "mmlu-pro": { score: 85.9, verified: true },
          "hle": { score: 29.9, verified: true },
          "livebench": { score: 74.84, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" },
          "simpleqa": { score: 14.5, verified: true },
          "healthbench": { score: 33.3, verified: true },
          "supergpqa": { score: 29.3, verified: true },
          "matharena-apex": { score: 83.2, verified: true },
          "factscore": { score: 61.8, verified: true },
          "aime-2026": { score: 67.9, verified: true },
          "hmmt-feb-2025": { score: 61.0, verified: true },
          "codeforces": { score: 3148, verified: true },
          "livecodebench-v6": { score: 73.8, verified: true },
          "gpqa-diamond": { score: 92.4, verified: true },
          "arc-agi-1": { score: 89.9, verified: true },
          "mrcr-v2": { score: 89.4, verified: true },
          "longbench-v2": { score: 63.2, verified: true },
          "mmmlu": { score: 90.3, verified: true },
          "ifeval-inverse": { score: 87.9, verified: true },
          "longfact-concepts": { score: 99.7, verified: true },
          "korbench": { score: 57.5, verified: true },
          "graphwalks-bfs": { score: 99.7, verified: true },
          "global-piqa": { score: 93.2, verified: true },
          "multichallenge": { score: 59.5, verified: true },
          "longfact-objects": { score: 99.2, verified: true },
          "terminal-bench": { score: 62.4, verified: true },
          "swe-lancer": { score: 48.9, verified: true },
          "swe-bench-verified": { score: 80.0, verified: true },
          "multi-swe-bench": { score: 47.7, verified: true },
          "swe-bench-pro": { score: 55.6, verified: true },
          "swe-multilingual": { score: 68.8, verified: true },
          "swe-evo": { score: 12.5, verified: true },
          "aider-polyglot": { score: 80.0, verified: true },
          "artifactsbench": { score: 71.1, verified: true },
          "codesimpleqa": { score: 62.3, verified: true },
          "spreadsheetbench-verified": { score: 69.9, verified: true },
          "browsecomp": { score: 77.9, verified: true },
          "browsecomp-zh": { score: 76.1, verified: true },
          "hle-text": { score: 76.8, verified: true },
          "hle-verified": { score: 73.8, verified: true },
          "widesearch": { score: 71.3, verified: true },
          "finsearchcomp": { score: 36.3, verified: true },
          "deepsearchqa": { score: 76.1, verified: true },
          "seal-0": { score: 63.9, verified: true },
          "tau-bench": { score: 82.0, verified: true },
          "tau-bench-telecom": { score: 98.7, verified: true },
          "mcp-mark": { score: 54.7, verified: true },
          "bfcl-v4": { score: 57.5, verified: true },
          "vitabench": { score: 65.9, verified: true },
          "deepconsult": { score: 54.3, verified: true },
          "deepresearchbench": { score: 53.3, verified: true },
          "researchrubrics": { score: 42.3, verified: true },
          "minedojo-verified": { score: 18.3, verified: true },
          "mm-browsecomp": { score: 26.3, verified: true },
          "hle-vl": { score: 36.0, verified: true },
          "scicode": { score: 49.7, verified: true },
          "frontiersci-research": { score: 18.3, verified: true },
          "frontiersci-olympiad": { score: 75.0, verified: true },
          "biobench": { score: 58.1, verified: true },
          "ainstein-bench": { score: 41.3, verified: true },
          "vibe-coding": { score: 71.1, verified: true },
          "nl2repo-bench": { score: 49.3, verified: true },
          "nl2repo-pass1": { score: 8.0, verified: true },
          "cl-bench": { score: 45.0, verified: true },
          "tob-complex": { score: 63.6, verified: true },
          "tob-reference": { score: 64.7, verified: true },
          "healthbench-hard": { score: 36.6, verified: true },
          "gdpval-diamond": { score: 26.9, verified: true },
          "xpert-bench": { score: 53.1, verified: true },
          "tob-k12": { score: 61.6, verified: true },
          "tob-compositional": { score: 62.1, verified: true },
          "tob-classification": { score: 44.7, verified: true },
          "tob-extraction": { score: 19.33, verified: true },
          "world-travel-vlm": { score: 32.67, verified: true },
          "world-travel-text": { score: 64.5, verified: true }
        }
      },
      {
        id: "gpt-5-2-xhigh",
        name: "GPT-5.2 Extra High",
        provider: "OpenAI",
        releaseDate: "2025-12-11",
        capabilities: ["text", "code", "vision", "reasoning"],
        isOpenSource: false,
        specs: {
          contextWindow: 512000,
          parameters: "Ultra-High Dense",
          pricing: { input: 1.75, output: 14.00 }
        },
        scores: {
          "hle": { score: 34.5, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "hle-full-tools": { score: 45.5, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "arc-agi-2": { score: 52.9, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "aime-2025": { score: 100, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "mmmu-pro": { score: 79.5, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "screenspot-pro": { score: 86.3, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "charxiv-reasoning": { score: 82.1, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "omnidocbench-15": { score: 0.143, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "videommmu": { score: 85.9, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "livecodebench-pro": { score: 2393, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "toolathlon": { score: 46.3, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "mcp-atlas": { score: 60.6, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "vending-bench-2": { score: 3952, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "facts-benchmark": { score: 61.4, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "simpleqa-verified": { score: 38.0, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "gpqa-diamond": { score: 92.4, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "mrcr-v2": { score: 81.9, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "mmmlu": { score: 89.6, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "global-piqa": { score: 91.2, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "swe-bench-verified": { score: 80.0, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" }
        }
      }
    ]
  },
  {
    id: "openai-gpt-5-3-codex",
    name: "GPT-5.3 Codex",
    provider: "OpenAI",
    releaseDate: "2026-02-05",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 512000,
      parameters: "Code Optimized",
      pricing: { input: 1.50, output: 8.00 }
    },
    scores: {
      "human-eval": { score: 98.5, verified: true },
      "swe-bench-verified": { score: 72.4, verified: true },
      "terminal-bench": { score: 77.3, verified: true },
      "osworld-verified": { score: 64.7, verified: true },
      "livebench": { score: 74.30, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
    }
  },
  {
    id: "gpt-5-mini",
    name: "GPT-5-mini",
    provider: "OpenAI",
    releaseDate: "2025-08-07",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 128000,
      parameters: "Efficient",
      pricing: { input: 0.25, output: 2.00 }
    },
    scores: {
      "mmlu": { score: 85.2, verified: true, sourceId: "llm-stats", asOfDate: "2026-02-18" },
      "mmlu-pro": { score: 84.1, verified: true, sourceId: "llm-stats", asOfDate: "2026-02-18" },
      "gpqa-diamond": { score: 75.8, verified: true, sourceId: "llm-stats", asOfDate: "2026-02-18" },
      "math": { score: 78.5, verified: true, sourceId: "artificial-analysis", asOfDate: "2026-02-16" },
      "human-eval": { score: 88.0, verified: true, sourceId: "artificial-analysis", asOfDate: "2026-02-16" },
      "swe-bench-verified": { score: 55.2, verified: true, sourceId: "artificial-analysis", asOfDate: "2026-02-16" },
      "lmarena-elo": { score: 1358, verified: true, sourceId: "lmarena", asOfDate: "2026-02-18" }
    },
    variants: [
      {
        id: "gpt-5-mini-high",
        name: "GPT-5-mini High",
        provider: "OpenAI",
        releaseDate: "2025-08-07",
        capabilities: ["text", "code", "reasoning"],
        isOpenSource: false,
        specs: {
          contextWindow: 128000,
          parameters: "Efficient High-Cap",
          pricing: { input: 0.25, output: 2.00 }
        },
        scores: {
          "mmlu-pro": { score: 84.1, verified: true },
          "hle": { score: 17.6, verified: true },
          "simpleqa": { score: 26.0, verified: true },
          "math": { score: 92.5, verified: true },
          "aime-2026": { score: 92.5, verified: true },
          "codeforces": { score: 1985, verified: true },
          "gpqa-diamond": { score: 82.8, verified: true },
          "human-eval": { score: 94.0, verified: false, sourceId: "openai-blog" },
          "mmmu": { score: 78.2, verified: false, sourceId: "openai-blog" },
          "arc-agi-1": { score: 54.5, verified: true },
          "mmmlu": { score: 86.3, verified: true },
          "putnam-200": { score: 30.5, verified: true },
          "lmarena-elo": { score: 1380, verified: false, sourceId: "lmarena" },
          "livebench": { score: 65.91, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
        }
      }
    ]
  },
  {
    id: "o3-pro",
    name: "o3-pro",
    provider: "OpenAI",
    releaseDate: "2025-06-10",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 256000,
      parameters: "Reasoning Model",
      pricing: { input: 20.00, output: 80.00 }
    },
    scores: {
      "gpqa-diamond": { score: 93.2, verified: true },
      "math": { score: 99.0, verified: true },
      "aime-2025": { score: 96.0, verified: true },
      "lmarena-elo": { score: 1360, verified: true }
    }
  },
  {
    id: "o3",
    name: "o3",
    provider: "OpenAI",
    releaseDate: "2025-04-12",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 200000,
      parameters: "Reasoning Model",
      pricing: { input: 2.00, output: 8.00 }
    },
    scores: {
      "math": { score: 98.2, verified: true },
      "aime": { score: 92.0, verified: true },
      "bigcodebench": { score: 35.5, verified: true },
      "agentbench": { score: 84.7, verified: true },
      "livebench": { score: 84.6, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" },
      "superchem": { score: 40.0, verified: false }
    }
  },
  {
    id: "o4-mini",
    name: "o4-mini",
    provider: "OpenAI",
    releaseDate: "2026-02-01",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 128000,
      parameters: "Small Reasoning",
      pricing: { input: 0.15, output: 0.60 }
    },
    scores: {
      "mmlu": { score: 84.5, verified: true },
      "math": { score: 88.0, verified: true }
    }
  },
  {
    id: "openai-gpt-oss-120b",
    name: "GPT-oss-120b",
    provider: "OpenAI",
    releaseDate: "2025-10-20",
    capabilities: ["text", "code"],
    isOpenSource: true,
    specs: {
      contextWindow: 128000,
      parameters: "120B",
      pricing: { input: 0, output: 0 }
    },
    scores: {
      "mmlu": { score: 90.0, verified: true },
      "gpqa-diamond": { score: 80.1, verified: true },
      "ifbench": { score: 0.695, verified: true },
      "math": { score: 97.9, verified: true },
      "hle": { score: 19.0, verified: true },
      "livebench": { score: 46.09, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
    }
  },

  // --- ANTHROPIC ---
  {
    id: "claude-3-5-sonnet",
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    releaseDate: "2024-06-20",
    capabilities: ["text", "code", "vision"],
    isOpenSource: false,
    specs: {
      contextWindow: 200000,
      parameters: "175B (Estimated)",
      pricing: { input: 3.00, output: 15.00 }
    },
    scores: {
      "mmlu": { score: 88.7, verified: true },
      "gpqa-diamond": { score: 59.4, verified: true },
      "human-eval": { score: 92.0, verified: true },
      "bigcodebench": { score: 30.4, verified: true },
      "agentbench": { score: 80.1, verified: true },
      "superchem": { score: 40.0, verified: false },
      "swe-bench-verified": { score: 49.0, verified: true },
      "mmmu": { score: 67.2, verified: true },
      "lmarena-elo": { score: 1271, verified: true }
    }
  },
  {
    id: "claude-3-5-haiku",
    name: "Claude 3.5 Haiku",
    provider: "Anthropic",
    releaseDate: "2024-10-22",
    capabilities: ["text", "code"],
    isOpenSource: false,
    specs: {
      contextWindow: 200000,
      parameters: "Unknown",
      pricing: { input: 1.00, output: 5.00 }
    },
    scores: {
      "mmlu": { score: 81.0, verified: true },
      "mmlu-pro": { score: 65.0, verified: true },
      "gpqa-diamond": { score: 41.6, verified: true },
      "math": { score: 73.0, verified: true },
      "human-eval": { score: 88.1, verified: true }
    }
  },
  {
    id: "claude-3-7-sonnet",
    name: "Claude 3.7 Sonnet",
    provider: "Anthropic",
    releaseDate: "2025-03-25",
    capabilities: ["text", "code", "vision"],
    isOpenSource: false,
    specs: {
      contextWindow: 200000,
      parameters: "Refined Architecture",
      pricing: { input: 3.00, output: 15.00 }
    },
    scores: {
      "mmlu": { score: 89.2, verified: true },
      "gpqa-diamond": { score: 65.6, verified: false, sourceId: "artificial-analysis" },
      "math-500": { score: 85.0, verified: false, sourceId: "artificial-analysis" },
      "human-eval": { score: 93.5, verified: false, sourceId: "anthropic-news" },
      "mmmu": { score: 76.4, verified: false, sourceId: "anthropic-news" },
      "lmarena-elo": { score: 1451, verified: false, sourceId: "lmarena" },
      "swe-bench-verified": { score: 55.4, verified: true }
    }
  },
  {
    id: "claude-opus-4-6",
    name: "Claude Opus 4.6",
    provider: "Anthropic",
    releaseDate: "2026-02-05",
    capabilities: ["text", "code", "vision", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 200000,
      parameters: "Unknown",
      pricing: { input: 5.00, output: 25.00 }
    },
    scores: {
      "mmlu": { score: 91.4, verified: true },
      "mmlu-pro": { score: 82.2, verified: true },
      "gpqa-diamond": { score: 87.0, verified: true },
      "livebench": { score: 76.33, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" },
      "math": { score: 89.2, verified: true },
      "human-eval": { score: 94.6, verified: true },
      "swe-bench-verified": { score: 80.8, verified: true },
      "mmmu": { score: 76.5, verified: true },
      "hle": { score: 40.0, verified: true },
      "hle-full": { score: 40.0, verified: true },
      "arc-agi-2": { score: 68.8, verified: true },
      "terminal-bench": { score: 65.4, verified: true },
      "terminal-bench-hard": { score: 48.5, verified: true },
      "aa-intelligence-index": { score: 50.0, verified: true },
      "browsecomp": { score: 84.0, verified: true },
      "osworld-verified": { score: 72.7, verified: true },
      "mrcr-v2": { score: 76.0, verified: true },
      "aa-omniscience": { score: 11.0, verified: true },
      "critpt": { score: 12.6, verified: true },
      "lmarena-elo": { score: 1502, verified: true }
    }
  },
  {
    id: "claude-opus-4-5",
    name: "Claude Opus 4.5",
    provider: "Anthropic",
    releaseDate: "2025-11-24",
    capabilities: ["text", "code", "vision", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 200000,
      parameters: "Unknown",
      pricing: { input: 5.00, output: 25.00 }
    },
    scores: {
      "mmlu": { score: 90.5, verified: true },
      "gpqa-diamond": { score: 68.0, verified: true },
      "factscore": { score: 51.3, verified: true },
      "hle": { score: 30.8, verified: true },
      "terminal-bench-hard": { score: 47.0, verified: true },
      "aa-intelligence-index": { score: 48.0, verified: true },
      "aa-omniscience": { score: 10.0, verified: true },
      "swe-bench-verified": { score: 80.9, verified: true },
      "livebench": { score: 59.10, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
    },
    variants: [
      {
        id: "claude-opus-4-5-high",
        name: "Claude Opus 4.5 High",
        provider: "Anthropic",
        releaseDate: "2025-11-24",
        capabilities: ["text", "code", "vision", "reasoning"],
        isOpenSource: false,
        specs: {
          contextWindow: 400000,
          parameters: "Unknown",
          pricing: { input: 5.00, output: 25.00 }
        },
        scores: {
          "mmlu-pro": { score: 89.3, verified: true },
          "hle": { score: 23.7, verified: true },
          "aime-2026": { score: 70.6, verified: true },
          "aime-2025": { score: 63.3, verified: true },
          "codeforces": { score: 1701, verified: true },
          "gpqa-diamond": { score: 86.9, verified: true },
          "arc-agi-1": { score: 84.0, verified: true },
          "terminal-bench": { score: 60.2, verified: true },
          "swe-lancer": { score: 48.9, verified: true },
          "swe-bench-verified": { score: 80.9, verified: true },
          "multi-swe-bench": { score: 52.8, verified: true },
          "swe-bench-pro": { score: 55.4, verified: true },
          "swe-multilingual": { score: 74.0, verified: true },
          "swe-evo": { score: 27.1, verified: true },
          "artifactsbench": { score: 68.5, verified: true },
          "codesimpleqa": { score: 63.0, verified: true },
          "spreadsheetbench-verified": { score: 78.6, verified: true },
          "browsecomp": { score: 67.8, verified: true },
          "browsecomp-zh": { score: 62.4, verified: true },
          "hle-text": { score: 76.2, verified: true },
          "hle-verified": { score: 66.2, verified: true },
          "widesearch": { score: 76.1, verified: true },
          "finsearchcomp": { score: 14.0, verified: true },
          "deepsearchqa": { score: 53.4, verified: true },
          "seal-0": { score: 56.6, verified: true },
          "tau-bench": { score: 88.9, verified: true },
          "tau-bench-telecom": { score: 98.2, verified: true },
          "bfcl-v4": { score: 42.3, verified: true },
          "vitabench": { score: 76.5, verified: true },
          "deepconsult": { score: 61.0, verified: true },
          "researchrubrics": { score: 45.0, verified: true },
          "scicode": { score: 52.8, verified: true },
          "frontiersci-research": { score: 21.7, verified: true },
          "biobench": { score: 49.3, verified: true },
          "ainstein-bench": { score: 44.0, verified: true },
          "vibe-coding": { score: 71.1, verified: true },
          "nl2repo-bench": { score: 43.2, verified: true },
          "nl2repo-pass1": { score: 3.0, verified: true },
          "cl-bench": { score: 64.8, verified: true },
          "tob-complex": { score: 63.6, verified: true },
          "tob-reference": { score: 67.9, verified: true },
          "healthbench-hard": { score: 11.0, verified: true },
          "gdpval-diamond": { score: 20.7, verified: true },
          "xpert-bench": { score: 50.5, verified: true },
          "tob-k12": { score: 56.2, verified: true },
          "tob-compositional": { score: 63.9, verified: true },
          "tob-classification": { score: 50.1, verified: true },
          "tob-extraction": { score: 21.3, verified: true },
          "world-travel-vlm": { score: 32.67, verified: true },
          "world-travel-text": { score: 69.0, verified: true },
          "livebench": { score: 75.96, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
        }
      }
    ]
  },
  {
    id: "claude-sonnet-4-5",
    name: "Claude Sonnet 4.5",
    provider: "Anthropic",
    releaseDate: "2025-11-24",
    capabilities: ["text", "code", "vision"],
    isOpenSource: false,
    specs: {
      contextWindow: 300000,
      parameters: "Unknown",
      pricing: { input: 3.00, output: 15.00 }
    },
    scores: {
      "mmlu": { score: 89.8, verified: true },
      "gpqa-diamond": { score: 72.7, verified: false, sourceId: "artificial-analysis" },
      "livebench": { score: 53.69, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" },
      "human-eval": { score: 93.5, verified: true },
      "swe-bench-verified": { score: 77.2, verified: true },
      "lmarena-elo": { score: 1451, verified: true }
    },
    variants: [
      {
        id: "claude-sonnet-4-5-high",
        name: "Claude Sonnet 4.5 High",
        provider: "Anthropic",
        releaseDate: "2025-11-24",
        capabilities: ["text", "code", "vision"],
        isOpenSource: false,
        specs: {
          contextWindow: 300000,
          parameters: "Unknown",
          pricing: { input: 3.00, output: 15.00 }
        },
        scores: {
          "mmlu-pro": { score: 88.0, verified: true },
          "livebench": { score: 75.47, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" },
          "hle": { score: 13.7, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "aime-2026": { score: 65.5, verified: true },
          "aime-2025": { score: 87.0, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "codeforces": { score: 1485, verified: true },
          "gpqa-diamond": { score: 83.4, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "arc-agi-1": { score: 70.9, verified: true },
          "arc-agi-2": { score: 13.6, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "terminal-bench": { score: 42.8, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "swe-lancer": { score: 45.7, verified: true },
          "swe-bench-verified": { score: 77.2, verified: true },
          "multi-swe-bench": { score: 47.7, verified: true },
          "swe-bench-pro": { score: 48.4, verified: true },
          "swe-multilingual": { score: 64.1, verified: true },
          "swe-evo": { score: 16.7, verified: true },
          "artifactsbench": { score: 59.1, verified: true },
          "codesimpleqa": { score: 59.6, verified: true },
          "spreadsheetbench-verified": { score: 75.9, verified: true },
          "browsecomp": { score: 43.9, verified: true },
          "browsecomp-zh": { score: 42.4, verified: true },
          "hle-text": { score: 65.1, verified: true },
          "hle-verified": { score: 58.6, verified: true },
          "widesearch": { score: 58.6, verified: true },
          "finsearchcomp": { score: 2.67, verified: true },
          "deepsearchqa": { score: 51.4, verified: true },
          "mmmu-pro": { score: 68.0, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "screenspot-pro": { score: 36.2, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "charxiv-reasoning": { score: 68.5, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "omnidocbench-15": { score: 0.145, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "videommmu": { score: 77.8, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "livecodebench-pro": { score: 1418, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "tau-bench": { score: 87.2, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "toolathlon": { score: 38.9, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "mcp-atlas": { score: 43.8, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "vending-bench-2": { score: 3839, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "facts-benchmark": { score: 48.9, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "simpleqa-verified": { score: 29.3, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "mmmlu": { score: 89.1, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "global-piqa": { score: 90.1, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "mrcr-v2": { score: 47.1, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
          "seal-0": { score: 37.6, verified: true },
          "tau-bench-telecom": { score: 98.0, verified: true },
          "bfcl-v4": { score: 32.1, verified: true },
          "vitabench": { score: 72.9, verified: true },
          "deepconsult": { score: 55.8, verified: true },
          "researchrubrics": { score: 38.6, verified: true },
          "scicode": { score: 47.9, verified: true },
          "frontiersci-research": { score: 16.7, verified: true },
          "biobench": { score: 44.7, verified: true },
          "ainstein-bench": { score: 33.7, verified: true },
          "vibe-coding": { score: 59.1, verified: true },
          "nl2repo-bench": { score: 39.9, verified: true },
          "nl2repo-pass1": { score: 3.0, verified: true },
          "cl-bench": { score: 61.0, verified: true },
          "tob-complex": { score: 57.3, verified: true },
          "tob-reference": { score: 58.9, verified: true },
          "healthbench-hard": { score: 10.9, verified: true },
          "gdpval-diamond": { score: 15.2, verified: true },
          "xpert-bench": { score: 44.7, verified: true },
          "tob-k12": { score: 50.1, verified: true },
          "tob-compositional": { score: 64.5, verified: true },
          "tob-classification": { score: 48.3, verified: true },
          "tob-extraction": { score: 10.0, verified: true },
          "world-travel-vlm": { score: 14.0, verified: true },
          "world-travel-text": { score: 59.1, verified: true }
        }
      }
    ]
  },

  // --- GOOGLE DEEPMIND ---
  {
    id: "google-gemini-1-5-pro",
    name: "Gemini 1.5 Pro",
    provider: "Google DeepMind",
    releaseDate: "2024-02-15",
    capabilities: ["text", "code", "vision", "audio", "video"],
    isOpenSource: false,
    specs: {
      contextWindow: 2000000,
      parameters: "MoE",
      pricing: { input: 3.50, output: 10.50 }
    },
    scores: {
      "mmlu": { score: 85.9, verified: true },
      "gpqa-diamond": { score: 46.2, verified: true },
      "math": { score: 67.7, verified: true },
      "human-eval": { score: 84.1, verified: true },
      "mmmu": { score: 62.2, verified: true },
      "lmarena-elo": { score: 1265, verified: true }
    }
  },
  {
    id: "google-gemini-2-5-pro",
    name: "Gemini 2.5 Pro",
    provider: "Google DeepMind",
    releaseDate: "2025-06-25",
    capabilities: ["text", "code", "vision", "audio", "video"],
    isOpenSource: false,
    specs: {
      contextWindow: 2000000,
      parameters: "Unknown",
      pricing: { input: 1.25, output: 5.00 }
    },
    scores: {
      "mmlu": { score: 89.5, verified: true },
      "hle": { score: 21.6, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "arc-agi-2": { score: 4.9, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "gpqa-diamond": { score: 86.4, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "aime-2025": { score: 88.0, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mmmu-pro": { score: 68.0, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "screenspot-pro": { score: 11.4, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "charxiv-reasoning": { score: 69.6, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "omnidocbench-15": { score: 0.145, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "videommmu": { score: 83.6, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "livecodebench-pro": { score: 1775, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "terminal-bench": { score: 32.6, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "swe-bench-verified": { score: 59.6, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "tau-bench": { score: 77.8, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "toolathlon": { score: 10.5, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mcp-atlas": { score: 8.8, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "vending-bench-2": { score: 574, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "facts-benchmark": { score: 63.4, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "simpleqa-verified": { score: 54.5, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mmmlu": { score: 89.5, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "global-piqa": { score: 91.5, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mrcr-v2": { score: 58.0, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "phybench": { score: 36.87, verified: true },
      "livebench": { score: 58.33, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
    }
  },
  {
    id: "gemini-2.5-flash",
    name: "Gemini 2.5 Flash",
    provider: "Google DeepMind",
    releaseDate: "2025-06-25",
    capabilities: ["text", "code", "vision", "audio"],
    isOpenSource: false,
    specs: {
      contextWindow: 1000000,
      parameters: "Speed Optimized",
      pricing: { input: 0.30, output: 2.50 }
    },
    scores: {
      "hle": { score: 11.0, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "arc-agi-2": { score: 2.5, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "gpqa-diamond": { score: 82.8, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "aime-2025": { score: 72.0, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mmmu-pro": { score: 66.7, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "screenspot-pro": { score: 3.9, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "charxiv-reasoning": { score: 63.7, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "omnidocbench-15": { score: 0.154, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "videommmu": { score: 79.2, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "livecodebench-pro": { score: 1143, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "terminal-bench": { score: 16.9, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "swe-bench-verified": { score: 60.4, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "tau-bench": { score: 79.5, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "toolathlon": { score: 3.7, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mcp-atlas": { score: 3.4, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "vending-bench-2": { score: 549, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "facts-benchmark": { score: 50.4, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "simpleqa-verified": { score: 28.1, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mmmlu": { score: 86.6, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "global-piqa": { score: 90.2, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mrcr-v2": { score: 54.3, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "livebench": { score: 53.09, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
    }
  },
  {
    id: "google-gemini-2-0-flash",
    name: "Gemini 2.0 Flash",
    provider: "Google DeepMind",
    releaseDate: "2024-12-11",
    capabilities: ["text", "code", "vision"],
    isOpenSource: false,
    specs: {
      contextWindow: 1000000,
      parameters: "Multimodal Live",
      pricing: { input: 0.10, output: 0.40 }
    },
    scores: {
      "mmlu": { score: 84.2, verified: true },
      "agentbench": { score: 93.8, verified: true },
      "swe-bench-verified": { score: 35.1, verified: true }
    }
  },
  {
    id: "gemini-3-pro",
    name: "Gemini 3 Pro",
    provider: "Google DeepMind",
    releaseDate: "2025-11-18",
    capabilities: ["text", "code", "vision", "audio", "video", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 1000000,
      parameters: "Unknown",
      pricing: { input: 2.00, output: 12.00 }
    },
    scores: {
      "mmlu": { score: 91.8, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mmlu-pro": { score: 89.8, verified: true, sourceId: "artificial-analysis", asOfDate: "2026-02-16" },
      "mmmlu": { score: 91.8, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "gpqa-diamond": { score: 91.9, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "aime-2025": { score: 95.0, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "matharena-apex": { score: 23.4, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "swe-bench-verified": { score: 76.2, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mmmu-pro": { score: 81.0, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "videommmu": { score: 87.6, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "hle": { score: 37.5, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "hle-full-tools": { score: 45.8, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "arc-agi-2": { score: 31.1, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "terminal-bench": { score: 54.2, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "livecodebench-pro": { score: 2439, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "tau-bench": { score: 90.7, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "vending-bench-2": { score: 5478, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "facts-benchmark": { score: 70.5, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "simpleqa-verified": { score: 72.1, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "global-piqa": { score: 93.4, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mrcr-v2": { score: 77.0, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "screenspot-pro": { score: 72.7, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "livebench": { score: 73.39, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" },
      "charxiv-reasoning": { score: 81.4, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "omnidocbench-15": { score: 0.115, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mcp-atlas": { score: 54.1, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "toolathlon": { score: 36.4, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" }
    },
    variants: [
      {
        id: "gemini-3-pro-high",
        name: "Gemini 3 Pro High",
        provider: "Google DeepMind",
        releaseDate: "2025-11-18",
        capabilities: ["text", "code", "vision", "reasoning"],
        isOpenSource: false,
        specs: {
          contextWindow: 2000000,
          parameters: "Unknown",
          pricing: { input: 2.00, output: 12.00 }
        },
        scores: {
          "mmlu-pro": { score: 90.1, verified: true },
          "hle": { score: 33.3, verified: true },
          "aime-2026": { score: 73.8, verified: true },
          "aime-2025": { score: 64.9, verified: true },
          "codeforces": { score: 2726, verified: true },
          "gpqa-diamond": { score: 91.9, verified: true },
          "arc-agi-1": { score: 85.0, verified: true },
          "putnam-200": { score: 26.5, verified: true },
          "aa-omniscience": { score: 13.0, verified: true },
          "critpt": { score: 9.1, verified: true },
          "mathvista": { score: 89.8, verified: true },
          "mmmu-vision": { score: 87.0, verified: true },
          "logicvista": { score: 80.8, verified: true },
          "blink": { score: 77.1, verified: true },
          "chartqapro": { score: 69.0, verified: true },
          "ocrbench-v2": { score: 94.4, verified: true },
          "frontiersci-olympiad": { score: 71.0, verified: true },
          "videommmu": { score: 88.1, verified: true },
          "videomme": { score: 85.2, verified: true },
          "tvbench": { score: 71.1, verified: true },
          "ovbench": { score: 62.7, verified: true },
          "terminal-bench": { score: 56.9, verified: true },
          "swe-lancer": { score: 44.3, verified: true },
          "swe-bench-verified": { score: 76.2, verified: true },
          "multi-swe-bench": { score: 50.2, verified: true },
          "swe-bench-pro": { score: 49.7, verified: true },
          "swe-multilingual": { score: 72.7, verified: true },
          "swe-evo": { score: 8.9, verified: true },
          "artifactsbench": { score: 58.4, verified: true },
          "codesimpleqa": { score: 54.7, verified: true },
          "spreadsheetbench-verified": { score: 70.8, verified: true },
          "browsecomp": { score: 59.2, verified: true },
          "browsecomp-zh": { score: 66.8, verified: true },
          "hle-text": { score: 67.3, verified: true },
          "hle-verified": { score: 52.7, verified: true },
          "widesearch": { score: 63.9, verified: true },
          "finsearchcomp": { score: 8.0, verified: true },
          "deepsearchqa": { score: 47.7, verified: true },
          "seal-0": { score: 67.5, verified: true },
          "tau-bench": { score: 85.3, verified: true },
          "tau-bench-telecom": { score: 98.0, verified: true },
          "bfcl-v4": { score: 53.9, verified: true },
          "vitabench": { score: 71.0, verified: true },
          "deepconsult": { score: 48.0, verified: true },
          "researchrubrics": { score: 37.7, verified: true },
          "minedojo-verified": { score: 23.3, verified: true },
          "hle-vl": { score: 36.0, verified: true },
          "scicode": { score: 57.7, verified: true },
          "frontiersci-research": { score: 15.0, verified: true },
          "biobench": { score: 51.3, verified: true },
          "ainstein-bench": { score: 42.8, verified: true },
          "vibe-coding": { score: 58.4, verified: true },
          "nl2repo-bench": { score: 34.2, verified: true },
          "nl2repo-pass1": { score: 4.0, verified: true },
          "cl-bench": { score: 69.2, verified: true },
          "tob-complex": { score: 64.8, verified: true },
          "tob-reference": { score: 68.3, verified: true },
          "healthbench-hard": { score: 15.0, verified: true },
          "gdpval-diamond": { score: 19.4, verified: true },
          "xpert-bench": { score: 53.1, verified: true },
          "tob-k12": { score: 59.4, verified: true },
          "tob-compositional": { score: 67.5, verified: true },
          "tob-classification": { score: 49.0, verified: true },
          "tob-extraction": { score: 14.7, verified: true },
          "world-travel-vlm": { score: 10.0, verified: true },
          "world-travel-text": { score: 52.0, verified: true }
        }
      }
    ]
  },
  {
    id: "gemini-3.1-pro",
    name: "Gemini 3.1 Pro",
    provider: "Google DeepMind",
    releaseDate: "2026-02-19",
    capabilities: ["text", "code", "vision", "audio", "video", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 1000000,
      parameters: "Unknown",
      pricing: { input: 2.50, output: 15.00 }
    },
    scores: {
      "gpqa-diamond": { score: 94.3, verified: true, sourceId: "google-gemini31-announce", asOfDate: "2026-02-19" },
      "swe-bench-verified": { score: 80.6, verified: true, sourceId: "google-gemini31-announce", asOfDate: "2026-02-19" },
      "swe-bench-pro": { score: 54.2, verified: true, sourceId: "google-gemini31-announce", asOfDate: "2026-02-19" },
      "arc-agi-2": { score: 77.1, verified: true, sourceId: "google-gemini31-announce", asOfDate: "2026-02-19" },
      "terminal-bench": { score: 68.5, verified: true, sourceId: "google-gemini31-announce", asOfDate: "2026-02-19" },
      "mrcr-v2": { score: 84.9, verified: true, sourceId: "google-gemini31-announce", asOfDate: "2026-02-19" },
      "mmmlu": { score: 92.6, verified: true, sourceId: "google-gemini31-announce", asOfDate: "2026-02-19" },
      "mmmu-pro": { score: 80.5, verified: true, sourceId: "google-gemini31-announce", asOfDate: "2026-02-19" },
      "browsecomp": { score: 85.9, verified: true, sourceId: "google-gemini31-announce", asOfDate: "2026-02-19" },
      "tau-bench-retail": { score: 90.8, verified: true, sourceId: "google-gemini31-announce", asOfDate: "2026-02-19" },
      "tau-bench-telecom": { score: 99.3, verified: true, sourceId: "google-gemini31-announce", asOfDate: "2026-02-19" },
      "scicode": { score: 59, verified: true, sourceId: "google-gemini31-announce", asOfDate: "2026-02-19" },
      "hle": { score: 44.4, verified: true, sourceId: "google-gemini31-announce", asOfDate: "2026-02-19" },
      "livecodebench-pro": { score: 2887, verified: true, sourceId: "google-gemini31-announce", asOfDate: "2026-02-19" }
    }
  },
  {
    id: "gemini-3-flash",
    name: "Gemini 3 Flash",
    provider: "Google DeepMind",
    releaseDate: "2025-12-17",
    capabilities: ["text", "code", "vision", "audio"],
    isOpenSource: false,
    specs: {
      contextWindow: 1000000,
      parameters: "Speed Optimized",
      pricing: { input: 0.50, output: 3.00 }
    },
    scores: {
      "hle": { score: 33.7, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "hle-full-tools": { score: 43.5, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "arc-agi-2": { score: 33.6, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "gpqa-diamond": { score: 90.4, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "aime-2025": { score: 95.2, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mmmu-pro": { score: 81.2, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "screenspot-pro": { score: 69.1, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "charxiv-reasoning": { score: 80.3, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "omnidocbench-15": { score: 0.121, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "videommmu": { score: 86.9, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "livecodebench-pro": { score: 2316, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "terminal-bench": { score: 47.6, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "swe-bench-verified": { score: 78.0, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "tau-bench": { score: 90.2, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "toolathlon": { score: 49.4, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mcp-atlas": { score: 57.4, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "vending-bench-2": { score: 3635, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "facts-benchmark": { score: 61.9, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "simpleqa-verified": { score: 68.7, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mmmlu": { score: 91.8, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "global-piqa": { score: 92.8, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mrcr-v2": { score: 67.2, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "livebench": { score: 72.40, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
    },
    variants: [
      {
        id: "gemini-3-flash-high",
        name: "Gemini 3 Flash High",
        provider: "Google DeepMind",
        releaseDate: "2025-12-17",
        capabilities: ["text", "code", "vision"],
        isOpenSource: false,
        specs: {
          contextWindow: 1000000,
          parameters: "Unknown",
          pricing: { input: 0.50, output: 3.00 }
        },
        scores: {
          "mmlu-pro": { score: 87.8, verified: true },
          "hle": { score: 31.7, verified: true },
          "aime-2026": { score: 93.3, verified: true },
          "aime-2025": { score: 93.0, verified: true },
          "codeforces": { score: 2727, verified: true },
          "gpqa-diamond": { score: 90.7, verified: true },
          "arc-agi-1": { score: 86.9, verified: true }
        }
      }
    ]
  },
  {
    id: "google-gemini-3-deep-think",
    name: "Gemini 3 Deep Think",
    provider: "Google DeepMind",
    releaseDate: "2026-02-12",
    capabilities: ["text", "code", "vision", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 1000000,
      parameters: "Unknown",
      pricing: { input: 2.00, output: 12.00 }
    },
    scores: {
      "mmlu": { score: 91.8, verified: true },
      "gpqa-diamond": { score: 93.8, verified: true },
      "math": { score: 96.0, verified: true },
      "swe-bench-verified": { score: 76.2, verified: true },
      "mmmu": { score: 81.0, verified: true },
      "hle": { score: 41.0, verified: true },
      "arc-agi-2": { score: 45.1, verified: true },
      "lmarena-elo": { score: 1506, verified: true }
    }
  },
  {
    id: "nano-banana-pro",
    name: "Nano Banana Pro",
    provider: "Google DeepMind",
    releaseDate: "2025-12-01",
    capabilities: ["text", "code"],
    isOpenSource: false,
    specs: {
      contextWindow: 32000,
      parameters: "On-device reasoning",
      pricing: { input: 0, output: 0 }
    },
    scores: {
      "mmlu": { score: 72.0, verified: true },
      "gsm8k": { score: 85.0, verified: true }
    }
  },

  // --- META ---
  {
    id: "meta-llama-3-1-405b",
    name: "Llama 3.1 405B",
    provider: "Meta",
    releaseDate: "2024-07-23",
    capabilities: ["text", "code"],
    isOpenSource: true,
    specs: {
      contextWindow: 128000,
      parameters: "405B",
      pricing: { input: 3.00, output: 3.00 }
    },
    scores: {
      "mmlu": { score: 88.6, verified: true },
      "gpqa-diamond": { score: 50.7, verified: true },
      "math": { score: 73.0, verified: true },
      "human-eval": { score: 89.0, verified: true },
      "mmmu": { score: 54.0, verified: true },
      "gsm8k": { score: 96.8, verified: true },
      "lmarena-elo": { score: 1261, verified: true }
    }
  },
  {
    id: "meta-llama-3-3-70b",
    name: "Llama 3.3 70B",
    provider: "Meta",
    releaseDate: "2024-12-06",
    capabilities: ["text", "code"],
    isOpenSource: true,
    specs: {
      contextWindow: 128000,
      parameters: "70B",
      pricing: { input: 0.20, output: 0.20 }
    },
    scores: {
      "mmlu": { score: 88.6, verified: true },
      "math": { score: 73.0, verified: true },
      "human-eval": { score: 89.0, verified: true }
    }
  },
  {
    id: "meta-llama-4-behemoth",
    name: "Llama 4 Behemoth",
    provider: "Meta",
    releaseDate: "2026-01-14",
    capabilities: ["text", "code", "vision"],
    isOpenSource: true,
    specs: {
      contextWindow: 1000000,
      parameters: "Hybrid Dense/MoE",
      pricing: { input: 2.50, output: 7.50 }
    },
    scores: {
      "mmlu": { score: 85.8, verified: true },
      "mmlu-pro": { score: 82.2, verified: true },
      "gpqa-diamond": { score: 69.8, verified: true },
      "math": { score: 84.5, verified: true },
      "human-eval": { score: 88.9, verified: true },
      "mmmu": { score: 76.1, verified: true },
      "swe-bench-verified": { score: 48.2, verified: true },
      "lmarena-elo": { score: 1310, verified: true }
    }
  },
  {
    id: "meta-llama-4-maverick",
    name: "Llama 4 Maverick",
    provider: "Meta",
    releaseDate: "2025-09-30",
    capabilities: ["text", "code", "vision"],
    isOpenSource: true,
    specs: {
      contextWindow: 256000,
      parameters: "MoE optimized",
      pricing: { input: 0.15, output: 0.60 }
    },
    scores: {
      "mmlu": { score: 87.0, verified: true },
      "mmlu-pro": { score: 80.5, verified: true },
      "gpqa-diamond": { score: 67.1, verified: false, sourceId: "artificial-analysis" },
      "math-500": { score: 88.9, verified: false, sourceId: "artificial-analysis" },
      "human-eval": { score: 85.0, verified: true },
      "livecodebench-v6": { score: 43.4, verified: true },
      "mathvista": { score: 73.7, verified: true },
      "docvqa": { score: 94.4, verified: true },
      "lmarena-elo": { score: 1401, verified: true }
    }
  },
  {
    id: "meta-llama-4-scout",
    name: "Llama 4 Scout",
    provider: "Meta",
    releaseDate: "2026-01-14",
    capabilities: ["text", "code"],
    isOpenSource: true,
    specs: {
      contextWindow: 128000,
      parameters: "High Efficiency",
      pricing: { input: 0.08, output: 0.30 }
    },
    scores: {
      "mmlu": { score: 79.4, verified: true },
      "gpqa-diamond": { score: 58.7, verified: true },
      "math": { score: 62.0, verified: true },
      "human-eval": { score: 81.2, verified: false, sourceId: "meta-ai" },
      "mmmu": { score: 60.5, verified: false, sourceId: "meta-ai" },
      "lmarena-elo": { score: 1285, verified: false, sourceId: "lmarena" }
    }
  },

  // --- DEEPSEEK ---
  {
    id: "deepseek-v3",
    name: "DeepSeek V3",
    provider: "DeepSeek",
    releaseDate: "2024-12-26",
    capabilities: ["text", "code"],
    isOpenSource: true,
    specs: {
      contextWindow: 128000,
      parameters: "671B MoE",
      pricing: { input: 0.15, output: 0.75 }
    },
    scores: {
      "mmlu": { score: 88.5, verified: true },
      "math": { score: 90.2, verified: true },
      "human-eval": { score: 91.6, verified: true },
      "bigcodebench": { score: 34.5, verified: true },
      "superchem": { score: 40.0, verified: false },
      "lmarena-elo": { score: 1421, verified: true }
    }
  },
  {
    id: "deepseek-v3-1-terminus",
    name: "DeepSeek-V3.1-Terminus",
    provider: "DeepSeek",
    releaseDate: "2025-09-22",
    capabilities: ["text", "code"],
    isOpenSource: true,
    specs: {
      contextWindow: 128000,
      parameters: "Terminal Reasoning",
      pricing: { input: 0.02, output: 0.08 }
    },
    scores: {
      "math": { score: 93.4, verified: true },
      "human-eval": { score: 90.0, verified: true }
    }
  },
  {
    id: "deepseek-v3-2-speciale",
    name: "DeepSeek-V3.2-Speciale",
    provider: "DeepSeek",
    releaseDate: "2025-12-01",
    capabilities: ["text", "code", "vision"],
    isOpenSource: true,
    specs: {
      contextWindow: 256000,
      parameters: "Dense Enhanced",
      pricing: { input: 0.27, output: 0.41 }
    },
    scores: {
      "mmlu": { score: 88.5, verified: true },
      "gpqa-diamond": { score: 82.4, verified: true },
      "matharena-apex": { score: 76.5, verified: true },
      "livebench": { score: 62.2, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" },
      "aime-2025": { score: 93.1, verified: true },
      "codeforces": { score: 2701, verified: true },
      "swe-bench-verified": { score: 73.1, verified: true },
      "mmmu": { score: 74.0, verified: true },
      "hle": { score: 40.8, verified: true },
      "terminal-bench": { score: 39.3, verified: true },
      "lmarena-elo": { score: 1423, verified: true }
    }
  },
  {
    id: "deepseek-r1",
    name: "DeepSeek R1",
    provider: "DeepSeek",
    releaseDate: "2025-01-20",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: true,
    specs: {
      contextWindow: 128000,
      parameters: "Reasoning Flagship",
      pricing: { input: 0.14, output: 0.28 }
    },
    scores: {
      "mmlu": { score: 88.1, verified: true },
      "gpqa-diamond": { score: 71.5, verified: true },
      "math": { score: 97.3, verified: true },
      "swe-bench-verified": { score: 49.2, verified: true },
      "aime": { score: 79.8, verified: true },
      "codeforces": { score: 2029, verified: true },
      "lmarena-elo": { score: 1325, verified: true }
    }
  },
  {
    id: "deepseek-r1-zero",
    name: "DeepSeek-R1-Zero",
    provider: "DeepSeek",
    releaseDate: "2025-01-20",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: true,
    specs: {
      contextWindow: 128000,
      parameters: "Reinforcement Learning Only",
      pricing: { input: 0.14, output: 0.28 }
    },
    scores: {
      "mmlu": { score: 79.8, verified: true, sourceId: "deepseek-news", asOfDate: "2025-01-20" },
      "gpqa-diamond": { score: 72.0, verified: true, sourceId: "artificial-analysis", asOfDate: "2026-02-16" },
      "math": { score: 88.5, verified: true, sourceId: "deepseek-news", asOfDate: "2025-01-20" },
      "aime": { score: 71.0, verified: true, sourceId: "deepseek-news", asOfDate: "2025-01-20" },
      "human-eval": { score: 85.0, verified: true, sourceId: "artificial-analysis", asOfDate: "2026-02-16" },
      "swe-bench-verified": { score: 45.2, verified: true, sourceId: "artificial-analysis", asOfDate: "2026-02-16" },
      "lmarena-elo": { score: 1380, verified: true, sourceId: "lmarena", asOfDate: "2026-02-18" }
    }
  },
  {
    id: "deepseek-r1-distill-llama-70b",
    name: "DeepSeek-R1-Distill-Llama-70B",
    provider: "DeepSeek",
    releaseDate: "2025-01-20",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: true,
    specs: {
      contextWindow: 128000,
      parameters: "70B (Distilled)",
      pricing: { input: 0.14, output: 0.28 }
    },
    scores: {
      "math": { score: 94.5, verified: true },
      "aime": { score: 70.0, verified: true },
      "codeforces": { score: 1633, verified: true },
      "mmlu": { score: 82.0, verified: true }
    }
  },
  {
    id: "deepseek-r1-distill-qwen-32b",
    name: "DeepSeek-R1-Distill-Qwen-32B",
    provider: "DeepSeek",
    releaseDate: "2025-01-20",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: true,
    specs: {
      contextWindow: 128000,
      parameters: "32B (Distilled)",
      pricing: { input: 0.07, output: 0.14 }
    },
    scores: {
      "mmlu": { score: 83.0, verified: true },
      "math": { score: 88.0, verified: true }
    }
  },

  // --- COHERE ---
  {
    id: "command-r-plus-08-2024",
    name: "Command R+ (08-2024)",
    provider: "Cohere",
    releaseDate: "2024-08-01",
    capabilities: ["text", "code"],
    isOpenSource: false,
    specs: {
      contextWindow: 128000,
      parameters: "128B",
      pricing: { input: 3.00, output: 15.00 }
    },
    scores: {
      "mmlu": { score: 83.0, verified: true },
      "swe-bench-verified": { score: 45.0, verified: true },
      "lmarena-elo": { score: 1310, verified: true }
    }
  },
  {
    id: "command-a",
    name: "Command A",
    provider: "Cohere",
    releaseDate: "2025-05-01",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 256000,
      parameters: "Proprietary",
      pricing: { input: 1.00, output: 4.00 }
    },
    scores: {
      "mmlu": { score: 83.0, verified: false, sourceId: "artificial-analysis" },
      "mmlu-pro": { score: 71.2, verified: false, sourceId: "artificial-analysis" },
      "gpqa-diamond": { score: 52.7, verified: false, sourceId: "artificial-analysis" },
      "math-500": { score: 81.9, verified: false, sourceId: "artificial-analysis" },
      "human-eval": { score: 84.5, verified: false, sourceId: "artificial-analysis" },
      "mmmu": { score: 62.4, verified: false, sourceId: "artificial-analysis" },
      "lmarena-elo": { score: 1310, verified: true }
    }
  },

  // --- AI21 ---
  {
    id: "jamba-2-large",
    name: "Jamba 2 Large",
    provider: "AI21",
    releaseDate: "2025-03-01",
    capabilities: ["text", "code"],
    isOpenSource: true,
    specs: {
      contextWindow: 256000,
      parameters: "399B (Hybrid SSM/Transformer)",
      pricing: { input: 2.00, output: 8.00 }
    },
    scores: {
      "mmlu": { score: 86.5, verified: true },
      "gsm8k": { score: 90.0, verified: true }
    }
  },

  // --- STARTUPS / EMERGING ---
  {
    id: "minimax-2-1",
    name: "MiniMax 2.1",
    provider: "Minimax",
    releaseDate: "2024-10-15",
    capabilities: ["text", "code"],
    isOpenSource: false,
    specs: {
      contextWindow: 128000,
      parameters: "Proprietary",
      pricing: { input: 0.15, output: 0.60 }
    },
    scores: {
      "mmlu": { score: 82.0, verified: true }
    }
  },
  {
    id: "minimax-m2",
    name: "MiniMax M2",
    provider: "Minimax",
    releaseDate: "2025-04-10",
    capabilities: ["text", "code"],
    isOpenSource: false,
    specs: {
      contextWindow: 128000,
      parameters: "MoE",
      pricing: { input: 0.20, output: 0.80 }
    },
    scores: {
      "mmlu": { score: 85.4, verified: true }
    }
  },
  {
    id: "minimax-m2-5",
    name: "MiniMax 2.5",
    provider: "Minimax",
    releaseDate: "2026-02-12",
    capabilities: ["text", "code"],
    isOpenSource: false,
    specs: {
      contextWindow: 200000,
      parameters: "MoE Agent-RL",
      pricing: { input: 0.30, output: 2.40 }
    },
    scores: {
      "swe-bench-verified": { score: 80.2, verified: true },
      "mmlu": { score: 89.0, verified: true },
      "livebench": { score: 60.14, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
    }
  },
  {
    id: "kimi-k2",
    name: "Kimi K2",
    provider: "Moonshot AI",
    releaseDate: "2025-09-05",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 1000000,
      parameters: "Proprietary",
      pricing: { input: 0.50, output: 1.50 }
    },
    scores: {
      "mmlu-pro": { score: 82.0, verified: true },
      "livebench": { score: 48.10, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
    },
    variants: [
      {
        id: "kimi-k2-thinking",
        name: "Kimi K2 Thinking",
        provider: "Moonshot AI",
        releaseDate: "2025-11-10",
        capabilities: ["text", "code", "reasoning"],
        isOpenSource: false,
        specs: {
          contextWindow: 1000000,
          parameters: "Proprietary",
          pricing: { input: 1.50, output: 4.50 }
        },
        scores: {
          "mmlu-pro": { score: 86.5, verified: true },
          "math": { score: 92.0, verified: true },
          "livebench": { score: 61.59, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
        }
      }
    ]
  },
  {
    id: "kimi-k2-5",
    name: "Kimi K2.5",
    provider: "Moonshot AI",
    releaseDate: "2026-01-20",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 10000000,
      parameters: "Proprietary",
      pricing: { input: 1.00, output: 3.00 }
    },
    scores: {
      // Reasoning & General
      "hle-full-tools": { score: 30.1, verified: true },
      "aime-2025": { score: 50.2, verified: true },
      "hmmt-feb-2025": { score: 36.9, verified: true },
      "imo-answerbench": { score: 92.8, verified: true },
      "gpqa-diamond": { score: 78.5, verified: true },
      "mmlu-pro": { score: 89.3, verified: true },
      "simpleqa": { score: 44.1, verified: true },
      "verified-advancedif": { score: 63.1, verified: true },
      "longbench-v2": { score: 40.8, verified: true },
      // Coding
      "swe-bench-verified": { score: 76.8, verified: true },
      "swe-bench-pro": { score: 50.7, verified: true },
      "swe-multilingual": { score: 73.0, verified: true },
      "terminal-bench": { score: 50.8, verified: true },
      "paperbench-codedev": { score: 63.5, verified: true },
      "cybergym": { score: 41.3, verified: true },
      "scicode": { score: 48.7, verified: true },
      "ojbench-cpp": { score: 57.4, verified: true },
      "livecodebench-v6": { score: 85.0, verified: true },
      // Agentic
      "browsecomp": { score: 60.6, verified: true },
      "browsecomp-ctx-manage": { score: 74.9, verified: true },
      "browsecomp-agent-swarm": { score: 72.7, verified: true },
      "widesearch": { score: 77.1, verified: true },
      "widesearch-agent-swarm": { score: 67.8, verified: true },
      "deepsearchqa": { score: 57.4, verified: true },
      "finsearchcomp-t2-t3": { score: 41.0, verified: true },
      "seal-0": { score: 37.0, verified: true },
      "gdpval-aa": { score: 65.8, verified: true },
      // Image
      "mmmu-pro": { score: 78.5, verified: true },
      "mmmu-val": { score: 84.3, verified: true },
      "charxiv-rq": { score: 77.5, verified: true },
      "mathvision": { score: 84.2, verified: true },
      "mathvista-mini": { score: 90.1, verified: true },
      "simplevqa": { score: 71.2, verified: true },
      "worldvqa": { score: 46.3, verified: true },
      "zerobench": { score: 11.0, verified: true },
      "zerobench-tools": { score: 36.5, verified: true },
      "babyvision": { score: 78.9, verified: true },
      "blink": { score: 87.0, verified: true },
      "mmvp": { score: 88.8, verified: true },
      "omnidocbench": { score: 92.3, verified: true },
      "ocrbench": { score: 92.6, verified: true },
      "infovqa-test": { score: 74.0, verified: true },
      // Video
      "videommmu": { score: 86.6, verified: true },
      "mmvu": { score: 80.4, verified: true },
      "motionbench": { score: 70.4, verified: true },
      "videomme": { score: 87.4, verified: true },
      "longvideobench": { score: 79.8, verified: true },
      "lvbench": { score: 75.9, verified: true },
      // Computer Use
      "osworld-verified": { score: 63.3, verified: true },
      "webarena": { score: 58.9, verified: true },
      "livebench": { score: 69.07, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
    }
  },
  {
    id: "glm-4-6",
    name: "GLM-4.6",
    provider: "Zhipu AI",
    releaseDate: "2025-09-30",
    capabilities: ["text", "code", "vision"],
    isOpenSource: true,
    specs: {
      contextWindow: 200000,
      parameters: "355B MoE",
      pricing: { input: 0.10, output: 0.30 }
    },
    scores: {
      "mmlu": { score: 86.5, verified: true, sourceId: "z-ai-blog", asOfDate: "2025-09-30" },
      "gpqa-diamond": { score: 78.2, verified: true, sourceId: "llm-stats", asOfDate: "2026-02-18" },
      "human-eval": { score: 82.0, verified: true, sourceId: "artificial-analysis", asOfDate: "2026-02-16" },
      "math": { score: 71.5, verified: true, sourceId: "artificial-analysis", asOfDate: "2026-02-16" },
      "swe-bench-verified": { score: 65.3, verified: true, sourceId: "artificial-analysis", asOfDate: "2026-02-16" },
      "lmarena-elo": { score: 1385, verified: true, sourceId: "lmarena", asOfDate: "2026-02-18" },
      "livebench": { score: 55.19, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
    }
  },
  {
    id: "glm-4-7",
    name: "GLM-4.7",
    provider: "Zhipu AI",
    releaseDate: "2025-12-22",
    capabilities: ["text", "code", "vision"],
    isOpenSource: true,
    specs: {
      contextWindow: 200000,
      parameters: "400B MoE",
      pricing: { input: 0.15, output: 0.45 }
    },
    scores: {
      "mmlu": { score: 88.2, verified: true, sourceId: "z-ai-blog", asOfDate: "2025-12-22" },
      "gpqa-diamond": { score: 85.7, verified: true, sourceId: "llm-stats", asOfDate: "2026-02-18" },
      "math": { score: 75.0, verified: true, sourceId: "z-ai-blog", asOfDate: "2025-12-22" },
      "human-eval": { score: 85.0, verified: true, sourceId: "artificial-analysis", asOfDate: "2026-02-16" },
      "swe-bench-verified": { score: 70.2, verified: true, sourceId: "artificial-analysis", asOfDate: "2026-02-16" },
      "lmarena-elo": { score: 1410, verified: true, sourceId: "lmarena", asOfDate: "2026-02-18" },
      "livebench": { score: 58.09, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
    }
  },
  {
    id: "glm-5",
    name: "GLM-5",
    provider: "Zhipu AI",
    releaseDate: "2026-02-11",
    capabilities: ["text", "code", "vision"],
    isOpenSource: true,
    specs: {
      contextWindow: 200000,
      parameters: "744B total, 40B active",
      pricing: { input: 1.00, output: 3.20, cacheInput: 0.20 }
    },
    scores: {
      "mmlu": { score: 90.1, verified: true, sourceId: "glm5-paper", asOfDate: "2026-02-17" },
      "gpqa-diamond": { score: 86.0, verified: true, sourceId: "glm5-paper", asOfDate: "2026-02-17" },
      "human-eval": { score: 88.0, verified: true, sourceId: "glm5-paper", asOfDate: "2026-02-17" },
      "math": { score: 92.7, verified: true, sourceId: "glm5-paper", asOfDate: "2026-02-17" },
      "aime-2025": { score: 92.7, verified: true, sourceId: "glm5-paper", asOfDate: "2026-02-17" },
      "hle": { score: 50.4, verified: true, sourceId: "glm5-paper", asOfDate: "2026-02-17" },
      "swe-bench-verified": { score: 77.8, verified: true, sourceId: "glm5-paper", asOfDate: "2026-02-17" },
      "swe-bench-pro": { score: 52.3, verified: true, sourceId: "glm5-paper", asOfDate: "2026-02-17" },
      "terminal-bench": { score: 56.2, verified: true, sourceId: "glm5-paper", asOfDate: "2026-02-17" },
      "terminal-bench-hard": { score: 43.0, verified: true, sourceId: "glm5-paper", asOfDate: "2026-02-17" },
      "browsecomp": { score: 60.6, verified: true, sourceId: "glm5-paper", asOfDate: "2026-02-17" },
      "widesearch": { score: 77.1, verified: true, sourceId: "glm5-paper", asOfDate: "2026-02-17" },
      "vending-bench-2": { score: 4432, verified: true, sourceId: "glm5-paper", asOfDate: "2026-02-17" },
      "tau-bench": { score: 85.0, verified: true, sourceId: "artificial-analysis", asOfDate: "2026-02-16" },
      "tau-bench-telecom": { score: 98.2, verified: true, sourceId: "artificial-analysis", asOfDate: "2026-02-16" },
      "livebench": { score: 68.85, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" },
      "aa-intelligence-index": { score: 49.6, verified: true, sourceId: "artificial-analysis", asOfDate: "2026-02-16" },
      "lmarena-elo": { score: 1452, verified: true, sourceId: "lmarena", asOfDate: "2026-02-18" }
    }
  },
  // --- ALIBABA ---
  {
    id: "qwen-2-5-max",
    name: "Qwen 2.5 Max",
    provider: "Alibaba",
    releaseDate: "2025-01-29",
    capabilities: ["text", "code"],
    isOpenSource: false,
    specs: {
      contextWindow: 131072,
      parameters: "Unknown",
      pricing: { input: 1.60, output: 6.40 }
    },
    scores: {
      "mmlu": { score: 87.9, verified: true },
      "mmlu-pro": { score: 69.0, verified: true },
      "math": { score: 68.5, verified: true },
      "human-eval": { score: 73.2, verified: true }
    }
  },
  {
    id: "qwen3-vl-235b-a22b",
    name: "Qwen3-VL-235B-A22B",
    provider: "Alibaba",
    releaseDate: "2025-09-21",
    capabilities: ["text", "code", "vision", "reasoning"],
    isOpenSource: true,
    specs: {
      contextWindow: 262144,
      parameters: "235B (22B active)",
      pricing: { input: 0.20, output: 0.88 }
    },
    scores: {
      "mmlu-pro": { score: 83.6, verified: false, sourceId: "artificial-analysis" },
      "math": { score: 87.1, verified: true },
      "aime-2025": { score: 87.1, verified: true },
      "hmmt-feb-2025": { score: 45.8, verified: true },
      "imo-answerbench": { score: 97.3, verified: true },
      "gpqa-diamond": { score: 91.9, verified: true },
      "human-eval": { score: 88.4, verified: false, sourceId: "artificial-analysis" },
      "osworld-verified": { score: 63.4, verified: true },
      "webarena": { score: 26.4, verified: true },
      "lmarena-elo": { score: 1320, verified: false, sourceId: "lmarena" },
      "livebench": { score: 48.84, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
    },
    variants: [
      {
        id: "qwen3-vl-235b-a22b-thinking",
        name: "Qwen3-VL-235B-A22B Thinking",
        provider: "Alibaba",
        releaseDate: "2025-09-21",
        capabilities: ["text", "code", "vision", "reasoning"],
        isOpenSource: true,
        specs: {
          contextWindow: 262144,
          parameters: "235B (22B active)",
          pricing: { input: 0, output: 0 }
        },
        scores: {
          "livebench": { score: 52.97, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
        }
      }
    ]
  },
  {
    id: "qwen-3-5-397b-a17b",
    name: "Qwen 3.5 397B-A17B",
    provider: "Alibaba",
    releaseDate: "2026-02-16",
    capabilities: ["text", "code", "vision", "reasoning"],
    isOpenSource: true,
    specs: {
      contextWindow: 262144,
      parameters: "397B (17B active)",
      pricing: { input: 0.60, output: 3.60 }
    },
    scores: {
      "mmlu-pro": { score: 87.8, verified: true, sourceId: "qwen-ai-blog" },
      "supergpqa": { score: 70.4, verified: true, sourceId: "qwen-ai-blog" },
      "math": { score: 74.1, verified: true, sourceId: "qwen-ai-blog" },
      "gsm8k": { score: 93.7, verified: true, sourceId: "qwen-ai-blog" },
      "ifeval": { score: 92.6, verified: true, sourceId: "qwen-ai-blog" },
      "ifbench": { score: 76.5, verified: true, sourceId: "qwen-ai-blog" },
      "multichallenge": { score: 67.6, verified: true, sourceId: "qwen-ai-blog" },
      "swe-bench-verified": { score: 76.4, verified: true, sourceId: "qwen-ai-blog" },
      "swe-multilingual": { score: 69.3, verified: true, sourceId: "qwen-ai-blog" },
      "terminal-bench": { score: 52.5, verified: true, sourceId: "qwen-ai-blog" },
      "mmmu": { score: 85.0, verified: true, sourceId: "qwen-ai-blog" },
      "mmmu-pro": { score: 79.0, verified: true, sourceId: "qwen-ai-blog" },
      "mathvision": { score: 88.6, verified: true, sourceId: "qwen-ai-blog" },
      "mathvista-mini": { score: 90.3, verified: true, sourceId: "qwen-ai-blog" },
      "videomme": { score: 87.5, verified: true, sourceId: "qwen-ai-blog" },
      "videommmu": { score: 84.7, verified: true, sourceId: "qwen-ai-blog" },
      "lvbench": { score: 75.5, verified: true, sourceId: "qwen-ai-blog" },
      "mmvu": { score: 75.4, verified: true, sourceId: "qwen-ai-blog" },
      "osworld-verified": { score: 62.2, verified: true, sourceId: "qwen-ai-blog" },
      "livecodebench-v6": { score: 83.6, verified: true, sourceId: "qwen-ai-blog" },
      "lcr": { score: 68.7, verified: true, sourceId: "qwen-ai-blog" },
      "vitabench": { score: 49.7, verified: true, sourceId: "qwen-ai-blog" },
      "realworldqa": { score: 83.9, verified: true, sourceId: "qwen-ai-blog" },
      "mmstar": { score: 83.8, verified: true, sourceId: "qwen-ai-blog" },
      "hallusionbench": { score: 71.4, verified: true, sourceId: "qwen-ai-blog" },
      "ocrbench": { score: 93.1, verified: true, sourceId: "qwen-ai-blog" },
      "omnidocbench": { score: 90.8, verified: true, sourceId: "qwen-ai-blog" },
      "charxiv-rq": { score: 80.8, verified: true, sourceId: "qwen-ai-blog" },
      "erqa": { score: 67.5, verified: true, sourceId: "qwen-ai-blog" },
      "countbench": { score: 97.2, verified: true, sourceId: "qwen-ai-blog" }
    }
  },
  {
    id: "phi-4",
    name: "Phi-4",
    provider: "Microsoft",
    releaseDate: "2025-02-01",
    capabilities: ["text", "code"],
    isOpenSource: true,
    specs: {
      contextWindow: 128000,
      parameters: "14B",
      pricing: { input: 0, output: 0 }
    },
    scores: {
      "mmlu": { score: 82.3, verified: true },
      "math": { score: 78.0, verified: true },
      "gpqa-diamond": { score: 56.1, verified: true },
      "lmarena-elo": { score: 1350, verified: true }
    }
  },
  {
    id: "starcoder2-15b",
    name: "StarCoder2-15B",
    provider: "BigCode",
    releaseDate: "2024-02-28",
    capabilities: ["code"],
    isOpenSource: true,
    specs: {
      contextWindow: 16000,
      parameters: "15B",
      pricing: { input: 0, output: 0 }
    },
    scores: {
      "mmlu": { score: 45.2, verified: true, sourceId: "artificial-analysis", asOfDate: "2026-02-16" },
      "gpqa-diamond": { score: 28.5, verified: true, sourceId: "artificial-analysis", asOfDate: "2026-02-16" },
      "human-eval": { score: 72.6, verified: true, sourceId: "bigcode-project", asOfDate: "2024-02-28" },
      "bigcodebench": { score: 28.7, verified: true, sourceId: "artificial-analysis", asOfDate: "2026-02-16" },
      "livecodebench-v6": { score: 24.5, verified: true, sourceId: "artificial-analysis", asOfDate: "2026-02-16" },
      "lmarena-elo": { score: 1105, verified: true, sourceId: "lmarena", asOfDate: "2026-02-18" }
    }
  },
  {
    id: "dbrx-instruct",
    name: "DBRX Instruct",
    provider: "Databricks",
    releaseDate: "2024-03-27",
    capabilities: ["text", "code"],
    isOpenSource: true,
    specs: {
      contextWindow: 32000,
      parameters: "132B (MoE)",
      pricing: { input: 0.60, output: 2.40 }
    },
    scores: {
      "mmlu": { score: 74.5, verified: true },
      "human-eval": { score: 70.1, verified: true },
      "gsm8k": { score: 72.8, verified: true }
    }
  },
  {
    id: "internlm3-8b",
    name: "InternLM3-8B",
    provider: "Shanghai AI Lab",
    releaseDate: "2025-08-01",
    capabilities: ["text", "code"],
    isOpenSource: true,
    specs: {
      contextWindow: 200000,
      parameters: "8B",
      pricing: { input: 0, output: 0 }
    },
    scores: {
      "mmlu": { score: 84.0, verified: true },
      "gpqa-diamond": { score: 54.2, verified: false, sourceId: "artificial-analysis" },
      "math": { score: 20.0, verified: true },
      "aime": { score: 20.0, verified: true },
      "human-eval": { score: 82.3, verified: true },
      "mmmu": { score: 55.6, verified: false, sourceId: "artificial-analysis" },
      "lmarena-elo": { score: 1210, verified: false, sourceId: "lmarena" }
    }
  },
  {
    id: "yi-1-5-34b",
    name: "Yi-1.5-34B",
    provider: "01.AI",
    releaseDate: "2024-05-13",
    capabilities: ["text", "code"],
    isOpenSource: true,
    specs: {
      contextWindow: 32000,
      parameters: "34B",
      pricing: { input: 0, output: 0 }
    },
    scores: {
      "mmlu": { score: 81.0, verified: true },
      "gpqa-diamond": { score: 42.5, verified: false, sourceId: "artificial-analysis" },
      "math": { score: 52.1, verified: false, sourceId: "artificial-analysis" },
      "human-eval": { score: 76.4, verified: false, sourceId: "artificial-analysis" },
      "mmmu": { score: 48.2, verified: false, sourceId: "artificial-analysis" },
      "lmarena-elo": { score: 1240, verified: false, sourceId: "lmarena" }
    }
  },
  {
    id: "baichuan-m3",
    name: "Baichuan-M3",
    provider: "Baichuan",
    releaseDate: "2026-01-15",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 128000,
      parameters: "235B",
      pricing: { input: 0.40, output: 1.20 }
    },
    scores: {
      "mmlu": { score: 88.5, verified: true },
      "gpqa-diamond": { score: 68.2, verified: false, sourceId: "artificial-analysis" },
      "math": { score: 74.5, verified: false, sourceId: "artificial-analysis" },
      "human-eval": { score: 86.0, verified: false, sourceId: "artificial-analysis" },
      "mmmu": { score: 64.2, verified: false, sourceId: "artificial-analysis" },
      "lmarena-elo": { score: 1290, verified: false, sourceId: "lmarena" }
    }
  },
  {
    id: "snowflake-arctic",
    name: "Snowflake Arctic",
    provider: "Snowflake",
    releaseDate: "2024-04-24",
    capabilities: ["text", "code"],
    isOpenSource: true,
    specs: {
      contextWindow: 4096,
      parameters: "480B MoE (17B active)",
      pricing: { input: 0, output: 0 }
    },
    scores: {
      "mmlu": { score: 75.0, verified: true },
      "human-eval": { score: 38.0, verified: true },
      "lmarena-elo": { score: 1109, verified: true }
    }
  },
  // --- MISTRAL ---
  {
    id: "mistral-large-2",
    name: "Mistral Large 2",
    provider: "Mistral",
    releaseDate: "2024-07-24",
    capabilities: ["text", "code"],
    isOpenSource: true,
    specs: {
      contextWindow: 128000,
      parameters: "123B",
      pricing: { input: 2.00, output: 6.00 }
    },
    scores: {
      "mmlu": { score: 84.0, verified: true },
      "math": { score: 76.6, verified: true },
      "human-eval": { score: 92.0, verified: true }
    }
  },
  {
    id: "ministral-3b",
    name: "Ministral 3B",
    provider: "Mistral",
    releaseDate: "2024-10-16",
    capabilities: ["text", "code"],
    isOpenSource: true,
    specs: {
      contextWindow: 128000,
      parameters: "3B",
      pricing: { input: 0.04, output: 0.04 }
    },
    scores: {
      "mmlu": { score: 68.8, verified: true },
      "gpqa-diamond": { score: 29.7, verified: false, sourceId: "mistral-news" },
      "math": { score: 33.3, verified: true },
      "human-eval": { score: 63.4, verified: true },
      "lmarena-elo": { score: 1164, verified: true }
    }
  },

  // --- xAI ---
  {
    id: "grok-4",
    name: "Grok-4",
    provider: "xAI",
    releaseDate: "2026-02-01",
    capabilities: ["text", "code", "vision", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 2000000,
      parameters: "Ultra-Dense",
      pricing: { input: 3.00, output: 15.00 }
    },
    scores: {
      "mmlu": { score: 92.0, verified: true },
      "gpqa-diamond": { score: 87.7, verified: false, sourceId: "artificial-analysis" },
      "factscore": { score: 53.6, verified: true },
      "math": { score: 95.0, verified: true },
      "phybench": { score: 42.33, verified: true },
      "aime-2025": { score: 91.7, verified: true },
      "hle": { score: 26.9, verified: true },
      "hle-full": { score: 26.9, verified: true },
      "arc-agi-2": { score: 15.9, verified: true },
      "lmarena-elo": { score: 1410, verified: true },
      "livebench": { score: 62.02, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
    }
  },
  {
    id: "grok-4-1-fast",
    name: "Grok-4.1-Fast",
    provider: "xAI",
    releaseDate: "2026-01-30",
    capabilities: ["text", "code"],
    isOpenSource: false,
    specs: {
      contextWindow: 2000000,
      parameters: "Efficiency Optimized",
      pricing: { input: 0.20, output: 0.50 }
    },
    scores: {
      "mmlu": { score: 85.4, verified: true },
      "hle": { score: 17.6, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "arc-agi-2": { score: 17.6, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "gpqa-diamond": { score: 84.3, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "aime-2025": { score: 91.9, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mmmu-pro": { score: 63.0, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "screenspot-pro": { score: 3.9, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "charxiv-reasoning": { score: 63.7, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "omnidocbench-15": { score: 0.154, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "videommmu": { score: 79.2, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "livecodebench-pro": { score: 1143, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "terminal-bench": { score: 16.9, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "swe-bench-verified": { score: 60.4, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "tau-bench": { score: 79.5, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "toolathlon": { score: 3.7, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mcp-atlas": { score: 3.4, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "vending-bench-2": { score: 549, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "facts-benchmark": { score: 50.4, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "simpleqa-verified": { score: 28.1, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mmmlu": { score: 86.6, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "global-piqa": { score: 90.2, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "mrcr-v2": { score: 54.3, verified: true, sourceId: "google-gemini3-announce", asOfDate: "2025-11-18" },
      "factscore": { score: 97.0, verified: true },
      "lmarena-elo": { score: 1280, verified: true },
      "livebench": { score: 59.99, verified: true, sourceId: "livebench", asOfDate: "2026-02-20" }
    }
  },
  {
    id: "grok-3",
    name: "Grok-3",
    provider: "xAI",
    releaseDate: "2025-02-15",
    capabilities: ["text", "code", "vision"],
    isOpenSource: false,
    specs: {
      contextWindow: 1000000,
      parameters: "Proprietary",
      pricing: { input: 3.00, output: 15.00 }
    },
    scores: {
      "mmlu": { score: 89.5, verified: true },
      "gpqa-diamond": { score: 69.3, verified: false, sourceId: "artificial-analysis" },
      "math": { score: 88.2, verified: true },
      "lmarena-elo": { score: 1380, verified: true }
    }
  },
  // --- AMAZON ---
  {
    id: "amazon-nova-pro",
    name: "Amazon Nova Pro",
    provider: "Amazon",
    releaseDate: "2024-12-01",
    capabilities: ["text", "code", "vision"],
    isOpenSource: false,
    specs: {
      contextWindow: 300000,
      parameters: "Proprietary",
      pricing: { input: 0.80, output: 3.20 }
    },
    scores: {
      "mmlu": { score: 83.4, verified: true },
      "gpqa-diamond": { score: 44.2, verified: true, sourceId: "artificial-analysis" },
      "math": { score: 64.7, verified: true, sourceId: "artificial-analysis" },
      "human-eval": { score: 84.8, verified: true, sourceId: "artificial-analysis" },
      "swe-bench-verified": { score: 35.0, verified: true },
      "mmmu": { score: 64.1, verified: true },
      "lmarena-elo": { score: 1268, verified: true }
    }
  },

  // --- BYTEDANCE ---
  {
    id: "seed-2-0-pro",
    name: "Seed2.0 Pro",
    provider: "ByteDance",
    releaseDate: "2026-02-14",
    capabilities: ["text", "code", "vision", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 128000,
      parameters: "Unknown",
      pricing: { input: 0.47, output: 2.37 }
    },
    scores: {
      "mmlu-pro": { score: 87.0, verified: true },
      "hle": { score: 36.8, verified: true },
      "math": { score: 65.7, verified: true },
      "aime-2026": { score: 54.4, verified: true },
      "aime-2025": { score: 65.7, verified: true },
      "codeforces": { score: 3020, verified: true },
      "gpqa-diamond": { score: 88.9, verified: true },
      "human-eval": { score: 95.4, verified: false, sourceId: "bytedance-seed" },
      "mmmu": { score: 85.4, verified: true },
      "arc-agi-1": { score: 85.4, verified: true },
      "putnam-200": { score: 35.5, verified: true },
      "lmarena-elo": { score: 1415, verified: false, sourceId: "lmarena" },
      // Vision
      "mathvista": { score: 89.8, verified: true },
      "mathvision": { score: 81.3, verified: true },
      "dynamath": { score: 60.9, verified: true },
      "mathkangaroo": { score: 90.5, verified: true },
      "mathcanvas": { score: 61.9, verified: true },
      "mmmu-vision": { score: 85.4, verified: true },
      "mmmu-pro": { score: 73.2, verified: true },
      "emma": { score: 72.0, verified: true },
      "sfe": { score: 55.6, verified: true },
      "hipho": { score: 74.1, verified: true },
      "xlrs-bench": { score: 65.7, verified: true },
      "phyx": { score: 65.7, verified: true },
      "logicvista": { score: 81.3, verified: true },
      "vpct": { score: 61.9, verified: true },
      "zerobench-main": { score: 41.3, verified: true },
      "zerobench-sub": { score: 48.7, verified: true },
      "arc-agi-1-image": { score: 30.2, verified: true },
      "arc-agi-2-image": { score: 2.1, verified: true },
      "visulogic": { score: 54.4, verified: true },
      "vlms-are-biased": { score: 30.1, verified: true },
      "vlms-are-blind": { score: 85.4, verified: true },
      "visfactor": { score: 34.2, verified: true },
      "realworldqa": { score: 84.3, verified: true },
      "babyvision": { score: 51.3, verified: true },
      "simplevqa": { score: 70.8, verified: true },
      "hallusionbench": { score: 78.5, verified: true },
      "mme-cc": { score: 87.0, verified: true },
      "mmstar": { score: 65.7, verified: true },
      "muirbench": { score: 48.7, verified: true },
      "mtvqa": { score: 78.9, verified: true },
      "worldvqa": { score: 60.9, verified: true },
      "vibeeval": { score: 81.3, verified: true },
      "viverbench": { score: 82.6, verified: true },
      "countbench": { score: 95.4, verified: true },
      "fsc-147": { score: 30.2, verified: true },
      "point-bench": { score: 92.7, verified: true },
      "blink": { score: 78.9, verified: true },
      "mmsibench": { score: 30.1, verified: true },
      "treebench": { score: 65.7, verified: true },
      "refspatialbench": { score: 92.6, verified: true },
      "da-2k": { score: 70.8, verified: true },
      "all-angles": { score: 72.4, verified: true },
      "erqa": { score: 60.6, verified: true },
      "chartqapro": { score: 76.8, verified: true },
      "ocrbench-v2": { score: 95.4, verified: true },
      "omnidocbench": { score: 65.7, verified: true },
      "charxiv-dq": { score: 68.5, verified: true },
      "charxiv-rq": { score: 74.0, verified: true },
      "dude": { score: 65.7, verified: true },
      "mmlongbench": { score: 76.8, verified: true },
      "longdocurl": { score: 81.3, verified: true },
      "mmlongbench-doc": { score: 82.6, verified: true },
      "frontiersci-olympiad": { score: 83.0, verified: true },
      // Video
      "videommmu": { score: 92.7, verified: true },
      "mmvu": { score: 81.3, verified: true },
      "videosimpleqa": { score: 78.9, verified: true },
      "videoreasonbench": { score: 65.7, verified: true },
      "morse-500": { score: 74.1, verified: true },
      "videoholmes": { score: 41.3, verified: true },
      "minerva": { score: 68.5, verified: true },
      "tvbench": { score: 81.3, verified: true },
      "contphy": { score: 65.7, verified: true },
      "tempcompass": { score: 92.6, verified: true },
      "egotempo": { score: 76.8, verified: true },
      "motionbench": { score: 85.4, verified: true },
      "tomato": { score: 76.8, verified: true },
      "videomme": { score: 95.4, verified: true },
      "cgbench": { score: 74.0, verified: true },
      "longvideobench": { score: 87.0, verified: true },
      "videoeval-pro": { score: 60.6, verified: true },
      "lvbench": { score: 84.3, verified: true },
      "crossvid": { score: 65.7, verified: true },
      "ovbench": { score: 74.1, verified: true },
      "livesports-3k": { score: 82.6, verified: true },
      "ovobench": { score: 72.4, verified: true },
      "odvbench": { score: 74.1, verified: true },
      "vispeak": { score: 87.0, verified: true }
    }
  },
  {
    id: "seed-2-0-mini",
    name: "Seed2.0 Mini",
    provider: "ByteDance",
    releaseDate: "2026-02-14",
    capabilities: ["text", "code", "vision"],
    isOpenSource: false,
    specs: {
      contextWindow: 128000,
      parameters: "Unknown",
      pricing: { input: 0.10, output: 0.50 }
    },
    scores: {
      "mmlu": { score: 84.5, verified: true },
      "math": { score: 60.2, verified: true },
      "mmmu": { score: 78.9, verified: true }
    }
  },
  {
    id: "seed-2-0-lite",
    name: "Seed2.0 Lite",
    provider: "ByteDance",
    releaseDate: "2026-02-14",
    capabilities: ["text", "code", "vision"],
    isOpenSource: false,
    specs: {
      contextWindow: 128000,
      parameters: "Unknown",
      pricing: { input: 0.05, output: 0.25 }
    },
    scores: {
      "mmlu": { score: 81.2, verified: true },
      "math": { score: 55.4, verified: true }
    }
  },
  {
    id: "deepseek-prover-v2",
    name: "DeepSeek-Prover-V2",
    provider: "DeepSeek",
    releaseDate: "2025-04-30",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: true,
    specs: {
      contextWindow: 128000,
      parameters: "Proof Optimized",
      pricing: { input: 0.10, output: 0.20 }
    },
    scores: {
      "math": { score: 95.4, verified: true },
      "aime": { score: 88.0, verified: true }
    }
  },
  {
    id: "seed-1-5-prover",
    name: "Seed-1.5-Prover",
    provider: "ByteDance",
    releaseDate: "2025-12-05",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 128000,
      parameters: "Proof Optimized",
      pricing: { input: 0.20, output: 0.40 }
    },
    scores: {
      "math": { score: 94.2, verified: true },
      "aime": { score: 85.0, verified: true }
    }
  },
  {
    id: "seed-1-8",
    name: "Seed-1.8",
    provider: "ByteDance",
    releaseDate: "2025-11-20",
    capabilities: ["text", "code", "vision"],
    isOpenSource: false,
    specs: {
      contextWindow: 128000,
      parameters: "Unknown",
      pricing: { input: 0.15, output: 0.30 }
    },
    scores: {
      "mmlu": { score: 83.4, verified: true },
      "mmmu": { score: 76.5, verified: true }
    }
  }
];

const modelScoreOverrides: Record<string, Model["scores"]> =
  typeof aaScoreOverrides === "undefined" ? {} : aaScoreOverrides;
const metadataOverrides: Record<string, ModelMetadataOverride> =
  typeof modelMetadataOverrides === "undefined" ? {} : modelMetadataOverrides;

function addDefaultModelType(input: Model[]): Model[] {
  return input.map((model) => ({
    ...model,
    modelType: model.modelType ?? "text",
    variants: model.variants ? addDefaultModelType(model.variants) : undefined,
  }));
}

const withMetadata = applyMetadataOverrides(rawModels, metadataOverrides);
const withOverrides = applyScoreOverrides(withMetadata, modelScoreOverrides);
const withModelType = addDefaultModelType(withOverrides);

export const models: Model[] = addScoreProvenance(withModelType);
