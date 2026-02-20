# Contributing to LLM Registry

Thank you for your interest in contributing to LLM Registry! This document provides guidelines for contributing to the project.

## Code of Conduct

- Be respectful and constructive in all interactions
- Focus on what is best for the community and the project
- Show empathy towards other community members

## How to Contribute

### Reporting Issues

If you find a bug or have a suggestion:

1. Check if the issue already exists in the [GitHub Issues](https://github.com/jnd0/llm-registry/issues)
2. If not, create a new issue with:
   - A clear, descriptive title
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots if applicable
   - Your environment (OS, browser, Node version)

### Adding or Updating Models

When adding model data:

1. **Data Correctness First**: Never invent or estimate benchmark values unless explicitly marked as `estimated`
2. **Provenance Required**: Every score should include:
   - `sourceId`: Reference to the data source
   - `verificationLevel`: One of `third-party`, `provider`, `community`, or `estimated`
   - `asOfDate`: When the score was recorded (ISO 8601 format)
3. **Variant Handling**: Keep model variants as separate entries when they represent distinct offerings
4. **Validation**: Run `npm run validate:data:strict` before submitting

### Code Contributions

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run all validation and build commands:
   ```bash
   npm run validate:data
   npm run validate:data:strict
   npm run lint
   npm run build
   npm test
   ```
5. Commit your changes with a clear message
6. Push to your fork and create a Pull Request

### Pull Request Guidelines

- Keep changes focused and atomic
- Update documentation if needed
- Ensure all CI checks pass
- Reference any related issues
- Be responsive to review feedback

## Data Integrity Rules

- Never remove existing provenance metadata
- Do not rename benchmark IDs casually; treat them as public contracts
- Update `src/data/sources.ts` when adding new external sources
- Keep methodology and attribution text aligned with data changes

## Development Setup

1. Install dependencies: `bun install`
2. Run dev server: `bun dev`
3. Run validation: `npm run validate:data`
4. Run tests: `npm test`

## Questions?

Feel free to open an issue for questions or join discussions in existing issues.

Thank you for contributing to making LLM benchmarks more accessible and reliable!
