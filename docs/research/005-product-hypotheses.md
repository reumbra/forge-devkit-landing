# Product Hypotheses — Forge DevKit

> **Context:** Продуктовые гипотезы для лендинга, оценённые по результатам исследования (AUDIENCE-RESEARCH, COMPETITOR-LANDSCAPE, PAIN-SOLUTION-MAP). Дата: 2026-02-25. Статус: финальные после ревью.

## Принципы оценки

Каждая гипотеза оценена по:
1. **Соответствие подтверждённым болям** — адресует ли реальную боль из исследования?
2. **Соответствие продукту** — делает ли Forge это сейчас или требует нового функционала?
3. **Дифференциация** — отличает ли нас от конкурентов или ставит в прямую конкуренцию?
4. **Messaging consistency** — совпадает ли с принятым позиционированием (quality layer, prevention not detection, disposable meta-tool)?

---

## Сегмент A: Разработчики

### A1: Architecture-Aware AI Pipeline — STRONG (главная гипотеза)

| | |
|---|---|
| **Исходная формулировка** | Devs заплатят за авто-генерацию .cursorrules/CLAUDE.md из репо |
| **Скорректированная** | Devs заплатят за авто-генерацию полного dev-pipeline из архитектурного аудита проекта |
| **Целевые боли** | P1 (context loss) + P3 (architecture violations) + P5 (best practices soup) + P6 (prompt fatigue) — 4 из 6 болей |
| **Решение Forge** | `forge setup` → 7-gate wizard → architecture audit → dev-skills + quality patterns (50+) + naming conventions + 15 LLM rationalization detectors |
| **Proof point** | Real CLI: `forge setup` → detected NestJS + Clean Architecture + 3 layers + PostgreSQL → generated 12 dev-skills |
| **Метрика** | 30% conversion из trial/demo в paid |
| **Pricing** | $29/mo (forge-core solo) |

**Почему сработает:**
- P3 (architecture violations) — #1 по severity в исследовании. Прямые цитаты: "AI ломает DDD-модули", "shortcuts validations", "changes one thing, breaks another"
- P6 (prompt fatigue) — "I have to explain my architecture in every prompt" — universal frustration
- Cursor Rules экосистема популярна, но rules пишут вручную. Auto-gen skills существуют, но дают one-shot generation без pipeline
- **Forge GAP:** полный pipeline (не только rules), platform-agnostic, 7-gate wizard (не one-shot)

**Почему НЕ "rules generator":**
- "Rules generator" = commodity. Бесплатные auto-gen skills уже существуют
- Forge генерирует dev-skills + quality patterns + naming audit + red flags + pipeline phases — это architecture-aware pipeline, не файл с правилами
- Позиционирование "pipeline" защищает от ценовой конкуренции с бесплатными генераторами

**Включает proof point из бывшей A2 (token economy):**
- Structured pipeline phases prevent runaway sessions → predictable costs
- Quality gates stop agent before it spirals → fewer wasted tokens
- Это СЛЕДСТВИЕ pipeline, а не отдельный продукт

---

### ~~A2: Token Guard~~ — MERGED в A1

**Причина merge:** Runtime-перехват промптов — не текущий функционал Forge. Экономия токенов — следствие structured pipeline (A1), а не отдельная фича. Отдельная гипотеза создала бы ожидание runtime-интеграции, которой нет.

**Как используем в messaging:** "Structured phases prevent runaway — predictable costs" как proof point в A1.

---

### ~~A3: Code Review as Service~~ — DROPPED

**Причина drop:**
1. Forge не делает PR review — это другой продукт
2. Конкуренты в этом пространстве: CodeRabbit, SonarQube, GitHub Copilot review
3. Наша позиция: "prevention, not detection" (COMPETITOR-LANDSCAPE). Заходить в detection = терять дифференциацию
4. Наш ответ на P4 (confidently wrong) — forge-product (acceptance criteria BEFORE code) + forge-qa (tests FROM requirements) + red flags (15 rationalization detectors). Это prevention, не post-hoc review.

---

## Сегмент B: Предприниматели

### B1: Structured MVP Path — STRONG (главная гипотеза)

| | |
|---|---|
| **Исходная формулировка** | 1-click генерация full-stack MVP из Figma/промпта с auto-rules |
| **Скорректированная** | Entrepreneurs используют Forge как quality layer поверх любого AI-builder для создания handoff-ready MVP |
| **Целевые боли** | EP1 (idea-to-MVP gap) + EP3 (chaotic codebase) + EP5 (handoff fear) |
| **Решение Forge** | forge-product: design features in business language → forge-core: AI builds with architecture guardrails → forge-qa: auto-tests give confidence |
| **Proof point** | `/forge:design "subscription checkout"` → user flow + 5 stories + acceptance criteria → AI implements with quality gates → 12/12 tests pass |
| **Метрика** | % пользователей, чей код прошёл review freelance-разработчиком без рекомендации "переписать с нуля" |
| **Pricing** | $79/mo (forge-core + forge-product bundle) |

**Почему сработает:**
- EP1 — #1 по severity. "Want to test an idea but no money for developer"
- EP5 — #2, strongest emotional hook. "Will devs say throw everything away?"
- Killer line: "MVP your future dev team won't hate" (принцип #35)
- Lovable/Bolt дают код, но без guardrails. Forge = quality layer ON TOP

**Почему НЕ "builder":**
- Forge не генерирует код из Figma, не деплоит, не создаёт UI
- Forge создаёт pipeline, который НАПРАВЛЯЕТ AI-builder (Bolt, Claude Cowork, Cursor) строить правильно
- Позиционирование "builder" ставит нас в конкуренцию с Bolt/Lovable/Replit (массовые, бесплатные/дешёвые)
- Позиционирование "quality layer" — уникальное, нет прямой конкуренции (принцип #36)

---

### B2: Structured AI Development Path — REFRAMED

| | |
|---|---|
| **Исходная формулировка** | Guided onboarding: "опиши идею → auto-rules → deploy" с security scan |
| **Скорректированная** | Прозрачный, пошаговый AI-процесс разработки с видимым результатом на каждом шаге |
| **Целевые боли** | EP2 (black box anxiety) + EP1 (idea-to-MVP gap) |
| **Решение Forge** | Structured pipeline: Phase 0 (context) → Phase 1 (contracts) → Phase 2 (implement) → Phase 3 (verify). Каждая фаза видна, каждая gated. forge-qa даёт green/red без чтения кода |
| **Proof point** | Pipeline output: "Phase 1: contracts OK → Phase 2: implement OK → Phase 3: verify (12/12 tests pass) OK" |
| **Метрика** | % пользователей, завершающих полный цикл forge-product → forge-core → forge-qa |
| **Pricing** | Входит в B1 bundle |

**Почему reframe:**
- Deploy — outside Forge scope (EP4, "partially outside our scope")
- "Security scan" — Forge покрывает security patterns (auth guards, RLS, OWASP), но это не enterprise security scan. Не обещать то, чего нет
- Реальная ценность: transparency beats magic (принцип #37). Entrepreneurs боятся black box — Forge делает процесс видимым

**Связь с B1:** B2 — это "how it works" часть B1. Не отдельный продукт, а объяснение механизма.

---

### B3: Handoff-Ready Artifacts — STRONG (уникальная)

| | |
|---|---|
| **Исходная формулировка** | Экспорт "DevKit bundle" (код + rules + docs + migration guide) |
| **Скорректированная** | Forge artifacts survive removal — код, rules, тесты, документация остаются готовыми для передачи команде |
| **Целевая боль** | EP5 (handoff fear) — strongest emotional hook |
| **Решение Forge** | Disposable meta-tool: generated artifacts (dev-skills, tests, quality patterns, docs) work independently after plugin removal. Production-grade code from day one |
| **Proof point** | "I showed the codebase to a senior dev. He said 'this is well-structured, I can work with this.'" (future testimonial direction) |
| **Метрика** | 50% пользователей шэрят проект с freelancers/devs (tracked via survey/analytics) |
| **Pricing** | Входит в B1 bundle ($79/mo) |

**Почему сработает:**
- EP5 — deep anxiety: "What happens when I actually need a developer?"
- Disposable meta-tool — уже USP Forge, нужно громче заявить
- "No team yet needed, not no team ever" (принцип #34) — honest messaging
- Migration guide — отличная идея для roadmap, не для MVP

**Messaging direction:** "Forge artifacts survive removal. Your code, your rules, your tests — ready for a real team."

---

## Кросс-сегмент

### Cross-1: Shared Landing, Targeted Sections — CONFIRMED

| | |
|---|---|
| **Гипотеза** | Одна landing page с shared narrative + два targeted use case блока |
| **Approach** | B (из 004-dual-audience-strategy.md): shared hero + problem/solution + targeted "For Developers" / "For Entrepreneurs" blocks |
| **Метрика** | <20% bounce на обоих блоках; 15% lead→trial conversion |
| **Статус** | Уже решено. Подтверждено исследованием |

**Почему NOT "split landing":** Одна landing проще поддерживать, тестировать, итерировать. Dual messaging на одной странице показывает универсальность продукта. Оптимизируем split по analytics позже.

---

### Cross-2: Flat Pricing, No Freemium (MVP) — DEFERRED freemium

| | |
|---|---|
| **Исходная гипотеза** | Free: 3 rules gen/mo → Paid: unlimited + integrations |
| **Решение** | Flat pricing на MVP ($29/$79/$149). Freemium отложен |
| **Причина** | Текущая архитектура API: LemonSqueezy → license key → activate → download. Free tier не предусмотрен. Реализация требует: API доработки, CLI изменения, rate-limiting infrastructure |
| **Pricing на лендинге** | Показываем прямо и рано — transparent pricing is trust signal (принцип #31) |

**Почему flat pricing лучше на старте:**
- Hidden pricing / token-based billing = strong developer backlash (AUDIENCE-RESEARCH)
- $29/$79/$149 — predictable, comparable with dev tool market
- Freemium — отдельная продуктовая гипотеза для следующего цикла (когда есть usage data)

---

## Скорректированный Messaging Framework

### Headlines

| Аудитория | Исходный headline | Скорректированный | Обоснование |
|---|---|---|---|
| Devs | "AI agents that respect your codebase" | **"AI agents that respect your codebase"** (оставляем) | Точно попадает в hook "control & predictability". Конкретно, не generic |
| Founders | "Build production MVPs, no dev team" | **"MVP your future team won't hate"** | Исходный звучит как builder (Bolt messaging). Скорректированный адресует EP5 (handoff fear) — #2 emotional hook |

### Fear → Solution

| Аудитория | Исходный fear | Скорректированный | Обоснование |
|---|---|---|---|
| Devs | Chaotic changes | **Architecture violations** | P3 (#1 severity) шире чем "chaotic changes". Включает: broken invariants, security shortcuts, cross-module breakage |
| Founders | Unscalable toys | **"Code your team will rewrite from scratch"** | EP5 формулировка. "Unscalable" — техническое слово. "Rewrite from scratch" — эмоциональный удар |

### CTA

| Аудитория | Исходный CTA | Скорректированный | Обоснование |
|---|---|---|---|
| Devs | "Generate rules now" | **"Audit your architecture"** | "Generate rules" = commodity. "Audit your architecture" отражает 7-gate wizard и full pipeline |
| Founders | "Launch your idea" | **"Design your first feature"** | "Launch" = builder CTA (Bolt/Replit). "Design your first feature" указывает на forge-product — наш entry point для entrepreneurs |

---

## Финальная карта гипотез

```
STRONG (лендинг строим вокруг них):
├── A1: Architecture-Aware AI Pipeline (dev hero)
├── B1: Structured MVP Path (entrepreneur hero)
└── B3: Handoff-Ready Artifacts (entrepreneur USP)

SUPPORTING (поддерживают hero гипотезы):
├── B2: Structured AI Path (= "how it works" для B1)
├── Token economy (= proof point в A1)
└── Cross-1: Dual landing (= page architecture)

DEFERRED (следующий цикл):
├── Cross-2: Freemium (требует API work)
└── B3 migration guide feature (roadmap)

DROPPED:
├── A2: Token Guard as standalone (merged → A1)
└── A3: Code Review Service (другой продукт, конфликт с positioning)
```

---

## Implications for Landing Page

### Section priorities (based on hypothesis strength):

1. **Hero:** Shared — "AI agents that respect your codebase" (devs) / "MVP your future team won't hate" (founders). Dynamic or A/B tested.
2. **Problem:** Architecture violations (devs) + handoff fear (founders) — shared section, dual framing
3. **Solution overview:** Full pipeline, not rules. Quality layer, not builder.
4. **For Developers block:** A1 — architecture audit, dev-skills, quality patterns, pipeline phases
5. **For Entrepreneurs block:** B1 + B3 — structured MVP path, handoff-ready artifacts, transparent process
6. **How it Works:** B2 — pipeline phases visualization (works for both segments)
7. **Modules:** forge-core (hero) → forge-product → forge-qa → forge-tracker
8. **Pricing:** Flat, transparent, early on page
9. **Author/Trust:** Real face, real experience, real technical opinions
10. **FAQ:** Segment-specific questions
