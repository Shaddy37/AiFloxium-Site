"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { WordsPullUpMultiStyle } from "@/components/ui/prisma-hero";

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

  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return <motion.span style={{ opacity }}>{char}</motion.span>;
};

export default function PrismaAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const headingSegments = [
    { text: "I am Shadab Shams,", className: "font-normal text-white" },
    { text: "an AI automation engineer.", className: "italic font-serif text-primary" },
    { text: "I have skills in workflow automation, custom AI systems, and internal tools.", className: "font-normal text-white" },
  ];

  const bodyText =
    "Over the last three years, I have worked with startups, agencies, and SMBs to craft robust backend logic, custom APIs, and autonomous agent systems under AIFLOXIUM. Together, we have created work that has earned high client trust and operational scale.";

  const chars = bodyText.split("");
  const totalChars = chars.length;

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="theme-prisma bg-black py-20 md:py-32 px-4 md:px-8 border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-[2rem] p-8 md:p-16 flex flex-col items-center text-center gap-8 md:gap-12 relative overflow-hidden border border-white/5">
        
        {/* Top small label */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em]">
            AI Automation Expert
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        </div>

        {/* Main Heading */}
        <div className="w-full max-w-3xl mx-auto">
          <WordsPullUpMultiStyle
            segments={headingSegments}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] sm:leading-[0.95] tracking-tight justify-center"
          />
        </div>

        {/* Divider line */}
        <div className="w-16 h-px bg-white/10 my-4" />

        {/* Body Paragraph with scroll-linked opacity reveal */}
        <p
          ref={paragraphRef}
          className="text-[#DEDBC8] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto"
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

      </div>
    </section>
  );
}
