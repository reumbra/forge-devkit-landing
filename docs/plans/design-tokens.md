# Design Tokens — Forge DevKit Landing

> **Purpose:** Consolidated reference for all design tokens extracted from brand guidelines and page architecture spec. Ready for Tailwind v4 `@theme` configuration.

---

## 1. Color Palette

### Core Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#7649C4` | Primary accent: buttons, links, icons, active states |
| `--color-secondary` | `#9A75EA` | Hover states, section labels, badges, module stats |
| `--color-accent-soft` | `#C8B8F4` | CTA text on dark, active links, highlights |
| `--color-accent-light` | `#E0D7FF` | Hover on light surfaces, subtle bg tints |

### Backgrounds & Surfaces

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | `#000000` | Primary background (dark theme) |
| `--color-surface` | `#191919` | Cards, nav, footer, all card backgrounds |
| `--color-surface-deep` | `#160B2D` | Code block interiors, terminal blocks |

### Text

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-text` | `#FFFFFF` | Primary text, headlines, card headlines, names |
| `--color-text-secondary` | `#CCCCCC` | Subtitles, descriptions, body copy in cards, subheadlines |
| `--color-text-muted` | `#A5A5A5` | Captions, placeholders, meta, ghost button text, closing lines, disposable callouts, pain quotes (italic), footer text |

### Borders (rgba — always low opacity, never full-opacity)

| Token | Value | Usage |
|-------|-------|-------|
| `--border-card` | `rgba(118, 73, 196, 0.06)` | Default card border, nav bottom border, accordion item bottom border, code blocks, FAQ items |
| `--border-card-hover` | `rgba(118, 73, 196, 0.12)` | Card hover state border |
| `--border-card-glow` | `rgba(118, 73, 196, 0.20)` | Pro pricing card border, highlighted elements |
| `--border-ghost` | `rgba(165, 165, 165, 0.15)` | Ghost button border |
| `--border-divider` | `rgba(118, 73, 196, 0.15)` | Diamond divider lines (entrepreneur section) |
| `--border-photo` | `rgba(118, 73, 196, 0.10)` | Author photo border |
| `--border-quote` | `#7649C4` | Author quote left border (2px solid) |

### Subtle Backgrounds (rgba)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-tag` | `rgba(118, 73, 196, 0.05)` | Technical tags, platform badges |
| `--bg-badge` | `rgba(118, 73, 196, 0.05)` | Status badges background |
| `--bg-inline-code` | `rgba(118, 73, 196, 0.08)` | Inline code within body text |
| `--bg-nav` | `rgba(0, 0, 0, 0.6)` | Navigation backdrop |

---

## 2. Gradients & Effects

### Gradients

| Token | Value | Usage |
|-------|-------|-------|
| `--gradient-primary` | `linear-gradient(135deg, #C8B8F4, #9A75EA, #7649C4)` | Accent text fills, hero highlights, top accent line on card hover |

### Ambient Glow

| Token | Value | Usage |
|-------|-------|-------|
| `--glow-terminal` | `radial-gradient(circle, rgba(118, 73, 196, 0.06) 0%, transparent 70%)` | Behind hero terminal, 200px blur spread |
| `--glow-cta` | `radial-gradient(circle, rgba(118, 73, 196, 0.08) 0%, transparent 70%)` | Behind final CTA section |
| `--glow-pro-card` | Subtle ambient glow around Pro pricing card | Uses `--color-primary` at 4-8% opacity |

**Rules:**
- Max 2-3 ambient glows per viewport
- Glow radius: 150-200px blur
- Opacity: 4-8%

### Button Hover Glow

| State | Value |
|-------|-------|
| Primary hover bg | `#8352D1` (lightened primary) |
| Primary hover glow | `0 8px 32px rgba(118, 73, 196, 0.3)` |

### Card Hover Shadow

| State | Value |
|-------|-------|
| Card hover | Deep purple shadow + `translateY(-3px)` |
| Top accent line | 2px gradient line animates in on hover (`--gradient-primary`) |

---

## 3. Typography Scale

### Font Families

| Token | Value | Loading |
|-------|-------|---------|
| `--font-sans` | `'Satoshi', system-ui, sans-serif` | Preload Regular (400) + Black (900). `font-display: swap` |
| `--font-mono` | `'JetBrains Mono', ui-monospace, monospace` | Lazy-load. `font-display: swap` |

### Type Scale — Headings

| Element | Size (desktop) | Size (mobile) | Weight | Line-height | Letter-spacing | Font |
|---------|---------------|---------------|--------|-------------|----------------|------|
| Display / H1 | `48px` - `72px` | `36px` | `900` (Black) | `1.05` - `1.1` | `-0.02em` to `-0.035em` | Satoshi |
| H2 | `36px` - `48px` | `30px`* | `700` (Bold) | `1.1` - `1.15` | `-0.02em` to `-0.035em` | Satoshi |
| H3 | `24px` - `30px` | `24px` | `600` (SemiBold) | `1.2` | `0` | Satoshi |
| H4 | `18px` - `20px` | `18px` | `500` (Medium) | `1.3` | `0` | Satoshi |

### Type Scale — Body

| Element | Size | Weight | Line-height | Letter-spacing | Font |
|---------|------|--------|-------------|----------------|------|
| Body Large | `18px` | `400` | `1.65` - `1.7` | `0` | Satoshi |
| Body | `16px` | `400` | `1.65` - `1.7` | `0` | Satoshi |
| Body Small | `14px` | `400` | `1.6` | `0` | Satoshi |
| Caption / Label | `12px` - `13px` | `500` | `1.4` | `0` | Satoshi |

### Type Scale — Mono

| Element | Size | Weight | Line-height | Letter-spacing | Font |
|---------|------|--------|-------------|----------------|------|
| Section Label | `11px` - `12px` | `500` | `1.4` | `+0.15em` to `+0.18em` | JetBrains Mono (uppercase) |
| Mono Label (tags, badges) | `10px` - `11px` | `400` | `1.4` | `+0.05em` to `+0.15em` | JetBrains Mono (uppercase) |
| Mono Code | `14px` - `15px` | `400` | `1.6` | `0` | JetBrains Mono |
| Module Name | `16px` | `400`* | `1.4` | `0` | JetBrains Mono |
| Module Stats | `12px` | `400` | `1.4` | `0` | JetBrains Mono |
| Tier Name | `14px` | `400` | `1.4` | `0` | JetBrains Mono (uppercase) |
| Step Command | `14px` | `400` | `1.6` | `0` | JetBrains Mono |

### Specific Element Typography

| Element | Font | Size | Weight | Color | Extra |
|---------|------|------|--------|-------|-------|
| Hero headline | Satoshi | 48-72px (36px mobile) | 900 | `#FFFFFF` | letter-spacing: -0.02em |
| Hero subheadline | Satoshi | 18px | 400 | `#CCCCCC` | max-width: 640px |
| Section headline | Satoshi | 36-48px | 700 | `#FFFFFF` | letter-spacing: -0.02em |
| Deep dive headline | Satoshi | 30-36px | 700 | `#FFFFFF` | -- |
| Transition line | Satoshi | 20px | 500 | `#FFFFFF` | -- |
| Proof/closing line | Satoshi | 18px | 500 | `#FFFFFF` | inline code gets mono + bg |
| Pain quote | Satoshi | 16px | 400 | `#CCCCCC` | italic |
| Entrepreneur pain quote | Satoshi | 16px | 400 | `#A5A5A5` | italic |
| Price display | Satoshi | 48px | 900 | `#FFFFFF` | -- |
| Author name | Satoshi | 24px | 600 | `#FFFFFF` | -- |
| Author title | Satoshi | 16px | 400 | `#CCCCCC` | -- |
| Author quote | Satoshi | 18px | 400 | `#CCCCCC` | italic, left-border 2px #7649C4 |
| Author link | Satoshi | 14px | 500 | `#9A75EA` | -- |
| FAQ question | Satoshi | 16-18px | 500 | `#FFFFFF` | -- |
| FAQ answer | Satoshi | 16px | 400 | `#CCCCCC` | max 2-3 sentences |
| Final CTA headline | Satoshi | 36px | 700 | `#FFFFFF` | -- |
| Nav links | Satoshi | 14px | 400 | `#A5A5A5` | hover: `#FFFFFF` |
| Footer links | Satoshi | 14px | 400 | `#A5A5A5` | hover: `#FFFFFF` |
| Footer copyright | Satoshi | 12px | 400 | `#A5A5A5` | -- |
| Button text | Satoshi | 15px | 500 | -- | sentence case |
| Trust signals | Satoshi | 14px | 400 | `#A5A5A5` | centered |
| Feature list (pricing) | Satoshi | 15px | 400 | `#CCCCCC` | -- |
| Disposable callout | Satoshi | 16px | 400 | `#A5A5A5` | -- |
| Closing line (modules) | Satoshi | 16px | 400 | `#A5A5A5` | -- |

### Typography Rules

- Headings: sentence case, never ALL CAPS (except section labels)
- Section labels/tags: UPPERCASE + expanded letter-spacing + JetBrains Mono
- Body text: max 55-75 chars/line (`max-width: 640px` - `720px`)
- Never body text below `15px` on any device
- Buttons: sentence case ("Start a project", not "START A PROJECT")
- CTA arrow suffix: `" ->"` ("Audit your architecture ->")

---

## 4. Spacing Scale

### Base Grid

`8px` base — all spacing values are multiples of 8.

### Section Padding (vertical)

| Breakpoint | Value |
|------------|-------|
| Desktop (>=1024px) | `80px` - `120px` |
| Tablet (768-1023px) | `64px` |
| Mobile (<768px) | `64px` - `80px` |

### Layout Widths

| Token | Value | Usage |
|-------|-------|-------|
| `--max-content` | `1200px` | Maximum content container width |
| `--max-prose` | `640px` - `720px` | Body text max-width (55-75 chars) |

### Card Padding

| Variant | Value |
|---------|-------|
| Standard card | `36px 28px` |
| Pain card (Section 2) | `24px` |
| forge-core hero card | `40px 32px` |
| Code block | `24px` |

### Gaps

| Context | Value |
|---------|-------|
| Card grid gap | 8px-grid aligned (likely `24px` or `32px`) |
| Section label to heading | `16px` - `20px` |
| FAQ answer padding | `16px 0` |

### Component Padding

| Component | Value |
|-----------|-------|
| Button (primary) | `14px 36px` |
| Button (final CTA, larger) | `18px 48px` |
| Navigation height | `64px` - `72px` |

---

## 5. Border Radii

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-card` | `14px` | Cards, code blocks, terminal blocks, author photo |
| `--radius-button` | `10px` | All buttons |
| `--radius-tag` | `4px` | Technical tags, platform badges |
| `--radius-badge` | `9999px` (pill) | Status badges (pill shape) |

---

## 6. Component Specs

### Buttons

#### Primary Button

```
bg:             #7649C4
text:           #FFFFFF
font:           Satoshi Medium 15px, sentence case
padding:        14px 36px
border-radius:  10px
transition:     all 0.3s ease

hover:
  bg:           #8352D1
  transform:    translateY(-2px)
  box-shadow:   0 8px 32px rgba(118, 73, 196, 0.3)   /* purple glow */
```

#### Primary Button — Large (Final CTA)

```
Same as primary but:
  padding:      18px 48px
```

#### Ghost Button

```
bg:             transparent
text:           #A5A5A5
border:         1px solid rgba(165, 165, 165, 0.15)
font:           Satoshi Medium 15px, sentence case
padding:        14px 36px
border-radius:  10px
transition:     all 0.3s ease

hover:
  text:         #CCCCCC
  border:       1px solid rgba(165, 165, 165, 0.3)   /* opacity up */
```

#### Mobile Buttons

```
width: 100%  (full-width on mobile)
```

**Rule:** Max 1 primary button per viewport.

### Cards

#### Standard Card

```
bg:             #191919
border:         1px solid rgba(118, 73, 196, 0.06)
border-radius:  14px
padding:        36px 28px
transition:     all 0.3s ease

hover:
  border:       1px solid rgba(118, 73, 196, 0.12)
  transform:    translateY(-3px)
  box-shadow:   deep purple shadow
  top-accent:   2px gradient line animates in (linear-gradient(135deg, #C8B8F4, #9A75EA, #7649C4))
```

#### Pain Card (Section 2)

```
bg:             #191919
border:         1px solid rgba(118, 73, 196, 0.06)
border-radius:  14px
padding:        24px
NO hover effect (context, not interactive)
```

#### Pro Pricing Card (Section 11)

```
Same as standard card, plus:
  border:       1px solid rgba(118, 73, 196, 0.20)   /* brighter */
  ambient glow: subtle purple radial behind card
  badge:        "Popular" with star
```

#### forge-core Hero Card (Section 9)

```
Same as standard card but:
  padding:      40px 32px
  full-width layout
  badge:        "Start here" top-right
```

#### Entrepreneur Card (Section 10)

```
bg:             #191919
border:         1px solid rgba(118, 73, 196, 0.06)
border-radius:  14px
padding:        36px 28px
layout:         full-width, vertical stack
```

### Code Blocks / Terminal

```
bg:             #160B2D
border:         1px solid rgba(118, 73, 196, 0.06)
border-radius:  14px
padding:        24px
font:           JetBrains Mono 14px, line-height 1.6
ambient:        radial-gradient glow behind (rgba(118, 73, 196, 0.06), 200px blur)
mobile:         horizontal scroll if needed (overflow-x: auto)
```

### Inline Code (within body text)

```
bg:             rgba(118, 73, 196, 0.08)
font:           JetBrains Mono (inherits size from context)
padding:        2px 6px  (approximate)
border-radius:  4px
```

### Badges & Tags

#### Technical Tag

```
font:           JetBrains Mono 10-11px
bg:             rgba(118, 73, 196, 0.05)
border:         1px solid rgba(118, 73, 196, 0.06)
border-radius:  4px
color:          #9A75EA
text-transform: uppercase
letter-spacing: 0.05em - 0.15em
```

#### Platform Badge (Section 8)

```
font:           JetBrains Mono 11px
bg:             rgba(118, 73, 196, 0.05)
border-radius:  4px
color:          #9A75EA
```

#### Status Badge (Popular)

```
font:           JetBrains Mono 13px
shape:          pill (border-radius: 9999px)
color:          #9A75EA (purple text)
animated:       pulse dot
```

#### "Start here" Badge

```
Position: top-right of forge-core card
```

### Section Label

```
font:           JetBrains Mono 11-12px Medium (500)
color:          #9A75EA
text-transform: uppercase
letter-spacing: 0.15em - 0.18em
margin-bottom:  16px - 20px to heading below
```

### Navigation

```
position:       fixed top
backdrop-filter: blur(16px)
bg:             rgba(0, 0, 0, 0.6)
border-bottom:  1px solid rgba(118, 73, 196, 0.06)
height:         64px - 72px
link font:      Satoshi 14px
link color:     #A5A5A5
link hover:     #FFFFFF
```

### FAQ Accordion

```
bg:             transparent
border-bottom:  1px solid rgba(118, 73, 196, 0.06)
question font:  Satoshi Medium 16-18px, #FFFFFF
answer font:    Satoshi Regular 16px, #CCCCCC
answer padding: 16px 0
indicator:      triangle/arrow, rotates on open
animation:      smooth height transition 0.3s ease
```

### Diamond Divider (Entrepreneur section break)

```
line:           rgba(118, 73, 196, 0.15)
diamonds:       #9A75EA
pattern:        ──── diamond ──── diamond ──── diamond ────
diamond shape:  5px rotated squares (45deg), NOT circles
```

### Author Quote Block

```
font:           Satoshi Regular 18px italic, #CCCCCC
max-width:      640px
left-border:    2px solid #7649C4
```

### Author Photo

```
size:           96px - 120px
border-radius:  14px
border:         1px solid rgba(118, 73, 196, 0.10)
```

---

## 7. Animation Tokens

### Scroll Animations

| Animation | Duration | Easing | Trigger |
|-----------|----------|--------|---------|
| Fade-up (default) | `0.7s` | `ease-out` | 20% viewport intersection |
| Staggered cards | `0.7s` each | `ease-out` | 100ms delay between cards |
| Code block delay | `0.7s` | `ease-out` | 200ms after text |
| Pipeline steps | `0.7s` each | `ease-out` | 200ms stagger, left to right |
| Diamond divider | `0.5s` | `ease-out` | Before content |

### Hover Animations

| Element | Transform | Transition |
|---------|-----------|------------|
| Cards | `translateY(-3px)` + border brighten | `0.3s ease` |
| Buttons | `translateY(-2px)` + bg lighten + glow | `0.3s ease` |
| Card top accent line | 2px gradient line animates in | `0.3s ease` |

### Interactive

| Element | Animation | Duration |
|---------|-----------|----------|
| FAQ accordion | Height transition | `0.3s ease` |
| FAQ arrow | Rotation | `0.3s ease` |

### Standard Transition

```
transition: all 0.3s ease;
```

---

## 8. Breakpoints

| Name | Value | Key Changes |
|------|-------|-------------|
| Mobile | `< 768px` | Single column. Hero headline 36px. Section padding 64-80px. Cards full-width. CTA buttons full-width. Nav: hamburger. Pricing: Pro reordered first. Steps: vertical. Deep dive: text above, visual below. |
| Tablet | `768px - 1023px` | 2-column grids where appropriate. Deep dive zigzag maintained. Section padding 64px. |
| Desktop | `>= 1024px` | Full layouts as designed. Max content 1200px. Section padding 80-120px. |

---

## 9. Tailwind v4 @theme Block (Ready to Use)

```css
@theme {
  /* Colors — Core */
  --color-primary: #7649C4;
  --color-primary-hover: #8352D1;
  --color-secondary: #9A75EA;
  --color-accent-soft: #C8B8F4;
  --color-accent-light: #E0D7FF;

  /* Colors — Backgrounds & Surfaces */
  --color-bg: #000000;
  --color-surface: #191919;
  --color-surface-deep: #160B2D;

  /* Colors — Text */
  --color-text: #FFFFFF;
  --color-text-secondary: #CCCCCC;
  --color-text-muted: #A5A5A5;

  /* Fonts */
  --font-sans: 'Satoshi', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;

  /* Font Sizes (with line-height) */
  --text-xs: 0.6875rem;       /* 11px — section labels */
  --text-xs--line-height: 1.4;
  --text-sm: 0.75rem;         /* 12px — captions, copyright, module stats */
  --text-sm--line-height: 1.4;
  --text-base-sm: 0.875rem;   /* 14px — body small, nav links, footer, code, step commands */
  --text-base-sm--line-height: 1.6;
  --text-base: 1rem;          /* 16px — body, card descriptions, FAQ, module taglines */
  --text-base--line-height: 1.65;
  --text-lg: 1.125rem;        /* 18px — body large, subheadlines, proof lines, author quote */
  --text-lg--line-height: 1.65;
  --text-xl: 1.25rem;         /* 20px — transition lines */
  --text-xl--line-height: 1.3;
  --text-2xl: 1.5rem;         /* 24px — H3, card headlines, author name */
  --text-2xl--line-height: 1.2;
  --text-3xl: 1.875rem;       /* 30px — deep dive headlines */
  --text-3xl--line-height: 1.2;
  --text-4xl: 2.25rem;        /* 36px — H2 / mobile hero */
  --text-4xl--line-height: 1.15;
  --text-5xl: 3rem;           /* 48px — H1 / price display */
  --text-5xl--line-height: 1.1;
  --text-6xl: 4.5rem;         /* 72px — display headline max */
  --text-6xl--line-height: 1.05;

  /* Border Radius */
  --radius-sm: 4px;           /* tags, badges, inline code */
  --radius-md: 10px;          /* buttons */
  --radius-lg: 14px;          /* cards, code blocks, photo */
  --radius-full: 9999px;      /* pill badges */

  /* Spacing — Section Padding */
  --spacing-section-desktop: 100px;   /* 80-120px range, use 100 as default */
  --spacing-section-tablet: 64px;
  --spacing-section-mobile: 72px;     /* 64-80px range */

  /* Spacing — Component */
  --spacing-card: 36px 28px;
  --spacing-card-pain: 24px;
  --spacing-card-hero: 40px 32px;
  --spacing-code-block: 24px;
  --spacing-button: 14px 36px;
  --spacing-button-lg: 18px 48px;
  --spacing-label-to-heading: 18px;   /* 16-20px range */

  /* Layout */
  --max-w-content: 1200px;
  --max-w-prose: 680px;       /* 640-720px range */

  /* Navigation */
  --nav-height: 68px;         /* 64-72px range */
  --nav-blur: 16px;

  /* Transitions */
  --transition-default: all 0.3s ease;
  --transition-scroll: 0.7s ease-out;

  /* Shadows / Glows */
  --shadow-button-hover: 0 8px 32px rgba(118, 73, 196, 0.3);
}
```

---

## 10. Tailwind v4 Utility Classes (Custom)

These should be added as `@utility` rules or component-layer styles alongside the `@theme`:

```css
/* Borders (can't be @theme tokens — use as utilities or in components) */

/* Card border default */
.border-card {
  border: 1px solid rgba(118, 73, 196, 0.06);
}
.border-card-hover {
  border-color: rgba(118, 73, 196, 0.12);
}
.border-card-glow {
  border-color: rgba(118, 73, 196, 0.20);
}
.border-ghost {
  border: 1px solid rgba(165, 165, 165, 0.15);
}

/* Nav background */
.bg-nav {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(16px);
}

/* Tag / badge background */
.bg-tag {
  background: rgba(118, 73, 196, 0.05);
}
.bg-inline-code {
  background: rgba(118, 73, 196, 0.08);
}

/* Primary gradient text fill */
.text-gradient {
  background: linear-gradient(135deg, #C8B8F4, #9A75EA, #7649C4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Gradient accent line (top of card on hover) */
.accent-line-top {
  background: linear-gradient(90deg, #C8B8F4, #9A75EA, #7649C4);
  height: 2px;
}

/* Ambient glow (behind terminal/cta) */
.glow-purple {
  background: radial-gradient(circle, rgba(118, 73, 196, 0.06) 0%, transparent 70%);
}
.glow-purple-strong {
  background: radial-gradient(circle, rgba(118, 73, 196, 0.08) 0%, transparent 70%);
}

/* Divider diamonds */
.diamond {
  width: 5px;
  height: 5px;
  background: #9A75EA;
  transform: rotate(45deg);
}
.divider-line {
  background: rgba(118, 73, 196, 0.15);
  height: 1px;
}

/* Section label */
.section-label {
  font-family: var(--font-mono);
  font-size: 0.6875rem; /* 11px */
  font-weight: 500;
  color: #9A75EA;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

/* Scroll animation base (JS adds .is-visible) */
.fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}
.fade-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 11. Font Loading Strategy

```
Preload (critical):
  - Satoshi-Regular.woff2    (weight 400)
  - Satoshi-Black.woff2      (weight 900)

Lazy-load (non-critical, below fold):
  - JetBrains Mono Regular   (weight 400)

Both use: font-display: swap

Additional weights loaded on demand:
  - Satoshi Medium (500)     — buttons, labels, nav
  - Satoshi SemiBold (600)   — H3, card headlines
  - Satoshi Bold (700)       — H2, section headlines
```

---

## 12. Performance Constraints

- Total page weight: `< 500KB`
- Lighthouse: `90+` on all metrics
- Images: WebP/AVIF, lazy load below fold
- No stock photos
- No emojis as icons in production
- Dividers: 5px diamonds (rotated squares), not circles
