"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/site";

const problems = [
  {
    eyebrow: "SLOW RESPONSE",
    title: "YOU'RE LOSING 78% OF YOUR LEADS TO WHOEVER REPLIES FIRST",
    stat: "The first business to respond wins the sale 78% of the time.",
    description:
      "Every lead that waits more than 5 minutes has a 400% lower chance of converting. While your team is busy, a competitor is already on the phone with your prospect.",
    proof: "AI follow-up systems respond in under 90 seconds, 24/7.",
    col: "lg:col-span-2",
  },
  {
    eyebrow: "AGENCY TRAP",
    title: "YOU PAID $8,000+ FOR A WEBSITE THAT TOOK 4 MONTHS",
    stat: "Traditional agencies charge $5K–$30K and deliver in months.",
    description:
      "Then you need updates — which cost more, take weeks, and require another agency brief. The whole model is broken. AI-native development changes the timeline and the price completely.",
    proof: "Same quality shipped in days, not months.",
    col: "lg:col-span-1",
  },
  {
    eyebrow: "INVISIBLE BRAND",
    title: "YOU HAVEN'T POSTED IN 2 WEEKS AND YOUR REACH IS DYING",
    stat: "Accounts that post consistently get 3× more inbound than those that don't.",
    description:
      "Every day you don't post, your competitors are showing up where your audience scrolls. Algorithms punish inconsistency — and you can't afford a full-time content person.",
    proof: "AI content pipelines post daily without you touching anything.",
    col: "lg:col-span-1",
  },
  {
    eyebrow: "TIME DRAIN",
    title: "YOUR TEAM BURNS 20+ HOURS A WEEK ON WORK THAT SHOULDN'T EXIST",
    stat: "20 hrs × $40/hr = $800 gone. Every single week. That's $41,600/year.",
    description:
      "Copy-pasting data, chasing approvals, manually updating CRMs, re-entering the same information across five tools. That's not operations — that's expensive admin that AI eliminates entirely.",
    proof: "Most clients reclaim 20–40 hrs/week within the first month.",
    col: "lg:col-span-2",
  },
  {
    eyebrow: "CONTENT GAP",
    title: "YOUR COMPETITORS HAVE A DESIGN TEAM. YOU HAVE A CANVA ACCOUNT.",
    stat: "Carousels get 3× more reach than static posts on LinkedIn and Instagram.",
    description:
      "Scroll-stopping content requires hooks, designed slides, and consistent publishing. Without it, your posts get buried. A design team costs $5K+/month. AI does it for a fraction.",
    proof: "AI carousel systems produce 20–40 branded posts/week.",
    col: "lg:col-span-1",
  },
  {
    eyebrow: "FALLING BEHIND",
    title: "YOUR COMPETITORS ALREADY HAVE AI WORKING FOR THEM. YOU DON'T.",
    stat: "Early AI adopters are outpacing competitors by 40% in output per employee.",
    description:
      "While you're still doing things manually, other businesses are running leaner, responding faster, and producing more output with smaller teams. Every month without AI is a month of compounding disadvantage.",
    proof: "Most clients see measurable ROI within the first 30 days.",
    col: "lg:col-span-1",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HiddenCostSection() {
  return (
    <section className="relative z-10 bg-brand-bg overflow-hidden py-32 px-6">

      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-plum/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-orange/10 blur-[120px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 max-w-4xl"
        >
          <span className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-brand-plum mb-8">
            <span className="w-8 h-[1px] bg-brand-plum/40" />
            YOUR SYSTEM HAS FRICTION
          </span>

          <h2 className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] font-heading font-black tracking-tighter leading-[0.85] text-brand-orange uppercase mb-6">
            BLEEDING REVENUE<br />
            <span className="text-white">EVERY HOUR YOU WAIT.</span>
          </h2>

          <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl italic">
            These aren&apos;t hypothetical savings. This is money leaving your business right now.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-7 flex flex-col gap-5 hover:border-brand-plum/40 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-brand-plum/20 rounded-tr-2xl pointer-events-none" />

              {/* Shimmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-plum/0 via-brand-plum/0 to-brand-orange/0 group-hover:from-brand-plum/5 group-hover:to-brand-orange/5 transition-all duration-700 rounded-2xl pointer-events-none" />

              {/* Eyebrow */}
              <span className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.35em] text-brand-orange">
                <span className="w-3 h-[1px] bg-brand-orange/60" />
                {problem.eyebrow}
              </span>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-black text-white tracking-tight leading-[1.15] group-hover:text-brand-orange transition-colors duration-300">
                {problem.title}
              </h3>

              {/* Stat */}
              <p className="text-brand-orange font-mono text-xs font-bold leading-relaxed">
                {problem.stat}
              </p>

              {/* Description */}
              <p className="text-sm text-white/65 font-medium leading-relaxed flex-1">
                {problem.description}
              </p>

              {/* Social proof */}
              <div className="flex items-center gap-2 pt-3 border-t border-white/8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0 shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                  {problem.proof}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-brand-orange text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-brand-orange/90 transition-all shadow-[0_10px_30px_rgba(255,107,0,0.25)] hover:shadow-[0_14px_40px_rgba(255,107,0,0.4)] hover:-translate-y-0.5"
          >
            Stop the Bleed — Book a Free Audit
          </Link>
          <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">
            Free 15-min audit · No obligation
          </span>
        </motion.div>

      </div>
    </section>
  );
}
