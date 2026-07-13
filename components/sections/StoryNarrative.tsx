"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/site";

export default function StoryNarrative() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this 400vh section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map scroll progress to horizontal translation
  // 3 panels = 300vw total width. We translate from 0% to -66.66% (which is 200vw).
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#0a0608]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex h-screen w-[300vw]">
          
          {/* 01: The Problem */}
          <div className="w-screen h-full flex items-center justify-center bg-[#0a0608] shrink-0 p-6">
            <div className="flex flex-col h-[80vh] justify-between gap-6 w-full max-w-6xl mx-auto py-4">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/50 font-inter">01 — The Problem</p>
              <hr className="my-[1.5vw] border-none border-t border-white/20" />
              <div>
                <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-instrument text-white leading-[0.85] tracking-[-0.04em] text-balance">
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
          </div>

          {/* 02: The Mission */}
          <div className="w-screen h-full flex items-center justify-center bg-[#1A0D30] shrink-0 p-6 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#351658]/20 via-transparent to-transparent pointer-events-none" />
            <div className="flex flex-col h-[80vh] justify-between gap-6 w-full max-w-6xl mx-auto py-4 relative z-10">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/50 font-inter">02 — The Mission</p>
              <hr className="my-[1.5vw] border-none border-t border-white/20" />
              <div>
                <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-instrument text-white leading-[0.85] tracking-[-0.04em] text-balance">
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
          </div>

          {/* 03: Outcomes */}
          <div className="w-screen h-full flex items-center justify-center bg-[#09040F] shrink-0 p-6 relative">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#7B2CBF]/10 via-transparent to-transparent pointer-events-none" />
             <div className="flex flex-col h-[80vh] justify-between gap-6 w-full max-w-6xl mx-auto py-4 relative z-10">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#E0AAFF] font-inter">03 — Outcomes</p>
              <hr className="my-[1.5vw] border-none border-t border-white/20" />
              <div>
                <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-instrument text-white leading-[0.85] tracking-[-0.04em] text-balance">
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
                  className="group inline-flex items-center gap-3 rounded-full bg-white text-black px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#E0AAFF] transition-[transform,background-color,filter] duration-200 ease-[var(--ease-out)] active:scale-[0.97] button-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0AAFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09040F]"
                >
                  Book Discovery Call
                  <ArrowRight className="h-3.5 w-3.5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
