'use client';
import { AnimatePresence, motion } from "motion/react";
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
    SiMysql,
    SiMongodb,
    SiGo,
    SiKotlin,
    SiExpo,
    SiLinux,
    SiProxmox,
    SiVmware,
    SiGitlab,
    SiNginx,
    SiBurpsuite,
    SiFlutter,
    SiDart,
    SiPostgresql,
    SiGit,
    SiVercel,
    SiCloudflare,
    SiPostman,
    SiSwagger,
    SiTensorflow,
    SiPytorch,
} from "react-icons/si";
import { FaJava, FaBug, FaTheaterMasks, FaSyringe } from "react-icons/fa";
import { VscTerminalPowershell } from "react-icons/vsc";
import { IconType } from "react-icons/lib";

import { defaultLocale, t, type Locale } from "../../i18n/config";
import { dictionaries } from "../../i18n/dictionaries";

type Tech = { name: string; icon: IconType; color: string };

/* Les logos monochromes (Next, Symfony, Expo, Linux) doivent suivre le thème :
   un `text-white` en dur les rend invisibles sur le fond clair. */
const MONO = "text-zinc-900 dark:text-white";

const languages: Tech[] = [
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Python", icon: SiPython, color: "text-blue-400" },
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
    { name: "GoLang", icon: SiGo, color: "text-cyan-500" },
    { name: "Kotlin", icon: SiKotlin, color: "text-purple-500" },
    { name: "Dart", icon: SiDart, color: "text-sky-500" },
];

const frameworks: Tech[] = [
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: MONO },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "React Native (Expo)", icon: SiExpo, color: MONO },
    { name: "Flutter", icon: SiFlutter, color: "text-sky-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Symfony", icon: SiSymfony, color: MONO },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
    { name: "NoSQL", icon: SiMongodb, color: "text-green-400" },
];

const infrastructure: Tech[] = [
    { name: "Git", icon: SiGit, color: "text-orange-600" },
    { name: "Linux", icon: SiLinux, color: MONO },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "Proxmox", icon: SiProxmox, color: "text-orange-500" },
    { name: "VMware", icon: SiVmware, color: "text-zinc-500" },
    { name: "GitLab CI/CD", icon: SiGitlab, color: "text-orange-500" },
    { name: "Nginx", icon: SiNginx, color: "text-green-600" },
    { name: "PowerShell", icon: VscTerminalPowershell, color: "text-blue-400" },
    { name: "Cloudflare", icon: SiCloudflare, color: "text-orange-400" },
    { name: "Vercel", icon: SiVercel, color: MONO },
    { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    { name: "Swagger", icon: SiSwagger, color: "text-green-500" },
];

const security: Tech[] = [
    { name: "Burp Suite", icon: SiBurpsuite, color: "text-orange-500" },
    /* Frida n'a pas de logo dans react-icons : la seringue rend bien l'idée
       d'injection dans un processus. */
    { name: "Frida", icon: FaSyringe, color: "text-purple-400" },
    { name: "CTF / Bug Bounty", icon: FaBug, color: "text-red-400" },
    { name: "Playwright", icon: FaTheaterMasks, color: "text-green-500" },
    { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-400" },
    { name: "PyTorch", icon: SiPytorch, color: "text-red-500" },
];

/** Défile sous le titre : un échantillon des stacks, pas la liste complète. */
const myStacks = [
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Python",
    "PHP/Symfony",
    "Kotlin",
    "GoLang",
    "Docker",
    "Linux",
];

function Stacks({ locale = defaultLocale }: { locale?: Locale }) {
    const d = dictionaries.stacks;
    const [index, setIndex] = useState(0);

    const groups: { title: string; items: Tech[] }[] = [
        { title: t(d.languages, locale), items: languages },
        { title: t(d.frameworks, locale), items: frameworks },
        { title: t(d.infrastructure, locale), items: infrastructure },
        { title: t(d.security, locale), items: security },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % myStacks.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="w-full flex flex-col justify-center items-center mt-28 mb-12">
                <h2 className="text-center text-4xl font-bold tracking-tighter md:leading-[4rem]">
                    {t(d.heading, locale)}
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

            {groups.map((group) => (
                <div key={group.title}>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        {group.title}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
                        {group.items.map((tech) => (
                            <TechItem key={tech.name} tech={tech} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

const TechItem = ({ tech }: { tech: Tech }) => {
    return (
        <div className="flex items-center gap-3 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group">
            {/* L'icône */}
            <div className={`text-xl ${tech.color} group-hover:scale-110 transition-transform`}>
                <tech.icon aria-hidden />
            </div>
            {/* Le nom */}
            <span className="font-medium text-sm text-zinc-700 dark:text-zinc-300">
                {tech.name}
            </span>
        </div>
    );
};

export default Stacks;
