"use client"; // Important pour Framer Motion
import { motion, useInView, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useRef } from "react";

import { landingProjects, type Project } from "../../data/projects";
import { defaultLocale, t, type Locale } from "../../i18n/config";

// --- 1. TYPES & VARIANTS ---

type BentoCardProps = {
    children: ReactNode;
    className?: string;
};

// Animation du conteneur parent (la grille)
// "staggerChildren" dit : "lance l'animation des enfants avec 0.1s de décalage entre chaque"
const gridVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// Animation de chaque carte (enfant)
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 }, // Départ : invisible et un peu plus bas
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 50 },
    }, // Arrivée : visible et à sa place
};

// Forme du bento, par position dans la grille. La 1re cellule est la vitrine.
const BENTO_SPANS = [
    "md:col-span-2 md:row-span-2",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-3 md:row-span-1",
];

// --- 2. COMPOSANTS ---

const BentoCard = ({ children, className = "" }: BentoCardProps) => {
    return (
        <motion.div
            variants={cardVariants} // On lie à l'animation enfant
            whileHover={{ scale: 0.98 }} // Petit effet de "clic" visuel au survol
            whileTap={{ scale: 0.95 }}
            className={`relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col transition-colors ${className}`}
        >
            {children}
        </motion.div>
    );
};

// La grande cellule : visuel + description longue.
const HeroCell = ({ project, locale }: { project: Project; locale: Locale }) => (
    <>
        {/* Background gradient animé au survol via CSS group-hover */}
        <div className="absolute inset-0 bg-linear-to-br from-violet-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="p-6 h-full flex flex-col justify-between relative z-10">
            <div>
                <div className="flex items-center justify-between gap-3">
                    <h3 className="md:text-2xl text-xl font-bold text-zinc-800 dark:text-zinc-100">{project.title}</h3>
                    <span className="bg-zinc-200 dark:bg-zinc-800 text-xs px-2 py-1 rounded-md border border-zinc-300 dark:border-zinc-700 shrink-0">
                        {project.stack.slice(0, 2).join(" + ")}
                    </span>
                </div>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    {t(project.description, locale)}
                </p>
            </div>

            <div className="relative w-full h-full rounded-lg mt-4 overflow-hidden border border-dashed border-zinc-400 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-zinc-500">
                        Image Preview
                    </div>
                )}
            </div>
        </div>
    </>
);

// Les cellules secondaires : titre, stack, tagline.
const CompactCell = ({ project, locale }: { project: Project; locale: Locale }) => (
    <div className="p-6 h-full flex flex-col justify-between relative z-10">
        <div>
            <div className="flex items-center justify-between gap-3">
                <h3 className="font-bold text-zinc-800 dark:text-zinc-100">{project.title}</h3>
                <span className="bg-zinc-200 dark:bg-zinc-800 text-xs px-2 py-1 rounded-md border border-zinc-300 dark:border-zinc-700 shrink-0">
                    {project.stack[0]}
                </span>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {t(project.tagline, locale)}
            </p>
        </div>
        <span className="text-xs text-zinc-400 dark:text-zinc-500">{project.year}</span>
    </div>
);

function Projects({ locale = defaultLocale }: { locale?: Locale }) {
    const ref = useRef(null);
    const isInViewDiscoverProject = useInView(ref, { once: true });
    const projects = landingProjects(BENTO_SPANS.length);

    return (
        <div className="mt-24" id="projects">
            <h1 className="text-4xl">Projects</h1>
            <div className="w-full pt-10 flex justify-center">
                <motion.div
                    variants={gridVariants} // On lie à l'animation parent
                    initial="hidden" // État de départ
                    whileInView="show" // Déclenche l'animation quand on scrolle dessus
                    viewport={{ once: true, margin: "-100px" }} // L'animation se joue une seule fois
                    className="grid grid-cols-1 md:grid-cols-3 auto-rows-[12rem] gap-4 max-w-4xl w-full px-4"
                >
                    {projects.map((project, index) => (
                        <BentoCard
                            key={project.slug}
                            className={`${BENTO_SPANS[index]} group cursor-pointer hover:border-zinc-400 dark:hover:border-zinc-600`}
                        >
                            {index === 0 ? (
                                <HeroCell project={project} locale={locale} />
                            ) : (
                                <CompactCell project={project} locale={locale} />
                            )}
                        </BentoCard>
                    ))}
                </motion.div>
            </div>
            {/* Projects button */}
            <div className="pt-2 justify-center flex md:justify-start">
                <motion.h2
                    ref={ref}
                    initial={{ filter: 'blur(20px)', opacity: 0 }}
                    animate={isInViewDiscoverProject ? { filter: 'blur(0px)', opacity: 1 } : {}}
                    transition={{ duration: 1.2 }}
                    className="text-2xl font-bold tracking-tighter cursor-pointer"
                >
                    <Link href="/projects" className="underline decoration-white underline-offset-8 bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Discover more of my projects </Link>
                </motion.h2>
            </div>
        </div>

    );
}

export default Projects;
