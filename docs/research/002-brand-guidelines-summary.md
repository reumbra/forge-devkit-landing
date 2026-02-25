# 002 — Brand Guidelines Summary (Agent-Optimized)

> **Context:** Key rules extracted from `docs/reumbra-brand-guidelines.docx` v1.0, relevant to landing page design and development.

## Brand Identity

- **Company:** Reumbra — software engineering company, Tallinn, Estonia
- **Personality:** Bold + Sophisticated. Senior engineer who speaks clearly and builds things that last
- **Promise:** "We engineer solutions that scale with your ambition."
- **Core signals:** Precision, depth, reliability

## Target Audience (Segment B: Developer)

- Software engineers, tech leads, indie hackers. Age 22-40
- Most typographically literate audience in the world (8+ hours/day staring at IDE fonts)
- They notice font-weight 400 vs 450. JetBrains Mono = "these people write code"
- Detect inauthenticity instantly. Keep copy concise. Show real code, not mockups
- Skim, don't read marketing prose

## Color Palette

| Token | HEX | Usage |
|-------|-----|-------|
| `--color-primary` | #7649C4 | Primary accent: buttons, links, icons, active states |
| `--color-secondary` | #9A75EA | Hover states, section labels, badges |
| `--color-accent-soft` | #C8B8F4 | CTA text on dark, active links, highlights |
| `--color-accent-light` | #E0D7FF | Hover on light surfaces, subtle bg tints |
| `--color-bg` | #000000 | Primary background (dark theme) |
| `--color-surface` | #191919 | Cards, nav, footer |
| `--color-surface-deep` | #160B2D | Card interiors, code blocks |
| `--color-text` | #FFFFFF | Primary text |
| `--color-text-secondary` | #CCCCCC | Subtitles, descriptions |
| `--color-text-muted` | #A5A5A5 | Captions, placeholders, meta |

## Typography Rules

| Element | Size | Weight | Line-height | Font | Letter-spacing |
|---------|------|--------|-------------|------|----------------|
| Display/H1 | 48-72px | 900 (Black) | 1.05-1.1 | Satoshi | -0.02em to -0.035em |
| H2 | 36-48px | 700 (Bold) | 1.1-1.15 | Satoshi | -0.02em to -0.035em |
| H3 | 24-30px | 600 (SemiBold) | 1.2 | Satoshi | 0 |
| H4 | 18-20px | 500 (Medium) | 1.3 | Satoshi | 0 |
| Body Large | 18px | 400 | 1.65-1.7 | Satoshi | 0 |
| Body | 16px | 400 | 1.65-1.7 | Satoshi | 0 |
| Body Small | 14px | 400 | 1.6 | Satoshi | 0 |
| Caption/Label | 12-13px | 500 | 1.4 | Satoshi | 0 |
| Mono Label | 11-13px | 400 | 1.4 | JetBrains Mono | +0.05em to +0.15em (uppercase) |
| Mono Code | 14-15px | 400 | 1.6 | JetBrains Mono | 0 |

**Rules:**
- Headings: sentence case, never ALL CAPS (except section labels)
- Section labels/tags: UPPERCASE + expanded spacing + JetBrains Mono
- Body text: max 55-75 chars/line (max-width 640-720px)
- Never body text below 15px on any device
- Buttons: sentence case ("Start a project", not "START A PROJECT")

## Component Specs

### Buttons
- **Primary:** bg #7649C4, text #FFF, radius 10px, padding 14px 36px. Hover: lighten to ~#8352D1 + translateY(-2px) + purple glow. Transition 0.3s ease
- **Ghost:** bg transparent, text #A5A5A5, border 1px solid rgba(165,165,165,0.15). Hover: text #CCC, border opacity up
- Text: Satoshi Medium 15px, sentence case
- CTA arrow: " →" suffix ("Start a project →")
- Max 1 primary button per viewport

### Cards
- bg #191919, border 1px solid rgba(118,73,196,0.06), radius 14px, padding 36px 28px
- Hover: border to rgba(118,73,196,0.12), translateY(-3px), deep purple shadow
- Top accent line on hover: 2px gradient line animates in

### Badges/Tags
- Technical tags: JetBrains Mono 10-11px, bg rgba(118,73,196,0.05), border rgba(118,73,196,0.06), radius 4px
- Status badges: JetBrains Mono 13px, pill shape, purple text, animated pulse dot

### Navigation
- Fixed top, backdrop-filter blur(16px), bg rgba(0,0,0,0.6)
- Border-bottom rgba(118,73,196,0.06)
- Links: Satoshi 14px, color #A5A5A5, hover #FFF
- Height: 64-72px

### Section Labels
- JetBrains Mono 11-12px Medium, #9A75EA, letter-spacing 0.15-0.18em, uppercase
- Margin-bottom 16-20px to heading below

## Layout

- Max content width: 1200px
- Body text max-width: 640-720px
- Section padding: 80-120px desktop, 64-80px mobile
- 8px base grid (all spacing multiples of 8)
- Hero: 100vh, content centered
- Card grid: 3 columns desktop, 1 column mobile

## Gradient & Effects

- Primary gradient: `linear-gradient(135deg, #C8B8F4, #9A75EA, #7649C4)` — for accent text fills, hero highlights
- Ambient glow: radial gradient #7649C4 or #9A75EA at 4-8% opacity, 150-200px blur. Max 2-3 per viewport
- Borders: always rgba with low opacity, never full-opacity
- Divider dots: 5px diamonds (rotated squares), not circles

## Animation Rules

- Fade-ups on scroll: 0.7s ease-out
- Hover lifts: translateY -2 to -4px
- One well-timed page-load sequence > scattered micro-interactions
- Transition: all 0.3s ease (standard)

## Voice Rules

- **Use:** Precision, engineering, architecture, scale, depth, reliable, thoughtful, production-grade, solid, clean
- **Avoid:** Innovative, revolutionary, best-in-class, cutting-edge, passionate, world-class, leverage, synergy, disruptive, robust
- Headlines: 2-6 words. Paragraphs: 2-3 sentences max
- Show real code/terminal output. Never marketing mockups
- No stock photos. Abstract geometric art or real screenshots only
- No emojis as icons in production

## Legal Requirements (Stripe/LemonSqueezy)

Required pages: Privacy Policy, Terms of Service, Refund & Cancellation Policy. Linked from footer on every page. HTTPS on all pages.

## Performance Targets

- Lighthouse 90+ on all metrics
- Page weight < 500KB
- Preload Satoshi Regular + Black. Lazy-load JetBrains Mono
- font-display: swap for both fonts
- Images: WebP/AVIF, lazy load below fold
