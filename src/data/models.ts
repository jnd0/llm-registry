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
    };
  });
}

function applyScoreOverrides(input: Model[], overrides: Record<string, Model["scores"]>): Model[] {
  return input.map((model) => {
    const patch = overrides[model.id];
    if (!patch) return model;

    return {
      ...model,
      scores: {
        ...model.scores,
        ...patch,
      },
    };
  });
}

function applyMetadataOverrides(input: Model[], overrides: Record<string, ModelMetadataOverride>): Model[] {
  return input.map((model) => {
    const patch = overrides[model.id];
    if (!patch) return model;

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

    return {
      ...model,
      ...patch,
      specs: nextSpecs,
      scores: model.scores,
    };
  });
}

const rawModels: Model[] = [
  // --- OPENAI ---
  {
    id: "gpt-4o",
    name: "GPT-4o",
    provider: "OpenAI",
    releaseDate: "2024-05-13",
    capabilities: ["text", "code", "vision", "audio"],
    isOpenSource: false,
    specs: {
      contextWindow: 128000,
      parameters: "Unknown",
      pricing: { input: 5.00, output: 15.00 }
    },
    scores: {
      "mmlu": { score: 88.7, verified: true },
      "gpqa-diamond": { score: 53.6, verified: true },
      "math": { score: 76.6, verified: true },
      "human-eval": { score: 90.2, verified: true },
      "mmmu": { score: 69.1, verified: true },
      "lmarena-elo": { score: 1388, verified: true }
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
    id: "gpt-5-2-pro",
    name: "GPT-5.2 Pro",
    provider: "OpenAI",
    releaseDate: "2025-12-11",
    capabilities: ["text", "code", "vision", "audio", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 256000,
      parameters: "Unknown (MoE)",
      pricing: { input: 1.75, output: 14.00 }
    },
    scores: {
      "mmlu": { score: 89.6, verified: true },
      "mmlu-pro": { score: 82.2, verified: true },
      "gpqa-diamond": { score: 92.4, verified: true },
      "math": { score: 100.0, verified: true },
      "human-eval": { score: 80.0, verified: true },
      "swe-bench-verified": { score: 80.0, verified: true },
      "swe-bench-pro": { score: 55.6, verified: true },
      "mmmu": { score: 80.4, verified: true },
      "hle": { score: 50.0, verified: true },
      "hle-full-tools": { score: 50.0, verified: true },
      "arc-agi-1": { score: 90.5, verified: true },
      "arc-agi-2": { score: 52.9, verified: true },
      "terminal-bench": { score: 54.0, verified: true },
      "lmarena-elo": { score: 1437, verified: true }
    }
  },
  {
    id: "gpt-5-2-xhigh",
    name: "GPT-5.2 xhigh",
    provider: "OpenAI",
    releaseDate: "2025-12-11",
    capabilities: ["text", "code", "vision", "audio", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 256000,
      parameters: "Unknown (MoE)",
      pricing: { input: 2.50, output: 20.00 }
    },
    scores: {
      "hle-full-tools": { score: 34.5, verified: true },
      "aime-2025": { score: 95.4, verified: true },
      "hmmt-feb-2025": { score: 61.0, verified: true },
      "imo-answerbench": { score: 95.0, verified: true },
      "gpqa-diamond": { score: 83.1, verified: true },
      "osworld-verified": { score: 66.3, verified: true }
    }
  },
  {
    id: "gpt-5-1",
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
      "lmarena-elo": { score: 1450, verified: false, sourceId: "lmarena" }
    }
  },
  {
    id: "gpt-5-3-codex",
    name: "GPT-5.3-Codex",
    provider: "OpenAI",
    releaseDate: "2026-01-20",
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
      "osworld-verified": { score: 64.7, verified: true }
    }
  },
  {
    id: "gpt-oss-120b",
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
      "math": { score: 97.9, verified: true },
      "hle": { score: 19.0, verified: true }
    }
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
      pricing: { input: 30.00, output: 120.00 }
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
      pricing: { input: 10.00, output: 40.00 }
    },
    scores: {
      "math": { score: 98.2, verified: true },
      "aime": { score: 92.0, verified: true }
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
    id: "gpt-4-5",
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
    id: "gpt-5-2-high",
    name: "GPT-5.2 High",
    provider: "OpenAI",
    releaseDate: "2026-03-01",
    capabilities: ["text", "code", "vision", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 512000,
      parameters: "Ultra-High Dense",
      pricing: { input: 10.00, output: 40.00 }
    },
    scores: {
      "mmlu-pro": { score: 85.9, verified: true },
      "hle": { score: 29.9, verified: true },
      "simpleqa": { score: 14.5, verified: true },
      "healthbench": { score: 33.3, verified: true },
      "supergpqa": { score: 29.3, verified: true },
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
      // Vision
      "mathvista": { score: 83.1, verified: true },
      "mathvision": { score: 74.3, verified: true },
      "dynamath": { score: 52.9, verified: true },
      "mathkangaroo": { score: 58.9, verified: true },
      "mathcanvas": { score: 53.2, verified: true },
      "mmmu-vision": { score: 83.7, verified: true },
      "mmmu-pro": { score: 70.8, verified: true },
      "emma": { score: 57.0, verified: true },
      "sfe": { score: 48.4, verified: true },
      "hipho": { score: 55.8, verified: true },
      "xlrs-bench": { score: 49.9, verified: true },
      "phyx": { score: 50.4, verified: true },
      "logicvista": { score: 81.0, verified: true },
      "vpct": { score: 48.0, verified: true },
      "zerobench-main": { score: 30.8, verified: true },
      "zerobench-sub": { score: 36.2, verified: true },
      "arc-agi-1-image": { score: 21.5, verified: true },
      "arc-agi-2-image": { score: 1.3, verified: true },
      "visulogic": { score: 40.4, verified: true },
      "vlms-are-biased": { score: 21.4, verified: true },
      "vlms-are-blind": { score: 77.2, verified: true },
      "visfactor": { score: 24.5, verified: true },
      "realworldqa": { score: 75.9, verified: true },
      "babyvision": { score: 38.7, verified: true },
      "simplevqa": { score: 57.9, verified: true },
      "hallusionbench": { score: 65.1, verified: true },
      "mme-cc": { score: 78.0, verified: true },
      "mmstar": { score: 53.1, verified: true },
      "muirbench": { score: 36.6, verified: true },
      "mtvqa": { score: 70.3, verified: true },
      "worldvqa": { score: 47.6, verified: true },
      "vibeeval": { score: 72.4, verified: true },
      "viverbench": { score: 73.9, verified: true },
      "countbench": { score: 90.3, verified: true },
      "fsc-147": { score: 20.9, verified: true },
      "point-bench": { score: 85.5, verified: true },
      "blink": { score: 70.3, verified: true },
      "mmsibench": { score: 19.7, verified: true },
      "treebench": { score: 55.6, verified: true },
      "refspatialbench": { score: 86.4, verified: true },
      "da-2k": { score: 61.3, verified: true },
      "all-angles": { score: 63.1, verified: true },
      "erqa": { score: 48.3, verified: true },
      "chartqapro": { score: 67.6, verified: true },
      "ocrbench-v2": { score: 92.7, verified: true },
      "omnidocbench": { score: 55.5, verified: true },
      "charxiv-dq": { score: 58.5, verified: true },
      "charxiv-rq": { score: 65.5, verified: true },
      "dude": { score: 55.6, verified: true },
      "mmlongbench": { score: 66.7, verified: true },
      "longdocurl": { score: 71.3, verified: true },
      "mmlongbench-doc": { score: 72.0, verified: true },
      // Video
      "videommmu": { score: 87.6, verified: true },
      "mmvu": { score: 69.0, verified: true },
      "videosimpleqa": { score: 67.7, verified: true },
      "videoreasonbench": { score: 59.5, verified: true },
      "morse-500": { score: 64.2, verified: true },
      "videoholmes": { score: 32.2, verified: true },
      "minerva": { score: 54.7, verified: true },
      "tvbench": { score: 71.1, verified: true },
      "contphy": { score: 58.0, verified: true },
      "tempcompass": { score: 88.0, verified: true },
      "egotempo": { score: 55.9, verified: true },
      "motionbench": { score: 67.2, verified: true },
      "tomato": { score: 65.4, verified: true },
      "videomme": { score: 88.4, verified: true },
      "cgbench": { score: 65.5, verified: true },
      "longvideobench": { score: 76.7, verified: true },
      "videoeval-pro": { score: 52.7, verified: true },
      "lvbench": { score: 73.0, verified: true },
      "crossvid": { score: 53.0, verified: true },
      "ovbench": { score: 62.7, verified: true },
      "livesports-3k": { score: 74.5, verified: true },
      "ovobench": { score: 70.1, verified: true },
      "odvbench": { score: 63.6, verified: true },
      "vispeak": { score: 77.5, verified: true },
      // Agentic
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
      // Advanced Tasks
      "scicode": { score: 49.7, verified: true },
      "frontiersci-research": { score: 25.0, verified: true },
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
      "xpert-bench": { score: 53.3, verified: true },
      "tob-k12": { score: 61.6, verified: true },
      "tob-compositional": { score: 62.1, verified: true },
      "tob-classification": { score: 44.7, verified: true },
      "tob-extraction": { score: 19.33, verified: true },
      "world-travel-vlm": { score: 32.67, verified: true },
      "world-travel-text": { score: 64.5, verified: true }
    }
  },
  {
    id: "gpt-5-mini-high",
    name: "GPT-5-mini High",
    provider: "OpenAI",
    releaseDate: "2026-03-05",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 128000,
      parameters: "Efficient High-Cap",
      pricing: { input: 0.20, output: 0.80 }
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
      "lmarena-elo": { score: 1380, verified: false, sourceId: "lmarena" }
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
      parameters: "Unknown",
      pricing: { input: 3.00, output: 15.00 }
    },
    scores: {
      "mmlu": { score: 88.7, verified: true },
      "gpqa-diamond": { score: 59.4, verified: true },
      "human-eval": { score: 92.0, verified: true },
      "swe-bench-verified": { score: 49.0, verified: true },
      "mmmu": { score: 67.2, verified: true },
      "lmarena-elo": { score: 1271, verified: true }
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
      "math": { score: 89.2, verified: true },
      "human-eval": { score: 94.6, verified: true },
      "swe-bench-verified": { score: 80.8, verified: true },
      "mmmu": { score: 76.5, verified: true },
      "hle": { score: 40.0, verified: true },
      "hle-full": { score: 40.0, verified: true },
      "arc-agi-2": { score: 68.8, verified: true },
      "terminal-bench": { score: 65.4, verified: true },
      "browsecomp": { score: 84.0, verified: true },
      "osworld-verified": { score: 72.7, verified: true },
      "mrcr-v2": { score: 76.0, verified: true },
      "lmarena-elo": { score: 1502, verified: true }
    }
  },
  {
    id: "claude-opus-4-5",
    name: "Claude Opus 4.5",
    provider: "Anthropic",
    releaseDate: "2025-07-20",
    capabilities: ["text", "code", "vision", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 200000,
      parameters: "Unknown",
      pricing: { input: 10.00, output: 30.00 }
    },
    scores: {
      "mmlu": { score: 90.5, verified: true },
      "gpqa-diamond": { score: 68.0, verified: true },
      "hle": { score: 30.8, verified: true },
      "swe-bench-verified": { score: 80.9, verified: true }
    }
  },
  {
    id: "claude-sonnet-4-5",
    name: "Claude Sonnet 4.5",
    provider: "Anthropic",
    releaseDate: "2025-11-15",
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
      "human-eval": { score: 93.5, verified: true },
      "swe-bench-verified": { score: 77.2, verified: true },
      "lmarena-elo": { score: 1451, verified: true }
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
    id: "claude-sonnet-4-5-high",
    name: "Claude Sonnet 4.5 High",
    provider: "Anthropic",
    releaseDate: "2026-02-10",
    capabilities: ["text", "code", "vision"],
    isOpenSource: false,
    specs: {
      contextWindow: 300000,
      parameters: "Unknown",
      pricing: { input: 3.00, output: 15.00 }
    },
    scores: {
      "mmlu-pro": { score: 88.0, verified: true },
      "hle": { score: 14.5, verified: true },
      "aime-2026": { score: 65.5, verified: true },
      "aime-2025": { score: 58.0, verified: true },
      "codeforces": { score: 1485, verified: true },
      "gpqa-diamond": { score: 84.3, verified: true },
      "arc-agi-1": { score: 70.9, verified: true },
      // Agentic
      "terminal-bench": { score: 45.2, verified: true },
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
      "seal-0": { score: 37.6, verified: true },
      "tau-bench": { score: 86.2, verified: true },
      "tau-bench-telecom": { score: 98.0, verified: true },
      "bfcl-v4": { score: 32.1, verified: true },
      "vitabench": { score: 72.9, verified: true },
      "deepconsult": { score: 55.8, verified: true },
      "researchrubrics": { score: 38.6, verified: true },
      // Advanced Tasks
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
  },
  {
    id: "claude-opus-4-5-high",
    name: "Claude Opus 4.5 High",
    provider: "Anthropic",
    releaseDate: "2026-03-01",
    capabilities: ["text", "code", "vision", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 400000,
      parameters: "Unknown",
      pricing: { input: 15.00, output: 75.00 }
    },
    scores: {
      "mmlu-pro": { score: 89.3, verified: true },
      "hle": { score: 23.7, verified: true },
      "aime-2026": { score: 70.6, verified: true },
      "aime-2025": { score: 63.3, verified: true },
      "codeforces": { score: 1701, verified: true },
      "gpqa-diamond": { score: 86.9, verified: true },
      "arc-agi-1": { score: 84.0, verified: true },
      // Vision
      "mathvista": { score: 80.6, verified: true },
      "mmmu-vision": { score: 81.6, verified: true },
      "logicvista": { score: 68.9, verified: true },
      "blink": { score: 68.1, verified: true },
      "ocrbench-v2": { score: 92.7, verified: true },
      "frontiersci-olympiad": { score: 60.0, verified: true },
      // Agentic
      "terminal-bench": { score: 60.2, verified: true },
      "swe-lancer": { score: 56.1, verified: true },
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
      // Advanced Tasks
      "scicode": { score: 52.8, verified: true },
      "frontiersci-research": { score: 21.7, verified: true },
      "biobench": { score: 49.3, verified: true },
      "ainstein-bench": { score: 44.0, verified: true },
      "vibe-coding": { score: 68.5, verified: true },
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
      "world-travel-text": { score: 69.0, verified: true }
    }
  },

  // --- GOOGLE DEEPMIND ---
  {
    id: "gemini-1-5-pro",
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
      "mmlu": { score: 91.8, verified: true },
      "mmmlu": { score: 91.8, verified: true },
      "gpqa-diamond": { score: 91.9, verified: true },
      "swe-bench-verified": { score: 76.2, verified: true },
      "mmmu-pro": { score: 81.0, verified: true },
      "videommmu": { score: 87.6, verified: true },
      "hle": { score: 37.5, verified: true },
      "hle-full": { score: 37.5, verified: true },
      "arc-agi-2": { score: 45.1, verified: true },
      "terminal-bench": { score: 54.2, verified: true },
      "lmarena-elo": { score: 1486, verified: true }
    }
  },
  {
    id: "gemini-3-deep-think",
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
    id: "gemini-3-flash",
    name: "Gemini 3 Flash",
    provider: "Google DeepMind",
    releaseDate: "2025-11-05",
    capabilities: ["text", "code", "vision", "audio"],
    isOpenSource: false,
    specs: {
      contextWindow: 1000000,
      parameters: "Speed Optimized",
      pricing: { input: 0.10, output: 0.30 }
    },
    scores: {
      "mmlu": { score: 87.4, verified: true },
      "human-eval": { score: 82.0, verified: true }
    }
  },
  {
    id: "gemini-2-5-pro",
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
      "gpqa-diamond": { score: 58.0, verified: true }
    }
  },
  {
    id: "gemini-2-0-flash",
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
      "swe-bench-verified": { score: 35.1, verified: true }
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
  {
    id: "gemini-3-pro-high",
    name: "Gemini 3 Pro High",
    provider: "Google DeepMind",
    releaseDate: "2026-03-10",
    capabilities: ["text", "code", "vision", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 2000000,
      parameters: "Unknown",
      pricing: { input: 2.50, output: 10.00 }
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
      // Vision
      "mathvista": { score: 89.8, verified: true },
      "mmmu-vision": { score: 87.0, verified: true },
      "logicvista": { score: 80.8, verified: true },
      "blink": { score: 77.1, verified: true },
      "chartqapro": { score: 69.0, verified: true },
      "ocrbench-v2": { score: 94.4, verified: true },
      "frontiersci-olympiad": { score: 71.0, verified: true },
      // Video
      "videommmu": { score: 88.1, verified: true },
      "videomme": { score: 85.2, verified: true },
      "tvbench": { score: 71.1, verified: true },
      "ovbench": { score: 62.7, verified: true },
      // Agentic
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
      // Advanced Tasks
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
  },
  {
    id: "gemini-3-flash-high",
    name: "Gemini 3 Flash High",
    provider: "Google DeepMind",
    releaseDate: "2026-03-12",
    capabilities: ["text", "code", "vision"],
    isOpenSource: false,
    specs: {
      contextWindow: 1000000,
      parameters: "Unknown",
      pricing: { input: 0.15, output: 0.45 }
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
  },

  // --- META ---
  {
    id: "llama-3-1-405b",
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
    id: "llama-4-behemoth",
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
    id: "llama-4-maverick",
    name: "Llama 4 Maverick",
    provider: "Meta",
    releaseDate: "2025-09-30",
    capabilities: ["text", "code", "vision"],
    isOpenSource: true,
    specs: {
      contextWindow: 256000,
      parameters: "MoE optimized",
      pricing: { input: 0.50, output: 1.50 }
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
    id: "llama-4-scout",
    name: "Llama 4 Scout",
    provider: "Meta",
    releaseDate: "2026-01-14",
    capabilities: ["text", "code"],
    isOpenSource: true,
    specs: {
      contextWindow: 128000,
      parameters: "High Efficiency",
      pricing: { input: 0.02, output: 0.06 }
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
      pricing: { input: 0.01, output: 0.10 }
    },
    scores: {
      "mmlu": { score: 88.5, verified: true },
      "math": { score: 90.2, verified: true },
      "human-eval": { score: 91.6, verified: true },
      "lmarena-elo": { score: 1421, verified: true }
    }
  },
  {
    id: "deepseek-r1",
    name: "DeepSeek-R1",
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
      "aime": { score: 71.0, verified: true }
    }
  },
  {
    id: "deepseek-v3-2-speciale",
    name: "DeepSeek-V3.2-Speciale",
    provider: "DeepSeek",
    releaseDate: "2026-02-14",
    capabilities: ["text", "code", "vision"],
    isOpenSource: true,
    specs: {
      contextWindow: 256000,
      parameters: "Dense Enhanced",
      pricing: { input: 0.05, output: 0.15 }
    },
    scores: {
      "mmlu": { score: 88.5, verified: true },
      "gpqa-diamond": { score: 82.4, verified: true },
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
    id: "deepseek-v3-1-terminus",
    name: "DeepSeek-V3.1-Terminus",
    provider: "DeepSeek",
    releaseDate: "2025-10-10",
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
    id: "minimax-m2-5",
    name: "MiniMax M2.5",
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
      "mmlu": { score: 89.0, verified: true }
    }
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
      "webarena": { score: 58.9, verified: true }
    }
  },
  {
    id: "qwen3-vl-235b-a22b",
    name: "Qwen3-VL-235B-A22B",
    provider: "Alibaba",
    releaseDate: "2026-02-10",
    capabilities: ["text", "code", "vision", "reasoning"],
    isOpenSource: true,
    specs: {
      contextWindow: 262144,
      parameters: "235B (22B active)",
      pricing: { input: 0, output: 0 }
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
      "lmarena-elo": { score: 1320, verified: false, sourceId: "lmarena" }
    }
  },
  {
    id: "glm-5",
    name: "GLM-5",
    provider: "Zhipu AI",
    releaseDate: "2025-11-15",
    capabilities: ["text", "code", "vision"],
    isOpenSource: true,
    specs: {
      contextWindow: 512000,
      parameters: "Adaptive MoE",
      pricing: { input: 0.20, output: 0.60 }
    },
    scores: {
      "mmlu": { score: 90.1, verified: true },
      "gpqa-diamond": { score: 86.0, verified: true },
      "human-eval": { score: 88.0, verified: true },
      "hle": { score: 50.4, verified: true },
      "swe-bench-verified": { score: 77.8, verified: true },
      "terminal-bench": { score: 56.2, verified: true },
      "vending-bench-2": { score: 4432, verified: true },
      "lmarena-elo": { score: 1452, verified: true }
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
      "human-eval": { score: 72.6, verified: true }
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
      "human-eval": { score: 70.1, verified: true }
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
      "human-eval": { score: 38.0, verified: true }
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
      pricing: { input: 2.00, output: 10.00 }
    },
    scores: {
      "mmlu": { score: 92.0, verified: true },
      "gpqa-diamond": { score: 87.7, verified: false, sourceId: "artificial-analysis" },
      "math": { score: 95.0, verified: true },
      "aime-2025": { score: 91.7, verified: true },
      "hle": { score: 26.9, verified: true },
      "hle-full": { score: 26.9, verified: true },
      "arc-agi-2": { score: 15.9, verified: true },
      "lmarena-elo": { score: 1410, verified: true }
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
      "lmarena-elo": { score: 1280, verified: true }
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
      pricing: { input: 5.00, output: 15.00 }
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
    releaseDate: "2026-02-20",
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
      "xlrs-bench": { score: 54.6, verified: true },
      "phyx": { score: 72.1, verified: true },
      "logicvista": { score: 81.9, verified: true },
      "vpct": { score: 76.0, verified: true },
      "zerobench-main": { score: 42.2, verified: true },
      "zerobench-sub": { score: 47.6, verified: true },
      "arc-agi-1-image": { score: 54.4, verified: true },
      "arc-agi-2-image": { score: 27.6, verified: true },
      "visulogic": { score: 47.4, verified: true },
      "vlms-are-biased": { score: 77.4, verified: true },
      "vlms-are-blind": { score: 93.0, verified: true },
      "visfactor": { score: 49.7, verified: true },
      "realworldqa": { score: 86.0, verified: true },
      "babyvision": { score: 60.6, verified: true },
      "simplevqa": { score: 78.7, verified: true },
      "hallusionbench": { score: 71.4, verified: true },
      "mme-cc": { score: 81.8, verified: true },
      "mmstar": { score: 51.1, verified: true },
      "muirbench": { score: 47.3, verified: true },
      "mtvqa": { score: 74.0, verified: true },
      "worldvqa": { score: 49.9, verified: true },
      "vibeeval": { score: 81.4, verified: true },
      "viverbench": { score: 75.9, verified: true },
      "countbench": { score: 95.5, verified: true },
      "fsc-147": { score: 11.3, verified: true },
      "point-bench": { score: 81.4, verified: true },
      "blink": { score: 79.5, verified: true },
      "mmsibench": { score: 32.5, verified: true },
      "treebench": { score: 72.6, verified: true },
      "refspatialbench": { score: 92.3, verified: true },
      "da-2k": { score: 72.1, verified: true },
      "all-angles": { score: 73.5, verified: true },
      "erqa": { score: 68.5, verified: true },
      "chartqapro": { score: 71.2, verified: true },
      "ocrbench-v2": { score: 93.5, verified: true },
      "omnidocbench": { score: 62.5, verified: true },
      "charxiv-dq": { score: 0.099, verified: true },
      "charxiv-rq": { score: 80.5, verified: true },
      "dude": { score: 72.4, verified: true },
      "mmlongbench": { score: 74.8, verified: true },
      "longdocurl": { score: 74.7, verified: true },
      "mmlongbench-doc": { score: 74.5, verified: true },
      "frontiersci-olympiad": { score: 73.0, verified: true },
      // Video
      "videommmu": { score: 86.9, verified: true },
      "mmvu": { score: 78.2, verified: true },
      "videosimpleqa": { score: 71.9, verified: true },
      "videoreasonbench": { score: 77.8, verified: true },
      "morse-500": { score: 65.5, verified: true },
      "videoholmes": { score: 37.4, verified: true },
      "minerva": { score: 66.5, verified: true },
      "tvbench": { score: 75.0, verified: true },
      "contphy": { score: 54.9, verified: true },
      "tempcompass": { score: 86.9, verified: true },
      "egotempo": { score: 67.4, verified: true },
      "motionbench": { score: 89.6, verified: true },
      "tomato": { score: 71.8, verified: true },
      "videomme": { score: 89.5, verified: true },
      "cgbench": { score: 65.0, verified: true },
      "longvideobench": { score: 80.3, verified: true },
      "videoeval-pro": { score: 48.0, verified: true },
      "lvbench": { score: 76.4, verified: true },
      "crossvid": { score: 60.3, verified: true },
      "ovbench": { score: 77.5, verified: true },
      "livesports-3k": { score: 69.2, verified: true },
      "ovobench": { score: 78.0, verified: true },
      "odvbench": { score: 77.0, verified: true },
      "vispeak": { score: 78.5, verified: true },
      // Agentic
      "terminal-bench": { score: 55.8, verified: true },
      "swe-bench-verified": { score: 76.5, verified: true },
      "multi-swe-bench": { score: 45.2, verified: true },
      "swe-bench-pro": { score: 46.9, verified: true },
      "swe-multilingual": { score: 71.7, verified: true },
      "swe-evo": { score: 8.5, verified: true },
      "artifactsbench": { score: 66.6, verified: true },
      "codesimpleqa": { score: 58.0, verified: true },
      "spreadsheetbench-verified": { score: 79.1, verified: true },
      "browsecomp": { score: 77.3, verified: true },
      "browsecomp-zh": { score: 70.2, verified: true },
      "hle-text": { score: 74.7, verified: true },
      "hle-verified": { score: 49.5, verified: true },
      "widesearch": { score: 77.4, verified: true },
      "finsearchcomp": { score: 12.0, verified: true },
      "deepsearchqa": { score: 45.5, verified: true },
      "seal-0": { score: 82.4, verified: true },
      "tau-bench": { score: 90.4, verified: true },
      "tau-bench-telecom": { score: 94.2, verified: true },
      "bfcl-v4": { score: 65.9, verified: true },
      "vitabench": { score: 41.8, verified: true },
      "deepconsult": { score: 61.1, verified: true },
      "deepresearchbench": { score: 53.3, verified: true },
      "researchrubrics": { score: 50.7, verified: true },
      "minedojo-verified": { score: 49.0, verified: true },
      "mm-browsecomp": { score: 48.8, verified: true },
      "hle-vl": { score: 39.2, verified: true },
      // Advanced Tasks
      "scicode": { score: 52.1, verified: true },
      "frontiersci-research": { score: 23.3, verified: true },
      "biobench": { score: 47.7, verified: true },
      "vibe-coding": { score: 66.6, verified: true },
      "nl2repo-bench": { score: 27.9, verified: true },
      "nl2repo-pass1": { score: 3.0, verified: true },
      "cl-bench": { score: 63.6, verified: true },
      "tob-complex": { score: 64.7, verified: true },
      "tob-reference": { score: 72.4, verified: true },
      "healthbench-hard": { score: 28.3, verified: true },
      "gdpval-diamond": { score: 21.3, verified: true },
      "tob-k12": { score: 62.8, verified: true },
      "tob-compositional": { score: 64.5, verified: true },
      "tob-classification": { score: 69.0, verified: true },
      "tob-extraction": { score: 23.3, verified: true },
      "world-travel-text": { score: 23.3, verified: true }
    }
  },
  {
    id: "seed-2-0-mini",
    name: "Seed2.0 Mini",
    provider: "ByteDance",
    releaseDate: "2026-02-22",
    capabilities: ["text", "code"],
    isOpenSource: false,
    specs: {
      contextWindow: 128000,
      parameters: "Unknown",
      pricing: { input: 0.03, output: 0.31 }
    },
    scores: {
      "mmlu-pro": { score: 83.6, verified: true },
      "math": { score: 87.0, verified: true },
      "aime-2026": { score: 86.7, verified: true },
      "aime-2025": { score: 87.0, verified: true },
      "codeforces": { score: 1644, verified: true },
      "gpqa-diamond": { score: 79.0, verified: true },
      "human-eval": { score: 91.2, verified: false, sourceId: "bytedance-seed" },
      "mmmu": { score: 79.7, verified: true },
      "arc-agi-1": { score: 43.3, verified: true },
      "lmarena-elo": { score: 1340, verified: false, sourceId: "lmarena" },
      // Vision
      "mathvista": { score: 85.5, verified: true },
      "mathvision": { score: 86.1, verified: true },
      "dynamath": { score: 55.3, verified: true },
      "mathkangaroo": { score: 86.3, verified: true },
      "mathcanvas": { score: 61.1, verified: true },
      "mmmu-vision": { score: 79.7, verified: true },
      "mmmu-pro": { score: 81.0, verified: true },
      "emma": { score: 65.5, verified: true },
      "sfe": { score: 53.4, verified: true },
      "hipho": { score: 72.5, verified: true },
      "xlrs-bench": { score: 53.7, verified: true },
      "phyx": { score: 71.5, verified: true },
      "logicvista": { score: 73.8, verified: true },
      "vpct": { score: 73.0, verified: true },
      "zerobench-main": { score: 38.9, verified: true },
      "zerobench-sub": { score: 42.2, verified: true },
      "arc-agi-1-image": { score: 26.1, verified: true },
      "arc-agi-2-image": { score: 37.0, verified: true },
      "visulogic": { score: 47.3, verified: true },
      "vlms-are-biased": { score: 58.4, verified: true },
      "vlms-are-blind": { score: 84.2, verified: true },
      "visfactor": { score: 37.4, verified: true },
      "realworldqa": { score: 81.7, verified: true },
      "babyvision": { score: 57.5, verified: true },
      "simplevqa": { score: 77.4, verified: true },
      "hallusionbench": { score: 67.2, verified: true },
      "mme-cc": { score: 76.2, verified: true },
      "mmstar": { score: 51.1, verified: true },
      "muirbench": { score: 26.3, verified: true },
      "mtvqa": { score: 73.1, verified: true },
      "worldvqa": { score: 44.0, verified: true },
      "vibeeval": { score: 74.8, verified: true },
      "viverbench": { score: 80.0, verified: true },
      "countbench": { score: 97.1, verified: true },
      "fsc-147": { score: 11.9, verified: true },
      "point-bench": { score: 79.0, verified: true },
      "blink": { score: 73.4, verified: true },
      "mmsibench": { score: 28.3, verified: true },
      "treebench": { score: 66.4, verified: true },
      "refspatialbench": { score: 90.3, verified: true },
      "da-2k": { score: 65.2, verified: true },
      "all-angles": { score: 71.5, verified: true },
      "erqa": { score: 59.8, verified: true },
      "chartqapro": { score: 65.2, verified: true },
      "ocrbench-v2": { score: 93.8, verified: true },
      "omnidocbench": { score: 62.4, verified: true },
      "charxiv-dq": { score: 0.102, verified: true },
      "charxiv-rq": { score: 79.9, verified: true },
      "dude": { score: 72.1, verified: true },
      "mmlongbench": { score: 70.8, verified: true },
      "longdocurl": { score: 75.1, verified: true },
      "mmlongbench-doc": { score: 57.0, verified: true },
      "frontiersci-olympiad": { score: 25.0, verified: true },
      // Video
      "videommmu": { score: 77.9, verified: true },
      "mmvu": { score: 70.7, verified: true },
      "videosimpleqa": { score: 75.0, verified: true },
      "videoreasonbench": { score: 61.2, verified: true },
      "morse-500": { score: 65.6, verified: true },
      "videoholmes": { score: 32.2, verified: true },
      "minerva": { score: 63.8, verified: true },
      "tvbench": { score: 67.2, verified: true },
      "contphy": { score: 60.5, verified: true },
      "tempcompass": { score: 88.3, verified: true },
      "egotempo": { score: 56.1, verified: true },
      "motionbench": { score: 87.0, verified: true },
      "tomato": { score: 61.8, verified: true },
      "videomme": { score: 85.2, verified: true },
      "cgbench": { score: 65.3, verified: true },
      "longvideobench": { score: 74.5, verified: true },
      "videoeval-pro": { score: 51.9, verified: true },
      "lvbench": { score: 73.0, verified: true },
      "crossvid": { score: 58.6, verified: true },
      "ovbench": { score: 71.5, verified: true },
      "livesports-3k": { score: 68.7, verified: true },
      "ovobench": { score: 86.0, verified: true },
      "odvbench": { score: 69.6, verified: true },
      "vispeak": { score: 84.0, verified: true }
    }
  },
  {
    id: "seed-2-0-lite",
    name: "Seed2.0 Lite",
    provider: "ByteDance",
    releaseDate: "2026-02-22",
    capabilities: ["text", "code"],
    isOpenSource: false,
    specs: {
      contextWindow: 128000,
      parameters: "Unknown",
      pricing: { input: 0.09, output: 0.53 }
    },
    scores: {
      "mmlu-pro": { score: 87.7, verified: true },
      "math": { score: 93.0, verified: true },
      "aime-2026": { score: 88.3, verified: true },
      "aime-2025": { score: 93.0, verified: true },
      "codeforces": { score: 2233, verified: true },
      "gpqa-diamond": { score: 85.1, verified: true },
      "human-eval": { score: 93.5, verified: false, sourceId: "bytedance-seed" },
      "mmmu": { score: 83.7, verified: true },
      "arc-agi-1": { score: 75.7, verified: true },
      "putnam-200": { score: 30.5, verified: true },
      "lmarena-elo": { score: 1375, verified: false, sourceId: "lmarena" },
      // Vision
      "mathvista": { score: 89.0, verified: true },
      "mathvision": { score: 86.8, verified: true },
      "dynamath": { score: 58.8, verified: true },
      "mathkangaroo": { score: 86.4, verified: true },
      "mathcanvas": { score: 61.9, verified: true },
      "mmmu-vision": { score: 83.7, verified: true },
      "mmmu-pro": { score: 79.5, verified: true },
      "emma": { score: 65.5, verified: true },
      "sfe": { score: 53.4, verified: true },
      "hipho": { score: 72.5, verified: true },
      "xlrs-bench": { score: 53.7, verified: true },
      "phyx": { score: 71.0, verified: true },
      "logicvista": { score: 79.6, verified: true },
      "vpct": { score: 73.0, verified: true },
      "zerobench-main": { score: 37.7, verified: true },
      "zerobench-sub": { score: 42.2, verified: true },
      "arc-agi-1-image": { score: 31.4, verified: true },
      "arc-agi-2-image": { score: 39.0, verified: true },
      "visulogic": { score: 47.3, verified: true },
      "vlms-are-biased": { score: 62.0, verified: true },
      "vlms-are-blind": { score: 97.5, verified: true },
      "visfactor": { score: 45.8, verified: true },
      "realworldqa": { score: 82.1, verified: true },
      "babyvision": { score: 67.7, verified: true },
      "simplevqa": { score: 78.2, verified: true },
      "hallusionbench": { score: 66.0, verified: true },
      "mme-cc": { score: 81.8, verified: true },
      "mmstar": { score: 51.1, verified: true },
      "muirbench": { score: 26.3, verified: true },
      "mtvqa": { score: 73.1, verified: true },
      "worldvqa": { score: 44.0, verified: true },
      "vibeeval": { score: 76.5, verified: true },
      "viverbench": { score: 80.0, verified: true },
      "countbench": { score: 95.5, verified: true },
      "fsc-147": { score: 12.1, verified: true },
      "point-bench": { score: 77.0, verified: true },
      "blink": { score: 75.6, verified: true },
      "mmsibench": { score: 28.3, verified: true },
      "treebench": { score: 66.4, verified: true },
      "refspatialbench": { score: 90.3, verified: true },
      "da-2k": { score: 65.2, verified: true },
      "all-angles": { score: 71.5, verified: true },
      "erqa": { score: 59.8, verified: true },
      "chartqapro": { score: 70.3, verified: true },
      "ocrbench-v2": { score: 94.4, verified: true },
      "omnidocbench": { score: 58.5, verified: true },
      "charxiv-dq": { score: 0.143, verified: true },
      "charxiv-rq": { score: 82.1, verified: true },
      "dude": { score: 72.1, verified: true },
      "mmlongbench": { score: 74.8, verified: true },
      "longdocurl": { score: 75.1, verified: true },
      "mmlongbench-doc": { score: 59.5, verified: true },
      "frontiersci-olympiad": { score: 25.0, verified: true },
      // Video
      "videommmu": { score: 76.3, verified: true },
      "mmvu": { score: 67.8, verified: true },
      "videosimpleqa": { score: 69.0, verified: true },
      "videoreasonbench": { score: 52.8, verified: true },
      "morse-500": { score: 64.2, verified: true },
      "videoholmes": { score: 32.2, verified: true },
      "minerva": { score: 63.8, verified: true },
      "tvbench": { score: 61.8, verified: true },
      "contphy": { score: 54.9, verified: true },
      "tempcompass": { score: 86.9, verified: true },
      "egotempo": { score: 67.4, verified: true },
      "motionbench": { score: 83.7, verified: true },
      "tomato": { score: 71.8, verified: true },
      "videomme": { score: 87.8, verified: true },
      "cgbench": { score: 62.4, verified: true },
      "longvideobench": { score: 77.4, verified: true },
      "videoeval-pro": { score: 45.9, verified: true },
      "lvbench": { score: 73.0, verified: true },
      "crossvid": { score: 57.7, verified: true },
      "ovbench": { score: 77.5, verified: true },
      "livesports-3k": { score: 72.6, verified: true },
      "ovobench": { score: 79.0, verified: true },
      "odvbench": { score: 72.5, verified: true },
      "vispeak": { score: 78.5, verified: true }
    }
  },
  {
    id: "deepseek-prover-v2",
    name: "DeepSeek Prover V2",
    provider: "DeepSeek",
    releaseDate: "2026-01-10",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: true,
    specs: {
      contextWindow: 128000,
      parameters: "Math Specialized",
      pricing: { input: 0.10, output: 0.30 }
    },
    scores: {
      "mmlu": { score: 88.5, verified: false, sourceId: "deepseek-news" },
      "gpqa-diamond": { score: 71.5, verified: false, sourceId: "deepseek-news" },
      "math": { score: 97.3, verified: false, sourceId: "deepseek-news" },
      "human-eval": { score: 91.6, verified: false, sourceId: "deepseek-news" },
      "mmmu": { score: 74.0, verified: false, sourceId: "deepseek-news" },
      "lmarena-elo": { score: 1421, verified: false, sourceId: "lmarena" },
      "putnam-200": { score: 3.5, verified: true }
    }
  },
  {
    id: "seed-1-5-prover",
    name: "Seed 1.5 Prover",
    provider: "ByteDance",
    releaseDate: "2025-12-05",
    capabilities: ["text", "code", "reasoning"],
    isOpenSource: false,
    specs: {
      contextWindow: 64000,
      parameters: "Math Specialized",
      pricing: { input: 0.20, output: 0.80 }
    },
    scores: {
      "putnam-200": { score: 26.5, verified: true }
    }
  },
  {
    id: "seed-1-8",
    name: "Seed 1.8",
    provider: "ByteDance",
    releaseDate: "2025-11-20",
    capabilities: ["text", "code", "vision", "video"],
    isOpenSource: false,
    specs: {
      contextWindow: 128000,
      parameters: "Multimodal Base",
      pricing: { input: 0.50, output: 2.00 }
    },
    scores: {
      "mathvista": { score: 87.7, verified: true },
      "mathvision": { score: 73.8, verified: true },
      "dynamath": { score: 53.6, verified: true },
      "mathkangaroo": { score: 79.8, verified: true },
      "mathcanvas": { score: 53.2, verified: true },
      "mmmu-vision": { score: 83.4, verified: true },
      "mmmu-pro": { score: 73.2, verified: true },
      "emma": { score: 58.3, verified: true },
      "sfe": { score: 49.9, verified: true },
      "hipho": { score: 65.9, verified: true },
      "xlrs-bench": { score: 49.9, verified: true },
      "phyx": { score: 65.9, verified: true },
      "logicvista": { score: 78.3, verified: true },
      "vpct": { score: 73.0, verified: true },
      "zerobench-main": { score: 37.7, verified: true },
      "zerobench-sub": { score: 42.2, verified: true },
      "arc-agi-1-image": { score: 26.1, verified: true },
      "arc-agi-2-image": { score: 29.8, verified: true },
      "visulogic": { score: 47.3, verified: true },
      "vlms-are-biased": { score: 62.0, verified: true },
      "vlms-are-blind": { score: 78.0, verified: true },
      "visfactor": { score: 30.2, verified: true },
      "realworldqa": { score: 81.6, verified: true },
      "babyvision": { score: 63.9, verified: true },
      "simplevqa": { score: 79.9, verified: true },
      "hallusionbench": { score: 65.4, verified: true },
      "mme-cc": { score: 76.5, verified: true },
      "mmstar": { score: 51.1, verified: true },
      "muirbench": { score: 40.4, verified: true },
      "mtvqa": { score: 74.6, verified: true },
      "worldvqa": { score: 49.9, verified: true },
      "vibeeval": { score: 74.6, verified: true },
      "viverbench": { score: 80.0, verified: true },
      "countbench": { score: 96.3, verified: true },
      "fsc-147": { score: 13.6, verified: true },
      "point-bench": { score: 76.5, verified: true },
      "blink": { score: 74.3, verified: true },
      "mmsibench": { score: 25.5, verified: true },
      "treebench": { score: 57.3, verified: true },
      "refspatialbench": { score: 78.9, verified: true },
      "da-2k": { score: 70.5, verified: true },
      "all-angles": { score: 71.5, verified: true },
      "erqa": { score: 58.8, verified: true },
      "chartqapro": { score: 63.0, verified: true },
      "ocrbench-v2": { score: 88.0, verified: true },
      "omnidocbench": { score: 52.6, verified: true },
      "charxiv-dq": { score: 0.153, verified: true },
      "charxiv-rq": { score: 71.4, verified: true },
      "dude": { score: 69.4, verified: true },
      "mmlongbench": { score: 71.3, verified: true },
      "mmlongbench-doc": { score: 72.0, verified: true },
      "frontiersci-olympiad": { score: 73.0, verified: true },
      // Video
      "videommmu": { score: 82.7, verified: true },
      "mmvu": { score: 73.1, verified: true },
      "videosimpleqa": { score: 69.0, verified: true },
      "videoreasonbench": { score: 52.8, verified: true },
      "morse-500": { score: 64.2, verified: true },
      "videoholmes": { score: 32.2, verified: true },
      "minerva": { score: 58.6, verified: true },
      "tvbench": { score: 71.5, verified: true },
      "contphy": { score: 54.9, verified: true },
      "tempcompass": { score: 86.9, verified: true },
      "egotempo": { score: 67.4, verified: true },
      "motionbench": { score: 83.7, verified: true },
      "tomato": { score: 67.0, verified: true },
      "videomme": { score: 87.8, verified: true },
      "cgbench": { score: 62.4, verified: true },
      "longvideobench": { score: 77.4, verified: true },
      "videoeval-pro": { score: 45.9, verified: true },
      "lvbench": { score: 73.0, verified: true },
      "crossvid": { score: 57.3, verified: true },
      "ovbench": { score: 65.1, verified: true },
      "livesports-3k": { score: 72.6, verified: true },
      "ovobench": { score: 63.5, verified: true },
      "odvbench": { score: 65.1, verified: true },
      "vispeak": { score: 77.5, verified: true }
    }
  }
];

const modelScoreOverrides: Record<string, Model["scores"]> =
  typeof aaScoreOverrides === "undefined" ? {} : aaScoreOverrides;
const metadataOverrides: Record<string, ModelMetadataOverride> =
  typeof modelMetadataOverrides === "undefined" ? {} : modelMetadataOverrides;

const withMetadata = applyMetadataOverrides(rawModels, metadataOverrides);
const withOverrides = applyScoreOverrides(withMetadata, modelScoreOverrides);

export const models: Model[] = addScoreProvenance(withOverrides);
