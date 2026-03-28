# ✨ Refonte Site CSCO/HOVERLA - Mars 2026

## 🎯 Objectif
Transformer le site vitrine générique en une expérience premium niveau **Grey Goose / Belvedere**.

## 📊 Structure du Site

### Pages Actives (4)
1. **index.astro** — Homepage avec scroll storytelling
2. **vodka.astro** — Page HOVERLA (7 saveurs)
3. **cigares.astro** — Page Mont Noir
4. **contact.astro** — Contact minimal

### Pages Supprimées
- ❌ coffrets.astro (à rajouter plus tard)
- ❌ caviar.astro (à rajouter plus tard)

## 🎨 Design Direction

### Palette
- **Fond**: `#080808` (noir profond)
- **Or**: `#C8A84E` (accent luxe)
- **Texte**: `#F5F2EC` (blanc cassé)
- **Accents**: Dégradés subtils, opacités élégantes

### Typographie
- **Display**: Cormorant Garamond 300 (titres, héros)
- **Body**: Montserrat 300-500 (textes, labels)

### Spacing
- **Section padding**: 120-160px vertical (desktop)
- **Grilles**: Asymétriques, split layouts (1fr 1.5fr)
- **Mobile**: 80px vertical, responsive stack

## 📄 Page par Page

### 1. Homepage (index.astro)

**Structure:**
```
Hero Fullscreen
  ↓
Section HOVERLA (split: texte gauche, image droite)
  ↓
Section Mont Noir (split: image gauche, texte droite)
  ↓
Section Chiffres (3 stats)
  ↓
Footer
```

**Highlights:**
- Hero avec bg-spirits-dark.jpg filtré
- Titre géant "Excellence & Élégance" en Cormorant
- Bouton "Découvrir" avec animation scroll
- Images HOVERLA avec `mix-blend-mode: multiply` sur fond dark
- Stats: "7 saveurs" / "100% artisanale" / "1 distributeur exclusif"

### 2. Vodka (vodka.astro)

**Structure:**
```
Hero avec Lineup
  ↓
Intro "L'esprit des Carpates"
  ↓
Les 7 Saveurs (grille)
  ↓
Processus (4 étapes)
  ↓
CTA Contact
```

**Les 7 Saveurs:**
- Original (or)
- Honey (miel doré)
- Pepper (marron)
- Cherry (rouge cerise)
- Cranberry (rouge vif)
- Birch (vert bouleau)
- Horseradish (beige)

Chaque saveur: accent coloré top border + nom + description

**Processus:**
1. Sélection du blé
2. Eau de source
3. Distillation traditionnelle
4. Aromatisation naturelle

### 3. Cigares (cigares.astro)

**Structure:**
```
Hero bg-cigare.jpg
  ↓
Intro "Collaboration d'exception"
  ↓
CSCO × Vegas Corporan
  ↓
L'Expérience (4 points)
  ↓
Citation "Un cigare n'est pas qu'un cigare..."
  ↓
CTA Contact
```

**L'Expérience:**
- 🌿 Tabacs sélectionnés
- ✋ Roulage artisanal
- ⏳ Vieillissement patient
- 🎩 Élégance absolue

### 4. Contact (contact.astro)

**Ultra minimal:**
- Hero "Parlons excellence"
- 3 cartes: WhatsApp / Email / Instagram
- Section distribution (Suisse Prestige)
- Placeholder carte Suisse (bg-mountain.jpg)

**Infos:**
- WhatsApp: +41 79 123 45 67 (placeholder)
- Email: contact@hoverlavodka.com
- Instagram: @hoverla.vodka

## 🛠️ Technique

### Build
```bash
npm run build
```
✅ Clean: 0 errors, 0 warnings, 0 hints

### Deployment
- Base path: `/jp-project-site/` (GitHub Pages)
- Config: `astro.config.mjs`
- Build output: `dist/`

### Images Utilisées
- `/images/bg-spirits-dark.jpg` → Hero homepage
- `/images/hoverla-official-1.jpg` → Section HOVERLA
- `/images/hoverla-lineup-nobg.png` → Hero vodka
- `/images/bg-cigare.jpg` → Hero cigares + section homepage
- `/images/bg-bar-luxe.jpg` → Citation cigares
- `/images/bg-mountain.jpg` → Contact map

### CSS Custom
- Variables CSS complètes (`global.css`)
- Classes utilitaires (`.t-hero`, `.t-section`, `.t-label`, `.t-body`)
- Pas de Tailwind (CSS custom only)
- Animations: `fadeUp`, scroll reveals

## ✅ Checklist Refonte

- [x] Supprimer coffrets.astro et caviar.astro
- [x] Refondre homepage (hero + 3 sections)
- [x] Refondre vodka (lineup + 7 saveurs + process)
- [x] Refondre cigares (collab + expérience)
- [x] Refondre contact (minimal 3 cards)
- [x] Mettre à jour nav/footer (retirer coffrets)
- [x] Vérifier build (clean)
- [x] Git commit & push

## 🚀 Prochaines Étapes

1. **Tester sur mobile** (responsive déjà en place, à vérifier visuel)
2. **Ajouter animations scroll** (data-reveal, Intersection Observer)
3. **Optimiser images** (compression, formats modernes)
4. **Rajouter coffrets/caviar** quand brief disponible
5. **SEO**: meta descriptions, Open Graph
6. **Analytics**: Google Analytics ou Plausible

## 📝 Notes Importantes

### Age Gate
- Fullscreen dark overlay
- localStorage "csco-age-confirmed"
- Boutons: "J'AI 18 ANS" (gold) / "MINEUR" (discret)

### Navigation
- Transparent sur hero
- Fond solide au scroll (scrolled class)
- Mobile: hamburger menu fullscreen

### Footer
- Minimal dark
- Logo CSCO + liens + Instagram
- "Alcool : à consommer avec modération"

### Fonts
- Cormorant Garamond: @fontsource (300, 400, italic)
- Montserrat: @fontsource (300, 400, 500)

---

**Commit:** `f43506d`  
**Date:** 24 mars 2026  
**Build:** ✅ Clean  
**Status:** 🚀 Prêt pour review
