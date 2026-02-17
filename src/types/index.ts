// The "Global Schema" for LLM Registry
// Strict TypeScript types ensuring consistency across components.

export type ModelProvider = 
  | "OpenAI" 
  | "Anthropic" 
  | "Google DeepMind" 
  | "DeepSeek" 
  | "Meta" 
  | "xAI" 
  | "Mistral" 
  | "Alibaba"
  | "Microsoft"
  | "Cohere"
  | "Moonshot AI"
  | "Minimax"
  | "ByteDance"
  | "Amazon"
  | "BigCode"
  | "Databricks"
  | "Shanghai AI Lab"
  | "01.AI"
  | "Baichuan"
  | "Snowflake"
  | "Zhipu AI"
  | "AI21";


export type ModelCapability = 
  | "text" 
  | "code" 
  | "vision" 
  | "audio" 
  | "video"
  | "reasoning";

export type ModelModality =
  | "text"
  | "image"
  | "audio"
  | "video"
  | "other";

export type PricingDirection =
  | "input"
  | "output"
  | "cache_input"
  | "cache_output";

export type PricingUnit =
  | "per_1m_tokens"
  | "per_image"
  | "per_minute"
  | "per_request";

export interface ModelApiSupport {
  stream?: boolean;
  tools?: boolean;
  vision?: boolean;
  jsonMode?: boolean;
  systemPrompt?: boolean;
  maxTokens?: boolean;
  temperature?: boolean;
  topP?: boolean;
}

export interface ModelModalities {
  input: ModelModality[];
  output: ModelModality[];
}

export interface ModelPricingDimension {
  name: string;
  modality: ModelModality;
  direction: PricingDirection;
  unit: PricingUnit;
  priceUsd: number;
  notes?: string;
}

export type ScoreVerification =
  | "third_party"
  | "provider"
  | "community"
  | "estimated";

export type BenchmarkNormalization =
  | "max"
  | "minmax"
  | "inverse"
  | "elo";

// Denormalized Model Object (Embedding scores for performance)
export interface Model {
  id: string;                    // e.g., "claude-3-5-sonnet-20241022"
  name: string;                  // Display name
  provider: string;              // Changed to string for flexibility
  releaseDate: string;           // ISO 8601 (YYYY-MM-DD)
  capabilities: ModelCapability[];
  isOpenSource: boolean;         // True if weights are available (Llama, DeepSeek)
  
  specs: {
    contextWindow: number;       // Tokens (e.g., 200000)
    parameters: string;          // e.g., "70B", "Unknown", "Mixture-of-Experts"
    pricing: {
      input: number;             // USD per 1M tokens
      output: number;            // USD per 1M tokens
      cacheInput?: number;
      cacheOutput?: number;
    };
  };

  providers?: string[];
  apiSupport?: ModelApiSupport;
  modalities?: ModelModalities;
  pricingDimensions?: ModelPricingDimension[];
  trainingCutoff?: string;
  metadataSourceId?: string;
  metadataSourceUrl?: string;
  metadataAsOfDate?: string;
  externalModelId?: string;
  modelCardUrl?: string;
  modelUrl?: string;

  // Variants: Child models (e.g., base, thinking, low/high effort)
  variants?: Model[];

  // Benchmark Scores: Map<BenchmarkID, ScoreObject>
  scores: Record<string, {
    score: number | null;        // The raw value (0-100 or specific metric), allow null
    verified: boolean;           // True = 3rd party verified (e.g., Scale, Artificial Analysis)
    verificationLevel?: ScoreVerification;
    sourceId?: string;
    sourceUrl?: string;
    asOfDate?: string;           // ISO 8601 (YYYY-MM-DD)
    rawScore?: string;           // Optional raw string from original source
    notes?: string;
    rank?: number;               // Pre-computed rank for this benchmark
  }>;
}

export type BenchmarkCategory = 
  | "Coding" 
  | "Reasoning" 
  | "Knowledge" 
  | "Math" 
  | "Multimodal"
  | "Chat"
  | "Agent"
  | "Real-world"
  | "Science"
  | "Long Context"
  | "Multilingual"
  | "Instruction Following"
  | "Hallucination"
  | "STEM"
  | "Vision"
  | "Video"
  | "Agentic"
  | "Advanced Tasks";

export interface Benchmark {
  id: string;                    // e.g., "swe-bench-verified"
  name: string;                  // Display name
  category: BenchmarkCategory;
  description: string;           // Tooltip text
  maxScore: number;              // Usually 100
  minScore?: number;             // Optional lower bound for normalization
  higherIsBetter: boolean;       // True for accuracy, False for perplexity
  normalization?: BenchmarkNormalization;
  unit?: string;                 // e.g., "%", "ELO", "pass@1"
  link?: string;                 // URL to original paper/leaderboard
}

export interface SourceRecord {
  id: string;
  name: string;
  url: string;
  publisher?: string;
  updatedAt?: string;
}
