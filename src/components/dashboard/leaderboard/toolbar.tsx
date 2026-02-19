"use client";

import { Table } from "@tanstack/react-table";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Model } from "@/types";
import type { LicenseFilter } from "@/lib/leaderboard-query";
import type { CapabilityDomain } from "@/lib/domains";
import { domainDefinitions } from "@/lib/domains";
import { sources } from "@/data/sources";

const verificationLevels = [
  { id: "third_party", label: "Third-party" },
  { id: "provider", label: "Provider" },
  { id: "community", label: "Community" },
  { id: "estimated", label: "Estimated" },
];

interface LeaderboardToolbarProps {
  table: Table<Model>;
  compareIds: string[];
  compareHref: string;
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
  resetLayout: () => void;
  summaryView: boolean;
  setSummaryView: (value: boolean) => void;
  license: LicenseFilter;
  onLicenseChange: (value: LicenseFilter) => void;
  domain: CapabilityDomain | null;
  onClearDomain: () => void;
  sourcesFilter: string[];
  onSourcesFilterChange: (value: string[]) => void;
  verificationFilter: string[];
  onVerificationFilterChange: (value: string[]) => void;
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
  license,
  onLicenseChange,
  domain,
  onClearDomain,
  sourcesFilter,
  onSourcesFilterChange,
  verificationFilter,
  onVerificationFilterChange,
}: LeaderboardToolbarProps) {
  const [searchValue, setSearchValue] = useState(searchQuery);
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);
  const [columnSearch, setColumnSearch] = useState("");

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

  const toggleSource = (sourceId: string) => {
    if (sourcesFilter.includes(sourceId)) {
      onSourcesFilterChange(sourcesFilter.filter((s) => s !== sourceId));
    } else {
      onSourcesFilterChange([...sourcesFilter, sourceId]);
    }
  };

  const toggleVerification = (level: string) => {
    if (verificationFilter.includes(level)) {
      onVerificationFilterChange(verificationFilter.filter((v) => v !== level));
    } else {
      onVerificationFilterChange([...verificationFilter, level]);
    }
  };

  const hasActiveFilters = sourcesFilter.length > 0 || verificationFilter.length > 0;

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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "h-7 rounded-full border-border/60 px-3 text-[11px] font-bold uppercase tracking-wider",
                hasActiveFilters ? "bg-primary/10 border-primary/30 text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Filter className="h-3 w-3 mr-1.5" />
              Source
              {sourcesFilter.length > 0 && (
                <span className="ml-1 rounded-full bg-primary/20 px-1.5 text-[9px]">{sourcesFilter.length}</span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="max-h-[300px] min-w-[220px] overflow-y-auto rounded-xl border-border bg-card p-1.5 shadow-xl">
            <DropdownMenuLabel className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70 px-2">
              Data Sources
            </DropdownMenuLabel>
            {sources.map((source) => (
              <DropdownMenuCheckboxItem
                key={source.id}
                checked={sourcesFilter.includes(source.id)}
                onCheckedChange={() => toggleSource(source.id)}
                className="cursor-pointer rounded-lg py-2 text-xs"
              >
                {source.name}
              </DropdownMenuCheckboxItem>
            ))}
            {sourcesFilter.length > 0 && (
              <>
                <DropdownMenuSeparator className="bg-border/50" />
                <DropdownMenuItem
                  onClick={() => onSourcesFilterChange([])}
                  className="cursor-pointer rounded-lg py-2 text-xs font-bold text-primary focus:bg-primary/5"
                >
                  Clear source filter
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "h-7 rounded-full border-border/60 px-3 text-[11px] font-bold uppercase tracking-wider",
                verificationFilter.length > 0 ? "bg-primary/10 border-primary/30 text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Check className="h-3 w-3 mr-1.5" />
              Verified
              {verificationFilter.length > 0 && (
                <span className="ml-1 rounded-full bg-primary/20 px-1.5 text-[9px]">{verificationFilter.length}</span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-[180px] rounded-xl border-border bg-card p-1.5 shadow-xl">
            <DropdownMenuLabel className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70 px-2">
              Verification Level
            </DropdownMenuLabel>
            {verificationLevels.map((level) => (
              <DropdownMenuCheckboxItem
                key={level.id}
                checked={verificationFilter.includes(level.id)}
                onCheckedChange={() => toggleVerification(level.id)}
                className="cursor-pointer rounded-lg py-2 text-xs"
              >
                {level.label}
              </DropdownMenuCheckboxItem>
            ))}
            {verificationFilter.length > 0 && (
              <>
                <DropdownMenuSeparator className="bg-border/50" />
                <DropdownMenuItem
                  onClick={() => onVerificationFilterChange([])}
                  className="cursor-pointer rounded-lg py-2 text-xs font-bold text-primary focus:bg-primary/5"
                >
                  Clear verification filter
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        {domain && (
          <div className="flex items-center gap-1.5 bg-primary/10 p-1 rounded-full border border-primary/30">
            <span className="px-2 text-[11px] font-bold uppercase tracking-wider text-primary">
              {domainDefinitions.find((d) => d.id === domain)?.label ?? domain}
            </span>
            <button
              onClick={onClearDomain}
              className="h-5 w-5 flex items-center justify-center rounded-full hover:bg-primary/20 text-primary"
              aria-label="Clear domain filter"
            >
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
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

        <DropdownMenu onOpenChange={(open) => !open && setColumnSearch("")}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="h-8 rounded-full border-border/60 px-4 text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground"
            >
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="max-h-[350px] min-w-[240px] overflow-hidden rounded-xl border-border bg-card p-1.5 shadow-xl">
            <div className="px-1 pb-2">
              <input
                type="text"
                placeholder="Search columns..."
                value={columnSearch}
                onChange={(e) => setColumnSearch(e.target.value)}
                className="w-full rounded-md border border-border bg-muted/50 px-2 py-1.5 text-xs placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>
            <div className="max-h-[250px] overflow-y-auto">
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

                  if (columnSearch && !label.toLowerCase().includes(columnSearch.toLowerCase()) && !column.id.toLowerCase().includes(columnSearch.toLowerCase())) {
                    return null;
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
            </div>
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
