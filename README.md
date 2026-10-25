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

Site-ul este publicat pe subdomeniul propriu
**https://psihoterapie.alexavolt.ro/**. Repo-ul se construiește și se publică
singur pe GitHub Pages, la fel ca `coolpvt.alexavolt.ro`.

Cum funcționează:

- La fiecare push pe `main`, workflow-ul `.github/workflows/deploy.yml`
  construiește site-ul cu acțiunea oficială `withastro/action` și îl publică
  pe GitHub Pages.
- Fișierul `public/CNAME` atașează subdomeniul `psihoterapie.alexavolt.ro`
  acestui repo.

### Configurare (o singură dată)

1. **DNS** (la registrarul domeniului `alexavolt.ro`): adaugă un record
   `CNAME` pentru `psihoterapie` către `alexaraducristian.github.io`.
2. **GitHub** (acest repo): **Settings → Pages → Source = GitHub Actions**;
   la **Custom domain** pune `psihoterapie.alexavolt.ro`.

### Dezvoltare locală

`base` este `/`, deci în local site-ul este servit la
`http://localhost:4321/`.
