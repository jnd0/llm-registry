"use client";

import * as React from "react";
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Model, Benchmark } from "@/types";
import { useQueryState, parseAsArrayOf, parseAsString } from "nuqs";
import { createColumns, ModelComputedMetrics } from "./columns";
import { LeaderboardToolbar } from "./toolbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { normalizeScore } from "@/lib/stats";

interface DataTableProps {
  data: Model[];
  benchmarks: Benchmark[];
  activeCategory?: string | null;
  activeCategorySlug?: string | null;
}

export function DataTable({ data, benchmarks, activeCategory = null, activeCategorySlug = null }: DataTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([
    { id: "mmlu", desc: true },
  ]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnOrder, setColumnOrder] = React.useState<string[]>([]);
  const [draggedColumn, setDraggedColumn] = React.useState<string | null>(null);
  const [summaryView, setSummaryView] = React.useState(() => !activeCategory);

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

  const groupedBenchmarkIds = React.useMemo(
    () => categories.flatMap((category) => (categoryBenchmarksMap.get(category) ?? []).map((benchmark) => benchmark.id)),
    [categories, categoryBenchmarksMap]
  );

  const coreColumnIds = React.useMemo(() => ["select", "name", "releaseDate", "context", "coverage"], []);

  const allColumnIds = React.useMemo(
    () => [...coreColumnIds, ...avgColumnIds, ...groupedBenchmarkIds],
    [coreColumnIds, avgColumnIds, groupedBenchmarkIds]
  );

  const defaultColumnOrder = React.useMemo(
    () => [...coreColumnIds, ...avgColumnIds, ...groupedBenchmarkIds],
    [coreColumnIds, avgColumnIds, groupedBenchmarkIds]
  );

  const mobileHighlightIds = React.useMemo(
    () => ["mmlu", "gpqa-diamond", "swe-bench-verified", "lmarena-elo"],
    []
  );

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

  const latestScoreDate = React.useMemo(() => {
    let latest = "";
    data.forEach((model) => {
      Object.values(model.scores).forEach((entry) => {
        if (entry.asOfDate && entry.asOfDate > latest) {
          latest = entry.asOfDate;
        }
      });
    });
    return latest || null;
  }, [data]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onColumnOrderChange: setColumnOrder,
    initialState: {
      pagination: {
        pageSize: 25,
      },
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      columnOrder,
    },
  });

  const tableContainerRef = React.useRef<HTMLDivElement | null>(null);
  const desktopRows = table.getRowModel().rows;

  const rowVirtualizer = useVirtualizer({
    count: desktopRows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 64,
    overscan: 8,
  });

  const virtualRows = rowVirtualizer.getVirtualItems();

  // Initialize column order from localStorage or defaults
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768 && !activeCategory) {
      setSummaryView(true);
    }

    const savedOrder = localStorage.getItem("columnOrder");
    if (savedOrder) {
      try {
        setColumnOrder(JSON.parse(savedOrder));
        return;
      } catch (e) {
        console.error("Failed to parse saved column order", e);
      }
    }

    if (benchmarks.length > 0) {
      setColumnOrder(defaultColumnOrder);
    }
  }, [activeCategory, benchmarks.length, defaultColumnOrder]);

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

    setColumnOrder(newOrder);
    setDraggedColumn(null);
  };

  // Handle Summary View toggle
  React.useEffect(() => {
    if (summaryView) {
      const essentialColumns = [...coreColumnIds, ...avgColumnIds];
      
      const newVisibility: VisibilityState = {};
      allColumnIds.forEach((columnId) => {
        newVisibility[columnId] = essentialColumns.includes(columnId);
      });
      setColumnVisibility(newVisibility);
    } else {
      const newVisibility: VisibilityState = {};
      allColumnIds.forEach((columnId) => {
        newVisibility[columnId] = !columnId.startsWith("avg-");
      });
      setColumnVisibility(newVisibility);
    }
  }, [allColumnIds, avgColumnIds, coreColumnIds, summaryView]);

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
    setColumnVisibility(newVisibility);

    const sortingId = allColumnIds.includes(avgColumnId)
      ? avgColumnId
      : categoryBenchmarkIds[0] ?? "mmlu";

    setSorting([{ id: sortingId, desc: true }]);
    setColumnOrder([...coreColumnIds, avgColumnId, ...categoryBenchmarkIds]);
  }, [activeCategory, allColumnIds, categoryBenchmarksMap, coreColumnIds]);

  const resetLayout = () => {
    setColumnOrder(defaultColumnOrder);
    localStorage.removeItem("columnOrder");
    table.resetColumnVisibility();
  };

  const applyPreset = (preset: "general" | "coding" | "agentic" | "vision" | "video") => {
    const categoryTargets: Record<string, string[]> = {
      coding: ["Coding"],
      agentic: ["Agentic"],
      vision: ["Vision"],
      video: ["Video"],
    };

    if (preset === "general") {
      setSummaryView(true);
      const visible = new Set([...coreColumnIds, ...avgColumnIds]);
      const newVisibility: VisibilityState = {};
      allColumnIds.forEach((columnId) => {
        newVisibility[columnId] = visible.has(columnId);
      });
      setColumnVisibility(newVisibility);
      return;
    }

    setSummaryView(false);
    const categories = categoryTargets[preset] ?? [];
    const targetBenchmarkIds = benchmarks
      .filter((benchmark) => categories.includes(benchmark.category))
      .map((benchmark) => benchmark.id);

    const visible = new Set([...coreColumnIds, ...targetBenchmarkIds]);
    const newVisibility: VisibilityState = {};
    allColumnIds.forEach((columnId) => {
      newVisibility[columnId] = visible.has(columnId);
    });
    setColumnVisibility(newVisibility);
  };

  return (
    <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 pb-20">
      <LeaderboardToolbar 
        table={table} 
        compareIds={compareIds || []} 
        compareHref={compareHref}
        resetLayout={resetLayout}
        summaryView={summaryView}
        setSummaryView={setSummaryView}
        applyPreset={applyPreset}
      />

      <div className="md:hidden space-y-3">
        {table.getRowModel().rows.length === 0 ? (
          <div className="rounded-lg border border-white/10 bg-card/30 p-6 text-center text-xs font-mono uppercase tracking-widest text-muted-foreground">
            No systems match criteria
          </div>
        ) : (
          table.getRowModel().rows.map((row) => {
            const model = row.original;

            return (
              <div key={row.id} className="rounded-lg border border-white/10 bg-card/35 p-4 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Link href={`/model/${model.id}`} className="font-display text-base font-bold tracking-tight text-foreground hover:text-primary transition-colors">
                      {model.name}
                    </Link>
                    <p className="mt-1 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                      {model.provider} | {model.releaseDate}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label={`Toggle compare for ${model.name}`}
                    onClick={() => toggleCompare(model.id)}
                    className={cn(
                      "min-h-11 min-w-11 rounded-md border text-[10px] font-mono uppercase tracking-wider px-2",
                      compareIds.includes(model.id)
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-white/15 bg-background/40 text-muted-foreground"
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
                      <div key={benchmarkId} className="rounded-md border border-white/10 bg-background/40 px-2.5 py-2">
                        <p className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground truncate">{benchmark.name}</p>
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
      
      {/* The Table Container */}
      <div
        ref={tableContainerRef}
        className="hidden md:block rounded-xl border border-white/5 bg-card/20 overflow-auto backdrop-blur-sm relative shadow-2xl max-h-[70vh]"
      >
        <Table>
          <TableHeader className="bg-card/60 sticky top-0 z-20 backdrop-blur-xl border-b border-white/5 shadow-sm">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-white/5 hover:bg-transparent"
              >
                {headerGroup.headers.map((header) => {
                  const isDraggable = header.id !== "select";
                  return (
                    <TableHead
                      key={header.id}
                      className={cn(
                        "h-14 text-muted-foreground font-bold font-mono text-[10px] uppercase tracking-wider px-6 first:pl-8 transition-all duration-200 group/head",
                        isDraggable && "cursor-grab active:cursor-grabbing",
                        draggedColumn === header.id && "opacity-20",
                        draggedColumn && draggedColumn !== header.id && isDraggable && "hover:bg-primary/5 hover:border-l-2 hover:border-l-primary",
                        header.id === "select" && "md:sticky md:left-0 z-40 bg-card/90",
                        header.id === "name" && "md:sticky md:left-[70px] z-40 bg-card/90",
                        header.id === "coverage" && "md:sticky md:left-[360px] z-40 bg-card/90"
                      )}
                      draggable={isDraggable}
                      onDragStart={() => handleDragStart(header.id)}
                      onDragOver={handleDragOver}
                      onDrop={() => handleDrop(header.id)}
                      onDragEnd={() => setDraggedColumn(null)}
                    >
                      <div className="flex items-center gap-2">
                        {isDraggable && (
                          <GripVertical className="w-3 h-3 opacity-0 group-hover/head:opacity-30 -ml-2 transition-opacity" />
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
              <>
                {virtualRows.length > 0 && virtualRows[0].start > 0 && (
                  <TableRow>
                    <TableCell colSpan={table.getVisibleLeafColumns().length} style={{ height: virtualRows[0].start }} />
                  </TableRow>
                )}

                {virtualRows.map((virtualRow) => {
                  const row = desktopRows[virtualRow.index];
                  if (!row) return null;

                  return (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className="border-white/5 hover:bg-white/[0.02] transition-colors data-[state=selected]:bg-primary/5 group/row relative h-16"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id}
                          className={cn(
                            "py-4 px-6 first:pl-8 relative z-10 align-middle",
                            cell.column.id === "select" && "md:sticky md:left-0 z-30 bg-card",
                            cell.column.id === "name" && "md:sticky md:left-[70px] z-30 bg-card",
                            cell.column.id === "coverage" && "md:sticky md:left-[360px] z-30 bg-card"
                          )}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}

                {virtualRows.length > 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={table.getVisibleLeafColumns().length}
                      style={{
                        height: rowVirtualizer.getTotalSize() - virtualRows[virtualRows.length - 1].end,
                      }}
                    />
                  </TableRow>
                )}
              </>
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-48 text-center font-mono text-muted-foreground uppercase tracking-widest text-xs"
                >
                  No systems match criteria
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Footer Stats - Subtler */}
      <div className="flex items-center justify-between px-4 opacity-60 hover:opacity-90 transition-opacity gap-4 flex-wrap">
        <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
            Showing {table.getRowModel().rows.length}/{data.length} Models | {benchmarks.length} Benchmarks
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
            Page {table.getState().pagination.pageIndex + 1}/{table.getPageCount()}
          </span>
          <Button
            variant="outline"
            size="sm"
            className="h-7 px-2 text-[10px] font-mono uppercase"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Prev
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-7 px-2 text-[10px] font-mono uppercase"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
          <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
            Latest Score Date: {latestScoreDate ?? "Unknown"}
          </span>
        </div>
      </div>

      {compareIds.length > 0 && (
        <div className="fixed bottom-4 inset-x-4 z-50 md:hidden">
          <Button asChild className="h-12 w-full font-mono text-xs uppercase tracking-widest shadow-xl">
            <Link href={compareHref}>
              Open Compare ({compareIds.length}/3)
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
