"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Cpu, PhoneCall, LayoutDashboard, ArrowRight } from "lucide-react";
import { LazyVideo } from "@/components/ui/lazy-video";
import { ease } from "@/lib/utils";

interface CardProps {
  card: {
    title: string;
    body: string;
    icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
    tags: string[];
  };
  index: number;
}

const Card = ({ card, index }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const IconComponent = card.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease, delay: index * 0.1 }}
      className="bg-black/5 backdrop-blur-xl text-black border border-black/10 hover:border-black/25 hover:bg-black/[0.07] rounded-[1.5rem] p-8 md:p-10 flex flex-col justify-between transition-[border-color,background-color] duration-300 group"
    >
      <div>
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-black/5 border border-black/10 text-black shrink-0 group-hover:scale-105 transition-transform duration-300">
            <IconComponent className="h-5 w-5" strokeWidth={1.5} />
          </div>
          <div className="flex flex-wrap gap-2">
            {card.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-black/5 border border-black/10 rounded-full px-3 py-1 text-[11px] text-black font-inter font-light group-hover:border-black/25 transition-colors duration-300 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h3 className="font-inter font-semibold text-black text-2xl md:text-3xl tracking-tight leading-tight mb-4">
          {card.title}
        </h3>
        <p className="text-base text-black font-inter font-light leading-relaxed">
          {card.body}
        </p>
      </div>

      <Link
        href="/contact"
        className="inline-flex items-center gap-2 text-black hover:text-black transition-colors duration-200 text-sm font-semibold tracking-wide mt-8 font-inter w-fit"
      >
        See how it works
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
};

export default function ProductionEvolved() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const cards = [
    {
      title: "Agentic OS & Infrastructure",
      body: "Custom agentic operating systems deployed to private VPS servers. Run self-healing multi-agent workflows with zero transaction fees. No bloat. Just ruthless scaling efficiency.",
      icon: Cpu,
      tags: ["Agentic OS", "Private VPS", "Multi-Agent Systems", "Self-Healing Logs"]
    },
    {
      title: "Conversational Voice AI",
      body: "Qualify inbound leads and book appointments automatically. Run sub-500ms voice agents integrated directly with your CRM. It sounds real, acts smart, and closes fast.",
      icon: PhoneCall,
      tags: ["Vapi & Retell", "Sub-500ms Latency", "CRM Sync", "Auto-Booking"]
    },
    {
      title: "Bespoke Portals & Reasoning",
      body: "Bespoke internal dashboards, customer portals, and databases. I apply AI reasoning layers to eliminate pipeline bottlenecks, fully coded with modern Next.js stacks.",
      icon: LayoutDashboard,
      tags: ["Next.js", "Supabase", "Applied AI Reasoning", "Code Ownership"]
    }
  ];

  return (
    <section className="relative bg-[var(--background)] text-black border-b border-black/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/5 via-transparent to-transparent pointer-events-none" />

      {/* Background Video */}
      <LazyVideo
        preload="none"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-20"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
      />
      <div className="absolute inset-0 bg-[var(--background)]/90 z-[1] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 md:px-16 lg:px-20 py-24 md:py-32">
        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="block text-[10px] font-inter tracking-[0.3em] uppercase text-black font-medium mb-8 flex items-center gap-2"
          >
            <span className="w-8 h-[2px] bg-gradient-to-r from-black/30 to-transparent" /> System Architecture
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="font-instrument text-black text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-[-0.04em] mb-8 text-balance"
          >
            Systems I <br />
            <span className="font-instrument text-black italic">engineer.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
             className="text-lg md:text-xl text-black font-inter font-light leading-relaxed max-w-2xl"
          >
            I architect and deploy custom agentic infrastructure that automates operations, secures data, and eliminates administrative bottlenecks.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Card key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
