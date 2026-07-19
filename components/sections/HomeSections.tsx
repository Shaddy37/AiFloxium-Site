"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Workflow,
  Shield,
  Cpu,
  Sparkle,
  Layers,
  Database,
  Terminal,
  Code,
  GitBranch,
  Webhook,
  Cloud,
  Zap,
  MessageSquare,
  Bot
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  CALENDLY_URL,
  BRAND_SIGNATURE_NAME,
  PRIMARY_EMAIL,
  PHONE_NUMBER,
  LINKEDIN_URL
} from "@/lib/site";
import { cn } from "@/lib/utils";
import { CornerPlusIcons } from "@/components/ui/geometric-elements";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { LazyVideo } from "@/components/ui/lazy-video";

// --- VISION SECTION ---
export function Vision() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-16 md:py-24 px-6 relative overflow-hidden bg-[#0a0608] border-b border-white/5">
      {/* Background Plum Glow */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7B2CBF]/20 to-transparent -z-10" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7B2CBF]/10 opacity-70 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={prefersReduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={prefersReduced ? { duration: 0.01 } : { duration: 1 }}
              className="relative aspect-square md:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-dashed border-[#7B2CBF]/20 bg-[#7B2CBF]/5"
            >
              <CornerPlusIcons />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
              {/* Abstract Graphic Representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-64 md:h-64 border-[0.5px] border-[#7B2CBF]/30 rounded-full flex items-center justify-center relative spin-slow">
                  <div className="w-full h-full absolute animate-ping opacity-10 border border-[#7B2CBF]/30 rounded-full" style={{ animationDuration: '4s' }} />
                  <div className="w-16 h-16 md:w-32 md:h-32 border-[0.5px] border-[#7B2CBF]/50 rounded-full flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-[#E0AAFF] text-glow" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            <motion.div
              initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={prefersReduced ? { duration: 0.01 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-[#E0AAFF] tracking-[0.2em] font-medium text-xs md:text-sm uppercase mb-6 flex items-center gap-4 font-inter">
                <span className="w-8 h-[1px] bg-[#7B2CBF]/40" /> My Vision
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-instrument text-white leading-[1.05] tracking-tight">
                The catalyst <br /> for <span className="font-instrument text-[#E0AAFF] italic">transformation</span>.
              </h3>
            </motion.div>
            
            <motion.p 
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={prefersReduced ? { duration: 0.01 } : { delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 font-inter font-light leading-relaxed"
            >
              Scale operations and reclaim 20+ hours a week. I design custom AI
              pipelines and internal tools that eliminate repetitive admin work,
              so your team focuses on growth.
            </motion.p>
            
            <motion.div 
              initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={prefersReduced ? { duration: 0.01 } : { delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10"
            >
              <div>
                <h4 className="text-[#E0AAFF] font-semibold font-inter tracking-wide text-base mb-3">My Directive</h4>
                <p className="text-white/60 text-sm leading-relaxed font-inter font-light">Find the bottleneck, build the fix, and release 20 to 40 hours of manual labor back to your team.</p>
              </div>
              <div>
                <h4 className="text-[#E0AAFF] font-semibold font-inter tracking-wide text-base mb-3">My Ambition</h4>
                <p className="text-white/60 text-sm leading-relaxed font-inter font-light">Be the partner that builds robust, self-sustaining operations, guaranteeing positive ROI in weeks.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- METHODOLOGY / PROCESS SECTION ---
export function Process() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative bg-[#0a0608] border-y border-white/5 overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.01] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)`, backgroundSize: '40px 40px' }} 
      />

      {/* Violet radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-[#7B2CBF]/5 blur-[130px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="w-full text-center md:text-left">
            <h2 className="text-white/50 tracking-[0.2em] font-medium text-xs md:text-sm uppercase mb-4 flex items-center gap-4 md:justify-start justify-center font-inter">
              <span className="w-8 h-[1px] bg-[#0a0608] text-white/20" /> Methodology
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-instrument text-white tracking-tight leading-[1.05]">
              Protocols of <br/><span className="font-instrument text-[#E0AAFF] italic">execution</span>.
            </h3>
          </div>
          <Link 
            href="/resources" 
            className="hidden md:flex items-center gap-4 text-xs font-semibold tracking-widest uppercase text-white/80 hover:text-white transition-colors duration-200 group shrink-0 active:scale-95 font-inter"
          >
            View Full Documentation
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Bouncy Cards Grid */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* Step 1: Bottleneck Analysis */}
          <BounceCard className="col-span-12 md:col-span-4" prefersReduced={prefersReduced}>
            <span className="text-xs font-inter text-white/40 mb-6 block">[01]</span>
            <CardTitle>Bottleneck Analysis</CardTitle>
            <p className="text-white/60 text-sm md:text-[15px] leading-relaxed mt-4 max-w-sm font-inter font-light">
              I audit your manual workflows, locate operational noise, and define clear success metrics.
            </p>
            <div className="absolute bottom-0 left-4 right-4 top-48 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#7B2CBF] to-[#5a1c97] p-5 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-2xl flex flex-col justify-start">
              <span className="text-[10px] font-inter tracking-widest uppercase text-purple-200 mb-2 font-semibold">âœ“ Audit Results</span>
              <ul className="text-xs text-white space-y-1.5 font-inter font-light">
                <li>â€¢ Reclaim 20+ Hours Weekly</li>
                <li>â€¢ Map Software Tech Stack</li>
                <li>â€¢ Define Clear ROI Metrics</li>
              </ul>
            </div>
          </BounceCard>

          {/* Step 2: System Blueprint */}
          <BounceCard className="col-span-12 md:col-span-8" prefersReduced={prefersReduced}>
            <span className="text-xs font-inter text-white/40 mb-6 block">[02]</span>
            <CardTitle>System Blueprint</CardTitle>
            <p className="text-white/60 text-sm md:text-[15px] leading-relaxed mt-4 max-w-xl font-inter font-light">
              I visually map all automation pathways and tool integrations to define a clear blueprint.
            </p>
            <div className="absolute bottom-0 left-4 right-4 top-48 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#5c2494] to-[#3f126d] p-5 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-2xl flex flex-col justify-start">
              <span className="text-[10px] font-inter tracking-widest uppercase text-purple-200 mb-2 font-semibold">âžœ Pipeline Blueprint</span>
              <div className="text-xs font-mono text-white flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
                <span className="bg-[#0a0608] text-white/10 px-2 py-0.5 rounded border border-white/10">Inbound Webhook</span>
                <span>âžœ</span>
                <span className="bg-[#0a0608] text-white/10 px-2 py-0.5 rounded border border-white/10">Voice AI Agent</span>
                <span>âžœ</span>
                <span className="bg-[#0a0608] text-white/10 px-2 py-0.5 rounded border border-white/10">CRM Sync Pipeline</span>
              </div>
            </div>
          </BounceCard>

          {/* Step 3: Core Implementation */}
          <BounceCard className="col-span-12 md:col-span-8" prefersReduced={prefersReduced}>
            <span className="text-xs font-inter text-white/40 mb-6 block">[03]</span>
            <CardTitle>Core Implementation</CardTitle>
            <p className="text-white/60 text-sm md:text-[15px] leading-relaxed mt-4 max-w-xl font-inter font-light">
              I build and deploy secure, autonomous pipelines, stress-tested and hardened against errors.
            </p>
            <div className="absolute bottom-0 left-4 right-4 top-48 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#3c1763] to-[#250d40] p-5 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-2xl flex flex-col justify-start">
              <span className="text-[10px] font-inter tracking-widest uppercase text-purple-200 mb-2 font-semibold">âš™ Telemetry Log</span>
              <div className="text-xs font-mono text-white/90 space-y-1">
                <p className="text-[#E0AAFF] font-semibold">$ npm run deploy --secure</p>
                <p className="text-[11px] opacity-75">Deploying Agent OS... [OK]</p>
                <p className="text-[11px] opacity-75">Self-healing runtime initialized.</p>
              </div>
            </div>
          </BounceCard>

          {/* Step 4: Seamless Handoff */}
          <BounceCard className="col-span-12 md:col-span-4" prefersReduced={prefersReduced}>
            <span className="text-xs font-inter text-white/40 mb-6 block">[04]</span>
            <CardTitle>Seamless Handoff</CardTitle>
            <p className="text-white/60 text-sm md:text-[15px] leading-relaxed mt-4 max-w-sm font-inter font-light">
              I hand over full code ownership, record custom walkthroughs, and transition your team.
            </p>
            <div className="absolute bottom-0 left-4 right-4 top-48 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#2b0f4a] to-[#120524] p-5 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-2xl flex flex-col justify-start">
              <span className="text-[10px] font-inter tracking-widest uppercase text-purple-200 mb-2 font-semibold">âœ“ Operations Completed</span>
              <ul className="text-xs text-white space-y-1.5 font-inter font-light">
                <li>â€¢ 100% Code & IP Ownership</li>
                <li>â€¢ Walkthrough Guide Recorded</li>
                <li>â€¢ Continuous Support Active</li>
              </ul>
            </div>
          </BounceCard>

        </div>
      </div>
    </section>
  );
}

interface BounceCardProps {
  className?: string;
  children: React.ReactNode;
  prefersReduced: boolean;
}

const BounceCard = ({ className = "", children, prefersReduced }: BounceCardProps) => {
  return (
    <motion.div
      whileHover={prefersReduced ? {} : { scale: 0.98, rotate: "-0.2deg" }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "group relative min-h-[380px] cursor-pointer overflow-hidden rounded-3xl border border-white/5 bg-[#0a0608] p-8 md:p-10 transition-colors duration-500 hover:border-[#7B2CBF]/30 liquid-glass",
        className
      )}
    >
      <CornerPlusIcons />
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-2xl md:text-3xl font-instrument text-white relative z-10">
      {children}
    </h3>
  );
};

// --- TRUST / METRICS SECTION ---
export function Trust() {
  return (
    <section className="relative bg-[#0a0608] text-white font-inter antialiased py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 overflow-hidden border-b border-white/5 z-10">
      
      {/* Background Plum Glow */}
      <div className="absolute inset-0 bg-[#7B2CBF]/5 opacity-25 pointer-events-none z-0" />
      
      {/* Top Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 max-w-7xl mx-auto w-full shrink-0 relative z-10">
        <div className="max-w-3xl">
          <h2 className="font-instrument text-white text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight mb-3">
            Operational excellence
          </h2>
          <p className="text-sm md:text-[15px] leading-[1.6] text-white/60 font-light">
            A live roadmap of workflow integrations, high-volume operational metrics, and custom automation tools engineered to power the AIFLOXIUM infrastructure.
          </p>
        </div>
        <div className="flex items-center shrink-0">
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#E0AAFF] transition-all duration-300 button-glow font-inter active:scale-[0.97]"
          >
            Let&apos;s team up today
          </Link>
        </div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-7xl mx-auto w-full lg:h-[720px] relative z-10">
        
        {/* Column 1 - Background Card */}
        <div className="relative rounded-3xl bg-black/40 overflow-hidden p-6 md:p-8 flex flex-col justify-between min-h-[440px] md:min-h-[380px] lg:min-h-[460px] lg:h-full border border-white/5 hover:border-[#7B2CBF]/30 transition-[border-color] duration-200 liquid-glass">
          <LazyVideo
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_150203_44a5bd32-516a-47ce-a077-8acbf9aa8991.mp4"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
          />
          {/* Plum Tint Overlay */}
          <div className="absolute inset-0 bg-[#7B2CBF]/10 mix-blend-color z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0608] via-transparent to-transparent z-10" />

          {/* Bottom Section */}
          <div className="relative z-20 mt-auto">
            <div className="grid grid-cols-[auto_auto_1fr] md:grid-cols-[auto_auto_1fr_auto] gap-x-2.5 md:gap-x-3 gap-y-4 items-center">
              {/* Row 1 */}
              <span className="text-xs font-mono text-white/40">2024-Now</span>
              <Sparkle className="h-3 w-3 text-[#E0AAFF] shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-0.5 md:gap-4 md:col-span-2 w-full">
                <span className="text-[13px] md:text-sm text-white font-medium">Agentic Systems Developer</span>
                <span className="text-[11px] md:text-xs text-white/40 font-inter font-light md:text-right">AIFLOXIUM Studio</span>
              </div>

              {/* Row 2 */}
              <span className="text-xs font-mono text-white/40">2023-2024</span>
              <Sparkle className="h-3 w-3 text-[#E0AAFF] shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-0.5 md:gap-4 md:col-span-2 w-full">
                <span className="text-[13px] md:text-sm text-white font-medium">AI & Automation Specialist</span>
                <span className="text-[11px] md:text-xs text-white/40 font-inter font-light md:text-right">Rove Studio</span>
              </div>

              {/* Row 3 */}
              <span className="text-xs font-mono text-white/40">2022-2023</span>
              <Sparkle className="h-3 w-3 text-[#E0AAFF] shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-0.5 md:gap-4 md:col-span-2 w-full">
                <span className="text-[13px] md:text-sm text-white font-medium">Workflow Developer</span>
                <span className="text-[11px] md:text-xs text-white/40 font-inter font-light md:text-right">Freelance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 - Stacked rows */}
        <div className="grid grid-rows-[auto_1fr] gap-4 md:gap-5 lg:h-full">
          {/* Top Client Voice card */}
          <div className="relative rounded-3xl bg-[#0a0608] text-white/[0.01] p-6 md:p-8 overflow-hidden flex flex-col justify-between border border-white/5 hover:border-[#7B2CBF]/30 transition-[border-color] duration-200 liquid-glass">
            <p className="text-[13px] sm:text-[13.5px] leading-[1.6] text-white/85 italic relative z-10 font-inter font-light">
              {`"${BRAND_SIGNATURE_NAME} automated my entire lead qualification and booking process. I saw a 3x increase in response times and reclaimed over 40 hours a week."`}
            </p>
            
            <div className="text-xs text-white/60 relative z-10 mt-6">
              <strong className="text-white font-semibold">Elena Brooks</strong>, Operations Director â€” Halcyon
            </div>
          </div>

          {/* Bottom 10M+ card */}
          <div className="relative rounded-3xl bg-black/40 p-6 md:p-8 overflow-hidden flex flex-col justify-between border border-white/5 hover:border-[#7B2CBF]/30 transition-[border-color] duration-200 liquid-glass">
            <LazyVideo
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4"
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
            />
            {/* Plum Tint Overlay */}
            <div className="absolute inset-0 bg-[#7B2CBF]/10 mix-blend-color z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0608] via-transparent to-transparent z-10" />

            <div />

            {/* Center Huge Text */}
            <div className="relative z-20 text-center py-6">
              <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-instrument italic text-[#E0AAFF] text-glow leading-none">
                10M+
              </h3>
            </div>

            {/* Bottom caption */}
            <p className="relative z-20 text-center text-[10px] tracking-widest uppercase text-white/50 font-semibold font-inter">
              API Tasks Executed
            </p>
          </div>
        </div>

        {/* Column 3 - Stacked */}
        <div className="grid grid-rows-[1fr_auto] gap-4 md:gap-5 lg:h-full">
          {/* Top Daily Software card */}
          <div className="relative rounded-3xl bg-black/40 p-6 md:p-8 overflow-hidden flex flex-col justify-between border border-white/5 hover:border-[#7B2CBF]/30 transition-[border-color] duration-200 liquid-glass">
            <LazyVideo
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_153148_d7a3e1dd-e5d0-4ce6-8306-00d7522ecc44.mp4"
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
            />
            {/* Plum Tint Overlay */}
            <div className="absolute inset-0 bg-[#7B2CBF]/10 mix-blend-color z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0608] via-transparent to-transparent z-10" />

            {/* Marquee Container */}
            <div className="relative z-20 my-auto flex flex-col gap-3 py-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              
              {/* Row 1 scrolls left */}
              <div className="flex gap-3 w-max animate-marquee-left">
                {[
                  Database, Terminal, Code, GitBranch, Webhook, Cloud, Zap, Bot,
                  Database, Terminal, Code, GitBranch, Webhook, Cloud, Zap, Bot
                ].map((Icon, idx) => (
                  <div key={idx} className="h-14 w-14 md:h-16 md:w-16 rounded-xl flex items-center justify-center bg-[#0a0608] text-white/[0.01] border border-white/10 shrink-0">
                    <Icon className="h-6 w-6 text-white/80" strokeWidth={1.5} />
                  </div>
                ))}
              </div>

              {/* Row 2 scrolls right */}
              <div className="flex gap-3 w-max animate-marquee-right">
                {[
                  MessageSquare, Bot, Cpu, Workflow, Layers, Shield, Database, Zap,
                  MessageSquare, Bot, Cpu, Workflow, Layers, Shield, Database, Zap
                ].map((Icon, idx) => (
                  <div key={idx} className="h-14 w-14 md:h-16 md:w-16 rounded-xl flex items-center justify-center bg-[#0a0608] text-white/[0.01] border border-white/10 shrink-0">
                    <Icon className="h-6 w-6 text-white/80" strokeWidth={1.5} />
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Bottom Reach Me card */}
          <div className="relative rounded-3xl bg-[#0a0608] text-white/[0.01] p-6 md:p-8 overflow-hidden flex flex-col justify-between border border-white/5 hover:border-[#7B2CBF]/30 transition-[border-color] duration-200 liquid-glass">
            <div className="flex items-center justify-end w-full relative z-10">
              <a
                href={`mailto:${PRIMARY_EMAIL}`}
                className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#0a0608] text-white/10 transition-all border border-white/10"
                aria-label="Send email"
              >
                <ArrowUpRight className="h-4 w-4 text-[#E0AAFF]" strokeWidth={1.5} />
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-1 relative z-10">
              <a href={`mailto:${PRIMARY_EMAIL}`} className="text-lg md:text-xl font-medium text-white hover:text-[#E0AAFF] transition-colors tracking-tight font-inter">
                {PRIMARY_EMAIL}
              </a>
              <a href={`tel:${PHONE_NUMBER}`} className="text-sm md:text-base text-white/50 hover:text-white transition-colors font-inter font-light">
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// --- PRICING SECTION ---
export function Pricing() {
  return (
    <section className="py-16 md:py-24 px-6 relative overflow-hidden bg-[#0a0608] border-y border-white/5">
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.01] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)`, backgroundSize: '40px 40px' }} 
      />

      {/* Violet radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-[#7B2CBF]/5 blur-[130px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10 bg-black/40 border border-white/5 rounded-3xl p-10 md:p-20 flex flex-col lg:flex-row justify-between items-center gap-16 overflow-hidden hover:border-[#7B2CBF]/30 transition-[border-color] duration-200 liquid-glass">
        <CornerPlusIcons />
        
        <div className="w-full lg:w-3/5">
          <h2 className="text-[#E0AAFF] tracking-[0.2em] font-medium text-xs md:text-sm uppercase mb-6 flex items-center gap-4 font-inter">
            <span className="w-8 h-[1px] bg-[#7B2CBF]" /> Investment
          </h2>
          <h3 className="text-4xl md:text-6xl font-instrument text-white tracking-tight leading-[1.05] mb-8">
            Pricing <br /> <span className="font-instrument text-[#E0AAFF] italic">philosophy</span>.
          </h3>
          <p className="text-white/60 font-inter font-light text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Every business is unique. I provide custom scoping, ensuring most systems recoup their entire investment in under 30 days by reclaiming hundreds of hours of team labor.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 border border-white/10 rounded-2xl bg-[#0a0608] text-white/[0.01] w-fit relative overflow-hidden liquid-glass">
            <div className="flex flex-col">
              <div className="text-xs tracking-wider font-inter font-semibold text-white/50 uppercase">Typical Investment Range</div>
              <div className="text-[10px] text-white/40 mt-1 uppercase font-semibold tracking-wider font-inter">Typically reclaiming 80+ hours of manual work monthly</div>
            </div>
            <div className="text-2xl md:text-3xl font-semibold font-instrument italic text-[#E0AAFF]">$800 to $5,000+</div>
          </div>
          <div className="mt-8 flex items-center gap-3 px-4 py-2 rounded-full border border-[#7B2CBF]/20 bg-[#7B2CBF]/5 w-fit">
            <Shield className="w-3.5 h-3.5 text-[#E0AAFF]" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#E0AAFF] font-inter">Custom-scoped projects</span>
          </div>
        </div>
        
        <div className="w-full lg:w-1/3 flex flex-col justify-center">
          <ul className="space-y-6 mb-12">
            {[ "Deep Bottleneck & Tool Stack Audit", "Agentic OS & Private Infrastructure", "Bespoke Portals & Supabase Tools", "Low-Latency Voice AI Agents" ].map((feature, i) => (
              <li key={i} className="flex items-start gap-4 text-white/80 font-inter font-light">
                <CheckCircle2 className="w-4 h-4 text-[#E0AAFF] mt-1 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Link 
            href={CALENDLY_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full py-5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E0AAFF] button-glow transition-all duration-300 flex items-center justify-center gap-4 group border-none font-inter active:scale-[0.97]"
          >
            Get My Free System Blueprint
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
          <span className="text-[10px] text-white/40 font-semibold uppercase tracking-widest mt-3 text-center w-full block font-inter">âœ“ Includes a free 15-minute scoping audit. No obligation.</span>
        </div>
      </div>
    </section>
  );
}

// --- FOUNDER SECTION ---
export function Founder() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-16 md:py-24 px-6 relative bg-[#0a0608]">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={prefersReduced ? { duration: 0.01 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative border border-white/5 bg-black/40 rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row gap-16 items-center overflow-hidden liquid-glass"
        >
          <CornerPlusIcons />
          {/* Abstract Background Noise */}
          <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')", backgroundRepeat: 'repeat' }} />

          <div className="w-full lg:w-1/3 aspect-[4/5] rounded-2xl bg-black border border-white/10 relative overflow-hidden flex items-center justify-center group">
            <Image 
              src="/founder-headshot.webp"
              alt="Muhammad Shadab Shams" 
              fill 
              className="object-cover transition-all duration-700"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0608] via-[#0a0608]/50 to-transparent pointer-events-none" />
            <span className="font-instrument text-4xl text-white/90 italic absolute bottom-8 left-8 z-10 leading-none">Shams</span>
          </div>
          
          <div className="w-full lg:w-2/3 flex flex-col justify-center relative z-10">
            <h2 className="text-[#E0AAFF] tracking-[0.2em] font-medium text-xs md:text-sm uppercase mb-6 flex items-center gap-4 font-inter">
              <span className="w-8 h-[1px] bg-[#7B2CBF]/40" /> Direct Architect Access
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-instrument text-white tracking-tight mb-6 md:mb-8 leading-[1.05]">
              Built for <span className="font-instrument text-[#E0AAFF] italic">real</span> operations.
            </h3>
            <p className="text-white/70 text-lg md:text-xl font-inter font-light leading-relaxed mb-8">
              I built AIFLOXIUM to focus on custom agentic operating systems, vibe-coded web applications, and database AI integrations. I build architectures that run autonomously and scale without limits.
            </p>
            <div className="relative mb-10">
              <span className="absolute -top-4 -left-2 text-6xl text-white/10 font-serif leading-none">&quot;</span>
              <p className="text-lg md:text-xl leading-relaxed font-light text-white/90 italic pl-4 border-l-2 border-[#7B2CBF]/40 font-inter">
                The best agentic system is rarely flashy. It is the architecture
                that quietly handles operations every day and adapts as the business grows.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#0a0608] text-white flex items-center justify-center hover:scale-105 transition-transform duration-200">
                <ArrowUpRight className="w-5 h-5 text-black" />
              </Link>
              <div>
                <p className="text-white font-semibold font-inter text-lg tracking-tight">Muhammad Shadab Shams</p>
                <p className="text-[#E0AAFF] font-inter text-xs tracking-wider uppercase mt-1">Agentic Systems Developer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- TECH STACK SECTION ---
export function TechStack() {
  const tools = [
    "Antigravity", "Claude Code", "OpenCode", "OpenAI Codex",
    "Agentic OS", "Vibe Coding", "Voice AI Agents", "Multi-Agent Workflows",
    "Supabase", "Next.js", "Docker", "Database Integration"
  ];
  return (
    <section className="py-16 px-6 relative bg-[#0a0608] text-white overflow-hidden border-y border-white/5" data-theme="light">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-12 justify-between">
        <h2 className="text-[#7B2CBF] tracking-[0.2em] font-medium text-xs md:text-sm uppercase shrink-0 flex items-center gap-4 font-inter font-semibold">
          <span className="w-8 h-[1px] bg-[#7B2CBF]/30" /> Arsenal & Tooling
        </h2>
        
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex gap-6 whitespace-nowrap animate-marquee w-max hover:[animation-play-state:paused]">
            {[...tools, ...tools, ...tools].map((tool, i) => (
              <div key={i} className="px-8 py-4 border border-dashed border-white/10 rounded-xl bg-[#0a0608] border-white/5 hover:border-[#7B2CBF]/30 hover:bg-[#0a0608] text-white transition-all cursor-pointer text-sm font-semibold text-white/70 flex items-center gap-3 relative overflow-hidden group shadow-[0_0_0_1px_rgba(0,0,0,0.02)] font-inter">
                <CornerPlusIcons className="opacity-20 group-hover:opacity-100 transition-opacity text-[#7B2CBF]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#7B2CBF] animate-pulse" />
                <span className="group-hover:text-[#7B2CBF] transition-colors">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
