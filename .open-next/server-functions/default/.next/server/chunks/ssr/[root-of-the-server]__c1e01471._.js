module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},95044,a=>{a.n(a.i(52425))},26087,a=>{a.n(a.i(21646))},10245,a=>{a.n(a.i(56873))},26659,a=>{a.n(a.i(10496))},50645,a=>{a.n(a.i(27572))},43619,a=>{a.n(a.i(79962))},13718,a=>{a.n(a.i(85523))},18198,a=>{a.n(a.i(45518))},62212,a=>{a.n(a.i(66114))},15566,a=>{"use strict";let b=Array.from(new Set(a.i(20286).benchmarks.map(a=>a.category)));function c(a){return a.toLowerCase().replace(/\s+/g,"-")}function d(a){return a&&"all"!==a?b.find(b=>c(b)===a)??null:null}a.s(["benchmarkCategories",0,b,"categoryToSlug",()=>c,"slugToCategory",()=>d])},2089,a=>{"use strict";var b=a.i(7997),c=a.i(54404),d=a.i(15566),e=a.i(96835);let f={title:"API Documentation",description:"REST API documentation for LLM Registry. Access models, benchmarks, scores, and leaderboard data programmatically.",keywords:["llm registry api","llm benchmark api","model scores api","leaderboard api"],alternates:{canonical:"/api-docs"},openGraph:{title:`LLM Registry API Documentation | ${e.siteName}`,description:"REST API documentation for LLM Registry. Access models, benchmarks, scores, and leaderboard data programmatically.",url:`${e.siteUrl}/api-docs`,type:"website",images:[{url:`${e.siteUrl}/opengraph-image.png`,width:1200,height:630,alt:"LLM Registry API documentation"}]},twitter:{card:"summary_large_image",title:`LLM Registry API Documentation | ${e.siteName}`,description:"REST API documentation for LLM Registry. Access models, benchmarks, scores, and leaderboard data programmatically.",images:[`${e.siteUrl}/opengraph-image.png`]}},g=[{method:"GET",path:"/api/v1",description:"API root with endpoint listing",response:`{
  "apiVersion": "v1",
  "endpoints": { ... },
  "attribution": { ... }
}`},{method:"GET",path:"/api/v1/meta",description:"Registry metadata including counts, categories, and latest score date",response:`{
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
}`},{method:"GET",path:"/api/v1/models",description:"List all models with optional filtering and pagination",params:[{name:"includeScores",type:"boolean",desc:"Include benchmark scores (default: false)"},{name:"limit",type:"number",desc:"Results per page (1-500, default: 100)"},{name:"offset",type:"number",desc:"Pagination offset (default: 0)"}],response:`{
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
}`},{method:"GET",path:"/api/v1/models/[id]",description:"Get a single model by ID with full details and scores",response:`{
  "model": {
    "id": "claude-3-5-sonnet",
    "name": "Claude 3.5 Sonnet",
    "provider": "Anthropic",
    "scores": {
      "mmlu": { "score": 88.7, "sourceId": "anthropic", ... },
      ...
    }
  }
}`},{method:"GET",path:"/api/v1/benchmarks",description:"List all benchmarks with optional category filter",params:[{name:"category",type:"string",desc:"Filter by category (e.g., 'Coding', 'Reasoning')"}],response:`{
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
}`},{method:"GET",path:"/api/v1/scores",description:"Query scores with flexible filtering",params:[{name:"modelId",type:"string",desc:"Filter by model ID"},{name:"benchmarkId",type:"string",desc:"Filter by benchmark ID"},{name:"category",type:"string",desc:"Filter by benchmark category"},{name:"sourceId",type:"string",desc:"Filter by data source"},{name:"limit",type:"number",desc:"Results per page (1-5000, default: 500)"},{name:"offset",type:"number",desc:"Pagination offset (default: 0)"}],response:`{
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
}`},{method:"GET",path:"/api/v1/leaderboards/[category]",description:"Get ranked leaderboard for a category (use 'all' for global)",params:[{name:"limit",type:"number",desc:"Max results (1-500, default: 100)"}],response:`{
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
}`},{method:"GET",path:"/api/v1/export",description:"Export all scores in JSON or CSV format for research workflows",params:[{name:"format",type:"string",desc:"Output format: 'json' (default) or 'csv'"},{name:"modelId",type:"string",desc:"Filter by model ID"},{name:"benchmarkId",type:"string",desc:"Filter by benchmark ID"},{name:"category",type:"string",desc:"Filter by benchmark category"},{name:"sourceId",type:"string",desc:"Filter by data source"}],response:`{
  "total": <dynamic>,
  "exportedAt": "2026-02-19T...",
  "filters": { ... },
  "scores": [ ... ],
  "attribution": { ... }
}`}];function h(){let a=c.models.length,e=c.benchmarks.length,f=d.benchmarkCategories.length,h=c.sources.length;return(0,b.jsxs)("div",{className:"animate-in fade-in duration-700 space-y-10 pb-20",children:[(0,b.jsxs)("section",{className:"relative overflow-hidden rounded-2xl border border-border bg-card/50 px-6 py-8 sm:px-10 sm:py-12",children:[(0,b.jsx)("div",{className:"pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_50%)]"}),(0,b.jsxs)("div",{className:"relative max-w-3xl space-y-4",children:[(0,b.jsx)("p",{className:"label-eyebrow text-muted-foreground/70",children:"API Reference"}),(0,b.jsx)("h1",{className:"text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl",children:"API Documentation"}),(0,b.jsx)("p",{className:"max-w-2xl text-lg text-muted-foreground sm:text-xl",children:"REST API for accessing models, benchmarks, scores, and leaderboard data programmatically."})]})]}),(0,b.jsxs)("section",{className:"grid gap-4 sm:grid-cols-4",children:[(0,b.jsxs)("div",{className:"rounded-2xl border border-border bg-card/50 p-6",children:[(0,b.jsx)("p",{className:"font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60",children:"Models"}),(0,b.jsx)("p",{className:"mt-4 font-display text-3xl font-bold text-foreground",children:a})]}),(0,b.jsxs)("div",{className:"rounded-2xl border border-border bg-card/50 p-6",children:[(0,b.jsx)("p",{className:"font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60",children:"Benchmarks"}),(0,b.jsx)("p",{className:"mt-4 font-display text-3xl font-bold text-foreground",children:e})]}),(0,b.jsxs)("div",{className:"rounded-2xl border border-border bg-card/50 p-6",children:[(0,b.jsx)("p",{className:"font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60",children:"Categories"}),(0,b.jsx)("p",{className:"mt-4 font-display text-3xl font-bold text-foreground",children:f})]}),(0,b.jsxs)("div",{className:"rounded-2xl border border-border bg-card/50 p-6",children:[(0,b.jsx)("p",{className:"font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60",children:"Sources"}),(0,b.jsx)("p",{className:"mt-4 font-display text-3xl font-bold text-foreground",children:h})]})]}),(0,b.jsxs)("section",{className:"grid gap-4 sm:grid-cols-3",children:[(0,b.jsxs)("div",{className:"rounded-2xl border border-border bg-card/50 p-6",children:[(0,b.jsx)("p",{className:"font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60",children:"Base URL"}),(0,b.jsx)("p",{className:"mt-4 font-mono text-sm text-foreground break-all",children:"https://llm-registry.com/api/v1"})]}),(0,b.jsxs)("div",{className:"rounded-2xl border border-border bg-card/50 p-6",children:[(0,b.jsx)("p",{className:"font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60",children:"Format"}),(0,b.jsx)("p",{className:"mt-4 font-display text-2xl font-bold text-foreground",children:"JSON"})]}),(0,b.jsxs)("div",{className:"rounded-2xl border border-border bg-card/50 p-6",children:[(0,b.jsx)("p",{className:"font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60",children:"Auth"}),(0,b.jsx)("p",{className:"mt-4 font-display text-2xl font-bold text-foreground",children:"None"})]})]}),(0,b.jsxs)("section",{className:"space-y-6",children:[(0,b.jsx)("h2",{className:"font-display text-2xl font-bold tracking-tight text-foreground",children:"Endpoints"}),(0,b.jsx)("div",{className:"space-y-6",children:g.map(a=>(0,b.jsxs)("article",{className:"rounded-2xl border border-border bg-card/50 overflow-hidden",children:[(0,b.jsxs)("div",{className:"flex items-start gap-3 border-b border-border/60 bg-muted/20 px-5 py-4",children:[(0,b.jsx)("span",{className:"shrink-0 rounded-md bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400",children:a.method}),(0,b.jsx)("code",{className:"font-mono text-sm text-foreground",children:a.path})]}),(0,b.jsxs)("div",{className:"p-5 space-y-4",children:[(0,b.jsx)("p",{className:"text-sm text-muted-foreground",children:a.description}),a.params&&(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)("p",{className:"font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70",children:"Query Parameters"}),(0,b.jsx)("div",{className:"grid gap-2",children:a.params.map(a=>(0,b.jsxs)("div",{className:"flex items-start gap-3 text-sm",children:[(0,b.jsx)("code",{className:"shrink-0 rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground",children:a.name}),(0,b.jsx)("span",{className:"text-muted-foreground",children:a.desc})]},a.name))})]}),(0,b.jsxs)("div",{className:"space-y-2",children:[(0,b.jsx)("p",{className:"font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70",children:"Sample Response"}),(0,b.jsx)("pre",{className:"overflow-x-auto rounded-lg border border-border bg-muted/30 p-4 text-xs font-mono text-muted-foreground",children:a.response})]})]})]},a.path))})]}),(0,b.jsxs)("section",{className:"space-y-6",children:[(0,b.jsx)("h2",{className:"font-display text-2xl font-bold tracking-tight text-foreground",children:"Response Headers"}),(0,b.jsx)("div",{className:"rounded-2xl border border-border bg-card/50 p-6 space-y-4",children:(0,b.jsxs)("div",{className:"grid gap-4 sm:grid-cols-2",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"font-mono text-xs font-bold text-foreground",children:"Cache-Control"}),(0,b.jsx)("p",{className:"mt-1 text-sm text-muted-foreground",children:"Responses are cached for 5 minutes (public, max-age=300)"})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"font-mono text-xs font-bold text-foreground",children:"Last-Modified"}),(0,b.jsx)("p",{className:"mt-1 text-sm text-muted-foreground",children:"Date of the most recent score update"})]})]})})]}),(0,b.jsxs)("section",{className:"space-y-6",children:[(0,b.jsx)("h2",{className:"font-display text-2xl font-bold tracking-tight text-foreground",children:"Attribution"}),(0,b.jsxs)("div",{className:"rounded-2xl border border-border bg-card/50 p-6 space-y-4",children:[(0,b.jsxs)("p",{className:"text-sm text-muted-foreground",children:["All API responses include an ",(0,b.jsx)("code",{className:"text-primary",children:"attribution"})," object. If you use this data, please credit:"]}),(0,b.jsxs)("ul",{className:"space-y-2 text-sm text-muted-foreground",children:[(0,b.jsxs)("li",{className:"flex items-start gap-2",children:[(0,b.jsx)("span",{className:"mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/40"}),(0,b.jsxs)("span",{children:[(0,b.jsx)("strong",{className:"text-foreground",children:"Artificial Analysis"}),' — Scores marked with sourceId "artificial-analysis" are from ',(0,b.jsx)("a",{href:"https://artificialanalysis.ai/",className:"text-primary hover:underline",children:"artificialanalysis.ai"})]})]}),(0,b.jsxs)("li",{className:"flex items-start gap-2",children:[(0,b.jsx)("span",{className:"mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/40"}),(0,b.jsxs)("span",{children:[(0,b.jsx)("strong",{className:"text-foreground",children:"LLM Registry"})," — Link back to llm-registry.com when displaying data"]})]})]})]})]})]})}a.s(["default",()=>h,"metadata",0,f])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__c1e01471._.js.map