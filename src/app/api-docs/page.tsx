import type { Metadata } from "next";
import { models, benchmarks, sources } from "@/lib/registry-data";
import { benchmarkCategories } from "@/lib/categories";
import { siteName, siteUrl } from "@/lib/site";
import { openApiSpec } from "@/lib/openapi-spec";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Book, 
  Code, 
  Key, 
  Clock, 
  Shield, 
  Zap,
  Copy,
  Check,
  Globe,
  Terminal
} from "lucide-react";

export const metadata: Metadata = {
  title: "API Documentation",
  description: "REST API documentation for LLM Registry. Access models, benchmarks, scores, and leaderboard data programmatically with rate limiting and OpenAPI spec.",
  keywords: ["llm registry api", "llm benchmark api", "model scores api", "leaderboard api", "openapi", "rest api"],
  alternates: {
    canonical: "/api-docs",
  },
  openGraph: {
    title: `LLM Registry API Documentation | ${siteName}`,
    description: "REST API documentation for LLM Registry. Access models, benchmarks, scores, and leaderboard data programmatically.",
    url: `${siteUrl}/api-docs`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "LLM Registry API documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `LLM Registry API Documentation | ${siteName}`,
    description: "REST API documentation for LLM Registry. Access models, benchmarks, scores, and leaderboard data programmatically.",
    images: [`${siteUrl}/opengraph-image.png`],
  },
};

interface EndpointParam {
  name: string;
  type: string;
  desc: string;
}

interface Endpoint {
  method: string;
  path: string;
  description: string;
  params?: EndpointParam[];
  response: string;
}

const endpoints: Endpoint[] = [
  {
    method: "GET",
    path: "/api/v1/meta",
    description: "Registry metadata including counts, categories, and latest score date",
    response: `{
  "apiVersion": "v1",
  "generatedAt": "2026-02-19T...",
  "latestScoreDate": "2026-02-16",
  "counts": {
    "models": 150,
    "benchmarks": 193,
    "categories": 14,
    "sources": 30
  },
  "categories": ["Coding", "Math", "Reasoning", ...],
  "endpoints": [...]
}`,
  },
  {
    method: "GET",
    path: "/api/v1/models",
    description: "List all models with optional filtering and pagination",
    params: [
      { name: "provider", type: "string", desc: "Filter by provider (e.g., 'OpenAI', 'Anthropic')" },
      { name: "family", type: "string", desc: "Filter by model family (e.g., 'llama', 'gpt', 'claude')" },
      { name: "capability", type: "string", desc: "Filter by capability (e.g., 'reasoning', 'vision', 'tools')" },
      { name: "openSource", type: "boolean", desc: "Filter by license type (true/false)" },
      { name: "includeScores", type: "boolean", desc: "Include benchmark scores (default: false)" },
      { name: "limit", type: "number", desc: "Results per page (1-500, default: 100)" },
      { name: "offset", type: "number", desc: "Pagination offset (default: 0)" },
    ],
    response: `{
  "total": 150,
  "offset": 0,
  "limit": 100,
  "models": [
    {
      "id": "claude-3-5-sonnet-20241022",
      "name": "Claude 3.5 Sonnet",
      "provider": "Anthropic",
      "family": "claude-sonnet",
      "status": "active",
      "releaseDate": "2024-10-22",
      "knowledgeCutoff": "2024-04",
      "capabilities": ["text", "vision", "tools"],
      "isOpenSource": false,
      "specs": {
        "contextWindow": 200000,
        "maxOutputTokens": 64000,
        "pricing": {
          "input": 3.0,
          "output": 15.0,
          "cacheInput": 0.3,
          "cacheOutput": 3.75
        }
      },
      "apiSupport": {
        "reasoning": false,
        "vision": true,
        "tools": true,
        "structuredOutput": true,
        "attachment": true
      },
      "coverage": 85.2
    }
  ]
}`,
  },
  {
    method: "GET",
    path: "/api/v1/models/[id]",
    description: "Get a single model by ID with full details and scores",
    response: `{
  "model": {
    "id": "claude-3-5-sonnet-20241022",
    "name": "Claude 3.5 Sonnet",
    "provider": "Anthropic",
    "family": "claude-sonnet",
    "status": "active",
    "knowledgeCutoff": "2024-04",
    "lastUpdated": "2025-11-24",
    "specs": {
      "contextWindow": 200000,
      "maxOutputTokens": 64000,
      "pricing": {
        "input": 3.0,
        "output": 15.0,
        "cacheInput": 0.3,
        "cacheOutput": 3.75
      }
    },
    "apiSupport": {
      "reasoning": false,
      "vision": true,
      "tools": true
    },
    "scores": {
      "mmlu": { "score": 88.7, "sourceId": "anthropic", ... },
      "gsm8k": { "score": 92.1, "sourceId": "anthropic", ... }
    },
    "metadataSourceId": "models-dev",
    "metadataAsOfDate": "2026-03-01"
  },
  "attribution": { ... }
}`,
  },
  {
    method: "GET",
    path: "/api/v1/benchmarks",
    description: "List all benchmarks with optional category filter",
    params: [
      { name: "category", type: "string", desc: "Filter by category (e.g., 'Coding', 'Math', 'Reasoning')" },
    ],
    response: `{
  "total": 193,
  "categories": ["Coding", "Math", "Reasoning", "Knowledge", ...],
  "benchmarks": [
    {
      "id": "mmlu",
      "name": "MMLU",
      "category": "Knowledge",
      "description": "Massive Multitask Language Understanding",
      "maxScore": 100,
      "normalizeMethod": "max"
    }
  ]
}`,
  },
  {
    method: "GET",
    path: "/api/v1/scores",
    description: "Query scores with flexible filtering",
    params: [
      { name: "modelId", type: "string", desc: "Filter by model ID" },
      { name: "benchmarkId", type: "string", desc: "Filter by benchmark ID" },
      { name: "category", type: "string", desc: "Filter by benchmark category" },
      { name: "sourceId", type: "string", desc: "Filter by data source" },
      { name: "verificationLevel", type: "string", desc: "Filter by verification (third_party, provider, community, estimated)" },
      { name: "limit", type: "number", desc: "Results per page (1-5000, default: 500)" },
      { name: "offset", type: "number", desc: "Pagination offset (default: 0)" },
    ],
    response: `{
  "total": 5000,
  "scores": [
    {
      "modelId": "gpt-4o",
      "modelName": "GPT-4o",
      "benchmarkId": "mmlu",
      "benchmarkName": "MMLU",
      "category": "Knowledge",
      "score": 88.7,
      "normalizedScore": 88.7,
      "verificationLevel": "third_party",
      "sourceId": "openai",
      "asOfDate": "2024-05-13"
    }
  ]
}`,
  },
  {
    method: "GET",
    path: "/api/v1/leaderboards/[category]",
    description: "Get ranked leaderboard for a category (use 'all' for global)",
    params: [
      { name: "limit", type: "number", desc: "Max results (1-500, default: 100)" },
    ],
    response: `{
  "category": "Coding",
  "categorySlug": "coding",
  "benchmarkCount": 24,
  "leaderboard": [
    {
      "rank": 1,
      "modelId": "claude-3-5-sonnet",
      "modelName": "Claude 3.5 Sonnet",
      "provider": "Anthropic",
      "family": "claude-sonnet",
      "average": 89.3,
      "coverage": 95.8,
      "scoreCount": 23
    }
  ]
}`,
  },
  {
    method: "GET",
    path: "/api/v1/export",
    description: "Export all scores in JSON or CSV format for research workflows",
    params: [
      { name: "format", type: "string", desc: "Output format: 'json' (default) or 'csv'" },
      { name: "modelId", type: "string", desc: "Filter by model ID" },
      { name: "benchmarkId", type: "string", desc: "Filter by benchmark ID" },
      { name: "category", type: "string", desc: "Filter by benchmark category" },
      { name: "sourceId", type: "string", desc: "Filter by data source" },
    ],
    response: `{
  "total": 5000,
  "exportedAt": "2026-02-19T...",
  "filters": { ... },
  "scores": [ ... ],
  "attribution": { ... }
}`,
  },
];

const codeExamples = {
  curl: `# Get all models
curl "https://llm-registry.dev/api/v1/models"

# Filter by family and capability
curl "https://llm-registry.dev/api/v1/models?family=llama&capability=reasoning"

# Get a specific model
curl "https://llm-registry.dev/api/v1/models/claude-3-5-sonnet-20241022"

# Export scores as CSV
curl "https://llm-registry.dev/api/v1/export?format=csv"`,

  javascript: `// Using fetch API
const response = await fetch('https://llm-registry.dev/api/v1/models');
const data = await response.json();

console.log(\`Total models: \${data.total}\`);
data.models.forEach(model => {
  console.log(\`\${model.name} - \${model.provider}\`);
});

// Filter by family
const llamaModels = await fetch(
  'https://llm-registry.dev/api/v1/models?family=llama'
).then(r => r.json());`,

  python: `import requests

# Get all models
response = requests.get('https://llm-registry.dev/api/v1/models')
data = response.json()

print(f"Total models: {data['total']}")
for model in data['models']:
    print(f"{model['name']} - {model['provider']}")

# Filter by family and capability
params = {'family': 'llama', 'capability': 'reasoning'}
response = requests.get('https://llm-registry.dev/api/v1/models', params=params)
llama_models = response.json()`,

  typescript: `import { Model } from './types';

interface ApiResponse {
  total: number;
  models: Model[];
}

async function getModels(): Promise<ApiResponse> {
  const response = await fetch('https://llm-registry.dev/api/v1/models');
  return response.json();
}

// With filtering
async function getLlamaModels(): Promise<ApiResponse> {
  const url = new URL('https://llm-registry.dev/api/v1/models');
  url.searchParams.set('family', 'llama');
  url.searchParams.set('capability', 'reasoning');
  
  const response = await fetch(url);
  return response.json();
}`,
};

export default function ApiDocsPage() {
  const modelCount = models.length;
  const benchmarkCount = benchmarks.length;
  const categoryCount = benchmarkCategories.length;
  const sourceCount = sources.length;

  return (
    <div className="animate-in fade-in duration-700 space-y-10 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl border border-border bg-card/50 px-6 py-8 sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_50%)]" />
        <div className="relative max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              v{openApiSpec.info.version}
            </Badge>
            <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600">
              OpenAPI 3.0
            </Badge>
          </div>
          <h1 className="text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            API Documentation
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            REST API for accessing models, benchmarks, scores, and leaderboard data programmatically.
            Free, public, and rate-limited.
          </p>
          
          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild>
              <a href="/api/v1/meta" target="_blank" rel="noopener noreferrer">
                Try API
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/jnd0/llm-registry" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="font-mono text-[10px] font-bold uppercase tracking-widest">
              Models
            </CardDescription>
            <CardTitle className="text-3xl font-bold">{modelCount}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="font-mono text-[10px] font-bold uppercase tracking-widest">
              Benchmarks
            </CardDescription>
            <CardTitle className="text-3xl font-bold">{benchmarkCount}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="font-mono text-[10px] font-bold uppercase tracking-widest">
              Categories
            </CardDescription>
            <CardTitle className="text-3xl font-bold">{categoryCount}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="font-mono text-[10px] font-bold uppercase tracking-widest">
              Sources
            </CardDescription>
            <CardTitle className="text-3xl font-bold">{sourceCount}</CardTitle>
          </CardHeader>
        </Card>
      </section>

      {/* API Info Cards */}
      <section className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Base URL</CardTitle>
            </div>
            <CardDescription>API endpoint</CardDescription>
          </CardHeader>
          <CardContent>
            <code className="rounded bg-muted px-2 py-1 text-sm break-all">
              https://llm-registry.dev/api/v1
            </code>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Key className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Authentication</CardTitle>
            </div>
            <CardDescription>Access requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600">
              None Required
            </Badge>
            <p className="mt-2 text-sm text-muted-foreground">
              Public read-only API
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Rate Limit</CardTitle>
            </div>
            <CardDescription>Request limits</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium">100 requests/minute</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Per IP address
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Code Examples */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
            Quick Start
          </h2>
          <Badge variant="outline">Examples</Badge>
        </div>
        
        <Card>
          <CardContent className="pt-6">
            <Tabs defaultValue="curl" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="curl" className="flex items-center gap-2">
                  <Terminal className="h-4 w-4" />
                  cURL
                </TabsTrigger>
                <TabsTrigger value="javascript" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  JavaScript
                </TabsTrigger>
                <TabsTrigger value="python" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Python
                </TabsTrigger>
                <TabsTrigger value="typescript" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  TypeScript
                </TabsTrigger>
              </TabsList>
              <TabsContent value="curl" className="mt-4">
                <pre className="overflow-x-auto rounded-lg border border-border bg-muted/30 p-4 text-xs font-mono">
                  {codeExamples.curl}
                </pre>
              </TabsContent>
              <TabsContent value="javascript" className="mt-4">
                <pre className="overflow-x-auto rounded-lg border border-border bg-muted/30 p-4 text-xs font-mono">
                  {codeExamples.javascript}
                </pre>
              </TabsContent>
              <TabsContent value="python" className="mt-4">
                <pre className="overflow-x-auto rounded-lg border border-border bg-muted/30 p-4 text-xs font-mono">
                  {codeExamples.python}
                </pre>
              </TabsContent>
              <TabsContent value="typescript" className="mt-4">
                <pre className="overflow-x-auto rounded-lg border border-border bg-muted/30 p-4 text-xs font-mono">
                  {codeExamples.typescript}
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* Endpoints */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
            Endpoints
          </h2>
          <Badge variant="outline">{endpoints.length} endpoints</Badge>
        </div>
        
        <div className="space-y-6">
          {endpoints.map((endpoint) => (
            <Card key={endpoint.path} className="overflow-hidden">
              <div className="flex items-start gap-3 border-b border-border/60 bg-muted/20 px-5 py-4">
                <span className={`shrink-0 rounded-md px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${
                  endpoint.method === 'GET' 
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
                    : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                }`}>
                  {endpoint.method}
                </span>
                <code className="font-mono text-sm text-foreground">{endpoint.path}</code>
              </div>
              <CardContent className="p-5 space-y-4">
                <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                
                {endpoint.params && (
                  <div className="space-y-2">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
                      Query Parameters
                    </p>
                    <div className="grid gap-2">
                      {endpoint.params.map((param) => (
                        <div key={param.name} className="flex items-start gap-3 text-sm">
                          <code className="shrink-0 rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                            {param.name}
                          </code>
                          <Badge variant="secondary" className="text-[10px]">
                            {param.type}
                          </Badge>
                          <span className="text-muted-foreground">{param.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
                    Sample Response
                  </p>
                  <pre className="overflow-x-auto rounded-lg border border-border bg-muted/30 p-4 text-xs font-mono text-muted-foreground">
                    {endpoint.response}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Rate Limiting */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
            Rate Limiting
          </h2>
        </div>
        
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-sm text-muted-foreground">
              The API implements rate limiting to ensure fair usage and prevent abuse.
            </p>
            
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-1">
                <p className="font-mono text-xs font-bold text-foreground">Limit</p>
                <p className="text-sm text-muted-foreground">100 requests per minute</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-xs font-bold text-foreground">Scope</p>
                <p className="text-sm text-muted-foreground">Per IP address</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-xs font-bold text-foreground">Algorithm</p>
                <p className="text-sm text-muted-foreground">Sliding window</p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70 mb-2">
                Response Headers
              </p>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-foreground">X-RateLimit-Limit</span>
                  <span className="text-muted-foreground">100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">X-RateLimit-Remaining</span>
                  <span className="text-muted-foreground">Requests remaining</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">X-RateLimit-Reset</span>
                  <span className="text-muted-foreground">Unix timestamp</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Retry-After</span>
                  <span className="text-muted-foreground">Seconds (when rate limited)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Response Headers */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Clock className="h-6 w-6 text-primary" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
            Response Headers
          </h2>
        </div>
        
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <p className="font-mono text-xs font-bold text-foreground">Cache-Control</p>
                <p className="text-sm text-muted-foreground">
                  Public caching for 5 minutes (max-age=300)
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-xs font-bold text-foreground">Last-Modified</p>
                <p className="text-sm text-muted-foreground">
                  Date of the most recent score update
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-xs font-bold text-foreground">Content-Type</p>
                <p className="text-sm text-muted-foreground">
                  application/json; charset=utf-8
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-xs font-bold text-foreground">ETag</p>
                <p className="text-sm text-muted-foreground">
                  Entity tag for conditional requests
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* New Fields from models.dev */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Book className="h-6 w-6 text-primary" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
            Enhanced Model Fields
          </h2>
        </div>
        
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-sm text-muted-foreground">
              Thanks to integration with <a href="https://models.dev" className="text-primary hover:underline">models.dev</a>, the API now includes enriched metadata:
            </p>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <p className="font-mono text-xs font-bold text-foreground">family</p>
                <p className="text-sm text-muted-foreground">
                  Model family grouping (e.g., "llama", "gpt", "claude-sonnet")
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-xs font-bold text-foreground">status</p>
                <p className="text-sm text-muted-foreground">
                  Lifecycle status: active, alpha, beta, deprecated
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-xs font-bold text-foreground">knowledgeCutoff</p>
                <p className="text-sm text-muted-foreground">
                  Training data cutoff date (YYYY-MM)
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-xs font-bold text-foreground">maxOutputTokens</p>
                <p className="text-sm text-muted-foreground">
                  Maximum generation tokens
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-xs font-bold text-foreground">apiSupport</p>
                <p className="text-sm text-muted-foreground">
                  Capability flags: reasoning, vision, tools, structuredOutput, etc.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-xs font-bold text-foreground">pricing.cacheInput</p>
                <p className="text-sm text-muted-foreground">
                  Cached read pricing (USD per 1M tokens)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Attribution */}
      <section className="space-y-6">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
          Attribution
        </h2>
        
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-sm text-muted-foreground">
              All API responses include an <code className="text-primary">attribution</code> object. 
              If you use this data, please credit:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/40" />
                <span>
                  <strong className="text-foreground">Artificial Analysis</strong> — Scores marked with sourceId "artificial-analysis" 
                  are from <a href="https://artificialanalysis.ai/" className="text-primary hover:underline">artificialanalysis.ai</a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/40" />
                <span>
                  <strong className="text-foreground">models.dev</strong> — Model metadata from <a href="https://models.dev" className="text-primary hover:underline">models.dev</a> (MIT License)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/40" />
                <span>
                  <strong className="text-foreground">LLM Registry</strong> — Link back to <a href={siteUrl} className="text-primary hover:underline">{siteName}</a> when displaying data
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
