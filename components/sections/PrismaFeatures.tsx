"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Workflow, BrainCircuit, LayoutDashboard } from "lucide-react";
import { WordsPullUpMultiStyle } from "@/components/ui/prisma-hero";
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
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1],
              duration: 0.8,
            }
      }
      className="relative flex flex-col justify-between h-full rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/80 p-6 group transition-colors duration-500 hover:border-brand-orange/40 hover:bg-zinc-900"
    >
      {/* Decorative inner gradient glow */}
      <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-brand-orange/5 blur-2xl group-hover:bg-brand-orange/10 transition-colors duration-500 pointer-events-none" />
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

  const headingLine1 = [{ text: "Production-grade workflows for visionary builders.", className: "text-white font-black" }];
  const headingLine2 = [{ text: "Built for pure efficiency. Powered by intelligence.", className: "text-zinc-500 font-bold" }];

  return (
    <section 
      id="features" 
      className="min-h-screen bg-black py-20 md:py-32 px-4 md:px-8 relative overflow-hidden border-b border-white/5"
    >
      {/* Background gradients */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-12 left-12 w-[30vw] h-[30vw] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      {/* Header section */}
      <motion.div 
        ref={headerRef} 
        initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={prefersReduced ? { duration: 0.01 } : { duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col gap-3 mb-16 md:mb-24 text-center md:text-left"
      >
        <WordsPullUpMultiStyle
          segments={headingLine1}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl justify-center md:justify-start font-heading font-black"
        />
        <WordsPullUpMultiStyle
          segments={headingLine2}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl justify-center md:justify-start font-heading font-black"
        />
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
                  ease: [0.16, 1, 0.3, 1],
                  duration: 0.8,
                }
          }
          className="relative flex flex-col min-h-[320px] lg:min-h-0 rounded-2xl overflow-hidden border border-white/10 justify-end p-6 bg-zinc-950 group transition-colors duration-500 hover:border-brand-orange/40"
        >
          {/* Video */}
          <LazyVideo
            preload="none"
            className="absolute inset-0 h-full w-full object-cover z-0 opacity-80 group-hover:scale-105 transition-transform duration-700"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent z-10 pointer-events-none" />

          <p className="relative z-20 text-white text-base sm:text-lg font-bold tracking-wide leading-snug">
            Intelligent operations. Powered by AIFLOXIUM.
          </p>
        </motion.div>

        {/* Card 2: Agentic OS & Automations */}
        <FeatureCard index={1} isInView={isGridInView}>
          <div className="flex flex-col gap-5 relative z-10">
            {/* Icon Header */}
            <div className="flex justify-between items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-white/10 bg-white/5 text-brand-orange transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-orange/10">
                <Workflow className="w-5 h-5" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight">
              Agentic OS & Automations.
            </h3>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 mt-1">
              {[
                "Custom private infrastructure deployment.",
                "Autonomous multi-agent execution layers.",
                "Dynamic tool & API integration fabric.",
                "Real-time logging & self-healing error flows."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="h-[18px] w-[18px] text-brand-orange mt-0.5 shrink-0" />
                  <span className="text-zinc-200 text-xs sm:text-[13px] leading-snug group-hover:text-zinc-100 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Link */}
          <Link
            href="/#contact"
            className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-wider mt-8 group/link w-fit relative z-10 transition-colors hover:text-white"
          >
            Learn more
            <ArrowRight className="h-4 w-4 transform -rotate-45 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </FeatureCard>

        {/* Card 3: Conversational Voice AI */}
        <FeatureCard index={2} isInView={isGridInView}>
          <div className="flex flex-col gap-5 relative z-10">
            {/* Icon Header */}
            <div className="flex justify-between items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-white/10 bg-white/5 text-brand-orange transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-orange/10">
                <BrainCircuit className="w-5 h-5" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight">
              Conversational Voice AI.
            </h3>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 mt-1">
              {[
                "Sub-500ms low-latency response speeds.",
                "Full-duplex conversation state machine.",
                "Intelligent scheduling & lead qualification.",
                "Direct CRM & communication channel sync."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="h-[18px] w-[18px] text-brand-orange mt-0.5 shrink-0" />
                  <span className="text-zinc-200 text-xs sm:text-[13px] leading-snug group-hover:text-zinc-100 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Link */}
          <Link
            href="/#contact"
            className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-wider mt-8 group/link w-fit relative z-10 transition-colors hover:text-white"
          >
            Learn more
            <ArrowRight className="h-4 w-4 transform -rotate-45 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </FeatureCard>

        {/* Card 4: Bespoke Portals & Reasoning */}
        <FeatureCard index={3} isInView={isGridInView}>
          <div className="flex flex-col gap-5 relative z-10">
            {/* Icon Header */}
            <div className="flex justify-between items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-white/10 bg-white/5 text-brand-orange transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-orange/10">
                <LayoutDashboard className="w-5 h-5" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight">
              Bespoke Portals & Reasoning.
            </h3>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 mt-1">
              {[
                "Vibe-coded React apps (Next.js & Supabase).",
                "AI reasoning layers applied to databases.",
                "Custom document & invoice OCR intelligence.",
                "Complete IP ownership of code & storage."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="h-[18px] w-[18px] text-brand-orange mt-0.5 shrink-0" />
                  <span className="text-zinc-200 text-xs sm:text-[13px] leading-snug group-hover:text-zinc-100 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Link */}
          <Link
            href="/#contact"
            className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-wider mt-8 group/link w-fit relative z-10 transition-colors hover:text-white"
          >
            Learn more
            <ArrowRight className="h-4 w-4 transform -rotate-45 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </FeatureCard>

      </div>
    </section>
  );
}

