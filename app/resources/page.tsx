import { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { Contact2 } from "@/components/ui/contact-2";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buildPageMetadata, absoluteUrl } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { toolsHubCards } from '@/lib/tools-data';
import ToolWaitlistForm from '@/components/tools/ToolWaitlistForm';
import { ArrowRight, Clock3, FileText, Target } from 'lucide-react';

const liveTool = toolsHubCards.find((tool) => tool.status === 'live') ?? toolsHubCards[0]!;
const plannedTools = toolsHubCards.filter((tool) => tool.status === 'planned');

const valuePoints = [
  {
    title: 'Quantify Manual Overhead',
    description: 'Translate repetitive tasks, slow handoffs, and spreadsheet friction into clear financial metrics.',
    icon: Clock3
  },
  {
    title: 'Data-Backed Decisions',
    description: 'Run the calculations first to obtain immediate payback projections before writing code.',
    icon: FileText
  },
  {
    title: 'Built for Operators',
    description: 'Engineered around real operational bottlenecks to deliver actionable next steps.',
    icon: Target
  }
];

export const metadata: Metadata = buildPageMetadata({
  title: 'Resources | Free and Premium AI Automation Tools | AIFLOXIUM',
  description:
    'Explore curated n8n automation workflows, Claude Code skills, AI agents, and Notion guides. Free and premium resources to supercharge your AI workflow.',
  path: '/resources',
  keywords: [
    'n8n automation workflows',
    'Claude Code skills',
    'Claude agents',
    'Notion guides',
    'AI automation resources',
    'free automation templates',
    'Claude Code templates'
  ]
});

const resourcesGraphJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'AIFLOXIUM Resources',
      description:
        'Curated n8n automation workflows, Claude Code skills, AI agents, and Notion guides. Free and premium resources to supercharge your AI workflow.',
      url: absoluteUrl('/resources'),
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${SITE_URL}#website`
      }
    },
    {
      '@type': 'ItemList',
      name: 'AIFLOXIUM Resources Index',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'n8n Automations',
          url: `${absoluteUrl('/resources')}#n8n`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Claude Skills',
          url: `${absoluteUrl('/resources')}#claude-skills`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Claude Agents',
          url: `${absoluteUrl('/resources')}#claude-agents`
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Guides & Tutorials',
          url: `${absoluteUrl('/resources')}#notion-guides`
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Comparisons',
          url: `${absoluteUrl('/resources')}#comparisons`
        }
      ]
    }
  ]
};

// ──────────────────────────────────────────────────────────────────────────────
// Data
// ──────────────────────────────────────────────────────────────────────────────

const categories = [
  { id: "tools", label: "Free Tools" },
  { id: "n8n", label: "n8n Workflows" },
  { id: "claude-skills", label: "Claude Skills" },
  { id: "claude-agents", label: "Claude Agents" },
  { id: "notion-guides", label: "Guides & Tutorials" },
  { id: "comparisons", label: "Comparisons" },
];

const n8nWorkflows = [
  {
    title: "AI-Powered Lead Qualification with GPT-4",
    description:
      "Automatically qualify inbound leads by analyzing LinkedIn profiles and CRM data with GPT-4, scoring them, and routing to the right rep.",
    tags: ["CRM", "AI", "Sales"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "https://n8n.io/workflows/",
    nodes: 14,
  },
  {
    title: "Automated Invoice Processing & Approval",
    description:
      "Extract invoice data via OCR, validate against PO records in your ERP, and trigger multi-step approval chains, zero human touch.",
    tags: ["Finance", "OCR", "ERP"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "https://n8n.io/workflows/",
    nodes: 20,
  },
  {
    title: "Multi-Platform Content Scheduler",
    description:
      "Write once in Notion, auto-format and schedule posts to LinkedIn, Twitter/X, and Instagram with AI-optimized captions.",
    tags: ["Social", "Content", "Notion"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "https://n8n.io/workflows/",
    nodes: 18,
  },
  {
    title: "AI Sales Rep — End-to-End Outreach",
    description:
      "Researches prospects, drafts hyper-personalized cold emails with Claude and GPT-4, tracks opens, and auto-follows-up across channels.",
    tags: ["Sales", "AI", "Email"],
    badge: "PREMIUM",
    badgeColor: "text-amber-400 border-amber-400/30 bg-amber-400/5",
    link: "https://n8n.io/workflows/",
    nodes: 35,
  },
  {
    title: "Slack Support Bot with Knowledge Base",
    description:
      "A fully autonomous Slack bot that reads your Notion knowledge base, answers team questions, and escalates when confidence is low.",
    tags: ["Slack", "AI", "Support"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "https://n8n.io/workflows/",
    nodes: 22,
  },
  {
    title: "Shopify → Airtable Inventory Sync",
    description:
      "Real-time bidirectional sync between Shopify products and Airtable inventory, with automatic low-stock alerts and reorder triggers.",
    tags: ["E-commerce", "Airtable", "Shopify"],
    badge: "PREMIUM",
    badgeColor: "text-amber-400 border-amber-400/30 bg-amber-400/5",
    link: "https://n8n.io/workflows/",
    nodes: 27,
  },
];

const claudeSkills = [
  {
    title: "agency-frontend-developer",
    description:
      "Expert frontend developer skill specializing in modern web technologies, React/Vue/Angular frameworks, UI implementation, and performance optimization.",
    tags: ["Frontend", "React", "UI"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "https://www.aitmpl.com/skills/",
    install: "npx -y @anthropic/claude-code-skills add agency-frontend-developer",
  },
  {
    title: "agency-backend-architect",
    description:
      "Senior backend architect specializing in scalable system design, database architecture, API development, and cloud infrastructure.",
    tags: ["Backend", "API", "Cloud"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "https://www.aitmpl.com/skills/",
    install: "npx -y @anthropic/claude-code-skills add agency-backend-architect",
  },
  {
    title: "agency-seo-specialist",
    description:
      "Expert SEO strategist specializing in technical SEO, content optimization, link authority building, and organic search growth.",
    tags: ["SEO", "Marketing", "Analytics"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "https://www.aitmpl.com/skills/",
    install: "npx -y @anthropic/claude-code-skills add agency-seo-specialist",
  },
  {
    title: "agency-security-engineer",
    description:
      "Expert application security engineer specializing in threat modeling, vulnerability assessment, and secure code review.",
    tags: ["Security", "DevSecOps", "Auditing"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "https://www.aitmpl.com/skills/",
    install: "npx -y @anthropic/claude-code-skills add agency-security-engineer",
  },
  {
    title: "agency-devops-automator",
    description:
      "Expert DevOps engineer specializing in infrastructure automation, CI/CD pipeline development, and cloud operations.",
    tags: ["DevOps", "CI/CD", "Infrastructure"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "https://www.aitmpl.com/skills/",
    install: "npx -y @anthropic/claude-code-skills add agency-devops-automator",
  },
  {
    title: "agency-ui-designer",
    description:
      "Expert UI designer specializing in visual design systems, component libraries, and pixel-perfect interface creation.",
    tags: ["Design", "UI/UX", "Figma"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "https://www.aitmpl.com/skills/",
    install: "npx -y @anthropic/claude-code-skills add agency-ui-designer",
  },
];

const claudeAgents = [
  {
    title: "agency-agents-orchestrator",
    description:
      "Autonomous pipeline manager that orchestrates the entire development workflow. The leader that coordinates all other agents.",
    tags: ["Orchestration", "Pipeline", "Automation"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "https://www.aitmpl.com/agents",
    install: "npx -y @anthropic/claude-code-agents add agency-agents-orchestrator",
  },
  {
    title: "agency-senior-developer",
    description:
      "Premium implementation specialist mastering Laravel/Livewire/FluxUI, advanced CSS, and Three.js integration for production-grade builds.",
    tags: ["Full-Stack", "Laravel", "Three.js"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "https://www.aitmpl.com/agents",
    install: "npx -y @anthropic/claude-code-agents add agency-senior-developer",
  },
  {
    title: "agency-growth-hacker",
    description:
      "Expert growth strategist specializing in rapid user acquisition through data-driven experimentation and viral loop engineering.",
    tags: ["Growth", "Marketing", "Analytics"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "https://www.aitmpl.com/agents",
    install: "npx -y @anthropic/claude-code-agents add agency-growth-hacker",
  },
  {
    title: "agency-ai-engineer",
    description:
      "Expert AI/ML engineer specializing in model development, deployment, and integration into production systems with data pipelines.",
    tags: ["AI/ML", "MLOps", "Python"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "https://www.aitmpl.com/agents",
    install: "npx -y @anthropic/claude-code-agents add agency-ai-engineer",
  },
  {
    title: "agency-content-creator",
    description:
      "Expert content strategist for multi-platform campaigns: editorial calendars, brand storytelling, and SEO-optimized copy.",
    tags: ["Content", "SEO", "Strategy"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "https://www.aitmpl.com/agents",
    install: "npx -y @anthropic/claude-code-agents add agency-content-creator",
  },
  {
    title: "agency-evidence-collector",
    description:
      "Screenshot-obsessed QA specialist, defaults to finding 3-5 visual issues and requires proof for everything before production sign-off.",
    tags: ["QA", "Testing", "Validation"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "https://www.aitmpl.com/agents",
    install: "npx -y @anthropic/claude-code-agents add agency-evidence-collector",
  },
];

const notionGuides = [
  {
    title: "Complete Setup Guide: $0 Agentic Coding Stack",
    description:
      "Deploy a production-ready developer agent stack for $0. Set up Cohere North Mini Code (OpenRouter) and GLM-5.2 (Cloudflare Workers AI) to work with local developer agents like Hermes Agent or OpenCode.",
    tags: ["AI Stack", "OpenRouter", "Cloudflare", "Hermes Agent"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "/resources/zero-dollar-agentic-coding-stack",
    readTime: "15 min read",
  },
  {
    title: "The Complete Claude Code Guide 2026: Zero to Advanced",
    description:
      "A comprehensive deep-dive from absolute beginner to advanced Claude Code power user. Covers memory systems, skills architecture, agentic workflows, and production patterns.",
    tags: ["Claude Code", "Complete Guide", "2026"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "https://www.notion.so/The-Complete-Claude-Code-Guide-2026-Zero-to-Advanced-3264399432648162b060f8f31c7a1e92?source=copy_link",
    readTime: "45 min read",
  },
  {
    title: "How to Build Claude Code Skills from Scratch",
    description:
      "Step-by-step guide to engineering your own Claude Code skills, from SKILL.md architecture and tool design to publishing and distribution.",
    tags: ["Claude Code", "Skills", "Tutorial"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "https://www.notion.so/How-to-Build-Claude-Code-Skills-from-Scratch-31f43994326481a48070ebb27a7de10d?source=copy_link",
    readTime: "30 min read",
  },
  {
    title: "Claude + Ollama: The Complete FREE Setup Guide",
    description:
      "Run Claude-compatible models 100% locally with Ollama. Full setup walkthrough covering model selection, system integration, and local API configuration.",
    tags: ["Claude", "Ollama", "Local AI"],
    badge: "FREE",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    link: "https://www.notion.so/Claude-Ollama-The-Complete-FREE-Setup-Guide-31d4399432648000940dde6bd884ad75?source=copy_link",
    readTime: "20 min read",
  },
];

// ──────────────────────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────────────────────

function CategoryAnchor({ id, label }: { id: string; label: string }) {
  return (
    <a
      href={`#${id}`}
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-zinc-200 text-[10px] font-semibold uppercase tracking-widest text-zinc-600 hover:bg-[#7B2CBF]/5 hover:border-[#7B2CBF]/30 hover:text-zinc-900 transition-all duration-300 font-inter"
    >
      {label}
    </a>
  );
}

function TagPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[9px] font-semibold uppercase tracking-wider bg-white/[0.01] text-white/50 border border-zinc-200 font-inter">
      {label}
    </span>
  );
}

interface ResourceCardProps {
  title: string;
  description: string;
  tags: string[];
  badge: string;
  badgeColor: string;
  link: string;
  meta?: string;
  copyText?: string;
  blogSlug?: string;
}

function ResourceCard({
  title,
  description,
  tags,
  badge,
  badgeColor,
  link,
  meta,
  copyText,
  blogSlug,
}: ResourceCardProps) {
  return (
    <div className="bg-white/[0.01] rounded-2xl border border-white/5 p-6 flex flex-col gap-4 group transition-all duration-500 hover:border-[#7B2CBF]/30 hover:bg-[#7B2CBF]/5 liquid-glass">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 font-inter">
        <h3 className="text-lg font-semibold tracking-wide text-zinc-900 group-hover:text-[#E0AAFF] transition-colors flex-1 leading-snug">
          {title}
        </h3>
        <span
          className={cn(
            "shrink-0 text-[9px] font-semibold uppercase tracking-wider border px-2 py-1 rounded-md",
            badgeColor
          )}
        >
          {badge}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-zinc-500 font-inter font-light leading-relaxed flex-1">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <TagPill key={t} label={t} />
        ))}
      </div>

      {/* Install Snippet */}
      {copyText && (
        <div className="bg-black/40 px-4 py-3 font-mono text-[10px] text-zinc-900 border border-white/5 truncate select-all rounded-md">
          {copyText}
        </div>
      )}

      {/* CTA Row */}
      <div className="flex items-center gap-3 mt-1 font-inter">
        {link.startsWith("/") ? (
          <Link
            href={link}
            className="flex-1 text-center py-2.5 bg-white text-black hover:bg-[#E0AAFF] rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-300 button-glow"
          >
            Open Guide →
          </Link>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2.5 bg-white text-black hover:bg-[#E0AAFF] rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-300 button-glow"
          >
            View Resource →
          </a>
        )}
        {blogSlug && (
          <Link
            href={`/blog/${blogSlug}`}
            className="px-4 py-2.5 bg-white/[0.02] border border-zinc-200 text-zinc-900 rounded-md text-xs font-semibold uppercase tracking-wider hover:bg-zinc-100 transition-all duration-300"
          >
            Read Guide
          </Link>
        )}
      </div>

      {meta && (
        <p className="text-[9px] font-mono text-white/40 uppercase tracking-widest text-right -mt-1 font-inter">
          {meta}
        </p>
      )}
    </div>
  );
}

function SectionHeader({
  id,
  eyebrow,
  title,
  subtitle,
  count,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  count?: number;
}) {
  return (
    <div id={id} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 scroll-mt-32">
      <div>
        <p className="text-[9px] font-semibold text-[#E0AAFF] uppercase tracking-[0.25em] mb-3 flex items-center gap-2 font-inter">
          <span className="w-4 h-[1px] bg-[#E0AAFF] inline-block" />
          {eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-instrument text-zinc-900 tracking-tight">
          {title}
        </h2>
        <p className="text-zinc-500 font-inter font-light mt-2 text-sm max-w-xl leading-relaxed">{subtitle}</p>
      </div>
      {count !== undefined && (
        <span className="text-5xl font-instrument text-white/10 tabular-nums shrink-0">
          {String(count).padStart(2, "0")}
        </span>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// Page
// ──────────────────────────────────────────────────────────────────────────────

export default function ResourcesPage() {
  return (
    <main id="main-content" className="relative bg-white min-h-screen text-zinc-800 selection:bg-[#7B2CBF] selection:text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesGraphJsonLd) }}
      />
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-gradient-to-b from-black to-[#0a0608] rounded-b-[3rem]">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] rounded-full bg-[#7B2CBF]/5 blur-[120px]" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <nav className="mb-8 flex justify-center items-center gap-2 text-[10px] font-semibold text-white/50 uppercase tracking-widest relative z-10 font-inter">
            <Link href="/" className="transition-colors hover:text-zinc-900">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-white/30" />
            <span className="text-zinc-900 font-bold">Resources</span>
          </nav>

          <div className="flex flex-col items-center text-center">
            <p className="text-[9px] font-semibold text-zinc-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3 font-inter">
              <span className="w-6 h-[1px] bg-zinc-100 inline-block" />
              Aifloxium Resources
              <span className="w-6 h-[1px] bg-zinc-100 inline-block" />
            </p>

            <h1 className="text-[clamp(2.75rem,6vw,5.5rem)] font-instrument text-zinc-900 tracking-tight leading-[1.05] mb-8">
              Free &amp; <br />
              <span className="font-instrument text-[#E0AAFF] italic">premium</span> <br />
              resources.
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed mb-12 font-inter font-light">
              Battle-tested n8n automations, Claude Code skills, AI agents, and
              step-by-step Notion guides, curated by me to help
              you build smarter, faster.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 mb-14 font-inter">
              {[
                { value: "6+", label: "n8n Workflows" },
                { value: "6+", label: "Claude Skills" },
                { value: "6+", label: "Claude Agents" },
                { value: "3+", label: "Notion Guides" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-instrument text-zinc-900">{s.value}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40 mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Category Jump Links */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((c) => (
                <CategoryAnchor key={c.id} id={c.id} label={c.label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ─────────────────────────────────────────────────── */}
      <div className="w-full h-[1px] bg-zinc-50" />

      <div className="container mx-auto max-w-6xl px-6 space-y-28 py-24">

        {/* ── Free Tools ─────────────────────────────────────────────── */}
        <section id="tools" className="scroll-mt-32">
          <SectionHeader
            id="tools-header"
            eyebrow="Engineered Operations Tools"
            title="Free Interactive Tools"
            subtitle="Quantify the cost of manual workflow friction before you start building."
            count={toolsHubCards.length}
          />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center mb-16">
            <div>
              <h3 className="max-w-4xl text-[2rem] font-instrument leading-[1.05] tracking-tight text-zinc-900 md:text-[3rem]">
                Quantify the cost of <br />
                <span className="font-instrument text-[#7B2CBF] italic">manual workflow friction.</span>
              </h3>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 font-inter font-light">
                Estimate time saved, payroll overhead, and payback projections. Start with my interactive ROI calculator to model your first automation.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={liveTool.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 text-white px-6 py-4 text-xs font-semibold uppercase tracking-wider hover:bg-[#7B2CBF] transition-all duration-300 button-glow font-inter"
                >
                  Launch ROI Calculator
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <article className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 md:p-8 liquid-glass-light shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7B2CBF] font-inter">
                    Live Calculator
                  </span>
                  <h4 className="mt-3 text-2xl font-semibold font-inter tracking-wide text-zinc-900">
                    {liveTool.title}
                  </h4>
                </div>
                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-emerald-600 font-inter">
                  active
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-600 font-inter font-light">{liveTool.description}</p>

              <Link
                href={liveTool.href}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-white border border-zinc-200 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-900 hover:bg-zinc-100 transition-colors font-inter"
              >
                Open Interactive Tool
                <ArrowRight className="h-4 w-4 text-[#7B2CBF]" />
              </Link>
            </article>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {plannedTools.map((tool) => (
              <article
                key={tool.slug}
                className="rounded-[1.8rem] border border-zinc-200 bg-white p-6 flex flex-col justify-between liquid-glass-light shadow-sm"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7B2CBF] font-inter">
                        {tool.eyebrow}
                      </span>
                      <h4 className="mt-2 text-xl font-semibold font-inter tracking-wide text-zinc-900">
                        {tool.title}
                      </h4>
                    </div>
                    <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500 shrink-0 font-inter">
                      planned
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-500 font-inter font-light">{tool.description}</p>
                  
                  <div className="mt-4">
                    <ToolWaitlistForm toolSlug={tool.slug} toolTitle={tool.title} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── n8n Automations ─────────────────────────────────────────── */}
        <section>
          <SectionHeader
            id="n8n"
            eyebrow="Workflow Engineering"
            title="n8n Workflows"
            subtitle="Production-ready automation workflows. Copy, deploy, and adapt, built to save hours every week."
            count={n8nWorkflows.length}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {n8nWorkflows.map((w) => (
              <ResourceCard
                key={w.title}
                title={w.title}
                description={w.description}
                tags={w.tags}
                badge={w.badge}
                badgeColor={w.badgeColor}
                link={w.link}
                meta={`${w.nodes} nodes`}
              />
            ))}
          </div>
          <div className="mt-8 flex justify-center font-inter">
            <a
              href="https://n8n.io/workflows/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white/[0.01] border border-zinc-200 text-xs font-semibold uppercase tracking-wider text-zinc-600 hover:bg-[#7B2CBF]/5 hover:border-[#7B2CBF]/30 hover:text-zinc-900 transition-all duration-300"
            >
              Browse All 8,000+ n8n Workflows →
            </a>
          </div>
        </section>

        {/* ── Claude Skills ─────────────────────────────────────────── */}
        <section>
          <SectionHeader
            id="claude-skills"
            eyebrow="AI Tooling"
            title="Claude Code Skills"
            subtitle="Pre-built skill templates that supercharge Claude Code with specialized domain knowledge. One-command install."
            count={claudeSkills.length}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {claudeSkills.map((s) => (
              <ResourceCard
                key={s.title}
                title={s.title}
                description={s.description}
                tags={s.tags}
                badge={s.badge}
                badgeColor={s.badgeColor}
                link={s.link}
                copyText={s.install}
              />
            ))}
          </div>
          <div className="mt-8 flex justify-center font-inter">
            <a
              href="https://www.aitmpl.com/skills/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white/[0.01] border border-zinc-200 text-xs font-semibold uppercase tracking-wider text-zinc-600 hover:bg-[#7B2CBF]/5 hover:border-[#7B2CBF]/30 hover:text-zinc-900 transition-all duration-300"
            >
              Explore All Claude Skills →
            </a>
          </div>
        </section>

        {/* ── Claude Agents ─────────────────────────────────────────── */}
        <section>
          <SectionHeader
            id="claude-agents"
            eyebrow="Agentic AI"
            title="Claude Agents"
            subtitle="600+ specialized AI agents for every development task from frontend to security. Drop into any Claude Code project."
            count={claudeAgents.length}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {claudeAgents.map((a) => (
              <ResourceCard
                key={a.title}
                title={a.title}
                description={a.description}
                tags={a.tags}
                badge={a.badge}
                badgeColor={a.badgeColor}
                link={a.link}
                copyText={a.install}
              />
            ))}
          </div>
          <div className="mt-8 flex justify-center font-inter">
            <a
              href="https://www.aitmpl.com/agents"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white/[0.01] border border-zinc-200 text-xs font-semibold uppercase tracking-wider text-zinc-600 hover:bg-[#7B2CBF]/5 hover:border-[#7B2CBF]/30 hover:text-zinc-900 transition-all duration-300"
            >
              Explore All 600+ Claude Agents →
            </a>
          </div>
        </section>

        {/* ── Guides & Tutorials ─────────────────────────────────────── */}
        <section>
          <SectionHeader
            id="notion-guides"
            eyebrow="Structured Learning"
            title="Guides & Tutorials"
            subtitle="Comprehensive step-by-step guides for Claude Code, Ollama, free agentic stacks, and AI automation, written by practitioners."
            count={notionGuides.length}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {notionGuides.map((g) => (
              <ResourceCard
                key={g.title}
                title={g.title}
                description={g.description}
                tags={g.tags}
                badge={g.badge}
                badgeColor={g.badgeColor}
                link={g.link}
                meta={g.readTime}
              />
            ))}
          </div>
        </section>

        {/* ── Platform Comparisons ───────────────────────────────────── */}
        <section>
          <SectionHeader
            id="comparisons"
            eyebrow="Tool Intelligence"
            title="Platform Comparisons"
            subtitle="Side-by-side breakdowns of the tools operators use most. Make smarter buying decisions before spending another dollar."
            count={3}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "n8n vs Zapier",
                description: "Self-hosted automation vs cloud billing traps. Full breakdown of pricing, data privacy, developer control, and reliability — plus a live cost calculator.",
                tags: ["Automation", "n8n", "Zapier"],
                href: "/vs/n8n-vs-zapier",
                saving: "Save $600–$1,400/mo",
              },
              {
                title: "n8n vs Make",
                description: "Two workflow tools, two very different philosophies. Compare operation costs, scenario limits, and which one scales without punishing you for volume.",
                tags: ["Automation", "n8n", "Make"],
                href: "/vs/n8n-vs-make",
                saving: "No per-operation fees",
              },
              {
                title: "Voice AI vs Twilio Autodialer",
                description: "AI voice agents vs legacy per-minute Twilio billing. See the latency gap, cost gap, and why the first respondent wins 78% of inbound leads.",
                tags: ["Voice AI", "Twilio", "Lead Qualification"],
                href: "/vs/voice-ai-vs-twilio-autodialer",
                saving: "Sub-90s response time",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group relative bg-white/[0.01] border border-white/5 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#7B2CBF]/30 hover:bg-[#7B2CBF]/5 transition-all duration-500 overflow-hidden liquid-glass"
              >
                <div className="flex items-start justify-between gap-3 relative z-10 font-inter">
                  <h3 className="text-lg font-semibold tracking-wide text-zinc-900 group-hover:text-[#E0AAFF] transition-colors flex-1 leading-snug">
                    {card.title}
                  </h3>
                  <span className="shrink-0 text-[9px] font-semibold uppercase tracking-wider border border-[#E0AAFF]/20 bg-[#E0AAFF]/5 text-[#E0AAFF] px-2 py-1 rounded-md">
                    FREE
                  </span>
                </div>
                <p className="text-sm text-zinc-500 font-inter font-light leading-relaxed flex-1 relative z-10">
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-1.5 relative z-10">
                  {card.tags.map((t) => (
                    <span key={t} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[9px] font-semibold uppercase tracking-wider bg-white/[0.01] text-white/50 border border-zinc-200 font-inter">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-white/5 relative z-10 font-inter">
                  <span className="text-[10px] font-semibold text-[#E0AAFF] uppercase tracking-wider">
                    {card.saving}
                  </span>
                  <span className="text-[10px] font-semibold text-white/40 group-hover:text-zinc-600 transition-colors uppercase tracking-wider">
                    Read comparison →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>

      {/* ── Blog CTA Band ─────────────────────────────────────────────── */}
      <section className="py-24 bg-zinc-900 text-white border-y border-white/5 my-8">
        <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E0AAFF] mb-4 font-inter">
              Internal Guides
            </p>
            <h2 className="text-4xl md:text-5xl font-instrument tracking-tight mb-4 text-white">
              Deep-dive blogs.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed font-inter font-light">
              I write detailed technical breakdowns on every tool and workflow
              I use, n8n architectures, Claude Code patterns, and autonomous
              agent design. Free, always.
            </p>
          </div>
          <div className="shrink-0 flex flex-col gap-4 font-inter">
            <Link
              href="/blog"
              className="px-10 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E0AAFF] transition-all duration-300 button-glow text-center"
            >
              Read the Blog →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-white/5 py-24">
        <Contact2
          title="Need a Custom Workflow?"
          description="Tell me what you're trying to automate. I will build the exact n8n workflow, Claude agent, or full automation system you need."
        />
      </section>

      <Footer />
    </main>
  );
}
