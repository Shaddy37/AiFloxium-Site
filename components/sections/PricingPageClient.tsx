"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Check, 
  Zap, 
  Sparkles, 
  Shield, 
  Workflow, 
  ArrowRight, 
  Lock, 
  Code, 
  HelpCircle,
  Award,
  ChevronRight
} from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { CALENDLY_URL, LINKEDIN_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

// Tiers types
type PricingTier = {
  name: string;
  badge?: string;
  description: string;
  oneOffPrice: string;
  oneOffPriceSub: string;
  retainerPrice: string;
  retainerPriceSub: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
  icon: React.ReactNode;
};

export default function PricingPageClient() {
  const [billingPeriod, setBillingPeriod] = useState<"one-off" | "retainer">("one-off");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const tiers: PricingTier[] = [
    {
      name: "Starter Automation",
      badge: "Operational Foundation",
      description: "Ideal for startups and SMBs seeking to audit their processes and automate their first critical business workflow.",
      oneOffPrice: "$2,000",
      oneOffPriceSub: "per project",
      retainerPrice: "$1,500",
      retainerPriceSub: "per month",
      icon: <Workflow className="h-5 w-5 text-[#E0AAFF]" />,
      features: [
        "Single-path n8n workflow automations",
        "Basic custom script setups (JS/Python)",
        "CRM & Spreadsheet syncs (HubSpot, Sheets, Airtable)",
        "Standard error logging & email alerts",
        "Up to 2 connected platforms",
        "1 week post-launch support",
        "Self-hosting VPS setup assistance"
      ],
      ctaText: "Get Started"
    },
    {
      name: "Scale AI",
      badge: "Recommended",
      description: "Best for growing startups, agencies, and teams ready to connect their entire stack and deploy voice AI and custom DBs.",
      oneOffPrice: "$4,500",
      oneOffPriceSub: "per project",
      retainerPrice: "$5,000",
      retainerPriceSub: "per month",
      icon: <Zap className="h-5 w-5 text-[#E0AAFF]" />,
      highlighted: true,
      features: [
        "Multi-branch n8n pipelines & conditional logic",
        "Full Voice AI agent orchestration (Vapi/Retell)",
        "Customized database integrations (Supabase/Postgres)",
        "Cold outreach & email setups (Smartlead/Instantly)",
        "Hardened error handling & instant Slack alerting",
        "Vector memory & RAG setup for AI search",
        "4 weeks post-launch support & handoff docs",
        "Fully managed self-hosted VPS configuration"
      ],
      ctaText: "Deploy Scale AI"
    },
    {
      name: "Enterprise Hub",
      badge: "Technical Partner",
      description: "For agencies and enterprises needing white-label AI engineering, custom React/Next.js portals, and multi-agent systems.",
      oneOffPrice: "Custom",
      oneOffPriceSub: "bespoke quote",
      retainerPrice: "$10,000",
      retainerPriceSub: "starts at / month",
      icon: <Sparkles className="h-5 w-5 text-[#E0AAFF]" />,
      features: [
        "Multi-agent frameworks (Python, LangGraph, pgvector)",
        "Custom micro-SaaS dashboard development (Next.js/Supabase)",
        "White-label embedding (I act as your agency's backend)",
        "Premium self-hosted deployment with automatic backups",
        "Unlimited connected systems & high-frequency workflows",
        "24/7 priority support & dedicated Slack channel",
        "Full source code ownership & team handoff sessions",
        "Monthly strategy reviews & process optimization audits"
      ],
      ctaText: "Embed as Partner"
    }
  ];

  const featureMatrix = [
    {
      category: "Automation & Operations",
      features: [
        { name: "n8n Workflows", starter: "Single-Path", scale: "Multi-Branch & Loops", enterprise: "Unlimited & Complex Scripts" },
        { name: "Connected Platforms", starter: "Up to 2", scale: "Up to 5", enterprise: "Unlimited" },
        { name: "Error Handling & Alerts", starter: "Email alerts", scale: "Instant Slack Alerts", enterprise: "Custom Alerting & Redundant Failovers" },
        { name: "Self-Hosting Setup", starter: "Setup Guide", scale: "Fully Configured VPS", enterprise: "High-Availability Multi-Region VPS" },
      ]
    },
    {
      category: "AI & Voice Orchestration",
      features: [
        { name: "Voice Agents (Vapi/Retell)", starter: "—", scale: "Up to 2 agents", enterprise: "Unlimited custom voice agents" },
        { name: "LLM Reasoning Engines", starter: "Basic API calls", scale: "Claude 3.5 / GPT-4o Tuning", enterprise: "Multi-Agent Teams & LangGraph" },
        { name: "RAG & Vector Memory", starter: "—", scale: "Standard vector store", enterprise: "Bespoke database and custom indexing" },
      ]
    },
    {
      category: "Custom Software & Dashboards",
      features: [
        { name: "React/Next.js Codebase", starter: "—", scale: "—", enterprise: "Full Micro-SaaS/Internal Portal" },
        { name: "Database & Backend Support", starter: "Google Sheets / Airtable", scale: "Supabase & PostgreSQL", enterprise: "Bespoke relational and vector DBs" },
        { name: "White-Label Deliverables", starter: "—", scale: "—", enterprise: "100% white-labeled client systems" },
      ]
    },
    {
      category: "Support & Guarantees",
      features: [
        { name: "Post-Launch Support", starter: "1 Week", scale: "4 Weeks", enterprise: "Continuous / 24/7 Priority" },
        { name: "Dedicated Slack Channel", starter: "—", scale: "Yes (Normal Business Hours)", enterprise: "Yes (Priority Escalation)" },
        { name: "Risk-Free Audit Guarantee", starter: "Included", scale: "Included", enterprise: "Included" },
      ]
    }
  ];

  const faqs = [
    {
      id: "faq-1",
      question: "Is AI-coded software or automated workflow quality low?",
      answer: "Absolutely not. I use Claude Code and cursor engines as force multipliers to skip boilerplate and scaffold applications at high speed. However, every single line of code, prompt structure, database schema, and logical flow is architected, thoroughly reviewed, and edge-case tested by me. You get custom, production-grade systems in days instead of months."
    },
    {
      id: "faq-2",
      question: "What happens if an API or integration breaks?",
      answer: "I design strong systems with hardened error boundaries. For Scale AI and Enterprise tiers, I build automatic retries and redirect fail-safes directly into the workflows, alongside instant Slack alerting. If an external API changes or drops, I know about it within seconds and can deploy fixes before it disrupts your operations. My retainer plans include continuous optimization and ongoing integration maintenance."
    },
    {
      id: "faq-3",
      question: "We have strict data privacy and compliance requirements. Can we use AI?",
      answer: "Yes, this is my primary differentiator. Traditional automation platforms like Zapier run on third-party clouds and charge you per transaction, exposing your data. AIFLOXIUM deploys self-hosted workflow automation engines (n8n) directly on your own secure virtual private servers (AWS, DigitalOcean, etc.). Your customer and business data never leaves your infrastructure, keeping your systems fully compliant and secure."
    },
    {
      id: "faq-4",
      question: "How does the Money-Back Guarantee and ROI Audit work?",
      answer: "Every engagement begins with a comprehensive Process Map and ROI Audit. If I analyze your existing operations and realize there is no viable path to save your team at least 10 hours per week or eliminate lead leakage, I will cancel the project and refund your deposit immediately. Additionally, I back all my builds with a 30-day post-launch warranty, where I adjust logic and tweak prompts to hit the promised KPIs."
    },
    {
      id: "faq-5",
      question: "Should I choose a One-Off Project or a Monthly Retainer?",
      answer: "One-Off Projects are best if you have a defined, static operational bottleneck (e.g., automating lead routing from a landing page to your CRM, or setting up a specific voice support agent). The Monthly Retainer is designed for agencies needing an ongoing white-label developer backend, or growing startups with dynamic processes that require continuous building, scaling, and maintenance of their automated infrastructure."
    },
    {
      id: "faq-6",
      question: "How long does a typical build take?",
      answer: "Starter Automations are typically delivered and live within 5–7 days. Scale AI pipelines and voice setups range from 2–3 weeks. Enterprise dashboard developments and custom multi-agent environments typically roll out in iterative phases starting within 3–4 weeks."
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-24 md:pt-40">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7B2CBF]/5 opacity-40 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-[#7B2CBF]/5 opacity-30 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-white/50 uppercase tracking-widest relative z-10 font-inter">
          <Link href="/" className="transition-colors hover:text-zinc-900">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-white/30" />
          <span className="text-zinc-900 font-bold">Pricing</span>
        </nav>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E0AAFF] mb-4 font-inter"
          >
            VALUE-ALIGNED PRICING
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-instrument text-zinc-900 leading-[1.05] tracking-tight mb-6"
          >
            Senior execution. <br />
            <span className="font-instrument text-[#E0AAFF] italic">No payroll bloat.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-600 font-inter font-light leading-relaxed"
          >
            Select a project-based one-off build to solve a specific bottleneck, or embed AIFLOXIUM as your ongoing technical partner.
          </motion.p>

          {/* Toggle Switch */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="inline-flex items-center gap-1 p-1 bg-white/[0.01] border border-zinc-200 rounded-full mt-10 liquid-glass"
          >
            <button
              onClick={() => setBillingPeriod("one-off")}
              className={cn(
                "relative px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer font-inter",
                billingPeriod === "one-off" 
                  ? "bg-white text-black button-glow" 
                  : "text-zinc-500 hover:text-zinc-900"
              )}
            >
              One-Off Projects
            </button>
            <button
              onClick={() => setBillingPeriod("retainer")}
              className={cn(
                "relative px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer font-inter",
                billingPeriod === "retainer" 
                  ? "bg-white text-black button-glow" 
                  : "text-zinc-500 hover:text-zinc-900"
              )}
            >
              Monthly Retainer
            </button>
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-stretch">
          {tiers.map((tier, idx) => {
            const isHighlighted = tier.highlighted;
            const price = billingPeriod === "one-off" ? tier.oneOffPrice : tier.retainerPrice;
            const priceSub = billingPeriod === "one-off" ? tier.oneOffPriceSub : tier.retainerPriceSub;
            
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className={cn(
                  "relative flex flex-col justify-between rounded-[2rem] p-8 transition-all duration-500 border border-white/5 bg-white/[0.01] liquid-glass",
                  isHighlighted 
                    ? "border-[#7B2CBF]/30 bg-[#7B2CBF]/5" 
                    : "",
                  hoveredCard === idx ? "scale-[1.01] border-[#7B2CBF]/40" : ""
                )}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Highlight/Recommended Badge */}
                {isHighlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7B2CBF] to-[#E0AAFF] text-zinc-900 font-semibold text-[9px] uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                    {tier.badge}
                  </span>
                )}
                {!isHighlighted && tier.badge && (
                  <span className="text-[10px] text-white/40 font-semibold uppercase tracking-wider mb-2 block font-inter">
                    {tier.badge}
                  </span>
                )}

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-semibold font-inter tracking-wide text-zinc-900">
                      {tier.name}
                    </h3>
                    <div className="p-2.5 bg-[#7B2CBF]/5 border border-[#7B2CBF]/20 rounded-2xl">
                      {tier.icon}
                    </div>
                  </div>

                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-inter font-light">
                    {tier.description}
                  </p>

                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-4xl md:text-5xl font-instrument italic text-[#E0AAFF]">
                      {price}
                    </span>
                    <span className="text-white/50 text-[10px] uppercase tracking-widest font-semibold font-inter">
                      / {priceSub}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-zinc-100 mb-8" />

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-zinc-800 font-inter font-light">
                        <Check className="h-4.5 w-4.5 text-[#E0AAFF] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call-to-action Button */}
                <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-full h-12 rounded-full flex items-center justify-center font-semibold text-xs uppercase tracking-wider transition-all duration-300 font-inter",
                    isHighlighted
                      ? "bg-white text-black hover:bg-[#E0AAFF] button-glow shadow-xl"
                      : "bg-zinc-50 text-zinc-900 border border-zinc-200 hover:bg-zinc-100"
                  )}
                >
                  {tier.ctaText}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Comparison Matrix */}
        <div className="hidden md:block mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-instrument text-zinc-900 tracking-tight">
              Detailed comparison matrix
            </h2>
            <p className="text-zinc-500 font-inter font-light text-sm mt-2">
              Compare features, capabilities, and delivery models across my tiers.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/5 bg-white/[0.01] liquid-glass">
            <table className="w-full text-left border-collapse font-inter">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50">
                  <th className="p-6 text-xs font-semibold uppercase tracking-widest text-zinc-600">Feature Capabilities</th>
                  <th className="p-6 text-xs font-semibold uppercase tracking-widest text-zinc-600">Starter</th>
                  <th className="p-6 text-xs font-semibold uppercase tracking-widest text-zinc-600">Scale AI</th>
                  <th className="p-6 text-xs font-semibold uppercase tracking-widest text-zinc-600">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {featureMatrix.map((cat, catIdx) => (
                  <React.Fragment key={catIdx}>
                    <tr className="bg-white/2">
                      <td colSpan={4} className="p-4 px-6 text-[10px] font-semibold uppercase tracking-widest text-[#E0AAFF] border-b border-white/5">
                        {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((feat, featIdx) => (
                      <tr key={featIdx} className="border-b border-white/5 hover:bg-white/2 transition-colors duration-200">
                        <td className="p-6 text-sm text-zinc-900 font-medium">{feat.name}</td>
                        <td className="p-6 text-sm text-zinc-500 font-light">{feat.starter}</td>
                        <td className="p-6 text-sm text-zinc-500 font-medium">{feat.scale}</td>
                        <td className="p-6 text-sm text-zinc-900 font-bold">{feat.enterprise}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Money-Back Guarantee & ROI Audit Banner */}
        <div className="relative rounded-[2.5rem] bg-white/[0.01] border border-white/5 p-8 md:p-12 mb-32 overflow-hidden liquid-glass">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#7B2CBF]/10 blur-[80px] rounded-full pointer-events-none -z-10" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#7B2CBF]/5 rounded-xl border border-[#7B2CBF]/20">
                  <Award className="h-6 w-6 text-[#E0AAFF]" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#E0AAFF] font-inter">
                  100% RISK-FREE ONBOARDING
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-instrument text-zinc-900 tracking-tight mb-4">
                The AIFLOXIUM money-back guarantee
              </h2>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-inter font-light">
                Every project begins with a comprehensive Process Mapping and ROI Audit. If I analyze your workflows and realize there is no viable path to save your team at least <strong className="text-zinc-900 font-semibold">10 hours a week</strong> or completely eliminate lead leakage, I will cancel the project and refund your deposit instantly. 
                <br /><br />
                I also back every build with a <strong className="text-zinc-900 font-semibold">30-day post-launch optimization warranty</strong> to tweak instructions and handle API changes at no extra cost.
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-center justify-center p-8 bg-black/40 border border-white/5 rounded-2xl max-w-xs text-center liquid-glass">
              <span className="text-5xl font-instrument italic text-[#E0AAFF] mb-2 leading-none">10h+</span>
              <span className="text-[10px] uppercase tracking-widest text-white/50 font-semibold mb-4 font-inter">Weekly Time Saved</span>
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black hover:bg-[#E0AAFF] button-glow text-xs font-semibold uppercase tracking-wider px-6 py-3 transition-all duration-300 font-inter"
              >
                Claim Free Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="p-8 rounded-3xl relative overflow-hidden bg-white/[0.01] border border-white/5 liquid-glass">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#7B2CBF]/5 blur-[30px] rounded-full pointer-events-none" />
            <div className="p-3 bg-[#7B2CBF]/5 border border-[#7B2CBF]/20 rounded-2xl inline-block mb-6">
              <Shield className="h-6 w-6 text-[#E0AAFF]" />
            </div>
            <h3 className="text-xl font-semibold font-inter tracking-wide text-zinc-900 mb-3">Self-hosted infrastructure</h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-inter font-light">
              I host workflow engines directly on your own private cloud (AWS/DigitalOcean). This ensures total compliance, absolute security, and eliminates Zapier&apos;s scaling transactional fees.
            </p>
          </div>

          <div className="p-8 rounded-3xl relative overflow-hidden bg-white/[0.01] border border-white/5 liquid-glass">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#7B2CBF]/5 blur-[30px] rounded-full pointer-events-none" />
            <div className="p-3 bg-[#7B2CBF]/5 border border-[#7B2CBF]/20 rounded-2xl inline-block mb-6">
              <Code className="h-6 w-6 text-[#E0AAFF]" />
            </div>
            <h3 className="text-xl font-semibold font-inter tracking-wide text-zinc-900 mb-3">Senior engineer led</h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-inter font-light">
              You work directly with me, a senior AI automation engineer. No middle managers or junior developers. Every prompt, script, and API endpoint is architected for stability.
            </p>
          </div>

          <div className="p-8 rounded-3xl relative overflow-hidden bg-white/[0.01] border border-white/5 liquid-glass">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#7B2CBF]/5 blur-[30px] rounded-full pointer-events-none" />
            <div className="p-3 bg-[#7B2CBF]/5 border border-[#7B2CBF]/20 rounded-2xl inline-block mb-6">
              <Lock className="h-6 w-6 text-[#E0AAFF]" />
            </div>
            <h3 className="text-xl font-semibold font-inter tracking-wide text-zinc-900 mb-3">Complete code ownership</h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-inter font-light">
              Unlike SaaS vendors, I hand over full code ownership. You receive complete access to the visual n8n workflows and Next.js repositories, with no vendor lock-in.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E0AAFF] mb-4 font-inter"
            >
              FAQ
            </motion.p>
            <h2 className="text-3xl md:text-5xl font-instrument text-zinc-900 tracking-tight">
              Common objections, answered
            </h2>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-white/[0.01] border border-white/5 liquid-glass">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem 
                  value={faq.id} 
                  key={faq.id} 
                  className="border-b border-zinc-200 last:border-b-0 py-2"
                >
                  <AccordionTrigger className="text-left font-inter font-semibold text-base md:text-lg text-zinc-900 hover:text-[#E0AAFF] cursor-pointer hover:no-underline [&>svg]:text-[#E0AAFF]">
                    <span className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-[#E0AAFF] shrink-0" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-500 text-sm leading-relaxed pl-8 pt-2 pb-4 font-inter font-light">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
