# [Project Name]

[Project description]

## Quick Start

```bash
npm install
npm run dev
```

## Commands

| Command          | Purpose                |
| ---------------- | ---------------------- |
| `npm run dev`    | Start dev server       |
| `npm run clean`  | Remove generated files |
| `npm run format` | Format code            |
| `npm run lint`   | Fix code issues        |
| `npm run test`   | Run tests              |
| `npm run build`  | Build for production   |
| `npm run check`  | Check without fixing   |

## Structure

```
src/
├── App/           # Main app component
├── components/    # Reusable components
└── main.tsx       # Entry point
```

**Debugging:**

1. Start the development server: `npm run dev`
2. Go to Run and Debug in VS Code
3. Select "Launch Chrome" configuration
4. Set breakpoints to debug in your browser

## Testing

```bash
npm run test
```

Tests use `.spec.tsx` naming and are co-located with components:

## Building

```bash
npm run build
```

Production builds create a single minified JavaScript file with no code splitting.

## Configuration

Every configuration line serves a deliberate purpose. Please do not declare default values, add "just in case" settings, or add settings that might be needed in the future. If a line exists in a config file, it's there because the default behavior wasn't suitable for our specific needs.

## VS Code

**Install the Recommended Extensions:**

- Open Command Palette (`Ctrl+Shift+P`)
- Run `Extensions: Show Recommended Extensions`
- Install the prompted extensions

**Workspace vs Personal Settings:**

- `.vscode/settings.json` - Required project settings
