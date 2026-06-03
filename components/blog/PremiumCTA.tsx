"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
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
  title = "Ready to Automate?",
  description = "Connect with our core team to audit your existing workflows. We deploy custom agentic solutions in 14 days or less.",
  buttonText = "Initiate Audit",
  href = CALENDLY_URL,
  className,
}: PremiumCTAProps) => {
  return (
    <div className={cn("my-16 relative group", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 p-8 md:p-12 rounded-[2.5rem] bg-white text-black overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-plum/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-brand-plum/10 transition-colors duration-500" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-brand-plum/30" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-plum font-black">The Directive</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-heading font-black tracking-[-0.035em] mb-4 leading-[0.95] text-black">
              {title}
            </h3>
            <p className="text-black font-bold text-lg leading-relaxed">
              {description}
            </p>
          </div>

          <BookCallButton
            externalHref={href}
            className="group/btn relative inline-flex items-center gap-3 px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-plum transition-all overflow-hidden shadow-xl hover:shadow-brand-plum/20"
          >
            <span className="relative z-10">{buttonText}</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
          </BookCallButton>
        </div>
      </motion.div>
      
      {/* Decorative Glow */}
      <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-[3rem] -z-10 group-hover:bg-white/10 transition-colors duration-500" />
    </div>
  );
};
