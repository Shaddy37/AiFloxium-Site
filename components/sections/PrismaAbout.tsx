"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { WordsPullUpMultiStyle } from "@/components/ui/prisma-hero";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  scrollYProgress: MotionValue<number>;
}

const AnimatedLetter = ({ char, index, totalChars, scrollYProgress }: AnimatedLetterProps) => {
  const charProgress = index / totalChars;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);

  const opacity = useTransform(scrollYProgress, [start, end], [0.45, 1]);

  return <motion.span style={{ opacity }}>{char}</motion.span>;
};

export default function PrismaAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const headingSegments = [
    { text: "I am Shadab Shams, ", className: "font-instrument text-[#E0AAFF] italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05]" },
    { text: "an Agentic Systems Developer.", className: "font-instrument text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05]" },
    { text: "I build agentic systems, Agentic OS, and apply AI to existing databases to eliminate operational noise.", className: "font-inter font-light text-white/70 text-base sm:text-lg md:text-xl lg:text-2xl mt-8 max-w-4xl mx-auto block leading-relaxed" },
  ];

  const bodyText =
    "Previously building workflow engines, I transitioned to Agentic AI using tools like Claude Code and Antigravity. Today, I build autonomous operating systems, vibe-coded dashboards, and low-latency voice agents that scale operations with zero manual overhead.";

  const chars = bodyText.split("");
  const totalChars = chars.length;

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="bg-[#0a0608] text-white py-24 md:py-32 px-4 md:px-8 border-b border-white/5 relative overflow-hidden"
    >
      {/* Background radial violet glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-[#7B2CBF]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto bg-[#0a0608] text-white/[0.01] rounded-[2.5rem] p-8 md:p-16 flex flex-col items-center text-center gap-8 md:gap-12 relative overflow-hidden border border-white/5 liquid-glass">
        
        {/* Top small label */}
        <div className="flex flex-col items-center gap-2 relative z-10">
          <span className="text-[#E0AAFF] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] font-inter">
            Agentic Systems Expert
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#E0AAFF] animate-pulse" />
        </div>

        {/* Main Heading */}
        <div className="w-full max-w-4xl mx-auto">
          <WordsPullUpMultiStyle
            segments={headingSegments}
            className="justify-center"
          />
        </div>

        {/* Divider line */}
        <div className="w-16 h-px bg-white/10 my-4" />

        {/* Body Paragraph with scroll-linked opacity reveal */}
        {prefersReduced ? (
          <p
            ref={paragraphRef}
            className="text-white/60 text-sm sm:text-base md:text-lg font-inter font-light leading-relaxed max-w-2xl mx-auto"
          >
            {bodyText}
          </p>
        ) : (
          <p
            ref={paragraphRef}
            className="text-white/60 text-sm sm:text-base md:text-lg font-inter font-light leading-relaxed max-w-2xl mx-auto"
          >
            {chars.map((char, index) => (
              <AnimatedLetter
                key={index}
                char={char}
                index={index}
                totalChars={totalChars}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </p>
        )}

      </div>
    </section>
  );
}
