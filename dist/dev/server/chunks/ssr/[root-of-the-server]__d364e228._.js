module.exports = [
"[project]/src/app/icon.png.mjs { IMAGE => \"[project]/src/app/icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/icon.png.mjs { IMAGE => \"[project]/src/app/icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/twitter-image.png.mjs { IMAGE => \"[project]/src/app/twitter-image.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/twitter-image.png.mjs { IMAGE => \"[project]/src/app/twitter-image.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/opengraph-image.png.mjs { IMAGE => \"[project]/src/app/opengraph-image.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/opengraph-image.png.mjs { IMAGE => \"[project]/src/app/opengraph-image.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/benchmarks/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/benchmarks/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/domains.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allDomains",
    ()=>allDomains,
    "domainCategories",
    ()=>domainCategories,
    "domainDefinitions",
    ()=>domainDefinitions,
    "domainToSlug",
    ()=>domainToSlug,
    "getBenchmarkIdsForDomain",
    ()=>getBenchmarkIdsForDomain,
    "getBenchmarksForDomain",
    ()=>getBenchmarksForDomain,
    "getDomainForBenchmark",
    ()=>getDomainForBenchmark,
    "getDomainForCategory",
    ()=>getDomainForCategory,
    "slugToDomain",
    ()=>slugToDomain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$benchmarks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/benchmarks.ts [app-rsc] (ecmascript)");
;
const domainDefinitions = [
    {
        id: "Intelligence",
        label: "Intelligence",
        description: "Reasoning, scientific understanding, and complex problem-solving abilities",
        longDescription: "Measures advanced cognitive capabilities including logical reasoning, scientific knowledge, multi-step problem solving, and the ability to tackle novel challenges. Includes benchmarks for GPQA, ARC-AGI, and other frontier reasoning tasks.",
        categories: [
            "Reasoning",
            "Science",
            "STEM",
            "Advanced Tasks"
        ],
        icon: "Brain"
    },
    {
        id: "Knowledge & Communication",
        label: "Knowledge & Communication",
        description: "World knowledge, multilingual capabilities, and real-world understanding",
        longDescription: "Evaluates breadth and depth of world knowledge, language understanding across multiple languages, and ability to communicate effectively. Covers MMLU, HellaSwag, WMT translations, and real-world task performance.",
        categories: [
            "Knowledge",
            "Multilingual",
            "Real-world"
        ],
        icon: "Globe"
    },
    {
        id: "Coding",
        label: "Coding",
        description: "Code generation, software engineering, and programming tasks",
        longDescription: "Tests programming proficiency across multiple languages, software engineering tasks, debugging capabilities, and real-world coding scenarios. Includes HumanEval, MBPP, SWE-bench, and competitive programming benchmarks.",
        categories: [
            "Coding"
        ],
        icon: "Code"
    },
    {
        id: "Math",
        label: "Math",
        description: "Mathematical reasoning, competition math, and quantitative problem-solving",
        longDescription: "Assesses mathematical capabilities from basic arithmetic to competition-level problems. Covers GSM8K, MATH, AIME, and specialized mathematical reasoning benchmarks.",
        categories: [
            "Math"
        ],
        icon: "Calculator"
    },
    {
        id: "Agents & Tools",
        label: "Agents & Tools",
        description: "Tool use, agentic workflows, and instruction following",
        longDescription: "Measures ability to use external tools, follow complex instructions, operate autonomously in multi-step workflows, and function as effective AI agents. Includes BFCL, API-based tasks, and instruction following benchmarks.",
        categories: [
            "Agent",
            "Agentic",
            "Instruction Following"
        ],
        icon: "Bot"
    },
    {
        id: "Vision & Video",
        label: "Vision & Video",
        description: "Image understanding, video analysis, and multimodal capabilities",
        longDescription: "Evaluates visual understanding including image classification, object detection, video comprehension, and multimodal reasoning. Covers MMMU, VQA, video understanding, and cross-modal tasks.",
        categories: [
            "Vision",
            "Video",
            "Multimodal"
        ],
        icon: "Eye"
    },
    {
        id: "Long Context",
        label: "Long Context",
        description: "Performance on extended documents and long-context reasoning",
        longDescription: "Tests ability to process, understand, and reason over very long inputs. Includes needle-in-haystack tests, long-document QA, and benchmarks measuring performance degradation with context length.",
        categories: [
            "Long Context"
        ],
        icon: "Scroll"
    },
    {
        id: "Factuality",
        label: "Factuality",
        description: "Accuracy, hallucination resistance, and factual reliability",
        longDescription: "Measures tendency to produce factually accurate outputs, resistance to hallucinations, and ability to acknowledge uncertainty. Includes TruthfulQA, FACTSCORE, and other factuality benchmarks.",
        categories: [
            "Hallucination"
        ],
        icon: "CheckCircle"
    }
];
const domainCategories = domainDefinitions.reduce((acc, domain)=>{
    acc[domain.id] = domain.categories;
    return acc;
}, {});
function getDomainForCategory(category) {
    for (const domain of domainDefinitions){
        if (domain.categories.includes(category)) {
            return domain.id;
        }
    }
    return null;
}
function getDomainForBenchmark(benchmark) {
    return getDomainForCategory(benchmark.category);
}
function getBenchmarksForDomain(domainId) {
    const definition = domainDefinitions.find((d)=>d.id === domainId);
    if (!definition) return [];
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$benchmarks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["benchmarks"].filter((b)=>definition.categories.includes(b.category));
}
function getBenchmarkIdsForDomain(domainId) {
    return getBenchmarksForDomain(domainId).map((b)=>b.id);
}
const allDomains = domainDefinitions.map((d)=>d.id);
function domainToSlug(domain) {
    return domain.toLowerCase().replace(/\s*&\s*/g, "-").replace(/\s+/g, "-");
}
function slugToDomain(slug) {
    for (const domain of allDomains){
        if (domainToSlug(domain) === slug) {
            return domain;
        }
    }
    return null;
}
}),
"[project]/src/app/benchmarks/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BenchmarksPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$registry$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/registry-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domains.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-rsc] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    title: "Benchmarks",
    description: "Explore all benchmarks tracked in the LLM Registry.",
    keywords: [
        "llm benchmarks",
        "ai evaluation benchmarks",
        "benchmark categories",
        "model testing datasets"
    ],
    alternates: {
        canonical: "/benchmarks"
    },
    openGraph: {
        title: `LLM Benchmarks Directory | ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteName"]}`,
        description: "Explore all benchmarks tracked in the LLM Registry.",
        url: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteUrl"]}/benchmarks`,
        type: "website",
        images: [
            {
                url: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteUrl"]}/opengraph-image.png`,
                width: 1200,
                height: 630,
                alt: "LLM benchmarks directory"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: `LLM Benchmarks Directory | ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteName"]}`,
        description: "Explore all benchmarks tracked in the LLM Registry.",
        images: [
            `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteUrl"]}/opengraph-image.png`
        ]
    }
};
function BenchmarksPage() {
    const benchmarksByDomain = new Map();
    for (const benchmark of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$registry$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["benchmarks"]){
        const domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDomainForBenchmark"])(benchmark) ?? "Other";
        const existing = benchmarksByDomain.get(domain) ?? [];
        benchmarksByDomain.set(domain, [
            ...existing,
            benchmark
        ]);
    }
    const allDomains = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domainDefinitions"].map((d)=>d.id),
        "Other"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-display text-3xl font-bold tracking-tight text-foreground",
                        children: "Benchmarks"
                    }, void 0, false, {
                        fileName: "[project]/src/app/benchmarks/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-muted-foreground",
                        children: [
                            "Explore ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$registry$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["benchmarks"].length,
                            " benchmarks across ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domainDefinitions"].length,
                            " capability domains."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/benchmarks/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/benchmarks/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            allDomains.map((domainId)=>{
                const domainBenchmarks = benchmarksByDomain.get(domainId);
                if (!domainBenchmarks || domainBenchmarks.length === 0) return null;
                const domainDef = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domainDefinitions"].find((d)=>d.id === domainId);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-xl font-bold tracking-tight text-foreground",
                                    children: domainDef?.label ?? domainId
                                }, void 0, false, {
                                    fileName: "[project]/src/app/benchmarks/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-bold text-muted-foreground",
                                    children: domainBenchmarks.length
                                }, void 0, false, {
                                    fileName: "[project]/src/app/benchmarks/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/benchmarks/page.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        domainDef && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: domainDef.description
                        }, void 0, false, {
                            fileName: "[project]/src/app/benchmarks/page.tsx",
                            lineNumber: 76,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
                            children: domainBenchmarks.map((benchmark)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/benchmark/${benchmark.id}`,
                                    className: "group surface-card rounded-xl border border-border/40 p-4 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors",
                                                    children: benchmark.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/benchmarks/page.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-md bg-muted px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground",
                                                    children: benchmark.category
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/benchmarks/page.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/benchmarks/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xs text-muted-foreground line-clamp-2",
                                            children: benchmark.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/benchmarks/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[10px] text-muted-foreground",
                                                    children: [
                                                        "Unit: ",
                                                        benchmark.unit ?? "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/benchmarks/page.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity",
                                                    children: [
                                                        benchmark.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center gap-1 text-[10px] text-primary",
                                                            children: [
                                                                "Website",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                    className: "h-2.5 w-2.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/benchmarks/page.tsx",
                                                                    lineNumber: 109,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/benchmarks/page.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 25
                                                        }, this),
                                                        benchmark.paperUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center gap-1 text-[10px] text-primary",
                                                            children: [
                                                                "Paper",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                    className: "h-2.5 w-2.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/benchmarks/page.tsx",
                                                                    lineNumber: 115,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/benchmarks/page.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/benchmarks/page.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/benchmarks/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, benchmark.id, true, {
                                    fileName: "[project]/src/app/benchmarks/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/benchmarks/page.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    ]
                }, domainId, true, {
                    fileName: "[project]/src/app/benchmarks/page.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/benchmarks/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/benchmarks/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/benchmarks/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d364e228._.js.map