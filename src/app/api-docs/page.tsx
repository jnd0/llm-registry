import type { Metadata } from "next";
import { models, benchmarks, sources } from "@/lib/registry-data";
import { benchmarkCategories } from "@/lib/categories";
import { siteName, siteUrl } from "@/lib/site";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Check, Shield, Clock, Book, Code, Key, Globe, Terminal, Copy } from "lucide-react";

export const metadata: Metadata = {
  title: "API Documentation",
  description: "Static REST API documentation for LLM Registry. Pre-generated endpoints served from Cloudflare edge for <20ms response times globally.",
  keywords: ["llm registry api", "llm benchmark api", "model scores api", "leaderboard api", "static api"],
  alternates: {
    canonical: "/api-docs",
  },
  openGraph: {
    title: `LLM Registry API Documentation | ${siteName}`,
    description: "Static REST API documentation for LLM Registry. Pre-generated endpoints served from Cloudflare edge for <20ms response times.",
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
    description: "Static REST API documentation for LLM Registry. Pre-generated endpoints served from Cloudflare edge for <20ms response times.",
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
    path: "/api/v1",
    description: "API root with endpoint listing",
    response: `{
  "apiVersion": "v1",
  "endpoints": { ... },
  "attribution": { ... }
}`,
  },
  {
    method: "GET",
    path: "/api/v1/meta",
    description: "Registry metadata including counts, categories, and latest score date",
    response: `{
  "apiVersion": "v1",
  "generatedAt": "2026-02-19T...",
  "latestScoreDate": "2026-02-16",
  "counts": {
    "models": <dynamic>,
    "benchmarks": <dynamic>,
    "categories": <dynamic>,
    "sources": <dynamic>
  },
  "categories": [...],
  "endpoints": [...]
}`,
  },
  {
    method: "GET",
    path: "/api/v1/models",
    description: "List all models (static pre-generated response)",
    params: [
      { name: "limit", type: "number", desc: "Results per page (1-500, default: 100) - Client-side only" },
      { name: "offset", type: "number", desc: "Pagination offset (default: 0) - Client-side only" },
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
      "trainingCutoff": "2024-04",
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
    "id": "claude-3-5-sonnet",
    "name": "Claude 3.5 Sonnet",
    "provider": "Anthropic",
    "scores": {
      "mmlu": { "score": 88.7, "sourceId": "anthropic", ... },
      ...
    }
  }
}`,
  },
  {
    method: "GET",
    path: "/api/v1/benchmarks",
    description: "List all benchmarks with optional category filter",
    params: [
      { name: "category", type: "string", desc: "Filter by category (e.g., 'Coding', 'Reasoning')" },
    ],
    response: `{
  "total": <dynamic>,
  "categories": ["Coding", "Math", "Reasoning", ...],
  "benchmarks": [
    {
      "id": "mmlu",
      "name": "MMLU",
      "category": "Knowledge",
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
      { name: "limit", type: "number", desc: "Results per page (1-5000, default: 500)" },
      { name: "offset", type: "number", desc: "Pagination offset (default: 0)" },
    ],
    response: `{
  "total": <dynamic>,
  "scores": [
    {
      "modelId": "gpt-4o",
      "modelName": "GPT-4o",
      "benchmarkId": "mmlu",
      "benchmarkName": "MMLU",
      "category": "Knowledge",
      "score": 88.7,
      "normalizedScore": 88.7,
      "verified": true,
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
  "total": <dynamic>,
  "exportedAt": "2026-02-19T...",
  "filters": { ... },
  "scores": [ ... ],
  "attribution": { ... }
}`,
  },
];

export default function ApiDocsPage() {
  const modelCount = models.length;
  const benchmarkCount = benchmarks.length;
  const categoryCount = benchmarkCategories.length;
  const sourceCount = sources.length;

  return (
    <div className="animate-in fade-in duration-700 space-y-10 pb-20">
      <section className="relative overflow-hidden rounded-2xl border border-border bg-card/50 px-6 py-8 sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_50%)]" />
        <div className="relative max-w-3xl space-y-4">
          <p className="label-eyebrow text-muted-foreground/70">API Reference</p>
          <h1 className="text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            API Documentation
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            REST API for accessing models, benchmarks, scores, and leaderboard data programmatically.
          </p>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-4">
        <div className="rounded-2xl border border-border bg-card/50 p-6">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Models</p>
          <p className="mt-4 font-display text-3xl font-bold text-foreground">{modelCount}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card/50 p-6">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Benchmarks</p>
          <p className="mt-4 font-display text-3xl font-bold text-foreground">{benchmarkCount}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card/50 p-6">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Categories</p>
          <p className="mt-4 font-display text-3xl font-bold text-foreground">{categoryCount}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card/50 p-6">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Sources</p>
          <p className="mt-4 font-display text-3xl font-bold text-foreground">{sourceCount}</p>
        </div>
      </section>

      {/* Static Architecture Notice */}
      <section className="space-y-6">
        <Card className="border-blue-500/20 bg-blue-500/5">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-500" />
              <CardTitle className="text-lg">Static API Architecture</CardTitle>
            </div>
            <CardDescription>Optimized for performance and reliability</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              This API uses <strong>static export</strong> for optimal performance:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                <span>All endpoints pre-generated at build time</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Served from Cloudflare's edge network globally</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Response time: {"<"}20ms worldwide</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                <span>No server-side processing or cold starts</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5" />
                <span>100% uptime SLA</span>
              </li>
            </ul>
            <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
              <p className="text-xs font-medium text-blue-700 dark:text-blue-300">
                ⚠️ Note: Query parameters for filtering are not supported server-side. 
                Use client-side JavaScript to filter the returned data.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Client-Side Filtering Examples */}
      <section className="space-y-6">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
          Client-Side Filtering
        </h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-sm text-muted-foreground">
              Since the API is static, filtering must be done client-side. Here are examples:
            </p>
            
            <Tabs defaultValue="filter" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="filter">Filtering</TabsTrigger>
                <TabsTrigger value="pagination">Pagination</TabsTrigger>
              </TabsList>
              <TabsContent value="filter" className="mt-4">
                <pre className="overflow-x-auto rounded-lg border border-border bg-muted/30 p-4 text-xs font-mono">
{`// Fetch all models
const response = await fetch('/api/v1/models');
const data = await response.json();

// Filter by provider
const openaiModels = data.models.filter(m => m.provider === 'OpenAI');

// Filter by family
const llamaModels = data.models.filter(m => m.family === 'llama');

// Filter by capability
const reasoningModels = data.models.filter(m => 
  m.apiSupport?.reasoning === true
);

// Filter by open source
const openSourceModels = data.models.filter(m => m.isOpenSource);

// Combine filters
const openaiReasoningModels = data.models.filter(m => 
  m.provider === 'OpenAI' && m.apiSupport?.reasoning
);`}
                </pre>
              </TabsContent>
              <TabsContent value="pagination" className="mt-4">
                <pre className="overflow-x-auto rounded-lg border border-border bg-muted/30 p-4 text-xs font-mono">
{`// Client-side pagination
const PAGE_SIZE = 20;
const page = 1; // Current page (1-indexed)
const offset = (page - 1) * PAGE_SIZE;

const paginatedModels = data.models.slice(offset, offset + PAGE_SIZE);

// Get total pages
const totalPages = Math.ceil(data.models.length / PAGE_SIZE);`}
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card/50 p-6">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Base URL</p>
          <p className="mt-4 font-mono text-sm text-foreground break-all">https://llm-registry.com/api/v1</p>
        </div>
        <div className="rounded-2xl border border-border bg-card/50 p-6">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Format</p>
          <p className="mt-4 font-display text-2xl font-bold text-foreground">JSON</p>
        </div>
        <div className="rounded-2xl border border-border bg-card/50 p-6">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Auth</p>
          <p className="mt-4 font-display text-2xl font-bold text-foreground">None</p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Endpoints</h2>
        <div className="space-y-6">
          {endpoints.map((endpoint) => (
            <article key={endpoint.path} className="rounded-2xl border border-border bg-card/50 overflow-hidden">
              <div className="flex items-start gap-3 border-b border-border/60 bg-muted/20 px-5 py-4">
                <span className="shrink-0 rounded-md bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {endpoint.method}
                </span>
                <code className="font-mono text-sm text-foreground">{endpoint.path}</code>
              </div>
              <div className="p-5 space-y-4">
                <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                
                {endpoint.params && (
                  <div className="space-y-2">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">Query Parameters</p>
                    <div className="grid gap-2">
                      {endpoint.params.map((param) => (
                        <div key={param.name} className="flex items-start gap-3 text-sm">
                          <code className="shrink-0 rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">{param.name}</code>
                          <span className="text-muted-foreground">{param.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">Sample Response</p>
                  <pre className="overflow-x-auto rounded-lg border border-border bg-muted/30 p-4 text-xs font-mono text-muted-foreground">
                    {endpoint.response}
                  </pre>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Cloudflare WAF Rate Limiting */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
            Rate Limiting (Cloudflare WAF)
          </h2>
        </div>
        
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-sm text-muted-foreground">
              Rate limiting is handled by <strong>Cloudflare WAF</strong> at the edge:
            </p>
            
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-1">
                <p className="font-mono text-xs font-bold text-foreground">Limit</p>
                <p className="text-sm text-muted-foreground">100 requests/min per IP</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-xs font-bold text-foreground">Enforcement</p>
                <p className="text-sm text-muted-foreground">Cloudflare WAF (edge)</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-xs font-bold text-foreground">Response</p>
                <p className="text-sm text-muted-foreground">HTTP 429 Too Many Requests</p>
              </div>
            </div>

            <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
              <p className="text-xs text-amber-700 dark:text-amber-300">
                <strong>Note:</strong> Cloudflare returns HTTP 429 directly. No rate limit headers are sent by the application.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
                Cloudflare Dashboard Configuration
              </p>
              <ol className="list-decimal list-inside space-y-1 text-xs text-muted-foreground">
                <li>Go to Security → WAF → Rate limiting rules</li>
                <li>Create rule: "API Rate Limiting"</li>
                <li>Expression: <code className="bg-muted px-1">(http.request.uri.path contains "/api/v1/")</code></li>
                <li>Characteristics: <code className="bg-muted px-1">ip.src</code></li>
                <li>Request limit: <code className="bg-muted px-1">100 per minute</code></li>
                <li>Mitigation: <code className="bg-muted px-1">Block for 1 minute</code></li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Response Headers</h2>
        <div className="rounded-2xl border border-border bg-card/50 p-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="font-mono text-xs font-bold text-foreground">Cache-Control</p>
              <p className="mt-1 text-sm text-muted-foreground">Responses are cached for 5 minutes (public, max-age=300)</p>
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-foreground">Last-Modified</p>
              <p className="mt-1 text-sm text-muted-foreground">Date of the most recent score update</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Attribution</h2>
        <div className="rounded-2xl border border-border bg-card/50 p-6 space-y-4">
          <p className="text-sm text-muted-foreground">
            All API responses include an <code className="text-primary">attribution</code> object. If you use this data, please credit:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/40" />
              <span><strong className="text-foreground">Artificial Analysis</strong> — Scores marked with sourceId &quot;artificial-analysis&quot; are from <a href="https://artificialanalysis.ai/" className="text-primary hover:underline">artificialanalysis.ai</a></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/40" />
              <span><strong className="text-foreground">LLM Registry</strong> — Link back to llm-registry.com when displaying data</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
