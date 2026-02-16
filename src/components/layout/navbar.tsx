import Link from "next/link";
import { Terminal, Github } from "lucide-react";
import { changelog } from "@/data/changelog";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Navbar() {
  const latest = changelog[0];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/90 backdrop-blur-md h-16">
      <div className="container flex h-full items-center justify-between">
        <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3 group transition-colors">
                <div className="flex items-center justify-center w-9 h-9 bg-primary/10 border border-primary/20 rounded-lg group-hover:bg-primary/20 transition-all shadow-[0_0_10px_-5px_var(--color-primary)]">
                    <Terminal className="h-4 w-4 text-primary" />
                </div>
                <div className="flex flex-col">
                    <span className="font-display font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors leading-none">
                    LLM_REGISTRY
                    </span>
                </div>
            </Link>

            <nav className="hidden md:flex items-center gap-2">
                <Link
                    href="/"
                    className="px-4 py-2 text-foreground font-medium text-sm transition-all rounded-md bg-white/5 hover:bg-white/10"
                >
                    Leaderboard
                </Link>
                <Link
                    href="/compare"
                    className="px-4 py-2 text-muted-foreground hover:text-foreground font-medium text-sm transition-all rounded-md hover:bg-white/5"
                >
                    Compare
                </Link>
                <Link
                    href="/about"
                    className="px-4 py-2 text-muted-foreground hover:text-foreground font-medium text-sm transition-all rounded-md hover:bg-white/5"
                >
                    Methodology
                </Link>
            </nav>
        </div>

        <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-secondary/30 rounded-full border border-white/5 mr-4">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    v{latest?.version ?? "1.0.0"} | {latest?.date ?? "stable"}
                </span>
            </div>
            
            <div className="h-6 w-px bg-white/10 hidden md:block" />

            <ThemeToggle />

            <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-white/5 rounded-md"
            >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
            </Link>
        </div>
      </div>
    </header>
  );
}
