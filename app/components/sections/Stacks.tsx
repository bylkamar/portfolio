'use client';
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function Stacks() {
    const myStacks = ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "Python", "PHP/Symfony", "Java", "Docker", "SQL"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % myStacks.length);
        }, 3000); // Réduit à 3s pour tester plus vite
        return () => clearInterval(interval);
    }, [myStacks.length]);

    return (
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
                        className="absolute text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                    >
                        {myStacks[index]}
                    </motion.span>
                </AnimatePresence>
            </div>
        </div>
    );
}
export default Stacks;