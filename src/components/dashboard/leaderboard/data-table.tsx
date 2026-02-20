"use client";

import * as React from "react";
import {
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { GripVertical, X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Model, Benchmark } from "@/types";
import { useQueryState, parseAsArrayOf, parseAsString } from "nuqs";
import { createColumns, ModelComputedMetrics } from "./columns";
import { LeaderboardToolbar } from "./toolbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { normalizeScore } from "@/lib/stats";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { LeaderboardSortDirection, LicenseFilter, CoverageMode } from "@/lib/leaderboard-query";
import type { CapabilityDomain } from "@/lib/domains";
import { getBenchmarkIdsForDomain, domainDefinitions } from "@/lib/domains";
import { useMaximizedView } from "@/hooks/use-maximized-view";

export interface DataTableProps {
  data: Model[];
  benchmarks: Benchmark[];
  activeCategory?: string | null;
  activeCategorySlug?: string | null;
  totalRows: number;
  currentPage: number;
  totalPages: number;
  pageSize: number;
  sortBy: string;
  sortDir: LeaderboardSortDirection;
  searchQuery: string;
  license: LicenseFilter;
  domain: CapabilityDomain | null;
  sourcesFilter: string[];
  verificationFilter: string[];
  coverageMode: CoverageMode;
}

function areStringArraysEqual(a: string[], b: string[]) {
  if (a === b) return true;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function areVisibilityStatesEqual(a: VisibilityState, b: VisibilityState) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const key of keys) {
    if (Boolean(a[key]) !== Boolean(b[key])) return false;
  }
  return true;
}

export function DataTable({
  data,
  benchmarks,
  activeCategory = null,
  activeCategorySlug = null,
  totalRows,
  currentPage,
  totalPages,
  pageSize,
  sortBy,
  sortDir,
  searchQuery,
  license,
  domain,
  sourcesFilter,
  verificationFilter,
  coverageMode,
}: DataTableProps) {
  const benchmarkWindowSize = 24;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [sorting, setSorting] = React.useState<SortingState>(() =>
    sortBy ? [{ id: sortBy, desc: sortDir === "desc" }] : []
  );
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>(() => ({
    inputPrice: false,
    outputPrice: false,
  }));
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnOrder, setColumnOrder] = React.useState<string[]>([]);
  const [draggedColumn, setDraggedColumn] = React.useState<string | null>(null);
  const [summaryView, setSummaryView] = React.useState(() => !activeCategory);
  const [benchmarkWindowPage, setBenchmarkWindowPage] = React.useState(0);
  const [queuedParamUpdates, setQueuedParamUpdates] = React.useState<Record<string, string | null> | null>(null);
  const { isMaximized, isAnimatingOut, toggleMaximized, exitMaximized } = useMaximizedView();
  const [isDesktopViewport, setIsDesktopViewport] = React.useState(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(min-width: 768px)").matches;
  });

  const setColumnOrderSafely = React.useCallback((nextOrder: string[]) => {
    setColumnOrder((prev) => (areStringArraysEqual(prev, nextOrder) ? prev : nextOrder));
  }, []);

  const setColumnVisibilitySafely = React.useCallback((nextVisibility: VisibilityState) => {
    setColumnVisibility((prev) => (areVisibilityStatesEqual(prev, nextVisibility) ? prev : nextVisibility));
  }, []);

  const enqueueSearchParamUpdates = React.useCallback((updates: Record<string, string | null>) => {
    setQueuedParamUpdates((prev) => ({ ...(prev ?? {}), ...updates }));
  }, []);

  const updateSearchParamState = React.useCallback(
    (updates: Record<string, string | null>) => {
      const nextParams = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === "") {
          nextParams.delete(key);
        } else {
          nextParams.set(key, value);
        }
      });

      const currentQuery = searchParams.toString();
      const query = nextParams.toString();
      if (query === currentQuery) return;
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  React.useEffect(() => {
    if (!queuedParamUpdates) return;
    updateSearchParamState(queuedParamUpdates);
    setQueuedParamUpdates(null);
  }, [queuedParamUpdates, updateSearchParamState]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(min-width: 768px)");
    const handleChange = () => setIsDesktopViewport(media.matches);

    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const setSortingSafely = React.useCallback((nextId: string, desc = true, syncUrl = true) => {
    const current = sorting[0];
    if (current?.id === nextId && current.desc === desc) return;

    setSorting([{ id: nextId, desc }]);
    if (syncUrl) {
      enqueueSearchParamUpdates({
        sort: nextId,
        dir: desc ? "desc" : "asc",
        page: "1",
      });
    }
  }, [enqueueSearchParamUpdates, sorting]);

  const categories = React.useMemo(
    () => Array.from(new Set(benchmarks.map((benchmark) => benchmark.category))),
    [benchmarks]
  );

  const categoryBenchmarksMap = React.useMemo(() => {
    const map = new Map<string, Benchmark[]>();
    categories.forEach((category) => {
      map.set(
        category,
        benchmarks.filter((benchmark) => benchmark.category === category)
      );
    });
    return map;
  }, [benchmarks, categories]);

  const avgColumnIds = React.useMemo(
    () => categories.map((category) => `avg-${category.toLowerCase().replace(/\s+/g, "-")}`),
    [categories]
  );

  const summaryAvgColumnIds = React.useMemo(() => {
    const preferred = [
      "avg-knowledge",
      "avg-coding",
      "avg-math",
      "avg-reasoning",
      "avg-multimodal",
    ];
    const preferredAvailable = preferred.filter((columnId) => avgColumnIds.includes(columnId));
    const fallback = avgColumnIds.filter((columnId) => !preferredAvailable.includes(columnId));
    return [...preferredAvailable, ...fallback].slice(0, 5);
  }, [avgColumnIds]);

  const groupedBenchmarkIds = React.useMemo(
    () => categories.flatMap((category) => (categoryBenchmarksMap.get(category) ?? []).map((benchmark) => benchmark.id)),
    [categories, categoryBenchmarksMap]
  );

  const canUseBenchmarkWindow = !summaryView && !activeCategory;

  const benchmarkWindowTotalPages = React.useMemo(
    () => Math.max(1, Math.ceil(groupedBenchmarkIds.length / benchmarkWindowSize)),
    [groupedBenchmarkIds.length]
  );

  const benchmarkWindowIds = React.useMemo(() => {
    if (!canUseBenchmarkWindow) return groupedBenchmarkIds;
    const start = benchmarkWindowPage * benchmarkWindowSize;
    return groupedBenchmarkIds.slice(start, start + benchmarkWindowSize);
  }, [benchmarkWindowPage, canUseBenchmarkWindow, groupedBenchmarkIds]);

  const coreColumnIds = React.useMemo(() => ["select", "name", "releaseDate", "context", "coverage"], []);
  const priceColumnIds = React.useMemo(() => ["inputPrice", "outputPrice"], []);

  const allColumnIds = React.useMemo(
    () => [...coreColumnIds, ...priceColumnIds, ...avgColumnIds, ...groupedBenchmarkIds],
    [coreColumnIds, priceColumnIds, avgColumnIds, groupedBenchmarkIds]
  );

  const defaultColumnOrder = React.useMemo(
    () => [...coreColumnIds, ...priceColumnIds, ...avgColumnIds, ...groupedBenchmarkIds],
    [coreColumnIds, priceColumnIds, avgColumnIds, groupedBenchmarkIds]
  );

  const mobileHighlightIds = React.useMemo(() => {
    const defaultHighlights = ["mmlu", "gpqa-diamond", "swe-bench-verified", "lmarena-elo"];
    
    if (!activeCategory) {
      return defaultHighlights;
    }

    const categoryBenchmarks = categoryBenchmarksMap.get(activeCategory) ?? [];
    const categoryIds = categoryBenchmarks.slice(0, 4).map((b) => b.id);
    
    if (categoryIds.length === 0) {
      return defaultHighlights;
    }

    return categoryIds;
  }, [activeCategory, categoryBenchmarksMap]);

  const benchmarkById = React.useMemo(
    () => new Map(benchmarks.map((benchmark) => [benchmark.id, benchmark])),
    [benchmarks]
  );

  const [compareIds, setCompareIds] = useQueryState(
    "compare",
    parseAsArrayOf(parseAsString).withDefault([])
  );

  const compareSetRef = React.useRef<Set<string>>(new Set(compareIds || []));
  compareSetRef.current = new Set(compareIds || []);

  const toggleCompare = React.useCallback((id: string) => {
    setCompareIds((prev) => {
      const current = prev || [];
      if (current.includes(id)) return current.filter((i) => i !== id);
      if (current.length >= 3) return current; // Max 3
      return [...current, id];
    });
  }, [setCompareIds]);

  const isCompared = React.useCallback((id: string) => compareSetRef.current.has(id), []);

  const metricsByModel = React.useMemo(() => {
    const metrics = new Map<string, ModelComputedMetrics>();
    const totalBenchmarks = Math.max(benchmarks.length, 1);

    data.forEach((model) => {
      let coveredBenchmarks = 0;
      const categoryAverages: Record<string, number | null> = {};

      categories.forEach((category) => {
        const categoryBenchmarks = categoryBenchmarksMap.get(category) ?? [];
        let sum = 0;
        let count = 0;

        categoryBenchmarks.forEach((benchmark) => {
          const score = model.scores[benchmark.id]?.score;
          if (score === null || score === undefined) return;

          coveredBenchmarks += 1;
          sum += normalizeScore(score, benchmark);
          count += 1;
        });

        categoryAverages[category] = count > 0 ? Number((sum / count).toFixed(1)) : null;
      });

      metrics.set(model.id, {
        coverage: Number(((coveredBenchmarks / totalBenchmarks) * 100).toFixed(1)),
        categoryAverages,
      });
    });

    return metrics;
  }, [benchmarks.length, categories, categoryBenchmarksMap, data]);

  const columns = React.useMemo(
    () => createColumns(benchmarks, toggleCompare, isCompared, metricsByModel),
    [benchmarks, isCompared, metricsByModel, toggleCompare]
  );

  const compareHref = React.useMemo(() => {
    const base = `/compare?models=${(compareIds || []).join(",")}`;
    if (!activeCategorySlug) return base;
    return `${base}&category=${encodeURIComponent(activeCategorySlug)}`;
  }, [compareIds, activeCategorySlug]);

  const defaultSortId = React.useMemo(() => {
    if (activeCategory) {
      const avgColumnId = `avg-${activeCategory.toLowerCase().replace(/\s+/g, "-")}`;
      if (allColumnIds.includes(avgColumnId)) return avgColumnId;
      const categoryBenchmarkIds = (categoryBenchmarksMap.get(activeCategory) ?? []).map((benchmark) => benchmark.id);
      return categoryBenchmarkIds[0] ?? "coverage";
    }

    if (summaryView) {
      return summaryAvgColumnIds[0] ?? "coverage";
    }

    return benchmarkWindowIds.includes("mmlu") ? "mmlu" : benchmarkWindowIds[0] ?? "coverage";
  }, [activeCategory, allColumnIds, benchmarkWindowIds, categoryBenchmarksMap, summaryAvgColumnIds, summaryView]);

  React.useEffect(() => {
    if (!sortBy) return;
    const nextDesc = sortDir === "desc";
    setSorting((prev) => {
      const current = prev[0];
      if (current?.id === sortBy && current.desc === nextDesc) return prev;
      return [{ id: sortBy, desc: nextDesc }];
    });
  }, [sortBy, sortDir]);

  const handleSortingChange = React.useCallback(
    (updater: SortingState | ((old: SortingState) => SortingState)) => {
      const next = typeof updater === "function" ? updater(sorting) : updater;
      setSorting(next);

      const nextEntry = next[0];
      if (nextEntry?.id) {
        enqueueSearchParamUpdates({
          sort: nextEntry.id,
          dir: nextEntry.desc ? "desc" : "asc",
          page: "1",
        });
      }
    },
    [enqueueSearchParamUpdates, sorting]
  );

  // TanStack Table returns mutable helpers by design; this hook is intended usage here.
  const table = useReactTable({
    data,
    columns,
    onSortingChange: handleSortingChange,
    getCoreRowModel: getCoreRowModel(),
    manualSorting: true,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onColumnOrderChange: setColumnOrder,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnOrder,
    },
  });

  const desktopRows = table.getRowModel().rows;
  const selectColumnWidth = table.getColumn("select")?.getSize() ?? 64;
  const nameColumnWidth = table.getColumn("name")?.getSize() ?? 296;

  const getStickyColumnStyle = React.useCallback(
    (columnId: string): React.CSSProperties | undefined => {
      if (columnId === "select") {
        return {
          left: 0,
          width: selectColumnWidth,
          minWidth: selectColumnWidth,
          maxWidth: selectColumnWidth,
        };
      }

      if (columnId === "name") {
        return {
          left: selectColumnWidth,
          width: nameColumnWidth,
          minWidth: nameColumnWidth,
          maxWidth: nameColumnWidth,
        };
      }

      return undefined;
    },
    [nameColumnWidth, selectColumnWidth]
  );

  // Initialize column order from localStorage or defaults
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768 && !activeCategory) {
      setSummaryView(true);
    }

    const savedOrder = localStorage.getItem("columnOrder");
    if (savedOrder) {
      try {
        const parsed = JSON.parse(savedOrder);
        if (Array.isArray(parsed)) {
          setColumnOrderSafely(parsed);
        }
        return;
      } catch {
        localStorage.removeItem("columnOrder");
      }
    }

    if (benchmarks.length > 0) {
      setColumnOrderSafely(defaultColumnOrder);
    }
  }, [activeCategory, benchmarks.length, defaultColumnOrder, setColumnOrderSafely]);

  React.useEffect(() => {
    if (sorting.length > 0) return;
    setSortingSafely(defaultSortId, true);
  }, [defaultSortId, setSortingSafely, sorting.length]);

  React.useEffect(() => {
    const maxPage = Math.max(0, benchmarkWindowTotalPages - 1);
    if (benchmarkWindowPage > maxPage) {
      setBenchmarkWindowPage(maxPage);
    }
  }, [benchmarkWindowPage, benchmarkWindowTotalPages]);

  // Persist column order
  React.useEffect(() => {
    if (columnOrder.length > 0) {
      localStorage.setItem("columnOrder", JSON.stringify(columnOrder));
    }
  }, [columnOrder]);

  const handleDragStart = (columnId: string) => {
    if (columnId === "select") return;
    setDraggedColumn(columnId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (targetColumnId: string) => {
    if (!draggedColumn || draggedColumn === targetColumnId || targetColumnId === "select") {
      setDraggedColumn(null);
      return;
    }

    const newOrder = [...columnOrder];
    const draggedIdx = newOrder.indexOf(draggedColumn);
    const targetIdx = newOrder.indexOf(targetColumnId);

    newOrder.splice(draggedIdx, 1);
    newOrder.splice(targetIdx, 0, draggedColumn);

    setColumnOrderSafely(newOrder);
    setDraggedColumn(null);
  };

  // Handle Summary View toggle
  React.useEffect(() => {
    if (activeCategory) return;
    if (domain) return;

    if (summaryView) {
      const essentialColumns = [...coreColumnIds, ...summaryAvgColumnIds];
      
      const newVisibility: VisibilityState = {};
      allColumnIds.forEach((columnId) => {
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

      const newVisibility: VisibilityState = {};
      allColumnIds.forEach((columnId) => {
        newVisibility[columnId] = coreColumnIds.includes(columnId) || visibleBenchmarkIds.includes(columnId);
      });
      setColumnVisibilitySafely(newVisibility);

      const currentSortId = sorting[0]?.id;
      const sortStillVisible = currentSortId ? newVisibility[currentSortId] !== false : false;
      if (!sortStillVisible) {
        setSortingSafely(defaultSortId, true);
      }
    }
  }, [activeCategory, domain, allColumnIds, benchmarkWindowIds, canUseBenchmarkWindow, coreColumnIds, defaultSortId, groupedBenchmarkIds, setColumnVisibilitySafely, setSortingSafely, sorting, summaryAvgColumnIds, summaryView]);

  React.useEffect(() => {
    if (!activeCategory) return;

    const categoryBenchmarks = categoryBenchmarksMap.get(activeCategory) ?? [];
    const categoryBenchmarkIds = categoryBenchmarks.map((benchmark) => benchmark.id);
    const avgColumnId = `avg-${activeCategory.toLowerCase().replace(/\s+/g, "-")}`;

    setSummaryView(false);

    const visible = new Set([...coreColumnIds, avgColumnId, ...categoryBenchmarkIds]);
    const newVisibility: VisibilityState = {};
    allColumnIds.forEach((columnId) => {
      newVisibility[columnId] = visible.has(columnId);
    });
    setColumnVisibilitySafely(newVisibility);

    const sortingId = allColumnIds.includes(avgColumnId)
      ? avgColumnId
      : categoryBenchmarkIds[0] ?? "mmlu";

    setSortingSafely(sortingId, true);
    setColumnOrderSafely([...coreColumnIds, avgColumnId, ...categoryBenchmarkIds]);
  }, [activeCategory, allColumnIds, categoryBenchmarksMap, coreColumnIds, setColumnOrderSafely, setColumnVisibilitySafely, setSortingSafely]);

  React.useEffect(() => {
    if (!domain) return;
    if (activeCategory) return;

    const domainBenchmarkIds = getBenchmarkIdsForDomain(domain);
    const domainDef = domainDefinitions.find((d) => d.id === domain);
    const avgColumnIds = domainDef?.categories.map(
      (cat) => `avg-${cat.toLowerCase().replace(/\s+/g, "-")}`
    ) ?? [];

    setSummaryView(false);

    const visible = new Set([...coreColumnIds, ...avgColumnIds, ...domainBenchmarkIds]);
    const newVisibility: VisibilityState = {};
    allColumnIds.forEach((columnId) => {
      newVisibility[columnId] = visible.has(columnId);
    });
    setColumnVisibilitySafely(newVisibility);

    const sortingId = avgColumnIds.find((id) => allColumnIds.includes(id)) ?? 
      domainBenchmarkIds[0] ?? "coverage";
    setSortingSafely(sortingId, true);
    setColumnOrderSafely([...coreColumnIds, ...avgColumnIds, ...domainBenchmarkIds]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [domain, activeCategory, allColumnIds, coreColumnIds]);

  const resetLayout = () => {
    setBenchmarkWindowPage(0);
    setColumnOrderSafely(defaultColumnOrder);
    localStorage.removeItem("columnOrder");
    table.resetColumnVisibility();
  };

  const handleSearchQueryChange = React.useCallback(
    (nextValue: string) => {
      const normalized = nextValue.trim();
      if (normalized === searchQuery) return;

      enqueueSearchParamUpdates({
        q: normalized || null,
        page: "1",
      });
    },
    [enqueueSearchParamUpdates, searchQuery]
  );

  const handleLicenseChange = React.useCallback(
    (nextLicense: LicenseFilter) => {
      if (nextLicense === license) return;

      enqueueSearchParamUpdates({
        license: nextLicense === "all" ? null : nextLicense,
        page: "1",
      });
    },
    [enqueueSearchParamUpdates, license]
  );

  const handleClearDomain = React.useCallback(() => {
    enqueueSearchParamUpdates({
      domain: null,
      page: "1",
    });
  }, [enqueueSearchParamUpdates]);

  const handleSourcesFilterChange = React.useCallback(
    (nextSources: string[]) => {
      enqueueSearchParamUpdates({
        source: nextSources.length > 0 ? nextSources.join(",") : null,
        page: "1",
      });
    },
    [enqueueSearchParamUpdates]
  );

  const handleVerificationFilterChange = React.useCallback(
    (nextVerification: string[]) => {
      enqueueSearchParamUpdates({
        verification: nextVerification.length > 0 ? nextVerification.join(",") : null,
        page: "1",
      });
    },
    [enqueueSearchParamUpdates]
  );

  const handleCoverageModeChange = React.useCallback(
    (nextMode: CoverageMode) => {
      if (nextMode === coverageMode) return;
      enqueueSearchParamUpdates({
        coverageMode: nextMode === "assisted" ? null : nextMode,
        page: "1",
      });
    },
    [coverageMode, enqueueSearchParamUpdates]
  );

  const goToPage = React.useCallback(
    (page: number) => {
      const safePage = Math.max(1, Math.min(totalPages, page));
      if (safePage === currentPage) return;
      enqueueSearchParamUpdates({ page: String(safePage) });
    },
    [currentPage, enqueueSearchParamUpdates, totalPages]
  );

  const handlePageSizeChange = React.useCallback(
    (newPageSize: string) => {
      const size = parseInt(newPageSize, 10);
      if (size === pageSize) return;
      enqueueSearchParamUpdates({
        pageSize: String(size),
        page: "1",
      });
    },
    [enqueueSearchParamUpdates, pageSize]
  );

  const pageSizeOptions = [10, 25, 50, 100];

  return (
    <div className="space-y-6 pb-20 w-full">
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {searchQuery
          ? `Found ${totalRows} ${totalRows === 1 ? 'model' : 'models'} matching "${searchQuery}"`
          : `${totalRows} models in registry`}
      </div>
      <LeaderboardToolbar
        table={table}
        compareIds={compareIds || []}
        compareHref={compareHref}
        searchQuery={searchQuery}
        onSearchQueryChange={handleSearchQueryChange}
        resetLayout={resetLayout}
        summaryView={summaryView}
        setSummaryView={setSummaryView}
        license={license}
        onLicenseChange={handleLicenseChange}
        domain={domain}
        onClearDomain={handleClearDomain}
        sourcesFilter={sourcesFilter}
        onSourcesFilterChange={handleSourcesFilterChange}
        verificationFilter={verificationFilter}
        onVerificationFilterChange={handleVerificationFilterChange}
        coverageMode={coverageMode}
        onCoverageModeChange={handleCoverageModeChange}
        isMaximized={isMaximized}
        onToggleMaximized={toggleMaximized}
      />

      {coverageMode === "assisted" && (
        <p className="px-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground/70">
          Coverage-assisted mode enabled: estimated family-proxy scores are marked with ~
        </p>
      )}

      {!isDesktopViewport && (
        <div className="space-y-3">
          {table.getRowModel().rows.length === 0 ? (
            <div className="surface-card rounded-lg p-6 text-center text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">
              No systems match current filters
            </div>
          ) : (
            table.getRowModel().rows.map((row) => {
              const model = row.original;

              return (
                <div key={row.id} className="surface-card rounded-lg p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <Link href={`/model/${model.id}`} className="font-display text-base font-bold tracking-tight text-foreground transition-colors hover:text-primary">
                        {model.name}
                      </Link>
                      <p className="mt-1 text-xs font-mono tracking-wide text-muted-foreground">
                        {model.provider} · {model.releaseDate}
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label={`Toggle compare for ${model.name}`}
                      onClick={() => toggleCompare(model.id)}
                      className={cn(
                        "min-h-11 min-w-11 rounded-md border px-2 text-xs font-semibold",
                        compareIds.includes(model.id)
                          ? "border-primary/40 bg-primary/10 text-primary"
                          : "border-border bg-background text-muted-foreground"
                      )}
                    >
                      {compareIds.includes(model.id) ? "Added" : "Compare"}
                    </button>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {mobileHighlightIds.map((benchmarkId) => {
                      const benchmark = benchmarkById.get(benchmarkId);
                      if (!benchmark) return null;

                      const score = model.scores[benchmarkId]?.score;
                      return (
                        <div key={benchmarkId} className="data-module rounded-md px-2.5 py-2">
                          <p className="truncate text-[11px] font-mono tracking-wide text-muted-foreground">{benchmark.name}</p>
                          <p className="mt-1 text-sm font-bold tabular-nums text-foreground">
                            {score === null || score === undefined
                              ? "--"
                              : benchmark.maxScore > 100
                              ? score.toFixed(0)
                              : score.toFixed(1)}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
      
      {/* Maximized Overlay with Animations */}
      {isDesktopViewport && (isMaximized || isAnimatingOut) && (
        <div 
          className={cn(
            "fixed inset-0 z-[9999] bg-background flex flex-col",
            isAnimatingOut && "animate-out fade-out duration-200"
          )}
          style={{
            animation: isAnimatingOut ? 'fadeOut 200ms ease-in forwards' : 'fadeIn 200ms ease-out'
          }}
        >
          <style jsx>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes fadeOut {
              from { opacity: 1; }
              to { opacity: 0; }
            }
            @keyframes slideDown {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes slideUp {
              from { opacity: 1; transform: translateY(0); }
              to { opacity: 0; transform: translateY(-10px); }
            }
            @keyframes scaleIn {
              from { opacity: 0; transform: scale(0.98); }
              to { opacity: 1; transform: scale(1); }
            }
            @keyframes scaleOut {
              from { opacity: 1; transform: scale(1); }
              to { opacity: 0; transform: scale(0.98); }
            }
          `}</style>

          {/* Floating Header with Toolbar */}
          <div 
            className="flex flex-col border-b border-border bg-card shrink-0"
            style={{ 
              animation: isAnimatingOut 
                ? 'slideUp 200ms ease-in forwards' 
                : 'slideDown 300ms ease-out 50ms backwards' 
            }}
          >
            {/* Title Bar with Exit Button */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-border/50">
              <div className="flex items-center gap-3">
                <h2 className="font-display text-lg font-bold tracking-tight">Leaderboard</h2>
                {searchQuery && (
                  <span className="text-sm text-muted-foreground">
                    Search: &quot;{searchQuery}&quot;
                  </span>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={exitMaximized}
                className="rounded-full border-border/60 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 transition-colors"
              >
                <X className="h-4 w-4 mr-2" />
                Exit View
                <span className="ml-2 text-xs text-muted-foreground">(Esc)</span>
              </Button>
            </div>

            {/* Toolbar */}
            <div className="px-6 py-3">
              <LeaderboardToolbar
                table={table}
                compareIds={compareIds || []}
                compareHref={compareHref}
                searchQuery={searchQuery}
                onSearchQueryChange={handleSearchQueryChange}
                resetLayout={resetLayout}
                summaryView={summaryView}
                setSummaryView={setSummaryView}
                license={license}
                onLicenseChange={handleLicenseChange}
                domain={domain}
                onClearDomain={handleClearDomain}
                sourcesFilter={sourcesFilter}
                onSourcesFilterChange={handleSourcesFilterChange}
                verificationFilter={verificationFilter}
                onVerificationFilterChange={handleVerificationFilterChange}
                coverageMode={coverageMode}
                onCoverageModeChange={handleCoverageModeChange}
                isMaximized={isMaximized}
                onToggleMaximized={toggleMaximized}
              />
            </div>
          </div>

          {/* Table Content */}
          <div 
            className="flex-1 overflow-hidden p-6"
            style={{ 
              animation: isAnimatingOut 
                ? 'scaleOut 200ms ease-in forwards' 
                : 'scaleIn 300ms ease-out 100ms backwards' 
            }}
          >
            <div className="relative h-full overflow-auto rounded-2xl border border-border bg-card shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-8 bg-gradient-to-r from-card to-transparent opacity-0 transition-opacity group-hover/table:opacity-100" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-8 bg-gradient-to-l from-card to-transparent" />
              <Table>
                <TableHeader className="sticky top-0 z-20 border-b border-border bg-card">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow
                      key={headerGroup.id}
                      className="border-border/40 hover:bg-transparent h-12"
                    >
                      {headerGroup.headers.map((header) => {
                        const isDraggable = header.id !== "select";
                        return (
                          <TableHead
                            key={header.id}
                            className={cn(
                              "group/head h-12 px-5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/60 transition-all duration-200",
                              isDraggable && "cursor-grab active:cursor-grabbing",
                              draggedColumn === header.id && "opacity-20",
                              draggedColumn && draggedColumn !== header.id && isDraggable && "hover:bg-muted/40",
                              header.id === "select" && "z-40 bg-card md:sticky",
                              header.id === "name" && "z-40 bg-card md:sticky border-r border-border shadow-[4px_0_8px_-4px_rgba(0,0,0,0.1)]"
                            )}
                            style={getStickyColumnStyle(header.id)}
                            draggable={isDraggable}
                            onDragStart={() => handleDragStart(header.id)}
                            onDragOver={handleDragOver}
                            onDrop={() => handleDrop(header.id)}
                            onDragEnd={() => setDraggedColumn(null)}
                          >
                            <div className="flex items-center gap-1.5">
                              {isDraggable && (
                                <GripVertical className="-ml-1 h-3 w-3 opacity-0 transition-opacity group-hover/head:opacity-30" />
                              )}
                              {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                            </div>
                          </TableHead>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {desktopRows?.length ? (
                    desktopRows.map((row) => (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                        className="group/row relative h-14 border-border/30 transition-colors hover:bg-muted/30 data-[state=selected]:bg-muted/60"
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell
                            key={cell.id}
                            className={cn(
                              "relative z-10 px-5 py-3 align-middle transition-colors",
                              cell.column.id === "select" && "z-40 bg-card md:sticky",
                              cell.column.id === "name" && "z-40 bg-card md:sticky border-r border-border shadow-[4px_0_8px_-4px_rgba(0,0,0,0.1)]"
                            )}
                            style={getStickyColumnStyle(cell.column.id)}
                          >
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className="h-48 text-center font-mono text-muted-foreground/40 uppercase tracking-[0.2em] text-[10px]"
                      >
                        No systems match criteria
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Pagination Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-border bg-card shrink-0">
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
              <span>{totalRows} Models Registered</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>{benchmarks.length} Benchmarks Active</span>
            </div>

            <div className="flex items-center gap-1.5">
              {/* Page Size Selector */}
              <div className="flex items-center gap-2 mr-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">Show</span>
                <Select value={String(pageSize)} onValueChange={handlePageSizeChange}>
                  <SelectTrigger className="h-7 w-[70px] rounded-full border-border/60 bg-muted/30 text-[10px] font-bold uppercase tracking-wider focus:ring-1 focus:ring-primary/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent align="end" className="rounded-xl border-border bg-card min-w-[80px]">
                    {pageSizeOptions.map((size) => (
                      <SelectItem 
                        key={size} 
                        value={String(size)}
                        className="text-xs font-medium cursor-pointer rounded-lg focus:bg-primary/5"
                      >
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">/ page</span>
              </div>

              <div className="mr-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                <span>Page {currentPage} of {totalPages}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 rounded-full p-0 hover:bg-muted"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage <= 1}
                aria-label="Go to previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 rounded-full p-0 hover:bg-muted"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage >= totalPages}
                aria-label="Go to next page"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Floating Exit Button (Bottom Right) */}
          <button
            onClick={exitMaximized}
            className="fixed bottom-6 right-6 z-[10000] flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border shadow-lg hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-all duration-200 group"
            aria-label="Exit maximized view"
          >
            <X className="h-5 w-5" />
            <span className="absolute right-full mr-3 px-2 py-1 bg-card border border-border rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Exit (Esc)
            </span>
          </button>
        </div>
      )}

      {/* Normal Table Container - Hidden when maximized */}
      {isDesktopViewport && (
        <div className={cn(
          "relative hidden max-h-[70vh] overflow-auto rounded-2xl border border-border bg-card md:block shadow-sm",
          (isMaximized || isAnimatingOut) && "md:hidden"
        )}>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-8 bg-gradient-to-r from-card to-transparent opacity-0 transition-opacity group-hover/table:opacity-100" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-8 bg-gradient-to-l from-card to-transparent" />
        <Table>
          <TableHeader className="sticky top-0 z-20 border-b border-border bg-card">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-border/40 hover:bg-transparent h-12"
              >
                {headerGroup.headers.map((header) => {
                  const isDraggable = header.id !== "select";
                  return (
                    <TableHead
                      key={header.id}
                      className={cn(
                        "group/head h-12 px-5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/60 transition-all duration-200",
                        isDraggable && "cursor-grab active:cursor-grabbing",
                        draggedColumn === header.id && "opacity-20",
                        draggedColumn && draggedColumn !== header.id && isDraggable && "hover:bg-muted/40",
                        header.id === "select" && "z-40 bg-card md:sticky",
                        header.id === "name" && "z-40 bg-card md:sticky border-r border-border shadow-[4px_0_8px_-4px_rgba(0,0,0,0.1)]"
                      )}
                      style={getStickyColumnStyle(header.id)}
                      draggable={isDraggable}
                      onDragStart={() => handleDragStart(header.id)}
                      onDragOver={handleDragOver}
                      onDrop={() => handleDrop(header.id)}
                      onDragEnd={() => setDraggedColumn(null)}
                    >
                      <div className="flex items-center gap-1.5">
                        {isDraggable && (
                          <GripVertical className="-ml-1 h-3 w-3 opacity-0 transition-opacity group-hover/head:opacity-30" />
                        )}
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </div>
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {desktopRows?.length ? (
              desktopRows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="group/row relative h-14 border-border/30 transition-colors hover:bg-muted/30 data-[state=selected]:bg-muted/60"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={cn(
                        "relative z-10 px-5 py-3 align-middle transition-colors",
                        cell.column.id === "select" && "z-40 bg-card md:sticky",
                        cell.column.id === "name" && "z-40 bg-card md:sticky border-r border-border shadow-[4px_0_8px_-4px_rgba(0,0,0,0.1)]"
                      )}
                      style={getStickyColumnStyle(cell.column.id)}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-48 text-center font-mono text-muted-foreground/40 uppercase tracking-[0.2em] text-[10px]"
                >
                  No systems match criteria
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        </div>
      )}

      {/* Normal Pagination - Hidden when maximized */}
      {isDesktopViewport && (
        <div className={cn(
          "flex flex-wrap items-center justify-between gap-4 px-2 py-2",
          (isMaximized || isAnimatingOut) && "md:hidden"
        )}>
        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
          <span>{totalRows} Models Registered</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>{benchmarks.length} Benchmarks Active</span>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Page Size Selector */}
          <div className="flex items-center gap-2 mr-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">Show</span>
            <Select value={String(pageSize)} onValueChange={handlePageSizeChange}>
              <SelectTrigger className="h-7 w-[70px] rounded-full border-border/60 bg-muted/30 text-[10px] font-bold uppercase tracking-wider focus:ring-1 focus:ring-primary/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="end" className="rounded-xl border-border bg-card min-w-[80px]">
                {pageSizeOptions.map((size) => (
                  <SelectItem 
                    key={size} 
                    value={String(size)}
                    className="text-xs font-medium cursor-pointer rounded-lg focus:bg-primary/5"
                  >
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">/ page</span>
          </div>

          <div className="mr-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
            <span>Page {currentPage} of {totalPages}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 rounded-full p-0 hover:bg-muted"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage <= 1}
            aria-label="Go to previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 rounded-full p-0 hover:bg-muted"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage >= totalPages}
            aria-label="Go to next page"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        </div>
      )}

      {compareIds.length > 0 && (
        <div className="fixed bottom-4 inset-x-4 z-50 md:hidden">
          <Button asChild className="h-12 w-full text-sm font-semibold shadow-xl">
            <Link href={compareHref}>
              Open Compare ({compareIds.length}/3)
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
