"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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

  // Unique trajectories for each card - Called at top level for React Hooks compliance
  const x1 = useTransform(scrollYProgress, [0.05, 0.6], ["-70vw", "60vw"]);
  const y1 = useTransform(scrollYProgress, [0.05, 0.6], ["-20vh", "40vh"]);
  const r1 = useTransform(scrollYProgress, [0.05, 0.6], [-15, 10]);
  const o1 = useTransform(scrollYProgress, [0.05, 0.15, 0.5, 0.6], [0, 1, 1, 0]);

  const x2 = useTransform(scrollYProgress, [0.15, 0.7], ["60vw", "-70vw"]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.7], ["-40vh", "30vh"]);
  const r2 = useTransform(scrollYProgress, [0.15, 0.7], [10, -5]);
  const o2 = useTransform(scrollYProgress, [0.15, 0.25, 0.6, 0.7], [0, 1, 1, 0]);

  const x3 = useTransform(scrollYProgress, [0.25, 0.8], ["-60vw", "50vw"]);
  const y3 = useTransform(scrollYProgress, [0.25, 0.8], ["40vh", "-30vh"]);
  const r3 = useTransform(scrollYProgress, [0.25, 0.8], [-5, 15]);
  const o3 = useTransform(scrollYProgress, [0.25, 0.35, 0.7, 0.8], [0, 1, 1, 0]);

  const x4 = useTransform(scrollYProgress, [0.35, 0.9], ["50vw", "-60vw"]);
  const y4 = useTransform(scrollYProgress, [0.35, 0.9], ["30vh", "-40vh"]);
  const r4 = useTransform(scrollYProgress, [0.35, 0.9], [5, -10]);
  const o4 = useTransform(scrollYProgress, [0.35, 0.45, 0.8, 0.9], [0, 1, 1, 0]);

  const x5 = useTransform(scrollYProgress, [0.45, 0.95], ["-80vw", "40vw"]);
  const y5 = useTransform(scrollYProgress, [0.45, 0.95], ["-10vh", "25vh"]);
  const r5 = useTransform(scrollYProgress, [0.45, 0.95], [-10, 5]);
  const o5 = useTransform(scrollYProgress, [0.45, 0.55, 0.85, 0.95], [0, 1, 1, 0]);

  const x6 = useTransform(scrollYProgress, [0.55, 1.0], ["70vw", "-50vw"]);
  const y6 = useTransform(scrollYProgress, [0.55, 1.0], ["25vh", "-10vh"]);
  const r6 = useTransform(scrollYProgress, [0.55, 1.0], [15, -15]);
  const o6 = useTransform(scrollYProgress, [0.55, 0.65, 0.9, 1.0], [0, 1, 1, 0]);

  const transforms = [
    { x: x1, y: y1, rotate: r1, opacity: o1 },
    { x: x2, y: y2, rotate: r2, opacity: o2 },
    { x: x3, y: y3, rotate: r3, opacity: o3 },
    { x: x4, y: y4, rotate: r4, opacity: o4 },
    { x: x5, y: y5, rotate: r5, opacity: o5 },
    { x: x6, y: y6, rotate: r6, opacity: o6 },
  ];

  const headerOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);
  const bgGlowOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.3, 0.6, 0.3]);

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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-zinc-500/10 blur-[160px] rounded-full pointer-events-none"
        />

        {/* Sticky Central Heading */}
        <motion.div
          style={{ 
            opacity: headerOpacity, 
            scale: headerScale,
          }}
          className="relative z-0 text-center px-6 max-w-4xl"
        >
          <span className="inline-flex items-center gap-3 text-xs md:text-sm font-medium text-zinc-500 tracking-[0.25em] uppercase mb-8">
            <span className="w-8 h-[1px] bg-zinc-700" />
            Is This You?
            <span className="w-8 h-[1px] bg-zinc-700" />
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter text-white leading-[0.9]">
            STOP THE GYMNASTICS. <br />
            <span className="text-zinc-500 opacity-50">START AUTOMATING.</span>
          </h2>
          <p className="mt-8 text-zinc-400 text-lg md:text-xl font-medium tracking-tight max-w-xl mx-auto italic">
            You&apos;re built for growth, not the operational grind.
          </p>
        </motion.div>

        {/* Parallax Floating Cards Container */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              style={{
                x: transforms[index].x,
                y: transforms[index].y,
                rotate: transforms[index].rotate,
                opacity: transforms[index].opacity,
                translateX: "-50%",
                translateY: "-50%",
              }}
              className="absolute top-1/2 left-1/2 w-[320px] md:w-[380px] p-6 md:p-8 rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl shadow-2xl pointer-events-auto"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-sm font-bold text-zinc-400 flex-shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                    {problem.title}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-medium">
                    {problem.description}
                  </p>
                </div>
              </div>
              
              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-zinc-500/20 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] text-zinc-500 tracking-[0.3em] uppercase font-bold">Scroll to face the reality</span>
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
