"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { BookCallButton } from "@/components/popups/book-call-button";
import { cn } from "@/lib/utils";
import { CALENDLY_URL } from "@/lib/site";

interface PremiumCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
  className?: string;
}

export const PremiumCTA = ({
  title = "Ready to Automate Your Workflow?",
  description = "Connect with our core team to audit your existing operations. We deploy custom, cost-optimized agentic solutions tailored to your infrastructure.",
  buttonText = "Book Strategy Audit",
  href = CALENDLY_URL,
  className,
}: PremiumCTAProps) => {
  return (
    <div className={cn("my-16 relative group", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#120428] via-[#1E0938] to-[#0A0214] text-white overflow-hidden border border-[#7B2CBF]/30 shadow-[0_20px_60px_rgba(123,44,191,0.25)]"
      >
        {/* Glow Effects */}
        <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-[#7B2CBF]/20 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-[#7B2CBF]/35 transition-colors duration-700" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 bg-[#9D4EDD]/15 rounded-full blur-[80px] -ml-20 -mb-20" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7B2CBF]/20 border border-[#7B2CBF]/40 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#E0AAFF] animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#E0AAFF] font-black">
                Agentic Systems Audit
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-heading font-black tracking-[-0.035em] text-white leading-tight">
              {title}
            </h3>

            <p className="text-zinc-300 font-inter text-sm md:text-base leading-relaxed font-light">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-[11px] font-mono text-[#E0AAFF]/80 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7B2CBF]" /> 100% Confidential
              </span>
              <span>•</span>
              <span>1-on-1 Founder Session</span>
            </div>
          </div>

          <div className="w-full md:w-auto flex-shrink-0">
            <BookCallButton
              externalHref={href}
              className="group/btn w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#7B2CBF] hover:bg-[#9D4EDD] text-white rounded-full font-inter font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg shadow-[#7B2CBF]/40 hover:shadow-[#7B2CBF]/70 hover:scale-[1.02] active:scale-98 cursor-pointer"
            >
              <span className="relative z-10">{buttonText}</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
            </BookCallButton>
          </div>
        </div>
      </motion.div>

      {/* Outer ambient glow */}
      <div className="absolute -inset-2 bg-[#7B2CBF]/10 blur-3xl rounded-[3rem] -z-10 group-hover:bg-[#7B2CBF]/20 transition-colors duration-500" />
    </div>
  );
};

