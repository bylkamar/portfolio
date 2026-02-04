'use client';
import { motion, AnimatePresence } from "framer-motion";
import LoadingCircleSpinner from "./LoadingSpinner";
import TypingEffect from "./Text/Typing";
import { useEffect, useState } from "react";


function Overlay({ children }: { children: React.ReactNode }) {
    const [showOverlay, setShowOverlay] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowOverlay(false), 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
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
                {children}
                {/* ...autres contenus... */}
            </div>
        </div>
    );
}

export default Overlay;