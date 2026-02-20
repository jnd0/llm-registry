"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import type { DataTableProps } from "@/components/dashboard/leaderboard/data-table";

const DataTable = dynamic(
  () => import("@/components/dashboard/leaderboard").then((mod) => mod.DataTable),
  {
    ssr: false,
  }
);

function LoadingShell() {
  return (
    <div className="space-y-4 rounded-xl border border-border/40 bg-card/30 p-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-8 w-64" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
      </div>
    </div>
  );
}

export function HomeLeaderboardLazy(props: DataTableProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (shouldRender) return;

    const timeoutId = window.setTimeout(() => {
      setShouldRender(true);
    }, 1500);

    const node = containerRef.current;
    if (!node) {
      return () => window.clearTimeout(timeoutId);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(node);
    return () => {
      window.clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [shouldRender]);

  return (
    <div ref={containerRef}>
      {shouldRender ? <DataTable {...props} /> : <LoadingShell />}
    </div>
  );
}
