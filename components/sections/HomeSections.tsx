"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Workflow, Shield, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CornerPlusIcons } from "@/components/ui/geometric-elements";

export function Vision() {
  return (
    <section className="py-24 md:py-40 px-6 relative overflow-hidden bg-background">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent -z-10" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-900/40 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-[4/3] w-full rounded-lg overflow-hidden border border-dashed border-zinc-700 bg-zinc-950/50"
            >
              <CornerPlusIcons />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
              {/* Abstract Graphic Representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-64 md:h-64 border-[0.5px] border-white/20 rounded-full flex items-center justify-center relative spin-slow">
                   <div className="w-full h-full absolute animate-ping opacity-10 border border-white/30 rounded-full" style={{ animationDuration: '4s' }} />
                   <div className="w-16 h-16 md:w-32 md:h-32 border-[0.5px] border-white/30 rounded-full flex items-center justify-center">
                      <Cpu className="w-8 h-8 text-white/50" />
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
              <h2 className="text-zinc-400 tracking-[0.2em] font-medium text-xs md:text-sm uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-zinc-700" /> My Vision
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white leading-[0.9] tracking-tighter">
                THE CATALYST <br /> FOR <span className="text-gradient">TRANSFORMATION.</span>
              </h3>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-zinc-300 font-medium leading-relaxed"
            >
              I engineer custom n8n workflows and generative software that irreversibly transform how fast you can operate. I believe every founder deserves access to an AI infrastructure that makes manual work obsolete.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10"
            >
              <div>
                <h4 className="text-white font-bold mb-3 font-heading text-lg md:text-xl">My Directive</h4>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">Eliminate bottlenecks and reduce manual costs by up to 80% through deterministic implementations.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-3 font-heading text-lg md:text-xl">My Ambition</h4>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">To be the invisible backbone for elite agencies and scaling startups worldwide.</p>
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
    { num: "01", title: "Discovery", desc: "Analysis of your business processes and identification of automation vectors tailored to operational needs." },
    { num: "02", title: "Architecture", desc: "Intelligent automation systems engineered using proven, high-availability frameworks and logic gates." },
    { num: "03", title: "Optimization", desc: "Rigorous stress testing ensures flawless execution. We optimize metrics and train internal personnel." },
    { num: "04", title: "Deployment", desc: "Seamless rollout paired with comprehensive documentation and persistent infrastructure support." }
  ];

  return (
    <section className="py-24 md:py-40 px-4 md:px-6 relative bg-zinc-950">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="w-full text-center md:text-left">
               <h2 className="text-zinc-400 tracking-[0.2em] font-medium text-xs md:text-sm uppercase mb-4 flex items-center gap-4 md:justify-start justify-center">
                 <span className="w-8 h-[1px] bg-zinc-700" /> Methodology
               </h2>
               <h3 className="text-3xl sm:text-4xl md:text-6xl font-heading font-black text-white tracking-tighter">
                 PROTOCOLS OF <br/> EXECUTION.
               </h3>
            </div>
            <Link href="/resources" className="hidden md:flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors group">
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
              className="relative border border-dashed border-zinc-700 bg-zinc-950 p-10 rounded-lg flex flex-col group transition-all duration-300 overflow-hidden"
            >
              <CornerPlusIcons />
              <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity">
                <Workflow className="w-24 h-24 text-white" />
              </div>
              <span className="text-sm font-mono text-zinc-600 mb-12 group-hover:text-zinc-300 transition-colors">[{step.num}]</span>
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4 relative z-10">{step.title}</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed relative z-10">{step.desc}</p>
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
      desc: "Built an autonomous pipeline that transcribes, clips, and formats raw video for 5+ platforms with 0 human intervention.",
      icon: <Workflow className="w-5 h-5 text-primary" />,
      size: "large",
      metrics: ["500+ clips/month", "98% accuracy", "$12k/mo savings"]
    },
    {
      category: "SaaS Startup",
      title: "24/7 Voice SDR",
      impact: "$4k/mo Saved",
      desc: "Deployed high-fidelity Vapi agents that qualify 400+ leads monthly via natural voice conversation.",
      icon: <Cpu className="w-5 h-5 text-primary" />,
      size: "small",
      metrics: ["45% qualification rate", "2.5h avg response time"]
    },
    {
      category: "Operations",
      title: "Dynamic CRM Logic",
      impact: "85% Less Manual Entry",
      desc: "Architected custom n8n + Claude logic gates to automate complex multi-stage lead routing.",
      icon: <Shield className="w-5 h-5 text-primary" />,
      size: "small",
      metrics: ["2M+ monthly transactions", "99.8% uptime"]
    },
    {
      category: "LinkedIn Growth",
      title: "Autonomous Post Creator",
      impact: "300+ Posts/mo Generated",
      desc: "Built Claude-powered system generating 10 LinkedIn posts daily with personalized hooks, carousel formats, and industry insights—all posted at optimal engagement times.",
      icon: <Workflow className="w-5 h-5 text-primary" />,
      size: "small",
      metrics: ["45% avg engagement rate", "$0 content cost", "2.3K new followers/mo"]
    },
    {
      category: "SEO Agency",
      title: "SEO Ranking Automation",
      impact: "1st Page Rankings",
      desc: "Automated n8n workflow for ScreenOrbit that identifies high-intent keywords, generates optimized content, and tracks ranking progress. Achieved page 1 Google rankings in 3 months with DR 4 domain authority.",
      icon: <Cpu className="w-5 h-5 text-primary" />,
      size: "small",
      metrics: ["42 keywords ranked", "12K monthly organic traffic", "$18K/mo revenue impact"]
    }
  ];

  const trustPillars = [
    {
      title: "Deterministic Results",
      description: "Not guesswork. Every system I build is architected to deliver predictable, measurable outcomes from deployment day one."
    },
    {
      title: "Zero-Risk Deployment",
      description: "I don't hand off half-baked solutions. Full integration testing, monitoring dashboards, and 24/7 support included."
    },
    {
      title: "Transparent Architecture",
      description: "You own everything. Detailed documentation, source code access, and knowledge transfer so you're never locked in."
    },
    {
      title: "Proven Methodology",
      description: "Discovery → Architecture → Deployment → Optimization cycle refined across 50+ successful automations."
    }
  ];

  return (
    <section className="py-24 md:py-40 px-6 relative overflow-hidden bg-background">
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
            <h2 className="text-zinc-400 tracking-[0.2em] font-medium text-xs md:text-sm uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-zinc-700" /> Proof of Impact
            </h2>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter leading-[0.9] text-white">
              WHY FOUNDERS <br /> <span className="text-gradient">TRUST ME.</span>
            </h3>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-medium max-w-md text-zinc-400 leading-relaxed pb-4"
          >
             I engineer deterministic AI systems that eliminate guesswork, reduce operational friction, and deliver measurable ROI—backed by transparent, documented results.
          </motion.p>
        </div>

        {/* Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {trustPillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08 }}
              className="border border-white/10 bg-zinc-950/50 p-6 group hover:border-white/20 hover:bg-zinc-950 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-2 h-2 bg-primary mt-2 shrink-0" />
                <h4 className="text-lg font-bold font-heading text-white">{pillar.title}</h4>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-6">
          <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-500 mb-8">Proven Results</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {caseStudies.map((study, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.12 }}
              className={cn(
                "relative border border-white/10 bg-zinc-950 p-10 flex flex-col justify-between group overflow-hidden hover:border-white/20 transition-all",
                study.size === "large" ? "md:col-span-2" : "md:col-span-1"
              )}
            >
              <CornerPlusIcons />
              
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center">
                    {study.icon}
                  </div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400">{study.category}</span>
                </div>
                <h4 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4 tracking-tight">{study.title}</h4>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-md mb-8">{study.desc}</p>
                
                {/* Metrics */}
                {study.metrics && (
                  <div className="flex flex-wrap gap-3 mb-8">
                    {study.metrics.map((metric, j) => (
                      <span key={j} className="text-xs bg-zinc-800/50 border border-white/10 px-3 py-1.5 text-zinc-300">
                        {metric}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <span className="text-xl font-bold text-primary font-heading tracking-tight">{study.impact}</span>
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
          className="border border-white/10 bg-zinc-950/50 p-12"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex-1">
              <h4 className="text-2xl font-bold font-heading text-white mb-4">What You Can Expect</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">✓</span>
                  <p className="text-zinc-400">Detailed documentation & knowledge transfer (no black box)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">✓</span>
                  <p className="text-zinc-400">30+ day optimization period with live monitoring</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">✓</span>
                  <p className="text-zinc-400">Full stack ownership—architecture, deployment, and support</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-bold font-heading text-white mb-4">My Commitment</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">✓</span>
                  <p className="text-zinc-400">Deterministic ROI metrics defined before work begins</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">✓</span>
                  <p className="text-zinc-400">99%+ uptime SLA on all production systems</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">✓</span>
                  <p className="text-zinc-400">Weekly performance reports and optimization recommendations</p>
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
    <section className="py-24 md:py-40 px-6 relative overflow-hidden bg-background border-y border-white/5">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-zinc-800/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10 border border-dashed border-zinc-700 bg-zinc-950 rounded-lg p-10 md:p-20 flex flex-col lg:flex-row justify-between items-center gap-16 overflow-hidden">
        <CornerPlusIcons />
        
        <div className="w-full lg:w-3/5">
          <h2 className="text-zinc-400 tracking-[0.2em] font-medium text-xs md:text-sm uppercase mb-6">Investment</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-8 text-white">PRICING <br /> PHILOSOPHY.</h3>
            <p className="text-zinc-400 font-medium text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Every business has vastly unique operational needs. Rather than rigid software, I structure bespoke quotes based entirely on the automation complexity and whether I am building internal tools via Claude Code or wiring webhooks in n8n.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 border border-dashed border-zinc-700 rounded-lg bg-zinc-900/50 w-fit relative overflow-hidden">
             <div className="text-sm font-mono text-zinc-400 uppercase tracking-widest">Typical Deployment Range</div>
             <div className="text-2xl md:text-3xl font-bold font-heading text-white">$800 to $5,000+</div>
          </div>
          <div className="mt-8 flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 w-fit">
             <Shield className="w-4 h-4 text-primary" />
             <span className="text-xs font-bold uppercase tracking-wider text-primary">80% Automation Guarantee</span>
          </div>
        </div>
        
        <div className="w-full lg:w-1/3 flex flex-col justify-center">
          <ul className="space-y-6 mb-12">
            {[ "Deep Tool Stack Audit", "Custom n8n Pipeline Logic", "Claude Code Built Micro-SaaS", "Autonomous Voice Deployment" ].map((feature, i) => (
               <li key={i} className="flex items-center gap-4 text-zinc-300 font-medium">
                 <CheckCircle2 className="w-5 h-5 text-white" />
                 {feature}
               </li>
            ))}
          </ul>
          <button className="w-full py-6 rounded-lg bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center justify-center gap-4 group">
            Book a Systems Audit
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function Founder() {
  return (
    <section className="py-24 md:py-40 px-6 relative bg-zinc-950">
      <div className="container mx-auto max-w-7xl">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative border border-dashed border-zinc-700 bg-zinc-950 rounded-lg p-10 md:p-16 flex flex-col lg:flex-row gap-16 items-center overflow-hidden"
         >
            <CornerPlusIcons />
            {/* Abstract Background Noise / Graphical break */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')", backgroundRepeat: 'repeat' }} />

            <div className="w-full lg:w-1/3 aspect-[4/5] rounded-lg bg-zinc-900 border border-dashed border-zinc-700 relative overflow-hidden flex items-center justify-center group">
               <Image 
                  src="/founder-headshot.webp"
                  alt="Muhammad Shadab Shams" 
                  fill 
                  className="object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent pointer-events-none" />
               <span className="font-heading text-4xl text-white/90 font-black absolute bottom-8 left-8 z-10 tracking-widest">SHAMS</span>
            </div>
            
<div className="w-full lg:w-2/3 flex flex-col justify-center relative z-10">
              <h2 className="text-zinc-400 tracking-[0.2em] font-medium text-xs md:text-sm uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-zinc-700" /> Direct Architect Access
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white tracking-tighter mb-6 md:mb-8 leading-[1.1]">
                BUILT FOR <span className="text-gradient">OPERATIONAL </span> SUPREMACY.
              </h3>
               <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8 font-medium">
                 I didn&apos;t build AIFLOXIUM to chase trends—I built it to solve what everyone else is too busy to fix: systems that actually work while you sleep. 50+ production systems later, I&apos;ve learned that <span className="text-white font-bold">real automation isn&apos;t about flashy AI demos. It&apos;s about boring, bulletproof architecture that prints ROI.</span>
               </p>
               <div className="relative mb-10">
                  <span className="absolute -top-4 -left-2 text-6xl text-white/10 font-serif">&quot;</span>
                  <p className="text-xl md:text-2xl leading-relaxed font-bold text-white italic pl-4 border-l-4 border-white/30">
                    While others talk about AI, I engineer Voice Agents that actually close deals and Social Engines that dominate timelines—built on your brand&apos;s DNA, not generic prompts.
                 </p>
               </div>
               <div className="flex items-center gap-6">
                 <Link href="https://www.linkedin.com/in/muhammad-shadab-shams-8b07132b6/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-white flex items-center justify-center hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-6 h-6 text-black" />
                 </Link>
                 <Link href="https://www.linkedin.com/in/muhammad-shadab-shams-8b07132b6/" target="_blank" rel="noopener noreferrer">
                   <p className="text-white font-bold font-heading text-xl">Muhammad Shadab Shams</p>
                   <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest mt-1">Lead Architect & Systems Engineer</p>
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
    <section className="py-24 px-6 relative bg-background border-y border-white/5 overflow-hidden">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-12 justify-between">
        <h2 className="text-zinc-400 tracking-[0.2em] font-medium text-xs md:text-sm uppercase shrink-0">Arsenal & Tooling:</h2>
        
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-6 whitespace-nowrap animate-marquee w-max">
            {[...tools, ...tools, ...tools].map((tool, i) => (
              <div key={i} className="px-8 py-4 border border-dashed border-zinc-700 rounded-lg bg-zinc-950/50 hover:bg-zinc-900 transition-colors cursor-pointer text-lg font-medium text-zinc-300 flex items-center gap-3 relative overflow-hidden">
                <CornerPlusIcons />
                <div className="w-2 h-2 rounded-full bg-zinc-600 animate-pulse" />
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
