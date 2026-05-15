"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { APEPUBLISH_URL } from "@/lib/site";

const VideoPopup = dynamic(() => import("@/components/sections/VideoPopup"), {
  ssr: false,
});

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease },
  }),
};

const lineExpand = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 1.5, delay: 0.8, ease },
  },
};

export default function HeroContent() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-transparent to-brand-bg/60" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-plum-glow opacity-20 blur-[160px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-plum-glow opacity-10 blur-[160px] animate-pulse-slow pointer-events-none" />

      <div className="relative z-10 text-center flex flex-col items-center w-full max-w-6xl mx-auto px-6 pt-32 md:pt-48 pb-12">
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-10 flex flex-col items-center"
        >
          <div className="space-y-4">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-[10px] md:text-xs font-black tracking-[0.35em] uppercase text-brand-orange"
            >
              Muhammad Shadab Shams | AI systems builder
            </motion.p>
            <motion.h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-[10rem] font-heading font-black tracking-tighter leading-[0.8] select-none">
              <motion.span
                variants={fadeUp}
                custom={0}
                className="block font-light text-zinc-500 mb-2 md:mb-4 text-2xl sm:text-4xl md:text-6xl lg:text-7xl"
              >
                AI systems for
              </motion.span>
              <motion.span
                variants={fadeUp}
                custom={0.15}
                className="block relative"
              >
                <span className="bg-gradient-to-br from-white via-white to-brand-plum bg-clip-text text-transparent font-black relative z-10">
                  STARTUPS &amp; <span className="text-brush text-4xl sm:text-5xl md:text-8xl lg:text-[10rem] mr-4 md:mr-8">SMBS</span>.
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-brand-plum bg-clip-text text-transparent font-black blur-2xl opacity-40 scale-105">
                  STARTUPS &amp; <span className="text-brush text-4xl sm:text-5xl md:text-8xl lg:text-[10rem] mr-4 md:mr-8">SMBS</span>.
                </div>
                <motion.div
                  variants={lineExpand}
                  className="absolute -bottom-4 md:-bottom-6 left-0 h-1 md:h-3 bg-gradient-to-r from-brand-orange via-brand-orange/40 to-transparent rounded-full shadow-2xl"
                />
              </motion.span>
            </motion.h1>
          </div>

          <motion.div
            variants={fadeUp}
            custom={0.35}
            className="max-w-xl md:max-w-2xl mx-auto space-y-4 md:space-y-6"
          >
            <p className="text-lg md:text-2xl text-zinc-200 leading-relaxed font-medium tracking-tight px-4 md:px-0">
              I build workflow automation, internal tools, AI agents, and shipped
              products that remove bottlenecks, speed up teams, and turn messy
              operations into reliable systems.
            </p>
            <motion.div
              variants={fadeUp}
              custom={0.5}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {[
                'AIFLOXIUM studio',
                'ApePublish shipped',
                'Discovery calls open'
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-3 md:gap-4 px-4 py-1.5 md:px-5 md:py-2 rounded-lg border border-brand-plum/20 bg-brand-plum/5 backdrop-blur-md text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </motion.div>
            <motion.div
              variants={fadeUp}
              custom={0.65}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
            >
              <Link
                href="/#initiate"
                className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-orange/90 transition-all shadow-[0_0_30px_rgba(255,107,0,0.3)]"
              >
                Book a discovery call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 border border-brand-plum/30 bg-brand-bg/60 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-plum/10 transition-all"
              >
                View proof
              </Link>
              <a
                href={APEPUBLISH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
              >
                See ApePublish
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-10 right-6 md:right-12 z-50 group"
      >
        <Link
          href="/#initiate"
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-brand-orange blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />

          <div className="relative flex items-center gap-4 bg-brand-bg border border-brand-plum/30 pl-8 pr-4 py-4 rounded-full backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden min-w-[200px]">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <div className="flex flex-col items-start">
              <span className="text-[9px] font-black text-brand-orange tracking-[0.3em] uppercase leading-none mb-1">
                Primary CTA
              </span>
              <span className="text-xs font-black text-white tracking-[0.1em] uppercase">
                Book discovery call
              </span>
            </div>
            <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-500">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-10 md:left-20 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>

      <VideoPopup />
    </>
  );
}
