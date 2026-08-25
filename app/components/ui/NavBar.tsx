"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LOCALE_LABELS,
  defaultLocale,
  locales,
  t,
  type Locale,
} from "../../i18n/config";
import { dictionaries } from "../../i18n/dictionaries";

export function NavBar({ locale = defaultLocale }: { locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const d = dictionaries.nav;

  const navItems = [
    { label: t(d.home, locale), href: `/${locale}#home` },
    { label: t(d.about, locale), href: `/${locale}#about` },
    { label: t(d.projects, locale), href: `/${locale}#projects` },
    { label: t(d.contact, locale), href: `/${locale}#contact` },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-2xl border border-zinc-200/70 bg-white/60 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-zinc-900/5 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/40 dark:border-white/15 dark:bg-white/5 dark:ring-white/20 dark:supports-[backdrop-filter]:bg-white/10">
        <Link
          href={`/${locale}`}
          className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-white"
        >
          bylkamar
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-white/80 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LocaleSwitcher locale={locale} />

          <button
            type="button"
            aria-label={t(d.toggleMenu, locale)}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-900 dark:border-white/20 dark:text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-zinc-900 dark:bg-white" />
              <span className="block h-0.5 w-5 bg-zinc-900 dark:bg-white" />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-5xl rounded-2xl border border-zinc-200/70 bg-white/60 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-zinc-900/5 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/40 dark:border-white/15 dark:bg-white/5 dark:ring-white/20 dark:supports-[backdrop-filter]:bg-white/10 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-700 dark:text-white/90"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/**
 * Bascule FR / EN en conservant le chemin courant.
 *
 * Le cookie est posé côté client pour que le middleware respecte ce choix aux
 * visites suivantes, y compris quand le visiteur arrive sur `/`.
 */
function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? `/${locale}`;
  const d = dictionaries.nav;

  const pathFor = (target: Locale) => {
    const segments = pathname.split("/");
    // segments[0] est vide (le chemin commence par "/"), segments[1] est la locale.
    segments[1] = target;
    return segments.join("/") || `/${target}`;
  };

  return (
    <div
      role="group"
      aria-label={t(d.switchLanguage, locale)}
      className="flex items-center gap-0.5 rounded-full border border-zinc-200/80 p-0.5 dark:border-white/15"
    >
      {locales.map((target) => {
        const active = target === locale;
        return (
          <Link
            key={target}
            href={pathFor(target)}
            hrefLang={target}
            aria-current={active ? "true" : undefined}
            onClick={() => {
              document.cookie = `NEXT_LOCALE=${target};path=/;max-age=${60 * 60 * 24 * 365}`;
            }}
            className={`rounded-full px-2 py-1 text-[11px] font-semibold transition ${
              active
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "text-zinc-500 hover:text-zinc-900 dark:text-white/60 dark:hover:text-white"
            }`}
          >
            {LOCALE_LABELS[target]}
          </Link>
        );
      })}
    </div>
  );
}
