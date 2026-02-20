"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { Layers, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ModelFamilyCompareProps {
  currentModelId: string;
  family: {
    id: string;
    name: string;
  }[];
}

export function ModelFamilyCompare({ currentModelId, family }: ModelFamilyCompareProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([currentModelId]);

  const toggleModel = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : prev.length < 3
        ? [...prev, id]
        : prev
    );
  };

  const compareUrl = `/compare?models=${selectedIds.join(",")}`;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-9 rounded-full border-primary/20 bg-primary/5 px-4 text-[11px] font-bold uppercase tracking-wider text-primary hover:bg-primary/10 transition-all">
          <Layers className="mr-2 h-3.5 w-3.5" />
          Compare Family
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[280px] rounded-2xl border-border bg-card p-4 shadow-2xl">
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="font-display text-sm font-bold text-foreground">Select to Compare</h3>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">Max 3 models</p>
          </div>
          
          <div className="space-y-2">
            {family.map((model) => (
              <div
                key={model.id}
                className={cn(
                  "flex items-center space-x-3 rounded-xl border border-transparent p-2 transition-all cursor-pointer hover:bg-muted/30",
                  selectedIds.includes(model.id) && "border-primary/20 bg-primary/5"
                )}
                onClick={() => toggleModel(model.id)}
              >
                <Checkbox
                  id={`model-${model.id}`}
                  checked={selectedIds.includes(model.id)}
                  onCheckedChange={() => toggleModel(model.id)}
                  className="rounded-full border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                />
                <label
                  htmlFor={`model-${model.id}`}
                  className="flex-1 cursor-pointer text-xs font-bold tracking-tight text-foreground"
                >
                  {model.name}
                  {model.id === currentModelId && (
                    <span className="ml-2 text-[9px] uppercase tracking-widest text-primary/60">(Current)</span>
                  )}
                </label>
              </div>
            ))}
          </div>

          <Button
            asChild
            disabled={selectedIds.length < 2}
            className="w-full h-9 rounded-xl text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-primary/20"
          >
            <Link href={compareUrl}>
              Compare {selectedIds.length} Models
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
