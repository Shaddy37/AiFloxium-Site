"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Calculator, Share2, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const BlogQuickActions = ({ className }: { className?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleShareX = () => {
    const text = encodeURIComponent(
      "Grok Bot Review 2026: Pricing, Access, and the Honest Risks by @ShadabLoveAi"
    );
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  };

  const handleCopyQuote = () => {
    const quote =
      "Grok Bot's architecture is the right bet. The purchase is not, yet. A $120 seat floor is roughly 7x the cheapest capable competitor with no published benchmark.";
    navigator.clipboard.writeText(quote);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className={cn("my-8 relative z-20", className)}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-4 sm:p-6 rounded-2xl bg-zinc-950 border border-[#7B2CBF]/40 text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#7B2CBF] animate-ping" />
          <span className="text-xs font-mono uppercase tracking-widest font-black text-[#E0AAFF]">
            Quick Actions
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-2 text-xs font-mono w-full sm:w-auto">
          <a
            href="#verdict"
            className="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#7B2CBF]/20 hover:border-[#7B2CBF]/40 text-zinc-200 hover:text-white transition-all flex items-center justify-center sm:justify-start gap-2 cursor-pointer active:scale-95"
          >
            <Award className="w-4 h-4 text-[#7B2CBF] shrink-0" />
            <span className="truncate">Jump to Verdict</span>
          </a>

          <a
            href="#pricing-arithmetic"
            className="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#7B2CBF]/20 hover:border-[#7B2CBF]/40 text-zinc-200 hover:text-white transition-all flex items-center justify-center sm:justify-start gap-2 cursor-pointer active:scale-95"
          >
            <Calculator className="w-4 h-4 text-[#7B2CBF] shrink-0" />
            <span className="truncate">Jump to Pricing Math</span>
          </a>

          <button
            onClick={handleShareX}
            className="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#7B2CBF]/20 hover:border-[#7B2CBF]/40 text-zinc-200 hover:text-white transition-all flex items-center justify-center sm:justify-start gap-2 cursor-pointer active:scale-95"
          >
            <Share2 className="w-4 h-4 text-[#7B2CBF] shrink-0" />
            <span className="truncate">Share on X (Twitter)</span>
          </button>

          <button
            onClick={handleCopyQuote}
            className="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#7B2CBF]/20 hover:border-[#7B2CBF]/40 text-zinc-200 hover:text-white transition-all flex items-center justify-center sm:justify-start gap-2 cursor-pointer active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-300 font-bold truncate">Quote Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#7B2CBF] shrink-0" />
                <span className="truncate">Copy Key Takeaway</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
