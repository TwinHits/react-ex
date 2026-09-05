---
name: audit-and-update-dependencies
description: Update every dependency to its latest compatible version, update Node, and audit the result. Use whenever asked to update, upgrade, or refresh dependencies, bump versions, or check for outdated or vulnerable packages.
---

# Update Dependencies

Take every package and Node to the newest version the toolchain allows, then prove the repo still works.

## 1. Survey

```bash
npm outdated --json
```

`wanted` is the safe semver bump, `latest` is the target. Aim for `latest` unless a peer forbids it.

## 2. Check peers before editing package.json

For each package whose `latest` crosses a major:

```bash
npm view <pkg>@<latest> peerDependencies peerDependenciesMeta --json
```

- **A peer that pins a package you also own is a hard stop.** Hold that package back and name the blocker in the report. Linters lag the compilers they parse, so this is where it bites.
- **Optional peers stay uninstalled.** `optional: true` means the package works without them.

Never settle a conflict with `--force` or `--legacy-peer-deps`. They hide the incompatibility instead of reporting it.

## 3. Node

Pick the line from the release dates, not today's LTS label:

- `https://nodejs.org/dist/index.json` — every release, with its `lts` codename or `false`
- `https://raw.githubusercontent.com/nodejs/Release/main/schedule.json` — lts, maintenance, and end dates per line

A template outlives both labels, so a Current release about to be promoted beats an LTS line about to enter maintenance. Odd majors never become LTS. Take the newest patch of the line you pick.

Then move all three together, or none:

- `.nvmrc`
- `engines.node`
- `@types/node` — its major tracks the pinned Node, not `latest`

Confirm each dev tool's `engines.node` admits the version; some skip a major instead of using a `>=` floor. If the runtime is not installed locally, give the `nvm install` command rather than running it.

## 4. Install

Edit the ranges in `package.json` and **bump the minor version** — the second number — since packages changed. `1.3.0` becomes `1.4.0`. One bump per update, however many packages moved.

Then `npm install`. On `ERESOLVE` the lockfile cannot resolve several majors at once, so reinstall clean instead of forcing:

```bash
rm -rf node_modules package-lock.json && npm install
```

## 5. Verify

```bash
npm audit
npm run check
npm run test:coverage
npm run build
```

All four must pass, and the warnings count too. A major announces its removals there, and a config key that silently stopped being honored still exits 0 — chase every deprecation, then confirm the setting still does its job.

## 6. Report

The majors taken, anything held back and what blocked it, the Node decision, the audit result, and any config fixed along the way. Leave the changes uncommitted for review.
