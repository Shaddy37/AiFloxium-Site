"use client";

import React from "react";
import { motion } from "framer-motion";
import { DotGlobeHero } from "@/components/ui/globe-hero";
import { ArrowRight, Zap } from "lucide-react";

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
      
      <div className="relative z-10 text-center flex flex-col items-center justify-center w-full h-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-10 flex flex-col items-center"
        >
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-8xl lg:text-[10rem] font-heading font-black tracking-tighter leading-[0.8] select-none"
            >
              <span className="block font-light text-zinc-500 mb-2 md:mb-4 text-3xl sm:text-4xl md:text-7xl lg:text-8xl">
                ENGINEERED
              </span>
              <span className="block relative">
                <span className="bg-gradient-to-br from-white via-white to-zinc-500/80 bg-clip-text text-transparent font-black relative z-10">
                  AUTONOMY.
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-zinc-500/80 bg-clip-text text-transparent font-black blur-2xl opacity-40 scale-105">
                  AUTONOMY.
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                  className="absolute -bottom-4 md:-bottom-6 left-0 h-1 md:h-3 bg-gradient-to-r from-white/60 via-white/20 to-transparent rounded-full"
                />
              </span>
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-xl md:max-w-2xl mx-auto space-y-6"
          >
            <p className="text-lg md:text-2xl text-zinc-200 leading-relaxed font-medium tracking-tight px-4 md:px-0">
              Stop leaking margin. We architect automated systems that <span className="text-white font-bold underline decoration-white/20 underline-offset-4">reclaim 40+ hours every week.</span>
            </p>
            <div className="inline-flex items-center gap-3 md:gap-4 px-4 py-1.5 md:px-5 md:py-2 rounded-lg border border-dashed border-zinc-700 bg-zinc-900/40">
               <span className="text-[10px] md:text-sm font-bold tracking-widest uppercase text-zinc-500">Starting at</span>
               <span className="text-base md:text-xl font-black text-white">$1,500</span>
            </div>
          </motion.div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-8 md:pt-16 w-full sm:w-auto"
        >
          <motion.a
            href="/#initiate"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.15)",
              y: -4
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 md:gap-4 px-8 py-3.5 md:px-14 md:py-7 bg-white text-black rounded-xl font-black text-[10px] md:text-sm uppercase tracking-[0.25em] shadow-2xl transition-all duration-500 overflow-hidden w-[280px] sm:w-auto justify-center"
          >
            <span className="relative z-10">Book a Systems Audit</span>
            <ArrowRight className="relative z-10 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>
          
          <motion.a
            href="/services"
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgba(255,255,255,0.5)",
              boxShadow: "0 15px 40px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.1)",
              y: -4
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 md:gap-4 px-8 py-3.5 md:px-14 md:py-7 border-2 border-white/15 rounded-xl font-black text-[10px] md:text-sm uppercase tracking-[0.25em] transition-all duration-500 backdrop-blur-2xl bg-white/5 hover:bg-white/10 shadow-2xl overflow-hidden text-white w-[280px] sm:w-auto justify-center"
          >
            <Zap className="relative z-10 w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-white" />
            <span className="relative z-10">Explore Capabilities</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </DotGlobeHero>
  );
}
