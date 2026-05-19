# Sentinel Protective Group

A cinematic landing site for **Sentinel Protective Group** — a London-based
executive-protection and private-security firm.

## Generation fingerprint

| Field | Value |
|---|---|
| Archetype | **G** — Structured Hybrid (premium tier) |
| Style | **S2** — Luxury Dark (elite · tactical · high-contrast) |
| Hero | **T1** — 8s cinematic Veo video loop |
| Header | `glass-plasma` capsule (rotating gold/steel scanner ring) |
| Cards | **CV6** — Brutalist (dark-remapped, gold hard-offset shadow) |
| Hero overlay | **HO1** — centered (institutional authority) |
| Palette | near-black backgrounds · elite-gold `#C9A24B` · tactical-steel |
| Build mode | **Landing** (public site only — no admin layer) |
| Asset mode | **live-generate** (Nano Banana keyframes → Veo 3.1 loop) |

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS 3 · framer-motion 12
- Cinematic assets generated via Gemini (Nano Banana images + Veo video),
  hosted on Supabase Storage CDN — see `content/asset-manifest.json`.

## Pages

`/` home · `/services` · `/services/[slug]` (7 capabilities) · `/about`
· `/contact` (form + map) · `/privacy` · `/terms` · `robots.txt` · `sitemap.xml`

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # next build --debug-prerender
npm run start
```

## Regenerating cinematic assets

```bash
npm run gen:images   # Nano Banana keyframes + section/service stills
npm run gen:videos   # Veo 3.1 hero loop
```

Both upload to Supabase Storage and update `content/asset-manifest.json`,
which `content/site-config.ts` reads at build time.

## Contact form

`POST /api/contact` validates submissions and acknowledges receipt. Landing
mode ships without a database — wire an email provider or CRM in the route
handler when upgrading to fullstack.
