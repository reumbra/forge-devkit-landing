# Image Templates for Pencil MCP

Complete `batch_design` templates for each gallery image type. Adapt colors, text, and numbers to the specific product using product-marketing-context.

## Template 1: HOOK (Hero Terminal)

The most critical image. Goes to social media. Must read at 200px width.

**Pattern**: Bold tagline (3-5 words) + real terminal screenshot below.

**Structure**:
```
Frame (1600x1200, fill: #0D1117)
  ├── Headline (x:150, y:80, w:1300, center, 60px, #FFF, 800)
  ├── Subtitle (x:150, y:170, w:1300, center, 24px, #9CA3AF)
  ├── Terminal Block (x:120, y:240, w:1360, h:800)
  │   ├── Terminal Chrome (dots: red/yellow/green + title bar)
  │   ├── Terminal BG (fill: #1E293B, cornerRadius: 12)
  │   └── Terminal Lines (monospace, 16px, colored per type)
  └── Brand Footer (x:150, y:1160, w:1300, center, 16px, #6B7280)
```

**Terminal chrome pattern** (the 3 dots):
```
dots=I("termBlock", { type: "FRAME", x: 16, y: 12, width: 52, height: 12 })
I(dots, { type: "ELLIPSE", x: 0, y: 0, width: 12, height: 12, fill: "#FF5F57" })
I(dots, { type: "ELLIPSE", x: 20, y: 0, width: 12, height: 12, fill: "#FEBC2E" })
I(dots, { type: "ELLIPSE", x: 40, y: 0, width: 12, height: 12, fill: "#28C840" })
```

**Terminal text** should show REAL output from the product, not mockup text. Use:
- Green `#4ADE80` for success/checkmarks
- Purple `#A78BFA` for brand/accents
- Cyan `#67E8F9` for values/data
- White `#FFFFFF` for labels
- Muted `#6B7280` for comments/secondary

**Example headline**: "One command. Your AI understands your project." [ADAPT: replace with your product's core tagline, 3-5 words max]

---

## Template 2: TRANSFORMATION (Before/After)

**Pattern**: Two-column split. Left = WITHOUT (pain, red). Right = WITH PRODUCT (solution, green).

**Structure**:
```
Frame (1600x1200, fill: #0D1117)
  ├── Headline (x:150, y:60, w:1300, left-align, 48px, #FFF, 800)
  ├── Left Column: WITHOUT (x:80, y:150, w:680, h:850)
  │   ├── Column Header ("WITHOUT", 20px, #F87171, letterSpacing: 3)
  │   ├── Row 1: X icon + pain text (16px, #9CA3AF)
  │   ├── Row 2: X icon + pain text
  │   ├── ... (5 rows typical)
  │   └── Bottom Label ("Hours of rework per week", 18px, #F87171)
  ├── Right Column: WITH PRODUCT (x:840, y:150, w:680, h:850)
  │   ├── Column Header ("WITH [PRODUCT]", 20px, #4ADE80, letterSpacing: 3)
  │   ├── Row 1: check icon + solution text
  │   ├── ... (5 rows matching left pains)
  │   └── Bottom Label ("One setup. Works forever.", 18px, #4ADE80)
  └── (No brand footer - columns fill the space)
```

**Column card styling**:
- Background: `#1E293B`
- cornerRadius: 16
- Padding: 30px inside

**Row pattern** (inside column):
- X/check icon: `fontSize: 16, fill: red/green`
- Text: `fontSize: 17, fill: #D1D5DB, lineHeight: 1.4`
- Row height: ~120px for 2-line text, ~90px for 1-line

**Rule**: Each LEFT pain MUST have a matching RIGHT solution. Same order, same count.

---

## Template 3: DEPTH (Terminal Demo)

**Pattern**: Full terminal output showing the product's mechanism in action.

**Structure**:
```
Frame (1600x1200, fill: #0D1117)
  ├── Headline (x:100, y:60, left-align, 52px, #FFF, 800)
  ├── Terminal Block (x:100, y:150, w:1400, h:950)
  │   ├── Terminal Chrome (dots + title)
  │   ├── Terminal BG (fill: #1A1A2E or #111827)
  │   └── Terminal Content (monospace, 17px)
  │       ├── Command line ($ command)
  │       ├── Progress/gate outputs (green checks)
  │       ├── Result summary
  │       └── Generated files list
  └── (Optional: subtle footer at y:1160)
```

**Difference from Hero**: This shows MORE detail. Hero = teaser (partial output), Depth = full run. Show every gate/step passing, list all generated files, include the "success" message.

**Left-align headline** when terminal block below is also left-aligned (single visual unit).

---

## Template 4: SCOPE (Pipeline/Modules)

**Pattern**: Show breadth of the product - modules, pipeline stages, ecosystem.

**Structure**:
```
Frame (1600x1200, fill: #0D1117)
  ├── Headline (x:150, y:60, w:1300, center, 52px, #FFF, 800)
  ├── Subtitle (x:150, y:130, w:1300, center, 22px, #9CA3AF)
  ├── Card Row (y:230, centered horizontally)
  │   ├── Card 1 (w:300, h:340, fill: #1E293B, cornerRadius: 16)
  │   │   ├── Stage Label ("DESIGN", accent color, 16px, letterSpacing: 2)
  │   │   ├── Module Name ("forge-product", 14px, #9CA3AF)
  │   │   ├── Arrow (">", between cards, accent color)
  │   │   └── Feature List (14px, #9CA3AF, 3-4 bullet points)
  │   ├── Card 2 ...
  │   ├── Card 3 ...
  │   └── Card 4
  ├── Platform Line (y:980, "Works with X, Y, Z", 18px, #9CA3AF)
  └── CTA Line (y:1030, "From EUR XX. One-time purchase.", 22px, #4ADE80, 700)
```

**Card layout math** for 4 cards with arrows:
- Total width for 4 cards: 4 * 300 = 1200
- 3 gaps with arrows: 3 * 40 = 120
- Total: 1320. Start x = (1600 - 1320) / 2 = 140
- Cards at x: 140, 480, 820, 1160

**Arrow between cards**: Text node ">" at y=center of cards, x=between cards, fontSize: 24, fill: accent

---

## Template 5: CLOSE (Pricing Comparison)

**Pattern**: Competitor price anchor + your pricing + trust signals. Remove the final objection.

**Structure**:
```
Frame (1600x1200, fill: #0D1117)
  ├── Headline (x:150, y:50, w:1300, center, 52px, #FFF, 800)
  ├── Competitor Cards Row (y:160, centered)
  │   ├── Competitor 1 Card (w:400, h:280, fill: #1E293B)
  │   │   ├── Name (20px, #9CA3AF)
  │   │   ├── Price ("EUR 240/yr", 42px, #F87171, 800)
  │   │   ├── Strikethrough Line (rectangle over price, h:3, fill: #F87171)
  │   │   └── Downsides (14px, #6B7280)
  │   ├── Competitor 2 Card (similar)
  │   └── YOUR Product Card (w:400, h:280, fill: #1E293B, stroke: #4ADE80)
  │       ├── Name (20px, #4ADE80)
  │       ├── Price ("From EUR 29", 42px, #4ADE80, 800)
  │       ├── Benefits (14px, #D1D5DB)
  │       └── Badge ("ONE-TIME", accent bg, small)
  ├── Tier Summary Row (y:520)
  │   ├── [ADAPT: "TIER1 PRICE | TIER2 PRICE | TIER3 PRICE"]
  │   └── [ADAPT: Persona labels below each tier]
  ├── Trust Signals (y:650, checkmarks + text)
  │   ├── "14-day money-back guarantee"
  │   ├── "1 year of updates included"
  │   └── "Generated artifacts work forever"
  ├── Closing Line (y:900, bold, 28px)
  └── URL (y:1160, 16px, #6B7280)
```

**Strikethrough technique**:
- Place a thin RECTANGLE (height: 3px) directly over the competitor price text
- Match the rectangle fill to the danger color (#F87171)
- Position: same y as text center, width matches text width

**Green border on your product card**:
- `stroke: "#4ADE80"`, `strokeWidth: 2`
- Creates visual "this is the winner" signal

---

## Spacing Reference

| Between | Gap |
|---------|-----|
| Headline to subtitle | 10-20px |
| Subtitle to content | 40-60px |
| Cards in a row | 30-40px |
| Text lines in terminal | lineHeight 1.5 |
| Content to footer | 40-60px |
| Section to section | 60-80px |

## Font Recommendations

- Headlines: System default (Inter, SF Pro, or whatever Pencil uses)
- Terminal/code: `"Fira Code"`, `"JetBrains Mono"`, `"SF Mono"`, `monospace`
- Body: Same as headlines

## Batch Size

Aim for maximum **25 operations per `batch_design` call**. Build each image in 2-4 calls:
1. Frame + headline + subtitle
2. Main content block (terminal or cards)
3. Details + footer
4. Fixes/adjustments after screenshot review
