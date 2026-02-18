import { Model } from "@/types";

export interface ModelMetadataOverride {
  capabilities?: Model["capabilities"];
  providers?: string[];
  apiSupport?: Model["apiSupport"];
  modalities?: Model["modalities"];
  pricingDimensions?: Model["pricingDimensions"];
  trainingCutoff?: string;
  metadataSourceId?: string;
  metadataSourceUrl?: string;
  metadataAsOfDate?: string;
  externalModelId?: string;
  modelCardUrl?: string;
  modelUrl?: string;
  specs?: {
    contextWindow?: number;
    pricing?: {
      input?: number;
      output?: number;
      cacheInput?: number;
      cacheOutput?: number;
    };
  };
}

export const modelMetadataOverrides: Record<string, ModelMetadataOverride> = {
  "o1": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": false,
      "temperature": false,
      "tools": true,
      "topP": false,
      "vision": true
    },
    "metadataAsOfDate": "2026-02-17",
    "metadataSourceId": "openai-docs",
    "modelUrl": "https://platform.openai.com/docs/models/o1",
    "trainingCutoff": "2023-10"
  },
  "o1-mini": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": false,
      "temperature": false,
      "tools": true,
      "topP": false,
      "vision": false
    },
    "metadataAsOfDate": "2026-02-17",
    "metadataSourceId": "openai-docs",
    "modelUrl": "https://platform.openai.com/docs/models/o1",
    "trainingCutoff": "2023-10"
  },
  "claude-3-5-haiku": {
    "apiSupport": {
      "jsonMode": true,
      "stream": true,
      "systemPrompt": true,
      "tools": true,
      "vision": false
    },
    "metadataAsOfDate": "2026-02-17",
    "metadataSourceId": "anthropic-docs",
    "modelUrl": "https://www.anthropic.com/claude/haiku",
    "trainingCutoff": "2024-07"
  },
  "llama-3-3-70b": {
    "metadataAsOfDate": "2026-02-17",
    "metadataSourceId": "meta-docs",
    "modelUrl": "https://llama.meta.com/",
    "trainingCutoff": "2023-12"
  },
  "mistral-large-2": {
    "metadataAsOfDate": "2026-02-17",
    "metadataSourceId": "mistral-docs",
    "modelUrl": "https://mistral.ai/news/mistral-large-2407/",
    "trainingCutoff": "2024-07"
  },
  "qwen-2-5-max": {
    "metadataAsOfDate": "2026-02-17",
    "metadataSourceId": "qwen-docs",
    "modelUrl": "https://qwenlm.github.io/blog/qwen2.5-max/",
    "trainingCutoff": "2024-09"
  },
  "qwen-3-5-397b-a17b": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "metadataAsOfDate": "2026-02-17",
    "metadataSourceId": "qwen-ai-blog",
    "modelCardUrl": "https://qwen.ai/blog?id=qwen3.5",
    "modelUrl": "https://huggingface.co/Qwen/Qwen3.5-397B-A17B",
    "trainingCutoff": "2026-01"
  },
  "amazon-nova-pro": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "externalModelId": "nova-pro",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelCardUrl": "https://assets.amazon.science/96/7d/0d3e59514abf8fdcfafcdc574300/nova-tech-report-20250317-0810.pdf",
    "modelUrl": "https://docs.aws.amazon.com/nova/",
    "trainingCutoff": "2024-10"
  },
  "claude-3-7-sonnet": {
    "apiSupport": {
      "jsonMode": true,
      "stream": true,
      "systemPrompt": true,
      "tools": true,
      "vision": true
    },
    "externalModelId": "claude-3-7-sonnet-20250219",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://www.anthropic.com/claude/sonnet",
    "specs": {
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "trainingCutoff": "2024-02"
  },
  "claude-opus-4-5": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelCardUrl": "https://www.anthropic.com/news/claude-opus-4-5",
    "modelUrl": "https://www.anthropic.com/claude/opus",
    "specs": {
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25,
        "input": 5.0,
        "output": 25.0
      }
    },
    "trainingCutoff": "2025-09"
  },
  "claude-opus-4-5-high": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "externalModelId": "claude-opus-4-5",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://www.anthropic.com/claude/opus",
    "specs": {
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25
      }
    },
    "trainingCutoff": "2025-09"
  },
  "claude-opus-4-6": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelCardUrl": "https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf",
    "modelUrl": "https://www.anthropic.com/claude/opus",
    "specs": {
      "contextWindow": 1000000,
      "pricing": {
        "cacheInput": 1.5,
        "cacheOutput": 18.75
      }
    },
    "trainingCutoff": "2026-02"
  },
  "claude-sonnet-4-5": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelCardUrl": "https://www.anthropic.com/news/claude-sonnet-4-5",
    "modelUrl": "https://www.anthropic.com/claude/sonnet",
    "specs": {
      "contextWindow": 1000000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "trainingCutoff": "2025-07"
  },
  "claude-sonnet-4-5-high": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "externalModelId": "claude-sonnet-4-5",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://www.anthropic.com/claude/sonnet",
    "specs": {
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "trainingCutoff": "2025-07"
  },
  "deepseek-r1": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": false
    },
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelCardUrl": "https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf",
    "modelUrl": "https://github.com/deepseek-ai/DeepSeek-R1",
    "specs": {
      "pricing": {
        "cacheInput": 0
      }
    },
    "trainingCutoff": "2024-12"
  },
  "deepseek-r1-distill-llama-70b": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": false
    },
    "externalModelId": "deepseek-r1",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelCardUrl": "https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf",
    "modelUrl": "https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Llama-70B",
    "specs": {
      "contextWindow": 131072,
      "pricing": {
        "cacheInput": 0,
        "input": 0.03,
        "output": 0.11
      }
    },
    "trainingCutoff": "2024-12"
  },
  "deepseek-r1-distill-qwen-32b": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": false
    },
    "externalModelId": "deepseek-r1",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelCardUrl": "https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf",
    "modelUrl": "https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-32B",
    "specs": {
      "pricing": {
        "cacheInput": 0
      }
    },
    "trainingCutoff": "2024-12"
  },
  "deepseek-r1-zero": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": false
    },
    "externalModelId": "deepseek-r1",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelCardUrl": "https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf",
    "modelUrl": "https://huggingface.co/deepseek-ai/DeepSeek-R1-Zero",
    "specs": {
      "pricing": {
        "cacheInput": 0
      }
    },
    "trainingCutoff": "2024-12"
  },
  "deepseek-v3": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": false
    },
    "externalModelId": "deepseek-v3.2",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelCardUrl": "https://arxiv.org/pdf/2412.19437.pdf",
    "modelUrl": "https://api-docs.deepseek.com/",
    "specs": {
      "pricing": {
        "cacheInput": 0.028
      }
    },
    "trainingCutoff": "2025-10"
  },
  "deepseek-v3-2-speciale": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": false
    },
    "externalModelId": "deepseek-v3.2",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelCardUrl": "https://arxiv.org/pdf/2412.19437.pdf",
    "modelUrl": "https://chat.deepseek.com",
    "specs": {
      "pricing": {
        "cacheInput": 0.028
      }
    },
    "trainingCutoff": "2025-10"
  },
  "gemini-2-0-flash": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "externalModelId": "gemini-2.0-flash",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://deepmind.google/models/gemini/flash/",
    "specs": {
      "pricing": {
        "cacheInput": 0.075,
        "cacheOutput": 0.75
      }
    },
    "trainingCutoff": "2025-01"
  },
  "gemini-2-5-pro": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "externalModelId": "gemini-2.5-pro",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://deepmind.google/models/gemini/pro/",
    "specs": {
      "pricing": {
        "cacheInput": 0.31,
        "cacheOutput": 2.5
      }
    },
    "trainingCutoff": "2025-01"
  },
  "gemini-3-deep-think": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "externalModelId": "gemini-3-pro",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://deepmind.google/models/gemini/pro/",
    "specs": {
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 3
      }
    },
    "trainingCutoff": "2025-11"
  },
  "gemini-3-flash": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "externalModelId": "gemini-3-flash-preview",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://deepmind.google/models/gemini/flash/",
    "specs": {
      "pricing": {
        "cacheInput": 0.125,
        "cacheOutput": 0.75
      }
    },
    "trainingCutoff": "2025-11"
  },
  "gemini-3-flash-high": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "externalModelId": "gemini-3-flash-preview",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://deepmind.google/models/gemini/flash/",
    "specs": {
      "pricing": {
        "cacheInput": 0.125,
        "cacheOutput": 0.75
      }
    },
    "trainingCutoff": "2025-11"
  },
  "gemini-3-pro": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelCardUrl": "https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-Pro-Model-Card.pdf",
    "modelUrl": "https://deepmind.google/models/gemini/pro/",
    "specs": {
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 3
      }
    },
    "trainingCutoff": "2025-11"
  },
  "gemini-3-pro-high": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "externalModelId": "gemini-3-pro",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelCardUrl": "https://deepmind.google/models/model-cards/gemini-3-pro",
    "modelUrl": "https://deepmind.google/models/gemini/pro/",
    "specs": {
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 3
      }
    },
    "trainingCutoff": "2025-11"
  },
  "command-a": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelCardUrl": "https://cohere.com/research/papers/command-a-technical-report.pdf",
    "modelUrl": "https://docs.cohere.com/docs/command-a",
    "trainingCutoff": "2025-03"
  },
  "gpt-4o": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://platform.openai.com/docs/models/gpt-4o",
    "providers": [
      "OpenAI",
      "GitHub"
    ],
    "specs": {
      "pricing": {
        "cacheInput": 1.25,
        "input": 2.5,
        "output": 10.0
      }
    },
    "trainingCutoff": "2023-10"
  },
  "gpt-5-1": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "externalModelId": "gpt-5.1",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://developers.openai.com/api/docs/models/gpt-5",
    "specs": {
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "trainingCutoff": "2025-09"
  },
  "gpt-5-2-high": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "externalModelId": "gpt-5.2",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://developers.openai.com/api/docs/models/gpt-5.2",
    "specs": {
      "pricing": {
        "cacheInput": 0.175
      }
    },
    "trainingCutoff": "2025-08"
  },
  "gpt-5-2-pro": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": false,
      "tools": true,
      "topP": false,
      "vision": true
    },
    "externalModelId": "gpt-5.2-pro",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://developers.openai.com/api/docs/models/gpt-5.2",
    "specs": {
      "contextWindow": 400000
    },
    "trainingCutoff": "2025-08"
  },
  "gpt-5-2-xhigh": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "externalModelId": "gpt-5.2",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://developers.openai.com/api/docs/models/gpt-5.2",
    "specs": {
      "pricing": {
        "cacheInput": 0.175
      }
    },
    "trainingCutoff": "2025-08"
  },
  "gpt-5-3-codex": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": false,
      "tools": true,
      "topP": false,
      "vision": true
    },
    "capabilities": [
      "text",
      "code",
      "reasoning",
      "vision"
    ],
    "externalModelId": "gpt-5-codex",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelCardUrl": "https://openai.com/index/gpt-5-3-codex-system-card/",
    "modelUrl": "https://openai.com/index/introducing-gpt-5-3-codex/",
    "specs": {
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "trainingCutoff": "2025-09"
  },
  "gpt-5-mini-high": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": false,
      "tools": true,
      "topP": false,
      "vision": true
    },
    "capabilities": [
      "text",
      "code",
      "reasoning",
      "vision"
    ],
    "externalModelId": "gpt-5-mini",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelCardUrl": "https://openai.com/index/gpt-5-system-card/",
    "modelUrl": "https://platform.openai.com/docs/models/gpt-5-mini",
    "specs": {
      "contextWindow": 400000,
      "pricing": {
        "cacheInput": 0.125,
        "input": 1.25
      }
    },
    "trainingCutoff": "2024-05"
  },
  "gpt-oss-120b": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": false
    },
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelCardUrl": "https://openai.com/index/gpt-oss-model-card/",
    "modelUrl": "https://openai.com/open-models/",
    "specs": {
      "contextWindow": 131072,
      "pricing": {
        "input": 0.039,
        "output": 0.19
      }
    },
    "trainingCutoff": "2024-07"
  },
  "grok-3": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://docs.x.ai/developers/models/",
    "specs": {
      "contextWindow": 131072,
      "pricing": {
        "input": 3.0
      }
    },
    "trainingCutoff": "2024-11"
  },
  "grok-4": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelCardUrl": "https://data.x.ai/2025-08-20-grok-4-model-card.pdf",
    "modelUrl": "https://docs.x.ai/developers/models/grok-4-0709",
    "trainingCutoff": "2024-11"
  },
  "grok-4-1-fast": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "capabilities": [
      "text",
      "code",
      "vision"
    ],
    "externalModelId": "grok-4-1-fast-non-reasoning",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelCardUrl": "https://data.x.ai/2025-08-20-grok-4-model-card.pdf",
    "modelUrl": "https://docs.x.ai/developers/models/",
    "trainingCutoff": "2025-09"
  },
  "llama-4-behemoth": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "externalModelId": "llama-4",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://huggingface.co/meta-llama/Llama-4-Scout-17B-16E-Instruct",
    "providers": [
      "Meta",
      "Ollama"
    ],
    "trainingCutoff": "2025-03"
  },
  "llama-4-maverick": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "externalModelId": "llama-4",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://huggingface.co/meta-llama/Llama-4-Scout-17B-16E-Instruct",
    "providers": [
      "Meta",
      "Ollama"
    ],
    "specs": {
      "contextWindow": 1048576,
      "pricing": {
        "input": 0.15,
        "output": 0.6
      }
    },
    "trainingCutoff": "2025-03"
  },
  "llama-4-scout": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "capabilities": [
      "text",
      "code",
      "vision"
    ],
    "externalModelId": "llama-4",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://huggingface.co/meta-llama/Llama-4-Scout-17B-16E-Instruct",
    "providers": [
      "Meta",
      "Ollama"
    ],
    "specs": {
      "contextWindow": 327680
    },
    "trainingCutoff": "2025-03"
  },
  "ministral-3b": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": false
    },
    "externalModelId": "ministral-3b-latest",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelCardUrl": "https://docs.mistral.ai/models/ministral-3b-24-1",
    "modelUrl": "https://mistral.ai/news/ministral-8b-ministral-3b/",
    "trainingCutoff": "2024-10"
  },
  "o1-preview": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": false,
      "temperature": false,
      "tools": true,
      "topP": false,
      "vision": true
    },
    "capabilities": [
      "text",
      "code",
      "reasoning",
      "vision"
    ],
    "externalModelId": "o1",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://platform.openai.com/docs/models/o1",
    "specs": {
      "contextWindow": 200000,
      "pricing": {
        "cacheInput": 0.5,
        "input": 20.0,
        "output": 80.0
      }
    },
    "trainingCutoff": "2023-10"
  },
  "o3": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": false,
      "temperature": false,
      "tools": true,
      "topP": false,
      "vision": true
    },
    "capabilities": [
      "text",
      "code",
      "reasoning",
      "vision"
    ],
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://platform.openai.com/docs/models/o3",
    "specs": {
      "pricing": {
        "cacheInput": 0.5
      }
    },
    "trainingCutoff": "2024-10"
  },
  "o3-pro": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": false,
      "temperature": false,
      "tools": true,
      "topP": false,
      "vision": true
    },
    "capabilities": [
      "text",
      "code",
      "reasoning",
      "vision"
    ],
    "externalModelId": "o3",
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://platform.openai.com/docs/models/o3-pro",
    "specs": {
      "pricing": {
        "cacheInput": 0.5
      }
    },
    "trainingCutoff": "2024-10"
  },
  "o4-mini": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": false,
      "temperature": false,
      "tools": true,
      "topP": false,
      "vision": true
    },
    "capabilities": [
      "text",
      "code",
      "reasoning",
      "vision"
    ],
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://platform.openai.com/docs/models/o4-mini",
    "specs": {
      "contextWindow": 200000,
      "pricing": {
        "cacheInput": 0.55
      }
    },
    "trainingCutoff": "2024-10"
  },
  "phi-4": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": false,
      "topP": true,
      "vision": false
    },
    "metadataAsOfDate": "2026-02-07",
    "metadataSourceId": "yamanahlawat-llm-registry",
    "metadataSourceUrl": "https://github.com/yamanahlawat/llm-registry",
    "modelUrl": "https://huggingface.co/microsoft/phi-4",
    "providers": [
      "Microsoft",
      "GitHub"
    ],
    "specs": {
      "pricing": {
        "cacheInput": 0
      }
    },
    "trainingCutoff": "2024-06"
  },
  "seed-2-0-lite": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "seed-model-card",
    "modelCardUrl": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
    "modelUrl": "https://seed.bytedance.com/en/seed2",
    "trainingCutoff": "2025-02"
  },
  "seed-2-0-mini": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "seed-model-card",
    "modelCardUrl": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
    "modelUrl": "https://seed.bytedance.com/en/seed2",
    "trainingCutoff": "2025-02"
  },
  "seed-2-0-pro": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "seed-model-card",
    "modelCardUrl": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
    "modelUrl": "https://seed.bytedance.com/en/seed2",
    "trainingCutoff": "2025-02"
  },
  "minimax-m2-5": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "minimax-docs",
    "modelCardUrl": "https://filecdn.minimax.chat/_Arxiv_MiniMax_01_Report.pdf",
    "modelUrl": "https://minimax-ai.chat/models/minimax-m2/",
    "specs": {
      "pricing": {
        "output": 1.2
      }
    },
    "trainingCutoff": "2025-06"
  },
  "qwen3-vl-235b-a22b": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "metadataAsOfDate": "2026-02-17",
    "metadataSourceId": "qwen-docs",
    "modelUrl": "https://qwen.readthedocs.io/en/v3.0",
    "trainingCutoff": "2025-04"
  },
  "qwen3-vl-235b-a22b-thinking": {
    "apiSupport": {
      "jsonMode": true,
      "maxTokens": true,
      "stream": true,
      "systemPrompt": true,
      "temperature": true,
      "tools": true,
      "topP": true,
      "vision": true
    },
    "metadataAsOfDate": "2026-02-17",
    "metadataSourceId": "qwen-docs",
    "modelUrl": "https://qwen.readthedocs.io/en/v3.0",
    "trainingCutoff": "2025-04"
  },
  "gpt-4-5": {
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "openai-docs",
    "modelCardUrl": "https://openai.com/index/gpt-4-5-system-card/",
    "modelUrl": "https://openai.com/index/gpt-4-5/",
    "trainingCutoff": "2024-10"
  },
  "claude-3-5-sonnet": {
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "anthropic-docs",
    "modelCardUrl": "https://www.anthropic.com/news/claude-3-5-sonnet",
    "modelUrl": "https://www.anthropic.com/claude/sonnet",
    "trainingCutoff": "2024-04"
  },
  "gemini-1-5-pro": {
    "metadataAsOfDate": "2026-02-18",
    "metadataSourceId": "google-docs",
    "modelCardUrl": "https://arxiv.org/pdf/2403.05530",
    "modelUrl": "https://deepmind.google/technologies/gemini/pro/",
    "trainingCutoff": "2023-11"
  },
  "llama-3-1-405b": {
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "meta-docs",
    "modelCardUrl": "https://ai.meta.com/static-resource/llama-3-1-405b",
    "modelUrl": "https://llama.meta.com/",
    "trainingCutoff": "2023-12"
  },
  "deepseek-v3-1-terminus": {
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "deepseek-docs",
    "modelCardUrl": "https://github.com/deepseek-ai/DeepSeek-V3/blob/main/DeepSeek_V3.pdf",
    "modelUrl": "https://github.com/deepseek-ai/DeepSeek-V3",
    "trainingCutoff": "2025-10"
  },
  "command-r-plus-08-2024": {
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "cohere-docs",
    "modelCardUrl": "https://cohere.com/blog/command-r-plus-microsoft-azure",
    "modelUrl": "https://docs.cohere.com/docs/command-r-plus",
    "specs": {
      "pricing": {
        "input": 2.5,
        "output": 10.0
      }
    },
    "trainingCutoff": "2024-08"
  },
  "jamba-2-large": {
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "ai21-docs",
    "modelCardUrl": "https://arxiv.org/pdf/2403.19887.pdf",
    "modelUrl": "https://www.ai21.com/blog/jamba-2-large-and-mini",
    "trainingCutoff": "2024-03"
  },
  "kimi-k2-5": {
    "metadataAsOfDate": "2026-02-18",
    "metadataSourceId": "moonshot-docs",
    "modelCardUrl": "https://arxiv.org/pdf/2602.02276",
    "modelUrl": "https://www.moonshot.ai/",
    "specs": {
      "pricing": {
        "input": 0.23
      }
    },
    "trainingCutoff": "2024-10"
  },
  "glm-5": {
    "metadataAsOfDate": "2026-02-18",
    "metadataSourceId": "z-ai-blog",
    "modelCardUrl": "https://arxiv.org/pdf/2602.15763",
    "modelUrl": "https://z.ai/blog/glm-5",
    "trainingCutoff": "2024-06"
  },
  "starcoder2-15b": {
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "bigcode-docs",
    "modelCardUrl": "https://arxiv.org/pdf/2402.19173.pdf",
    "modelUrl": "https://huggingface.co/bigcode/starcoder2-15b",
    "trainingCutoff": "2024-02"
  },
  "dbrx-instruct": {
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "databricks-docs",
    "modelCardUrl": "https://github.com/databricks/dbrx",
    "modelUrl": "https://www.databricks.com/blog/introducing-dbrx-new-state-art-open-llm",
    "trainingCutoff": "2023-12"
  },
  "internlm3-8b": {
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "internlm-docs",
    "modelCardUrl": "https://arxiv.org/pdf/2501.09030.pdf",
    "modelUrl": "https://github.com/InternLM/InternLM",
    "trainingCutoff": "2025-01"
  },
  "yi-1-5-34b": {
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "01ai-docs",
    "modelCardUrl": "https://arxiv.org/pdf/2403.04652.pdf",
    "modelUrl": "https://huggingface.co/01-ai/Yi-1.5-34B",
    "trainingCutoff": "2024-03"
  },
  "baichuan-m3": {
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "baichuan-docs",
    "modelCardUrl": "https://baichuan-ai.com/Baichuan-M3-Technical-Report.pdf",
    "modelUrl": "https://www.baichuan-ai.com/",
    "trainingCutoff": "2024-03"
  },
  "snowflake-arctic": {
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "snowflake-docs",
    "modelCardUrl": "https://arxiv.org/pdf/2405.15593.pdf",
    "modelUrl": "https://www.snowflake.com/en/data-cloud/arctic/",
    "trainingCutoff": "2024-05"
  },
  "deepseek-prover-v2": {
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "deepseek-docs",
    "modelCardUrl": "https://arxiv.org/pdf/2405.14331.pdf",
    "modelUrl": "https://github.com/deepseek-ai/DeepSeek-Prover-V2",
    "trainingCutoff": "2024-05"
  },
  "seed-1-5-prover": {
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "seed-model-card",
    "modelCardUrl": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
    "modelUrl": "https://seed.bytedance.com/",
    "trainingCutoff": "2024-05"
  },
  "seed-1-8": {
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "seed-model-card",
    "modelCardUrl": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
    "modelUrl": "https://seed.bytedance.com/",
    "trainingCutoff": "2024-08"
  },
  "nano-banana-pro": {
    "metadataAsOfDate": "2026-02-16",
    "metadataSourceId": "google-docs",
    "modelCardUrl": "https://storage.googleapis.com/deepmind-media/gemini/gemini_1_5_report.pdf",
    "modelUrl": "https://deepmind.google/technologies/gemini/",
    "trainingCutoff": "2024-01"
  }
};
