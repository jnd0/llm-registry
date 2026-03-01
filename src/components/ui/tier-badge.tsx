"use client";

import { cn } from "@/lib/utils";
import { Shield, Sparkles, Clock } from "lucide-react";

interface TierBadgeProps {
  tier: "verified" | "discovered";
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * Tier badge component with refined aesthetics
 * Distinguishes verified (curated) from discovered (auto-imported) models
 */
export function TierBadge({ tier, className, size = "sm" }: TierBadgeProps) {
  const isVerified = tier === "verified";

  const sizeClasses = {
    sm: "text-[10px] px-1.5 py-0.5",
    md: "text-xs px-2 py-1",
    lg: "text-sm px-2.5 py-1.5",
  };

  const iconSize = {
    sm: "w-3 h-3",
    md: "w-3.5 h-3.5",
    lg: "w-4 h-4",
  };

  if (isVerified) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1 rounded-full font-medium tracking-wide",
          "bg-gradient-to-r from-emerald-500/10 to-teal-500/10",
          "border border-emerald-500/20",
          "text-emerald-700 dark:text-emerald-400",
          "shadow-sm shadow-emerald-500/5",
          sizeClasses[size],
          className
        )}
      >
        <Shield className={cn(iconSize[size], "text-emerald-600 dark:text-emerald-400")} />
        <span className="uppercase tracking-wider">Verified</span>
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full font-medium tracking-wide",
        "bg-gradient-to-r from-slate-500/10 to-gray-500/10",
        "border border-slate-500/20",
        "text-slate-600 dark:text-slate-400",
        "shadow-sm shadow-slate-500/5",
        sizeClasses[size],
        className
      )}
    >
      <Sparkles className={cn(iconSize[size], "text-slate-500 dark:text-slate-400")} />
      <span className="uppercase tracking-wider">Discovered</span>
    </span>
  );
}

interface ScoreCountProps {
  scoreCount: number;
  hasScores: boolean;
  className?: string;
}

/**
 * Displays benchmark score count with beautiful micro-design
 */
export function ScoreCount({ scoreCount, hasScores, className }: ScoreCountProps) {
  if (!hasScores || scoreCount === 0) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 text-xs font-medium",
          "text-slate-500 dark:text-slate-400",
          className
        )}
      >
        <Clock className="w-3.5 h-3.5" />
        <span>No scores yet</span>
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-medium",
        "text-emerald-700 dark:text-emerald-400",
        className
      )}
    >
      <Shield className="w-3.5 h-3.5" />
      <span>{scoreCount} benchmark{scoreCount !== 1 ? "s" : ""}</span>
    </span>
  );
}

interface TierFilterToggleProps {
  includeUnscored: boolean;
  onToggle: (include: boolean) => void;
  verifiedCount: number;
  discoveredCount: number;
  className?: string;
}

/**
 * Beautiful toggle for filtering verified vs all models
 * Shows counts for each tier
 */
export function TierFilterToggle({
  includeUnscored,
  onToggle,
  verifiedCount,
  discoveredCount,
  className,
}: TierFilterToggleProps) {
  const totalCount = verifiedCount + discoveredCount;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-border bg-card p-1",
        className
      )}
    >
      <button
        onClick={() => onToggle(false)}
        className={cn(
          "relative px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200",
          "flex items-center gap-2",
          !includeUnscored
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        )}
      >
        <Shield className="w-3.5 h-3.5" />
        <span>Verified</span>
        <span
          className={cn(
            "ml-1 rounded-full px-1.5 py-0.5 text-[10px]",
            !includeUnscored
              ? "bg-primary-foreground/20 text-primary-foreground"
              : "bg-muted text-muted-foreground"
          )}
        >
          {verifiedCount}
        </span>
      </button>

      <button
        onClick={() => onToggle(true)}
        className={cn(
          "relative px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200",
          "flex items-center gap-2",
          includeUnscored
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        )}
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>All Models</span>
        <span
          className={cn(
            "ml-1 rounded-full px-1.5 py-0.5 text-[10px]",
            includeUnscored
              ? "bg-primary-foreground/20 text-primary-foreground"
              : "bg-muted text-muted-foreground"
          )}
        >
          {totalCount}
        </span>
      </button>
    </div>
  );
}
