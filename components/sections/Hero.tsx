"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MoveRight } from "lucide-react";
import { useState, useEffect } from "react";
import { FloatingPaths } from "@/components/ui/background-paths";
import Magnetic from "@/components/ui/magnetic";
import Link from "next/link";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const words = [
    "LEAKING MARGIN.",
    "WASTING TIME.",
    "SCALING SLOWLY.",
    "MANUAL & MESSY."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden bg-background">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-zinc-200/5 blur-[120px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-zinc-500/10 blur-[120px] rounded-full animate-pulse-slow pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Glowing Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12 shadow-[0_0_20px_rgba(255,255,255,0.03)]"
        >
          <span className="relative flex w-2 h-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
            <span className="relative inline-flex rounded-full w-2 h-2 bg-white/80"></span>
          </span>
          <span className="text-xs font-medium text-zinc-300 tracking-[0.25em] uppercase">
            Autonomous Infrastructure for Visionary Brands
          </span>
        </motion.div>

        {/* Cinematic Dynamic Headline */}
        <div className="max-w-7xl mb-12 relative min-h-[160px] md:min-h-[280px] flex items-center justify-center">
           <div className="relative z-10 w-full">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-7xl lg:text-[7.2rem] font-heading font-black leading-[0.9] tracking-tighter uppercase"
              >
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-gradient block"
                >
                  YOUR OPERATIONS ARE
                </motion.span>
                <div className="relative inline-block w-full text-center overflow-visible py-2">
                   <AnimatePresence mode="wait">
                      <motion.span
                        key={words[index]}
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block"
                      >
                         {words[index]}
                      </motion.span>
                   </AnimatePresence>
                </div>
              </motion.h1>
              
              {/* Subtle text reflection/glow */}
              <div className="absolute top-0 left-0 w-full h-full blur-3xl -z-10 text-white flex items-center justify-center opacity-20 select-none pointer-events-none">
                 <div className="text-5xl md:text-7xl lg:text-[7.2rem] font-heading font-black leading-[0.9] tracking-tighter w-full text-center uppercase">
                    YOUR OPERATIONS ARE <br />
                    <AnimatePresence mode="wait">
                       <motion.span
                         key={words[index]}
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                         transition={{ duration: 0.6 }}
                         className="inline-block"
                       >
                          {words[index]}
                       </motion.span>
                    </AnimatePresence>
                 </div>
              </div>
           </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-400 font-medium max-w-2xl leading-relaxed mb-16 mx-auto"
        >
          We Plug the Holes with Autonomous Workflows. Engineering bespoke n8n pipelines and generative software that reclaim 40+ hours of manual work every week. <span className="text-white font-bold">Starting at $1,500.</span>
        </motion.p>

        {/* Premium CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Magnetic strength={0.2}>
            <Link href="/#initiate" className="flex items-center justify-center gap-4 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-widest hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] group">
              Book a Systems Audit
              <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Magnetic>
          <Magnetic strength={0.15}>
            <Link href="/services" className="flex items-center justify-center px-8 py-4 rounded-full glass-card text-white font-semibold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors">
              Explore Capabilities
            </Link>
          </Magnetic>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
