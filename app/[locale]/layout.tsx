import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";
import { isLocale, locales, t } from "../i18n/config";
import { dictionaries } from "../i18n/dictionaries";

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
    title: { default: title, template: "%s · Amer AIT CHIKHOUNE" },
    description,
    openGraph: { title, description, type: "website", locale },
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
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

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
