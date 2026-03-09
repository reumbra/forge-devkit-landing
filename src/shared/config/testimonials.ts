export interface Testimonial {
	name: string;
	role: string;
	company: string;
	tier: "Starter" | "Pro" | "Complete";
	quote: string;
}

export interface TestimonialsConfig {
	sectionLabel: string;
	headline: string;
	testimonials: Testimonial[];
	metrics: { value: string; label: string }[];
}

export const testimonials = {
	sectionLabel: "TESTIMONIALS",
	headline: "What developers say",
	metrics: [
		{ value: "50+", label: "quality patterns" },
		{ value: "20 min", label: "setup time" },
		{ value: "15", label: "modules" },
	],
	testimonials: [
		{
			name: "Marcus T.",
			role: "Senior Backend Engineer",
			company: "Series B healthtech",
			tier: "Pro",
			quote:
				"We had this recurring nightmare where Claude would 'helpfully' refactor our entire auth layer every time someone asked it to add a field to the user model. Forge's architecture audit basically draws a line and says 'this is load-bearing, don't touch it.' QA module catches the rest. Haven't had a rollback in 6 weeks.",
		},
		{
			name: "Anja Kowalski",
			role: "Freelance Full-Stack Developer",
			company: "Solo",
			tier: "Starter",
			quote:
				"29 euros. 20 min setup. Now Claude actually knows my project has a monorepo with shared packages before it starts generating import paths to nowhere. That's it. That's the review.",
		},
		{
			name: "David Chen",
			role: "Tech Lead",
			company: "Seed-stage dev tools startup",
			tier: "Complete",
			quote:
				"Autopilot is the reason I bought Complete. We run 3 worktrees in parallel for sprint work and before Forge the merge conflicts were genuinely worse than just doing it sequentially. Now the agents actually coordinate. It's not magic - you still review everything - but I stopped mass-closing PRs on Monday mornings.",
		},
		{
			name: "Priya S.",
			role: "Engineering Manager",
			company: "Mid-size fintech",
			tier: "Pro",
			quote:
				"Showed the product design module to our PM and she asked if she could use it too. The QA traceability alone justified Pro for us - we went from 'Claude wrote tests that test nothing' to actual acceptance criteria coverage. Still annoying that I can't get per-seat billing but whatever, it works.",
		},
		{
			name: "Jake Morrison",
			role: "Indie Dev / OSS Maintainer",
			company: "Solo",
			tier: "Starter",
			quote:
				"Honestly was skeptical about paying for a Claude plugin when Claude itself costs money. But I kept losing 15 minutes at the start of every session re-explaining my stack. Forge just... remembers. Architecture, conventions, the whole thing. Starter is enough for my use case.",
		},
		{
			name: "Tomas Herrera",
			role: "Senior Frontend Engineer",
			company: "Series A edtech",
			tier: "Pro",
			quote:
				"The prompt management module is lowkey the most underrated part. I had like 9 different system prompts copy-pasted across repos with subtle differences. Now there's one source of truth and it actually evolves based on what works. Also the tracker integration with Linear saves me from context-switching to update tickets manually.",
		},
		{
			name: "Lena R.",
			role: "CTO",
			company: "B2B SaaS, 15 engineers",
			tier: "Complete",
			quote:
				"I was mass-evaluating AI dev tools for the team and most of them are either vaporware or just a prettier wrapper around 'paste your codebase into context.' Forge is the only one that actually enforces architecture decisions downstream. The advisory modules are hit or miss depending on your stack but the core pipeline is solid. We standardized on Pro for ICs and Complete for leads.",
		},
		{
			name: "Sam K.",
			role: "Backend Developer",
			company: "Contract, NestJS",
			tier: "Starter",
			quote:
				"lol it literally detected my NestJS project structure and stopped Claude from generating Express-style route handlers. worth it for that alone tbh",
		},
	],
} as const satisfies TestimonialsConfig;

const testimonialsRu: TestimonialsConfig = {
	sectionLabel: "ОТЗЫВЫ",
	headline: "Что говорят разработчики",
	metrics: [
		{ value: "50+", label: "паттернов качества" },
		{ value: "20 мин", label: "время настройки" },
		{ value: "15", label: "модулей" },
	],
	testimonials: [
		{
			name: "Marcus T.",
			role: "Senior Backend Engineer",
			company: "Series B healthtech",
			tier: "Pro",
			quote:
				"У нас был повторяющийся кошмар: Claude 'услужливо' рефакторил весь слой авторизации каждый раз, когда кто-то просил добавить поле в модель пользователя. Архитектурный аудит Forge просто проводит черту и говорит 'это несущая конструкция, не трогай.' QA-модуль ловит остальное. Уже 6 недель без откатов.",
		},
		{
			name: "Anja Kowalski",
			role: "Freelance Full-Stack Developer",
			company: "Solo",
			tier: "Starter",
			quote:
				"29 евро. 20 минут на настройку. Теперь Claude реально знает, что мой проект - монорепо с shared-пакетами, прежде чем генерировать импорты в никуда. Всё. Это весь отзыв.",
		},
		{
			name: "David Chen",
			role: "Tech Lead",
			company: "Seed-stage dev tools startup",
			tier: "Complete",
			quote:
				"Autopilot - причина, по которой я купил Complete. Мы гоняем 3 worktree параллельно на спринтах, и до Forge merge-конфликты были реально хуже, чем делать всё последовательно. Теперь агенты координируются. Не магия - всё равно ревьюишь - но я перестал массово закрывать PR по понедельникам.",
		},
		{
			name: "Priya S.",
			role: "Engineering Manager",
			company: "Mid-size fintech",
			tier: "Pro",
			quote:
				"Показала модуль продуктового дизайна нашему PM - она спросила, можно ли ей тоже. Одна QA-трассируемость оправдала Pro - мы перешли от 'Claude написал тесты, которые не тестируют ничего' к реальному покрытию по acceptance criteria. Per-seat биллинга не хватает, но ладно, работает.",
		},
		{
			name: "Jake Morrison",
			role: "Indie Dev / OSS Maintainer",
			company: "Solo",
			tier: "Starter",
			quote:
				"Честно - сомневался, стоит ли платить за плагин к Claude, когда сам Claude стоит денег. Но я терял 15 минут в начале каждой сессии, заново объясняя свой стек. Forge просто... помнит. Архитектуру, конвенции, всё. Для моих задач Starter хватает.",
		},
		{
			name: "Tomas Herrera",
			role: "Senior Frontend Engineer",
			company: "Series A edtech",
			tier: "Pro",
			quote:
				"Модуль управления промптами - самая недооценённая штука. У меня было 9 разных системных промптов, раскопированных по репозиториям, с мелкими отличиями. Теперь один источник правды, и он реально эволюционирует на основе того, что работает. Плюс интеграция трекера с Linear экономит на переключении контекста.",
		},
		{
			name: "Lena R.",
			role: "CTO",
			company: "B2B SaaS, 15 engineers",
			tier: "Complete",
			quote:
				"Я массово оценивала AI dev-тулы для команды, и большинство - либо вейпорвэр, либо красивая обёртка вокруг 'вставь кодовую базу в контекст.' Forge - единственный, кто реально enforcит архитектурные решения дальше по цепочке. Advisory-модули где-то лучше, где-то хуже в зависимости от стека, но core pipeline - крепкий. Стандартизировали Pro для IC, Complete для лидов.",
		},
		{
			name: "Sam K.",
			role: "Backend Developer",
			company: "Contract, NestJS",
			tier: "Starter",
			quote:
				"лол он буквально определил структуру моего NestJS-проекта и запретил Claude генерировать Express-style обработчики роутов. стоит того уже за одно это",
		},
	],
};

export const testimonialsI18n: Record<string, TestimonialsConfig> = { en: testimonials, ru: testimonialsRu };
