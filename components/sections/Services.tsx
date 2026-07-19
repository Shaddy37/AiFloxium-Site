"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Fingerprint, Cpu, Bot, Database, ArrowRight, Phone, Search } from "lucide-react";

export const capabilities = [
  {
    slug: "n8n-workflow-automation",
    title: "n8n Workflow Automation",
    description: "I connect the tools your team already uses and remove repetitive manual work with reliable n8n workflows.",
    icon: <Cpu className="w-8 h-8 text-[#7B2CBF] group-hover:text-black transition-colors" strokeWidth={1.5} />,
  },
  {
    slug: "autonomous-voice-agents",
    title: "Autonomous Voice Agents",
    description: "I build voice agents for inbound qualification, support, and booking so every lead gets a fast response.",
    icon: <Phone className="w-8 h-8 text-[#7B2CBF] group-hover:text-black transition-colors" strokeWidth={1.5} />,
  },
  {
    slug: "vibe-coding",
    title: "Vibe Coding (Claude)",
    description: "I ship internal tools, client portals, and product MVPs quickly without cutting corners on architecture.",
    icon: <Bot className="w-8 h-8 text-[#7B2CBF] group-hover:text-black transition-colors" strokeWidth={1.5} />,
  },
  {
    slug: "seo-optimization",
    title: "AI-Powered SEO",
    description: "I combine technical SEO and content systems so your site is easier to rank and easier to trust.",
    icon: <Search className="w-8 h-8 text-[#7B2CBF] group-hover:text-black transition-colors" strokeWidth={1.5} />,
  },
  {
    slug: "autonomous-agents",
    title: "Autonomous Agents",
    description: "I design agentic systems that research, enrich, route, and act inside your workflows with guardrails.",
    icon: <Fingerprint className="w-8 h-8 text-[#7B2CBF] group-hover:text-black transition-colors" strokeWidth={1.5} />,
  },
  {
    slug: "agency-scaling-partner",
    title: "Expert Implementation Partner",
    description: "I plug in as your technical execution layer when you need shipping velocity without hiring a full internal team.",
    icon: <Database className="w-8 h-8 text-[#7B2CBF] group-hover:text-black transition-colors" strokeWidth={1.5} />,
  },
];

function PremiumCard({ cap, index }: { cap: typeof capabilities[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(x, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const rX = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
    const rY = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    x.set(rY);
    y.set(rX);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.12 }}
      className="perspective-1000"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative group h-full bg-black/5 rounded-3xl border border-black/10 p-10 transition-colors duration-300 overflow-hidden liquid-glass"
      >
        {/* Hover Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(123,44,191,0.08)_0%,transparent_70%)]" />

        <div style={{ transform: "translateZ(30px)" }} className="flex flex-col h-full relative z-10">
          <div className="w-16 h-16 bg-[#7B2CBF]/5 border border-[#7B2CBF]/20 flex items-center justify-center mb-8 rounded-2xl group-hover:bg-[#7B2CBF]/10 group-hover:border-[#7B2CBF]/30 transition-colors">
            {cap.icon}
          </div>
            <h3 className="text-2xl font-semibold font-inter mb-4 text-black tracking-wide group-hover:text-[#7B2CBF] transition-colors">{cap.title}</h3>
          <p className="text-black font-inter font-light leading-relaxed flex-grow">{cap.description}</p>

          <Link
            href={`/services/${cap.slug}`}
            className="mt-10 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-[#7B2CBF] hover:text-black transition-colors font-inter"
          >
            <span>Explore Service</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden bg-white border-b border-black/10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-4 border border-zinc-200 bg-black/5 px-4 py-1.5 rounded-full w-max shadow-sm liquid-glass">
              <div className="w-1.5 h-1.5 bg-[#E0AAFF] animate-pulse rounded-full" />
              <h2 className="text-[#7B2CBF] tracking-[0.2em] font-semibold text-[10px] uppercase font-inter">Core Capabilities</h2>
            </div>
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-instrument text-black tracking-tight leading-[1.05]">
              What I <br /> <span className="font-instrument text-[#7B2CBF] italic">build.</span>
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-black font-inter font-light max-w-md md:text-right leading-relaxed"
          >
            Practical AI systems for startups and growing businesses: automation,
            internal software, product builds, and workflows that save real time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <PremiumCard key={cap.slug} cap={cap} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
