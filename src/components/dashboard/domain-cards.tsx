import Link from "next/link";
import { cn } from "@/lib/utils";
import { domainDefinitions, getBenchmarkIdsForDomain, domainToSlug, type CapabilityDomain } from "@/lib/domains";
import { getTopModelForDomain, getAverageDomainScore } from "@/lib/frontier";
import {
  Brain,
  Globe,
  Code,
  Calculator,
  Bot,
  Eye,
  Scroll,
  CheckCircle,
} from "lucide-react";

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

const domainColors: Record<CapabilityDomain, string> = {
  "Intelligence": "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  "Knowledge & Communication": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "Coding": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  "Math": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  "Agents & Tools": "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  "Vision & Video": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
  "Long Context": "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
  "Factuality": "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
};

interface DomainCardsProps {
  className?: string;
}

export function DomainCards({ className }: DomainCardsProps) {
  const domains = domainDefinitions.map((domain) => {
    const topModel = getTopModelForDomain(domain.id);
    const avgScore = getAverageDomainScore(domain.id);
    const benchmarkCount = getBenchmarkIdsForDomain(domain.id).length;
    const Icon = domainIcons[domain.id];

    return {
      ...domain,
      topModel,
      avgScore,
      benchmarkCount,
      Icon,
      colorClass: domainColors[domain.id],
    };
  });

  return (
    <section className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
          Performance by Domain
        </h2>
        <Link
          href="/about"
          className="font-mono text-[10px] text-muted-foreground/40 hover:text-primary transition-colors"
        >
          About Domains
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {domains.map((domain) => (
          <Link
            key={domain.id}
            href={`/domain/${domainToSlug(domain.id)}`}
            className="group surface-card rounded-xl border border-border/40 p-4 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg border mb-3",
              domain.colorClass
            )}>
              <domain.Icon className="h-5 w-5" />
            </div>

            <h3 className="font-display text-xs font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {domain.label}
            </h3>

            {domain.topModel && (
              <p className="mt-2 text-[10px] text-muted-foreground truncate" title={domain.topModel.modelName}>
                Top: {domain.topModel.modelName}
              </p>
            )}

            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-mono text-lg font-bold text-foreground">
                {domain.topModel ? domain.topModel.average.toFixed(0) : domain.avgScore.toFixed(0)}
              </span>
              <span className="text-[10px] text-muted-foreground">pts</span>
              <span className="text-[10px] text-muted-foreground/60 ml-1">· n={domain.benchmarkCount}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
