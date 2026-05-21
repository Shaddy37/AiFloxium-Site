"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Workflow, Shield, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import { CornerPlusIcons } from "@/components/ui/geometric-elements";

export function Vision() {
  return (
    <section className="py-24 md:py-40 px-6 relative overflow-hidden bg-hero-gradient">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-plum/20 to-transparent -z-10" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-plum-glow opacity-80 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-[4/3] w-full rounded-lg overflow-hidden border border-dashed border-brand-plum/30 bg-brand-plum/5"
            >
              <CornerPlusIcons />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
              {/* Abstract Graphic Representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-64 md:h-64 border-[0.5px] border-brand-plum/30 rounded-full flex items-center justify-center relative spin-slow">
                   <div className="w-full h-full absolute animate-ping opacity-10 border border-brand-orange/30 rounded-full" style={{ animationDuration: '4s' }} />
                   <div className="w-16 h-16 md:w-32 md:h-32 border-[0.5px] border-brand-plum/50 rounded-full flex items-center justify-center">
                      <Cpu className="w-8 h-8 text-brand-orange" />
                   </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-brand-orange tracking-[0.2em] font-medium text-xs md:text-sm uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-brand-plum" /> My Vision
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-brand-orange leading-[0.9] tracking-tighter">
                THE CATALYST <br /> FOR <span className="text-brush text-3xl md:text-6xl lg:text-7xl ml-2">TRANSFORMATION.</span>
              </h3>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white font-medium leading-relaxed"
            >
              I build automation systems, internal tools, and practical AI
              workflows that help founders move faster without adding more
              manual overhead.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10"
            >
              <div>
                <h4 className="text-brand-orange font-bold mb-3 font-heading text-lg md:text-xl">My Directive</h4>
                <p className="text-white text-sm md:text-base leading-relaxed">Find the bottleneck, build the fix, and leave behind a system your team can actually use.</p>
              </div>
              <div>
                <h4 className="text-brand-orange font-bold mb-3 font-heading text-lg md:text-xl">My Ambition</h4>
                <p className="text-white text-sm md:text-base leading-relaxed">Be the technical partner startups and growing businesses call when they need something shipped properly.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    { num: "01", title: "Discovery", desc: "We identify the bottleneck, map the workflow, and define what success should look like before building." },
    { num: "02", title: "Architecture", desc: "I design the automation, tool integrations, or product flow so the build is clear before implementation starts." },
    { num: "03", title: "Build & Test", desc: "The system is implemented, tested against real edge cases, and refined until it is reliable enough to hand over." },
    { num: "04", title: "Launch & Improve", desc: "I deploy, document, and tune the system so your team can run it confidently after launch." }
  ];

  return (
    <section className="py-24 md:py-40 px-4 md:px-6 relative bg-brand-bg border-y border-brand-plum/10">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="w-full text-center md:text-left">
               <h2 className="text-white tracking-[0.2em] font-medium text-xs md:text-sm uppercase mb-4 flex items-center gap-4 md:justify-start justify-center">
                 <span className="w-8 h-[1px] bg-zinc-700" /> Methodology
               </h2>
               <h3 className="text-3xl sm:text-4xl md:text-6xl font-heading font-black text-brand-orange tracking-tighter">
                 PROTOCOLS OF <br/><span className="text-brush text-2xl md:text-5xl lg:text-6xl mt-2">EXECUTION.</span>
               </h3>
            </div>
            <Link href="/resources" className="hidden md:flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-white hover:text-white transition-colors group">
               View Full Documentation
               <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.12 }}
              className="relative border border-dashed border-brand-plum/30 bg-brand-plum/5 p-10 rounded-lg flex flex-col group transition-all duration-300 overflow-hidden"
            >
              <CornerPlusIcons />
              <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity">
                <Workflow className="w-24 h-24 text-white" />
              </div>
              <span className="text-sm font-mono text-zinc-600 mb-12 group-hover:text-white transition-colors">[{step.num}]</span>
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-brand-orange mb-4 relative z-10">{step.title}</h3>
              <p className="text-white text-sm md:text-base leading-relaxed relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Trust() {
  const caseStudies = [
    {
      category: "Creative Agency",
      title: "Content Repurposing Engine",
      impact: "100+ hrs/mo Reclaimed",
      desc: "Built an automated content pipeline that turns one source asset into reusable outputs across multiple channels.",
      icon: <Workflow className="w-5 h-5 text-primary" />,
      size: "large",
      metrics: ["500+ clips/month", "98% accuracy", "$12k/mo savings"]
    },
    {
      category: "SaaS Startup",
      title: "24/7 Voice SDR",
      impact: "$4k/mo Saved",
      desc: "Deployed voice qualification logic that handled lead intake and booking without relying on manual first response.",
      icon: <Cpu className="w-5 h-5 text-primary" />,
      size: "small",
      metrics: ["45% qualification rate", "2.5h avg response time"]
    },
    {
      category: "Operations",
      title: "Dynamic CRM Logic",
      impact: "85% Less Manual Entry",
      desc: "Architected custom n8n plus LLM logic to automate routing, enrichment, and next-step assignment.",
      icon: <Shield className="w-5 h-5 text-primary" />,
      size: "small",
      metrics: ["2M+ monthly transactions", "99.8% uptime"]
    },
    {
      category: "LinkedIn Growth",
      title: "Autonomous Post Creator",
      impact: "300+ Posts/mo Generated",
      desc: "Built a content engine for research, drafting, and scheduling so publishing was consistent instead of manual.",
      icon: <Workflow className="w-5 h-5 text-primary" />,
      size: "small",
      metrics: ["45% avg engagement rate", "$0 content cost", "2.3K new followers/mo"]
    },
    {
      category: "SEO Agency",
      title: "SEO Ranking Automation",
      impact: "1st Page Rankings",
      desc: "Automated keyword discovery, content planning, and reporting so SEO work was tied to a repeatable operating system.",
      icon: <Cpu className="w-5 h-5 text-primary" />,
      size: "small",
      metrics: ["42 keywords ranked", "12K monthly organic traffic", "$18K/mo revenue impact"]
    }
  ];

  const trustPillars = [
    {
      title: "Deterministic Results",
      description: "You get a clear scope, documented build, and a system designed around a real business workflow."
    },
    {
      title: "Zero-Risk Deployment",
      description: "I do not hand off half-built ideas. The goal is a system your team can run, review, and improve."
    },
    {
      title: "Transparent Architecture",
      description: "You keep the code, the workflow logic, and the implementation context. No black-box dependency."
    },
    {
      title: "Proven Methodology",
      description: "Discovery, architecture, build, and launch in a sequence that keeps the work understandable and testable."
    }
  ];

  return (
    <section className="py-24 md:py-40 px-6 relative overflow-hidden bg-hero-gradient">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main Heading */}
        <div className="flex flex-col md:flex-row gap-12 justify-between items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-2xl"
          >
            <h2 className="text-white tracking-[0.2em] font-medium text-xs md:text-sm uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-brand-plum" /> Proof of Impact
            </h2>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter leading-[0.9] text-brand-orange">
              WHY FOUNDERS <br /> <span className="text-brush text-4xl md:text-6xl lg:text-8xl ml-2">TRUST ME.</span>
            </h3>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-medium max-w-md text-white leading-relaxed pb-4"
          >
             I build practical systems with clear handoff, visible logic, and
             proof of what was shipped.
          </motion.p>
        </div>

        {/* Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {trustPillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08 }}
              className="border border-brand-plum/20 bg-brand-bg p-4 md:p-6 group hover:border-brand-plum/40 hover:bg-brand-plum/10 transition-all"
            >
              <div className="flex items-start gap-3 mb-2 md:mb-4">
                <div className="w-1.5 h-1.5 bg-primary mt-2 shrink-0" />
                <h4 className="text-base md:text-lg font-bold font-heading text-brand-orange">{pillar.title}</h4>
              </div>
              <p className="text-white text-xs md:text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-6">
          <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-white mb-8">Proven Results</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {caseStudies.map((study, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.12 }}
              className={cn(
                "relative border border-brand-plum/20 bg-brand-bg p-6 flex flex-col justify-between group overflow-hidden hover:border-brand-plum/40 transition-all",
                study.size === "large" ? "md:col-span-2" : "md:col-span-1"
              )}
            >
              <CornerPlusIcons />
              
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center">
                    {study.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">{study.category}</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold font-heading text-brand-orange mb-3 tracking-tight">{study.title}</h4>
                <p className="text-white text-sm md:text-base leading-relaxed max-w-md mb-6">{study.desc}</p>
                
                {/* Metrics */}
                {study.metrics && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.metrics.map((metric, j) => (
                      <span key={j} className="text-[10px] bg-zinc-800/50 border border-white/10 px-2 py-1 text-white">
                        {metric}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-lg font-bold text-primary font-heading tracking-tight">{study.impact}</span>
                <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantees/Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="border border-brand-plum/20 bg-brand-plum/10 p-12"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex-1">
              <h4 className="text-2xl font-bold font-heading text-brand-orange mb-4">What You Can Expect</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">✓</span>
                  <p className="text-white">Detailed documentation & knowledge transfer (no black box)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">✓</span>
                  <p className="text-white">30+ day optimization period with live monitoring</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">✓</span>
                  <p className="text-white">Full stack ownership—architecture, deployment, and support</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-bold font-heading text-brand-orange mb-4">My Commitment</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">✓</span>
                  <p className="text-white">Deterministic ROI metrics defined before work begins</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">✓</span>
                  <p className="text-white">99%+ uptime SLA on all production systems</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">✓</span>
                  <p className="text-white">Weekly performance reports and optimization recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section className="py-24 md:py-40 px-6 relative overflow-hidden bg-brand-bg border-y border-brand-plum/10">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-plum-glow opacity-30 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10 border border-dashed border-brand-plum/30 bg-brand-plum/5 rounded-3xl p-10 md:p-20 flex flex-col lg:flex-row justify-between items-center gap-16 overflow-hidden">
        <CornerPlusIcons />
        
        <div className="w-full lg:w-3/5">
          <h2 className="text-white tracking-[0.2em] font-medium text-xs md:text-sm uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-brand-plum/30" /> Investment
          </h2>
          <h3 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-8 text-brand-orange uppercase leading-[0.9]">
            PRICING <br /> <span className="text-brush text-3xl md:text-5xl lg:text-6xl mt-2">PHILOSOPHY.</span>
          </h3>
            <p className="text-white font-medium text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Every business has vastly unique operational needs. Rather than rigid software, I structure bespoke quotes based entirely on the automation complexity and whether I am building internal tools via Claude Code or wiring webhooks in n8n.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 border border-dashed border-brand-plum/30 rounded-2xl bg-brand-plum/10 w-fit relative overflow-hidden">
             <div className="text-sm font-mono text-white uppercase tracking-widest">Typical Deployment Range</div>
             <div className="text-2xl md:text-3xl font-black font-heading text-brand-orange">$800 to $5,000+</div>
          </div>
          <div className="mt-8 flex items-center gap-3 px-4 py-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 w-fit">
             <Shield className="w-4 h-4 text-brand-orange" />
             <span className="text-xs font-black uppercase tracking-wider text-brand-orange">Custom-scoped projects</span>
          </div>
        </div>
        
        <div className="w-full lg:w-1/3 flex flex-col justify-center">
          <ul className="space-y-6 mb-12">
            {[ "Deep Tool Stack Audit", "Custom n8n Pipeline Logic", "Claude Code Built Micro-SaaS", "Autonomous Voice Deployment" ].map((feature, i) => (
               <li key={i} className="flex items-center gap-4 text-white font-medium">
                 <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                 {feature}
               </li>
            ))}
          </ul>
          <Link href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="w-full py-6 rounded-xl bg-brand-orange text-white font-black text-sm uppercase tracking-widest hover:bg-brand-orange/90 transition-all flex items-center justify-center gap-4 group border-none shadow-[0_0_30px_rgba(255,107,0,0.3)]">
            Book a Discovery Call
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Founder() {
  return (
    <section className="py-24 md:py-40 px-6 relative bg-brand-bg">
      <div className="container mx-auto max-w-7xl">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative border border-dashed border-brand-plum/30 bg-brand-plum/5 rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row gap-16 items-center overflow-hidden"
         >
            <CornerPlusIcons />
            {/* Abstract Background Noise / Graphical break */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')", backgroundRepeat: 'repeat' }} />

            <div className="w-full lg:w-1/3 aspect-[4/5] rounded-2xl bg-brand-bg border border-dashed border-brand-plum/30 relative overflow-hidden flex items-center justify-center group">
               <Image 
                  src="/founder-headshot.webp"
                  alt="Muhammad Shadab Shams" 
                  fill 
                  className="object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-bg via-brand-bg/50 to-transparent pointer-events-none" />
               <span className="font-heading text-4xl text-white/90 font-black absolute bottom-8 left-8 z-10 tracking-widest uppercase leading-none">SHAMS</span>
            </div>
            
            <div className="w-full lg:w-2/3 flex flex-col justify-center relative z-10">
<h2 className="text-white tracking-[0.2em] font-medium text-xs md:text-sm uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-brand-plum/30" /> Direct Architect Access
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-orange tracking-tighter mb-6 md:mb-8 leading-[0.9] uppercase">
                BUILT FOR <span className="text-brush text-2xl md:text-5xl lg:text-6xl mt-2">REAL </span> OPERATIONS.
              </h3>
               <p className="text-white text-lg md:text-xl leading-relaxed mb-8 font-medium">
                 I built AIFLOXIUM as the container for my work: a personal
                 studio focused on automation, internal tools, and product-grade
                 AI systems. The goal is simple: build software and workflows
                 that remove repeated work and make operations easier to run.
               </p>
               <div className="relative mb-10">
                  <span className="absolute -top-4 -left-2 text-6xl text-white/10 font-serif leading-none">&quot;</span>
                  <p className="text-xl md:text-2xl leading-relaxed font-bold text-white italic pl-4 border-l-4 border-brand-orange/30">
                    The best automation work is rarely flashy. It is the system
                    that quietly saves time every week and keeps working after
                    the launch call is over.
                  </p>
               </div>
               <div className="flex items-center gap-6">
                 <Link href="https://www.linkedin.com/in/muhammad-shadab-shams-8b07132b6/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white flex items-center justify-center hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-6 h-6 text-black" />
                 </Link>
                 <Link href="https://www.linkedin.com/in/muhammad-shadab-shams-8b07132b6/" target="_blank" rel="noopener noreferrer">
                   <p className="text-white font-black font-heading text-xl uppercase tracking-tighter">Muhammad Shadab Shams</p>
                   <p className="text-brand-orange font-mono text-[10px] font-bold uppercase tracking-[0.3em] mt-1">Lead Architect & Systems Engineer</p>
                 </Link>
               </div>
            </div>
         </motion.div>
      </div>
    </section>
  );
}


export function TechStack() {
  const tools = [
    "n8n Orchestration", "Claude 3.5 Sonnet", "Cursor IDE", 
    "Antigravity", "Gemini Pro", "OpenCode", "Vibe Coding"
  ];
  return (
    <section className="py-24 px-6 relative bg-white border-y border-gray-100 overflow-hidden" data-theme="light">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-12 justify-between">
        <h2 className="text-brand-plum tracking-[0.2em] font-medium text-xs md:text-sm uppercase shrink-0 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-brand-plum/30" /> Arsenal & Tooling
        </h2>
        
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex gap-6 whitespace-nowrap animate-marquee w-max hover:[animation-play-state:paused]">
            {[...tools, ...tools, ...tools].map((tool, i) => (
              <div key={i} className="px-8 py-4 border border-dashed border-gray-200 rounded-xl bg-gray-50 hover:border-brand-plum/30 hover:bg-white transition-all cursor-pointer text-lg font-bold text-zinc-600 flex items-center gap-3 relative overflow-hidden group shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
                <CornerPlusIcons className="opacity-20 group-hover:opacity-100 transition-opacity text-brand-plum" />
                <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse shadow-[0_0_8px_rgba(255,107,0,0.5)]" />
                <span className="group-hover:text-brand-plum transition-colors">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
