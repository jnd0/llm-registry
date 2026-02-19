import { Benchmark } from "@/types";
import { benchmarks } from "@/lib/registry-data";
import { getDomainForBenchmark } from "@/lib/domains";
import Link from "next/link";

interface SimilarBenchmarksProps {
  currentBenchmark: Benchmark;
}

export function SimilarBenchmarks({ currentBenchmark }: SimilarBenchmarksProps) {
  const domain = getDomainForBenchmark(currentBenchmark);
  
  const similarBenchmarks = benchmarks
    .filter((b) => {
      if (b.id === currentBenchmark.id) return false;
      if (domain) {
        const bDomain = getDomainForBenchmark(b);
        return bDomain === domain;
      }
      return b.category === currentBenchmark.category;
    })
    .slice(0, 6);

  if (similarBenchmarks.length === 0) {
    return null;
  }

  const sectionLabel = domain 
    ? `Related in ${domain}`
    : `Related in ${currentBenchmark.category}`;

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
          {sectionLabel}
        </h2>
      </div>
      
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {similarBenchmarks.map((benchmark) => (
          <Link
            key={benchmark.id}
            href={`/benchmark/${benchmark.id}`}
            className="group surface-card rounded-lg border border-border/40 p-3 transition-all hover:border-primary/30 hover:shadow-sm"
          >
            <p className="font-display text-xs font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {benchmark.name}
            </p>
            <p className="mt-1 text-[10px] text-muted-foreground font-mono">
              {benchmark.id}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
