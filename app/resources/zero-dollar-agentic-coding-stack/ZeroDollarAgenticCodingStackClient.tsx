"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { 
  ChevronRight, 
  Terminal, 
  Layers, 
  Settings, 
  Check, 
  Copy, 
  ArrowRight, 
  Cpu, 
  Cloud, 
  Zap, 
  HelpCircle,
  FolderSync
} from "lucide-react";
import { cn } from "@/lib/utils";

// Interactive Copy Button Component
function CodeSnippet({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code snippet", err);
    }
  };

  return (
    <div className="relative group my-4 rounded-2xl border border-white/5 bg-black/40 overflow-hidden shadow-md">
      {/* Code Header bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-black/60 font-mono text-[9px] text-white/40 uppercase tracking-widest font-semibold font-inter">
        <span>{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/[0.01] border border-white/20 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      {/* Code content */}
      <pre className="p-5 overflow-x-auto font-mono text-sm leading-relaxed text-white bg-transparent">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function ZeroDollarAgenticCodingStackClient() {
  const [os, setOs] = useState<"unix" | "win">("unix");
  const [activeStep, setActiveStep] = useState(1);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Stepper scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const stepIds = ["step-1", "step-2", "step-3", "step-4", "step-5"];
      const scrollPosition = window.scrollY + 350;

      for (let i = stepIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(stepIds[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveStep(i + 1);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleStepClick = (stepNum: number) => {
    const stepIds = ["step-1", "step-2", "step-3", "step-4", "step-5"];
    const el = document.getElementById(stepIds[stepNum - 1]);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <main id="main-content" className="relative bg-[#0a0608] text-white min-h-screen overflow-x-hidden selection:bg-[#7B2CBF] selection:text-white">
      <Navbar />

      {/* ── Background Mesh Orbs ─────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-[#7B2CBF]/5 blur-[150px]" />
        <div className="absolute top-[800px] right-1/4 w-[600px] h-[600px] rounded-full bg-[#E0AAFF]/5 blur-[180px]" />
        <div className="absolute bottom-40 left-1/3 w-[450px] h-[450px] rounded-full bg-[#7B2CBF]/5 blur-[120px]" />
      </div>

      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-20 px-6 border-b border-white/5 bg-gradient-to-b from-black to-[#0a0608] rounded-b-[4rem]">
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <nav className="mb-8 flex justify-center items-center gap-2 text-[10px] font-semibold text-white/50 uppercase tracking-widest font-inter">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-white/30" />
            <Link href="/resources" className="transition-colors hover:text-white">Resources</Link>
            <ChevronRight className="h-3 w-3 text-white/30" />
            <span className="text-[#E0AAFF] font-bold">Zero-Dollar Stack</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-white/[0.01] border border-white/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E0AAFF] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/70 font-semibold font-inter">Native Interactive Guide</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-instrument text-white tracking-tight leading-[1.05] max-w-4xl mx-auto mb-10">
            $0 Agentic <br />
            <span className="font-instrument text-[#E0AAFF] italic">Coding Stack.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-12 font-inter font-light">
            Deploy a production-ready developer agent environment without monthly subscriptions. Step-by-step setup for Cohere North Mini Code and GLM-5.2.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[9px] font-semibold font-inter text-white/40 border-t border-white/5 pt-8 max-w-lg mx-auto uppercase tracking-widest">
            <span>READ TIME: 15 MIN</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>UPDATED: JUNE 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-white/60">AUTHOR: SHADAB SHAMS</span>
          </div>
        </div>
      </section>

      {/* ── Two Column Workspace ─────────────────────────────────────────── */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Sticky Timeline Stepper */}
            <div className="w-full lg:w-1/3 shrink-0 lg:sticky lg:top-32 h-fit">
              <div className="border border-white/5 bg-white/[0.01] rounded-3xl p-8 shadow-xl liquid-glass">
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/40 font-inter mb-6">
                  Stack Blueprint Setup
                </p>
                <div className="space-y-6 relative border-l border-white/20 pl-6 ml-2 font-inter">
                  {[
                    { num: 1, title: "Create OpenRouter Key" },
                    { num: 2, title: "Configure Env Vars" },
                    { num: 3, title: "Cloudflare AI Dashboard" },
                    { num: 4, title: "Generate Workers Token" },
                    { num: 5, title: "Launch Developer Agent" },
                  ].map((step) => (
                    <button
                      key={step.num}
                      onClick={() => handleStepClick(step.num)}
                      className="group flex items-start gap-4 text-left w-full relative transition-all duration-300"
                    >
                      {/* Active Indicator circle */}
                      <span className={cn(
                        "absolute -left-[31px] top-1.5 w-[9px] h-[9px] rounded-full border transition-all duration-555",
                        activeStep === step.num 
                          ? "bg-[#E0AAFF] border-[#E0AAFF] shadow-[0_0_12px_rgba(224,170,255,0.4)] scale-110" 
                          : "bg-black/40 border-white/20 group-hover:border-white/50"
                      )} />
                      <div>
                        <p className={cn(
                          "text-[9px] font-semibold tracking-wider uppercase mb-1 font-inter",
                          activeStep === step.num ? "text-[#E0AAFF]" : "text-white/40"
                        )}>
                          STEP 0{step.num}
                        </p>
                        <p className={cn(
                          "text-sm font-semibold transition-colors duration-300",
                          activeStep === step.num ? "text-white" : "text-white/60 group-hover:text-white"
                        )}>
                          {step.title}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-3 font-inter">
                  <Link
                    href="/resources"
                    className="text-[9px] font-semibold uppercase tracking-wider text-white/40 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    ← Back to Resources
                  </Link>
                  <Link
                    href="/blog/hermes-agent-guide"
                    className="text-[9px] font-semibold uppercase tracking-wider text-[#E0AAFF] hover:text-white flex items-center gap-2 transition-colors mt-1"
                  >
                    Hermes Agent Guide →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Steps & Interactive Guide Content */}
            <div className="w-full lg:w-2/3 space-y-16">
              
              {/* Executive Summary Card (Double-Bezel) */}
              <div className="bg-white/[0.01] p-2 border border-white/5 rounded-[2.5rem] shadow-lg liquid-glass">
                <div className="rounded-[calc(2.5rem-0.375rem)] bg-black/40 p-8 md:p-10 border border-white/5">
                  <div className="font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-[#E0AAFF] mb-4 font-inter">
                    Executive Summary // TL;DR
                  </div>
                  <h3 className="text-xl md:text-2xl font-instrument tracking-tight text-white mb-4">
                    Why pay $20/month for closed-source models?
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed font-inter font-light">
                    Setting up a production-ready agentic coding workspace does not require expensive closed-source model subscriptions. By combining OpenRouter's free tier (hosting Cohere North Mini Code) with Cloudflare Workers AI (hosting GLM-5.2), you can build a fully autonomous, zero-cost developer stack. This guide walks you through step-by-step credentials configuration and client launch.
                  </p>
                </div>
              </div>

              {/* Models Comparison Table */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 font-inter">
                  <Layers className="w-5 h-5 text-[#E0AAFF]" />
                  <h3 className="text-lg font-semibold text-white uppercase tracking-wider">
                    Model Stack Specifications
                  </h3>
                </div>
                <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-black/40 liquid-glass">
                  <table className="w-full border-collapse text-left min-w-[500px]">
                    <thead>
                      <tr className="bg-white/[0.01] border-b border-white/5">
                        <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-wider text-white/40 font-inter">Feature</th>
                        <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-wider text-[#E0AAFF] font-inter">North Mini Code</th>
                        <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-wider text-cyan-400 font-inter">GLM-5.2</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-inter">
                      {[
                        { f: "Provider", m1: "OpenRouter Free", m2: "Cloudflare Workers AI" },
                        { f: "Architecture", m1: "30B MoE (3B active)", m2: "Dense Coding Model" },
                        { f: "Context Window", m1: "32k tokens", m2: "262k tokens" },
                        { f: "Native Features", m1: "Agentic coding loops", m2: "Native Tool Calling" },
                        { f: "Daily Limit", m1: "Model dependent (high)", m2: "10,000 neurons/day ($0)" },
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-[#7B2CBF]/5 transition-colors">
                          <td className="px-6 py-4 text-[10px] font-semibold text-white/40 uppercase tracking-wider">{row.f}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-white">{row.m1}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-white">{row.m2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* METHOD 1: COHERE NORTH MINI CODE */}
              <div id="step-1" className="scroll-mt-32 space-y-10">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-semibold font-inter text-[#E0AAFF] tracking-wider uppercase">01 // METHOD 1</span>
                  <span className="h-[1px] flex-1 bg-white/5" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-instrument text-white tracking-tight mb-2">
                    Cohere North Mini Code
                  </h2>
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-white/40 font-inter mb-6">
                    Free via OpenRouter
                  </p>
                  <p className="text-white/60 leading-relaxed font-inter font-light text-base">
                    North Mini Code is a 30B Mixture-of-Experts (MoE) model with only 3B active parameters, specifically tuned for multi-step agentic coding tasks.
                  </p>
                </div>

                {/* Step 1 Core Content */}
                <div className="space-y-4 font-inter">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/[0.01] border border-white/20 flex items-center justify-center text-xs text-[#E0AAFF] font-semibold">1</span>
                    <h4 className="text-base font-semibold text-white">Create an OpenRouter Account</h4>
                  </div>
                  <ul className="list-disc pl-10 space-y-2 text-white/60 font-light leading-relaxed">
                    <li>Go to <a href="https://openrouter.ai/" target="_blank" rel="noopener noreferrer" className="text-[#E0AAFF] hover:underline font-semibold">OpenRouter.ai</a>.</li>
                    <li>Sign up or log in (no credit card or billing details required for free models).</li>
                  </ul>
                </div>

                {/* Step 2 Core Content */}
                <div className="space-y-4 font-inter">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/[0.01] border border-white/20 flex items-center justify-center text-xs text-[#E0AAFF] font-semibold">2</span>
                    <h4 className="text-base font-semibold text-white">Generate an API Key</h4>
                  </div>
                  <ul className="list-disc pl-10 space-y-2 text-white/60 font-light leading-relaxed">
                    <li>Navigate to <strong>Keys</strong> (or Account Settings &rarr; API Keys).</li>
                    <li>Click <strong>Create Key</strong> and give it a name (e.g., <code className="text-white bg-black/40 border border-white/5 px-1.5 py-0.5 rounded text-xs font-mono">Coding Agents</code>).</li>
                    <li>Copy the generated key immediately (it looks like <code className="text-white bg-black/40 border border-white/5 px-1.5 py-0.5 rounded text-xs font-mono">sk-or-v1-...</code>).</li>
                  </ul>
                </div>

                {/* Step 3: Interactive OS Command Swapper */}
                <div id="step-2" className="scroll-mt-32 space-y-4 font-inter">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/[0.01] border border-white/20 flex items-center justify-center text-xs text-[#E0AAFF] font-semibold">3</span>
                    <h4 className="text-base font-semibold text-white">Configure Environment Variables</h4>
                  </div>
                  
                  {/* OS Tabs */}
                  <div className="flex gap-2 border-b border-white/5 pb-2">
                    <button
                      onClick={() => setOs("unix")}
                      className={cn(
                        "px-4 py-2 text-[10px] font-semibold uppercase tracking-wider border rounded-md transition-all duration-300 font-inter",
                        os === "unix" 
                          ? "bg-[#7B2CBF]/10 border-[#7B2CBF]/30 text-[#E0AAFF]" 
                          : "border-white/20 text-white/40 hover:text-white/70"
                      )}
                    >
                      macOS / Linux (Bash)
                    </button>
                    <button
                      onClick={() => setOs("win")}
                      className={cn(
                        "px-4 py-2 text-[10px] font-semibold uppercase tracking-wider border rounded-md transition-all duration-300 font-inter",
                        os === "win" 
                          ? "bg-[#7B2CBF]/10 border-[#7B2CBF]/30 text-[#E0AAFF]" 
                          : "border-white/20 text-white/40 hover:text-white/70"
                      )}
                    >
                      Windows (PowerShell)
                    </button>
                  </div>

                  {/* Switchable Code block */}
                  {os === "unix" ? (
                    <CodeSnippet 
                      code="export OPENROUTER_API_KEY=your_copied_api_key_here" 
                      language="bash" 
                    />
                  ) : (
                    <CodeSnippet 
                      code='$env:OPENROUTER_API_KEY="your_copied_api_key_here"' 
                      language="powershell" 
                    />
                  )}
                  <p className="text-xs text-white/40 italic pl-4 font-light">
                    Tip: Add this command to your shell profile (~/.bashrc, ~/.zshrc) to make the variable persistent across sessions.
                  </p>
                </div>

                {/* Step 4 Content */}
                <div className="space-y-4 font-inter">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/[0.01] border border-white/20 flex items-center justify-center text-xs text-[#E0AAFF] font-semibold">4</span>
                    <h4 className="text-base font-semibold text-white">Add to Agent Configuration</h4>
                  </div>
                  <p className="text-white/60 pl-8 font-light leading-relaxed">
                    Configure your developer agent (e.g., OpenCode, Hermes) to use the following provider credentials:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-8">
                    <div className="bg-black/40 border border-white/5 p-5 rounded-2xl shadow-sm liquid-glass">
                      <p className="text-[9px] font-semibold font-inter text-white/40 uppercase tracking-wider mb-1">Base URL</p>
                      <code className="text-sm font-semibold text-white block truncate font-mono">https://openrouter.ai/api/v1</code>
                    </div>
                    <div className="bg-black/40 border border-white/5 p-5 rounded-2xl shadow-sm liquid-glass">
                      <p className="text-[9px] font-semibold font-inter text-white/40 uppercase tracking-wider mb-1">Model ID</p>
                      <code className="text-sm font-semibold text-[#E0AAFF] block truncate font-mono">cohere/north-mini-code:free</code>
                    </div>
                  </div>
                </div>
              </div>

              {/* METHOD 2: CLOUDFLARE WORKERS AI (GLM-5.2) */}
              <div id="step-3" className="scroll-mt-32 space-y-12">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-semibold font-inter text-cyan-450 tracking-wider uppercase">02 // METHOD 2</span>
                  <span className="h-[1px] flex-1 bg-white/5" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-instrument text-white tracking-tight mb-2">
                    GLM-5.2 Configuration
                  </h2>
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-white/40 font-inter mb-6">
                    Free via Cloudflare Workers AI
                  </p>
                  <p className="text-white/60 leading-relaxed font-inter font-light text-base">
                    GLM-5.2 is a state-of-the-art coding model featuring native tool calling capabilities and a massive <strong>262,144 token context window</strong>, running 100% free with a daily allocation of 10,000 neurons (resets daily).
                  </p>
                </div>

                {/* Cloudflare Step 1 */}
                <div className="space-y-4 font-inter">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/[0.01] border border-white/20 flex items-center justify-center text-xs text-cyan-450 font-semibold">1</span>
                    <h4 className="text-base font-semibold text-white">Create a Cloudflare Account</h4>
                  </div>
                  <ul className="list-disc pl-10 space-y-2 text-white/60 font-light leading-relaxed">
                    <li>Sign up for a free account at <a href="https://dash.cloudflare.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-450 hover:underline font-semibold">dash.cloudflare.com</a>.</li>
                    <li>No paid subscriptions are required for the daily free Neurons allocation.</li>
                  </ul>
                </div>

                {/* Cloudflare Step 2 */}
                <div className="space-y-6 font-inter">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/[0.01] border border-white/20 flex items-center justify-center text-xs text-cyan-450 font-semibold">2</span>
                    <h4 className="text-base font-semibold text-white">Locate your Account ID & REST API</h4>
                  </div>
                  <ul className="list-decimal pl-10 space-y-3 text-white/60 font-light leading-relaxed">
                    <li>From the left-hand navigation sidebar, toggle the <strong>AI</strong> menu and select <strong>Workers AI</strong>.</li>
                  </ul>

                  {/* Sidebar Screenshot (Double Bezel configured for 371x680 Mobile dimensions) */}
                  <div className="p-3 border border-white/5 bg-black/40 rounded-[2.5rem] my-6 max-w-[340px] mx-auto shadow-md liquid-glass">
                    <div className="relative rounded-[2rem] overflow-hidden bg-black/20 border border-white/5 aspect-[371/680] w-full">
                      <Image
                        src="/blog/zero-dollar-agentic-coding-stack/cf-sidebar-workers-ai.jpg"
                        alt="Navigate to Workers AI in the Cloudflare Sidebar"
                        fill
                        className="object-contain hover:scale-102 transition-transform duration-700 bg-black/40"
                        sizes="340px"
                        priority
                      />
                    </div>
                    <div className="px-4 py-2.5 text-[9px] font-semibold font-inter text-white/40 uppercase tracking-widest text-center">
                      Cloudflare Menu: AI &rarr; Workers AI
                    </div>
                  </div>

                  <ul className="list-decimal pl-10 space-y-3 text-white/60 font-light leading-relaxed">
                    <li>On the Workers AI dashboard homepage, click the <strong>REST API</strong> button to load details.</li>
                  </ul>

                  {/* Dashboard Screenshot (Double Bezel configured for 371x680 Mobile dimensions) */}
                  <div className="p-3 border border-white/5 bg-black/40 rounded-[2.5rem] my-6 max-w-[340px] mx-auto shadow-md liquid-glass">
                    <div className="relative rounded-[2rem] overflow-hidden bg-black/20 border border-white/5 aspect-[371/680] w-full">
                      <Image
                        src="/blog/zero-dollar-agentic-coding-stack/cf-workers-ai-dashboard.jpg"
                        alt="Workers AI dashboard highlighting REST API selection button"
                        fill
                        className="object-contain hover:scale-102 transition-transform duration-700 bg-black/40"
                        sizes="340px"
                      />
                    </div>
                    <div className="px-4 py-2.5 text-[9px] font-semibold font-inter text-white/40 uppercase tracking-widest text-center">
                      Workers AI Panel: REST API Selector
                    </div>
                  </div>

                  <ul className="list-decimal pl-10 space-y-3 text-white/60 font-light leading-relaxed">
                    <li>Locate and copy your alphanumeric <strong>Account ID</strong> displayed in the panel.</li>
                  </ul>
                </div>

                {/* Cloudflare Step 3 */}
                <div id="step-4" className="scroll-mt-32 space-y-6 font-inter">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/[0.01] border border-white/20 flex items-center justify-center text-xs text-cyan-450 font-semibold">3</span>
                    <h4 className="text-base font-semibold text-white">Create an API Token</h4>
                  </div>
                  <ul className="list-decimal pl-10 space-y-3 text-white/60 font-light leading-relaxed">
                    <li>Go to <strong>My Profile</strong> (user icon in top-right menu &rarr; click <em>My Profile</em>).</li>
                    <li>Click <strong>API Tokens</strong> in the sidebar &rarr; click <strong>Create Token</strong>.</li>
                    <li>Choose <strong>Create Custom Token</strong> (at the bottom).</li>
                    <li>Configure Custom Token permissions:
                      <div className="bg-black/40 border border-white/5 p-4 rounded-xl font-mono text-xs text-white/70 mt-2 space-y-1 shadow-inner liquid-glass">
                        <span className="text-white/40 font-semibold font-inter text-[10px]">Scope:</span> Account <span className="text-white/40">&rarr;</span> Workers AI <span className="text-white/40">&rarr;</span> Edit
                      </div>
                    </li>
                    <li>Click <strong>Continue to summary</strong> and confirm with <strong>Create Token</strong>.</li>
                    <li>Copy the generated custom token.</li>
                  </ul>

                  {/* Token creation and Account ID Screenshot (Double Bezel configured for 371x680 Mobile dimensions) */}
                  <div className="p-3 border border-white/5 bg-black/40 rounded-[2.5rem] my-6 max-w-[340px] mx-auto shadow-md liquid-glass">
                    <div className="relative rounded-[2rem] overflow-hidden bg-black/20 border border-white/5 aspect-[371/680] w-full">
                      <Image
                        src="/blog/zero-dollar-agentic-coding-stack/cf-api-token-setup.jpg"
                        alt="Using Workers AI REST API settings showing Account ID and Create API Token links"
                        fill
                        className="object-contain hover:scale-102 transition-transform duration-700 bg-black/40"
                        sizes="340px"
                      />
                    </div>
                    <div className="px-4 py-2.5 text-[9px] font-semibold font-inter text-white/40 uppercase tracking-widest text-center">
                      REST API Page: Copy Account ID & Generate Token
                    </div>
                  </div>
                </div>

                {/* Cloudflare Step 4 */}
                <div className="space-y-4 font-inter">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/[0.01] border border-white/20 flex items-center justify-center text-xs text-cyan-450 font-semibold">4</span>
                    <h4 className="text-base font-semibold text-white">Configure custom provider details</h4>
                  </div>
                  <p className="text-white/60 pl-8 font-light leading-relaxed">
                    Add Cloudflare as a custom OpenAI-compatible endpoint in your agent configuration:
                  </p>
                  <div className="bg-black/40 border border-white/5 p-6 rounded-2xl space-y-4 ml-8 shadow-sm liquid-glass">
                    <div>
                      <p className="text-[9px] font-semibold font-inter text-white/40 uppercase tracking-wider mb-1">Base URL</p>
                      <code className="text-xs sm:text-sm font-semibold text-white break-all block font-mono">
                        https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/ai/v1
                      </code>
                    </div>
                    <div>
                      <p className="text-[9px] font-semibold font-inter text-white/40 uppercase tracking-wider mb-1">Header Configuration</p>
                      <code className="text-xs sm:text-sm font-semibold text-[#E0AAFF] break-all block font-mono">
                        Authorization: Bearer YOUR_API_TOKEN
                      </code>
                    </div>
                    <div>
                      <p className="text-[9px] font-semibold font-inter text-white/40 uppercase tracking-wider mb-1">Model ID</p>
                      <code className="text-xs sm:text-sm font-semibold text-cyan-450 block font-mono">
                        @cf/zai-org/glm-5.2
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 5: START YOUR AGENT */}
              <div id="step-5" className="scroll-mt-32 space-y-8 pb-10">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-semibold font-inter text-white/40 tracking-wider uppercase">03 // EXECUTION</span>
                  <span className="h-[1px] flex-1 bg-white/5" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-instrument text-white tracking-tight mb-2">
                    Start Your Agent
                  </h2>
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-white/40 font-inter mb-6">
                    Launch local environments
                  </p>
                  <p className="text-white/60 leading-relaxed font-inter font-light text-base">
                    Once your credentials are set, launch your coding agent environment (such as `opencode` or `hermes-agent`) pointing to the model you configured.
                  </p>
                </div>

                <div className="space-y-4 font-inter">
                  <p className="text-white/60 font-light leading-relaxed">
                    For example, to execute a local CLI developer agent using your OpenRouter free model parameters, run:
                  </p>
                  <CodeSnippet 
                    code="hermes-agent --model cohere/north-mini-code:free --api-key $OPENROUTER_API_KEY" 
                    language="bash" 
                  />
                  <p className="text-white/60 font-light leading-relaxed">
                    You now have a fully operational, zero-cost developer agent capable of reading file systems, performing search actions, executing CLI commands, and editing codebases.
                  </p>
                </div>

                {/* Custom Highlight info card (Double Bezel) */}
                <div className="bg-white/[0.01] p-2 border border-white/5 rounded-[2rem] shadow-lg liquid-glass">
                  <div className="rounded-[calc(2rem-0.375rem)] bg-black/40 p-8 border border-white/5 flex flex-col md:flex-row items-center gap-6 font-inter">
                    <div className="w-12 h-12 rounded-full bg-[#7B2CBF]/10 flex items-center justify-center text-[#E0AAFF] shrink-0">
                      <FolderSync className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">Looking for advanced agent structures?</h4>
                      <p className="text-xs text-white/60 leading-relaxed font-light">
                        To explore persistent SQLite memories, telegram control loops, and custom terminal setups, read my comprehensive <Link href="/blog/hermes-agent-guide" className="text-[#E0AAFF] underline font-semibold hover:text-[#E0AAFF]/80 transition-colors">Hermes Agent Setup Guide</Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── FAQ Section ─────────────────────────────────────────────────── */}
              <div className="pt-8 border-t border-white/5 space-y-6">
                <div className="flex items-center gap-3 font-inter">
                  <HelpCircle className="w-5 h-5 text-[#E0AAFF]" />
                  <h3 className="text-lg font-semibold text-white uppercase tracking-wider">
                    Stack FAQs
                  </h3>
                </div>

                <div className="space-y-4 font-inter">
                  {[
                    {
                      q: "Is this agentic coding stack really free to run?",
                      a: "Yes, both OpenRouter's Cohere North Mini Code (cohere/north-mini-code:free) and Cloudflare Workers AI GLM-5.2 (@cf/zai-org/glm-5.2) models are available on free/zero-cost tiers with no daily caps or payment details required."
                    },
                    {
                      q: "Which model is better for agentic coding workflows?",
                      a: "Cohere North Mini Code is a 30B MoE model tuned for multi-step agent actions. GLM-5.2 is a general-purpose model with native tool-calling and a massive 262k context window. Both are excellent for starting agent environments."
                    },
                    {
                      q: "Which developer clients can I use with these models?",
                      a: "You can use any OpenAI-compatible client, such as Hermes Agent, OpenCode, or Claude Code, by setting the custom Base URL and Bearer Authorization headers."
                    }
                  ].map((faq, index) => (
                    <div 
                      key={index}
                      className="border border-white/5 bg-white/[0.01] hover:bg-[#7B2CBF]/5 rounded-2xl transition-all duration-300 overflow-hidden shadow-sm"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="flex items-center justify-between w-full px-6 py-4 text-left font-semibold text-sm text-white/90 hover:text-white"
                      >
                        <span>{faq.q}</span>
                        <span className={cn(
                          "w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/40 font-bold transition-transform duration-300",
                          expandedFaq === index ? "rotate-180 text-[#E0AAFF] bg-[#7B2CBF]/10" : ""
                        )}>
                          ↓
                        </span>
                      </button>
                      <div className={cn(
                        "px-6 text-white/60 text-xs leading-relaxed font-light transition-all duration-350 ease-in-out",
                        expandedFaq === index ? "pb-6 max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 overflow-hidden"
                      )}>
                        {faq.a}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Premium CTA Band ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0608] text-white border-y border-white/5 shadow-2xl">
        <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center md:text-left">
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40 mb-4 font-inter">
              Custom Deployments
            </p>
            <h2 className="text-4xl md:text-5xl font-instrument tracking-tight mb-4 text-white">
              Build for enterprise.
            </h2>
            <p className="text-white/60 text-base leading-relaxed font-inter font-light">
              I specialize in custom agentic environments, self-healing developer pipelines, and database integrations. Schedule a call with me to build custom AI operators.
            </p>
          </div>
          <div className="shrink-0 font-inter">
            <a
              href="https://calendly.com/shadabshamsaiautomation/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E0AAFF] transition-all button-glow"
            >
              Book Audit Call →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
