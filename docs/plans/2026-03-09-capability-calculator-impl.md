# Product Assembly Simulator - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace module-selector simulator with persona-match + optional capability customize flow for maximum conversion at minimum activation energy.

**Architecture:** Astro component with client-side vanilla JS state machine. Config-driven i18n. Three persona cards as primary interaction, assembly animation (terminal + SVG diamond), health metrics dashboard, expandable capability customize section. Zero external dependencies.

**Tech Stack:** Astro, Tailwind CSS, TypeScript, vanilla JS

**Design doc:** `docs/plans/2026-03-09-capability-calculator-design.md`

---

### Task 1: Add persona i18n data to ecosystem.ts config

**Files:**
- Modify: `src/shared/config/ecosystem.ts`

**Step 1: Add PersonaI18n interface**

After `CapabilityI18n` interface, add:

```typescript
export interface PersonaI18n {
	id: string;        // "starter" | "pro" | "complete"
	title: string;     // "Solo Builder"
	description: string; // "I need AI to respect my architecture"
	benefit: string;   // short outcome line
}
```

**Step 2: Add personas[] and customize strings to SimulatorI18n**

In `SimulatorI18n` interface, add inside `ui`:
```typescript
customizeLabel: string;   // "Want more coverage?"
customizeHint: string;    // "Toggle capabilities and rebuild"
```

Add new field to `SimulatorI18n`:
```typescript
personas: PersonaI18n[];
```

**Step 3: Add EN persona data to `simulator` const**

```typescript
personas: [
	{
		id: "starter",
		title: "Solo Builder",
		description: "I need AI to respect my architecture",
		benefit: "One setup. 50+ quality patterns. Forever.",
	},
	{
		id: "pro",
		title: "Team Lead",
		description: "I need tests, tracking, and a dev pipeline",
		benefit: "Design, code, test, track - all connected.",
	},
	{
		id: "complete",
		title: "Founder",
		description: "I need the full pipeline from idea to growth",
		benefit: "15 modules. Every process covered.",
	},
],
```

Add to `ui`:
```typescript
customizeLabel: "Want more coverage?",
customizeHint: "Toggle capabilities and rebuild",
```

**Step 4: Add RU persona data to `simulatorRu` const**

```typescript
personas: [
	{
		id: "starter",
		title: "Соло-разработчик",
		description: "Мне нужен AI, который уважает мою архитектуру",
		benefit: "Одна настройка. 50+ паттернов качества. Навсегда.",
	},
	{
		id: "pro",
		title: "Тимлид",
		description: "Мне нужны тесты, трекинг и dev pipeline",
		benefit: "Дизайн, код, тесты, трекинг - все связано.",
	},
	{
		id: "complete",
		title: "Фаундер",
		description: "Мне нужен полный pipeline от идеи до роста",
		benefit: "15 модулей. Каждый процесс покрыт.",
	},
],
```

Add to `ui`:
```typescript
customizeLabel: "Хотите больше покрытия?",
customizeHint: "Включите возможности и пересоберите",
```

**Step 5: Verify build**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npx astro build 2>&1 | tail -5`
Expected: Build succeeds, no type errors.

**Step 6: Commit**

```
feat: add persona i18n data to simulator config
```

---

### Task 2: Rewrite EcosystemSection.astro - server template

**Files:**
- Modify: `src/widgets/Ecosystem/EcosystemSection.astro` (full rewrite of frontmatter + HTML, keep style/script blocks for now)

**Step 1: Rewrite Astro frontmatter**

Replace current imports and data prep with:

```astro
---
import Container from "@shared/ui/Container.astro";
import SectionLabel from "@shared/ui/SectionLabel.astro";
import {
	simulatorI18n,
	SIMULATOR_MODULES,
	CAPABILITIES,
	BASE_MODULES,
	TIER_PRESETS,
} from "@shared/config/ecosystem";
import { localePath, i18n } from "@shared/utils/locale";

const lp = (path: string) => localePath(path, Astro.currentLocale);
const config = i18n(simulatorI18n, Astro.currentLocale);
const locale = Astro.currentLocale || "en";

// Resolve module objects for each persona card
const personaModules = config.personas.map((p) => {
	const capIds = TIER_PRESETS[p.id] || [];
	const moduleIds = new Set([
		...BASE_MODULES,
		...capIds.flatMap((cid) => {
			const cap = CAPABILITIES.find((c) => c.id === cid);
			return cap ? cap.moduleIds : [];
		}),
	]);
	const modules = SIMULATOR_MODULES.filter((m) => moduleIds.has(m.id));
	return { ...p, modules, total: moduleIds.size };
});

// Pro is default highlighted
const defaultPersona = "pro";
---
```

**Step 2: Write HTML structure - Header**

```astro
<section id="journey" class="py-12 md:py-24 lg:py-32">
	<Container>
		<div id="simulator" data-locale={locale}>
			{/* Header */}
			<div class="mb-10 text-center">
				<SectionLabel text={config.sectionLabel} />
				<h2 class="mt-4 font-sans text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-text md:text-[42px]">
					{config.headline}
				</h2>
				<p class="mx-auto mt-3 max-w-[540px] font-sans text-[15px] leading-[1.6] text-text-secondary md:text-[17px]">
					{config.subheadline}
				</p>
			</div>
```

**Step 3: Write HTML - Persona Cards**

3-col grid on desktop, stack on mobile. Each card shows persona info + module pills + Build button.

```astro
			{/* Persona Cards */}
			<div class="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 mb-8">
				{personaModules.map((persona) => (
					<button
						type="button"
						class="sim-persona group relative rounded-[14px] border border-card bg-surface p-5 text-left transition-all duration-300"
						data-persona={persona.id}
						data-selected={String(persona.id === defaultPersona)}
					>
						{persona.id === "pro" && (
							<span class="absolute -top-2.5 right-4 rounded-full bg-secondary px-3 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-white">
								Recommended
							</span>
						)}
						<div class="flex items-baseline justify-between">
							<span class="font-sans text-[17px] font-bold text-text">{persona.title}</span>
							<span class="font-mono text-[13px] text-secondary">
								{config.tiers.find((t) => t.id === persona.id)?.price}
							</span>
						</div>
						<p class="mt-1.5 font-sans text-[13px] leading-[1.5] text-text-secondary">
							{persona.description}
						</p>
						<p class="mt-2 font-sans text-[12px] text-text-muted">
							{persona.benefit}
						</p>
						{/* Module pills */}
						<div class="mt-3 flex flex-wrap gap-1.5">
							{persona.modules.map((mod) => (
								<a
									href={lp(`/modules/${mod.slug}`)}
									class="rounded-full border border-card px-2 py-0.5 font-mono text-[10px] text-text-muted transition-colors hover:border-secondary hover:text-secondary"
									onclick="event.stopPropagation()"
								>
									{mod.name}
								</a>
							))}
						</div>
						<div class="mt-4 flex items-center justify-between">
							<span class="font-mono text-[11px] text-text-muted">
								{persona.total} {config.ui.modulesIncluded}
							</span>
							<span class="font-sans text-[13px] font-semibold text-secondary opacity-0 transition-opacity group-hover:opacity-100">
								{config.ui.buildButton} &rarr;
							</span>
						</div>
					</button>
				))}
			</div>
```

**Step 4: Write HTML - Assembly Area (reuse existing)**

Keep the terminal + diamond SVG exactly as current. Copy from existing component.

**Step 5: Write HTML - Metrics Dashboard (reuse existing)**

Keep the metrics grid, overall bar, CTA exactly as current. Copy from existing component.

**Step 6: Write HTML - Customize Section (new)**

```astro
			{/* Customize (expandable) */}
			<div id="customize-panel" class="sim-hidden mb-8">
				<button
					type="button"
					id="customize-toggle"
					class="flex w-full items-center justify-between rounded-[14px] border border-card bg-surface px-5 py-3.5 transition-all hover:border-card-hover"
				>
					<span class="font-sans text-[14px] font-medium text-text">
						{config.ui.customizeLabel}
					</span>
					<svg id="customize-chevron" class="h-4 w-4 text-text-muted transition-transform" viewBox="0 0 16 16" fill="none">
						<path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
				</button>
				<div id="customize-body" class="hidden mt-3 space-y-2">
					{CAPABILITIES.map((cap) => {
						const capI18n = config.capabilities.find((c) => c.id === cap.id);
						const capModules = SIMULATOR_MODULES.filter((m) => cap.moduleIds.includes(m.id));
						const tierLabel = config.tiers.find((t) => t.id === cap.tier)?.label;
						return (
							<label
								class="sim-cap-card flex items-start gap-3 rounded-[12px] border border-card bg-surface px-4 py-3 cursor-pointer transition-all hover:border-card-hover"
								data-cap={cap.id}
								data-tier={cap.tier}
							>
								<input
									type="checkbox"
									class="sim-cap-cb mt-0.5"
									data-cap={cap.id}
								/>
								<div class="flex-1 min-w-0">
									<div class="flex items-baseline gap-2">
										<span class="font-sans text-[13px] font-medium text-text">
											{capI18n?.label}
										</span>
										<span class="rounded-full bg-[rgba(255,255,255,0.06)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-text-muted">
											{tierLabel}
										</span>
									</div>
									<p class="mt-0.5 font-sans text-[12px] text-text-muted">
										{capI18n?.description}
									</p>
									<div class="mt-1.5 flex flex-wrap gap-1">
										{capModules.map((mod) => (
											<a
												href={lp(`/modules/${mod.slug}`)}
												class="font-mono text-[10px] text-text-muted hover:text-secondary transition-colors"
												onclick="event.stopPropagation()"
											>
												{mod.name}
											</a>
										))}
									</div>
								</div>
							</label>
						);
					})}
					{/* Coverage preview + rebuild */}
					<div class="flex items-center justify-between pt-2">
						<div class="flex items-center gap-3">
							<span class="font-sans text-[13px] text-text-muted">{config.ui.coverageLabel}:</span>
							<span id="cust-coverage" class="font-mono text-[15px] font-bold text-secondary">0%</span>
						</div>
						<button
							type="button"
							id="rebuild-btn"
							class="rounded-[10px] bg-secondary px-5 py-2 font-sans text-[13px] font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
						>
							{config.ui.rebuildButton}
						</button>
					</div>
				</div>
			</div>
```

**Step 7: Close the section + cross-cutting bar**

```astro
			{/* Cross-cutting */}
			<a
				href={lp(`/modules/${config.crossCutting.slug}`)}
				class="group flex items-center gap-3 rounded-[14px] border border-card bg-surface px-5 py-3.5 transition-all duration-300 hover:border-card-hover"
			>
				<span class="text-secondary text-[10px]">{"\u25C7"}</span>
				<span class="font-mono text-[14px] font-medium text-text group-hover:text-secondary transition-colors">
					{config.crossCutting.module}
				</span>
				<span class="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted">cross-cutting</span>
				<span class="ml-auto font-sans text-[13px] text-text-muted">{config.crossCutting.description}</span>
			</a>
		</div>
	</Container>
</section>
```

**Step 8: Verify build**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npx astro build 2>&1 | tail -5`
Expected: Build succeeds.

**Step 9: Commit**

```
feat: rewrite EcosystemSection with persona cards + customize
```

---

### Task 3: Write CSS styles

**Files:**
- Modify: `src/widgets/Ecosystem/EcosystemSection.astro` (style block)

**Step 1: Write all styles**

Replace `<style>` block with styles for: persona cards, capability checkboxes, customize panel, terminal, diamond SVG, metric bars, animations. Keep all existing terminal/diamond/metric styles, add persona card styles and capability checkbox styles.

Key new styles:
- `.sim-persona[data-selected="true"]` - highlighted border + shadow (same as old tier cards)
- `.sim-persona:not([data-selected="true"]):hover` - subtle border highlight
- `.sim-cap-cb` - same checkbox style as old `.sim-cb`
- `.sim-cap-card` with checked state highlight
- `#customize-chevron.expanded` - rotate 180deg
- All existing styles preserved: `.sim-hidden`, `.sim-fade`, terminal classes, diamond classes, metric bar colors

**Step 2: Verify build**

Run: `npx astro build 2>&1 | tail -5`

**Step 3: Commit**

```
style: add persona card + customize panel styles
```

---

### Task 4: Write client-side JS - state machine

**Files:**
- Modify: `src/widgets/Ecosystem/EcosystemSection.astro` (script block)

**Step 1: Write imports and DOM setup**

```typescript
import {
	simulatorI18n,
	SIMULATOR_MODULES,
	CAPABILITIES,
	BASE_MODULES,
	TIER_PRESETS,
	METRIC_CONTRIBUTIONS,
	METRIC_WEIGHTS,
	TERMINAL_STAGES,
	DIAMOND_LAYERS,
} from "@shared/config/ecosystem";
```

DOM selectors for: simulator container, persona cards, assembly area, terminal, metrics panel, customize panel + toggle + body + coverage + rebuild btn.

State: `running`, `cancel`, `currentPersona`, `customizedCaps` (Set of capability IDs).

**Step 2: Write persona selection logic**

```typescript
function selectPersona(personaId: string) {
	currentPersona = personaId;
	// Highlight selected card
	$$(".sim-persona").forEach((card) => {
		(card as HTMLElement).dataset.selected = String(
			(card as HTMLElement).dataset.persona === personaId
		);
	});
	// Set customized caps from preset
	customizedCaps = new Set(TIER_PRESETS[personaId] || []);
	// Update capability checkboxes if customize is open
	syncCapCheckboxes();
	// Start assembly
	startAssembly();
}
```

**Step 3: Write module derivation from capabilities**

```typescript
function getSelectedModules(): Set<string> {
	const mods = new Set(BASE_MODULES);
	for (const capId of customizedCaps) {
		const cap = CAPABILITIES.find((c) => c.id === capId);
		if (cap) cap.moduleIds.forEach((m) => mods.add(m));
	}
	return mods;
}

function detectTier(): string {
	const hasComplete = [...customizedCaps].some((cid) => {
		const cap = CAPABILITIES.find((c) => c.id === cid);
		return cap?.tier === "complete";
	});
	if (hasComplete) return "complete";
	if (customizedCaps.size > 0) return "pro";
	return "starter";
}
```

**Step 4: Write coverage calculation (for live bar)**

```typescript
function calcCoverage(mods: Set<string>): number {
	let wSum = 0, wTotal = 0;
	for (const [mid, contribs] of Object.entries(METRIC_CONTRIBUTIONS)) {
		let score = 0;
		for (const [modId, val] of Object.entries(contribs)) {
			if (mods.has(modId)) score += val;
		}
		const w = METRIC_WEIGHTS[mid] || 0;
		wSum += Math.min(100, score) * w;
		wTotal += w;
	}
	return wTotal > 0 ? Math.round(wSum / wTotal) : 0;
}
```

**Step 5: Write customize panel logic**

```typescript
function toggleCustomize() {
	const body = $("#customize-body");
	const chevron = $("#customize-chevron");
	const isOpen = !body.classList.contains("hidden");
	body.classList.toggle("hidden");
	chevron.classList.toggle("expanded");
}

function syncCapCheckboxes() {
	$$(".sim-cap-cb").forEach((cb) => {
		const el = cb as HTMLInputElement;
		el.checked = customizedCaps.has(el.dataset.cap!);
	});
	updateCoveragePreview();
}

function onCapToggle(capId: string, checked: boolean) {
	if (checked) customizedCaps.add(capId);
	else customizedCaps.delete(capId);
	updateCoveragePreview();
}

function updateCoveragePreview() {
	const mods = getSelectedModules();
	const cov = calcCoverage(mods);
	const el = $("#cust-coverage");
	if (el) el.textContent = `${cov}%`;
}
```

**Step 6: Reuse assembly animation + metrics logic**

Copy `addLine`, `addCheck`, `padName`, `activateLayer`, `resetLayers`, `startAssembly`, `showMetrics`, `colorClass` from current implementation. Change `startAssembly` to use `getSelectedModules()` instead of `getSelected()`.

After animation: show customize panel (hidden initially, appears after first build). For Complete preset, hide customize panel.

**Step 7: Wire event listeners**

```typescript
// Persona card clicks
$$(".sim-persona").forEach((card) => {
	card.addEventListener("click", () => {
		selectPersona((card as HTMLElement).dataset.persona!);
	});
});

// Customize toggle
$("#customize-toggle")?.addEventListener("click", toggleCustomize);

// Capability checkboxes
$$(".sim-cap-cb").forEach((cb) => {
	cb.addEventListener("change", (e) => {
		const el = e.target as HTMLInputElement;
		onCapToggle(el.dataset.cap!, el.checked);
	});
});

// Rebuild button
$("#rebuild-btn")?.addEventListener("click", () => startAssembly());
```

No auto-initialization - wait for user click on persona card.

**Step 8: Verify build**

Run: `npx astro build 2>&1 | tail -5`

**Step 9: Commit**

```
feat: implement persona selection + customize + assembly logic
```

---

### Task 5: Visual QA + browser verification

**Files:** None (read-only verification)

**Step 1: Start dev server**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npx astro dev --port 4331`

**Step 2: Open browser and verify persona cards**

- 3 cards visible in row (desktop)
- Pro has "Recommended" badge
- Pro has highlighted border
- Module pills visible and clickable
- Price shown on each card

**Step 3: Click Pro persona card**

- Assembly area appears with fade-in
- Terminal shows typewriter animation
- Modules not in Pro show "SKIPPED" in yellow
- Diamond SVG layers activate on desktop
- After animation: metrics panel appears
- Coverage bar shows ~55%
- CTA shows "Get Complete for full coverage"

**Step 4: Test customize**

- After build, customize panel appears
- Click "Want more coverage?" - expands
- Shows only Complete-tier capabilities (4 items)
- Toggle one on - coverage % updates live
- Click Rebuild - animation re-runs with new modules

**Step 5: Test Starter persona**

- Click Solo Builder card
- Animation runs with only core + worktree
- Many modules SKIPPED
- Metrics mostly red/0%
- Customize shows all 8 capabilities

**Step 6: Test Complete persona**

- Click Founder card
- All modules run, no SKIPPED
- All metrics 100% green
- Customize panel hidden (nothing to add)

**Step 7: Test mobile**

- Resize to 375px width
- Cards stack vertically
- Diamond SVG hidden
- Terminal full-width

**Step 8: Test RU locale**

- Navigate to /ru/
- All text in Russian
- Persona titles, descriptions, capability labels - all translated

**Step 9: Run production build**

Run: `npx astro build 2>&1 | tail -5`
Expected: Build succeeds, 56+ pages.

**Step 10: Commit (if any fixes were made during QA)**

```
fix: visual QA fixes for assembly simulator
```

---

## Dependency Graph

```
Task 1 (config) → Task 2 (HTML) → Task 3 (CSS) → Task 4 (JS) → Task 5 (QA)
```

All sequential - each depends on the previous.
