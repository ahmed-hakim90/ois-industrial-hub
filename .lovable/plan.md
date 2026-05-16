## OIS Machinery — Corporate Website Plan

A modern, responsive B2B website built on the existing TanStack Start + React + Tailwind v4 stack (the project's actual stack — equivalent to "Next.js/React" in spirit, fully SSR + SEO friendly). No e‑commerce, no auth.

### Design System

**Palette (defaulting to Electric Blue accent — strongest fit for "modern industrial tech"):**
- Background: deep navy `oklch(0.18 0.03 250)`
- Surface / charcoal: `oklch(0.24 0.02 250)`
- Steel gray: `oklch(0.62 0.015 250)`
- Foreground: near-white
- Accent (electric blue): `oklch(0.62 0.20 255)`
- Light sections: off-white `oklch(0.98 0.005 250)` with charcoal text

**Typography:**
- Headings: Space Grotesk (industrial, geometric, confident)
- Body: Inter (clean, highly legible at small sizes)
- Loud display sizes on hero/section headers; generous line-height in body.

**Tokens** are defined once in `src/styles.css` (oklch variables + @theme inline mapping). All components consume semantic tokens — no raw hex in JSX.

### Routes (TanStack file-based routing)

```
src/routes/
  __root.tsx          (shell: Navbar + Outlet + Footer + floating WhatsApp)
  index.tsx           /            Home
  about.tsx           /about       About
  machines.tsx        /machines    Machines catalog (with category filter)
  machines.$slug.tsx  /machines/:slug  Machine detail
  parts.tsx           /parts       Auxiliary parts
  contact.tsx         /contact     Contact
```

Each route defines its own `head()` (title, description, og:title, og:description, og:url, canonical on leaf only). Index root holds sitewide Organization JSON-LD.

### Reusable Components (`src/components/`)

- `Navbar.tsx` — sticky, translucent on scroll, logo + nav links + "Request a Quote" button
- `Footer.tsx` — columns: company, quick links, contact, social (Facebook/WhatsApp/Email)
- `FloatingWhatsApp.tsx` — fixed bottom-right, accessible label, hidden in print
- `Hero.tsx` — full-width image background, headline, sub, dual CTA
- `SectionHeader.tsx` — eyebrow + title + optional kicker
- `MachineCard.tsx` — image, name, short desc, View Details / Request Quote / WhatsApp
- `PartCard.tsx` — same skeleton, "Inquire" button
- `SpecTable.tsx` — two-column responsive specs
- `StatCounter.tsx` — static numbers (no animation per spec — keeps things light)
- `IndustryTile.tsx`, `LogoStrip.tsx`, `CTASection.tsx` (final-CTA band)
- `QuoteButton.tsx`, `WhatsAppButton.tsx`, `EmailButton.tsx` — shared CTA primitives so contact details live in ONE place
- `ContactForm.tsx` — Zod-validated (name, company, email, phone, product, message); on submit opens prefilled `mailto:` (no backend needed; user did not request one)

### Data Layer

`src/data/machines.ts` and `src/data/parts.ts` — typed arrays of placeholder content (6+ each), with categories like CNC, Hydraulic Press, Packaging, Material Handling, Welding, Cutting. Each machine has slug, name, category, summary, hero image, gallery, specs[], description blocks. Machine detail page reads by slug. Wrong slug → notFoundComponent.

`src/config/site.ts` — single source of truth for company name, WhatsApp number, email, Facebook URL, address. CTA buttons import from here so updating contact info is one edit.

### Pages — Section Breakdown

**Home** — Hero · Intro strip · Featured Machines (3 cards) · Parts preview (3 cards) · Why Choose OIS (4 value props with icons) · Industries Served (grid of 6) · Partners logo strip · Stats band (years, machines delivered, countries, clients) · Final CTA · Footer.

**About** — Intro, mission/vision two-up, experience timeline (simple list), trust indicators (certifications, quality, support), team-strength callouts.

**Machines** — Category filter chips (client-side filter via `useState`), responsive grid (1/2/3 cols), MachineCard for each item.

**Machine Detail** — Image gallery (main + thumbnails, no carousel lib — pure CSS grid + state), title, summary, SpecTable, technical description prose, Download brochure (placeholder PDF link), Quote/WhatsApp/Email CTA band, Related Machines (same category, excluding self).

**Auxiliary Parts** — Grid of PartCard, intro header, final CTA section.

**Contact** — Two-column on desktop: form (left), contact info + map placeholder + social (right). Stacks on mobile. Sticky "Quote" CTA visible on mobile.

### Global Features

- Floating WhatsApp button on every page via `__root.tsx`.
- Request Quote CTA appears in: navbar, hero, every machine card, every detail page, final CTA band, footer.
- All external links: `rel="noopener"`, WhatsApp uses `https://wa.me/<number>?text=...`, email uses `mailto:` with prefilled subject when contextual (e.g. "Quotation request: <Machine Name>").
- Defaults until user provides real info: WhatsApp `+20XXXXXXXXXX`, email `info@oismachinery.com`, Facebook `https://facebook.com/oismachinery`. Centralized in `site.ts` so they can be swapped in one place.

### Responsive Strategy

Tailwind breakpoints: mobile-first, then `md` (768), `lg` (1024), `xl` (1280), `2xl` (1536). Container max-width 1440. Grids: 1 col mobile → 2 col tablet → 3 col desktop. Typography uses `clamp()` for fluid hero sizes. Images use `loading="lazy"` (except hero), explicit width/height to prevent CLS, `object-cover` with aspect-ratio.

### Performance

- No carousel/animation libraries.
- Generate hero + a couple of machine placeholder images via imagegen (industrial photography style); the rest reuse a small set.
- Lazy-load below-the-fold images.
- No icon libraries beyond `lucide-react` (already in project).

### SEO

- Per-route `head()` with unique title/description/og.
- Single H1 per page.
- Organization JSON-LD in `__root.tsx`; Product JSON-LD on each machine detail page using loader data.
- Semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`), alt text on all images.

### Out of Scope (per spec)

No cart, checkout, accounts, payments, backend, CMS, or Cloud activation. Form submits via `mailto:` — if user later wants real submission, we can add a server function + Cloud.

### Build Order

1. Tokens + typography in `src/styles.css`; `site.ts` config; data files.
2. Shared primitives (buttons, cards, section header) + Navbar + Footer + FloatingWhatsApp in `__root.tsx`.
3. Generate ~4 hero/industrial images.
4. Home page.
5. Machines list + filter, Machine detail with related.
6. Parts page.
7. About page.
8. Contact page + form validation.
9. Per-route `head()` metadata pass + JSON-LD.
10. Responsive QA at 1440/1280/1024/768/430/390.
