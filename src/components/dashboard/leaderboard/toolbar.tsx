"use client";

import { Table } from "@tanstack/react-table";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
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
import type { LicenseFilter } from "@/lib/leaderboard-query";

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
  license: LicenseFilter;
  onLicenseChange: (value: LicenseFilter) => void;
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
  applyPreset,
  license,
  onLicenseChange,
}: LeaderboardToolbarProps) {
  const [searchValue, setSearchValue] = useState(searchQuery);
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    
    const timer = setTimeout(() => {
      onSearchQueryChange(value);
    }, 250);
    
    setDebounceTimer(timer);
  };

  const handleInputFocus = () => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
      setDebounceTimer(null);
    }
  };

  const handleInputBlur = () => {
    onSearchQueryChange(searchValue);
  };

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between px-1">
      <div className="flex w-full flex-col gap-3 md:flex-row md:items-center md:gap-2 lg:w-auto">
        <div className="group/search relative min-w-0 flex-1 md:w-[280px] lg:w-[320px]">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground/60 transition-colors group-focus-within/search:text-primary" aria-hidden="true" />
          <Input
            placeholder="Search registry…"
            aria-label="Search models"
            autoComplete="off"
            value={searchValue}
            onChange={(event) => handleSearchChange(event.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className="h-9 w-full rounded-full border-border/60 bg-muted/20 pl-9 text-xs transition-all focus:bg-background focus:ring-1 focus:ring-primary/20"
          />
        </div>

        <div className="flex items-center gap-1.5 bg-muted/30 p-1 rounded-full border border-border/40">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSummaryView(true)}
            className={cn(
              "h-7 rounded-full px-3 text-[11px] font-bold uppercase tracking-wider transition-all",
              summaryView ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Summary
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSummaryView(false)}
            className={cn(
              "h-7 rounded-full px-3 text-[11px] font-bold uppercase tracking-wider transition-all",
              !summaryView ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Benchmarks
          </Button>
        </div>

        <div className="flex items-center gap-1.5 bg-muted/30 p-1 rounded-full border border-border/40">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onLicenseChange("all")}
            className={cn(
              "h-7 rounded-full px-3 text-[11px] font-bold uppercase tracking-wider transition-all",
              license === "all" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            All
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onLicenseChange("open")}
            className={cn(
              "h-7 rounded-full px-3 text-[11px] font-bold uppercase tracking-wider transition-all",
              license === "open" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Open
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onLicenseChange("proprietary")}
            className={cn(
              "h-7 rounded-full px-3 text-[11px] font-bold uppercase tracking-wider transition-all",
              license === "proprietary" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Proprietary
          </Button>
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center gap-2 lg:w-auto lg:justify-end">
        {compareIds.length > 0 && (
          <Link href={compareHref} className="w-full sm:w-auto">
            <Button
              variant="default"
              size="sm"
              className="h-8 w-full rounded-full px-4 text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-primary/20 sm:w-auto"
            >
              Compare ({compareIds.length})
            </Button>
          </Link>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 rounded-full border-border/60 px-4 text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground">
              Presets
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-[180px] rounded-xl border-border bg-card p-1.5 shadow-xl">
            <DropdownMenuItem onClick={() => applyPreset("general")} className="cursor-pointer rounded-lg py-2 text-xs font-medium">
              General Research
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => applyPreset("coding")} className="cursor-pointer rounded-lg py-2 text-xs font-medium">
              Coding Focus
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => applyPreset("agentic")} className="cursor-pointer rounded-lg py-2 text-xs font-medium">
              Agentic Focus
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => applyPreset("vision")} className="cursor-pointer rounded-lg py-2 text-xs font-medium">
              Vision Focus
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => applyPreset("video")} className="cursor-pointer rounded-lg py-2 text-xs font-medium">
              Video Focus
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="h-8 rounded-full border-border/60 px-4 text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground"
            >
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="max-h-[350px] min-w-[200px] overflow-y-auto rounded-xl border-border bg-card p-1.5 shadow-xl">
            {table
              .getAllColumns()
              .filter((column) => {
                if (!column.getCanHide()) return false;
                const isAvg = column.id.startsWith("avg-");
                if (summaryView) return isAvg || column.id === "releaseDate" || column.id === "context" || column.id === "coverage";
                return !isAvg;
              })
              .map((column) => {
                let label = column.id;
                if (column.id.startsWith("avg-")) {
                  label = column.id.replace("avg-", "").replace(/-/g, " ").toUpperCase() + " AVG";
                } else {
                  label = column.id.replace(/-/g, " ").charAt(0).toUpperCase() + column.id.slice(1).replace(/-/g, " ");
                }

                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="mb-0.5 cursor-pointer rounded-lg py-2 text-xs font-medium data-[state=checked]:text-primary"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {label}
                  </DropdownMenuCheckboxItem>
                );
              })}
            <DropdownMenuSeparator className="bg-border/50" />
            <DropdownMenuItem
              onClick={resetLayout}
              className="cursor-pointer rounded-lg py-2 text-xs font-bold uppercase tracking-wider text-primary focus:bg-primary/5 focus:text-primary"
            >
              Reset
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
