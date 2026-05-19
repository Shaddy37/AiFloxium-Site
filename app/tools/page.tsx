import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock3, FileText, Sparkles, Target } from 'lucide-react';

import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/sections/Footer';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';
import { toolsHubCards } from '@/lib/tools-data';

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
    title: 'Understand the cost of manual work',
    description:
      'Turn repetitive tasks, slow handoffs, and spreadsheet-heavy work into numbers you can act on.',
    icon: Clock3
  },
  {
    title: 'Get useful answers before booking a call',
    description:
      'The live calculator gives immediate estimates, while the report helps you take the next step with better context.',
    icon: FileText
  },
  {
    title: 'Use tools built for operators, not vanity traffic',
    description:
      'Each tool is designed around real operational bottlenecks, then connected to the service that solves them.',
    icon: Target
  }
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Navbar />

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

        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.32em] text-white/65">
              <span className="h-px w-10 bg-white/20" />
              Free tools hub
            </p>
            <h1 className="max-w-4xl text-[2.9rem] font-heading font-black leading-[0.92] tracking-[-0.04em] text-white md:text-[5.4rem]">
              Free tools to show
              <span className="block text-brand-orange">how much manual work is costing you.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/74 md:text-xl">
              Start with the live automation ROI calculator. It helps founders and operators
              estimate time saved, money saved, and the first workflows worth automating.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={liveTool.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-orange/90"
              >
                Open the live calculator
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#planned-tools"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:border-white/25 hover:bg-white/[0.08]"
              >
                See the roadmap
              </a>
            </div>
          </div>

          <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.04))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-brand-orange">
                  Live now
                </p>
                <h2 className="mt-3 text-3xl font-heading font-black tracking-tight text-white">
                  {liveTool.title}
                </h2>
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300">
                live
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-white/72 md:text-base">{liveTool.description}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/45">
                  Best for
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">{liveTool.audience}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/45">
                  What you get
                </p>
                <p className="mt-2 text-sm leading-6 text-white/82">{liveTool.shortValue}</p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-brand-orange/15 bg-brand-orange/10 p-4">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-orange">
                What people usually want to know
              </p>
              <p className="mt-3 text-sm leading-7 text-white/76">
                Most visitors land here because they want an automation ROI calculator, a way to
                estimate workflow automation savings, or a clearer answer to whether manual
                processes are already costing the business too much.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#110714] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
              Why this exists
            </p>
            <h2 className="text-4xl font-heading font-black tracking-tight text-white md:text-5xl">
              These tools are built to answer buying questions before a sales conversation starts.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {valuePoints.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
              >
                <item.icon className="h-5 w-5 text-brand-orange" />
                <h3 className="mt-4 text-2xl font-heading font-black tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6efe8] px-6 py-20 text-black md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-plum">
              Start here
            </p>
            <h2 className="text-4xl font-heading font-black tracking-tight text-brand-plum md:text-5xl">
              The live calculator does the heavy lifting for this hub.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-700">
              If your team is drowning in repetitive work, slow handoffs, status updates, or
              fragile spreadsheets, this is the fastest way to estimate whether automation is
              worth attention right now.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.08)] md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-brand-orange">
                  Featured tool
                </p>
                <h3 className="mt-3 text-3xl font-heading font-black tracking-tight text-black">
                  {liveTool.title}
                </h3>
              </div>
              <Sparkles className="mt-1 h-5 w-5 text-brand-orange" />
            </div>
            <p className="mt-4 text-base leading-7 text-zinc-700">{liveTool.shortValue}</p>

            <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-700">
              <li>See estimated hours recovered each month.</li>
              <li>Estimate payroll savings and potential annual upside.</li>
              <li>Get a report you can download after email capture.</li>
              <li>See the first workflows most likely worth automating.</li>
            </ul>

            <Link
              href={liveTool.href}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-plum px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-plum/90"
            >
              Launch calculator
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="planned-tools" className="bg-[#0f0612] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
                Roadmap and semantic coverage
              </p>
              <h2 className="text-4xl font-heading font-black tracking-tight text-white md:text-5xl">
                One live tool now, more pages that reinforce topical authority next.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/62 md:text-base">
              The roadmap is visible for two reasons: it shows where the tools hub is going, and
              it broadens the site around adjacent search demand without diluting the flagship page.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {plannedTools.map((tool) => (
              <article
                key={tool.slug}
                className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.2)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.24em] text-brand-orange">
                      {tool.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-heading font-black tracking-tight text-white">
                      {tool.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white/55">
                    planned
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/70">{tool.description}</p>
                <p className="mt-5 text-[11px] font-black uppercase tracking-[0.2em] text-white/45">
                  Search angle
                </p>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  Built to support searches around {tool.primaryKeyword},{' '}
                  {tool.relatedKeywords.filter((keyword) => keyword !== tool.primaryKeyword).join(', ')}.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f3ece4] px-6 py-20 text-black md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-plum">
              How this hub grows
            </p>
            <h2 className="text-4xl font-heading font-black tracking-tight text-brand-plum md:text-5xl">
              One strong tool page should lead, then the rest of the hub should answer the next questions naturally.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-700">
              The goal is not to dump keywords onto the page. The goal is to build pages and
              articles around the real follow-up questions people ask after they realize manual
              work is expensive: how to calculate automation ROI, whether automation is worth it
              for a small business, and which workflows should be fixed first.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] md:p-8">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-orange">
              What comes next
            </p>
            <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
              <p>
                The flagship calculator should rank for direct tool intent first, then future tool
                pages and supporting content can expand into adjacent topics like lead response
                time loss, internal tool cost, workflow automation savings, and content ROI.
              </p>
              <p>
                That gives the site broader semantic coverage without making this page feel like a
                wall of SEO labels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#130716_0%,#0d050f_100%)] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-8 shadow-[0_32px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl md:p-10">
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
            Next step
          </p>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-heading font-black tracking-tight text-white md:text-5xl">
                Use the calculator first. Book a discovery call when the numbers look serious.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/68">
                The tools hub is here to create clarity before the conversation. If the live tool
                shows expensive manual work, that is the point to scope the first automation
                project properly.
              </p>
            </div>
            <Link
              href={liveTool.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-orange/90"
            >
              Start with the calculator
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
