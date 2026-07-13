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
      'Run the calculations first to obtain immediate payback projections before writing code.',
    icon: FileText
  },
  {
    title: 'Built for Operators',
    description:
      'Engineered around real operational bottlenecks to deliver actionable next steps.',
    icon: Target
  }
];

const toolsGraphJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [breadcrumbJsonLd, collectionJsonLd]
};

export default function ToolsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#0a0608] text-white selection:bg-[#7B2CBF] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsGraphJsonLd) }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#0a0608] px-6 pb-20 pt-36 md:pb-24 md:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[15%] top-10 h-56 w-56 rounded-full bg-[#7B2CBF]/5 blur-[90px]" />
          <div className="absolute right-[10%] top-12 h-72 w-72 rounded-full bg-[#7B2CBF]/10 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.01]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '42px 42px'
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-white/50 uppercase tracking-widest relative z-10 font-inter">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-white/30" />
            <span className="text-white font-bold font-inter">Tools</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <span className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#E0AAFF] font-inter">
                <span className="h-px w-10 bg-[#7B2CBF]/45" />
                Engineered Operations Tools
              </span>
              <h1 className="max-w-4xl text-[2.9rem] font-instrument leading-[1.05] tracking-tight text-white md:text-[5.4rem]">
                Quantify the cost of <br />
                <span className="font-instrument text-[#E0AAFF] italic">manual workflow friction.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/70 font-inter font-light">
                Estimate time saved, payroll overhead, and payback projections. Start with my interactive ROI calculator to model your first automation.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={liveTool.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-4 text-xs font-semibold uppercase tracking-wider hover:bg-[#E0AAFF] transition-all duration-300 button-glow font-inter"
                >
                  Launch ROI Calculator
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#planned-tools"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/5 font-inter"
                >
                  Explore Roadmap
                </a>
              </div>
            </div>

            <article className="rounded-[2rem] border border-white/5 bg-white/[0.01] p-6 md:p-8 liquid-glass">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#E0AAFF] font-inter">
                    Live Calculator
                  </span>
                  <h2 className="mt-3 text-3xl font-semibold font-inter tracking-wide text-white">
                    {liveTool.title}
                  </h2>
                </div>
                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-emerald-400 font-inter">
                  active
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/70 font-inter font-light">{liveTool.description}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/5 bg-black/40 p-4 liquid-glass">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 font-inter">
                    Target Audience
                  </span>
                  <p className="mt-2 text-xs leading-relaxed text-white/70 font-inter font-light">{liveTool.audience}</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/5 bg-black/40 p-4 liquid-glass">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 font-inter">
                    Key Metrics Estimated
                  </span>
                  <p className="mt-2 text-xs leading-relaxed text-white/70 font-inter font-light">{liveTool.shortValue}</p>
                </div>
              </div>

              <Link
                href={liveTool.href}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-colors font-inter"
              >
                Open Interactive Tool
                <ArrowRight className="h-4 w-4 text-[#E0AAFF]" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Why This Exists Section */}
      <section className="bg-[#0a0608] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E0AAFF] block font-inter">
              Operational Value
            </span>
            <h2 className="text-4xl font-instrument text-white tracking-tight leading-[1.05]">
              Get objective answers before writing scopes or starting projects.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {valuePoints.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.8rem] border border-white/5 bg-white/[0.01] p-6 liquid-glass"
              >
                <div className="h-10 w-10 rounded-2xl bg-[#7B2CBF]/5 border border-[#7B2CBF]/20 flex items-center justify-center text-[#E0AAFF]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold font-inter tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60 font-inter font-light">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="planned-tools" className="bg-[#0a0608] px-6 py-20 md:py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E0AAFF] block font-inter">
                Operations Tool Roadmap
              </span>
              <h2 className="text-4xl font-instrument text-white tracking-tight leading-[1.05]">
                Upcoming calculators and decision tools in my pipeline.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/60 font-inter font-light md:text-base">
              I build interactive tools to help startup and SMB operators model processes, find cost leaks, and prioritize development.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {plannedTools.map((tool) => (
              <article
                key={tool.slug}
                className="rounded-[1.8rem] border border-white/5 bg-white/[0.01] p-6 flex flex-col justify-between liquid-glass"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#E0AAFF] font-inter">
                        {tool.eyebrow}
                      </span>
                      <h3 className="mt-2 text-2xl font-semibold font-inter tracking-wide text-white">
                        {tool.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 shrink-0 font-inter">
                      planned
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/60 font-inter font-light">{tool.description}</p>
                  
                  {/* Waitlist Subscription */}
                  <div className="mt-4">
                    <ToolWaitlistForm toolSlug={tool.slug} toolTitle={tool.title} />
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/5 font-inter">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-1.5 block">
                    Modeled Output
                  </span>
                  <p className="text-xs leading-relaxed text-white/60 font-light">
                    {tool.shortValue}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step CTA Section */}
      <section className="bg-[#0a0608] px-6 py-20 md:py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl rounded-[2.4rem] border border-white/5 bg-white/[0.01] p-8 md:p-10 liquid-glass">
          <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E0AAFF] block font-inter">
            Get Started
          </span>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-instrument text-white tracking-tight leading-[1.05]">
                Book a discovery call <br />{' '}
                <span className="font-instrument text-[#E0AAFF] italic">once you review your calculations.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/60 font-inter font-light">
                If my ROI calculator shows significant manual overhead, let's connect for a free operations audit to map your custom setup.
              </p>
            </div>
            <Link
              href={liveTool.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-4 text-xs font-semibold uppercase tracking-wider hover:bg-[#E0AAFF] transition-all duration-300 button-glow shrink-0 font-inter"
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
