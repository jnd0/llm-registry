import type { Metadata } from "next";
import { models, benchmarks, sources } from "@/lib/registry-data";
import { benchmarkCategories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "API Documentation",
  description: "REST API documentation for LLM Registry. Access models, benchmarks, scores, and leaderboard data programmatically.",
  alternates: {
    canonical: "/api-docs",
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
    description: "List all models with optional filtering and pagination",
    params: [
      { name: "includeScores", type: "boolean", desc: "Include benchmark scores (default: false)" },
      { name: "limit", type: "number", desc: "Results per page (1-500, default: 100)" },
      { name: "offset", type: "number", desc: "Pagination offset (default: 0)" },
    ],
    response: `{
  "total": <dynamic>,
  "offset": 0,
  "limit": 100,
  "models": [
    {
      "id": "gpt-4o",
      "name": "GPT-4o",
      "provider": "OpenAI",
      "releaseDate": "2024-05-13",
      "capabilities": [...],
      "isOpenSource": false,
      "specs": { "pricing": {...}, "contextWindow": 128000 },
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
