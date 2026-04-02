"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import dynamic from "next/dynamic";

const HeroVideo = dynamic(() => import("@/remotion/HeroVideo"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
      <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
    </div>
  ),
});

export default function VideoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-20 left-6 sm:bottom-24 sm:left-8 md:left-16 z-40 group cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full border border-white/15 animate-ping" style={{ animationDuration: "3s" }} />
              <div className="absolute -inset-1.5 sm:-inset-2 rounded-full border border-white/20 animate-pulse" style={{ animationDuration: "2s" }} />
              
              <div className="relative w-12 h-12 sm:w-14 sm:w-14 md:w-16 md:h-16 rounded-full bg-zinc-950/90 border border-white/25 backdrop-blur-md flex items-center justify-center overflow-hidden shadow-lg shadow-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />
                <motion.div
                  className="relative z-10 flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white fill-white" />
                </motion.div>
              </div>
            </div>
            <span className="absolute -bottom-6 sm:-bottom-7 left-1/2 -translate-x-1/2 text-[8px] sm:text-[9px] font-bold tracking-[0.15em] uppercase text-zinc-500 whitespace-nowrap">
              Watch
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-4xl aspect-video relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50"
              onClick={(e) => e.stopPropagation()}
            >
              <HeroVideo autoPlay loop className="w-full h-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-center px-4"
            >
              <p className="text-xs sm:text-sm text-zinc-400 font-medium">16 seconds that could change your business</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}