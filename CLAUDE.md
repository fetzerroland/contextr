# contextr.de -- Projekt-Kontext

## Projekt
Marketing-Website fuer contextr.de (KI-Beratung fuer kleine Teams).
Astro 4 Static Site, deployed auf Vercel.

## Befehle
- `cd contextr-website && npm run build` -- Build pruefen (IMMER nach Aenderungen ausfuehren)
- `cd contextr-website && npm run dev` -- Dev-Server starten
- `cd contextr-website && npm run preview` -- Production-Preview

## Projektstruktur
```
contextr-website/
  src/
    pages/         -- Astro-Seiten (index, schnellcheck, datenschutz, impressum)
    layouts/       -- Base.astro Layout
    content/       -- Astro Content Collections (case-studies, blog, testimonials)
    styles/        -- global.css mit Design System
  public/          -- Statische Assets (Logos, Mockups, OG-Image)
  vercel.json      -- Security Headers
```

## Sprache & Ton
- Website-Inhalte auf Deutsch
- Markenstimme: praezise, kompetent, ruhig -- keine Buzzwords, kein Hype
- "contextr" immer kleingeschrieben, mit Punkt am Ende: "contextr."
- Zielgruppe: kleine Teams (5-50 Mitarbeitende), die KI sinnvoll einsetzen wollen

## Design System
- CSS Custom Properties in `src/styles/global.css`
- Farben: cream (#EDE9E3), charcoal (#2D2D2D), deep-teal (#2A5C5A), amber-sand (#C4956A)
- Fonts: DM Sans (Headlines), Inter (Body), JetBrains Mono (Mono/Code)
- Spacing: xs/sm/md/lg/xl/2xl/section Skala
- Border-radius: 3px (Buttons/Cards), nie abgerundet
- Keine externen CSS-Frameworks, alles Custom CSS

## Content Collections
- Case Studies: title, client, segment, package (Kontext-Analyse | Kontext + Aufbau | Vollsystem), date, summary
- Blog: title, description, date, tags, draft
- Testimonials: name, role, company, quote, package, date (JSON)

## Wichtig
- KEIN Tailwind, Bootstrap oder aehnliches -- nur eigenes CSS
- ES Modules Syntax (import/export)
- Keine neuen Dependencies ohne Rueckfrage
- Astro-Komponenten bevorzugt (.astro), kein React/Vue/Svelte
