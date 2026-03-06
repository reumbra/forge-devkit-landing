export interface VisualLine {
	prefix?: string;
	text: string;
	color?: "secondary" | "muted" | "text";
}

export interface ModulePageConfig {
	slug: string;
	name: string;
	tagline: string;
	tier: "Core" | "Pro" | "Bundle";
	tierPrice: string;
	problems: { pain: string; evidence: string }[];
	steps: { title: string; description: string; visual?: VisualLine[] }[];
	capabilities: { icon: string; title: string; description: string }[];
	comparison: { dimension: string; them: string; forge: string }[];
	comparisonTarget: string;
	integrations: { module: string; description: string; href: string }[];
	diagram?: { src: string; alt: string; caption: string; sourceUrl?: string; sourceLabel?: string };
	seo: { title: string; description: string };
}
