(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-merged-search-params.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMergedSearchParams",
    ()=>useMergedSearchParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useMergedSearchParams() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const updateParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMergedSearchParams.useCallback[updateParams]": (updates)=>{
            const nextParams = new URLSearchParams(searchParams.toString());
            Object.entries(updates).forEach({
                "useMergedSearchParams.useCallback[updateParams]": ([key, value])=>{
                    if (value === null || value === undefined || value === "") {
                        nextParams.delete(key);
                    } else {
                        nextParams.set(key, value);
                    }
                }
            }["useMergedSearchParams.useCallback[updateParams]"]);
            const currentQuery = searchParams.toString();
            const nextQuery = nextParams.toString();
            if (nextQuery === currentQuery) return;
            router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, {
                scroll: false
            });
        }
    }["useMergedSearchParams.useCallback[updateParams]"], [
        searchParams,
        router,
        pathname
    ]);
    return {
        searchParams,
        updateParams,
        getParam: (key)=>searchParams.get(key),
        getAllParams: ()=>searchParams.toString()
    };
}
_s(useMergedSearchParams, "po+hKvNtMzTHJkG97Q6idkK7Ok4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/freshness.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/benchmark/benchmark-leaderboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BenchmarkLeaderboard",
    ()=>BenchmarkLeaderboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$provider$2d$identity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/provider-identity.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sources$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/sources.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-down.js [app-client] (ecmascript) <export default as ArrowUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$merged$2d$search$2d$params$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-merged-search-params.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$freshness$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/freshness.ts [app-client] (ecmascript)");
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
const sourceMap = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$sources$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sources"].map((s)=>[
        s.id,
        s
    ]));
function getVerificationBadge(level, verified) {
    if (level === "third_party") return {
        label: "3rd Party",
        class: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
    };
    if (level === "provider") return {
        label: "Provider",
        class: "bg-amber-500/10 text-amber-600 dark:text-amber-400"
    };
    if (level === "community") return {
        label: "Community",
        class: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
    };
    if (level === "estimated") return {
        label: "Est.",
        class: "bg-slate-500/10 text-slate-600 dark:text-slate-400"
    };
    if (verified) return {
        label: "Verified",
        class: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
    };
    return {
        label: "Unverified",
        class: "bg-muted text-muted-foreground"
    };
}
function formatParameters(params) {
    if (!params || params === "Unknown") return "—";
    return params;
}
function BenchmarkLeaderboard({ benchmark, models, sotaScore, initialSearch = "", initialLicense = "all", initialSort, initialDir }) {
    _s();
    const { searchParams, updateParams } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$merged$2d$search$2d$params$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedSearchParams"])();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams.get("q") || initialSearch);
    const [licenseFilter, setLicenseFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams.get("license") || initialLicense);
    const [sortKey, setSortKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams.get("sort") ?? initialSort ?? "score");
    const [sortDir, setSortDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams.get("dir") ?? initialDir ?? (benchmark.higherIsBetter ? "desc" : "asc"));
    const [compareIds, setCompareIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BenchmarkLeaderboard.useEffect": ()=>{
            updateParams({
                q: search || null,
                license: licenseFilter !== "all" ? licenseFilter : null,
                sort: sortKey !== "score" ? sortKey : null,
                dir: sortDir !== (benchmark.higherIsBetter ? "desc" : "asc") ? sortDir : null
            });
        }
    }["BenchmarkLeaderboard.useEffect"], [
        search,
        licenseFilter,
        sortKey,
        sortDir,
        updateParams,
        benchmark.higherIsBetter
    ]);
    const hasAAData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BenchmarkLeaderboard.useMemo[hasAAData]": ()=>models.some({
                "BenchmarkLeaderboard.useMemo[hasAAData]": (model)=>{
                    const scoreEntry = model.scores[benchmark.id];
                    const source = scoreEntry?.sourceId ? sourceMap.get(scoreEntry.sourceId) : null;
                    return source?.id === "artificial-analysis";
                }
            }["BenchmarkLeaderboard.useMemo[hasAAData]"])
    }["BenchmarkLeaderboard.useMemo[hasAAData]"], [
        models,
        benchmark.id
    ]);
    const filteredModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BenchmarkLeaderboard.useMemo[filteredModels]": ()=>{
            let result = models.filter({
                "BenchmarkLeaderboard.useMemo[filteredModels].result": (model)=>{
                    const matchesSearch = !search || model.name.toLowerCase().includes(search.toLowerCase()) || model.provider.toLowerCase().includes(search.toLowerCase());
                    const matchesLicense = licenseFilter === "all" || licenseFilter === "open" && model.isOpenSource || licenseFilter === "proprietary" && !model.isOpenSource;
                    return matchesSearch && matchesLicense;
                }
            }["BenchmarkLeaderboard.useMemo[filteredModels].result"]);
            result = [
                ...result
            ].sort({
                "BenchmarkLeaderboard.useMemo[filteredModels]": (a, b)=>{
                    let aVal = 0;
                    let bVal = 0;
                    switch(sortKey){
                        case "score":
                            aVal = a.scores[benchmark.id]?.score ?? 0;
                            bVal = b.scores[benchmark.id]?.score ?? 0;
                            break;
                        case "releaseDate":
                            aVal = a.releaseDate;
                            bVal = b.releaseDate;
                            break;
                        case "provider":
                            aVal = a.provider;
                            bVal = b.provider;
                            break;
                        case "parameters":
                            aVal = a.specs.parameters ?? "Unknown";
                            bVal = b.specs.parameters ?? "Unknown";
                            break;
                        default:
                            aVal = a.scores[benchmark.id]?.score ?? 0;
                            bVal = b.scores[benchmark.id]?.score ?? 0;
                    }
                    if (typeof aVal === "string" && typeof bVal === "string") {
                        return sortDir === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
                    }
                    const numA = typeof aVal === "number" ? aVal : 0;
                    const numB = typeof bVal === "number" ? bVal : 0;
                    if (sortKey === "score" && !benchmark.higherIsBetter) {
                        return sortDir === "asc" ? numA - numB : numB - numA;
                    }
                    return sortDir === "asc" ? numA - numB : numB - numA;
                }
            }["BenchmarkLeaderboard.useMemo[filteredModels]"]);
            return result;
        }
    }["BenchmarkLeaderboard.useMemo[filteredModels]"], [
        models,
        search,
        licenseFilter,
        sortKey,
        sortDir,
        benchmark.id,
        benchmark.higherIsBetter
    ]);
    const toggleCompare = (id)=>{
        setCompareIds((prev)=>{
            if (prev.includes(id)) {
                return prev.filter((i)=>i !== id);
            }
            if (prev.length >= 3) return prev;
            return [
                ...prev,
                id
            ];
        });
    };
    const handleSort = (key)=>{
        if (sortKey === key) {
            setSortDir((prev)=>prev === "asc" ? "desc" : "asc");
        } else {
            setSortKey(key);
            setSortDir(key === "score" && !benchmark.higherIsBetter ? "asc" : "desc");
        }
    };
    const renderSortHeader = (label, sortValue)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>handleSort(sortValue),
            className: "inline-flex items-center gap-1 hover:text-foreground transition-colors",
            children: [
                label,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-3 w-3", sortKey === sortValue ? "text-primary" : "opacity-30")
                }, void 0, false, {
                    fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                    lineNumber: 158,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
            lineNumber: 153,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            compareIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-20 bg-primary/10 border-b border-primary/20 px-4 py-2 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-primary",
                        children: [
                            compareIds.length,
                            " model",
                            compareIds.length > 1 ? "s" : "",
                            " selected"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "h-7 text-xs",
                                onClick: ()=>setCompareIds([]),
                                children: "Clear"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/compare?models=${compareIds.join(",")}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    className: "h-7 text-xs",
                                    children: "Compare Selected"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                lineNumber: 165,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-border/40 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 max-w-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground/60"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Search models...",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value),
                                className: "h-8 pl-9 text-sm bg-muted/30 border-border/50"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 bg-muted/30 p-0.5 rounded-full border border-border/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setLicenseFilter("all"),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-6 rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider transition-all", licenseFilter === "all" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                        children: "All"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setLicenseFilter("open"),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-6 rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider transition-all", licenseFilter === "open" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                        children: "Open"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setLicenseFilter("proprietary"),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-6 rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider transition-all", licenseFilter === "proprietary" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                        children: "Proprietary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-muted-foreground font-mono",
                                children: [
                                    filteredModels.length,
                                    " ",
                                    filteredModels.length === 1 ? "model" : "models"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-border/40 bg-muted/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "w-10 px-3 py-2.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "Select"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2.5 text-left font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
                                            children: "Rank"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                            lineNumber: 242,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2.5 text-left font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
                                            children: "Model"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                            lineNumber: 245,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2.5 text-left font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
                                            children: renderSortHeader("Provider", "provider")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2.5 text-left font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
                                            children: renderSortHeader("Params", "parameters")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                            lineNumber: 251,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2.5 text-left font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
                                            children: renderSortHeader("Released", "releaseDate")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2.5 text-right font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
                                            children: renderSortHeader("Score", "score")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                            lineNumber: 257,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2.5 text-right font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
                                            children: "Gap to SOTA"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2.5 text-center font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
                                            children: "License"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-4 py-2.5 text-center font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
                                            children: "Verification"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "divide-y divide-border/30",
                                children: filteredModels.map((model, idx)=>{
                                    const scoreEntry = model.scores[benchmark.id];
                                    const score = scoreEntry?.score;
                                    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$provider$2d$identity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProviderTheme"])(model.provider);
                                    const verification = getVerificationBadge(scoreEntry?.verificationLevel, scoreEntry?.verified);
                                    const source = scoreEntry?.sourceId ? sourceMap.get(scoreEntry.sourceId) : null;
                                    const isAA = source?.id === "artificial-analysis";
                                    const isCompareSelected = compareIds.includes(model.id);
                                    const freshness = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$freshness$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFreshnessLevel"])(scoreEntry?.asOfDate);
                                    const daysAgo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$freshness$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDaysAgo"])(scoreEntry?.asOfDate);
                                    const gapToSota = score !== null && score !== undefined ? benchmark.higherIsBetter ? sotaScore - score : score - sotaScore : null;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/row transition-colors", isCompareSelected ? "bg-primary/5" : "hover:bg-muted/30"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>toggleCompare(model.id),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5 rounded border flex items-center justify-center transition-colors", isCompareSelected ? "bg-primary border-primary text-primary-foreground" : "border-border hover:border-primary"),
                                                    children: isCompareSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                lineNumber: 297,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold", idx === 0 ? "bg-amber-500/20 text-amber-600 dark:text-amber-400" : idx === 1 ? "bg-slate-400/20 text-slate-600 dark:text-slate-300" : idx === 2 ? "bg-orange-700/20 text-orange-700 dark:text-orange-400" : "bg-muted text-muted-foreground"),
                                                    children: idx + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                lineNumber: 310,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/model/${model.id}`,
                                                    className: "font-display font-bold text-foreground group-hover/row:text-primary transition-colors",
                                                    children: model.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                lineNumber: 326,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-block rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", theme.bg, theme.text),
                                                    children: model.provider
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                lineNumber: 334,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 font-mono text-xs text-muted-foreground",
                                                children: formatParameters(model.specs.parameters)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                lineNumber: 345,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 font-mono text-xs text-muted-foreground",
                                                children: model.releaseDate
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                lineNumber: 348,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 text-right",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-sm font-bold text-foreground inline-flex items-center gap-1",
                                                    children: [
                                                        score?.toFixed(1),
                                                        benchmark.unit ?? "%",
                                                        isAA && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary ml-0.5",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 32
                                                        }, this),
                                                        freshness === "stale" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "h-1.5 w-1.5 rounded-full bg-red-500",
                                                            title: `Stale: ${daysAgo}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 25
                                                        }, this),
                                                        freshness === "aging" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "h-1.5 w-1.5 rounded-full bg-amber-500",
                                                            title: `Aging: ${daysAgo}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                lineNumber: 351,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 text-right",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-mono text-xs", gapToSota === 0 ? "text-primary font-bold" : "text-muted-foreground"),
                                                    children: gapToSota !== null ? gapToSota === 0 ? "SOTA" : `+${gapToSota.toFixed(1)}` : "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                lineNumber: 363,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 text-center",
                                                children: model.isOpenSource ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400",
                                                    children: "Open"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold text-muted-foreground",
                                                    children: "Proprietary"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                lineNumber: 373,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-3 text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full px-2 py-0.5 text-[10px] font-bold", verification.class),
                                                    children: verification.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                                lineNumber: 384,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, model.id, true, {
                                        fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                        lineNumber: 290,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    filteredModels.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-12 text-center text-sm text-muted-foreground",
                        children: "No models match your filters."
                    }, void 0, false, {
                        fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                        lineNumber: 396,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            filteredModels.length > 0 && hasAAData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-2.5 border-t border-border/30 text-xs text-muted-foreground flex items-center gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-primary",
                            children: "*"
                        }, void 0, false, {
                            fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                            lineNumber: 405,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Data from Artificial Analysis"
                        }, void 0, false, {
                            fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                            lineNumber: 406,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                    lineNumber: 404,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
                lineNumber: 403,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/benchmark/benchmark-leaderboard.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_s(BenchmarkLeaderboard, "ZS/sunZxZ9/9YY5NbXXII2fsQ9I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$merged$2d$search$2d$params$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedSearchParams"]
    ];
});
_c = BenchmarkLeaderboard;
var _c;
__turbopack_context__.k.register(_c, "BenchmarkLeaderboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/benchmark/benchmark-leaderboard.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/benchmark/benchmark-leaderboard.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowUpDown
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 16-4 4-4-4",
            key: "f6ql7i"
        }
    ],
    [
        "path",
        {
            d: "M17 20V4",
            key: "1ejh1v"
        }
    ],
    [
        "path",
        {
            d: "m3 8 4-4 4 4",
            key: "11wl7u"
        }
    ],
    [
        "path",
        {
            d: "M7 4v16",
            key: "1glfcx"
        }
    ]
];
const ArrowUpDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-up-down", __iconNode);
;
 //# sourceMappingURL=arrow-up-down.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-down.js [app-client] (ecmascript) <export default as ArrowUpDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowUpDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-down.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_a6beb648._.js.map