import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/40 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} LLM Registry</p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="transition-colors hover:text-foreground">Methodology</Link>
            <Link href="/api/v1" className="transition-colors hover:text-foreground">API</Link>
            <a href="https://github.com/yamanahlawat/llm-registry" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
              <Github className="h-3 w-3" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
