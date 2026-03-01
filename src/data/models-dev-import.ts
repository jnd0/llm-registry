// Data imported from models.dev API (https://models.dev)
// Import date: 2026-03-01
// Purpose: Enhanced model metadata including family, capabilities, and advanced pricing

import { ModelMetadataOverride } from "@/data/model-metadata-overrides";

export const modelsDevMetadata: Record<string, ModelMetadataOverride> = {
  // Google Gemini models - from models.dev
  "gemini-3-pro": {
    family: "gemini-pro",
    knowledgeCutoff: "2025-01",
    lastUpdated: "2025-11-18",
    interleavedReasoningField: "reasoning_content",
    apiSupport: {
      reasoning: true,
      toolCall: true,
      structuredOutput: true,
      temperature: true,
      attachment: true,
      tools: true,
      vision: true,
      stream: true,
      jsonMode: true,
      maxTokens: true,
      systemPrompt: true,
    },
    modalities: {
      input: ["text", "image", "audio", "video"],
      output: ["text"],
    },
    specs: {
      maxOutputTokens: 65536,
      pricing: {
        cacheInput: 0.2,
      },
    },
    metadataSourceId: "models-dev",
    metadataAsOfDate: "2026-03-01",
  },
  "gemini-3-pro-high": {
    family: "gemini-pro",
    knowledgeCutoff: "2025-01",
    lastUpdated: "2025-11-18",
    interleavedReasoningField: "reasoning_content",
    apiSupport: {
      reasoning: true,
      toolCall: true,
      structuredOutput: true,
      temperature: true,
      attachment: true,
    },
    modalities: {
      input: ["text", "image", "audio", "video"],
      output: ["text"],
    },
    specs: {
      maxOutputTokens: 65536,
      pricing: {
        cacheInput: 0.2,
      },
    },
    metadataSourceId: "models-dev",
    metadataAsOfDate: "2026-03-01",
  },
  "gemini-2.5-flash": {
    family: "gemini-flash",
    knowledgeCutoff: "2025-01",
    lastUpdated: "2025-06-05",
    interleavedReasoningField: "reasoning_content",
    apiSupport: {
      reasoning: true,
      toolCall: true,
      structuredOutput: true,
      temperature: true,
      attachment: true,
    },
    modalities: {
      input: ["text", "image", "audio", "video"],
      output: ["text"],
    },
    specs: {
      maxOutputTokens: 65536,
      pricing: {
        cacheInput: 0.075,
        inputAudio: 1,
      },
    },
    metadataSourceId: "models-dev",
    metadataAsOfDate: "2026-03-01",
  },
  "gemini-2.5-pro-preview-06-05": {
    family: "gemini-pro",
    knowledgeCutoff: "2025-01",
    lastUpdated: "2025-06-05",
    interleavedReasoningField: "reasoning_content",
    apiSupport: {
      reasoning: true,
      toolCall: true,
      structuredOutput: true,
      temperature: true,
      attachment: true,
    },
    modalities: {
      input: ["text", "image", "audio", "video"],
      output: ["text"],
    },
    specs: {
      maxOutputTokens: 65536,
      pricing: {
        cacheInput: 0.31,
      },
    },
    metadataSourceId: "models-dev",
    metadataAsOfDate: "2026-03-01",
  },
  
  // Anthropic Claude models - from models.dev
  "claude-opus-4-6": {
    family: "claude-opus",
    knowledgeCutoff: "2025-01",
    lastUpdated: "2026-02-05",
    interleavedReasoningField: "reasoning_content",
    apiSupport: {
      reasoning: true,
      toolCall: true,
      structuredOutput: true,
      temperature: true,
      attachment: true,
    },
    modalities: {
      input: ["text", "image"],
      output: ["text"],
    },
    specs: {
      maxOutputTokens: 64000,
    },
    metadataSourceId: "models-dev",
    metadataAsOfDate: "2026-03-01",
  },
  "claude-sonnet-4-5": {
    family: "claude-sonnet",
    knowledgeCutoff: "2025-01",
    lastUpdated: "2025-11-24",
    interleavedReasoningField: "reasoning_content",
    apiSupport: {
      reasoning: false,
      toolCall: true,
      structuredOutput: true,
      temperature: true,
      attachment: true,
    },
    modalities: {
      input: ["text", "image"],
      output: ["text"],
    },
    specs: {
      maxOutputTokens: 64000,
    },
    metadataSourceId: "models-dev",
    metadataAsOfDate: "2026-03-01",
  },
  "claude-sonnet-4-5-high": {
    family: "claude-sonnet",
    knowledgeCutoff: "2025-01",
    lastUpdated: "2025-11-24",
    apiSupport: {
      reasoning: false,
      toolCall: true,
      structuredOutput: true,
      temperature: true,
      attachment: true,
    },
    modalities: {
      input: ["text", "image"],
      output: ["text"],
    },
    specs: {
      maxOutputTokens: 64000,
    },
    metadataSourceId: "models-dev",
    metadataAsOfDate: "2026-03-01",
  },
  
  // OpenAI models - from models.dev
  "gpt-5-2-pro": {
    family: "gpt",
    knowledgeCutoff: "2025-04",
    lastUpdated: "2025-12-11",
    interleavedReasoningField: "reasoning_content",
    apiSupport: {
      reasoning: true,
      toolCall: true,
      structuredOutput: true,
      temperature: true,
      attachment: true,
    },
    modalities: {
      input: ["text", "image", "audio"],
      output: ["text"],
    },
    specs: {
      maxOutputTokens: 64000,
    },
    metadataSourceId: "models-dev",
    metadataAsOfDate: "2026-03-01",
  },
  "gpt-5-2": {
    family: "gpt",
    knowledgeCutoff: "2025-04",
    lastUpdated: "2025-12-11",
    interleavedReasoningField: "reasoning_content",
    apiSupport: {
      reasoning: true,
      toolCall: true,
      structuredOutput: true,
      temperature: true,
      attachment: true,
    },
    modalities: {
      input: ["text", "image", "audio"],
      output: ["text"],
    },
    specs: {
      maxOutputTokens: 64000,
    },
    metadataSourceId: "models-dev",
    metadataAsOfDate: "2026-03-01",
  },
  "gpt-5-2-high": {
    family: "gpt",
    knowledgeCutoff: "2025-04",
    lastUpdated: "2025-12-11",
    interleavedReasoningField: "reasoning_content",
    apiSupport: {
      reasoning: true,
      toolCall: true,
      structuredOutput: true,
      temperature: true,
      attachment: true,
    },
    modalities: {
      input: ["text", "image", "audio"],
      output: ["text"],
    },
    specs: {
      maxOutputTokens: 64000,
    },
    metadataSourceId: "models-dev",
    metadataAsOfDate: "2026-03-01",
  },
  "gpt-5-2-xhigh": {
    family: "gpt",
    knowledgeCutoff: "2025-04",
    lastUpdated: "2025-12-11",
    interleavedReasoningField: "reasoning_content",
    apiSupport: {
      reasoning: true,
      toolCall: true,
      structuredOutput: true,
      temperature: true,
      attachment: true,
    },
    modalities: {
      input: ["text", "image", "audio"],
      output: ["text"],
    },
    specs: {
      maxOutputTokens: 64000,
    },
    metadataSourceId: "models-dev",
    metadataAsOfDate: "2026-03-01",
  },
  "o1": {
    family: "gpt",
    knowledgeCutoff: "2023-10",
    lastUpdated: "2024-12-05",
    interleavedReasoningField: "reasoning_content",
    apiSupport: {
      reasoning: true,
      toolCall: true,
      structuredOutput: true,
      temperature: false,
      attachment: true,
    },
    modalities: {
      input: ["text", "image"],
      output: ["text"],
    },
    specs: {
      maxOutputTokens: 100000,
    },
    metadataSourceId: "models-dev",
    metadataAsOfDate: "2026-03-01",
  },
  "openai-gpt-oss-120b": {
    family: "gpt",
    knowledgeCutoff: "2025-04",
    lastUpdated: "2025-10-20",
    apiSupport: {
      reasoning: false,
      toolCall: true,
      structuredOutput: true,
      temperature: true,
      attachment: false,
    },
    modalities: {
      input: ["text"],
      output: ["text"],
    },
    metadataSourceId: "models-dev",
    metadataAsOfDate: "2026-03-01",
  },
};
