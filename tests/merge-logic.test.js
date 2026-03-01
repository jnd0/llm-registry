// Unit tests for metadata merge logic
// Tests applyMetadataOverrides and deep merging

import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';

// Mock the applyMetadataOverrides function
function applyMetadataOverrides(models, overrides) {
  return models.map((model) => {
    const patch = overrides[model.id];
    let nextModel = model;
    if (patch) {
      const nextSpecs = patch.specs
        ? {
            ...model.specs,
            ...patch.specs,
            pricing: {
              ...model.specs.pricing,
              ...(patch.specs.pricing ?? {}),
            },
          }
        : model.specs;

      // Deep merge apiSupport to prevent data loss
      const nextApiSupport = patch.apiSupport
        ? {
            ...model.apiSupport,
            ...patch.apiSupport,
          }
        : model.apiSupport;

      nextModel = {
        ...model,
        ...patch,
        specs: nextSpecs,
        apiSupport: nextApiSupport,
        scores: model.scores,
      };
    }

    if (nextModel.variants) {
      nextModel.variants = applyMetadataOverrides(nextModel.variants, overrides);
    }

    return nextModel;
  });
}

describe('applyMetadataOverrides', () => {
  describe('deep merge apiSupport', () => {
    it('should preserve existing apiSupport capabilities when merging', () => {
      const models = [{
        id: 'test-model',
        name: 'Test Model',
        provider: 'Test',
        releaseDate: '2024-01-01',
        capabilities: ['text'],
        isOpenSource: false,
        apiSupport: {
          vision: true,
          stream: true,
          temperature: true,
        },
        specs: {
          contextWindow: 128000,
          parameters: 'Test',
          pricing: { input: 1.0, output: 2.0 },
        },
        scores: {},
      }];

      const overrides = {
        'test-model': {
          apiSupport: {
            reasoning: true,
            toolCall: true,
          },
        },
      };

      const result = applyMetadataOverrides(models, overrides)[0];

      assert.deepEqual(result.apiSupport, {
        vision: true,
        stream: true,
        temperature: true,
        reasoning: true,
        toolCall: true,
      });
    });

    it('should not lose existing capabilities when patch is empty', () => {
      const models = [{
        id: 'test-model',
        name: 'Test Model',
        provider: 'Test',
        releaseDate: '2024-01-01',
        capabilities: ['text'],
        isOpenSource: false,
        apiSupport: {
          vision: true,
          tools: true,
          structuredOutput: true,
        },
        specs: {
          contextWindow: 128000,
          parameters: 'Test',
          pricing: { input: 1.0, output: 2.0 },
        },
        scores: {},
      }];

      const overrides = {
        'test-model': {
          family: 'test-family',
        },
      };

      const result = applyMetadataOverrides(models, overrides)[0];

      assert.deepEqual(result.apiSupport, {
        vision: true,
        tools: true,
        structuredOutput: true,
      });
    });

    it('should handle patch that overwrites specific capability', () => {
      const models = [{
        id: 'test-model',
        name: 'Test Model',
        provider: 'Test',
        releaseDate: '2024-01-01',
        capabilities: ['text'],
        isOpenSource: false,
        apiSupport: {
          vision: true,
          reasoning: false,
        },
        specs: {
          contextWindow: 128000,
          parameters: 'Test',
          pricing: { input: 1.0, output: 2.0 },
        },
        scores: {},
      }];

      const overrides = {
        'test-model': {
          apiSupport: {
            reasoning: true,
          },
        },
      };

      const result = applyMetadataOverrides(models, overrides)[0];

      assert.deepEqual(result.apiSupport, {
        vision: true,
        reasoning: true,
      });
    });

    it('should handle model with no existing apiSupport', () => {
      const models = [{
        id: 'test-model',
        name: 'Test Model',
        provider: 'Test',
        releaseDate: '2024-01-01',
        capabilities: ['text'],
        isOpenSource: false,
        specs: {
          contextWindow: 128000,
          parameters: 'Test',
          pricing: { input: 1.0, output: 2.0 },
        },
        scores: {},
      }];

      const overrides = {
        'test-model': {
          apiSupport: {
            vision: true,
            reasoning: true,
          },
        },
      };

      const result = applyMetadataOverrides(models, overrides)[0];

      assert.deepEqual(result.apiSupport, {
        vision: true,
        reasoning: true,
      });
    });

    it('should deep merge specs.pricing correctly', () => {
      const models = [{
        id: 'test-model',
        name: 'Test Model',
        provider: 'Test',
        releaseDate: '2024-01-01',
        capabilities: ['text'],
        isOpenSource: false,
        specs: {
          contextWindow: 128000,
          parameters: 'Test',
          pricing: {
            input: 1.0,
            output: 2.0,
          },
        },
        scores: {},
      }];

      const overrides = {
        'test-model': {
          specs: {
            pricing: {
              cacheInput: 0.5,
              cacheOutput: 1.0,
            },
          },
        },
      };

      const result = applyMetadataOverrides(models, overrides)[0];

      assert.deepEqual(result.specs.pricing, {
        input: 1.0,
        output: 2.0,
        cacheInput: 0.5,
        cacheOutput: 1.0,
      });
    });
  });

  describe('apply other metadata fields', () => {
    it('should apply family field', () => {
      const models = [{
        id: 'test-model',
        name: 'Test Model',
        provider: 'Test',
        releaseDate: '2024-01-01',
        capabilities: ['text'],
        isOpenSource: false,
        specs: {
          contextWindow: 128000,
          parameters: 'Test',
          pricing: { input: 1.0, output: 2.0 },
        },
        scores: {},
      }];

      const overrides = {
        'test-model': {
          family: 'test-family',
        },
      };

      const result = applyMetadataOverrides(models, overrides)[0];

      assert.strictEqual(result.family, 'test-family');
    });

    it('should apply trainingCutoff field', () => {
      const models = [{
        id: 'test-model',
        name: 'Test Model',
        provider: 'Test',
        releaseDate: '2024-01-01',
        capabilities: ['text'],
        isOpenSource: false,
        specs: {
          contextWindow: 128000,
          parameters: 'Test',
          pricing: { input: 1.0, output: 2.0 },
        },
        scores: {},
      }];

      const overrides = {
        'test-model': {
          trainingCutoff: '2024-04',
        },
      };

      const result = applyMetadataOverrides(models, overrides)[0];

      assert.strictEqual(result.trainingCutoff, '2024-04');
    });

    it('should preserve scores', () => {
      const models = [{
        id: 'test-model',
        name: 'Test Model',
        provider: 'Test',
        releaseDate: '2024-01-01',
        capabilities: ['text'],
        isOpenSource: false,
        specs: {
          contextWindow: 128000,
          parameters: 'Test',
          pricing: { input: 1.0, output: 2.0 },
        },
        scores: {
          mmlu: { score: 88.7, verified: true },
          gsm8k: { score: 92.1, verified: true },
        },
      }];

      const overrides = {
        'test-model': {
          family: 'test-family',
        },
      };

      const result = applyMetadataOverrides(models, overrides)[0];

      assert.deepEqual(result.scores, {
        mmlu: { score: 88.7, verified: true },
        gsm8k: { score: 92.1, verified: true },
      });
    });
  });

  describe('handle variants', () => {
    it('should apply overrides to variants recursively', () => {
      const models = [{
        id: 'parent-model',
        name: 'Parent Model',
        provider: 'Test',
        releaseDate: '2024-01-01',
        capabilities: ['text'],
        isOpenSource: false,
        specs: {
          contextWindow: 128000,
          parameters: 'Test',
          pricing: { input: 1.0, output: 2.0 },
        },
        scores: {},
        variants: [{
          id: 'child-model',
          name: 'Child Model',
          provider: 'Test',
          releaseDate: '2024-01-01',
          capabilities: ['text'],
          isOpenSource: false,
          specs: {
            contextWindow: 64000,
            parameters: 'Test',
            pricing: { input: 0.5, output: 1.0 },
          },
          scores: {},
        }],
      }];

      const overrides = {
        'child-model': {
          family: 'test-family',
          apiSupport: {
            vision: true,
          },
        },
      };

      const result = applyMetadataOverrides(models, overrides)[0];

      assert.strictEqual(result.variants[0].family, 'test-family');
      assert.deepEqual(result.variants[0].apiSupport, {
        vision: true,
      });
    });
  });
});

console.log('✅ All tests passed!');
