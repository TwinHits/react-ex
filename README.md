# React Starter

A template for starting new React repos. It carries everything a project needs on day one and nothing tied to any particular product. If you find yourself deleting a folder before you can start, that folder should not have been in the template.

## Quick Start

```bash
npm install
npm run dev
```

## Starting A New Project

Set `name` and `version` in `package.json`, replace the heading and description above, change `<title>` in `index.html`, then replace `src/App/`.

## Conventions

- **Stack** — React, TypeScript in strict mode, Vite, Vitest with jsdom, ESLint, Prettier, Husky.
- **Components** — one folder each, with an `index.ts` re-exporting the default.
- **Imports** — `@/` resolves to `src/`. No relative paths that climb.
- **Tests** — `test/` mirrors `src/` folder for folder, `.spec.tsx` naming.
- **Node** — pinned in `.nvmrc` and `engines`, tracking the active LTS line.
- **Hooks** — `check` on commit, `test:coverage` on push. Raise the coverage thresholds as the project grows.

## Configuration

Every configuration line serves a deliberate purpose. Please do not declare default values, add "just in case" settings, or add settings that might be needed in the future. If a line exists in a config file, it's there because the default behavior wasn't suitable for our specific needs.

## VS Code

Install the recommended extensions when prompted. `.vscode/` holds the settings the project requires and a Chrome launch configuration for debugging against `npm run dev`; keep personal preferences in your user settings.

## Claude Code

`.claude/skills/` is shared. `audit-and-update-dependencies` drives `npm run update`, taking packages and Node as far as peer dependencies allow, then auditing and verifying.

`CLAUDE.md` and `.claude/settings.local.json` are per-developer and ignored.
