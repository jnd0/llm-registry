import Link from "next/link";
import type { Model } from "@/types";
import { getProviderTheme } from "@/lib/provider-identity";

interface LatestArrivalCardProps {
  model: Model;
}

function formatReleaseDate(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return "today";
  if (diffDays === 1) return "yesterday";
  if (diffDays < 7) return `${diffDays}d ago`;
  
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function LatestArrivalCard({ model }: LatestArrivalCardProps) {
  const theme = getProviderTheme(model.provider);
  const scoreCount = Object.keys(model.scores || {}).length;

  return (
    <article className="rounded-xl border border-slate-800/70 bg-gradient-to-br from-slate-950 to-slate-900 p-5 text-slate-100">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-primary">
            New
          </span>
        </div>
        <span className={`rounded px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${theme.bg} ${theme.text}`}>
          {model.provider}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-xl font-bold tracking-tight text-white">
            {model.name}
          </h2>
          <p className="mt-0.5 text-xs text-slate-300">
            {formatReleaseDate(model.releaseDate)} · {scoreCount} benchmarks
          </p>
        </div>
        
        <Link 
          href={`/model/${model.id}`}
          className="rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/80 transition-all hover:bg-white/10 hover:text-white"
        >
          View
        </Link>
      </div>
    </article>
  );
}
