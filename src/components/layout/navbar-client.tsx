"use client";

import Link from "next/link";
import { Terminal, Github, Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Benchmark, Model } from "@/types";
import { domainDefinitions, domainToSlug } from "@/lib/domains";

const ThemeToggle = dynamic(
  () => import("@/components/layout/theme-toggle").then((mod) => mod.ThemeToggle),
  {
    ssr: false,
    loading: () => <div className="h-10 w-10 rounded-xl border border-border bg-card" aria-hidden="true" />,
  }
);

const CommandPalette = dynamic(
  () => import("@/components/layout/command-palette").then((mod) => mod.CommandPalette),
  { ssr: false }
);

interface NavbarClientProps {
  models: Model[];
  benchmarks: Benchmark[];
}

export function NavbarClient({ models, benchmarks }: NavbarClientProps) {
  const pathname = usePathname();
  const [commandOpen, setCommandOpen] = useState(false);
  const navItems = [
    { href: "/", label: "Leaderboard" },
    { href: "/benchmarks", label: "Benchmarks" },
    { href: "/explore", label: "Explore" },
    { href: "/compare", label: "Compare" },
    { href: "/api-docs", label: "API" },
    { href: "/about", label: "Methodology" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname.startsWith("/leaderboard/");
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} models={models} benchmarks={benchmarks} />
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-14 items-center justify-between gap-3 px-4">
          <div className="flex items-center gap-4 lg:gap-8">
            <Link href="/" className="group flex items-center gap-2.5 shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm group-hover:shadow-primary/20 transition-all">
                <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                Registry
              </span>
            </Link>

            <nav className="hidden lg:flex lg:items-center lg:gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-[10px] xl:text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap",
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => setCommandOpen(true)}
              className="hidden sm:flex items-center gap-2 rounded-full border border-border/60 bg-muted/20 px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted/40 hover:text-foreground transition-colors shrink-0"
            >
              <Search className="h-3.5 w-3.5 shrink-0" />
              <span className="hidden md:inline">Search…</span>
              <kbd className="pointer-events-none ml-2 hidden md:inline-flex rounded border border-border/60 bg-muted px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
            </button>

            <div className="flex items-center gap-1.5 border-l border-border/40 pl-2 sm:pl-3 shrink-0">
              <ThemeToggle />
              <Link
                href="https://github.com/jnd0/llm-registry"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors shrink-0"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 lg:hidden shrink-0"
                >
                  <Menu className="h-4 w-4" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[220px] rounded-xl border-border bg-card p-1.5 shadow-xl lg:hidden">
                {navItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-lg py-2 text-xs font-bold uppercase tracking-widest",
                        isActive(item.href) ? "bg-primary/5 text-primary" : "text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className="my-1 bg-border/60" />
                <DropdownMenuLabel className="px-2 py-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Domains
                </DropdownMenuLabel>
                {domainDefinitions.map((domain) => (
                  <DropdownMenuItem key={domain.id} asChild>
                    <Link
                      href={`/domain/${domainToSlug(domain.id)}`}
                      className="rounded-lg py-2 text-xs text-foreground"
                    >
                      {domain.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
}
