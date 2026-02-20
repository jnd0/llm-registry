import { benchmarks } from "@/lib/registry-data";
import { domainDefinitions, getDomainForBenchmark } from "@/lib/domains";
import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Benchmarks",
  description: "Explore all benchmarks tracked in the LLM Registry.",
  keywords: ["llm benchmarks", "ai evaluation benchmarks", "benchmark categories", "model testing datasets"],
  alternates: {
    canonical: "/benchmarks",
  },
  openGraph: {
    title: `LLM Benchmarks Directory | ${siteName}`,
    description: "Explore all benchmarks tracked in the LLM Registry.",
    url: `${siteUrl}/benchmarks`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "LLM benchmarks directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `LLM Benchmarks Directory | ${siteName}`,
    description: "Explore all benchmarks tracked in the LLM Registry.",
    images: [`${siteUrl}/opengraph-image.png`],
  },
};

export default function BenchmarksPage() {
  const benchmarksByDomain = new Map<string, typeof benchmarks>();
  
  for (const benchmark of benchmarks) {
    const domain = getDomainForBenchmark(benchmark) ?? "Other";
    const existing = benchmarksByDomain.get(domain) ?? [];
    benchmarksByDomain.set(domain, [...existing, benchmark]);
  }

  const allDomains = [...domainDefinitions.map((d) => d.id), "Other"];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
          Benchmarks
        </h1>
        <p className="mt-2 text-muted-foreground">
          Explore {benchmarks.length} benchmarks across {domainDefinitions.length} capability domains.
        </p>
      </div>

      {allDomains.map((domainId) => {
        const domainBenchmarks = benchmarksByDomain.get(domainId);
        if (!domainBenchmarks || domainBenchmarks.length === 0) return null;

        const domainDef = domainDefinitions.find((d) => d.id === domainId);

        return (
          <section key={domainId} className="space-y-4">
            <div className="flex items-center gap-3">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
                {domainDef?.label ?? domainId}
              </h2>
              <span className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-bold text-muted-foreground">
                {domainBenchmarks.length}
              </span>
            </div>
            {domainDef && (
              <p className="text-sm text-muted-foreground">
                {domainDef.description}
              </p>
            )}

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {domainBenchmarks.map((benchmark) => (
                <Link
                  key={benchmark.id}
                  href={`/benchmark/${benchmark.id}`}
                  className="group surface-card rounded-xl border border-border/40 p-4 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                      {benchmark.name}
                    </h3>
                    <span className="rounded-md bg-muted px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                      {benchmark.category}
                    </span>
                  </div>
                  
                  <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                    {benchmark.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-muted-foreground">
                      Unit: {benchmark.unit ?? "%"}
                    </span>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {benchmark.link && (
                        <span className="inline-flex items-center gap-1 text-[10px] text-primary">
                          Website
                          <ExternalLink className="h-2.5 w-2.5" />
                        </span>
                      )}
                      {benchmark.paperUrl && (
                        <span className="inline-flex items-center gap-1 text-[10px] text-primary">
                          Paper
                          <ExternalLink className="h-2.5 w-2.5" />
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
