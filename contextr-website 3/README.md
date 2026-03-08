# contextr.de

Website für Contextr — AI-Beratung für kleine Teams.

## Stack

- **Framework:** [Astro](https://astro.build) (Static Site Generator)
- **Styling:** Custom CSS mit CI-Design-System (CSS Variables)
- **Fonts:** DM Sans, Inter, JetBrains Mono (Google Fonts)
- **Hosting:** Vercel (Free Tier)
- **Content:** Astro Content Collections (Markdown)

## Lokale Entwicklung

```bash
npm install
npm run dev     # Development Server auf http://localhost:4321
npm run build   # Production Build nach ./dist
npm run preview # Production Build lokal testen
```

## Content hinzufügen

### Case Study
Neue Markdown-Datei in `src/content/case-studies/` anlegen:

```markdown
---
title: "Kundenname — Projekttitel"
client: "Kundenname"
segment: "Agentur"
package: "Kontext + Aufbau"
date: 2026-06-01
summary: "Kurzbeschreibung."
draft: false
---

Case Study Inhalt hier.
```

### Blog-Artikel
Neue Markdown-Datei in `src/content/blog/`.

### Testimonials
Eintrag in `src/content/testimonials/testimonials.json` ergänzen.

## Design-System

Alle CI-Farben, Fonts und Spacing-Werte sind als CSS Custom Properties in `src/styles/global.css` definiert. Änderungen an einer Stelle wirken global.
