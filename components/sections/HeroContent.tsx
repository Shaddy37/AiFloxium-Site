"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/lib/site";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease },
  }),
};

export default function HeroContent() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/60 pointer-events-none" />
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,#581C87_1px,transparent_0)] bg-[size:32px_32px]" />
      </div>
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-plum/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-6 pt-32 md:pt-48 pb-12 h-full">
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-8 flex flex-col items-center"
        >
          <div className="space-y-4 md:space-y-6">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-[10px] md:text-xs font-black tracking-[0.35em] uppercase text-brand-orange"
            >
              Muhammad Shadab Shams | AI systems builder
            </motion.p>
            
            <motion.h1 
              variants={fadeUp}
              custom={0.1}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter leading-[1.1] text-brand-plum"
            >
              Turn messy operations into reliable systems.
            </motion.h1>
          </div>

          <motion.div
            variants={fadeUp}
            custom={0.2}
            className="max-w-2xl mx-auto space-y-8"
          >
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-medium">
              I build custom automation, internal tools, and AI agents that remove bottlenecks and accelerate your team's workflow.
            </p>
            
            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
            >
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-orange/90 transition-all shadow-lg"
              >
                Book a discovery call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="text-zinc-600 hover:text-zinc-900 transition-colors text-sm font-bold uppercase tracking-widest"
              >
                View proof
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
