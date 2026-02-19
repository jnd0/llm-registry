"use client";

import { Model } from "@/types";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";

interface BenchmarkOption {
  id: string;
  name: string;
  category: string;
}

interface ExploreClientProps {
  models: Model[];
  benchmarkOptions: BenchmarkOption[];
}

type XAxisOption = "price" | "inputPrice" | "outputPrice" | "contextWindow" | "releaseDate";
type YAxisOption = "coverage" | string;

const xAxisLabels: Record<XAxisOption, string> = {
  price: "Total Price ($/M)",
  inputPrice: "Input Price ($/M)",
  outputPrice: "Output Price ($/M)",
  contextWindow: "Context Window (tokens)",
  releaseDate: "Release Date",
};

interface ChartDataPoint {
  model: Model;
  x: number;
  y: number;
  xPixel: number;
  yPixel: number;
}

export function ExploreClient({ 
  models, 
  benchmarkOptions,
}: ExploreClientProps) {
  const [xAxis, setXAxis] = useState<XAxisOption>("price");
  const [yAxis, setYAxis] = useState<YAxisOption>("coverage");
  const [hoveredPoint, setHoveredPoint] = useState<ChartDataPoint | null>(null);
  const [selectedLicense, setSelectedLicense] = useState<"all" | "open" | "proprietary">("all");
  const [logScale, setLogScale] = useState(true);
  const [benchmarkSearch, setBenchmarkSearch] = useState("");
  const [showBenchmarkDropdown, setShowBenchmarkDropdown] = useState(false);

  const filteredModels = useMemo(() => {
    return models.filter((m) => {
      if (selectedLicense === "open") return m.isOpenSource;
      if (selectedLicense === "proprietary") return !m.isOpenSource;
      return true;
    });
  }, [models, selectedLicense]);

  const filteredBenchmarks = useMemo(() => {
    if (!benchmarkSearch) return benchmarkOptions;
    const search = benchmarkSearch.toLowerCase();
    return benchmarkOptions.filter(
      (b) => b.name.toLowerCase().includes(search) || b.id.toLowerCase().includes(search)
    );
  }, [benchmarkOptions, benchmarkSearch]);

  const baseChartData = useMemo(() => {
    return filteredModels
      .map((model) => {
        let xValue: number | null = null;
        
        switch (xAxis) {
          case "price":
            xValue = model.specs.pricing.input + model.specs.pricing.output;
            break;
          case "inputPrice":
            xValue = model.specs.pricing.input;
            break;
          case "outputPrice":
            xValue = model.specs.pricing.output;
            break;
          case "contextWindow":
            xValue = model.specs.contextWindow;
            break;
          case "releaseDate":
            xValue = new Date(model.releaseDate).getTime();
            break;
        }

        let yValue: number | null = null;
        if (yAxis === "coverage") {
          const scores = Object.values(model.scores);
          const validScores = scores.filter((s) => s.score !== null && s.score !== undefined);
          yValue = validScores.length > 0 
            ? (validScores.length / Object.keys(model.scores).length) * 100 
            : null;
        } else {
          yValue = model.scores[yAxis]?.score ?? null;
        }

        if (xValue === null || yValue === null || xValue <= 0) return null;

        return {
          model,
          x: xValue,
          y: yValue,
        };
      })
      .filter((d): d is NonNullable<typeof d> => d !== null);
  }, [filteredModels, xAxis, yAxis]);

  const chartData = useMemo(() => {
    if (baseChartData.length === 0) return { data: [], xMin: 0, xMax: 1, yMin: 0, yMax: 100 };

    const xValues = baseChartData.map((d) => d.x);
    const yValues = baseChartData.map((d) => d.y);
    
    let xMin: number;
    let xMax: number;
    
    if (logScale && (xAxis === "price" || xAxis === "inputPrice" || xAxis === "outputPrice")) {
      xMin = Math.min(...xValues);
      xMax = Math.max(...xValues);
    } else {
      xMin = Math.min(...xValues);
      xMax = Math.max(...xValues);
    }
    
    const yMin = Math.min(...yValues);
    const yMax = Math.max(...yValues);
    const xRange = logScale && (xAxis === "price" || xAxis === "inputPrice" || xAxis === "outputPrice")
      ? Math.log10(xMax) - Math.log10(xMin) || 1
      : xMax - xMin || 1;
    const yRange = yMax - yMin || 1;

    const chartWidth = 800;
    const chartHeight = 500;
    const padding = { top: 30, right: 30, bottom: 60, left: 70 };

    const data = baseChartData.map((point) => {
      const xLog = logScale && (xAxis === "price" || xAxis === "inputPrice" || xAxis === "outputPrice");
      const xNormalized = xLog
        ? (Math.log10(point.x) - Math.log10(xMin)) / xRange
        : (point.x - xMin) / xRange;
      
      return {
        ...point,
        xPixel: xNormalized * (chartWidth - padding.left - padding.right),
        yPixel: (chartHeight - padding.top - padding.bottom) * (1 - (point.y - yMin) / yRange),
      };
    });

    return { data, xMin, xMax, yMin, yMax };
  }, [baseChartData, logScale, xAxis]);

  const chartWidth = 800;
  const chartHeight = 500;
  const padding = { top: 30, right: 30, bottom: 60, left: 70 };

  const formatXValue = (value: number, useLog?: boolean): string => {
    switch (xAxis) {
      case "price":
      case "inputPrice":
      case "outputPrice":
        if (useLog && logScale) {
          const logVal = Math.pow(10, value);
          return `$${logVal.toFixed(2)}`;
        }
        return `$${value.toFixed(2)}`;
      case "contextWindow":
        return value >= 1000000 
          ? `${(value / 1000000).toFixed(1)}M` 
          : `${(value / 1000).toFixed(0)}k`;
      case "releaseDate":
        return new Date(value).toLocaleDateString();
      default:
        return value.toFixed(0);
    }
  };

  const formatYValue = (value: number): string => {
    return `${value.toFixed(1)}`;
  };

  const getXTickValues = () => {
    if (chartData.data.length === 0) return [];
    
    if (logScale && (xAxis === "price" || xAxis === "inputPrice" || xAxis === "outputPrice")) {
      const logMin = Math.log10(chartData.xMin);
      const logMax = Math.log10(chartData.xMax);
      const ticks: number[] = [];
      const startPow = Math.floor(logMin);
      const endPow = Math.ceil(logMax);
      for (let p = startPow; p <= endPow; p++) {
        ticks.push(p);
      }
      return ticks.slice(0, 6);
    }
    
    return [0, 0.25, 0.5, 0.75, 1];
  };

  const xTicks = getXTickValues();

  return (
    <div className="space-y-4">
      <div>
        <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
          Explore
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Interactive visualization for exploring model relationships.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">X:</span>
          <select
            value={xAxis}
            onChange={(e) => setXAxis(e.target.value as XAxisOption)}
            className="h-8 rounded-lg border border-border bg-background px-2 text-sm"
          >
            <option value="price">Total Price</option>
            <option value="inputPrice">Input Price</option>
            <option value="outputPrice">Output Price</option>
            <option value="contextWindow">Context Window</option>
            <option value="releaseDate">Release Date</option>
          </select>
        </div>

        {(xAxis === "price" || xAxis === "inputPrice" || xAxis === "outputPrice") && (
          <label className="flex items-center gap-1.5 text-xs text-muted-foreground cursor-pointer">
            <input
              type="checkbox"
              checked={logScale}
              onChange={(e) => setLogScale(e.target.checked)}
              className="h-3.5 w-3.5 rounded border-border"
            />
            <span>Log scale</span>
          </label>
        )}

        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">Y:</span>
          <div className="relative">
            <button
              onClick={() => setShowBenchmarkDropdown(!showBenchmarkDropdown)}
              className="h-8 rounded-lg border border-border bg-background px-3 text-sm flex items-center gap-2 min-w-[160px]"
            >
              <span className="truncate">
                {yAxis === "coverage" ? "Coverage %" : benchmarkOptions.find((b) => b.id === yAxis)?.name ?? "Select..."}
              </span>
              <ChevronDown className="h-3 w-3 ml-auto shrink-0" />
            </button>
            
            {showBenchmarkDropdown && (
              <div className="absolute top-full left-0 mt-1 z-50 w-64 rounded-lg border border-border bg-popover shadow-lg">
                <div className="p-2 border-b border-border">
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search benchmarks..."
                      value={benchmarkSearch}
                      onChange={(e) => setBenchmarkSearch(e.target.value)}
                      className="h-7 w-full rounded border border-border bg-background pl-7 pr-2 text-xs"
                    />
                  </div>
                </div>
                <div className="max-h-64 overflow-y-auto p-1">
                  <button
                    onClick={() => {
                      setYAxis("coverage");
                      setShowBenchmarkDropdown(false);
                      setBenchmarkSearch("");
                    }}
                    className={cn(
                      "w-full rounded px-2 py-1.5 text-left text-xs hover:bg-muted",
                      yAxis === "coverage" && "bg-muted"
                    )}
                  >
                    Coverage %
                  </button>
                  {filteredBenchmarks.slice(0, 50).map((b) => (
                    <button
                      key={b.id}
                      onClick={() => {
                        setYAxis(b.id);
                        setShowBenchmarkDropdown(false);
                        setBenchmarkSearch("");
                      }}
                      className={cn(
                        "w-full rounded px-2 py-1.5 text-left text-xs hover:bg-muted truncate",
                        yAxis === b.id && "bg-muted"
                      )}
                    >
                      {b.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 bg-muted/30 p-0.5 rounded-full border border-border/40">
          <button
            onClick={() => setSelectedLicense("all")}
            className={cn(
              "h-6 rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider transition-all",
              selectedLicense === "all" ? "bg-background text-primary shadow-sm" : "text-muted-foreground"
            )}
          >
            All
          </button>
          <button
            onClick={() => setSelectedLicense("open")}
            className={cn(
              "h-6 rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider transition-all",
              selectedLicense === "open" ? "bg-background text-primary shadow-sm" : "text-muted-foreground"
            )}
          >
            Open
          </button>
          <button
            onClick={() => setSelectedLicense("proprietary")}
            className={cn(
              "h-6 rounded-full px-2.5 text-[10px] font-bold uppercase tracking-wider transition-all",
              selectedLicense === "proprietary" ? "bg-background text-primary shadow-sm" : "text-muted-foreground"
            )}
          >
            Proprietary
          </button>
        </div>

        <span className="text-xs text-muted-foreground font-mono">
          {chartData.data.length} models
        </span>
      </div>

      {chartData.data.length === 0 ? (
        <div className="surface-card rounded-xl border border-border/40 p-8 text-center">
          <p className="text-sm text-muted-foreground">
            No models match the current filters. Try adjusting the license filter or axis selection.
          </p>
        </div>
      ) : (
        <div className="surface-card rounded-xl border border-border/40 p-4">
          <div className="relative" style={{ height: chartHeight }}>
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="w-full h-full"
            >
              <g transform={`translate(${padding.left}, ${padding.top})`}>
                <rect
                  x={0}
                  y={0}
                  width={chartWidth - padding.left - padding.right}
                  height={chartHeight - padding.top - padding.bottom}
                  fill="var(--muted)"
                  fillOpacity={0.1}
                  rx={4}
                />

                {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
                  const y = (chartHeight - padding.top - padding.bottom) * (1 - ratio);
                  const value = chartData.yMin + (chartData.yMax - chartData.yMin) * ratio;
                  return (
                    <g key={ratio}>
                      <line
                        x1={0}
                        y1={y}
                        x2={chartWidth - padding.left - padding.right}
                        y2={y}
                        stroke="var(--border)"
                        strokeDasharray="4 4"
                        opacity={0.5}
                      />
                      <text
                        x={-10}
                        y={y}
                        textAnchor="end"
                        alignmentBaseline="middle"
                        className="fill-muted-foreground text-[10px] font-mono"
                      >
                        {formatYValue(value)}
                      </text>
                    </g>
                  );
                })}

                {xTicks.map((tick) => {
                  const x = logScale && (xAxis === "price" || xAxis === "inputPrice" || xAxis === "outputPrice")
                    ? ((tick - Math.log10(chartData.xMin)) / (Math.log10(chartData.xMax) - Math.log10(chartData.xMin))) * (chartWidth - padding.left - padding.right)
                    : (chartWidth - padding.left - padding.right) * tick;
                  const value = logScale && (xAxis === "price" || xAxis === "inputPrice" || xAxis === "outputPrice")
                    ? tick
                    : chartData.xMin + (chartData.xMax - chartData.xMin) * tick;
                  return (
                    <g key={tick}>
                      <line
                        x1={x}
                        y1={0}
                        x2={x}
                        y2={chartHeight - padding.top - padding.bottom}
                        stroke="var(--border)"
                        strokeDasharray="4 4"
                        opacity={0.5}
                      />
                      <text
                        x={x}
                        y={chartHeight - padding.top - padding.bottom + 20}
                        textAnchor="middle"
                        className="fill-muted-foreground text-[10px] font-mono"
                      >
                        {formatXValue(value, true)}
                      </text>
                    </g>
                  );
                })}

                {chartData.data.map((point) => {
                  const isHovered = hoveredPoint?.model.id === point.model.id;
                  
                  return (
                    <g key={point.model.id}>
                      <circle
                        cx={point.xPixel}
                        cy={point.yPixel}
                        r={isHovered ? 8 : 5}
                        fill={point.model.isOpenSource ? "var(--chart-2)" : "var(--chart-1)"}
                        stroke={isHovered ? "var(--foreground)" : "transparent"}
                        strokeWidth={2}
                        opacity={isHovered ? 1 : 0.7}
                        className="cursor-pointer transition-all"
                        onMouseEnter={() => setHoveredPoint(point)}
                        onMouseLeave={() => setHoveredPoint(null)}
                      />
                    </g>
                  );
                })}
              </g>

              <text
                x={chartWidth / 2}
                y={chartHeight - 10}
                textAnchor="middle"
                className="fill-muted-foreground text-[10px] font-medium"
              >
                {xAxisLabels[xAxis]}{logScale && (xAxis === "price" || xAxis === "inputPrice" || xAxis === "outputPrice") ? " (log)" : ""}
              </text>
              <text
                x={20}
                y={chartHeight / 2}
                textAnchor="middle"
                transform={`rotate(-90, 20, ${chartHeight / 2})`}
                className="fill-muted-foreground text-[10px] font-medium"
              >
                {yAxis === "coverage" ? "Coverage %" : benchmarkOptions.find((b) => b.id === yAxis)?.name ?? "Score"}
              </text>
            </svg>

            {hoveredPoint && (
              <div
                className="absolute pointer-events-none z-10"
                style={{
                  left: `${hoveredPoint.xPixel + padding.left + 15}px`,
                  top: `${hoveredPoint.yPixel + padding.top}px`,
                }}
              >
                <div className="rounded-lg border border-border bg-popover p-3 shadow-lg">
                  <p className="font-display text-sm font-bold text-foreground">
                    {hoveredPoint.model.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {hoveredPoint.model.provider}
                  </p>
                  <div className="mt-2 text-xs font-mono">
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">X:</span>
                      <span className="text-foreground">
                        {formatXValue(hoveredPoint.x)}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 mt-1">
                      <span className="text-muted-foreground">Y:</span>
                      <span className="text-foreground">
                        {formatYValue(hoveredPoint.y)}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/model/${hoveredPoint.model.id}`}
                    className="block mt-2 text-xs text-primary hover:underline pointer-events-auto"
                  >
                    View Model →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "var(--chart-1)" }} />
          <span className="text-xs text-muted-foreground">Proprietary</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "var(--chart-2)" }} />
          <span className="text-xs text-muted-foreground">Open Source</span>
        </div>
      </div>
    </div>
  );
}
