"use client";

import { useState, useMemo } from "react";
import { useRegistry } from "@/hooks/use-registry";
import { TierBadge, ScoreCount, TierFilterToggle } from "@/components/ui/tier-badge";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Shield, Sparkles, Trophy, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModelRowProps {
  model: any;
  rank: number;
}

function ModelRow({ model, rank }: ModelRowProps) {
  const isVerified = model.tier === "verified";
  const hasScores = model.hasScores;

  return (
    <div
      className={cn(
        "group relative grid grid-cols-12 items-center gap-4 rounded-lg border border-border/60 p-4 transition-all duration-200",
        "hover:border-primary/30 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/5",
        !hasScores && "opacity-75"
      )}
    >
      {/* Rank */}
      <div className="col-span-1 flex items-center justify-center">
        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold",
            rank <= 3
              ? "bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/30"
              : isVerified
              ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
              : "bg-slate-500/10 text-slate-600 dark:text-slate-400"
          )}
        >
          {rank <= 3 ? <Trophy className="w-4 h-4" /> : `#${rank}`}
        </div>
      </div>

      {/* Model Info */}
      <div className="col-span-5 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-foreground">{model.name}</h3>
          <TierBadge tier={model.tier} size="sm" />
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{model.provider}</span>
          {model.family && (
            <>
              <span className="text-muted-foreground/40">•</span>
              <Badge variant="secondary" className="text-[10px] capitalize">
                {model.family}
              </Badge>
            </>
          )}
        </div>
      </div>

      {/* Score Count */}
      <div className="col-span-3 flex items-center justify-center">
        <ScoreCount scoreCount={model.scoreCount} hasScores={model.hasScores} />
      </div>

      {/* Release Date */}
      <div className="col-span-3 text-right text-xs text-muted-foreground">
        {model.releaseDate !== "Unknown" ? (
          <time dateTime={model.releaseDate}>{model.releaseDate}</time>
        ) : (
          <span className="text-muted-foreground/50">Unknown</span>
        )}
      </div>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-border/60 bg-card/50 p-12 text-center">
      <div className="mb-4 rounded-full bg-primary/10 p-4">
        <Shield className="h-8 w-8 text-primary" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">No Models Found</h3>
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
}

export function RefactoredCategoryLeaderboard() {
  const [includeUnscored, setIncludeUnscored] = useState(false);

  const { models, isLoading, verified, discovered } = useRegistry({
    includeUnscored,
    filterByTier: includeUnscored ? "all" : "verified",
  });

  // Sort by release date (newest first) for display
  const sortedModels = useMemo(() => {
    return [...models].sort(
      (a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
    );
  }, [models]);

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-20 w-full" />
        ))}
      </div>
    );
  }

  if (sortedModels.length === 0) {
    return (
      <EmptyState message={includeUnscored ? "No models match the current filters." : "No verified models found. Try including unscored models."} />
    );
  }

  return (
    <div className="space-y-6">
      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <TrendingUp className="w-4 h-4" />
          <span>
            Showing <strong className="text-foreground">{sortedModels.length}</strong> models
          </span>
        </div>

        <TierFilterToggle
          includeUnscored={includeUnscored}
          onToggle={setIncludeUnscored}
          verifiedCount={verified}
          discoveredCount={discovered}
        />
      </div>

      {/* Header */}
      <div className="grid grid-cols-12 gap-4 border-b border-border/60 pb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        <div className="col-span-1 text-center">Rank</div>
        <div className="col-span-5">Model</div>
        <div className="col-span-3 text-center">Benchmarks</div>
        <div className="col-span-3 text-right">Released</div>
      </div>

      {/* Models List */}
      <div className="space-y-3">
        {sortedModels.map((model, index) => (
          <ModelRow key={model.id} model={model} rank={index + 1} />
        ))}
      </div>

      {/* Info Footer */}
      <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
        <div className="flex items-start gap-3">
          <Shield className="mt-0.5 h-4 w-4 text-primary" />
          <div className="space-y-1 text-xs">
            <p className="font-medium text-foreground">About Tiers</p>
            <p className="text-muted-foreground">
              <strong>Verified</strong> models are manually curated with benchmark scores.{" "}
              <strong>Discovered</strong> models are automatically imported from models.dev and pending evaluation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
