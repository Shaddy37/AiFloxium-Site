"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    title: "Lack of Visibility",
    description: "Manual tracking hides insights. You lose deals and opportunities because you can't see the full picture.",
    icon: "01",
  },
  {
    title: "Tedious Onboarding",
    description: "Repetitive processes slow growth. Every new client or employee costs hours of precious manual work.",
    icon: "02",
  },
  {
    title: "Fragmented Workflows",
    description: "Disconnected tools create chaos. Data silos prevent your team from working efficiently.",
    icon: "03",
  },
  {
    title: "Siloed Communication",
    description: "Team misalignment costs deals. Miscommunication between departments kills momentum and revenue.",
    icon: "04",
  },
  {
    title: "Wasted Resources",
    description: "Manual labor eats margin. Your team spends time on repetitive tasks instead of high-value work.",
    icon: "05",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function HiddenCostSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-48 overflow-hidden bg-background"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-zinc-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-flex items-center gap-3 text-xs md:text-sm font-medium text-zinc-500 tracking-[0.25em] uppercase mb-6">
            <span className="w-8 h-[1px] bg-zinc-700" />
            The Problem
            <span className="w-8 h-[1px] bg-zinc-700" />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tighter text-white">
            THE HIDDEN COST OF{" "}
            <span className="text-zinc-500">MANUAL WORK</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Every hour spent on manual processes is an hour stolen from your
            growth. These invisible costs compound daily.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-zinc-900/60 border border-white/5 backdrop-blur-md hover:border-white/15 hover:bg-zinc-900/80 transition-all duration-500"
            >
              {/* Number indicator */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 text-6xl md:text-7xl font-black text-zinc-800/30 group-hover:text-zinc-700/40 transition-colors">
                {problem.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-zinc-100 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {problem.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
