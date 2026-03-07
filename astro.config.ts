import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://reumbra.com",
	base: "/",
	i18n: {
		locales: ["en", "ru"],
		defaultLocale: "en",
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [
		sitemap({
			filter: (page) =>
				// Exclude redirect-only pages (they 301 to /docs/ variants)
				!/reumbra\.com\/(ru\/)?(getting-started|usage-guide)\/$/.test(page),
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
