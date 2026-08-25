import type { MetadataRoute } from "next";

import { defaultLocale, locales } from "./i18n/config";
import { SITE_URL } from "./site";

/** Chemins publics, hors segment de locale. */
const ROUTES = [
  { path: "", priority: 1 },
  { path: "/projects", priority: 0.8 },
];

/**
 * Sert `/sitemap.xml`.
 *
 * Chaque URL déclare ses équivalents dans les autres langues via `alternates`,
 * ce qui evite que Google traite `/fr` et `/en` comme du contenu dupliqué.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    ROUTES.map(({ path, priority }) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: {
          ...Object.fromEntries(
            locales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
          ),
          "x-default": `${SITE_URL}/${defaultLocale}${path}`,
        },
      },
    })),
  );
}
