import type { Metadata } from "next";

import ProjectsPageContent from "../../components/projects/ProjectsPageContent";
import { defaultLocale, isLocale, t } from "../../i18n/config";
import { dictionaries } from "../../i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;

  return {
    title: t(dictionaries.projects.title, locale),
    description: t(dictionaries.projects.lead, locale),
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
