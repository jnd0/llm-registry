import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/40 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <p className="font-display text-sm font-bold text-foreground">LLM Registry</p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Independent source of truth for LLM benchmark scores with provenance tracking and normalized rankings.
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Leaderboards</p>
            <nav className="flex flex-col gap-1.5">
              <Link href="/" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Global Leaderboard</Link>
              <Link href="/compare" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Compare Models</Link>
              <Link href="/explore" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Explore (Price vs Performance)</Link>
              <Link href="/benchmarks" className="text-xs text-muted-foreground transition-colors hover:text-foreground">All Benchmarks</Link>
            </nav>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Resources</p>
            <nav className="flex flex-col gap-1.5">
              <Link href="/about" className="text-xs text-muted-foreground transition-colors hover:text-foreground">Methodology</Link>
              <Link href="/api-docs" className="text-xs text-muted-foreground transition-colors hover:text-foreground">API Documentation</Link>
              <a href="https://github.com/jnd0/llm-registry" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground">
                GitHub <ExternalLink className="h-2.5 w-2.5" />
              </a>
            </nav>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Data Sources</p>
            <nav className="flex flex-col gap-1.5">
              <a href="https://artificialanalysis.ai/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground">
                Artificial Analysis <ExternalLink className="h-2.5 w-2.5" />
              </a>
              <a href="https://models.dev" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground">
                Models.dev <ExternalLink className="h-2.5 w-2.5" />
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/40 pt-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} LLM Registry</p>
          <div className="flex items-center gap-4">
            <a href="mailto:admin@llm-registry.com" className="transition-colors hover:text-foreground">Report Inaccuracies</a>
            <a href="https://github.com/jnd0/llm-registry" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
              <Github className="h-3 w-3" />
              Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
