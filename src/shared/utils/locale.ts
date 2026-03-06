/**
 * Prefix internal paths with the current locale when not the default (en).
 * External URLs and anchors are returned as-is.
 */
export function localePath(path: string, locale: string | undefined): string {
	if (!path || path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("#")) {
		return path;
	}
	if (locale && locale !== "en") {
		return `/${locale}${path === "/" ? "" : path}`;
	}
	return path;
}
