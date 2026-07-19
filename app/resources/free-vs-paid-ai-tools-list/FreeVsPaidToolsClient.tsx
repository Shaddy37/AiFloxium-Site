"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ExternalLink, X, ArrowLeft, Sparkles, Filter, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { toolsData, ToolItem } from "@/lib/free-vs-paid-tools-data";
import { Accordion } from "@/components/blog/Accordion";
import { PremiumCTA } from "@/components/blog/PremiumCTA";

export default function FreeVsPaidToolsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [priceFilter, setPriceFilter] = useState<"all" | "free" | "paid">("all");

  // Get unique categories and sort them by original category ID
  const categories = useMemo(() => {
    const unique = Array.from(new Set(toolsData.map((t) => t.category)));
    return unique
      .map((name) => {
        const item = toolsData.find((t) => t.category === name)!;
        return { name, id: item.categoryId };
      })
      .sort((a, b) => a.id - b.id);
  }, []);

  // Filter tools based on state
  const filteredTools = useMemo(() => {
    return toolsData.filter((t) => {
      // Search term match (name, bestFor, category)
      const matchesSearch =
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.bestFor.toLowerCase().includes(searchQuery.toLowerCase());

      // Category match
      const matchesCategory = !activeCategory || t.category === activeCategory;

      // Price filter match
      // "Free" tools pricing strings usually contain free, freemium, or research
      const isFree =
        t.pricing.toLowerCase().includes("free") ||
        t.pricing.toLowerCase().includes("freemium") ||
        t.pricing.toLowerCase().includes("research");
      
      const isPaid = t.pricing.toLowerCase().includes("paid") || t.pricing.toLowerCase().includes("credits");

      let matchesPrice = true;
      if (priceFilter === "free") {
        matchesPrice = isFree && !t.pricing.toLowerCase().startsWith("paid");
      } else if (priceFilter === "paid") {
        matchesPrice = isPaid;
      }

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, activeCategory, priceFilter]);

  // Count tools in each category for badges
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    toolsData.forEach((t) => {
      counts[t.category] = (counts[t.category] || 0) + 1;
    });
    return counts;
  }, []);

  const totalToolsCount = toolsData.length;

  return (
    <main className="relative bg-white min-h-screen text-zinc-800 selection:bg-[#7B2CBF] selection:text-zinc-900">
      <Navbar />

      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-gradient-to-b from-black to-[#0a0608] rounded-b-[3rem] text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] rounded-full bg-[#7B2CBF]/10 blur-[120px]" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            
            {/* Breadcrumb */}
            <nav className="mb-6 flex justify-center items-center gap-2 text-[10px] font-semibold text-white/50 uppercase tracking-widest relative z-10 font-inter">
              <Link href="/" className="transition-colors hover:text-[#E0AAFF]">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-white/30" />
              <Link href="/resources" className="transition-colors hover:text-[#E0AAFF]">
                Resources
              </Link>
              <ChevronRight className="h-3 w-3 text-white/30" />
              <span className="text-[#E0AAFF] font-bold">Tools Directory</span>
            </nav>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#7B2CBF]/30 bg-[#7B2CBF]/10 text-[10px] font-semibold uppercase tracking-widest text-[#E0AAFF] mb-6 font-inter">
              <Sparkles className="h-3.5 w-3.5 text-[#E0AAFF]" />
              Interactive Operator Guide
            </span>

            <h1 className="text-[clamp(2.5rem,5.5vw,5rem)] font-instrument text-white tracking-tight leading-[1.05] mb-6">
              400+ Best <span className="font-instrument text-[#E0AAFF] italic">AI Tools</span> <br />
              Free vs Paid Directory
            </h1>

            <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8 font-inter font-light">
              Stop guessing which AI software is worth the subscription cost. Explore our ultimate directory of {totalToolsCount} free, freemium, and paid AI systems for marketing, coding, video, and automation in 2026.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors font-semibold"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Resources
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Interactive Directory Section ───────────────────────────── */}
      <section className="container mx-auto max-w-6xl px-6 py-16">
        
        {/* Core Quick Stack Card */}
        <div className="mb-12 p-8 rounded-3xl bg-zinc-50 border border-zinc-200 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 left-0 w-2.5 h-full bg-[#7B2CBF]" />
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#7B2CBF] mb-4 font-black">
            Optimal AI Stack // TL;DR
          </div>
          <p className="text-lg font-bold text-zinc-900 leading-relaxed max-w-4xl">
            You do not need dozens of paid subscriptions. The optimal AI business stack consists of one premium LLM (<strong>ChatGPT Plus</strong> or <strong>Claude Pro</strong> at $20/mo), one premium image generator (<strong>Midjourney</strong> at $30/mo), and a scalable automation platform (<strong>Make.com</strong> or <strong>n8n</strong>). For all other secondary tasks like video generation or voice cloning, utilize the generous free tiers of tools like <strong>Luma Dream Machine</strong> and <strong>ElevenLabs</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Left Sidebar: Categories */}
          <aside className="lg:col-span-3 lg:sticky lg:top-28 space-y-4">
            <div className="border border-zinc-200 rounded-2xl p-6 bg-zinc-50/50">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-4 flex items-center gap-2">
                <Filter className="h-3 w-3" />
                Categories
              </h3>
              
              <div className="flex flex-col gap-1.5">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-between font-inter ${
                    activeCategory === null
                      ? "bg-zinc-900 text-white shadow-sm"
                      : "hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  <span>All Categories</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                    activeCategory === null ? "bg-white/20 text-white" : "bg-zinc-200 text-zinc-600"
                  }`}>
                    {totalToolsCount}
                  </span>
                </button>

                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-between font-inter ${
                      activeCategory === cat.name
                        ? "bg-zinc-900 text-white shadow-sm"
                        : "hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900"
                    }`}
                  >
                    <span className="truncate pr-2">{cat.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-mono shrink-0 ${
                      activeCategory === cat.name ? "bg-white/20 text-white" : "bg-zinc-200 text-zinc-600"
                    }`}>
                      {categoryCounts[cat.name] || 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Main Panel: Search, Filters, and Tools List */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Search and Price Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4 p-4 border border-zinc-200 rounded-2xl bg-zinc-50/50">
              
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search tool name or functionality..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#7B2CBF] focus:ring-1 focus:ring-[#7B2CBF] transition-all font-inter"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 flex items-center justify-center rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>

              {/* Price Filter Toggles */}
              <div className="flex items-center border border-zinc-200 rounded-xl bg-white p-1 shrink-0 font-inter">
                {([
                  { id: "all", label: "All Pricing" },
                  { id: "free", label: "Free / Freemium" },
                  { id: "paid", label: "Paid Only" },
                ] as const).map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setPriceFilter(opt.id)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      priceFilter === opt.id
                        ? "bg-[#7B2CBF]/10 text-[#7B2CBF]"
                        : "text-zinc-500 hover:text-zinc-800"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

            </div>

            {/* Matching Count Header */}
            <div className="flex items-center justify-between font-inter text-xs text-zinc-500 px-1">
              <span>
                Showing <strong>{filteredTools.length}</strong> matching tools 
                {activeCategory ? ` in "${activeCategory}"` : ""}
              </span>
              {(searchQuery || activeCategory || priceFilter !== "all") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory(null);
                    setPriceFilter("all");
                  }}
                  className="text-[#7B2CBF] hover:underline font-semibold"
                >
                  Reset all filters
                </button>
              )}
            </div>

            {/* Tools Grid */}
            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredTools.map((tool, idx) => {
                  const isFree =
                    tool.pricing.toLowerCase().includes("free") ||
                    tool.pricing.toLowerCase().includes("freemium") ||
                    tool.pricing.toLowerCase().includes("research");

                  return (
                    <div
                      key={`${tool.name}-${idx}`}
                      className="group border border-zinc-200 hover:border-[#7B2CBF]/30 bg-white hover:bg-zinc-50/[0.3] rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="space-y-3">
                        {/* Card Header */}
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-lg font-bold text-zinc-900 group-hover:text-[#7B2CBF] transition-colors leading-tight font-inter">
                            {tool.url ? (
                              <a
                                href={tool.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 hover:underline"
                              >
                                {tool.name}
                                <ExternalLink className="h-3 w-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                              </a>
                            ) : (
                              tool.name
                            )}
                          </h4>
                          <span
                            className={`shrink-0 text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                              isFree
                                ? "text-emerald-600 border-emerald-500/20 bg-emerald-500/5"
                                : "text-amber-600 border-amber-500/20 bg-amber-500/5"
                            }`}
                          >
                            {tool.pricing.split(" ")[0]}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-zinc-600 font-inter font-light leading-relaxed">
                          {tool.bestFor}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div className="flex items-center justify-between gap-3 mt-4 pt-4 border-t border-zinc-100 font-inter text-[10px] text-zinc-400 font-semibold uppercase tracking-wider">
                        <span>{tool.category}</span>
                        {tool.pricing.includes("(") && (
                          <span className="text-zinc-500 tabular-nums">
                            {tool.pricing.substring(tool.pricing.indexOf("("))}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16 border border-dashed border-zinc-200 bg-zinc-50 rounded-2xl">
                <Search className="h-10 w-10 text-zinc-300 mx-auto mb-4" />
                <h4 className="text-base font-bold text-zinc-800 mb-1 font-inter">No matching tools found</h4>
                <p className="text-sm text-zinc-500 max-w-sm mx-auto font-inter font-light">
                  Try refining your keywords or clearing filters to locate options.
                </p>
              </div>
            )}

          </div>

        </div>

      </section>

      {/* ── FAQ Section ─────────────────────────────────────────────── */}
      <section className="bg-zinc-50 border-y border-zinc-200 py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-instrument text-zinc-900 tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-500 font-bold">
              Subscription Strategy &amp; Licensing
            </p>
          </div>

          <div className="space-y-4">
            <Accordion title="What is the best free AI tool right now?" subtitle="FAQ Segment">
              The best free AI tool depends on your use case, but <strong>Microsoft Copilot</strong> is currently the best all-around free AI because it offers free access to the GPT-4o language model and DALL-E 3 image generation, connected directly to the live internet.
            </Accordion>

            <Accordion title="Do I need to pay for ChatGPT if Copilot is free?" subtitle="FAQ Segment">
              For heavy users, yes. While Copilot gives you free GPT-4o, <strong>ChatGPT Plus ($20/mo)</strong> provides much higher message limits, the ability to build Custom GPTs, Advanced Voice Mode, and a superior data analysis interface.
            </Accordion>

            <Accordion title="Which AI image generator gives free commercial rights?" subtitle="FAQ Segment">
              Most free image generators retain commercial rights. If you need commercial rights for advertising or client work, you should upgrade to <strong>Midjourney</strong> (starting at $10/mo) or use a commercially safe enterprise tool like <strong>Adobe Firefly</strong>.
            </Accordion>

            <Accordion title="Is there a free alternative to Midjourney?" subtitle="FAQ Segment">
              Yes. <strong>Leonardo AI</strong> offers 150 daily free tokens and produces exceptional quality, especially for gaming assets. <strong>Microsoft Designer</strong> is also a great free alternative powered by DALL-E 3.
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── Premium CTA ─────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <PremiumCTA
            title="Automate Your Business Operations"
            description="Stop manually copy-pasting tasks across your tech stack. At AIFLOXIUM, I build custom AI automation systems for businesses to save hundreds of hours per month."
            buttonText="Book your free AI Strategy Audit"
          />
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 font-inter text-xs text-zinc-500 font-semibold">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#7B2CBF] transition-colors"
            >
              Book your free AI Strategy Audit with Shadab Shams
              <ExternalLink className="h-3 w-3" />
            </a>
            <span className="hidden sm:inline text-zinc-300">|</span>
            <a
              href="https://instagram.com/shadabshams"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#7B2CBF] transition-colors"
            >
              Follow @shadabshams on Instagram
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
