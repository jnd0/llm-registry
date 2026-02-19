import Link from "next/link";
import type { Model } from "@/types";

interface HighlightItem {
    label: string;
    model?: Model | null;
    customText?: string;
    value: number | null;
    format?: "points" | "ratio" | string;
}

interface TopPerformerCardProps {
    item: HighlightItem;
}

export function TopPerformerCard({ item }: TopPerformerCardProps) {
    if (!item.model) {
        return (
            <div className="relative overflow-hidden rounded-xl border border-border/50 bg-muted/30 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80">{item.label}</p>
                <p className="mt-2 truncate text-xl font-bold tracking-tight text-foreground">{item.customText ?? "TBD"}</p>
                <div className="mt-3 flex items-center justify-between">
                    <p className="font-mono text-sm font-bold text-primary">
                        {item.value === null
                            ? "--"
                            : item.format === "ratio"
                                ? `${item.value.toFixed(1)}x`
                                : `${item.value.toFixed(1)} pts`}
                    </p>
                    <div className="h-1 w-12 rounded-full bg-muted-foreground/20 overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: '70%' }} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Link
            href={`/model/${item.model.id}`}
            className="group relative overflow-hidden rounded-xl border border-border/50 bg-muted/30 p-4 transition-all hover:-translate-y-1 hover:border-primary/30 hover:bg-muted/50 hover:shadow-lg hover:shadow-primary/5"
        >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80">{item.label}</p>
            <p className="mt-2 truncate text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">{item.model.name}</p>
            <div className="mt-3 flex items-center justify-between">
                <p className="font-mono text-sm font-bold text-primary">
                    {item.value === null
                        ? "--"
                        : item.format === "ratio"
                            ? `${item.value.toFixed(1)}x`
                            : `${item.value.toFixed(1)} pts`}
                </p>
                <div className="h-1 w-12 rounded-full bg-muted-foreground/20 overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '70%' }} />
                </div>
            </div>
        </Link>
    );
}
