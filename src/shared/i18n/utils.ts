import { en, type TranslationKey } from "./en";
import { ru } from "./ru";

const translations = { en, ru } as const;

type Locale = keyof typeof translations;

export function t(key: TranslationKey, locale: Locale = "en"): string {
	return translations[locale]?.[key] ?? translations.en[key] ?? key;
}
