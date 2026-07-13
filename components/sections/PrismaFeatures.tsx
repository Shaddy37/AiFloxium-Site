"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Check, ArrowRight, Workflow, BrainCircuit, LayoutDashboard } from "lucide-react";
import { LazyVideo } from "@/components/ui/lazy-video";
import Link from "next/link";

interface FeatureCardProps {
  index: number;
  progress: MotionValue<number>;
  children: React.ReactNode;
}

const FeatureCard = ({ index, progress, children }: FeatureCardProps) => {
  // Map parallax speeds based on index.
  // We want cards to float up at different rates as the user scrolls down.
  // Card 1 floats up fastest, Card 3 slower, etc., to break the rigid grid.
  const speedRanges = [
    ["20%", "-20%"],  // Card 2
    ["40%", "-40%"],  // Card 3
    ["10%", "-10%"],  // Card 4
  ];
  
  const yRange = speedRanges[index % speedRanges.length];
  
  const y = useTransform(progress, [0, 1], yRange);
  const opacity = useTransform(progress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <motion.div
      style={{ y, opacity }}
      className="relative flex flex-col justify-between h-full rounded-3xl border border-white/5 bg-[#0a0608] text-white p-8 group transition-[border-color,background-color] duration-300 ease-[var(--ease-out)] hover:border-[#7B2CBF]/30 hover:bg-[#7B2CBF]/5 liquid-glass z-10 shadow-lg"
    >
      {/* Decorative inner gradient glow */}
      <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-[#7B2CBF]/5 blur-2xl group-hover:bg-[#7B2CBF]/15 transition-colors duration-500 pointer-events-none" />
      {children}
    </motion.div>
  );
};

export default function PrismaFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Header Parallax
  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  // Video Card Parallax (moves slower to anchor the section)
  const videoCardY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section 
      ref={containerRef}
      id="features" 
      className="min-h-screen bg-[#0a0608] text-white py-24 md:py-40 px-4 md:px-8 relative overflow-hidden border-b border-white/5"
    >
      {/* Background gradients */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]) }}
        className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-[#7B2CBF]/10 blur-[150px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]) }}
        className="absolute top-12 left-12 w-[30vw] h-[30vw] rounded-full bg-[#9D4EDD]/10 blur-[130px] pointer-events-none" 
      />

      {/* Header section */}
      <motion.div 
        style={{ y: headerY }}
        className="max-w-6xl mx-auto flex flex-col gap-3 mb-20 md:mb-32 text-center md:text-left relative z-20"
      >
        <span className="text-white/50 tracking-[0.2em] font-medium text-xs md:text-sm uppercase font-inter block mb-2">
          // Capabilities
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(3.5rem,5vw,5rem)] font-instrument text-white leading-[1.05] tracking-[-0.04em] max-w-5xl text-balance">
          Production-grade workflows for visionary builders. <br/>
          <span className="font-instrument text-[#E0AAFF] italic">Built for pure efficiency, powered by intelligence.</span>
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        
        {/* Card 1: Video Background Card */}
        <motion.div
          style={{ y: videoCardY }}
          className="relative flex flex-col min-h-[350px] lg:min-h-[450px] rounded-3xl overflow-hidden border border-white/10 justify-end p-8 bg-[#0a0608] group transition-[border-color] duration-300 ease-[var(--ease-out)] hover:border-[#7B2CBF]/40 liquid-glass shadow-lg z-20"
        >
          {/* Video */}
          <LazyVideo
            preload="none"
            className="absolute inset-0 h-full w-full object-cover z-0 opacity-50 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

          <p className="relative z-20 text-white text-lg sm:text-xl font-inter font-light tracking-wide leading-snug">
            Intelligent operations. <br/>
            <span className="font-semibold text-[#E0AAFF]">Powered by AIFLOXIUM.</span>
          </p>
        </motion.div>

        {/* Card 2: Agentic OS & Automations */}
        <FeatureCard index={0} progress={scrollYProgress}>
          <div className="flex flex-col gap-5 relative z-10">
            {/* Icon Header */}
            <div className="flex justify-between items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-[#7B2CBF]/20 bg-[#7B2CBF]/10 text-[#E0AAFF] transition-[transform,background-color] duration-300 ease-[var(--ease-out)] group-hover:scale-[1.05] group-hover:bg-[#7B2CBF]/20">
                <Workflow className="w-5 h-5" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-white text-lg sm:text-xl font-semibold tracking-wide font-inter">
              Agentic OS & Automations
            </h3>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 mt-1">
              {[
                "Custom private VPS deployments",
                "Autonomous multi-agent execution",
                "Dynamic tools & API integrations",
                "Self-healing logger scripts"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="h-[18px] w-[18px] text-[#E0AAFF] mt-0.5 shrink-0" />
                  <span className="text-white/70 text-xs sm:text-[13px] leading-snug group-hover:text-white transition-colors duration-200 ease-[var(--ease-out)] font-inter font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Link */}
          <Link
            href="/#contact"
            className="flex items-center gap-2 text-[#E0AAFF] hover:text-white font-semibold text-xs uppercase tracking-wider mt-8 group/link w-fit relative z-10 transition-colors duration-200 ease-[var(--ease-out)] font-inter focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0AAFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0608] rounded-sm"
          >
            Learn more
            <ArrowRight className="h-4 w-4 transform -rotate-45 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </FeatureCard>

        {/* Card 3: Conversational Voice AI */}
        <FeatureCard index={1} progress={scrollYProgress}>
          <div className="flex flex-col gap-5 relative z-10">
            {/* Icon Header */}
            <div className="flex justify-between items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-[#7B2CBF]/20 bg-[#7B2CBF]/10 text-[#E0AAFF] transition-[transform,background-color] duration-300 ease-[var(--ease-out)] group-hover:scale-[1.05] group-hover:bg-[#7B2CBF]/20">
                <BrainCircuit className="w-5 h-5" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-white text-lg sm:text-xl font-semibold tracking-wide font-inter">
              Conversational Voice AI
            </h3>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 mt-1">
              {[
                "Sub-500ms real response speeds",
                "Full-duplex call state machines",
                "Intelligent lead scheduling",
                "Direct CRM & tag sync setups"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="h-[18px] w-[18px] text-[#E0AAFF] mt-0.5 shrink-0" />
                  <span className="text-white/70 text-xs sm:text-[13px] leading-snug group-hover:text-white transition-colors duration-200 ease-[var(--ease-out)] font-inter font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Link */}
          <Link
            href="/#contact"
            className="flex items-center gap-2 text-[#E0AAFF] hover:text-white font-semibold text-xs uppercase tracking-wider mt-8 group/link w-fit relative z-10 transition-colors duration-200 ease-[var(--ease-out)] font-inter focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0AAFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0608] rounded-sm"
          >
            Learn more
            <ArrowRight className="h-4 w-4 transform -rotate-45 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </FeatureCard>

        {/* Card 4: Bespoke Portals & Reasoning */}
        <FeatureCard index={2} progress={scrollYProgress}>
          <div className="flex flex-col gap-5 relative z-10">
            {/* Icon Header */}
            <div className="flex justify-between items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-[#7B2CBF]/20 bg-[#7B2CBF]/10 text-[#E0AAFF] transition-[transform,background-color] duration-300 ease-[var(--ease-out)] group-hover:scale-[1.05] group-hover:bg-[#7B2CBF]/20">
                <LayoutDashboard className="w-5 h-5" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-white text-lg sm:text-xl font-semibold tracking-wide font-inter">
              Bespoke Portals & Reasoning
            </h3>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 mt-1">
              {[
                "Next.js & Supabase custom builds",
                "Applied database reasoning layers",
                "Document OCR & processing pipelines",
                "Full code ownership & IP rights"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="h-[18px] w-[18px] text-[#E0AAFF] mt-0.5 shrink-0" />
                  <span className="text-white/70 text-xs sm:text-[13px] leading-snug group-hover:text-white transition-colors duration-200 ease-[var(--ease-out)] font-inter font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Link */}
          <Link
            href="/#contact"
            className="flex items-center gap-2 text-[#E0AAFF] hover:text-white font-semibold text-xs uppercase tracking-wider mt-8 group/link w-fit relative z-10 transition-colors duration-200 ease-[var(--ease-out)] font-inter focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0AAFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0608] rounded-sm"
          >
            Learn more
            <ArrowRight className="h-4 w-4 transform -rotate-45 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </FeatureCard>

      </div>
    </section>
  );
}
