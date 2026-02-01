"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import LoadingCircleSpinner from "./components/ui/LoadingSpinner";
import TypingEffect from "./components/ui/Text/Typing";
import { NavBar } from "./components/ui/NavBar";
export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black relative">
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="rounded"
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowOverlay(false)}
            >
              <TypingEffect text="AIT CHIKHOUNE Amer" />
              <LoadingCircleSpinner />
            </motion.div>
            <span className="mt-4 text-white text-sm opacity-70">Developer and future pentester?</span>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={showOverlay ? "blur-sm pointer-events-none select-none" : ""}>
        <NavBar />
        <p>Hello world</p>
        {/* ...autres contenus... */}
      </div>
    </div>
  );
}
