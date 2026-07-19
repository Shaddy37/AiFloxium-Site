"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/site";
import { ease } from "@/lib/utils";

interface PanelProps {
  eyebrow: string;
  heading: React.ReactNode;
  description: string;
  stats: { label: string; text: string }[];
  index: number;
  cta?: boolean;
}

const Panel = ({ eyebrow, heading, description, stats, index, cta }: PanelProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="w-full py-20 md:py-32 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[var(--glow-secondary)]/10 via-transparent to-transparent pointer-events-none" />
      <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-black/50 font-inter"
        >
          {eyebrow}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          {heading}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="max-w-[65ch] text-[clamp(1rem,2vw,1.25rem)] font-inter font-light leading-relaxed text-black/70"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="flex flex-wrap gap-8 md:gap-12 mt-4"
        >
          {stats.map((stat, i) => (
            <div key={i} className="min-w-[180px] flex-1">
              <p className="mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 font-inter">{stat.label}</p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed text-black/50 font-inter font-light">
                {stat.text}
              </p>
            </div>
          ))}
        </motion.div>

        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.4 }}
            className="flex flex-wrap justify-between items-center gap-6 mt-8 pt-8"
          >
            <span className="text-white/40 text-[10px] font-semibold tracking-widest uppercase font-inter">Measured by metrics</span>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-white text-black px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-white/90 transition-[transform,background-color] duration-200 ease-[var(--ease-out)] active:scale-[0.97] button-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Book Discovery Call
              <ArrowRight className="h-3.5 w-3.5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-200" />
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default function StoryNarrative() {
  return (
    <section className="relative bg-[var(--background)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--glow-primary)]/5 via-[var(--background)] to-[var(--background)] pointer-events-none" />

      <Panel
        eyebrow="01 — The Problem"
        heading={
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-instrument text-white leading-[0.85] tracking-[-0.04em] text-balance">
            Stop the
            <br />
            manual
            <br />
            <span className="font-instrument text-white italic">chaos.</span>
          </h1>
        }
        description="Your team is burning 20+ hours weekly on repetitive manual tasks, copying data between disconnected systems. Lead response times lag, and payroll bloat is killing your margins."
        stats={[
          { label: "Hours Wasted", text: "Wasted efforts on data synchronization, manual invoicing, and repetitive administration tasks." },
          { label: "Lead Leakage", text: "Slow responses cost conversions. Leads left cold for over 5 minutes drop conversion rates by 80%." },
          { label: "Payroll Bloat", text: "Adding headcount to manage tedious tasks increases overhead instead of expanding scaling capacity." },
        ]}
        index={0}
      />

      <div className="w-full max-w-6xl mx-auto px-6"><div className="border-t border-white/10" /></div>

      <Panel
        eyebrow="02 — The Mission"
        heading={
          <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-instrument text-white leading-[0.85] tracking-[-0.04em] text-balance">
            Autonomous
            <br />
            systems.
            <br />
            <span className="font-instrument text-white italic">24/7 Run.</span>
          </h2>
        }
        description="Founded under AIFLOXIUM, I build secure agentic architectures and Agentic OS systems. I replace fragile manual tasks with systems that run autonomously."
        stats={[
          { label: "Agentic OS", text: "Autonomous operating systems running on secure private infrastructure to automate complex business pipelines." },
          { label: "Conversational Voice", text: "Sub-500ms latency voice agents that answer, qualify, and book inbound leads in real-time." },
          { label: "Bespoke Portals", text: "Next.js & Supabase custom portals and database tools engineered in weeks, replacing spreadsheets." },
        ]}
        index={1}
      />

      <div className="w-full max-w-6xl mx-auto px-6"><div className="border-t border-white/10" /></div>

      <Panel
        eyebrow="03 — Outcomes"
        heading={
          <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-instrument text-white leading-[0.85] tracking-[-0.04em] text-balance">
            Engineered
            <br />
            for
            <br />
            <span className="font-instrument text-white italic">scale.</span>
          </h2>
        }
        description="Operational scaling on autopilot. I design systems that secure your data, eliminate entry errors, and guarantee a positive ROI."
        stats={[
          { label: "Speed-to-Lead", text: "Auto-qualify and contact hot leads in under 90 seconds, securing your sales pipeline immediately." },
          { label: "85% OCR Invoices", text: "AI extracts data from PDF invoices and updates booking/accounting with zero manual entry errors." },
          { label: "CRM Lead Gen", text: "Automatically extract, enrich, and sync 500+ qualified leads weekly to your CRM with zero research." },
        ]}
        index={2}
        cta
      />
    </section>
  );
}
