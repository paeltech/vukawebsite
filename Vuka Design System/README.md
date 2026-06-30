# Vuka Design System

**Vuka Venture Studio** — an East African venture studio that builds technology companies with founders, not for them. Vuka removes infrastructure barriers across the region, working at the intersection of capital, technology, and the operators building the next generation of East African companies.

*The name is from Zulu/Xhosa — a command: "wake up", "rise", "move". The brand carries that energy.*

## Sources

This design system was assembled from the following materials provided by Paul Mandele (paulmandele.co):

| Source | Format | Status |
|---|---|---|
| `uploads/vuka-brand-direction.md` | Markdown brand doc | ✅ Accessed |
| `uploads/1.svg` – `uploads/7.svg` | Logo/mark SVGs | ✅ Accessed |
| `uploads/CodecPro-*.ttf` | Full Codec Pro font family | ✅ Accessed |

No codebase, Figma link, or GitHub repository was provided. The design system is built from brand documentation and visual assets only.

---

## Content Fundamentals

### Voice & Tone
Vuka writes with the precision of a studio and the directness of a founder. Copy is:
- **Direct and declarative** — not hedge-y, not corporate. "We build companies with founders, not for them."
- **Warm but serious** — never cold, never playful for its own sake. This isn't consumer tech.
- **Minimal** — shorter is almost always better. One strong sentence beats three qualifying ones.
- **Confident without arrogance** — authority comes from specificity, not from claiming to be the best.

### Specific conventions
- **Brand name**: always lowercase — **vuka**, never Vuka in body copy (though title case is acceptable in formal/legal contexts)
- **The wordmark period**: the full-stop in `vuka.` is set in Ember. It signals: the name is an instruction. A sentence. This device carries weight in design.
- **"I" vs "You"**: Studio voice speaks in "we" (the team) and "you" (founders). Not impersonal third-person.
- **Emoji**: never. The brand's restraint is one of its core assets.
- **Capitalisation**: sentence case throughout — not Title Case for every heading. Reserve ALL CAPS for category labels only, set in Codec Pro Light with wide tracking.
- **Numbers**: use numerals (20 founders, 3 years) not written out, for impact.
- **Punctuation**: em-dashes (—) over parentheses. Oxford comma. No exclamation marks.

### Sample copy cadences
> "We identify founders at the earliest stages and build alongside them — not as advisors, but as co-builders."

> "East Africa is not an emerging market. It is a structurally different operating environment that requires structurally different capital."

> "The infrastructure was never supposed to be the barrier. We remove it."

---

## Visual Foundations

### Colour System

| Token | Name | Hex | Role |
|---|---|---|---|
| `--ember` | Vuka Ember | `#C4581C` | Primary accent · CTAs · Logo mark · Pull quotes |
| `--parchment` | Vuka Parchment | `#F5EFE6` | Primary background · Canvas |
| `--vuka-black` | Vuka Black | `#1A1008` | Wordmark · Body text · All headings |
| `--deep-soil` | Vuka Deep Soil | `#3D2B0E` | Dark backgrounds · Pitch deck slides |
| `--baobab` | Vuka Baobab | `#8B5A2B` | Mid-tone accent · Charts · Supporting UI |
| `--sand` | Vuka Sand | `#D4C4A8` | Muted fills · Disabled states · Subtle borders |
| `--rift-green` | Vuka Rift Green | `#2A4A3A` | Climate & energy sector · Secondary data series |

**Never use pure white (`#FFFFFF`) or pure black (`#000000`).** Parchment is the white. Vuka Black is the black.

### The Three Core Combinations
1. **Default** — Parchment bg / Black text / Ember accent (all digital + print)
2. **Bold / Statement** — Ember bg / Parchment text (social headers, campaign materials)
3. **Dark / Prestige** — Deep Soil bg / Parchment text / Ember accent (pitch decks, DFI presentations)

### Typography
Single-family system: **Codec Pro** (full weight range supplied, 21 fonts).
Codec Pro is geometric sans-serif — modern without cold, structured without rigid.

| Role | Weight | Tracking | Size |
|---|---|---|---|
| Hero headings / Wordmark | ExtraBold / Heavy | `-0.02em` to `-0.04em` | Display |
| Subheadings / Pull quotes | Bold | Default | — |
| Body copy | Regular | Default | 16–18px / 10–11pt |
| Labels / Metadata | Light / Thin | `+0.12em` to `+0.18em` | Small |
| ALL CAPS category labels | Light | `+0.14em` to `+0.18em` | 11–12px |

- Wordmark: always lowercase **vuka**, set in Codec Pro Heavy
- Body line-height: 1.65–1.75 (breathes against Parchment)
- Italic: reserved for editorial emphasis in long-form only, never default
- **Do not mix with other typefaces.** Single-family system.

### Backgrounds & Surfaces
- **Default canvas**: Parchment (`#F5EFE6`) — warm, aged, not clinical
- **Dark sections**: Deep Soil (`#3D2B0E`) — warm dark, not navy or charcoal
- **Bold hero/campaign**: Ember (`#C4581C`) full-bleed
- No gradients. Palette coherence is built from solid colours.
- No background images, textures, or patterns established in brand docs — the type and colour system carries everything.

### Spacing & Layout
- Generous whitespace — the Parchment background requires breathing room
- Fixed elements and full-bleed section dividers are the primary layout device
- Content is left-aligned or centred; no complex grid gymnastics

### Borders & Cards
- Subtle borders use Sand (`#D4C4A8`) — never strong outlines
- Card surfaces: Parchment or white-adjacent fills, minimal shadow
- Corner radii: not specified — keep minimal/sharp for the studio's precision aesthetic (2–4px max, or 0px)

### Shadows & Elevation
- Shadow system not explicitly defined; infer: minimal, warm-toned (slight sepia tint), used sparingly
- Prefer surface colour distinction over shadow for depth

### Animation & Interaction
- Not defined in brand docs; infer from the brand's restraint: subtle fades, no bounces, short durations (150–250ms), ease-out
- Hover states: slight darkening of ember, opacity reduction on secondary elements
- Press states: slight scale (0.97) + darker colour

### Iconography — see ICONOGRAPHY section below

### Data Visualisation
Colour hierarchy for chart series:
1. Ember `#C4581C` — primary series
2. Baobab `#8B5A2B` — secondary series
3. Rift Green `#2A4A3A` — climate/specific series
4. Sand `#D4C4A8` — baseline/comparison

### Tags, Badges, Programme Labels
- Sector tags: Ember fill / Parchment text; Rift Green fill / Sand text
- Programme badges: Black fill / Parchment text — set in Codec Pro Light
- Status indicators: Sand fill / Baobab text

---

## Iconography

No icon system is specified in the provided brand materials. Vuka's visual identity is typography-led; the brand relies on type, colour, and the logomark rather than an icon library.

**Approach for designed artifacts:**
- Use the Vuka logo mark SVGs (`assets/mark-ember.svg`, etc.) as the primary graphical element
- For UI icons (nav, actions, status), use **Lucide Icons** from CDN — stroke-based, 1.5px weight, clean geometric style consistent with Codec Pro's character. Load via: `https://unpkg.com/lucide@latest`
- Never use emoji as icons
- Never use filled/bubbly icon styles (e.g. Font Awesome solid)

**Assets available:**

| File | Description |
|---|---|
| `assets/logo-default.svg` | Full lockup — Ember mark + Black wordmark |
| `assets/wordmark-black.svg` | Wordmark only — "vuka." Black + Ember period |
| `assets/logo-baobab.svg` | Full lockup — Baobab mark + Black wordmark |
| `assets/logo-parchment.svg` | Full lockup — all Parchment (for dark backgrounds) |
| `assets/mark-ember.svg` | Mark only — Ember (#C4581C) |
| `assets/mark-riftgreen.svg` | Mark only — Rift Green (#2A4A3A) |
| `assets/mark-sand.svg` | Mark only — Sand (#D4C4A8) |

---

## File Index

```
README.md                       ← This file
SKILL.md                        ← Agent skill descriptor
colors_and_type.css             ← CSS custom properties: colours, type, spacing

fonts/
  CodecPro-Thin.ttf
  CodecPro-Light.ttf
  CodecPro-Regular.ttf
  CodecPro-Bold.ttf
  CodecPro-ExtraBold.ttf
  CodecPro-Heavy.ttf
  CodecPro-Fat.ttf
  CodecPro-Ultra.ttf
  CodecPro-UltraBlack.ttf
  ... (+ italic variants for each weight)

assets/
  logo-default.svg              ← Full lockup, default (Ember + Black)
  wordmark-black.svg            ← Wordmark only
  logo-baobab.svg               ← Full lockup, Baobab variant
  logo-parchment.svg            ← Full lockup, Parchment (for dark bg)
  mark-ember.svg                ← Logo mark only, Ember
  mark-riftgreen.svg            ← Logo mark only, Rift Green
  mark-sand.svg                 ← Logo mark only, Sand

preview/
  colors-primary.html           ← Primary colour swatches
  colors-secondary.html         ← Secondary colour swatches
  colors-semantic.html          ← Semantic colour combinations
  colors-data.html              ← Data visualisation palette
  type-scale.html               ← Typography scale specimen
  type-weights.html             ← Codec Pro weight range
  type-components.html          ← Body, labels, ALL CAPS specimens
  spacing-tokens.html           ← Spacing + radii tokens
  badges-tags.html              ← Tags, badges, programme labels
  logo-lockups.html             ← Logo variants on all backgrounds
  logo-marks.html               ← Logo mark variants

ui_kits/website/
  index.html                    ← Interactive website UI kit
  README.md                     ← UI kit documentation
  components/
    Header.jsx
    Hero.jsx
    ProgrammeCard.jsx
    SectorTag.jsx
    Footer.jsx
```

---

*Assembled May 2026 · Source: vuka-brand-direction.md + uploaded SVG assets + Codec Pro font family*
