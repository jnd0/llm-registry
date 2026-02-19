export type FreshnessLevel = "fresh" | "aging" | "stale";

export function getFreshnessLevel(asOfDate: string | null | undefined): FreshnessLevel | null {
  if (!asOfDate) return null;
  
  const scoreDate = new Date(asOfDate);
  if (isNaN(scoreDate.getTime())) return null;
  
  const now = new Date();
  const daysDiff = Math.floor((now.getTime() - scoreDate.getTime()) / (1000 * 60 * 60 * 24));
  
  if (daysDiff <= 90) return "fresh";
  if (daysDiff <= 180) return "aging";
  return "stale";
}

export function getFreshnessBadge(freshness: FreshnessLevel | null): {
  label: string;
  className: string;
} | null {
  if (!freshness) return null;
  
  switch (freshness) {
    case "fresh":
      return { label: "Fresh", className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" };
    case "aging":
      return { label: "Aging", className: "bg-amber-500/10 text-amber-600 dark:text-amber-400" };
    case "stale":
      return { label: "Stale", className: "bg-red-500/10 text-red-600 dark:text-red-400" };
  }
}

export function formatDaysAgo(asOfDate: string | null | undefined): string | null {
  if (!asOfDate) return null;
  
  const scoreDate = new Date(asOfDate);
  if (isNaN(scoreDate.getTime())) return null;
  
  const now = new Date();
  const daysDiff = Math.floor((now.getTime() - scoreDate.getTime()) / (1000 * 60 * 60 * 24));
  
  if (daysDiff < 1) return "today";
  if (daysDiff === 1) return "1 day ago";
  if (daysDiff < 30) return `${daysDiff} days ago`;
  if (daysDiff < 60) return "1 month ago";
  const months = Math.floor(daysDiff / 30);
  if (months < 12) return `${months} months ago`;
  const years = Math.floor(months / 12);
  if (years === 1) return "1 year ago";
  return `${years} years ago`;
}
