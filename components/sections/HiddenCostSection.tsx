"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/site";

// Psychology-driven copy: each card names a real business problem this founder solves.
// Loss aversion frame: what they're losing RIGHT NOW by not having AI in their corner.
const problems = [
  {
    eyebrow: "LEAD GENERATION",
    title: "YOU'RE PAYING PEOPLE TO DO WHAT AI CAN DO IN SECONDS",
    stat: "Manual lead outreach takes 3–5 hrs/day. AI does it in the background, 24/7.",
    description:
      "Finding leads, qualifying them, sending the first message, booking the call — every step of that can run on autopilot. I build automated lead gen systems that fill your pipeline without you lifting a finger.",
    proof: "Clients go from 6-hour response times to under 90 seconds.",
    accent: "orange",
  },
  {
    eyebrow: "WEBSITE & 3D BUILDS",
    title: "A PREMIUM WEBSITE USED TO COST $10,000 AND TAKE 3 MONTHS",
    stat: "With Claude Code and Codex, I ship the same quality in days — not months.",
    description:
      "Want a cinematic 3D landing page, a custom SaaS dashboard, or a bespoke client portal? I build it using AI-native tools — Claude Code, OpenAI Codex — faster and cheaper than any traditional agency, with better results.",
    proof: "Full 3D Next.js sites shipped in under 2 weeks.",
    accent: "violet",
  },
  {
    eyebrow: "SOCIAL CONTENT",
    title: "POSTING CONSISTENTLY IS A FULL-TIME JOB YOU CAN'T AFFORD",
    stat: "Businesses that post 4–5x/week get 3× more inbound leads than those that don't.",
    description:
      "I build AI content pipelines that research, write, format, and schedule your posts across LinkedIn, Instagram, and X — so your brand stays visible while you focus on actually running the business.",
    proof: "One client automated 300+ posts/month at near-zero cost.",
    accent: "orange",
  },
  {
    eyebrow: "CAROUSELS & CREATIVES",
    title: "YOUR COMPETITORS ARE POSTING SCROLL-STOPPING CONTENT DAILY",
    stat: "Carousels get 3× more reach than static posts on LinkedIn and Instagram.",
    description:
      "I use AI to generate, design, and produce branded carousel content at scale — hooks, slides, captions, and cover images — so your content looks premium and lands consistently without a design team.",
    proof: "Carousel systems producing 20–40 posts/week fully on autopilot.",
    accent: "violet",
  },
  {
    eyebrow: "BUSINESS AUTOMATION",
    title: "YOUR TEAM IS STILL DOING WORK THAT SHOULD HAVE BEEN AUTOMATED YEARS AGO",
    stat: "The average business wastes 20+ hours/week on tasks AI handles in minutes.",
    description:
      "Invoicing, CRM updates, client onboarding, internal reports, follow-up sequences — whatever the repetitive task is, I map it, automate it, and hand you back hours every week using the right AI tool for the job.",
    proof: "200+ automated workflows built across 10+ industries.",
    accent: "orange",
  },
  {
    eyebrow: "AI STRATEGY",
    title: "YOUR COMPETITORS ARE MOVING FASTER BECAUSE THEY HAVE AI ON THEIR TEAM",
    stat: "Early AI adopters are outpacing competitors by 40% in output per employee.",
    description:
      "You don't need to understand AI — you need someone who does and can implement it inside your actual business. I find the bottlenecks, pick the right tools (Claude Code, Codex, n8n, Make, custom GPTs — whatever fits), and ship the solution.",
    proof: "Most clients see ROI within the first 30 days.",
    accent: "violet",
  },
];


function ProblemCard({
  problem,
  index,
  smoothProgress,
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
      style={{ y, opacity, scale, rotateX }}
      className="absolute inset-x-6 md:inset-x-0 mx-auto"
    >
      <div
        className="relative group p-8 md:p-12 bg-brand-bg/80 backdrop-blur-2xl border border-brand-plum/30 shadow-[0_0_80px_rgba(0,0,0,0.5)] overflow-hidden"
        style={{ clipPath: "polygon(0% 0%, 88% 0%, 100% 12%, 100% 100%, 0% 100%)" }}
      >
        {/* Dot grid texture */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Shimmer sweep */}
        <motion.div
          animate={{ left: ["-100%", "200%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg]"
        />

        <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
          {/* Index number */}
          <div className="flex flex-col items-center gap-6 shrink-0">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-brand-plum/10 border border-brand-plum/40 flex items-center justify-center text-xl md:text-2xl font-black text-brand-orange transform rotate-45">
              <span className="-rotate-45">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="w-[1px] h-24 bg-gradient-to-b from-brand-plum/30 to-transparent hidden md:block" />
          </div>

          <div className="space-y-5 pt-1 w-full">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.35em] text-brand-orange">
              <span className="w-4 h-[1px] bg-brand-orange/40" />
              {problem.eyebrow}
            </span>

            {/* Pattern-interrupt headline */}
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-[1.1] border-l-4 border-brand-plum/50 pl-6">
              {problem.title}
            </h3>

            {/* Anchoring stat — makes the problem feel REAL and quantified */}
            <p className="text-brand-orange font-mono text-sm font-bold pl-6">
              {problem.stat}
            </p>

            {/* Body copy */}
            <p className="text-base md:text-lg text-white/80 font-medium leading-relaxed pl-6">
              {problem.description}
            </p>

            {/* Social proof micro-line */}
            <div className="flex items-center gap-3 pl-6 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
              <span className="text-xs text-emerald-400 font-bold uppercase tracking-widest">
                {problem.proof}
              </span>
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-brand-plum/30 opacity-50" />
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
    restDelta: 0.001,
  });

  const headerOpacity = useTransform(smoothProgress, [0, 0.1, 0.15, 0.85, 0.95], [0, 1, 0.08, 0.08, 0]);
  const headerScale = useTransform(smoothProgress, [0, 0.1, 0.15], [0.95, 1, 0.98]);

  return (
    <section
      ref={containerRef}
      className="relative z-10 perspective-1000"
      style={{ height: "800vh" }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-brand-bg">

        {/* Background ghost headline */}
        <motion.div
          style={{ opacity: headerOpacity, scale: headerScale }}
          className="absolute z-0 text-center px-6 w-full max-w-5xl flex flex-col items-center justify-center translate-y-[-10%] pointer-events-none"
        >
          <span className="flex items-center gap-4 text-xs md:text-sm font-bold text-brand-plum tracking-[0.4em] uppercase mb-10">
            <span className="w-10 h-[1px] bg-brand-plum/30" />
            YOUR SYSTEM HAS FRICTION
            <span className="w-10 h-[1px] bg-brand-plum/30" />
          </span>
          {/* High-stakes headline — loss aversion framing */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter text-brand-orange leading-[0.8] mb-12">
            BLEEDING REVENUE<br />
            <span className="text-white">EVERY HOUR YOU WAIT.</span>
          </h2>
          <p className="text-white text-lg md:text-xl font-medium tracking-tight max-w-2xl mx-auto italic opacity-60">
            These aren&apos;t hypothetical savings. This is money leaving your business right now.
          </p>
        </motion.div>

        {/* Ambient glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-plum-glow opacity-30 blur-[140px] rounded-full pointer-events-none"
        />

        {/* Problem cards */}
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

        {/* Scroll prompt */}
        <motion.div
          style={{
            opacity: useTransform(smoothProgress, [0, 0.05], [1, 0]),
            y: useTransform(smoothProgress, [0, 0.05], [0, 20]),
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] text-brand-plum tracking-[0.4em] uppercase font-bold text-center">
            Scroll to see what&apos;s costing you
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-orange via-brand-plum to-transparent" />
        </motion.div>

        {/* Bottom CTA — appears near end of scroll */}
        <motion.div
          style={{
            opacity: useTransform(smoothProgress, [0.88, 0.96], [0, 1]),
            y: useTransform(smoothProgress, [0.88, 0.96], [30, 0]),
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30"
        >
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-brand-orange text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-brand-orange/90 transition-all shadow-[0_10px_30px_rgba(255,107,0,0.3)] flex items-center gap-3"
          >
            Stop the Bleed — Book a Free Audit
          </Link>
          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
            Free 15-min audit · No obligation
          </span>
        </motion.div>

      </div>
    </section>
  );
}
