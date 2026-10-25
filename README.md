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

Site-ul este publicat la **https://alexavolt.ro/irinaungureanu/**, ca parte a
deploy-ului site-ului principal [`alexaraducristian.github.io`](https://github.com/alexaraducristian/alexaraducristian.github.io),
care deține domeniul `alexavolt.ro`. Codul rămâne în acest repo separat.

Cum funcționează:

- Workflow-ul de deploy al repo-ului principal face checkout la acest repo,
  îl construiește și îl plasează sub `/irinaungureanu/` în artefactul GitHub Pages.
- Acest repo **nu se publică singur** (nu are workflow propriu de deploy).

### Cum publici modificările (deploy manual)

Acest repo nu declanșează automat deploy-ul. După ce faci push aici, pornește
manual deploy-ul din repo-ul principal:

**`alexaraducristian.github.io` → Actions → „Deploy to GitHub Pages” → Run workflow**

Workflow-ul principal preia automat ultima versiune din `main`-ul acestui repo,
o construiește și o publică sub `/irinaungureanu/`.

> Setări GitHub Pages:
> - În repo-ul principal: **Settings → Pages → Source = GitHub Actions**, cu
>   domeniul `alexavolt.ro`.
> - În acest repo (`irinaungureanu`): **Source = GitHub Actions** (fără deploy
>   propriu), ca să nu ruleze Jekyll. Fișierul `.nojekyll` previne oricum rularea
>   Jekyll.

### Dezvoltare locală la subcale

`base` este `/irinaungureanu/`, deci în local site-ul este servit la
`http://localhost:4321/irinaungureanu/` (nu la rădăcină).
