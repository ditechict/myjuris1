# Checkpoint - myjuris1

## Date
2026-06-19

## Current state
- Dependencies are installed and `node_modules` exists.
- `npm run build` succeeds.
- `npm run lint` reports 7 warnings and 0 errors.
- `npm audit` reports a low-severity advisory for `esbuild` via `vite@7.3.5`.
- `vite.config.ts` currently uses deprecated `optimizeDeps.disabled`.
- Bundle output warns that some chunks exceed 500 kB after minification.

## Detected issues
1. `vite.config.ts` needs modernization to remove deprecated `optimizeDeps.disabled`.
2. Several component files export helpers/constants alongside components, triggering `react-refresh/only-export-components` warnings.
3. `esbuild` advisory should be addressed by upgrading Vite to a patched dependency resolution.

## Proposed next steps
- Update `vite.config.ts` to remove deprecated optimizeDeps settings.
- Refactor mixed-export component files to separate helper modules.
- Upgrade Vite and verify the `esbuild` advisory is resolved.
- Re-run build, lint, and audit after changes.

## Notes
- No code changes have been made yet; awaiting approval to implement fixes.
