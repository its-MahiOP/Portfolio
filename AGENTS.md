# AGENTS.md

## Project shape

- React 18 + Vite 5 single-page portfolio. Entry: `index.html` → `src/main.jsx` → `src/App.jsx`.
- The old static-site files have been removed. Do not recreate root `styles.css`, `script.js`, or duplicate image folders; active styles are `src/index.css`, and behavior lives in `src/components/` and `src/hooks/`.
- Active images, the profile photo, and the CV live in `public/`. Components reference them with root-absolute URLs such as `/MillionX Bangladesh – 2026/...`.
- Folder and file names contain spaces and en dashes (U+2013). Preserve exact names when adding or moving assets.
- Section content (`projects`, `achievements`, `skillCategories`, etc.) is hardcoded as local `const` arrays at the top of each component. There is no CMS or data layer.

## Commands

- `npm run dev` — Vite dev server.
- `npm run build` — production build into `dist/`.
- `npm run preview` — serve the built output.
- On this Windows machine PowerShell blocks `npm.ps1`; use `npm.cmd ...`. Optional local helpers `run_dev.bat` / `run_dev.sh` hardcode Node v24.20.0 and are gitignored.
- There is no lint, typecheck, test, or CI setup. Verify with `npm run build` plus a browser check; do not assume test commands exist.
- `dist/` and `node_modules/` are ignored. Do not commit generated output.

## Conventions and gotchas

- Scroll animations use `useReveal()` from `src/hooks/useReveal.js`. Attach its ref to an element that also has class `reveal`, or the element stays invisible.
- Theme state is the `html.light-theme` class plus `localStorage.theme`. Keep the inline theme script in `index.html` to prevent a flash on load.
- Navbar scroll-spy depends on `section[id]` values matching `navItems` in `src/components/Navbar.jsx`.
- The contact form has no backend: `src/components/Contact.jsx` posts to FormSubmit AJAX with a hardcoded recipient email.
- The CV is `public/Md Mehedi Hasan Chowdhury Mahi.pdf`, linked from `Hero.jsx`. Keep it under `public/` so Vite copies it into `dist/`.
- Raw `.NEF` originals are ignored by Git. Do not put them in `public/`; Vite would copy every one into the production build.

## Deployment

- `netlify.toml` runs `npm run build` and publishes `dist/`. Do not change it back to publishing the repository root.
- `vite.config.js` uses the default `/` base. The GitHub Pages project path `/Portfolio/` requires setting `base: '/Portfolio/'` for that build only; Netlify should keep `/`.
