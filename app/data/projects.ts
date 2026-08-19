import type { Localized } from "../i18n/config";

/**
 * Source de vérité unique des projets.
 *
 * Le bento de la landing (`components/sections/Projects.tsx`) et la page
 * `/projects` lisent tous les deux ce fichier.
 */

export type Category = "web" | "automation" | "mobile" | "infra" | "learning";
export type Context = "personal" | "school" | "pro";
export type Status = "shipped" | "wip" | "archived";

export type Project = {
  /** Identité stable : clé React aujourd'hui, segment d'URL le jour où les pages de détail arrivent. */
  slug: string;
  /** Nom propre, jamais traduit. */
  title: string;
  /** Une ligne, affichée dans la liste compacte. */
  tagline: Localized;
  /** Deux ou trois lignes, affichées dans les cartes Featured. */
  description: Localized;
  category: Category;
  context: Context;
  status: Status;
  year: number;
  /**
   * Libellés canoniques
   */
  stack: string[];
  /** Angles transverses, hors stack : "security", "self-hosted", "API"… */
  tags?: string[];
  /** Remonte en vitrine : grande carte en haut de /projects et bento de la landing. */
  featured?: boolean;
  /** Chemin sous /public, ex. "/assets/projects/pokestim.png". */
  image?: string;
  links?: {
    repo?: string;
    demo?: string;
    /** Affiché quand il n'y a ni repo ni démo — un silence laisse croire qu'il n'y a rien. */
    note?: Localized;
  };
};

/**
 * Liste complète de tous les projets.
 */
export const PROJECTS: Project[] = [
  {
    slug: "vps-hosting-panel",
    title: "VPS Hosting Panel",
    tagline: {
      fr: "Panel d'hébergement VPS complet, adossé à l'API Proxmox.",
      en: "Full VPS hosting panel built on top of the Proxmox API.",
    },
    description: {
      fr: "Panel d'hébergement web construit de zéro pour gérer des serveurs VPS destinés à de petites structures : provisioning via l'API Proxmox, achat d'offres en cryptomonnaie, et administration des machines directement depuis l'interface.",
      en: "A web hosting panel built from scratch to manage VPS servers for small businesses: provisioning through the Proxmox API, plan purchase in cryptocurrency, and server administration straight from the interface.",
    },
    category: "infra",
    context: "personal",
    status: "archived",
    year: 2023,
    stack: ["Node.js", "Bootstrap", "Proxmox"],
    tags: ["security", "self-hosted", "API", "payments"],
    featured: true,
    links: {
      note: {
        fr: "Code privé",
        en: "Private code",
      },
    },
  },
  {
    slug: "pokestim",
    title: "Pokestim",
    tagline: {
      fr: "Estimation du prix des objets Pokémon selon les tendances du marché.",
      en: "Pokémon item price estimation driven by market trends.",
    },
    description: {
      fr: "Application multiplateforme qui estime le prix d'objets Pokémon à partir des tendances du marché. Front en React Native (Expo), traitement et collecte des données côté Python.",
      en: "A multiplatform app that estimates Pokémon item prices from market trends. React Native (Expo) on the front, with data collection and processing handled in Python.",
    },
    category: "mobile",
    context: "personal",
    status: "wip",
    year: 2025,
    stack: ["React Native", "Expo", "Python"],
    tags: ["data", "API"],
    featured: true,
  },
  {
    slug: "labubu-fork",
    title: "Labubu Fork",
    tagline: {
      fr: "Fork du site Labubu pour pratiquer Symfony en profondeur.",
      en: "A fork of the Labubu website to dig into Symfony.",
    },
    description: {
      fr: "Reprise du site Labubu comme terrain d'entraînement sur l'écosystème Symfony : Twig pour les vues, Doctrine pour la persistance, et Stimulus pour l'interactivité côté client.",
      en: "Rebuilding the Labubu website as a training ground for the Symfony ecosystem: Twig for views, Doctrine for persistence, and Stimulus for client-side interactivity.",
    },
    category: "web",
    context: "personal",
    status: "archived",
    year: 2025,
    links: {
      repo: "https://github.com/bylkamar/labubu",
    },
    stack: ["PHP", "Symfony", "Twig", "Doctrine", "Stimulus"],
  },
  {
    slug: "java-learning",
    title: "Java",
    tagline: {
      fr: "Apprentissage du langage et de ses concepts objet.",
      en: "Learning the language and its object-oriented concepts.",
    },
    description: {
      fr: "Apprentissage du langage Java et de ses concepts. Il me manque encore de la pratique et des projets de taille réelle pour progresser sérieusement.",
      en: "Learning the Java language and its concepts. I still need more practice and real-sized projects to get properly good at it.",
    },
    category: "learning",
    context: "school",
    status: "wip",
    year: 2025,
    stack: ["Java"],
  },
];

/** Liste dédupliquée des stacks réellement présentes — alimente les chips de filtre. */
export function allStacks(): string[] {
  return [...new Set(PROJECTS.flatMap((project) => project.stack))].sort(
    (a, b) => a.localeCompare(b),
  );
}

/** Catégories réellement présentes, dans l'ordre canonique ci-dessous. */
export function allCategories(): Category[] {
  const present = new Set(PROJECTS.map((project) => project.category));
  return CATEGORY_ORDER.filter((category) => present.has(category));
}

/** Contextes réellement présents, dans l'ordre canonique ci-dessous. */
export function allContexts(): Context[] {
  const present = new Set(PROJECTS.map((project) => project.context));
  return CONTEXT_ORDER.filter((context) => present.has(context));
}

/** Projets en vitrine, les plus récents d'abord. */
export function featured(): Project[] {
  return PROJECTS.filter((project) => project.featured).sort(byRecency);
}

/** Tous les projets, les plus récents d'abord, à année égale par ordre alphabétique. */
export function allProjects(): Project[] {
  return [...PROJECTS].sort(byRecency);
}

/**
 * Sélection pour le bento de la landing : les projets en vitrine d'abord,
 * complétés par les plus récents jusqu'à `limit`.
 *
 * La grille bento a un nombre de cellules fixe ; se limiter aux seuls `featured`
 * la laisserait trouée dès qu'il y en a moins que `limit`.
 */
export function landingProjects(limit = 4): Project[] {
  const shortlisted = featured();
  const rest = allProjects().filter((project) => !project.featured);
  return [...shortlisted, ...rest].slice(0, limit);
}

function byRecency(a: Project, b: Project): number {
  return b.year - a.year || a.title.localeCompare(b.title);
}

const CATEGORY_ORDER: Category[] = [
  "web",
  "mobile",
  "infra",
  "automation",
  "learning",
];

const CONTEXT_ORDER: Context[] = ["personal", "school", "pro"];

export const CATEGORY_LABELS: Record<Category, Localized> = {
  web: { fr: "Web", en: "Web" },
  mobile: { fr: "Mobile", en: "Mobile" },
  infra: { fr: "Infra & DevOps", en: "Infra & DevOps" },
  automation: { fr: "Automatisation", en: "Automation" },
  learning: { fr: "Apprentissage", en: "Learning" },
};

export const CONTEXT_LABELS: Record<Context, Localized> = {
  personal: { fr: "Personnel", en: "Personal" },
  school: { fr: "IUT", en: "University" },
  pro: { fr: "Pro", en: "Professional" },
};

export const STATUS_LABELS: Record<Status, Localized> = {
  shipped: { fr: "Livré", en: "Shipped" },
  wip: { fr: "En cours", en: "In progress" },
  archived: { fr: "Archivé", en: "Archived" },
};
