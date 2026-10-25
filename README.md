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

1. La fiecare push pe `main`, workflow-ul `.github/workflows/trigger-main-deploy.yml`
   trimite un `repository_dispatch` către repo-ul principal.
2. Workflow-ul de deploy al repo-ului principal face checkout la acest repo,
   îl construiește și îl plasează sub `/irinaungureanu/` în artefactul GitHub Pages.

### Configurare (o singură dată)

Workflow-ul de trigger are nevoie de un token pentru a notifica repo-ul principal:

1. Creează un **Fine-grained Personal Access Token** cu acces la repo-ul
   `alexaraducristian/alexaraducristian.github.io`, permisiunea
   **Contents: Read and write** (necesară pentru `repository_dispatch`).
2. În acest repo: **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `MAIN_SITE_DISPATCH_TOKEN`
   - Value: token-ul generat.

> Dacă secretul lipsește, workflow-ul de trigger va eșua cu un mesaj explicit.
> Poți oricând porni manual deploy-ul din repo-ul principal
> (**Actions → Deploy to GitHub Pages → Run workflow**).

### Dezvoltare locală la subcale

`base` este `/irinaungureanu/`, deci în local site-ul este servit la
`http://localhost:4321/irinaungureanu/` (nu la rădăcină).
