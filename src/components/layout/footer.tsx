import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/40 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="font-display text-sm font-bold tracking-tight text-foreground">
              LLM Registry
            </p>
            <p className="text-xs text-muted-foreground">
              Source-of-truth benchmark data with provenance tracking.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-muted-foreground">
            <Link href="/about" className="transition-colors hover:text-foreground">
              Methodology
            </Link>
            <Link href="/api/v1" className="transition-colors hover:text-foreground">
              API
            </Link>
            <a
              href="https://github.com/yamanahlawat/llm-registry"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-border/30 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[10px] text-muted-foreground/60">
            Data sourced from official provider announcements and Artificial Analysis.
          </p>
          <p className="text-[10px] text-muted-foreground/60">
            © {new Date().getFullYear()} LLM Registry
          </p>
        </div>
      </div>
    </footer>
  );
}
