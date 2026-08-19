"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-4 left-0 right-0 z-50 px-4"
        >
            {/* Le verre était calibré pour du texte blanc uniquement : illisible sur
                le fond zinc-50 du mode clair. Chaque couleur a donc sa variante claire. */}
            <div className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-zinc-200/70 bg-white/60 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-zinc-900/5 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/40 dark:border-white/15 dark:bg-white/5 dark:ring-white/20 dark:supports-[backdrop-filter]:bg-white/10">
                <a href="#home" className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-white">
                    bylkamar
                </a>

                <div className="hidden items-center gap-6 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-white/80 dark:hover:text-white"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <button
                    type="button"
                    aria-label="Toggle menu"
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
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm text-zinc-700 dark:text-white/90"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}