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

  // Smooth scroll progress using spring for extra fluidity
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Header animations - Fades to background opacity (0.1) as cards appear
  const headerOpacity = useTransform(smoothProgress, [0, 0.15, 0.25, 0.85, 0.95], [0, 1, 0.15, 0.15, 0]);
  const headerScale = useTransform(smoothProgress, [0, 0.15, 0.25], [0.8, 1, 0.9]);
  const bgGlowOpacity = useTransform(smoothProgress, [0.2, 0.5, 0.8], [0.3, 0.6, 0.3]);

  // Card 1 & 2: Row 1 (0.15 -> 0.35)
  const x1 = useTransform(smoothProgress, [0.15, 0.35], ["-100vw", "0vw"]);
  const o1 = useTransform(smoothProgress, [0.15, 0.25, 0.9, 0.95], [0, 1, 1, 0]);
  
  const x2 = useTransform(smoothProgress, [0.15, 0.35], ["100vw", "0vw"]);
  const o2 = useTransform(smoothProgress, [0.15, 0.25, 0.9, 0.95], [0, 1, 1, 0]);

  // Card 3 & 4: Row 2 (0.35 -> 0.55)
  const x3 = useTransform(smoothProgress, [0.35, 0.55], ["-100vw", "0vw"]);
  const o3 = useTransform(smoothProgress, [0.35, 0.45, 0.9, 0.95], [0, 1, 1, 0]);
  
  const x4 = useTransform(smoothProgress, [0.35, 0.55], ["100vw", "0vw"]);
  const o4 = useTransform(smoothProgress, [0.35, 0.45, 0.9, 0.95], [0, 1, 1, 0]);

  // Card 5 & 6: Row 3 (0.55 -> 0.75)
  const x5 = useTransform(smoothProgress, [0.55, 0.75], ["-100vw", "0vw"]);
  const o5 = useTransform(smoothProgress, [0.55, 0.65, 0.9, 0.95], [0, 1, 1, 0]);
  
  const x6 = useTransform(smoothProgress, [0.55, 0.75], ["100vw", "0vw"]);
  const o6 = useTransform(smoothProgress, [0.55, 0.65, 0.9, 0.95], [0, 1, 1, 0]);

  const cardStates = [
    { x: x1, opacity: o1 },
    { x: x2, opacity: o2 },
    { x: x3, opacity: o3 },
    { x: x4, opacity: o4 },
    { x: x5, opacity: o5 },
    { x: x6, opacity: o6 },
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative z-10" 
      style={{ height: "800vh" }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-background">
        {/* Cinematic Backdrop Glow */}
        <motion.div
          style={{ opacity: bgGlowOpacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-zinc-500/5 blur-[160px] rounded-full pointer-events-none"
        />

        {/* Sticky Background Heading */}
        <motion.div
          style={{ 
            opacity: headerOpacity, 
            scale: headerScale,
          }}
          className="absolute z-0 text-center px-6 w-full max-w-4xl flex flex-col items-center justify-center translate-y-[-10%]"
        >
          <span className="inline-flex items-center gap-3 text-xs md:text-sm font-medium text-zinc-500 tracking-[0.25em] uppercase mb-8">
            <span className="w-8 h-[1px] bg-zinc-700" />
            Is This You?
            <span className="w-8 h-[1px] bg-zinc-700" />
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter text-white leading-[0.9]">
            STOP THE GYMNASTICS. <br />
            <span className="text-zinc-500 opacity-50">START AUTOMATING.</span>
          </h2>
          <p className="mt-8 text-zinc-400 text-lg font-medium tracking-tight max-w-xl mx-auto italic">
            You&apos;re built for growth, not the operational grind.
          </p>
        </motion.div>

        {/* Staggered Grid of Cards */}
        <div className="relative z-10 w-full max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                style={{
                  x: cardStates[index].x,
                  opacity: cardStates[index].opacity,
                }}
                className="w-full p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl shadow-2xl flex items-start gap-4"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xs md:text-sm font-bold text-zinc-400 flex-shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="space-y-1 md:space-y-2">
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-white tracking-tight">
                    {problem.title}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-zinc-400 leading-relaxed font-medium">
                    {problem.description}
                  </p>
                </div>

                {/* Subtle accent line */}
                <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-zinc-500/10 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] text-zinc-500 tracking-[0.3em] uppercase font-bold text-center">Face the reality</span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-zinc-700 via-zinc-500 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
