# tutul.dev — design + build portfolio

A hand-written portfolio for Abdur Rahman Tutul. One page for the pitch, one page
for the full catalogue, and 18 working demo pages you can click through.

## What's inside

```
index.html          Landing page: positioning, 5 featured builds, services, process, about, contact
work.html           All 18 builds in two groups
assets/site.css     The whole design system — type, grid, colour, responsive rules
assets/shots/       1440×900 screenshots of each demo (webp)
work/<slug>/        The actual demo pages, self-contained HTML
```

## The demos

Twelve landing pages (Art Nouveau, Japanese Zen, Moroccan Zellige, Memphis,
Risograph, Scandinavian, Blueprint, Voyage, Paper Cut, Pixel Arcade, Gothic,
Bento) and six portfolio layouts (Swiss, Terminal, Neo-brutalism, Gallery Dark,
Editorial Serif, Monochrome).

Every demo is a single self-contained HTML file. Google Fonts is the only
external dependency. No build step, no framework, no package manager.

## Editing

- Prices and copy: `index.html`, `#services` section.
- Add a demo: drop `work/<slug>/index.html`, add a screenshot to
  `assets/shots/<slug>.webp`, then copy an `<a class="card">` block.
- Colours and type: the `:root` block at the top of `assets/site.css`.

## Deploy

Static. Push to `main` on GitHub and Pages serves the repo root.

```bash
git add -A
git commit -m "Update site"
git push
```

## Notes

The six portfolio demo pages use placeholder names and copy. They exist to show
layout range. Replace them with real client work as it comes in.
