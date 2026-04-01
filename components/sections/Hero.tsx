"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

const DotGlobeHero = dynamic(() => import("@/components/ui/globe-hero").then(mod => mod.DotGlobeHero), {
  ssr: false,
  loading: () => <div className="h-screen bg-background" />,
});

export default function Hero() {
  return (
    <DotGlobeHero
      rotationSpeed={0.004}
      className="bg-background relative overflow-hidden h-screen"
    >
      {/* Background Ambient Layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-500/5 rounded-full blur-[160px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zinc-400/5 rounded-full blur-[160px] animate-pulse-slow pointer-events-none" />
      
      {/* Central Content Grouping */}
      <div className="relative z-10 text-center flex flex-col items-center w-full max-w-6xl mx-auto px-6 pt-32 md:pt-48 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-10 flex flex-col items-center"
        >
          <div className="space-y-4" style={{ contain: "layout paint" }}>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-8xl lg:text-[10rem] font-heading font-black tracking-tighter leading-[0.8] select-none"
            >
              <span className="block font-light text-zinc-500 mb-2 md:mb-4 text-3xl sm:text-4xl md:text-7xl lg:text-8xl">
                STOP DOING
              </span>
              <span className="block relative">
                <span className="bg-gradient-to-br from-white via-white to-zinc-500/80 bg-clip-text text-transparent font-black relative z-10">
                  ROBOT WORK.
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-zinc-500/80 bg-clip-text text-transparent font-black blur-2xl opacity-40 scale-105">
                  ROBOT WORK.
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                  className="absolute -bottom-4 md:-bottom-6 left-0 h-1 md:h-3 bg-gradient-to-r from-white/60 via-white/20 to-transparent rounded-full shadow-2xl"
                />
              </span>
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-xl md:max-w-2xl mx-auto space-y-4 md:space-y-6"
          >
            <p className="text-lg md:text-2xl text-zinc-200 leading-relaxed font-medium tracking-tight px-4 md:px-0">
              Your team deserves to work on <span className="text-white font-bold">high-level strategy</span>, not spreadsheets. I build AI systems that reclaim 40+ hours every week.
            </p>
            <div className="inline-flex items-center gap-3 md:gap-4 px-4 py-1.5 md:px-5 md:py-2 rounded-lg border border-zinc-800 bg-zinc-950/40 backdrop-blur-md">
               <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">AI Automation Agency</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* FIXED CORNER COMMAND (UI Expert Addition) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="fixed bottom-10 right-6 md:right-12 z-50 group"
      >
        <motion.a
          href="/#initiate"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center"
        >
          {/* Geometric Glow Backplate */}
          <div className="absolute inset-0 bg-white blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
          
          <div className="relative flex items-center gap-4 bg-zinc-950 border border-white/20 pl-8 pr-4 py-4 rounded-full backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden min-w-[200px]">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <div className="flex flex-col items-start">
              <span className="text-[9px] font-black text-zinc-500 tracking-[0.3em] uppercase leading-none mb-1">Initiate Protocol</span>
              <span className="text-xs font-black text-white tracking-[0.1em] uppercase">Book Systems Audit</span>
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-500">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-10 md:left-20 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </DotGlobeHero>
  );
}
