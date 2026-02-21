(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card/75 text-card-foreground flex flex-col gap-5 rounded-lg border border-white/10 py-5 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-5", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-tight font-semibold tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-5", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/stats.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateCategoryScore",
    ()=>calculateCategoryScore,
    "calculateCompositeScore",
    ()=>calculateCompositeScore,
    "calculateCoverage",
    ()=>calculateCoverage,
    "formatCurrency",
    ()=>formatCurrency,
    "getRank",
    ()=>getRank,
    "normalizeScore",
    ()=>normalizeScore
]);
function normalizeScore(score, benchmark) {
    const minScore = benchmark.minScore ?? (benchmark.normalization === "elo" || benchmark.id === "lmarena-elo" ? 1000 : 0);
    const normalization = benchmark.normalization ?? (benchmark.id === "lmarena-elo" ? "elo" : "max");
    let normalized = 0;
    if (normalization === "elo" || normalization === "minmax") {
        const denominator = benchmark.maxScore - minScore;
        normalized = denominator > 0 ? (score - minScore) / denominator * 100 : 0;
    } else if (normalization === "inverse") {
        normalized = benchmark.maxScore > 0 ? (benchmark.maxScore - score) / benchmark.maxScore * 100 : 0;
    } else {
        normalized = benchmark.maxScore > 0 ? score / benchmark.maxScore * 100 : 0;
    }
    if (!benchmark.higherIsBetter && normalization !== "inverse") {
        normalized = 100 - normalized;
    }
    return Math.max(0, Math.min(100, normalized));
}
function calculateCompositeScore(model, benchmarks) {
    let total = 0;
    let count = 0;
    benchmarks.forEach((benchmark)=>{
        const scoreData = model.scores[benchmark.id];
        if (scoreData && scoreData.score !== null) {
            total += normalizeScore(scoreData.score, benchmark);
            count++;
        }
    });
    return count === 0 ? 0 : Number((total / count).toFixed(1));
}
function calculateCoverage(model, benchmarks) {
    const definedScores = benchmarks.filter((benchmark)=>{
        const scoreData = model.scores[benchmark.id];
        return scoreData && scoreData.score !== null;
    }).length;
    if (benchmarks.length === 0) return 0;
    return Number((definedScores / benchmarks.length * 100).toFixed(1));
}
function calculateCategoryScore(model, benchmarks, category) {
    const categoryBenchmarks = benchmarks.filter((benchmark)=>benchmark.category === category);
    if (categoryBenchmarks.length === 0) return null;
    let total = 0;
    let count = 0;
    categoryBenchmarks.forEach((benchmark)=>{
        const scoreData = model.scores[benchmark.id];
        if (scoreData && scoreData.score !== null) {
            total += normalizeScore(scoreData.score, benchmark);
            count++;
        }
    });
    if (count === 0) return null;
    return Number((total / count).toFixed(1));
}
function getRank(modelId, benchmarkId, allModels) {
    const modelsWithScore = allModels.filter((m)=>m.scores[benchmarkId] !== undefined).sort((a, b)=>{
        const scoreA = a.scores[benchmarkId]?.score || 0;
        const scoreB = b.scores[benchmarkId]?.score || 0;
        return scoreB - scoreA; // Descending
    });
    const rank = modelsWithScore.findIndex((m)=>m.id === modelId);
    return rank === -1 ? null : rank + 1;
}
function formatCurrency(value) {
    if (value === 0) return "Free";
    return `$${value.toFixed(2)}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/categories.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_CATEGORY_SLUG",
    ()=>ALL_CATEGORY_SLUG,
    "benchmarkCategories",
    ()=>benchmarkCategories,
    "categoryToSlug",
    ()=>categoryToSlug,
    "slugToCategory",
    ()=>slugToCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$benchmarks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/benchmarks.ts [app-client] (ecmascript)");
;
const ALL_CATEGORY_SLUG = "all";
const benchmarkCategories = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$benchmarks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["benchmarks"].map((benchmark)=>benchmark.category)));
function categoryToSlug(category) {
    return category.toLowerCase().replace(/\s+/g, "-");
}
function slugToCategory(slug) {
    if (!slug || slug === ALL_CATEGORY_SLUG) return null;
    return benchmarkCategories.find((category)=>categoryToSlug(category) === slug) ?? null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/provider-identity.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProviderTheme",
    ()=>getProviderTheme
]);
const PROVIDER_THEMES = [
    {
        match: /anthropic/i,
        theme: {
            border: "border-amber-500/35 dark:border-amber-300/35",
            bg: "bg-amber-500/10 dark:bg-amber-300/10",
            text: "text-amber-700 dark:text-amber-200"
        }
    },
    {
        match: /openai/i,
        theme: {
            border: "border-cyan-500/35 dark:border-cyan-300/35",
            bg: "bg-cyan-500/12 dark:bg-cyan-300/12",
            text: "text-cyan-700 dark:text-cyan-200"
        }
    },
    {
        match: /deepseek/i,
        theme: {
            border: "border-violet-500/35 dark:border-violet-300/35",
            bg: "bg-violet-500/10 dark:bg-violet-300/10",
            text: "text-violet-700 dark:text-violet-200"
        }
    },
    {
        match: /meta|llama/i,
        theme: {
            border: "border-sky-500/35 dark:border-sky-300/35",
            bg: "bg-sky-500/10 dark:bg-sky-300/10",
            text: "text-sky-700 dark:text-sky-200"
        }
    },
    {
        match: /mistral/i,
        theme: {
            border: "border-orange-500/35 dark:border-orange-300/35",
            bg: "bg-orange-500/10 dark:bg-orange-300/10",
            text: "text-orange-700 dark:text-orange-200"
        }
    },
    {
        match: /google|gemini/i,
        theme: {
            border: "border-sky-500/35 dark:border-sky-300/35",
            bg: "bg-sky-500/10 dark:bg-sky-300/10",
            text: "text-sky-700 dark:text-sky-200"
        }
    }
];
const DEFAULT_THEME = {
    border: "border-emerald-500/30 dark:border-emerald-300/30",
    bg: "bg-emerald-500/10 dark:bg-emerald-300/10",
    text: "text-emerald-700 dark:text-emerald-200"
};
function getProviderTheme(provider) {
    const match = PROVIDER_THEMES.find((entry)=>entry.match.test(provider));
    return match?.theme ?? DEFAULT_THEME;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/sources.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sources",
    ()=>sources
]);
const sources = [
    {
        id: "openai-blog",
        name: "OpenAI Blog",
        url: "https://openai.com/news",
        publisher: "OpenAI"
    },
    {
        id: "openai-gpt52-announce",
        name: "Introducing GPT-5.2",
        url: "https://openai.com/index/introducing-gpt-5-2/",
        publisher: "OpenAI",
        updatedAt: "2025-12-11"
    },
    {
        id: "anthropic-news",
        name: "Anthropic News",
        url: "https://www.anthropic.com/news",
        publisher: "Anthropic"
    },
    {
        id: "google-ai-blog",
        name: "Google AI Blog",
        url: "https://blog.google/technology/ai/",
        publisher: "Google"
    },
    {
        id: "google-gemini3-announce",
        name: "Gemini 3 Pro Announcement",
        url: "https://blog.google/technology/ai/google-gemini-3-pro/",
        publisher: "Google DeepMind",
        updatedAt: "2025-11-18"
    },
    {
        id: "google-gemini31-announce",
        name: "Gemini 3.1 Pro Announcement",
        url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/",
        publisher: "Google DeepMind",
        updatedAt: "2026-02-19"
    },
    {
        id: "deepseek-news",
        name: "DeepSeek News",
        url: "https://www.deepseek.com/",
        publisher: "DeepSeek"
    },
    {
        id: "lmarena",
        name: "Chatbot Arena Leaderboard",
        url: "https://chat.lmsys.org/?leaderboard",
        publisher: "LMSYS"
    },
    {
        id: "llm-stats",
        name: "LLM Stats",
        url: "https://llm-stats.com/",
        publisher: "LLM Stats",
        updatedAt: "2026-02-18"
    },
    {
        id: "swe-bench",
        name: "SWE-bench",
        url: "https://www.swebench.com/",
        publisher: "Princeton NLP"
    },
    {
        id: "artificial-analysis",
        name: "Artificial Analysis (Independent)",
        url: "https://artificialanalysis.ai/",
        publisher: "Artificial Analysis",
        updatedAt: "2026-02-16"
    },
    {
        id: "model-family-proxy",
        name: "Model Family Proxy (Estimated)",
        url: "https://llm-registry.com/about",
        publisher: "LLM Registry",
        updatedAt: "2026-02-20"
    },
    {
        id: "livebench",
        name: "LiveBench",
        url: "https://livebench.ai/",
        publisher: "LiveBench"
    },
    {
        id: "meta-ai",
        name: "Meta AI",
        url: "https://ai.meta.com/",
        publisher: "Meta"
    },
    {
        id: "xai-news",
        name: "xAI",
        url: "https://x.ai/",
        publisher: "xAI"
    },
    {
        id: "mistral-news",
        name: "Mistral AI",
        url: "https://mistral.ai/news/",
        publisher: "Mistral"
    },
    {
        id: "cohere-news",
        name: "Cohere",
        url: "https://cohere.com/blog",
        publisher: "Cohere"
    },
    {
        id: "amazon-nova",
        name: "Amazon Nova",
        url: "https://aws.amazon.com/ai/generative-ai/nova/",
        publisher: "Amazon"
    },
    {
        id: "microsoft-ai",
        name: "Microsoft AI",
        url: "https://blogs.microsoft.com/ai/",
        publisher: "Microsoft"
    },
    {
        id: "databricks-ai",
        name: "Databricks AI",
        url: "https://www.databricks.com/blog",
        publisher: "Databricks"
    },
    {
        id: "ai21-news",
        name: "AI21",
        url: "https://www.ai21.com/blog",
        publisher: "AI21"
    },
    {
        id: "moonshot-news",
        name: "Moonshot AI",
        url: "https://www.moonshot.ai/",
        publisher: "Moonshot AI"
    },
    {
        id: "zhipu-news",
        name: "Zhipu AI",
        url: "https://www.zhipuai.cn/",
        publisher: "Zhipu AI"
    },
    {
        id: "z-ai-blog",
        name: "Z.ai Blog",
        url: "https://z.ai/blog",
        publisher: "Zhipu AI"
    },
    {
        id: "glm5-paper",
        name: "GLM-5 Paper (arXiv)",
        url: "https://arxiv.org/abs/2602.15763",
        publisher: "Zhipu AI / Tsinghua University",
        updatedAt: "2026-02-17"
    },
    {
        id: "bytedance-seed",
        name: "ByteDance Seed",
        url: "https://seed.bytedance.com/",
        publisher: "ByteDance"
    },
    {
        id: "qwen-ai-blog",
        name: "Qwen AI Blog",
        url: "https://qwen.ai/blog",
        publisher: "Alibaba"
    },
    {
        id: "yamanahlawat-llm-registry",
        name: "yamanahlawat/llm-registry",
        url: "https://github.com/yamanahlawat/llm-registry",
        publisher: "GitHub Community Registry",
        updatedAt: "2026-02-07"
    },
    {
        id: "bigcode-project",
        name: "BigCode Project",
        url: "https://github.com/bigcode-project",
        publisher: "BigCode"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/compare-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompareView",
    ()=>CompareView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nuqs/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/categories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$provider$2d$identity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/provider-identity.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sources$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/sources.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const RadarComparison = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/dashboard/radar-chart.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.RadarComparison), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/dashboard/radar-chart.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "surface-card flex h-full min-h-[500px] items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-mono tracking-[0.12em] text-muted-foreground",
                children: "Loading chart…"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/compare-view.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
});
_c = RadarComparison;
function getSeriesColorClasses(idx) {
    if (idx === 0) return {
        bar: "bg-chart-1",
        text: "text-chart-1"
    };
    if (idx === 1) return {
        bar: "bg-chart-2",
        text: "text-chart-2"
    };
    return {
        bar: "bg-chart-3",
        text: "text-chart-3"
    };
}
const sourceMap = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sources$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sources"].map((source)=>[
        source.id,
        source
    ]));
const MIN_RELIABLE_SHARED_BENCHMARKS = 8;
function hasScore(model, benchmarkId) {
    const score = model.scores[benchmarkId]?.score;
    return score !== null && score !== undefined;
}
function getVerificationBadge(verificationLevel, verified) {
    if (verificationLevel === "third_party") return "3rd";
    if (verificationLevel === "provider") return "Prov";
    if (verificationLevel === "community") return "Comm";
    if (verificationLevel === "estimated") return "Est";
    return verified ? "Prov" : "Unv";
}
function CompareView({ modelOptions, initialSelectedModels, benchmarks }) {
    _s();
    const [showSummary, setShowSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchText, setSearchText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [modelCache, setModelCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CompareView.useState": ()=>Object.fromEntries(initialSelectedModels.map({
                "CompareView.useState": (model)=>[
                        model.id,
                        model
                    ]
            }["CompareView.useState"]))
    }["CompareView.useState"]);
    const [compareIds, setCompareIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQueryState"])("models", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseAsArrayOf"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseAsString"]).withDefault([]));
    const [categorySlug, setCategorySlug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQueryState"])("category", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseAsString"].withDefault(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_CATEGORY_SLUG"]));
    const [comparisonMode, setComparisonMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQueryState"])("mode", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseAsString"].withDefault("strict"));
    const onlySharedBenchmarks = comparisonMode !== "explore";
    const selectedModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompareView.useMemo[selectedModels]": ()=>{
            const ids = (compareIds || []).slice(0, 3);
            return ids.map({
                "CompareView.useMemo[selectedModels]": (id)=>modelCache[id]
            }["CompareView.useMemo[selectedModels]"]).filter({
                "CompareView.useMemo[selectedModels]": (model)=>Boolean(model)
            }["CompareView.useMemo[selectedModels]"]);
        }
    }["CompareView.useMemo[selectedModels]"], [
        compareIds,
        modelCache
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompareView.useEffect": ()=>{
            const ids = (compareIds || []).slice(0, 3);
            if (ids.length === 0) return;
            let cancelled = false;
            const missingIds = ids.filter({
                "CompareView.useEffect.missingIds": (id)=>!modelCache[id]
            }["CompareView.useEffect.missingIds"]);
            if (missingIds.length === 0) return;
            const loadMissingModels = {
                "CompareView.useEffect.loadMissingModels": async ()=>{
                    const fetched = await Promise.all(missingIds.map({
                        "CompareView.useEffect.loadMissingModels": async (id)=>{
                            try {
                                const response = await fetch(`/api/v1/models/${encodeURIComponent(id)}`, {
                                    cache: "no-store"
                                });
                                if (!response.ok) return null;
                                const payload = await response.json();
                                return payload.model ?? null;
                            } catch  {
                                return null;
                            }
                        }
                    }["CompareView.useEffect.loadMissingModels"]));
                    if (cancelled) return;
                    const validModels = fetched.filter({
                        "CompareView.useEffect.loadMissingModels.validModels": (model)=>Boolean(model)
                    }["CompareView.useEffect.loadMissingModels.validModels"]);
                    if (validModels.length === 0) return;
                    setModelCache({
                        "CompareView.useEffect.loadMissingModels": (previous)=>{
                            const next = {
                                ...previous
                            };
                            validModels.forEach({
                                "CompareView.useEffect.loadMissingModels": (model)=>{
                                    next[model.id] = model;
                                }
                            }["CompareView.useEffect.loadMissingModels"]);
                            return next;
                        }
                    }["CompareView.useEffect.loadMissingModels"]);
                }
            }["CompareView.useEffect.loadMissingModels"];
            void loadMissingModels();
            return ({
                "CompareView.useEffect": ()=>{
                    cancelled = true;
                }
            })["CompareView.useEffect"];
        }
    }["CompareView.useEffect"], [
        compareIds,
        modelCache
    ]);
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompareView.useMemo[categories]": ()=>Array.from(new Set(benchmarks.map({
                "CompareView.useMemo[categories]": (b)=>b.category
            }["CompareView.useMemo[categories]"])))
    }["CompareView.useMemo[categories]"], [
        benchmarks
    ]);
    const selectableModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompareView.useMemo[selectableModels]": ()=>[
                ...modelOptions
            ].sort({
                "CompareView.useMemo[selectableModels]": (a, b)=>{
                    const providerCmp = a.provider.localeCompare(b.provider);
                    if (providerCmp !== 0) return providerCmp;
                    return a.name.localeCompare(b.name);
                }
            }["CompareView.useMemo[selectableModels]"])
    }["CompareView.useMemo[selectableModels]"], [
        modelOptions
    ]);
    const latestModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompareView.useMemo[latestModels]": ()=>[
                ...modelOptions
            ].filter({
                "CompareView.useMemo[latestModels]": (m)=>!compareIds.includes(m.id)
            }["CompareView.useMemo[latestModels]"]).sort({
                "CompareView.useMemo[latestModels]": (a, b)=>b.releaseDate.localeCompare(a.releaseDate)
            }["CompareView.useMemo[latestModels]"])
    }["CompareView.useMemo[latestModels]"], [
        modelOptions,
        compareIds
    ]);
    const benchmarkCategoryFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompareView.useMemo[benchmarkCategoryFilter]": ()=>{
            const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugToCategory"])(categorySlug);
            return category ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_CATEGORY_SLUG"];
        }
    }["CompareView.useMemo[benchmarkCategoryFilter]"], [
        categorySlug
    ]);
    const scopedBenchmarks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompareView.useMemo[scopedBenchmarks]": ()=>{
            if (benchmarkCategoryFilter === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_CATEGORY_SLUG"]) {
                return benchmarks;
            }
            return benchmarks.filter({
                "CompareView.useMemo[scopedBenchmarks]": (benchmark)=>benchmark.category === benchmarkCategoryFilter
            }["CompareView.useMemo[scopedBenchmarks]"]);
        }
    }["CompareView.useMemo[scopedBenchmarks]"], [
        benchmarkCategoryFilter,
        benchmarks
    ]);
    const sharedBenchmarkCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompareView.useMemo[sharedBenchmarkCount]": ()=>{
            if (selectedModels.length === 0) return 0;
            return scopedBenchmarks.filter({
                "CompareView.useMemo[sharedBenchmarkCount]": (benchmark)=>{
                    if (selectedModels.length === 1) {
                        return hasScore(selectedModels[0], benchmark.id);
                    }
                    return selectedModels.every({
                        "CompareView.useMemo[sharedBenchmarkCount]": (model)=>hasScore(model, benchmark.id)
                    }["CompareView.useMemo[sharedBenchmarkCount]"]);
                }
            }["CompareView.useMemo[sharedBenchmarkCount]"]).length;
        }
    }["CompareView.useMemo[sharedBenchmarkCount]"], [
        scopedBenchmarks,
        selectedModels
    ]);
    const comparisonQuality = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompareView.useMemo[comparisonQuality]": ()=>{
            if (selectedModels.length < 2) return null;
            const totalBenchmarks = scopedBenchmarks.length;
            const sharedCoverage = totalBenchmarks > 0 ? sharedBenchmarkCount / totalBenchmarks * 100 : 0;
            const coverageStats = selectedModels.map({
                "CompareView.useMemo[comparisonQuality].coverageStats": (model)=>{
                    const available = scopedBenchmarks.filter({
                        "CompareView.useMemo[comparisonQuality].coverageStats": (benchmark)=>hasScore(model, benchmark.id)
                    }["CompareView.useMemo[comparisonQuality].coverageStats"]).length;
                    const coverage = totalBenchmarks > 0 ? available / totalBenchmarks * 100 : 0;
                    return coverage;
                }
            }["CompareView.useMemo[comparisonQuality].coverageStats"]);
            const averageCoverage = coverageStats.length > 0 ? coverageStats.reduce({
                "CompareView.useMemo[comparisonQuality]": (sum, value)=>sum + value
            }["CompareView.useMemo[comparisonQuality]"], 0) / coverageStats.length : 0;
            const minimumCoverage = coverageStats.length > 0 ? Math.min(...coverageStats) : 0;
            let reliability = "low";
            if (sharedBenchmarkCount >= 12 && minimumCoverage >= 50) {
                reliability = "high";
            } else if (sharedBenchmarkCount >= MIN_RELIABLE_SHARED_BENCHMARKS && minimumCoverage >= 35) {
                reliability = "medium";
            }
            return {
                totalBenchmarks,
                sharedBenchmarks: sharedBenchmarkCount,
                sharedCoverage,
                averageCoverage,
                minimumCoverage,
                reliability,
                isReliable: sharedBenchmarkCount >= MIN_RELIABLE_SHARED_BENCHMARKS
            };
        }
    }["CompareView.useMemo[comparisonQuality]"], [
        scopedBenchmarks,
        selectedModels,
        sharedBenchmarkCount
    ]);
    const categoryAverages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompareView.useMemo[categoryAverages]": ()=>{
            if (!showSummary) return [];
            const scopedCategories = Array.from(new Set(scopedBenchmarks.map({
                "CompareView.useMemo[categoryAverages].scopedCategories": (benchmark)=>benchmark.category
            }["CompareView.useMemo[categoryAverages].scopedCategories"])));
            return scopedCategories.map({
                "CompareView.useMemo[categoryAverages]": (category)=>{
                    const categoryBenchmarks = scopedBenchmarks.filter({
                        "CompareView.useMemo[categoryAverages].categoryBenchmarks": (benchmark)=>benchmark.category === category
                    }["CompareView.useMemo[categoryAverages].categoryBenchmarks"]);
                    const comparableBenchmarks = onlySharedBenchmarks && selectedModels.length > 1 ? categoryBenchmarks.filter({
                        "CompareView.useMemo[categoryAverages]": (benchmark)=>selectedModels.every({
                                "CompareView.useMemo[categoryAverages]": (model)=>hasScore(model, benchmark.id)
                            }["CompareView.useMemo[categoryAverages]"])
                    }["CompareView.useMemo[categoryAverages]"]) : categoryBenchmarks;
                    const modelScores = selectedModels.map({
                        "CompareView.useMemo[categoryAverages].modelScores": (model)=>{
                            const normalizedScores = comparableBenchmarks.map({
                                "CompareView.useMemo[categoryAverages].modelScores.normalizedScores": (benchmark)=>{
                                    const score = model.scores[benchmark.id]?.score;
                                    if (score === null || score === undefined) return null;
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeScore"])(score, benchmark);
                                }
                            }["CompareView.useMemo[categoryAverages].modelScores.normalizedScores"]).filter({
                                "CompareView.useMemo[categoryAverages].modelScores.normalizedScores": (score)=>score !== null
                            }["CompareView.useMemo[categoryAverages].modelScores.normalizedScores"]);
                            return {
                                modelId: model.id,
                                modelName: model.name,
                                average: normalizedScores.length > 0 ? normalizedScores.reduce({
                                    "CompareView.useMemo[categoryAverages].modelScores": (sum, value)=>sum + value
                                }["CompareView.useMemo[categoryAverages].modelScores"], 0) / normalizedScores.length : null,
                                availableBenchmarks: normalizedScores.length,
                                comparableBenchmarks: comparableBenchmarks.length
                            };
                        }
                    }["CompareView.useMemo[categoryAverages].modelScores"]);
                    return {
                        id: category.toLowerCase().replace(/\s+/g, "-"),
                        name: category,
                        description: `Aggregate performance across ${category} evaluations.`,
                        benchmarkCount: comparableBenchmarks.length,
                        totalBenchmarkCount: categoryBenchmarks.length,
                        scores: modelScores
                    };
                }
            }["CompareView.useMemo[categoryAverages]"]).filter({
                "CompareView.useMemo[categoryAverages]": (category)=>category.scores.some({
                        "CompareView.useMemo[categoryAverages]": (score)=>score.average !== null
                    }["CompareView.useMemo[categoryAverages]"])
            }["CompareView.useMemo[categoryAverages]"]);
        }
    }["CompareView.useMemo[categoryAverages]"], [
        onlySharedBenchmarks,
        scopedBenchmarks,
        selectedModels,
        showSummary
    ]);
    const detailedBenchmarks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompareView.useMemo[detailedBenchmarks]": ()=>{
            if (showSummary) return [];
            return scopedBenchmarks.filter({
                "CompareView.useMemo[detailedBenchmarks]": (benchmark)=>{
                    const availableCount = selectedModels.filter({
                        "CompareView.useMemo[detailedBenchmarks]": (model)=>hasScore(model, benchmark.id)
                    }["CompareView.useMemo[detailedBenchmarks]"]).length;
                    if (availableCount === 0) return false;
                    if (!onlySharedBenchmarks) return true;
                    if (selectedModels.length <= 1) return true;
                    return availableCount === selectedModels.length;
                }
            }["CompareView.useMemo[detailedBenchmarks]"]).sort({
                "CompareView.useMemo[detailedBenchmarks]": (a, b)=>{
                    if (a.category === b.category) return a.name.localeCompare(b.name);
                    return a.category.localeCompare(b.category);
                }
            }["CompareView.useMemo[detailedBenchmarks]"]);
        }
    }["CompareView.useMemo[detailedBenchmarks]"], [
        onlySharedBenchmarks,
        scopedBenchmarks,
        selectedModels,
        showSummary
    ]);
    const benchmarkDeltas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompareView.useMemo[benchmarkDeltas]": ()=>{
            if (showSummary) return {};
            const deltas = {};
            detailedBenchmarks.forEach({
                "CompareView.useMemo[benchmarkDeltas]": (benchmark)=>{
                    const normalized = selectedModels.map({
                        "CompareView.useMemo[benchmarkDeltas].normalized": (model)=>{
                            const score = model.scores[benchmark.id]?.score;
                            if (score === null || score === undefined) return null;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeScore"])(score, benchmark);
                        }
                    }["CompareView.useMemo[benchmarkDeltas].normalized"]).filter({
                        "CompareView.useMemo[benchmarkDeltas].normalized": (score)=>score !== null
                    }["CompareView.useMemo[benchmarkDeltas].normalized"]);
                    if (normalized.length < 2) {
                        deltas[benchmark.id] = 0;
                        return;
                    }
                    deltas[benchmark.id] = Number((Math.max(...normalized) - Math.min(...normalized)).toFixed(1));
                }
            }["CompareView.useMemo[benchmarkDeltas]"]);
            return deltas;
        }
    }["CompareView.useMemo[benchmarkDeltas]"], [
        detailedBenchmarks,
        selectedModels,
        showSummary
    ]);
    const radarBenchmarks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompareView.useMemo[radarBenchmarks]": ()=>{
            if (selectedModels.length === 0) return scopedBenchmarks;
            return scopedBenchmarks.filter({
                "CompareView.useMemo[radarBenchmarks]": (benchmark)=>selectedModels.some({
                        "CompareView.useMemo[radarBenchmarks]": (model)=>hasScore(model, benchmark.id)
                    }["CompareView.useMemo[radarBenchmarks]"])
            }["CompareView.useMemo[radarBenchmarks]"]);
        }
    }["CompareView.useMemo[radarBenchmarks]"], [
        scopedBenchmarks,
        selectedModels
    ]);
    const removeModel = (id)=>{
        setCompareIds((prev)=>prev?.filter((i)=>i !== id) || []);
    };
    const clearModels = ()=>setCompareIds([]);
    const addModel = (id)=>{
        if (compareIds.includes(id)) return;
        if (compareIds.length >= 3) return;
        setCompareIds((prev)=>[
                ...prev || [],
                id
            ]);
        setSearchOpen(false);
        setSearchText("");
    };
    const filteredModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompareView.useMemo[filteredModels]": ()=>{
            if (!searchText) return selectableModels.slice(0, 10);
            const search = searchText.toLowerCase();
            return selectableModels.filter({
                "CompareView.useMemo[filteredModels]": (m)=>m.name.toLowerCase().includes(search) || m.provider.toLowerCase().includes(search)
            }["CompareView.useMemo[filteredModels]"]).slice(0, 10);
        }
    }["CompareView.useMemo[filteredModels]"], [
        selectableModels,
        searchText
    ]);
    const getModelCardMeta = (model)=>{
        const scopedScoreEntries = scopedBenchmarks.map((benchmark)=>model.scores[benchmark.id]).filter((entry)=>{
            const score = entry?.score;
            return score !== null && score !== undefined;
        });
        const totalBenchmarks = scopedBenchmarks.length;
        const scoredBenchmarks = scopedScoreEntries.length;
        const coverage = totalBenchmarks > 0 ? scoredBenchmarks / totalBenchmarks * 100 : 0;
        const strongVerified = scopedScoreEntries.filter((entry)=>{
            if (entry.verificationLevel === "provider" || entry.verificationLevel === "third_party") return true;
            return entry.verified && !entry.verificationLevel;
        }).length;
        const communityVerified = scopedScoreEntries.filter((entry)=>entry.verificationLevel === "community").length;
        const estimated = scopedScoreEntries.filter((entry)=>entry.verificationLevel === "estimated").length;
        const strongVerificationShare = scoredBenchmarks > 0 ? strongVerified / scoredBenchmarks * 100 : 0;
        const datedEntries = scopedScoreEntries.filter((entry)=>Boolean(entry.asOfDate));
        const latestAsOfDate = datedEntries.map((entry)=>entry.asOfDate).sort((a, b)=>b.localeCompare(a))[0] ?? null;
        if (strongVerificationShare >= 60) {
            return {
                label: "Strong Verification",
                tone: "text-emerald-700 dark:text-emerald-400",
                dot: "bg-emerald-500",
                coverage,
                strongVerificationShare,
                scoredBenchmarks,
                totalBenchmarks,
                latestAsOfDate
            };
        }
        if (strongVerified > 0 || communityVerified > 0) {
            return {
                label: "Partial Verification",
                tone: "text-amber-700 dark:text-amber-400",
                dot: "bg-amber-500",
                coverage,
                strongVerificationShare,
                scoredBenchmarks,
                totalBenchmarks,
                latestAsOfDate
            };
        }
        if (estimated > 0) {
            return {
                label: "Estimated Data",
                tone: "text-slate-600 dark:text-slate-300",
                dot: "bg-slate-500",
                coverage,
                strongVerificationShare,
                scoredBenchmarks,
                totalBenchmarks,
                latestAsOfDate
            };
        }
        return {
            label: "Unverified",
            tone: "text-muted-foreground",
            dot: "bg-muted-foreground",
            coverage,
            strongVerificationShare,
            scoredBenchmarks,
            totalBenchmarks,
            latestAsOfDate
        };
    };
    const handleShareView = async ()=>{
        const shareUrl = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : window.location.href;
        if (!shareUrl) return;
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(()=>setCopied(false), 1500);
        } catch  {
            setCopied(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-in fade-in duration-700 ease-out space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-4 px-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 overflow-x-auto no-scrollbar pb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 bg-muted/30 p-1 rounded-full border border-border/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: ()=>setShowSummary(true),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-7 rounded-full px-3 text-[11px] font-bold uppercase tracking-wider transition-all", showSummary ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                        children: "Summary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                        lineNumber: 428,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: ()=>setShowSummary(false),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-7 rounded-full px-3 text-[11px] font-bold uppercase tracking-wider transition-all", !showSummary ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                        children: "Detailed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                        lineNumber: 439,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                lineNumber: 427,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-px bg-border/40 mx-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                lineNumber: 452,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: categorySlug,
                                        onChange: (event)=>setCategorySlug(event.target.value),
                                        "aria-label": "Filter by category",
                                        className: "h-9 rounded-full border border-border/60 bg-muted/20 px-4 text-[11px] font-bold uppercase tracking-wider text-muted-foreground focus:bg-background transition-all outline-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_CATEGORY_SLUG"],
                                                children: "All Categories"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                lineNumber: 461,
                                                columnNumber: 15
                                            }, this),
                                            categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryToSlug"])(category),
                                                    children: category
                                                }, category, false, {
                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                        lineNumber: 455,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: ()=>setComparisonMode(onlySharedBenchmarks ? "explore" : "strict"),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-9 rounded-full border-border/60 px-4 text-[11px] font-bold uppercase tracking-wider transition-all", onlySharedBenchmarks ? "bg-primary/5 text-primary border-primary/20" : "text-muted-foreground hover:text-foreground"),
                                        children: onlySharedBenchmarks ? "Strict Shared" : "Exploratory"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                        lineNumber: 468,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                lineNumber: 454,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: handleShareView,
                                className: "h-9 rounded-full border-border/60 px-4 text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                        className: "mr-2 h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                        lineNumber: 489,
                                        columnNumber: 13
                                    }, this),
                                    copied ? "Copied" : "Share"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                lineNumber: 483,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        onClick: ()=>setSearchOpen(!searchOpen),
                                        className: "h-9 rounded-full px-5 text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-primary/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "mr-1.5 h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                lineNumber: 499,
                                                columnNumber: 15
                                            }, this),
                                            "Add Model"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                        lineNumber: 494,
                                        columnNumber: 13
                                    }, this),
                                    searchOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 top-full mt-2 z-50 w-[320px] rounded-2xl border border-border bg-card shadow-2xl overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 border-b border-border/50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                            className: "absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "Search models...",
                                                            value: searchText,
                                                            onChange: (e)=>setSearchText(e.target.value),
                                                            className: "h-10 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20",
                                                            autoFocus: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                            lineNumber: 508,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                lineNumber: 505,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-h-[300px] overflow-y-auto p-2",
                                                children: filteredModels.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "p-4 text-center text-xs text-muted-foreground",
                                                    children: "No models found"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 21
                                                }, this) : filteredModels.map((model)=>{
                                                    const providerTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$provider$2d$identity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProviderTheme"])(model.provider);
                                                    const isAdded = compareIds.includes(model.id);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>addModel(model.id),
                                                        disabled: isAdded || compareIds.length >= 3,
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full rounded-xl px-3 py-2.5 text-left transition-colors", isAdded ? "opacity-50 cursor-not-allowed" : "hover:bg-muted"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex w-full items-center justify-between gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "block truncate text-sm font-bold tracking-tight text-foreground",
                                                                            children: model.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                            lineNumber: 537,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("block truncate text-[10px] font-bold uppercase tracking-wider opacity-70", providerTheme.text),
                                                                            children: model.provider
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                            lineNumber: 538,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                    lineNumber: 536,
                                                                    columnNumber: 29
                                                                }, this),
                                                                isAdded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary",
                                                                    children: "Added"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                    lineNumber: 541,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                            lineNumber: 535,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, model.id, false, {
                                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                lineNumber: 518,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                        lineNumber: 504,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                lineNumber: 493,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                        lineNumber: 482,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            comparisonQuality && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-2xl border border-border bg-card/40 px-5 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground/70",
                                    children: "Comparison Quality"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                    lineNumber: 559,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wider",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full border px-2.5 py-1", comparisonQuality.reliability === "high" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" : comparisonQuality.reliability === "medium" ? "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300" : "border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300"),
                                            children: [
                                                comparisonQuality.reliability,
                                                " evidence"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                            lineNumber: 563,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground",
                                            children: [
                                                "Shared ",
                                                comparisonQuality.sharedBenchmarks,
                                                "/",
                                                comparisonQuality.totalBenchmarks,
                                                " (",
                                                comparisonQuality.sharedCoverage.toFixed(1),
                                                "%)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                            lineNumber: 575,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground",
                                            children: [
                                                "Avg Coverage ",
                                                comparisonQuality.averageCoverage.toFixed(1),
                                                "% | Min ",
                                                comparisonQuality.minimumCoverage.toFixed(1),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                            lineNumber: 578,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                    lineNumber: 562,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                            lineNumber: 558,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground",
                            children: comparisonQuality.isReliable ? "Reliable overlap for directional benchmark comparisons." : `Low overlap: fewer than ${MIN_RELIABLE_SHARED_BENCHMARKS} shared benchmarks. Avoid hard winner claims.`
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                            lineNumber: 584,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                    lineNumber: 557,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                lineNumber: 556,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-4 lg:grid-cols-3",
                children: [
                    selectedModels.map((model, idx)=>{
                        const providerTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$provider$2d$identity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProviderTheme"])(model.provider);
                        const cardMeta = getModelCardMeta(model);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-all hover:border-primary/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0 space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-mono text-[10px] font-bold text-primary uppercase tracking-widest",
                                                    children: [
                                                        "Model 0",
                                                        idx + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                    lineNumber: 602,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "truncate text-2xl font-display font-bold tracking-tight text-foreground",
                                                    title: model.name,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/model/${model.id}`,
                                                        className: "hover:text-primary transition-colors",
                                                        children: model.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                        lineNumber: 604,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                    lineNumber: 603,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest", providerTheme.border, providerTheme.bg, providerTheme.text),
                                                        children: model.provider
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                        lineNumber: 612,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                    lineNumber: 611,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                            lineNumber: 601,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            className: "h-8 w-8 rounded-full hover:bg-destructive/5 hover:text-destructive transition-colors",
                                            onClick: ()=>removeModel(model.id),
                                            "aria-label": `Remove ${model.name} from comparison`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                lineNumber: 625,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                            lineNumber: 618,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                    lineNumber: 600,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex items-baseline gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-display text-5xl font-bold tracking-tight text-foreground",
                                            children: [
                                                cardMeta.coverage.toFixed(1),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                            lineNumber: 630,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50",
                                            children: "Coverage"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                            lineNumber: 631,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                    lineNumber: 629,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50",
                                    children: [
                                        cardMeta.scoredBenchmarks,
                                        "/",
                                        cardMeta.totalBenchmarks,
                                        " Benchmarks In Scope"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                    lineNumber: 633,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-[10px] font-bold uppercase tracking-widest",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5", cardMeta.tone),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-1.5 w-1.5 rounded-full", cardMeta.dot)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                            lineNumber: 640,
                                                            columnNumber: 21
                                                        }, this),
                                                        cardMeta.label
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                    lineNumber: 639,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground/60",
                                                    children: cardMeta.latestAsOfDate ?? "No Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                    lineNumber: 643,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                            lineNumber: 638,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-md border border-border/60 bg-muted/20 px-2 py-1",
                                                children: [
                                                    "Verified ",
                                                    cardMeta.strongVerificationShare.toFixed(0),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                lineNumber: 647,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                            lineNumber: 646,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-1 w-full overflow-hidden rounded-full bg-muted/50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full bg-primary duration-1000 ease-out motion-reduce:duration-0",
                                                style: {
                                                    width: `${Math.max(8, cardMeta.coverage)}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                lineNumber: 653,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                            lineNumber: 652,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                    lineNumber: 637,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, model.id, true, {
                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                            lineNumber: 599,
                            columnNumber: 13
                        }, this);
                    }),
                    Array.from({
                        length: Math.max(0, 3 - selectedModels.length)
                    }).map((_, idx)=>{
                        const slotNum = selectedModels.length + idx + 1;
                        const suggestions = latestModels.slice(0, 3);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-h-[200px] flex-col rounded-2xl border border-dashed border-border/60 bg-muted/5 p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50",
                                            children: [
                                                "Slot 0",
                                                slotNum
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                            lineNumber: 673,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "sm",
                                            onClick: ()=>setSearchOpen(true),
                                            className: "h-7 text-[10px] uppercase font-bold tracking-wider px-2 hover:bg-muted text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "mr-1 h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 19
                                                }, this),
                                                " Search"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                            lineNumber: 674,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                    lineNumber: 672,
                                    columnNumber: 15
                                }, this),
                                suggestions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 mt-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground/40 mb-3",
                                            children: "Suggested Comparisons"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                            lineNumber: 680,
                                            columnNumber: 19
                                        }, this),
                                        suggestions.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>addModel(s.id),
                                                className: "group flex w-full items-center justify-between rounded-lg border border-border/40 bg-card/50 p-2.5 text-left hover:border-primary/30 hover:bg-muted/50 transition-all",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0 flex-1 pr-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block truncate text-xs font-bold text-foreground group-hover:text-primary transition-colors",
                                                            children: s.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                            lineNumber: 688,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                        lineNumber: 687,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                        lineNumber: 690,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, s.id, true, {
                                                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                lineNumber: 682,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                    lineNumber: 679,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-1 items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60",
                                        children: "No suggestions available"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                        lineNumber: 696,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                    lineNumber: 695,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, `empty-${idx}`, true, {
                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                            lineNumber: 668,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                lineNumber: 593,
                columnNumber: 7
            }, this),
            selectedModels.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-2",
                children: [
                    selectedModels.length >= 2 ? radarBenchmarks.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-border bg-card overflow-hidden h-[500px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadarComparison, {
                            models: selectedModels,
                            benchmarks: radarBenchmarks,
                            className: "h-full w-full"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                            lineNumber: 709,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                        lineNumber: 708,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-[500px] items-center justify-center rounded-2xl border border-dashed border-border/60 bg-muted/5 px-8 text-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50",
                        children: "No comparable benchmarks in the current scope"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                        lineNumber: 712,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-[500px] items-center justify-center rounded-2xl border border-dashed border-border/60 bg-muted/5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40",
                        children: "Select 2+ models for radar analysis"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                        lineNumber: 717,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col rounded-2xl border border-border bg-card overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-border/50 bg-muted/10 px-6 py-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display text-xl font-bold tracking-tight text-foreground",
                                        children: showSummary ? "Capability Variance" : "Performance Delta"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                        lineNumber: 724,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50",
                                        children: [
                                            showSummary ? "Category Normalized Averages" : "Benchmark Comparison",
                                            " | ",
                                            onlySharedBenchmarks ? `Strict ${sharedBenchmarkCount}/${scopedBenchmarks.length}` : "Exploratory"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                        lineNumber: 727,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                lineNumber: 723,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 p-6 overflow-y-auto no-scrollbar max-h-[400px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: showSummary ? categoryAverages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full items-center justify-center py-20 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40",
                                        children: "No comparable category data in this scope"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                        lineNumber: 736,
                                        columnNumber: 21
                                    }, this) : categoryAverages.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-end justify-between border-b border-border/40 pb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] font-bold uppercase tracking-widest text-primary",
                                                            children: [
                                                                cat.name,
                                                                " Avg"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                            lineNumber: 742,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest",
                                                            children: [
                                                                "Evidence ",
                                                                cat.benchmarkCount,
                                                                "/",
                                                                cat.totalBenchmarkCount
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                            lineNumber: 743,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                    lineNumber: 741,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: cat.scores.map((scoreObj, idx)=>{
                                                        const score = scoreObj.average;
                                                        if (score === null) return null;
                                                        const width = `${Math.min(score, 100)}%`;
                                                        const seriesColors = getSeriesColorClasses(idx);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between text-[10px] font-bold uppercase tracking-wider",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-muted-foreground truncate max-w-[120px]",
                                                                            children: scoreObj.modelName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                            lineNumber: 758,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("tabular-nums", seriesColors.text),
                                                                            children: [
                                                                                score.toFixed(1),
                                                                                "% ",
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-muted-foreground/70",
                                                                                    children: [
                                                                                        scoreObj.availableBenchmarks,
                                                                                        "/",
                                                                                        scoreObj.comparableBenchmarks
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                                    lineNumber: 761,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                            lineNumber: 759,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                    lineNumber: 757,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-1.5 w-full bg-muted/50 rounded-full overflow-hidden",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full ease-out motion-reduce:duration-0", seriesColors.bar),
                                                                        style: {
                                                                            width,
                                                                            transitionDuration: '1000ms'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                        lineNumber: 765,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                    lineNumber: 764,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, scoreObj.modelId, true, {
                                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                            lineNumber: 756,
                                                            columnNumber: 29
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, cat.id, true, {
                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                            lineNumber: 740,
                                            columnNumber: 21
                                        }, this)) : detailedBenchmarks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full items-center justify-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 py-20",
                                        children: "No data matches current filters"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                        lineNumber: 778,
                                        columnNumber: 21
                                    }, this) : detailedBenchmarks.map((benchmark)=>{
                                        const availableModels = selectedModels.filter((model)=>hasScore(model, benchmark.id)).length;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-end justify-between border-b border-border/40 pb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] font-bold uppercase tracking-widest text-foreground",
                                                            children: benchmark.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                            lineNumber: 787,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest",
                                                            children: [
                                                                "Delta ",
                                                                benchmarkDeltas[benchmark.id]?.toFixed(1) ?? "0.0",
                                                                " | ",
                                                                availableModels,
                                                                "/",
                                                                selectedModels.length
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                            lineNumber: 788,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                    lineNumber: 786,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: selectedModels.map((model, idx)=>{
                                                        const scoreEntry = model.scores[benchmark.id];
                                                        const score = scoreEntry?.score;
                                                        const seriesColors = getSeriesColorClasses(idx);
                                                        if (score === null || score === undefined) {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-1 opacity-45",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between text-[10px] font-bold uppercase tracking-wider",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-muted-foreground truncate max-w-[140px]",
                                                                                title: model.name,
                                                                                children: model.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                                lineNumber: 803,
                                                                                columnNumber: 37
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-mono text-muted-foreground",
                                                                                children: "N/A"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                                lineNumber: 804,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                        lineNumber: 802,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground/60",
                                                                        children: "No reported score"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                        lineNumber: 806,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, model.id, true, {
                                                                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                lineNumber: 801,
                                                                columnNumber: 33
                                                            }, this);
                                                        }
                                                        const width = `${Math.min((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeScore"])(score, benchmark), 100)}%`;
                                                        const source = scoreEntry.sourceId ? sourceMap.get(scoreEntry.sourceId) : null;
                                                        const sourceLabel = source?.name ?? "Unknown source";
                                                        const verificationLabel = getVerificationBadge(scoreEntry.verificationLevel, scoreEntry.verified);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between text-[10px] font-bold uppercase tracking-wider",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 truncate max-w-[200px]",
                                                                            title: model.name,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-muted-foreground truncate",
                                                                                    children: model.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                                    lineNumber: 820,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "rounded border border-border/40 px-1 text-[8px] text-muted-foreground/80",
                                                                                    children: verificationLabel
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                                    lineNumber: 821,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                            lineNumber: 819,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("tabular-nums", seriesColors.text),
                                                                            children: [
                                                                                score.toFixed(1),
                                                                                scoreEntry.sourceId === "artificial-analysis" ? "*" : ""
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                            lineNumber: 825,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                    lineNumber: 818,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-muted-foreground/65",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "truncate max-w-[62%]",
                                                                            title: sourceLabel,
                                                                            children: sourceLabel
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                            lineNumber: 831,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: scoreEntry.asOfDate ?? "Unknown Date"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                            lineNumber: 832,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                    lineNumber: 830,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-1.5 w-full overflow-hidden rounded-full bg-muted/50",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full ease-out motion-reduce:duration-0", seriesColors.bar),
                                                                        style: {
                                                                            width,
                                                                            transitionDuration: "1000ms"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                        lineNumber: 836,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                                    lineNumber: 835,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, model.id, true, {
                                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                            lineNumber: 817,
                                                            columnNumber: 31
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                                    lineNumber: 793,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, benchmark.id, true, {
                                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                            lineNumber: 785,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                    lineNumber: 733,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                lineNumber: 732,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/compare-view.tsx",
                        lineNumber: 722,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                lineNumber: 705,
                columnNumber: 9
            }, this),
            selectedModels.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-x-4 bottom-4 z-40 rounded-full border border-border/40 bg-card/80 backdrop-blur-md px-4 py-2 shadow-2xl md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
                            children: [
                                selectedModels.length,
                                " Models"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                            lineNumber: 858,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: ()=>setShowSummary((prev)=>!prev),
                                    className: "h-7 rounded-full px-3 text-[10px] font-bold uppercase tracking-wider",
                                    children: showSummary ? "Detailed" : "Summary"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                    lineNumber: 862,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: clearModels,
                                    className: "h-7 rounded-full px-3 text-[10px] font-bold uppercase tracking-wider text-destructive",
                                    children: "Clear"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                                    lineNumber: 870,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/compare-view.tsx",
                            lineNumber: 861,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/compare-view.tsx",
                    lineNumber: 857,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/compare-view.tsx",
                lineNumber: 856,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/compare-view.tsx",
        lineNumber: 424,
        columnNumber: 5
    }, this);
}
_s(CompareView, "PBjoB0YmuZGmxLSCUHXTpDbGv0o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQueryState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQueryState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQueryState"]
    ];
});
_c1 = CompareView;
var _c, _c1;
__turbopack_context__.k.register(_c, "RadarComparison");
__turbopack_context__.k.register(_c1, "CompareView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_fd5dbea0._.js.map