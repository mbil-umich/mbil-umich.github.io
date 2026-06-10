# MBIL Website

Website for the **Musculoskeletal Biomechanics & Imaging Laboratory (MBIL)** —
School of Kinesiology, University of Michigan. PI: **David B. Lipps, Ph.D.**,
Associate Professor of Movement Science.

The lab studies how tissue structure shapes shoulder function, with a focus on
upper-extremity morbidity in **breast cancer survivors** (after surgery and
radiation), using **ultrasound shear-wave elastography**, experimental
biomechanics, radiation dosimetry, and **wearable sensors**.

## Stack

- **Astro 5** (static output) + **Tailwind CSS v4** (CSS-first, via the
  `@tailwindcss/vite` plugin — there is no `tailwind.config.js`).
- TypeScript (strict). No UI framework — plain `.astro` components.

## Commands

- `npm run dev` — dev server at http://localhost:4321
- `npm run build` — static build to `dist/`
- `npm run check` — Astro type check

**Dev-server gotcha:** running `npm run build` while `astro dev` is live corrupts
the dev server's state (it starts looking for assets in `dist/` and returns 500s).
After any build, restart dev: `pkill -f "astro dev"` then `npm run dev`.

## Design system

`src/styles/global.css` is the **single source of truth** for the visual language.
The Tailwind `@theme` block there defines all design tokens; edit colors/fonts
there, not inline.

- **Colors:** UMich Blue (`--color-primary` `#00274c`) is the workhorse. Maize
  (`--color-maize` `#ffcb05`) is an **accent only** (rules, focus, hero
  highlights) — it never passes WCAG AA as text on light, so never use it for
  body copy. Background is a cool "slate" canvas; text is high-contrast charcoal.
  All text colors meet **WCAG AA** (ratios documented inline in the CSS).
- **Type:** Inter (body) + Playfair Display (serif headings), loaded in
  `BaseLayout.astro`. Headings default to serif via base styles.
- **Component utilities** (in `@layer components`): `.container-page`,
  `.btn-primary`, `.btn-outline`, `.card`, `.accent-rule`.
- Keep it academic and restrained — no flashy gradients.

## Structure

- `src/config/site.ts` — **central data**: lab metadata, PI details (ORCID,
  Scholar `5Kh3z8gAAAAJ`, PubMed), nav links, footer affiliation links. Edit
  shared facts here.
- `src/layouts/BaseLayout.astro` — document head, fonts, skip link, nav, footer.
- `src/components/` — `Navbar`, `Footer`, `PageHeader`, `SectionHeading`,
  `Avatar` (photo w/ initials fallback), `Figure` (captioned CC-BY image).
- `src/pages/` — `index` (home), `research`, `people`, `publications`, `contact`.
- `public/logos/` — `mbil-logo.png` (light bg), `kines-vertical-white.png`
  (dark bg / hero), `kines-horizontal.png` (footer).
- `public/images/` — research figures + `people/` headshots (358×444 webp).

## Content sources

- **Source of truth for lab content** is the PI's CV:
  `/Users/dlipps/Documents/CV/Lipps CV April 2026.docx`. Research themes, funding,
  publications, and alumni were derived from it.
- People page: 10 current members are hardcoded in `src/pages/people.astro`.
  Headshots exist for Lipps, Lynch, Alkayyali; others use initials avatars.

## Image licensing (important)

Research figures must be **open-access (CC-BY)** or owned by the lab. Currently
used (both CC-BY 4.0, credited in-page via `Figure.astro`):
- `kirigami-shoulder-patch.jpg` — Alkayyali et al., *Wearable Technologies* 2024
  (PMC11729485), doi:10.1017/wtc.2024.20
- `swe-pectoralis-maps.jpg` — Lipps et al., *Scientific Reports* 2019
  (PMC6882786), doi:10.1038/s41598-019-54100-6

Do **not** reuse figures marked "reprinted with permission" even from an
otherwise-CC-BY article (e.g. Fig 5 of the Sci Rep paper is Springer-copyrighted).
PMC is the reliable source for downloadable CC-BY figure files; find PMC IDs via
the NCBI E-utilities `esearch` API.

## Known placeholders / TODO

- Lab email (`dlipps@umich.edu`) and phone in `site.ts` — confirm a lab-specific
  address if one exists.
- Footer affiliation URLs are best-guess; verify.
- Most members lack headshots and bios; publications list is a curated subset.
- No real lab street address/room beyond the School of Kinesiology building.
