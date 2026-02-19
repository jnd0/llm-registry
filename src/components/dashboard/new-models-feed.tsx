import Link from "next/link";
import { cn } from "@/lib/utils";
import { getProviderTheme } from "@/lib/provider-identity";
import type { Model } from "@/types";

interface NewModelsFeedProps {
  models: Model[];
  days?: number;
  minCount?: number;
}

export function NewModelsFeed({ models, days = 30, minCount = 4 }: NewModelsFeedProps) {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);
  const cutoffStr = cutoffDate.toISOString().split("T")[0];

  const sortedByDate = [...models].sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));

  const recentModels = sortedByDate.filter((model) => model.releaseDate >= cutoffStr);

  const newModels = recentModels.length >= minCount
    ? recentModels.slice(0, 6)
    : [
        ...recentModels,
        ...sortedByDate.filter((m) => !recentModels.includes(m)),
      ].slice(0, minCount);

  const allWithinWindow = newModels.every((m) => m.releaseDate >= cutoffStr);

  if (newModels.length === 0) {
    return null;
  }

  const label = allWithinWindow 
    ? `Last ${days} days` 
    : `${recentModels.length} new · ${days} days`;

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
          New Models
        </h2>
        <span className="font-mono text-[10px] text-muted-foreground/40">
          {label}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {newModels.map((model) => {
          const theme = getProviderTheme(model.provider);
          
          return (
            <Link
              key={model.id}
              href={`/model/${model.id}`}
              className="group surface-card rounded-xl border border-border/40 p-4 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <span
                    className={cn(
                      "inline-block rounded-md px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider",
                      theme.bg,
                      theme.text
                    )}
                  >
                    {model.provider}
                  </span>
                  {model.isOpenSource && (
                    <span className="rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Open
                    </span>
                  )}
                </div>
                
                <h3 className="font-display text-sm font-bold tracking-tight text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {model.name}
                </h3>
                
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {model.releaseDate}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
