"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

import {
  CATEGORY_LABELS,
  CONTEXT_LABELS,
  STATUS_LABELS,
  type Project,
} from "../../data/projects";
import { dictionaries } from "../../i18n/dictionaries";
import { defaultLocale, t, type Locale } from "../../i18n/config";

type FeaturedProjectCardProps = {
  project: Project;
  index: number;
  locale?: Locale;
};

export function FeaturedProjectCard({
  project,
  index,
  locale = defaultLocale,
}: FeaturedProjectCardProps) {
  const d = dictionaries.projects;
  const href = project.links?.demo ?? project.links?.repo;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-violet-500/5 to-fuchsia-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Visuel — placeholder tant qu'aucune capture n'est fournie. */}
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-zinc-100 via-zinc-50 to-zinc-200 text-xs uppercase tracking-[0.2em] text-zinc-400 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 dark:text-zinc-600">
            {t(d.noPreview, locale)}
          </div>
        )}
      </div>

      <div className="relative flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {project.title}
          </h3>
          <span className="shrink-0 text-sm text-zinc-400 dark:text-zinc-500">
            {project.year}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em]">
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            {t(CATEGORY_LABELS[project.category], locale)}
          </span>
          <span className="rounded-full border border-zinc-200 px-3 py-1 text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
            {t(CONTEXT_LABELS[project.context], locale)}
          </span>
          {project.status !== "shipped" && (
            <span className="rounded-full border border-amber-300/60 bg-amber-50 px-3 py-1 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400">
              {t(STATUS_LABELS[project.status], locale)}
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          {t(project.description, locale)}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-[11px] text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-2 text-sm">
          {project.links?.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-zinc-700 underline-offset-4 transition hover:underline dark:text-zinc-200"
            >
              <FiGithub aria-hidden />
              {t(d.viewRepo, locale)}
            </a>
          )}
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-zinc-700 underline-offset-4 transition hover:underline dark:text-zinc-200"
            >
              <FiArrowUpRight aria-hidden />
              {t(d.viewDemo, locale)}
            </a>
          )}
          {!href && project.links?.note && (
            <span className="text-zinc-400 dark:text-zinc-500">
              {t(project.links.note, locale)}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default FeaturedProjectCard;
