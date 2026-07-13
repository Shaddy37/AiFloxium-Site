"use client";

import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { CALENDLY_URL } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export default function StoryNarrative() {
  return (
    <FlowArt aria-label="AIFLOXIUM Story">
      
      {/* 01: The Problem */}
      <FlowSection aria-label="The Problem" style={{ backgroundColor: '#0a0608', color: '#fff' }}>
        <div className="flex flex-col h-full justify-between gap-6 w-full max-w-6xl mx-auto py-4">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/50 font-inter">01 — The Problem</p>
          <hr className="my-[1.5vw] border-none border-t border-white/20" />
          <div>
            <h1 className="text-[clamp(2.5rem,7vw,7rem)] font-instrument text-white leading-[0.85] tracking-tight">
              Stop the
              <br />
              manual
              <br />
              <span className="font-instrument text-[#E0AAFF] italic">chaos.</span>
            </h1>
          </div>
          <hr className="my-[1.5vw] border-none border-t border-white/20" />
          <p className="max-w-[65ch] text-[clamp(1rem,2vw,1.4rem)] font-inter font-light leading-relaxed text-white/70">
            Your team is burning 20+ hours weekly on repetitive manual tasks, copying data between disconnected systems. Lead response times lag, and payroll bloat is killing your margins.
          </p>
          <hr className="my-[1.5vw] border-none border-t border-white/20" />
          
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 font-inter">Hours Wasted</p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed text-white/50 font-inter font-light">
                Wasted efforts on data synchronization, manual invoicing, and repetitive administration tasks.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 font-inter">Lead Leakage</p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed text-white/50 font-inter font-light">
                Slow responses cost conversions. Leads left cold for over 5 minutes drop conversion rates by 80%.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 font-inter">Payroll Bloat</p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed text-white/50 font-inter font-light">
                Adding headcount to manage tedious tasks increases overhead instead of expanding scaling capacity.
              </p>
            </div>
          </div>
        </div>
      </FlowSection>

      {/* 02: The Mission */}
      <FlowSection aria-label="The Mission" style={{ backgroundColor: '#1A0D30', color: '#fff' }}>
        <div className="flex flex-col h-full justify-between gap-6 w-full max-w-6xl mx-auto py-4">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/50 font-inter">02 — The Mission</p>
          <hr className="my-[1.5vw] border-none border-t border-white/20" />
          <div>
            <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-instrument text-white leading-[0.85] tracking-tight">
              Autonomous
              <br />
              systems.
              <br />
              <span className="font-instrument text-[#E0AAFF] italic">24/7 Run.</span>
            </h2>
          </div>
          <hr className="my-[1.5vw] border-none border-t border-white/20" />
          <p className="max-w-[65ch] text-[clamp(1rem,2vw,1.4rem)] font-inter font-light leading-relaxed text-white/70">
            Founded under AIFLOXIUM, I build secure agentic architectures and Agentic OS systems. I replace fragile manual tasks with systems that run autonomously.
          </p>
          <hr className="my-[1.5vw] border-none border-t border-white/20" />
          
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 font-inter">Agentic OS</p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed text-white/50 font-inter font-light">
                Autonomous operating systems running on secure private infrastructure to automate complex business pipelines.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 font-inter">Conversational Voice</p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed text-white/50 font-inter font-light">
                Sub-500ms latency voice agents that answer, qualify, and book inbound leads in real-time.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 font-inter">Bespoke Portals</p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed text-white/50 font-inter font-light">
                Next.js & Supabase custom portals and database tools engineered in weeks, replacing spreadsheets.
              </p>
            </div>
          </div>
        </div>
      </FlowSection>

      {/* 03: Outcomes */}
      <FlowSection aria-label="Outcomes" style={{ backgroundColor: '#09040F', color: '#fff' }}>
        <div className="flex flex-col h-full justify-between gap-6 w-full max-w-6xl mx-auto py-4">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#E0AAFF] font-inter font-semibold">03 — Outcomes</p>
          <hr className="my-[1.5vw] border-none border-t border-white/20" />
          <div>
            <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-instrument text-white leading-[0.85] tracking-tight">
              Scale
              <br />
              capacity.
              <br />
              <span className="font-instrument text-[#E0AAFF] italic">Autopilot.</span>
            </h2>
          </div>
          <hr className="my-[1.5vw] border-none border-t border-white/20" />
          <p className="max-w-[65ch] text-[clamp(1rem,2vw,1.4rem)] font-inter font-light leading-relaxed text-white/70">
            Operational scaling on autopilot. I design systems that secure your data, eliminate entry errors, and guarantee a positive ROI.
          </p>
          <hr className="my-[1.5vw] border-none border-t border-white/20" />
          
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 font-inter">Speed-to-Lead</p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed text-white/50 font-inter font-light">
                Auto-qualify and contact hot leads in under 90 seconds, securing your sales pipeline immediately.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 font-inter">85% OCR Invoices</p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed text-white/50 font-inter font-light">
                AI extracts data from PDF invoices and updates booking/accounting with zero manual entry errors.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 font-inter">CRM Lead Gen</p>
              <p className="text-[clamp(0.85rem,1.2vw,1rem)] leading-relaxed text-white/50 font-inter font-light">
                Automatically extract, enrich, and sync 500+ qualified leads weekly to your CRM with zero research.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-between items-center gap-6 mt-auto pt-6 border-t border-white/20">
            <span className="text-white/40 text-[10px] font-semibold tracking-widest uppercase font-inter">✓ MEASURED BY METRICS</span>
            <a 
              href={CALENDLY_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group inline-flex items-center gap-3 rounded-full bg-white text-black px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#E0AAFF] transition-all duration-300 button-glow"
            >
              Book Discovery Call
              <ArrowRight className="h-3.5 w-3.5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </FlowSection>

    </FlowArt>
  );
}
