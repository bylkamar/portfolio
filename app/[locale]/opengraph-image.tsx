import { ImageResponse } from "next/og";

import { defaultLocale, isLocale, t } from "../i18n/config";
import { dictionaries } from "../i18n/dictionaries";
import { AUTHOR_NAME } from "../site";

/**
 * Image de partage (LinkedIn, Discord, Slack, X…), générée à la volée.
 *
 * Sans elle, un lien vers le site s'affiche en carte de texte nue. Elle est
 * rendue par Satori : uniquement du flex, pas de CSS moderne exotique.
 */

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${AUTHOR_NAME} — portfolio`;

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;

  const jobTitle = t(dictionaries.meta.jobTitle, locale);
  const description = t(dictionaries.meta.description, locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          color: "#fafafa",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        {/* Le monogramme reprend le favicon : meme identite d'un onglet a un partage. */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              backgroundColor: "#fafafa",
              color: "#0a0a0a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            aa.
          </div>
          <div style={{ marginLeft: 24, fontSize: 26, color: "#a1a1aa" }}>
            bylkamar
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
            {AUTHOR_NAME}
          </div>
          <div style={{ marginTop: 16, fontSize: 40, color: "#d4d4d8" }}>
            {jobTitle}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#71717a" }}>
          {description.split(".")[0]}.
        </div>
      </div>
    ),
    size,
  );
}
