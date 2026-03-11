# Gallery Psychology & Audience Patterns

## AIDA in Gallery Context

AIDA (Attention - Interest - Desire - Action) maps naturally to a 5-image gallery:

### Attention (Image 1: HOOK)
- The viewer has 1.5 seconds to decide if they care
- On Product Hunt, Image 1 appears as a thumbnail in the feed (~200px wide)
- On social media (X, LinkedIn), it's the preview card
- **Anti-pattern**: Text walls, feature lists, marketing speak. These blend into the feed
- **Pattern that works**: Visual proof (terminal, screenshot) + short bold tagline
- Developer audiences specifically distrust polished marketing. Raw terminal output = authenticity signal

### Interest (Images 2-3: TRANSFORMATION + DEPTH)
- The viewer clicked. Now prove the hook wasn't clickbait
- Image 2 (Before/After) triggers recognition: "that's MY problem"
- Image 3 (Terminal Demo) proves the mechanism: "it actually does what it claims"
- **Pain-first**: Lead with problems the audience already feels, not solutions they don't know yet
- **Specificity sells**: "NestJS 11.0 + TypeScript 5.8 + Prisma 6.4" > "detects your stack"

### Desire (Image 4: SCOPE)
- The viewer believes the core claim. Now expand: "it does even MORE than I thought"
- Show the full pipeline/ecosystem/module set
- This is where you display breadth without overwhelming - use visual hierarchy (cards, stages)
- **Module/pipeline visualization** works because it implies depth without requiring reading

### Action (Image 5: CLOSE)
- Remove the final objection: price
- **Competitor anchor**: Show expensive alternatives first, then your price. Anchoring effect makes your price feel trivially small
- Trust signals reduce anxiety: money-back guarantee, no subscription, artifacts persist
- URL at the bottom for the viewer who's ready to buy

---

## Developer Audience Psychology

### What Developers Trust
- Real output (terminal screenshots, code blocks, actual numbers)
- Specificity (exact versions, file counts, gate numbers)
- Technical depth (show the mechanism, not just the outcome)
- Honesty about trade-offs
- Open source / transparency signals

### What Developers Distrust
- Polished marketing ("revolutionary", "game-changing", "magic")
- Vague claims ("improves your workflow", "boosts productivity")
- Stock photos, generic illustrations
- Subscription-everything pricing
- Missing technical details

### Pattern Interrupt Strategy
Most AI tool galleries use: gradient backgrounds, polished UI mockups, feature grids with icons. A raw terminal screenshot in dark theme breaks the pattern and signals "this is for real developers, not managers."

---

## Thumbnail Readability Research

### The 200px Test
PH feed thumbnails render at approximately 200px width. At this size:
- **Readable**: 3-5 word headline in 52-64px (renders as ~7-8px at thumbnail)
- **Barely readable**: 6-8 words in 48px
- **Unreadable**: Paragraphs, feature lists, small text, dense terminal output

### Headline Formulas That Work at Thumbnail
- **Number + Noun + Verb**: "7 gates. Every layer detected."
- **Action + Object**: "One command. Full pipeline."
- **Contrast**: "Not just rules. A full pipeline."
- **Challenge**: "Stop paying rent for AI tools."

### Headline Formulas That Fail
- Long value propositions (too many words)
- Questions (weak at thumbnail, not scannable)
- Feature lists (can't distinguish from competitors)

---

## Color Psychology in Dark Theme

| Color | Association | Use For |
|-------|------------|---------|
| Green (#4ADE80) | Success, positive, growth | "With product" column, prices, checkmarks |
| Red (#F87171) | Pain, danger, loss | "Without" column, competitor prices, X marks |
| Purple (#A78BFA) | Brand, premium, creative | Accents, highlights, brand elements |
| Cyan (#67E8F9) | Technical, data, clarity | Values, data points, technical details |
| White (#FFFFFF) | Primary, important | Headlines, key text |
| Gray (#9CA3AF) | Secondary, supporting | Subtitles, descriptions, body text |

### Contrast Rules
- Headlines: white on dark bg (max contrast for readability)
- Competitor prices: red with strikethrough (danger signal)
- Your price: green (success signal)
- Cards: subtle bg (#1E293B) on dark frame (#0D1117) - just enough contrast to define the boundary

---

## Gallery Sequencing Alternatives

### Standard AIDA (Recommended for launches)
HOOK -> TRANSFORMATION -> DEPTH -> SCOPE -> CLOSE

### Social Proof First (For established products)
TESTIMONIAL -> DEMO -> FEATURES -> COMPARISON -> PRICING

### Problem-Solution Pairs (For niche audiences)
PAIN1+SOLUTION1 -> PAIN2+SOLUTION2 -> PAIN3+SOLUTION3 -> ECOSYSTEM -> PRICING

### Show Don't Tell (For visual products)
SCREENSHOT1 -> SCREENSHOT2 -> SCREENSHOT3 -> COMPARISON -> PRICING

---

## Anti-Patterns to Avoid

1. **Feature Grid as Image 1**: Lists of features with checkmark icons. Every competitor does this. Zero pattern interrupt.
2. **Logo Cloud Without Context**: "Integrates with X, Y, Z" without showing what the integration actually does.
3. **Generic Illustrations**: Abstract shapes, generic "developer at desk" images. Add zero trust.
4. **Too Much Text Per Image**: If an image requires reading more than 30 words, it fails the thumbnail test.
5. **Inconsistent Visual Language**: Mixing light/dark themes, different card styles, varying typography across images.
6. **Missing Brand Footer**: Every image should have subtle branding - it may be shared individually outside the gallery context.
7. **Price Without Anchor**: Showing your price without competitor comparison removes the anchoring effect. "EUR 29" alone means nothing. "Devin EUR 240/yr vs Forge EUR 29 once" means everything.
