export interface PricingFeatureRow {
	feature: string;
	module: string;
	core: boolean | string;
	pro: boolean | string;
	bundle: boolean | string;
}

export interface PricingPageConfig {
	headline: string;
	subheadline: string;
	competitorAnchor: string;
	featureTable: PricingFeatureRow[];
	trustBadges: { icon: string; title: string; description: string }[];
	diyBlock: {
		headline: string;
		points: { title: string; description: string }[];
	};
	faq: { question: string; answer: string }[];
}

export const pricingPage: PricingPageConfig = {
	headline: "One-time purchase. Your artifacts stay forever.",
	subheadline:
		"No subscription. No per-token charges. Pay once, use your generated artifacts indefinitely.",
	competitorAnchor:
		"Devin: \u20AC240/yr mandatory. Cursor Pro: \u20AC240/yr. Forge: from \u20AC29 once.",

	featureTable: [
		// forge-core (Starter+)
		{ feature: "Architecture audit (7-gate wizard)", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "50+ quality patterns", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "15 rationalization detectors", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "3 execution modes", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "Cross-repo support", module: "forge-core", core: true, pro: true, bundle: true },
		// forge-worktree (Starter+)
		{ feature: "Git worktree lifecycle", module: "forge-worktree", core: true, pro: true, bundle: true },
		{ feature: "Docker port isolation", module: "forge-worktree", core: true, pro: true, bundle: true },
		// forge-product (Pro+)
		{ feature: "Product design (9 archetypes)", module: "forge-product", core: false, pro: true, bundle: true },
		{ feature: "User stories with AC", module: "forge-product", core: false, pro: true, bundle: true },
		{ feature: "UX criteria library", module: "forge-product", core: false, pro: true, bundle: true },
		// forge-qa (Pro+)
		{ feature: "Test generation (8+ frameworks)", module: "forge-qa", core: false, pro: true, bundle: true },
		{ feature: "4-level traceability", module: "forge-qa", core: false, pro: true, bundle: true },
		{ feature: "LLM-as-Judge", module: "forge-qa", core: false, pro: true, bundle: true },
		// forge-tracker (Pro+)
		{ feature: "Task tracker sync (5 integrations)", module: "forge-tracker", core: false, pro: true, bundle: true },
		// forge-prompts (Pro+)
		{ feature: "Prompt engineering frameworks", module: "forge-prompts", core: false, pro: true, bundle: true },
		{ feature: "Prompt inventory & audit", module: "forge-prompts", core: false, pro: true, bundle: true },
		// forge-autopilot (Complete)
		{ feature: "Parallel agent orchestration", module: "forge-autopilot", core: false, pro: false, bundle: true },
		{ feature: "Conflict-free wave planning", module: "forge-autopilot", core: false, pro: false, bundle: true },
		{ feature: "3 autonomy modes", module: "forge-autopilot", core: false, pro: false, bundle: true },
		// Product advisory (Complete) - 9 modules
		{ feature: "Product discovery & validation", module: "forge-discovery", core: false, pro: false, bundle: true },
		{ feature: "Marketing strategy & positioning", module: "forge-marketing", core: false, pro: false, bundle: true },
		{ feature: "Analytics planning & event schemas", module: "forge-analytics", core: false, pro: false, bundle: true },
		{ feature: "Onboarding flow design", module: "forge-onboarding", core: false, pro: false, bundle: true },
		{ feature: "Production copy & brand voice", module: "forge-copy", core: false, pro: false, bundle: true },
		{ feature: "SEO strategy & technical audit", module: "forge-seo", core: false, pro: false, bundle: true },
		{ feature: "Growth loops & retention", module: "forge-growth", core: false, pro: false, bundle: true },
		{ feature: "A/B test design & analysis", module: "forge-ab", core: false, pro: false, bundle: true },
		// Future
		{ feature: "Every future module", module: "-", core: false, pro: false, bundle: true },
	],

	trustBadges: [
		{
			icon: "\u2714",
			title: "No subscription",
			description: "One-time purchase. Not \u20AC20/month. Not \u20AC240/year.",
		},
		{
			icon: "\u221E",
			title: "Artifacts yours forever",
			description: "Generated files stay in your project even without renewal.",
		},
		{
			icon: "\u21BB",
			title: "Renewal optional",
			description: "1 year of updates included. Renew at ~60% for continued updates.",
		},
		{
			icon: "\u2694",
			title: "No usage limits",
			description: "No per-token charges. No seat limits. No surprise bills.",
		},
	],

	diyBlock: {
		headline: "Why not just write your own CLAUDE.md?",
		points: [
			{
				title: "Scope",
				description: "A good CLAUDE.md takes 2-3 hours to write. Forge generates it from a 7-gate audit with 50+ patterns you would never think of.",
			},
			{
				title: "Maintenance",
				description: "Hand-written rules drift as your codebase evolves. Forge re-audits on every setup - patterns stay current automatically.",
			},
			{
				title: "Pipeline",
				description: "CLAUDE.md is just rules. Forge is a full pipeline: architecture audit, quality patterns, test generation, requirement traceability. You cannot DIY that in a weekend.",
			},
		],
	},

	faq: [
		{
			question: "What happens after the first year?",
			answer:
				"Your generated artifacts continue working indefinitely. The 1-year update period gives you access to new patterns, templates, and module improvements. After it expires, everything you have keeps working - you just don't get new updates.",
		},
		{
			question: "Do I have to renew?",
			answer:
				"No. Renewal is completely optional. If you renew, you get another year of updates at a reduced price (~60% of original). If you don't, your existing artifacts keep working forever.",
		},
		{
			question: "What if I don't renew and want to later?",
			answer:
				"You can renew anytime. You'll get access to all updates released since your last update period ended.",
		},
		{
			question: "Is there a refund policy?",
			answer:
				"Yes. 14-day no-questions-asked refund policy. If Forge doesn't work for your project, email us for a full refund.",
		},
		{
			question: "Can I use it on multiple projects?",
			answer:
				"Yes. Each license includes device activations based on your tier: Core 2, Pro 3, Complete 5. You can use Forge on as many projects as you want on those devices.",
		},
		{
			question: "What are the 8 advisory modules in Complete?",
			answer:
				"Discovery, marketing, analytics, onboarding, copy, SEO, growth, and A/B testing. Each generates strategy docs and configs your project can use - from competitive research to conversion optimization. They work best with forge-product as the central hub.",
		},
	],
};

const pricingPageRu: PricingPageConfig = {
	headline: "Разовая покупка. Ваши артефакты остаются навсегда.",
	subheadline:
		"Без подписки. Без оплаты за токены. Заплатите один раз, используйте сгенерированные артефакты бессрочно.",
	competitorAnchor:
		"Devin: \u20AC240/год обязательно. Cursor Pro: \u20AC240/год. Forge: от \u20AC29 однократно.",

	featureTable: [
		// forge-core (Starter+)
		{ feature: "Архитектурный аудит (7-gate wizard)", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "50+ паттернов качества", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "15 детекторов рационализации", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "3 режима исполнения", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "Cross-repo поддержка", module: "forge-core", core: true, pro: true, bundle: true },
		// forge-worktree (Starter+)
		{ feature: "Lifecycle git worktree", module: "forge-worktree", core: true, pro: true, bundle: true },
		{ feature: "Изоляция Docker-портов", module: "forge-worktree", core: true, pro: true, bundle: true },
		// forge-product (Pro+)
		{ feature: "Продуктовый дизайн (9 архетипов)", module: "forge-product", core: false, pro: true, bundle: true },
		{ feature: "User stories с AC", module: "forge-product", core: false, pro: true, bundle: true },
		{ feature: "Библиотека UX-критериев", module: "forge-product", core: false, pro: true, bundle: true },
		// forge-qa (Pro+)
		{ feature: "Генерация тестов (8+ фреймворков)", module: "forge-qa", core: false, pro: true, bundle: true },
		{ feature: "4-уровневая трассировка", module: "forge-qa", core: false, pro: true, bundle: true },
		{ feature: "LLM-as-Judge", module: "forge-qa", core: false, pro: true, bundle: true },
		// forge-tracker (Pro+)
		{ feature: "Синхронизация с трекерами (5 интеграций)", module: "forge-tracker", core: false, pro: true, bundle: true },
		// forge-prompts (Pro+)
		{ feature: "Фреймворки промпт-инжиниринга", module: "forge-prompts", core: false, pro: true, bundle: true },
		{ feature: "Инвентаризация и аудит промптов", module: "forge-prompts", core: false, pro: true, bundle: true },
		// forge-autopilot (Complete)
		{ feature: "Параллельная оркестрация агентов", module: "forge-autopilot", core: false, pro: false, bundle: true },
		{ feature: "Wave-планирование без конфликтов", module: "forge-autopilot", core: false, pro: false, bundle: true },
		{ feature: "3 режима автономности", module: "forge-autopilot", core: false, pro: false, bundle: true },
		// Product advisory (Complete) - 9 модулей
		{ feature: "Исследование и валидация продукта", module: "forge-discovery", core: false, pro: false, bundle: true },
		{ feature: "Маркетинговая стратегия и позиционирование", module: "forge-marketing", core: false, pro: false, bundle: true },
		{ feature: "Планирование аналитики и схемы событий", module: "forge-analytics", core: false, pro: false, bundle: true },
		{ feature: "Дизайн онбординг-флоу", module: "forge-onboarding", core: false, pro: false, bundle: true },
		{ feature: "Продуктовый копирайтинг и tone of voice", module: "forge-copy", core: false, pro: false, bundle: true },
		{ feature: "SEO-стратегия и технический аудит", module: "forge-seo", core: false, pro: false, bundle: true },
		{ feature: "Growth-петли и удержание", module: "forge-growth", core: false, pro: false, bundle: true },
		{ feature: "Дизайн и анализ A/B-тестов", module: "forge-ab", core: false, pro: false, bundle: true },
		// Future
		{ feature: "Каждый будущий модуль", module: "-", core: false, pro: false, bundle: true },
	],

	trustBadges: [
		{
			icon: "\u2714",
			title: "Без подписки",
			description: "Разовая покупка. Не \u20AC20/месяц. Не \u20AC240/год.",
		},
		{
			icon: "\u221E",
			title: "Артефакты ваши навсегда",
			description: "Сгенерированные файлы остаются в проекте даже без продления.",
		},
		{
			icon: "\u21BB",
			title: "Продление по желанию",
			description: "1 год обновлений включен. Продление ~60% от цены для продолжения обновлений.",
		},
		{
			icon: "\u2694",
			title: "Без лимитов использования",
			description: "Без оплаты за токены. Без лимитов на рабочие места. Без неожиданных счетов.",
		},
	],

	diyBlock: {
		headline: "Почему бы просто не написать свой CLAUDE.md?",
		points: [
			{
				title: "Объем",
				description: "Хороший CLAUDE.md занимает 2-3 часа написания. Forge генерирует его из 7-этапного аудита с 50+ паттернами, о которых вы бы не подумали.",
			},
			{
				title: "Поддержка",
				description: "Написанные вручную правила устаревают по мере развития кодовой базы. Forge пере-аудирует при каждом запуске - паттерны остаются актуальными автоматически.",
			},
			{
				title: "Pipeline",
				description: "CLAUDE.md - это просто правила. Forge - полный pipeline: аудит архитектуры, паттерны качества, генерация тестов, трассировка требований. Это не сделать за выходные.",
			},
		],
	},

	faq: [
		{
			question: "Что происходит после первого года?",
			answer:
				"Ваши сгенерированные артефакты продолжают работать бессрочно. Год обновлений дает доступ к новым паттернам, шаблонам и улучшениям модулей. После истечения все, что у вас есть, продолжает работать - просто не получаете новых обновлений.",
		},
		{
			question: "Обязательно ли продлевать?",
			answer:
				"Нет. Продление полностью по желанию. При продлении вы получаете еще год обновлений по сниженной цене (~60% от первоначальной). Без продления ваши артефакты продолжают работать навсегда.",
		},
		{
			question: "Что если я не продлю, а потом захочу?",
			answer:
				"Можете продлить в любое время. Вы получите доступ ко всем обновлениям, вышедшим с момента окончания предыдущего периода.",
		},
		{
			question: "Есть ли возврат средств?",
			answer:
				"Да. 14-дневная гарантия возврата без вопросов. Если Forge не подходит для вашего проекта, напишите нам - вернем полную сумму.",
		},
		{
			question: "Можно ли использовать на нескольких проектах?",
			answer:
				"Да. Каждая лицензия включает активации по тарифу: Core 2, Pro 3, Complete 5 устройств. Вы можете использовать Forge на любом количестве проектов на этих устройствах.",
		},
		{
			question: "Что входит в 8 advisory-модулей Complete?",
			answer:
				"Discovery, маркетинг, аналитика, онбординг, копирайтинг, SEO, growth и A/B-тестирование. Каждый генерирует стратегические документы и конфигурации для вашего проекта - от конкурентного анализа до оптимизации конверсии. Лучше всего работают с forge-product как центральным хабом.",
		},
	],
};

export const pricingPageI18n: Record<string, PricingPageConfig> = { en: pricingPage, ru: pricingPageRu };
