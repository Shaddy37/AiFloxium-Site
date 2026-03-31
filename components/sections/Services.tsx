"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Fingerprint, Cpu, Bot, Database, ArrowRight, Phone, Search } from "lucide-react";

export const capabilities = [
  {
    slug: "n8n-workflow-automation",
    title: "n8n Workflow Automation",
    description: "Bridging disparate APIs to automate repetitive manual tasks. We turn human bottlenecks into flawless, instant logic.",
    icon: <Cpu className="w-8 h-8 text-white group-hover:text-zinc-300 transition-colors" strokeWidth={1.5} />,
  },
  {
    slug: "autonomous-voice-agents",
    title: "Autonomous Voice Agents",
    description: "Human-fidelity AI agents for inbound qualification and outbound sales. Zero latency, 24/7 availability.",
    icon: <Phone className="w-8 h-8 text-white group-hover:text-zinc-300 transition-colors" strokeWidth={1.5} />,
  },
  {
    slug: "vibe-coding",
    title: "Vibe Coding (Claude)",
    description: "Rapid custom software development powered by advanced LLM reasoning. We build internal tools and web apps lightning-fast.",
    icon: <Bot className="w-8 h-8 text-white group-hover:text-zinc-300 transition-colors" strokeWidth={1.5} />,
  },
  {
    slug: "seo-optimization",
    title: "AI-Powered SEO",
    description: "Automated content scaling and technical precision to dominate search rankings without the high agency overhead.",
    icon: <Search className="w-8 h-8 text-white group-hover:text-zinc-300 transition-colors" strokeWidth={1.5} />,
  },
  {
    slug: "autonomous-agents",
    title: "Autonomous Agents",
    description: "Intelligent systems that handle dynamic inquiries across platforms, scrape data, and execute complex decision trees.",
    icon: <Fingerprint className="w-8 h-8 text-white group-hover:text-zinc-300 transition-colors" strokeWidth={1.5} />,
  },
  {
    slug: "agency-scaling-partner",
    title: "Agency Scaling Partner",
    description: "We act as your technical backend. We handle the heavy lifting of process engineering so your agency can dominate strategy.",
    icon: <Database className="w-8 h-8 text-white group-hover:text-zinc-300 transition-colors" strokeWidth={1.5} />,
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative group h-full glass-card rounded-[2rem] p-10 transition-all duration-300"
      >
        {/* Hover Radial Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_70%)]" />

        <div style={{ transform: "translateZ(30px)" }} className="flex flex-col h-full">
          <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 border border-white/5 flex items-center justify-center mb-8 shadow-inner shadow-white/5">
            {cap.icon}
          </div>
          <h3 className="text-2xl font-bold font-heading mb-4 text-white tracking-tight">{cap.title}</h3>
          <p className="text-zinc-400 font-medium leading-relaxed flex-grow">{cap.description}</p>

          <Link
            href={`/services/${cap.slug}`}
            className="mt-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors"
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
    <section id="services" className="py-40 px-4 md:px-6 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-4 border border-white/10 bg-white/5 px-4 py-1.5 rounded-full w-max">
              <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
              <h2 className="text-zinc-300 tracking-[0.2em] font-medium text-xs uppercase">Core Capabilities</h2>
            </div>
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-white tracking-tighter leading-[0.9]">
              WE AUTOMATE <br /> <span className="text-gradient">EVERYTHING.</span>
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 font-medium max-w-md md:text-right leading-relaxed"
          >
            From simple n8n webhook integrations to complex multi-agent architectures built with Claude Code and Cursor. Let&apos;s eradicate your bottlenecks.
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
