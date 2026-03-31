"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Zap } from "lucide-react";

export default function ChaosToClarity() {
    const containerRef = useRef(null);

    const chaosPaths = [
        "M0,100 Q150,50 250,200 T450,200",
        "M0,250 C120,400 300,100 450,200",
        "M0,350 Q200,300 350,50 T450,200",
        "M0,50 C100,-50 200,350 450,200",
        "M0,180 Q80,250 180,50 Q280,-20 450,200",
        "M0,300 C150,150 250,380 450,200",
        "M0,120 Q200,400 300,100 Q380,-10 450,200"
    ];

    const clarityPaths = [
        "M550,200 L600,50 L1000,50",
        "M550,200 L600,100 L1000,100",
        "M550,200 L600,150 L1000,150",
        "M550,200 L600,200 L1000,200",
        "M550,200 L600,250 L1000,250",
        "M550,200 L600,300 L1000,300",
        "M550,200 L600,350 L1000,350"
    ];

    return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-background border-y border-white/5">
      <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 mb-16 text-center md:text-left relative z-10">
        <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tighter text-white mb-6 uppercase">
          From Operational Chaos <br />
          <span className="text-zinc-500">To Deterministic Clarity.</span>
        </h2>
        <p className="text-xl text-zinc-400 font-medium max-w-2xl">
          Legacy systems are fragmented, costly, and unpredictable. Aifloxium ingests chaotic workflows and outputs mathematically perfect, automated data structures.
        </p>
      </div>

      <div className="w-full overflow-hidden relative h-[500px] flex items-center justify-center">
        {/* SVG Visualization Layer */}
        <svg
          className="absolute inset-0 w-full h-[500px]"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="fadeChaos" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="20%" stopColor="#27272a" />
              <stop offset="100%" stopColor="#27272a" />
            </linearGradient>
            <linearGradient id="fadeClarity" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="80%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
               <feGaussianBlur stdDeviation="4" result="blur" />
               <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
               </feMerge>
            </filter>
          </defs>

          {/* BACKGROUND PATHS (CHAOS) */}
          {chaosPaths.map((d, i) => (
            <path
              key={`bg-chaos-${i}`}
              d={d}
              stroke="url(#fadeChaos)"
              strokeWidth="2"
              className="opacity-40"
            />
          ))}

           {/* ANIMATED PACKETS (CHAOS) */}
           {chaosPaths.map((d: string, i: number) => (
             <motion.path
               key={`anim-chaos-${i}`}
               d={d}
               stroke="rgba(255,255,255,0.3)"
               strokeWidth="3"
               strokeLinecap="round"
               initial={{ pathLength: 0.05, pathOffset: 0 }}
               whileInView={{ pathOffset: 1 }}
               viewport={{ once: false, margin: "200px" }}
               transition={{
                 duration: 3 + (i % 3), // deterministic instead of random for stability
                 repeat: Infinity,
                 ease: "linear",
                 delay: (i % 4) * 0.5,
               }}
             />
           ))}

          {/* BACKGROUND PATHS (CLARITY) */}
          {clarityPaths.map((d, i) => (
            <path
              key={`bg-clear-${i}`}
              d={d}
              stroke="url(#fadeClarity)"
              strokeWidth="2"
            />
          ))}

          {/* ANIMATED PACKETS (CLARITY) */}
          {clarityPaths.map((d, i) => (
            <motion.path
              key={`anim-clear-${i}`}
              d={d}
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0.15, pathOffset: 0 }}
              whileInView={{ pathOffset: 1 }}
              viewport={{ once: false, margin: "200px" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2,
              }}
              filter="url(#glow)"
            />
          ))}
        </svg>

        {/* The Nexus (Center Processor UI) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div
            initial={{ scale: 0.95, opacity: 0.8 }}
            whileInView={{ scale: [0.95, 1.05, 0.95], opacity: [0.8, 1, 0.8] }}
            viewport={{ once: false, margin: "100px" }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-white/20 bg-black/40 backdrop-blur-xl flex items-center justify-center p-8 relative overflow-hidden"
            style={{ boxShadow: "0 0 60px 0 rgba(255, 255, 255, 0.1)" }}
          >
             {/* Spinning inner dashed ring */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute inset-2 rounded-full border border-dashed border-white/20"
            />
             {/* Center Core */}
            <div className="w-full h-full rounded-full bg-gradient-to-b from-white/10 to-transparent flex flex-col items-center justify-center border border-white/30 relative z-10 shadow-[0_0_30px_rgba(255,255,255,0.05)_inset]">
                <Zap className="w-8 h-8 text-white mb-2" />
                <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">Nexus Engine</span>
                <div className="text-xs font-bold text-white mt-1 uppercase tracking-widest">Processing...</div>
            </div>
          </motion.div>
        </div>

        {/* Label Overlays */}
        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 glass-card p-4 hidden md:block border-white/5 opacity-80 pointer-events-none">
           <LayoutGrid className="w-6 h-6 text-zinc-500 mb-2" />
           <div className="text-xs font-mono text-zinc-400 tracking-widest uppercase">Input: Legacy Noise</div>
        </div>

        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 glass-card bg-white text-black p-4 hidden md:block rounded-xl border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.2)] pointer-events-none">
           <ShieldCheck className="w-6 h-6 text-black mb-2" />
           <div className="text-xs font-mono font-bold tracking-widest uppercase">Output: Validated Data</div>
        </div>

      </div>
    </section>
  );
}

// Quick inline icon component to avoid adding more external icons
interface LayoutGridProps {
    className?: string;
    width?: number | string;
    height?: number | string;
}

function LayoutGrid(props: LayoutGridProps) {
    const { className, width = 24, height = 24, ...rest } = props;
    return (
        <svg
            className={className}
            width={width}
            height={height}
            {...rest}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
    );
}
