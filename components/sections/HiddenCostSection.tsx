"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const problems = [
  {
    title: "You need AI, but don't know where to start",
    description: "The AI landscape is overwhelming. You're unsure which tools and approaches actually move the needle for your business.",
  },
  {
    title: "Scaling is hard without automation",
    description: "As your business grows, manual processes break down. You need systems that scale with your ambition.",
  },
  {
    title: "High operational costs reduce profits",
    description: "Manual labor and inefficient workflows eat into your margins. You're spending more but getting less.",
  },
  {
    title: "Repetitive tasks slow you down",
    description: "Your team wastes hours on repetitive work. They're stuck in operational grind instead of strategic work.",
  },
];

export default function HiddenCostSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollProgress = -rect.top;
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate which card should be active based on scroll position
      const visibleHeight = containerHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrollProgress / visibleHeight));

      // Map progress to card index (0-3 for 4 cards)
      const newIndex = Math.min(problems.length - 1, Math.floor(progress * problems.length));
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: "400vh" }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-zinc-500/5 blur-[120px] rounded-full" />
        </div>

        {/* Header - Always Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="relative z-10 text-center mb-12 px-6"
        >
          <span className="inline-flex items-center gap-3 text-xs md:text-sm font-medium text-zinc-500 tracking-[0.25em] uppercase mb-6">
            <span className="w-8 h-[1px] bg-zinc-700" />
            Is This You?
            <span className="w-8 h-[1px] bg-zinc-700" />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tighter text-white">
            TURN YOUR BUSINESS INTO{" "}
            <span className="text-zinc-500">AI-POWERED MACHINE</span>
          </h2>
        </motion.div>

        {/* Cards Container */}
        <div className="relative z-10 w-full max-w-6xl px-6">
          <div className="flex flex-wrap justify-end gap-4 md:gap-6 min-h-[300px]">
            <AnimatePresence>
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={
                    index <= activeIndex
                      ? { opacity: 1, x: 0, scale: 1 }
                      : { opacity: 0, x: 100, scale: 0.9 }
                  }
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    delay: index === 0 ? 0 : 0.1,
                  }}
                  className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33%-16px)] p-6 md:p-8 rounded-2xl md:rounded-3xl border backdrop-blur-md transition-all duration-500 ${
                    index <= activeIndex
                      ? "bg-zinc-900/80 border-white/10"
                      : "bg-zinc-900/40 border-white/5"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xs font-bold text-zinc-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                        {problem.title}
                      </h3>
                      <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: activeIndex >= 0 ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-xs text-zinc-500 tracking-widest uppercase">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-zinc-500 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
