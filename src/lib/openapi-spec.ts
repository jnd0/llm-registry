// OpenAPI Specification for LLM Registry API v1
// Generated: 2026-03-01

export const openApiSpec = {
  openapi: "3.0.3",
  info: {
    title: "LLM Registry API",
    description: `
Public read-only API for accessing LLM benchmark data, model metadata, and performance scores.

## Features
- **Model Metadata**: Access detailed information about LLMs including specs, pricing, capabilities
- **Benchmark Scores**: Retrieve scores with provenance metadata (source, verification level, date)
- **Leaderboards**: Get ranked model lists by benchmark category
- **Export**: Download data in JSON or CSV format

## Data Sources
- Primary: [models.dev](https://models.dev) - MIT License
- Benchmarks: Various third-party sources with verification levels
- Artificial Analysis: [artificialanalysis.ai](https://artificialanalysis.ai/)

## Rate Limiting
- **Unauthenticated**: 100 requests per minute per IP
- Headers: \`X-RateLimit-Limit\`, \`X-RateLimit-Remaining\`, \`X-RateLimit-Reset\`

## Attribution
When using this API data, please attribute:
- LLM Registry: https://llm-registry.dev
- models.dev: https://models.dev
- Artificial Analysis: https://artificialanalysis.ai/
    `,
    version: "1.0.0",
    contact: {
      name: "LLM Registry",
      url: "https://llm-registry.dev",
    },
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  servers: [
    {
      url: "https://llm-registry.dev/api/v1",
      description: "Production server",
    },
    {
      url: "http://localhost:3000/api/v1",
      description: "Local development",
    },
  ],
  tags: [
    {
      name: "Models",
      description: "LLM model metadata and specifications",
    },
    {
      name: "Benchmarks",
      description: "Benchmark definitions and categories",
    },
    {
      name: "Scores",
      description: "Model performance scores with provenance",
    },
    {
      name: "Leaderboards",
      description: "Ranked model lists by category",
    },
    {
      name: "Export",
      description: "Data export in various formats",
    },
  ],
  paths: {
    "/models": {
      get: {
        tags: ["Models"],
        summary: "List all models",
        description: "Retrieve a list of all models with optional filtering",
        parameters: [
          {
            name: "provider",
            in: "query",
            description: "Filter by provider (e.g., 'OpenAI', 'Anthropic')",
            schema: {
              type: "string",
            },
          },
          {
            name: "family",
            in: "query",
            description: "Filter by model family (e.g., 'llama', 'gpt', 'claude')",
            schema: {
              type: "string",
            },
          },
          {
            name: "capability",
            in: "query",
            description: "Filter by capability (e.g., 'reasoning', 'vision', 'tools')",
            schema: {
              type: "string",
            },
          },
          {
            name: "openSource",
            in: "query",
            description: "Filter by license type",
            schema: {
              type: "string",
              enum: ["true", "false"],
            },
          },
          {
            name: "limit",
            in: "query",
            description: "Maximum number of results to return",
            schema: {
              type: "integer",
              default: 100,
              maximum: 1000,
            },
          },
          {
            name: "offset",
            in: "query",
            description: "Number of results to skip for pagination",
            schema: {
              type: "integer",
              default: 0,
            },
          },
        ],
        responses: {
          "200": {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    models: {
                      type: "array",
                      items: {
                        $ref: "#/components/schemas/Model",
                      },
                    },
                    count: {
                      type: "integer",
                      description: "Total number of models matching the filter",
                    },
                    attribution: {
                      $ref: "#/components/schemas/Attribution",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/models/{id}": {
      get: {
        tags: ["Models"],
        summary: "Get model by ID",
        description: "Retrieve detailed information about a specific model",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "Model ID (e.g., 'claude-3-5-sonnet-20241022', 'gpt-4o')",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          "200": {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    model: {
                      $ref: "#/components/schemas/Model",
                    },
                    attribution: {
                      $ref: "#/components/schemas/Attribution",
                    },
                  },
                },
              },
            },
          },
          "404": {
            description: "Model not found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    error: {
                      type: "string",
                      example: "Model not found",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/benchmarks": {
      get: {
        tags: ["Benchmarks"],
        summary: "List all benchmarks",
        description: "Retrieve a list of all benchmarks with categories",
        responses: {
          "200": {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    benchmarks: {
                      type: "array",
                      items: {
                        $ref: "#/components/schemas/Benchmark",
                      },
                    },
                    attribution: {
                      $ref: "#/components/schemas/Attribution",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/scores": {
      get: {
        tags: ["Scores"],
        summary: "Get model scores",
        description: "Retrieve scores with optional filtering by model or benchmark",
        parameters: [
          {
            name: "modelId",
            in: "query",
            description: "Filter scores by model ID",
            schema: {
              type: "string",
            },
          },
          {
            name: "benchmarkId",
            in: "query",
            description: "Filter scores by benchmark ID",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          "200": {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    scores: {
                      type: "array",
                      items: {
                        $ref: "#/components/schemas/ScoreEntry",
                      },
                    },
                    attribution: {
                      $ref: "#/components/schemas/Attribution",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/leaderboards/{category}": {
      get: {
        tags: ["Leaderboards"],
        summary: "Get leaderboard by category",
        description: "Retrieve ranked models for a specific category",
        parameters: [
          {
            name: "category",
            in: "path",
            required: true,
            description: "Category slug (e.g., 'knowledge', 'math', 'coding', 'reasoning')",
            schema: {
              type: "string",
            },
          },
          {
            name: "limit",
            in: "query",
            description: "Maximum number of results",
            schema: {
              type: "integer",
              default: 100,
            },
          },
        ],
        responses: {
          "200": {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    category: {
                      type: "string",
                    },
                    models: {
                      type: "array",
                      items: {
                        $ref: "#/components/schemas/ModelWithScores",
                      },
                    },
                    attribution: {
                      $ref: "#/components/schemas/Attribution",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/export": {
      get: {
        tags: ["Export"],
        summary: "Export all data",
        description: "Download complete dataset in JSON or CSV format",
        parameters: [
          {
            name: "format",
            in: "query",
            description: "Export format",
            schema: {
              type: "string",
              enum: ["json", "csv"],
              default: "json",
            },
          },
        ],
        responses: {
          "200": {
            description: "Successful export",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
              },
              "text/csv": {
                schema: {
                  type: "string",
                },
              },
            },
          },
        },
      },
    },
    "/meta": {
      get: {
        tags: ["Models"],
        summary: "Get API metadata",
        description: "Retrieve metadata about the API including counts and last update",
        responses: {
          "200": {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ApiMeta",
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Model: {
        type: "object",
        description: "LLM model with metadata, specs, and scores",
        properties: {
          id: {
            type: "string",
            description: "Unique model identifier",
            example: "claude-3-5-sonnet-20241022",
          },
          name: {
            type: "string",
            description: "Display name",
            example: "Claude 3.5 Sonnet",
          },
          provider: {
            type: "string",
            description: "Model provider",
            example: "Anthropic",
          },
          family: {
            type: "string",
            description: "Model family grouping",
            example: "claude-sonnet",
          },
          releaseDate: {
            type: "string",
            format: "date",
            description: "Release date (ISO 8601)",
            example: "2024-10-22",
          },
          status: {
            type: "string",
            enum: ["active", "alpha", "beta", "deprecated"],
            description: "Model lifecycle status",
          },
          knowledgeCutoff: {
            type: "string",
            description: "Training data cutoff date",
            example: "2024-04",
          },
          capabilities: {
            type: "array",
            items: {
              type: "string",
            },
            description: "Model capabilities",
          },
          isOpenSource: {
            type: "boolean",
            description: "True if model weights are公开 available",
          },
          specs: {
            type: "object",
            properties: {
              contextWindow: {
                type: "integer",
                description: "Context window size in tokens",
                example: 200000,
              },
              maxOutputTokens: {
                type: "integer",
                description: "Maximum output tokens",
                example: 64000,
              },
              parameters: {
                type: "string",
                description: "Parameter count",
                example: "Unknown",
              },
              pricing: {
                type: "object",
                properties: {
                  input: {
                    type: "number",
                    description: "Input price per 1M tokens (USD)",
                    example: 3.0,
                  },
                  output: {
                    type: "number",
                    description: "Output price per 1M tokens (USD)",
                    example: 15.0,
                  },
                  cacheInput: {
                    type: "number",
                    description: "Cached read price per 1M tokens (USD)",
                  },
                  cacheOutput: {
                    type: "number",
                    description: "Cached write price per 1M tokens (USD)",
                  },
                  reasoning: {
                    type: "number",
                    description: "Reasoning token price per 1M tokens (USD)",
                  },
                  inputAudio: {
                    type: "number",
                    description: "Audio input price per 1M tokens (USD)",
                  },
                  outputAudio: {
                    type: "number",
                    description: "Audio output price per 1M tokens (USD)",
                  },
                },
              },
            },
          },
          apiSupport: {
            type: "object",
            properties: {
              reasoning: {
                type: "boolean",
                description: "Supports chain-of-thought reasoning",
              },
              vision: {
                type: "boolean",
                description: "Supports image input",
              },
              tools: {
                type: "boolean",
                description: "Supports function calling",
              },
              structuredOutput: {
                type: "boolean",
                description: "Supports JSON mode",
              },
              attachment: {
                type: "boolean",
                description: "Supports file uploads",
              },
              temperature: {
                type: "boolean",
                description: "Supports temperature parameter",
              },
            },
          },
          scores: {
            type: "object",
            description: "Benchmark scores keyed by benchmark ID",
            additionalProperties: {
              $ref: "#/components/schemas/ScoreEntry",
            },
          },
          metadataSourceId: {
            type: "string",
            description: "Source of metadata",
          },
          metadataAsOfDate: {
            type: "string",
            format: "date",
            description: "Last metadata update",
          },
        },
      },
      Benchmark: {
        type: "object",
        properties: {
          id: {
            type: "string",
            example: "mmlu",
          },
          name: {
            type: "string",
            example: "MMLU",
          },
          category: {
            type: "string",
            example: "knowledge",
          },
          description: {
            type: "string",
          },
        },
      },
      ScoreEntry: {
        type: "object",
        properties: {
          score: {
            type: "number",
            nullable: true,
            description: "Normalized score (0-100)",
          },
          originalScore: {
            type: "string",
            description: "Original score as reported",
          },
          sourceId: {
            type: "string",
            description: "Data source ID",
          },
          verificationLevel: {
            type: "string",
            enum: ["third_party", "provider", "community", "estimated"],
          },
          asOfDate: {
            type: "string",
            format: "date",
            description: "Score publication date",
          },
        },
      },
      ModelWithScores: {
        type: "object",
        allOf: [
          {
            $ref: "#/components/schemas/Model",
          },
          {
            properties: {
              averageScore: {
                type: "number",
                description: "Average score across benchmarks",
              },
              rank: {
                type: "integer",
                description: "Leaderboard rank",
              },
            },
          },
        ],
      },
      Attribution: {
        type: "object",
        properties: {
          sources: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: {
                  type: "string",
                },
                name: {
                  type: "string",
                },
                url: {
                  type: "string",
                  format: "uri",
                },
              },
            },
          },
          artificialAnalysis: {
            type: "object",
            properties: {
              name: {
                type: "string",
                example: "Artificial Analysis",
              },
              url: {
                type: "string",
                format: "uri",
                example: "https://artificialanalysis.ai/",
              },
              snapshotDate: {
                type: "string",
                format: "date",
                example: "2026-02-16",
              },
            },
          },
        },
      },
      ApiMeta: {
        type: "object",
        properties: {
          totalModels: {
            type: "integer",
          },
          totalBenchmarks: {
            type: "integer",
          },
          lastUpdated: {
            type: "string",
            format: "date-time",
          },
          version: {
            type: "string",
          },
        },
      },
    },
  },
};
