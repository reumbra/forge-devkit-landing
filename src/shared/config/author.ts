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
