export interface ComparisonRow {
	dimension: string;
	them: string;
	forge: string;
}

export interface RelatedModule {
	module: string;
	description: string;
	href: string;
}

export interface ComparisonPageConfig {
	slug: string;
	competitor: string;
	searchIntent: string[];
	headline: string;
	subheadline: string;
	rows: ComparisonRow[];
	verdict: string;
	ctaText: string;
	relatedModules?: RelatedModule[];
	relatedModulesHeading?: string;
	seo: { title: string; description: string };
}
