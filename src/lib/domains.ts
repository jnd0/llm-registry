import { benchmarks } from "@/data/benchmarks";
import { Benchmark, BenchmarkCategory } from "@/types";

export type CapabilityDomain =
  | "Intelligence"
  | "Knowledge & Communication"
  | "Coding"
  | "Math"
  | "Agents & Tools"
  | "Vision & Video"
  | "Long Context"
  | "Factuality";

export interface DomainDefinition {
  id: CapabilityDomain;
  label: CapabilityDomain;
  description: string;
  longDescription?: string;
  categories: BenchmarkCategory[];
  icon: string;
}

export const domainDefinitions: DomainDefinition[] = [
  {
    id: "Intelligence",
    label: "Intelligence",
    description: "Reasoning, scientific understanding, and complex problem-solving abilities",
    longDescription: "Measures advanced cognitive capabilities including logical reasoning, scientific knowledge, multi-step problem solving, and the ability to tackle novel challenges. Includes benchmarks for GPQA, ARC-AGI, and other frontier reasoning tasks.",
    categories: ["Reasoning", "Science", "STEM", "Advanced Tasks"],
    icon: "Brain",
  },
  {
    id: "Knowledge & Communication",
    label: "Knowledge & Communication",
    description: "World knowledge, multilingual capabilities, and real-world understanding",
    longDescription: "Evaluates breadth and depth of world knowledge, language understanding across multiple languages, and ability to communicate effectively. Covers MMLU, HellaSwag, WMT translations, and real-world task performance.",
    categories: ["Knowledge", "Multilingual", "Real-world"],
    icon: "Globe",
  },
  {
    id: "Coding",
    label: "Coding",
    description: "Code generation, software engineering, and programming tasks",
    longDescription: "Tests programming proficiency across multiple languages, software engineering tasks, debugging capabilities, and real-world coding scenarios. Includes HumanEval, MBPP, SWE-bench, and competitive programming benchmarks.",
    categories: ["Coding"],
    icon: "Code",
  },
  {
    id: "Math",
    label: "Math",
    description: "Mathematical reasoning, competition math, and quantitative problem-solving",
    longDescription: "Assesses mathematical capabilities from basic arithmetic to competition-level problems. Covers GSM8K, MATH, AIME, and specialized mathematical reasoning benchmarks.",
    categories: ["Math"],
    icon: "Calculator",
  },
  {
    id: "Agents & Tools",
    label: "Agents & Tools",
    description: "Tool use, agentic workflows, and instruction following",
    longDescription: "Measures ability to use external tools, follow complex instructions, operate autonomously in multi-step workflows, and function as effective AI agents. Includes BFCL, API-based tasks, and instruction following benchmarks.",
    categories: ["Agent", "Agentic", "Instruction Following"],
    icon: "Bot",
  },
  {
    id: "Vision & Video",
    label: "Vision & Video",
    description: "Image understanding, video analysis, and multimodal capabilities",
    longDescription: "Evaluates visual understanding including image classification, object detection, video comprehension, and multimodal reasoning. Covers MMMU, VQA, video understanding, and cross-modal tasks.",
    categories: ["Vision", "Video", "Multimodal"],
    icon: "Eye",
  },
  {
    id: "Long Context",
    label: "Long Context",
    description: "Performance on extended documents and long-context reasoning",
    longDescription: "Tests ability to process, understand, and reason over very long inputs. Includes needle-in-haystack tests, long-document QA, and benchmarks measuring performance degradation with context length.",
    categories: ["Long Context"],
    icon: "Scroll",
  },
  {
    id: "Factuality",
    label: "Factuality",
    description: "Accuracy, hallucination resistance, and factual reliability",
    longDescription: "Measures tendency to produce factually accurate outputs, resistance to hallucinations, and ability to acknowledge uncertainty. Includes TruthfulQA, FACTSCORE, and other factuality benchmarks.",
    categories: ["Hallucination"],
    icon: "CheckCircle",
  },
];

export const domainCategories: Record<CapabilityDomain, BenchmarkCategory[]> = 
  domainDefinitions.reduce((acc, domain) => {
    acc[domain.id] = domain.categories;
    return acc;
  }, {} as Record<CapabilityDomain, BenchmarkCategory[]>);

export function getDomainForCategory(category: BenchmarkCategory): CapabilityDomain | null {
  for (const domain of domainDefinitions) {
    if (domain.categories.includes(category)) {
      return domain.id;
    }
  }
  return null;
}

export function getDomainForBenchmark(benchmark: Benchmark): CapabilityDomain | null {
  return getDomainForCategory(benchmark.category);
}

export function getBenchmarksForDomain(domainId: CapabilityDomain): Benchmark[] {
  const definition = domainDefinitions.find((d) => d.id === domainId);
  if (!definition) return [];
  
  return benchmarks.filter((b) => definition.categories.includes(b.category));
}

export function getBenchmarkIdsForDomain(domainId: CapabilityDomain): string[] {
  return getBenchmarksForDomain(domainId).map((b) => b.id);
}

export const allDomains: CapabilityDomain[] = domainDefinitions.map((d) => d.id);

export function domainToSlug(domain: CapabilityDomain): string {
  return domain.toLowerCase().replace(/\s*&\s*/g, "-").replace(/\s+/g, "-");
}

export function slugToDomain(slug: string): CapabilityDomain | null {
  for (const domain of allDomains) {
    if (domainToSlug(domain) === slug) {
      return domain;
    }
  }
  return null;
}
