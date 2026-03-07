export interface TrustSignal {
	label: string;
	value: string;
}

export interface AuthorConfig {
	sectionLabel: string;
	headline: string;
	name: string;
	role: string;
	company: string;
	photoPath: string;
	quote: string;
	link: {
		label: string;
		href: string;
	};
	trustSignals: TrustSignal[];
}

export const author = {
	sectionLabel: "BUILT BY",
	headline: "By a developer, for developers",
	name: "Martin Sikora",
	role: "Senior Engineer",
	company: "Reumbra",
	photoPath: "/images/author.jpg",
	quote:
		"I built Forge because I was tired of re-explaining my architecture to AI agents. Every project, every prompt, the same context from scratch. So I encoded 10 years of engineering decisions into a system that does it automatically.",
	link: {
		label: "reumbra.com \u2192",
		href: "https://reumbra.com",
	},
	trustSignals: [
		{ label: "Experience", value: "10+ years" },
		{ label: "Role", value: "Senior Engineer" },
		{ label: "Company", value: "Founder, Reumbra" },
	],
} as const satisfies AuthorConfig;

const authorRu: AuthorConfig = {
	sectionLabel: "BUILT BY",
	headline: "Разработчик для разработчиков",
	name: "Martin Sikora",
	role: "Senior Engineer",
	company: "Reumbra",
	photoPath: "/images/author.jpg",
	quote:
		"Я создал Forge, потому что устал заново объяснять свою архитектуру AI-агентам. Каждый проект, каждый промпт - один и тот же контекст с нуля. Поэтому я закодировал 10 лет инженерных решений в систему, которая делает это автоматически.",
	link: {
		label: "reumbra.com \u2192",
		href: "https://reumbra.com",
	},
	trustSignals: [
		{ label: "Опыт", value: "10+ лет" },
		{ label: "Роль", value: "Senior Engineer" },
		{ label: "Компания", value: "Основатель, Reumbra" },
	],
};

export const authorI18n: Record<string, AuthorConfig> = { en: author, ru: authorRu };
