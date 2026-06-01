"use client";

import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { CALENDLY_URL } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export default function StoryNarrative() {
  return (
    <FlowArt aria-label="AIFLOXIUM Story">
      
      {/* 01: The Problem */}
      <FlowSection aria-label="The Problem" style={{ backgroundColor: '#581C87', color: '#fff' }}>
        <div className="flex flex-col h-full justify-between gap-6 w-full max-w-6xl mx-auto py-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-200 font-mono">01 — The Problem</p>
          <hr className="my-[1.5vw] border-none border-t border-white/20" />
          <div>
            <h1 className="text-[clamp(2.5rem,7vw,7rem)] font-heading font-black leading-[0.85] uppercase tracking-tighter text-white">
              Stop the
              <br />
              manual
              <br />
              chaos.
            </h1>
          </div>
          <hr className="my-[1.5vw] border-none border-t border-white/20" />
          <p className="max-w-[65ch] text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed text-purple-100">
            Your team is burning 20+ hours weekly on repetitive manual tasks, copying data between disconnected systems. Lead response times lag, and payroll bloat is killing your margins.
          </p>
          <hr className="my-[1.5vw] border-none border-t border-white/20" />
          
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-white font-mono">Hours Wasted</p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed text-purple-200">
                Wasted efforts on data synchronization, manual invoicing, and repetitive administration tasks.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-white font-mono">Lead Leakage</p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed text-purple-200">
                Slow responses cost conversions. Leads left cold for over 5 minutes drop conversion rates by 80%.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-white font-mono">Payroll Bloat</p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed text-purple-200">
                Adding headcount to manage tedious tasks increases overhead instead of expanding scaling capacity.
              </p>
            </div>
          </div>
        </div>
      </FlowSection>

      {/* 02: The Mission */}
      <FlowSection aria-label="The Mission" style={{ backgroundColor: '#FF6B00', color: '#fff' }}>
        <div className="flex flex-col h-full justify-between gap-6 w-full max-w-6xl mx-auto py-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-100 font-mono">02 — The Mission</p>
          <hr className="my-[1.5vw] border-none border-t border-white/25" />
          <div>
            <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-heading font-black leading-[0.85] uppercase tracking-tighter text-white">
              Autonomous
              <br />
              Systems.
              <br />
              24/7 Run.
            </h2>
          </div>
          <hr className="my-[1.5vw] border-none border-t border-white/25" />
          <p className="max-w-[65ch] text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed text-orange-50">
            Founded by Agentic Systems Developer Shadab Shams, AIFLOXIUM builds secure agentic architectures and Agentic OS systems. We replace fragile manual tasks with systems that run autonomously.
          </p>
          <hr className="my-[1.5vw] border-none border-t border-white/25" />
          
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-white font-mono">Agentic OS</p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed text-orange-100">
                Autonomous operating systems running on secure private infrastructure to automate complex business pipelines.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-white font-mono">Conversational Voice</p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed text-orange-100">
                Sub-500ms latency voice agents that answer, qualify, and book inbound leads in real-time.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-white font-mono">Bespoke Portals</p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed text-orange-100">
                Next.js & Supabase custom portals and database tools engineered in weeks, replacing spreadsheets.
              </p>
            </div>
          </div>
        </div>
      </FlowSection>

      {/* 03: Outcomes */}
      <FlowSection aria-label="Outcomes" style={{ backgroundColor: '#130716', color: '#fff' }}>
        <div className="flex flex-col h-full justify-between gap-6 w-full max-w-6xl mx-auto py-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange font-mono">03 — Outcomes</p>
          <hr className="my-[1.5vw] border-none border-t border-white/10" />
          <div>
            <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-heading font-black leading-[0.85] uppercase tracking-tighter text-brand-orange">
              Scale
              <br />
              Capacity.
              <br />
              Autopilot.
            </h2>
          </div>
          <hr className="my-[1.5vw] border-none border-t border-white/10" />
          <p className="max-w-[65ch] text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed text-zinc-300">
            Operational scaling on autopilot. I design systems that secure your data, eliminate entry errors, and guarantee a positive ROI.
          </p>
          <hr className="my-[1.5vw] border-none border-t border-white/10" />
          
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-white font-mono">Speed-to-Lead</p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed text-zinc-400">
                Auto-qualify and contact hot leads in under 90 seconds, securing your sales pipeline immediately.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-white font-mono">85% OCR Invoices</p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed text-zinc-400">
                AI extracts data from PDF invoices and updates booking/accounting with zero manual entry errors.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-white font-mono">CRM Lead Gen</p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed text-zinc-400">
                Automatically extract, enrich, and sync 500+ qualified leads weekly to your CRM with zero research.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-between items-center gap-6 mt-auto pt-6 border-t border-white/10">
            <span className="text-zinc-500 text-xs font-mono font-bold tracking-widest uppercase">✓ MEASURED BY METRICS</span>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-brand-orange py-2 pl-6 pr-2 text-xs font-bold uppercase tracking-widest text-white transition-all hover:gap-3 hover:bg-white hover:text-black">
              Book Discovery Call
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110 group-hover:bg-brand-orange text-brand-orange group-hover:text-white">
                <ArrowRight className="h-3 w-3" />
              </span>
            </a>
          </div>
        </div>
      </FlowSection>

    </FlowArt>
  );
}
