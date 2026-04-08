# Site Vitrine

> Site web CSCO/HOVERLA en Astro, déployé sur GitHub Pages.

## Key files

- `src/pages/` — Pages: index, vodka, cigares, caviar, coffrets, contact
- `src/layouts/Layout.astro` — Layout principal
- `src/components/` — Nav, Footer, ProductCard, AgeGate
- `public/images/` — Assets visuels

## Stack

- Astro + CSS custom (pas Tailwind)
- Deploy: `npm run build && npx gh-pages -d dist --dotfiles`

## Local rules

- Lire `../brand-vault/` pour le ton et les assets marque
- AgeGate obligatoire (alcool)
- Live: https://alfred-pi.github.io/jp-project-site/
