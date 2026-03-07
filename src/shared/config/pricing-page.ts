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
		{ feature: "Architecture audit (7-gate wizard)", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "50+ quality patterns", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "15 rationalization detectors", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "3 execution modes", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "Cross-repo support", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "Product design (9 archetypes)", module: "forge-product", core: false, pro: true, bundle: true },
		{ feature: "User stories with AC", module: "forge-product", core: false, pro: true, bundle: true },
		{ feature: "UX criteria library", module: "forge-product", core: false, pro: true, bundle: true },
		{ feature: "Test generation (8+ frameworks)", module: "forge-qa", core: false, pro: true, bundle: true },
		{ feature: "4-level traceability", module: "forge-qa", core: false, pro: true, bundle: true },
		{ feature: "LLM-as-Judge", module: "forge-qa", core: false, pro: true, bundle: true },
		{ feature: "Task tracker sync (5 integrations)", module: "forge-tracker", core: false, pro: true, bundle: true },
		{ feature: "Parallel agent orchestration", module: "forge-autopilot", core: false, pro: false, bundle: true },
		{ feature: "Conflict-free wave planning", module: "forge-autopilot", core: false, pro: false, bundle: true },
		{ feature: "3 autonomy modes", module: "forge-autopilot", core: false, pro: false, bundle: true },
		{ feature: "Git worktree lifecycle", module: "forge-worktree", core: false, pro: false, bundle: true },
		{ feature: "Docker port isolation", module: "forge-worktree", core: false, pro: false, bundle: true },
		{ feature: "Every future module", module: " -", core: false, pro: false, bundle: true },
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
				"Yes. Your license works on up to 3 devices. You can use Forge on as many projects as you want on those devices.",
		},
		{
			question: "Is there team licensing?",
			answer:
				"Not yet. Each developer needs their own license. Team pricing is planned for later this year.",
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
		{ feature: "Архитектурный аудит (7-gate wizard)", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "50+ паттернов качества", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "15 детекторов рационализации", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "3 режима исполнения", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "Cross-repo поддержка", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "Продуктовый дизайн (9 архетипов)", module: "forge-product", core: false, pro: true, bundle: true },
		{ feature: "User stories с AC", module: "forge-product", core: false, pro: true, bundle: true },
		{ feature: "Библиотека UX-критериев", module: "forge-product", core: false, pro: true, bundle: true },
		{ feature: "Генерация тестов (8+ фреймворков)", module: "forge-qa", core: false, pro: true, bundle: true },
		{ feature: "4-уровневая трассировка", module: "forge-qa", core: false, pro: true, bundle: true },
		{ feature: "LLM-as-Judge", module: "forge-qa", core: false, pro: true, bundle: true },
		{ feature: "Синхронизация с трекерами (5 интеграций)", module: "forge-tracker", core: false, pro: true, bundle: true },
		{ feature: "Параллельная оркестрация агентов", module: "forge-autopilot", core: false, pro: false, bundle: true },
		{ feature: "Wave-планирование без конфликтов", module: "forge-autopilot", core: false, pro: false, bundle: true },
		{ feature: "3 режима автономности", module: "forge-autopilot", core: false, pro: false, bundle: true },
		{ feature: "Lifecycle git worktree", module: "forge-worktree", core: false, pro: false, bundle: true },
		{ feature: "Изоляция Docker-портов", module: "forge-worktree", core: false, pro: false, bundle: true },
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
				"Да. Лицензия работает на 3 устройствах. Вы можете использовать Forge на любом количестве проектов на этих устройствах.",
		},
		{
			question: "Есть ли командное лицензирование?",
			answer:
				"Пока нет. Каждому разработчику нужна своя лицензия. Командные тарифы запланированы на этот год.",
		},
	],
};

export const pricingPageI18n: Record<string, PricingPageConfig> = { en: pricingPage, ru: pricingPageRu };
