"use client"; // Important pour Framer Motion
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ReactNode, useRef } from "react";

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
const cardVariants = {
    hidden: { opacity: 0, y: 20 }, // Départ : invisible et un peu plus bas
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }, // Arrivée : visible et à sa place
};


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

function Projects() {
    const ref = useRef(null);
    const isInViewDiscoverProject = useInView(ref, { once: true });
    return (
        <div>
            <div id="projects" className="w-full pt-10 flex justify-center">
                <motion.div
                    variants={gridVariants} // On lie à l'animation parent
                    initial="hidden" // État de départ
                    whileInView="show" // Déclenche l'animation quand on scrolle dessus
                    viewport={{ once: true, margin: "-100px" }} // L'animation se joue une seule fois
                    className="grid grid-cols-1 md:grid-cols-3 auto-rows-[12rem] gap-4 max-w-4xl w-full px-4"
                >
                    {/* --- PROJET 1 : POKESTIM --- */}
                    <BentoCard className="md:col-span-2 md:row-span-2 group cursor-pointer hover:border-zinc-400 dark:hover:border-zinc-600">
                        {/* Background gradient animé au survol via CSS group-hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="p-6 h-full flex flex-col justify-between relative z-10">
                            {/* badge */}
                            <div>
                                <div className="flex items-center justify-between">
                                    <h3 className="md:text-2xl text-xl font-bold text-zinc-800 dark:text-zinc-100">Pokestim</h3>
                                    <span className="bg-zinc-200 dark:bg-zinc-800 text-xs px-2 py-1 rounded-md border border-zinc-300 dark:border-zinc-700">
                                        React Native (Expo) + Python
                                    </span>
                                </div>
                                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                                    A basic multiplatform application to estimate Pokémon items price by market trends.
                                </p>
                            </div>
                            {/* Placeholder Image */}
                            <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 rounded-lg mt-4 border border-dashed border-zinc-400 dark:border-zinc-700 flex items-center justify-center text-sm text-zinc-500">
                                Image Preview
                            </div>
                        </div>
                    </BentoCard>

                    {/* --- PROJET 2 --- */}
                    <BentoCard className="md:col-span-1 md:row-span-1 p-6 text-center cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-800/50">
                        <div className="p-1 h-full flex flex-col justify-between relative z-10">
                            {/* badge */}

                            <div>
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-zinc-800 dark:text-zinc-100">Labubu Fork</h3>
                                    <span className="bg-zinc-200 dark:bg-zinc-800 text-xs px-2 py-1 rounded-md border border-zinc-300 dark:border-zinc-700">
                                        PHP/Symfony
                                    </span>
                                </div>
                                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                                    A fork of Labubu WebSite to train with Symfony framework and PHP language (Stimulus,ORM,Twig...).
                                </p>
                            </div>
                        </div>
                    </BentoCard>

                    {/* --- PROJET 3 --- */}
                    <BentoCard className="md:col-span-1 md:row-span-1 p-6 relative overflow-hidden">
                        <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">Java (Learning)</h3>
                        <motion.div
                            className="absolute -bottom-2 -right-2 text-6xl opacity-20"
                            animate={{ rotate: [0, 10, 0] }} // Infinite rotation animation
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            ☕
                        </motion.div>
                        <p>Learning Java programming language and concepts. But I need more practice and projects to improve.</p>
                    </BentoCard>

                    {/* --- PROJET 4 --- */}
                    <BentoCard className="md:col-span-3 md:row-span-1 row-span-2 md:flex-row items-center p-6 gap-6">
                        <div className="bg-gray-500/10 p-2 rounded-lg border border-gray-500/20">
                            <span className="text-orange-600 dark:text-orange-400 font-bold">Bootstrap + NodeJS</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">VPS Hosting Panel - Business to Consumer</h3>
                            <p className="text-sm text-zinc-500">2023</p>
                            <p>I created from scratch an entire web hosting panel to manage VPS servers for small businesses using Proxmox API backed with NodeJS. </p>
                            <p>User could buy cheap VPS hosting plans with cryptocurrency and manage their servers easily through the panel.</p>
                        </div>
                    </BentoCard>

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
                    <Link href="#" className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Discover more of my projects </Link>
                </motion.h2>
            </div>
        </div>

    );
}

export default Projects;