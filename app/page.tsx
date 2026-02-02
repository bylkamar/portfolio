"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import LoadingCircleSpinner from "./components/ui/LoadingSpinner";
import TypingEffect from "./components/ui/Text/Typing";
import { NavBar } from "./components/ui/NavBar";
import { About } from "./components/sections/About";
import Stacks from "./components/sections/Stacks";
import Projects from "./components/sections/Projects";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    // FIX 1: added 'flex-col'
    <main className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black relative">
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-95" // z-50 pour être sûr d'être au dessus
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="rounded cursor-pointer"
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowOverlay(false)}
            >
              <TypingEffect text="AIT CHIKHOUNE Amer" />
              <LoadingCircleSpinner />
            </motion.div>
            <span className="mt-4 text-white text-sm opacity-70">
              Developer and future pentester?
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FIX: added 'w-full flex flex-col items-center' 
      */}
      <div
        className={`w-full flex flex-col items-center ${showOverlay ? "blur-sm pointer-events-none select-none h-screen overflow-hidden" : ""
          }`}
      >
        <NavBar />

        <div className="w-full max-w-7xl px-4 flex flex-col items-center">
          <About />
          <Stacks />
          <Projects />
        </div>

        {/* ...autres contenus... */}
      </div>
    </main>
  );
}