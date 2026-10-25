# Psihoterapeut Corina Ungureanu

Site de prezentare pentru cabinetul de psihoterapie al Corinei Ungureanu (Iași & online), construit cu [Astro](https://astro.build) și Tailwind CSS v4.

Este o recreare modernă a site-ului original [psihoterapeutcorinaungureanu.ro](https://www.psihoterapeutcorinaungureanu.ro), păstrând structura (meniu, pagini, texte, articole) și reimaginând designul într-o paletă caldă, calmă, potrivită unui site de psihoterapie.

## Structură

- **Acasă** — hero, arii de lucru, servicii, valori
- **Despre mine** — experiență, formare profesională, atestare
- **Abordarea mea** — cadrul terapeutic și cum lucrez
- **Servicii** — terapie individuală, de cuplu, de familie, online
- **Blog** — articole despre emoții, relații și vindecare
- **Contact** — telefon, WhatsApp, email, formular

## Dezvoltare

```bash
npm install --legacy-peer-deps
npm run dev      # server local
npm run build    # build de producție în ./dist
npm run preview  # previzualizare build
```

## Tehnologii

- Astro 6
- Tailwind CSS v4 (`@tailwindcss/vite`)
- `@astrojs/sitemap` pentru sitemap automat
- Fonturi: Cormorant Garamond (titluri) + Nunito Sans (text)

## De completat

În `src/data/site.ts` sunt valori-placeholder marcate cu `TODO` (telefon, email, WhatsApp) care trebuie înlocuite cu datele reale de contact.

## Deploy

Deploy automat pe GitHub Pages prin workflow-ul din `.github/workflows/deploy.yml` la fiecare push pe `main`.
