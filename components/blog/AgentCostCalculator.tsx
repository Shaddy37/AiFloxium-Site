"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, TrendingDown, Users, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const AgentCostCalculator = ({ className }: { className?: string }) => {
  const [seats, setSeats] = useState<number>(10);
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  const discountFactor = isAnnual ? 0.8 : 1.0;

  const grokMonthlyPerSeat = 120 * discountFactor;
  const claudeMonthlyPerSeat = 17 * discountFactor;
  const chatgptMonthlyPerSeat = 20 * discountFactor;
  const manusMonthlyPerSeat = 30 * discountFactor;

  const grokAnnualTotal = Math.round(grokMonthlyPerSeat * seats * 12);
  const claudeAnnualTotal = Math.round(claudeMonthlyPerSeat * seats * 12);
  const chatgptAnnualTotal = Math.round(chatgptMonthlyPerSeat * seats * 12);
  const manusAnnualTotal = Math.round(manusMonthlyPerSeat * seats * 12);

  const annualSavings = grokAnnualTotal - claudeAnnualTotal;

  return (
    <div className={cn("my-10 md:my-14 relative group", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 p-4 sm:p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-gradient-to-br from-zinc-950 via-[#130624] to-zinc-950 border border-[#7B2CBF]/30 text-white shadow-2xl overflow-hidden"
      >
        {/* Glow Effects */}
        <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-[#7B2CBF]/20 rounded-full blur-[100px] -mr-20 -mt-20" />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 pb-6 md:pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B2CBF]/20 border border-[#7B2CBF]/40 mb-2 md:mb-3">
              <Calculator className="w-3.5 h-3.5 text-[#E0AAFF]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E0AAFF] font-black">
                Interactive Cost Arithmetic
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-black text-white tracking-tight">
              Persistent Agent Budget Simulator
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm font-inter font-light mt-1">
              Adjust team size to calculate 12-month seat commitments vs alternatives.
            </p>
          </div>

          {/* Billing Switcher */}
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-1.5 rounded-full self-start md:self-auto">
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase transition-all cursor-pointer",
                !isAnnual ? "bg-[#7B2CBF] text-white shadow-md" : "text-zinc-400 hover:text-white"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase transition-all flex items-center gap-1.5 cursor-pointer",
                isAnnual ? "bg-[#7B2CBF] text-white shadow-md" : "text-zinc-400 hover:text-white"
              )}
            >
              <span>Annual</span>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="py-6 md:py-8 space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <Users className="w-4 h-4 text-[#7B2CBF]" />
                Team Seat Count
              </span>
              <span className="text-lg md:text-xl font-bold text-[#E0AAFF]">
                {seats} {seats === 1 ? "Seat" : "Seats"}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={seats}
              onChange={(e) => setSeats(parseInt(e.target.value))}
              className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#7B2CBF]"
            />
            <div className="flex justify-between text-[10px] font-mono text-zinc-500">
              <span>1 Seat</span>
              <span>25 Seats</span>
              <span>50 Seats</span>
            </div>
          </div>

          {/* Savings Highlight Box */}
          <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#7B2CBF]/20 via-[#7B2CBF]/10 to-transparent border border-[#7B2CBF]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider font-bold">
                <TrendingDown className="w-4 h-4" />
                Annual Cost Premium Gap
              </div>
              <p className="text-zinc-300 text-xs font-inter font-light">
                Difference between Grok Bot (Cursor Teams) and Claude Cowork for {seats} seats:
              </p>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-2xl sm:text-3xl font-black text-emerald-300 font-mono">
                +${annualSavings.toLocaleString()}
              </div>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                / Year Extra Cost
              </span>
            </div>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {/* Grok Bot */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-[#7B2CBF]/50 relative">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#7B2CBF]/30 border border-[#7B2CBF]/50 text-[9px] font-mono text-[#E0AAFF] font-bold uppercase">
                Gated Tiers
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">SpaceXAI</div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">Grok Bot</h4>
              <div className="text-xl sm:text-2xl font-black text-white font-mono mb-1">
                ${grokAnnualTotal.toLocaleString()}
              </div>
              <p className="text-[11px] text-zinc-400 font-mono">
                ${grokMonthlyPerSeat}/seat/mo • Annual
              </p>
            </div>

            {/* Claude Cowork */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-emerald-500/30 relative">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[9px] font-mono text-emerald-300 font-bold uppercase">
                Best Value
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">Anthropic</div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">Claude Cowork</h4>
              <div className="text-xl sm:text-2xl font-black text-emerald-300 font-mono mb-1">
                ${claudeAnnualTotal.toLocaleString()}
              </div>
              <p className="text-[11px] text-zinc-400 font-mono">
                ${claudeMonthlyPerSeat}/seat/mo • Annual
              </p>
            </div>

            {/* ChatGPT Work */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">OpenAI</div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">ChatGPT Work</h4>
              <div className="text-xl sm:text-2xl font-black text-white font-mono mb-1">
                ${chatgptAnnualTotal.toLocaleString()}
              </div>
              <p className="text-[11px] text-zinc-400 font-mono">
                ${chatgptMonthlyPerSeat}/seat/mo • Annual
              </p>
            </div>

            {/* Manus */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">Manus AI</div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">Manus Pro</h4>
              <div className="text-xl sm:text-2xl font-black text-white font-mono mb-1">
                ${manusAnnualTotal.toLocaleString()}
              </div>
              <p className="text-[11px] text-zinc-400 font-mono">
                ${manusMonthlyPerSeat}/seat/mo • Annual
              </p>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-[10px] sm:text-[11px] text-zinc-400 font-mono">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#7B2CBF] shrink-0" />
          <span>Prices based on published vendor pricing pages as of August 12, 2026.</span>
        </div>
      </motion.div>
    </div>
  );
};
