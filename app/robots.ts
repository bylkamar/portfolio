import type { MetadataRoute } from "next";

import { SITE_URL } from "./site";

/**
 * Sert `/robots.txt`.
 *
 * Le `matcher` du proxy exclut déjà les chemins avec extension, donc cette
 * route n'est pas redirigée vers `/fr`.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
