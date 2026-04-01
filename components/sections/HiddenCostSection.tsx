"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    title: "HOURS LOST TO BUSY WORK",
    description: "Your team spends 20+ hours weekly on tasks that a properly configured workflow handles in minutes. That's money walking out the door.",
  },
  {
    title: "LEADS DYING IN YOUR CRM",
    description: "Prospects go cold because your follow-up system is manual. Automation means every lead gets contacted in under 5 minutes.",
  },
  {
    title: "DATA SCATTERED EVERYWHERE",
    description: "Customer info lives in 5 different tools. No wonder you can't make decisions. Connect the dots and see your business clearly.",
  },
  {
    title: "MANUAL INVOICING CHAOS",
    description: "Chasing payments wastes more time than chasing prospects. Automate your billing and get paid 3x faster.",
  },
  {
    title: "TEAM BURNOUT RISING",
    description: "Your best people are leaving because they're stuck doing robot work. Give them systems that let them actually solve problems.",
  },
  {
    title: "SCALING MEANS HIRING MORE",
    description: "Wrong. Smart automation means you grow revenue without growing headcount. Same team, double the output.",
  },
];

function ProblemCard({ 
  problem, 
  index, 
  smoothProgress 
}: { 
  problem: typeof problems[0]; 
  index: number;
  smoothProgress: ReturnType<typeof useSpring>;
}) {
  const total = problems.length;
  const step = 0.7 / total;
  const start = 0.15 + index * step;
  const end = start + step;
  const mid = (start + end) / 2;

  const y = useTransform(smoothProgress, [start, mid, end], ["120%", "0%", "-120%"]);
  const opacity = useTransform(smoothProgress, [start, mid, end], [0, 1, 0]);
  const scale = useTransform(smoothProgress, [start, mid, end], [0.9, 1, 0.9]);
  const rotateX = useTransform(smoothProgress, [start, mid, end], [10, 0, -10]);

  return (
    <motion.div
      style={{ 
        y, 
        opacity, 
        scale,
        rotateX 
      }}
      className="absolute inset-x-6 md:inset-x-0 mx-auto"
    >
      <div 
        className="relative group p-8 md:p-12 bg-zinc-900/60 backdrop-blur-2xl border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)] overflow-hidden"
        style={{ clipPath: "polygon(0% 0%, 88% 0%, 100% 12%, 100% 100%, 0% 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <motion.div
          animate={{ left: ["-100%", "200%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg]"
        />

        <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
          <div className="flex flex-col items-center gap-6">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-zinc-800 border border-white/20 flex items-center justify-center text-xl md:text-2xl font-black text-white/50 transform rotate-45">
              <span className="-rotate-45">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="w-[1px] h-24 bg-gradient-to-b from-zinc-700 to-transparent hidden md:block" />
          </div>
          
          <div className="space-y-4 pt-1">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-none border-l-4 border-zinc-700 pl-6">
              {problem.title}
            </h3>
            <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed">
              {problem.description}
            </p>
          </div>
        </div>

        <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-zinc-700 opacity-50" />
      </div>
    </motion.div>
  );
}

export default function HiddenCostSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  const headerOpacity = useTransform(smoothProgress, [0, 0.1, 0.15, 0.85, 0.95], [0, 1, 0.08, 0.08, 0]);
  const headerScale = useTransform(smoothProgress, [0, 0.1, 0.15], [0.95, 1, 0.98]);

  return (
    <section 
      ref={containerRef} 
      className="relative z-10 perspective-1000" 
      style={{ height: "800vh" }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-background">
        
        <motion.div
          style={{ opacity: headerOpacity, scale: headerScale }}
          className="absolute z-0 text-center px-6 w-full max-w-5xl flex flex-col items-center justify-center translate-y-[-10%] pointer-events-none"
        >
          <span className="flex items-center gap-4 text-xs md:text-sm font-bold text-zinc-500 tracking-[0.4em] uppercase mb-10">
            <span className="w-10 h-[1px] bg-zinc-800" />
            SOUNDS FAMILIAR?
            <span className="w-10 h-[1px] bg-zinc-800" />
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter text-white leading-[0.8] mb-12">
            STOP THE CHAOS. <br />
            <span className="text-zinc-500 opacity-40">START AUTOMATING.</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl font-medium tracking-tight max-w-2xl mx-auto italic opacity-60">
            Every business has bottlenecks. The difference is who fixes them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-zinc-500/10 blur-[140px] rounded-full pointer-events-none"
        />

        <div className="relative z-20 w-full max-w-2xl px-6">
          {problems.map((problem, index) => (
            <ProblemCard 
              key={index} 
              problem={problem} 
              index={index}
              smoothProgress={smoothProgress}
            />
          ))}
        </div>

        <motion.div
          style={{ 
            opacity: useTransform(smoothProgress, [0, 0.05], [1, 0]),
            y: useTransform(smoothProgress, [0, 0.05], [0, 20])
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] text-zinc-500 tracking-[0.4em] uppercase font-bold text-center">Time to fix this</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-700 via-zinc-500 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
