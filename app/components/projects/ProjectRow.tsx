"use client";

import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

import { CATEGORY_LABELS, STATUS_LABELS, type Project } from "../../data/projects";
import { defaultLocale, t, type Locale } from "../../i18n/config";

type ProjectRowProps = {
  project: Project;
  index: number;
  locale?: Locale;
};

/**
 * Ligne compacte de la liste exhaustive.
 *
 * Volontairement dense : c'est ce qui permet à la page de rester lisible avec
 * plusieurs dizaines de projets, là où des cartes de taille égale écraseraient
 * la différence entre un produit complet et un script de 40 lignes.
 */
export function ProjectRow({ project, index, locale = defaultLocale }: ProjectRowProps) {
  const href = project.links?.demo ?? project.links?.repo;

  const content = (
    <>
      <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
        <span className="flex items-center gap-2 font-medium text-zinc-900 dark:text-zinc-100 sm:w-44 sm:shrink-0">
          {project.title}
          {href && (
            <FiArrowUpRight
              aria-hidden
              className="shrink-0 text-zinc-400 opacity-0 transition group-hover:opacity-100"
            />
          )}
        </span>
        <span className="min-w-0 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
          {t(project.tagline, locale)}
        </span>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-2">
        {project.status !== "shipped" && (
          <span className="rounded-full border border-amber-300/60 bg-amber-50 px-2 py-0.5 text-[10px] uppercase tracking-[0.15em] text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400">
            {t(STATUS_LABELS[project.status], locale)}
          </span>
        )}
        {project.stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[11px] text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 3 && (
          <span className="text-[11px] text-zinc-400 dark:text-zinc-500">
            +{project.stack.length - 3}
          </span>
        )}
        <span className="w-10 text-right text-sm tabular-nums text-zinc-400 dark:text-zinc-500">
          {project.year}
        </span>
      </div>
    </>
  );

  const rowClasses =
    "group flex flex-col gap-3 rounded-2xl px-4 py-4 transition sm:flex-row sm:items-center sm:justify-between sm:gap-6";

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{
        duration: 0.25,
        // Plafonné : sans ça le 40e projet attendrait plus d'une seconde.
        delay: Math.min(index, 8) * 0.03,
      }}
      className="border-b border-zinc-200 last:border-b-0 dark:border-zinc-800"
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} — ${t(CATEGORY_LABELS[project.category], locale)}`}
          className={`${rowClasses} hover:bg-zinc-100/70 dark:hover:bg-zinc-800/40`}
        >
          {content}
        </a>
      ) : (
        <div className={rowClasses}>{content}</div>
      )}
    </motion.li>
  );
}

export default ProjectRow;
