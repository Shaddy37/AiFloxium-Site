"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ExternalLink,
  Check,
  Copy,
  Sparkles,
  Filter,
  ChevronRight,
  Zap,
  Terminal,
  ShieldAlert,
  Table as TableIcon,
  LayoutGrid,
  AlertTriangle,
  Star,
  Info,
  Compass,
  Layers,
  ArrowUpRight,
  Cpu,
  BookOpen,
  CheckCircle2,
  X
} from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { Contact2 } from "@/components/ui/contact-2";

interface SkillItem {
  id: number;
  rank: number;
  name: string;
  repo: string;
  url?: string;
  stars: number | null;
  starsDisplay: string;
  category: "Internet & Research" | "Engineering & Shipping" | "Orchestration & Control" | "Media & Specialists" | "Writing & Content" | "Memory & Self-Improvement";
  categorySlug: "research" | "engineering" | "orchestration" | "media" | "writing" | "memory";
  dayOne: boolean;
  dayOneOrder?: number;
  dayOneRole?: string;
  skipOnDayOne?: boolean;
  verified: boolean;
  installCommand: string;
  isHermesNative?: boolean;
  summary: string;
  problemSolved: string;
  howToUse: string;
  bestFor: string[];
  caveats?: string;
}

const SKILLS_DATA: SkillItem[] = [
  {
    id: 1,
    rank: 1,
    name: "Matt Pocock skills",
    repo: "mattpocock/skills",
    url: "https://github.com/mattpocock/skills",
    stars: 238275,
    starsDisplay: "238,275",
    category: "Engineering & Shipping",
    categorySlug: "engineering",
    dayOne: false,
    verified: true,
    installCommand: "npx skills@latest add mattpocock/skills",
    summary: "The most-starred skill pack on GitHub by a wide margin, built on small, composable, editable skills rather than one giant opaque framework.",
    problemSolved: "Big process frameworks take control away from you. When your agent has a giant opaque process and something breaks, you cannot debug it. When it has no process at all, work drifts. Matt's set sits deliberately in the middle: small enough that you can open one and hack it.",
    howToUse: "Install via npx, then run the setup skill once per repository.",
    bestFor: ["TypeScript & app engineering", "Ticket triage", "Feature planning", "Day-to-day shipping"],
    caveats: "Run setup per repo rather than globally."
  },
  {
    id: 2,
    rank: 2,
    name: "addyosmani/agent-skills",
    repo: "addyosmani/agent-skills",
    url: "https://github.com/addyosmani/agent-skills",
    stars: 90115,
    starsDisplay: "90,115",
    category: "Engineering & Shipping",
    categorySlug: "engineering",
    dayOne: true,
    dayOneOrder: 2,
    dayOneRole: "Engineering Discipline",
    verified: true,
    installCommand: "npx skills add addyosmani/agent-skills",
    summary: "Production engineering lifecycle skills (define, plan, build, verify, review, ship) that force senior developer habits onto coding agents.",
    problemSolved: "Stops 'vibe coding' with zero validation gates. These skills force habits senior engineers already have: write the spec, cut the work small, test it, review it.",
    howToUse: "Execute lifecycle commands for your features: define -> plan -> build -> verify -> review -> ship.",
    bestFor: ["Real software products", "Frontend & UI work", "Multi-day feature engineering", "Code review automation"]
  },
  {
    id: 3,
    rank: 3,
    name: "Agent-Reach",
    repo: "Panniantong/Agent-Reach",
    url: "https://github.com/Panniantong/Agent-Reach",
    stars: 75763,
    starsDisplay: "75,763",
    category: "Internet & Research",
    categorySlug: "research",
    dayOne: true,
    dayOneOrder: 1,
    dayOneRole: "Public Web Access",
    verified: true,
    installCommand: "npx skills add Panniantong/Agent-Reach",
    summary: "A CLI and skill pack giving your agent direct read access to the public internet across X, Reddit, YouTube, GitHub, Bilibili, and XiaoHongShu with zero paid API keys.",
    problemSolved: "Agents hit walls when searching current social signals, technical threads, and tutorials: blocked scrapers, paywalled APIs, and login walls. Agent-Reach bridges this cleanly.",
    howToUse: "Ask your agent in plain English to inspect live X reactions, summarize recent YouTube tutorial transcripts, or check community bug reports on Reddit.",
    bestFor: ["Live content research", "Competitor audits", "Social listening", "Debugging community bugs"]
  },
  {
    id: 4,
    rank: 4,
    name: "OpenMontage",
    repo: "calesthio/OpenMontage",
    url: "https://github.com/calesthio/OpenMontage",
    stars: 51586,
    starsDisplay: "51,586",
    category: "Media & Specialists",
    categorySlug: "media",
    dayOne: false,
    skipOnDayOne: true,
    verified: true,
    installCommand: "npx skills add calesthio/OpenMontage",
    summary: "An open-source agentic video production system packing 12 production pipelines, 100+ tools, and over 700 skill and knowledge files.",
    problemSolved: "Video production normally fractures across scripts, b-roll, timeline cuts, captions, and encoding. OpenMontage turns your agent into an end-to-end video crew.",
    howToUse: "Trigger specific video creation workflows from script generation through b-roll matching and timeline assembly.",
    bestFor: ["Short-form video", "Product explainer videos", "Demo clip generation"],
    caveats: "Heaviest install on the list (700+ files). Do not install until you are actively rendering video."
  },
  {
    id: 5,
    rank: 5,
    name: "codebase-memory-mcp",
    repo: "DeusData/codebase-memory-mcp",
    url: "https://github.com/DeusData/codebase-memory-mcp",
    stars: 40809,
    starsDisplay: "40,809",
    category: "Engineering & Shipping",
    categorySlug: "engineering",
    dayOne: false,
    verified: true,
    installCommand: "npx skills add DeusData/codebase-memory-mcp",
    summary: "High-speed MCP server that indexes your repository into a persistent knowledge graph across 158 languages with sub-millisecond queries.",
    problemSolved: "Context exhaustion. Reading raw code files over and over burns 80% of your token window. A knowledge graph answers structural queries (call graphs, imports, broken references) without loading full files.",
    howToUse: "Run as an MCP background binary and query codebase structure directly.",
    bestFor: ["Large production repos", "Monorepos", "Token cost reduction (up to 99%)"]
  },
  {
    id: 6,
    rank: 6,
    name: "Humanizer",
    repo: "blader/humanizer",
    url: "https://github.com/blader/humanizer",
    stars: 38179,
    starsDisplay: "38,179",
    category: "Writing & Content",
    categorySlug: "writing",
    dayOne: true,
    dayOneOrder: 3,
    dayOneRole: "De-slopping & Voice Matching",
    verified: true,
    installCommand: "npx skills add blader/humanizer",
    summary: "De-slop writing skill that strips recognizable AI tells (hype adjectives, uniform lists, structural cliches) based on Wikipedia's AI-detection markers.",
    problemSolved: "Standard AI output sounds like a canned PR release. Humanizer rewrites without preserving the robotic syntax, scans for residual markers, and retains 100% of facts.",
    howToUse: "Paste 2-3 paragraphs of your personal writing voice and instruct Humanizer to match cadence while stripping AI tells.",
    bestFor: ["Public articles & blogs", "Documentation", "Client emails", "Launch announcements"]
  },
  {
    id: 7,
    rank: 7,
    name: "Anthropic Cybersecurity Skills",
    repo: "mukul975/Anthropic-Cybersecurity-Skills",
    url: "https://github.com/mukul975/Anthropic-Cybersecurity-Skills",
    stars: 31306,
    starsDisplay: "31,306",
    category: "Media & Specialists",
    categorySlug: "media",
    dayOne: false,
    skipOnDayOne: true,
    verified: true,
    installCommand: "npx skills add mukul975/Anthropic-Cybersecurity-Skills",
    summary: "817 structured cybersecurity playbooks across 29 security domains, mapped to MITRE ATT&CK, NIST CSF 2.0, D3FEND, and NIST AI RMF.",
    problemSolved: "Agents lack framework-aligned security rigor by default. This equips the agent for threat modeling, forensic investigations, and authorized red-team prep.",
    howToUse: "Execute threat modeling reviews or vulnerability scans against authorized codebases.",
    bestFor: ["Authorized security reviews", "Incident response drafts", "Threat modeling", "Security education"],
    caveats: "Community repo (NOT official Anthropic). Contains dual-use offensive tools. Use ONLY on authorized systems."
  },
  {
    id: 8,
    rank: 8,
    name: "Defuddle",
    repo: "kepano/defuddle",
    url: "https://github.com/kepano/defuddle",
    stars: 9173,
    starsDisplay: "9,173",
    category: "Internet & Research",
    categorySlug: "research",
    dayOne: true,
    dayOneOrder: 4,
    dayOneRole: "Clean Web Input",
    verified: true,
    installCommand: "npx skills add kepano/defuddle",
    summary: "Clean web content extractor by Kepano (Obsidian CEO). Takes messy web URLs and returns pure article Markdown, stripping ads, cookies, and boilerplate.",
    problemSolved: "Agents choke on raw HTML. Cookie banners, complex nav trees, and inline scripts burn context and distract models. Defuddle extracts pure signal.",
    howToUse: "Pass any article URL into Defuddle to feed pure markdown directly into agent research loops.",
    bestFor: ["Research pipelines", "Web clipping", "Context preprocessing", "Pairing with Agent-Reach"]
  },
  {
    id: 9,
    rank: 9,
    name: "make-interfaces-feel-better",
    repo: "jakubkrehel/make-interfaces-feel-better",
    url: "https://github.com/jakubkrehel/make-interfaces-feel-better",
    stars: 3024,
    starsDisplay: "3,024",
    category: "Engineering & Shipping",
    categorySlug: "engineering",
    dayOne: false,
    verified: true,
    installCommand: "npx skills add jakubkrehel/make-interfaces-feel-better",
    summary: "Specialized UI polish skill focusing on micro-interactions, optical alignment, typography scales, hit areas, hover states, and elevation shadows.",
    problemSolved: "AI-generated interfaces usually work but feel cheap or generic. This skill performs a dedicated sensory pass on UI code to make it feel intentional.",
    howToUse: "Run as a second pass immediately after your agent builds a frontend page, asking for a sensory & polish review.",
    bestFor: ["Landing pages", "Web app dashboards", "Component libraries", "Mobile touch targets"]
  },
  {
    id: 10,
    rank: 10,
    name: "SkillClaw",
    repo: "AMAP-ML/SkillClaw",
    url: "https://github.com/AMAP-ML/SkillClaw",
    stars: 2517,
    starsDisplay: "2,517",
    category: "Memory & Self-Improvement",
    categorySlug: "memory",
    dayOne: false,
    skipOnDayOne: true,
    verified: true,
    installCommand: "npx skills add AMAP-ML/SkillClaw",
    summary: "Evolutionary agent skill system that digests past sessions, refines procedures you actually use, and prunes unused skills automatically.",
    problemSolved: "Static procedures stagnate. SkillClaw turns agent usage history into a self-optimizing feedback loop that gets sharper over time.",
    howToUse: "Run in the background once you have accumulated 2-4 weeks of production agent session logs.",
    bestFor: ["Long-term agent setups", "Continuous developer optimization", "Pruning dead skills"],
    caveats: "Requires usage history before it can provide value; do not install on day one."
  },
  {
    id: 11,
    rank: 11,
    name: "Minions",
    repo: "agent37-platform/minions",
    url: "https://github.com/agent37-platform/minions",
    stars: 624,
    starsDisplay: "624",
    category: "Orchestration & Control",
    categorySlug: "orchestration",
    dayOne: true,
    dayOneOrder: 5,
    dayOneRole: "Parallel Mission Control",
    verified: true,
    installCommand: "npx minionsai",
    summary: "Kanban mission control dashboard for Hermes and autonomous agents. Live tool call streaming, human sign-off gates, and local SQLite persistence.",
    problemSolved: "Juggling 5 parallel agent terminal windows is chaos. You lose track of stuck tasks, background errors, and human approval prompts. Minions brings visual order.",
    howToUse: "Run `npx minionsai` and open http://localhost:6969 in your browser to manage tasks.",
    bestFor: ["Multi-agent parallel workflows", "Long-running tasks", "Human-in-the-loop approvals", "Local-first SQLite logging"]
  },
  {
    id: 12,
    rank: 12,
    name: "youtube-skills",
    repo: "ZeroPointRepo/youtube-skills",
    url: "https://github.com/ZeroPointRepo/youtube-skills",
    stars: 572,
    starsDisplay: "572",
    category: "Internet & Research",
    categorySlug: "research",
    dayOne: false,
    verified: true,
    isHermesNative: true,
    installCommand: "hermes skills install skills-sh/ZeroPointRepo/youtube-skills/skills/youtube-full",
    summary: "YouTube video transcript extractor, channel scanner, and playlist analyzer that bypasses cloud IP bans without yt-dlp blocks.",
    problemSolved: "Agents repeatedly fail when asking for YouTube video summaries because cloud providers block raw scrapers. This skill provides reliable transcript ingestion.",
    howToUse: "Ask Hermes to summarize YouTube tutorial links, pull conference talk notes, or analyze competitor channel uploads.",
    bestFor: ["Video tutorial summaries", "Conference talk notes", "Competitor video research"],
    caveats: "Uses a credit-backed API for transcript resolution; verify free tier quotas."
  },
  {
    id: 13,
    rank: 13,
    name: "oh-my-hermes",
    repo: "witt3rd/oh-my-hermes",
    url: "https://github.com/witt3rd/oh-my-hermes",
    stars: 291,
    starsDisplay: "291",
    category: "Orchestration & Control",
    categorySlug: "orchestration",
    dayOne: false,
    verified: true,
    isHermesNative: true,
    installCommand: "hermes skills install skills-sh/witt3rd/oh-my-hermes",
    summary: "Multi-agent orchestration framework built natively for Hermes primitives: enforces research -> interview -> ralplan -> ralph execution cycles.",
    problemSolved: "Prevents single-agent freestyling on complex architecture tasks where agents declare victory without validating requirements or edge cases.",
    howToUse: "Trigger structured planning sequences on complex features spanning multiple days.",
    bestFor: ["Unfamiliar technical domains", "Complex system design", "Multi-day feature rollouts"]
  },
  {
    id: 14,
    rank: 14,
    name: "Resemble AI Detect",
    repo: "resemble-ai/detect-skill",
    url: "https://github.com/resemble-ai/detect-skill",
    stars: 65,
    starsDisplay: "65",
    category: "Media & Specialists",
    categorySlug: "media",
    dayOne: false,
    skipOnDayOne: true,
    verified: true,
    installCommand: "npx skills add resemble-ai/detect-skill",
    summary: "Media safety verification skill detecting AI-generated or manipulated audio, synthetic voices, and deepfake video clips using Resemble's enterprise detection model.",
    problemSolved: "Prevents agents and automation pipelines from citing or reposting fabricated media or deepfakes in research and content pipelines.",
    howToUse: "Feed suspected audio/video files through Resemble verification before publishing or quoting.",
    bestFor: ["Content moderation", "Brand safety", "Investigative verification"],
    caveats: "Detection is probabilistic; never treat detection scores as absolute proof without human review."
  },
  {
    id: 15,
    rank: 15,
    name: "Composio skills",
    repo: "composiohq/skills",
    stars: null,
    starsDisplay: "Unverified",
    category: "Orchestration & Control",
    categorySlug: "orchestration",
    dayOne: false,
    verified: false,
    installCommand: "npx skills add composiohq/skills",
    summary: "Tool router, auth management, and production session patterns connecting agents safely to 200+ SaaS platforms (Slack, Gmail, GitHub, Hubspot).",
    problemSolved: "Writing raw OAuth and API integration code inside agent sessions is messy and fragile. Composio standardizes authentication and session handling.",
    howToUse: "Integrate into workflows that require real SaaS account mutations rather than local file edits.",
    bestFor: ["CRM automation", "Slack/Email bots", "External app mutations"],
    caveats: "Unverified repository metrics; confirm canonical documentation before enterprise deployment."
  },
  {
    id: 16,
    rank: 16,
    name: "Browser Harness",
    repo: "Category Recommendation",
    stars: null,
    starsDisplay: "Unverified",
    category: "Orchestration & Control",
    categorySlug: "orchestration",
    dayOne: false,
    verified: false,
    installCommand: "Verify source before granting session permissions",
    summary: "Architecture pattern where an agent navigates your logged-in browser session and accumulates reusable site helpers for future runs.",
    problemSolved: "Eliminates having to re-authenticate or re-teach navigation paths across websites every time an agent runs a browser task.",
    howToUse: "Use browser wrappers to share authenticated sessions safely with local agent runtimes.",
    bestFor: ["Authenticated site automation", "Complex internal portals", "Dynamic web scraping"],
    caveats: "High-trust security boundary. Never give untrusted skills access to authenticated browser profiles."
  },
  {
    id: 17,
    rank: 17,
    name: "Loopy / Loop Library",
    repo: "Category Recommendation",
    stars: null,
    starsDisplay: "Unverified",
    category: "Memory & Self-Improvement",
    categorySlug: "memory",
    dayOne: false,
    verified: false,
    installCommand: "Define check rules, stop conditions & iteration caps",
    summary: "Loop discipline framework: enforces explicit success checks, hard stop conditions, and strict iteration caps for autonomous loops.",
    problemSolved: "Unbounded agent loops can burn thousands of dollars in API credits and produce hundreds of hallucinated commits overnight.",
    howToUse: "Always define 3 parameters before initiating an autonomous run: Success Criteria, Stop Trigger, Max Iterations.",
    bestFor: ["Autonomous refactoring", "Long-running test-and-repair loops", "Cost governance"],
    caveats: "Treat as an engineering rule rather than a single npm package."
  }
];

const FAQS = [
  {
    q: "What is an agent skill?",
    a: "An agent skill is a written procedure your agent loads on demand when a task matches it. It does not add new capability to the model, it records how you want a job done so you stop re-explaining the same workflow every session. Skills make output consistent across sessions, projects and machines."
  },
  {
    q: "What are the best Hermes skills to install first?",
    a: "Five: Agent-Reach for internet access, addyosmani/agent-skills for engineering discipline, Humanizer for anything you publish, Defuddle for clean web content, and Minions for visibility into parallel jobs. Together they cover research input, work process and output quality, and all five are free."
  },
  {
    q: "How do I install a Hermes skill?",
    a: "Find the skill's repository and confirm it is the canonical source. Run npx skills add owner/repo or hermes skills install skills-sh/owner/repo/skills/name for Hermes-native packs. Run per-repo setup, test on a small task, and remove if unused."
  },
  {
    q: "Do agent skills use up my context window?",
    a: "Yes, and this is the most overlooked cost. Skills consume context when they are available, not only when they run. Large packs are the issue: the cybersecurity library contains 817 skills and OpenMontage over 700 files. Install per project rather than globally, and uninstall anything that has not fired in a month."
  },
  {
    q: "Are agent skills free?",
    a: "Every skill in this list is free and open source, most under MIT or Apache 2.0. Some depend on external services with their own pricing, notably the YouTube transcript API behind youtube-skills and Resemble AI's detection stack. The real cost of skills is context window, not money."
  },
  {
    q: "Is the Anthropic Cybersecurity Skills repo official?",
    a: "No. Despite the name, mukul975/Anthropic-Cybersecurity-Skills is a community project and not an official Anthropic product. It contains 817 skills across 29 domains mapped to six frameworks including MITRE ATT&CK and NIST CSF 2.0, and it includes offensive dual-use techniques intended only for authorized testing, defense, research and education."
  },
  {
    q: "Which Hermes skill has the most GitHub stars?",
    a: "mattpocock/skills at 238,275 stars as of August 27, 2026, followed by addyosmani/agent-skills at 90,115 and Panniantong/Agent-Reach at 75,763. For wider context, the largest skills repository on GitHub is obra/superpowers at 278,274 stars, which is not part of this seventeen because it is a foundational framework rather than an add-on pack."
  },
  {
    q: "Can an AI agent really edit video?",
    a: "With OpenMontage, closer than you would expect. It ships 12 production pipelines, over 100 tools and more than 700 skill and production-knowledge files, covering script through b-roll, edit, captions and export. At 51,586 stars it has real adoption. However, it is the heaviest install on this list, so only add it if you genuinely produce video."
  },
  {
    q: "How do I stop my AI writing from sounding like AI?",
    a: "Use the Humanizer skill, which is built on Wikipedia's documented signs of AI writing and has 38,179 stars. It rewrites, scans for remaining tells, then rewrites again while preserving facts. The step most people miss: paste two or three paragraphs of your own writing and ask it to match your voice, because generic de-slopping produces text that sounds like nobody."
  },
  {
    q: "What is the difference between an agent skill and an MCP server?",
    a: "A skill is a written procedure telling the agent how to do a job, while an MCP server is a running service exposing tools and data the agent can call. Skills change behavior, MCP servers add reach. Some entries here are both: codebase-memory-mcp is an MCP server that gives an agent structural access to a repository."
  },
  {
    q: "Should I install all 17 skills at once?",
    a: "No. Install five on day one and add the rest by need. Installing everything at once burns context budget, and more importantly you will not know which skill caused which behavior when something goes wrong. Failure-driven installation, adding the skill for whatever your agent keeps getting wrong, beats installing aspirationally."
  },
  {
    q: "Do these skills only work with Hermes?",
    a: "Most work across runtimes. The repository topics for these packs commonly list Claude Code, Codex, Cursor, Gemini CLI, OpenClaw and Windsurf alongside Hermes Agent. The exceptions built specifically for Hermes primitives are oh-my-hermes and Minions, which is mission control for Hermes agents specifically."
  },
  {
    q: "Can agent skills improve themselves over time?",
    a: "Yes, that is SkillClaw's premise. It digests your real sessions in the background, improves the skills you actually used, removes ones that never fire, and compounds that experience across agents and devices. Install it after you have accumulated real usage, since a system that learns from sessions has nothing to work with on a fresh machine."
  }
];

const GLOSSARY_ITEMS = [
  { term: "Agent Skill", desc: "A written procedure an agent loads on demand when a task matches it. Adds consistency, not raw capability." },
  { term: "Hermes Agent", desc: "The Nous Research agent runtime these skills target, though most work across Claude Code, Codex, and Cursor too." },
  { term: "MCP (Model Context Protocol)", desc: "The standard connectivity protocol for exposing tools and structured data to AI agents." },
  { term: "Knowledge Graph", desc: "A structured map of entities and relationships used to understand codebases without token-heavy file reads." },
  { term: "Context Window", desc: "Working memory available for a task. Loaded skills consume context whether they execute or not." },
  { term: "Skill Pack", desc: "A packaged repository containing multiple related procedures installed as a modular suite." },
  { term: "Harness", desc: "The runtime wrapper handling agent tools, system prompts, memory, execution gates, and error recovery." },
  { term: "Agent Loop", desc: "A cycle where an agent plans, executes, checks results, and repeats until a defined stop rule is satisfied." },
  { term: "AI Tells", desc: "Predictable phrasing patterns marking text as machine-written (hype adjectives, rigid parallelism, vague abstractions)." },
  { term: "Dual-Use Tooling", desc: "Techniques usable for defense or attack (security playbooks) requiring strict operational authorization." }
];

export default function BestHermesSkillsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<number | string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Copy handler with UI feedback
  const handleCopy = (text: string, id: number | string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter skills
  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.repo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.bestFor.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      if (activeCategory === "all") return matchesSearch;
      if (activeCategory === "day-one") return matchesSearch && skill.dayOne;
      if (activeCategory === "engineering") return matchesSearch && skill.category === "Engineering & Shipping";
      if (activeCategory === "research") return matchesSearch && skill.category === "Internet & Research";
      if (activeCategory === "orchestration") return matchesSearch && skill.category === "Orchestration & Control";
      if (activeCategory === "media") return matchesSearch && skill.category === "Media & Specialists";
      if (activeCategory === "writing-memory") {
        return matchesSearch && (skill.category === "Writing & Content" || skill.category === "Memory & Self-Improvement");
      }
      return matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const getCategoryBadgeClass = (categorySlug: string) => {
    switch (categorySlug) {
      case "engineering":
        return "bg-purple-50 text-[#7B2CBF] border-purple-200/80";
      case "research":
        return "bg-sky-50 text-sky-700 border-sky-200";
      case "orchestration":
        return "bg-rose-50 text-rose-700 border-rose-200";
      case "media":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "writing":
      case "memory":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      default:
        return "bg-zinc-100 text-zinc-700 border-zinc-200";
    }
  };

  return (
    <main className="relative bg-white min-h-screen text-zinc-800 selection:bg-[#7B2CBF] selection:text-white font-inter">
      <Navbar />

      {/* ── High-Impact Dark Hero Section ───────────────────────────── */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-black via-[#0d0914] to-[#09090b] rounded-b-[3rem] text-white">
        {/* Glow ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[45vw] rounded-full bg-[#7B2CBF]/15 blur-[140px]" />
          <div className="absolute top-2/3 right-1/4 w-[35vw] h-[25vw] rounded-full bg-[#06b6d4]/10 blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            
            {/* Breadcrumbs */}
            <nav className="mb-6 flex justify-center items-center gap-2 text-[10px] font-semibold text-zinc-400 uppercase tracking-widest relative z-10 font-inter">
              <Link href="/" className="transition-colors hover:text-[#E0AAFF]">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-zinc-600" />
              <Link href="/resources" className="transition-colors hover:text-[#E0AAFF]">
                Resources
              </Link>
              <ChevronRight className="h-3 w-3 text-zinc-600" />
              <span className="text-[#E0AAFF] font-bold">Hermes Skills 2026</span>
            </nav>

            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7B2CBF]/40 bg-[#7B2CBF]/20 text-xs font-semibold uppercase tracking-widest text-[#E0AAFF] mb-6 shadow-[0_0_20px_rgba(123,44,191,0.2)]">
              <Sparkles className="h-3.5 w-3.5 text-[#E0AAFF] animate-pulse" />
              Live Curated Resource Directory
            </div>

            {/* Main Title */}
            <h1 className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-instrument text-white tracking-tight leading-[1.04] mb-6 max-w-5xl">
              Best Hermes Skills in 2026: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0AAFF] via-[#c77dff] to-[#06b6d4] italic">
                The 17 I Would Install First
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-xl text-zinc-300 max-w-3xl leading-relaxed mb-10 font-light">
              A raw install is smart. A skilled install is unfair. Explore the verified 17-skill modular setup with live GitHub star counts, copyable commands, day-one installation order, and context budget rules.
            </p>

            {/* Verified Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl mb-12 p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <div className="text-center p-2">
                <p className="text-3xl sm:text-4xl font-instrument text-white font-bold">17</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-300 mt-1">Skills Analyzed</p>
              </div>
              <div className="text-center p-2 border-l border-white/10">
                <p className="text-3xl sm:text-4xl font-instrument text-[#06b6d4] font-bold">482K+</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-300 mt-1">Verified Stars</p>
              </div>
              <div className="text-center p-2 border-l border-white/10">
                <p className="text-3xl sm:text-4xl font-instrument text-[#E0AAFF] font-bold">05</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-300 mt-1">Day-One Stack</p>
              </div>
              <div className="text-center p-2 border-l border-white/10">
                <p className="text-3xl sm:text-4xl font-instrument text-emerald-400 font-bold">$0</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-300 mt-1">Total Tooling Cost</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#skills-explorer"
                className="px-8 py-3.5 bg-white text-black font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-[#E0AAFF] transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(224,170,255,0.4)]"
              >
                Explore Skills Directory ↓
              </a>
              <a
                href="#day-one-stack"
                className="px-8 py-3.5 bg-white/[0.08] border border-white/15 text-white font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-white/[0.15] hover:border-[#7B2CBF]/40 transition-all duration-300"
              >
                View Day-One Five
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── Main Cover Visual ────────────────────────────────────────── */}
      <section className="container mx-auto max-w-5xl px-6 -mt-10 relative z-20 mb-16">
        <div className="rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-2xl">
          <Image
            src="/blog/covers/best-hermes-skills.svg"
            alt="Best Hermes Skills 2026: seventeen agent skill modules loading into a single runtime"
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
            priority
            unoptimized
          />
        </div>
      </section>

      {/* ── Clean Light High-Contrast Content Container ──────────────── */}
      <div className="container mx-auto max-w-6xl px-6 space-y-20 pb-24">

        {/* ── Executive TL;DR & Author Verification ───────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* TLDR Box */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-zinc-50 border border-zinc-200 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-2.5 h-full bg-[#7B2CBF]" />
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#7B2CBF] font-black mb-3">
              <Zap className="h-3.5 w-3.5 text-[#7B2CBF]" />
              Executive Summary // 30-Second Answer
            </div>
            <p className="text-lg sm:text-xl font-bold text-zinc-900 leading-relaxed mb-6">
              If I wiped Hermes today, I would not open a blank chat and figure it out. I would install skills first. The seventeen below cover almost every real job I hand an agent: research, engineering, security, video, browser control, writing cleanup, repo memory, and loop discipline.
            </p>
            <div className="p-4 rounded-xl bg-white border border-zinc-200 text-sm text-zinc-700 leading-relaxed font-normal shadow-sm">
              <strong className="text-zinc-900 font-semibold">The 5 Day-One Pillars:</strong> <code className="text-[#7B2CBF] font-bold bg-purple-50 px-1.5 py-0.5 rounded">Agent-Reach</code> (web access), <code className="text-[#7B2CBF] font-bold bg-purple-50 px-1.5 py-0.5 rounded">addyosmani/agent-skills</code> (engineering gates), <code className="text-[#7B2CBF] font-bold bg-purple-50 px-1.5 py-0.5 rounded">Humanizer</code> (writing cleanup), <code className="text-[#7B2CBF] font-bold bg-purple-50 px-1.5 py-0.5 rounded">Defuddle</code> (clean web input), and <code className="text-[#7B2CBF] font-bold bg-purple-50 px-1.5 py-0.5 rounded">Minions</code> (parallel task mission control).
            </div>
          </div>

          {/* Author / Verification Card */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold mb-3">
                <Info className="h-3.5 w-3.5 text-zinc-500" />
                Live Verification Audit
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">By Muhammad Shadab Shams</h3>
              <p className="text-xs text-zinc-600 leading-relaxed mb-4 font-normal">
                AI Automation Consultant running production agent clusters across live properties. Every GitHub star count, owner, and install path was re-verified live via the GitHub API on <strong className="text-zinc-900">August 27, 2026</strong>.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-200 flex items-center justify-between text-[11px] text-zinc-600 font-medium">
              <span>Verified Repos: 14/17</span>
              <span className="text-[#7B2CBF] font-bold">3 Flagged Unverified</span>
            </div>
          </div>

        </section>

        {/* ── Day-One Five Highlight Section ───────────────────────────── */}
        <section id="day-one-stack" className="scroll-mt-28">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-emerald-600 font-bold mb-2 inline-block">
              Day-One Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-instrument text-zinc-900 tracking-tight mb-3">
              Install These Five on Day One
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-light">
              Loading all 17 skills immediately will cause you to spend your first week debugging your setup and blowing your context window. These five form the optimal zero-cost stack covering input, process, and output.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SKILLS_DATA.filter((s) => s.dayOne).map((skill, index) => (
              <div
                key={skill.id}
                className="p-6 rounded-2xl bg-white border-2 border-emerald-500/30 shadow-sm hover:shadow-md hover:border-emerald-500 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold rounded-bl-lg">
                  0{index + 1}
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase text-emerald-700 font-bold tracking-wider block mb-2">
                    {skill.dayOneRole}
                  </span>
                  <h3 className="text-base font-bold text-zinc-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed mb-4 line-clamp-3">
                    {skill.summary}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => handleCopy(skill.installCommand, `day-one-${skill.id}`)}
                    className="w-full py-2.5 px-3 rounded-lg bg-zinc-900 hover:bg-[#7B2CBF] text-[10px] font-mono text-white flex items-center justify-between transition-colors shadow-sm"
                  >
                    <span className="truncate pr-2 font-semibold">
                      {copiedId === `day-one-${skill.id}` ? "Copied!" : "Copy Command"}
                    </span>
                    {copiedId === `day-one-${skill.id}` ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    ) : (
                      <Copy className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Interactive Skill Directory Section ──────────────────────── */}
        <section id="skills-explorer" className="scroll-mt-28">
          
          {/* Header & View Switcher */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-zinc-200">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#7B2CBF] font-bold mb-2 flex items-center gap-2">
                <Compass className="h-3.5 w-3.5 text-[#7B2CBF]" />
                Interactive Skill Matrix
              </span>
              <h2 className="text-3xl sm:text-4xl font-instrument text-zinc-900 tracking-tight">
                Explore All 17 Hermes Skills
              </h2>
            </div>

            {/* View Switcher Controls */}
            <div className="flex items-center gap-2 p-1 rounded-xl bg-zinc-100 border border-zinc-200">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  viewMode === "grid"
                    ? "bg-white text-[#7B2CBF] shadow-sm font-bold"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                <LayoutGrid className="h-3.5 w-3.5" />
                Cards
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  viewMode === "table"
                    ? "bg-white text-[#7B2CBF] shadow-sm font-bold"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                <TableIcon className="h-3.5 w-3.5" />
                Roster Table
              </button>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="space-y-4 mb-10 p-6 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search skill by name, owner, problem, or workflow tag (e.g. video, testing, scraping, UI)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-white border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#7B2CBF] focus:ring-2 focus:ring-[#7B2CBF]/20 transition-all font-inter"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 p-1"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { id: "all", label: `All Skills (${SKILLS_DATA.length})` },
                { id: "day-one", label: "Day-One Essential (5)" },
                { id: "engineering", label: "Engineering & Shipping (4)" },
                { id: "research", label: "Internet & Research (3)" },
                { id: "orchestration", label: "Orchestration & Control (5)" },
                { id: "media", label: "Media & Specialists (3)" },
                { id: "writing-memory", label: "Writing & Memory (2)" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    activeCategory === tab.id
                      ? "bg-[#7B2CBF] text-white shadow-sm"
                      : "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100 hover:text-zinc-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── CARD GRID VIEW ────────────────────────────────────────── */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="rounded-2xl bg-white border border-zinc-200 p-6 flex flex-col justify-between hover:border-[#7B2CBF]/50 hover:shadow-lg transition-all duration-300 group shadow-sm"
                >
                  <div>
                    {/* Header: Rank + Badges */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-bold text-zinc-400">
                        #{String(skill.rank).padStart(2, "0")}
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5 justify-end">
                        {skill.dayOne && (
                          <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                            Day-One
                          </span>
                        )}
                        {skill.skipOnDayOne && (
                          <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 border border-amber-300">
                            Skip Initially
                          </span>
                        )}
                        <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-md border font-bold flex items-center gap-1 ${
                          skill.verified
                            ? "bg-amber-50 text-amber-800 border-amber-300"
                            : "bg-zinc-100 text-zinc-600 border-zinc-300"
                        }`}>
                          <Star className="h-2.5 w-2.5 fill-amber-500 text-amber-500" />
                          {skill.starsDisplay}
                        </span>
                      </div>
                    </div>

                    {/* Category Label */}
                    <span className={`inline-block text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border mb-2 ${getCategoryBadgeClass(skill.categorySlug)}`}>
                      {skill.category}
                    </span>

                    {/* Skill Title & Repo */}
                    <h3 className="text-lg font-bold text-zinc-900 mb-1 group-hover:text-[#7B2CBF] transition-colors leading-snug">
                      {skill.name}
                    </h3>
                    <p className="text-xs font-mono text-zinc-500 mb-3">{skill.repo}</p>

                    {/* Summary */}
                    <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                      {skill.summary}
                    </p>

                    {/* Problem Solved */}
                    <div className="mb-4 p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-700 leading-relaxed">
                      <strong className="text-zinc-900 block mb-1 font-semibold">What it fixes:</strong>
                      {skill.problemSolved}
                    </div>

                    {/* Best For Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {skill.bestFor.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-medium px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Install Command & Action */}
                  <div className="pt-4 border-t border-zinc-100 space-y-3">
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between gap-2 font-mono text-[10px] text-emerald-400">
                      <span className="truncate select-all font-mono">{skill.installCommand}</span>
                      <button
                        onClick={() => handleCopy(skill.installCommand, skill.id)}
                        className="p-1 rounded hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors shrink-0"
                        title="Copy command"
                      >
                        {copiedId === skill.id ? (
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </div>

                    {skill.url && (
                      <a
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 rounded-lg bg-zinc-50 border border-zinc-200 hover:bg-[#7B2CBF]/10 hover:border-[#7B2CBF]/30 hover:text-[#7B2CBF] text-xs font-semibold text-zinc-700 flex items-center justify-center gap-1.5 transition-all"
                      >
                        <span>GitHub Repository</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── TABLE VIEW ────────────────────────────────────────────── */}
          {viewMode === "table" && (
            <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50 text-zinc-700 font-mono uppercase tracking-wider text-[10px]">
                    <th className="py-4 px-4 font-bold">Rank</th>
                    <th className="py-4 px-4 font-bold">Skill / Package</th>
                    <th className="py-4 px-4 font-bold">Category</th>
                    <th className="py-4 px-4 font-bold">GitHub Stars</th>
                    <th className="py-4 px-4 font-bold">Day 1?</th>
                    <th className="py-4 px-4 font-bold">Install Snippet</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {filteredSkills.map((skill) => (
                    <tr key={skill.id} className="hover:bg-purple-50/30 transition-colors">
                      <td className="py-4 px-4 font-mono text-zinc-400 font-bold">
                        #{String(skill.rank).padStart(2, "0")}
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-bold text-zinc-900 text-sm">{skill.name}</div>
                        <div className="font-mono text-[10px] text-zinc-500">{skill.repo}</div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`inline-block text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${getCategoryBadgeClass(skill.categorySlug)}`}>
                          {skill.category}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-mono font-bold text-amber-800">
                        ★ {skill.starsDisplay}
                      </td>
                      <td className="py-4 px-4">
                        {skill.dayOne ? (
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono text-[10px] font-bold">
                            YES
                          </span>
                        ) : (
                          <span className="text-zinc-400 font-mono text-[10px]">NO</span>
                        )}
                      </td>
                      <td className="py-4 px-4 font-mono">
                        <div className="flex items-center gap-2 max-w-xs">
                          <code className="bg-zinc-900 text-emerald-400 px-2 py-1 rounded border border-zinc-800 truncate text-[10px] select-all">
                            {skill.installCommand}
                          </code>
                          <button
                            onClick={() => handleCopy(skill.installCommand, `table-${skill.id}`)}
                            className="p-1 rounded hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900"
                          >
                            {copiedId === `table-${skill.id}` ? (
                              <Check className="h-3.5 w-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="h-3.5 w-3.5" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </section>

        {/* ── Context Budget Analysis Breakdown ───────────────────────── */}
        <section className="p-8 sm:p-12 rounded-3xl bg-amber-50/60 border border-amber-200 relative overflow-hidden shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-800 font-bold mb-2 flex items-center gap-2">
              <AlertTriangle className="h-3.5 w-3.5 text-amber-700" />
              The Hidden Engineering Constraint
            </span>
            <h2 className="text-3xl font-instrument text-zinc-900 tracking-tight mb-3">
              The Context Budget Problem Nobody Mentions
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-light">
              Skills consume context <strong className="text-zinc-900 font-semibold">when they are available</strong>, not just when they execute. Descriptions, parameter schemas, and system triggers all occupy the prompt token window before your task even begins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white border border-amber-200 shadow-sm">
              <span className="text-2xl font-instrument text-amber-700 font-bold block mb-1">817 Skills</span>
              <p className="text-xs text-zinc-900 font-bold mb-1">Cybersecurity Library</p>
              <p className="text-xs text-zinc-600 font-light">Overwhelms prompt memory if loaded on general frontend or copywriting tasks.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-amber-200 shadow-sm">
              <span className="text-2xl font-instrument text-amber-700 font-bold block mb-1">700+ Files</span>
              <p className="text-xs text-zinc-900 font-bold mb-1">OpenMontage Pack</p>
              <p className="text-xs text-zinc-600 font-light">Consumes vast context budgets; only load inside dedicated video pipelines.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-emerald-200 shadow-sm">
              <span className="text-2xl font-instrument text-emerald-700 font-bold block mb-1">Zero Overhead</span>
              <p className="text-xs text-zinc-900 font-bold mb-1">Matt Pocock &amp; Day-One</p>
              <p className="text-xs text-zinc-600 font-light">Small composable skills loaded per repo keep agent attention sharp.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-amber-200 text-xs text-zinc-800 leading-relaxed shadow-sm">
            <strong className="text-zinc-900 text-sm block mb-2 font-bold">3 Golden Rules for Context Window Governance:</strong>
            <ol className="list-decimal pl-5 space-y-2 text-zinc-700 font-normal">
              <li><strong>Install per project, not globally:</strong> A video project does not need red-team security playbooks.</li>
              <li><strong>Prune what never fires:</strong> If a pack hasn&apos;t triggered in 30 days, it is paying rent with your scarce prompt tokens.</li>
              <li><strong>Favor composable packs:</strong> Prefer smaller, editable skill modules over giant monolithic frameworks.</li>
            </ol>
          </div>
        </section>

        {/* ── What is Missing & Honorable Mentions ──────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 shadow-sm">
            <h3 className="text-xl font-bold text-zinc-900 mb-2">Omitted Foundational Giants</h3>
            <p className="text-xs text-zinc-600 leading-relaxed mb-6 font-light">
              The two largest skill repos on GitHub were excluded from this list because they are foundational base frameworks rather than external add-on skills:
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white border border-zinc-200 flex items-center justify-between shadow-sm">
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">obra/superpowers</h4>
                  <p className="text-xs text-zinc-500">Core foundational agent harness</p>
                </div>
                <span className="text-xs font-mono font-bold text-[#7B2CBF]">★ 278,274</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-zinc-200 flex items-center justify-between shadow-sm">
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">anthropics/skills</h4>
                  <p className="text-xs text-zinc-500">Official Anthropic reference skills</p>
                </div>
                <span className="text-xs font-mono font-bold text-[#7B2CBF]">★ 171,918</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 shadow-sm">
            <h3 className="text-xl font-bold text-zinc-900 mb-2">Notable External Mentions</h3>
            <p className="text-xs text-zinc-600 leading-relaxed mb-6 font-light">
              High-value specialized skill packages worth exploring for specific workflows:
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-sm">
                <span className="text-xs font-bold text-zinc-900 block truncate">Leonxlnx/taste-skill</span>
                <span className="text-[10px] text-zinc-500 block mb-1">Anti-slop UI design</span>
                <span className="text-[10px] font-mono font-bold text-[#7B2CBF]">★ 81,181</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-sm">
                <span className="text-xs font-bold text-zinc-900 block truncate">mvanhorn/last30days</span>
                <span className="text-[10px] text-zinc-500 block mb-1">Recent social synthesis</span>
                <span className="text-[10px] font-mono font-bold text-[#7B2CBF]">★ 59,370</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-sm">
                <span className="text-xs font-bold text-zinc-900 block truncate">coreyhaines31/marketingskills</span>
                <span className="text-[10px] text-zinc-500 block mb-1">CRO &amp; copywriting</span>
                <span className="text-[10px] font-mono font-bold text-[#7B2CBF]">★ 45,797</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-sm">
                <span className="text-xs font-bold text-zinc-900 block truncate">kepano/obsidian-skills</span>
                <span className="text-[10px] text-zinc-500 block mb-1">Obsidian vault bridge</span>
                <span className="text-[10px] font-mono font-bold text-[#7B2CBF]">★ 47,352</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 60-Second Decision Framework ────────────────────────────── */}
        <section className="p-8 sm:p-12 rounded-3xl bg-zinc-50 border border-zinc-200 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#7B2CBF] font-bold mb-2 block">
              Decision Protocol
            </span>
            <h2 className="text-3xl font-instrument text-zinc-900 tracking-tight mb-2">
              How to Choose in 60 Seconds
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-light">
              Failure-driven installation beats aspirational installation every single time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
              <span className="text-xs font-mono text-[#7B2CBF] uppercase font-bold block mb-2">01. By Frequent Failure</span>
              <h4 className="text-base font-bold text-zinc-900 mb-2">What breaks most often?</h4>
              <p className="text-xs text-zinc-600 leading-relaxed font-light">
                Install only the skill for that exact failure point and test it for one week. Stop installing speculative toolchains.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
              <span className="text-xs font-mono text-sky-700 uppercase font-bold block mb-2">02. By Workflow Type</span>
              <h4 className="text-base font-bold text-zinc-900 mb-2">Repetitive or Exploratory?</h4>
              <p className="text-xs text-zinc-600 leading-relaxed font-light">
                Repetitive work needs loops &amp; mission control (<code className="text-zinc-900 font-semibold bg-zinc-100 px-1 py-0.5 rounded">Minions</code>, <code className="text-zinc-900 font-semibold bg-zinc-100 px-1 py-0.5 rounded">codebase-memory</code>). Exploratory work needs <code className="text-zinc-900 font-semibold bg-zinc-100 px-1 py-0.5 rounded">Agent-Reach</code> &amp; <code className="text-zinc-900 font-semibold bg-zinc-100 px-1 py-0.5 rounded">Defuddle</code>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
              <span className="text-xs font-mono text-emerald-700 uppercase font-bold block mb-2">03. By Public Exposure</span>
              <h4 className="text-base font-bold text-zinc-900 mb-2">Is output public-facing?</h4>
              <p className="text-xs text-zinc-600 leading-relaxed font-light">
                If code or copy is published publicly, <code className="text-zinc-900 font-semibold bg-zinc-100 px-1 py-0.5 rounded">Humanizer</code> is mandatory to strip synthetic formatting and match your genuine voice.
              </p>
            </div>
          </div>
        </section>

        {/* ── Glossary Section ────────────────────────────────────────── */}
        <section>
          <div className="mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#7B2CBF] font-bold mb-2 block">
              Reference Architecture
            </span>
            <h2 className="text-3xl font-instrument text-zinc-900 tracking-tight">
              Glossary of Agent Terms
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {GLOSSARY_ITEMS.map((item) => (
              <div key={item.term} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 shadow-sm">
                <h4 className="text-xs font-bold text-[#7B2CBF] mb-1.5">{item.term}</h4>
                <p className="text-xs text-zinc-600 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Interactive FAQs Section ─────────────────────────────────── */}
        <section className="space-y-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#7B2CBF] font-bold mb-2 block">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-instrument text-zinc-900 tracking-tight mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-light">
              Detailed answers on context window impact, runtime compatibility, licensing, and installation.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm transition-all hover:border-[#7B2CBF]/40"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 text-zinc-900 font-bold hover:text-[#7B2CBF] transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronRight
                    className={`h-4 w-4 text-zinc-400 shrink-0 transition-transform duration-300 ${
                      activeFaq === idx ? "rotate-90 text-[#7B2CBF]" : ""
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── CTA Band & Contact Form ──────────────────────────────────── */}
      <section className="py-20 bg-zinc-950 text-white border-t border-zinc-800">
        <div className="container mx-auto max-w-5xl px-6">
          <Contact2
            title="Need Custom Multi-Agent Architecture?"
            description="I architect bespoke autonomous multi-agent pipelines, custom skill suites, and self-healing automation infrastructure for growing engineering teams."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
