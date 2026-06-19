# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
node_modules/.bin/next dev --port 3001   # dev server (use 3001 to avoid conflicts)
node_modules/.bin/next build             # production build — run before every deploy
git push origin main                     # triggers auto-deploy to Vercel (all 3 domains)
```

No test suite. A PostToolUse hook (`.claude/settings.json` in the parent project) runs `tsc --noEmit` after every `.ts`/`.tsx` edit.

## Deploying

Push to `main` → Vercel auto-builds and deploys to `www.fundacionbelong.co / .org / .com`. No manual `vercel --prod` needed. If the live site stops reflecting pushes, check `link.sourceless` on the Vercel project — this flag has silently disabled auto-deploy before (fix: unlink + relink via API).

Vercel credentials are in `.env.vercel` (`VERCEL_TOKEN`, `VERCEL_PROJECT_ID`, `VERCEL_ORG_ID`).

## Stack

Next.js 16.2.6 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion. `output: 'export'` + `trailingSlash: true` in `next.config.ts` — static export, no server-side runtime.

## Architecture

```
src/app/
  layout.tsx          ← root metadata (OG, Twitter Card, JSON-LD schema NGO), lang="es"
  page.tsx            ← homepage: HeroSection + QueEsBelong + Datos + SobrePamela + Mision + Valores + Cta
  not-found.tsx       ← branded 404
  [route]/page.tsx    ← one file per page, each exports its own `metadata`
  components/         ← all sections live here
```

**Active pages:** `/` `/nosotros` `/servicios` `/contacto` `/pamela` `/charlas` `/comunidad` `/conocimiento` `/impacto`

**The only nav that matters: `Layout.tsx`.** All 9 pages import it. The nav items are `/conocimiento /charlas /servicios /comunidad /impacto` + "Contacto" button → `/contacto`.

**Dead components — do not use or reference:**
`Navigation.tsx`, `MainNavigation.tsx`, `StickyNav.tsx`, `FooterSection.tsx` — zero imports anywhere. They have stale anchor links (`#hero`, `#educacion`) that don't match current page structure.

**Orphaned pages:** `/nosotros` and `/pamela` render correctly but are not linked from the nav or footer — only reachable via direct URL or sitemap.

## Design conventions

- **Colors** (Tailwind CSS 4 `@theme`): `charcoal` (#1a1a1a), `gold` (#c0941a), `rosewood` (#c18e98), `stone` (#57534e). All backgrounds are white — `bg-cream`, `bg-soft-cream`, `bg-soft-rose`, `bg-pale-rosewood` all resolve to `#ffffff`.
- **No emojis as UI elements.** Use SVG icons (Heroicons stroke style: `strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}`). Emojis have been removed from Impacto, Comunidad, and Servicios sections.
- **Images:** Unsplash CDN with fixed photo IDs and crop params (`?w=600&h=400&fit=crop&auto=format&q=80`). Never use random/keyword Unsplash URLs — they change on every load. Profile photos (`pamela-lopez.jpg`, `martha-cano.jpg`) live in `public/`.
- **Fonts:** Inter (body), Playfair Display (headings/serif), Poppins (UI). Google Fonts import must come *before* `@import "tailwindcss"` in `globals.css` (CSS spec: `@import` before all rules).

## Content rules

- **No fabricated data.** Never add member counts, event frequencies, or testimonials attributed to named people unless they are real and verified. The `/comunidad` page was corrected for this on 2026-06-16 (commit f78d7a6).
- **All CTAs go to mailto.** Buttons like "Escríbenos", "Quiero ser mentora", "Llevemos Raíces a mi institución" use `mailto:fundacionbelong@gmail.com?subject=...` with URL-encoded subjects. No dead `href="#"` links.
- **No "causa bandera"** wording — removed from Programa Raíces section.

## PDF assets in `public/`

| File | Content |
|------|---------|
| `ladies-first-belong.pdf` | Artículo "Ladies First" — Pamela López, Fundación Belong |
| `brecha-de-genero-colombia.pdf` | Brecha de género en Colombia — DANE / ONU Mujeres (11MB) |

External PDFs served by their official sources (direct download URLs):
- Women in the Workplace 2025 — McKinsey/LeanIn S3
- Gender Snapshot ODS 2025 — ONU Mujeres
- Global Gender Gap Report 2025 — WEF
- Cerrando Brechas — ANDI

## SEO

`layout.tsx` exports full `Metadata` with `metadataBase`, OG, Twitter Card, JSON-LD NGO schema. Every subpage exports its own `metadata` with `title` and `canonical`. `public/robots.txt` and `public/sitemap.xml` cover all 9 routes.

## Change log protocol

Both Claude and Alfred log changes to the memory file at:
`~/.claude/projects/-Users-santiagonoriegaardila-Projects-mission-control/memory/project_belong.md`
