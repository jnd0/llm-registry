"use client";

import { Table } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, RotateCcw, LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Model } from "@/types";

interface LeaderboardToolbarProps {
  table: Table<Model>;
  compareIds: string[];
  compareHref: string;
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
  resetLayout: () => void;
  summaryView: boolean;
  setSummaryView: (value: boolean) => void;
  applyPreset: (preset: "general" | "coding" | "agentic" | "vision" | "video") => void;
}

export function LeaderboardToolbar({ 
  table, 
  compareIds, 
  compareHref,
  searchQuery,
  onSearchQueryChange,
  resetLayout,
  summaryView,
  setSummaryView,
  applyPreset
}: LeaderboardToolbarProps) {
  const [searchValue, setSearchValue] = useState(searchQuery);

  useEffect(() => {
    setSearchValue(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearchQueryChange(searchValue);
    }, 250);

    return () => clearTimeout(timeout);
  }, [onSearchQueryChange, searchValue]);

  return (
    <div className="surface-panel rounded-xl border-border/70 bg-card p-4 sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex w-full flex-col gap-3 md:flex-row md:items-center md:gap-2 lg:w-auto">
          <div className="group/search relative min-w-0 flex-1 md:w-[300px] lg:w-[340px]">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within/search:text-primary" aria-hidden="true" />
            <Input
              placeholder="Search models…"
              aria-label="Search models"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              className="h-11 w-full rounded-xl border-border bg-background pl-10 text-[15px]"
            />
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setSummaryView(!summaryView)}
            className={cn(
              "h-11 min-w-[150px] rounded-xl px-4 text-sm font-medium",
              summaryView ? "border-primary/35 bg-primary/12 text-primary" : "border-border bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            {summaryView ? <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" /> : <List className="h-3.5 w-3.5" aria-hidden="true" />}
            {summaryView ? "Summary View" : "Benchmark View"}
          </Button>
        </div>

        <div className="flex w-full flex-wrap items-center gap-2 lg:w-auto lg:justify-end">
          {compareIds.length > 0 && (
            <Link href={compareHref} className="w-full sm:w-auto">
              <Button
                variant="default"
                size="sm"
                className="h-10 w-full rounded-lg px-4 text-sm font-semibold shadow-[0_14px_28px_-20px_var(--color-primary)] sm:w-auto"
              >
                Compare ({compareIds.length}/3)
              </Button>
            </Link>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-11 rounded-xl px-4 text-sm font-medium text-muted-foreground hover:text-foreground">
                View Preset
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[210px] rounded-lg border-border bg-card p-2">
              <DropdownMenuItem onClick={() => applyPreset("general")} className="cursor-pointer rounded-md py-2 text-sm">
                General Research
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => applyPreset("coding")} className="cursor-pointer rounded-md py-2 text-sm">
                Coding Focus
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => applyPreset("agentic")} className="cursor-pointer rounded-md py-2 text-sm">
                Agentic Focus
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => applyPreset("vision")} className="cursor-pointer rounded-md py-2 text-sm">
                Vision Focus
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => applyPreset("video")} className="cursor-pointer rounded-md py-2 text-sm">
                Video Focus
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-11 rounded-xl px-4 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <Filter className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
                Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="max-h-[400px] min-w-[220px] overflow-y-auto rounded-lg border-border bg-card p-2">
              {table
                .getAllColumns()
                .filter((column) => {
                  if (!column.getCanHide()) return false;
                  
                  const isAvg = column.id.startsWith("avg-");
                  
                  if (summaryView) {
                    // In summary mode, we only want to configure AVG columns and basic specs
                    return isAvg || column.id === "releaseDate" || column.id === "context" || column.id === "coverage";
                  } else {
                    // In full mode, hide the AVG columns to avoid clutter
                    return !isAvg;
                  }
                })
                .map((column) => {
                  // Prettify column labels
                  let label = column.id;
                  if (column.id.startsWith("avg-")) {
                    label =
                      column.id
                        .replace("avg-", "")
                        .replace(/-/g, " ")
                        .toUpperCase() + " AVG";
                  } else {
                    label =
                      column.id === "releaseDate"
                        ? "Release Date"
                        : column.id === "context"
                        ? "Context Window"
                        : column.id === "coverage"
                        ? "Coverage"
                        : column.id === "swe-bench-verified"
                        ? "SWE-bench"
                        : column.id === "gpqa-diamond"
                        ? "GPQA Diamond"
                        : column.id === "human-eval"
                        ? "HumanEval"
                        : column.id === "lmarena-elo"
                        ? "LMArena ELO"
                        : column.id === "bigcodebench"
                        ? "BigCodeBench"
                        : column.id === "agentbench"
                        ? "AgentBench"
                        : column.id === "gsm8k"
                        ? "GSM8K"
                        : column.id === "aime"
                        ? "AIME"
                        : column.id === "mmlu"
                        ? "MMLU"
                        : column.id === "mmmu"
                        ? "MMMU"
                        : column.id === "mmmu-vision"
                        ? "MMMU Vision"
                        : column.id === "mathvista"
                        ? "MathVista"
                        : column.id === "videommmu"
                        ? "VideoMMMU"
                        : column.id === "terminal-bench"
                        ? "Terminal Bench"
                        : column.id === "putnam-200"
                        ? "Putnam-200"
                        : column.id === "vibe-coding"
                        ? "Vibe Coding"
                        : column.id === "scicode"
                        ? "Scicode"
                        : column.id === "swe-lancer"
                        ? "SWE-Lancer"
                        : column.id === "swe-bench-pro"
                        ? "SWE-Bench Pro"
                        : column.id === "frontiersci-research"
                        ? "FrontierSci Res"
                        : column.id === "mathvision"
                        ? "MathVision"
                        : column.id === "videomme"
                        ? "VideoMME"
                        : column.id === "hle"
                        ? "Humanity's Last Exam"
                        : column.id.charAt(0).toUpperCase() + column.id.slice(1);
                  }


                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="mb-0.5 cursor-pointer rounded-md py-2 text-sm data-[state=checked]:text-primary"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {label}
                    </DropdownMenuCheckboxItem>
                  );
                })}
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem
                onClick={resetLayout}
                className="cursor-pointer py-2.5 text-sm text-primary focus:bg-primary/10 focus:text-primary"
              >
                <RotateCcw className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
                Reset layout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
