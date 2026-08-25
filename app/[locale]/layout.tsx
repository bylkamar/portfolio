import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";
import { defaultLocale, isLocale, locales, t, type Locale } from "../i18n/config";
import { dictionaries } from "../i18n/dictionaries";
import { AUTHOR_EMAIL, AUTHOR_NAME, SITE_URL, SOCIAL_LINKS } from "../site";

/**
 * Root layout du site.
 *
 * Il n'y a volontairement pas de `app/layout.tsx` : quand il est absent, Next
 * promeut ce layout au rang de root layout, ce qui lui permet de rendre
 * `<html lang>` avec la locale réelle plutôt qu'une valeur figée.
 */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Open Graph veut un code complet (`fr_FR`), pas le code court des routes. */
const OG_LOCALES: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_US",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const title = t(dictionaries.meta.title, locale);
  const description = t(dictionaries.meta.description, locale);

  return {
    // Sans `metadataBase`, Next resout les URLs Open Graph sur localhost.
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: `%s · ${AUTHOR_NAME}` },
    description,
    authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
    creator: AUTHOR_NAME,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}`])),
        // Sert de repli aux visiteurs dont la langue ne correspond a aucune version.
        "x-default": `/${defaultLocale}`,
      },
    },
    openGraph: {
      title,
      description,
      type: "profile",
      url: `/${locale}`,
      siteName: AUTHOR_NAME,
      locale: OG_LOCALES[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => OG_LOCALES[l]),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  // Une locale inconnue dans l'URL doit donner un 404, pas une page à moitié traduite.
  if (!isLocale(locale)) notFound();

  /* Donnees structurees : c'est ce qui permet a Google de relier le site a une
     personne nommee, plutot qu'a une page de texte anonyme. */
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR_NAME,
    url: `${SITE_URL}/${locale}`,
    email: `mailto:${AUTHOR_EMAIL}`,
    jobTitle: t(dictionaries.meta.jobTitle, locale),
    description: t(dictionaries.meta.description, locale),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "IUT de Metz",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Metz",
        addressCountry: "FR",
      },
    },
    knowsAbout: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PHP",
      "Symfony",
      "Python",
      "Kotlin Multiplatform",
      "Docker",
      "Linux",
      "Cybersécurité",
    ],
    sameAs: SOCIAL_LINKS,
  };

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
