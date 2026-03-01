"use client";

import { useState, useMemo } from "react";
import { Model } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/stats";
import { cn } from "@/lib/utils";
import { Calculator, Zap, Brain, Mic, HardDrive, DollarSign } from "lucide-react";

interface PricingCalculatorProps {
  models: Model[];
}

interface TokenEstimate {
  input: number;
  output: number;
  cacheRead?: number;
  cacheOutput?: number;
  reasoning?: number;
  inputAudio?: number;
  outputAudio?: number;
}

export function PricingCalculator({ models }: PricingCalculatorProps) {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [tokens, setTokens] = useState<TokenEstimate>({
    input: 1000,
    output: 500,
    cacheRead: 0,
    cacheOutput: 0,
    reasoning: 0,
    inputAudio: 0,
    outputAudio: 0,
  });
  const [useCache, setUseCache] = useState(false);
  const [useReasoning, setUseReasoning] = useState(false);
  const [useAudio, setUseAudio] = useState(false);

  const modelOptions = useMemo(() => {
    return models
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 50);
  }, [models]);

  const calculateCost = (model: Model): { total: number; breakdown: Record<string, number> } => {
    const breakdown: Record<string, number> = {};
    let total = 0;

    // Base input cost
    const inputCost = (tokens.input / 1_000_000) * model.specs.pricing.input;
    breakdown.input = inputCost;
    total += inputCost;

    // Base output cost
    const outputCost = (tokens.output / 1_000_000) * model.specs.pricing.output;
    breakdown.output = outputCost;
    total += outputCost;

    // Cache costs
    if (useCache && (model.specs.pricing.cacheInput || model.specs.pricing.cacheOutput)) {
      if (tokens.cacheRead && model.specs.pricing.cacheInput) {
        const cacheReadCost = (tokens.cacheRead / 1_000_000) * model.specs.pricing.cacheInput;
        breakdown.cacheRead = cacheReadCost;
        total += cacheReadCost;
      }
      if (tokens.cacheOutput && model.specs.pricing.cacheOutput) {
        const cacheWriteCost = (tokens.cacheOutput / 1_000_000) * model.specs.pricing.cacheOutput;
        breakdown.cacheOutput = cacheWriteCost;
        total += cacheWriteCost;
      }
    }

    // Reasoning costs
    if (useReasoning && tokens.reasoning && model.specs.pricing.reasoning) {
      const reasoningCost = (tokens.reasoning / 1_000_000) * model.specs.pricing.reasoning;
      breakdown.reasoning = reasoningCost;
      total += reasoningCost;
    }

    // Audio costs
    if (useAudio) {
      if (tokens.inputAudio && model.specs.pricing.inputAudio) {
        const inputAudioCost = (tokens.inputAudio / 1_000_000) * model.specs.pricing.inputAudio;
        breakdown.inputAudio = inputAudioCost;
        total += inputAudioCost;
      }
      if (tokens.outputAudio && model.specs.pricing.outputAudio) {
        const outputAudioCost = (tokens.outputAudio / 1_000_000) * model.specs.pricing.outputAudio;
        breakdown.outputAudio = outputAudioCost;
        total += outputAudioCost;
      }
    }

    // Context surcharge for >200k
    if (model.specs.contextWindow > 200_000 && model.specs.pricing.contextOver200k) {
      const surchargeMultiplier = (model.specs.pricing.contextOver200k.input + model.specs.pricing.contextOver200k.output) / 2;
      if (surchargeMultiplier > 1) {
        breakdown.surcharge = total * (surchargeMultiplier - 1);
        total = total * surchargeMultiplier;
      }
    }

    return { total, breakdown };
  };

  const selectedModelData = useMemo(() => {
    return models.filter((m) => selectedModels.includes(m.id));
  }, [selectedModels, models]);

  const modelCosts = useMemo(() => {
    return selectedModelData.map((model) => ({
      model,
      ...calculateCost(model),
    }));
  }, [selectedModelData, tokens, useCache, useReasoning, useAudio]);

  const cheapestModel = useMemo(() => {
    if (modelCosts.length === 0) return null;
    return modelCosts.reduce((min, curr) => (curr.total < min.total ? curr : min));
  }, [modelCosts]);

  const formatTokenCount = (count: number): string => {
    if (count >= 1_000_000) {
      return `${(count / 1_000_000).toFixed(1)}M`;
    }
    if (count >= 1_000) {
      return `${(count / 1_000).toFixed(0)}k`;
    }
    return count.toString();
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          Pricing Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Token Estimation */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold">Token Estimates (per month)</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="input-tokens">Input Tokens</Label>
              <div className="relative">
                <Input
                  id="input-tokens"
                  type="number"
                  value={tokens.input}
                  onChange={(e) => setTokens({ ...tokens, input: Number(e.target.value) })}
                  className="pr-8"
                />
                <Zap className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="output-tokens">Output Tokens</Label>
              <div className="relative">
                <Input
                  id="output-tokens"
                  type="number"
                  value={tokens.output}
                  onChange={(e) => setTokens({ ...tokens, output: Number(e.target.value) })}
                  className="pr-8"
                />
                <Zap className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            {useCache && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="cache-read">Cache Read</Label>
                  <div className="relative">
                    <Input
                      id="cache-read"
                      type="number"
                      value={tokens.cacheRead}
                      onChange={(e) => setTokens({ ...tokens, cacheRead: Number(e.target.value) })}
                      className="pr-8"
                    />
                    <HardDrive className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cache-write">Cache Write</Label>
                  <div className="relative">
                    <Input
                      id="cache-write"
                      type="number"
                      value={tokens.cacheOutput}
                      onChange={(e) => setTokens({ ...tokens, cacheOutput: Number(e.target.value) })}
                      className="pr-8"
                    />
                    <HardDrive className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </>
            )}

            {useReasoning && (
              <div className="space-y-2">
                <Label htmlFor="reasoning-tokens">Reasoning Tokens</Label>
                <div className="relative">
                  <Input
                    id="reasoning-tokens"
                    type="number"
                    value={tokens.reasoning}
                    onChange={(e) => setTokens({ ...tokens, reasoning: Number(e.target.value) })}
                    className="pr-8"
                  />
                  <Brain className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            )}

            {useAudio && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="input-audio">Audio Input</Label>
                  <div className="relative">
                    <Input
                      id="input-audio"
                      type="number"
                      value={tokens.inputAudio}
                      onChange={(e) => setTokens({ ...tokens, inputAudio: Number(e.target.value) })}
                      className="pr-8"
                    />
                    <Mic className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="output-audio">Audio Output</Label>
                  <div className="relative">
                    <Input
                      id="output-audio"
                      type="number"
                      value={tokens.outputAudio}
                      onChange={(e) => setTokens({ ...tokens, outputAudio: Number(e.target.value) })}
                      className="pr-8"
                    />
                    <Mic className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Advanced Options */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Switch
              id="use-cache"
              checked={useCache}
              onCheckedChange={setUseCache}
            />
            <Label htmlFor="use-cache" className="flex items-center gap-1">
              <HardDrive className="w-4 h-4" />
              Use Caching
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Switch
              id="use-reasoning"
              checked={useReasoning}
              onCheckedChange={setUseReasoning}
            />
            <Label htmlFor="use-reasoning" className="flex items-center gap-1">
              <Brain className="w-4 h-4" />
              Reasoning Model
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Switch
              id="use-audio"
              checked={useAudio}
              onCheckedChange={setUseAudio}
            />
            <Label htmlFor="use-audio" className="flex items-center gap-1">
              <Mic className="w-4 h-4" />
              Audio Support
            </Label>
          </div>
        </div>

        {/* Model Selection */}
        <div className="space-y-2">
          <Label>Compare Models (up to 5)</Label>
          <Select
            value={selectedModels[0] || ""}
            onValueChange={(value) => {
              if (!selectedModels.includes(value)) {
                setSelectedModels([...selectedModels.slice(0, 4), value]);
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a model to compare" />
            </SelectTrigger>
            <SelectContent>
              {modelOptions.map((model) => (
                <SelectItem key={model.id} value={model.id}>
                  {model.name} - {formatCurrency(model.specs.pricing.input)}/{formatCurrency(model.specs.pricing.output)} per 1M
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedModels.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedModels.map((modelId) => {
                const model = models.find((m) => m.id === modelId);
                if (!model) return null;
                return (
                  <Badge
                    key={modelId}
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={() => setSelectedModels(selectedModels.filter((id) => id !== modelId))}
                  >
                    {model.name} ×
                  </Badge>
                );
              })}
            </div>
          )}
        </div>

        {/* Cost Comparison */}
        {modelCosts.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-sm font-semibold flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Monthly Cost Comparison
            </h4>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {modelCosts.map(({ model, total, breakdown }) => {
                const isCheapest = cheapestModel?.model.id === model.id && modelCosts.length > 1;
                return (
                  <Card
                    key={model.id}
                    className={cn(
                      "relative overflow-hidden",
                      isCheapest && "border-green-500 bg-green-50 dark:bg-green-950/20"
                    )}
                  >
                    {isCheapest && (
                      <Badge className="absolute top-2 right-2 bg-green-500">
                        Cheapest
                      </Badge>
                    )}
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">{model.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-3xl font-bold">
                        {formatCurrency(total)}
                        <span className="text-sm font-normal text-muted-foreground">/mo</span>
                      </div>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        {breakdown.input > 0 && (
                          <div className="flex justify-between">
                            <span>Input:</span>
                            <span>{formatCurrency(breakdown.input)}</span>
                          </div>
                        )}
                        {breakdown.output > 0 && (
                          <div className="flex justify-between">
                            <span>Output:</span>
                            <span>{formatCurrency(breakdown.output)}</span>
                          </div>
                        )}
                        {breakdown.cacheRead && (
                          <div className="flex justify-between">
                            <span>Cache Read:</span>
                            <span>{formatCurrency(breakdown.cacheRead)}</span>
                          </div>
                        )}
                        {breakdown.cacheOutput && (
                          <div className="flex justify-between">
                            <span>Cache Write:</span>
                            <span>{formatCurrency(breakdown.cacheOutput)}</span>
                          </div>
                        )}
                        {breakdown.reasoning && (
                          <div className="flex justify-between">
                            <span>Reasoning:</span>
                            <span>{formatCurrency(breakdown.reasoning)}</span>
                          </div>
                        )}
                        {breakdown.inputAudio && (
                          <div className="flex justify-between">
                            <span>Audio Input:</span>
                            <span>{formatCurrency(breakdown.inputAudio)}</span>
                          </div>
                        )}
                        {breakdown.outputAudio && (
                          <div className="flex justify-between">
                            <span>Audio Output:</span>
                            <span>{formatCurrency(breakdown.outputAudio)}</span>
                          </div>
                        )}
                        {breakdown.surcharge && (
                          <div className="flex justify-between text-amber-600">
                            <span>Context Surcharge:</span>
                            <span>{formatCurrency(breakdown.surcharge)}</span>
                          </div>
                        )}
                      </div>
                      <div className="pt-2 border-t text-xs">
                        <div className="flex justify-between">
                          <span>Context:</span>
                          <span>{formatTokenCount(model.specs.contextWindow)}</span>
                        </div>
                        {model.specs.maxOutputTokens && (
                          <div className="flex justify-between">
                            <span>Max Output:</span>
                            <span>{formatTokenCount(model.specs.maxOutputTokens)}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
