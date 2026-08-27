"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, AlertCircle, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

interface BenchmarkData {
  name: string;
  maker: string;
  binaryScore: number;
  partialScore: number;
  status: string;
  highlight?: boolean;
}

const BENCHMARKS: BenchmarkData[] = [
  {
    name: "Claude Opus 4.8",
    maker: "Anthropic",
    binaryScore: 20.6,
    partialScore: 54.8,
    status: "Category Leader",
    highlight: true,
  },
  {
    name: "Claude 3.7 Sonnet",
    maker: "Anthropic",
    binaryScore: 18.2,
    partialScore: 48.5,
    status: "Live Benchmark",
  },
  {
    name: "OpenAI Operator",
    maker: "OpenAI",
    binaryScore: 16.4,
    partialScore: 43.1,
    status: "Live Benchmark",
  },
  {
    name: "Manus Pro VM",
    maker: "Manus AI",
    binaryScore: 15.1,
    partialScore: 41.0,
    status: "Live Benchmark",
  },
  {
    name: "Grok Bot",
    maker: "SpaceXAI",
    binaryScore: 0,
    partialScore: 0,
    status: "Unmeasured / No Data",
  },
];

export const AgentBenchmarkVisualizer = ({ className }: { className?: string }) => {
  const [metric, setMetric] = useState<"binary" | "partial">("binary");

  return (
    <div className={cn("my-10 md:my-14 relative group", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 p-4 sm:p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-zinc-950 border border-[#7B2CBF]/30 text-white shadow-2xl overflow-hidden"
      >
        {/* Glow Effects */}
        <div className="pointer-events-none absolute top-0 left-0 w-72 h-72 bg-[#7B2CBF]/15 rounded-full blur-[90px] -ml-20 -mt-20" />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 pb-6 md:pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B2CBF]/20 border border-[#7B2CBF]/40 mb-2 md:mb-3">
              <BarChart3 className="w-3.5 h-3.5 text-[#E0AAFF]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E0AAFF] font-black">
                OSWorld 2.0 Benchmark Data
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-black text-white tracking-tight">
              Autonomous Agent Completion Ceiling
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm font-inter font-light mt-1">
              108 multi-hour Computer Use tasks across 31 environments (500-step budget).
            </p>
          </div>

          {/* Metric Switcher */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 border border-white/10 p-1.5 rounded-full self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setMetric("binary")}
              className={cn(
                "px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-bold uppercase transition-all whitespace-nowrap cursor-pointer",
                metric === "binary" ? "bg-[#7B2CBF] text-white shadow-md" : "text-zinc-400 hover:text-white"
              )}
            >
              Binary End-to-End %
            </button>
            <button
              onClick={() => setMetric("partial")}
              className={cn(
                "px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-bold uppercase transition-all whitespace-nowrap cursor-pointer",
                metric === "partial" ? "bg-[#7B2CBF] text-white shadow-md" : "text-zinc-400 hover:text-white"
              )}
            >
              Partial Checkpoints %
            </button>
          </div>
        </div>

        {/* Chart Bars */}
        <div className="py-6 md:py-8 space-y-5 md:space-y-6">
          {BENCHMARKS.map((item, idx) => {
            const val = metric === "binary" ? item.binaryScore : item.partialScore;
            const maxVal = metric === "binary" ? 25 : 60;
            const widthPercentage = (val / maxVal) * 100;
            const isUnmeasured = item.binaryScore === 0;

            return (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <span className="font-bold text-white text-xs sm:text-sm">{item.name}</span>
                    <span className="text-zinc-500 text-[10px] sm:text-xs">({item.maker})</span>
                    {item.highlight && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-bold">
                        Top Benchmark
                      </span>
                    )}
                  </div>
                  <div className="font-bold shrink-0">
                    {isUnmeasured ? (
                      <span className="text-rose-400 flex items-center gap-1 text-xs">
                        <AlertCircle className="w-3.5 h-3.5" /> No Data
                      </span>
                    ) : (
                      <span className="text-[#E0AAFF] text-sm sm:text-base">{val}%</span>
                    )}
                  </div>
                </div>

                <div className="h-3.5 sm:h-4 bg-white/5 rounded-full overflow-hidden relative p-0.5 border border-white/10">
                  {!isUnmeasured ? (
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${widthPercentage}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className={cn(
                        "h-full rounded-full transition-all",
                        item.highlight
                          ? "bg-gradient-to-r from-[#7B2CBF] to-emerald-400 shadow-[0_0_15px_#7B2CBF]"
                          : "bg-gradient-to-r from-[#7B2CBF]/60 to-[#7B2CBF]"
                      )}
                    />
                  ) : (
                    <div className="h-full w-full bg-rose-500/10 border border-rose-500/30 rounded-full flex items-center justify-center">
                      <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-widest text-rose-300 font-bold">
                        Not Measured / Unverified
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 sm:gap-3 text-xs text-zinc-300 font-inter font-light">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-[11px] sm:text-xs leading-relaxed">
            <strong className="text-white font-mono uppercase">Key Benchmark Finding:</strong> No persistent agent on Earth currently completes more than 21% of long-horizon OSWorld tasks end-to-end. Unattended multi-hour execution remains an unsolved industry bottleneck.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
