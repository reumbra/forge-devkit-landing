# Key Principles — Forge DevKit Landing

> **Context:** Accumulated principles from research, discussions, and decisions. Each principle has a source reference. These become the foundation for dev-skills and guidance docs.

## Architecture & Tech

1. **Adapted FSD (3-layer):** `pages → widgets → shared`. No widget imports another widget. All UI flows through `shared/ui/`. Source: [001](./001-tech-stack-decisions.md)

2. **Design system is the only UI source:** No raw Tailwind classes outside `shared/ui/` component definitions. Widgets and pages compose from design system only. Source: [001](./001-tech-stack-decisions.md)

3. **Dark-first theming:** All styles written for dark theme. Light theme CSS variables defined but not styled. Tailwind v4 `@theme` for theme architecture. Source: [001](./001-tech-stack-decisions.md)

4. **Zero React policy:** Vanilla JS `<script>` for interactivity (theme toggle, mobile menu). React only if vanilla JS proves insufficient. Source: [001](./001-tech-stack-decisions.md)

5. **Self-hosted everything:** Fonts in `public/fonts/`, no external CDN requests, no Google Fonts. Source: [001](./001-tech-stack-decisions.md)

6. **i18n from day one:** Astro native i18n, en default (no prefix), ru as `/ru/`. All user-facing strings through `t()`. Source: [001](./001-tech-stack-decisions.md)

7. **Data-driven content:** All text content (pricing, modules, FAQ, nav) in `shared/config/`, never hardcoded in widgets. Source: [001](./001-tech-stack-decisions.md)

## Brand & Design

8. **Bold + Sophisticated:** Direct, confident, no filler. Precise, thoughtful, deep. Not arrogant, not corporate. Source: [002](./002-brand-guidelines-summary.md)

9. **Visual polish = engineering quality proxy:** Every pixel matters. Developers judge code quality by website quality. Source: [002](./002-brand-guidelines-summary.md)

10. **Geometric, not rounded:** Angular shapes (diamonds, straight lines, grids) match the Reumbra logo. Never bubbly/rounded decorative elements. Source: [002](./002-brand-guidelines-summary.md)

11. **Satoshi + JetBrains Mono pairing:** Satoshi for all text, JetBrains Mono for code/technical elements. JetBrains Mono is a developer shibboleth — "these people write code." Source: [002](./002-brand-guidelines-summary.md)

12. **Purple spectrum only:** Primary #7649C4, gradient stays within purple. No rainbow, no multi-hue. Ambient glow at 4-8% opacity. Source: [002](./002-brand-guidelines-summary.md)

13. **Animate with restraint:** One well-timed page-load sequence > scattered micro-interactions. Fade-ups on scroll (0.7s ease-out), hover lifts (translateY -2–4px). Source: [002](./002-brand-guidelines-summary.md)

14. **Real content, not mockups:** Show real code snippets, real terminal output, real CLI commands. Developers detect inauthenticity instantly. Source: [002](./002-brand-guidelines-summary.md)

## Voice & Copy

15. **Direct and specific:** "CQRS, DDD, Event Sourcing" not "modern architecture." Headlines 2-6 words. Paragraphs 2-3 sentences max. Source: [002](./002-brand-guidelines-summary.md)

16. **Banned words:** Innovative, revolutionary, best-in-class, cutting-edge, passionate, world-class, leverage, synergy, disruptive, robust. Source: [002](./002-brand-guidelines-summary.md)

17. **Good words:** Precision, engineering, architecture, scale, depth, reliable, thoughtful, production-grade, solid, clean. Source: [002](./002-brand-guidelines-summary.md)

## Product Positioning

18. **By Developers, For Developers:** Senior engineer experience encoded into AI-agent workflows. Not a generic tool — opinionated, battle-tested. Source: discussion 2026-02-24

19. **The problem is not AI, it's unstructured AI:** Claude Code is powerful but writes "best practices soup" without project-specific architecture, conventions, and guardrails. Source: discussion 2026-02-24

20. **Prompt engineering shouldn't be required:** Forge eliminates the need to manually encode years of experience into every prompt. Source: discussion 2026-02-24

## Audience Strategy

21. **Dual audience, single landing:** Two segments — Developers and Entrepreneurs (non-devs/vibe coders). One landing page with shared narrative + two use case blocks. Optimize split based on analytics. Source: [004](./004-dual-audience-strategy.md)

22. **Platform-agnostic value:** Forge installs to `.claude/` — works in Claude Code CLI, Desktop, Cursor, Claude Cowork. Don't tie messaging to one platform. Source: [004](./004-dual-audience-strategy.md)

23. **Entrepreneur journey is real:** forge-product designs features without dev skills, forge-core guides AI, forge-qa validates output. End-to-end viable via Claude Cowork / Cursor. Source: [004](./004-dual-audience-strategy.md)

24. **Different pains, same product:** Developers buy quality/architecture. Entrepreneurs buy "idea to product without a team." Same features, different framing. Source: [004](./004-dual-audience-strategy.md)

## Marketing & Psychology

25. **Pain avoidance > time savings:** Developers buy "fewer production bugs" not "save 2 hours". Entrepreneurs buy "working product" not "fast development". Source: [AUDIENCE-RESEARCH.md](./AUDIENCE-RESEARCH.md)

26. **Identity hook:** "Tool for serious engineers" / "For teams that actually care about quality." Not "10x your productivity." Source: [AUDIENCE-RESEARCH.md](./AUDIENCE-RESEARCH.md)

27. **Authority must be real:** "By developers for developers" works only when backed by real face, real experience, real opinions. Empty stamp = anti-pattern. Source: [AUDIENCE-RESEARCH.md](./AUDIENCE-RESEARCH.md)

28. **Outcome-focused, not feature-focused:** Don't list features → list problems solved. "50 guardrails your AI doesn't know it needs" > "50 quality patterns." Source: [AUDIENCE-RESEARCH.md](./AUDIENCE-RESEARCH.md)

29. **forge-core is the hero:** Solves 5 of 6 developer pains. Product and QA are force multipliers. Pricing should reflect this (core = entry point). Source: [PAIN-SOLUTION-MAP.md](./PAIN-SOLUTION-MAP.md)

30. **No "replace developers" messaging:** Help, not replace. Guardrails, not autopilot. Control, not magic. Source: [AUDIENCE-RESEARCH.md](./AUDIENCE-RESEARCH.md)

31. **Transparent pricing is trust signal:** Hidden pricing and token-based billing cause strong developer backlash. Forge's flat pricing ($29/$79/$149) is an advantage — show it early. Source: [AUDIENCE-RESEARCH.md](./AUDIENCE-RESEARCH.md)

32. **Real content earns trust:** Show real CLI output, real generated files, real before/after. Developers detect inauthenticity. No abstract diagrams, no mockups. Source: [AUDIENCE-RESEARCH.md](./AUDIENCE-RESEARCH.md) + [002](./002-brand-guidelines-summary.md)

33. **The GAP we fill:** No product that auto-generates a full dev pipeline (architecture → product → QA → tasks) for AI agents, platform-agnostically. Cursor rules are manual. CLAUDE.md is manual. Consulting is expensive. Source: [COMPETITOR-LANDSCAPE.md](./COMPETITOR-LANDSCAPE.md)

## Entrepreneur-Specific Principles

34. **"No team yet needed" not "no team ever":** Honest, mature messaging. Entrepreneurs know they'll eventually need devs. Promise: when they do, the codebase is ready. Source: [AUDIENCE-RESEARCH.md](./AUDIENCE-RESEARCH.md)

35. **The killer line: "MVP your future dev team won't hate."** Addresses the deepest entrepreneur fear (handoff anxiety) with memorable phrasing. Source: [PAIN-SOLUTION-MAP.md](./PAIN-SOLUTION-MAP.md)

36. **Forge is NOT another builder:** Not no-code, not AI builder. It's the quality layer that makes any AI builder produce production-grade code. Don't compete with Bolt/Lovable/Replit — complement them. Source: [COMPETITOR-LANDSCAPE.md](./COMPETITOR-LANDSCAPE.md)

37. **Transparency beats magic:** Entrepreneurs fear the "black box." Show structured pipeline phases, test results (green/red), requirement traceability. Make the invisible visible. Source: [AUDIENCE-RESEARCH.md](./AUDIENCE-RESEARCH.md)

38. **Vibe coding → Structured AI:** Market is shifting from "describe the feeling" to "guided AI with guardrails." Forge IS that shift. Position explicitly. Source: [AUDIENCE-RESEARCH.md](./AUDIENCE-RESEARCH.md)

## Product Hypotheses

39. **Pipeline, not rules generator:** Forge generates dev-skills + quality patterns + naming audit + red flags + pipeline phases. Positioning as "rules generator" = commodity. "Architecture-aware AI pipeline" = defensible. Source: [005](./005-product-hypotheses.md)

40. **Quality layer, not builder:** Forge does not generate code from Figma, does not deploy, does not create UI. It creates the pipeline that GUIDES AI-builders to build correctly. Competing with Bolt/Lovable = losing. Being the quality layer ON TOP = winning. Source: [005](./005-product-hypotheses.md)

41. **Prevention, not detection:** Forge guides code WHILE it's written (guardrails, pipeline, quality gates). NOT post-hoc review. Don't enter the code review market (CodeRabbit, SonarQube). Source: [005](./005-product-hypotheses.md)

42. **Token economy is a consequence, not a product:** Reduced token spend is a RESULT of structured pipeline — not a standalone feature. Don't promise runtime interception. Source: [005](./005-product-hypotheses.md)

43. **Flat pricing on MVP, freemium deferred:** Current architecture doesn't support free tier. Transparent flat pricing ($29/$79/$149) is a trust signal. Freemium requires API work — defer to next cycle. Source: [005](./005-product-hypotheses.md)

44. **CTA reflects product, not commodity:** "Audit your architecture" (devs) not "Generate rules." "Design your first feature" (entrepreneurs) not "Launch your idea." CTAs must reflect our unique pipeline, not generic AI tool actions. Source: [005](./005-product-hypotheses.md)

## UX & Implementation (from Visual Audit, Phase 6.1)

45. **Spacing accumulation kills rhythm:** When sections use symmetric padding (`py-24`), adjacent sections create DOUBLE gaps (96+96=192px). Use asymmetric padding (larger top, smaller bottom) or reduce padding on sequential same-type sections (e.g. 4 deep dives in a row). Source: UX Audit 2026-02-25

46. **Container padding ≠ container margin:** If `max-w-[1200px]` is centered on 1440px viewport, the browser already creates 120px margins. Adding `lg:px-[120px]` INSIDE the container doubles the indentation (240px lost). Internal padding should be modest (`px-16`). Source: UX Audit 2026-02-25

47. **CTA cadence — max 3 screens between CTAs:** On a conversion-focused page, never leave more than 3 screen-heights without a CTA. Users convinced mid-page must be able to act immediately. Map all CTAs with Y-positions to find dead zones. Source: UX Audit 2026-02-25 (CRO)

48. **Long pages (>8 screens) need navigation aids:** Scroll progress indicator, back-to-top button, active state on nav links, and section dots/landmarks. Without them, users lose orientation and abandon. 14-screen page without indicators = 52/100 navigation score. Source: UX Audit 2026-02-25 (IA)

49. **Mobile overflow prevention is non-negotiable:** Always set `overflow-x: clip` on `<html>`. Glow/blur effects with negative inset (`-inset-16`) escape containers on mobile. Test at 360px, not just 390px. Horizontal scroll on mobile = perceived broken page. Source: UX Audit 2026-02-25 (Mobile)

50. **Touch targets ≥ 44x44px — no exceptions:** Every interactive element on mobile must meet 44x44px minimum (WCAG 2.1 / Apple HIG). Includes hamburger button, footer links, nav links in mobile menu, author links. Add padding to increase hit area without changing visual size. Source: UX Audit 2026-02-25 (Mobile)

51. **scroll-margin-top with fixed navbar:** All anchor targets (`section[id]`) must have `scroll-margin-top` ≥ navbar height + buffer (80px for 66px navbar). Without it, anchor navigation hides section headers behind the sticky nav. Source: UX Audit 2026-02-25 (Mobile Scroll)

52. **Code blocks scale down on mobile:** Monospace code at 14px is too wide for 390px screens. Use `text-[11px] sm:text-[12px] md:text-[14px]`. Also shift 2-column code layouts from `md:` to `lg:` breakpoint — at 768px each column is only ~280px, too narrow for code. Source: UX Audit 2026-02-25 (Mobile Layout)

53. **Social proof is mandatory, even at launch:** No testimonials = no trust. Even pre-launch products need metrics-based proof ("50+ guardrails", "8+ frameworks", "Works with Claude Code, Cursor, Cowork"). Plan placeholder slots for future testimonials from day one. Source: UX Audit 2026-02-25 (CRO)

54. **Smooth scroll on long pages = conversion blocker:** `scroll-behavior: smooth` on an 18,000px page creates 5+ second animation when clicking a CTA. Users perceive this as a freeze. Use instant scroll for distances >3000px, or remove global smooth scroll entirely. Source: UX Audit 2026-02-25 (Mobile Conversion)

55. **Hero must occupy first viewport:** Hero section should use `min-h-[calc(100dvh-nav)]` with content vertically centered. Fixed padding (`py-32`) creates unpredictable above-the-fold content depending on viewport height. Source: UX Audit 2026-02-25 (Visual Design)

56. **Test all anchor links before deploy:** Every `href="#..."` in navigation and CTAs must have a matching `id="..."` on the target element. Broken anchors (#features without target) are invisible bugs — no error, just nothing happens. Source: UX Audit 2026-02-25 (IA)

57. **Mobile menu must lock body scroll:** When hamburger menu is open, `body.overflow` must be set to `hidden`. Otherwise users scroll the page behind the menu, causing disorientation. Also add a backdrop overlay to prevent interaction with content beneath. Source: UX Audit 2026-02-25 (Mobile Scroll)

58. **Fade-up animations must be implemented, not just defined:** If CSS classes (`.fade-up`, `.is-visible`) are defined in global.css, the corresponding IntersectionObserver JS must exist. Defined-but-unused animations = dead code that confuses future developers. Source: UX Audit 2026-02-25 (Visual Design)
