"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    title: "High operational costs reduce profits",
    description: "Manual labor and inefficient workflows eat into your margins. You're spending more but getting less.",
  },
  {
    title: "Repetitive tasks slow you down",
    description: "Your team wastes hours on repetitive work, stuck in operational grind instead of strategic work.",
  },
  {
    title: "Scaling is hard without automation",
    description: "As your business grows, manual processes break down. You need systems that scale with your ambition.",
  },
  {
    title: "You need AI, but don't know where to start",
    description: "The AI landscape is overwhelming. Tool fatigue and unclear roadmaps stall your transformation.",
  },
  {
    title: "Data Silos Hinder Decision Making",
    description: "Fragmented data across tools makes it impossible to get a real-time pulse on business performance.",
  },
  {
    title: "Inconsistent Customer Experience",
    description: "Manual responses lead to varied quality and slow turnarounds, frustrating high-value clients.",
  },
];

export default function HiddenCostSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Header and Background
  const headerOpacity = useTransform(smoothProgress, [0, 0.15, 0.25, 0.85, 0.95], [0, 1, 0.15, 0.15, 0]);
  const headerScale = useTransform(smoothProgress, [0, 0.15, 0.25], [0.8, 1, 0.9]);
  const bgGlowOpacity = useTransform(smoothProgress, [0.2, 0.5, 0.8], [0.3, 0.6, 0.3]);

  // Define 6 sets of 3D transforms for "Geometric Prisms"
  // Each pair follows the staggered fly-in logic but with 3D tilt
  const createShardTransforms = (start: number, end: number, side: "left" | "right") => {
    return {
      x: useTransform(smoothProgress, [start, end], [side === "left" ? "-110vw" : "110vw", "0vw"]),
      y: useTransform(smoothProgress, [start, end], [side === "left" ? "-20vh" : "20vh", "0vh"], { clamp: false }), // subtle drift
      rotateX: useTransform(smoothProgress, [start, end], [45, 0]),
      rotateY: useTransform(smoothProgress, [start, end], [side === "left" ? -25 : 25, 0]),
      z: useTransform(smoothProgress, [start, end], [-500, 0]),
      opacity: useTransform(smoothProgress, [start, start + 0.1, 0.9, 0.95], [0, 1, 1, 0]),
      gleam: useTransform(smoothProgress, [start, end], ["-100%", "200%"]), // Lighting sweep
    };
  };

  const t1 = createShardTransforms(0.15, 0.35, "left");
  const t2 = createShardTransforms(0.15, 0.35, "right");
  const t3 = createShardTransforms(0.35, 0.55, "left");
  const t4 = createShardTransforms(0.35, 0.55, "right");
  const t5 = createShardTransforms(0.55, 0.75, "left");
  const t6 = createShardTransforms(0.55, 0.75, "right");

  const cardStates = [t1, t2, t3, t4, t5, t6];

  return (
    <section 
      ref={containerRef} 
      className="relative z-10 perspective-1000" 
      style={{ height: "850vh" }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-background">
        {/* Cinematic Backdrop Glow */}
        <motion.div
          style={{ opacity: bgGlowOpacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-zinc-500/5 blur-[180px] rounded-full pointer-events-none"
        />

        {/* Geometric Background Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 border-r border-t border-zinc-500/30 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 border-l border-b border-zinc-500/30 translate-y-1/2 -translate-x-1/2 rounded-full blur-2xl" />
        </div>

        {/* Sticky Background Heading */}
        <motion.div
          style={{ opacity: headerOpacity, scale: headerScale }}
          className="absolute z-0 text-center px-6 w-full max-w-4xl flex flex-col items-center justify-center translate-y-[-15%] pointer-events-none"
        >
          <span className="inline-flex items-center gap-4 text-xs md:text-sm font-bold text-zinc-500 tracking-[0.4em] uppercase mb-10">
            <span className="w-12 h-[1px] bg-zinc-800" />
            IS THIS YOU?
            <span className="w-12 h-[1px] bg-zinc-800" />
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter text-white leading-[0.85]">
            STOP THE GYMNASTICS. <br />
            <span className="text-zinc-500 opacity-40">START AUTOMATING.</span>
          </h2>
          <p className="mt-10 text-zinc-500 text-lg md:text-xl font-medium tracking-tight max-w-2xl mx-auto italic opacity-70">
            Engineered for elite scaling. Built for those who lead.
          </p>
        </motion.div>

        {/* Staggered Grid of Geometric Shards */}
        <div className="relative z-10 w-full max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                style={{
                  x: cardStates[index].x,
                  y: cardStates[index].y,
                  rotateX: cardStates[index].rotateX,
                  rotateY: cardStates[index].rotateY,
                  z: cardStates[index].z,
                  opacity: cardStates[index].opacity,
                }}
                className="relative group w-full p-6 md:p-8 lg:p-10 pointer-events-auto"
              >
                {/* Geometric Shard Body (Clip Path) */}
                <div 
                  className="absolute inset-0 bg-zinc-900/40 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden"
                  style={{ clipPath: "polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)" }}
                >
                  {/* Internal Dot Grid */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
                  
                  {/* Light Sweep Gleam */}
                  <motion.div 
                    style={{ left: cardStates[index].gleam }}
                    className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg]"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-start gap-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-sm md:text-base font-black text-white/50 transform rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <span className="-rotate-45 group-hover:rotate-0 transition-transform duration-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="w-[1px] h-full bg-gradient-to-b from-zinc-700/50 to-transparent" />
                  </div>
                  
                  <div className="space-y-2 md:space-y-4 pt-2">
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase italic leading-none">
                      {problem.title}
                    </h3>
                    <p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed max-w-sm">
                      {problem.description}
                    </p>
                  </div>
                </div>

                {/* Geometric Corner Accent */}
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-white/20 rounded-tr-sm group-hover:border-white/50 transition-colors" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-white/10 rounded-bl-sm" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Dotted Overlay (Geometric Touch) */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-20" />
      </div>
    </section>
  );
}
