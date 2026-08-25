/**
 * Point de branchement i18n.
 *
 * Tout le contenu localisé passe par `t()`. Les pages lisent la locale depuis le
 * segment de route `[locale]` et la transmettent en props aux composants — pas de
 * contexte React, donc rien de tout ceci n'atterrit dans le bundle client.
 *
 * Règle à tenir : jamais de `field.fr` / `field.en` en dur dans le JSX.
 */

export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

/** Un champ de contenu décliné dans chaque langue. Oublier une locale = erreur TypeScript. */
export type Localized = Record<Locale, string>;

/**
 * Locale servie quand `Accept-Language` ne tranche pas, et repli des composants
 * auxquels on n'a pas passé de locale.
 */
export const defaultLocale: Locale = "fr";

/** Nom de la langue dans sa propre langue, pour le sélecteur. */
export const LOCALE_LABELS: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
};

export function t(field: Localized, locale: Locale = defaultLocale): string {
  return field[locale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
