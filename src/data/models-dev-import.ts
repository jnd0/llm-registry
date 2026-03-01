// Auto-generated from models.dev API
// Generated: 2026-03-01T15:38:13.742Z
// Source: https://models.dev
// License: MIT
// 
// Note: IDs are normalized to match internal llm-registry conventions.
// Use src/data/models-dev-id-map.json for ID mapping reference.
//
// This file is auto-generated. Do not edit manually.
// Run: bun run import:models-dev

import { ModelMetadataOverride } from "@/data/model-metadata-overrides";

export const modelsDevMetadata: Record<string, ModelMetadataOverride> = {
  "nvidia-llama-3-3-70b-instruct-fp8": {
    "family": "llama",
    "lastUpdated": "2024-12-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "microsoft-phi-4-multimodal-instruct": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-12-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "intfloat-multilingual-e5-large-instruct": {
    "family": "text-embedding",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04-27",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1024
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "moonshotai-kimi-k2-5": {
    "family": "kimi",
    "lastUpdated": "2026-01-26",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kblab-kb-whisper-large": {
    "family": "whisper",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04-27",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4800
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-30b-a3b-instruct-2507-fp8": {
    "family": "qwen",
    "lastUpdated": "2025-07-30",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-embedding-8b": {
    "family": "qwen",
    "trainingCutoff": "2024-12",
    "lastUpdated": "2025-01-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-vl-30b-a3b-instruct": {
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-voxtral-small-24b-2507": {
    "lastUpdated": "2025-07-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 6400
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-devstral-small-2-24b-instruct-2512": {
    "family": "devstral",
    "lastUpdated": "2025-12-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-magistral-small-2509": {
    "family": "magistral-small",
    "lastUpdated": "2025-06-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-oss-120b": {
    "family": "gpt",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-12-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-whisper-large-v3": {
    "family": "whisper",
    "trainingCutoff": "2023-09",
    "lastUpdated": "2025-09-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "glm-5": {
    "family": "glm",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2026-02-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "glm-4-5-air": {
    "family": "glm-air",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 98304,
      "pricing": {
        "cacheInput": 0,
        "cacheOutput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "glm-4-5": {
    "family": "glm",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 98304,
      "pricing": {
        "cacheInput": 0,
        "cacheOutput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "glm-4-5-flash": {
    "family": "glm-flash",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 98304,
      "pricing": {
        "cacheInput": 0,
        "cacheOutput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "glm-4-7-flash": {
    "family": "glm-flash",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2026-01-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0,
        "cacheOutput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "glm-4-6": {
    "family": "glm",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2024-07-18",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "glm-4-7": {
    "family": "glm",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-12-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "glm-4-5v": {
    "family": "glm",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-08-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "glm-4-6v": {
    "family": "glm",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-12-08",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "xiaomi-mimo-v2-flash-free": {
    "trainingCutoff": "2025-01-01",
    "lastUpdated": "2025-12-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "xiaomi-mimo-v2-flash": {
    "lastUpdated": "2025-12-14",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 52429,
      "pricing": {
        "cacheInput": 0.045
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kuaishou-kat-coder-pro-v1-free": {
    "trainingCutoff": "2025-01-01",
    "lastUpdated": "2025-10-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kuaishou-kat-coder-pro-v1": {
    "trainingCutoff": "2025-01-01",
    "lastUpdated": "2025-10-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.06
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "stepfun-step-3-5-flash-free": {
    "trainingCutoff": "2025-01-01",
    "lastUpdated": "2026-02-02",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "stepfun-step-3-5-flash": {
    "lastUpdated": "2026-01-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 256000,
      "pricing": {
        "cacheInput": 0.02
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "stepfun-step-3": {
    "trainingCutoff": "2025-01-01",
    "lastUpdated": "2025-07-31",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "inclusionai-ling-1t": {
    "trainingCutoff": "2025-01-01",
    "lastUpdated": "2025-10-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.11
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "inclusionai-ring-1t": {
    "trainingCutoff": "2025-01-01",
    "lastUpdated": "2025-10-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.11
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "volcengine-doubao-seed-1-8": {
    "trainingCutoff": "2025-01-01",
    "lastUpdated": "2025-12-18",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.02,
        "cacheOutput": 0.0024
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "volcengine-doubao-seed-2-0-pro": {
    "trainingCutoff": "2026-02-14",
    "lastUpdated": "2026-02-14",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.09,
        "cacheOutput": 0.0024
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "volcengine-doubao-seed-2-0-mini": {
    "trainingCutoff": "2026-02-14",
    "lastUpdated": "2026-02-14",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.01,
        "cacheOutput": 0.0024
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "volcengine-doubao-seed-code": {
    "trainingCutoff": "2025-01-01",
    "lastUpdated": "2025-11-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.03
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "volcengine-doubao-seed-2-0-lite": {
    "trainingCutoff": "2026-02-14",
    "lastUpdated": "2026-02-14",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.02,
        "cacheOutput": 0.0024
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-v3-2": {
    "lastUpdated": "2025-12-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-chat": {
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 163840,
      "pricing": {
        "cacheInput": 0.15
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-v3-2-exp": {
    "lastUpdated": "2025-09-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "moonshotai-kimi-k2-0905": {
    "lastUpdated": "2025-09-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215,
      "pricing": {
        "cacheInput": 0.15
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "moonshotai-kimi-k2-thinking": {
    "family": "kimi-thinking",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-12-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "moonshotai-kimi-k2-thinking-turbo": {
    "family": "kimi-thinking",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-11-06",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262114,
      "pricing": {
        "cacheInput": 0.15
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "baidu-ernie-5-0-thinking-preview": {
    "trainingCutoff": "2025-01-01",
    "lastUpdated": "2026-01-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-2-5-flash": {
    "lastUpdated": "2025-07-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65535,
      "pricing": {
        "cacheInput": 0.03,
        "cacheOutput": 0.083333
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-3-flash-preview": {
    "lastUpdated": "2025-12-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65535,
      "pricing": {
        "cacheInput": 0.05,
        "cacheOutput": 0.083333
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-2-5-flash-lite": {
    "lastUpdated": "2025-06-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65535,
      "pricing": {
        "cacheInput": 0.01,
        "cacheOutput": 0.083333
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-3-pro-preview": {
    "lastUpdated": "2025-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.2,
        "cacheOutput": 0.375
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-2-5-pro": {
    "lastUpdated": "2025-06-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.125,
        "cacheOutput": 0.375
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "z-ai-glm-5": {
    "lastUpdated": "2026-02-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "z-ai-glm-4-7-flashx": {
    "trainingCutoff": "2025-01-01",
    "lastUpdated": "2026-01-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.01
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "z-ai-glm-4-5-air": {
    "lastUpdated": "2025-07-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 98304,
      "pricing": {
        "cacheInput": 0.025
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "z-ai-glm-4-5": {
    "lastUpdated": "2025-07-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.175
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "z-ai-glm-4-6v-flash-free": {
    "trainingCutoff": "2025-01-01",
    "lastUpdated": "2025-12-08",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "z-ai-glm-4-6": {
    "lastUpdated": "2025-09-30",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.175
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "z-ai-glm-4-7": {
    "lastUpdated": "2025-12-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65535,
      "pricing": {
        "cacheInput": 0.2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "z-ai-glm-4-7-flash-free": {
    "trainingCutoff": "2025-01-01",
    "lastUpdated": "2026-01-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "z-ai-glm-4-6v-flash": {
    "trainingCutoff": "2025-01-01",
    "lastUpdated": "2025-12-08",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.0043
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "z-ai-glm-4-6v": {
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-max": {
    "lastUpdated": "2025-09-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.24
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-coder-plus": {
    "lastUpdated": "2025-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "x-ai-grok-code-fast-1": {
    "lastUpdated": "2025-08-26",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 10000,
      "pricing": {
        "cacheInput": 0.02
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "x-ai-grok-4-fast": {
    "lastUpdated": "2025-08-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 30000,
      "pricing": {
        "cacheInput": 0.05
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "x-ai-grok-4": {
    "lastUpdated": "2025-07-09",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 51200,
      "pricing": {
        "cacheInput": 0.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "x-ai-grok-4-1-fast-non-reasoning": {
    "lastUpdated": "2025-12-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2000000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "x-ai-grok-4-1-fast": {
    "lastUpdated": "2025-11-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 30000,
      "pricing": {
        "cacheInput": 0.05
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5-codex": {
    "lastUpdated": "2025-09-15",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5-2-codex": {
    "lastUpdated": "2026-01-14",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.175
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5-1": {
    "lastUpdated": "2025-11-13",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5-1-chat": {
    "lastUpdated": "2025-11-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5-1-codex-mini": {
    "lastUpdated": "2025-11-13",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 100000,
      "pricing": {
        "cacheInput": 0.025
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5-2": {
    "lastUpdated": "2025-12-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.175
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5": {
    "lastUpdated": "2025-08-07",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5-1-codex": {
    "lastUpdated": "2025-11-13",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimax-minimax-m2-5-lightning": {
    "trainingCutoff": "2025-01-01",
    "lastUpdated": "2026-02-13",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.06,
        "cacheOutput": 0.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimax-minimax-m2-1": {
    "family": "minimax",
    "lastUpdated": "2025-12-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimax-minimax-m2": {
    "lastUpdated": "2025-10-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.03
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimax-minimax-m2-5": {
    "family": "minimax",
    "lastUpdated": "2026-02-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-3-5-sonnet": {
    "lastUpdated": "2024-10-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-3-7-sonnet": {
    "lastUpdated": "2025-02-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-opus-4-1": {
    "lastUpdated": "2025-08-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000,
      "pricing": {
        "cacheInput": 1.5,
        "cacheOutput": 18.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-sonnet-4-6": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-08",
    "lastUpdated": "2026-02-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75,
        "contextOver200k": {
          "input": 6,
          "output": 22.5,
          "cacheRead": 0.6
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-haiku-4-5": {
    "lastUpdated": "2025-10-15",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.1,
        "cacheOutput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-3-5-haiku": {
    "lastUpdated": "2024-10-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.08,
        "cacheOutput": 1
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-opus-4-5": {
    "lastUpdated": "2025-11-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-opus-4-5": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-08-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-sonnet-4-5": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-07-31",
    "lastUpdated": "2025-11-18",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-sonnet-4-5": {
    "lastUpdated": "2025-09-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-opus-4-6": {
    "lastUpdated": "2026-02-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-4-6": {
    "family": "glm",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-12-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-r1-0528": {
    "family": "deepseek-thinking",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2025-05-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 163840
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "intel-qwen3-coder-480b-a35b-instruct-int4-mixed-ar": {
    "family": "qwen",
    "trainingCutoff": "2024-12",
    "lastUpdated": "2025-01-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 0.11,
        "cacheOutput": 0.44
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "moonshotai-kimi-k2-instruct-0905": {
    "family": "kimi",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144,
      "pricing": {
        "cacheInput": 0.195
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-3-2-90b-vision-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-09-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 0.175,
        "cacheOutput": 0.7
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-3-3-70b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2025-12-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-4-maverick-17b-128e-instruct-fp8": {
    "family": "llama",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-next-80b-a3b-instruct": {
    "family": "qwen",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-235b-a22b-thinking-2507": {
    "family": "qwen",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen2-5-vl-32b-instruct": {
    "family": "qwen",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-nemo-instruct-2407": {
    "family": "mistral",
    "lastUpdated": "2024-07-18",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-magistral-small-2506": {
    "family": "magistral-small",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-06-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 0.25,
        "cacheOutput": 1
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-large-instruct-2411": {
    "family": "mistral-large",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-11-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 1,
        "cacheOutput": 4
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-devstral-small-2505": {
    "family": "devstral",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2025-05-07",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-oss-20b": {
    "family": "gpt-oss",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-3-1-nemotron-70b-instruct": {
    "lastUpdated": "2024-10-12",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-3-1-nemotron-ultra-253b-v1": {
    "family": "llama",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2025-09-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-3-1-nemotron-51b-instruct": {
    "lastUpdated": "2024-09-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "parakeet-tdt-0-6b-v2": {
    "family": "parakeet",
    "trainingCutoff": "2024-01",
    "lastUpdated": "2025-09-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nvidia-nemotron-nano-9b-v2": {
    "lastUpdated": "2025-08-18",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-embed-nemotron-8b": {
    "family": "llama",
    "trainingCutoff": "2025-03",
    "lastUpdated": "2025-03-18",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2048
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-3-3-nemotron-super-49b-v1-5": {
    "lastUpdated": "2025-03-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-3-3-nemotron-super-49b-v1": {
    "lastUpdated": "2025-03-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama3-chatqa-1-5-70b": {
    "lastUpdated": "2024-04-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cosmos-nemotron-34b": {
    "family": "nemotron",
    "trainingCutoff": "2024-01",
    "lastUpdated": "2025-09-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nemoretriever-ocr-v1": {
    "family": "nemoretriever",
    "trainingCutoff": "2024-01",
    "lastUpdated": "2025-09-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nemotron-4-340b-instruct": {
    "lastUpdated": "2024-06-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nemotron-3-nano-30b-a3b": {
    "family": "nemotron",
    "trainingCutoff": "2024-09",
    "lastUpdated": "2024-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "microsoft-phi-3-small-128k-instruct": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-04-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "microsoft-phi-3-medium-128k-instruct": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-04-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "microsoft-phi-3-5-moe-instruct": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-08-20",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "microsoft-phi-3-vision-128k-instruct": {
    "lastUpdated": "2024-05-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "microsoft-phi-4-mini-instruct": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-12-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "microsoft-phi-3-5-vision-instruct": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-08-20",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "microsoft-phi-3-medium-4k-instruct": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-04-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1024
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "microsoft-phi-3-small-8k-instruct": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-04-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2048
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimaxai-minimax-m2-1": {
    "lastUpdated": "2026-01-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 196608
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimaxai-minimax-m2": {
    "family": "minimax",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-11-13",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-v3-1": {
    "family": "deepseek",
    "lastUpdated": "2025-08-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 164000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-r1": {
    "family": "deepseek-thinking",
    "lastUpdated": "2025-11-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 164000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-v3-1-terminus": {
    "family": "deepseek",
    "lastUpdated": "2025-11-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 164000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-coder-6-7b-instruct": {
    "lastUpdated": "2023-10-29",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-v3-2": {
    "family": "deepseek",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2025-12-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "moonshotai-kimi-k2-instruct": {
    "family": "kimi",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-12-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-codegemma-7b": {
    "lastUpdated": "2024-03-21",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemma-2-2b-it": {
    "trainingCutoff": "2024-06",
    "lastUpdated": "2026-02-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 0.002,
        "cacheOutput": 0.025
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemma-3-1b-it": {
    "lastUpdated": "2025-03-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemma-2-27b-it": {
    "lastUpdated": "2024-06-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2048
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemma-3n-e2b-it": {
    "trainingCutoff": "2024-06",
    "lastUpdated": "2025-06-12",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-codegemma-1-1-7b": {
    "lastUpdated": "2024-04-30",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemma-3n-e4b-it": {
    "lastUpdated": "2025-05-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 6554
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemma-3-12b-it": {
    "lastUpdated": "2025-03-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.015
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemma-3-27b-it": {
    "lastUpdated": "2025-03-12",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.02
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "z-ai-glm4-7": {
    "family": "glm",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-12-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "z-ai-glm5": {
    "family": "glm",
    "lastUpdated": "2026-02-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-next-80b-a3b-thinking": {
    "lastUpdated": "2025-09-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 25600
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-coder-480b-a35b-instruct": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 66536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwq-32b": {
    "lastUpdated": "2025-04-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen2-5-coder-7b-instruct": {
    "lastUpdated": "2024-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 6554
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen2-5-coder-32b-instruct": {
    "family": "qwen",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-235b-a22b": {
    "family": "qwen",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 40960
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-3-1-70b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-3-3-70b-instruct": {
    "lastUpdated": "2025-04-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-4-scout-17b-16e-instruct": {
    "family": "llama",
    "trainingCutoff": "2024-12",
    "lastUpdated": "2025-01-31",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-3-2-11b-vision-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-09-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama3-8b-instruct": {
    "lastUpdated": "2024-04-17",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-codellama-70b": {
    "lastUpdated": "2024-01-29",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-3-2-1b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2025-01-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-3-1-405b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama3-70b-instruct": {
    "lastUpdated": "2024-04-17",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-4-maverick-17b-128e-instruct": {
    "trainingCutoff": "2024-02",
    "lastUpdated": "2025-04-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-large-3-675b-instruct-2512": {
    "family": "mistral",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-12-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mamba-codestral-7b-v0-1": {
    "lastUpdated": "2024-07-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-codestral-22b-instruct-v0-1": {
    "lastUpdated": "2024-05-29",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-large-2-instruct": {
    "lastUpdated": "2024-07-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-ministral-14b-instruct-2512": {
    "family": "mistral",
    "trainingCutoff": "2025-12",
    "lastUpdated": "2025-12-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-small-3-1-24b-instruct-2503": {
    "lastUpdated": "2025-03-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-devstral-2-123b-instruct-2512": {
    "family": "mistral",
    "lastUpdated": "2025-12-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "black-forest-labs-flux-1-dev": {
    "family": "flux",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-09-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-r1-distill-llama-70b": {
    "family": "deepseek-thinking",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "moonshotai-kimi-k2": {
    "lastUpdated": "2025-07-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-coder": {
    "family": "qwen",
    "trainingCutoff": "2024-12",
    "lastUpdated": "2025-12-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-4-1": {
    "lastUpdated": "2025-04-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "cacheInput": 0.5
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5-mini": {
    "lastUpdated": "2025-08-07",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.025
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5-nano": {
    "lastUpdated": "2025-08-07",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.005
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kimi-k2": {
    "family": "kimi",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-09-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144,
      "pricing": {
        "cacheInput": 0.4
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-max-preview": {
    "lastUpdated": "2025-09-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-v3": {
    "family": "deepseek",
    "lastUpdated": "2024-12-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kimi-k2-0905": {
    "family": "kimi",
    "trainingCutoff": "2025-09",
    "lastUpdated": "2025-09-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 0.39999999999999997
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-235b-a22b-instruct": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-r1": {
    "family": "deepseek-thinking",
    "lastUpdated": "2025-01-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-32b": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "reasoning": 2.868
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-v3-2": {
    "family": "deepseek",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2025-12-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-235b": {
    "family": "qwen",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-12-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-vl-plus": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-09-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "reasoning": 4.300576
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-235b-a22b-thinking-2507": {
    "family": "qwen",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2026-01-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-max": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-09-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-coder-plus": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-30b-a3b-instruct-2507": {
    "family": "qwen",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-30b-a3b-thinking-2507": {
    "lastUpdated": "2025-07-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 6554
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-coder-30b-a3b-instruct": {
    "lastUpdated": "2025-07-31",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-235b-a22b-instruct-2507": {
    "family": "qwen",
    "lastUpdated": "2026-01-29",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zhipuai-glm-4-6": {
    "family": "glm",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2025-09-30",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 98304
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zhipuai-glm-4-5": {
    "family": "glm",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 98304
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cerebras-4-maverick-17b-128e-instruct": {
    "family": "llama",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "4-scout-17b-16e-instruct-fp8": {
    "family": "llama",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "3-3-8b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-12-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "groq-4-maverick-17b-128e-instruct": {
    "family": "llama",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "3-3-70b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-12-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cerebras-4-scout-17b-16e-instruct": {
    "family": "llama",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "4-maverick-17b-128e-instruct-fp8": {
    "family": "llama",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-mistral-nemo-12b-instruct": {
    "family": "mistral-nemo",
    "trainingCutoff": "2024-12",
    "lastUpdated": "2025-01-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemma-3": {
    "family": "gemma",
    "trainingCutoff": "2024-12",
    "lastUpdated": "2025-01-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-embedding-4b": {
    "family": "qwen",
    "trainingCutoff": "2024-12",
    "lastUpdated": "2025-01-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2048
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen-2-5-7b-vision-instruct": {
    "family": "qwen",
    "trainingCutoff": "2024-12",
    "lastUpdated": "2025-01-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-3-2-3b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2025-01-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-3-1-8b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "osmosis-osmosis-structure-0-6b": {
    "family": "osmosis",
    "trainingCutoff": "2024-12",
    "lastUpdated": "2025-01-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2048
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-4-7-flash": {
    "lastUpdated": "2026-01-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65535
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-4-7": {
    "family": "glm",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-12-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-4-5": {
    "family": "glm",
    "lastUpdated": "2026-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 98304
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-coder-480b-a35b-instruct-turbo": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 66536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-3-7-sonnet-latest": {
    "family": "claude-sonnet",
    "trainingCutoff": "2024-10-31",
    "lastUpdated": "2025-03-13",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.33
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-4-opus": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-06-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mimo-v2-flash": {
    "lastUpdated": "2025-12-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 256000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:minimaxai-minimax-m2": {
    "family": "minimax",
    "lastUpdated": "2025-10-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:minimaxai-minimax-m2-1": {
    "family": "minimax",
    "lastUpdated": "2025-12-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:deepseek-ai-deepseek-r1": {
    "family": "deepseek-thinking",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-01-20",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:deepseek-ai-deepseek-r1-0528": {
    "family": "deepseek-thinking",
    "lastUpdated": "2025-08-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:deepseek-ai-deepseek-v3-1": {
    "family": "deepseek",
    "lastUpdated": "2025-08-21",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:deepseek-ai-deepseek-v3-2": {
    "family": "deepseek",
    "lastUpdated": "2025-12-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8000,
      "pricing": {
        "cacheInput": 0.27,
        "cacheOutput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:deepseek-ai-deepseek-v3-0324": {
    "family": "deepseek",
    "lastUpdated": "2025-08-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:deepseek-ai-deepseek-v3": {
    "family": "deepseek",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2025-05-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:deepseek-ai-deepseek-v3-1-terminus": {
    "family": "deepseek",
    "lastUpdated": "2025-09-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:moonshotai-kimi-k2-instruct-0905": {
    "family": "kimi",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-09-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:moonshotai-kimi-k2-5": {
    "family": "kimi",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2026-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:moonshotai-kimi-k2-thinking": {
    "family": "kimi-thinking",
    "trainingCutoff": "2025-11",
    "lastUpdated": "2025-11-07",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:openai-gpt-oss-120b": {
    "family": "gpt-oss",
    "lastUpdated": "2025-08-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:nvidia-kimi-k2-5-nvfp4": {
    "family": "kimi",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2026-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:meta-llama-llama-4-scout-17b-16e-instruct": {
    "family": "llama",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:meta-llama-llama-3-1-405b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-07-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:meta-llama-llama-3-1-70b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-07-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:meta-llama-llama-3-1-8b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-07-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:meta-llama-llama-3-3-70b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-12-06",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:meta-llama-llama-4-maverick-17b-128e-instruct-fp8": {
    "family": "llama",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:zai-org-glm-4-6": {
    "family": "glm",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-09-30",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:zai-org-glm-4-7": {
    "family": "glm",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-12-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:qwen-qwen3-235b-a22b-thinking-2507": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:qwen-qwen2-5-coder-32b-instruct": {
    "family": "qwen",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-11-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:qwen-qwen3-coder-480b-a35b-instruct": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hf:qwen-qwen3-235b-a22b-instruct-2507": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-21",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-4-7-fp8": {
    "lastUpdated": "2026-01-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65535
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-4-5-air": {
    "family": "glm",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nvidia-llama-3-1-nemotron-ultra-253b-v1": {
    "lastUpdated": "2026-02-04",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nvidia-nemotron-nano-v2-12b": {
    "trainingCutoff": "2025-01",
    "lastUpdated": "2026-02-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 0.007,
        "cacheOutput": 0.08
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nvidia-nvidia-nemotron-3-nano-30b-a3b": {
    "trainingCutoff": "2025-05",
    "lastUpdated": "2026-02-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 0.006,
        "cacheOutput": 0.075
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nousresearch-hermes-4-405b": {
    "lastUpdated": "2025-08-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nousresearch-hermes-4-70b": {
    "family": "nousresearch",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "baai-bge-en-icl": {
    "family": "text-embedding",
    "trainingCutoff": "2024-06",
    "lastUpdated": "2026-02-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "baai-bge-multilingual-gemma2": {
    "family": "text-embedding",
    "trainingCutoff": "2024-06",
    "lastUpdated": "2026-02-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "primeintellect-intellect-3": {
    "trainingCutoff": "2025-10",
    "lastUpdated": "2026-02-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.02,
        "cacheOutput": 0.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-v3-0324-fast": {
    "trainingCutoff": "2024-12",
    "lastUpdated": "2026-02-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.075,
        "cacheOutput": 0.28125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-r1-0528-fast": {
    "family": "deepseek",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-02-04",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-v3-0324": {
    "family": "deepseek",
    "lastUpdated": "2025-03-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 163840
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "intfloat-e5-mistral-7b-instruct": {
    "family": "mistral",
    "lastUpdated": "2023-12-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemma-3-27b-it-fast": {
    "trainingCutoff": "2025-10",
    "lastUpdated": "2026-02-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.02,
        "cacheOutput": 0.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemma-2-9b-it-fast": {
    "trainingCutoff": "2024-06",
    "lastUpdated": "2026-02-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 0.003,
        "cacheOutput": 0.0375
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen2-5-coder-7b-fast": {
    "trainingCutoff": "2024-09",
    "lastUpdated": "2026-02-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.003,
        "cacheOutput": 0.03
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-32b": {
    "family": "qwen",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 40960,
      "pricing": {
        "cacheInput": 0.04
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen2-5-vl-72b-instruct": {
    "lastUpdated": "2025-02-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "cacheInput": 0.075
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-32b-fast": {
    "trainingCutoff": "2025-12",
    "lastUpdated": "2026-02-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.02,
        "cacheOutput": 0.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-guard-3-8b": {
    "lastUpdated": "2026-02-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-meta-llama-3-1-8b-instruct": {
    "family": "llama",
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-3-3-70b-instruct-fast": {
    "trainingCutoff": "2025-08",
    "lastUpdated": "2026-02-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.025,
        "cacheOutput": 0.31
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-meta-llama-3-1-8b-instruct-fast": {
    "trainingCutoff": "2024-12",
    "lastUpdated": "2026-02-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 0.003,
        "cacheOutput": 0.03
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "black-forest-labs-flux-dev": {
    "trainingCutoff": "2024-07",
    "lastUpdated": "2026-02-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "black-forest-labs-flux-schnell": {
    "trainingCutoff": "2024-07",
    "lastUpdated": "2026-02-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-4-5-haiku": {
    "family": "claude-haiku",
    "trainingCutoff": "2025-10",
    "lastUpdated": "2025-10-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.09999999999999999,
        "cacheOutput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-3-5-sonnet": {
    "lastUpdated": "2025-09-09",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8200
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-235b-a22b-instruct-2507": {
    "family": "qwen",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2026-01-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-3-7-sonnet": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-02",
    "lastUpdated": "2025-02-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.30000000000000004,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-next-80b-a3b-thinking": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-09",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-4-0-sonnet": {
    "lastUpdated": "2025-08-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-vl-max-2025-01-25": {
    "lastUpdated": "2025-08-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "doubao-seed-1-6-thinking": {
    "lastUpdated": "2025-08-15",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-coder-480b-a35b-instruct": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-4-5-sonnet": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-07-31",
    "lastUpdated": "2025-09-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 200000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen2-5-vl-7b-instruct": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-2-5-flash": {
    "family": "gemini-flash",
    "lastUpdated": "2026-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65535
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-v3-1": {
    "family": "deepseek",
    "lastUpdated": "2025-01-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "doubao-seed-1-6": {
    "lastUpdated": "2025-08-15",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-4-0-opus": {
    "lastUpdated": "2025-08-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-turbo": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-07-15",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "reasoning": 0.431
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-3-0-pro-preview": {
    "lastUpdated": "2025-11-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "other",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-r1-0528": {
    "family": "deepseek-thinking",
    "lastUpdated": "2025-05-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "doubao-1-5-vision-pro": {
    "lastUpdated": "2025-08-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-3-0-pro-image-preview": {
    "lastUpdated": "2025-11-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text",
        "image"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-2-5-flash-lite": {
    "family": "gemini-flash-lite",
    "lastUpdated": "2026-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65535
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-3-5-haiku": {
    "family": "claude-haiku",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-10-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.08,
        "cacheOutput": 1
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-oss-120b": {
    "family": "gpt-oss",
    "trainingCutoff": "2024-01",
    "lastUpdated": "2025-08-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-v3-0324": {
    "family": "deepseek",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2025-03-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "doubao-1-5-pro-32k": {
    "lastUpdated": "2025-08-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 12000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen2-5-vl-72b-instruct": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-235b-a22b": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "reasoning": 2.868
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-4-1-opus": {
    "lastUpdated": "2025-08-06",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "doubao-1-5-thinking-pro": {
    "lastUpdated": "2025-08-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-2-5-flash-image": {
    "family": "gemini-flash",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2025-08-26",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text",
        "image"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "cacheInput": 0.075
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimax-m1": {
    "family": "minimax",
    "lastUpdated": "2025-06-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "doubao-seed-1-6-flash": {
    "lastUpdated": "2025-08-15",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-4-5-opus": {
    "family": "claude-opus",
    "trainingCutoff": "2025-11",
    "lastUpdated": "2025-11-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-2-0-flash-lite": {
    "family": "gemini-flash-lite",
    "trainingCutoff": "2024-06",
    "lastUpdated": "2024-12-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-next-80b-a3b-instruct": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-3-0-flash-preview": {
    "lastUpdated": "2025-12-18",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-30b-a3b": {
    "family": "qwen",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2025-06-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 41000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-oss-20b": {
    "family": "gpt-oss",
    "trainingCutoff": "2024-06",
    "lastUpdated": "2024-06-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kling-v2-6": {
    "lastUpdated": "2026-01-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "video"
      ]
    },
    "specs": {
      "maxOutputTokens": 99999999
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-2-5-pro": {
    "family": "gemini-pro",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-06-17",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65535
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-2-0-flash": {
    "family": "gemini-flash",
    "trainingCutoff": "2024-06",
    "lastUpdated": "2024-12-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.025
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-max-2025-01-25": {
    "lastUpdated": "2025-08-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-v3-2-exp-thinking": {
    "lastUpdated": "2025-09-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-v3-1-terminus": {
    "lastUpdated": "2025-09-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "cacheInput": 0.13
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-v3-2-251201": {
    "lastUpdated": "2025-12-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-math-v2": {
    "lastUpdated": "2025-12-04",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 160000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-v3-1-terminus-thinking": {
    "lastUpdated": "2025-09-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "z-ai-autoglm-phone-9b": {
    "lastUpdated": "2025-12-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "stepfun-ai-gelab-zero-4b-preview": {
    "lastUpdated": "2025-12-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meituan-longcat-flash-chat": {
    "lastUpdated": "2025-08-30",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "cacheInput": 0.2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "x-ai-grok-4-fast-reasoning": {
    "lastUpdated": "2025-12-18",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2000000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "x-ai-grok-4-1-fast-reasoning": {
    "lastUpdated": "2025-12-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2000000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "x-ai-grok-4-fast-non-reasoning": {
    "lastUpdated": "2025-12-18",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2000000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-coder:480b": {
    "family": "qwen",
    "lastUpdated": "2026-01-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nemotron-3-nano:30b": {
    "family": "nemotron",
    "lastUpdated": "2026-01-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "ministral-3:8b": {
    "family": "ministral",
    "lastUpdated": "2026-01-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-coder-next": {
    "family": "qwen",
    "lastUpdated": "2026-02-08",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-oss:120b": {
    "family": "gpt-oss",
    "lastUpdated": "2026-01-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "devstral-2:123b": {
    "family": "devstral",
    "lastUpdated": "2026-01-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-vl:235b-instruct": {
    "family": "qwen",
    "lastUpdated": "2026-01-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-3-flash-preview": {
    "family": "gemini-flash",
    "lastUpdated": "2026-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimax-m2-1": {
    "family": "minimax",
    "lastUpdated": "2025-12-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "ministral-3:14b": {
    "family": "ministral",
    "lastUpdated": "2026-01-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-next:80b": {
    "family": "qwen",
    "lastUpdated": "2026-01-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kimi-k2:1t": {
    "family": "kimi",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2026-01-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemma3:12b": {
    "family": "gemma",
    "lastUpdated": "2026-01-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kimi-k2-5": {
    "family": "kimi",
    "lastUpdated": "2025-01-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-oss:20b": {
    "family": "gpt-oss",
    "lastUpdated": "2026-01-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kimi-k2-thinking": {
    "family": "kimi",
    "lastUpdated": "2025-11-06",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "ministral-3:3b": {
    "family": "ministral",
    "lastUpdated": "2026-01-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-5:397b": {
    "family": "qwen",
    "lastUpdated": "2026-02-17",
    "interleavedReasoningField": "reasoning_details",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 81920
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemma3:27b": {
    "family": "gemma",
    "lastUpdated": "2026-01-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimax-m2": {
    "family": "minimax",
    "trainingCutoff": "2024-11",
    "lastUpdated": "2025-10-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 400000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimax-m2-5": {
    "family": "minimax",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2026-02-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.03
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-3-pro-preview": {
    "family": "gemini-pro",
    "lastUpdated": "2026-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "devstral-small-2:24b": {
    "family": "devstral",
    "lastUpdated": "2026-01-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cogito-2-1:671b": {
    "family": "cogito",
    "lastUpdated": "2026-01-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemma3:4b": {
    "family": "gemma",
    "lastUpdated": "2026-01-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-v3-1:671b": {
    "family": "deepseek",
    "lastUpdated": "2026-01-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 163840
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-large-3:675b": {
    "family": "mistral-large",
    "lastUpdated": "2026-01-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "rnj-1:8b": {
    "family": "rnj",
    "lastUpdated": "2026-01-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-vl:235b": {
    "family": "qwen",
    "lastUpdated": "2026-01-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "voxtral-small-24b-2507": {
    "family": "voxtral",
    "lastUpdated": "2025-07-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-3-3-70b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-12-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-small-3-2-24b-instruct-2506": {
    "lastUpdated": "2025-07-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "bge-multilingual-gemma2": {
    "family": "gemma",
    "lastUpdated": "2025-06-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 3072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-r1-distill-llama-70b": {
    "family": "deepseek-thinking",
    "lastUpdated": "2025-01-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-coder-30b-a3b-instruct": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "whisper-large-v3": {
    "family": "whisper",
    "trainingCutoff": "2023-09",
    "lastUpdated": "2023-09-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-3-1-8b-instruct": {
    "family": "llama",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2024-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "devstral-2-123b-instruct-2512": {
    "family": "devstral",
    "lastUpdated": "2026-01-07",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "pixtral-12b-2409": {
    "family": "pixtral",
    "lastUpdated": "2024-09-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-nemo-instruct-2407": {
    "lastUpdated": "2024-11-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemma-3-27b-it": {
    "family": "gemma",
    "trainingCutoff": "2024-12",
    "lastUpdated": "2025-09-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-ibm-granite-granite-4-0-h-micro": {
    "family": "granite",
    "lastUpdated": "2025-10-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-baai-bge-small-en-v1-5": {
    "family": "bge",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-baai-bge-large-en-v1-5": {
    "family": "bge",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-baai-bge-reranker-base": {
    "family": "bge",
    "lastUpdated": "2025-04-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-baai-bge-m3": {
    "family": "bge",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-baai-bge-base-en-v1-5": {
    "family": "bge",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-pfnet-plamo-embedding-1b": {
    "family": "plamo",
    "lastUpdated": "2025-09-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-deepseek-ai-deepseek-r1-distill-qwen-32b": {
    "family": "deepseek-thinking",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-facebook-bart-large-cnn": {
    "family": "bart",
    "lastUpdated": "2025-04-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-mistral-mistral-7b-instruct-v0-1": {
    "family": "mistral",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-myshell-ai-melotts": {
    "family": "melotts",
    "lastUpdated": "2025-11-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-pipecat-ai-smart-turn-v2": {
    "family": "smart-turn",
    "lastUpdated": "2025-11-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-google-gemma-3-12b-it": {
    "family": "gemma",
    "lastUpdated": "2025-04-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-qwen-qwq-32b": {
    "family": "qwen",
    "lastUpdated": "2025-04-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-qwen-qwen3-30b-a3b-fp8": {
    "family": "qwen",
    "lastUpdated": "2025-11-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-qwen-qwen2-5-coder-32b-instruct": {
    "family": "qwen",
    "lastUpdated": "2025-04-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-qwen-qwen3-embedding-0-6b": {
    "family": "qwen",
    "lastUpdated": "2025-11-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-meta-llama-3-1-8b-instruct-fp8": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-meta-llama-3-8b-instruct-awq": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-meta-llama-3-1-8b-instruct-awq": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-meta-llama-4-scout-17b-16e-instruct": {
    "family": "llama",
    "lastUpdated": "2025-04-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-meta-llama-3-2-11b-vision-instruct": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-meta-llama-3-2-3b-instruct": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-meta-llama-guard-3-8b": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-meta-llama-3-2-1b-instruct": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-meta-llama-3-3-70b-instruct-fp8-fast": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-meta-llama-3-1-8b-instruct": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-meta-m2m100-1-2b": {
    "family": "m2m",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-meta-llama-2-7b-chat-fp16": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-meta-llama-3-8b-instruct": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-mistralai-mistral-small-3-1-24b-instruct": {
    "family": "mistral-small",
    "lastUpdated": "2025-04-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-deepgram-aura-2-es": {
    "family": "aura",
    "lastUpdated": "2025-11-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-deepgram-nova-3": {
    "family": "nova",
    "lastUpdated": "2025-11-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-deepgram-aura-2-en": {
    "family": "aura",
    "lastUpdated": "2025-11-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-openai-gpt-oss-120b": {
    "lastUpdated": "2025-08-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-openai-gpt-oss-20b": {
    "lastUpdated": "2025-08-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-ai4bharat-indictrans2-en-indic-1b": {
    "family": "indictrans",
    "lastUpdated": "2025-09-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-huggingface-distilbert-sst-2-int8": {
    "family": "distilbert",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "workers-ai-@cf-aisingapore-gemma-sea-lion-v4-27b-it": {
    "family": "gemma",
    "lastUpdated": "2025-09-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5-3-codex": {
    "family": "gpt",
    "lastUpdated": "2026-02-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.175
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-4o-mini": {
    "lastUpdated": "2024-07-18",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 0.075
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "o1": {
    "family": "o",
    "trainingCutoff": "2023-09",
    "lastUpdated": "2024-12-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 100000,
      "pricing": {
        "cacheInput": 7.5
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "o3": {
    "family": "o",
    "trainingCutoff": "2024-05",
    "lastUpdated": "2025-04-16",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 100000,
      "pricing": {
        "cacheInput": 0.5
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-3-5-turbo": {
    "lastUpdated": "2023-11-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-o3-pro": {
    "lastUpdated": "2025-06-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 100000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-4-turbo": {
    "lastUpdated": "2024-04-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-o4-mini": {
    "lastUpdated": "2025-04-16",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 100000,
      "pricing": {
        "cacheInput": 0.275
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-o3-mini": {
    "lastUpdated": "2026-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 100000,
      "pricing": {
        "cacheInput": 0.55
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-4": {
    "lastUpdated": "2024-04-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-4o": {
    "lastUpdated": "2024-08-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-3-sonnet": {
    "family": "claude-sonnet",
    "trainingCutoff": "2023-08-31",
    "lastUpdated": "2024-03-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 0.3
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-3-haiku": {
    "lastUpdated": "2024-03-07",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 0.03,
        "cacheOutput": 0.3
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-3-opus": {
    "family": "claude-opus",
    "trainingCutoff": "2023-08-31",
    "lastUpdated": "2024-02-29",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 1.5,
        "cacheOutput": 18.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "solar-pro2": {
    "family": "solar-pro",
    "trainingCutoff": "2025-03",
    "lastUpdated": "2025-05-20",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "solar-mini": {
    "family": "solar-mini",
    "trainingCutoff": "2024-09",
    "lastUpdated": "2025-04-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "solar-pro3": {
    "family": "solar-pro",
    "trainingCutoff": "2025-03",
    "lastUpdated": "2026-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mercury": {
    "family": "mercury",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2025-07-31",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 0.25,
        "cacheOutput": 1
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mercury-coder": {
    "family": "mercury",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2025-07-31",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 0.25,
        "cacheOutput": 1
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-4-5-fp8": {
    "lastUpdated": "2026-01-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-coder-480b-a35b-instruct-fp8": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimax-m2-5-highspeed": {
    "family": "minimax",
    "lastUpdated": "2026-02-13",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0,
        "cacheOutput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-5": {
    "family": "glm",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2026-02-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-autoglm-phone-9b-multilingual": {
    "lastUpdated": "2025-12-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-4-5v": {
    "family": "glmv",
    "lastUpdated": "2026-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-4-6v": {
    "family": "glm",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "microsoft-wizardlm-2-8x22b": {
    "lastUpdated": "2024-04-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimaxai-minimax-m1-80k": {
    "family": "minimax",
    "lastUpdated": "2026-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 40000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "skywork-r1v4-lite": {
    "family": "skywork",
    "lastUpdated": "2025-11-18",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gryphe-mythomax-l2-13b": {
    "lastUpdated": "2024-04-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "paddlepaddle-paddleocr-vl": {
    "lastUpdated": "2025-10-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "baichuan-baichuan-m2-32b": {
    "family": "baichuan",
    "trainingCutoff": "2024-12",
    "lastUpdated": "2025-08-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kwaipilot-kat-coder-pro": {
    "lastUpdated": "2025-10-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.0414
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kwaipilot-kat-coder": {
    "lastUpdated": "2025-09-30",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-v3-turbo": {
    "lastUpdated": "2025-03-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-prover-v2-671b": {
    "lastUpdated": "2025-04-30",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 160000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-r1-turbo": {
    "lastUpdated": "2025-03-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-ocr-2": {
    "lastUpdated": "2026-01-27",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-v3-1": {
    "family": "deepseek",
    "lastUpdated": "2026-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-r1-0528": {
    "lastUpdated": "2025-05-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-r1-0528-qwen3-8b": {
    "lastUpdated": "2025-05-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-r1-distill-llama-70b": {
    "lastUpdated": "2025-01-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.015
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-v3-0324": {
    "family": "deepseek",
    "lastUpdated": "2026-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 163840
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-ocr": {
    "lastUpdated": "2025-10-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "baidu-ernie-4-5-vl-28b-a3b-thinking": {
    "lastUpdated": "2025-11-26",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "baidu-ernie-4-5-vl-424b-a47b": {
    "lastUpdated": "2026-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "baidu-ernie-4-5-vl-28b-a3b": {
    "lastUpdated": "2025-06-30",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "baidu-ernie-4-5-300b-a47b-paddle": {
    "family": "ernie",
    "lastUpdated": "2026-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 12000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "baidu-ernie-4-5-21b-a3b": {
    "lastUpdated": "2025-06-30",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "baidu-ernie-4-5-21b-a3b-thinking": {
    "lastUpdated": "2025-09-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-4b-fp8": {
    "lastUpdated": "2025-04-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 20000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-32b-fp8": {
    "family": "qwen",
    "lastUpdated": "2026-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 20000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-30b-a3b-fp8": {
    "family": "qwen",
    "lastUpdated": "2026-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 20000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-coder-next": {
    "family": "qwen",
    "lastUpdated": "2026-02-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-5-397b-a17b": {
    "family": "qwen",
    "lastUpdated": "2026-02-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-vl-235b-a22b-instruct": {
    "family": "qwen",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen-mt-plus": {
    "lastUpdated": "2025-09-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-omni-30b-a3b-instruct": {
    "family": "qwen",
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 66000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen-2-5-72b-instruct": {
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-vl-30b-a3b-thinking": {
    "lastUpdated": "2025-11-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-vl-235b-a22b-thinking": {
    "lastUpdated": "2025-09-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen2-5-7b-instruct": {
    "family": "qwen",
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-235b-a22b-fp8": {
    "family": "qwen",
    "lastUpdated": "2026-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 20000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-vl-8b-instruct": {
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-8b-fp8": {
    "lastUpdated": "2025-04-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 20000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-omni-30b-a3b-thinking": {
    "family": "qwen",
    "lastUpdated": "2025-11-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 66000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-4-scout-17b-16e-instruct": {
    "family": "llama",
    "trainingCutoff": "2024-12",
    "lastUpdated": "2025-01-31",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-3-70b-instruct": {
    "lastUpdated": "2024-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-3-1-8b-instruct": {
    "lastUpdated": "2025-12-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-3-8b-instruct": {
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-nemo": {
    "lastUpdated": "2024-07-30",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "sao10k-l3-70b-euryale-v2-1": {
    "lastUpdated": "2024-06-18",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "sao10k-l31-70b-euryale-v2-2": {
    "lastUpdated": "2024-09-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "sao10k-l3-8b-lunaris": {
    "lastUpdated": "2024-11-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "sao10k-l3-8b-stheno-v3-2": {
    "lastUpdated": "2024-11-29",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "xiaomimimo-mimo-v2-flash": {
    "family": "mimo",
    "lastUpdated": "2026-01-27",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nousresearch-hermes-2-pro-llama-3-8b": {
    "lastUpdated": "2024-06-27",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-3-codex": {
    "family": "gpt-codex",
    "trainingCutoff": "2025-08-31",
    "lastUpdated": "2026-02-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.175
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-codex": {
    "family": "gpt-codex",
    "trainingCutoff": "2024-09-30",
    "lastUpdated": "2025-09-15",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.13
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-3-1-pro": {
    "family": "gemini-pro",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2026-02-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "audio",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.2,
        "contextOver200k": {
          "input": 4,
          "output": 18,
          "cacheRead": 0.4
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "trinity-large-preview-free": {
    "family": "trinity",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2026-01-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-1-codex-max": {
    "family": "gpt-codex",
    "trainingCutoff": "2024-09-30",
    "lastUpdated": "2025-11-13",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kimi-k2-5-free": {
    "family": "kimi-free",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2026-01-27",
    "interleavedReasoningField": "reasoning_content",
    "status": "deprecated",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144,
      "pricing": {
        "cacheInput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-opus-4-1": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-11-18",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000,
      "pricing": {
        "cacheInput": 1.5,
        "cacheOutput": 18.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-code": {
    "family": "grok",
    "lastUpdated": "2025-08-20",
    "interleavedReasoningField": "reasoning_content",
    "status": "deprecated",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 256000,
      "pricing": {
        "cacheInput": 0,
        "cacheOutput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-2-codex": {
    "family": "gpt-codex",
    "trainingCutoff": "2025-08-31",
    "lastUpdated": "2026-01-14",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.175
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-opus-4-6": {
    "family": "claude-opus",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2026-02-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25,
        "contextOver200k": {
          "input": 10,
          "output": 37.5,
          "cacheRead": 1
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-3-flash": {
    "family": "gemini-flash",
    "trainingCutoff": "2025-03",
    "lastUpdated": "2025-12-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.05
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-sonnet-4-6": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-08",
    "lastUpdated": "2026-02-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75,
        "contextOver200k": {
          "input": 6,
          "output": 22.5,
          "cacheRead": 0.6
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-1": {
    "family": "gpt",
    "trainingCutoff": "2024-09-30",
    "lastUpdated": "2025-11-14",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio"
      ],
      "output": [
        "text",
        "image",
        "audio"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-coder": {
    "family": "qwen",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2025-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-1-codex-mini": {
    "family": "gpt-codex",
    "trainingCutoff": "2024-09-30",
    "lastUpdated": "2025-11-14",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.025
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-2": {
    "family": "gpt",
    "trainingCutoff": "2025-08-31",
    "lastUpdated": "2025-12-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimax-m2-1-free": {
    "family": "minimax-free",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-12-23",
    "interleavedReasoningField": "reasoning_content",
    "status": "deprecated",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5": {
    "family": "gpt",
    "trainingCutoff": "2024-09-30",
    "lastUpdated": "2025-08-07",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.13
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "glm-5-free": {
    "family": "glm-free",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2026-02-11",
    "interleavedReasoningField": "reasoning_content",
    "status": "deprecated",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-haiku-4-5": {
    "family": "claude-haiku",
    "trainingCutoff": "2025-02-31",
    "lastUpdated": "2025-11-18",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.1,
        "cacheOutput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-1-codex": {
    "family": "gpt-codex",
    "trainingCutoff": "2024-09-30",
    "lastUpdated": "2025-11-14",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio"
      ],
      "output": [
        "text",
        "image",
        "audio"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "big-pickle": {
    "family": "big-pickle",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-10-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0,
        "cacheOutput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimax-m2-5-free": {
    "family": "minimax-free",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2026-02-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-sonnet-4": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-03",
    "lastUpdated": "2025-05-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "glm-4-7-free": {
    "family": "glm-free",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-12-22",
    "interleavedReasoningField": "reasoning_content",
    "status": "deprecated",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-3-pro": {
    "family": "gemini-pro",
    "lastUpdated": "2025-10-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.16
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-nano": {
    "family": "gpt-nano",
    "trainingCutoff": "2024-05-30",
    "lastUpdated": "2025-08-07",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.01
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "stabilityai-stablediffusionxl": {
    "family": "stable-diffusion",
    "lastUpdated": "2023-07-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "ideogramai-ideogram-v2": {
    "family": "ideogram",
    "lastUpdated": "2024-08-21",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "ideogramai-ideogram": {
    "family": "ideogram",
    "lastUpdated": "2024-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "ideogramai-ideogram-v2a-turbo": {
    "family": "ideogram",
    "lastUpdated": "2025-02-27",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "ideogramai-ideogram-v2a": {
    "family": "ideogram",
    "lastUpdated": "2025-02-27",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "novita-glm-4-7-flash": {
    "lastUpdated": "2026-01-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65500
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "novita-glm-4-7-n": {
    "lastUpdated": "2025-12-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "novita-glm-4-6": {
    "family": "glm",
    "lastUpdated": "2025-09-30",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "novita-minimax-m2-1": {
    "lastUpdated": "2025-12-26",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "novita-kimi-k2-5": {
    "lastUpdated": "2026-01-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "novita-glm-4-7": {
    "lastUpdated": "2025-12-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "novita-kimi-k2-thinking": {
    "family": "kimi",
    "lastUpdated": "2025-11-07",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "novita-glm-4-6v": {
    "lastUpdated": "2025-12-09",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-lyria": {
    "family": "lyria",
    "lastUpdated": "2025-06-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "audio"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-imagen-3": {
    "family": "imagen",
    "lastUpdated": "2024-10-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-veo-3-1": {
    "family": "veo",
    "lastUpdated": "2025-10-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "video"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-imagen-3-fast": {
    "family": "imagen",
    "lastUpdated": "2024-10-17",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-nano-banana-pro": {
    "family": "nano-banana",
    "lastUpdated": "2025-11-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "image"
      ]
    },
    "specs": {
      "pricing": {
        "cacheInput": 0.2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-veo-2": {
    "family": "veo",
    "lastUpdated": "2024-12-02",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "video"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-imagen-4-ultra": {
    "family": "imagen",
    "lastUpdated": "2025-05-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-nano-banana": {
    "family": "nano-banana",
    "lastUpdated": "2025-08-21",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text",
        "image"
      ]
    },
    "specs": {
      "pricing": {
        "cacheInput": 0.021
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-veo-3-1-fast": {
    "family": "veo",
    "lastUpdated": "2025-10-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "video"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-deep-research": {
    "lastUpdated": "2025-12-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-veo-3": {
    "family": "veo",
    "lastUpdated": "2025-05-21",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "video"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-imagen-4": {
    "family": "imagen",
    "lastUpdated": "2025-05-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-2-0-flash-lite": {
    "family": "gemini-flash-lite",
    "trainingCutoff": "2024-06",
    "lastUpdated": "2024-12-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-2-0-flash": {
    "family": "gemini-flash",
    "trainingCutoff": "2024-06",
    "lastUpdated": "2024-12-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.025
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-veo-3-fast": {
    "family": "veo",
    "lastUpdated": "2025-10-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "video"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-imagen-4-fast": {
    "family": "imagen",
    "lastUpdated": "2025-06-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "lumalabs-ray2": {
    "family": "ray",
    "lastUpdated": "2025-02-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "video"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "poetools-claude-code": {
    "lastUpdated": "2025-11-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5-pro": {
    "lastUpdated": "2025-10-06",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5-1-codex-max": {
    "lastUpdated": "2025-11-13",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-o3-deep-research": {
    "lastUpdated": "2025-06-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 100000,
      "pricing": {
        "cacheInput": 2.5
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-o4-mini-deep-research": {
    "lastUpdated": "2025-06-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 100000,
      "pricing": {
        "cacheInput": 0.5
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5-chat": {
    "lastUpdated": "2025-08-07",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-4-classic": {
    "family": "gpt",
    "lastUpdated": "2024-03-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-image-1-5": {
    "lastUpdated": "2025-12-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-4-1-nano": {
    "lastUpdated": "2025-04-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "cacheInput": 0.025
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-image-1-mini": {
    "family": "gpt",
    "lastUpdated": "2025-08-26",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-sora-2-pro": {
    "family": "sora",
    "lastUpdated": "2025-10-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "video"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-4o-aug": {
    "family": "gpt",
    "lastUpdated": "2024-11-21",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 1.1
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-image-1": {
    "family": "gpt",
    "lastUpdated": "2025-03-31",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-sora-2": {
    "family": "sora",
    "lastUpdated": "2025-10-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "video"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-3-5-turbo-raw": {
    "family": "gpt",
    "lastUpdated": "2023-09-27",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2048
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-4o-mini-search": {
    "family": "gpt-mini",
    "lastUpdated": "2025-03-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-4-1-mini": {
    "lastUpdated": "2025-04-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "cacheInput": 0.1
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-o1-pro": {
    "lastUpdated": "2025-03-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 100000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-chatgpt-4o-latest": {
    "lastUpdated": "2024-08-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5-2-pro": {
    "lastUpdated": "2025-12-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-dall-e-3": {
    "family": "dall-e",
    "lastUpdated": "2023-11-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-4o-search": {
    "family": "gpt",
    "lastUpdated": "2025-03-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-4-classic-0314": {
    "family": "gpt",
    "lastUpdated": "2024-08-26",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-3-5-turbo-instruct": {
    "lastUpdated": "2023-09-21",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5-2-instant": {
    "lastUpdated": "2025-12-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 0.16
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-o3-mini-high": {
    "lastUpdated": "2025-01-31",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 100000,
      "pricing": {
        "cacheInput": 0.55
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5-1-instant": {
    "family": "gpt",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-08-07",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text",
        "image"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 0.13
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "topazlabs-co-topazlabs": {
    "family": "topazlabs",
    "lastUpdated": "2024-12-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "runwayml-runway": {
    "family": "runway",
    "lastUpdated": "2024-10-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "video"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "runwayml-runway-gen-4-turbo": {
    "family": "runway",
    "lastUpdated": "2025-05-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "video"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-sonnet-3-5-june": {
    "family": "claude-sonnet",
    "lastUpdated": "2024-11-18",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.26,
        "cacheOutput": 3.2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-sonnet-3-5": {
    "family": "claude-sonnet",
    "lastUpdated": "2024-06-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.26,
        "cacheOutput": 3.2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-haiku-3": {
    "family": "claude-haiku",
    "lastUpdated": "2024-03-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.021,
        "cacheOutput": 0.26
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-haiku-3-5": {
    "family": "claude-haiku",
    "lastUpdated": "2024-10-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.068,
        "cacheOutput": 0.85
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-sonnet-3-7": {
    "family": "claude-sonnet",
    "lastUpdated": "2025-02-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.26,
        "cacheOutput": 3.2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "trytako-tako": {
    "family": "tako",
    "lastUpdated": "2024-08-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "elevenlabs-elevenlabs-music": {
    "family": "elevenlabs",
    "lastUpdated": "2025-08-29",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "audio"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "elevenlabs-elevenlabs-v3": {
    "family": "elevenlabs",
    "lastUpdated": "2025-06-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "audio"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "elevenlabs-elevenlabs-v2-5-turbo": {
    "family": "elevenlabs",
    "lastUpdated": "2024-10-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "audio"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cerebras-llama-3-1-8b-cs": {
    "lastUpdated": "2025-05-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cerebras-gpt-oss-120b-cs": {
    "lastUpdated": "2025-08-06",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cerebras-qwen3-235b-2507-cs": {
    "lastUpdated": "2025-08-06",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cerebras-llama-3-3-70b-cs": {
    "lastUpdated": "2025-05-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cerebras-qwen3-32b-cs": {
    "lastUpdated": "2025-05-15",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "xai-grok-4-fast-reasoning": {
    "family": "grok",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-07-09",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 256000,
      "pricing": {
        "cacheInput": 0.05
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-3": {
    "family": "grok",
    "trainingCutoff": "2024-11",
    "lastUpdated": "2025-02-17",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "xai-grok-code-fast-1": {
    "family": "grok",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2025-08-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 10000,
      "pricing": {
        "cacheInput": 0.02
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "xai-grok-4-1-fast-reasoning": {
    "family": "grok",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-07-09",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 30000,
      "pricing": {
        "cacheInput": 0.05
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-4": {
    "family": "grok",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2025-07-09",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.75,
        "reasoning": 15
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "xai-grok-4-1-fast-non-reasoning": {
    "family": "grok",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-07-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 30000,
      "pricing": {
        "cacheInput": 0.05
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "xai-grok-3-mini": {
    "family": "grok",
    "trainingCutoff": "2024-11",
    "lastUpdated": "2025-02-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.075,
        "reasoning": 0.5
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "xai-grok-4-fast-non-reasoning": {
    "family": "grok",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2025-09-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 30000,
      "pricing": {
        "cacheInput": 0.05
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-r1-v1:0": {
    "family": "deepseek-thinking",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2025-05-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama3-1-70b-instruct-v1:0": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-instant-v1": {
    "family": "claude",
    "trainingCutoff": "2023-08",
    "lastUpdated": "2023-03-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "amazon-titan-text-express-v1": {
    "family": "titan",
    "lastUpdated": "2024-12-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-coder-480b-a35b-v1:0": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-09-18",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "eu-anthropic-claude-sonnet-4-6": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-08",
    "lastUpdated": "2026-02-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75,
        "contextOver200k": {
          "input": 6,
          "output": 22.5,
          "cacheRead": 0.6
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cohere-command-r-v1:0": {
    "family": "command-r",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-03-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "eu-anthropic-claude-haiku-4-5-20251001-v1:0": {
    "family": "claude-haiku",
    "trainingCutoff": "2025-02-28",
    "lastUpdated": "2025-10-15",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.1,
        "cacheOutput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-oss-120b-1:0": {
    "family": "gpt-oss",
    "lastUpdated": "2024-12-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "us-anthropic-claude-opus-4-20250514-v1:0": {
    "family": "claude-opus",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-05-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000,
      "pricing": {
        "cacheInput": 1.5,
        "cacheOutput": 18.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nvidia-nemotron-nano-12b-v2": {
    "family": "nemotron",
    "lastUpdated": "2024-12-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-3-7-sonnet-20250219-v1:0": {
    "family": "claude-sonnet",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-02-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "global-anthropic-claude-opus-4-5-20251101-v1:0": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-08-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-ministral-3-8b-instruct": {
    "family": "ministral",
    "lastUpdated": "2024-12-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-oss-safeguard-20b": {
    "lastUpdated": "2025-10-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.037
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "amazon-nova-lite-v1:0": {
    "family": "nova-lite",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-12-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.015
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "eu-anthropic-claude-sonnet-4-5-20250929-v1:0": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-07-31",
    "lastUpdated": "2025-09-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama3-1-8b-instruct-v1:0": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-sonnet-4-5-20250929-v1:0": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-07-31",
    "lastUpdated": "2025-09-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama4-maverick-17b-instruct-v1:0": {
    "family": "llama",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-ministral-3-14b-instruct": {
    "family": "ministral",
    "lastUpdated": "2024-12-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-mistral-7b-instruct-v0:2": {
    "family": "mistral",
    "lastUpdated": "2025-04-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 127000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "amazon-nova-micro-v1:0": {
    "family": "nova-micro",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-12-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.00875
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-3-5-sonnet-20241022-v2:0": {
    "family": "claude-sonnet",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-10-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-v3-2-v1:0": {
    "family": "deepseek",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2026-02-15",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 81920
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-sonnet-4-20250514-v1:0": {
    "family": "claude-sonnet",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-05-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-vl-235b-a22b": {
    "family": "qwen",
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "global-anthropic-claude-opus-4-6-v1": {
    "family": "claude-opus",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2026-02-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25,
        "contextOver200k": {
          "input": 10,
          "output": 37.5,
          "cacheRead": 1
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "writer-palmyra-x4-v1:0": {
    "family": "palmyra",
    "lastUpdated": "2025-04-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-mixtral-8x7b-instruct-v0:1": {
    "family": "mixtral",
    "lastUpdated": "2025-04-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "amazon-nova-pro-v1:0": {
    "family": "nova-pro",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-12-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "us-anthropic-claude-opus-4-5-20251101-v1:0": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-08-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama3-2-90b-instruct-v1:0": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-09-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "us-anthropic-claude-opus-4-6-v1": {
    "family": "claude-opus",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2026-02-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25,
        "contextOver200k": {
          "input": 10,
          "output": 37.5,
          "cacheRead": 1
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemma-3-4b-it": {
    "lastUpdated": "2025-03-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 19200
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-opus-4-6-v1": {
    "family": "claude-opus",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2026-02-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25,
        "contextOver200k": {
          "input": 10,
          "output": 37.5,
          "cacheRead": 1
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "amazon-titan-text-express-v1:0:8k": {
    "family": "titan",
    "lastUpdated": "2024-12-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-glm-4-7-flash": {
    "family": "glm-flash",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2026-01-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-opus-4-20250514-v1:0": {
    "family": "claude-opus",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-05-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000,
      "pricing": {
        "cacheInput": 1.5,
        "cacheOutput": 18.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-v2": {
    "family": "claude",
    "trainingCutoff": "2023-08",
    "lastUpdated": "2023-07-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-3-sonnet-20240229-v1:0": {
    "family": "claude-sonnet",
    "trainingCutoff": "2023-08",
    "lastUpdated": "2024-03-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "global-anthropic-claude-sonnet-4-6": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-08",
    "lastUpdated": "2026-02-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75,
        "contextOver200k": {
          "input": 6,
          "output": 22.5,
          "cacheRead": 0.6
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama3-2-1b-instruct-v1:0": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-09-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-opus-4-1-20250805-v1:0": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-08-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000,
      "pricing": {
        "cacheInput": 1.5,
        "cacheOutput": 18.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama4-scout-17b-instruct-v1:0": {
    "family": "llama",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-v2:1": {
    "family": "claude",
    "trainingCutoff": "2023-08",
    "lastUpdated": "2023-11-21",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-mistral-large-2402-v1:0": {
    "family": "mistral-large",
    "lastUpdated": "2024-12-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-v3-v1:0": {
    "family": "deepseek",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2025-09-18",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 81920
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cohere-command-r-plus-v1:0": {
    "family": "command-r",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-04-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "global-anthropic-claude-haiku-4-5-20251001-v1:0": {
    "family": "claude-haiku",
    "trainingCutoff": "2025-02-28",
    "lastUpdated": "2025-10-15",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.1,
        "cacheOutput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "writer-palmyra-x5-v1:0": {
    "family": "palmyra",
    "lastUpdated": "2025-04-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama3-3-70b-instruct-v1:0": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-12-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-glm-4-7": {
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 40000,
      "pricing": {
        "cacheInput": 0,
        "cacheOutput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "moonshot-kimi-k2-thinking": {
    "lastUpdated": "2025-12-02",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 256000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-3-haiku-20240307-v1:0": {
    "family": "claude-haiku",
    "trainingCutoff": "2024-02",
    "lastUpdated": "2024-03-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "us-anthropic-claude-sonnet-4-5-20250929-v1:0": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-07-31",
    "lastUpdated": "2025-09-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama3-8b-instruct-v1:0": {
    "family": "llama",
    "trainingCutoff": "2023-03",
    "lastUpdated": "2024-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2048
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-oss-20b-1:0": {
    "family": "gpt-oss",
    "lastUpdated": "2024-12-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "us-anthropic-claude-sonnet-4-6": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-08",
    "lastUpdated": "2026-02-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75,
        "contextOver200k": {
          "input": 6,
          "output": 22.5,
          "cacheRead": 0.6
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama3-2-11b-instruct-v1:0": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-09-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "eu-anthropic-claude-opus-4-5-20251101-v1:0": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-08-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cohere-command-text-v14": {
    "family": "command",
    "trainingCutoff": "2023-08",
    "lastUpdated": "2023-11-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-next-80b-a3b": {
    "family": "qwen",
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "us-anthropic-claude-sonnet-4-20250514-v1:0": {
    "family": "claude-sonnet",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-05-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "ai21-jamba-1-5-mini-v1:0": {
    "family": "jamba",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2024-08-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama3-70b-instruct-v1:0": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2048
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "ai21-jamba-1-5-large-v1:0": {
    "family": "jamba",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2024-08-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-coder-30b-a3b-v1:0": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-09-18",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-3-opus-20240229-v1:0": {
    "family": "claude-opus",
    "trainingCutoff": "2023-08",
    "lastUpdated": "2024-02-29",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "us-anthropic-claude-haiku-4-5-20251001-v1:0": {
    "family": "claude-haiku",
    "trainingCutoff": "2025-02-28",
    "lastUpdated": "2025-10-15",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.1,
        "cacheOutput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-235b-a22b-2507-v1:0": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-09-18",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-oss-safeguard-120b": {
    "family": "gpt-oss",
    "lastUpdated": "2024-12-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-3-5-sonnet-20240620-v1:0": {
    "family": "claude-sonnet",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-06-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-voxtral-small-24b-2507": {
    "family": "mistral",
    "lastUpdated": "2025-07-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cohere-command-light-text-v14": {
    "family": "command-light",
    "trainingCutoff": "2023-08",
    "lastUpdated": "2023-11-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-haiku-4-5-20251001-v1:0": {
    "family": "claude-haiku",
    "trainingCutoff": "2025-02-28",
    "lastUpdated": "2025-10-15",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.1,
        "cacheOutput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama3-2-3b-instruct-v1:0": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-09-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "us-anthropic-claude-opus-4-1-20250805-v1:0": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-08-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000,
      "pricing": {
        "cacheInput": 1.5,
        "cacheOutput": 18.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "global-anthropic-claude-sonnet-4-20250514-v1:0": {
    "family": "claude-sonnet",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-05-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-3-5-haiku-20241022-v1:0": {
    "family": "claude-haiku",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2024-10-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.08,
        "cacheOutput": 1
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "eu-anthropic-claude-sonnet-4-20250514-v1:0": {
    "family": "claude-sonnet",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-05-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-opus-4-5-20251101-v1:0": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-08-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "eu-anthropic-claude-opus-4-6-v1": {
    "family": "claude-opus",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2026-02-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25,
        "contextOver200k": {
          "input": 10,
          "output": 37.5,
          "cacheRead": 1
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "amazon-nova-premier-v1:0": {
    "family": "nova",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-12-03",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "amazon-nova-2-lite-v1:0": {
    "family": "nova",
    "lastUpdated": "2024-12-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-32b-v1:0": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-09-18",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-voxtral-mini-3b-2507": {
    "family": "mistral",
    "lastUpdated": "2024-12-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "audio",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "global-anthropic-claude-sonnet-4-5-20250929-v1:0": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-07-31",
    "lastUpdated": "2025-09-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "ring-1t": {
    "family": "ring",
    "trainingCutoff": "2024-06",
    "lastUpdated": "2025-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "ling-1t": {
    "family": "ling",
    "trainingCutoff": "2024-06",
    "lastUpdated": "2025-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "phi-3-small-8k-instruct": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-04-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2048
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-4o": {
    "family": "gpt",
    "trainingCutoff": "2023-09",
    "lastUpdated": "2024-05-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "codestral-2501": {
    "family": "codestral",
    "trainingCutoff": "2024-03",
    "lastUpdated": "2025-01-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 256000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-small-2503": {
    "family": "mistral-small",
    "trainingCutoff": "2024-09",
    "lastUpdated": "2025-03-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "o1-mini": {
    "family": "o-mini",
    "trainingCutoff": "2023-09",
    "lastUpdated": "2024-09-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.55
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-3-5-turbo-instruct": {
    "family": "gpt",
    "trainingCutoff": "2021-08",
    "lastUpdated": "2023-09-21",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-4": {
    "family": "gpt",
    "trainingCutoff": "2023-11",
    "lastUpdated": "2023-03-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-3-5-turbo-1106": {
    "family": "gpt",
    "trainingCutoff": "2021-08",
    "lastUpdated": "2023-11-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "phi-4-reasoning": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-12-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "phi-3-mini-128k-instruct": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-04-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-mini": {
    "family": "gpt-mini",
    "trainingCutoff": "2024-05-30",
    "lastUpdated": "2025-08-07",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.03
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-4-maverick-17b-128e-instruct-fp8": {
    "family": "llama",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-4-fast-non-reasoning": {
    "family": "grok",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2025-09-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 30000,
      "pricing": {
        "cacheInput": 0.05
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "o3-mini": {
    "family": "o-mini",
    "trainingCutoff": "2024-05",
    "lastUpdated": "2025-01-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 100000,
      "pricing": {
        "cacheInput": 0.55
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cohere-embed-v3-english": {
    "family": "cohere-embed",
    "lastUpdated": "2023-11-07",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1024
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "phi-3-medium-4k-instruct": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-04-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1024
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cohere-embed-v3-multilingual": {
    "family": "cohere-embed",
    "lastUpdated": "2023-11-07",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1024
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-3-5-turbo-0125": {
    "family": "gpt",
    "trainingCutoff": "2021-08",
    "lastUpdated": "2024-01-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "phi-4-mini-reasoning": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-12-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-large-2411": {
    "family": "mistral-large",
    "trainingCutoff": "2024-09",
    "lastUpdated": "2024-11-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "o1-preview": {
    "family": "o",
    "trainingCutoff": "2023-09",
    "lastUpdated": "2024-09-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "cacheInput": 8.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "phi-3-mini-4k-instruct": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-04-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1024
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "codex-mini": {
    "family": "gpt-codex-mini",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-05-16",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 100000,
      "pricing": {
        "cacheInput": 0.375
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "phi-4-reasoning-plus": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-12-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-4-1-mini": {
    "family": "gpt-mini",
    "trainingCutoff": "2024-05",
    "lastUpdated": "2025-04-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "cacheInput": 0.1
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "phi-4": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-12-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "o4-mini": {
    "family": "o-mini",
    "trainingCutoff": "2024-05",
    "lastUpdated": "2025-04-16",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 100000,
      "pricing": {
        "cacheInput": 0.28
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-4-32k": {
    "family": "gpt",
    "trainingCutoff": "2023-11",
    "lastUpdated": "2023-03-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-3-mini": {
    "family": "grok",
    "trainingCutoff": "2024-11",
    "lastUpdated": "2025-02-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.075,
        "reasoning": 0.5
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cohere-embed-v-4-0": {
    "family": "cohere-embed",
    "lastUpdated": "2025-04-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-nemo": {
    "family": "mistral-nemo",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2024-07-18",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-4-turbo": {
    "family": "gpt",
    "trainingCutoff": "2023-11",
    "lastUpdated": "2024-04-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-4-1": {
    "family": "gpt",
    "trainingCutoff": "2024-06",
    "lastUpdated": "2025-04-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "model-router": {
    "family": "model-router",
    "lastUpdated": "2025-11-18",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "text-embedding-3-large": {
    "family": "text-embedding",
    "lastUpdated": "2024-01-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 3072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-3-5-turbo-0613": {
    "family": "gpt",
    "trainingCutoff": "2021-08",
    "lastUpdated": "2023-06-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cohere-command-r-08-2024": {
    "family": "command-r",
    "trainingCutoff": "2024-06-01",
    "lastUpdated": "2024-08-30",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-4-1-nano": {
    "family": "gpt-nano",
    "trainingCutoff": "2024-05",
    "lastUpdated": "2025-04-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "cacheInput": 0.03
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-v3-2-speciale": {
    "family": "deepseek",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2025-12-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "phi-4-mini": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-12-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "text-embedding-3-small": {
    "family": "text-embedding",
    "lastUpdated": "2024-01-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-3-5-turbo-0301": {
    "family": "gpt",
    "trainingCutoff": "2021-08",
    "lastUpdated": "2023-03-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-3-70b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-04-18",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2048
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-3-2-11b-vision-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-09-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-3-8b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-04-18",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2048
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-1-chat": {
    "family": "gpt-codex",
    "trainingCutoff": "2024-09-30",
    "lastUpdated": "2025-11-14",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio"
      ],
      "output": [
        "text",
        "image",
        "audio"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-chat": {
    "family": "gpt-codex",
    "trainingCutoff": "2024-10-24",
    "lastUpdated": "2025-08-07",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 0.13
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-2-chat": {
    "family": "gpt-codex",
    "trainingCutoff": "2025-08-31",
    "lastUpdated": "2025-12-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 0.175
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cohere-command-r-plus-08-2024": {
    "family": "command-r",
    "trainingCutoff": "2024-06-01",
    "lastUpdated": "2024-08-30",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-4-scout-17b-16e-instruct": {
    "family": "llama",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-medium-2505": {
    "family": "mistral-medium",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2025-05-07",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cohere-command-a": {
    "family": "command-a",
    "trainingCutoff": "2024-06-01",
    "lastUpdated": "2025-03-13",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "phi-3-5-mini-instruct": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-08-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-code-fast-1": {
    "family": "grok",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2025-08-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 10000,
      "pricing": {
        "cacheInput": 0.02
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-3-2-90b-vision-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-09-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "ministral-3b": {
    "family": "ministral",
    "trainingCutoff": "2024-03",
    "lastUpdated": "2024-10-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-4-turbo-vision": {
    "family": "gpt",
    "trainingCutoff": "2023-11",
    "lastUpdated": "2024-04-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "phi-3-5-moe-instruct": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-08-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mai-ds-r1": {
    "family": "mai",
    "trainingCutoff": "2024-06",
    "lastUpdated": "2025-01-20",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "phi-4-multimodal": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-12-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "inputAudio": 4
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "phi-3-medium-128k-instruct": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-04-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-4-fast-reasoning": {
    "family": "grok",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2025-09-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 30000,
      "pricing": {
        "cacheInput": 0.05
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "text-embedding-ada-002": {
    "family": "text-embedding",
    "lastUpdated": "2022-12-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-4o-mini": {
    "family": "gpt-mini",
    "trainingCutoff": "2023-09",
    "lastUpdated": "2024-07-18",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 0.08
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "phi-3-small-128k-instruct": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-04-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-pro": {
    "family": "gpt-pro",
    "trainingCutoff": "2024-09-30",
    "lastUpdated": "2025-10-06",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 272000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-vl-plus": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-08-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-vl-max": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-08-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-14b": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "reasoning": 1.434
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-coder-flash": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-vl-30b-a3b": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "reasoning": 1.076
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-asr-flash": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-09-08",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-max": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-01-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen2-5-7b-instruct": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen2-5-14b-instruct": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-8b": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "reasoning": 0.717
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-5-397b-a17b": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2026-02-16",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "reasoning": 2.58
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qvq-max": {
    "family": "qvq",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-03-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen2-5-omni-7b": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-12",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text",
        "audio"
      ]
    },
    "specs": {
      "maxOutputTokens": 2048,
      "pricing": {
        "inputAudio": 5.448
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-omni-turbo-realtime": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-05-08",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio"
      ],
      "output": [
        "text",
        "audio"
      ]
    },
    "specs": {
      "maxOutputTokens": 2048,
      "pricing": {
        "inputAudio": 3.584,
        "outputAudio": 7.168
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-omni-turbo": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-03-26",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text",
        "audio"
      ]
    },
    "specs": {
      "maxOutputTokens": 2048,
      "pricing": {
        "inputAudio": 3.584,
        "outputAudio": 7.168
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-mt-plus": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-livetranslate-flash-realtime": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-09-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text",
        "audio"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "inputAudio": 10,
        "outputAudio": 38
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-plus": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-09-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "reasoning": 1.147
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen2-5-32b-instruct": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-5-plus": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2026-02-16",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "reasoning": 3.44
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-omni-flash": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-09-15",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text",
        "audio"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "inputAudio": 3.584,
        "outputAudio": 7.168
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-flash": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-07-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen2-5-72b-instruct": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-omni-flash-realtime": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-09-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio"
      ],
      "output": [
        "text",
        "audio"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "inputAudio": 3.584,
        "outputAudio": 7.168
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-vl-ocr": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-04-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwq-plus": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-03-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-vl-235b-a22b": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "reasoning": 2.867051
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-plus-character-ja": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 512
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-mt-turbo": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-ibm-granite-granite-4-0-h-micro": {
    "family": "granite",
    "lastUpdated": "2025-10-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-baai-bge-small-en-v1-5": {
    "family": "bge",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-baai-bge-large-en-v1-5": {
    "family": "bge",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-baai-bge-reranker-base": {
    "family": "bge",
    "lastUpdated": "2025-04-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-baai-bge-m3": {
    "family": "bge",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-baai-bge-base-en-v1-5": {
    "family": "bge",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-pfnet-plamo-embedding-1b": {
    "family": "plamo",
    "lastUpdated": "2025-09-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-deepseek-ai-deepseek-r1-distill-qwen-32b": {
    "family": "deepseek-thinking",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-facebook-bart-large-cnn": {
    "family": "bart",
    "lastUpdated": "2025-04-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-mistral-mistral-7b-instruct-v0-1": {
    "family": "mistral",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-myshell-ai-melotts": {
    "family": "melotts",
    "lastUpdated": "2025-11-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-pipecat-ai-smart-turn-v2": {
    "family": "smart-turn",
    "lastUpdated": "2025-11-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-google-gemma-3-12b-it": {
    "family": "gemma",
    "lastUpdated": "2025-04-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-qwen-qwq-32b": {
    "family": "qwen",
    "lastUpdated": "2025-04-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-qwen-qwen3-30b-a3b-fp8": {
    "family": "qwen",
    "lastUpdated": "2025-11-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-qwen-qwen2-5-coder-32b-instruct": {
    "family": "qwen",
    "lastUpdated": "2025-04-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-qwen-qwen3-embedding-0-6b": {
    "family": "qwen",
    "lastUpdated": "2025-11-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-meta-llama-3-1-8b-instruct-fp8": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-meta-llama-3-8b-instruct-awq": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-meta-llama-3-1-8b-instruct-awq": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-meta-llama-4-scout-17b-16e-instruct": {
    "family": "llama",
    "lastUpdated": "2025-04-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-meta-llama-3-2-11b-vision-instruct": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-meta-llama-3-2-3b-instruct": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-meta-llama-guard-3-8b": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-meta-llama-3-2-1b-instruct": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-meta-llama-3-3-70b-instruct-fp8-fast": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-meta-llama-3-1-8b-instruct": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-meta-m2m100-1-2b": {
    "family": "m2m",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-meta-llama-2-7b-chat-fp16": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-meta-llama-3-8b-instruct": {
    "family": "llama",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-mistralai-mistral-small-3-1-24b-instruct": {
    "family": "mistral-small",
    "lastUpdated": "2025-04-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-deepgram-aura-2-es": {
    "family": "aura",
    "lastUpdated": "2025-11-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-deepgram-nova-3": {
    "family": "nova",
    "lastUpdated": "2025-11-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-deepgram-aura-2-en": {
    "family": "aura",
    "lastUpdated": "2025-11-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-openai-gpt-oss-120b": {
    "lastUpdated": "2025-08-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-openai-gpt-oss-20b": {
    "lastUpdated": "2025-08-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-ai4bharat-indictrans2-en-indic-1b": {
    "family": "indictrans",
    "lastUpdated": "2025-09-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-huggingface-distilbert-sst-2-int8": {
    "family": "distilbert",
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "@cf-aisingapore-gemma-sea-lion-v4-27b-it": {
    "family": "gemma",
    "lastUpdated": "2025-09-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama3-70b-8192": {
    "family": "llama",
    "trainingCutoff": "2023-03",
    "lastUpdated": "2024-04-18",
    "status": "deprecated",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-3-1-8b-instant": {
    "family": "llama",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2024-07-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32678
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-guard-3-8b": {
    "family": "llama",
    "lastUpdated": "2024-07-23",
    "status": "deprecated",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama3-8b-8192": {
    "family": "llama",
    "trainingCutoff": "2023-03",
    "lastUpdated": "2024-04-18",
    "status": "deprecated",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-saba-24b": {
    "family": "mistral",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-02-06",
    "status": "deprecated",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-3-3-70b-versatile": {
    "family": "llama",
    "trainingCutoff": "2024-12",
    "lastUpdated": "2024-12-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32678
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemma2-9b-it": {
    "family": "gemma",
    "trainingCutoff": "2024-06",
    "lastUpdated": "2024-06-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-guard-4-12b": {
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-4-maverick-17b-128e-instruct": {
    "family": "llama",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "coding-glm-4-7-free": {
    "family": "glm",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-12-22",
    "interleavedReasoningField": "reasoning_details",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0,
        "cacheOutput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "coding-minimax-m2-1-free": {
    "family": "minimax",
    "lastUpdated": "2025-12-23",
    "interleavedReasoningField": "reasoning_details",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-opus-4-6-think": {
    "family": "claude-opus",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2026-02-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75,
        "contextOver200k": {
          "input": 6,
          "output": 22,
          "cacheRead": 0.6
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-3-pro-preview-search": {
    "family": "gemini-pro",
    "trainingCutoff": "2025-11",
    "lastUpdated": "2025-11-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65000,
      "pricing": {
        "cacheInput": 0.5
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-v3-2-think": {
    "family": "deepseek",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2025-12-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-max-2026-01-23": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-09-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-v3-2-fast": {
    "family": "deepseek",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2025-12-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "coding-glm-4-7": {
    "family": "glm",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-12-22",
    "interleavedReasoningField": "reasoning_details",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.548
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-sonnet-4-6-think": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-08",
    "lastUpdated": "2026-02-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75,
        "contextOver200k": {
          "input": 6,
          "output": 22.5,
          "cacheRead": 0.6
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "k2p5": {
    "family": "kimi-thinking",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2026-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "cacheInput": 0,
        "cacheOutput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "devstral-medium-2507": {
    "family": "devstral",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2025-07-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "labs-devstral-small-2512": {
    "family": "devstral",
    "trainingCutoff": "2025-12",
    "lastUpdated": "2025-12-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 256000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "devstral-medium-latest": {
    "family": "devstral",
    "trainingCutoff": "2025-12",
    "lastUpdated": "2025-12-02",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "open-7b": {
    "family": "mistral",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2023-09-27",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "small-2506": {
    "family": "mistral-small",
    "trainingCutoff": "2025-03",
    "lastUpdated": "2025-06-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "medium-2505": {
    "family": "mistral-medium",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2025-05-07",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "codestral-latest": {
    "family": "codestral",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-01-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "ministral-8b-latest": {
    "family": "ministral",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-10-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "magistral-small": {
    "family": "magistral-small",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2025-03-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "large-2512": {
    "family": "mistral-large",
    "trainingCutoff": "2024-11",
    "lastUpdated": "2025-12-02",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "ministral-3b-latest": {
    "family": "ministral",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-10-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "embed": {
    "family": "mistral-embed",
    "lastUpdated": "2023-12-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 3072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "devstral-small-2505": {
    "family": "devstral",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2025-05-07",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "pixtral-12b": {
    "family": "pixtral",
    "trainingCutoff": "2024-09",
    "lastUpdated": "2024-09-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "open-mixtral-8x7b": {
    "family": "mixtral",
    "trainingCutoff": "2024-01",
    "lastUpdated": "2023-12-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "pixtral-large-latest": {
    "family": "pixtral",
    "trainingCutoff": "2024-11",
    "lastUpdated": "2024-11-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nemo": {
    "family": "mistral-nemo",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2024-07-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "devstral-2512": {
    "trainingCutoff": "2025-12",
    "lastUpdated": "2025-12-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "large-latest": {
    "family": "mistral-large",
    "trainingCutoff": "2024-11",
    "lastUpdated": "2025-12-02",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "medium-2508": {
    "family": "mistral-medium",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2025-08-12",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "large-2411": {
    "family": "mistral-large",
    "trainingCutoff": "2024-11",
    "lastUpdated": "2024-11-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "small-latest": {
    "family": "mistral-small",
    "trainingCutoff": "2025-03",
    "lastUpdated": "2024-09-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "open-mixtral-8x22b": {
    "family": "mixtral",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-04-17",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "medium-latest": {
    "family": "mistral-medium",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2025-05-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "devstral-small-2507": {
    "family": "devstral",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2025-07-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "magistral-medium-latest": {
    "family": "magistral-medium",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2025-03-20",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-2-0-pro-exp-02-05": {
    "family": "gemini-pro",
    "lastUpdated": "2025-02-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-4o-2024-11-20": {
    "family": "gpt",
    "trainingCutoff": "2023-09",
    "lastUpdated": "2024-11-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-opus-4-5-20251101": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-11-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-2-chat-latest": {
    "family": "gpt-codex",
    "trainingCutoff": "2025-08-31",
    "lastUpdated": "2025-12-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 0.175
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-4-0709": {
    "family": "grok",
    "lastUpdated": "2026-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-4-1-fast-non-reasoning": {
    "family": "grok",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2025-11-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 30000,
      "pricing": {
        "cacheInput": 0.05
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-2-0-flash-001": {
    "family": "gemini-flash",
    "lastUpdated": "2025-02-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-opus-4-20250514": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-05-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000,
      "pricing": {
        "cacheInput": 1.5,
        "cacheOutput": 18.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-sonnet-4-5-20250929": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-07-31",
    "lastUpdated": "2025-09-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "o3-pro": {
    "family": "o-pro",
    "trainingCutoff": "2024-05",
    "lastUpdated": "2025-06-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 100000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-3-7-sonnet-20250219": {
    "family": "claude-sonnet",
    "trainingCutoff": "2024-10-31",
    "lastUpdated": "2025-02-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-haiku-4-5-20251001": {
    "family": "claude-haiku",
    "trainingCutoff": "2025-02-28",
    "lastUpdated": "2025-10-15",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.1,
        "cacheOutput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kimi-k2-turbo-preview": {
    "family": "kimi",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-09-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144,
      "pricing": {
        "cacheInput": 0.6
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-2-5-coder-32b": {
    "family": "qwen",
    "lastUpdated": "2024-11-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "route-llm": {
    "family": "gpt",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-01-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-sonnet-4-20250514": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-05-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-1-chat-latest": {
    "family": "gpt-codex",
    "trainingCutoff": "2024-09-30",
    "lastUpdated": "2025-11-13",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-opus-4-1-20250805": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-08-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000,
      "pricing": {
        "cacheInput": 1.5,
        "cacheOutput": 18.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-meta-llama-3-1-405b-instruct-turbo": {
    "family": "llama",
    "lastUpdated": "2024-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-meta-llama-3-1-70b-instruct": {
    "family": "llama",
    "lastUpdated": "2024-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen2-5-72b-instruct": {
    "family": "qwen",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "accounts-fireworks-models-kimi-k2-instruct": {
    "family": "kimi",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-07-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "accounts-fireworks-models-glm-4p7": {
    "family": "glm",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-12-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 198000,
      "pricing": {
        "cacheInput": 0.3
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "accounts-fireworks-models-glm-5": {
    "family": "glm",
    "lastUpdated": "2026-02-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.5
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "accounts-fireworks-models-deepseek-v3p1": {
    "family": "deepseek",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2025-08-21",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 163840
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "accounts-fireworks-models-minimax-m2p1": {
    "family": "minimax",
    "lastUpdated": "2025-12-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 200000,
      "pricing": {
        "cacheInput": 0.03
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "accounts-fireworks-models-glm-4p5-air": {
    "family": "glm-air",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-08-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "accounts-fireworks-models-deepseek-v3p2": {
    "family": "deepseek",
    "trainingCutoff": "2025-09",
    "lastUpdated": "2025-12-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 160000,
      "pricing": {
        "cacheInput": 0.28
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "accounts-fireworks-models-minimax-m2p5": {
    "family": "minimax",
    "lastUpdated": "2026-02-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 196608,
      "pricing": {
        "cacheInput": 0.03
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "accounts-fireworks-models-gpt-oss-120b": {
    "family": "gpt-oss",
    "lastUpdated": "2025-08-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "accounts-fireworks-models-kimi-k2p5": {
    "family": "kimi-thinking",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2026-01-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 256000,
      "pricing": {
        "cacheInput": 0.1
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "accounts-fireworks-models-kimi-k2-thinking": {
    "family": "kimi-thinking",
    "lastUpdated": "2025-11-06",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 256000,
      "pricing": {
        "cacheInput": 0.3
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "accounts-fireworks-models-glm-4p5": {
    "family": "glm",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "accounts-fireworks-models-gpt-oss-20b": {
    "family": "gpt-oss",
    "lastUpdated": "2025-08-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "step-3-5-flash": {
    "trainingCutoff": "2025-01",
    "lastUpdated": "2026-02-13",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 256000,
      "pricing": {
        "cacheInput": 0.019
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "step-2-16k": {
    "trainingCutoff": "2024-06",
    "lastUpdated": "2026-02-13",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 1.04
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "step-1-32k": {
    "trainingCutoff": "2024-06",
    "lastUpdated": "2026-02-13",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "cacheInput": 0.41
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "duo-chat-gpt-5-2-codex": {
    "family": "gpt-codex",
    "trainingCutoff": "2025-08-31",
    "lastUpdated": "2026-01-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "duo-chat-opus-4-6": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2026-02-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0,
        "cacheOutput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "duo-chat-gpt-5-mini": {
    "family": "gpt-mini",
    "trainingCutoff": "2024-05-30",
    "lastUpdated": "2026-01-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "duo-chat-sonnet-4-5": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-07-31",
    "lastUpdated": "2026-01-08",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0,
        "cacheOutput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "duo-chat-haiku-4-5": {
    "family": "claude-haiku",
    "trainingCutoff": "2025-02-28",
    "lastUpdated": "2026-01-08",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0,
        "cacheOutput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "duo-chat-gpt-5-codex": {
    "family": "gpt-codex",
    "trainingCutoff": "2024-09-30",
    "lastUpdated": "2026-01-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "duo-chat-gpt-5-2": {
    "family": "gpt",
    "trainingCutoff": "2025-08-31",
    "lastUpdated": "2026-01-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "duo-chat-sonnet-4-6": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-08-31",
    "lastUpdated": "2026-02-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0,
        "cacheOutput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "duo-chat-opus-4-5": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2026-01-08",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0,
        "cacheOutput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "duo-chat-gpt-5-1": {
    "family": "gpt",
    "trainingCutoff": "2024-09-30",
    "lastUpdated": "2026-01-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nex-agi-deepseek-v3-1-nex-n1": {
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 163840
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-r1-distill-qwen-32b": {
    "family": "qwen",
    "lastUpdated": "2025-11-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-r1-distill-qwen-14b": {
    "family": "qwen",
    "lastUpdated": "2025-11-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-v3-2-exp": {
    "family": "deepseek",
    "lastUpdated": "2025-10-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 164000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-vl2": {
    "family": "deepseek",
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-v3": {
    "family": "deepseek",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 163840
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "bytedance-seed-seed-oss-36b-instruct": {
    "family": "seed",
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "tencent-hunyuan-a13b-instruct": {
    "lastUpdated": "2025-11-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "tencent-hunyuan-mt-7b": {
    "family": "hunyuan",
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 33000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "inclusionai-ling-flash-2-0": {
    "family": "ling",
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "inclusionai-ring-flash-2-0": {
    "family": "ring",
    "lastUpdated": "2025-11-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "inclusionai-ling-mini-2-0": {
    "family": "ling",
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "baidu-ernie-4-5-300b-a47b": {
    "lastUpdated": "2026-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 12000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "stepfun-ai-step-3-5-flash": {
    "family": "step",
    "lastUpdated": "2026-02-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-vl-32b-instruct": {
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen2-5-vl-7b-instruct": {
    "family": "qwen",
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen2-5-32b-instruct": {
    "family": "qwen",
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-8b": {
    "lastUpdated": "2025-04",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.05
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen2-5-14b-instruct": {
    "family": "qwen",
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen2-5-72b-instruct-128k": {
    "family": "qwen",
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-omni-30b-a3b-captioner": {
    "family": "qwen",
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 66000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-vl-8b-thinking": {
    "lastUpdated": "2025-11-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-vl-32b-thinking": {
    "family": "qwen",
    "lastUpdated": "2025-11-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-14b": {
    "family": "qwen",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 40960
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "thudm-glm-4-32b-0414": {
    "family": "glm",
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 33000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "thudm-glm-4-9b-0414": {
    "family": "glm",
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 33000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "thudm-glm-z1-32b-0414": {
    "family": "glm-z",
    "lastUpdated": "2025-11-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "thudm-glm-z1-9b-0414": {
    "family": "glm-z",
    "lastUpdated": "2025-11-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "essentialai-rnj-1-instruct": {
    "lastUpdated": "2025-12-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 6554
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimaxai-minimax-m2-5": {
    "family": "minimax",
    "lastUpdated": "2026-02-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 196608
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-3-3-70b-instruct-turbo": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-12-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-235b-a22b-instruct-2507-tput": {
    "family": "qwen",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2025-07-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-coder-next-fp8": {
    "family": "qwen",
    "trainingCutoff": "2026-02-03",
    "lastUpdated": "2026-02-03",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "baai-bge-reranker-v2-m3": {
    "family": "bge",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 512
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "intfloat-multilingual-e5-large": {
    "family": "text-embedding",
    "trainingCutoff": "2025-09",
    "lastUpdated": "2025-09-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1024
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-small-3-2-24b-instruct-2506": {
    "family": "mistral-small",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-06-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nexus-coder": {
    "family": "lucid",
    "trainingCutoff": "2025-08-01",
    "lastUpdated": "2025-09-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 60000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "lucidnova-rf1-100b": {
    "family": "nova",
    "trainingCutoff": "2025-09-16",
    "lastUpdated": "2025-09-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "glm-4-6v-flash": {
    "family": "glm",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-12-08",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "reasoner": {
    "family": "deepseek-thinking",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2025-09-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.028
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "chat": {
    "family": "deepseek",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2025-09-29",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.028
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-30b-a3b-2507": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-30",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-coder-30b": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "prime-intellect-intellect-3": {
    "lastUpdated": "2026-02-04",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "featherless-qwerky-72b": {
    "family": "qwerky",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-03-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "allenai-molmo-2-8b:free": {
    "family": "allenai",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2026-01-31",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 36864
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nvidia-nemotron-nano-9b-v2:free": {
    "lastUpdated": "2025-08-18",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 25600
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nvidia-nemotron-nano-12b-v2-vl:free": {
    "lastUpdated": "2026-01-31",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nvidia-nemotron-3-nano-30b-a3b:free": {
    "lastUpdated": "2026-01-31",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 51200
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "arcee-ai-trinity-large-preview:free": {
    "lastUpdated": "2026-01-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26200
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "arcee-ai-trinity-mini:free": {
    "lastUpdated": "2026-01-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "microsoft-mai-ds-r1:free": {
    "family": "mai",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04-21",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 163840
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "sarvamai-sarvam-m:free": {
    "family": "sarvam",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2025-05-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "liquid-lfm-2-5-1-2b-thinking:free": {
    "lastUpdated": "2026-01-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 6554
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "liquid-lfm-2-5-1-2b-instruct:free": {
    "lastUpdated": "2026-01-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 6554
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "thudm-glm-z1-32b:free": {
    "family": "glm-z",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "sourceful-riverflow-v2-fast-preview": {
    "family": "sourceful",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2026-01-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "image"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "sourceful-riverflow-v2-max-preview": {
    "family": "sourceful",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2026-01-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "image"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "sourceful-riverflow-v2-standard-preview": {
    "family": "sourceful",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2026-01-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "image"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "rekaai-reka-flash-3": {
    "family": "reka",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-03-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "stepfun-step-3-5-flash:free": {
    "lastUpdated": "2026-01-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 256000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cognitivecomputations-dolphin3-0-r1-mistral-24b": {
    "family": "mistral",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-02-13",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cognitivecomputations-dolphin3-0-mistral-24b": {
    "family": "mistral",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-02-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cognitivecomputations-dolphin-mistral-24b-venice-edition:free": {
    "lastUpdated": "2026-01-31",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 6554
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kwaipilot-kat-coder-pro:free": {
    "family": "kat-coder",
    "trainingCutoff": "2025-11",
    "lastUpdated": "2025-11-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-v3-1-terminus:exacto": {
    "lastUpdated": "2025-09-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "cacheInput": 0.168
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-r1-0528:free": {
    "lastUpdated": "2025-05-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 163840
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-r1-distill-qwen-14b": {
    "family": "qwen",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-01-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-r1:free": {
    "family": "deepseek",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-01-20",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 163840
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-r1-0528-qwen3-8b:free": {
    "family": "qwen",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2025-05-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-v3-2-speciale": {
    "lastUpdated": "2025-12-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.135
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-chat-v3-1": {
    "lastUpdated": "2025-08-21",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 7168
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-chat-v3-0324": {
    "lastUpdated": "2025-03-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.095
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-v3-base:free": {
    "family": "deepseek",
    "trainingCutoff": "2025-03",
    "lastUpdated": "2025-03-29",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 163840
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "sherlock-think-alpha": {
    "family": "sherlock",
    "trainingCutoff": "2025-11",
    "lastUpdated": "2025-12-14",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "sherlock-dash-alpha": {
    "family": "sherlock",
    "trainingCutoff": "2025-11",
    "lastUpdated": "2025-12-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "aurora-alpha": {
    "lastUpdated": "2026-02-09",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 50000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "moonshotai-kimi-dev-72b:free": {
    "family": "kimi",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2025-06-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "moonshotai-kimi-k2-0905:exacto": {
    "lastUpdated": "2025-09-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 52429
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "moonshotai-kimi-k2:free": {
    "family": "kimi",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32800
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-2-5-flash-lite-preview-09-2025": {
    "lastUpdated": "2025-09-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65535,
      "pricing": {
        "cacheInput": 0.01,
        "cacheOutput": 0.083333
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-3-1-pro-preview-customtools": {
    "family": "gemini-pro",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2026-02-19",
    "interleavedReasoningField": "reasoning_details",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "reasoning": 12,
        "contextOver200k": {
          "input": 4,
          "output": 18,
          "cacheRead": 0.4
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-2-5-pro-preview-06-05": {
    "family": "gemini-pro",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-06-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.31
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemma-3n-e4b-it:free": {
    "lastUpdated": "2025-05-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2048
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-2-5-flash-preview-09-2025": {
    "lastUpdated": "2025-09-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.03,
        "cacheOutput": 0.083333
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-2-5-pro-preview-05-06": {
    "lastUpdated": "2025-05-06",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65535,
      "pricing": {
        "cacheInput": 0.125,
        "cacheOutput": 0.375
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemma-3n-e2b-it:free": {
    "lastUpdated": "2025-07-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2048
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-2-0-flash-001": {
    "lastUpdated": "2024-12-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.025,
        "cacheOutput": 0.083333
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemma-3-12b-it:free": {
    "lastUpdated": "2025-03-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-3-1-pro-preview": {
    "family": "gemini",
    "lastUpdated": "2026-02-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-2-0-flash-exp:free": {
    "family": "gemini-flash",
    "trainingCutoff": "2024-12",
    "lastUpdated": "2024-12-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1048576
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemma-2-9b-it": {
    "lastUpdated": "2024-06-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1639
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemma-3-4b-it:free": {
    "lastUpdated": "2025-03-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemma-3-27b-it:free": {
    "lastUpdated": "2025-03-12",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "z-ai-glm-4-6:exacto": {
    "lastUpdated": "2025-09-30",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.11
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "z-ai-glm-4-7-flash": {
    "lastUpdated": "2026-01-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 40551,
      "pricing": {
        "cacheInput": 0.01
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "z-ai-glm-4-5-air:free": {
    "lastUpdated": "2025-07-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 96000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "z-ai-glm-4-5v": {
    "lastUpdated": "2025-08-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 0.11
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen-2-5-vl-7b-instruct:free": {
    "family": "qwen",
    "trainingCutoff": "2025-02",
    "lastUpdated": "2024-08-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-32b:free": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 40960
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-coder:free": {
    "lastUpdated": "2025-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-coder-flash": {
    "lastUpdated": "2025-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.06
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-30b-a3b:free": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 40960
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-235b-a22b-07-25:free": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-21",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-14b:free": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 40960
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwq-32b:free": {
    "family": "qwen",
    "trainingCutoff": "2025-03",
    "lastUpdated": "2025-03-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-coder:exacto": {
    "lastUpdated": "2025-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.022
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen-2-5-coder-32b-instruct": {
    "lastUpdated": "2024-11-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "cacheInput": 0.015
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-5-plus-02-15": {
    "lastUpdated": "2026-02-15",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-235b-a22b-07-25": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-21",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-235b-a22b:free": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-next-80b-a3b-instruct:free": {
    "lastUpdated": "2025-09-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 52429
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-4b:free": {
    "lastUpdated": "2025-07-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-8b:free": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 40960
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen2-5-vl-32b-instruct:free": {
    "family": "qwen",
    "trainingCutoff": "2025-03",
    "lastUpdated": "2025-03-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen2-5-vl-72b-instruct:free": {
    "family": "qwen",
    "trainingCutoff": "2025-02",
    "lastUpdated": "2025-02-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "x-ai-grok-3": {
    "lastUpdated": "2025-02-17",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215,
      "pricing": {
        "cacheInput": 0.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "x-ai-grok-3-mini-beta": {
    "lastUpdated": "2025-02-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215,
      "pricing": {
        "cacheInput": 0.075
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "x-ai-grok-3-mini": {
    "lastUpdated": "2025-02-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215,
      "pricing": {
        "cacheInput": 0.075
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "x-ai-grok-3-beta": {
    "lastUpdated": "2025-02-17",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215,
      "pricing": {
        "cacheInput": 0.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-3-3-70b-instruct:free": {
    "lastUpdated": "2024-12-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-4-scout:free": {
    "family": "llama",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-3-2-11b-vision-instruct": {
    "lastUpdated": "2024-09-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-3-2-3b-instruct:free": {
    "lastUpdated": "2024-09-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-3-1-405b-instruct:free": {
    "family": "llama",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "tngtech-tng-r1t-chimera:free": {
    "family": "tngtech",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2026-01-31",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 163840
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "tngtech-deepseek-r1t2-chimera:free": {
    "family": "deepseek-thinking",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2025-07-08",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 163840
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-devstral-medium-2507": {
    "family": "devstral",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2025-07-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-devstral-small-2505:free": {
    "family": "devstral",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2025-05-21",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-medium-3": {
    "lastUpdated": "2025-05-07",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-codestral-2508": {
    "lastUpdated": "2025-08-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 51200
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-devstral-2512:free": {
    "family": "devstral",
    "trainingCutoff": "2025-12",
    "lastUpdated": "2025-09-12",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-small-3-1-24b-instruct": {
    "lastUpdated": "2025-03-17",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.015
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-7b-instruct:free": {
    "family": "mistral",
    "trainingCutoff": "2024-05",
    "lastUpdated": "2024-05-27",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-devstral-2512": {
    "lastUpdated": "2025-09-12",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.025
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-small-3-2-24b-instruct": {
    "lastUpdated": "2025-06-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.03
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-small-3-2-24b-instruct:free": {
    "family": "mistral-small",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2025-06-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 96000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-devstral-small-2507": {
    "family": "devstral",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2025-07-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-nemo:free": {
    "family": "mistral-nemo",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2024-07-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-medium-3-1": {
    "lastUpdated": "2025-08-12",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-oss-120b:exacto": {
    "lastUpdated": "2025-08-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5-2-chat": {
    "lastUpdated": "2025-12-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 0.175
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5-image": {
    "family": "gpt",
    "trainingCutoff": "2024-10-01",
    "lastUpdated": "2025-10-14",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text",
        "image"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-oss-20b:free": {
    "lastUpdated": "2026-01-31",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-oss-120b:free": {
    "lastUpdated": "2025-08-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimax-minimax-m1": {
    "lastUpdated": "2025-06-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 40000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimax-minimax-01": {
    "lastUpdated": "2025-01-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1000192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "bytedance-seed-seedream-4-5": {
    "family": "seed",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2026-01-31",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "black-forest-labs-flux-2-pro": {
    "family": "flux",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2026-01-31",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "specs": {
      "maxOutputTokens": 46864
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "black-forest-labs-flux-2-flex": {
    "family": "flux",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2026-01-31",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "specs": {
      "maxOutputTokens": 67344
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "black-forest-labs-flux-2-max": {
    "family": "flux",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2026-01-31",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "specs": {
      "maxOutputTokens": 46864
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "black-forest-labs-flux-2-klein-4b": {
    "family": "flux",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2026-01-31",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "specs": {
      "maxOutputTokens": 40960
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nousresearch-deephermes-3-llama-3-8b-preview": {
    "family": "llama",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-02-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nousresearch-hermes-3-llama-3-1-405b:free": {
    "lastUpdated": "2024-08-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "ai21-labs-ai21-jamba-1-5-mini": {
    "family": "jamba",
    "trainingCutoff": "2024-03",
    "lastUpdated": "2024-08-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "ai21-labs-ai21-jamba-1-5-large": {
    "family": "jamba",
    "trainingCutoff": "2024-03",
    "lastUpdated": "2024-08-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "microsoft-mai-ds-r1": {
    "family": "mai",
    "trainingCutoff": "2024-06",
    "lastUpdated": "2025-01-20",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "microsoft-phi-3-5-mini-instruct": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-08-20",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "microsoft-phi-4": {
    "lastUpdated": "2024-12-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "microsoft-phi-3-mini-4k-instruct": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-04-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1024
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "microsoft-phi-4-mini-reasoning": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-12-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "microsoft-phi-3-mini-128k-instruct": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-04-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "microsoft-phi-4-reasoning": {
    "family": "phi",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2024-12-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "core42-jais-30b-chat": {
    "family": "jais",
    "trainingCutoff": "2023-03",
    "lastUpdated": "2023-08-30",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2048
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-ai-ministral-3b": {
    "family": "ministral",
    "trainingCutoff": "2024-03",
    "lastUpdated": "2024-10-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-ai-mistral-medium-2505": {
    "family": "mistral-medium",
    "trainingCutoff": "2024-09",
    "lastUpdated": "2025-05-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-ai-mistral-nemo": {
    "family": "mistral-nemo",
    "trainingCutoff": "2024-03",
    "lastUpdated": "2024-07-18",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-ai-mistral-large-2411": {
    "family": "mistral-large",
    "trainingCutoff": "2024-09",
    "lastUpdated": "2024-11-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-ai-mistral-small-2503": {
    "family": "mistral-small",
    "trainingCutoff": "2024-09",
    "lastUpdated": "2025-03-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-ai-codestral-2501": {
    "family": "codestral",
    "trainingCutoff": "2024-03",
    "lastUpdated": "2025-01-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-3-2-90b-vision-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-09-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-meta-llama-3-1-405b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-07-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-meta-llama-3-8b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-04-18",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2048
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-meta-llama-3-70b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-04-18",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2048
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-meta-llama-3-1-70b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-07-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-meta-llama-3-1-8b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-07-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-4-maverick-17b-128e-instruct-fp8": {
    "family": "llama",
    "trainingCutoff": "2024-12",
    "lastUpdated": "2025-01-31",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cohere-cohere-command-a": {
    "family": "command-a",
    "trainingCutoff": "2024-03",
    "lastUpdated": "2024-11-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cohere-cohere-command-r-plus-08-2024": {
    "family": "command-r",
    "trainingCutoff": "2024-03",
    "lastUpdated": "2024-08-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cohere-cohere-command-r": {
    "family": "command-r",
    "trainingCutoff": "2024-03",
    "lastUpdated": "2024-08-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cohere-cohere-command-r-08-2024": {
    "family": "command-r",
    "trainingCutoff": "2024-03",
    "lastUpdated": "2024-08-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cohere-cohere-command-r-plus": {
    "family": "command-r",
    "trainingCutoff": "2024-03",
    "lastUpdated": "2024-08-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-reasoner": {
    "family": "deepseek-thinking",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-01-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.07
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-max-latest": {
    "family": "qwen",
    "trainingCutoff": "2024-11",
    "lastUpdated": "2025-01-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-max-2025-09-23": {
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-09-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-2-5-flash-lite-preview-09-2025": {
    "family": "gemini-flash-lite",
    "lastUpdated": "2026-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-opus-4-1-20250805-thinking": {
    "trainingCutoff": "2025-03",
    "lastUpdated": "2025-05-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-2-5-flash-preview-09-2025": {
    "family": "gemini-flash",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-09-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.075,
        "inputAudio": 1
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-4-1-fast-reasoning": {
    "family": "grok",
    "lastUpdated": "2026-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2000000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kimi-k2-0905-preview": {
    "family": "kimi",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-09-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144,
      "pricing": {
        "cacheInput": 0.15
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-sonnet-4-5-20250929-thinking": {
    "trainingCutoff": "2025-03",
    "lastUpdated": "2025-09-30",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-large-2512": {
    "trainingCutoff": "2024-12",
    "lastUpdated": "2025-12-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "doubao-seed-1-6-vision-250815": {
    "lastUpdated": "2025-09-30",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "doubao-seed-1-6-thinking-250715": {
    "lastUpdated": "2025-07-15",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "doubao-seed-1-8-251215": {
    "lastUpdated": "2025-12-18",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "ministral-14b-2512": {
    "trainingCutoff": "2024-12",
    "lastUpdated": "2025-12-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-2-5-flash-nothink": {
    "family": "gemini-flash",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-06-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-opus-4-5-20251101-thinking": {
    "trainingCutoff": "2025-03",
    "lastUpdated": "2025-11-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-chat": {
    "family": "deepseek",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2024-11-29",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-3-pro-image-preview": {
    "trainingCutoff": "2025-06",
    "lastUpdated": "2025-11-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-thinking": {
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-08-08",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-v3-2-thinking": {
    "trainingCutoff": "2024-12",
    "lastUpdated": "2025-12-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "chatgpt-4o-latest": {
    "family": "gpt",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2024-08-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 2.5
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kimi-k2-thinking-turbo": {
    "family": "kimi-thinking",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-11-06",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144,
      "pricing": {
        "cacheInput": 0.15
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "doubao-seed-code-preview-251028": {
    "lastUpdated": "2025-11-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-4-1": {
    "trainingCutoff": "2025-06",
    "lastUpdated": "2025-11-18",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-3-1-pro-preview": {
    "family": "gemini-pro",
    "lastUpdated": "2026-02-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65000,
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 0.5,
        "contextOver200k": {
          "input": 5,
          "output": 22.5,
          "cacheRead": 0.5
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-opus-41": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-08-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kimi-k2-0711-preview": {
    "family": "kimi",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-07-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 0.15
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-embedding-001": {
    "family": "gemini",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2025-05-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 3072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-3-1-pro-preview-customtools": {
    "family": "gemini-pro",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2026-02-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "audio",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.2,
        "contextOver200k": {
          "input": 4,
          "output": 18,
          "cacheRead": 0.4
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-2-5-pro-preview-06-05": {
    "family": "gemini-pro",
    "lastUpdated": "2026-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 200000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-2-5-flash-preview-04-17": {
    "family": "gemini-flash",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-04-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.0375
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-2-5-pro-preview-05-06": {
    "family": "gemini-pro",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-05-06",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.31
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-2-5-flash-preview-05-20": {
    "family": "gemini-flash",
    "lastUpdated": "2026-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 200000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-flash-latest": {
    "family": "gemini-flash",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-09-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.075,
        "inputAudio": 1
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-2-5-flash-lite-preview-06-17": {
    "family": "gemini-flash-lite",
    "lastUpdated": "2026-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "video",
        "image",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65535
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-flash-lite-latest": {
    "family": "gemini-flash-lite",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-09-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.025
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-5-maas": {
    "family": "glm",
    "lastUpdated": "2026-02-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.1
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-4-7-maas": {
    "family": "glm",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2026-01-06",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-v3-1-maas": {
    "family": "deepseek",
    "lastUpdated": "2025-08-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-235b-a22b-instruct-2507-maas": {
    "family": "qwen",
    "lastUpdated": "2025-08-13",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-4-maverick-17b-128e-instruct-maas": {
    "family": "llama",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-04-29",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-3-3-70b-instruct-maas": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2025-04-29",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-oss-20b-maas": {
    "family": "gpt-oss",
    "lastUpdated": "2025-08-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-oss-120b-maas": {
    "family": "gpt-oss",
    "lastUpdated": "2025-08-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemma-3-27b": {
    "family": "gemma",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-03-12",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-embedding-4b": {
    "family": "qwen",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2025-06-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2560
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-coder-30b-a3b": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-live-2-5-flash": {
    "family": "gemini-flash",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-09-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text",
        "audio"
      ]
    },
    "specs": {
      "maxOutputTokens": 8000,
      "pricing": {
        "inputAudio": 3,
        "outputAudio": 12
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-live-2-5-flash-preview-native-audio": {
    "family": "gemini-flash",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-09-18",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "audio",
        "video"
      ],
      "output": [
        "text",
        "audio"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "inputAudio": 3,
        "outputAudio": 12
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-2-5-flash-preview-tts": {
    "family": "gemini-flash",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-05-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "audio"
      ]
    },
    "specs": {
      "maxOutputTokens": 16000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-2-5-pro-preview-tts": {
    "family": "gemini-flash",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-05-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "audio"
      ]
    },
    "specs": {
      "maxOutputTokens": 16000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-2-5-flash-image-preview": {
    "family": "gemini-flash",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2025-08-26",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text",
        "image"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "cacheInput": 0.075
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-1-5-flash-8b": {
    "family": "gemini-flash",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-10-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.01
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-1-5-flash": {
    "family": "gemini-flash",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-05-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.01875
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemini-1-5-pro": {
    "family": "gemini-pro",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-02-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.3125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic--claude-4-5-opus": {
    "family": "claude-opus",
    "trainingCutoff": "2025-04-30",
    "lastUpdated": "2025-11-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic--claude-4-sonnet": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-01-31",
    "lastUpdated": "2025-05-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic--claude-4-5-sonnet": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-01-31",
    "lastUpdated": "2025-09-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic--claude-3-sonnet": {
    "family": "claude-sonnet",
    "trainingCutoff": "2023-08-31",
    "lastUpdated": "2024-03-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic--claude-3-7-sonnet": {
    "family": "claude-sonnet",
    "trainingCutoff": "2024-10-31",
    "lastUpdated": "2025-02-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "sonar": {
    "family": "sonar",
    "trainingCutoff": "2025-09-01",
    "lastUpdated": "2025-09-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic--claude-3-5-sonnet": {
    "family": "claude-sonnet",
    "trainingCutoff": "2024-04-30",
    "lastUpdated": "2024-10-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic--claude-4-6-sonnet": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-08",
    "lastUpdated": "2026-02-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75,
        "contextOver200k": {
          "input": 6,
          "output": 22.5,
          "cacheRead": 0.6
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic--claude-4-5-haiku": {
    "family": "claude-haiku",
    "trainingCutoff": "2025-02-28",
    "lastUpdated": "2025-10-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.1,
        "cacheOutput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic--claude-3-opus": {
    "family": "claude-opus",
    "trainingCutoff": "2023-08-31",
    "lastUpdated": "2024-02-29",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 1.5,
        "cacheOutput": 18.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "sonar-pro": {
    "family": "sonar-pro",
    "trainingCutoff": "2025-09-01",
    "lastUpdated": "2025-09-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic--claude-3-haiku": {
    "family": "claude-haiku",
    "trainingCutoff": "2023-08-31",
    "lastUpdated": "2024-03-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 0.03,
        "cacheOutput": 0.3
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic--claude-4-6-opus": {
    "family": "claude-opus",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2026-02-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25,
        "contextOver200k": {
          "input": 10,
          "output": 37.5,
          "cacheRead": 1
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic--claude-4-opus": {
    "family": "claude-opus",
    "trainingCutoff": "2025-01-31",
    "lastUpdated": "2025-05-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000,
      "pricing": {
        "cacheInput": 1.5,
        "cacheOutput": 18.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-opus-45": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03",
    "lastUpdated": "2026-01-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 49500,
      "pricing": {
        "cacheInput": 0.6,
        "cacheOutput": 7.5
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-53-codex": {
    "family": "gpt-codex",
    "lastUpdated": "2026-02-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.219
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-31-24b": {
    "family": "mistral",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2026-01-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-4b": {
    "family": "qwen",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2026-01-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "olafangensan-glm-4-7-flash-heretic": {
    "family": "glm-flash",
    "lastUpdated": "2026-02-18",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimax-m25": {
    "family": "minimax",
    "lastUpdated": "2026-02-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000,
      "pricing": {
        "cacheInput": 0.04
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-coder-480b-a35b-instruct-turbo": {
    "family": "qwen",
    "lastUpdated": "2026-02-26",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.04
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-41-fast": {
    "family": "grok",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2026-01-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-52": {
    "family": "gpt",
    "trainingCutoff": "2025-08-31",
    "lastUpdated": "2026-01-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.219
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-3-3-70b": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2026-01-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-next-80b": {
    "family": "qwen",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2026-01-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hermes-3-llama-3-1-405b": {
    "family": "hermes",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2026-01-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimax-m21": {
    "family": "minimax",
    "lastUpdated": "2026-01-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 49500,
      "pricing": {
        "cacheInput": 0.04
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-3-2-3b": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2026-01-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "uncensored": {
    "family": "venice",
    "trainingCutoff": "2023-10",
    "lastUpdated": "2026-01-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nvidia-nemotron-3-nano-30b-a3b": {
    "lastUpdated": "2026-02-04",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 52429
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-52-codex": {
    "family": "gpt-codex",
    "trainingCutoff": "2025-08",
    "lastUpdated": "2026-01-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.219
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-sonnet-45": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-09",
    "lastUpdated": "2026-01-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 49500,
      "pricing": {
        "cacheInput": 0.375,
        "cacheOutput": 4.69
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "2-lite-v1": {
    "family": "nova-lite",
    "lastUpdated": "2025-12-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "reasoning": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "2-pro-v1": {
    "family": "nova-pro",
    "lastUpdated": "2026-01-03",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "reasoning": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "glm-4-7-flashx": {
    "family": "glm-flash",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2026-01-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.01,
        "cacheOutput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-7b-instruct-v0-3": {
    "lastUpdated": "2025-04-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen2-5-coder-32b-instruct": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mixtral-8x7b-instruct-v0-1": {
    "lastUpdated": "2025-04-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "neuralmagic-meta-llama-3-1-8b-instruct-fp8": {
    "family": "llama",
    "lastUpdated": "2024-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "neuralmagic-mistral-nemo-instruct-2407-fp8": {
    "family": "mistral",
    "lastUpdated": "2024-07-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-vl-embedding-8b": {
    "family": "qwen",
    "lastUpdated": "2026-02-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-vl-235b-a22b-instruct-fp8": {
    "family": "qwen",
    "lastUpdated": "2024-11-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cortecs-llama-3-3-70b-instruct-fp8-dynamic": {
    "family": "llama",
    "lastUpdated": "2024-12-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "speakleash-bielik-11b-v2-6-instruct": {
    "trainingCutoff": "2025-03",
    "lastUpdated": "2025-03-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "speakleash-bielik-11b-v3-0-instruct": {
    "trainingCutoff": "2025-03",
    "lastUpdated": "2025-03-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "xai-grok-4-fast": {
    "family": "grok",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-09-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.05,
        "cacheOutput": 0.2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "pro-zai-org-glm-4-7": {
    "family": "glm",
    "lastUpdated": "2025-12-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 205000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "pro-zai-org-glm-5": {
    "family": "glm",
    "lastUpdated": "2026-02-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 205000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "pro-minimaxai-minimax-m2-5": {
    "family": "minimax",
    "lastUpdated": "2026-02-13",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "pro-minimaxai-minimax-m2-1": {
    "family": "minimax",
    "lastUpdated": "2025-12-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "pro-deepseek-ai-deepseek-r1": {
    "family": "deepseek-thinking",
    "lastUpdated": "2025-11-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 164000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "pro-deepseek-ai-deepseek-v3-2": {
    "family": "deepseek",
    "lastUpdated": "2025-12-03",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 164000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "pro-deepseek-ai-deepseek-v3": {
    "family": "deepseek",
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 164000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "pro-deepseek-ai-deepseek-v3-1-terminus": {
    "family": "deepseek",
    "lastUpdated": "2025-11-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 164000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "pro-moonshotai-kimi-k2-instruct-0905": {
    "family": "kimi",
    "lastUpdated": "2025-11-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "pro-moonshotai-kimi-k2-5": {
    "family": "kimi",
    "lastUpdated": "2026-01-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "pro-moonshotai-kimi-k2-thinking": {
    "family": "kimi-thinking",
    "lastUpdated": "2025-11-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "paddlepaddle-paddleocr-vl-1-5": {
    "lastUpdated": "2026-01-29",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kwaipilot-kat-dev": {
    "family": "kat-coder",
    "lastUpdated": "2026-01-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-ocr": {
    "lastUpdated": "2025-10-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "ascend-tribe-pangu-pro-moe": {
    "family": "pangu",
    "lastUpdated": "2026-01-16",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-chat-latest": {
    "family": "gpt",
    "lastUpdated": "2026-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-4-scout": {
    "family": "llama",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-01-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "codex-mini-latest": {
    "family": "gpt-codex-mini",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-05-16",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 100000,
      "pricing": {
        "cacheInput": 0.375
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen2-5-coder-7b-fast": {
    "family": "qwen",
    "trainingCutoff": "2024-09",
    "lastUpdated": "2024-09-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "sonar-reasoning-pro": {
    "family": "sonar-reasoning",
    "trainingCutoff": "2025-09-01",
    "lastUpdated": "2025-09-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-3-1-8b-instruct-turbo": {
    "family": "llama",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2024-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "ernie-4-5-21b-a3b-thinking": {
    "family": "ernie",
    "trainingCutoff": "2025-03",
    "lastUpdated": "2025-03-16",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-prompt-guard-2-22m": {
    "family": "llama",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-10-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-4-1-mini-2025-04-14": {
    "family": "gpt-mini",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "cacheInput": 0.09999999999999999
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-guard-4": {
    "family": "llama",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-01-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1024
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "sonar-reasoning": {
    "family": "sonar-reasoning",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-01-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "sonar-deep-research": {
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-09-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "reasoning": 3
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-v3-1-terminus": {
    "family": "deepseek",
    "trainingCutoff": "2025-09",
    "lastUpdated": "2025-09-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 0.21600000000000003
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-3-5-sonnet-v2": {
    "family": "claude-sonnet",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-10-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.30000000000000004,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-small": {
    "family": "mistral-small",
    "trainingCutoff": "2024-02",
    "lastUpdated": "2024-02-26",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-vl-235b-a22b-instruct": {
    "family": "qwen",
    "trainingCutoff": "2025-09",
    "lastUpdated": "2025-09-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen3-235b-a22b-thinking": {
    "family": "qwen",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2025-07-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 81920
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-3-haiku-20240307": {
    "family": "claude-haiku",
    "trainingCutoff": "2023-08-31",
    "lastUpdated": "2024-03-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 0.03,
        "cacheOutput": 0.3
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kimi-k2-0711": {
    "family": "kimi",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-01-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-4-maverick": {
    "family": "llama",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-01-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-tng-r1t2-chimera": {
    "family": "deepseek-thinking",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2025-07-02",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 163840
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-opus-4": {
    "family": "claude-opus",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2025-05-14",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000,
      "pricing": {
        "cacheInput": 1.5,
        "cacheOutput": 18.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-prompt-guard-2-86m": {
    "family": "llama",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-10-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 2
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gemma-3-12b-it": {
    "family": "gemma",
    "trainingCutoff": "2024-12",
    "lastUpdated": "2024-12-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "hermes-2-pro-llama-3-8b": {
    "family": "llama",
    "trainingCutoff": "2024-05",
    "lastUpdated": "2024-05-27",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-glm-5": {
    "family": "glm",
    "lastUpdated": "2026-02-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-glm-4-7-flashx": {
    "family": "glm-flash",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.01
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-glm-4-5-air": {
    "family": "glm-air",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 96000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-glm-4-5": {
    "family": "glm",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2025-07-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-glm-4-6": {
    "family": "glm",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-09-30",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 96000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-glm-4-6v-flash": {
    "family": "glm",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-09-30",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 24000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-glm-4-5v": {
    "family": "glm",
    "trainingCutoff": "2025-08",
    "lastUpdated": "2025-08-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 66000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-glm-4-6v": {
    "family": "glm",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-09-30",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 24000,
      "pricing": {
        "cacheInput": 0.05
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nvidia-nemotron-nano-12b-v2-vl": {
    "lastUpdated": "2026-01-31",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "arcee-ai-trinity-large-preview": {
    "family": "trinity",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "arcee-ai-trinity-mini": {
    "lastUpdated": "2026-01-28",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "inception-mercury-coder-small": {
    "family": "mercury",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-02-26",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "voyage-voyage-3-large": {
    "family": "voyage",
    "lastUpdated": "2024-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "voyage-voyage-code-3": {
    "family": "voyage",
    "lastUpdated": "2024-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "voyage-voyage-law-2": {
    "family": "voyage",
    "lastUpdated": "2024-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "voyage-voyage-finance-2": {
    "family": "voyage",
    "lastUpdated": "2024-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "voyage-voyage-code-2": {
    "family": "voyage",
    "lastUpdated": "2024-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "voyage-voyage-3-5-lite": {
    "family": "voyage",
    "lastUpdated": "2025-05-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "voyage-voyage-3-5": {
    "family": "voyage",
    "lastUpdated": "2025-05-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "amazon-nova-2-lite": {
    "family": "nova",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-12-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1000000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "amazon-titan-embed-text-v2": {
    "family": "titan-embed",
    "lastUpdated": "2024-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "amazon-nova-lite": {
    "family": "nova-lite",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-12-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.015
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "amazon-nova-pro": {
    "family": "nova-pro",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-12-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "amazon-nova-micro": {
    "family": "nova-micro",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-12-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.00875
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen-3-235b": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen3-max-preview": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-09-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "cacheInput": 0.24
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen3-next-80b-a3b-thinking": {
    "family": "qwen",
    "trainingCutoff": "2025-09",
    "lastUpdated": "2025-09-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen3-max-thinking": {
    "family": "qwen",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.24
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen3-vl-instruct": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-09-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 129024
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen3-embedding-8b": {
    "family": "qwen",
    "lastUpdated": "2025-06-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen3-coder-next": {
    "family": "qwen",
    "lastUpdated": "2026-02-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 256000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen3-coder": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 66536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen-3-30b": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen3-embedding-0-6b": {
    "family": "qwen",
    "lastUpdated": "2025-11-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen-3-14b": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen3-235b-a22b-thinking": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262114
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen3-vl-thinking": {
    "family": "qwen",
    "trainingCutoff": "2025-09",
    "lastUpdated": "2025-09-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 129024
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen3-5-flash": {
    "family": "qwen",
    "lastUpdated": "2026-02-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.001,
        "cacheOutput": 0.125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen3-next-80b-a3b-instruct": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-09-12",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen3-5-plus": {
    "family": "qwen",
    "lastUpdated": "2026-02-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.04,
        "cacheOutput": 0.5
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen3-max": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-09-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen-3-32b": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen3-coder-plus": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1000000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen3-embedding-4b": {
    "family": "qwen",
    "lastUpdated": "2025-06-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "alibaba-qwen3-coder-30b-a3b": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-04",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "bfl-flux-pro-1-0-fill": {
    "family": "flux",
    "lastUpdated": "2024-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "bfl-flux-pro-1-1": {
    "family": "flux",
    "lastUpdated": "2024-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "bfl-flux-kontext-max": {
    "family": "flux",
    "lastUpdated": "2025-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "bfl-flux-kontext-pro": {
    "family": "flux",
    "lastUpdated": "2025-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "bfl-flux-pro-1-1-ultra": {
    "family": "flux",
    "lastUpdated": "2024-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-codestral-embed": {
    "family": "codestral-embed",
    "lastUpdated": "2025-05-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-devstral-small-2": {
    "family": "devstral",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-05-07",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 256000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-devstral-2": {
    "family": "devstral",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-12-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 256000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-mistral-large-3": {
    "family": "mistral-large",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-12-02",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 256000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-mistral-embed": {
    "family": "mistral-embed",
    "lastUpdated": "2023-12-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-ministral-14b": {
    "family": "ministral",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-12-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 256000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-mistral-nemo": {
    "family": "mistral-nemo",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-07-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-mistral-medium": {
    "family": "mistral-medium",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-05-07",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-devstral-small": {
    "family": "devstral",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-05-07",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-codestral": {
    "family": "codestral",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-01-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-mixtral-8x22b-instruct": {
    "family": "mixtral",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-04-17",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-mistral-small": {
    "family": "mistral-small",
    "trainingCutoff": "2025-03",
    "lastUpdated": "2024-09-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-ministral-8b": {
    "family": "ministral",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-10-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-pixtral-large": {
    "family": "pixtral",
    "trainingCutoff": "2024-11",
    "lastUpdated": "2024-11-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-pixtral-12b": {
    "family": "pixtral",
    "trainingCutoff": "2024-09",
    "lastUpdated": "2024-09-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-magistral-small": {
    "family": "magistral-small",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2025-03-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-magistral-medium": {
    "family": "magistral-medium",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2025-03-20",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistral-ministral-3b": {
    "family": "ministral",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2024-10-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kwaipilot-kat-coder-pro-v1": {
    "family": "kat-coder",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-10-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-v3-2-thinking": {
    "family": "deepseek-thinking",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2025-12-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.03
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "moonshotai-kimi-k2-turbo": {
    "family": "kimi",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-09-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-embedding-001": {
    "family": "gemini-embedding",
    "lastUpdated": "2025-05-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-imagen-4-0-fast-generate-001": {
    "family": "imagen",
    "lastUpdated": "2025-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-text-embedding-005": {
    "family": "text-embedding",
    "lastUpdated": "2024-08",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-imagen-4-0-ultra-generate-001": {
    "family": "imagen",
    "lastUpdated": "2025-05-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-text-multilingual-embedding-002": {
    "family": "text-embedding",
    "lastUpdated": "2024-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-2-5-flash-image": {
    "family": "gemini-flash",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-03-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text",
        "image"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-3-pro-image": {
    "family": "gemini-pro",
    "trainingCutoff": "2025-03",
    "lastUpdated": "2025-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text",
        "image"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-2-5-flash-image-preview": {
    "family": "gemini-flash",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-03-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text",
        "image"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-imagen-4-0-generate-001": {
    "family": "imagen",
    "lastUpdated": "2025-05-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meituan-longcat-flash-thinking": {
    "family": "longcat",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-09-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "bytedance-seed-1-6": {
    "family": "seed",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-09",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000,
      "pricing": {
        "cacheInput": 0.05
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "bytedance-seed-1-8": {
    "family": "seed",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.05
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-3-1-8b": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-3-2-11b": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-09-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-3-1-70b": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-3-2-90b": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-09-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-3-2-1b": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-09-18",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-3-2-3b": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-09-18",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-4-maverick": {
    "family": "llama",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-3-3-70b": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-12-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-4-scout": {
    "family": "llama",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "v0-1-5-md": {
    "family": "v0",
    "lastUpdated": "2025-06-09",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "v0-1-0-md": {
    "family": "v0",
    "lastUpdated": "2025-05-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-text-embedding-ada-002": {
    "family": "text-embedding",
    "lastUpdated": "2022-12-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-4o-mini-search-preview": {
    "lastUpdated": "2025-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-text-embedding-3-small": {
    "family": "text-embedding",
    "lastUpdated": "2024-01-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-text-embedding-3-large": {
    "family": "text-embedding",
    "lastUpdated": "2024-01-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-5-1-thinking": {
    "family": "gpt",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-08-07",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text",
        "image"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.13
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-codex-mini": {
    "family": "gpt-codex-mini",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-05-16",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 100000,
      "pricing": {
        "cacheInput": 0.38
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "morph-morph-v3-large": {
    "lastUpdated": "2024-08-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "morph-morph-v3-fast": {
    "lastUpdated": "2024-08-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 38000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cohere-embed-v4-0": {
    "family": "cohere-embed",
    "lastUpdated": "2025-04-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimax-minimax-m2-1-lightning": {
    "family": "minimax",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2025-10-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.03,
        "cacheOutput": 0.38
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "recraft-recraft-v2": {
    "family": "recraft",
    "lastUpdated": "2024-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "recraft-recraft-v3": {
    "family": "recraft",
    "lastUpdated": "2024-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "perplexity-sonar-reasoning-pro": {
    "lastUpdated": "2025-09-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 25600
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "perplexity-sonar": {
    "lastUpdated": "2025-09-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 25415
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "perplexity-sonar-reasoning": {
    "family": "sonar-reasoning",
    "trainingCutoff": "2025-09",
    "lastUpdated": "2025-02-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "perplexity-sonar-pro": {
    "lastUpdated": "2025-09-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-3-5-sonnet-20240620": {
    "family": "claude-sonnet",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-06-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "xai-grok-imagine-image": {
    "family": "grok",
    "lastUpdated": "2026-02-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text",
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "xai-grok-imagine-image-pro": {
    "family": "grok",
    "lastUpdated": "2026-02-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text",
        "image"
      ]
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "xai-grok-3-fast": {
    "family": "grok",
    "trainingCutoff": "2024-11",
    "lastUpdated": "2025-02-17",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "xai-grok-3-mini-fast": {
    "family": "grok",
    "trainingCutoff": "2024-11",
    "lastUpdated": "2025-02-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.15,
        "reasoning": 4
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "xai-grok-2-vision": {
    "family": "grok",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2024-08-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-4o-2024-05-13": {
    "family": "gpt",
    "trainingCutoff": "2023-09",
    "lastUpdated": "2024-05-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "o3-deep-research": {
    "family": "o",
    "trainingCutoff": "2024-05",
    "lastUpdated": "2024-06-26",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 100000,
      "pricing": {
        "cacheInput": 2.5
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "o4-mini-deep-research": {
    "family": "o-mini",
    "trainingCutoff": "2024-05",
    "lastUpdated": "2024-06-26",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 100000,
      "pricing": {
        "cacheInput": 0.5
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-3-codex-spark": {
    "family": "gpt-codex-spark",
    "trainingCutoff": "2025-08-31",
    "lastUpdated": "2026-02-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000,
      "pricing": {
        "cacheInput": 0.175
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-3-5-turbo": {
    "family": "gpt",
    "trainingCutoff": "2021-09-01",
    "lastUpdated": "2023-11-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "o1-pro": {
    "family": "o-pro",
    "trainingCutoff": "2023-09",
    "lastUpdated": "2025-03-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": false,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 100000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-5-2-pro": {
    "family": "gpt-pro",
    "lastUpdated": "2026-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "gpt-4o-2024-08-06": {
    "family": "gpt",
    "trainingCutoff": "2023-09",
    "lastUpdated": "2024-08-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "auto": {
    "lastUpdated": "2024-06-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "v3-fast": {
    "family": "morph",
    "lastUpdated": "2024-08-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "v3-large": {
    "family": "morph",
    "lastUpdated": "2024-08-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": false,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "c4ai-aya-expanse-32b": {
    "lastUpdated": "2024-10-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "command-a-03-2025": {
    "family": "command-a",
    "trainingCutoff": "2024-06-01",
    "lastUpdated": "2025-03-13",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "command-r7b-arabic-02-2025": {
    "family": "command-r",
    "trainingCutoff": "2024-06-01",
    "lastUpdated": "2025-02-27",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "command-a-translate-08-2025": {
    "family": "command-a",
    "trainingCutoff": "2024-06-01",
    "lastUpdated": "2025-08-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "command-r-08-2024": {
    "family": "command-r",
    "trainingCutoff": "2024-06-01",
    "lastUpdated": "2024-08-30",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "command-r-plus-08-2024": {
    "family": "command-r",
    "trainingCutoff": "2024-06-01",
    "lastUpdated": "2024-08-30",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "command-a-reasoning-08-2025": {
    "family": "command-a",
    "trainingCutoff": "2024-06-01",
    "lastUpdated": "2025-08-21",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "c4ai-aya-expanse-8b": {
    "lastUpdated": "2024-10-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "c4ai-aya-vision-8b": {
    "lastUpdated": "2025-05-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "c4ai-aya-vision-32b": {
    "lastUpdated": "2025-05-14",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "command-r7b-12-2024": {
    "family": "command-r",
    "trainingCutoff": "2024-06-01",
    "lastUpdated": "2024-02-27",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "command-a-vision-07-2025": {
    "family": "command-a",
    "trainingCutoff": "2024-06-01",
    "lastUpdated": "2025-07-31",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "1-0-md": {
    "family": "v0",
    "lastUpdated": "2025-05-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "1-5-md": {
    "family": "v0",
    "lastUpdated": "2025-06-09",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "1-5-lg": {
    "family": "v0",
    "lastUpdated": "2025-06-09",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "m2-5": {
    "family": "minimax",
    "lastUpdated": "2026-02-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.03,
        "cacheOutput": 0.375
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "m2": {
    "family": "minimax",
    "lastUpdated": "2025-10-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "m2-5-highspeed": {
    "family": "minimax",
    "lastUpdated": "2026-02-13",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.06,
        "cacheOutput": 0.375
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "m2-1": {
    "family": "minimax",
    "lastUpdated": "2025-12-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "kimi-k2-instruct": {
    "family": "kimi",
    "trainingCutoff": "2024-07",
    "lastUpdated": "2025-09-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-r1-distill-qwen-32b": {
    "family": "qwen",
    "lastUpdated": "2025-01-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-5-plus": {
    "family": "qwen",
    "lastUpdated": "2026-02-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-3-5-haiku-latest": {
    "family": "claude-haiku",
    "trainingCutoff": "2024-07-31",
    "lastUpdated": "2024-10-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.08,
        "cacheOutput": 1
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-3-5-sonnet-20241022": {
    "family": "claude-sonnet",
    "trainingCutoff": "2024-04-30",
    "lastUpdated": "2024-10-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-3-sonnet-20240229": {
    "family": "claude-sonnet",
    "trainingCutoff": "2023-08-31",
    "lastUpdated": "2024-03-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 0.3
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-sonnet-4-0": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-05-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-opus-4-0": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-05-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000,
      "pricing": {
        "cacheInput": 1.5,
        "cacheOutput": 18.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-3-5-haiku-20241022": {
    "family": "claude-haiku",
    "trainingCutoff": "2024-07-31",
    "lastUpdated": "2024-10-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.08,
        "cacheOutput": 1
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-3-5-sonnet-20240620": {
    "family": "claude-sonnet",
    "trainingCutoff": "2024-04-30",
    "lastUpdated": "2024-06-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-3-7-sonnet-latest": {
    "family": "claude-sonnet",
    "trainingCutoff": "2024-10-31",
    "lastUpdated": "2025-02-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-3-opus-20240229": {
    "family": "claude-opus",
    "trainingCutoff": "2023-08-31",
    "lastUpdated": "2024-02-29",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 1.5,
        "cacheOutput": 18.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-sonnet-4-5@20250929": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-07-31",
    "lastUpdated": "2025-09-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-opus-4-1@20250805": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-08-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000,
      "pricing": {
        "cacheInput": 1.5,
        "cacheOutput": 18.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-3-7-sonnet@20250219": {
    "family": "claude-sonnet",
    "trainingCutoff": "2024-10-31",
    "lastUpdated": "2025-02-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-opus-4@20250514": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-05-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000,
      "pricing": {
        "cacheInput": 1.5,
        "cacheOutput": 18.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-opus-4-5@20251101": {
    "family": "claude-opus",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-11-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-3-5-haiku@20241022": {
    "family": "claude-haiku",
    "trainingCutoff": "2024-07-31",
    "lastUpdated": "2024-10-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.08,
        "cacheOutput": 1
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-sonnet-4@20250514": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-03-31",
    "lastUpdated": "2025-05-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-3-5-sonnet@20241022": {
    "family": "claude-sonnet",
    "trainingCutoff": "2024-04-30",
    "lastUpdated": "2024-10-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-opus-4-6@default": {
    "family": "claude-opus",
    "trainingCutoff": "2025-05",
    "lastUpdated": "2026-02-05",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000,
      "pricing": {
        "cacheInput": 0.5,
        "cacheOutput": 6.25,
        "contextOver200k": {
          "input": 10,
          "output": 37.5,
          "cacheRead": 1
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-haiku-4-5@20251001": {
    "family": "claude-haiku",
    "trainingCutoff": "2025-02-28",
    "lastUpdated": "2025-10-15",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.1,
        "cacheOutput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "claude-sonnet-4-6@default": {
    "family": "claude-sonnet",
    "trainingCutoff": "2025-08",
    "lastUpdated": "2026-02-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "other"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75,
        "contextOver200k": {
          "input": 6,
          "output": 22.5,
          "cacheRead": 0.6
        }
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "allenai-molmo-2-8b": {
    "lastUpdated": "2026-01-31",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 36864
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nvidia-llama-3-1-nemotron-70b-instruct": {
    "lastUpdated": "2024-10-12",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nvidia-llama-3-3-nemotron-super-49b-v1-5": {
    "family": "llama",
    "lastUpdated": "2025-12-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "inception-mercury": {
    "lastUpdated": "2025-07-31",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "inception-mercury-coder": {
    "lastUpdated": "2025-07-31",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "amazon-nova-2-lite-v1": {
    "lastUpdated": "2025-12-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65535
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "amazon-nova-pro-v1": {
    "lastUpdated": "2024-12-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 5120
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-r1-distill-qwen-32b": {
    "lastUpdated": "2025-11-25",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openrouter-aurora-alpha": {
    "lastUpdated": "2026-02-09",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 50000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-2-5-pro-preview": {
    "lastUpdated": "2026-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.125,
        "cacheOutput": 0.375
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "google-gemini-2-0-flash-lite-001": {
    "lastUpdated": "2025-06-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "z-ai-glm-5:free": {
    "lastUpdated": "2026-02-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen-vl-plus": {
    "lastUpdated": "2025-08-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.042
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen-vl-max": {
    "lastUpdated": "2025-08-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen-2-5-vl-7b-instruct": {
    "lastUpdated": "2024-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 6554
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-max-thinking": {
    "lastUpdated": "2026-01-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen-max": {
    "lastUpdated": "2025-01-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.32
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen-turbo": {
    "lastUpdated": "2025-07-15",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.01
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-4b": {
    "lastUpdated": "2025-07-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-235b-a22b-2507": {
    "lastUpdated": "2026-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 52429
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen-2-5-7b-instruct": {
    "lastUpdated": "2025-04-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 6554
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen-plus": {
    "lastUpdated": "2025-09-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768,
      "pricing": {
        "cacheInput": 0.08
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-30b-a3b": {
    "family": "qwen",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 40960
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-4-scout": {
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-3-1-70b-instruct": {
    "lastUpdated": "2024-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-3-2-3b-instruct": {
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-3-2-1b-instruct": {
    "lastUpdated": "2026-01-27",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 12000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-3-1-405b-instruct": {
    "lastUpdated": "2025-04-05",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26200
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "meta-llama-llama-4-maverick": {
    "family": "llama",
    "trainingCutoff": "2025-01",
    "lastUpdated": "2025-12-24",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "tngtech-deepseek-r1t2-chimera": {
    "lastUpdated": "2025-07-08",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 163840,
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "tngtech-deepseek-r1t-chimera": {
    "family": "tngtech",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 163840
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "tngtech-tng-r1t-chimera": {
    "lastUpdated": "2026-01-31",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-small-24b-instruct-2501": {
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-7b-instruct-v0-3": {
    "lastUpdated": "2025-04-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-large-2512": {
    "lastUpdated": "2025-12-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 52429
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-ministral-14b-2512": {
    "lastUpdated": "2025-12-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 52429
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-devstral-medium": {
    "lastUpdated": "2025-07-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-devstral-small": {
    "lastUpdated": "2025-07-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mixtral-8x22b-instruct": {
    "lastUpdated": "2024-04-17",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 13108
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-7b-instruct": {
    "lastUpdated": "2024-05-27",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-large-2411": {
    "lastUpdated": "2024-11-04",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 26215
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-7b-instruct-v0-1": {
    "lastUpdated": "2025-04-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 565
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-large": {
    "lastUpdated": "2025-12-02",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 25600
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-mistral-small-3-1-24b-instruct:free": {
    "lastUpdated": "2025-03-17",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 25600
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-4o-2024-11-20": {
    "lastUpdated": "2024-11-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-4o:extended": {
    "lastUpdated": "2024-08-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-4o-2024-05-13": {
    "lastUpdated": "2024-05-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-3-5-turbo-0613": {
    "lastUpdated": "2023-06-13",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-4o-2024-08-06": {
    "lastUpdated": "2024-08-06",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "cohere-command-r7b-12-2024": {
    "lastUpdated": "2024-02-27",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimax-minimax-m2-5:free": {
    "lastUpdated": "2026-02-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "writer-palmyra-x5": {
    "lastUpdated": "2025-04-28",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "perplexity-sonar-deep-research": {
    "lastUpdated": "2025-01-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 25600
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "bytedance-seed-seed-1-6": {
    "lastUpdated": "2025-09",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "image",
        "text",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "anthropic-claude-3-7-sonnet:thinking": {
    "lastUpdated": "2025-02-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 64000,
      "pricing": {
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nousresearch-deephermes-3-mistral-24b-preview": {
    "family": "nousresearch",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nousresearch-hermes-3-llama-3-1-405b": {
    "lastUpdated": "2024-08-16",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-5-original:thinking": {
    "family": "glm",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2026-02-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-5-original": {
    "family": "glm",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2026-02-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-4-6:thinking": {
    "family": "glm",
    "lastUpdated": "2025-12-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-4-7:thinking": {
    "family": "glm",
    "lastUpdated": "2025-12-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-4-5-air:thinking": {
    "family": "glm",
    "lastUpdated": "2025-12-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-5:thinking": {
    "family": "glm",
    "trainingCutoff": "2025-06",
    "lastUpdated": "2026-02-11",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-deepseek-v3-2:thinking": {
    "family": "deepseek",
    "lastUpdated": "2025-12-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "moonshotai-kimi-k2-5-thinking": {
    "family": "kimi",
    "lastUpdated": "2026-01-26",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-5-397b-a17b-thinking": {
    "family": "qwen",
    "lastUpdated": "2026-02-16",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-5-plus-thinking": {
    "family": "qwen",
    "lastUpdated": "2026-02-16",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimax-minimax-m2-5-official": {
    "family": "minimax",
    "lastUpdated": "2026-02-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nousresearch-hermes-4-405b:thinking": {
    "family": "hermes",
    "lastUpdated": "2025-12-24",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-3-235b-a22b-instruct-2507": {
    "family": "qwen",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-22",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama3-1-8b": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2025-01-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "glm-4p7": {
    "family": "glm",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-12-22",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 198000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimax-m2p1": {
    "family": "minimax",
    "lastUpdated": "2025-12-23",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 196000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "glm-4p5-air": {
    "family": "glm-air",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-08-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "devstral-small-2512": {
    "trainingCutoff": "2025-12",
    "lastUpdated": "2025-12-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "intellect-3": {
    "trainingCutoff": "2025-11",
    "lastUpdated": "2025-11-26",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nova-pro-v1": {
    "family": "nova-pro",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-12-03",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 5000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "llama-3-1-405b-instruct": {
    "family": "llama",
    "trainingCutoff": "2023-12",
    "lastUpdated": "2024-07-23",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 128000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "glm-4p5": {
    "family": "glm",
    "trainingCutoff": "2025-04",
    "lastUpdated": "2025-07-29",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-2-1212": {
    "family": "grok",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2024-12-12",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-2": {
    "family": "grok",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2024-08-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-3-fast-latest": {
    "family": "grok",
    "trainingCutoff": "2024-11",
    "lastUpdated": "2025-02-17",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-2-vision": {
    "family": "grok",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2024-08-20",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-2-vision-1212": {
    "family": "grok",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2024-12-12",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-beta": {
    "family": "grok-beta",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2024-11-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 5
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-3-mini-fast": {
    "family": "grok",
    "trainingCutoff": "2024-11",
    "lastUpdated": "2025-02-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.15,
        "reasoning": 4
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-4-fast": {
    "family": "grok",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2025-09-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 30000,
      "pricing": {
        "cacheInput": 0.05
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-3-latest": {
    "family": "grok",
    "trainingCutoff": "2024-11",
    "lastUpdated": "2025-02-17",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.75
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-4-1-fast": {
    "family": "grok",
    "trainingCutoff": "2025-07",
    "lastUpdated": "2025-11-19",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 30000,
      "pricing": {
        "cacheInput": 0.05
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-2-vision-latest": {
    "family": "grok",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2024-12-12",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-3-mini-latest": {
    "family": "grok",
    "trainingCutoff": "2024-11",
    "lastUpdated": "2025-02-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.075,
        "reasoning": 0.5
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-3-mini-fast-latest": {
    "family": "grok",
    "trainingCutoff": "2024-11",
    "lastUpdated": "2025-02-17",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.15,
        "reasoning": 4
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-2-latest": {
    "family": "grok",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2024-12-12",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 2
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-vision-beta": {
    "family": "grok-vision",
    "trainingCutoff": "2024-08",
    "lastUpdated": "2024-11-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096,
      "pricing": {
        "cacheInput": 5
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "grok-3-fast": {
    "family": "grok",
    "trainingCutoff": "2024-11",
    "lastUpdated": "2025-02-17",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 1.25
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-math-plus": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-09-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 3072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen2-5-coder-7b-instruct": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-11",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-long": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2025-01-25",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwq-32b": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-12",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-r1-distill-qwen-14b": {
    "family": "qwen",
    "lastUpdated": "2025-01-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "moonshot-kimi-k2-instruct": {
    "family": "kimi",
    "lastUpdated": "2025-01-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-doc-turbo": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "tongyi-intent-detect-v3": {
    "family": "yi",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 1024
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-plus-character": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 4096
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-v3-2-exp": {
    "family": "deepseek",
    "lastUpdated": "2025-01-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-r1-distill-llama-8b": {
    "family": "deepseek-thinking",
    "lastUpdated": "2025-01-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen2-5-math-7b-instruct": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 3072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-r1-distill-qwen-1-5b": {
    "family": "qwen",
    "lastUpdated": "2025-01-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-r1-distill-qwen-7b": {
    "family": "qwen",
    "lastUpdated": "2025-01-01",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-deep-research": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-01",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen2-5-math-72b-instruct": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-09",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 3072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-math-turbo": {
    "family": "qwen",
    "trainingCutoff": "2024-04",
    "lastUpdated": "2024-09-19",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 3072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-4-7-tee": {
    "family": "glm",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65535
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-4-6-tee": {
    "family": "glm",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-5-tee": {
    "family": "glm",
    "lastUpdated": "2026-02-14",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65535
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-4-6-fp8": {
    "lastUpdated": "2026-01-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65535
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "zai-org-glm-4-5-tee": {
    "family": "glm",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nvidia-nvidia-nemotron-3-nano-30b-a3b-bf16": {
    "family": "nemotron",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nousresearch-hermes-4-3-36b": {
    "family": "nousresearch",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nousresearch-hermes-4-14b": {
    "family": "nousresearch",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 40960
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "nousresearch-hermes-4-405b-fp8-tee": {
    "family": "nousresearch",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimaxai-minimax-m2-5-tee": {
    "family": "minimax",
    "lastUpdated": "2026-02-15",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "minimaxai-minimax-m2-1-tee": {
    "family": "minimax",
    "lastUpdated": "2026-01-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-v3-1-terminus-tee": {
    "family": "deepseek",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-v3-2-tee": {
    "family": "deepseek",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.125
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-v3-0324-tee": {
    "family": "deepseek",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.095
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-v3-2-speciale-tee": {
    "family": "deepseek",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-r1-tee": {
    "family": "deepseek-thinking",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 163840
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-v3-1-tee": {
    "family": "deepseek",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "deepseek-ai-deepseek-r1-0528-tee": {
    "family": "deepseek-thinking",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "rednote-hilab-dots-ocr": {
    "family": "rednote",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.005
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "unsloth-mistral-nemo-instruct-2407": {
    "family": "unsloth",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.01
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "unsloth-mistral-small-24b-instruct-2501": {
    "family": "unsloth",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "unsloth-gemma-3-12b-it": {
    "family": "unsloth",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "unsloth-gemma-3-4b-it": {
    "family": "unsloth",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 96000
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "unsloth-gemma-3-27b-it": {
    "family": "unsloth",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.02
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "unsloth-llama-3-2-1b-instruct": {
    "lastUpdated": "2026-01-27",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.005
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "unsloth-llama-3-2-3b-instruct": {
    "family": "unsloth",
    "lastUpdated": "2025-02-12",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 16384,
      "pricing": {
        "cacheInput": 0.005
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "moonshotai-kimi-k2-5-tee": {
    "family": "kimi",
    "trainingCutoff": "2024-10",
    "lastUpdated": "2026-01-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65535
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "moonshotai-kimi-k2-thinking-tee": {
    "family": "kimi-thinking",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65535
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-5-397b-a17b-tee": {
    "family": "qwen",
    "lastUpdated": "2026-02-18",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": true
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.15
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-coder-480b-a35b-instruct-fp8-tee": {
    "family": "qwen",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 262144,
      "pricing": {
        "cacheInput": 0.11
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3-235b-a22b-instruct-2507-tee": {
    "family": "qwen",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536,
      "pricing": {
        "cacheInput": 0.04
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen2-5-vl-72b-instruct-tee": {
    "family": "qwen",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "qwen-qwen3guard-gen-0-6b": {
    "family": "qwen",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.005
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "tngtech-deepseek-tng-r1t2-chimera": {
    "family": "tngtech",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 163840
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "tngtech-tng-r1t-chimera-turbo": {
    "lastUpdated": "2026-01-27",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "tngtech-tng-r1t-chimera-tee": {
    "family": "tngtech",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "mistralai-devstral-2-123b-instruct-2512-tee": {
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "openai-gpt-oss-120b-tee": {
    "family": "gpt-oss",
    "lastUpdated": "2026-01-10",
    "interleavedReasoningField": "reasoning_content",
    "apiSupport": {
      "reasoning": true,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 65536
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "chutesai-mistral-small-3-2-24b-instruct-2506": {
    "family": "chutesai",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "chutesai-mistral-small-3-1-24b-instruct-2503": {
    "family": "chutesai",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": true,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 131072,
      "pricing": {
        "cacheInput": 0.015
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "miromind-ai-mirothinker-v1-5-235b": {
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": false,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 8192,
      "pricing": {
        "cacheInput": 0.15
      }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "opengvlab-internvl3-78b-tee": {
    "family": "opengvlab",
    "lastUpdated": "2026-01-10",
    "apiSupport": {
      "reasoning": false,
      "toolCall": false,
      "structuredOutput": true,
      "temperature": true,
      "attachment": false
    },
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "specs": {
      "maxOutputTokens": 32768
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  }
};
