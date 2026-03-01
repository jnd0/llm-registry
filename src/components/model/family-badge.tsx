"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface FamilyBadgeProps {
  family: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  showLink?: boolean;
}

// Predefined family colors for consistency
const familyColors: Record<string, { bg: string; text: string; border: string }> =
  {
    gpt: {
      bg: "bg-green-50",
      text: "text-green-700",
      border: "border-green-200",
    },
    claude: {
      bg: "bg-orange-50",
      text: "text-orange-700",
      border: "border-orange-200",
    },
    gemini: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
    },
    "gemini-pro": {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
    },
    "gemini-flash": {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
    },
    llama: {
      bg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-200",
    },
    qwen: {
      bg: "bg-indigo-50",
      text: "text-indigo-700",
      border: "border-indigo-200",
    },
    mistral: {
      bg: "bg-yellow-50",
      text: "text-yellow-700",
      border: "border-yellow-200",
    },
    phi: {
      bg: "bg-sky-50",
      text: "text-sky-700",
      border: "border-sky-200",
    },
    grok: {
      bg: "bg-slate-50",
      text: "text-slate-700",
      border: "border-slate-200",
    },
    command: {
      bg: "bg-cyan-50",
      text: "text-cyan-700",
      border: "border-cyan-200",
    },
    deepseek: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
    },
    kimi: {
      bg: "bg-rose-50",
      text: "text-rose-700",
      border: "border-rose-200",
    },
    glm: {
      bg: "bg-violet-50",
      text: "text-violet-700",
      border: "border-violet-200",
    },
    yi: {
      bg: "bg-teal-50",
      text: "text-teal-700",
      border: "border-teal-200",
    },
    mixtral: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-200",
    },
    gemma: {
      bg: "bg-red-50",
      text: "text-red-700",
      border: "border-red-200",
    },
    o1: {
      bg: "bg-green-50",
      text: "text-green-700",
      border: "border-green-200",
    },
    o3: {
      bg: "bg-green-50",
      text: "text-green-700",
      border: "border-green-200",
    },
  };

const sizeClasses = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-2.5 py-1",
  lg: "text-base px-3 py-1.5",
};

function getFamilyColor(family: string) {
  const normalizedFamily = family.toLowerCase();
  return (
    familyColors[normalizedFamily] || {
      bg: "bg-gray-50",
      text: "text-gray-700",
      border: "border-gray-200",
    }
  );
}

function formatFamilyName(family: string): string {
  // Convert hyphenated to title case
  return family
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function FamilyBadge({
  family,
  className,
  size = "md",
  showLink = false,
}: FamilyBadgeProps) {
  const colors = getFamilyColor(family);
  const formattedName = formatFamilyName(family);

  const badge = (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full border",
        colors.bg,
        colors.text,
        colors.border,
        sizeClasses[size],
        className
      )}
    >
      {formattedName}
    </span>
  );

  if (showLink) {
    return (
      <Link
        href={`/family/${family.toLowerCase()}`}
        className="transition-opacity hover:opacity-80"
      >
        {badge}
      </Link>
    );
  }

  return badge;
}

interface FamilyBadgesProps {
  families: string[];
  className?: string;
  size?: "sm" | "md" | "lg";
  showLink?: boolean;
}

export function FamilyBadges({
  families,
  className,
  size = "sm",
  showLink = false,
}: FamilyBadgesProps) {
  if (families.length === 0) return null;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {families.map((family) => (
        <FamilyBadge
          key={family}
          family={family}
          size={size}
          showLink={showLink}
        />
      ))}
    </div>
  );
}
