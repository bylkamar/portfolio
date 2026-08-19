"use client";

import { FiSearch, FiX } from "react-icons/fi";

import {
  CATEGORY_LABELS,
  CONTEXT_LABELS,
  type Category,
  type Context,
} from "../../data/projects";
import { dictionaries, plural, RESULT_COUNT } from "../../i18n/dictionaries";
import { defaultLocale, t, type Locale } from "../../i18n/config";

export type Filters = {
  query: string;
  category: Category | "all";
  context: Context | "all";
  stacks: string[];
};

export const EMPTY_FILTERS: Filters = {
  query: "",
  category: "all",
  context: "all",
  stacks: [],
};

export function hasActiveFilters(filters: Filters): boolean {
  return (
    filters.query.trim().length > 0 ||
    filters.category !== "all" ||
    filters.context !== "all" ||
    filters.stacks.length > 0
  );
}

type ProjectFiltersProps = {
  filters: Filters;
  onChange: (filters: Filters) => void;
  categories: Category[];
  contexts: Context[];
  stacks: string[];
  resultCount: number;
  locale?: Locale;
};

export function ProjectFilters({
  filters,
  onChange,
  categories,
  contexts,
  stacks,
  resultCount,
  locale = defaultLocale,
}: ProjectFiltersProps) {
  const d = dictionaries.projects;
  const active = hasActiveFilters(filters);

  const toggleStack = (stack: string) => {
    onChange({
      ...filters,
      stacks: filters.stacks.includes(stack)
        ? filters.stacks.filter((value) => value !== stack)
        : [...filters.stacks, stack],
    });
  };

  return (
    <div className="flex flex-col gap-5 rounded-3xl border border-zinc-200 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1">
          <FiSearch
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
          />
          <input
            type="search"
            value={filters.query}
            onChange={(event) => onChange({ ...filters, query: event.target.value })}
            placeholder={t(d.searchPlaceholder, locale)}
            aria-label={t(d.searchLabel, locale)}
            className="w-full rounded-2xl border border-zinc-200 bg-white py-3 pl-11 pr-4 text-sm text-zinc-700 shadow-sm outline-none transition focus:border-zinc-300 focus:ring-2 focus:ring-zinc-900/10 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:focus:border-zinc-600 dark:focus:ring-zinc-100/10"
          />
        </div>

        <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
          <span aria-live="polite" className="tabular-nums">
            {plural(resultCount, RESULT_COUNT, locale)}
          </span>
          {active && (
            <button
              type="button"
              onClick={() => onChange(EMPTY_FILTERS)}
              className="inline-flex items-center gap-1 rounded-full border border-zinc-200 px-3 py-1 transition hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:hover:text-white"
            >
              <FiX aria-hidden />
              {t(d.reset, locale)}
            </button>
          )}
        </div>
      </div>

      <FilterGroup label={t(d.filterCategory, locale)}>
        <Chip
          active={filters.category === "all"}
          onClick={() => onChange({ ...filters, category: "all" })}
        >
          {t(d.filterAll, locale)}
        </Chip>
        {categories.map((category) => (
          <Chip
            key={category}
            active={filters.category === category}
            onClick={() => onChange({ ...filters, category })}
          >
            {t(CATEGORY_LABELS[category], locale)}
          </Chip>
        ))}
      </FilterGroup>

      <FilterGroup label={t(d.filterStack, locale)}>
        {stacks.map((stack) => (
          <Chip
            key={stack}
            active={filters.stacks.includes(stack)}
            onClick={() => toggleStack(stack)}
          >
            {stack}
          </Chip>
        ))}
      </FilterGroup>

      <FilterGroup label={t(d.filterContext, locale)}>
        <Chip
          active={filters.context === "all"}
          onClick={() => onChange({ ...filters, context: "all" })}
        >
          {t(d.filterAll, locale)}
        </Chip>
        {contexts.map((context) => (
          <Chip
            key={context}
            active={filters.context === context}
            onClick={() => onChange({ ...filters, context })}
          >
            {t(CONTEXT_LABELS[context], locale)}
          </Chip>
        ))}
      </FilterGroup>
    </div>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
      <span className="pt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400 sm:w-24 sm:shrink-0 sm:text-right">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
        active
          ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
          : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

export default ProjectFilters;
