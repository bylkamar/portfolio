import type { Metadata } from "next";

import ProjectsPageContent from "../../components/projects/ProjectsPageContent";
import { defaultLocale, isLocale, locales, t } from "../../i18n/config";
import { dictionaries } from "../../i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;

  const title = t(dictionaries.projects.title, locale);
  const description = t(dictionaries.projects.lead, locale);

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/projects`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}/projects`])),
        "x-default": `/${defaultLocale}/projects`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `/${locale}/projects`,
    },
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;

  return <ProjectsPageContent locale={locale} />;
}
