module.exports = [
"[project]/src/components/ui/table.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full border-separate border-spacing-0 caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-b border-border/60 transition-colors", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-11 whitespace-nowrap px-2 text-left align-middle text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 7
    }, this);
}
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-3 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground mt-4 text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/data/sources.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/lib/stats.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/lib/provider-identity.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/lib/freshness.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDaysAgo",
    ()=>formatDaysAgo,
    "getFreshnessBadge",
    ()=>getFreshnessBadge,
    "getFreshnessLevel",
    ()=>getFreshnessLevel
]);
function getFreshnessLevel(asOfDate) {
    if (!asOfDate) return null;
    const scoreDate = new Date(asOfDate);
    if (isNaN(scoreDate.getTime())) return null;
    const now = new Date();
    const daysDiff = Math.floor((now.getTime() - scoreDate.getTime()) / (1000 * 60 * 60 * 24));
    if (daysDiff <= 90) return "fresh";
    if (daysDiff <= 180) return "aging";
    return "stale";
}
function getFreshnessBadge(freshness) {
    if (!freshness) return null;
    switch(freshness){
        case "fresh":
            return {
                label: "Fresh",
                className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
            };
        case "aging":
            return {
                label: "Aging",
                className: "bg-amber-500/10 text-amber-600 dark:text-amber-400"
            };
        case "stale":
            return {
                label: "Stale",
                className: "bg-red-500/10 text-red-600 dark:text-red-400"
            };
    }
}
function formatDaysAgo(asOfDate) {
    if (!asOfDate) return null;
    const scoreDate = new Date(asOfDate);
    if (isNaN(scoreDate.getTime())) return null;
    const now = new Date();
    const daysDiff = Math.floor((now.getTime() - scoreDate.getTime()) / (1000 * 60 * 60 * 24));
    if (daysDiff < 1) return "today";
    if (daysDiff === 1) return "1 day ago";
    if (daysDiff < 30) return `${daysDiff} days ago`;
    if (daysDiff < 60) return "1 month ago";
    const months = Math.floor(daysDiff / 30);
    if (months < 12) return `${months} months ago`;
    const years = Math.floor(months / 12);
    if (years === 1) return "1 year ago";
    return `${years} years ago`;
}
}),
"[project]/src/components/dashboard/leaderboard/columns.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createColumns",
    ()=>createColumns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-down.js [app-ssr] (ecmascript) <export default as ArrowUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sources$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/sources.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stats.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$provider$2d$identity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/provider-identity.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$freshness$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/freshness.ts [app-ssr] (ecmascript)");
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
const sourceMap = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sources$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sources"].map((source)=>[
        source.id,
        source
    ]));
function getVerificationLabel(level, verified) {
    if (level === "third_party") return "Third-party";
    if (level === "provider") return "Provider";
    if (level === "community") return "Community";
    if (level === "estimated") return "Estimated";
    return verified ? "Verified" : "Unverified";
}
function getScorePillClass(normalizedScore) {
    if (normalizedScore >= 85) {
        return "border-emerald-500/25 bg-emerald-500/14 text-emerald-700 dark:text-emerald-300";
    }
    if (normalizedScore >= 70) {
        return "border-blue-500/25 bg-blue-500/14 text-blue-700 dark:text-blue-300";
    }
    if (normalizedScore >= 50) {
        return "border-amber-500/25 bg-amber-500/14 text-amber-700 dark:text-amber-300";
    }
    return "border-rose-500/25 bg-rose-500/14 text-rose-700 dark:text-rose-300";
}
function createColumns(benchmarks, toggleCompare, isCompared, metricsByModel) {
    const categories = Array.from(new Set(benchmarks.map((b)=>b.category)));
    const categoryAverageColumns = categories.map((category)=>({
            id: `avg-${category.toLowerCase().replace(/\s+/g, '-')}`,
            accessorFn: (row)=>{
                const metrics = metricsByModel.get(row.id);
                const value = metrics?.categoryAverages[category] ?? null;
                return value ?? -1;
            },
            header: ({ column })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                    delayDuration: 200,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                onClick: ()=>column.toggleSorting(column.getIsSorted() === "asc"),
                                className: "group/header h-11 min-h-11 w-full justify-start px-0 font-mono text-xs font-semibold tracking-[0.06em] text-primary/90 hover:bg-transparent hover:text-primary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "border-b border-primary/30 pb-0.5",
                                        children: [
                                            category,
                                            " AVG"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
                                        className: "ml-1 h-3 w-3 opacity-0 group-hover/header:opacity-50 transition-opacity"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                            lineNumber: 64,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                            className: "border-border bg-popover p-2 text-popover-foreground shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-mono tracking-wide",
                                children: [
                                    "Aggregate performance across all ",
                                    category,
                                    " evaluations."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                            lineNumber: 76,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                    lineNumber: 63,
                    columnNumber: 7
                }, this),
            cell: ({ getValue })=>{
                const val = getValue();
                if (val === -1) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "select-none pl-2 font-mono text-sm text-muted-foreground/30",
                        children: "--.-"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                        lineNumber: 84,
                        columnNumber: 16
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pl-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex min-w-[84px] items-center justify-center rounded-md border px-2.5 py-1 font-mono text-sm font-semibold tabular-nums", getScorePillClass(val)),
                        children: [
                            val.toFixed(1),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this);
            },
            enableHiding: true
        }));
    return [
        {
            id: "select",
            header: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                    delayDuration: 200,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                            className: "cursor-help",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "Compare"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-4 border border-muted-foreground/30 rounded-sm mx-auto"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                            className: "border-border bg-popover p-2 text-popover-foreground shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-mono tracking-wide",
                                children: "Select up to 3 systems for head-to-head analysis."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center pl-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "group/checkbox relative flex h-11 w-11 cursor-pointer items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                "aria-label": `Toggle compare for ${row.original.name}`,
                                className: "peer h-5 w-5 cursor-pointer appearance-none rounded border border-border bg-transparent transition-all hover:border-primary/60 checked:border-primary checked:bg-primary focus:ring-2 focus:ring-primary/20",
                                checked: isCompared(row.original.id),
                                onChange: ()=>toggleCompare(row.original.id)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "pointer-events-none absolute h-3.5 w-3.5 text-primary-foreground opacity-0 transition-opacity peer-checked:opacity-100",
                                strokeWidth: 3
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                        lineNumber: 119,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
            enableSorting: false,
            enableHiding: false,
            size: 64
        },
        {
            accessorKey: "name",
            header: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                    delayDuration: 200,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                            className: "cursor-help text-left font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground",
                            children: "Model System"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                            className: "border-border bg-popover p-2 text-popover-foreground shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-mono tracking-wide",
                                children: "Neural architecture ID and provider details."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
            cell: ({ row })=>{
                const providerTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$provider$2d$identity$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProviderTheme"])(row.original.provider);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "group/name flex min-w-[220px] flex-col py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/model/${row.original.id}`,
                            className: "flex items-center gap-2 font-display text-base font-bold tracking-tight text-foreground transition-colors duration-200 hover:text-primary",
                            children: [
                                row.original.name,
                                row.original.variants && row.original.variants.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex h-4 items-center rounded-full bg-primary/10 px-1.5 font-mono text-[9px] font-bold uppercase tracking-wider text-primary",
                                    children: [
                                        row.original.variants.length,
                                        " Variants"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                    lineNumber: 158,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "h-3 w-3 -rotate-90 text-primary/50 opacity-0 transition-all group-hover/name:opacity-100"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-sm px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors", providerTheme.border, providerTheme.bg, providerTheme.text),
                                    children: row.original.provider
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                row.original.isOpenSource && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5 rounded-sm border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] tracking-[0.08em] text-emerald-700 dark:text-emerald-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-1 w-1 rounded-full bg-emerald-600 dark:bg-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                            lineNumber: 177,
                                            columnNumber: 19
                                        }, this),
                                        "Open Weights"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                    lineNumber: 176,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                    lineNumber: 151,
                    columnNumber: 11
                }, this);
            },
            size: 296
        },
        {
            accessorKey: "releaseDate",
            header: ({ column })=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    onClick: ()=>column.toggleSorting(column.getIsSorted() === "asc"),
                    className: "group/header h-11 min-h-11 px-0 font-mono text-xs tracking-[0.1em] text-muted-foreground transition-colors hover:bg-transparent hover:text-foreground",
                    children: [
                        "Release",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
                            className: "ml-1 h-3 w-3 opacity-30 group-hover/header:opacity-100 transition-opacity"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                            lineNumber: 197,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                    lineNumber: 191,
                    columnNumber: 13
                }, this);
            },
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-mono text-muted-foreground tabular-nums opacity-80 group-hover/row:opacity-100 transition-opacity",
                    children: row.original.releaseDate
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                    lineNumber: 202,
                    columnNumber: 12
                }, this)
        },
        {
            id: "context",
            accessorFn: (row)=>row.specs.contextWindow,
            header: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                    delayDuration: 200,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                            className: "cursor-help text-left font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground",
                            children: "Ctx Window"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                            className: "border-border bg-popover p-2 text-popover-foreground shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-mono tracking-wide",
                                children: "Maximum sequence length supported by the model (tokens)."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
            cell: ({ row })=>{
                const val = row.original.specs.contextWindow;
                const displayVal = val >= 1000000 ? `${(val / 1000000).toFixed(0)}M` : `${(val / 1000).toFixed(0)}k`;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-fit rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-sm tabular-nums text-foreground/90 transition-colors group-hover/row:border-primary/25",
                    children: displayVal
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                    lineNumber: 224,
                    columnNumber: 11
                }, this);
            }
        },
        {
            id: "inputPrice",
            accessorFn: (row)=>row.specs.pricing.input,
            header: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                    delayDuration: 200,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                            className: "cursor-help text-left font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground",
                            children: "Input $/M"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                            className: "border-border bg-popover p-2 text-popover-foreground shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-mono tracking-wide",
                                children: "Input price per million tokens (USD)."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this),
            cell: ({ row })=>{
                const val = row.original.specs.pricing.input;
                const displayVal = val === 0 ? "Free" : `$${val.toFixed(2)}`;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-fit rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-sm tabular-nums text-foreground/90 transition-colors group-hover/row:border-primary/25",
                    children: displayVal
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                    lineNumber: 247,
                    columnNumber: 11
                }, this);
            },
            enableHiding: true,
            size: 100
        },
        {
            id: "outputPrice",
            accessorFn: (row)=>row.specs.pricing.output,
            header: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                    delayDuration: 200,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                            className: "cursor-help text-left font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground",
                            children: "Output $/M"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                            className: "border-border bg-popover p-2 text-popover-foreground shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-mono tracking-wide",
                                children: "Output price per million tokens (USD)."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this),
            cell: ({ row })=>{
                const val = row.original.specs.pricing.output;
                const displayVal = val === 0 ? "Free" : `$${val.toFixed(2)}`;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-fit rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-sm tabular-nums text-foreground/90 transition-colors group-hover/row:border-primary/25",
                    children: displayVal
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                    lineNumber: 272,
                    columnNumber: 11
                }, this);
            },
            enableHiding: true,
            size: 100
        },
        {
            id: "coverage",
            accessorFn: (row)=>metricsByModel.get(row.id)?.coverage ?? 0,
            header: ({ column })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                    delayDuration: 200,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                onClick: ()=>column.toggleSorting(column.getIsSorted() === "asc"),
                                className: "group/header h-11 min-h-11 w-full justify-start px-0 font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground transition-colors hover:bg-transparent hover:text-foreground",
                                children: [
                                    "Coverage",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
                                        className: "ml-1.5 h-3 w-3 opacity-0 group-hover/header:opacity-50 transition-opacity text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                            className: "border-border bg-popover p-2 text-popover-foreground shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-mono tracking-wide",
                                children: "Benchmark coverage across the full registry."
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                lineNumber: 296,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, this),
            cell: ({ getValue })=>{
                const value = getValue();
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pl-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex min-w-[84px] items-center justify-center rounded-md border px-2.5 py-1 font-mono text-sm font-semibold tabular-nums", getScorePillClass(value)),
                        children: [
                            value.toFixed(1),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                        lineNumber: 304,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                    lineNumber: 303,
                    columnNumber: 11
                }, this);
            },
            enableHiding: true,
            size: 124
        },
        ...categoryAverageColumns,
        ...benchmarks.map((benchmark)=>({
                id: benchmark.id,
                accessorFn: (row)=>{
                    const rawScore = row.scores[benchmark.id]?.score;
                    if (rawScore === null || rawScore === undefined) return -1;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeScore"])(rawScore, benchmark);
                },
                header: ({ column })=>{
                    const shortName = benchmark.id === "swe-bench-verified" ? "SWE" : benchmark.id === "lmarena-elo" ? "ELO" : benchmark.id === "gpqa-diamond" ? "GPQA" : benchmark.id === "human-eval" ? "HUMA" : benchmark.id === "bigcodebench" ? "BCB" : benchmark.id === "agentbench" ? "AGE" : benchmark.id.toUpperCase().substring(0, 4);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                        delayDuration: 200,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    onClick: ()=>column.toggleSorting(column.getIsSorted() === "asc"),
                                    className: "group/header h-11 min-h-11 w-full justify-start px-0 font-mono text-xs font-semibold tracking-[0.1em] text-muted-foreground transition-colors hover:bg-transparent hover:text-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "group-hover/header:text-foreground transition-colors border-b border-transparent group-hover/header:border-primary/50 pb-0.5",
                                            children: shortName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
                                            className: "ml-1.5 h-3 w-3 opacity-0 group-hover/header:opacity-50 transition-opacity text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                            lineNumber: 345,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                    lineNumber: 337,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                lineNumber: 336,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                className: "max-w-[280px] border-border bg-popover p-3 text-popover-foreground shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-sm",
                                        children: benchmark.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs text-muted-foreground leading-relaxed",
                                        children: benchmark.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                lineNumber: 348,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                        lineNumber: 335,
                        columnNumber: 11
                    }, this);
                },
                cell: ({ row })=>{
                    const scoreEntry = row.original.scores[benchmark.id];
                    const score = scoreEntry?.score;
                    if (score === null || score === undefined) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "select-none pl-2 font-mono text-sm text-muted-foreground/25",
                        children: "--.-"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                        lineNumber: 360,
                        columnNumber: 13
                    }, this);
                    const source = scoreEntry?.sourceId ? sourceMap.get(scoreEntry.sourceId) : undefined;
                    const sourceUrl = scoreEntry?.sourceUrl ?? source?.url ?? benchmark.link;
                    const sourceLabel = source?.name ?? "Source";
                    const verificationLabel = getVerificationLabel(scoreEntry?.verificationLevel, scoreEntry?.verified);
                    const isArtificialAnalysis = scoreEntry?.sourceId === "artificial-analysis";
                    const isInherited = Boolean(scoreEntry?.inheritedFrom);
                    const normalizedScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeScore"])(score, benchmark);
                    const freshness = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$freshness$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFreshnessLevel"])(scoreEntry?.asOfDate);
                    const daysAgo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$freshness$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDaysAgo"])(scoreEntry?.asOfDate);
                    const displayScore = `${score.toFixed(benchmark.maxScore > 100 ? 0 : 1)}${isArtificialAnalysis ? "*" : ""}${isInherited ? "~" : ""}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pl-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex min-w-[84px] max-w-[120px] items-center justify-center gap-1 rounded-md border px-2.5 py-1 font-mono text-sm font-semibold tabular-nums", getScorePillClass(normalizedScore)),
                            title: `${verificationLabel}${isInherited ? ` | inherited from ${scoreEntry?.inheritedFrom}` : ""} | ${sourceLabel} | ${scoreEntry?.asOfDate ?? "unknown date"}${sourceUrl ? ` | ${sourceUrl}` : ""} | normalized ${normalizedScore.toFixed(1)}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate",
                                    children: displayScore
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                    lineNumber: 384,
                                    columnNumber: 15
                                }, this),
                                freshness === "stale" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shrink-0 h-1.5 w-1.5 rounded-full bg-red-500",
                                    title: `Stale: ${daysAgo}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                    lineNumber: 386,
                                    columnNumber: 17
                                }, this),
                                freshness === "aging" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shrink-0 h-1.5 w-1.5 rounded-full bg-amber-500",
                                    title: `Aging: ${daysAgo}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                                    lineNumber: 389,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                            lineNumber: 377,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/leaderboard/columns.tsx",
                        lineNumber: 376,
                        columnNumber: 11
                    }, this);
                }
            }))
    ];
}
}),
"[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/dashboard/leaderboard/toolbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeaderboardToolbar",
    ()=>LeaderboardToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-ssr] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-ssr] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domains.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sources$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/sources.ts [app-ssr] (ecmascript)");
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
const verificationLevels = [
    {
        id: "third_party",
        label: "Third-party"
    },
    {
        id: "provider",
        label: "Provider"
    },
    {
        id: "community",
        label: "Community"
    },
    {
        id: "estimated",
        label: "Estimated"
    }
];
function LeaderboardToolbar({ table, compareIds, compareHref, searchQuery, onSearchQueryChange, resetLayout, summaryView, setSummaryView, license, onLicenseChange, domain, onClearDomain, sourcesFilter, onSourcesFilterChange, verificationFilter, onVerificationFilterChange, coverageMode, onCoverageModeChange, isMaximized = false, onToggleMaximized }) {
    const [searchValue, setSearchValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(searchQuery);
    const [debounceTimer, setDebounceTimer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [columnSearch, setColumnSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSearchChange = (value)=>{
        setSearchValue(value);
        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }
        const timer = setTimeout(()=>{
            onSearchQueryChange(value);
        }, 250);
        setDebounceTimer(timer);
    };
    const handleInputFocus = ()=>{
        if (debounceTimer) {
            clearTimeout(debounceTimer);
            setDebounceTimer(null);
        }
    };
    const handleInputBlur = ()=>{
        onSearchQueryChange(searchValue);
    };
    const toggleSource = (sourceId)=>{
        if (sourcesFilter.includes(sourceId)) {
            onSourcesFilterChange(sourcesFilter.filter((s)=>s !== sourceId));
        } else {
            onSourcesFilterChange([
                ...sourcesFilter,
                sourceId
            ]);
        }
    };
    const toggleVerification = (level)=>{
        if (verificationFilter.includes(level)) {
            onVerificationFilterChange(verificationFilter.filter((v)=>v !== level));
        } else {
            onVerificationFilterChange([
                ...verificationFilter,
                level
            ]);
        }
    };
    const hasActiveFilters = sourcesFilter.length > 0 || verificationFilter.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between px-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-col gap-3 md:flex-row md:items-center md:gap-2 lg:w-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group/search relative min-w-0 flex-1 md:w-[280px] lg:w-[320px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground/60 transition-colors group-focus-within/search:text-primary",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Search registry…",
                                "aria-label": "Search models",
                                autoComplete: "off",
                                value: searchValue,
                                onChange: (event)=>handleSearchChange(event.target.value),
                                onFocus: handleInputFocus,
                                onBlur: handleInputBlur,
                                className: "h-9 w-full rounded-full border-border/60 bg-muted/20 pl-9 text-xs transition-all focus:bg-background focus:ring-1 focus:ring-primary/20"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 bg-muted/30 p-1 rounded-full border border-border/40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: ()=>setSummaryView(true),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-7 rounded-full px-3 text-[11px] font-bold uppercase tracking-wider transition-all", summaryView ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                children: "Summary"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: ()=>setSummaryView(false),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-7 rounded-full px-3 text-[11px] font-bold uppercase tracking-wider transition-all", !summaryView ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                children: "Benchmarks"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 bg-muted/30 p-1 rounded-full border border-border/40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: ()=>onCoverageModeChange("assisted"),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-7 rounded-full px-3 text-[11px] font-bold uppercase tracking-wider transition-all", coverageMode === "assisted" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                children: "Coverage Assisted"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: ()=>onCoverageModeChange("strict"),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-7 rounded-full px-3 text-[11px] font-bold uppercase tracking-wider transition-all", coverageMode === "strict" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                children: "Observed Only"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 bg-muted/30 p-1 rounded-full border border-border/40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: ()=>onLicenseChange("all"),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-7 rounded-full px-3 text-[11px] font-bold uppercase tracking-wider transition-all", license === "all" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                children: "All"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: ()=>onLicenseChange("open"),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-7 rounded-full px-3 text-[11px] font-bold uppercase tracking-wider transition-all", license === "open" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                children: "Open"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: ()=>onLicenseChange("proprietary"),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-7 rounded-full px-3 text-[11px] font-bold uppercase tracking-wider transition-all", license === "proprietary" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                children: "Proprietary"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-7 rounded-full border-border/60 px-3 text-[11px] font-bold uppercase tracking-wider", hasActiveFilters ? "bg-primary/10 border-primary/30 text-primary" : "text-muted-foreground hover:text-foreground"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                            className: "h-3 w-3 mr-1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this),
                                        "Source",
                                        sourcesFilter.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1 rounded-full bg-primary/20 px-1.5 text-[9px]",
                                            children: sourcesFilter.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                align: "start",
                                className: "max-h-[300px] min-w-[220px] overflow-y-auto rounded-xl border-border bg-card p-1.5 shadow-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                        className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70 px-2",
                                        children: "Data Sources"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sources$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sources"].map((source)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuCheckboxItem"], {
                                            checked: sourcesFilter.includes(source.id),
                                            onCheckedChange: ()=>toggleSource(source.id),
                                            className: "cursor-pointer rounded-lg py-2 text-xs",
                                            children: source.name
                                        }, source.id, false, {
                                            fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this)),
                                    sourcesFilter.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                                                className: "bg-border/50"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: ()=>onSourcesFilterChange([]),
                                                className: "cursor-pointer rounded-lg py-2 text-xs font-bold text-primary focus:bg-primary/5",
                                                children: "Clear source filter"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-7 rounded-full border-border/60 px-3 text-[11px] font-bold uppercase tracking-wider", verificationFilter.length > 0 ? "bg-primary/10 border-primary/30 text-primary" : "text-muted-foreground hover:text-foreground"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-3 w-3 mr-1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this),
                                        "Verified",
                                        verificationFilter.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1 rounded-full bg-primary/20 px-1.5 text-[9px]",
                                            children: verificationFilter.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                            lineNumber: 285,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                align: "start",
                                className: "min-w-[180px] rounded-xl border-border bg-card p-1.5 shadow-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                        className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70 px-2",
                                        children: "Verification Level"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this),
                                    verificationLevels.map((level)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuCheckboxItem"], {
                                            checked: verificationFilter.includes(level.id),
                                            onCheckedChange: ()=>toggleVerification(level.id),
                                            className: "cursor-pointer rounded-lg py-2 text-xs",
                                            children: level.label
                                        }, level.id, false, {
                                            fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this)),
                                    verificationFilter.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                                                className: "bg-border/50"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                                lineNumber: 305,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: ()=>onVerificationFilterChange([]),
                                                className: "cursor-pointer rounded-lg py-2 text-xs font-bold text-primary focus:bg-primary/5",
                                                children: "Clear verification filter"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                                lineNumber: 306,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    domain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 bg-primary/10 p-1 rounded-full border border-primary/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 text-[11px] font-bold uppercase tracking-wider text-primary",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["domainDefinitions"].find((d)=>d.id === domain)?.label ?? domain
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClearDomain,
                                className: "h-5 w-5 flex items-center justify-center rounded-full hover:bg-primary/20 text-primary",
                                "aria-label": "Clear domain filter",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-3 w-3",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                        lineNumber: 328,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-wrap items-center gap-2 lg:w-auto lg:justify-end",
                children: [
                    compareIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: compareHref,
                        className: "w-full sm:w-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "default",
                            size: "sm",
                            className: "h-8 w-full rounded-full px-4 text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-primary/20 sm:w-auto",
                            children: [
                                "Compare (",
                                compareIds.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                            lineNumber: 338,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                        lineNumber: 337,
                        columnNumber: 11
                    }, this),
                    onToggleMaximized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        onClick: onToggleMaximized,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-8 rounded-full border-border/60 px-3 text-[11px] font-bold uppercase tracking-wider", isMaximized ? "bg-primary/10 border-primary/30 text-primary" : "text-muted-foreground hover:text-foreground"),
                        title: isMaximized ? "Exit maximized view (Esc)" : "Maximize view (F)",
                        children: isMaximized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                            lineNumber: 362,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                            lineNumber: 364,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                        lineNumber: 349,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                        onOpenChange: (open)=>!open && setColumnSearch(""),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    className: "h-8 rounded-full border-border/60 px-4 text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground",
                                    children: "Columns"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                lineNumber: 370,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                align: "end",
                                className: "max-h-[350px] min-w-[240px] overflow-hidden rounded-xl border-border bg-card p-1.5 shadow-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-1 pb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search columns...",
                                            value: columnSearch,
                                            onChange: (e)=>setColumnSearch(e.target.value),
                                            className: "w-full rounded-md border border-border bg-muted/50 px-2 py-1.5 text-xs placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                            lineNumber: 381,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-h-[250px] overflow-y-auto",
                                        children: table.getAllColumns().filter((column)=>{
                                            if (!column.getCanHide()) return false;
                                            const isAvg = column.id.startsWith("avg-");
                                            if (summaryView) return isAvg || column.id === "releaseDate" || column.id === "context" || column.id === "coverage";
                                            return !isAvg;
                                        }).map((column)=>{
                                            let label = column.id;
                                            if (column.id.startsWith("avg-")) {
                                                label = column.id.replace("avg-", "").replace(/-/g, " ").toUpperCase() + " AVG";
                                            } else {
                                                label = column.id.replace(/-/g, " ").charAt(0).toUpperCase() + column.id.slice(1).replace(/-/g, " ");
                                            }
                                            if (columnSearch && !label.toLowerCase().includes(columnSearch.toLowerCase()) && !column.id.toLowerCase().includes(columnSearch.toLowerCase())) {
                                                return null;
                                            }
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuCheckboxItem"], {
                                                className: "mb-0.5 cursor-pointer rounded-lg py-2 text-xs font-medium data-[state=checked]:text-primary",
                                                checked: column.getIsVisible(),
                                                onCheckedChange: (value)=>column.toggleVisibility(!!value),
                                                children: label
                                            }, column.id, false, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                                lineNumber: 411,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                        lineNumber: 389,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                                        className: "bg-border/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                        lineNumber: 422,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        onClick: resetLayout,
                                        className: "cursor-pointer rounded-lg py-2 text-xs font-bold uppercase tracking-wider text-primary focus:bg-primary/5 focus:text-primary",
                                        children: "Reset"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                        lineNumber: 423,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/leaderboard/toolbar.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript) <export * as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Root, {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Group, {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Value, {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function SelectTrigger({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Trigger, {
        "data-slot": "select-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full items-center justify-between gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm shadow-xs outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20 data-[placeholder]:text-muted-foreground data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 [&>span]:truncate", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Icon, {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function SelectContent({ className, children, position = "popper", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Content, {
            "data-slot": "select-content",
            position: position,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Viewport, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Item, {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-pointer select-none items-center rounded-md py-1.5 pr-8 pl-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ItemIndicator, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ItemText, {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Label, {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-xs font-medium text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Separator, {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-border", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/hooks/use-maximized-view.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMaximizedView",
    ()=>useMaximizedView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useMaximizedView(options = {}) {
    const { shortcutKey = "f", enabled = true, exitDuration = 200 } = options;
    const [isMaximized, setIsMaximized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAnimatingOut, setIsAnimatingOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const exitTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const performExit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsMaximized(false);
        setIsAnimatingOut(false);
        if (exitTimeoutRef.current) {
            clearTimeout(exitTimeoutRef.current);
            exitTimeoutRef.current = null;
        }
    }, []);
    const toggleMaximized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isMaximized) {
            // Start exit animation
            setIsAnimatingOut(true);
            exitTimeoutRef.current = setTimeout(performExit, exitDuration);
        } else {
            setIsMaximized(true);
            setIsAnimatingOut(false);
        }
    }, [
        isMaximized,
        exitDuration,
        performExit
    ]);
    const enterMaximized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsMaximized(true);
        setIsAnimatingOut(false);
        if (exitTimeoutRef.current) {
            clearTimeout(exitTimeoutRef.current);
            exitTimeoutRef.current = null;
        }
    }, []);
    const exitMaximized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isMaximized && !isAnimatingOut) {
            setIsAnimatingOut(true);
            exitTimeoutRef.current = setTimeout(performExit, exitDuration);
        }
    }, [
        isMaximized,
        isAnimatingOut,
        exitDuration,
        performExit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!enabled) return;
        const handleKeyDown = (event)=>{
            // Check if user is typing in an input
            if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
                return;
            }
            if (event.key.toLowerCase() === shortcutKey.toLowerCase()) {
                event.preventDefault();
                toggleMaximized();
            }
            // Allow ESC to exit maximized mode
            if (event.key === "Escape" && isMaximized) {
                event.preventDefault();
                exitMaximized();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, [
        shortcutKey,
        enabled,
        isMaximized,
        toggleMaximized,
        exitMaximized
    ]);
    // Prevent body scroll when maximized
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isMaximized) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return ()=>{
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [
        isMaximized
    ]);
    // Cleanup timeout on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (exitTimeoutRef.current) {
                clearTimeout(exitTimeoutRef.current);
            }
        };
    }, []);
    return {
        isMaximized,
        isAnimatingOut,
        toggleMaximized,
        enterMaximized,
        exitMaximized
    };
}
}),
"[project]/src/components/dashboard/leaderboard/data-table.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTable",
    ()=>DataTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-table/build/lib/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/table-core/build/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grip-vertical.js [app-ssr] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nuqs/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$leaderboard$2f$columns$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/leaderboard/columns.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$leaderboard$2f$toolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/leaderboard/toolbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stats.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domains.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$maximized$2d$view$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-maximized-view.ts [app-ssr] (ecmascript)");
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
;
;
;
;
;
function areStringArraysEqual(a, b) {
    if (a === b) return true;
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i += 1){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
function areVisibilityStatesEqual(a, b) {
    const keys = new Set([
        ...Object.keys(a),
        ...Object.keys(b)
    ]);
    for (const key of keys){
        if (Boolean(a[key]) !== Boolean(b[key])) return false;
    }
    return true;
}
function DataTable({ data, benchmarks, activeCategory = null, activeCategorySlug = null, totalRows, currentPage, totalPages, pageSize, sortBy, sortDir, searchQuery, license, domain, sourcesFilter, verificationFilter, coverageMode }) {
    const benchmarkWindowSize = 24;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [sorting, setSorting] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>sortBy ? [
            {
                id: sortBy,
                desc: sortDir === "desc"
            }
        ] : []);
    const [columnVisibility, setColumnVisibility] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>({
            inputPrice: false,
            outputPrice: false
        }));
    const [rowSelection, setRowSelection] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({});
    const [columnOrder, setColumnOrder] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    const [draggedColumn, setDraggedColumn] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [summaryView, setSummaryView] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>!activeCategory);
    const [benchmarkWindowPage, setBenchmarkWindowPage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const [queuedParamUpdates, setQueuedParamUpdates] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const { isMaximized, isAnimatingOut, toggleMaximized, exitMaximized } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$maximized$2d$view$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMaximizedView"])();
    const [isDesktopViewport, setIsDesktopViewport] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>{
        if ("TURBOPACK compile-time truthy", 1) return true;
        //TURBOPACK unreachable
        ;
    });
    const setColumnOrderSafely = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((nextOrder)=>{
        setColumnOrder((prev)=>areStringArraysEqual(prev, nextOrder) ? prev : nextOrder);
    }, []);
    const setColumnVisibilitySafely = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((nextVisibility)=>{
        setColumnVisibility((prev)=>areVisibilityStatesEqual(prev, nextVisibility) ? prev : nextVisibility);
    }, []);
    const enqueueSearchParamUpdates = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((updates)=>{
        setQueuedParamUpdates((prev)=>({
                ...prev ?? {},
                ...updates
            }));
    }, []);
    const updateSearchParamState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((updates)=>{
        const nextParams = new URLSearchParams(searchParams.toString());
        Object.entries(updates).forEach(([key, value])=>{
            if (value === null || value === "") {
                nextParams.delete(key);
            } else {
                nextParams.set(key, value);
            }
        });
        const currentQuery = searchParams.toString();
        const query = nextParams.toString();
        if (query === currentQuery) return;
        router.replace(query ? `${pathname}?${query}` : pathname, {
            scroll: false
        });
    }, [
        pathname,
        router,
        searchParams
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!queuedParamUpdates) return;
        updateSearchParamState(queuedParamUpdates);
        setQueuedParamUpdates(null);
    }, [
        queuedParamUpdates,
        updateSearchParamState
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const media = undefined;
        const handleChange = undefined;
    }, []);
    const setSortingSafely = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((nextId, desc = true, syncUrl = true)=>{
        const current = sorting[0];
        if (current?.id === nextId && current.desc === desc) return;
        setSorting([
            {
                id: nextId,
                desc
            }
        ]);
        if (syncUrl) {
            enqueueSearchParamUpdates({
                sort: nextId,
                dir: desc ? "desc" : "asc",
                page: "1"
            });
        }
    }, [
        enqueueSearchParamUpdates,
        sorting
    ]);
    const categories = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>Array.from(new Set(benchmarks.map((benchmark)=>benchmark.category))), [
        benchmarks
    ]);
    const categoryBenchmarksMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const map = new Map();
        categories.forEach((category)=>{
            map.set(category, benchmarks.filter((benchmark)=>benchmark.category === category));
        });
        return map;
    }, [
        benchmarks,
        categories
    ]);
    const avgColumnIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>categories.map((category)=>`avg-${category.toLowerCase().replace(/\s+/g, "-")}`), [
        categories
    ]);
    const summaryAvgColumnIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const preferred = [
            "avg-knowledge",
            "avg-coding",
            "avg-math",
            "avg-reasoning",
            "avg-multimodal"
        ];
        const preferredAvailable = preferred.filter((columnId)=>avgColumnIds.includes(columnId));
        const fallback = avgColumnIds.filter((columnId)=>!preferredAvailable.includes(columnId));
        return [
            ...preferredAvailable,
            ...fallback
        ].slice(0, 5);
    }, [
        avgColumnIds
    ]);
    const groupedBenchmarkIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>categories.flatMap((category)=>(categoryBenchmarksMap.get(category) ?? []).map((benchmark)=>benchmark.id)), [
        categories,
        categoryBenchmarksMap
    ]);
    const canUseBenchmarkWindow = !summaryView && !activeCategory;
    const benchmarkWindowTotalPages = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>Math.max(1, Math.ceil(groupedBenchmarkIds.length / benchmarkWindowSize)), [
        groupedBenchmarkIds.length
    ]);
    const benchmarkWindowIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (!canUseBenchmarkWindow) return groupedBenchmarkIds;
        const start = benchmarkWindowPage * benchmarkWindowSize;
        return groupedBenchmarkIds.slice(start, start + benchmarkWindowSize);
    }, [
        benchmarkWindowPage,
        canUseBenchmarkWindow,
        groupedBenchmarkIds
    ]);
    const coreColumnIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>[
            "select",
            "name",
            "releaseDate",
            "context",
            "coverage"
        ], []);
    const priceColumnIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>[
            "inputPrice",
            "outputPrice"
        ], []);
    const allColumnIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>[
            ...coreColumnIds,
            ...priceColumnIds,
            ...avgColumnIds,
            ...groupedBenchmarkIds
        ], [
        coreColumnIds,
        priceColumnIds,
        avgColumnIds,
        groupedBenchmarkIds
    ]);
    const defaultColumnOrder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>[
            ...coreColumnIds,
            ...priceColumnIds,
            ...avgColumnIds,
            ...groupedBenchmarkIds
        ], [
        coreColumnIds,
        priceColumnIds,
        avgColumnIds,
        groupedBenchmarkIds
    ]);
    const mobileHighlightIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const defaultHighlights = [
            "mmlu",
            "gpqa-diamond",
            "swe-bench-verified",
            "lmarena-elo"
        ];
        if (!activeCategory) {
            return defaultHighlights;
        }
        const categoryBenchmarks = categoryBenchmarksMap.get(activeCategory) ?? [];
        const categoryIds = categoryBenchmarks.slice(0, 4).map((b)=>b.id);
        if (categoryIds.length === 0) {
            return defaultHighlights;
        }
        return categoryIds;
    }, [
        activeCategory,
        categoryBenchmarksMap
    ]);
    const benchmarkById = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>new Map(benchmarks.map((benchmark)=>[
                benchmark.id,
                benchmark
            ])), [
        benchmarks
    ]);
    const [compareIds, setCompareIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useQueryState"])("compare", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseAsArrayOf"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseAsString"]).withDefault([]));
    const compareSetRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](new Set(compareIds || []));
    compareSetRef.current = new Set(compareIds || []);
    const toggleCompare = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((id)=>{
        setCompareIds((prev)=>{
            const current = prev || [];
            if (current.includes(id)) return current.filter((i)=>i !== id);
            if (current.length >= 3) return current; // Max 3
            return [
                ...current,
                id
            ];
        });
    }, [
        setCompareIds
    ]);
    const isCompared = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((id)=>compareSetRef.current.has(id), []);
    const metricsByModel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const metrics = new Map();
        const totalBenchmarks = Math.max(benchmarks.length, 1);
        data.forEach((model)=>{
            let coveredBenchmarks = 0;
            const categoryAverages = {};
            categories.forEach((category)=>{
                const categoryBenchmarks = categoryBenchmarksMap.get(category) ?? [];
                let sum = 0;
                let count = 0;
                categoryBenchmarks.forEach((benchmark)=>{
                    const score = model.scores[benchmark.id]?.score;
                    if (score === null || score === undefined) return;
                    coveredBenchmarks += 1;
                    sum += (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeScore"])(score, benchmark);
                    count += 1;
                });
                categoryAverages[category] = count > 0 ? Number((sum / count).toFixed(1)) : null;
            });
            metrics.set(model.id, {
                coverage: Number((coveredBenchmarks / totalBenchmarks * 100).toFixed(1)),
                categoryAverages
            });
        });
        return metrics;
    }, [
        benchmarks.length,
        categories,
        categoryBenchmarksMap,
        data
    ]);
    const columns = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$leaderboard$2f$columns$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createColumns"])(benchmarks, toggleCompare, isCompared, metricsByModel), [
        benchmarks,
        isCompared,
        metricsByModel,
        toggleCompare
    ]);
    const compareHref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const base = `/compare?models=${(compareIds || []).join(",")}`;
        if (!activeCategorySlug) return base;
        return `${base}&category=${encodeURIComponent(activeCategorySlug)}`;
    }, [
        compareIds,
        activeCategorySlug
    ]);
    const defaultSortId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (activeCategory) {
            const avgColumnId = `avg-${activeCategory.toLowerCase().replace(/\s+/g, "-")}`;
            if (allColumnIds.includes(avgColumnId)) return avgColumnId;
            const categoryBenchmarkIds = (categoryBenchmarksMap.get(activeCategory) ?? []).map((benchmark)=>benchmark.id);
            return categoryBenchmarkIds[0] ?? "coverage";
        }
        if (summaryView) {
            return summaryAvgColumnIds[0] ?? "coverage";
        }
        return benchmarkWindowIds.includes("mmlu") ? "mmlu" : benchmarkWindowIds[0] ?? "coverage";
    }, [
        activeCategory,
        allColumnIds,
        benchmarkWindowIds,
        categoryBenchmarksMap,
        summaryAvgColumnIds,
        summaryView
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!sortBy) return;
        const nextDesc = sortDir === "desc";
        setSorting((prev)=>{
            const current = prev[0];
            if (current?.id === sortBy && current.desc === nextDesc) return prev;
            return [
                {
                    id: sortBy,
                    desc: nextDesc
                }
            ];
        });
    }, [
        sortBy,
        sortDir
    ]);
    const handleSortingChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((updater)=>{
        const next = typeof updater === "function" ? updater(sorting) : updater;
        setSorting(next);
        const nextEntry = next[0];
        if (nextEntry?.id) {
            enqueueSearchParamUpdates({
                sort: nextEntry.id,
                dir: nextEntry.desc ? "desc" : "asc",
                page: "1"
            });
        }
    }, [
        enqueueSearchParamUpdates,
        sorting
    ]);
    // TanStack Table returns mutable helpers by design; this hook is intended usage here.
    const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"])({
        data,
        columns,
        onSortingChange: handleSortingChange,
        getCoreRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCoreRowModel"])(),
        manualSorting: true,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        onColumnOrderChange: setColumnOrder,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnOrder
        }
    });
    const desktopRows = table.getRowModel().rows;
    const selectColumnWidth = table.getColumn("select")?.getSize() ?? 64;
    const nameColumnWidth = table.getColumn("name")?.getSize() ?? 296;
    const getStickyColumnStyle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((columnId)=>{
        if (columnId === "select") {
            return {
                left: 0,
                width: selectColumnWidth,
                minWidth: selectColumnWidth,
                maxWidth: selectColumnWidth
            };
        }
        if (columnId === "name") {
            return {
                left: selectColumnWidth,
                width: nameColumnWidth,
                minWidth: nameColumnWidth,
                maxWidth: nameColumnWidth
            };
        }
        return undefined;
    }, [
        nameColumnWidth,
        selectColumnWidth
    ]);
    // Initialize column order from localStorage or defaults
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && window.innerWidth < 768 && !activeCategory) //TURBOPACK unreachable
        ;
        const savedOrder = localStorage.getItem("columnOrder");
        if (savedOrder) {
            try {
                const parsed = JSON.parse(savedOrder);
                if (Array.isArray(parsed)) {
                    setColumnOrderSafely(parsed);
                }
                return;
            } catch  {
                localStorage.removeItem("columnOrder");
            }
        }
        if (benchmarks.length > 0) {
            setColumnOrderSafely(defaultColumnOrder);
        }
    }, [
        activeCategory,
        benchmarks.length,
        defaultColumnOrder,
        setColumnOrderSafely
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (sorting.length > 0) return;
        setSortingSafely(defaultSortId, true);
    }, [
        defaultSortId,
        setSortingSafely,
        sorting.length
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const maxPage = Math.max(0, benchmarkWindowTotalPages - 1);
        if (benchmarkWindowPage > maxPage) {
            setBenchmarkWindowPage(maxPage);
        }
    }, [
        benchmarkWindowPage,
        benchmarkWindowTotalPages
    ]);
    // Persist column order
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (columnOrder.length > 0) {
            localStorage.setItem("columnOrder", JSON.stringify(columnOrder));
        }
    }, [
        columnOrder
    ]);
    const handleDragStart = (columnId)=>{
        if (columnId === "select") return;
        setDraggedColumn(columnId);
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
    };
    const handleDrop = (targetColumnId)=>{
        if (!draggedColumn || draggedColumn === targetColumnId || targetColumnId === "select") {
            setDraggedColumn(null);
            return;
        }
        const newOrder = [
            ...columnOrder
        ];
        const draggedIdx = newOrder.indexOf(draggedColumn);
        const targetIdx = newOrder.indexOf(targetColumnId);
        newOrder.splice(draggedIdx, 1);
        newOrder.splice(targetIdx, 0, draggedColumn);
        setColumnOrderSafely(newOrder);
        setDraggedColumn(null);
    };
    // Handle Summary View toggle
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (activeCategory) return;
        if (domain) return;
        if (summaryView) {
            const essentialColumns = [
                ...coreColumnIds,
                ...summaryAvgColumnIds
            ];
            const newVisibility = {};
            allColumnIds.forEach((columnId)=>{
                newVisibility[columnId] = essentialColumns.includes(columnId);
            });
            setColumnVisibilitySafely(newVisibility);
            const currentSortId = sorting[0]?.id;
            const sortStillVisible = currentSortId ? newVisibility[currentSortId] !== false : false;
            if (!sortStillVisible) {
                setSortingSafely(defaultSortId, true);
            }
        } else {
            const visibleBenchmarkIds = canUseBenchmarkWindow ? benchmarkWindowIds : groupedBenchmarkIds;
            const newVisibility = {};
            allColumnIds.forEach((columnId)=>{
                newVisibility[columnId] = coreColumnIds.includes(columnId) || visibleBenchmarkIds.includes(columnId);
            });
            setColumnVisibilitySafely(newVisibility);
            const currentSortId = sorting[0]?.id;
            const sortStillVisible = currentSortId ? newVisibility[currentSortId] !== false : false;
            if (!sortStillVisible) {
                setSortingSafely(defaultSortId, true);
            }
        }
    }, [
        activeCategory,
        domain,
        allColumnIds,
        benchmarkWindowIds,
        canUseBenchmarkWindow,
        coreColumnIds,
        defaultSortId,
        groupedBenchmarkIds,
        setColumnVisibilitySafely,
        setSortingSafely,
        sorting,
        summaryAvgColumnIds,
        summaryView
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!activeCategory) return;
        const categoryBenchmarks = categoryBenchmarksMap.get(activeCategory) ?? [];
        const categoryBenchmarkIds = categoryBenchmarks.map((benchmark)=>benchmark.id);
        const avgColumnId = `avg-${activeCategory.toLowerCase().replace(/\s+/g, "-")}`;
        setSummaryView(false);
        const visible = new Set([
            ...coreColumnIds,
            avgColumnId,
            ...categoryBenchmarkIds
        ]);
        const newVisibility = {};
        allColumnIds.forEach((columnId)=>{
            newVisibility[columnId] = visible.has(columnId);
        });
        setColumnVisibilitySafely(newVisibility);
        const sortingId = allColumnIds.includes(avgColumnId) ? avgColumnId : categoryBenchmarkIds[0] ?? "mmlu";
        setSortingSafely(sortingId, true);
        setColumnOrderSafely([
            ...coreColumnIds,
            avgColumnId,
            ...categoryBenchmarkIds
        ]);
    }, [
        activeCategory,
        allColumnIds,
        categoryBenchmarksMap,
        coreColumnIds,
        setColumnOrderSafely,
        setColumnVisibilitySafely,
        setSortingSafely
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!domain) return;
        if (activeCategory) return;
        const domainBenchmarkIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBenchmarkIdsForDomain"])(domain);
        const domainDef = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["domainDefinitions"].find((d)=>d.id === domain);
        const avgColumnIds = domainDef?.categories.map((cat)=>`avg-${cat.toLowerCase().replace(/\s+/g, "-")}`) ?? [];
        setSummaryView(false);
        const visible = new Set([
            ...coreColumnIds,
            ...avgColumnIds,
            ...domainBenchmarkIds
        ]);
        const newVisibility = {};
        allColumnIds.forEach((columnId)=>{
            newVisibility[columnId] = visible.has(columnId);
        });
        setColumnVisibilitySafely(newVisibility);
        const sortingId = avgColumnIds.find((id)=>allColumnIds.includes(id)) ?? domainBenchmarkIds[0] ?? "coverage";
        setSortingSafely(sortingId, true);
        setColumnOrderSafely([
            ...coreColumnIds,
            ...avgColumnIds,
            ...domainBenchmarkIds
        ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        domain,
        activeCategory,
        allColumnIds,
        coreColumnIds
    ]);
    const resetLayout = ()=>{
        setBenchmarkWindowPage(0);
        setColumnOrderSafely(defaultColumnOrder);
        localStorage.removeItem("columnOrder");
        table.resetColumnVisibility();
    };
    const handleSearchQueryChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((nextValue)=>{
        const normalized = nextValue.trim();
        if (normalized === searchQuery) return;
        enqueueSearchParamUpdates({
            q: normalized || null,
            page: "1"
        });
    }, [
        enqueueSearchParamUpdates,
        searchQuery
    ]);
    const handleLicenseChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((nextLicense)=>{
        if (nextLicense === license) return;
        enqueueSearchParamUpdates({
            license: nextLicense === "all" ? null : nextLicense,
            page: "1"
        });
    }, [
        enqueueSearchParamUpdates,
        license
    ]);
    const handleClearDomain = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        enqueueSearchParamUpdates({
            domain: null,
            page: "1"
        });
    }, [
        enqueueSearchParamUpdates
    ]);
    const handleSourcesFilterChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((nextSources)=>{
        enqueueSearchParamUpdates({
            source: nextSources.length > 0 ? nextSources.join(",") : null,
            page: "1"
        });
    }, [
        enqueueSearchParamUpdates
    ]);
    const handleVerificationFilterChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((nextVerification)=>{
        enqueueSearchParamUpdates({
            verification: nextVerification.length > 0 ? nextVerification.join(",") : null,
            page: "1"
        });
    }, [
        enqueueSearchParamUpdates
    ]);
    const handleCoverageModeChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((nextMode)=>{
        if (nextMode === coverageMode) return;
        enqueueSearchParamUpdates({
            coverageMode: nextMode === "assisted" ? null : nextMode,
            page: "1"
        });
    }, [
        coverageMode,
        enqueueSearchParamUpdates
    ]);
    const goToPage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((page)=>{
        const safePage = Math.max(1, Math.min(totalPages, page));
        if (safePage === currentPage) return;
        enqueueSearchParamUpdates({
            page: String(safePage)
        });
    }, [
        currentPage,
        enqueueSearchParamUpdates,
        totalPages
    ]);
    const handlePageSizeChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((newPageSize)=>{
        const size = parseInt(newPageSize, 10);
        if (size === pageSize) return;
        enqueueSearchParamUpdates({
            pageSize: String(size),
            page: "1"
        });
    }, [
        enqueueSearchParamUpdates,
        pageSize
    ]);
    const pageSizeOptions = [
        10,
        25,
        50,
        100
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 pb-20 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sr-only",
                "aria-live": "polite",
                "aria-atomic": "true",
                children: searchQuery ? `Found ${totalRows} ${totalRows === 1 ? 'model' : 'models'} matching "${searchQuery}"` : `${totalRows} models in registry`
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                lineNumber: 666,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$leaderboard$2f$toolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeaderboardToolbar"], {
                table: table,
                compareIds: compareIds || [],
                compareHref: compareHref,
                searchQuery: searchQuery,
                onSearchQueryChange: handleSearchQueryChange,
                resetLayout: resetLayout,
                summaryView: summaryView,
                setSummaryView: setSummaryView,
                license: license,
                onLicenseChange: handleLicenseChange,
                domain: domain,
                onClearDomain: handleClearDomain,
                sourcesFilter: sourcesFilter,
                onSourcesFilterChange: handleSourcesFilterChange,
                verificationFilter: verificationFilter,
                onVerificationFilterChange: handleVerificationFilterChange,
                coverageMode: coverageMode,
                onCoverageModeChange: handleCoverageModeChange,
                isMaximized: isMaximized,
                onToggleMaximized: toggleMaximized
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                lineNumber: 671,
                columnNumber: 7
            }, this),
            coverageMode === "assisted" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "px-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground/70",
                children: "Coverage-assisted mode enabled: estimated family-proxy scores are marked with ~"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                lineNumber: 695,
                columnNumber: 9
            }, this),
            !isDesktopViewport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: table.getRowModel().rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "surface-card rounded-lg p-6 text-center text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground",
                    children: "No systems match current filters"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                    lineNumber: 703,
                    columnNumber: 13
                }, this) : table.getRowModel().rows.map((row)=>{
                    const model = row.original;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "surface-card rounded-lg p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/model/${model.id}`,
                                                className: "font-display text-base font-bold tracking-tight text-foreground transition-colors hover:text-primary",
                                                children: model.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                lineNumber: 714,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs font-mono tracking-wide text-muted-foreground",
                                                children: [
                                                    model.provider,
                                                    " · ",
                                                    model.releaseDate
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                lineNumber: 717,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                        lineNumber: 713,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-label": `Toggle compare for ${model.name}`,
                                        onClick: ()=>toggleCompare(model.id),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("min-h-11 min-w-11 rounded-md border px-2 text-xs font-semibold", compareIds.includes(model.id) ? "border-primary/40 bg-primary/10 text-primary" : "border-border bg-background text-muted-foreground"),
                                        children: compareIds.includes(model.id) ? "Added" : "Compare"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                        lineNumber: 721,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                lineNumber: 712,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 grid grid-cols-2 gap-2",
                                children: mobileHighlightIds.map((benchmarkId)=>{
                                    const benchmark = benchmarkById.get(benchmarkId);
                                    if (!benchmark) return null;
                                    const score = model.scores[benchmarkId]?.score;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "data-module rounded-md px-2.5 py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "truncate text-[11px] font-mono tracking-wide text-muted-foreground",
                                                children: benchmark.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                lineNumber: 744,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-sm font-bold tabular-nums text-foreground",
                                                children: score === null || score === undefined ? "--" : benchmark.maxScore > 100 ? score.toFixed(0) : score.toFixed(1)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                lineNumber: 745,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, benchmarkId, true, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                        lineNumber: 743,
                                        columnNumber: 25
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                lineNumber: 736,
                                columnNumber: 19
                            }, this)
                        ]
                    }, row.id, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                        lineNumber: 711,
                        columnNumber: 17
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                lineNumber: 701,
                columnNumber: 9
            }, this),
            isDesktopViewport && (isMaximized || isAnimatingOut) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    animation: isAnimatingOut ? 'fadeOut 200ms ease-in forwards' : 'fadeIn 200ms ease-out'
                },
                className: "jsx-c15e3ee3228f89cf" + " " + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-[9999] bg-background flex flex-col", isAnimatingOut && "animate-out fade-out duration-200") || ""),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        id: "c15e3ee3228f89cf",
                        children: "@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes slideDown{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@keyframes slideUp{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-10px)}}@keyframes scaleIn{0%{opacity:0;transform:scale(.98)}to{opacity:1;transform:scale(1)}}@keyframes scaleOut{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.98)}}"
                    }, void 0, false, void 0, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animation: isAnimatingOut ? 'slideUp 200ms ease-in forwards' : 'slideDown 300ms ease-out 50ms backwards'
                        },
                        className: "jsx-c15e3ee3228f89cf" + " " + "flex flex-col border-b border-border bg-card shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c15e3ee3228f89cf" + " " + "flex items-center justify-between px-6 py-3 border-b border-border/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c15e3ee3228f89cf" + " " + "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-c15e3ee3228f89cf" + " " + "font-display text-lg font-bold tracking-tight",
                                                children: "Leaderboard"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                lineNumber: 813,
                                                columnNumber: 17
                                            }, this),
                                            searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-c15e3ee3228f89cf" + " " + "text-sm text-muted-foreground",
                                                children: [
                                                    'Search: "',
                                                    searchQuery,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                lineNumber: 815,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                        lineNumber: 812,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: exitMaximized,
                                        className: "rounded-full border-border/60 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-4 w-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                lineNumber: 826,
                                                columnNumber: 17
                                            }, this),
                                            "Exit View",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-c15e3ee3228f89cf" + " " + "ml-2 text-xs text-muted-foreground",
                                                children: "(Esc)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                lineNumber: 828,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                        lineNumber: 820,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                lineNumber: 811,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c15e3ee3228f89cf" + " " + "px-6 py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$leaderboard$2f$toolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeaderboardToolbar"], {
                                    table: table,
                                    compareIds: compareIds || [],
                                    compareHref: compareHref,
                                    searchQuery: searchQuery,
                                    onSearchQueryChange: handleSearchQueryChange,
                                    resetLayout: resetLayout,
                                    summaryView: summaryView,
                                    setSummaryView: setSummaryView,
                                    license: license,
                                    onLicenseChange: handleLicenseChange,
                                    domain: domain,
                                    onClearDomain: handleClearDomain,
                                    sourcesFilter: sourcesFilter,
                                    onSourcesFilterChange: handleSourcesFilterChange,
                                    verificationFilter: verificationFilter,
                                    onVerificationFilterChange: handleVerificationFilterChange,
                                    coverageMode: coverageMode,
                                    onCoverageModeChange: handleCoverageModeChange,
                                    isMaximized: isMaximized,
                                    onToggleMaximized: toggleMaximized
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                    lineNumber: 834,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                lineNumber: 833,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                        lineNumber: 802,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animation: isAnimatingOut ? 'scaleOut 200ms ease-in forwards' : 'scaleIn 300ms ease-out 100ms backwards'
                        },
                        className: "jsx-c15e3ee3228f89cf" + " " + "flex-1 overflow-hidden p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c15e3ee3228f89cf" + " " + "relative h-full overflow-auto rounded-2xl border border-border bg-card shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c15e3ee3228f89cf" + " " + "pointer-events-none absolute inset-y-0 left-0 z-30 w-8 bg-gradient-to-r from-card to-transparent opacity-0 transition-opacity group-hover/table:opacity-100"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                    lineNumber: 869,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c15e3ee3228f89cf" + " " + "pointer-events-none absolute inset-y-0 right-0 z-30 w-8 bg-gradient-to-l from-card to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                    lineNumber: 870,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                            className: "sticky top-0 z-20 border-b border-border bg-card",
                                            children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    className: "border-border/40 hover:bg-transparent h-12",
                                                    children: headerGroup.headers.map((header)=>{
                                                        const isDraggable = header.id !== "select";
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/head h-12 px-5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/60 transition-all duration-200", isDraggable && "cursor-grab active:cursor-grabbing", draggedColumn === header.id && "opacity-20", draggedColumn && draggedColumn !== header.id && isDraggable && "hover:bg-muted/40", header.id === "select" && "z-40 bg-card md:sticky", header.id === "name" && "z-40 bg-card md:sticky border-r border-border shadow-[4px_0_8px_-4px_rgba(0,0,0,0.1)]"),
                                                            style: getStickyColumnStyle(header.id),
                                                            draggable: isDraggable,
                                                            onDragStart: ()=>handleDragStart(header.id),
                                                            onDragOver: handleDragOver,
                                                            onDrop: ()=>handleDrop(header.id),
                                                            onDragEnd: ()=>setDraggedColumn(null),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-c15e3ee3228f89cf" + " " + "flex items-center gap-1.5",
                                                                children: [
                                                                    isDraggable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                                                        className: "-ml-1 h-3 w-3 opacity-0 transition-opacity group-hover/head:opacity-30"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                                        lineNumber: 900,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    header.isPlaceholder ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(header.column.columnDef.header, header.getContext())
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                                lineNumber: 898,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, header.id, false, {
                                                            fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                            lineNumber: 881,
                                                            columnNumber: 27
                                                        }, this);
                                                    })
                                                }, headerGroup.id, false, {
                                                    fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                    lineNumber: 874,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                            lineNumber: 872,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                            children: desktopRows?.length ? desktopRows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    "data-state": row.getIsSelected() && "selected",
                                                    className: "group/row relative h-14 border-border/30 transition-colors hover:bg-muted/30 data-[state=selected]:bg-muted/60",
                                                    children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative z-10 px-5 py-3 align-middle transition-colors", cell.column.id === "select" && "z-40 bg-card md:sticky", cell.column.id === "name" && "z-40 bg-card md:sticky border-r border-border shadow-[4px_0_8px_-4px_rgba(0,0,0,0.1)]"),
                                                            style: getStickyColumnStyle(cell.column.id),
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(cell.column.columnDef.cell, cell.getContext())
                                                        }, cell.id, false, {
                                                            fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                            lineNumber: 924,
                                                            columnNumber: 27
                                                        }, this))
                                                }, row.id, false, {
                                                    fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                    lineNumber: 918,
                                                    columnNumber: 23
                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    colSpan: columns.length,
                                                    className: "h-48 text-center font-mono text-muted-foreground/40 uppercase tracking-[0.2em] text-[10px]",
                                                    children: "No systems match criteria"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                    lineNumber: 940,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                lineNumber: 939,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                            lineNumber: 915,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                    lineNumber: 871,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                            lineNumber: 868,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                        lineNumber: 860,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c15e3ee3228f89cf" + " " + "flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-border bg-card shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c15e3ee3228f89cf" + " " + "flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-c15e3ee3228f89cf",
                                        children: [
                                            totalRows,
                                            " Models Registered"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                        lineNumber: 956,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-c15e3ee3228f89cf" + " " + "h-1 w-1 rounded-full bg-border"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                        lineNumber: 957,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-c15e3ee3228f89cf",
                                        children: [
                                            benchmarks.length,
                                            " Benchmarks Active"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                        lineNumber: 958,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                lineNumber: 955,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c15e3ee3228f89cf" + " " + "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c15e3ee3228f89cf" + " " + "flex items-center gap-2 mr-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-c15e3ee3228f89cf" + " " + "text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50",
                                                children: "Show"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                lineNumber: 964,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                value: String(pageSize),
                                                onValueChange: handlePageSizeChange,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "h-7 w-[70px] rounded-full border-border/60 bg-muted/30 text-[10px] font-bold uppercase tracking-wider focus:ring-1 focus:ring-primary/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                            lineNumber: 967,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                        lineNumber: 966,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        align: "end",
                                                        className: "rounded-xl border-border bg-card min-w-[80px]",
                                                        children: pageSizeOptions.map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: String(size),
                                                                className: "text-xs font-medium cursor-pointer rounded-lg focus:bg-primary/5",
                                                                children: size
                                                            }, size, false, {
                                                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                                lineNumber: 971,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                        lineNumber: 969,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                lineNumber: 965,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-c15e3ee3228f89cf" + " " + "text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50",
                                                children: "/ page"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                lineNumber: 981,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                        lineNumber: 963,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c15e3ee3228f89cf" + " " + "mr-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-c15e3ee3228f89cf",
                                            children: [
                                                "Page ",
                                                currentPage,
                                                " of ",
                                                totalPages
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                            lineNumber: 985,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                        lineNumber: 984,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "h-8 w-8 rounded-full p-0 hover:bg-muted",
                                        onClick: ()=>goToPage(currentPage - 1),
                                        disabled: currentPage <= 1,
                                        "aria-label": "Go to previous page",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                            lineNumber: 995,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                        lineNumber: 987,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "h-8 w-8 rounded-full p-0 hover:bg-muted",
                                        onClick: ()=>goToPage(currentPage + 1),
                                        disabled: currentPage >= totalPages,
                                        "aria-label": "Go to next page",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                            lineNumber: 1005,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                        lineNumber: 997,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                lineNumber: 961,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                        lineNumber: 954,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: exitMaximized,
                        "aria-label": "Exit maximized view",
                        className: "jsx-c15e3ee3228f89cf" + " " + "fixed bottom-6 right-6 z-[10000] flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border shadow-lg hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-all duration-200 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                lineNumber: 1016,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-c15e3ee3228f89cf" + " " + "absolute right-full mr-3 px-2 py-1 bg-card border border-border rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
                                children: "Exit (Esc)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                lineNumber: 1017,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                        lineNumber: 1011,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                lineNumber: 765,
                columnNumber: 9
            }, this),
            isDesktopViewport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative hidden max-h-[70vh] overflow-auto rounded-2xl border border-border bg-card md:block shadow-sm", (isMaximized || isAnimatingOut) && "md:hidden"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-y-0 left-0 z-30 w-8 bg-gradient-to-r from-card to-transparent opacity-0 transition-opacity group-hover/table:opacity-100"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                        lineNumber: 1030,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-y-0 right-0 z-30 w-8 bg-gradient-to-l from-card to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                        lineNumber: 1031,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                className: "sticky top-0 z-20 border-b border-border bg-card",
                                children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                        className: "border-border/40 hover:bg-transparent h-12",
                                        children: headerGroup.headers.map((header)=>{
                                            const isDraggable = header.id !== "select";
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/head h-12 px-5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/60 transition-all duration-200", isDraggable && "cursor-grab active:cursor-grabbing", draggedColumn === header.id && "opacity-20", draggedColumn && draggedColumn !== header.id && isDraggable && "hover:bg-muted/40", header.id === "select" && "z-40 bg-card md:sticky", header.id === "name" && "z-40 bg-card md:sticky border-r border-border shadow-[4px_0_8px_-4px_rgba(0,0,0,0.1)]"),
                                                style: getStickyColumnStyle(header.id),
                                                draggable: isDraggable,
                                                onDragStart: ()=>handleDragStart(header.id),
                                                onDragOver: handleDragOver,
                                                onDrop: ()=>handleDrop(header.id),
                                                onDragEnd: ()=>setDraggedColumn(null),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        isDraggable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                                            className: "-ml-1 h-3 w-3 opacity-0 transition-opacity group-hover/head:opacity-30"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                            lineNumber: 1061,
                                                            columnNumber: 27
                                                        }, this),
                                                        header.isPlaceholder ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(header.column.columnDef.header, header.getContext())
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                    lineNumber: 1059,
                                                    columnNumber: 23
                                                }, this)
                                            }, header.id, false, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                lineNumber: 1042,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, headerGroup.id, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                        lineNumber: 1035,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                lineNumber: 1033,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                children: desktopRows?.length ? desktopRows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                        "data-state": row.getIsSelected() && "selected",
                                        className: "group/row relative h-14 border-border/30 transition-colors hover:bg-muted/30 data-[state=selected]:bg-muted/60",
                                        children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative z-10 px-5 py-3 align-middle transition-colors", cell.column.id === "select" && "z-40 bg-card md:sticky", cell.column.id === "name" && "z-40 bg-card md:sticky border-r border-border shadow-[4px_0_8px_-4px_rgba(0,0,0,0.1)]"),
                                                style: getStickyColumnStyle(cell.column.id),
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(cell.column.columnDef.cell, cell.getContext())
                                            }, cell.id, false, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                lineNumber: 1085,
                                                columnNumber: 21
                                            }, this))
                                    }, row.id, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                        lineNumber: 1079,
                                        columnNumber: 17
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                        colSpan: columns.length,
                                        className: "h-48 text-center font-mono text-muted-foreground/40 uppercase tracking-[0.2em] text-[10px]",
                                        children: "No systems match criteria"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                        lineNumber: 1101,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                    lineNumber: 1100,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                lineNumber: 1076,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                        lineNumber: 1032,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                lineNumber: 1026,
                columnNumber: 9
            }, this),
            isDesktopViewport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-wrap items-center justify-between gap-4 px-2 py-2", (isMaximized || isAnimatingOut) && "md:hidden"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    totalRows,
                                    " Models Registered"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                lineNumber: 1121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-1 w-1 rounded-full bg-border"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                lineNumber: 1122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    benchmarks.length,
                                    " Benchmarks Active"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                lineNumber: 1123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                        lineNumber: 1120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mr-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50",
                                        children: "Show"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                        lineNumber: 1129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        value: String(pageSize),
                                        onValueChange: handlePageSizeChange,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "h-7 w-[70px] rounded-full border-border/60 bg-muted/30 text-[10px] font-bold uppercase tracking-wider focus:ring-1 focus:ring-primary/20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                    lineNumber: 1132,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                lineNumber: 1131,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                align: "end",
                                                className: "rounded-xl border-border bg-card min-w-[80px]",
                                                children: pageSizeOptions.map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: String(size),
                                                        className: "text-xs font-medium cursor-pointer rounded-lg focus:bg-primary/5",
                                                        children: size
                                                    }, size, false, {
                                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                        lineNumber: 1136,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                                lineNumber: 1134,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                        lineNumber: 1130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50",
                                        children: "/ page"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                        lineNumber: 1146,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                lineNumber: 1128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mr-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Page ",
                                        currentPage,
                                        " of ",
                                        totalPages
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                    lineNumber: 1150,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                lineNumber: 1149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                className: "h-8 w-8 rounded-full p-0 hover:bg-muted",
                                onClick: ()=>goToPage(currentPage - 1),
                                disabled: currentPage <= 1,
                                "aria-label": "Go to previous page",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                    lineNumber: 1160,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                lineNumber: 1152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                className: "h-8 w-8 rounded-full p-0 hover:bg-muted",
                                onClick: ()=>goToPage(currentPage + 1),
                                disabled: currentPage >= totalPages,
                                "aria-label": "Go to next page",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                    lineNumber: 1170,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                                lineNumber: 1162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                        lineNumber: 1126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                lineNumber: 1116,
                columnNumber: 9
            }, this),
            compareIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-4 inset-x-4 z-50 md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    asChild: true,
                    className: "h-12 w-full text-sm font-semibold shadow-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: compareHref,
                        children: [
                            "Open Compare (",
                            compareIds.length,
                            "/3)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                        lineNumber: 1179,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                    lineNumber: 1178,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
                lineNumber: 1177,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/leaderboard/data-table.tsx",
        lineNumber: 665,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/dashboard/leaderboard/index.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$leaderboard$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/leaderboard/data-table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$leaderboard$2f$columns$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/leaderboard/columns.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$leaderboard$2f$toolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/leaderboard/toolbar.tsx [app-ssr] (ecmascript)");
;
;
;
}),
"[project]/src/lib/categories.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$benchmarks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/benchmarks.ts [app-ssr] (ecmascript)");
;
const ALL_CATEGORY_SLUG = "all";
const benchmarkCategories = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$benchmarks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["benchmarks"].map((benchmark)=>benchmark.category)));
function categoryToSlug(category) {
    return category.toLowerCase().replace(/\s+/g, "-");
}
function slugToCategory(slug) {
    if (!slug || slug === ALL_CATEGORY_SLUG) return null;
    return benchmarkCategories.find((category)=>categoryToSlug(category) === slug) ?? null;
}
}),
"[project]/src/lib/leaderboard-query.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultSortBy",
    ()=>getDefaultSortBy,
    "getValidSortIds",
    ()=>getValidSortIds,
    "parseLeaderboardQueryParams",
    ()=>parseLeaderboardQueryParams,
    "queryLeaderboardModels",
    ()=>queryLeaderboardModels
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/categories.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stats.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domains.ts [app-ssr] (ecmascript)");
;
;
;
const coverageMemo = new WeakMap();
const COVERAGE_ASSIST_ALLOWLIST = new Set([
    "gpt-5-2"
]);
function readParam(searchParams, key) {
    if (searchParams instanceof URLSearchParams) {
        return searchParams.get(key) ?? undefined;
    }
    const value = searchParams[key];
    if (Array.isArray(value)) return value[0];
    return value ?? undefined;
}
function parseIntParam(value, fallback, min, max) {
    const parsed = Number.parseInt(value ?? "", 10);
    if (!Number.isFinite(parsed)) return fallback;
    return Math.max(min, Math.min(max, parsed));
}
function getValidSortIds(benchmarks) {
    const sortIds = new Set([
        "coverage",
        "releaseDate",
        "context"
    ]);
    for (const benchmark of benchmarks){
        sortIds.add(benchmark.id);
        sortIds.add(`avg-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoryToSlug"])(benchmark.category)}`);
    }
    return sortIds;
}
function getDefaultSortBy(activeCategory) {
    if (activeCategory) {
        return `avg-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoryToSlug"])(activeCategory)}`;
    }
    return "coverage";
}
function parseLeaderboardQueryParams(searchParams, benchmarks, options = {}) {
    const query = (readParam(searchParams, "q") ?? "").trim();
    const requestedSort = readParam(searchParams, "sort") ?? "";
    const requestedDir = readParam(searchParams, "dir");
    const requestedLicense = readParam(searchParams, "license") ?? "all";
    const requestedDomain = readParam(searchParams, "domain") ?? "";
    const requestedSources = readParam(searchParams, "source") ?? "";
    const requestedVerification = readParam(searchParams, "verification") ?? "";
    const requestedCoverageMode = readParam(searchParams, "coverageMode") ?? "assisted";
    const validSortIds = getValidSortIds(benchmarks);
    const fallbackSort = getDefaultSortBy(options.activeCategory ?? null);
    const sortBy = validSortIds.has(requestedSort) ? requestedSort : fallbackSort;
    const sortDir = requestedDir === "asc" ? "asc" : "desc";
    const page = parseIntParam(readParam(searchParams, "page"), 1, 1, 10_000);
    const pageSize = parseIntParam(readParam(searchParams, "pageSize"), 10, 5, 100);
    const license = requestedLicense === "open" || requestedLicense === "proprietary" ? requestedLicense : "all";
    const domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slugToDomain"])(requestedDomain);
    const sources = requestedSources ? requestedSources.split(",").map((s)=>s.trim()).filter(Boolean) : [];
    const verification = requestedVerification ? requestedVerification.split(",").map((v)=>v.trim()).filter(Boolean) : [];
    const coverageMode = requestedCoverageMode === "strict" ? "strict" : "assisted";
    return {
        query,
        sortBy,
        sortDir,
        page,
        pageSize,
        license,
        domain,
        category: options.activeCategory ?? null,
        sources,
        verification,
        coverageMode
    };
}
function countAvailableScores(model, benchmarks) {
    let count = 0;
    for (const benchmark of benchmarks){
        const score = model.scores[benchmark.id]?.score;
        if (score !== null && score !== undefined) count += 1;
    }
    return count;
}
function selectProxyVariant(baseModel, benchmarks) {
    const variants = baseModel.variants ?? [];
    if (variants.length === 0) return null;
    const viable = variants.filter((variant)=>countAvailableScores(variant, benchmarks) > 0);
    if (viable.length === 0) return null;
    const exactHigh = viable.find((variant)=>variant.id === `${baseModel.id}-high`);
    if (exactHigh) return exactHigh;
    const high = viable.find((variant)=>/(^|-)high$/.test(variant.id) || /\bhigh\b/i.test(variant.name));
    if (high) return high;
    return [
        ...viable
    ].sort((a, b)=>countAvailableScores(b, benchmarks) - countAvailableScores(a, benchmarks))[0] ?? null;
}
function applyCoverageAssist(models, benchmarks, mode) {
    if (mode === "strict") return models;
    return models.map((model)=>{
        if (!COVERAGE_ASSIST_ALLOWLIST.has(model.id)) return model;
        const proxyVariant = selectProxyVariant(model, benchmarks);
        if (!proxyVariant) return model;
        const observedCount = countAvailableScores(model, benchmarks);
        const proxyCount = countAvailableScores(proxyVariant, benchmarks);
        if (proxyCount <= observedCount) return model;
        const mergedScores = {
            ...model.scores
        };
        for (const benchmark of benchmarks){
            const existing = model.scores[benchmark.id]?.score;
            if (existing !== null && existing !== undefined) continue;
            const proxyScore = proxyVariant.scores[benchmark.id];
            if (!proxyScore || proxyScore.score === null || proxyScore.score === undefined) continue;
            mergedScores[benchmark.id] = {
                ...proxyScore,
                verified: false,
                verificationLevel: "estimated",
                sourceId: "model-family-proxy",
                inheritedFrom: proxyVariant.id,
                notes: `Estimated from ${proxyVariant.name} (${proxyVariant.id})`
            };
        }
        return {
            ...model,
            scores: mergedScores
        };
    });
}
function getCoverageMap(models, benchmarks) {
    const byBenchmark = coverageMemo.get(models);
    const cached = byBenchmark?.get(benchmarks);
    if (cached) return cached;
    const map = new Map();
    for (const model of models){
        map.set(model.id, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateCoverage"])(model, benchmarks));
    }
    const nextByBenchmark = byBenchmark ?? new WeakMap();
    nextByBenchmark.set(benchmarks, map);
    if (!byBenchmark) {
        coverageMemo.set(models, nextByBenchmark);
    }
    return map;
}
function getSortValue(model, sortBy, benchmarks, context) {
    if (sortBy === "coverage") {
        return context.coverageByModelId?.get(model.id) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateCoverage"])(model, benchmarks);
    }
    if (sortBy === "releaseDate") {
        const timestamp = Date.parse(model.releaseDate);
        return Number.isNaN(timestamp) ? null : timestamp;
    }
    if (sortBy === "context") {
        return model.specs.contextWindow;
    }
    if (sortBy.startsWith("avg-")) {
        const category = context.categoryForSort;
        if (!category) return null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateCategoryScore"])(model, benchmarks, category);
    }
    const benchmark = context.benchmarkById.get(sortBy);
    if (!benchmark) return null;
    const score = model.scores[sortBy]?.score;
    if (score === null || score === undefined) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stats$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeScore"])(score, benchmark);
}
function matchesQuery(model, query) {
    if (!query) return true;
    const haystack = `${model.name} ${model.id} ${model.provider}`.toLowerCase();
    return haystack.includes(query.toLowerCase());
}
function matchesLicense(model, license) {
    if (license === "all") return true;
    if (license === "open") return model.isOpenSource;
    if (license === "proprietary") return !model.isOpenSource;
    return true;
}
function matchesDomain(model, domain) {
    if (!domain) return true;
    const domainBenchmarkIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBenchmarkIdsForDomain"])(domain);
    return domainBenchmarkIds.some((id)=>{
        const score = model.scores[id]?.score;
        return score !== null && score !== undefined;
    });
}
function matchesCategory(model, category, benchmarks) {
    if (!category) return true;
    const categoryBenchmarkIds = benchmarks.filter((b)=>b.category === category).map((b)=>b.id);
    return categoryBenchmarkIds.some((id)=>{
        const score = model.scores[id]?.score;
        return score !== null && score !== undefined;
    });
}
function getScopedBenchmarkIds(benchmarks, params) {
    const categoryScoped = params.category ? new Set(benchmarks.filter((benchmark)=>benchmark.category === params.category).map((benchmark)=>benchmark.id)) : null;
    const domainScoped = params.domain ? new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBenchmarkIdsForDomain"])(params.domain)) : null;
    if (!categoryScoped && !domainScoped) return null;
    if (categoryScoped && !domainScoped) return categoryScoped;
    if (!categoryScoped && domainScoped) return domainScoped;
    const intersection = new Set();
    for (const benchmarkId of categoryScoped){
        if (domainScoped.has(benchmarkId)) intersection.add(benchmarkId);
    }
    return intersection;
}
function matchesSources(model, sources, scopedBenchmarkIds) {
    if (sources.length === 0) return true;
    return Object.entries(model.scores).some(([benchmarkId, scoreEntry])=>{
        if (scopedBenchmarkIds && !scopedBenchmarkIds.has(benchmarkId)) return false;
        if (scoreEntry.score === null || scoreEntry.score === undefined) return false;
        if (!scoreEntry.sourceId) return false;
        return sources.includes(scoreEntry.sourceId);
    });
}
function matchesVerification(model, verification, scopedBenchmarkIds) {
    if (verification.length === 0) return true;
    return Object.entries(model.scores).some(([benchmarkId, scoreEntry])=>{
        if (scopedBenchmarkIds && !scopedBenchmarkIds.has(benchmarkId)) return false;
        if (scoreEntry.score === null || scoreEntry.score === undefined) return false;
        const level = scoreEntry.verificationLevel ?? (scoreEntry.verified ? "provider" : null);
        if (!level) return false;
        return verification.includes(level);
    });
}
function queryLeaderboardModels(models, benchmarks, params) {
    const candidateModels = applyCoverageAssist(models, benchmarks, params.coverageMode);
    const directionFactor = params.sortDir === "asc" ? 1 : -1;
    const scopedBenchmarkIds = getScopedBenchmarkIds(benchmarks, params);
    const filtered = candidateModels.filter((model)=>matchesQuery(model, params.query) && matchesLicense(model, params.license) && matchesDomain(model, params.domain) && matchesCategory(model, params.category, benchmarks) && matchesSources(model, params.sources, scopedBenchmarkIds) && matchesVerification(model, params.verification, scopedBenchmarkIds));
    const benchmarkById = new Map(benchmarks.map((benchmark)=>[
            benchmark.id,
            benchmark
        ]));
    const categoryForSort = params.sortBy.startsWith("avg-") ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slugToCategory"])(params.sortBy.replace(/^avg-/, "")) : null;
    const coverageByModelId = params.sortBy === "coverage" ? getCoverageMap(candidateModels, benchmarks) : undefined;
    const sortValues = new Map();
    for (const model of filtered){
        sortValues.set(model.id, getSortValue(model, params.sortBy, benchmarks, {
            benchmarkById,
            coverageByModelId,
            categoryForSort
        }));
    }
    const sorted = [
        ...filtered
    ].sort((a, b)=>{
        const aValue = sortValues.get(a.id);
        const bValue = sortValues.get(b.id);
        const aMissing = aValue === null || aValue === undefined;
        const bMissing = bValue === null || bValue === undefined;
        if (aMissing && bMissing) {
            return a.name.localeCompare(b.name);
        }
        if (aMissing) return 1;
        if (bMissing) return -1;
        if (aValue !== bValue) {
            return aValue < bValue ? -1 * directionFactor : 1 * directionFactor;
        }
        return a.name.localeCompare(b.name);
    });
    const total = sorted.length;
    const totalPages = Math.max(1, Math.ceil(total / params.pageSize));
    const page = Math.min(params.page, totalPages);
    const offset = (page - 1) * params.pageSize;
    const rows = sorted.slice(offset, offset + params.pageSize);
    return {
        rows,
        total,
        totalPages,
        page,
        pageSize: params.pageSize,
        sortBy: params.sortBy,
        sortDir: params.sortDir,
        query: params.query,
        license: params.license,
        domain: params.domain,
        category: params.category,
        sources: params.sources,
        verification: params.verification,
        coverageMode: params.coverageMode
    };
}
}),
"[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("animate-pulse rounded-md bg-primary/10", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/skeleton.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/dashboard/client-leaderboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientLeaderboard",
    ()=>ClientLeaderboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$leaderboard$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/dashboard/leaderboard/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$leaderboard$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/leaderboard/data-table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$leaderboard$2d$query$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/leaderboard-query.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function LoadingShell() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 rounded-xl border border-border/40 bg-card/30 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-8 w-48"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/client-leaderboard.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-8 w-64"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/client-leaderboard.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/client-leaderboard.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-10 w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/client-leaderboard.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-16 w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/client-leaderboard.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-16 w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/client-leaderboard.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-16 w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/client-leaderboard.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/client-leaderboard.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/client-leaderboard.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
function ClientLeaderboardInner({ models, benchmarks }) {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // Convert URLSearchParams to plain object
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const plainParams = {};
        searchParams.forEach((value, key)=>{
            plainParams[key] = value;
        });
        return plainParams;
    }, [
        searchParams
    ]);
    // Parse query params (client-side)
    const queryParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$leaderboard$2d$query$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLeaderboardQueryParams"])(params, benchmarks), [
        params,
        benchmarks
    ]);
    // Filter/sort models (client-side with useMemo)
    const leaderboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$leaderboard$2d$query$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryLeaderboardModels"])(models, benchmarks, queryParams), [
        models,
        benchmarks,
        queryParams
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$leaderboard$2f$data$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTable"], {
        data: leaderboard.rows,
        benchmarks: benchmarks,
        activeCategory: null,
        activeCategorySlug: null,
        totalRows: leaderboard.total,
        currentPage: leaderboard.page,
        totalPages: leaderboard.totalPages,
        pageSize: leaderboard.pageSize,
        sortBy: leaderboard.sortBy,
        sortDir: leaderboard.sortDir,
        searchQuery: leaderboard.query,
        license: leaderboard.license,
        domain: leaderboard.domain,
        sourcesFilter: leaderboard.sources,
        verificationFilter: leaderboard.verification,
        coverageMode: leaderboard.coverageMode
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/client-leaderboard.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
function ClientLeaderboard({ models, benchmarks }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingShell, {}, void 0, false, {
            fileName: "[project]/src/components/dashboard/client-leaderboard.tsx",
            lineNumber: 80,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ClientLeaderboardInner, {
            models: models,
            benchmarks: benchmarks
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/client-leaderboard.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/client-leaderboard.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_fcb29acb._.js.map