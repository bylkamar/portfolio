import type { Locale, Localized } from "./config";

/**
 * Libellés d'interface, déclinés par langue.
 *
 * Le contenu des projets vit dans `data/projects.ts` ; ici on ne trouve que la
 * chrome du site. Un champ manquant dans une locale est une erreur TypeScript,
 * grâce au `satisfies Record<string, Localized>` de chaque section.
 */

const meta = {
  title: {
    fr: "Amer AIT CHIKHOUNE · Développeur full-stack",
    en: "Amer AIT CHIKHOUNE · Full-stack developer",
  },
  description: {
    fr: "Développeur full-stack, BUT Informatique à l'IUT de Metz. Applications web, mobile, automatisation et infrastructure.",
    en: "Full-stack developer, BUT Informatique at IUT de Metz. Web apps, mobile, automation and infrastructure.",
  },
  /** Repris tel quel dans le `jobTitle` des données structurées. */
  jobTitle: {
    fr: "Développeur full-stack",
    en: "Full-stack developer",
  },
} satisfies Record<string, Localized>;

const nav = {
  home: { fr: "Accueil", en: "Home" },
  about: { fr: "À propos", en: "About" },
  projects: { fr: "Projets", en: "Projects" },
  contact: { fr: "Contact", en: "Contact" },
  resume: { fr: "CV", en: "Resume" },
  toggleMenu: { fr: "Ouvrir le menu", en: "Toggle menu" },
  switchLanguage: { fr: "Changer de langue", en: "Switch language" },
} satisfies Record<string, Localized>;

const overlay = {
  tagline: {
    fr: "Développeur et futur pentester ?",
    en: "Developer and future pentester?",
  },
} satisfies Record<string, Localized>;

const about = {
  heading: {
    fr: "Amer AIT CHIKHOUNE, étudiant en BUT Informatique à l'IUT de Metz",
    en: "Amer AIT CHIKHOUNE, BUT Informatique student at IUT de Metz",
  },
  intro: {
    fr: "Bonjour, je m'appelle AIT CHIKHOUNE Amer, j'étudie l'informatique en France et je suis actuellement ouvert à toute opportunité de stage ou d'alternance.",
    en: "Hello everyone, my name is AIT CHIKHOUNE Amer, I study computer science in France, I'm currently open to any internship opportunities.",
  },
  /** `{age}` est remplacé à l'exécution — l'âge est calculé, pas écrit en dur. */
  age: {
    fr: "J'ai {age} ans et je suis passionné par la technologie et la cybersécurité.",
    en: "I am {age} years old and passionate about technology and cybersecurity.",
  },
  work: {
    fr: "J'aime les projets dans lesquels je peux m'investir à fond, et écrire des scripts d'automatisation.",
    en: "I enjoy working on projects I can fully invest myself in (which I really like), creating automation scripts.",
  },
  resume: { fr: "Voir mon CV", en: "View my resumé" },
  resumeDownload: { fr: "Télécharger", en: "Download" },
  /** Libellés lus par les lecteurs d'écran : « Voir » / « Télécharger » seuls ne disent pas quoi. */
  resumeViewAria: {
    fr: "Voir mon CV au format PDF (nouvel onglet)",
    en: "View my resumé as a PDF (new tab)",
  },
  resumeDownloadAria: {
    fr: "Télécharger mon CV au format PDF",
    en: "Download my resumé as a PDF",
  },
} satisfies Record<string, Localized>;

const stacks = {
  heading: {
    fr: "J'ai déjà utiliser des technologies comme",
    en: "I have experimented with technologies like",
  },
  languages: { fr: "Langages", en: "Languages" },
  frameworks: {
    fr: "Frameworks & bases de données",
    en: "Frameworks & databases",
  },
  infrastructure: {
    fr: "Systèmes & DevOps",
    en: "Systems & DevOps",
  },
  security: { fr: "Cybersécurité & IA", en: "Cybersecurity & AI" },
} satisfies Record<string, Localized>;

const contact = {
  heading: { fr: "Me contacter", en: "Contact Me" },
} satisfies Record<string, Localized>;

const footer = {
  /** `{year}` est remplacé à l'exécution. */
  rights: {
    fr: "© {year} AIT CHIKHOUNE Amer. Tous droits réservés.",
    en: "© {year} AIT CHIKHOUNE Amer. All rights reserved.",
  },
} satisfies Record<string, Localized>;

const projects = {
  sectionHeading: { fr: "Projets", en: "Projects" },
  discoverMore: {
    fr: "Découvrir tous mes projets",
    en: "Discover more of my projects",
  },
  eyebrow: { fr: "Projets", en: "Projects" },
  title: { fr: "Mes projets", en: "What I build" },
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

export const dictionaries = {
  meta,
  nav,
  overlay,
  about,
  stacks,
  contact,
  footer,
  projects,
};

/** Remplace les `{clé}` d'un libellé par leur valeur. */
export function interpolate(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

/** `{ one, other }` → texte accordé, pour les compteurs. */
export function plural(
  count: number,
  forms: Record<Locale, { one: string; other: string }>,
  locale: Locale,
): string {
  const form = forms[locale];
  // Le français met le singulier à 0 comme à 1, l'anglais seulement à 1.
  const isOne = locale === "fr" ? count <= 1 : count === 1;
  return `${count} ${isOne ? form.one : form.other}`;
}

export const RESULT_COUNT = {
  fr: { one: "projet", other: "projets" },
  en: { one: "project", other: "projects" },
};
