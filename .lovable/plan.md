# Add Animations to OIS Machinery Site

Layer subtle, premium motion across the site to reinforce the industrial-premium feel without hurting performance.

## Approach

Use **Framer Motion** (`motion/react`) for scroll/entrance animations and **Tailwind keyframes** (already defined: `fade-in`, `scale-in`, `slide-in-right`) for lightweight CSS-only effects. Respect `prefers-reduced-motion`.

## Animations to add

### 1. Global / shared
- Create `src/components/site/Reveal.tsx` — a reusable `<Reveal>` wrapper using Framer Motion's `whileInView` with fade + slight Y translate (20px → 0), staggered children support.
- Add `prefers-reduced-motion` guard inside Reveal (skip animation, render static).
- Page transition: subtle fade on route change in `__root.tsx` `<Outlet />`.

### 2. Home page (`routes/index.tsx`)
- Hero: headline + subhead + CTAs fade-up with stagger (0.1s delay each); hero image gentle scale-in (1.05 → 1) over 1.2s.
- Stats counters: count-up animation when scrolled into view.
- Featured machines grid: staggered card reveals.
- Industries section: fade-up on scroll.

### 3. Machines / Parts pages
- Card grids: stagger reveal on mount + on filter change.
- `MachineCard` / `PartCard`: hover lift (translateY -4px) + image zoom (scale 1.05) + shadow elevation — pure CSS transitions.

### 4. Machine detail page
- Gallery main image: crossfade when switching thumbnails.
- Spec table rows: subtle stagger fade-in.

### 5. Navbar
- Mobile menu: slide-down with fade (Framer Motion `AnimatePresence`).
- Nav link underline: animated scale-x on hover (use existing `story-link` utility).

### 6. Contact page
- Form fields: fade-up stagger on mount.
- Submit button: subtle press scale (0.97) on tap.

### 7. CTA Section & Footer
- Fade-up on scroll.

## Technical notes
- `framer-motion` package: install via `bun add framer-motion` if not already present.
- Keep all durations 0.3–0.6s, easing `easeOut`.
- All scroll animations use `viewport={{ once: true, margin: "-80px" }}` to trigger slightly before entering view and only once.
- No layout-shifting animations; only transform + opacity for 60fps.
- Bundle impact: ~30kb gzipped for Framer Motion — acceptable for the premium feel.

## Files to create
- `src/components/site/Reveal.tsx`
- `src/components/site/CountUp.tsx` (for stats)

## Files to edit
- `src/routes/__root.tsx` (page transition)
- `src/routes/index.tsx` (hero, stats, sections)
- `src/routes/machines.tsx`, `machines.$slug.tsx`, `parts.tsx`, `contact.tsx`, `about.tsx`
- `src/components/site/Navbar.tsx` (mobile menu)
- `src/components/site/MachineCard.tsx`, `PartCard.tsx` (hover)
- `src/components/site/CTASection.tsx`, `Footer.tsx`
