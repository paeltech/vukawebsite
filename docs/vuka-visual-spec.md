# Vuka website — visual spec (implemented)

**Status:** Canonical for code in `src/`. Overrides older references to **deep-soil** and **ember section backgrounds** in `Vuka Design System/` preview files and early plan docs.

**Also read:** `.cursor/rules/vuka-design-system.mdc` (Tailwind mappings), `src/styles/global.css` (tokens).

---

## 1. Color tokens

| Token | Hex | Tailwind | Use |
|-------|-----|----------|-----|
| ember | `#C4581C` | `ember` | Primary CTAs, accents, logo mark, pull quotes, headline accent words |
| ember-hover | `#A8490F` | `ember-hover` | Primary button hover |
| parchment | `#F5EFE6` | `parchment` | Default page background, inverted text on dark surfaces |
| vuka-black | `#1A1008` | `vuka-black` | **Text** — headings, body, wordmark on light surfaces |
| surface-dark | `#1A1008` | `surface-dark` | **Backgrounds** — footer, dark sections, dark cards, nav overlay |
| baobab | `#8B5A2B` | `baobab` | Muted text, nav links (default), eyebrows on light |
| sand | `#D4C4A8` | `sand` | Borders, secondary body on dark, disabled |
| rift-green | `#2A4A3A` | `rift-green` | Climate tags only |

### Same hex, different roles

`vuka-black` and `surface-dark` are both `#1A1008`:

- **`text-vuka-black`** — foreground on parchment/sand
- **`bg-surface-dark`** — large dark surfaces (never use for body text color semantics in new code)

Hard-coded fallbacks exist in `global.css` (`.site-footer`, `@utility bg-surface-dark`) so dark backgrounds cannot drift.

### Deprecated — do not use in `src/`

| Removed | Was | Replaced by |
|---------|-----|-------------|
| deep-soil | `#3D2B0E` | `surface-dark` / `#1A1008` for all dark backgrounds |
| `bg-deep-soil`, `text-deep-soil` | Tailwind classes | `bg-surface-dark`, `text-vuka-black` |
| `--color-deep-soil` | CSS variable | removed from `@theme` |
| Ember **section** backgrounds | `bg-ember` on `Section bold`, `PageCTA` | `bg-surface-dark` |

**Still valid:** `bg-ember` for **small** accents only — primary buttons, sector tags, FAQ toggle open state, timeline markers. Not for full-width sections.

---

## 2. Surface combinations

| Name | Section variant | Background | Default text | Accent |
|------|-----------------|------------|--------------|--------|
| Default | `default` / `parchment` | parchment | vuka-black | ember |
| Sand band | `sand` | sand | vuka-black | ember |
| Dark | `dark` | surface-dark | parchment | ember |
| Bold (closing) | `bold` | surface-dark | parchment | ember |

`dark` and `bold` are visually identical; `bold` is kept for semantic “closing CTA band” usage (e.g. portfolio footer CTA).

**Do not** use pure `#FFFFFF` or `#000000`. No gradients or background images.

---

## 3. Typography

| Role | Classes | Color (light bg) | Color (dark bg) |
|------|---------|------------------|-----------------|
| Hero / display | `font-heavy text-display leading-none tracking-tight` | `text-vuka-black` | `text-parchment` (`inverted` on PageHeader) |
| Section H2 | `font-heavy text-h2 leading-[0.95] tracking-tight` | `text-vuka-black` | `text-parchment` |
| Accent word in headline | `text-accent` / `text-ember` | ember | ember |
| Body | `text-lg leading-relaxed` | `text-vuka-black` or `text-baobab` | `text-sand` |
| Eyebrow | `font-light text-[11px] uppercase tracking-category` | `text-baobab` | `text-sand` (`inverted` on Eyebrow) |

Article prose: `prose-vuka`, headings `var(--color-vuka-black)`.

---

## 4. Site chrome

### Header (`Header.astro`)

| State | Background | Logo | Nav links |
|-------|------------|------|-----------|
| Top of page | transparent | `logo-default.svg` | baobab → hover vuka-black |
| Scrolled (`data-scrolled="true"`) | **parchment** + light baobab border | `logo-default.svg` (no swap) | baobab → hover vuka-black |

Top padding: `pt-vuka-xl md:pt-vuka-2xl`. Inner bar height: `68px`.

**Do not** revert scrolled nav to dark/surface-dark or swap to parchment logo on scroll.

### Mobile nav

Full-screen overlay: `bg-surface-dark/98`. Parchment wordmark inside.

### Footer (`Footer.astro`)

- Class: `site-footer text-parchment`
- Background: `#1A1008` via `.site-footer` in `global.css`
- Logo: `Wordmark variant="parchment"`
- Links: sand → hover parchment; email: parchment bold
- Top divider: `Divider variant="ember"`

---

## 5. Buttons

| Variant | Use | Styles |
|---------|-----|--------|
| `primary` | Main CTAs on light or dark | `bg-ember text-parchment hover:bg-ember-hover` |
| `secondary` | Outlined actions on light | `border-baobab text-vuka-black`, full outline, no shadow |
| `inverse` | On ember bands (rare) | `bg-surface-dark text-parchment` |
| `ghost` / `text` | Tertiary links | baobab → vuka-black |

On **dark surfaces** (`PageCTA`, dark sections): use **`primary`** (ember), not parchment inverse buttons.

---

## 6. Tags (`Tag.astro`)

| Variant | Background | Text |
|---------|------------|------|
| sector | ember | parchment |
| climate | rift-green | sand |
| programme | surface-dark | parchment |
| vuka-dark | surface-dark | parchment |
| status | sand | baobab |

---

## 7. Cards & utilities

| Utility | Light surface | Dark surface |
|---------|---------------|--------------|
| `vuka-card` | parchment bg, sand border | — |
| `vuka-card-dark` | — | surface-dark bg (`#1A1008`) |
| `icon-well` | parchment/sand mix | — |
| `icon-well-dark` | — | surface-dark bg |

Dark cards on dark sections: use `vuka-card-dark` with parchment/sand text.

**Avoid** semi-transparent dark overlays on light backgrounds (e.g. `bg-surface-dark/40`) — reads as old deep-soil brown. Use borders or solid surface-dark instead.

---

## 8. Key components

### `PageCTA`

- Background: always `bg-surface-dark text-parchment`
- Button: always `variant="primary"` (ember)
- `variant` prop (`ember` \| `dark`) is deprecated; both render the same

### `PageHeader` / `Hero`

- Light: `text-vuka-black` headline, optional `text-accent` span or `TypewriterAccent`
- Dark parent: pass `inverted` for parchment headline + sand subcopy

### `TeamCallout` (home)

- Section wrapper: `variant="parchment"`
- Headline: vuka-black + ember accent word
- CTA: `Button variant="primary"` → `/join-our-team`

### `JoinTeamForm` / `ContactForm`

- Inputs: `bg-parchment border-sand`, focus `border-ember`
- Submit: primary button

---

## 9. Home page section order (`index.astro`)

| # | Section variant | Component | Notes |
|---|-----------------|-----------|-------|
| 1 | default (min-h-dvh) | `Hero` | Transparent header over hero |
| 2 | sand | `ProblemCards` (Why) | Two-column statement + body |
| 3 | parchment | `HomeAudiences` | Sticky left intro + card grid |
| 4 | sand | `HomePathways` | Mirrored layout — timeline left, intro right |
| 5 | parchment | `TeamCallout` | Join team CTA |

**Removed from home** (components may still exist): `CredentialBlock`, `ThesisPromo`, `SectorGrid`, `StudioInvestment`, `PartnershipStack`, `ClosingCTA`.

---

## 10. Routes added

| Route | Purpose |
|-------|---------|
| `/join-our-team` | Team interest form (volunteer, paid, invest, etc.) |
| Home callout CTA | Links to `/join-our-team` |

---

## 11. Logo

- Header: SVG wordmark `logo-default.svg` (cropped viewBox), width-led `w-[7.75rem] md:w-[8.25rem]`
- Footer / dark surfaces: `logo-parchment.svg`
- No text wordmark in header; no scroll-aware logo swap

---

## 12. Change log (summary)

| Date | Change |
|------|--------|
| 2026-06 | Hero: typewriter accent line, secondary CTA outline, stats removed |
| 2026-06 | Header: image logo, extra top padding, scrolled state stays **parchment** |
| 2026-06 | Why/Audiences/Pathways: sand/parchment bands, sticky sidebars, ember pathway numbers |
| 2026-06 | **deep-soil removed** — all dark backgrounds → `surface-dark` (`#1A1008`) |
| 2026-06 | Footer → `site-footer` / `#1A1008` |
| 2026-06 | **Bold sections & PageCTA** — ember backgrounds → `surface-dark` |
| 2026-06 | `TeamCallout` + `/join-our-team` added after pathways |
| 2026-06 | Tag `vuka-dark` + `programme` use `bg-surface-dark` |

---

## 13. Checklist for new UI

- [ ] Dark section? → `Section variant="dark"` or `bg-surface-dark`, text `parchment` / `sand`
- [ ] Heading on light? → `text-vuka-black`, accent `text-ember`
- [ ] Primary action? → `Button variant="primary"` (ember)
- [ ] Secondary action on light? → `Button variant="secondary"`
- [ ] No `deep-soil`, no `bg-ember` for full sections
- [ ] Copy from `docs/vuka-website-copy-complete.md`, not invented
- [ ] Max width `1200px`, section `py-16 md:py-24`
