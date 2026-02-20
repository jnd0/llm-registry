import { Benchmark, Model } from "@/types";

interface HomeStatsCardProps {
  models: Model[];
  benchmarks: Benchmark[];
  totalScores: number;
  latestScoreDate: string | null;
}

function formatDateRelative(dateStr: string | null): string {
  if (!dateStr) return "";
  
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return "today";
  if (diffDays === 1) return "yesterday";
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  return `${Math.floor(diffDays / 30)}mo ago`;
}

export function HomeStatsCard({ models, benchmarks, totalScores, latestScoreDate }: HomeStatsCardProps) {
  const categories = new Set(benchmarks.map(b => b.category));

  return (
    <article className="rounded-xl border border-border/50 bg-card/30 p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center justify-center w-6 h-6 rounded bg-primary/10">
          <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
          </svg>
        </div>
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
          Registry
        </span>
      </div>

      <div className="flex items-baseline gap-6">
        <div>
          <span className="font-display text-4xl font-bold tracking-tight text-foreground tabular-nums">
            {models.length}
          </span>
          <span className="ml-1.5 text-xs font-mono uppercase tracking-wide text-muted-foreground/70">
            models
          </span>
        </div>
        
        <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground/60">
          <span>{benchmarks.length} benchmarks</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>{categories.size} categories</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>{totalScores.toLocaleString()} scores</span>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground/50">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
        </span>
        <span>Updated {formatDateRelative(latestScoreDate)}</span>
      </div>
    </article>
  );
}
