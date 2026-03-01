"use client";

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
}

const capabilityConfig: Record<
  CapabilityType,
  { icon: any; label: string; color: string; bgColor: string }
> = {
  reasoning: {
    icon: Brain,
    label: "Reasoning",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  vision: {
    icon: Eye,
    label: "Vision",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  tools: {
    icon: Wand2,
    label: "Tools",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  audio: {
    icon: Mic,
    label: "Audio",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
  text: {
    icon: FileText,
    label: "Text",
    color: "text-slate-600",
    bgColor: "bg-slate-100",
  },
  video: {
    icon: Video,
    label: "Video",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  code: {
    icon: Code,
    label: "Code",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  json: {
    icon: Database,
    label: "JSON Mode",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  attachment: {
    icon: Zap,
    label: "File Upload",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  temperature: {
    icon: Cpu,
    label: "Temperature",
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
}: CapabilityIconProps) {
  const config = capabilityConfig[capability];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-1 rounded-full",
        config.bgColor,
        className
      )}
      title={config.label}
    >
      <Icon className={cn(sizeClasses[size], config.color)} />
      {showLabel && (
        <span className={cn("text-xs font-medium", config.color)}>
          {config.label}
        </span>
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
  if (apiSupport?.jsonMode || apiSupport?.structuredOutput)
    capabilities.push("json");
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
