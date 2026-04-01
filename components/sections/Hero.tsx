"use client";

import React from "react";
import { motion } from "framer-motion";
import { DotGlobeHero } from "@/components/ui/globe-hero";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <DotGlobeHero
      rotationSpeed={0.004}
      className="bg-background relative overflow-hidden"
    >
      {/* Background Ambient Layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-500/5 rounded-full blur-[160px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zinc-400/5 rounded-full blur-[160px] animate-pulse-slow pointer-events-none" />
      
      <div className="relative z-10 text-center space-y-12 max-w-6xl mx-auto px-6 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Glowing Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-zinc-500/5 border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-zinc-500/10 via-transparent to-zinc-500/10 animate-pulse" />
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
            <span className="relative z-10 text-[10px] md:text-xs font-bold text-zinc-300 tracking-[0.25em] uppercase">Autonomous Infrastructure for Visionary Brands</span>
          </motion.div>
          
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-[7.5rem] font-heading font-black tracking-tighter leading-[0.85] select-none"
            >
              <span className="block font-light text-zinc-500 mb-3 text-4xl md:text-6xl lg:text-7xl">
                CONNECT
              </span>
              <span className="block relative">
                <span className="bg-gradient-to-br from-white via-white to-zinc-500/80 bg-clip-text text-transparent font-black relative z-10">
                  THE WORLD
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-zinc-500/80 bg-clip-text text-transparent font-black blur-2xl opacity-40 scale-105">
                  THE WORLD
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                  className="absolute -bottom-6 left-0 h-2 md:h-3 bg-gradient-to-r from-white/60 via-white/20 to-transparent rounded-full"
                />
              </span>
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-medium">
              We Plug the Holes with Autonomous Workflows. Engineering bespoke n8n pipelines and generative software that reclaim 40+ hours of manual work every week.
            </p>
            <p className="text-base md:text-lg text-zinc-500 font-bold tracking-widest uppercase">
               Starting at <span className="text-white">$1,500</span>
            </p>
          </motion.div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
        >
          <motion.a
            href="/#initiate"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 25px rgba(255,255,255,0.1)",
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-xl font-bold text-sm uppercase tracking-[0.2em] shadow-xl transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Book a Systems Audit</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>
          
          <motion.a
            href="/services"
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgba(255,255,255,0.5)",
              boxShadow: "0 15px 30px rgba(0,0,0,0.2), 0 0 15px rgba(255,255,255,0.05)",
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 border-2 border-white/10 rounded-xl font-bold text-sm uppercase tracking-[0.2em] transition-all duration-500 backdrop-blur-xl bg-white/5 hover:bg-white/10 shadow-lg overflow-hidden text-white"
          >
            <Zap className="relative z-10 w-5 h-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <span className="relative z-10">Explore Capabilities</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </DotGlobeHero>
  );
}
