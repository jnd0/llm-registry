// ID mapping from models.dev to internal llm-registry IDs
// This handles provider prefixes and naming convention differences

export const modelsDevIdMap: Record<string, string> = {
  // OpenAI
  'openai/gpt-4o': 'openai-gpt-4o',
  'openai/gpt-4': 'openai-gpt-4',
  'openai/gpt-3.5-turbo': 'openai-gpt-3-5-turbo',
  'openai/o1': 'o1',
  'openai/o1-preview': 'o1-preview',
  'openai/o1-mini': 'o1-mini',
  'openai/o3': 'o3',
  'openai/o3-pro': 'o3-pro',
  'openai/o4-mini': 'o4-mini',
  'openai/gpt-5': 'openai-gpt-5-1',
  'openai/gpt-5-mini': 'openai-gpt-5-mini',
  
  // Anthropic
  'anthropic/claude-3-5-sonnet': 'claude-3-5-sonnet',
  'anthropic/claude-3-5-haiku': 'claude-3-5-haiku',
  'anthropic/claude-3-opus': 'claude-3-opus',
  'anthropic/claude-3-sonnet': 'claude-3-sonnet',
  'anthropic/claude-3-haiku': 'claude-3-haiku',
  'anthropic/claude-opus-4': 'claude-opus-4-5',
  'anthropic/claude-sonnet-4': 'claude-sonnet-4-5',
  
  // Google
  'google/gemini-pro': 'google-gemini-2-5-pro',
  'google/gemini-2.5-pro': 'google-gemini-2-5-pro',
  'google/gemini-2.5-flash': 'gemini-2.5-flash',
  'google/gemini-3-pro': 'gemini-3-pro',
  'google/gemini-3-flash': 'gemini-3-flash',
  
  // Meta
  'meta/llama-3-3-70b': 'meta-llama-3-3-70b',
  'meta/llama-3-2-90b': 'meta-llama-3-2-90b',
  'meta/llama-3-1-405b': 'meta-llama-3-1-405b',
  'meta/llama-3-70b': 'meta-llama-3-70b',
  'meta/llama-4-scout': 'meta-llama-4-scout',
  'meta/llama-4-maverick': 'meta-llama-4-maverick',
  
  // DeepSeek
  'deepseek/deepseek-r1': 'deepseek-r1',
  'deepseek/deepseek-v3': 'deepseek-v3',
  'deepseek/deepseek-r1-distill-llama-70b': 'deepseek-r1-distill-llama-70b',
  'deepseek/deepseek-r1-distill-qwen-32b': 'deepseek-r1-distill-qwen-32b',
  
  // Mistral
  'mistral/mistral-large': 'mistral-large-2',
  'mistral/mistral-small': 'ministral-3b',
  'mistral/mixtral': 'mixtral-8x7b',
  'mistral/codestral': 'codestral',
  
  // xAI
  'xai/grok-3': 'grok-3',
  'xai/grok-4': 'grok-4',
  'xai/grok-4-fast': 'grok-4-1-fast',
  
  // Zhipu/GLM
  'zhipu/glm-4': 'glm-4-7',
  'zhipu/glm-4.5': 'glm-4-6',
  'zhipu/glm-5': 'glm-5',
  
  // Moonshot/Kimi
  'moonshot/kimi-k2': 'kimi-k2',
  'moonshot/kimi-k2.5': 'kimi-k2-5',
  
  // Alibaba/Qwen
  'alibaba/qwen-2.5': 'qwen-2-5-max',
  'alibaba/qwen-3': 'qwen-3-5-397b-a17b',
  'alibaba/qwen-2.5-vl': 'qwen2.5-vl-72b-instruct',
  'alibaba/qwen3-vl': 'qwen3-vl-235b-a22b',
  
  // Cohere
  'cohere/command-r': 'command-r-plus-08-2024',
  'cohere/command-r-plus': 'command-r-plus-08-2024',
  'cohere/command-a': 'command-a',
  
  // AI21
  'ai21/jamba': 'jamba-2-large',
  'ai21/jamba-1.5': 'jamba-2-large',
  
  // Amazon
  'amazon/nova-pro': 'amazon-nova-pro',
  'amazon/nova-lite': 'amazon-nova-lite',
  'amazon/titan': 'amazon-titan',
  
  // Microsoft
  'microsoft/phi-4': 'phi-4',
  'microsoft/phi-3': 'phi-3-5',
  
  // Groq
  'groq/llama-3.3-70b': 'meta-llama-3-3-70b',
  'groq/llama-3-70b': 'meta-llama-3-70b',
  
  // Databricks
  'databricks/dbrx': 'dbrx-instruct',
  'databricks/dbx': 'dbrx-instruct',
};

// Normalize models.dev ID to internal ID format
export function normalizeModelsDevId(modelsDevId: string, providerId: string): string {
  // Check direct mapping first
  if (modelsDevIdMap[modelsDevId]) {
    return modelsDevIdMap[modelsDevId];
  }
  
  // Check with provider prefix
  const prefixedId = `${providerId}/${modelsDevId}`;
  if (modelsDevIdMap[prefixedId]) {
    return modelsDevIdMap[prefixedId];
  }
  
  // Normalize: replace slashes and dots with dashes
  let normalized = modelsDevId
    .replace(/\//g, '-')
    .replace(/\./g, '-')
    .replace(/_/g, '-')
    .toLowerCase();
  
  // Remove provider prefix if present
  normalized = normalized.replace(`${providerId}-`, '');
  
  // Check if we have a match with normalized ID
  if (modelsDevIdMap[normalized]) {
    return modelsDevIdMap[normalized];
  }
  
  // Return as-is with provider prefix if no mapping found
  return normalized;
}

// Get models.dev ID from internal ID (reverse lookup)
export function getModelsDevId(internalId: string): string | undefined {
  for (const [modelsDevId, internal] of Object.entries(modelsDevIdMap)) {
    if (internal === internalId) {
      return modelsDevId;
    }
  }
  return undefined;
}
