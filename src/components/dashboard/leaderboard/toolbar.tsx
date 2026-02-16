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
  resetLayout: () => void;
  summaryView: boolean;
  setSummaryView: (value: boolean) => void;
  applyPreset: (preset: "general" | "coding" | "agentic" | "vision" | "video") => void;
}

export function LeaderboardToolbar({ 
  table, 
  compareIds, 
  compareHref,
  resetLayout,
  summaryView,
  setSummaryView,
  applyPreset
}: LeaderboardToolbarProps) {
  const [searchValue, setSearchValue] = useState(
    (table.getColumn("name")?.getFilterValue() as string) ?? ""
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      table.getColumn("name")?.setFilterValue(searchValue);
    }, 150);

    return () => clearTimeout(timeout);
  }, [searchValue, table]);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-card/40 p-6 rounded-xl border border-white/5 backdrop-blur-sm shadow-xl relative overflow-hidden group">
        {/* Subtle Gradient Accent */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-50" />
        
        <div className="relative w-full sm:w-auto group/search">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within/search:text-primary transition-colors" />
            <Input
            placeholder="Search model ecosystem..."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            className="pl-10 w-full sm:w-[320px] font-mono text-xs h-11 bg-background/50 border-white/10 focus-visible:ring-primary/20 focus-visible:border-primary/50 transition-all rounded-lg shadow-inner hover:bg-background/80"
            />
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto">
          {compareIds.length > 0 && (
            <Link href={compareHref} className="flex-1 sm:flex-none">
              <Button
                variant="default"
                size="sm"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-mono font-bold text-xs h-11 px-8 rounded-lg tracking-wide uppercase shadow-[0_0_20px_-5px_var(--color-primary)] hover:shadow-[0_0_30px_-5px_var(--color-primary)] transition-all animate-in zoom-in-95 duration-200"
              >
                Launch Comparison ({compareIds.length})
              </Button>
            </Link>
          )}
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSummaryView(!summaryView)}
            className={cn(
              "font-mono text-[10px] h-11 px-6 border-white/10 bg-background/50 rounded-lg uppercase tracking-[0.15em] transition-all shadow-sm",
              summaryView ? "text-primary border-primary/30 bg-primary/5" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {summaryView ? (
              <LayoutGrid className="mr-2 h-3 w-3" />
            ) : (
              <List className="mr-2 h-3 w-3" />
            )}
            {summaryView ? "Summary Mode" : "Full View"}
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="font-mono text-[10px] h-11 px-6 border-white/10 bg-background/50 hover:bg-white/5 rounded-lg uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-all shadow-sm"
              >
                View Preset
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-white/10 rounded-lg p-2 shadow-2xl min-w-[220px]">
              <DropdownMenuItem onClick={() => applyPreset("general")} className="font-mono text-xs rounded-md focus:bg-primary/10 focus:text-primary cursor-pointer py-2">
                General Research
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => applyPreset("coding")} className="font-mono text-xs rounded-md focus:bg-primary/10 focus:text-primary cursor-pointer py-2">
                Coding Focus
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => applyPreset("agentic")} className="font-mono text-xs rounded-md focus:bg-primary/10 focus:text-primary cursor-pointer py-2">
                Agentic Focus
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => applyPreset("vision")} className="font-mono text-xs rounded-md focus:bg-primary/10 focus:text-primary cursor-pointer py-2">
                Vision Focus
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => applyPreset("video")} className="font-mono text-xs rounded-md focus:bg-primary/10 focus:text-primary cursor-pointer py-2">
                Video Focus
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="font-mono text-[10px] h-11 px-6 border-white/10 bg-background/50 hover:bg-white/5 rounded-lg uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-all ml-auto shadow-sm"
              >
                <Filter className="mr-2 h-3 w-3" />
                Configure View
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-white/10 rounded-lg p-2 shadow-2xl min-w-[200px] max-h-[400px] overflow-y-auto custom-scrollbar">
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
                      className="font-mono text-xs rounded-md focus:bg-primary/10 focus:text-primary data-[state=checked]:text-primary cursor-pointer py-2 mb-0.5"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {label}
                    </DropdownMenuCheckboxItem>
                  );
                })}
              <DropdownMenuSeparator className="bg-white/5" />
              <DropdownMenuItem 
                onClick={resetLayout}
                className="font-mono text-[10px] uppercase tracking-wider text-primary focus:bg-primary/10 focus:text-primary cursor-pointer py-2.5"
              >
                <RotateCcw className="mr-2 h-3 w-3" />
                Reset Layout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
  );
}
