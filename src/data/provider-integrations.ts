// Provider integration metadata from models.dev
// Generated: 2026-03-01

export interface ProviderIntegration {
  id: string;
  name: string;
  npm?: string;
  api?: string;
  env: string[];
  doc?: string;
  description?: string;
  sdkExample?: string;
}

export const providerIntegrations: Record<string, ProviderIntegration> = {
  // Major Providers
  openai: {
    id: "openai",
    name: "OpenAI",
    npm: "openai",
    api: "https://api.openai.com/v1",
    env: ["OPENAI_API_KEY"],
    doc: "https://platform.openai.com/docs",
    description: "Leading AI research and deployment company",
    sdkExample: `import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await client.chat.completions.create({
  model: 'gpt-4o',
  messages: [{ role: 'user', content: 'Hello!' }],
});`,
  },
  
  anthropic: {
    id: "anthropic",
    name: "Anthropic",
    npm: "@anthropic-ai/sdk",
    api: "https://api.anthropic.com/v1",
    env: ["ANTHROPIC_API_KEY"],
    doc: "https://docs.anthropic.com",
    description: "AI safety company focused on building steerable AI systems",
    sdkExample: `import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const response = await client.messages.create({
  model: 'claude-sonnet-4-5-20250929',
  max_tokens: 1024,
  messages: [{ role: 'user', content: 'Hello!' }],
});`,
  },
  
  google: {
    id: "google",
    name: "Google AI",
    npm: "@google/generative-ai",
    api: "https://generativelanguage.googleapis.com",
    env: ["GOOGLE_GENERATIVE_AI_API_KEY", "GEMINI_API_KEY"],
    doc: "https://ai.google.dev",
    description: "Google's AI platform with Gemini models",
    sdkExample: `import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);
const model = genAI.getGenerativeModel({ model: 'gemini-3-pro' });

const response = await model.generateContent('Hello!');
console.log(response.response.text());`,
  },
  
  meta: {
    id: "meta",
    name: "Meta",
    npm: "openai", // Meta uses OpenAI-compatible API
    api: "https://api.llama.com/compat/v1/",
    env: ["LLAMA_API_KEY"],
    doc: "https://llama.developer.meta.com",
    description: "Open source Llama family models",
    sdkExample: `import OpenAI from 'openai';

// Meta's Llama API is OpenAI-compatible
const client = new OpenAI({
  apiKey: process.env.LLAMA_API_KEY,
  baseURL: 'https://api.llama.com/compat/v1/',
});

const response = await client.chat.completions.create({
  model: 'llama-3.3-70b-instruct',
  messages: [{ role: 'user', content: 'Hello!' }],
});`,
  },
  
  mistral: {
    id: "mistral",
    name: "Mistral AI",
    npm: "mistralai",
    api: "https://api.mistral.ai/v1",
    env: ["MISTRAL_API_KEY"],
    doc: "https://docs.mistral.ai",
    description: "European AI company with efficient models",
    sdkExample: `import MistralClient from 'mistralai';

const client = new MistralClient(process.env.MISTRAL_API_KEY!);

const response = await client.chat({
  model: 'mistral-large-latest',
  messages: [{ role: 'user', content: 'Hello!' }],
});`,
  },
  
  deepseek: {
    id: "deepseek",
    name: "DeepSeek",
    npm: "openai", // DeepSeek uses OpenAI-compatible API
    api: "https://api.deepseek.com/v1",
    env: ["DEEPSEEK_API_KEY"],
    doc: "https://platform.deepseek.com/api-docs",
    description: "Chinese AI company with powerful reasoning models",
    sdkExample: `import OpenAI from 'openai';

// DeepSeek API is OpenAI-compatible
const client = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: 'https://api.deepseek.com/v1',
});

const response = await client.chat.completions.create({
  model: 'deepseek-reasoner',
  messages: [{ role: 'user', content: 'Hello!' }],
});`,
  },
  
  groq: {
    id: "groq",
    name: "Groq",
    npm: "openai", // Groq uses OpenAI-compatible API
    api: "https://api.groq.com/openai/v1",
    env: ["GROQ_API_KEY"],
    doc: "https://console.groq.com/docs",
    description: "Ultra-fast inference with LPU technology",
    sdkExample: `import OpenAI from 'openai';

// Groq API is OpenAI-compatible
const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
});

const response = await client.chat.completions.create({
  model: 'llama-3.3-70b-versatile',
  messages: [{ role: 'user', content: 'Hello!' }],
});`,
  },
  
  cohere: {
    id: "cohere",
    name: "Cohere",
    npm: "cohere-ai",
    api: "https://api.cohere.ai/v1",
    env: ["COHERE_API_KEY"],
    doc: "https://docs.cohere.com",
    description: "Enterprise-focused AI with RAG expertise",
    sdkExample: `import { CohereClient } from 'cohere-ai';

const client = new CohereClient({
  token: process.env.COHERE_API_KEY!,
});

const response = await client.chat({
  model: 'command-r-plus-08-2024',
  message: 'Hello!',
});`,
  },
  
  zhipu: {
    id: "zhipu",
    name: "Zhipu AI",
    npm: "@ai-sdk/openai-compatible",
    api: "https://open.bigmodel.cn/api/paas/v4",
    env: ["ZHIPU_API_KEY"],
    doc: "https://docs.z.ai",
    description: "GLM series models from Tsinghua University spinoff",
    sdkExample: `import { createOpenAICompatible } from '@ai-sdk/openai-compatible';

const zhipu = createOpenAICompatible({
  baseURL: 'https://open.bigmodel.cn/api/paas/v4',
  headers: { Authorization: \`Bearer \${process.env.ZHIPU_API_KEY}\` },
});

// Use with Vercel AI SDK
import { generateText } from 'ai';
const { text } = await generateText({
  model: zhipu('glm-4'),
  prompt: 'Hello!',
});`,
  },
  
  moonshot: {
    id: "moonshot",
    name: "Moonshot AI",
    npm: "@ai-sdk/openai-compatible",
    api: "https://api.moonshot.cn/v1",
    env: ["MOONSHOT_API_KEY"],
    doc: "https://platform.moonshot.cn/docs",
    description: "Kimi series with long context support",
    sdkExample: `import { createOpenAICompatible } from '@ai-sdk/openai-compatible';

const moonshot = createOpenAICompatible({
  baseURL: 'https://api.moonshot.cn/v1',
  headers: { Authorization: \`Bearer \${process.env.MOONSHOT_API_KEY}\` },
});

// Use with Vercel AI SDK
import { generateText } from 'ai';
const { text } = await generateText({
  model: moonshot('kimi-k2'),
  prompt: 'Hello!',
});`,
  },
  
  xai: {
    id: "xai",
    name: "xAI",
    npm: "openai", // xAI uses OpenAI-compatible API
    api: "https://api.x.ai/v1",
    env: ["XAI_API_KEY"],
    doc: "https://docs.x.ai",
    description: "Elon Musk's AI company with Grok models",
    sdkExample: `import OpenAI from 'openai';

// xAI API is OpenAI-compatible
const client = new OpenAI({
  apiKey: process.env.XAI_API_KEY,
  baseURL: 'https://api.x.ai/v1',
});

const response = await client.chat.completions.create({
  model: 'grok-3',
  messages: [{ role: 'user', content: 'Hello!' }],
});`,
  },
  
  alibaba: {
    id: "alibaba",
    name: "Alibaba Cloud",
    npm: "@aliyun/openapi-client",
    api: "https://dashscope.aliyuncs.com/api/v1",
    env: ["DASHSCOPE_API_KEY"],
    doc: "https://www.alibabacloud.com/help/en/model-studio",
    description: "Qwen series from Alibaba",
    sdkExample: `import OpenAI from 'openai';

// Alibaba DashScope is OpenAI-compatible
const client = new OpenAI({
  apiKey: process.env.DASHSCOPE_API_KEY,
  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
});

const response = await client.chat.completions.create({
  model: 'qwen2.5-72b-instruct',
  messages: [{ role: 'user', content: 'Hello!' }],
});`,
  },
  
  amazon: {
    id: "amazon",
    name: "Amazon Bedrock",
    npm: "@aws-sdk/client-bedrock-runtime",
    api: "https://bedrock-runtime.{region}.amazonaws.com",
    env: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_REGION"],
    doc: "https://docs.aws.amazon.com/bedrock",
    description: "AWS managed AI service with multiple model providers",
    sdkExample: `import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';

const client = new BedrockRuntimeClient({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
  region: 'us-east-1',
});

const command = new InvokeModelCommand({
  modelId: 'amazon.nova-pro-v1:0',
  contentType: 'application/json',
  accept: 'application/json',
  body: JSON.stringify({
    messages: [{ role: 'user', content: [{ text: 'Hello!' }] }],
  }),
});

const response = await client.send(command);`,
  },
  
  azure: {
    id: "azure",
    name: "Azure OpenAI",
    npm: "openai",
    api: "https://{resource-name}.openai.azure.com/openai/deployments/{deployment-name}",
    env: ["AZURE_OPENAI_API_KEY", "AZURE_OPENAI_ENDPOINT"],
    doc: "https://learn.microsoft.com/azure/ai-services/openai",
    description: "Microsoft Azure hosted OpenAI models",
    sdkExample: `import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.AZURE_OPENAI_API_KEY,
  baseURL: \`\${process.env.AZURE_OPENAI_ENDPOINT}/openai/deployments/{deployment-name}\`,
  defaultQuery: { 'api-version': '2024-02-15-preview' },
  defaultHeaders: { 'api-key': process.env.AZURE_OPENAI_API_KEY },
});

const response = await client.chat.completions.create({
  model: 'gpt-4o',
  messages: [{ role: 'user', content: 'Hello!' }],
});`,
  },
  
  nvidia: {
    id: "nvidia",
    name: "NVIDIA NIM",
    npm: "@ai-sdk/openai-compatible",
    api: "https://integrate.api.nvidia.com/v1",
    env: ["NVIDIA_API_KEY"],
    doc: "https://docs.api.nvidia.com/nim",
    description: "NVIDIA optimized model inference platform",
    sdkExample: `import { createOpenAICompatible } from '@ai-sdk/openai-compatible';

const nvidia = createOpenAICompatible({
  baseURL: 'https://integrate.api.nvidia.com/v1',
  headers: { Authorization: \`Bearer \${process.env.NVIDIA_API_KEY}\` },
});

// Use with Vercel AI SDK
import { generateText } from 'ai';
const { text } = await generateText({
  model: nvidia('meta/llama-3.3-70b-instruct'),
  prompt: 'Hello!',
});`,
  },
  
  firework: {
    id: "firework",
    name: "Fireworks AI",
    npm: "@ai-sdk/openai-compatible",
    api: "https://api.fireworks.ai/inference/v1",
    env: ["FIREWORKS_API_KEY"],
    doc: "https://readme.fireworks.ai",
    description: "Fast inference with custom model hosting",
    sdkExample: `import { createOpenAICompatible } from '@ai-sdk/openai-compatible';

const fireworks = createOpenAICompatible({
  baseURL: 'https://api.fireworks.ai/inference/v1',
  headers: { Authorization: \`Bearer \${process.env.FIREWORKS_API_KEY}\` },
});

// Use with Vercel AI SDK
import { generateText } from 'ai';
const { text } = await generateText({
  model: fireworks('accounts/fireworks/models/llama-v3p3-70b-instruct'),
  prompt: 'Hello!',
});`,
  },
  
  together: {
    id: "together",
    name: "Together AI",
    npm: "@ai-sdk/openai-compatible",
    api: "https://api.together.xyz/v1",
    env: ["TOGETHER_API_KEY"],
    doc: "https://docs.together.ai",
    description: "Open source model inference platform",
    sdkExample: `import { createOpenAICompatible } from '@ai-sdk/openai-compatible';

const together = createOpenAICompatible({
  baseURL: 'https://api.together.xyz/v1',
  headers: { Authorization: \`Bearer \${process.env.TOGETHER_API_KEY}\` },
});

// Use with Vercel AI SDK
import { generateText } from 'ai';
const { text } = await generateText({
  model: together('meta-llama/Llama-3.3-70B-Instruct-Turbo'),
  prompt: 'Hello!',
});`,
  },
  
  perplexity: {
    id: "perplexity",
    name: "Perplexity",
    npm: "openai", // Perplexity uses OpenAI-compatible API
    api: "https://api.perplexity.ai",
    env: ["PERPLEXITY_API_KEY"],
    doc: "https://docs.perplexity.ai",
    description: "AI-powered search and conversation",
    sdkExample: `import OpenAI from 'openai';

// Perplexity API is OpenAI-compatible
const client = new OpenAI({
  apiKey: process.env.PERPLEXITY_API_KEY,
  baseURL: 'https://api.perplexity.ai',
});

const response = await client.chat.completions.create({
  model: 'sonar-pro',
  messages: [{ role: 'user', content: 'What is the weather today?' }],
});`,
  },
  
  ai21: {
    id: "ai21",
    name: "AI21 Labs",
    npm: "@ai21/studio-client",
    api: "https://api.ai21.com/studio/v1",
    env: ["AI21_API_KEY"],
    doc: "https://docs.ai21.com",
    description: "Jamba series with hybrid architecture",
    sdkExample: `import { AI21 } from '@ai21/studio-client';

const client = new AI21(process.env.AI21_API_KEY!);

const response = await client.chat.completions.create({
  model: 'jamba-1.5-large',
  messages: [{ role: 'user', content: 'Hello!' }],
});`,
  },
  
  databricks: {
    id: "databricks",
    name: "Databricks",
    npm: "@databricks/sql",
    api: "https://{instance}.azuredatabricks.net/serving-endpoints",
    env: ["DATABRICKS_HOST", "DATABRICKS_TOKEN"],
    doc: "https://docs.databricks.com/en/machine-learning/serve-model.html",
    description: "Enterprise AI platform with custom models",
    sdkExample: `import { createOpenAICompatible } from '@ai-sdk/openai-compatible';

const databricks = createOpenAICompatible({
  baseURL: 'https://{instance}.azuredatabricks.net/serving-endpoints',
  headers: { 
    Authorization: \`Bearer \${process.env.DATABRICKS_TOKEN}\`,
  },
});

// Use with Vercel AI SDK
import { generateText } from 'ai';
const { text } = await generateText({
  model: databricks('databricks-dbrx-instruct'),
  prompt: 'Hello!',
});`,
  },
};

// Export provider list for easy iteration
export const providerList = Object.values(providerIntegrations);

// Helper to find provider by ID
export function findProvider(id: string): ProviderIntegration | undefined {
  return providerIntegrations[id.toLowerCase()];
}

// Helper to search providers
export function searchProviders(query: string): ProviderIntegration[] {
  const search = query.toLowerCase();
  return providerList.filter(
    (p) =>
      p.name.toLowerCase().includes(search) ||
      p.id.toLowerCase().includes(search) ||
      p.description?.toLowerCase().includes(search)
  );
}
