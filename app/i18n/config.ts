/**
 * Point de branchement i18n.
 *
 * Lot 1 : tout le contenu passe par `t()`, mais personne ne fournit encore de
 * locale — le rendu se fait donc en `defaultLocale`.
 * Lot 2 : les pages passeront la locale issue de `params`, et rien d'autre ne
 * bougera dans les composants.
 *
 * Règle à tenir : jamais de `field.fr` / `field.en` en dur dans le JSX.
 */

export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

/** Un champ de contenu décliné dans chaque langue. Oublier une locale = erreur TypeScript. */
export type Localized = Record<Locale, string>;

/**
 * Reste "en" tant que le lot 2 n'est pas livré, pour que la page projets soit
 * cohérente avec le reste du site (encore intégralement anglophone).
 * À basculer sur "fr" avec le middleware du lot 2.
 */
export const defaultLocale: Locale = "en";

export function t(field: Localized, locale: Locale = defaultLocale): string {
  return field[locale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
