import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock3, FileText, Target, ChevronRight } from 'lucide-react';

import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/sections/Footer';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';
import { toolsHubCards } from '@/lib/tools-data';
import ToolWaitlistForm from '@/components/tools/ToolWaitlistForm';

export const metadata: Metadata = buildPageMetadata({
  title: 'Free Automation Calculators and AI Operations Tools | AIFLOXIUM',
  description:
    'Use free AIFLOXIUM tools to calculate automation ROI, understand the cost of manual work, and find the first workflows worth automating.',
  path: '/tools',
  keywords: [
    'automation roi calculator',
    'workflow automation calculator',
    'free automation tools',
    'manual process cost calculator',
    'business automation cost savings',
    'small business automation calculator'
  ],
  eyebrow: 'Free automation and ops tools'
});

const liveTool = toolsHubCards.find((tool) => tool.status === 'live') ?? toolsHubCards[0]!;
const plannedTools = toolsHubCards.filter((tool) => tool.status === 'planned');

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' }
]);

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'AIFLOXIUM Free Tools',
      description:
        'Free calculators and decision tools for startup and SMB operators evaluating automation, manual work costs, and workflow improvements.',
      url: 'https://www.aifloxium.online/tools'
    },
    {
      '@type': 'ItemList',
      name: 'AIFLOXIUM Tools',
      itemListElement: toolsHubCards.map((tool, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: tool.title,
        url: `https://www.aifloxium.online${tool.href}`
      }))
    }
  ]
};

const valuePoints = [
  {
    title: 'Quantify Manual Overhead',
    description:
      'Translate repetitive tasks, slow handoffs, and spreadsheet friction into clear financial metrics.',
    icon: Clock3
  },
  {
    title: 'Data-Backed Decisions',
    description:
      'Run the calculations first to obtain immediate payback projections before writing a single line of code.',
    icon: FileText
  },
  {
    title: 'Built for Operators',
    description:
      'Engineered around real operational bottlenecks (lead routing, reporting syncs, client onboarding) to deliver actionable next steps.',
    icon: Target
  }
];

const toolsGraphJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [breadcrumbJsonLd, collectionJsonLd]
};

export default function ToolsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-brand-bg text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsGraphJsonLd) }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/8 bg-[radial-gradient(circle_at_top,_rgba(88,28,135,0.24),_transparent_38%),linear-gradient(180deg,#180a1f_0%,#120716_52%,#0b040d_100%)] px-6 pb-20 pt-36 md:pb-24 md:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[15%] top-10 h-56 w-56 rounded-full bg-brand-orange/10 blur-[90px]" />
          <div className="absolute right-[10%] top-12 h-72 w-72 rounded-full bg-brand-plum/25 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '42px 42px'
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs font-bold text-white/55 uppercase tracking-widest relative z-10">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-600" />
            <span className="text-white font-black">Tools</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.32em] text-brand-orange">
              <span className="h-px w-10 bg-brand-orange/45" />
              Engineered Operations Tools
            </p>
            <h1 className="max-w-4xl text-[2.9rem] font-heading font-black leading-[0.92] tracking-[-0.04em] text-white md:text-[5.4rem]">
              Quantify the cost of
              <span className="block text-brand-orange">manual workflow friction.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/74 md:text-xl">
              Estimate time saved, payroll overhead, and payback metrics before you build. Start with our interactive ROI calculator to model your first automation.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={liveTool.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-orange/90 shadow-[0_10px_30px_rgba(255,107,0,0.2)]"
              >
                Launch ROI Calculator
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#planned-tools"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:border-white/25 hover:bg-white/[0.08]"
              >
                Explore Roadmap
              </a>
            </div>
          </div>

          <article className="rounded-[2rem] border border-white/10 bg-zinc-900/80 p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-brand-orange">
                  Live Calculator
                </p>
                <h2 className="mt-3 text-3xl font-heading font-black tracking-tight text-white">
                  {liveTool.title}
                </h2>
              </div>
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">
                active
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">{liveTool.description}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/5 bg-black/40 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                  Target Audience
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{liveTool.audience}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/5 bg-black/40 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                  Key Metrics Estimated
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{liveTool.shortValue}</p>
              </div>
            </div>

            <Link
              href={liveTool.href}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-colors"
            >
              Open Interactive Tool
              <ArrowRight className="h-4 w-4 text-brand-orange" />
            </Link>
          </article>
        </div>
      </div>
    </section>

      {/* Why This Exists Section */}
      <section className="bg-[#110714] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
              Operational Value
            </p>
            <h2 className="text-4xl font-heading font-black tracking-tight text-white md:text-5xl leading-tight">
              Get objective answers before writing scopes or starting projects.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {valuePoints.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.8rem] border border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
              >
                <div className="h-10 w-10 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-heading font-black tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="planned-tools" className="bg-[#0f0612] px-6 py-20 md:py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
                Operations Tool Roadmap
              </p>
              <h2 className="text-4xl font-heading font-black tracking-tight text-white md:text-5xl leading-tight">
                Upcoming calculators and decision tools in our pipeline.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              We continuously design and build interactive tools to help startup and SMB operators model their processes, find cost leaks, and prioritize development plans.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {plannedTools.map((tool) => (
              <article
                key={tool.slug}
                className="rounded-[1.8rem] border border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.2)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.24em] text-brand-orange">
                        {tool.eyebrow}
                      </p>
                      <h3 className="mt-2 text-2xl font-heading font-black tracking-tight text-white">
                        {tool.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-white/50 shrink-0">
                      planned
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-300">{tool.description}</p>
                  
                  {/* Waitlist Subscription */}
                  <div className="mt-4">
                    <ToolWaitlistForm toolSlug={tool.slug} toolTitle={tool.title} />
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/5">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                    Modeled Output
                  </p>
                  <p className="text-xs leading-relaxed text-zinc-400">
                    {tool.shortValue}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step CTA Section */}
      <section className="bg-[linear-gradient(180deg,#130716_0%,#0d050f_100%)] px-6 py-20 md:py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl rounded-[2.4rem] border border-white/10 bg-zinc-900/80 p-8 md:p-10">
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
            Get Started
          </p>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-white leading-tight">
                Book a discovery call once you review your calculations.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Our tools hub creates clarity before you spend a dollar. If our ROI calculator shows significant manual overhead, let{"'"}s connect for a free 30-minute operations audit to map your custom setup.
              </p>
            </div>
            <Link
              href={liveTool.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-brand-orange/90 shadow-[0_10px_30px_rgba(255,107,0,0.2)] shrink-0"
            >
              Run Calculations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
