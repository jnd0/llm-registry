import { benchmarks, models, sources } from "@/lib/registry-data";
import { changelog } from "@/data/changelog";
import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const categories = Array.from(new Set(benchmarks.map((benchmark) => benchmark.category)));

export const metadata: Metadata = {
  title: "Methodology",
  description: "Read data policy, normalization rules, attribution, and confidence caveats used in LLM Registry rankings.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-8 pb-20">
      <section className="surface-panel rounded-2xl px-5 py-6 sm:px-7 sm:py-7">
        <h1 className="text-3xl font-display font-bold tracking-tight sm:text-4xl">Methodology</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Data policy, normalization rules, provenance labeling, and ranking logic used across the registry.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="surface-card">
          <CardHeader>
            <CardTitle className="label-eyebrow">Models</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-display font-bold">{models.length}</p>
          </CardContent>
        </Card>

        <Card className="surface-card">
          <CardHeader>
            <CardTitle className="label-eyebrow">Benchmarks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-display font-bold">{benchmarks.length}</p>
          </CardContent>
        </Card>

        <Card className="surface-card">
          <CardHeader>
            <CardTitle className="label-eyebrow">Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-display font-bold">{categories.length}</p>
          </CardContent>
        </Card>

        <Card className="surface-card">
          <CardHeader>
            <CardTitle className="label-eyebrow">Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-display font-bold">{sources.length}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="surface-card">
        <CardHeader>
          <CardTitle>How scores are normalized</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>- `max`: `score / maxScore * 100`</p>
          <p>- `minmax`: `(score - minScore) / (maxScore - minScore) * 100`</p>
          <p>- `elo`: min-max scaling with ELO bounds (default min is 1000)</p>
          <p>- lower-is-better metrics are inverted to keep 100 = best</p>
          <p>- category averages are computed from available normalized benchmark scores</p>
        </CardContent>
      </Card>

      <Card className="surface-card">
        <CardHeader>
          <CardTitle>Ranking formula</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>- Benchmark score: normalize each raw benchmark result to a 0-100 scale.</p>
          <p>- Category score: average all normalized scores the model has in that category.</p>
          <p>- Coverage: `available benchmark scores / total benchmarks` in the registry.</p>
          <p>- Leaderboard sorting is benchmark-specific or category average-based depending on active view.</p>
          <p>- We avoid hidden weighting; category averages are transparent and inspectable.</p>
        </CardContent>
      </Card>

      <Card className="surface-card">
        <CardHeader>
          <CardTitle>Coverage and confidence</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>- Higher coverage means stronger comparability across the registry.</p>
          <p>- Low coverage models can rank highly on narrow slices but have lower confidence overall.</p>
          <p>- Use the Coverage column to contextualize any top-line rank.</p>
          <p>- Compare mode includes shared-only filtering for apples-to-apples analysis.</p>
        </CardContent>
      </Card>

      <Card className="surface-card">
        <CardHeader>
          <CardTitle>Verification tiers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>- `third_party`: independently evaluated leaderboard or external audit.</p>
          <p>- `provider`: reported by the model provider.</p>
          <p>- `community`: community-run benchmark result.</p>
          <p>- `estimated`: inferred or approximate value pending verification.</p>
        </CardContent>
      </Card>

      <Card className="surface-card">
        <CardHeader>
          <CardTitle>Third-party attribution</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>- Scores imported from Artificial Analysis are marked with `*` in benchmark views.</p>
          <p>- Artificial Analysis data attribution: <a href="https://artificialanalysis.ai/" target="_blank" rel="noreferrer" className="text-primary hover:underline">artificialanalysis.ai</a>.</p>
          <p>- A one-off model metadata enrichment (pricing/capabilities/context) was sourced from <a href="https://github.com/yamanahlawat/llm-registry" target="_blank" rel="noreferrer" className="text-primary hover:underline">yamanahlawat/llm-registry</a>.</p>
          <p>- Metadata imports do not overwrite benchmark scores or benchmark-level provenance.</p>
          <p>- Current snapshot date for imported independent scores: 2026-02-16.</p>
        </CardContent>
      </Card>

      <Card className="surface-card">
        <CardHeader>
          <CardTitle>Data Quality & Provenance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>- Verification: Official scores from provider announcements (Anthropic, Mistral, AWS) are marked as verified: true.</p>
          <p>- Estimates: Scores derived from third-party evaluations (Artificial Analysis, LMSYS) or related benchmark variants are added with verified: false and attributed to the respective source.</p>
        </CardContent>
      </Card>

      <Card className="surface-card">
        <CardHeader>
          <CardTitle>Known caveats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>- Benchmark freshness varies; always check each score&apos;s as-of date.</p>
          <p>- Some benchmarks measure narrow capabilities and should not be used alone.</p>
          <p>- Provider-reported scores may not be directly reproducible without external replication.</p>
          <p>- A small set of tracked benchmarks may be listed without populated scores yet.</p>
        </CardContent>
      </Card>

      <Card className="surface-card">
        <CardHeader>
          <CardTitle>Data standards</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>- Every benchmark must have a unique ID and category</p>
          <p>- Every model score key must map to a benchmark ID</p>
          <p>- Score values must stay in benchmark bounds</p>
          <p>- Validation scripts enforce schema and data consistency before release</p>
        </CardContent>
      </Card>

      <Card className="surface-card">
        <CardHeader>
          <CardTitle>Recent registry changes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          {changelog.map((entry) => (
            <div key={`${entry.version}-${entry.date}`} className="rounded-md border border-white/12 bg-background/40 p-4">
              <p className="text-xs font-mono tracking-[0.1em] text-primary">v{entry.version} · {entry.date}</p>
              <p className="mt-1 font-semibold text-foreground">{entry.title}</p>
              <div className="mt-2 space-y-1">
                {entry.notes.map((note) => (
                  <p key={note}>- {note}</p>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
