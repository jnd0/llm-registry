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
"[project]/src/lib/stats.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/components/dashboard/benchmark-expandable-list.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BenchmarkExpandableList",
    ()=>BenchmarkExpandableList
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BenchmarkExpandableList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BenchmarkExpandableList() from the server but BenchmarkExpandableList is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/dashboard/benchmark-expandable-list.tsx <module evaluation>", "BenchmarkExpandableList");
}),
"[project]/src/components/dashboard/benchmark-expandable-list.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BenchmarkExpandableList",
    ()=>BenchmarkExpandableList
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BenchmarkExpandableList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BenchmarkExpandableList() from the server but BenchmarkExpandableList is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/dashboard/benchmark-expandable-list.tsx", "BenchmarkExpandableList");
}),
"[project]/src/components/dashboard/benchmark-expandable-list.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$benchmark$2d$expandable$2d$list$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/dashboard/benchmark-expandable-list.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$benchmark$2d$expandable$2d$list$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/benchmark-expandable-list.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$benchmark$2d$expandable$2d$list$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/domain/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DomainPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domains.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$registry$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/registry-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stats$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stats.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-rsc] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$benchmark$2d$expandable$2d$list$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/benchmark-expandable-list.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/security.ts [app-rsc] (ecmascript)");
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
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domainDefinitions"].map((domain)=>({
            slug: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domainToSlug"])(domain.id)
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const domain = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domainDefinitions"].find((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domainToSlug"])(d.id) === slug);
    if (!domain) {
        return {
            title: "Domain Not Found",
            robots: {
                index: false,
                follow: false
            }
        };
    }
    return {
        title: `${domain.label} Benchmarks`,
        description: domain.description,
        alternates: {
            canonical: `/domain/${slug}`
        },
        openGraph: {
            title: `${domain.label} Benchmarks`,
            description: domain.description,
            url: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteUrl"]}/domain/${slug}`,
            type: "article",
            images: [
                {
                    url: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteUrl"]}/opengraph-image.png`,
                    width: 1200,
                    height: 630,
                    alt: `${domain.label} - LLM Registry`
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: `${domain.label} Benchmarks`,
            description: domain.description,
            images: [
                `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteUrl"]}/opengraph-image.png`
            ]
        }
    };
}
async function DomainPage({ params }) {
    const { slug } = await params;
    const domainDef = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domainDefinitions"].find((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domainToSlug"])(d.id) === slug);
    if (!domainDef) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const benchmarks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBenchmarksForDomain"])(domainDef.id);
    const benchmarkIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBenchmarkIdsForDomain"])(domainDef.id);
    const benchmarkMap = new Map(benchmarks.map((b)=>[
            b.id,
            b
        ]));
    const modelsWithScores = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$registry$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flattenedModels"].filter((model)=>{
        return benchmarkIds.some((id)=>{
            const score = model.scores[id]?.score;
            return score !== null && score !== undefined;
        });
    }).map((model)=>{
        const normalizedScores = benchmarkIds.map((id)=>{
            const scoreEntry = model.scores[id];
            const benchmark = benchmarkMap.get(id);
            if (scoreEntry?.score === null || scoreEntry?.score === undefined || !benchmark) return null;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stats$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeScore"])(scoreEntry.score, benchmark);
        }).filter((s)=>s !== null);
        const avgScore = normalizedScores.length > 0 ? normalizedScores.reduce((a, b)=>a + b, 0) / normalizedScores.length : 0;
        return {
            model,
            avgScore,
            scoreCount: normalizedScores.length
        };
    }).sort((a, b)=>b.avgScore - a.avgScore);
    const topModels = modelsWithScores.slice(0, 10);
    const domainPageUrl = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteUrl"]}/domain/${slug}`;
    const domainBreadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Leaderboard",
                item: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteUrl"]}/`
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Domains",
                item: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteUrl"]}/benchmarks`
            },
            {
                "@type": "ListItem",
                position: 3,
                name: domainDef.label,
                item: domainPageUrl
            }
        ]
    };
    const domainCollectionJsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: `${domainDef.label} benchmarks and rankings`,
        description: domainDef.longDescription || domainDef.description,
        url: domainPageUrl,
        isPartOf: {
            "@type": "WebSite",
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteName"],
            url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteUrl"]
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toSafeJsonLd"])(domainBreadcrumbJsonLd)
                }
            }, void 0, false, {
                fileName: "[project]/src/app/domain/[slug]/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$security$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toSafeJsonLd"])(domainCollectionJsonLd)
                }
            }, void 0, false, {
                fileName: "[project]/src/app/domain/[slug]/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "hidden sm:flex items-center gap-1 text-xs text-muted-foreground",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "hover:text-foreground transition-colors",
                        children: "Leaderboard"
                    }, void 0, false, {
                        fileName: "[project]/src/app/domain/[slug]/page.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "h-3 w-3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/domain/[slug]/page.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-foreground font-medium",
                        children: domainDef.label
                    }, void 0, false, {
                        fileName: "[project]/src/app/domain/[slug]/page.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/domain/[slug]/page.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-display text-2xl font-bold tracking-tight text-foreground",
                        children: domainDef.label
                    }, void 0, false, {
                        fileName: "[project]/src/app/domain/[slug]/page.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-muted-foreground max-w-2xl",
                        children: domainDef.longDescription || domainDef.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/domain/[slug]/page.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/domain/[slug]/page.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "surface-card rounded-xl border border-border/40 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3",
                                    children: "Top Models"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: topModels.map(({ model, avgScore, scoreCount }, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/model/${model.id}`,
                                            className: "flex items-center justify-between gap-4 p-2 rounded-lg hover:bg-muted/30 transition-colors group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold", idx === 0 ? "bg-amber-500/20 text-amber-600 dark:text-amber-400" : idx === 1 ? "bg-slate-400/20 text-slate-600 dark:text-slate-300" : idx === 2 ? "bg-orange-700/20 text-orange-700 dark:text-orange-400" : "bg-muted text-muted-foreground"),
                                                            children: idx + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-foreground group-hover:text-primary transition-colors",
                                                            children: model.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-muted-foreground font-mono",
                                                            children: [
                                                                "n=",
                                                                scoreCount
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-sm font-bold text-foreground",
                                                            children: avgScore.toFixed(1)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, model.id, true, {
                                            fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/domain/[slug]/page.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/domain/[slug]/page.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "surface-card rounded-xl border border-border/40 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3",
                                        children: "Domain Info"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                        className: "space-y-2.5 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "text-muted-foreground",
                                                        children: "Benchmarks"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "font-mono text-foreground",
                                                        children: benchmarks.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "text-muted-foreground",
                                                        children: "Models Evaluated"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "font-mono text-foreground",
                                                        children: modelsWithScores.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                                lineNumber: 216,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "text-muted-foreground",
                                                        children: "Categories"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "text-foreground",
                                                        children: domainDef.categories.join(", ")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "surface-card rounded-xl border border-border/40 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3",
                                        children: "Benchmarks"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$benchmark$2d$expandable$2d$list$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BenchmarkExpandableList"], {
                                        benchmarks: benchmarks
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/domain/[slug]/page.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/domain/[slug]/page.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/domain/[slug]/page.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/domain/[slug]/page.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/domain/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/domain/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__32d3431b._.js.map