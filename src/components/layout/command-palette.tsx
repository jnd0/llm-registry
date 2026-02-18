"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  Search,
  Brain,
  Code,
  Calculator,
  Bot,
  Eye,
  Scroll,
  CheckCircle,
  Globe,
} from "lucide-react";
import { Benchmark, Model } from "@/types";
import { domainDefinitions, type CapabilityDomain } from "@/lib/domains";

const domainIcons: Record<CapabilityDomain, React.ElementType> = {
  "Intelligence": Brain,
  "Knowledge & Communication": Globe,
  "Coding": Code,
  "Math": Calculator,
  "Agents & Tools": Bot,
  "Vision & Video": Eye,
  "Long Context": Scroll,
  "Factuality": CheckCircle,
};

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  models: Model[];
  benchmarks: Benchmark[];
}

export function CommandPalette({ open, onOpenChange, models, benchmarks }: CommandPaletteProps) {
  const router = useRouter();
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const runCommand = React.useCallback(
    (command: () => void) => {
      onOpenChange(false);
      setSearch("");
      command();
    },
    [onOpenChange]
  );

  const filteredModels = React.useMemo(() => {
    if (!search) return models.slice(0, 10);
    const query = search.toLowerCase();
    return models
      .filter(
        (m: Model) =>
          m.name.toLowerCase().includes(query) ||
          m.provider.toLowerCase().includes(query) ||
          m.id.toLowerCase().includes(query)
      )
      .slice(0, 10);
  }, [search, models]);

  const filteredBenchmarks = React.useMemo(() => {
    if (!search) return benchmarks.slice(0, 5);
    const query = search.toLowerCase();
    return benchmarks
      .filter(
        (b: Benchmark) =>
          b.name.toLowerCase().includes(query) ||
          b.category.toLowerCase().includes(query) ||
          b.id.toLowerCase().includes(query)
      )
      .slice(0, 5);
  }, [search, benchmarks]);

  const providers = React.useMemo(() => {
    const uniqueProviders = new Set(models.map((m: Model) => m.provider));
    return Array.from(uniqueProviders).sort();
  }, [models]);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      className="fixed inset-0 z-50"
    >
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      
      <div className="fixed left-1/2 top-[20%] z-50 max-h-[70vh] w-full max-w-xl -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        <div className="flex items-center border-b border-border px-4">
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <Command.Input
            value={search}
            onValueChange={setSearch}
            placeholder="Search models, benchmarks, providers..."
            className="h-14 w-full bg-transparent px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <kbd className="pointer-events-none hidden h-6 select-none items-center gap-1 rounded border border-border bg-muted px-2 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
            ESC
          </kbd>
        </div>

        <Command.List className="max-h-[60vh] overflow-y-auto p-2">
          <Command.Empty className="py-8 text-center text-sm text-muted-foreground">
            No results found.
          </Command.Empty>

          {!search && (
            <>
              <Command.Group heading="Quick Navigation" className="p-1">
                <Command.Item
                  onSelect={() => runCommand(() => router.push("/"))}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground cursor-pointer data-[selected=true]:bg-muted"
                >
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span>Go to Leaderboard</span>
                </Command.Item>
                <Command.Item
                  onSelect={() => runCommand(() => router.push("/compare"))}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground cursor-pointer data-[selected=true]:bg-muted"
                >
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span>Compare Models</span>
                </Command.Item>
                <Command.Item
                  onSelect={() => runCommand(() => router.push("/benchmarks"))}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground cursor-pointer data-[selected=true]:bg-muted"
                >
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span>Browse Benchmarks</span>
                </Command.Item>
              </Command.Group>

              <Command.Separator className="my-2 h-px bg-border" />

              <Command.Group heading="Capability Domains" className="p-1">
                {domainDefinitions.map((domain) => {
                  const Icon = domainIcons[domain.id];
                  return (
                    <Command.Item
                      key={domain.id}
                      value={domain.label}
                      onSelect={() => runCommand(() => router.push(`/?domain=${domain.id.toLowerCase().replace(/\s*&\s*/g, "-").replace(/\s+/g, "-")}`))}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground cursor-pointer data-[selected=true]:bg-muted"
                    >
                      <Icon className="h-4 w-4 text-primary" />
                      <span>{domain.label}</span>
                    </Command.Item>
                  );
                })}
              </Command.Group>
            </>
          )}

          {filteredModels.length > 0 && (
            <>
              <Command.Group heading="Models" className="p-1">
                {filteredModels.map((model) => (
                  <Command.Item
                    key={model.id}
                    value={`${model.name} ${model.provider} ${model.id}`}
                    onSelect={() => runCommand(() => router.push(`/model/${model.id}`))}
                    className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground cursor-pointer data-[selected=true]:bg-muted"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="truncate font-medium">{model.name}</span>
                      <span className="text-xs text-muted-foreground truncate">
                        {model.provider}
                      </span>
                    </div>
                    {model.isOpenSource && (
                      <span className="shrink-0 rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
                        Open
                      </span>
                    )}
                  </Command.Item>
                ))}
              </Command.Group>
            </>
          )}

          {filteredBenchmarks.length > 0 && (
            <>
              <Command.Separator className="my-2 h-px bg-border" />
              <Command.Group heading="Benchmarks" className="p-1">
                {filteredBenchmarks.map((benchmark) => (
                  <Command.Item
                    key={benchmark.id}
                    value={`${benchmark.name} ${benchmark.category} ${benchmark.id}`}
                    onSelect={() => runCommand(() => router.push(`/benchmark/${benchmark.id}`))}
                    className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground cursor-pointer data-[selected=true]:bg-muted"
                  >
                    <span className="truncate font-medium">{benchmark.name}</span>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {benchmark.category}
                    </span>
                  </Command.Item>
                ))}
              </Command.Group>
            </>
          )}

          {search && providers.filter((p) => p.toLowerCase().includes(search.toLowerCase())).length > 0 && (
            <>
              <Command.Separator className="my-2 h-px bg-border" />
              <Command.Group heading="Providers" className="p-1">
                {providers
                  .filter((p) => p.toLowerCase().includes(search.toLowerCase()))
                  .slice(0, 5)
                  .map((provider) => (
                    <Command.Item
                      key={provider}
                      value={provider}
                      onSelect={() => runCommand(() => router.push(`/?q=${encodeURIComponent(provider)}`))}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground cursor-pointer data-[selected=true]:bg-muted"
                    >
                      <span className="font-medium">{provider}</span>
                      <span className="text-xs text-muted-foreground">
                        Filter by provider
                      </span>
                    </Command.Item>
                  ))}
              </Command.Group>
            </>
          )}
        </Command.List>

        <div className="flex items-center justify-between border-t border-border px-4 py-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">↑↓</kbd>
              to navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">↵</kbd>
              to select
            </span>
          </div>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
            to toggle
          </span>
        </div>
      </div>
    </Command.Dialog>
  );
}
