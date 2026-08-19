import type { Locale, Localized } from "./config";

/**
 * Libellés d'interface.
 *
 * Lot 1 : seule la section `projects` est remplie, puisque c'est la seule page
 * réécrite. Lot 2 : on y remonte les textes encore codés en dur dans About,
 * Stacks, Contact, Footer, Overlay et NavBar.
 */

const projects = {
  eyebrow: { fr: "Projets", en: "Projects" },
  title: { fr: "Ce que je construis", en: "What I build" },
  lead: {
    fr: "Applications web, mobile, automatisation et infrastructure. Certains projets sont des produits complets, d'autres des outils de quelques centaines de lignes — les deux comptent.",
    en: "Web apps, mobile, automation and infrastructure. Some of these are complete products, others are tools a few hundred lines long — both count.",
  },
  featuredHeading: { fr: "Sélection", en: "Selected work" },
  allHeading: { fr: "Tous les projets", en: "All projects" },
  searchPlaceholder: {
    fr: "Rechercher un projet ou une techno…",
    en: "Search a project or a technology…",
  },
  searchLabel: { fr: "Rechercher un projet", en: "Search a project" },
  filterAll: { fr: "Tout", en: "All" },
  filterCategory: { fr: "Catégorie", en: "Category" },
  filterStack: { fr: "Technologies", en: "Stack" },
  filterContext: { fr: "Contexte", en: "Context" },
  reset: { fr: "Réinitialiser", en: "Reset" },
  empty: {
    fr: "Aucun projet ne correspond. Essaie un autre mot-clé ou enlève un filtre.",
    en: "No project matches. Try another keyword or drop a filter.",
  },
  viewRepo: { fr: "Code source", en: "Source code" },
  viewDemo: { fr: "Voir en ligne", en: "Live demo" },
  noPreview: { fr: "Aperçu à venir", en: "Preview coming soon" },
} satisfies Record<string, Localized>;

export type ProjectsDictionary = typeof projects;

export const dictionaries = {
  projects,
};

/** `{ one: string, other: string }` → texte accordé, pour les compteurs. */
export function plural(
  count: number,
  forms: Record<Locale, { one: string; other: string }>,
  locale: Locale,
): string {
  const form = forms[locale];
  // fr et en s'accordent pareil ici : singulier à 0 et 1 en fr, à 1 seulement en en.
  const isOne = locale === "fr" ? count <= 1 : count === 1;
  return `${count} ${isOne ? form.one : form.other}`;
}

export const RESULT_COUNT = {
  fr: { one: "projet", other: "projets" },
  en: { one: "project", other: "projects" },
};
