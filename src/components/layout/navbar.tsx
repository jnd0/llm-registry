"use client";

import Link from "next/link";
import { Terminal, Github, Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ThemeToggle = dynamic(
  () => import("@/components/layout/theme-toggle").then((mod) => mod.ThemeToggle),
  {
    ssr: false,
    loading: () => <div className="h-10 w-10 rounded-xl border border-border bg-card" aria-hidden="true" />,
  }
);

export function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Leaderboard" },
    { href: "/compare", label: "Compare" },
    { href: "/about", label: "Methodology" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname.startsWith("/leaderboard/");
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="container flex h-[72px] items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3 lg:gap-5">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_12px_24px_-18px_var(--color-primary)]">
              <Terminal className="h-4 w-4" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <span className="block truncate font-display text-[1.55rem] font-bold tracking-[-0.03em] text-foreground transition-colors group-hover:text-primary">
                LLM Registry
              </span>
              <span className="hidden text-[10px] font-mono uppercase tracking-[0.12em] text-muted-foreground md:block">
                Benchmark Source
              </span>
            </div>
          </Link>

          <nav className="hidden rounded-xl border border-border bg-muted/30 p-1 md:flex md:items-center md:gap-0.5 dark:bg-card/55">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors",
                  isActive(item.href)
                    ? "bg-card text-foreground shadow-sm"
                    : "hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <label className="relative hidden min-w-[240px] items-center lg:flex xl:min-w-[390px]">
            <Search className="pointer-events-none absolute left-3.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <input
              type="search"
              aria-label="Search models"
              placeholder="Search models, orgs..."
              className="h-10 w-full rounded-xl border border-border bg-card pl-10 pr-14 text-[15px] text-muted-foreground"
            />
            <span className="pointer-events-none absolute right-3 rounded-md border border-border bg-background px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              Ctrl K
            </span>
          </label>

          <Button asChild className="hidden h-10 rounded-xl bg-foreground px-4 text-sm font-semibold text-background hover:bg-foreground/90 sm:inline-flex">
            <Link href="/about">Sign In</Link>
          </Button>

          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          <Link
            href="https://github.com/jnd0/llm-registry"
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub repository"
            className="hidden h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:text-foreground xl:inline-flex"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-xl border-border bg-card md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-4 w-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[240px] rounded-xl border-border bg-card p-2 md:hidden">
              {navItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-md py-2 text-sm font-medium",
                      isActive(item.href) ? "bg-primary/10 text-primary" : "text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link href="/about" className="rounded-md py-2 text-sm font-medium">
                  Sign In
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="https://github.com/jnd0/llm-registry"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md py-2 text-sm font-medium"
                >
                  GitHub
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
