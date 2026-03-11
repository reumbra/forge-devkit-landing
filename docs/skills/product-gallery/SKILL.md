---
name: product-gallery
description: "This skill should be used when the user wants to create product gallery images, launch assets, or visual product showcases. Requires Pencil MCP server. Triggers include: 'PH images', 'gallery images', 'product screenshots', 'launch visuals', 'marketplace gallery', 'hero image', 'social media card', 'before/after image', 'pricing comparison image', 'launch assets', 'AIDA gallery', 'create gallery for launch', or 'design product images'. Covers Product Hunt, marketplace listings, and social media cards with AIDA sequencing and developer-audience optimization."
metadata:
  version: 1.1.0
---

# Product Gallery Image Design

Expert visual storyteller for developer tools and SaaS products. Creates gallery images optimized for Product Hunt, marketplace listings, and social media using Pencil MCP.

## Before Starting

**Check for product marketing context first:**
If `.agents/product-marketing-context.md` exists, read it before asking questions. Extract: product name, tagline, pricing tiers, key differentiators, proof points (numbers), competitor anchors, brand voice.

**Check for existing designs:**
Search for `design/*.pen` files. If a .pen file exists, use `get_editor_state()` to check current state, then `batch_get` to discover existing frames.

**Verify Pencil MCP is available:**
Call `get_editor_state()`. If unavailable, inform the user that this skill requires Pencil MCP server.

---

## Core Principles (ranked)

1. **Proof over promise** - Real terminal output, actual numbers, concrete screenshots beat polished marketing text. Developer audiences trust specificity.
2. **Thumbnail readability over detail** - Every image must communicate at ~200px width. Headlines: 3-5 words max. If it doesn't read at thumbnail size, it fails.
3. **Pain-first sequencing over feature-first** - Lead with the problem the audience recognizes, not the solution they don't know yet.
4. **Specificity over vagueness** - "NestJS 11.0 + TypeScript 5.8" beats "detects your stack". Exact numbers build trust.
5. **Pattern interrupt over polish** - Raw terminal output in a gallery full of polished marketing images creates differentiation.

---

## Gallery Strategy: AIDA Sequencing

Product Hunt and marketplace galleries follow a 5-image narrative arc:

| Slot | Role | Psychology | Content Pattern |
|------|------|-----------|----------------|
| 1 | **HOOK** (Attention) | Pattern interrupt. Must work as social thumbnail. | Terminal screenshot + short tagline (3-5 words) |
| 2 | **TRANSFORMATION** (Interest) | Show the before/after gap | Two-column: WITHOUT (red, pain) vs WITH (green, solution) |
| 3 | **DEPTH** (Interest+) | Prove the mechanism works | Full terminal demo showing real output |
| 4 | **SCOPE** (Desire) | Show breadth beyond the hook | Pipeline/modules/ecosystem overview |
| 5 | **CLOSE** (Action) | Remove final objection (price) | Competitor anchor + pricing + trust signals |

**Critical**: Image 1 goes to social media as the preview card. It MUST NOT be a text wall. Terminal screenshot + bold tagline is the proven pattern for developer audiences.

---

## Image Design Rules

### Frame & Safe Area

- Standard frame: **1600x1200** (PH recommended, works everywhere)
- **Safe area**: Minimum **80px** padding from ALL edges
- Content zone: x=80..1520, y=80..1120 (1440x1040 usable)
- Background: dark (`#0D1117` or `#111827`) for dev tools; light for consumer SaaS

### Layout Strategy: Full Flex Hierarchy

Build every image as a **nested flex tree** — like a landing page, not a Photoshop canvas. No absolute positioning, no empty spacer elements.

**Main frame** (1600x1200): vertical flex, `justifyContent: "space_between"`, `padding: 80`.
```
frame: layout: "vertical", alignItems: "center",
       justifyContent: "space_between", padding: 80
```

**Content groups**: wrap related elements in container frames with their own `gap`.
```
// Typical image hierarchy:
Frame (vertical flex, space_between, padding: 80)
+-- content_group (vertical flex, gap: 25)
|   +-- headline
|   +-- cards_row (horizontal flex, gap: 30)
|   +-- info_section (vertical flex, gap: 8)
+-- footer_group (vertical flex, gap: 12)
    +-- closing line
    +-- URL
```

**Horizontal rows** (card grids, comparison columns): wrap in a horizontal flex frame.
```
row: layout: "horizontal", alignItems: "stretch", gap: 30
children: width: "fill_container"
```

**Push footer to bottom**: use `justifyContent: "space_between"` on the main frame with two child groups (content + footer). NEVER use empty spacer elements.

**Push label to card bottom**: same pattern — wrap card content in a content_group, keep bottom label separate, set `justifyContent: "space_between"` on the card.

**Child ordering matters in flex**: children render in tree order, not by x/y. Use `M(nodeId, parent, index)` to reorder.

**Padding format**: always use a single number (`padding: 80`). String formats like `"80 80 80 80"` do NOT work in Pencil. For asymmetric padding, use array: `padding: [top, right]` or `padding: [top, right, bottom, left]`.

### Text Centering

**In flex containers** (preferred): `width: "fill_container"` + `textAlign: "center"` on text children. Centering is automatic.

**In absolute positioning** (fallback): `x = 150`, `width = 1300`, `textAlign = "center"`, `textGrowth = "fixed-width"`. Required because Pencil ignores textAlign without explicit width + textGrowth on absolute text nodes.

### Typography Hierarchy

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Headline | 52-64px | 800 (ExtraBold) | White `#FFFFFF` |
| Subtitle | 24-28px | 400 | Muted `#9CA3AF` |
| Terminal text | 16-18px | 400 (mono) | Green `#4ADE80` / White |
| Card title | 20-24px | 700 | Brand accent |
| Card body | 14-16px | 400 | Muted `#9CA3AF` |
| Brand footer | 16px | 400 | Muted `#6B7280` |

### Color System (Dark Theme)

| Role | Color | Usage |
|------|-------|-------|
| Background | `#0D1117` | Frame fill |
| Card bg | `#1E293B` | Content cards |
| Accent | `#A78BFA` | Brand, highlights |
| Success | `#4ADE80` | Positive, "with product" |
| Danger | `#F87171` | Negative, "without", pain |
| Text | `#FFFFFF` | Headlines |
| Muted | `#9CA3AF` | Subtitles, body |

---

## Pencil MCP Workflow

### Step 1: Create or Open File

```
open_document("design/product-images.pen")  // existing
open_document("new")                          // new file
```

### Step 2: Create Frame with Flex Structure

Every image starts as a **flex container** with safe area padding and space-between:

```
frame=I("ROOT", {
  type: "FRAME", name: "PH - Image Name",
  width: 1600, height: 1200, fill: "#0D1117",
  layout: "vertical", alignItems: "center",
  justifyContent: "space_between", padding: 80
})
content=I(frame, {
  type: "frame", name: "content_group",
  layout: "vertical", alignItems: "center",
  gap: 25, width: "fill_container"
})
footer=I(frame, {
  type: "frame", name: "footer_group",
  layout: "vertical", alignItems: "center",
  gap: 12, width: "fill_container"
})
```

### Step 3: Build Content (per image type)

See `references/image-templates.md` for complete templates per image type.

Insert content into `content_group`, footer elements into `footer_group`. The `space_between` on the main frame handles vertical distribution automatically.

### Step 3b: Flex Hierarchy Patterns

**Every container uses flex.** No absolute positioning anywhere. Build like a landing page component tree.

**Card with content + bottom label (space_between):**
```
card=I("cards_row", {
  type: "frame", layout: "vertical", alignItems: "center",
  justifyContent: "space_between",
  padding: 20, width: "fill_container", height: "fill_container",
  fill: "#12121F", cornerRadius: 16
})
card_content=I(card, {
  type: "frame", name: "content", layout: "vertical",
  alignItems: "center", gap: 6, width: "fill_container"
})
// Insert header + rows into card_content
bar=I(card_content, {type: "rectangle", width: "fill_container", height: 3, fill: "#9A75EA"})
num=I(card_content, {type: "text", content: "52", width: "fill_container", textAlign: "center", fontSize: 32, fontWeight: "800", fill: "#FFFFFF"})
// Bottom label is a direct child of card (not card_content)
label=I(card, {type: "text", content: "Bottom label", width: "fill_container", textAlign: "center", fontSize: 17, fill: "#888899"})
```

**Horizontal card row:**
```
row=I("content_group", {
  type: "frame", name: "cards_row", layout: "horizontal",
  alignItems: "stretch", gap: 30, width: "fill_container", height: 300
})
// Cards inside: width: "fill_container", height: "fill_container"
```

**Section group (tiers, trust signals):**
```
section=I("content_group", {
  type: "frame", name: "trust_section", layout: "vertical",
  alignItems: "center", gap: 8, width: "fill_container", padding: 15
})
```

**Key rules:**
- `layout: "vertical"` + `alignItems: "center"` on every container
- `width: "fill_container"` on text children (enables textAlign)
- `justifyContent: "space_between"` to push footer/label to bottom - NEVER use empty spacer elements
- Each nesting level has its own `gap` (outer: 25-30px, inner: 6-12px)
- Cards in a row: `height: N` on the row (fixed), `fill_container` on cards
- Children render in insertion order (use `M()` to reorder if needed)

### Step 4: Validate

After creating each image, run validation:

1. **Visual check**: `get_screenshot(nodeId)` - analyze alignment, readability, spacing
2. **Layout problems**: `snapshot_layout(parentId, problemsOnly=true)` - detect clipping, overflow
3. **Safe area coordinates**: `snapshot_layout(parentId, maxDepth=1)` - verify first child `y>=80`, last child bottom `<=1120`, all content `x>=80`. Do NOT trust `problemsOnly` alone - it misses safe area violations
4. **Thumbnail test**: verify headline is 3-5 words and 52-64px font size (proven readable at ~200px thumbnail scale)

### Step 5: Fix Common Issues

| Problem | Fix |
|---------|-----|
| Text not centering (flex) | Set `width: "fill_container"` + `textAlign: "center"` on child |
| Content clipped | Check `snapshot_layout(problemsOnly=true)`, move inside parent bounds |
| Safe area violation | Verify via `snapshot_layout(maxDepth=1)` coordinates, set `padding: 80` on main frame |
| Padding not applying | Use number (`padding: 80`), NOT string (`"80 80 80 80"`). For asymmetric: array `[top, sides]` |
| Footer not at bottom | Use `justifyContent: "space_between"` + two child groups. Never empty spacer divs |
| Circular sizing error | Row has `fit_content` height but children have `fill_container`. Fix: set fixed height on row |
| Text too small for thumbnail | Increase headline to 56-64px, reduce word count |
| Children in wrong order (flex) | Use `M(nodeId, parentId, index)` to reorder |
| Emojis not rendering | Replace with bold metric numbers (more impactful for dev audience) |
| `M()` with binding fails | `M()` requires real node IDs, not bindings. Insert first, then move in a separate `batch_design` call |

---

## Quick Reference: Pencil Operations

```
// Insert
node=I("parentId", { type, name, x, y, width, height, fill, ... })

// Update
U("nodeId", { property: value })

// Replace
R("nodeId", { property: value })

// Copy
copy=C("sourceId", "parentId", { x, y })

// Delete
D("nodeId")

// Move
M("nodeId", "newParentId", position)

// Generate image
G("nodeId", "ai", "prompt description")
```

Key text properties: `text`, `fontSize`, `fontWeight`, `fill` (text color), `textAlign`, `fontFamily`, `width` (required for centering).

Key container properties: `fill` (background), `cornerRadius`, `stroke`, `strokeWidth`.

---

## Platform-Specific Guidelines

### Product Hunt
- Gallery: 5-8 images, 1270x760 minimum (use 1600x1200 for quality)
- Image 1 = social preview card (most critical)
- GIF/video slot available (slot 1 or 2)

### Social Media (X/Twitter, LinkedIn)
- Cards: 1200x628 (landscape) or 1200x1200 (square)
- Image 1 from PH gallery doubles as social card
- Add URL/handle to footer for standalone sharing

### Marketplace Listings (Lemon Squeezy, Gumroad)
- Product images: typically 1200x900 or similar
- Adapt PH gallery images by cropping/adjusting frame size

---

## Additional Resources

### Reference Files

For detailed templates and patterns, consult:
- **`references/image-templates.md`** - Complete Pencil batch_design templates for each of the 5 gallery image types (hero, before/after, terminal, pipeline, pricing)
- **`references/gallery-psychology.md`** - Deep dive on AIDA sequencing, developer audience psychology, pain-first messaging, thumbnail readability research

---

## Checklist

Before marking gallery complete:

- [ ] 5 images following AIDA arc (HOOK -> TRANSFORMATION -> DEPTH -> SCOPE -> CLOSE)
- [ ] Image 1 works as social thumbnail (3-5 word headline, not text wall)
- [ ] All images use full flex hierarchy (no absolute positioning, no empty spacer elements)
- [ ] Main frames: `padding: 80`, `justifyContent: "space_between"`, content_group + footer_group
- [ ] Safe area verified via `snapshot_layout(maxDepth=1)` coordinates (not just problemsOnly)
- [ ] All centered text has `width: "fill_container"` + `textAlign: "center"`
- [ ] `snapshot_layout(problemsOnly=true)` returns no issues for each image
- [ ] Visual screenshot verification for each image
- [ ] Product marketing context reflected (pricing, proof points, differentiators)
- [ ] No em-dashes or en-dashes (use regular hyphens)
- [ ] Brand footer on each image (subtle, bottom)
- [ ] Competitor anchor in pricing image uses real numbers
