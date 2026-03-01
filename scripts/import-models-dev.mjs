// Script to import model metadata from models.dev API
// Usage: bun run scripts/import-models-dev.mjs

import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const MODELS_DEV_API_URL = 'https://models.dev/api.json';

console.log('🔄 Fetching models.dev API data...');

// ID mapping from models.dev to internal IDs
const MODELS_DEV_ID_MAP = {
  // OpenAI
  'openai/gpt-4o': 'openai-gpt-4o',
  'openai/o1': 'o1',
  'openai/o1-preview': 'o1-preview',
  'openai/o1-mini': 'o1-mini',
  'openai/o3': 'o3',
  
  // Anthropic
  'anthropic/claude-3-5-sonnet': 'claude-3-5-sonnet',
  'anthropic/claude-opus-4': 'claude-opus-4-5',
  'anthropic/claude-sonnet-4': 'claude-sonnet-4-5',
  
  // Google
  'google/gemini-2.5-pro': 'google-gemini-2-5-pro',
  'google/gemini-3-pro': 'gemini-3-pro',
  'google/gemini-3-flash': 'gemini-3-flash',
  
  // Meta
  'meta/llama-3-3-70b': 'meta-llama-3-3-70b',
  'meta/llama-3-1-405b': 'meta-llama-3-1-405b',
  
  // DeepSeek
  'deepseek/deepseek-r1': 'deepseek-r1',
  'deepseek/deepseek-v3': 'deepseek-v3',
  
  // xAI
  'xai/grok-3': 'grok-3',
  'xai/grok-4': 'grok-4',
  
  // Zhipu/GLM - normalize dots to dashes
  'zhipu/glm-4.6': 'glm-4-6',
  'zhipu/glm-4.7': 'glm-4-7',
  'zhipu/glm-5': 'glm-5',
  
  // Moonshot/Kimi
  'moonshot/kimi-k2': 'kimi-k2',
  'moonshot/kimi-k2.5': 'kimi-k2-5',
  
  // Alibaba/Qwen
  'alibaba/qwen-2.5': 'qwen-2-5-max',
  'alibaba/qwen-3': 'qwen-3-5-397b-a17b',
  
  // Cohere
  'cohere/command-r': 'command-r-plus-08-2024',
  'cohere/command-r-plus': 'command-r-plus-08-2024',
};

function normalizeModelsDevId(modelId, providerId) {
  // Check direct mapping first
  if (MODELS_DEV_ID_MAP[modelId]) {
    return MODELS_DEV_ID_MAP[modelId];
  }
  
  // Check with provider prefix
  const prefixedId = `${providerId}/${modelId}`;
  if (MODELS_DEV_ID_MAP[prefixedId]) {
    return MODELS_DEV_ID_MAP[prefixedId];
  }
  
  // Normalize: replace slashes and dots with dashes
  let normalized = modelId
    .replace(/\//g, '-')
    .replace(/\./g, '-')
    .replace(/_/g, '-')
    .toLowerCase();
  
  // Remove provider prefix if present
  normalized = normalized.replace(`${providerId}-`, '');
  
  // Check if we have a match with normalized ID
  if (MODELS_DEV_ID_MAP[normalized]) {
    return MODELS_DEV_ID_MAP[normalized];
  }
  
  // Return normalized ID
  return normalized;
}

function normalizeProviderName(name) {
  const mapping = {
    'openai': 'OpenAI',
    'anthropic': 'Anthropic',
    'google': 'Google DeepMind',
    'meta': 'Meta',
    'mistral': 'Mistral',
    'deepseek': 'DeepSeek',
    'cohere': 'Cohere',
    'zhipuai': 'Zhipu AI',
    'moonshotai': 'Moonshot AI',
    'alibaba': 'Alibaba',
    'xai': 'xAI',
    'groq': 'Groq',
  };
  return mapping[name] || name;
}

function extractFamilyFromId(modelId, providerId) {
  const patterns = [
    { regex: /^(gpt|o\d|claude|gemini|llama|qwen|mistral|mixtral|phi|grok|command)/i, group: 1 },
    { regex: /-(gpt|claude|gemini|llama|qwen|mistral|phi)-/i, group: 1 },
  ];
  
  for (const { regex, group } of patterns) {
    const match = modelId.match(regex);
    if (match) {
      return match[group].toLowerCase();
    }
  }
  
  return providerId.toLowerCase();
}

function generateOverride(providerId, modelId, modelData) {
  const normalizedId = normalizeModelsDevId(modelId, providerId);
  const override = {};
  
  // Family
  if (modelData.family) {
    override.family = modelData.family;
  }
  
  // Use unified trainingCutoff field (map from knowledge)
  if (modelData.knowledge) {
    override.trainingCutoff = modelData.knowledge;
  }
  
  // Last updated
  if (modelData.last_updated) {
    override.lastUpdated = modelData.last_updated;
  }
  
  // Interleaved reasoning field
  if (modelData.interleaved && typeof modelData.interleaved === 'object' && modelData.interleaved.field) {
    override.interleavedReasoningField = modelData.interleaved.field;
  } else if (modelData.reasoning === true) {
    override.interleavedReasoningField = 'reasoning_content';
  }
  
  // Status
  if (modelData.status) {
    override.status = modelData.status === 'deprecated' ? 'deprecated' : 'active';
  }
  
  // API Support - will be deep merged in applyMetadataOverrides
  const apiSupport = {};
  if (typeof modelData.reasoning === 'boolean') apiSupport.reasoning = modelData.reasoning;
  if (typeof modelData.tool_call === 'boolean') apiSupport.toolCall = modelData.tool_call;
  if (typeof modelData.structured_output === 'boolean') apiSupport.structuredOutput = modelData.structured_output;
  if (typeof modelData.temperature === 'boolean') apiSupport.temperature = modelData.temperature;
  if (typeof modelData.attachment === 'boolean') apiSupport.attachment = modelData.attachment;
  
  if (Object.keys(apiSupport).length > 0) {
    override.apiSupport = apiSupport;
  }
  
  // Modalities
  if (modelData.modalities) {
    override.modalities = {
      input: [...new Set((modelData.modalities.input || []).map(m => m === 'pdf' ? 'other' : m))],
      output: [...new Set((modelData.modalities.output || []).map(m => m === 'pdf' ? 'other' : m))],
    };
  }
  
  // Specs
  const specs = {};
  
  if (modelData.limit?.output) {
    specs.maxOutputTokens = modelData.limit.output;
  }
  
  if (modelData.cost) {
    const pricing = {};
    
    if (modelData.cost.cache_read !== undefined) {
      pricing.cacheInput = modelData.cost.cache_read;
    }
    if (modelData.cost.cache_write !== undefined) {
      pricing.cacheOutput = modelData.cost.cache_write;
    }
    if (modelData.cost.reasoning !== undefined) {
      pricing.reasoning = modelData.cost.reasoning;
    }
    if (modelData.cost.input_audio !== undefined) {
      pricing.inputAudio = modelData.cost.input_audio;
    }
    if (modelData.cost.output_audio !== undefined) {
      pricing.outputAudio = modelData.cost.output_audio;
    }
    if (modelData.cost.context_over_200k) {
      pricing.contextOver200k = {
        input: modelData.cost.context_over_200k.input,
        output: modelData.cost.context_over_200k.output,
        cacheRead: modelData.cost.context_over_200k.cache_read,
      };
    }
    
    if (Object.keys(pricing).length > 0) {
      specs.pricing = pricing;
    }
  }
  
  if (Object.keys(specs).length > 0) {
    override.specs = specs;
  }
  
  override.metadataSourceId = 'models-dev';
  override.metadataAsOfDate = new Date().toISOString().split('T')[0];
  
  return { id: normalizedId, override };
}

async function main() {
  console.log('🚀 Starting models.dev import...\n');
  
  let data;
  try {
    const response = await fetch(MODELS_DEV_API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    data = await response.json();
  } catch (error) {
    console.error('❌ Error fetching models.dev API:', error.message);
    process.exit(1);
  }
  
  const providers = Object.keys(data).length;
  console.log(`✅ Fetched ${providers} providers\n`);
  
  const overrides = {};
  const stats = {
    totalModels: 0,
    withTrainingCutoff: 0,
    withReasoning: 0,
    withCachePricing: 0,
    withAudioPricing: 0,
    withMaxOutput: 0,
  };
  
  for (const [providerId, providerData] of Object.entries(data)) {
    if (!providerData.models || typeof providerData.models !== 'object') {
      continue;
    }
    
    for (const [modelId, modelData] of Object.entries(providerData.models)) {
      stats.totalModels++;
      
      const { id: normalizedId, override } = generateOverride(providerId, modelId, modelData);
      
      // Track stats
      if (override.trainingCutoff) stats.withTrainingCutoff++;
      if (override.apiSupport?.reasoning) stats.withReasoning++;
      if (override.specs?.pricing?.cacheInput || override.specs?.pricing?.cacheOutput) stats.withCachePricing++;
      if (override.specs?.pricing?.inputAudio || override.specs?.pricing?.outputAudio) stats.withAudioPricing++;
      if (override.specs?.maxOutputTokens) stats.withMaxOutput++;
      
      if (Object.keys(override).length > 2) {
        overrides[normalizedId] = override;
      }
    }
  }
  
  // Ensure public/api/data directory exists
  const publicDir = join(process.cwd(), 'public', 'api', 'data');
  const modelsDir = join(process.cwd(), 'public', 'api', 'v1', 'models');
  if (!existsSync(publicDir)) {
    mkdirSync(publicDir, { recursive: true });
  }
  if (!existsSync(modelsDir)) {
    mkdirSync(modelsDir, { recursive: true });
  }
  
  // Write consolidated JSON file
  const jsonOutput = JSON.stringify(overrides, null, 2);
  const jsonPath = join(publicDir, 'models-dev-metadata.json');
  writeFileSync(jsonPath, jsonOutput);
  
  // Write individual model files for static slicing
  Object.entries(overrides).forEach(([modelId, override]) => {
    const modelPath = join(modelsDir, `${modelId}.json`);
    writeFileSync(modelPath, JSON.stringify(override, null, 2));
  });
  
  // Write ID map as JSON
  const idMapPath = join(process.cwd(), 'src', 'data', 'models-dev-id-map.json');
  writeFileSync(idMapPath, JSON.stringify(MODELS_DEV_ID_MAP, null, 2));
  
  const output = `// Auto-generated from models.dev API
// Generated: ${new Date().toISOString()}
// Source: https://models.dev
// License: MIT
// 
// Note: IDs are normalized to match internal llm-registry conventions.
// Use src/data/models-dev-id-map.json for ID mapping reference.
//
// This file is auto-generated. Do not edit manually.
// Run: bun run import:models-dev

import { ModelMetadataOverride } from "@/data/model-metadata-overrides";

export const modelsDevMetadata: Record<string, ModelMetadataOverride> = ${jsonOutput};
`;
  
  const outputPath = join(process.cwd(), 'src', 'data', 'models-dev-import.ts');
  writeFileSync(outputPath, output);
  
  console.log('📊 Import Statistics:');
  console.log(`   Total models processed: ${stats.totalModels.toLocaleString()}`);
  console.log(`   Models with overrides: ${Object.keys(overrides).length.toLocaleString()}`);
  console.log(`\n   Features imported:`);
  console.log(`   - Training cutoffs: ${stats.withTrainingCutoff.toLocaleString()}`);
  console.log(`   - Reasoning support: ${stats.withReasoning.toLocaleString()}`);
  console.log(`   - Cache pricing: ${stats.withCachePricing.toLocaleString()}`);
  console.log(`   - Audio pricing: ${stats.withAudioPricing.toLocaleString()}`);
  console.log(`   - Max output tokens: ${stats.withMaxOutput.toLocaleString()}`);
  console.log(`\n✅ Output files:`);
  console.log(`   - ${jsonPath} (${(jsonOutput.length / 1024).toFixed(1)} KB)`);
  console.log(`   - ${modelsDir}/*.json (${Object.keys(overrides).length} individual model files)`);
  console.log(`   - ${outputPath} (${(output.length / 1024).toFixed(1)} KB)`);
  console.log(`   - ${idMapPath} (${(JSON.stringify(MODELS_DEV_ID_MAP).length / 1024).toFixed(1)} KB)`);
  console.log(`\n💡 Next steps:`);
  console.log(`   1. Review the generated files`);
  console.log(`   2. Run: bun run validate:data`);
  console.log(`   3. Run: bun run build`);
}

main().catch(console.error);
