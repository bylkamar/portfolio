'use client';
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiTailwindcss,
    SiPython,
    SiPhp,
    SiSymfony,
    SiDocker,
    SiPostgresql,
    SiMongodb,
    SiRubyonrails,
    SiGo
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IconType } from "react-icons/lib";
function Stacks() {
    const myStacks = ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "Python", "PHP/Symfony", "Java", "Docker", "SQL"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % myStacks.length);
        }, 3000); // Réduit à 3s pour tester plus vite
        return () => clearInterval(interval);
    }, [myStacks.length]);


    const languages = [
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "Python", icon: SiPython, color: "text-blue-400" },
        { name: "Java", icon: FaJava, color: "text-red-500" },
        { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
        { name: "GoLang", icon: SiGo, color: "text-blue-400" },
        { name: "Ruby", icon: SiRubyonrails, color: "text-red-400" },


    ];

    const technologies = [
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white dark:text-white" }, // Next est noir/blanc
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Symfony", icon: SiSymfony, color: "text-white dark:text-white" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
        { name: "Docker", icon: SiDocker, color: "text-blue-500" },
        { name: "SQL", icon: SiPostgresql, color: "text-blue-300" },
        { name: "NoSQL", icon: SiMongodb, color: "text-green-400" },
    ];


    return (
        <div>
            <div className="w-full flex flex-col justify-center items-center mt-28 mb-12">
                <h2 className="text-center text-4xl font-bold tracking-tighter md:leading-[4rem]">
                    I have experimented with technologies like
                </h2>
                {/* FIX: On donne une taille fixe (w-full h-20) au conteneur RELATIF.
               Cela empêche le layout shift (sautillement) quand le texte change.
            */}
                <div className="relative w-full max-w-lg h-20 flex justify-center items-center overflow-hidden">
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            key={myStacks[index]}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                            // Le texte est absolu pour se superposer parfaitement sans pousser les murs
                            className="absolute text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-purple-500"
                        >
                            {myStacks[index]}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>

            <div>
                <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"> Languages</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
                        {languages.map((tech, idx) => (
                            <TechItem key={idx} tech={tech} />
                        ))}
                    </div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"> Technologies</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {technologies.map((tech, idx) => (
                            <TechItem key={idx} tech={tech} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const TechItem = ({ tech }: {
    tech: {
        name: string;
        icon: IconType;
        color: string;
    }
}) => {
    return (
        <div className="flex items-center gap-3 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group">
            {/* L'icône */}
            <div className={`text-xl ${tech.color} group-hover:scale-110 transition-transform`}>
                <tech.icon />
            </div>
            {/* Le nom */}
            <span className="font-medium text-sm text-zinc-700 dark:text-zinc-300">
                {tech.name}
            </span>
        </div>
    );
};

export default Stacks;