# Vuka Website UI Kit

A high-fidelity recreation of the Vuka Venture Studio marketing website, built from the brand direction document and visual assets.

## Source
Built from: `vuka-brand-direction.md` (no codebase or Figma available)
Design infers structure from brand philosophy, copy direction, and colour system.

## Screens
The `index.html` renders a full scrollable marketing website with these sections:
1. **Navigation** — sticky header with logo, nav links, apply CTA
2. **Hero** — bold headline, body, dual CTA
3. **Studio Model** — 3-column "how we build" explanation
4. **Portfolio** — company cards with sector tags
5. **Prestige / CTA** — Deep Soil full-bleed section
6. **Footer** — links, contact

## Components (JSX)
| File | Description |
|---|---|
| `components/Header.jsx` | Sticky nav with logo, links, CTA button |
| `components/Hero.jsx` | Full-bleed hero with headline + CTAs |
| `components/PortfolioCard.jsx` | Company card with sector tag |
| `components/SectorTag.jsx` | Colour-coded sector tags |
| `components/Footer.jsx` | Site footer with links |

## Usage
All components use the Vuka design system tokens. Load `../../colors_and_type.css` and font-face declarations from `../../fonts/`.

## Notes
- No real portfolio data available — placeholder company names used
- Codec Pro loaded from `../../fonts/` (local TTF files)
- Logo SVGs from `../../assets/`
