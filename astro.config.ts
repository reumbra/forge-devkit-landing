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
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
