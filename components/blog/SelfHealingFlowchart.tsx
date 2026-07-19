"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  CheckCircle2, 
  RotateCw, 
  Trash2, 
  AlertTriangle, 
  ShieldAlert, 
  Eye, 
  Database, 
  ArrowRight,
  Sparkles
} from "lucide-react";

type PathType = "happy" | "transient" | "fatal";

interface NodeProps {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  active: boolean;
  status: "idle" | "success" | "warning" | "error";
  color: string;
}

function FlowNode({ title, subtitle, icon: Icon, active, status, color }: NodeProps) {
  const statusBorderColor = 
    status === "success" ? "border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]" :
    status === "warning" ? "border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.2)]" :
    status === "error" ? "border-rose-500/50 shadow-[0_0_20px_rgba(239,68,68,0.2)]" :
    active ? "border-brand-plum/50 shadow-[0_0_20px_rgba(136,19,55,0.15)]" :
    "border-white/5";

  const statusBgColor = 
    status === "success" ? "bg-emerald-950/60" :
    status === "warning" ? "bg-amber-950/60" :
    status === "error" ? "bg-rose-950/60" :
    active ? "bg-brand-plum/10" :
    "bg-zinc-900/60";

  return (
    <motion.div 
      layout
      className={`p-4 rounded-2xl border ${statusBorderColor} ${statusBgColor} transition-all duration-300 relative group flex gap-4 items-center w-full md:max-w-xs`}
    >
      <div className={`p-2.5 rounded-xl border ${active ? 'border-white/10 text-white' : 'border-white/5 text-zinc-500'} bg-zinc-950`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-xs font-mono font-black tracking-widest text-zinc-400 uppercase">{title}</h4>
        <p className="text-sm font-bold text-white leading-tight mt-0.5">{subtitle}</p>
      </div>
      
      {active && (
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${color}`}></span>
          <span className={`relative inline-flex rounded-full h-3 w-3 ${color.replace('bg-', 'bg-')}`}></span>
        </span>
      )}
    </motion.div>
  );
}

export function SelfHealingFlowchart() {
  const [selectedPath, setSelectedPath] = useState<PathType>("happy");
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(-1);

  const stepsInfo = {
    happy: [
      { id: 0, title: "Trigger", desc: "Incoming webhook payload matches schema rules." },
      { id: 1, title: "L1: Idempotency", desc: "POSTGRES checks key: unique item, processing permitted." },
      { id: 2, title: "L2: Retries (Skip)", desc: "Node executes smoothly, retries skipped." },
      { id: 3, title: "Success Path", desc: "Commit transactions and update main records." },
      { id: 4, title: "L5: Observability", desc: "Metric 'success' reported; heartbeat reset." }
    ],
    transient: [
      { id: 0, title: "Trigger", desc: "Incoming scheduling payload received." },
      { id: 1, title: "L1: Idempotency", desc: "Key validated. Operates as fresh transaction." },
      { id: 2, title: "L2: Retries (Triggered)", desc: "API returns 503 gateway timeout. Exponential backoff loops back." },
      { id: 3, title: "L2: Jittered Retry", desc: "Second try succeeds. Continue main execution." },
      { id: 4, title: "Success Path", desc: "Commit data safely after recovery." },
      { id: 5, title: "L5: Observability", desc: "Logs recorded with 1 transient retry count." }
    ],
    fatal: [
      { id: 0, title: "Trigger", desc: "Webhook trigger fires payload." },
      { id: 1, title: "L1: Idempotency", desc: "Key verified and registered in database." },
      { id: 2, title: "L2: Retries (Fail)", desc: "API returns 422 (malformed data). Fail-fast rule skips retry." },
      { id: 3, title: "L3: Rollback", desc: "Reversing active completed steps to avoid corrupted state." },
      { id: 4, title: "L4: DLQ Queue", desc: "Failed items routed to quarantine table for inspection." },
      { id: 5, title: "L5: Observability", desc: "Slack pager fired with deep link to failing execution." }
    ]
  };

  const handlePlay = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setActiveStep(0);
    
    const maxSteps = stepsInfo[selectedPath].length;
    let current = 0;
    
    const interval = setInterval(() => {
      current += 1;
      if (current < maxSteps) {
        setActiveStep(current);
      } else {
        clearInterval(interval);
        setIsPlaying(false);
      }
    }, 1200);
  };

  const getStepStatus = (stepId: number) => {
    if (activeStep < stepId) return "idle";
    
    if (selectedPath === "happy") {
      return activeStep >= stepId ? "success" : "idle";
    }
    
    if (selectedPath === "transient") {
      if (stepId === 2 && activeStep >= 2) return "warning";
      return activeStep >= stepId ? "success" : "idle";
    }
    
    if (selectedPath === "fatal") {
      if (stepId === 2 && activeStep >= 2) return "error";
      if (stepId >= 3 && activeStep >= stepId) return "error";
      return activeStep >= stepId ? "success" : "idle";
    }
    
    return "idle";
  };

  return (
    <div className="my-16 rounded-[2.5rem] border border-white/5 bg-zinc-950 p-6 md:p-10 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-plum/5 blur-[120px] -z-10 group-hover:bg-brand-plum/10 transition-all duration-700" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-white/5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/5 mb-3">
             <Sparkles className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
             <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">Interactive Simulator</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase leading-none">Self-Healing Execution</h3>
        </div>
        
        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {(["happy", "transient", "fatal"] as PathType[]).map((path) => (
            <button
              key={path}
              disabled={isPlaying}
              onClick={() => {
                setSelectedPath(path);
                setActiveStep(-1);
              }}
              className={`px-4 py-2.5 rounded-full font-mono text-[10px] uppercase tracking-wider font-bold transition-all border ${
                selectedPath === path
                  ? "bg-brand-plum border-brand-plum text-white shadow-md"
                  : "bg-zinc-900 border-white/5 text-zinc-400 hover:text-white hover:border-white/10 disabled:opacity-50"
              }`}
            >
              {path === "happy" && "Happy Path"}
              {path === "transient" && "Smart Retry"}
              {path === "fatal" && "Rollback & DLQ"}
            </button>
          ))}
          
          <button
            onClick={handlePlay}
            disabled={isPlaying}
            className="ml-2 p-2.5 rounded-full bg-brand-orange text-black font-bold hover:scale-105 active:scale-95 transition-transform disabled:opacity-50 shadow-[0_0_15px_rgba(249,115,22,0.3)]"
          >
            <Play className="w-4 h-4 fill-black" />
          </button>
        </div>
      </div>

      {/* Simulator Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Diagram Area */}
        <div className="lg:col-span-8 flex flex-col md:flex-row md:flex-wrap lg:flex-col gap-6 justify-center items-center relative py-6">
          {/* Vertical layout with dynamic animated line connectors for desktop/tablet */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white/5 -translate-x-1/2 -z-10 hidden lg:block" />
          
          {selectedPath === "happy" && (
            <>
              <FlowNode title="01 // TRIGGER" subtitle="Incoming Webhook" icon={Play} active={activeStep === 0} status={getStepStatus(0)} color="bg-emerald-500" />
              <div className="lg:h-6 w-[2px] bg-white/5 lg:block hidden" />
              <FlowNode title="02 // GUARD" subtitle="L1: Idempotency Key" icon={Database} active={activeStep === 1} status={getStepStatus(1)} color="bg-emerald-500" />
              <div className="lg:h-6 w-[2px] bg-white/5 lg:block hidden" />
              <FlowNode title="03 // NETWORK" subtitle="L2: Retry Check" icon={RotateCw} active={activeStep === 2} status={getStepStatus(2)} color="bg-emerald-500" />
              <div className="lg:h-6 w-[2px] bg-white/5 lg:block hidden" />
              <FlowNode title="04 // STORE" subtitle="Success Commit" icon={CheckCircle2} active={activeStep === 3} status={getStepStatus(3)} color="bg-emerald-500" />
              <div className="lg:h-6 w-[2px] bg-white/5 lg:block hidden" />
              <FlowNode title="05 // TELEMETRY" subtitle="L5: Observability Log" icon={Eye} active={activeStep === 4} status={getStepStatus(4)} color="bg-emerald-500" />
            </>
          )}

          {selectedPath === "transient" && (
            <>
              <FlowNode title="01 // TRIGGER" subtitle="Incoming Webhook" icon={Play} active={activeStep === 0} status={getStepStatus(0)} color="bg-amber-500" />
              <div className="lg:h-6 w-[2px] bg-white/5 lg:block hidden" />
              <FlowNode title="02 // GUARD" subtitle="L1: Idempotency Key" icon={Database} active={activeStep === 1} status={getStepStatus(1)} color="bg-emerald-500" />
              <div className="lg:h-6 w-[2px] bg-white/5 lg:block hidden" />
              <FlowNode title="03 // NETWORK" subtitle="L2: Transient Error (503)" icon={RotateCw} active={activeStep === 2} status={getStepStatus(2)} color="bg-amber-500" />
              <div className="lg:h-6 w-[2px] bg-white/5 lg:block hidden" />
              <FlowNode title="04 // RETRY" subtitle="L2: Exponential Backoff" icon={RotateCw} active={activeStep === 3} status={getStepStatus(3)} color="bg-emerald-500" />
              <div className="lg:h-6 w-[2px] bg-white/5 lg:block hidden" />
              <FlowNode title="05 // STORE" subtitle="Recovered & Committed" icon={CheckCircle2} active={activeStep === 4} status={getStepStatus(4)} color="bg-emerald-500" />
              <div className="lg:h-6 w-[2px] bg-white/5 lg:block hidden" />
              <FlowNode title="06 // TELEMETRY" subtitle="L5: Observability Log" icon={Eye} active={activeStep === 5} status={getStepStatus(5)} color="bg-emerald-500" />
            </>
          )}

          {selectedPath === "fatal" && (
            <>
              <FlowNode title="01 // TRIGGER" subtitle="Incoming Webhook" icon={Play} active={activeStep === 0} status={getStepStatus(0)} color="bg-rose-500" />
              <div className="lg:h-6 w-[2px] bg-white/5 lg:block hidden" />
              <FlowNode title="02 // GUARD" subtitle="L1: Idempotency Key" icon={Database} active={activeStep === 1} status={getStepStatus(1)} color="bg-emerald-500" />
              <div className="lg:h-6 w-[2px] bg-white/5 lg:block hidden" />
              <FlowNode title="03 // NETWORK" subtitle="L2: Permanent Fail (422)" icon={RotateCw} active={activeStep === 2} status={getStepStatus(2)} color="bg-rose-500" />
              <div className="lg:h-6 w-[2px] bg-white/5 lg:block hidden" />
              <FlowNode title="04 // ROLLBACK" subtitle="L3: Compensating Action" icon={Trash2} active={activeStep === 3} status={getStepStatus(3)} color="bg-rose-500" />
              <div className="lg:h-6 w-[2px] bg-white/5 lg:block hidden" />
              <FlowNode title="05 // QUARANTINE" subtitle="L4: Dead-Letter Queue" icon={ShieldAlert} active={activeStep === 4} status={getStepStatus(4)} color="bg-rose-500" />
              <div className="lg:h-6 w-[2px] bg-white/5 lg:block hidden" />
              <FlowNode title="06 // OBSERVABILITY" subtitle="L5: Slack Alert Paged" icon={AlertTriangle} active={activeStep === 5} status={getStepStatus(5)} color="bg-rose-500" />
            </>
          )}
        </div>
        
        {/* Info / Description Area */}
        <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/5 pt-6 lg:pt-0 lg:pl-8">
          <div className="space-y-6">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-black">Simulation Feed</h4>
            
            <div className="min-h-[160px] bg-zinc-900/40 border border-white/5 rounded-2xl p-5 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {activeStep === -1 ? (
                  <motion.div
                    key="idle-state"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-center"
                  >
                    <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                      Click the play button to launch the simulation stream and see exactly how items process.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`step-${activeStep}-${selectedPath}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-brand-orange font-bold">
                        Step 0{activeStep + 1} {'//'} {stepsInfo[selectedPath][activeStep]?.title}
                      </span>
                    </div>
                    <p className="text-white text-base font-bold leading-snug">
                      {stepsInfo[selectedPath][activeStep]?.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500 leading-relaxed">
            *This interactive blueprint models the routing logic deployed in production-grade self-healing n8n installations.
          </div>
        </div>
      </div>
    </div>
  );
}
