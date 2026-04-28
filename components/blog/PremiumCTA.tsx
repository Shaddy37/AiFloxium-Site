"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
  href = "/#initiate",
  className,
}: PremiumCTAProps) => {
  return (
    <div className={cn("my-16 relative group", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 p-8 md:p-12 rounded-[2.5rem] bg-white text-black overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-100 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-zinc-200 transition-colors duration-500" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-zinc-300" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">The Directive</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-heading font-black tracking-tighter mb-4 leading-[0.9] uppercase">
              {title}
            </h3>
            <p className="text-zinc-600 font-medium text-lg leading-relaxed">
              {description}
            </p>
          </div>

          <Link
            href={href}
            className="group/btn relative inline-flex items-center gap-3 px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-zinc-800 transition-all overflow-hidden"
          >
            <span className="relative z-10">{buttonText}</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-black opacity-0 group-hover/btn:opacity-100 transition-opacity"
              initial={false}
            />
          </Link>
        </div>
      </motion.div>
      
      {/* Decorative Glow */}
      <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-[3rem] -z-10 group-hover:bg-white/10 transition-colors duration-500" />
    </div>
  );
};
