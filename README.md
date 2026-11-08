# Abdur Rahman Tutul, portfolio

Personal site for Abdur Rahman Tutul, a product designer in Dhaka. Dark bento
layout with glass panels and two neon accents. React 19, Vite, hand-written CSS.

## Pages

| Page | File | What it is |
| --- | --- | --- |
| Home | `index.html` | Hero, collaborations, selected work, own products, services, integrations, process, about, contact |
| Client work | `work.html` | Full engagement ledger, Rebelslab and Zephyr groups, own products, integrations |
| Demo library | `demos.html` | 18 self-initiated pages, all live |

The 18 demo pages are plain HTML under `public/work/<slug>/`. They are copied
into `dist` unchanged, so their URLs stay `/work/<slug>/`.

## Stack

- React 19 and React DOM
- Vite 8, multi-page build (`index.html`, `work.html`, `demos.html`)
- No CSS framework. Tokens, base, chrome, blocks and page rules live in
  `src/styles/`, imported through `src/styles/index.css`.
- Fonts: Bricolage Grotesque, IBM Plex Sans, IBM Plex Mono, Instrument Serif
  (Google Fonts, loaded in each entry HTML).

## Structure

```
src/
  home.jsx  work.jsx  demos.jsx     entry points, one per page
  pages/                            Home, Work, Demos
  components/                       Header, Footer, product and integration blocks
  data/                             site copy, work ledger, demo list
  styles/                           tokens.css, base.css, chrome.css, blocks.css, pages.css
public/
  assets/                           client shots, logos, products, portrait, OG image
  work/                             18 static demo pages
```

Copy lives in `src/data/`. Edit `site.js`, `work.js` or `demos.js` instead of
hunting through JSX.

## Local development

```bash
npm install
npm run dev
```

Vite serves all three entries. `http://localhost:5173/`, `/work.html`,
`/demos.html`.

Production check:

```bash
npm run build
npm run preview
```

## Deploy

GitHub Pages, built by `.github/workflows/deploy.yml` on every push to `main`.
The workflow uploads `dist` as a Pages artifact; Pages source must be set to
"GitHub Actions" in the repository settings.

Old URLs are preserved: `index.html`, `work.html`, `demos.html` and
`/work/<slug>/` all keep their paths.

## Editing content

- Email and contact links: `src/data/site.js` (`EMAIL`).
- Engagement years and collaborators: `studios` in `site.js`, plus
  `src/data/work.js`.
- Services and prices: `services` in `site.js`.
- Demo list: `src/data/demos.js`; the matching folder is `public/work/<slug>/`.

Photography and client screenshots are in `public/assets/`. Keep the same file
names when replacing an image, or update the path in the data file.
