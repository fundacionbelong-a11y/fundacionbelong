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

Vercel credentials are in `.env.vercel` (`VERCEL_TOKEN`, `VERCEL_PROJECT_ID`, `VERCEL_ORG_ID`) — the token can read/write env vars and read deploys via the REST API, but **cannot create Storage/databases** (that needs the dashboard). The correct project is **`fundacionbelong`** (`prj_LEa6...`, has the real domains); `belong-coming-soon` is an orphan project on the same repo with no real domains — ignore it.

## Stack

Next.js 16.2.6 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Auth.js v5 · Postgres (`pg`). `trailingSlash: true` in `next.config.ts`. **NOT a static export anymore** — `output: 'export'` was removed on 2026-06-23 when auth was added; the site now runs full-stack on Vercel's Node runtime (API routes, server components, middleware, DB). Don't re-add `output: 'export'` — it breaks auth and the API routes.

For local dev with auth, use **port 3001** (`node_modules/.bin/next dev --port 3001`) — the Google OAuth redirect URI `http://localhost:3001/api/auth/callback/google` is registered for that port. Pull env vars first: create `.env.local` from `.env.local.example` (or `vercel env pull`).

## Architecture

```
src/app/
  layout.tsx          ← root metadata (OG, Twitter Card, JSON-LD schema NGO), lang="es"
  page.tsx            ← homepage: HeroSection + QueEsBelong + Datos + SobrePamela + Mision + Valores + Cta
  not-found.tsx       ← branded 404
  [route]/page.tsx    ← one file per page, each exports its own `metadata`
  components/         ← all sections live here
```

**Active pages:** `/` `/nosotros` `/servicios` `/contacto` `/pamela` `/charlas` `/comunidad` `/conocimiento` `/conocimiento/blog/ladies-first` `/impacto` `/entrar` (login/registro) `/members` (zona privada) `/members/admin` (panel solo-admin)

**API routes** (`src/app/api/`): `auth/[...nextauth]` · `auth/register` · `contact` · `newsletter`. Keep them thin; DB access via `@/lib/db` (a shared `pg` Pool). All POST routes follow the same guard pattern: (1) `try { body = await req.json() } catch { return 400 }`, (2) `EMAIL_RE` check on any email field, (3) truthy check on required fields. The `register` route additionally wraps its INSERT in try/catch and converts pg error code `23505` (unique_violation) to a 409 instead of letting it propagate as a 500.

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
- **CTAs go to mailto OR to the DB.** Most action buttons ("Quiero ser mentora", etc.) use `mailto:fundacionbelong@gmail.com?subject=...` with URL-encoded subjects. The **contact form and newsletter signups now POST to the database** (see Auth & data below) — don't revert those to mailto. No dead `href="#"` links.
- **No "causa bandera"** wording — removed from Programa Raíces section.

## Auth, members area & data (added 2026-06-23/24)

**Auth.js v5** (`next-auth@beta`) with two providers: Google OAuth + Credentials (email/password, bcrypt). Sessions are **JWT** (`strategy: "jwt"`).

- **`callbackUrl` must always be sanitized before use in `router.push()`.** Auth.js validates it for the Google OAuth path, but NOT for credentials login or registration. In `entrar/page.tsx` the value is restricted to relative paths: `const callbackUrl = raw.startsWith('/') ? raw : '/members'`. Never pass a raw query-param value directly to `router.push()` — it enables open redirects.
- **Split config is mandatory.** `src/auth.config.ts` is edge-safe (Google + callbacks + `trustHost: true`, NO `pg`/`bcrypt`) and is what `src/middleware.ts` imports. `src/auth.ts` extends it with `PostgresAdapter` + the Credentials provider (bcrypt). **If you import `pg`/`bcrypt` into middleware, the Vercel deploy fails** with `node:util/types unsupported in Edge`.
- **`AUTH_URL=https://www.fundacionbelong.co` is critical.** The site has 3 domains (.co/.org/.com); without a pinned `AUTH_URL`, OAuth from .org/.com builds a redirect_uri Google doesn't recognize → `redirect_uri_mismatch`. Keep it set.
- **Admin role checks query by `email`, not `session.user.id`** — the JWT doesn't reliably carry `id` for Google sign-ins. `/members` and `/members/admin` both do `SELECT role FROM users WHERE email = $1`.
- `/members/*` is gated by middleware (any logged-in user). `/members/admin` additionally redirects non-admins (`role !== 'admin'`) to `/members`. Promote an admin with `UPDATE users SET role='admin' WHERE email='...'`.

**Database: Prisma Postgres** (`db.prisma.io`, NOT Vercel Postgres). Schema in `db/schema.sql` — run once with the init pattern. Tables: `users` (has `role` default `'member'`, `password` nullable), `accounts` (**must have an `id SERIAL` column** — `@auth/pg-adapter`'s `linkAccount` does `RETURNING id`; without it OAuth sign-in orphans the user → `OAuthAccountNotLinked`), `sessions`, `verification_tokens`, `contact_messages`, `newsletter_subscribers`. All DB access goes through `src/lib/db.ts` (a `pg` Pool). Run SQL/migrations with a throwaway `.mjs` script run from the project dir (`node x.mjs`) so it resolves `pg` from local `node_modules`; there is no `psql` on this machine.

**Contact form & newsletter** save to the DB and surface in the admin panel:
- `ContactForm.tsx` → `POST /api/contact` → `contact_messages`.
- `NewsletterForm.tsx` (variants `dark`/`light`) → `POST /api/newsletter` → `newsletter_subscribers` (idempotent via `ON CONFLICT DO NOTHING`). Used in `ContactSection` and `ComunidadSection`.
- Each row records a `source` string (which form/page it came from).
- **Email notifications:** `src/lib/email.ts` sends a Resend notification to `fundacionbelong@gmail.com` on each contact submit. It's a **safe no-op without `RESEND_API_KEY`** and never throws — the DB write is the source of truth. Default sender `onboarding@resend.dev` (only delivers to the Resend account owner until a domain is verified).

**CSV export pattern** (`AdminDashboard.tsx`, `AdminUsersClient.tsx`): always `document.body.appendChild(a)` before `a.click()` and `document.body.removeChild(a)` after — Firefox silently drops downloads from detached anchors. Use `String(s ?? '')` (not `String(s)`) in the CSV escape function so null fields become empty cells rather than the literal string `"null"`.

**`/members/admin`** is a server component (`force-dynamic`) that fetches users + messages + subscribers and renders `AdminDashboard.tsx` (tabs: Usuarios · Mensajes · Suscriptores, each with search/CSV export). `AdminUsersClient.tsx` is the users table.

**Environment variables** (set in Vercel via the API with the token in `.env.vercel`): `AUTH_SECRET`, `AUTH_URL`, `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`, `POSTGRES_URL` (+ `DATABASE_URL`/`PRISMA_DATABASE_URL` from the Prisma integration), `RESEND_API_KEY`. See `.env.local.example`. Changing an env var requires a redeploy (push an empty commit) to take effect.

## PDF assets in `public/`

| File | Content |
|------|---------|
| `ladies-first-belong.pdf` | Artículo "Ladies First" — Pamela López & Martha Cano. Also published as an HTML blog post at `/conocimiento/blog/ladies-first` (better for SEO); the resource card links to the post, not the PDF. |
| `brecha-de-genero-colombia.pdf` | "Explorando las brechas de género en Colombia" — María Teresa Ramírez-Giraldo (coord.), **Banco de la República** (ESPE núm. 111, 2026), 11MB |

External PDFs served by their official sources (direct download URLs):
- Women in the Workplace 2025 — McKinsey/LeanIn S3
- Gender Snapshot ODS 2025 — ONU Mujeres
- Global Gender Gap Report 2025 — WEF
- Cerrando Brechas — ANDI

## SEO

`layout.tsx` exports full `Metadata` with `metadataBase`, OG, Twitter Card, JSON-LD NGO schema. Every public subpage exports its own `metadata` with `title` and `canonical`. The blog post also emits an `Article` JSON-LD schema. `public/robots.txt` and `public/sitemap.xml` cover the public routes (incl. the blog post). `/members*` pages set `robots: { index: false }` — keep auth-gated pages out of the index.

## Change log protocol

Both Claude and Alfred log changes to the memory file at:
`~/.claude/projects/-Users-santiagonoriegaardila-Projects-mission-control/memory/project_belong.md`
