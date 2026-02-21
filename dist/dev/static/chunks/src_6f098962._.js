(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/components/benchmark/frontier-chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FrontierChart",
    ()=>FrontierChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$merged$2d$search$2d$params$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-merged-search-params.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FrontierChart({ benchmark, models, variantIds, initialView = "all", initialVariants = false, initialRange = "all" }) {
    _s();
    const { searchParams, updateParams } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$merged$2d$search$2d$params$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedSearchParams"])();
    const [hoveredPoint, setHoveredPoint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams.get("view") || initialView);
    const [includeVariants, setIncludeVariants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams.get("variants") === "1" || initialVariants);
    const [range, setRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams.get("range") || initialRange);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FrontierChart.useEffect": ()=>{
            updateParams({
                view,
                variants: includeVariants ? "1" : "0",
                range
            });
        }
    }["FrontierChart.useEffect"], [
        view,
        includeVariants,
        range,
        updateParams
    ]);
    const sixMonthsAgo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FrontierChart.useMemo[sixMonthsAgo]": ()=>{
            const date = new Date();
            date.setMonth(date.getMonth() - 6);
            return date.toISOString().split("T")[0];
        }
    }["FrontierChart.useMemo[sixMonthsAgo]"], []);
    const { chartData, frontierSteps, frontierPointIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FrontierChart.useMemo": ()=>{
            let filtered = models;
            if (!includeVariants) {
                filtered = models.filter({
                    "FrontierChart.useMemo": (m)=>!variantIds.has(m.id)
                }["FrontierChart.useMemo"]);
            }
            if (range === "6m") {
                filtered = filtered.filter({
                    "FrontierChart.useMemo": (m)=>m.releaseDate >= sixMonthsAgo
                }["FrontierChart.useMemo"]);
            }
            const sorted = filtered.map({
                "FrontierChart.useMemo.sorted": (model)=>({
                        name: model.name,
                        id: model.id,
                        releaseDate: model.releaseDate,
                        score: model.scores[benchmark.id]?.score ?? 0,
                        isOpenSource: model.isOpenSource,
                        provider: model.provider,
                        isVariant: variantIds.has(model.id)
                    })
            }["FrontierChart.useMemo.sorted"]).sort({
                "FrontierChart.useMemo.sorted": (a, b)=>new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
            }["FrontierChart.useMemo.sorted"]);
            const frontier = [];
            const stepPoints = [];
            const frontierIds = new Set();
            let bestScore = benchmark.higherIsBetter ? -Infinity : Infinity;
            let lastFrontierX = null;
            for (const point of sorted){
                const isBetter = benchmark.higherIsBetter ? point.score > bestScore : point.score < bestScore;
                if (isBetter) {
                    const currentX = new Date(point.releaseDate).getTime();
                    if (lastFrontierX !== null) {
                        stepPoints.push({
                            startX: lastFrontierX,
                            endX: currentX,
                            y: bestScore
                        });
                    }
                    bestScore = point.score;
                    lastFrontierX = currentX;
                    frontierIds.add(point.id);
                    frontier.push({
                        x: currentX,
                        y: point.score
                    });
                }
            }
            if (lastFrontierX !== null && sorted.length > 0) {
                const maxX = Math.max(...sorted.map({
                    "FrontierChart.useMemo.maxX": (p)=>new Date(p.releaseDate).getTime()
                }["FrontierChart.useMemo.maxX"]));
                stepPoints.push({
                    startX: lastFrontierX,
                    endX: maxX,
                    y: bestScore
                });
            }
            return {
                chartData: sorted,
                frontierSteps: stepPoints,
                frontierPointIds: frontierIds
            };
        }
    }["FrontierChart.useMemo"], [
        models,
        benchmark.id,
        benchmark.higherIsBetter,
        includeVariants,
        range,
        sixMonthsAgo,
        variantIds
    ]);
    const dateTicks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FrontierChart.useMemo[dateTicks]": ()=>{
            if (chartData.length === 0) return [];
            const dates = chartData.map({
                "FrontierChart.useMemo[dateTicks].dates": (d)=>new Date(d.releaseDate).getTime()
            }["FrontierChart.useMemo[dateTicks].dates"]);
            const minDate = Math.min(...dates);
            const maxDate = Math.max(...dates);
            const dateRange = maxDate - minDate || 1;
            const ticks = [];
            const startYear = new Date(minDate).getFullYear();
            const startMonth = new Date(minDate).getMonth();
            let current = new Date(startYear, startMonth, 1).getTime();
            const monthCount = Math.ceil(dateRange / (30 * 24 * 60 * 60 * 1000));
            const step = Math.max(1, Math.floor(monthCount / 5));
            while(current <= maxDate){
                ticks.push(current);
                current = new Date(new Date(current).setMonth(new Date(current).getMonth() + step)).getTime();
            }
            return ticks;
        }
    }["FrontierChart.useMemo[dateTicks]"], [
        chartData
    ]);
    if (chartData.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-64 items-center justify-center text-sm text-muted-foreground",
            children: range === "6m" ? "No models released in the last 6 months" : "No data available for this benchmark"
        }, void 0, false, {
            fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
            lineNumber: 155,
            columnNumber: 7
        }, this);
    }
    const observedMaxScore = Math.max(...chartData.map((d)=>d.score));
    const observedMinScore = Math.min(...chartData.map((d)=>d.score));
    const yMin = benchmark.minScore ?? Math.max(0, observedMinScore - (observedMaxScore - observedMinScore) * 0.1);
    const yMax = benchmark.maxScore;
    const adjustedRange = yMax - yMin || 1;
    const dates = chartData.map((d)=>new Date(d.releaseDate).getTime());
    const minDate = Math.min(...dates);
    const maxDate = Math.max(...dates);
    const dateRange = maxDate - minDate || 1;
    const datePadding = dateRange * 0.05;
    const adjustedMinDate = minDate - datePadding;
    const adjustedMaxDate = maxDate + datePadding;
    const adjustedDateRange = adjustedMaxDate - adjustedMinDate;
    const chartWidth = 700;
    const chartHeight = 280;
    const padding = {
        top: 20,
        right: 20,
        bottom: 50,
        left: 55
    };
    const innerWidth = chartWidth - padding.left - padding.right;
    const innerHeight = chartHeight - padding.top - padding.bottom;
    const toPixelX = (date)=>(date - adjustedMinDate) / adjustedDateRange * innerWidth;
    const toPixelY = (score)=>innerHeight * (1 - (score - yMin) / adjustedRange);
    const formatDate = (timestamp)=>{
        const date = new Date(timestamp);
        return date.toLocaleDateString("en-US", {
            month: "short",
            year: "2-digit"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 bg-muted/30 p-0.5 rounded-full border border-border/40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setView("all"),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-6 rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider transition-all", view === "all" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                children: "All Points"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setView("frontier"),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-6 rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider transition-all", view === "frontier" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                children: "Frontier Only"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 bg-muted/30 p-0.5 rounded-full border border-border/40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setRange("all"),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-6 rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider transition-all", range === "all" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                children: "All Time"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setRange("6m"),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-6 rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider transition-all", range === "6m" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                children: "Last 6 Mo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-1.5 text-xs text-muted-foreground cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: includeVariants,
                                onChange: (e)=>setIncludeVariants(e.target.checked),
                                className: "h-3.5 w-3.5 rounded border-border"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Include variants"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: `0 0 ${chartWidth} ${chartHeight}`,
                        className: "w-full h-auto",
                        role: "img",
                        "aria-label": `Progress chart for ${benchmark.name}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "frontierAreaGradient",
                                    x1: "0",
                                    y1: "0",
                                    x2: "0",
                                    y2: "1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            stopColor: "var(--primary)",
                                            stopOpacity: 0.15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "var(--primary)",
                                            stopOpacity: 0.02
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                transform: `translate(${padding.left}, ${padding.top})`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: 0,
                                        y1: innerHeight,
                                        x2: innerWidth,
                                        y2: innerHeight,
                                        className: "stroke-border/50",
                                        strokeWidth: 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: 0,
                                        y1: 0,
                                        x2: 0,
                                        y2: innerHeight,
                                        className: "stroke-border/50",
                                        strokeWidth: 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        0,
                                        0.25,
                                        0.5,
                                        0.75,
                                        1
                                    ].map((ratio, idx)=>{
                                        const y = innerHeight * (1 - ratio);
                                        const score = yMin + adjustedRange * ratio;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: 0,
                                                    y1: y,
                                                    x2: innerWidth,
                                                    y2: y,
                                                    className: "stroke-border/20",
                                                    strokeDasharray: "4 4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: -10,
                                                    y: y,
                                                    textAnchor: "end",
                                                    alignmentBaseline: "middle",
                                                    className: "fill-muted-foreground text-[10px] font-mono",
                                                    children: score.toFixed(0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                            lineNumber: 286,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    dateTicks.map((tick, idx)=>{
                                        const x = toPixelX(tick);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: x,
                                                    y1: 0,
                                                    x2: x,
                                                    y2: innerHeight,
                                                    className: "stroke-border/20",
                                                    strokeDasharray: "4 4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: x,
                                                    y: innerHeight + 20,
                                                    textAnchor: "middle",
                                                    className: "fill-muted-foreground text-[10px] font-mono",
                                                    children: formatDate(tick)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                            lineNumber: 311,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    frontierSteps.length > 0 && view === "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: frontierSteps.map((step, idx)=>{
                                            const x1 = toPixelX(step.startX);
                                            const x2 = toPixelX(step.endX);
                                            const y = toPixelY(step.y);
                                            if (idx === 0) {
                                                return `M ${x1} ${y} L ${x2} ${y}`;
                                            }
                                            return `L ${x1} ${y} L ${x2} ${y}`;
                                        }).join(" "),
                                        fill: "none",
                                        stroke: "var(--primary)",
                                        strokeWidth: 2.5,
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        opacity: 0.7
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this),
                                    (view === "all" ? chartData : chartData.filter((point)=>frontierPointIds.has(point.id))).map((point)=>{
                                        const x = toPixelX(new Date(point.releaseDate).getTime());
                                        const y = toPixelY(point.score);
                                        const isHovered = hoveredPoint?.id === point.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: x,
                                                cy: y,
                                                r: isHovered ? 7 : 4,
                                                className: `cursor-pointer transition-all ${point.isOpenSource ? "fill-emerald-500" : "fill-primary"}`,
                                                opacity: isHovered ? 1 : 0.6,
                                                stroke: isHovered ? "var(--background)" : "none",
                                                strokeWidth: isHovered ? 2 : 0,
                                                onMouseEnter: ()=>setHoveredPoint(point),
                                                onMouseLeave: ()=>setHoveredPoint(null)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                                lineNumber: 361,
                                                columnNumber: 19
                                            }, this)
                                        }, point.id, false, {
                                            fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: chartWidth / 2,
                                y: chartHeight - 8,
                                textAnchor: "middle",
                                className: "fill-muted-foreground text-[10px] font-mono",
                                children: "Release Date"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                lineNumber: 377,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: 14,
                                y: chartHeight / 2,
                                textAnchor: "middle",
                                transform: `rotate(-90, 14, ${chartHeight / 2})`,
                                className: "fill-muted-foreground text-[10px] font-mono",
                                children: "Score"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    hoveredPoint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute pointer-events-none bg-popover border border-border rounded-lg px-3 py-2 shadow-lg z-10",
                        style: {
                            left: `${(new Date(hoveredPoint.releaseDate).getTime() - adjustedMinDate) / adjustedDateRange * 100}%`,
                            top: "20px",
                            transform: "translateX(-50%)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display text-sm font-bold text-foreground",
                                children: hoveredPoint.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                lineNumber: 405,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground",
                                children: hoveredPoint.provider
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                lineNumber: 406,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-sm font-bold text-primary",
                                        children: [
                                            hoveredPoint.score.toFixed(1),
                                            benchmark.unit ?? "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                        lineNumber: 408,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-muted-foreground",
                                        children: hoveredPoint.releaseDate
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                        lineNumber: 411,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                lineNumber: 407,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                        lineNumber: 397,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-0.5 w-6 bg-primary rounded opacity-70"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                lineNumber: 419,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-muted-foreground",
                                children: "State of the Art"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                lineNumber: 420,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                        lineNumber: 418,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-3 w-3 rounded-full bg-primary opacity-60"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-muted-foreground",
                                children: "Proprietary"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                lineNumber: 424,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-3 w-3 rounded-full bg-emerald-500 opacity-60"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                lineNumber: 427,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-muted-foreground",
                                children: "Open Source"
                            }, void 0, false, {
                                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                                lineNumber: 428,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
                lineNumber: 417,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/benchmark/frontier-chart.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
_s(FrontierChart, "udwd7A12zDFpu52TjsVVyHwGCco=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$merged$2d$search$2d$params$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedSearchParams"]
    ];
});
_c = FrontierChart;
var _c;
__turbopack_context__.k.register(_c, "FrontierChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/benchmark/frontier-chart.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/benchmark/frontier-chart.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_6f098962._.js.map