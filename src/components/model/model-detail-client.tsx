"use client";

import { useRegistry } from "@/hooks/use-registry";
import { useModelScores } from "@/hooks/use-model-scores";
import { TierBadge, ScoreCount } from "@/components/ui/tier-badge";
import { FamilyBadge } from "@/components/model/family-badge";
import { CapabilityBadges } from "@/components/model/capability-icon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Shield, Clock, Zap, Layers, Brain, Cpu } from "lucide-react";
import { formatCurrency } from "@/lib/stats";
import { cn } from "@/lib/utils";

interface ModelDetailProps {
  modelId: string;
}

export function ModelDetail({ modelId }: ModelDetailProps) {
  const { models, isLoading: isLoadingRegistry } = useRegistry({ includeUnscored: true });
  const { scores, isLoading: isLoadingScores } = useModelScores(modelId);

  const model = models.find((m) => m.id === modelId);

  if (isLoadingRegistry) {
    return <ModelLoadingSkeleton />;
  }

  if (!model) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <Shield className="mx-auto h-12 w-12 text-muted-foreground/40" />
          <h3 className="mt-4 text-lg font-semibold">Model Not Found</h3>
          <p className="text-muted-foreground">The model "{modelId}" doesn't exist in the registry.</p>
        </div>
      </div>
    );
  }

  const isVerified = model.tier === "verified";
  const hasScores = model.hasScores && Object.keys(scores).length > 0;

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-start gap-3">
          <Badge
            variant="outline"
            className={cn(
              "rounded-full px-3 py-0.5 font-bold text-[10px] uppercase tracking-widest",
              model.provider === "OpenAI" && "border-green-500/20 bg-green-500/10 text-green-700 dark:text-green-400",
              model.provider === "Anthropic" && "border-orange-500/20 bg-orange-500/10 text-orange-700 dark:text-orange-400",
              model.provider === "Google DeepMind" && "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400"
            )}
          >
            {model.provider}
          </Badge>
          {model.family && <FamilyBadge family={model.family} size="sm" showLink={false} />}
          <TierBadge tier={model.tier} size="sm" />
          {isVerified && <ScoreCount scoreCount={Object.keys(scores).length} hasScores={hasScores} />}
        </div>

        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {model.name}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
            Released {model.releaseDate}
          </span>
          {model.trainingCutoff && (
            <>
              <span className="hidden h-3 w-px bg-border sm:inline-block" />
              <div className="flex items-center gap-1.5" title="Training data cutoff">
                <Clock className="h-3.5 w-3.5 text-muted-foreground/60" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
                  Training: {model.trainingCutoff}
                </span>
              </div>
            </>
          )}
        </div>

        {model.apiSupport && (
          <CapabilityBadges apiSupport={model.apiSupport} modalities={model.modalities} />
        )}
      </section>

      {/* Specs Grid */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Specifications</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <SpecCard
            icon={Layers}
            label="Context Window"
            value={formatTokenCount(model.specs?.contextWindow || 0)}
            footnote="tokens"
          />
          {model.specs?.maxOutputTokens && (
            <SpecCard
              icon={Zap}
              label="Max Output"
              value={formatTokenCount(model.specs.maxOutputTokens)}
              footnote="tokens"
              accent="text-violet-700 dark:text-violet-300"
            />
          )}
          <SpecCard
            icon={Zap}
            label="Input Cost"
            value={formatCurrency(model.specs?.pricing?.input || 0)}
            footnote="per 1M tokens"
            accent="text-emerald-700 dark:text-emerald-300"
          />
          <SpecCard
            icon={Zap}
            label="Output Cost"
            value={formatCurrency(model.specs?.pricing?.output || 0)}
            footnote="per 1M tokens"
            accent="text-emerald-700 dark:text-emerald-300"
          />
          {(model.specs?.pricing?.cacheInput || model.specs?.pricing?.cacheOutput) && (
            <SpecCard
              icon={Cpu}
              label="Cache Cost"
              value={`${formatCurrency(model.specs.pricing.cacheInput || 0)} / ${formatCurrency(model.specs.pricing.cacheOutput || 0)}`}
              footnote="read / write per 1M"
              accent="text-blue-700 dark:text-blue-300"
            />
          )}
          {model.specs?.pricing?.reasoning && (
            <SpecCard
              icon={Brain}
              label="Reasoning Cost"
              value={formatCurrency(model.specs.pricing.reasoning)}
              footnote="per 1M tokens"
              accent="text-purple-700 dark:text-purple-300"
            />
          )}
        </div>
      </section>

      {/* Scores Section */}
      {hasScores && (
        <section>
          <h2 className="mb-4 text-2xl font-bold">Benchmark Scores</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {Object.entries(scores).map(([benchmarkId, scoreData]) => (
                  <div
                    key={benchmarkId}
                    className="flex items-center justify-between rounded-lg border border-border/60 p-3"
                  >
                    <div>
                      <p className="font-medium capitalize">{benchmarkId.replace(/-/g, " ")}</p>
                      {scoreData.verificationLevel && (
                        <p className="text-xs text-muted-foreground">
                          {scoreData.verificationLevel.replace("_", " ")}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">
                        {scoreData.score !== null ? scoreData.score.toFixed(1) : "N/A"}
                      </p>
                      {scoreData.asOfDate && (
                        <p className="text-xs text-muted-foreground">{scoreData.asOfDate}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Info for Discovered Models */}
      {!isVerified && (
        <Card className="border-amber-500/20 bg-amber-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-amber-600" />
              <div className="space-y-1">
                <p className="font-medium text-amber-900 dark:text-amber-200">
                  Pending Evaluation
                </p>
                <p className="text-sm text-amber-800 dark:text-amber-300">
                  This model has been automatically imported from models.dev. Benchmark scores are
                  pending manual curation. Check back soon for verified performance data!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function SpecCard({
  icon: Icon,
  label,
  value,
  footnote,
  accent = "text-primary",
}: {
  icon: any;
  label: string;
  value: string;
  footnote: string;
  accent?: string;
}) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Icon className={cn("h-5 w-5", accent)} />
          <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-xs text-muted-foreground">{footnote}</p>
      </CardContent>
    </Card>
  );
}

function ModelLoadingSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex gap-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-28" />
        </div>
        <Skeleton className="h-12 w-64" />
        <Skeleton className="h-4 w-48" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-32" />
        ))}
      </div>
    </div>
  );
}

function formatTokenCount(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(0)}k`;
  }
  return count.toString();
}
