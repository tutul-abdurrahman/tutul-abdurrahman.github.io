# tutul — product design portfolio

Hand-written portfolio for Abdur Rahman Tutul. Three pages, no build step, no
framework, no package manager.

## Pages

```
index.html      Home: hero board (4 client shots), client marquee, grouped client
                cards (Rebelslab then Zephyr), 3 product tiles, demo band,
                services, process, about, contact
work.html       All 12 client projects — 7 live sites + 5 products/platforms
demos.html      18 self-initiated landing pages and portfolio layouts
assets/site.css The whole design system — type, grid, colour, responsive rules
assets/clients/ Screenshots of client sites (1440×900 webp)
assets/shots/   Screenshots of the self-initiated demos (1440×900 webp)
work/<slug>/    The actual demo pages, self-contained HTML
assets/og.png   1200×630 social share card
```

Everything under `work/` is a single self-contained HTML file. Google Fonts is
the only external dependency.

## Client projects in the site

| # | Project | Client | Type | Link |
|---|---------|--------|------|------|
| 01 | Zephyr Events | Zephyr Events | Marketing site | live |
| 02 | Zephyr Catalogue | Zephyr Events | 78-product catalogue | live |
| 03 | Centrum Hecht Opleidingen | Rebelslab | Course platform + CMS | live |
| 04 | ZappContact | Zephyr | Lead-scanning PWA | live |
| 05 | Tim Juffermans | Rebelslab | Illustrator portfolio (Lindo AI) | live |
| 06 | The Musical Connection | Rebelslab | Charity site + Tally forms | live |
| 07 | Jilster | Rebelslab | Home page + app features | live |
| 08 | Zephyr Dashboard | Zephyr | Integration dashboard | login |
| 09 | Uniloop | Zephyr | Uni event dashboard (ACU, UOW, Sydney) | login |
| 10 | Your Invite By Us | — | Event management + guest pages | offline |
| 11 | De Echte Kieswijzer | Rebelslab | Dutch election guide | seasonal |
| 12 | Ze-Scan | Rebelslab | App + website | offline |

## Editing

- Prices and service scope: `index.html`, `#services` section (three
  `.svc-card` blocks plus the `.svc-custom` row).
- Add a client card: drop a screenshot in `assets/clients/`, copy a
  `<a class="card">` block, point `href` at the live site. The home page groups
  cards by client (`#work`, `.client-group`); `work.html` lists all twelve.
- Add a demo: drop `work/<slug>/index.html`, add a screenshot to
  `assets/shots/<slug>.webp`, copy a card in `demos.html`.
- The client marquee in `#clients` needs the item list duplicated so the loop is
  seamless (second half is `aria-hidden`).
- Colours and type: the `:root` block at the top of `assets/site.css`.

## Deploy

Static, served from the repo root by GitHub Pages.

```bash
git add -A
git commit -m "Update site"
git push
```

## Notes

- The six portfolio demo pages use placeholder names and copy. They exist to
  show layout range. Replace them with real work as it comes in.
- Client screenshots are of public pages only. Nothing behind a login is
  screenshotted.
- If a client site goes down, the card keeps the description and the chip
  changes to "Offline now". Don't delete the work — it still happened.
