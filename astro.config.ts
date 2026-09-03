import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

/**
 * Routes that ship <meta name="robots" content="noindex"> in the built HTML.
 * They must never appear in the sitemap: a sitemap is a "please index this"
 * signal, and pairing it with noindex is a self-contradiction Ahrefs and
 * Search Console both report as an error.
 *
 * There is NO general rule available here. The @astrojs/sitemap `filter`
 * callback receives one argument - the absolute URL string - and has no
 * access to the page's frontmatter, its rendered HTML or any route metadata.
 * So "exclude anything that is noindex" cannot be expressed; the routes have
 * to be enumerated. If you add a noindex page, add it here too, and if you
 * rename one of these routes, rename it here - nothing will fail loudly.
 * Re-derive the true set after a build with:
 *   grep -rl 'name="robots" content="noindex"' dist --include=index.html
 *
 * Two groups, and only the first is visible by grepping src/:
 *
 * 1. Internal render targets. They declare noindex in their own source and
 *    exist only to be screenshotted / rasterised, never to be read:
 *      /arcade-frames/   - frame chrome for the arcade screenshots
 *      /og-frame/        - render target for the Open Graph image
 *      /reddit-banner/   - render target for the Reddit profile banner
 *
 * 2. Redirect-only routes. Their source is a single Astro.redirect(); Astro's
 *    static-redirect emitter injects the noindex tag into the generated page
 *    itself, so the string "noindex" appears nowhere in src/:
 *      /guide/                - 301 to /docs/interactive-guide/
 *      /getting-started/      - 301 to /docs/getting-started/
 *      /usage-guide/          - 301 to /docs/usage-guide/
 *      /ru/getting-started/   - 301 to /ru/docs/getting-started/
 *      /ru/usage-guide/       - 301 to /ru/docs/usage-guide/
 *    (there is no /ru/guide/ - guide.astro exists only in the en tree)
 *
 * The trailing slash on every entry is load-bearing: the site canonicalises
 * to a trailing slash and @astrojs/sitemap emits the slashed form, so a
 * pathname written without it would match nothing.
 */
const NOINDEX_ROUTES = new Set([
	"/arcade-frames/",
	"/og-frame/",
	"/reddit-banner/",
	"/guide/",
	"/getting-started/",
	"/usage-guide/",
	"/ru/getting-started/",
	"/ru/usage-guide/",
]);

export default defineConfig({
	site: "https://forge.reumbra.com",
	base: "/",
	// The site serves the trailing-slash form as canonical: /pricing 308-redirects
	// to /pricing/. Declaring it here makes Astro's own routing agree with that
	// instead of silently tolerating both.
	// Measured consequence in `astro dev` (astro 5.17.3): /pricing/ -> 200 and
	// the bare /pricing -> 404, where the previous default ("ignore") served
	// both as 200. That is deliberate. Every internal href that still omits the
	// slash costs a redirect hop in production, and this turns that invisible
	// cost into a local failure you cannot miss. Prerendered pages in production
	// are served by the host, not by Astro, so this setting does not change what
	// production does; it changes what the build and the dev server agree to.
	trailingSlash: "always",
	build: {
		// Required for `trailingSlash: "always"` to be coherent: only "directory"
		// emits dist/pricing/index.html, which is what a host can serve at
		// /pricing/. "file" would emit /pricing.html and contradict the line above.
		// It is also the current default, but the default is documented as
		// something an adapter may override, and @astrojs/sitemap appends the
		// trailing slash to sitemap URLs only when it reads format === "directory".
		// Stating it makes both facts intentional rather than inherited.
		format: "directory",
	},
	i18n: {
		locales: ["en", "ru"],
		defaultLocale: "en",
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [
		sitemap({
			filter: (page) => !NOINDEX_ROUTES.has(new URL(page).pathname),
			i18n: {
				defaultLocale: "en",
				locales: { en: "en", ru: "ru" },
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
