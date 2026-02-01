"use client"

import { motion, AnimatePresence } from "framer-motion"

function LoadingCircleSpinner() {
    return (
        <div className="flex items-center justify-center mt-4">
            <AnimatePresence>
                <motion.div
                    className="spinner"
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "linear",
                    }}
                />
            </AnimatePresence>
        </div>
    )
}
export default LoadingCircleSpinner
