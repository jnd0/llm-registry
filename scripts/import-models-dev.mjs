// Script to import model metadata from models.dev API
// Usage: node scripts/import-models-dev.mjs

import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

const MODELS_DEV_API_URL = 'https://models.dev/api.json';

console.log('🔄 Fetching models.dev API data...');

async function fetchModelsDevData() {
  try {
    const response = await fetch(MODELS_DEV_API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('❌ Error fetching models.dev API:', error.message);
    console.log('💡 Falling back to cached data...');
    
    // Fallback to cached data if available
    try {
      const cachedPath = join(process.cwd(), 'scripts', 'models-dev-cache.json');
      const cached = JSON.parse(readFileSync(cachedPath, 'utf-8'));
      return cached;
    } catch {
      throw new Error('No cached data available');
    }
  }
}

function normalizeProviderName(name) {
  const mapping = {
    'openai': 'OpenAI',
    'anthropic': 'Anthropic',
    'google': 'Google DeepMind',
    'google-vertex': 'Google DeepMind',
    'meta': 'Meta',
    'mistral': 'Mistral',
    'deepseek': 'DeepSeek',
    'cohere': 'Cohere',
    'zhipuai': 'Zhipu AI',
    'moonshotai': 'Moonshot AI',
    'minimax': 'Minimax',
    'bytedance': 'ByteDance',
    'alibaba': 'Alibaba',
    'amazon-bedrock': 'Amazon',
    'microsoft': 'Microsoft',
    'groq': 'Groq',
    'fireworks-ai': 'Fireworks AI',
    'togetherai': 'Together AI',
    'ollama': 'Ollama',
    'huggingface': 'Hugging Face',
    'replicate': 'Replicate',
    'perplexity': 'Perplexity',
    'ai21': 'AI21',
    'databricks': 'Databricks',
    'snowflake': 'Snowflake',
    'nvidia': 'NVIDIA',
    'xai': 'xAI',
  };
  return mapping[name] || name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function extractFamilyFromId(modelId, providerId) {
  // Try to extract family from model ID patterns
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
  
  // Default to provider-based family
  return providerId.toLowerCase();
}

function convertModalities(input, output) {
  const modalityMap = {
    'text': 'text',
    'image': 'image',
    'audio': 'audio',
    'video': 'video',
    'pdf': 'other'
  };
  
  const inputModalities = (input || []).map(m => modalityMap[m] || 'text');
  const outputModalities = (output || []).map(m => modalityMap[m] || 'text');
  
  return {
    input: [...new Set(inputModalities)],
    output: [...new Set(outputModalities)]
  };
}

function generateOverride(providerId, modelId, modelData) {
  const override = {};
  
  // Family
  if (modelData.family) {
    override.family = modelData.family;
  }
  
  // Knowledge cutoff
  if (modelData.knowledge) {
    override.knowledgeCutoff = modelData.knowledge;
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
  
  // API Support / Capabilities
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
    const modalities = convertModalities(
      modelData.modalities.input,
      modelData.modalities.output
    );
    override.modalities = modalities;
  }
  
  // Specs
  const specs = {};
  
  // Max output tokens
  if (modelData.limit?.output) {
    specs.maxOutputTokens = modelData.limit.output;
  }
  
  // Pricing extensions
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
        cacheRead: modelData.cost.context_over_200k.cache_read
      };
    }
    
    if (Object.keys(pricing).length > 0) {
      specs.pricing = pricing;
    }
  }
  
  if (Object.keys(specs).length > 0) {
    override.specs = specs;
  }
  
  // Metadata source
  override.metadataSourceId = 'models-dev';
  override.metadataAsOfDate = new Date().toISOString().split('T')[0];
  
  return override;
}

async function main() {
  console.log('🚀 Starting models.dev import...\n');
  
  // Fetch data
  const data = await fetchModelsDevData();
  const providers = Object.keys(data).length;
  let totalModels = 0;
  
  console.log(`✅ Fetched ${providers} providers\n`);
  
  // Generate overrides
  const overrides = {};
  const stats = {
    totalModels: 0,
    withFamily: 0,
    withKnowledge: 0,
    withReasoning: 0,
    withCachePricing: 0,
    withAudioPricing: 0,
    withMaxOutput: 0
  };
  
  for (const [providerId, providerData] of Object.entries(data)) {
    if (!providerData.models || typeof providerData.models !== 'object') {
      continue;
    }
    
    for (const [modelId, modelData] of Object.entries(providerData.models)) {
      totalModels++;
      stats.totalModels++;
      
      const override = generateOverride(providerId, modelId, modelData);
      
      // Track stats
      if (override.family) stats.withFamily++;
      if (override.knowledgeCutoff) stats.withKnowledge++;
      if (override.apiSupport?.reasoning) stats.withReasoning++;
      if (override.specs?.pricing?.cacheInput || override.specs?.pricing?.cacheOutput) stats.withCachePricing++;
      if (override.specs?.pricing?.inputAudio || override.specs?.pricing?.outputAudio) stats.withAudioPricing++;
      if (override.specs?.maxOutputTokens) stats.withMaxOutput++;
      
      // Only include if we have meaningful data
      if (Object.keys(override).length > 2) { // >2 because of metadataSourceId and metadataAsOfDate
        overrides[modelId] = override;
      }
    }
  }
  
  // Generate output file
  const output = `// Auto-generated from models.dev API
// Generated: ${new Date().toISOString()}
// Source: https://models.dev
// License: MIT

import { ModelMetadataOverride } from "@/data/model-metadata-overrides";

export const modelsDevMetadata: Record<string, ModelMetadataOverride> = ${JSON.stringify(overrides, null, 2)};
`;
  
  // Write file
  const outputPath = join(process.cwd(), 'src', 'data', 'models-dev-import.ts');
  writeFileSync(outputPath, output);
  
  // Print summary
  console.log('📊 Import Statistics:');
  console.log(`   Total models processed: ${stats.totalModels.toLocaleString()}`);
  console.log(`   Models with overrides: ${Object.keys(overrides).length.toLocaleString()}`);
  console.log(`\n   Features imported:`);
  console.log(`   - Family assignments: ${stats.withFamily.toLocaleString()}`);
  console.log(`   - Knowledge cutoffs: ${stats.withKnowledge.toLocaleString()}`);
  console.log(`   - Reasoning support: ${stats.withReasoning.toLocaleString()}`);
  console.log(`   - Cache pricing: ${stats.withCachePricing.toLocaleString()}`);
  console.log(`   - Audio pricing: ${stats.withAudioPricing.toLocaleString()}`);
  console.log(`   - Max output tokens: ${stats.withMaxOutput.toLocaleString()}`);
  console.log(`\n✅ Output written to: ${outputPath}`);
  console.log(`\n💡 Next steps:`);
  console.log(`   1. Review the generated file`);
  console.log(`   2. Run: npm run validate:data`);
  console.log(`   3. Run: npm run build`);
}

main().catch(console.error);
