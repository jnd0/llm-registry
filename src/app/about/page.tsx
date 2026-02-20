import { benchmarks, models, sources } from "@/lib/registry-data";
import { changelog } from "@/data/changelog";
import type { Metadata } from "next";
import { siteName, siteUrl } from "@/lib/site";

const categories = Array.from(new Set(benchmarks.map((benchmark) => benchmark.category)));

export const metadata: Metadata = {
  title: "Methodology",
  description: "Read data policy, normalization rules, attribution, and confidence caveats used in LLM Registry rankings.",
  keywords: ["llm methodology", "benchmark normalization", "score provenance", "verification tiers"],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `Methodology and Data Policy | ${siteName}`,
    description: "Read data policy, normalization rules, attribution, and confidence caveats used in LLM Registry rankings.",
    url: `${siteUrl}/about`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "LLM Registry methodology and data policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Methodology and Data Policy | ${siteName}`,
    description: "Read data policy, normalization rules, attribution, and confidence caveats used in LLM Registry rankings.",
    images: [`${siteUrl}/opengraph-image.png`],
  },
};

export default function AboutPage() {
  return (
    <div className="animate-in fade-in duration-700 space-y-10 pb-20">
      <section className="relative overflow-hidden rounded-2xl border border-border bg-card/50 px-6 py-8 sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_50%)]" />
        <div className="relative max-w-3xl space-y-4">
          <p className="label-eyebrow text-muted-foreground/70">Registry / Methodology</p>
          <h1 className="text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Registry Standards
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Data policy, normalization rules, and provenance labeling used across the global benchmark registry.
          </p>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Verified Models", value: models.length },
          { label: "Active Benchmarks", value: benchmarks.length },
          { label: "Evaluation Categories", value: categories.length },
          { label: "Verified Sources", value: sources.length },
        ].map((stat) => (
          <article key={stat.label} className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">{stat.label}</p>
            <p className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground">{stat.value}</p>
          </article>
        ))}
      </section>

      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <aside className="space-y-6">
          <div className="sticky top-24 space-y-8">
            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Score Normalization</h2>
              <div className="space-y-4 border-l border-border/60 pl-4 py-1">
                <div className="space-y-1">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary">Max Scaling</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">Score / MaxScore * 100. Standard for bounded metrics.</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary">Min-Max Scaling</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">(Score - Min) / (Max - Min) * 100. Used for ELO and shifted scales.</p>
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary">Inversion</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">Lower-is-better metrics are mathematically inverted to maintain 100 as the peak.</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Verification Tiers</h2>
              <div className="grid gap-2">
                {[
                  { id: "third_party", label: "Third-party", desc: "Independent audits and leaderboards." },
                  { id: "provider", label: "Provider", desc: "Official scores from model developers." },
                  { id: "community", label: "Community", desc: "Open evaluations and collective results." },
                  { id: "estimated", label: "Estimated", desc: "Inferred values pending formal release." },
                ].map((tier) => (
                  <div key={tier.id} className="rounded-xl border border-border/40 bg-muted/20 p-3">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-foreground">{tier.label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{tier.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </aside>

        <main className="space-y-16">
          <section className="space-y-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">Provenance & Attribution</h2>
            <div className="prose prose-sm prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
              <p className="text-base leading-relaxed">
                We prioritize transparency in every score. Every data point in the registry is tagged with a <span className="text-foreground font-medium underline decoration-primary/30">Source ID</span> and a <span className="text-foreground font-medium underline decoration-primary/30">Verification Level</span>.
              </p>
              <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
                <h3 className="font-display text-lg font-bold text-foreground">Data Attribution</h3>
                <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 m-0">
                  <li className="m-0 border-l-2 border-primary/20 pl-4 py-1">
                    <p className="font-bold text-foreground text-xs uppercase tracking-widest">Artificial Analysis</p>
                    <p className="text-xs mt-1">Scores marked with <code className="text-primary font-bold">*</code> are imported from <a href="https://artificialanalysis.ai/" className="hover:text-primary transition-colors underline">artificialanalysis.ai</a>.</p>
                  </li>
                  <li className="m-0 border-l-2 border-primary/20 pl-4 py-1">
                    <p className="font-bold text-foreground text-xs uppercase tracking-widest">Metadata Source</p>
                    <p className="text-xs mt-1">Foundational metadata sourced from <a href="https://github.com/yamanahlawat/llm-registry" className="hover:text-primary transition-colors underline">yamanahlawat/llm-registry</a>.</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">Comparison Methodology</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Compare views prioritize reliability first. We separate fair, overlap-based analysis from exploratory analysis so missing data does not get interpreted as zero performance.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Strict Mode (Default)</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Uses only benchmarks shared by selected models for fair head-to-head comparisons in summary and detailed tables.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Exploratory Mode</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Includes non-shared results for broader context. Missing entries remain explicitly labeled as N/A.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Capability Profile</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Radar uses all available domains within the current scope and preserves missing values as N/A instead of plotting them as zero.
                </p>
              </article>

              <article className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Evidence Quality</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Compare pages expose shared benchmark counts and per-model coverage so confidence in comparisons is visible before interpretation.
                </p>
              </article>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">Registry Changelog</h2>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">History of Updates</span>
            </div>
            <div className="space-y-8">
              {changelog.map((entry) => (
                <article key={`${entry.version}-${entry.date}`} className="relative group">
                  <div className="absolute -left-3 top-0 bottom-0 w-px bg-border group-hover:bg-primary/30 transition-colors" />
                  <div className="pl-6 space-y-3">
                    <div className="flex items-baseline gap-3">
                      <p className="font-mono text-xs font-bold tracking-widest text-primary uppercase">v{entry.version}</p>
                      <span className="h-1 w-1 rounded-full bg-border" />
                      <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">{entry.date}</p>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">{entry.title}</h3>
                    <div className="space-y-1.5 pt-1">
                      {entry.notes.map((note) => (
                        <p key={note} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/40" />
                          {note}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
