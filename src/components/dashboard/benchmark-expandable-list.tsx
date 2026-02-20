"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Benchmark } from "@/types";
import { cn } from "@/lib/utils";

interface BenchmarkExpandableListProps {
  benchmarks: Benchmark[];
}

export function BenchmarkExpandableList({ benchmarks }: BenchmarkExpandableListProps) {
  const [expanded, setExpanded] = useState(false);
  const limit = 10;
  const hasMore = benchmarks.length > limit;
  
  const initialBenchmarks = benchmarks.slice(0, limit);
  const additionalBenchmarks = benchmarks.slice(limit);
  
  return (
    <div className="space-y-2">
      {initialBenchmarks.map((benchmark) => (
        <Link
          key={benchmark.id}
          href={`/benchmark/${benchmark.id}`}
          className="block text-sm font-medium text-foreground hover:text-primary transition-colors truncate"
        >
          {benchmark.name}
        </Link>
      ))}
      
      {expanded && additionalBenchmarks.map((benchmark, index) => (
        <Link
          key={benchmark.id}
          href={`/benchmark/${benchmark.id}`}
          className={cn(
            "block text-sm font-medium text-foreground hover:text-primary transition-colors truncate",
            "animate-in fade-in slide-in-from-top-2 duration-300 ease-out"
          )}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {benchmark.name}
        </Link>
      ))}
      
      {hasMore && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="w-full mt-2 text-xs text-muted-foreground hover:text-primary transition-all"
        >
          {expanded ? (
            <>
              Show less <ChevronUp className="h-3 w-3 ml-1" />
            </>
          ) : (
            <>
              +{benchmarks.length - limit} more benchmarks <ChevronDown className="h-3 w-3 ml-1" />
            </>
          )}
        </Button>
      )}
    </div>
  );
}
