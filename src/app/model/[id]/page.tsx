import { benchmarks, models, sources } from "@/lib/registry-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, normalizeScore } from "@/lib/stats";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Cpu, ShieldCheck, AlertTriangle, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProviderTheme } from "@/lib/provider-identity";

const sourceMap = new Map(sources.map((source) => [source.id, source]));

function getHostLabel(url?: string) {
  if (!url) return "Unknown source";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "Unknown source";
  }
}

function getVerificationLabel(level?: string, verified?: boolean) {
  if (level === "third_party") return "Third-party";
  if (level === "provider") return "Provider";
  if (level === "community") return "Community";
  if (level === "estimated") return "Estimated";
  return verified ? "Verified" : "Unverified";
}

interface PageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return models.map((model) => ({
    id: model.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const model = models.find((entry) => entry.id === id);

  if (!model) {
    return {
      title: "Model",
      description: "Model details and benchmark performance.",
    };
  }

  return {
    title: model.name,
    description: `${model.name} by ${model.provider}: pricing, specs, and benchmark-level provenance in LLM Registry.`,
    alternates: {
      canonical: `/model/${model.id}`,
    },
  };
}

export default async function ModelPage({ params }: PageProps) {
  const { id } = await params;
  const model = models.find((m) => m.id === id);

  if (!model) return notFound();

  const scoreEntries = Object.values(model.scores);
  const providerSourceId = scoreEntries.find((entry) => entry.sourceId)?.sourceId;
  const providerSource = providerSourceId ? sourceMap.get(providerSourceId) : undefined;
  const providerUrl = providerSource?.url;
  const latestAsOf = scoreEntries
    .map((entry) => entry.asOfDate)
    .filter((date): date is string => Boolean(date))
    .sort()
    .at(-1);

  const providerTheme = getProviderTheme(model.provider);

  const moduleSpecs = [
    {
      id: "context",
      label: "Context Window",
      value:
        model.specs.contextWindow >= 1000000
          ? `${(model.specs.contextWindow / 1000000).toFixed(1)}M`
          : `${(model.specs.contextWindow / 1000).toFixed(0)}k`,
      footnote: "tokens",
      icon: Layers,
      accent: "text-primary",
    },
    {
      id: "input",
      label: "Input Cost",
      value: formatCurrency(model.specs.pricing.input),
      footnote: "per 1M tokens",
      icon: Zap,
      accent: "text-emerald-700 dark:text-emerald-300",
    },
    {
      id: "output",
      label: "Output Cost",
      value: formatCurrency(model.specs.pricing.output),
      footnote: "per 1M tokens",
      icon: Zap,
      accent: "text-emerald-700 dark:text-emerald-300",
    },
    {
      id: "params",
      label: "Parameters",
      value: model.specs.parameters,
      footnote: "model footprint",
      icon: Cpu,
      accent: "text-sky-700 dark:text-sky-300",
    },
  ] as const;

  const compareCandidates = models
    .filter((entry) => entry.id !== model.id)
    .slice(0, 3);

  const modalityTags = Array.from(
    new Set([...(model.modalities?.input ?? []), ...(model.modalities?.output ?? []), ...model.capabilities])
  ).slice(0, 4);

  return (
    <div className="animate-in fade-in duration-700 space-y-7 pb-16">
      <Link href="/" className="group inline-flex items-center gap-2 pl-1 text-sm font-mono tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary">
        <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
        Back to Leaderboard
      </Link>

      <p className="label-eyebrow">Home / Models / {model.name}</p>

      <section className="surface-panel relative overflow-hidden rounded-2xl px-6 py-7 sm:px-8 sm:py-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_-18%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_50%)] dark:bg-[radial-gradient(circle_at_86%_-18%,color-mix(in_oklab,var(--primary)_30%,transparent),transparent_50%)]" />
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl space-y-4">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <Badge
                variant="outline"
                className={`rounded-md px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] ${providerTheme.border} ${providerTheme.bg} ${providerTheme.text}`}
              >
                {model.provider}
              </Badge>
              {model.isOpenSource && (
                <Badge variant="outline" className="rounded-md border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-400">
                  Open Weights
                </Badge>
              )}
            </div>

            <h1 className="text-balance font-display text-5xl font-bold leading-[0.88] tracking-[-0.03em] text-foreground md:text-7xl">
              {model.name}
            </h1>

            <p className="max-w-2xl border-l border-primary/40 py-1 pl-4 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
              Release {model.releaseDate} | Architecture {model.specs.parameters}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              {providerUrl && (
                <Button asChild variant="outline" className="h-10 rounded-md border-emerald-500/30 bg-emerald-500/8 px-4 text-sm font-medium text-emerald-700 shadow-none hover:bg-emerald-500/14 dark:text-emerald-300">
                  <a href={providerUrl} target="_blank" rel="noreferrer">
                    <ShieldCheck className="mr-1.5 h-4 w-4" />
                    Verified Source
                  </a>
                </Button>
              )}
              <Button asChild variant="outline" className="h-10 rounded-md px-4 text-sm">
                <Link href="/about">Watch</Link>
              </Button>
              {model.modelUrl && (
                <Button asChild variant="outline" className="h-10 rounded-md px-4 text-sm">
                  <a href={model.modelUrl} target="_blank" rel="noreferrer">
                    Official Page <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </a>
                </Button>
              )}
              <Button asChild className="h-10 rounded-md px-4 text-sm shadow-[0_14px_26px_-20px_var(--color-primary)]">
                {model.modelCardUrl ? (
                  <a href={model.modelCardUrl} target="_blank" rel="noreferrer">
                    Model Card <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link href="/about">
                    Model Card <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                )}
              </Button>
            </div>
          </div>

          <div className="data-module min-w-[220px] space-y-3 rounded-xl p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground/85">
              Latest Score Update
            </p>
            <p className="font-mono text-sm text-foreground">
              {latestAsOf ?? "Unknown"}
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-7">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {moduleSpecs.map((module) => {
              const Icon = module.icon;

              return (
                <section key={module.id} className="data-module group relative overflow-hidden rounded-xl p-5">
                  <div className="absolute right-3 top-3 text-muted/20 transition-colors group-hover:text-muted/30 dark:text-muted/10 dark:group-hover:text-muted/20">
                    <Icon className="h-10 w-10" />
                  </div>

                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    {module.label}
                  </p>
                  <p className={`mt-3 text-4xl font-display font-bold tracking-[-0.03em] ${module.accent}`}>
                    {module.value}
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground/80">
                    {module.footnote}
                  </p>
                </section>
              );
            })}
          </div>

          <div className="space-y-7 pt-1.5">
            <div className="flex items-center gap-4 border-b border-border/30 pb-4">
              <div className="rounded-md bg-primary/10 p-2">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold tracking-[-0.03em] text-foreground">Benchmark Provenance</h2>
                <p className="mt-1 font-mono text-sm uppercase tracking-[0.1em] text-muted-foreground">
                  Performance Analysis // Verified Benchmarks
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {benchmarks.map((benchmark) => {
                const scoreData = model.scores[benchmark.id];
                if (!scoreData || scoreData.score === null) return null;

                const scoreRatio = Math.max(0, Math.min(1, normalizeScore(scoreData.score, benchmark) / 100));
                const isHigh = scoreRatio >= 0.85;
                const isMed = scoreRatio >= 0.7;

                const source = scoreData.sourceId ? sourceMap.get(scoreData.sourceId) : undefined;
                const sourceUrl = scoreData.sourceUrl ?? source?.url ?? benchmark.link;
                const sourceLabel = source?.name ?? getHostLabel(sourceUrl);
                const verificationLabel = getVerificationLabel(scoreData.verificationLevel, scoreData.verified);
                const isArtificialAnalysis = scoreData.sourceId === "artificial-analysis";

                const scoreColor = isHigh ? "text-foreground" : isMed ? "text-emerald-700 dark:text-emerald-400" : "text-amber-700 dark:text-amber-400";
                const fillColor = isHigh ? "bg-foreground/85" : isMed ? "bg-foreground/65" : "bg-foreground/45";

                return (
                  <article key={benchmark.id} className="data-module group relative rounded-lg p-5 transition-transform duration-300 hover:-translate-y-0.5">
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <span className="max-w-[72%] font-mono text-sm font-semibold tracking-[0.06em] text-muted-foreground transition-colors group-hover:text-foreground">
                        {benchmark.name}
                      </span>
                      <Badge variant="secondary" className="rounded border-border bg-secondary px-1.5 py-0.5 font-mono text-[11px] tracking-[0.06em] text-muted-foreground">
                        {benchmark.category}
                      </Badge>
                    </div>

                    <div className="mb-4 flex items-end gap-3">
                      <span className={`origin-left font-display text-5xl font-bold tracking-[-0.03em] transition-transform group-hover:scale-105 ${scoreColor}`}>
                        {scoreData.score}
                        {isArtificialAnalysis ? "*" : ""}
                      </span>
                      <span className="mb-1.5 font-mono text-[11px] tracking-[0.06em] text-muted-foreground/55">/ {benchmark.maxScore}</span>
                    </div>

                    <div className="mb-5 h-2 overflow-hidden rounded-full border border-border bg-muted">
                      <div className={`h-full ${fillColor}`} style={{ width: `${Math.max(4, scoreRatio * 100)}%` }} />
                    </div>

                    <div className="space-y-2 border-t border-border/60 pt-4">
                      {scoreData.verified ? (
                        <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-emerald-700 dark:text-emerald-300">
                          <ShieldCheck className="h-3 w-3" />
                          <span>{verificationLabel}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-amber-700 dark:text-amber-300">
                          <AlertTriangle className="h-3 w-3" />
                          <span>{verificationLabel}</span>
                        </div>
                      )}

                      <div className="flex items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                        <span>{scoreData.asOfDate ?? "Unknown"}</span>
                        {sourceUrl ? (
                          <a href={sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
                            {sourceLabel} <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : (
                          <span>{sourceLabel}</span>
                        )}
                      </div>
                    </div>

                    <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                      {benchmark.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="space-y-3 lg:pt-1">
          <section className="surface-card sticky top-20 rounded-2xl p-5">
            <h3 className="font-display text-3xl font-bold tracking-tight text-foreground">Metadata</h3>
            <div className="mt-4 space-y-3 border-t border-border pt-4 text-sm">
              <div>
                <p className="label-eyebrow">License</p>
                <p className="mt-1 font-medium text-foreground">{model.isOpenSource ? "Open Weights" : "Proprietary"}</p>
              </div>
              <div>
                <p className="label-eyebrow">Context Window</p>
                <p className="mt-1 font-medium text-foreground">{model.specs.contextWindow.toLocaleString()} tokens</p>
              </div>
              <div>
                <p className="label-eyebrow">Input Pricing</p>
                <p className="mt-1 font-medium text-foreground">{formatCurrency(model.specs.pricing.input)} / 1M tokens</p>
              </div>
              <div>
                <p className="label-eyebrow">Output Pricing</p>
                <p className="mt-1 font-medium text-foreground">{formatCurrency(model.specs.pricing.output)} / 1M tokens</p>
              </div>
              <div>
                <p className="label-eyebrow">Modality</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {modalityTags.length > 0 ? (
                    modalityTags.map((tag) => (
                      <span key={tag} className="chip-pill rounded-md px-2 py-1 text-[11px] font-mono uppercase tracking-[0.08em] text-muted-foreground">
                        {tag}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-muted-foreground">Not specified</span>
                  )}
                </div>
              </div>
            </div>

            <Button variant="outline" className="mt-5 h-10 w-full">Report Inaccuracy</Button>
          </section>

          <section className="surface-card rounded-2xl p-5">
            <h4 className="font-display text-xl font-semibold tracking-tight text-foreground">Compare With</h4>
            <div className="mt-3 space-y-2">
              {compareCandidates.map((candidate) => (
                <Link
                  key={candidate.id}
                  href={`/compare?models=${encodeURIComponent(model.id)},${encodeURIComponent(candidate.id)}`}
                  className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors hover:border-primary/35 hover:bg-primary/5"
                >
                  <span>{candidate.name}</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
