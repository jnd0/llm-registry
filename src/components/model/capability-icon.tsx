"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Brain,
  Eye,
  Wand2,
  Mic,
  FileText,
  Video,
  Code,
  Cpu,
  Database,
  Zap,
} from "lucide-react";

export type CapabilityType =
  | "reasoning"
  | "vision"
  | "tools"
  | "audio"
  | "text"
  | "video"
  | "code"
  | "json"
  | "attachment"
  | "temperature";

interface CapabilityIconProps {
  capability: CapabilityType;
  className?: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
  description?: string;
}

const capabilityConfig: Record<
  CapabilityType,
  { icon: any; label: string; description: string; color: string; bgColor: string }
> = {
  reasoning: {
    icon: Brain,
    label: "Reasoning",
    description: "Supports chain-of-thought reasoning and step-by-step problem solving",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  vision: {
    icon: Eye,
    label: "Vision",
    description: "Can analyze and understand images, charts, and diagrams",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  tools: {
    icon: Wand2,
    label: "Tools",
    description: "Supports function calling and external tool integration",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  audio: {
    icon: Mic,
    label: "Audio",
    description: "Can process and/or generate audio content",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
  text: {
    icon: FileText,
    label: "Text",
    description: "Standard text input/output capabilities",
    color: "text-slate-600",
    bgColor: "bg-slate-100",
  },
  video: {
    icon: Video,
    label: "Video",
    description: "Can analyze and understand video content",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  code: {
    icon: Code,
    label: "Code",
    description: "Specialized in code generation and analysis",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  json: {
    icon: Database,
    label: "JSON Mode",
    description: "Supports structured JSON output for reliable parsing",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  attachment: {
    icon: Zap,
    label: "File Upload",
    description: "Can process uploaded files (PDF, documents, etc.)",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  temperature: {
    icon: Cpu,
    label: "Temperature",
    description: "Supports temperature control for output randomness",
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
  },
};

const sizeClasses = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};

export function CapabilityIcon({
  capability,
  className,
  showLabel = false,
  size = "md",
  description,
}: CapabilityIconProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const config = capabilityConfig[capability];
  const Icon = config.icon;
  const tooltipText = description || config.description;

  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-1.5 px-2 py-1 rounded-full cursor-help focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        config.bgColor,
        className
      )}
      title={tooltipText}
      tabIndex={0}
      role="button"
      aria-label={tooltipText}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      onClick={() => setShowTooltip(!showTooltip)}
      onTouchStart={(e) => {
        e.preventDefault();
        setShowTooltip(!showTooltip);
      }}
    >
      <Icon className={cn(sizeClasses[size], config.color)} />
      {showLabel && (
        <span className={cn("text-xs font-medium", config.color)}>
          {config.label}
        </span>
      )}
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-50 min-w-max animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="whitespace-nowrap rounded-md bg-popover px-3 py-2 text-xs font-medium text-popover-foreground shadow-lg border border-border">
            {tooltipText}
            {/* Arrow */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-popover border-l border-t border-border rotate-45" />
          </div>
        </div>
      )}
    </div>
  );
}

interface CapabilityBadgesProps {
  apiSupport?: {
    reasoning?: boolean;
    vision?: boolean;
    tools?: boolean;
    structuredOutput?: boolean;
    attachment?: boolean;
    temperature?: boolean;
    toolCall?: boolean;
    jsonMode?: boolean;
  };
  modalities?: {
    input?: string[];
    output?: string[];
  };
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function CapabilityBadges({
  apiSupport,
  modalities,
  className,
  size = "sm",
}: CapabilityBadgesProps) {
  const capabilities: CapabilityType[] = [];

  // Add API support capabilities
  if (apiSupport?.reasoning) capabilities.push("reasoning");
  if (apiSupport?.tools || apiSupport?.toolCall) capabilities.push("tools");
  if (apiSupport?.vision) capabilities.push("vision");
  if (apiSupport?.jsonMode || apiSupport?.structuredOutput) capabilities.push("json");
  if (apiSupport?.attachment) capabilities.push("attachment");
  if (apiSupport?.temperature) capabilities.push("temperature");

  // Add modality capabilities
  if (modalities?.input?.includes("image") || modalities?.output?.includes("image")) {
    if (!capabilities.includes("vision")) capabilities.push("vision");
  }
  if (modalities?.input?.includes("audio") || modalities?.output?.includes("audio")) {
    capabilities.push("audio");
  }
  if (modalities?.input?.includes("video") || modalities?.output?.includes("video")) {
    capabilities.push("video");
  }

  if (capabilities.length === 0) return null;

  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {capabilities.map((cap) => (
        <CapabilityIcon
          key={cap}
          capability={cap}
          size={size}
        />
      ))}
    </div>
  );
}
