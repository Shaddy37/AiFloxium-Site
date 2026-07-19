"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Check, ArrowRight, Workflow, BrainCircuit, LayoutDashboard } from "lucide-react";
import { LazyVideo } from "@/components/ui/lazy-video";
import Link from "next/link";

interface FeatureCardProps {
  index: number;
  progress: MotionValue<number>;
  className?: string;
  children: React.ReactNode;
}

const FeatureCard = ({ index, progress, className = "", children }: FeatureCardProps) => {
  const speedRanges = [
    ["15%", "-15%"],  // Card 2
    ["25%", "-25%"],  // Card 3
    ["10%", "-10%"],  // Card 4
  ];
  
  const yRange = speedRanges[index % speedRanges.length];
  
  const y = useTransform(progress, [0, 1], yRange);
  const opacity = useTransform(progress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <motion.div
      style={{ y, opacity }}
      className={`relative flex flex-col justify-between h-full rounded-[2rem] bg-black/5 p-2 group shadow-lg z-10 ${className}`}
    >
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-black/0 via-black/0 to-black/0 group-hover:from-black/5 group-hover:via-black/[0.02] group-hover:to-black/5 transition-all duration-700 blur-xl opacity-0 group-hover:opacity-100" />
      <div className="absolute inset-0 rounded-[2rem] border border-black/5 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-black/15" />
      
      <div className="relative h-full w-full rounded-[1.5rem] border border-black/5 glass-panel p-8 md:p-10 flex flex-col justify-between overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[var(--glow-primary)]/10 blur-3xl group-hover:bg-[var(--glow-primary)]/30 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none" />
        {children}
      </div>
    </motion.div>
  );
};

export default function PrismaFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const videoCardY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const blurBottomY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const blurTopY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section 
      ref={containerRef}
      id="features" 
      className="min-h-screen bg-[var(--background)] text-black py-24 md:py-32 px-4 md:px-8 relative overflow-hidden border-b border-black/5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[var(--glow-secondary)]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-[var(--primary)]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[var(--secondary)]/10 to-transparent pointer-events-none" />
      <motion.div 
        style={{ y: blurBottomY }}
        className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-black/[0.03] blur-[150px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: blurTopY }}
        className="absolute top-12 left-12 w-[30vw] h-[30vw] rounded-full bg-black/[0.03] blur-[130px] pointer-events-none" 
      />

      {/* Header section */}
      <motion.div 
        style={{ y: headerY }}
        className="max-w-[1400px] w-full mx-auto flex flex-col gap-4 mb-24 md:mb-40 text-center md:text-left relative z-20 will-change-transform"
      >
        <span className="text-[#7B2CBF] tracking-[0.25em] font-bold text-xs md:text-sm uppercase font-inter block mb-4 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-gradient-to-r from-black/30 to-transparent" /> Capabilities
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(4rem,6vw,6.5rem)] font-instrument text-black leading-[1.02] tracking-[-0.04em] max-w-6xl text-balance">
          Production-grade workflows for visionary builders. <br/>
          <span className="font-instrument text-black italic">Built for pure efficiency.</span>
        </h2>
      </motion.div>

      {/* Cards Grid - Asymmetrical Bento */}
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 relative z-10">
        
        {/* Card 1: Video Background Card */}
        <motion.div
          style={{ y: videoCardY }}
          className="lg:col-span-7 md:col-span-2 relative flex flex-col min-h-[400px] lg:min-h-[500px] rounded-[2rem] p-2 group shadow-2xl will-change-transform z-20 bg-[#0a0a0a]"
        >
          <div className="absolute inset-0 rounded-[2rem] border border-white/5 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-white/20" />
          
          <div className="relative h-full w-full rounded-[1.5rem] border border-white/5 bg-[#111111] p-8 md:p-12 flex flex-col justify-end overflow-hidden transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#1a1a1a]">
            <LazyVideo
              preload="none"
              className="absolute inset-0 h-full w-full object-cover z-0 opacity-40 group-hover:scale-105 group-hover:opacity-50 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none will-change-transform"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent z-10 pointer-events-none" />

            <div className="relative z-20 mt-auto">
              <p className="text-white/90 text-2xl sm:text-3xl font-instrument tracking-tight leading-snug">
                Intelligent operations. <br/>
                <span className="text-white/50 italic">Powered by AIFLOXIUM.</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Agentic OS & Automations */}
        <FeatureCard index={0} progress={scrollYProgress} className="lg:col-span-5 md:col-span-1">
          <div className="flex flex-col gap-6 relative z-10">
            <div className="flex justify-between items-start">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl border border-black/10 bg-black/5 text-black transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:bg-black/10 group-hover:text-black">
                <Workflow className="w-6 h-6" />
              </div>
            </div>

            <h3 className="text-black text-xl sm:text-2xl font-medium tracking-tight font-inter">
              Agentic OS & Automations
            </h3>

            <ul className="flex flex-col gap-4 mt-2">
              {[
                "Custom private VPS deployments",
                "Autonomous multi-agent execution",
                "Dynamic tools & API integrations",
                "Self-healing logger scripts"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#7B2CBF] mt-0.5 shrink-0" />
                  <span className="text-black text-sm sm:text-base leading-snug font-inter font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/#contact"
            className="flex items-center gap-2 text-black hover:text-black font-medium text-sm tracking-wide mt-12 group/link w-fit relative z-10 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] font-inter focus-visible:outline-none"
          >
            Learn more
            <ArrowRight className="h-4 w-4 transform -rotate-45 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </FeatureCard>

        {/* Card 3: Conversational Voice AI */}
        <FeatureCard index={1} progress={scrollYProgress} className="lg:col-span-5 md:col-span-1">
          <div className="flex flex-col gap-6 relative z-10">
            <div className="flex justify-between items-start">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl border border-black/10 bg-black/5 text-black transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:bg-black/10 group-hover:text-black">
                <BrainCircuit className="w-6 h-6" />
              </div>
            </div>

            <h3 className="text-black text-xl sm:text-2xl font-medium tracking-tight font-inter">
              Conversational Voice AI
            </h3>

            <ul className="flex flex-col gap-4 mt-2">
              {[
                "Sub-500ms real response speeds",
                "Full-duplex call state machines",
                "Intelligent lead scheduling",
                "Direct CRM & tag sync setups"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#7B2CBF] mt-0.5 shrink-0" />
                  <span className="text-black text-sm sm:text-base leading-snug font-inter font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/#contact"
            className="flex items-center gap-2 text-black hover:text-black font-medium text-sm tracking-wide mt-12 group/link w-fit relative z-10 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] font-inter focus-visible:outline-none"
          >
            Learn more
            <ArrowRight className="h-4 w-4 transform -rotate-45 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </FeatureCard>

        {/* Card 4: Bespoke Portals & Reasoning */}
        <FeatureCard index={2} progress={scrollYProgress} className="lg:col-span-7 md:col-span-2">
          <div className="flex flex-col gap-6 relative z-10">
            <div className="flex justify-between items-start">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl border border-black/10 bg-black/5 text-black transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:bg-black/10 group-hover:text-black">
                <LayoutDashboard className="w-6 h-6" />
              </div>
            </div>

            <h3 className="text-black text-xl sm:text-2xl font-medium tracking-tight font-inter">
              Bespoke Portals & Reasoning
            </h3>

            <ul className="flex flex-col gap-4 mt-2">
              {[
                "Next.js & Supabase custom builds",
                "Applied database reasoning layers",
                "Document OCR & processing pipelines",
                "Full code ownership & IP rights"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#7B2CBF] mt-0.5 shrink-0" />
                  <span className="text-black text-sm sm:text-base leading-snug font-inter font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/#contact"
            className="flex items-center gap-2 text-black hover:text-black font-medium text-sm tracking-wide mt-12 group/link w-fit relative z-10 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] font-inter focus-visible:outline-none"
          >
            Learn more
            <ArrowRight className="h-4 w-4 transform -rotate-45 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </FeatureCard>

      </div>
    </section>
  );
}

