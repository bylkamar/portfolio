"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import Footer from "../components/ui/Footer";
import { NavBar } from "../components/ui/NavBar";
import { FeaturedProjectCard } from "../components/projects/FeaturedProjectCard";
import { ProjectRow } from "../components/projects/ProjectRow";
import {
  EMPTY_FILTERS,
  ProjectFilters,
  hasActiveFilters,
  type Filters,
} from "../components/projects/ProjectFilters";
import {
  allCategories,
  allContexts,
  allProjects,
  allStacks,
  featured,
  type Project,
} from "../data/projects";
import { dictionaries } from "../i18n/dictionaries";
import { defaultLocale, t } from "../i18n/config";

function matches(project: Project, filters: Filters, locale = defaultLocale): boolean {
  const query = filters.query.trim().toLowerCase();

  const matchesQuery =
    query.length === 0 ||
    project.title.toLowerCase().includes(query) ||
    t(project.tagline, locale).toLowerCase().includes(query) ||
    t(project.description, locale).toLowerCase().includes(query) ||
    project.stack.some((tech) => tech.toLowerCase().includes(query)) ||
    (project.tags ?? []).some((tag) => tag.toLowerCase().includes(query));

  const matchesCategory =
    filters.category === "all" || project.category === filters.category;

  const matchesContext =
    filters.context === "all" || project.context === filters.context;

  // OU à l'intérieur du groupe stack, ET entre les groupes.
  const matchesStack =
    filters.stacks.length === 0 ||
    filters.stacks.some((stack) => project.stack.includes(stack));

  return matchesQuery && matchesCategory && matchesContext && matchesStack;
}

function ProjectsPage() {
  const locale = defaultLocale;
  const d = dictionaries.projects;

  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);

  // Dérivés des données : aucune chip ne peut renvoyer un résultat vide.
  const categories = useMemo(() => allCategories(), []);
  const contexts = useMemo(() => allContexts(), []);
  const stacks = useMemo(() => allStacks(), []);
  const featuredProjects = useMemo(() => featured(), []);
  const projects = useMemo(() => allProjects(), []);

  const filteredProjects = useMemo(
    () => projects.filter((project) => matches(project, filters, locale)),
    [projects, filters, locale],
  );

  return (
    <main className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black relative scroll-smooth">
      <NavBar />

      <section className="w-full">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pb-16 pt-28">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-3"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-zinc-400">
              {t(d.eyebrow, locale)}
            </span>
            <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-5xl">
              {t(d.title, locale)}
            </h1>
            <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-300 md:text-lg">
              {t(d.lead, locale)}
            </p>
          </motion.header>

          {/* --- Niveau 1 : la vitrine, volontairement hors du système de filtres --- */}
          {featuredProjects.length > 0 && (
            <section className="flex flex-col gap-5">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                {t(d.featuredHeading, locale)}
              </h2>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {featuredProjects.map((project, index) => (
                  <FeaturedProjectCard
                    key={project.slug}
                    project={project}
                    index={index}
                    locale={locale}
                  />
                ))}
              </div>
            </section>
          )}

          {/* --- Niveau 2 : la liste exhaustive, filtrable --- */}
          <section className="flex flex-col gap-5">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
              {t(d.allHeading, locale)}
            </h2>

            <ProjectFilters
              filters={filters}
              onChange={setFilters}
              categories={categories}
              contexts={contexts}
              stacks={stacks}
              resultCount={filteredProjects.length}
              locale={locale}
            />

            {filteredProjects.length > 0 ? (
              <ul className="rounded-3xl border border-zinc-200 bg-white px-2 dark:border-zinc-800 dark:bg-zinc-900">
                {/*
                  Pas de `mode="wait"` et clé par slug : les lignes qui restent
                  glissent au lieu d'être démontées puis remontées à chaque frappe.
                */}
                <AnimatePresence initial={false}>
                  {filteredProjects.map((project, index) => (
                    <ProjectRow
                      key={project.slug}
                      project={project}
                      index={index}
                      locale={locale}
                    />
                  ))}
                </AnimatePresence>
              </ul>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-zinc-300 bg-white/60 p-10 text-center text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900/40"
              >
                <p>{t(d.empty, locale)}</p>
                {hasActiveFilters(filters) && (
                  <button
                    type="button"
                    onClick={() => setFilters(EMPTY_FILTERS)}
                    className="rounded-full border border-zinc-300 px-4 py-2 text-xs font-medium transition hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:hover:text-white"
                  >
                    {t(d.reset, locale)}
                  </button>
                )}
              </motion.div>
            )}
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default ProjectsPage;
