"use client"

import React from 'react'
import { FocusRail, type FocusRailItem } from '@/components/ui/focus-rail'

const PROJECTS: FocusRailItem[] = [
  {
    id: 1,
    title: "n8n Sales Automation",
    description: "Built a fully autonomous n8n pipeline that enriches incoming leads via Clearbit and instantly fires custom Claude-generated emails.",
    meta: "Workflow Automation • AI",
    imageSrc: "/images/nano-banana/project-automation.webp",
    href: "/projects",
  },
  {
    id: 2,
    title: "Claude SaaS Dashboard",
    description: "Developed a stunning, full-stack micro-SaaS dashboard in 4 days using Claude Code and Cursor, bypassing traditional slow frontend engineering.",
    meta: "Vibe Coding • SaaS",
    imageSrc: "/images/nano-banana/project-logic.webp",
    href: "/projects",
  },
  {
    id: 3,
    title: "Financial Data Extractor",
    description: "Automated the extraction of unstructured PDF invoices via an automated webhook loop, structured by LLMs, and injected directly into accounting software.",
    meta: "LLM Orchestration • Fintech",
    imageSrc: "/images/nano-banana/project-scale.webp",
    href: "/projects",
  },
  {
    id: 4,
    title: "Automated Outbound Agent",
    description: "Deployed a series of AI agents that scrape dynamic property listings and synthesize personalized outreach SMS sequences on autopilot.",
    meta: "Multi-Agent System • Real Estate",
    imageSrc: "/images/nano-banana/project-secure.webp",
    href: "/projects",
  },
  {
    id: 5,
    title: "Autonomous Voice Agent",
    description: "High-fidelity voice agents powered by Vapi and Retell AI for 24/7 intelligent qualification and support with zero latency.",
    meta: "Voice AI • Automation",
    imageSrc: "/images/nano-banana/project-voice.webp",
    href: "/projects",
  },
];

const ProjectFocus = () => {
  return (
    <section className="relative py-24 md:py-48 bg-background overflow-hidden border-t border-white/5">
      {/* Background Geometric Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 mb-20 text-center relative z-10">
        <h2 className="text-zinc-500 tracking-[0.4em] font-medium text-[10px] md:text-xs uppercase mb-8 flex items-center justify-center gap-6">
          <span className="w-12 h-[1px] bg-zinc-800" /> Operational Excellence
          <span className="w-12 h-[1px] bg-zinc-800" />
        </h2>
        <h3 className="text-5xl md:text-8xl font-heading font-black text-white tracking-tighter leading-[0.85] mb-8">
          SYSTEMS WE <br /> <span className="text-gradient">HAVE DEPLOYED.</span>
        </h3>
        <p className="text-zinc-500 font-medium max-w-2xl mx-auto text-sm md:text-lg opacity-80 leading-relaxed">
          Proprietary architectures and agentic workflows designed to eradicate 
          bottlenecks and scale intelligence across your entire operational stack.
        </p>
      </div>

      <div className="w-full relative z-10">
        <FocusRail 
          items={PROJECTS} 
          autoPlay={true} 
          loop={true} 
          interval={6000}
        />
      </div>
      
      {/* Bottom Geometric Line */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  )
}

export default ProjectFocus;
