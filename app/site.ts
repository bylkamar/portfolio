/**
 * Constantes d'identité du site, partagées par les métadonnées, le sitemap,
 * le robots.txt et les données structurées.
 *
 * Une seule source pour l'origine publique : un lien absolu faux dans une
 * balise Open Graph ou un sitemap ne se voit pas en local, seulement en prod.
 */

/** Origine publique, sans slash final. Surchargeable pour les previews. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aitchikhoune-amer.fr"
).replace(/\/$/, "");

export const AUTHOR_NAME = "Amer AIT CHIKHOUNE";

export const AUTHOR_EMAIL = "amer.aitchikhoune@gmail.com";

/** Profils publics : alimentent `sameAs` du JSON-LD, qui relie le site aux comptes. */
export const SOCIAL_LINKS = [
  "https://www.linkedin.com/in/amerac/",
  "https://github.com/bylkamar",
];
