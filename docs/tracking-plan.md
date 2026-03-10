# Forge DevKit - Tracking Plan (BL-019)

> Полный план аналитики для reumbra.com/forge. Cloudflare Zaraz + GA4.
> Формат: русский текст, английские имена событий (отраслевой стандарт).

---

## 0. Zaraz Debug Mode

Для отладки трекинга в браузере (консоль DevTools):

```js
zaraz.debug("d6lir6gnj04s739ghj6g");
```

После вызова Zaraz логирует все события, триггеры и конфигурацию в консоль.

> **Важно:** Zaraz не инжектится для headless браузеров (Playwright plugin MCP, curl).
> Для верификации используй реальный браузер через shared-playwright (CDP, порт 9222)
> или открой страницу вручную.

---

## 1. Соглашения об именовании событий

### Формат

```
{object}_{action}
```

- Все lowercase, underscore-разделитель
- `object` - сущность (cta, faq, pricing, nav, section, checkout, lang)
- `action` - глагол (click, view, open, toggle, switch, complete)

### Зарезервированные GA4 события (НЕ создавать кастомные)

GA4 Enhanced Measurement автоматически трекает следующие события. Дублировать их через `zaraz.track()` ЗАПРЕЩЕНО:

| GA4 событие | Что трекает | Настройка |
|---|---|---|
| `page_view` | Каждый переход между страницами | Автоматически |
| `scroll` | Скролл до 90% страницы | Автоматически |
| `click` (outbound) | Клики по внешним ссылкам | Автоматически |
| `first_visit` | Первый визит пользователя | Автоматически |
| `session_start` | Начало сессии | Автоматически |

### GA4 Recommended Events (использовать стандартные имена)

Для e-commerce воронки использовать стандартные GA4 имена - они автоматически появляются в отчетах GA4:

| GA4 событие | Наш контекст |
|---|---|
| `view_item` | Просмотр pricing-тира (карточка в видимой зоне) |
| `select_item` | Клик по CTA тира ("Get Core", "Get Pro", "Get Bundle") |
| `begin_checkout` | Открытие LemonSqueezy overlay |
| `purchase` | Завершение покупки |

---

## 2. Полный каталог событий

### 2.1 CTA-события (кастомные)

#### `cta_click`

Клик по любой CTA-кнопке на сайте (кроме pricing-тиров - для них `select_item`).

| Свойство | Тип | Описание | Примеры значений |
|---|---|---|---|
| `cta_location` | string | Секция/компонент, где расположена CTA | `hero`, `ghost_1`, `ghost_2`, `ghost_3`, `final_cta`, `nav`, `module_cta`, `comparison_verdict` |
| `cta_text` | string | Текст кнопки | `Get Forge - from €29`, `See pricing`, `Start with forge-core` |
| `cta_destination` | string | Целевой URL или anchor | `#pricing`, `/pricing`, `/modules/core` |
| `page_language` | string | Язык страницы | `en`, `ru` |
| `page_type` | string | Тип страницы | `homepage`, `pricing`, `module`, `comparison`, `docs` |

**Триггер:** Клик по `<Button>` или `<a>` с CTA-контекстом.

**Бизнес-вопрос:** Какие CTA-позиции генерируют больше переходов к pricing? Работает ли floating ghost CTA? Какая формулировка конвертирует лучше?

**Конкретные CTA на homepage (порядок сверху вниз):**

| cta_location | Компонент | Текст (EN) |
|---|---|---|
| `hero` | HeroSection | "Get Forge - from €29" |
| `hero` | HeroSection | "See pricing" (secondary) |
| `ghost_1` | GhostCtaSection #1 | "Start with forge-core" |
| `ghost_2` | GhostCtaSection #2 | "See pricing" |
| `ghost_3` | GhostCtaSection #3 | "Get started in 5 minutes" |
| `final_cta` | FinalCtaSection | CTA в финальном блоке |
| `nav` | NavBar | CTA-кнопка в навигации |

---

#### `nav_click`

Клик по навигационному элементу (НЕ CTA, а информационные ссылки).

| Свойство | Тип | Описание | Примеры значений |
|---|---|---|---|
| `nav_item` | string | Имя пункта меню | `modules`, `docs`, `pricing`, `vs` |
| `nav_target` | string | Целевой URL | `/modules`, `/docs/getting-started`, `/pricing` |
| `nav_type` | string | Тип навигации | `desktop_link`, `desktop_dropdown`, `mobile_menu`, `dropdown_item` |
| `page_language` | string | Язык | `en`, `ru` |

**Триггер:** Клик по ссылке в NavBar (десктоп или мобильное меню).

**Бизнес-вопрос:** Какие разделы сайта интересуют посетителей? Используется ли dropdown с модулями?

---

### 2.2 Section Visibility (кастомные)

#### `section_view`

Секция homepage попала в видимую зону экрана (IntersectionObserver, threshold 50%, однократно за сессию).

| Свойство | Тип | Описание | Примеры значений |
|---|---|---|---|
| `section_id` | string | HTML id секции | `hero`, `problems`, `solution`, `journey`, `deep-architecture`, `deep-quality`, `deep-pipeline`, `how-it-works`, `modules`, `dashboard`, `pricing`, `author`, `faq`, `final-cta` |
| `section_index` | number | Порядковый номер (1-14) | 1, 2, 3 ... 14 |
| `page_language` | string | Язык | `en`, `ru` |

**Триггер:** IntersectionObserver с `threshold: 0.5`, fire once per section per session.

**Бизнес-вопрос:** Какие секции homepage пользователи реально видят? Где drop-off скролла? До pricing (секция 11) долистывают X% посетителей.

**Полная карта секций homepage:**

| index | section_id | Виджет |
|---|---|---|
| 1 | `hero` | HeroSection |
| 2 | `problems` | ProblemSection |
| 3 | `solution` | SolutionOverviewSection |
| 4 | `journey` | EcosystemSection (simulator) |
| 5 | `deep-architecture` | DeepDiveArchitectureSection |
| 6 | `deep-quality` | DeepDiveQualitySection |
| 7 | `deep-pipeline` | DeepDivePipelineSection |
| 8 | `how-it-works` | HowItWorksSection |
| 9 | `modules` | ModulesSection |
| 10 | `dashboard` | DashboardSection |
| 11 | `pricing` | PricingSection |
| 12 | `author` | AuthorSection |
| 13 | `faq` | FaqSection |
| 14 | `final-cta` | FinalCtaSection |

> Примечание: GhostCtaSection не имеет id и не является self-standing секцией - не трекается как section_view.

---

### 2.3 Simulator-события (кастомные)

Секция EcosystemSection (id="journey") - интерактивный симулятор Product Assembly. Основной конверсионный элемент homepage.

#### `persona_select`

Выбор персоны (tier preset) в симуляторе.

| Свойство | Тип | Описание | Примеры значений |
|---|---|---|---|
| `persona_id` | string | ID персоны | `starter`, `pro`, `complete` |
| `page_language` | string | Язык | `en`, `ru` |

**Триггер:** Клик по `.sim-persona[data-persona]`.

**Бизнес-вопрос:** Какой tier пользователи выбирают первым? Коррелирует ли выбор персоны с последующей покупкой того же тира?

---

#### `assembly_complete`

Анимация сборки pipeline завершена.

| Свойство | Тип | Описание | Примеры значений |
|---|---|---|---|
| `persona_id` | string | Активная персона | `starter`, `pro`, `complete` |
| `module_count` | number | Кол-во модулей в сборке | 2, 6, 15 |
| `page_language` | string | Язык | `en`, `ru` |

**Триггер:** CustomEvent `forge:assembly-complete` из EcosystemSection.astro.

**Бизнес-вопрос:** Досматривают ли пользователи анимацию до конца? Воронка persona_select -> assembly_complete показывает drop-off во время анимации.

---

#### `customize_toggle`

Раскрытие/сворачивание панели кастомизации.

| Свойство | Тип | Описание | Примеры значений |
|---|---|---|---|
| `action` | string | Открытие или закрытие | `open`, `close` |
| `page_language` | string | Язык | `en`, `ru` |

**Триггер:** Клик по `#customize-toggle`.

**Бизнес-вопрос:** Какой процент пользователей раскрывает панель кастомизации? Сигнал о вовлеченности и IKEA Effect.

---

#### `capability_toggle`

Включение/выключение конкретной capability в кастомизации.

| Свойство | Тип | Описание | Примеры значений |
|---|---|---|---|
| `capability_id` | string | ID capability | `taskSync`, `prompts`, `agentTeams`, `marketValidation`, `seoContent`, `growthRetention` |
| `enabled` | boolean | Включена или выключена | true, false |
| `page_language` | string | Язык | `en`, `ru` |

**Триггер:** Событие `change` на `.sim-cap-cb[data-cap]`.

**Бизнес-вопрос:** Какие capabilities вызывают наибольший интерес? Какие capability чаще включают после первой сборки? Помогает приоритизировать маркетинг-фокус.

---

#### `rebuild_click`

Повторный запуск сборки после кастомизации.

| Свойство | Тип | Описание | Примеры значений |
|---|---|---|---|
| `page_language` | string | Язык | `en`, `ru` |

**Триггер:** Клик по `#rebuild-btn`.

**Бизнес-вопрос:** Какой процент пользователей запускает повторную сборку? Высокий rebuild rate = сильная вовлеченность (IKEA Effect работает).

---

### 2.4 FAQ-события (кастомные)

#### `faq_toggle`

Открытие/закрытие элемента FAQ-аккордеона.

| Свойство | Тип | Описание | Примеры значений |
|---|---|---|---|
| `faq_id` | string | ID вопроса из конфига | `cursorrules`, `stack-support`, `removal`, `platform-support`, `guarantee`, `roi`, `vs-devin`, `agent-teams`, `ai-tools`, `update-period` |
| `faq_question` | string | Текст вопроса (первые 80 символов) | `How is this different from writing .cursorrules myself?` |
| `faq_action` | string | Открытие или закрытие | `open`, `close` |
| `faq_index` | number | Порядковый номер вопроса (0-9) | 0, 1, 2 ... 9 |
| `page_type` | string | Тип страницы (homepage или pricing) | `homepage`, `pricing` |
| `page_language` | string | Язык | `en`, `ru` |

**Триггер:** Событие `toggle` на элементе `<details>` внутри `.accordion-item`.

**Бизнес-вопрос:** Какие вопросы чаще открывают? Это сигнал о незакрытых возражениях/непонятных местах. Если "guarantee" в топе - пользователи не уверены в покупке. Если "vs-devin" - нужно усилить сравнение.

---

### 2.5 Pricing-события (GA4 recommended + кастомные)

#### `view_item` (GA4 recommended)

Pricing-тир попал в видимую зону.

| Свойство | Тип | Описание | Примеры значений |
|---|---|---|---|
| `item_id` | string | ID тира | `core`, `pro`, `bundle` |
| `item_name` | string | Название | `CORE`, `PRO`, `BUNDLE` |
| `price` | number | Цена | 29, 79, 149 |
| `currency` | string | Валюта | `EUR` |
| `item_category` | string | Категория | `license` |

**Триггер:** IntersectionObserver на pricing-карточке (threshold 0.5, fire once per tier per session).

**Бизнес-вопрос:** Все ли тиры видят пользователи? (На мобильных может быть горизонтальный скролл.)

---

#### `select_item` (GA4 recommended)

Клик по CTA-кнопке конкретного pricing-тира ("Get Core", "Get Pro", "Get Bundle").

| Свойство | Тип | Описание | Примеры значений |
|---|---|---|---|
| `item_id` | string | ID тира | `core`, `pro`, `bundle` |
| `item_name` | string | Название | `CORE`, `PRO`, `BUNDLE` |
| `price` | number | Цена | 29, 79, 149 |
| `currency` | string | Валюта | `EUR` |
| `item_category` | string | Категория | `license` |
| `source_page` | string | Страница клика | `homepage`, `pricing` |
| `page_language` | string | Язык | `en`, `ru` |

**Триггер:** Клик по `<a href="https://reumbra.lemonsqueezy.com/buy/...">` внутри PricingSection.

**Бизнес-вопрос:** Какой тир кликают чаще? Различается ли выбор на homepage vs /pricing? Влияет ли язык на выбор тира?

---

#### `begin_checkout` (GA4 recommended)

LemonSqueezy overlay открылся (SDK перехватил клик и показал iframe).

| Свойство | Тип | Описание | Примеры значений |
|---|---|---|---|
| `item_id` | string | ID тира | `core`, `pro`, `bundle` |
| `item_name` | string | Название тира | `CORE`, `PRO`, `BUNDLE` |
| `price` | number | Цена | 29, 79, 149 |
| `currency` | string | Валюта | `EUR` |
| `source_page` | string | Страница, с которой открыли checkout | `homepage`, `pricing` |
| `page_language` | string | Язык | `en`, `ru` |

**Триггер:** LemonSqueezy JS SDK событие (см. раздел 5.3 ниже).

**Бизнес-вопрос:** Воронка select_item -> begin_checkout: какой процент кликов по тиру приводит к открытию overlay?

---

#### `purchase` (GA4 recommended)

Покупка завершена.

| Свойство | Тип | Описание | Примеры значений |
|---|---|---|---|
| `transaction_id` | string | ID транзакции LemonSqueezy | `ls_xxx` |
| `value` | number | Сумма | 29, 79, 149 |
| `currency` | string | Валюта | `EUR` |
| `item_id` | string | ID тира | `core`, `pro`, `bundle` |
| `item_name` | string | Название тира | `CORE`, `PRO`, `BUNDLE` |

**Триггер:** LemonSqueezy JS SDK callback `Checkout.Success` или webhook (см. раздел 5.3).

**Бизнес-вопрос:** Конверсия по всей воронке. Revenue по тирам. Attribution по source/medium.

---

#### `pricing_feature_table_view` (кастомное)

Пользователь проскроллил до таблицы сравнения фич на /pricing.

| Свойство | Тип | Описание | Примеры значений |
|---|---|---|---|
| `page_language` | string | Язык | `en`, `ru` |

**Триггер:** IntersectionObserver на PricingFeatureTable (threshold 0.3, fire once).

**Бизнес-вопрос:** Сколько посетителей /pricing изучают детальное сравнение фич?

---

### 2.6 Language-события (кастомные)

#### `lang_switch`

Переключение языка через LanguageSwitcher.

| Свойство | Тип | Описание | Примеры значений |
|---|---|---|---|
| `lang_from` | string | Исходный язык | `en`, `ru` |
| `lang_to` | string | Целевой язык | `ru`, `en` |
| `source_page` | string | Путь страницы | `/`, `/pricing`, `/modules/core` |

**Триггер:** Клик по элементу с `[data-lang-switch]`.

**Бизнес-вопрос:** Какой процент посетителей переключает язык? В какую сторону (en->ru или ru->en)? С каких страниц?

---

### 2.7 Module-события (кастомные)

#### `module_click`

Переход на страницу модуля.

| Свойство | Тип | Описание | Примеры значений |
|---|---|---|---|
| `module_slug` | string | Slug модуля | `core`, `product`, `qa`, `autopilot` |
| `click_source` | string | Откуда клик | `nav_dropdown`, `modules_grid`, `homepage_deepdive`, `docs_link` |
| `page_language` | string | Язык | `en`, `ru` |

**Триггер:** Клик по ссылке на `/modules/{slug}`.

**Бизнес-вопрос:** Какие модули вызывают наибольший интерес? Из какого контекста (навигация, грид, deep dive)?

---

### 2.8 Comparison-события (кастомные)

#### `comparison_view`

Посещение страницы сравнения (достаточно page_view, но нужен кастомный контекст).

| Свойство | Тип | Описание | Примеры значений |
|---|---|---|---|
| `comparison_slug` | string | Slug сравнения | `cursor-rules`, `devin`, `claude-md` |
| `page_language` | string | Язык | `en`, `ru` |

**Триггер:** Pageload на `/vs/{slug}`. Реализовать как кастомное событие в `<script>` на странице (дополняет автоматический page_view контекстом slug).

**Бизнес-вопрос:** Какие сравнения привлекают трафик? Конвертируют ли посетители comparison-страниц лучше?

---

### 2.9 Docs-события (кастомные)

#### `docs_view`

Посещение документации (аналогично comparison - дополняет page_view контекстом).

| Свойство | Тип | Описание | Примеры значений |
|---|---|---|---|
| `docs_page` | string | Slug документации | `getting-started`, `usage-guide` |
| `page_language` | string | Язык | `en`, `ru` |

**Триггер:** Pageload на `/docs/{slug}`.

**Бизнес-вопрос:** Читают ли пользователи документацию перед покупкой? Коррелирует ли чтение docs с conversion rate?

---

## 3. Custom Dimensions (GA4)

Регистрировать как пользовательские параметры в GA4 Admin > Custom definitions.

| Dimension name | Scope | Параметр события | Описание |
|---|---|---|---|
| Page Language | Event | `page_language` | `en` / `ru` |
| Page Type | Event | `page_type` | `homepage` / `pricing` / `module` / `comparison` / `docs` / `legal` |
| CTA Location | Event | `cta_location` | Позиция CTA на странице |
| Pricing Tier | Event | `item_id` | `core` / `pro` / `bundle` |
| FAQ Item ID | Event | `faq_id` | ID вопроса FAQ |
| Module Slug | Event | `module_slug` | `core` / `product` / `qa` / `autopilot` |
| Comparison Slug | Event | `comparison_slug` | `cursor-rules` / `devin` / `claude-md` |
| Section ID | Event | `section_id` | ID секции homepage |
| Persona ID | Event | `persona_id` | `starter` / `pro` / `complete` |
| Capability ID | Event | `capability_id` | ID capability в симуляторе |

### Автоматические GA4 dimensions (НЕ создавать)

GA4 автоматически собирает и предоставляет:
- `source`, `medium`, `campaign` (UTM)
- `country`, `city`, `language` (браузер)
- `device_category`, `operating_system`, `browser`
- `page_location`, `page_referrer`, `page_title`

---

## 4. Conversion Funnel

### 4.1 Основная воронка (homepage -> purchase)

```
Stage 1: LANDING
  Событие: page_view (автоматическое)
  Условие: page_location contains reumbra.com

Stage 2: ENGAGED
  Событие: section_view
  Условие: section_index >= 3 (проскроллил мимо hero + problem до solution)

Stage 3: PRICING VIEWED
  Событие: section_view WHERE section_id = "pricing"
  ИЛИ page_view WHERE page_location = "/pricing"

Stage 4: TIER SELECTED
  Событие: select_item

Stage 5: CHECKOUT OPENED
  Событие: begin_checkout

Stage 6: PURCHASE
  Событие: purchase
```

### 4.2 Воронка по сегментам

Строить ту же воронку отдельно для:
- **Язык**: EN vs RU
- **Entry point**: homepage vs comparison vs module vs docs vs pricing (direct)
- **Тир**: core vs pro vs bundle (от Stage 4)
- **Device**: desktop vs mobile

### 4.3 Микроворонки

**Simulator -> Purchase:**
```
persona_select -> assembly_complete -> customize_toggle (open) -> capability_toggle -> rebuild_click -> select_item -> purchase
```
Вопрос: пользователи, прошедшие симулятор, конвертируются лучше? Какой persona_id коррелирует с purchase?

**FAQ -> Purchase:**
```
faq_toggle (open) -> select_item -> begin_checkout -> purchase
```
Вопрос: пользователи, открывшие FAQ, конвертируются лучше или хуже?

**Comparison -> Purchase:**
```
comparison_view -> (page_view pricing) -> select_item -> purchase
```
Вопрос: посетители comparison-страниц конвертируются лучше?

**Docs -> Purchase:**
```
docs_view -> (page_view pricing) -> select_item -> purchase
```
Вопрос: читатели docs конвертируются лучше?

---

## 5. Zaraz + GA4: Implementation Notes

### 5.1 Начальная настройка Zaraz

1. **Cloudflare Dashboard** > Website > Zaraz > Tools > Add Tool > Google Analytics 4
2. Ввести GA4 Measurement ID (`G-XXXXXXXXXX`)
3. **Consent mode**: включить (см. 5.5)
4. **Enhanced Measurement** в GA4 Property Settings > Data Streams > Web stream > Enhanced measurement:
   - Page views: ON
   - Scrolls: ON
   - Outbound clicks: ON
   - Site search: OFF (нет поиска)
   - Video engagement: OFF (нет видео)
   - File downloads: OFF (нет файлов)
   - Form interactions: OFF (нет форм, checkout через LS overlay)

### 5.2 Zaraz: два механизма трекинга

**A. Zaraz Triggers (zero-code, настраивается в dashboard)**

Использовать для событий, привязанных к CSS-селекторам:

| Событие | Zaraz Trigger Type | CSS Selector / Rule |
|---|---|---|
| `faq_toggle` | Click | `.accordion-item summary` |
| `lang_switch` | Click | `[data-lang-switch]` |
| `nav_click` | Click | `nav a`, `[data-dropdown-trigger]` |

Ограничение: Zaraz click triggers не могут передавать динамические свойства (text, id) из DOM. Поэтому для событий с контекстом (faq_id, cta_location) использовать вариант B.

**B. zaraz.track() (in-code, JS вызов)**

Для событий с динамическими свойствами:

```js
// Пример: cta_click
zaraz.track("cta_click", {
  cta_location: "hero",
  cta_text: "Get Forge - from €29",
  cta_destination: "#pricing",
  page_language: document.documentElement.lang || "en",
  page_type: "homepage"
});
```

Zaraz Dashboard: для каждого `zaraz.track()` вызова создать правило:
- Zaraz > Tools > GA4 > Add Event
- Trigger: Match Rule = `{{ client.__zarazTrack }}` equals `cta_click`
- Event Name: `cta_click`
- Event Parameters: маппинг `{{ client.__zarazTrackProperty.cta_location }}` и т.д.

### 5.3 LemonSqueezy интеграция

LemonSqueezy JS SDK (`lemon.js`) предоставляет события для overlay checkout. Интеграция через глобальный обработчик:

```js
// В BaseLayout.astro, после загрузки lemon.js
window.createLemonSqueezy?.();

// Перехват открытия overlay
// LemonSqueezy SDK добавляет класс .lemonsqueezy-overlay к body при открытии.
// Способ 1: MutationObserver на body class
const observer = new MutationObserver((mutations) => {
  for (const m of mutations) {
    if (m.attributeName === "class") {
      const hasOverlay = document.body.classList.contains("lemonsqueezy-overlay");
      if (hasOverlay) {
        // Определить тир из последнего select_item
        zaraz.track("begin_checkout", {
          item_id: window.__lastSelectedTier?.id || "unknown",
          item_name: window.__lastSelectedTier?.name || "unknown",
          price: window.__lastSelectedTier?.price || 0,
          currency: "EUR",
          source_page: location.pathname,
          page_language: document.documentElement.lang || "en"
        });
      }
    }
  }
});
observer.observe(document.body, { attributes: true });

// Способ 2: LemonSqueezy eventCallback (если SDK поддерживает)
// Проверить в актуальной документации LemonSqueezy:
// window.LemonSqueezy?.Setup({ eventHandler: (event) => { ... } });
```

**purchase event - два подхода:**

| Подход | Плюсы | Минусы |
|---|---|---|
| **A. Client-side (LS SDK callback)** | Мгновенная атрибуция, session привязка | Ненадежен (закрытие вкладки, adblock) |
| **B. Server-side (LS Webhook -> GA4 MP)** | 100% надежность | Нет session/client_id, сложнее атрибуция |

**Рекомендация: оба.**

- **Client-side**: LS SDK callback/event -> `zaraz.track("purchase", ...)` для session-атрибуции
- **Server-side**: LS Webhook `order_created` -> GA4 Measurement Protocol (server-side) как backup

Webhook endpoint можно добавить в forge-devkit-api:
```
POST /velvet/webhooks/lemonsqueezy
-> Validate signature
-> POST to GA4 Measurement Protocol (mp/collect)
```

### 5.4 Cross-domain tracking

**НЕ НУЖЕН** в стандартном сценарии. LemonSqueezy overlay открывается как iframe на том же домене (reumbra.com). Пользователь не уходит с сайта. Zaraz cookie остается.

Если LemonSqueezy иногда редиректит (не overlay, а полный redirect) - тогда:
- Zaraz > Tools > GA4 > Cross-domain measurement > Add `lemonsqueezy.com`
- GA4 Property > Data Streams > Configure tag settings > Configure your domains > Add `lemonsqueezy.com`

Проверить поведение в разных браузерах перед настройкой.

### 5.5 Consent Mode (GDPR)

Cloudflare Zaraz имеет встроенный Consent Manager:

1. **Zaraz > Consent** > Enable Consent Management
2. Создать purpose: "Analytics" (GA4)
3. Привязать GA4 tool к purpose "Analytics"
4. Zaraz автоматически покажет consent banner
5. До согласия: GA4 работает в `consent_mode: denied` (cookieless pings, без персональных данных)
6. После согласия: полное отслеживание

**Footer**: на сайте уже есть "Cookie Settings" в footer - привязать к Zaraz consent UI.

**Consent Mode v2** (обязателен для EU с март 2024):
- `analytics_storage`: granted/denied
- `ad_storage`: denied (нет рекламы)
- `ad_user_data`: denied
- `ad_personalization`: denied

---

## 6. UTM Strategy

### 6.1 Naming Convention

```
utm_source:   платформа/партнер (lowercase)
utm_medium:   тип трафика (стандартизирован)
utm_campaign: кампания (kebab-case)
utm_content:  вариант/позиция (optional)
utm_term:     ключевое слово (optional, для paid search)
```

### 6.2 Стандартные UTM для каждого источника

| Источник | utm_source | utm_medium | utm_campaign | Пример URL |
|---|---|---|---|---|
| Twitter/X пост | `twitter` | `social` | `launch-2026` | `?utm_source=twitter&utm_medium=social&utm_campaign=launch-2026` |
| Reddit пост | `reddit` | `social` | `r-{subreddit}` | `?utm_source=reddit&utm_medium=social&utm_campaign=r-claudedev` |
| Hacker News | `hackernews` | `social` | `hn-launch` | `?utm_source=hackernews&utm_medium=social&utm_campaign=hn-launch` |
| Dev.to статья | `devto` | `referral` | `article-{slug}` | `?utm_source=devto&utm_medium=referral&utm_campaign=article-forge-intro` |
| Email рассылка | `email` | `email` | `{campaign-name}` | `?utm_source=email&utm_medium=email&utm_campaign=launch-announce` |
| GitHub README | `github` | `referral` | `repo-{name}` | `?utm_source=github&utm_medium=referral&utm_campaign=repo-forge-core` |
| npm package | `npm` | `referral` | `package-forge` | `?utm_source=npm&utm_medium=referral&utm_campaign=package-forge` |
| Claude CLI output | `forge-cli` | `product` | `cli-upsell` | `?utm_source=forge-cli&utm_medium=product&utm_campaign=cli-upsell` |
| Партнерский блог | `{partner}` | `referral` | `partner-{name}` | `?utm_source=ainews&utm_medium=referral&utm_campaign=partner-review` |
| Paid search (если будет) | `google` | `cpc` | `{campaign}` | `?utm_source=google&utm_medium=cpc&utm_campaign=ai-tools-2026` |

### 6.3 Внутренние ссылки (cross-page)

Для внутренних переходов UTM НЕ использовать (сбивают атрибуцию). Вместо этого - кастомные параметры в URL или `zaraz.track()` с контекстом source.

Пример: с comparison page на pricing:
```
/pricing?ref=vs-devin
```

В JS:
```js
const ref = new URLSearchParams(location.search).get("ref");
if (ref) {
  zaraz.track("internal_referral", { ref_source: ref, landing_page: location.pathname });
}
```

---

## 7. Dashboard Design (GA4 Explorations + Looker Studio)

### 7.1 Acquisition Dashboard

**Цель:** Откуда приходят посетители и какие источники конвертируют.

| Метрика / Виджет | Тип | Dimensions |
|---|---|---|
| Sessions by source/medium | Table | source, medium |
| New users by source | Bar chart | source |
| Conversion rate by source | Table | source, medium + purchase event |
| Landing page distribution | Table | page_location |
| Geo distribution | Map | country |
| Device breakdown | Pie | device_category |

---

### 7.2 Funnel Dashboard

**Цель:** Прохождение воронки от landing до purchase.

| Виджет | Тип | Настройка |
|---|---|---|
| Main funnel | Funnel exploration | 6 stages (раздел 4.1) |
| Funnel by language | Funnel exploration | Segment: page_language = en / ru |
| Funnel by entry page | Funnel exploration | Segment: landing page type |
| Tier selection distribution | Pie chart | select_item by item_id |
| Checkout drop-off | Scorecard | select_item -> begin_checkout conversion % |
| Purchase drop-off | Scorecard | begin_checkout -> purchase conversion % |
| Revenue by tier | Bar chart | purchase by item_id, value |

---

### 7.3 Content Engagement Dashboard

**Цель:** Какой контент работает, что пропускают.

| Виджет | Тип | Настройка |
|---|---|---|
| Section view waterfall | Bar chart | section_view by section_id, sorted by index |
| Section drop-off curve | Line chart | section_view count vs section_index |
| FAQ open frequency | Bar chart | faq_toggle (open) by faq_id |
| Top FAQ items | Table | faq_id, open count, sorted desc |
| Module interest | Bar chart | module_click by module_slug |
| Comparison page traffic | Table | comparison_view by comparison_slug + session count |
| Docs engagement | Table | docs_view by docs_page + subsequent purchase rate |
| Ghost CTA performance | Table | cta_click WHERE cta_location starts with "ghost" |

---

### 7.4 i18n Comparison Dashboard

**Цель:** Сравнение поведения EN и RU аудиторий.

| Виджет | Тип | Настройка |
|---|---|---|
| Sessions by language | Pie | page_language |
| Funnel by language | Side-by-side funnels | Segment: page_language |
| Conversion rate by language | Scorecard x2 | purchase / session, filtered by language |
| Avg sections seen by language | Scorecard x2 | max(section_index) per session, by language |
| FAQ interest by language | Grouped bar | faq_toggle by faq_id, grouped by page_language |
| Tier preference by language | Stacked bar | select_item by item_id, grouped by page_language |
| Language switch rate | Scorecard | lang_switch events / total sessions |
| Switch direction | Pie | lang_switch by direction (en->ru vs ru->en) |

---

## 8. Реализация: приоритеты и фазы

### Phase 1: Базовая аналитика (день 1)

- [ ] Создать GA4 property для reumbra.com
- [ ] Подключить GA4 в Cloudflare Zaraz
- [ ] Включить Enhanced Measurement (page_view, scroll, outbound_click)
- [ ] Настроить Consent Mode v2 через Zaraz Consent Manager
- [ ] Привязать "Cookie Settings" в footer к Zaraz consent

**Результат:** page_view, scroll, outbound_click работают без единой строки JS.

### Phase 2: CTA + Section tracking (день 2-3)

- [ ] Добавить `zaraz.track("cta_click", ...)` на все CTA-кнопки
- [ ] IntersectionObserver для `section_view` на homepage
- [ ] `zaraz.track("nav_click", ...)` на навигацию
- [ ] `zaraz.track("lang_switch", ...)` на LanguageSwitcher
- [ ] Создать Zaraz event rules для каждого кастомного события
- [ ] Зарегистрировать Custom Dimensions в GA4

**Результат:** полная картина engagement на homepage.

### Phase 3: Pricing + Checkout (день 4-5)

- [ ] IntersectionObserver для `view_item` на pricing-карточках
- [ ] `zaraz.track("select_item", ...)` на pricing CTA кнопки
- [ ] LemonSqueezy overlay detection -> `begin_checkout`
- [ ] LemonSqueezy SDK callback -> `purchase` (client-side)
- [ ] Пометить `purchase` как conversion в GA4
- [ ] Настроить Funnel exploration в GA4

**Результат:** полная воронка от landing до purchase.

### Phase 4: Context events + Server-side (день 6-7)

- [ ] `faq_toggle` на accordion
- [ ] `comparison_view` на /vs/* страницах
- [ ] `docs_view` на /docs/* страницах
- [ ] `module_click` на ссылках модулей
- [ ] `pricing_feature_table_view` на /pricing
- [ ] Server-side purchase webhook (LS -> forge-devkit-api -> GA4 MP)
- [ ] UTM links для launch-кампании

**Результат:** полная аналитика + server-side backup для purchase.

### Phase 5: Dashboards (день 8)

- [ ] GA4 Explorations: 4 dashboard (разделы 7.1-7.4)
- [ ] Или Looker Studio подключение к GA4 для кастомных dashboard
- [ ] Проверка данных: сравнить client-side vs server-side purchase events

---

## 9. Сводная таблица событий

| # | Событие | Тип | Zaraz метод | Свойства | Бизнес-вопрос |
|---|---|---|---|---|---|
| 1 | `page_view` | GA4 auto | Enhanced Measurement | (автоматические) | Трафик, landing pages |
| 2 | `scroll` | GA4 auto | Enhanced Measurement | (автоматические) | Общая глубина скролла |
| 3 | `click` (outbound) | GA4 auto | Enhanced Measurement | (автоматические) | Внешние переходы |
| 4 | `cta_click` | Custom | `zaraz.track()` | cta_location, cta_text, cta_destination, page_language, page_type | Эффективность CTA-позиций |
| 5 | `nav_click` | Custom | `zaraz.track()` | nav_item, nav_target, nav_type, page_language | Навигационные паттерны |
| 6 | `section_view` | Custom | `zaraz.track()` | section_id, section_index, page_language | Engagement по секциям, drop-off |
| 7 | `faq_toggle` | Custom | `zaraz.track()` | faq_id, faq_question, faq_action, faq_index, page_type, page_language | Топ-возражения |
| 8 | `view_item` | GA4 recommended | `zaraz.track()` | item_id, item_name, price, currency, item_category | Видимость тиров |
| 9 | `select_item` | GA4 recommended | `zaraz.track()` | item_id, item_name, price, currency, item_category, source_page, page_language | Выбор тира |
| 10 | `begin_checkout` | GA4 recommended | `zaraz.track()` | item_id, item_name, price, currency, source_page, page_language | Открытие checkout |
| 11 | `purchase` | GA4 recommended | `zaraz.track()` + webhook | transaction_id, value, currency, item_id, item_name | Конверсия, revenue |
| 12 | `lang_switch` | Custom | `zaraz.track()` | lang_from, lang_to, source_page | Языковые предпочтения |
| 13 | `module_click` | Custom | `zaraz.track()` | module_slug, click_source, page_language | Интерес к модулям |
| 14 | `comparison_view` | Custom | `zaraz.track()` | comparison_slug, page_language | Трафик сравнений |
| 15 | `docs_view` | Custom | `zaraz.track()` | docs_page, page_language | Docs -> conversion |
| 16 | `pricing_feature_table_view` | Custom | `zaraz.track()` | page_language | Engagement на /pricing |
| 17 | `persona_select` | Custom | `zaraz.track()` | persona_id, page_language | Выбор tier preset в симуляторе |
| 18 | `assembly_complete` | Custom | `zaraz.track()` | persona_id, module_count, page_language | Досмотр анимации сборки |
| 19 | `customize_toggle` | Custom | `zaraz.track()` | action, page_language | Вовлечённость в кастомизацию |
| 20 | `capability_toggle` | Custom | `zaraz.track()` | capability_id, enabled, page_language | Интерес к конкретным capabilities |
| 21 | `rebuild_click` | Custom | `zaraz.track()` | page_language | IKEA Effect - повторная сборка |

**Итого: 3 автоматических + 4 GA4 recommended + 14 кастомных = 21 событие.**

---

## 10. Технические заметки для имплементации

### 10.1 Общий паттерн для Astro SSG

Astro - статический сайт. Весь tracking JS должен быть в `<script>` тегах (client-side). Zaraz загружается автоматически через Cloudflare (edge injection), `window.zaraz` доступен глобально.

```js
// Проверка доступности Zaraz
if (typeof zaraz !== "undefined") {
  zaraz.track("event_name", { ... });
}
```

### 10.2 IntersectionObserver паттерн (переиспользуемый)

```js
// Utility: track element visibility once per session
function trackVisibility(selector, eventName, propsCallback) {
  const seen = new Set();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !seen.has(entry.target)) {
        seen.add(entry.target);
        const props = propsCallback(entry.target);
        if (typeof zaraz !== "undefined") {
          zaraz.track(eventName, props);
        }
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
}
```

### 10.3 data-атрибуты для tracking context

Чтобы не хардкодить контекст в JS, использовать `data-*` атрибуты в HTML:

```html
<!-- На CTA-кнопке -->
<a href="#pricing" data-track-cta data-cta-location="hero" data-cta-text="Get Forge">...</a>

<!-- На секции -->
<section id="pricing" data-track-section data-section-index="11">...</section>

<!-- На FAQ -->
<details data-track-faq data-faq-id="cursorrules" data-faq-index="0">...</details>

<!-- На pricing tier -->
<div data-track-tier data-tier-id="pro" data-tier-name="PRO" data-tier-price="79">...</div>
```

### 10.4 Файловая структура tracking-кода

```
src/
  shared/
    tracking/
      zaraz.ts          <- type-safe wrapper: trackEvent(name, props)
      section-tracker.ts <- IntersectionObserver для section_view
      cta-tracker.ts     <- click handler для cta_click
      faq-tracker.ts     <- toggle handler для faq_toggle
      pricing-tracker.ts <- view_item, select_item, begin_checkout
      init.ts            <- подключение всех трекеров
  layouts/
    BaseLayout.astro     <- <script src="tracking/init.ts">
```

### 10.5 Тестирование

1. **Zaraz Debug Mode**: Cloudflare Dashboard > Zaraz > Settings > Debug Mode > ON
2. **GA4 DebugView**: GA4 > Admin > DebugView (realtime event stream)
3. **Browser console**: `zaraz.debug()` включает логирование в console
4. **Tag Assistant**: Chrome extension для проверки GA4 тегов

---

## Appendix A: GA4 Property Configuration Checklist

- [ ] Property name: `Forge DevKit - Production`
- [ ] Timezone: Europe/Tallinn (EST HQ)
- [ ] Currency: EUR
- [ ] Data Stream: Web, `reumbra.com`
- [ ] Enhanced Measurement: page_view, scroll, outbound_click (ON), rest OFF
- [ ] Data retention: 14 months (maximum free)
- [ ] Google Signals: OFF (не нужен, нет рекламы)
- [ ] Conversions: mark `purchase` as conversion event
- [ ] Custom Dimensions: 8 event-scoped dimensions (раздел 3)
- [ ] Audiences: создать `Pricing Viewers`, `Comparison Visitors`, `Docs Readers`, `RU Visitors`

## Appendix B: DebugView Event Sequence (expected)

При тестировании типичного user journey в GA4 DebugView должна быть такая последовательность:

```
1. page_view (homepage)
2. section_view (hero, index=1)
3. section_view (problems, index=2)
4. section_view (solution, index=3)
5. cta_click (ghost_1, "Start with forge-core")
6. section_view (pricing, index=11)
7. view_item (pro)
8. select_item (pro, price=79)
9. begin_checkout (pro)
10. purchase (pro, value=79)
```
