import { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { Contact2 } from "@/components/ui/contact-2";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | Free & Premium AI Automation Tools | Aifloxium",
  description:
    "Explore curated n8n automation workflows, Claude Code skills, AI agents, and Notion guides. Free and premium resources to supercharge your AI workflow.",
  keywords: [
    "n8n automation workflows",
    "Claude Code skills",
    "Claude agents",
    "Notion guides",
    "AI automation resources",
    "free automation templates",
    "Claude Code templates",
  ],
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    title: "Resources | Free & Premium AI Automation Tools | Aifloxium",
    description:
      "Curated n8n automation workflows, Claude Code skills, AI agents, and Notion guides, free and premium.",
    type: "website",
    url: "https://aifloxium.online/resources",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | Free & Premium AI Automation Tools | Aifloxium",
    description:
      "Curated n8n automation workflows, Claude Code skills, AI agents, and Notion guides.",
  },
};

// ──────────────────────────────────────────────────────────────────────────────
// Data
// ──────────────────────────────────────────────────────────────────────────────

const categories = [
  { id: "n8n", label: "n8n Automations" },
  { id: "claude-skills", label: "Claude Skills" },
  { id: "claude-agents", label: "Claude Agents" },
  { id: "notion-guides", label: "Notion Guides" },
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
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-white/30 transition-all duration-300"
    >
      {label}
    </a>
  );
}

function TagPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10 text-zinc-500">
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
    <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 group hover:border-white/10 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-white font-heading tracking-tight leading-snug group-hover:text-zinc-200 transition-colors flex-1">
          {title}
        </h3>
        <span
          className={`shrink-0 text-[10px] font-black uppercase tracking-widest border px-2 py-1 rounded-full ${badgeColor}`}
        >
          {badge}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-zinc-400 leading-relaxed flex-1">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <TagPill key={t} label={t} />
        ))}
      </div>

      {/* Install Snippet */}
      {copyText && (
        <div className="bg-black/50 rounded-xl px-4 py-3 font-mono text-[11px] text-zinc-500 border border-white/5 truncate select-all">
          {copyText}
        </div>
      )}

      {/* CTA Row */}
      <div className="flex items-center gap-3 mt-1">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white transition-all duration-300"
        >
          View Resource →
        </a>
        {blogSlug && (
          <Link
            href={`/blog/${blogSlug}`}
            className="px-4 py-2.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all duration-300"
          >
            Read Guide
          </Link>
        )}
      </div>

      {meta && (
        <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest text-right -mt-1">
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
        <p className="text-xs font-mono text-zinc-600 uppercase tracking-[0.25em] mb-3 flex items-center gap-2">
          <span className="w-4 h-[1px] bg-zinc-700 inline-block" />
          {eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-black text-white tracking-tight">
          {title}
        </h2>
        <p className="text-zinc-500 mt-2 text-sm max-w-xl">{subtitle}</p>
      </div>
      {count !== undefined && (
        <span className="text-5xl font-heading font-black text-zinc-800 tabular-nums shrink-0">
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
    <main className="relative bg-background min-h-screen">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] rounded-full bg-zinc-800/10 blur-[120px]" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-zinc-700 inline-block" />
              Aifloxium Resources
              <span className="w-6 h-[1px] bg-zinc-700 inline-block" />
            </p>

            <h1 className="text-6xl md:text-[6.5rem] font-heading font-black text-white tracking-tighter leading-[0.9] mb-8">
              <span className="text-gradient">FREE &amp;</span>
              <br />
              PREMIUM
              <br />
              <span className="text-zinc-700">RESOURCES.</span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12">
              Battle-tested n8n automations, Claude Code skills, AI agents, and
              step-by-step Notion guides, curated by the Aifloxium team to help
              you build smarter, faster.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 mb-14">
              {[
                { value: "6+", label: "n8n Workflows" },
                { value: "6+", label: "Claude Skills" },
                { value: "6+", label: "Claude Agents" },
                { value: "3+", label: "Notion Guides" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-heading font-black text-white">{s.value}</p>
                  <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-600 mt-1">
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
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto max-w-6xl px-6 space-y-28 py-24">

        {/* ── n8n Automations ─────────────────────────────────────────── */}
        <section>
          <SectionHeader
            id="n8n"
            eyebrow="Workflow Engineering"
            title="n8n Automations"
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
          <div className="mt-8 flex justify-center">
            <a
              href="https://n8n.io/workflows/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-white/30 transition-all duration-300"
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
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.aitmpl.com/skills/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-white/30 transition-all duration-300"
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
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.aitmpl.com/agents"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-white/30 transition-all duration-300"
            >
              Explore All 600+ Claude Agents →
            </a>
          </div>
        </section>

        {/* ── Notion Guides ─────────────────────────────────────────── */}
        <section>
          <SectionHeader
            id="notion-guides"
            eyebrow="Structured Learning"
            title="Notion Guides"
            subtitle="Comprehensive step-by-step guides for Claude Code, Ollama, and AI automation, written by practitioners, not theorists."
            count={notionGuides.length}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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

      </div>

      {/* ── Blog CTA Band ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white text-black border-y border-zinc-200 my-8">
        <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 mb-4">
              Internal Guides
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-4">
              DEEP-DIVE BLOGS.
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              We write detailed technical breakdowns on every tool and workflow
              we use, n8n architectures, Claude Code patterns, and autonomous
              agent design. Free, always.
            </p>
          </div>
          <div className="shrink-0 flex flex-col gap-4">
            <Link
              href="/blog"
              className="px-10 py-4 rounded-full bg-black text-white font-bold text-sm uppercase tracking-widest hover:opacity-80 transition-opacity"
            >
              Read the Blog →
            </Link>
            <Link
              href="/blog/autonomous-sales-rep"
              className="px-10 py-4 rounded-full border border-black text-black font-bold text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all"
            >
              AI Sales Rep Deep-Dive →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────────────── */}
      <section className="bg-zinc-950/20 border-t border-white/5 py-24">
        <Contact2
          title="Need a Custom Workflow?"
          description="Tell us what you're trying to automate. We'll build the exact n8n workflow, Claude agent, or full automation system you need."
        />
      </section>

      <Footer />
    </main>
  );
}
