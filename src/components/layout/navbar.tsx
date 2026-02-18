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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between gap-3 px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm group-hover:shadow-primary/20 transition-all">
              <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              Registry
            </span>
          </Link>

          <nav className="hidden md:flex md:items-center md:gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest transition-colors",
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

        <div className="flex items-center gap-3">
          <label className="relative hidden items-center lg:flex">
            <Search className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-muted-foreground/40" aria-hidden="true" />
            <input
              type="search"
              aria-label="Search models"
              placeholder="Search registry..."
              className="h-8 w-48 rounded-full border border-border/60 bg-muted/20 pl-9 text-xs text-muted-foreground focus:w-64 focus:bg-background focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </label>

          <div className="flex items-center gap-1.5 border-l border-border/40 pl-3">
            <ThemeToggle />
            <Link
              href="https://github.com/jnd0/llm-registry"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 md:hidden"
              >
                <Menu className="h-4 w-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[200px] rounded-xl border-border bg-card p-1.5 shadow-xl md:hidden">
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
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
