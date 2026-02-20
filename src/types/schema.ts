import { z } from "zod";

const modelCapabilityValues = ["text", "code", "vision", "audio", "video", "reasoning"] as const;
const modelModalityValues = ["text", "image", "audio", "video", "other"] as const;
const modelTypeValues = ["text", "image-generation", "image-understanding", "video-generation", "video-understanding", "audio-speech", "audio-understanding", "embedding"] as const;
const pricingDirectionValues = ["input", "output", "cache_input", "cache_output"] as const;
const pricingUnitValues = ["per_1m_tokens", "per_image", "per_minute", "per_request"] as const;
const scoreVerificationValues = ["third_party", "provider", "community", "estimated"] as const;
const benchmarkNormalizationValues = ["max", "minmax", "inverse", "elo"] as const;
const benchmarkCategoryValues = [
  "Coding",
  "Reasoning",
  "Knowledge",
  "Math",
  "Multimodal",
  "Chat",
  "Agent",
  "Real-world",
  "Science",
  "Long Context",
  "Multilingual",
  "Instruction Following",
  "Hallucination",
  "STEM",
  "Vision",
  "Video",
  "Agentic",
  "Advanced Tasks",
] as const;

const httpUrlSchema = z
  .url()
  .refine((value) => value.startsWith("https://") || value.startsWith("http://"), {
    message: "URL must use http or https",
  });

export const scoreSchema = z.object({
  score: z.number().nullable(),
  verified: z.boolean(),
  verificationLevel: z.enum(scoreVerificationValues).optional(),
  sourceId: z.string().min(1).optional(),
  sourceUrl: httpUrlSchema.optional(),
  asOfDate: z.string().min(1).optional(),
  rawScore: z.string().optional(),
  notes: z.string().optional(),
  rank: z.number().int().nonnegative().optional(),
});

export const modelApiSupportSchema = z.object({
  stream: z.boolean().optional(),
  tools: z.boolean().optional(),
  vision: z.boolean().optional(),
  jsonMode: z.boolean().optional(),
  systemPrompt: z.boolean().optional(),
  maxTokens: z.boolean().optional(),
  temperature: z.boolean().optional(),
  topP: z.boolean().optional(),
});

export const modelModalitiesSchema = z.object({
  input: z.array(z.enum(modelModalityValues)),
  output: z.array(z.enum(modelModalityValues)),
});

export const modelPricingDimensionSchema = z.object({
  name: z.string().min(1),
  modality: z.enum(modelModalityValues),
  direction: z.enum(pricingDirectionValues),
  unit: z.enum(pricingUnitValues),
  priceUsd: z.number().nonnegative(),
  notes: z.string().optional(),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const modelSchema: z.ZodType<any> = z.lazy(() =>
  z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    provider: z.string().min(1),
    releaseDate: z.string().min(1),
    capabilities: z.array(z.enum(modelCapabilityValues)),
    isOpenSource: z.boolean(),
    modelType: z.enum(modelTypeValues).optional(),
    specs: z.object({
      contextWindow: z.number().nonnegative(),
      parameters: z.string().min(1),
      pricing: z.object({
        input: z.number().nonnegative(),
        output: z.number().nonnegative(),
        cacheInput: z.number().nonnegative().optional(),
        cacheOutput: z.number().nonnegative().optional(),
      }),
    }),
    providers: z.array(z.string().min(1)).optional(),
    apiSupport: modelApiSupportSchema.optional(),
    modalities: modelModalitiesSchema.optional(),
    pricingDimensions: z.array(modelPricingDimensionSchema).optional(),
    trainingCutoff: z.string().min(1).optional(),
    metadataSourceId: z.string().min(1).optional(),
    metadataSourceUrl: httpUrlSchema.optional(),
    metadataAsOfDate: z.string().min(1).optional(),
    externalModelId: z.string().min(1).optional(),
    modelCardUrl: httpUrlSchema.optional(),
    modelUrl: httpUrlSchema.optional(),
    scores: z.record(z.string(), scoreSchema),
    variants: z.array(z.lazy(() => modelSchema)).optional(),
  })
);

export const benchmarkSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  category: z.enum(benchmarkCategoryValues),
  description: z.string().min(1),
  maxScore: z.number(),
  minScore: z.number().optional(),
  higherIsBetter: z.boolean(),
  normalization: z.enum(benchmarkNormalizationValues).optional(),
  unit: z.string().min(1).optional(),
  link: httpUrlSchema.optional(),
  paperUrl: httpUrlSchema.optional(),
});

export const sourceRecordSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  url: httpUrlSchema,
  publisher: z.string().optional(),
  updatedAt: z.string().optional(),
});

export const modelArraySchema = z.array(modelSchema);
export const benchmarkArraySchema = z.array(benchmarkSchema);
export const sourceArraySchema = z.array(sourceRecordSchema);
