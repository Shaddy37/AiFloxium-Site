"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Workflow, BrainCircuit, LayoutDashboard } from "lucide-react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { LazyVideo } from "@/components/ui/lazy-video";
import Link from "next/link";

interface FeatureCardProps {
  index: number;
  isInView: boolean;
  children: React.ReactNode;
}

const FeatureCard = ({ index, isInView, children }: FeatureCardProps) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { y: 0, opacity: 1 } : { y: 35, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={
        prefersReduced
          ? { duration: 0.01 }
          : {
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
              duration: 0.6,
            }
      }
      className="relative flex flex-col justify-between h-full rounded-3xl border border-white/5 bg-[#0a0608] text-white/[0.01] p-8 group transition-[border-color,background-color] duration-300 hover:border-[#7B2CBF]/30 hover:bg-[#7B2CBF]/5 liquid-glass"
    >
      {/* Decorative inner gradient glow */}
      <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-[#7B2CBF]/5 blur-2xl group-hover:bg-[#7B2CBF]/10 transition-colors duration-500 pointer-events-none" />
      {children}
    </motion.div>
  );
};

export default function PrismaFeatures() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" });
  const prefersReduced = useReducedMotion();

  return (
    <section 
      id="features" 
      className="min-h-screen bg-[#0a0608] text-white py-24 md:py-32 px-4 md:px-8 relative overflow-hidden border-b border-white/5"
    >
      {/* Background gradients */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-[#7B2CBF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-12 left-12 w-[30vw] h-[30vw] rounded-full bg-[#9D4EDD]/5 blur-[100px] pointer-events-none" />

      {/* Header section */}
      <motion.div 
        ref={headerRef} 
        initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={prefersReduced ? { duration: 0.01 } : { duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col gap-3 mb-16 md:mb-24 text-center md:text-left"
      >
        <span className="text-white/50 tracking-[0.2em] font-medium text-xs md:text-sm uppercase font-inter block mb-2">
          // Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] font-instrument text-white leading-[1.05] tracking-tight max-w-5xl">
          Production-grade workflows for visionary builders. <br/>
          <span className="font-instrument text-[#E0AAFF] italic">Built for pure efficiency, powered by intelligence.</span>
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div 
        ref={gridRef}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        
        {/* Card 1: Video Background Card */}
        <motion.div
          initial={prefersReduced ? { scale: 1, opacity: 1 } : { y: 35, opacity: 0 }}
          animate={isGridInView ? { scale: 1, opacity: 1 } : {}}
          transition={
            prefersReduced
              ? { duration: 0.01 }
              : {
                  delay: 0,
                  ease: [0.22, 1, 0.36, 1],
                  duration: 0.6,
                }
          }
          className="relative flex flex-col min-h-[320px] lg:min-h-0 rounded-3xl overflow-hidden border border-white/20 justify-end p-8 bg-zinc-950 group transition-[border-color] duration-200 hover:border-[#7B2CBF]/30 liquid-glass"
        >
          {/* Video */}
          <LazyVideo
            preload="none"
            className="absolute inset-0 h-full w-full object-cover z-0 opacity-40 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent z-10 pointer-events-none" />

          <p className="relative z-20 text-white text-base sm:text-lg font-inter font-light tracking-wide leading-snug">
            Intelligent operations. <br/>Powered by AIFLOXIUM.
          </p>
        </motion.div>

        {/* Card 2: Agentic OS & Automations */}
        <FeatureCard index={1} isInView={isGridInView}>
          <div className="flex flex-col gap-5 relative z-10">
            {/* Icon Header */}
            <div className="flex justify-between items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-[#7B2CBF]/20 bg-[#7B2CBF]/5 text-[#E0AAFF] transition-[transform,background-color] duration-200 group-hover:scale-110 group-hover:bg-[#7B2CBF]/10">
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
                  <span className="text-white/60 text-xs sm:text-[13px] leading-snug group-hover:text-white/90 transition-colors font-inter font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Link */}
          <Link
            href="/#contact"
            className="flex items-center gap-2 text-[#E0AAFF] hover:text-white font-semibold text-xs uppercase tracking-wider mt-8 group/link w-fit relative z-10 transition-colors font-inter"
          >
            Learn more
            <ArrowRight className="h-4 w-4 transform -rotate-45 transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </FeatureCard>

        {/* Card 3: Conversational Voice AI */}
        <FeatureCard index={2} isInView={isGridInView}>
          <div className="flex flex-col gap-5 relative z-10">
            {/* Icon Header */}
            <div className="flex justify-between items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-[#7B2CBF]/20 bg-[#7B2CBF]/5 text-[#E0AAFF] transition-[transform,background-color] duration-200 group-hover:scale-110 group-hover:bg-[#7B2CBF]/10">
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
                  <span className="text-white/60 text-xs sm:text-[13px] leading-snug group-hover:text-white/90 transition-colors font-inter font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Link */}
          <Link
            href="/#contact"
            className="flex items-center gap-2 text-[#E0AAFF] hover:text-white font-semibold text-xs uppercase tracking-wider mt-8 group/link w-fit relative z-10 transition-colors font-inter"
          >
            Learn more
            <ArrowRight className="h-4 w-4 transform -rotate-45 transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </FeatureCard>

        {/* Card 4: Bespoke Portals & Reasoning */}
        <FeatureCard index={3} isInView={isGridInView}>
          <div className="flex flex-col gap-5 relative z-10">
            {/* Icon Header */}
            <div className="flex justify-between items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-[#7B2CBF]/20 bg-[#7B2CBF]/5 text-[#E0AAFF] transition-[transform,background-color] duration-200 group-hover:scale-110 group-hover:bg-[#7B2CBF]/10">
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
                  <span className="text-white/60 text-xs sm:text-[13px] leading-snug group-hover:text-white/90 transition-colors font-inter font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Link */}
          <Link
            href="/#contact"
            className="flex items-center gap-2 text-[#E0AAFF] hover:text-white font-semibold text-xs uppercase tracking-wider mt-8 group/link w-fit relative z-10 transition-colors font-inter"
          >
            Learn more
            <ArrowRight className="h-4 w-4 transform -rotate-45 transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </FeatureCard>

      </div>
    </section>
  );
}
