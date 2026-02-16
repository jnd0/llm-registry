import { models } from "@/data/models";
import { benchmarks } from "@/data/benchmarks";
import { sources } from "@/data/sources";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/stats";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Cpu, ShieldCheck, AlertTriangle, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const sourceMap = new Map(sources.map((source) => [source.id, source]));

function getHostLabel(url?: string) {
  if (!url) return "Unknown source";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "Unknown source";
  }
}

function getVerificationLabel(level?: string, verified?: boolean) {
  if (level === "third_party") return "Third-party";
  if (level === "provider") return "Provider";
  if (level === "community") return "Community";
  if (level === "estimated") return "Estimated";
  return verified ? "Verified" : "Unverified";
}

interface PageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return models.map((model) => ({
    id: model.id,
  }));
}

export default async function ModelPage({ params }: PageProps) {
  const { id } = await params;
  const model = models.find((m) => m.id === id);

  if (!model) return notFound();

  const scoreEntries = Object.values(model.scores);
  const providerSourceId = scoreEntries.find((entry) => entry.sourceId)?.sourceId;
  const providerSource = providerSourceId ? sourceMap.get(providerSourceId) : undefined;
  const providerUrl = providerSource?.url;
  const latestAsOf = scoreEntries
    .map((entry) => entry.asOfDate)
    .filter((date): date is string => Boolean(date))
    .sort()
    .at(-1);

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      {/* Breadcrumb / Back Link */}
      <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors group uppercase tracking-widest pl-1">
        <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" /> 
        System_Index
      </Link>

      {/* Hero Header */}
      <div className="relative border-b border-border/50 pb-12 overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
        
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between relative z-10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex flex-wrap items-center gap-4 mb-2">
               <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary font-mono text-[10px] px-2.5 py-1 uppercase tracking-[0.2em] rounded-md backdrop-blur-sm">
                  {model.provider}
               </Badge>
               {model.isOpenSource && (
                  <Badge variant="outline" className="border-emerald-500/20 bg-emerald-500/5 text-emerald-500 font-mono text-[10px] px-2.5 py-1 uppercase tracking-[0.2em] rounded-md backdrop-blur-sm">
                      Open Weights
                  </Badge>
               )}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground to-muted-foreground leading-[0.9]">
              {model.name}
            </h1>
            
            <p className="text-muted-foreground font-mono text-sm tracking-wide border-l-2 border-primary/30 pl-4 py-1 max-w-lg leading-relaxed">
              Released: <span className="text-foreground font-bold">{model.releaseDate}</span> | 
              Architecture: <span className="text-foreground font-bold">{model.specs.parameters}</span>
            </p>
          </div>
          
          <div className="flex flex-col gap-3 min-w-[220px]">
            {providerUrl && (
              <Button asChild variant="outline" className="border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/50 font-mono text-xs uppercase tracking-wider h-12 px-6 rounded-md transition-all shadow-[0_0_15px_-5px_var(--color-primary)]">
                <a href={providerUrl} target="_blank" rel="noreferrer">
                  Provider Source <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            )}
            <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground font-mono text-xs uppercase tracking-wider h-12 px-6 rounded-md transition-colors">
              <Link href="/about">Methodology</Link>
            </Button>
            <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/80 text-right">
              Latest score update: {latestAsOf ?? "Unknown"}
            </p>
          </div>
        </div>
      </div>

      {/* Technical Specifications Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Spec Card 1: Context */}
        <Card className="bg-card/40 border-border/50 backdrop-blur-sm hover:bg-card/60 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                <Layers className="w-12 h-12 rotate-12 transform scale-125" />
            </div>
            <CardHeader className="pb-2 relative z-10">
                <CardTitle className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Context_Window</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
                <div className="text-4xl font-display font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                    {(model.specs.contextWindow / 1000).toFixed(0)}k
                </div>
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider mt-2 opacity-70">Tokens</p>
            </CardContent>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </Card>
        
        {/* Spec Card 2: Input Cost */}
        <Card className="bg-card/40 border-border/50 backdrop-blur-sm hover:bg-card/60 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors duration-500">
                <span className="font-display font-bold text-5xl">$</span>
            </div>
            <CardHeader className="pb-2 relative z-10">
                <CardTitle className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Input_Cost</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
                <div className="text-4xl font-display font-bold text-foreground group-hover:text-emerald-400 transition-colors tracking-tight">
                    {formatCurrency(model.specs.pricing.input)}
                </div>
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider mt-2 opacity-70">/ 1M Tokens</p>
            </CardContent>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </Card>

        {/* Spec Card 3: Output Cost */}
        <Card className="bg-card/40 border-border/50 backdrop-blur-sm hover:bg-card/60 transition-colors group relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors duration-500">
                <span className="font-display font-bold text-5xl">$</span>
            </div>
            <CardHeader className="pb-2 relative z-10">
                <CardTitle className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Output_Cost</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
                <div className="text-4xl font-display font-bold text-foreground group-hover:text-emerald-400 transition-colors tracking-tight">
                    {formatCurrency(model.specs.pricing.output)}
                </div>
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider mt-2 opacity-70">/ 1M Tokens</p>
            </CardContent>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </Card>

        {/* Spec Card 4: Params */}
        <Card className="bg-card/40 border-border/50 backdrop-blur-sm hover:bg-card/60 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 text-purple-500/10 group-hover:text-purple-500/20 transition-colors duration-500">
                <Cpu className="w-12 h-12 -rotate-12 transform scale-125" />
            </div>
            <CardHeader className="pb-2 relative z-10">
                <CardTitle className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Parameters</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
                <div className="text-3xl font-display font-bold text-foreground group-hover:text-purple-400 transition-colors tracking-tight leading-9 pt-1">
                    {model.specs.parameters}
                </div>
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider mt-2 opacity-70">Model Size</p>
            </CardContent>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </Card>
      </div>

      {/* Benchmark Analysis Section */}
      <div className="space-y-8 pt-8">
        <div className="flex items-center gap-4 border-b border-border/30 pb-4">
            <div className="p-2 bg-primary/10 rounded-md">
                <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
                <h2 className="text-2xl font-display font-bold tracking-tight text-foreground">Diagnostic Report</h2>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mt-1">
                    Performance Analysis // Verified Benchmarks
                </p>
            </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {benchmarks.map((benchmark) => {
                const scoreData = model.scores[benchmark.id];
                if (!scoreData || scoreData.score === null) return null;

                // Color coding logic
                const isHigh = scoreData.score >= 90;
                const isMed = scoreData.score >= 80;

                const source = scoreData.sourceId ? sourceMap.get(scoreData.sourceId) : undefined;
                const sourceUrl = scoreData.sourceUrl ?? source?.url ?? benchmark.link;
                const sourceLabel = source?.name ?? getHostLabel(sourceUrl);
                const verificationLabel = getVerificationLabel(scoreData.verificationLevel, scoreData.verified);
                const isArtificialAnalysis = scoreData.sourceId === "artificial-analysis";
                
                const scoreColor = isHigh ? "text-primary" : isMed ? "text-emerald-400" : "text-amber-400";
                const ringColor = isHigh ? "ring-primary/20" : isMed ? "ring-emerald-400/20" : "ring-amber-400/20";

                return (
                    <div key={benchmark.id} className="relative group bg-card/20 border border-white/5 hover:border-white/10 rounded-lg p-6 transition-all hover:bg-card/40 hover:-translate-y-1 duration-300">
                        {/* Top Label */}
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-xs font-bold font-mono uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors max-w-[70%]">
                                {benchmark.name}
                            </span>
                            <Badge variant="secondary" className="text-[9px] font-mono uppercase bg-white/5 text-muted-foreground border-white/5 px-1.5 py-0.5 rounded tracking-wider">
                                {benchmark.category}
                            </Badge>
                        </div>
                        
                        {/* Score Display */}
                        <div className="flex items-end gap-3 mb-6 relative">
                            <span className={`text-5xl font-display font-bold tracking-tighter ${scoreColor} drop-shadow-sm transition-all group-hover:scale-105 origin-left`}>
                                {scoreData.score}{isArtificialAnalysis ? "*" : ""}
                            </span>
                            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1.5 opacity-50">/ {benchmark.maxScore}</span>
                            
                            {/* Decorative Ring */}
                            <div className={`absolute -inset-4 rounded-full border-2 ${ringColor} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`} />
                        </div>
                        
                        {/* Verification Status */}
                        <div className="space-y-2 pt-4 border-t border-white/5">
                            {scoreData.verified ? (
                                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-emerald-500/90 font-bold">
                                    <ShieldCheck className="w-3 h-3" />
                                    <span>{verificationLabel}</span>
                                </div>
                            ) : (
                                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-amber-500/80 font-bold">
                                    <AlertTriangle className="w-3 h-3" />
                                    <span>{verificationLabel}</span>
                                </div>
                            )}
                            <div className="flex items-center justify-between gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                              <span>{scoreData.asOfDate ?? model.releaseDate}</span>
                              {sourceUrl ? (
                                <a href={sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
                                  {sourceLabel} <ExternalLink className="w-3 h-3" />
                                </a>
                              ) : (
                                <span>{sourceLabel}</span>
                              )}
                            </div>
                        </div>
                        
                        {/* Tooltip Description on Hover */}
                        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm p-6 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 rounded-lg border border-primary/20">
                            <p className="text-xs text-muted-foreground font-mono leading-relaxed max-w-[200px]">
                                {benchmark.description}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  );
}
