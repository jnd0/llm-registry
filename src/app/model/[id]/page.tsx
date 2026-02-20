import { benchmarks, findModel, findParentModel, models, sources } from "@/lib/registry-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, normalizeScore } from "@/lib/stats";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Cpu, ShieldCheck, AlertTriangle, Layers, Zap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProviderTheme } from "@/lib/provider-identity";
import { ModelFamilyCompare } from "@/components/dashboard/model-compare-selector";
import { ShareButton } from "@/components/benchmark/share-button";
import { siteUrl } from "@/lib/site";

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
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return models.map((model) => ({
    id: model.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const model = findModel(id);

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
    openGraph: {
      title: `${model.name} by ${model.provider}`,
      description: `${model.name} benchmark performance, pricing, and specs in LLM Registry.`,
      url: `${siteUrl}/model/${model.id}`,
      type: "article",
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${model.name} - LLM Registry`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${model.name} by ${model.provider}`,
      description: `${model.name} benchmark performance, pricing, and specs in LLM Registry.`,
    },
  };
}

export default async function ModelPage({ params }: PageProps) {
  const { id } = await params;
  const model = findModel(id);

  if (!model) return notFound();

  const parentModel = findParentModel(model.id);
  const siblings = parentModel?.variants?.filter((v) => v.id !== model.id) ?? [];

  const familyBase = parentModel ?? model;
  const familyVariants = familyBase.variants ?? [];
  const fullFamily = [
    { id: familyBase.id, name: familyBase.name },
    ...familyVariants.map(v => ({ id: v.id, name: v.name }))
  ];

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
    <div className="animate-in fade-in duration-700 space-y-4 pb-12">
      <nav className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">
          Leaderboard
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground font-medium">{model.name}</span>
      </nav>

      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="group inline-flex items-center gap-2 text-sm font-mono tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary sm:hidden">
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
          Back
        </Link>
        <ShareButton />
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border bg-card/50 px-5 py-6 sm:px-8 sm:py-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_50%)]" />
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant="outline"
                className={`rounded-full px-3 py-0.5 font-bold text-[10px] uppercase tracking-widest ${providerTheme.border} ${providerTheme.bg} ${providerTheme.text}`}
              >
                {model.provider}
              </Badge>
              {model.isOpenSource && (
                <Badge variant="outline" className="rounded-full border-emerald-500/20 bg-emerald-500/10 px-3 py-0.5 font-bold text-[10px] uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                  Open Weights
                </Badge>
              )}
            </div>

            <h1 className="text-balance font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {model.name}
            </h1>

            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
              Released {model.releaseDate} · {model.specs.parameters} Architecture
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <ModelFamilyCompare currentModelId={model.id} family={fullFamily} />
              {providerUrl && (
                <Button asChild variant="outline" size="sm" className="h-9 rounded-full border-emerald-500/30 bg-emerald-500/5 px-4 text-[11px] font-bold uppercase tracking-wider text-emerald-700 hover:bg-emerald-500/10 dark:text-emerald-300">
                  <a href={providerUrl} target="_blank" rel="noreferrer">
                    <ShieldCheck className="mr-2 h-3.5 w-3.5" />
                    Verified
                  </a>
                </Button>
              )}
              {model.modelUrl && (
                <Button asChild variant="outline" size="sm" className="h-9 rounded-full px-4 text-[11px] font-bold uppercase tracking-wider">
                  <a href={model.modelUrl} target="_blank" rel="noreferrer">
                    Official
                  </a>
                </Button>
              )}
              <Button asChild size="sm" className="h-9 rounded-full px-5 text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
                {model.modelCardUrl ? (
                  <a href={model.modelCardUrl} target="_blank" rel="noreferrer">
                    Model Card
                  </a>
                ) : (
                  <Link href="/about">
                    Model Card
                  </Link>
                )}
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-muted/30 p-5 min-w-[200px]">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
              Latest Data
            </p>
            <p className="mt-3 font-mono text-sm font-bold text-foreground">
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
                  <p className={`mt-3 text-4xl font-display text-5xl font-bold tracking-[-0.03em] ${module.accent}`}>
                    {module.value}
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground/80">
                    {module.footnote}
                  </p>
                </section>
              );
            })}
          </div>

          {parentModel && (
            <section className="space-y-6">
              <div className="flex items-center justify-between border-b border-border/40 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <Layers className="h-4 w-4 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Base Model</h2>
                </div>
              </div>
              <Link
                href={`/model/${parentModel.id}`}
                className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-5 transition-all hover:border-primary/40 hover:bg-muted/30"
              >
                <div className="space-y-1.5">
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {parentModel.name}
                  </h3>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                    Primary Model Identifier
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary/60 opacity-0 transition-opacity group-hover:opacity-100">
                    View Primary
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </div>
                </div>
              </Link>
            </section>
          )}

          {model.variants && model.variants.length > 0 && (
            <section className="space-y-6">
              <div className="flex items-center justify-between border-b border-border/40 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10">
                    <Layers className="h-4 w-4 text-sky-600 dark:text-sky-400" />
                  </div>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Model Variants</h2>
                </div>
                <div className="flex items-center gap-3">
                  <Button asChild variant="ghost" size="sm" className="h-7 rounded-full px-3 text-[10px] font-bold uppercase tracking-wider text-primary hover:bg-primary/5">
                    <Link href={`/compare?models=${[model.id, ...model.variants.map(v => v.id)].join(",")}`}>
                      Compare All
                    </Link>
                  </Button>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                    {model.variants.length} Variants Available
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {model.variants.map((variant) => (
                  <Link
                    key={variant.id}
                    href={`/model/${variant.id}`}
                    className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-5 transition-all hover:border-primary/40 hover:bg-muted/30"
                  >
                    <div className="space-y-1.5">
                      <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {variant.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                          {variant.specs.parameters}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                          {variant.releaseDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {siblings.length > 0 && (
            <section className="space-y-6">
              <div className="flex items-center justify-between border-b border-border/40 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10">
                    <Layers className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Related Variants</h2>
                </div>
                {parentModel && (
                  <Button asChild variant="ghost" size="sm" className="h-7 rounded-full px-3 text-[10px] font-bold uppercase tracking-wider text-primary hover:bg-primary/5">
                    <Link href={`/compare?models=${[parentModel.id, ...parentModel.variants!.map(v => v.id)].join(",")}`}>
                      Compare Family
                    </Link>
                  </Button>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {siblings.map((sibling) => (
                  <Link
                    key={sibling.id}
                    href={`/model/${sibling.id}`}
                    className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-5 transition-all hover:border-primary/40 hover:bg-muted/30"
                  >
                    <div className="space-y-1.5">
                      <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {sibling.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                          {sibling.specs.parameters}
                        </span>
                      </div>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

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
                      <Link
                        href={`/benchmark/${benchmark.id}`}
                        className="max-w-[72%] font-mono text-sm font-semibold tracking-[0.06em] text-muted-foreground transition-colors hover:text-primary group-hover:text-foreground"
                      >
                        {benchmark.name}
                      </Link>
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
                        <span>Last Verified: {scoreData.asOfDate ?? "Unknown Date"}</span>
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

            <Button asChild variant="outline" className="mt-5 h-10 w-full">
              <a
                href={`mailto:registry@example.com?subject=Report%20Inaccuracy%3A%20${encodeURIComponent(model.name)}&body=${encodeURIComponent(`Model: ${model.name}\nProvider: ${model.provider}\n\nPlease describe the inaccuracy:\n`)}`}
              >
                Report Inaccuracy
              </a>
            </Button>
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
