"use client";

import { useState, useMemo } from "react";
import { Model } from "@/types";
import { cn } from "@/lib/utils";
import { X, SlidersHorizontal, Sparkles, Brain, Eye, Wand2, Mic, FileText, Video, Code } from "lucide-react";

export interface ModelFilter {
  families: string[];
  capabilities: string[];
  providers: string[];
  openSource: "all" | "open" | "proprietary";
  sortBy: "releaseDate" | "knowledgeCutoff" | "name" | "contextWindow";
  sortOrder: "asc" | "desc";
}

interface FilterPanelProps {
  models: Model[];
  filter: ModelFilter;
  onFilterChange: (filter: ModelFilter) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const capabilityIcons: Record<string, any> = {
  reasoning: Brain,
  vision: Eye,
  tools: Wand2,
  audio: Mic,
  text: FileText,
  video: Video,
  code: Code,
};

export function FilterPanel({ models, filter, onFilterChange, isOpen, onToggle }: FilterPanelProps) {
  // Extract unique families
  const families = useMemo(() => {
    const familySet = new Set<string>();
    models.forEach((m) => {
      if (m.family) familySet.add(m.family);
    });
    return Array.from(familySet).sort();
  }, [models]);

  // Extract unique providers
  const providers = useMemo(() => {
    return Array.from(new Set(models.map((m) => m.provider))).sort();
  }, [models]);

  // Extract unique capabilities
  const capabilities = useMemo(() => {
    const capSet = new Set<string>();
    models.forEach((m) => {
      if (m.apiSupport) {
        if (m.apiSupport.reasoning) capSet.add("reasoning");
        if (m.apiSupport.vision) capSet.add("vision");
        if (m.apiSupport.tools || m.apiSupport.toolCall) capSet.add("tools");
        if (m.apiSupport.attachment) capSet.add("attachment");
        if (m.apiSupport.jsonMode || m.apiSupport.structuredOutput) capSet.add("json");
      }
    });
    return Array.from(capSet).sort();
  }, [models]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filter.families.length > 0) count++;
    if (filter.capabilities.length > 0) count++;
    if (filter.providers.length > 0) count++;
    if (filter.openSource !== "all") count++;
    return count;
  }, [filter]);

  const toggleFamily = (family: string) => {
    onFilterChange({
      ...filter,
      families: filter.families.includes(family)
        ? filter.families.filter((f) => f !== family)
        : [...filter.families, family],
    });
  };

  const toggleCapability = (cap: string) => {
    onFilterChange({
      ...filter,
      capabilities: filter.capabilities.includes(cap)
        ? filter.capabilities.filter((c) => c !== cap)
        : [...filter.capabilities, cap],
    });
  };

  const toggleProvider = (provider: string) => {
    onFilterChange({
      ...filter,
      providers: filter.providers.includes(provider)
        ? filter.providers.filter((p) => p !== provider)
        : [...filter.providers, provider],
    });
  };

  const clearFilters = () => {
    onFilterChange({
      families: [],
      capabilities: [],
      providers: [],
      openSource: "all",
      sortBy: "releaseDate",
      sortOrder: "desc",
    });
  };

  return (
    <div className="relative">
      {/* Filter Toggle Button */}
      <button
        onClick={onToggle}
        className={cn(
          "inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors",
          "hover:bg-accent/50",
          activeFilterCount > 0 
            ? "border-primary bg-primary/10 text-primary" 
            : "border-border bg-background text-foreground"
        )}
      >
        <SlidersHorizontal className="w-4 h-4" />
        <span className="text-sm font-medium">Filters</span>
        {activeFilterCount > 0 && (
          <span className="flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full bg-primary text-primary-foreground">
            {activeFilterCount}
          </span>
        )}
      </button>

      {/* Filter Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 max-h-[80vh] overflow-y-auto rounded-xl border border-border bg-popover p-4 shadow-lg z-50 animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Filters</h3>
            <div className="flex items-center gap-2">
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Clear all
                </button>
              )}
              <button onClick={onToggle} className="text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {/* License Filter */}
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                License
              </label>
              <div className="flex gap-2">
                {[
                  { value: "all", label: "All" },
                  { value: "open", label: "Open" },
                  { value: "proprietary", label: "Proprietary" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => onFilterChange({ ...filter, openSource: option.value as any })}
                    className={cn(
                      "px-3 py-1.5 text-xs font-medium rounded-md border transition-colors",
                      filter.openSource === option.value
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:bg-accent"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Family Filter */}
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                Family
              </label>
              <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto">
                {families.map((family) => (
                  <button
                    key={family}
                    onClick={() => toggleFamily(family)}
                    className={cn(
                      "px-2 py-1 text-xs font-medium rounded-full border transition-colors capitalize",
                      filter.families.includes(family)
                        ? "border-purple-500 bg-purple-500/10 text-purple-700 dark:text-purple-300"
                        : "border-border hover:bg-accent"
                    )}
                  >
                    {family}
                  </button>
                ))}
              </div>
            </div>

            {/* Capability Filter */}
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                Capabilities
              </label>
              <div className="flex flex-wrap gap-1.5">
                {capabilities.map((cap) => {
                  const Icon = capabilityIcons[cap] || Sparkles;
                  return (
                    <button
                      key={cap}
                      onClick={() => toggleCapability(cap)}
                      className={cn(
                        "px-2 py-1 text-xs font-medium rounded-full border transition-colors flex items-center gap-1",
                        filter.capabilities.includes(cap)
                          ? "border-blue-500 bg-blue-500/10 text-blue-700 dark:text-blue-300"
                          : "border-border hover:bg-accent"
                      )}
                    >
                      <Icon className="w-3 h-3" />
                      <span className="capitalize">{cap}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Provider Filter */}
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                Provider
              </label>
              <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto">
                {providers.map((provider) => (
                  <button
                    key={provider}
                    onClick={() => toggleProvider(provider)}
                    className={cn(
                      "px-2 py-1 text-xs font-medium rounded-full border transition-colors",
                      filter.providers.includes(provider)
                        ? "border-green-500 bg-green-500/10 text-green-700 dark:text-green-300"
                        : "border-border hover:bg-accent"
                    )}
                  >
                    {provider}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                Sort By
              </label>
              <div className="flex items-center gap-2">
                <select
                  value={filter.sortBy}
                  onChange={(e) => onFilterChange({ ...filter, sortBy: e.target.value as any })}
                  className="flex-1 px-2 py-1.5 text-xs rounded-md border border-border bg-background"
                >
                  <option value="releaseDate">Release Date</option>
                  <option value="knowledgeCutoff">Knowledge Cutoff</option>
                  <option value="name">Name</option>
                  <option value="contextWindow">Context Window</option>
                </select>
                <button
                  onClick={() => onFilterChange({ ...filter, sortOrder: filter.sortOrder === "asc" ? "desc" : "asc" })}
                  className="px-2 py-1.5 text-xs rounded-md border border-border hover:bg-accent transition-colors"
                  title={filter.sortOrder === "asc" ? "Ascending" : "Descending"}
                >
                  {filter.sortOrder === "asc" ? "↑" : "↓"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function applyModelFilters(models: Model[], filter: ModelFilter): Model[] {
  return models
    .filter((model) => {
      // License filter
      if (filter.openSource === "open" && !model.isOpenSource) return false;
      if (filter.openSource === "proprietary" && model.isOpenSource) return false;

      // Family filter
      if (filter.families.length > 0 && (!model.family || !filter.families.includes(model.family))) {
        return false;
      }

      // Provider filter
      if (filter.providers.length > 0 && !filter.providers.includes(model.provider)) {
        return false;
      }

      // Capability filter
      if (filter.capabilities.length > 0 && model.apiSupport) {
        const hasCapability = filter.capabilities.every((cap) => {
          switch (cap) {
            case "reasoning":
              return model.apiSupport?.reasoning;
            case "vision":
              return model.apiSupport?.vision;
            case "tools":
              return model.apiSupport?.tools || model.apiSupport?.toolCall;
            case "json":
              return model.apiSupport?.jsonMode || model.apiSupport?.structuredOutput;
            case "attachment":
              return model.apiSupport?.attachment;
            default:
              return true;
          }
        });
        if (!hasCapability) return false;
      }

      return true;
    })
    .sort((a, b) => {
      let comparison = 0;

      switch (filter.sortBy) {
        case "releaseDate":
          comparison = new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
          break;
        case "knowledgeCutoff":
          const aCutoff = a.knowledgeCutoff ? new Date(a.knowledgeCutoff).getTime() : 0;
          const bCutoff = b.knowledgeCutoff ? new Date(b.knowledgeCutoff).getTime() : 0;
          comparison = aCutoff - bCutoff;
          break;
        case "name":
          comparison = a.name.localeCompare(b.name);
          break;
        case "contextWindow":
          comparison = a.specs.contextWindow - b.specs.contextWindow;
          break;
      }

      return filter.sortOrder === "asc" ? comparison : -comparison;
    });
}
