"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Workflow, BrainCircuit, LayoutDashboard } from "lucide-react";
import { WordsPullUpMultiStyle } from "@/components/ui/prisma-hero";
import Link from "next/link";

interface FeatureCardProps {
  index: number;
  isInView: boolean;
  children: React.ReactNode;
}

const FeatureCard = ({ index, isInView, children }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
        duration: 0.8,
      }}
      className="relative flex flex-col h-full rounded-2xl overflow-hidden border border-zinc-200 bg-white p-6 justify-between group transition-all duration-300 hover:border-brand-orange/30 hover:shadow-lg"
    >
      {children}
    </motion.div>
  );
};

export default function PrismaFeatures() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" });

  const headingLine1 = [{ text: "Production-grade workflows for visionary builders.", className: "text-brand-plum font-black" }];
  const headingLine2 = [{ text: "Built for pure efficiency. Powered by intelligence.", className: "text-zinc-400 font-bold" }];

  return (
    <section 
      id="features" 
      className="min-h-screen bg-white py-20 md:py-32 px-4 md:px-8 relative overflow-hidden border-b border-zinc-100"
    >
      {/* Background subtle noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* Header section */}
      <motion.div 
        ref={headerRef} 
        initial={{ opacity: 0, y: 15 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
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
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[480px] gap-3 sm:gap-2 md:gap-1"
      >
        
        {/* Card 1: Video Background Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={isGridInView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            delay: 0,
            ease: [0.22, 1, 0.36, 1],
            duration: 0.8,
          }}
          className="relative flex flex-col h-full min-h-[300px] lg:min-h-0 rounded-2xl overflow-hidden border border-zinc-200 justify-end p-6 bg-zinc-100"
        >
          {/* Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover z-0"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10 pointer-events-none" />
          
          <p className="relative z-20 text-white text-base sm:text-lg font-bold tracking-wide">
            Intelligent operations. Powered by AIFLOXIUM.
          </p>
        </motion.div>

        {/* Card 2: Self-Hosted n8n Workflows */}
        <FeatureCard index={1} isInView={isGridInView}>
          <div className="flex flex-col gap-4">
            {/* Icon Header */}
            <div className="flex justify-between items-start">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-brand-plum/10 bg-brand-plum/5 text-brand-plum">
                <Workflow className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                01
              </span>
            </div>

            {/* Title */}
            <h3 className="text-brand-plum text-base sm:text-lg font-bold tracking-tight">
              Self-Hosted n8n.
            </h3>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 mt-2">
              {[
                "Custom VPS deployment on AWS or DigitalOcean",
                "Zero third-party transaction or task scaling fees",
                "Visual canvas for complex, multi-branching API logic",
                "Active error monitoring and instant Slack alerts"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="h-4.5 w-4.5 text-brand-orange mt-0.5 shrink-0" />
                  <span className="text-zinc-600 text-xs sm:text-[13px] leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Link */}
          <Link
            href="/#contact"
            className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-wider mt-6 group/link w-fit"
          >
            Learn more
            <ArrowRight className="h-4 w-4 transform -rotate-45 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </FeatureCard>

        {/* Card 3: Low-Latency Voice AI */}
        <FeatureCard index={2} isInView={isGridInView}>
          <div className="flex flex-col gap-4">
            {/* Icon Header */}
            <div className="flex justify-between items-start">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-brand-plum/10 bg-brand-plum/5 text-brand-plum">
                <BrainCircuit className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                02
              </span>
            </div>

            {/* Title */}
            <h3 className="text-brand-plum text-base sm:text-lg font-bold tracking-tight">
              Low-Latency Voice AI.
            </h3>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 mt-2">
              {[
                "Under 500ms response speed (Vapi & Retell AI)",
                "Full-duplex logic matching natural human flow",
                "Auto-booking integrations with Google Calendar/Cal",
                "Real-time sync to CRM (HubSpot, Salesforce, etc.)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="h-4.5 w-4.5 text-brand-orange mt-0.5 shrink-0" />
                  <span className="text-zinc-600 text-xs sm:text-[13px] leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Link */}
          <Link
            href="/#contact"
            className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-wider mt-6 group/link w-fit"
          >
            Learn more
            <ArrowRight className="h-4 w-4 transform -rotate-45 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </FeatureCard>

        {/* Card 4: Bespoke Portals & Tools */}
        <FeatureCard index={3} isInView={isGridInView}>
          <div className="flex flex-col gap-4">
            {/* Icon Header */}
            <div className="flex justify-between items-start">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-brand-plum/10 bg-brand-plum/5 text-brand-plum">
                <LayoutDashboard className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                03
              </span>
            </div>

            {/* Title */}
            <h3 className="text-brand-plum text-base sm:text-lg font-bold tracking-tight">
              Bespoke Portals & Tools.
            </h3>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 mt-2">
              {[
                "Custom web apps vibe-coded in Next.js & Supabase",
                "AI-powered OCR for document & invoice processing",
                "Real-time client/partner dashboard interfaces",
                "Complete ownership of source code and databases"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="h-4.5 w-4.5 text-brand-orange mt-0.5 shrink-0" />
                  <span className="text-zinc-600 text-xs sm:text-[13px] leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Link */}
          <Link
            href="/#contact"
            className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-wider mt-6 group/link w-fit"
          >
            Learn more
            <ArrowRight className="h-4 w-4 transform -rotate-45 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </FeatureCard>

      </div>
    </section>
  );
}
