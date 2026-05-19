import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Gauge, Radar, Wrench } from 'lucide-react';

import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/sections/Footer';
import { Contact2 } from '@/components/ui/contact-2';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';
import { toolsHubCards } from '@/lib/tools-data';

export const metadata: Metadata = buildPageMetadata({
  title: 'Free AI Automation Tools for Operators | AIFLOXIUM',
  description:
    'Use AIFLOXIUM tools to estimate automation ROI, quantify workflow drag, and identify the highest-leverage systems to automate first.',
  path: '/tools',
  keywords: [
    'automation roi calculator',
    'workflow automation calculator',
    'free automation tools',
    'process automation savings calculator',
    'ai automation cost savings'
  ]
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' }
]);

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'AIFLOXIUM Tools',
  description:
    'Free tools for operators evaluating AI automation, internal tooling, and workflow efficiency.',
  hasPart: toolsHubCards.map((tool) => ({
    '@type': 'SoftwareApplication',
    name: tool.title,
    applicationCategory: 'BusinessApplication',
      url: `https://www.aifloxium.online${tool.href}`,
    description: tool.description
  }))
};

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

      <section className="relative overflow-hidden rounded-b-[3rem] bg-hero-gradient px-6 pb-24 pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-8 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-plum-glow opacity-55 blur-[110px]" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '48px 48px'
            }}
          />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
          <div className="max-w-4xl">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.32em] text-white/65">
              <span className="h-px w-10 bg-white/20" />
              Tools hub
            </p>
            <h1 className="text-[3rem] font-heading font-black leading-[0.9] tracking-tighter text-white md:text-[5.8rem]">
              OPERATOR TOOLS
              <br />
              <span className="text-brand-orange">BUILT TO QUALIFY</span>
              <br />
              REAL AUTOMATION DEMAND.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/78 md:text-xl">
              Start with the flagship ROI calculator. The rest of this hub expands from the same
              model: one practical tool per high-intent workflow problem, each tied directly to
              AIFLOXIUM services.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                label: 'Primary audience',
                value: 'Startup and SMB operators',
                icon: Radar
              },
              {
                label: 'Primary goal',
                value: 'Qualified leads plus SEO demand',
                icon: Gauge
              },
              {
                label: 'Build pattern',
                value: 'One flagship tool, then expand the hub',
                icon: Wrench
              }
            ].map((item) => (
              <div key={item.label} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                <item.icon className="h-5 w-5 text-brand-orange" />
                <p className="mt-4 text-[11px] font-black uppercase tracking-[0.2em] text-white/50">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-semibold leading-relaxed text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
                Current roadmap
              </p>
              <h2 className="text-4xl font-heading font-black tracking-tight text-white md:text-5xl">
                One live tool. Three obvious next builds.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
              The hub is intentionally narrow. The goal is not generic traffic. The goal is to
              attract operators who already feel the operational cost of manual workflows and want
              numbers.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {toolsHubCards.map((tool) => (
              <article
                key={tool.slug}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.24em] text-brand-orange">
                      {tool.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-heading font-black tracking-tight text-white">
                      {tool.title}
                    </h3>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${
                      tool.status === 'live'
                        ? 'border border-emerald-400/20 bg-emerald-400/10 text-emerald-300'
                        : 'border border-white/10 bg-white/[0.05] text-white/55'
                    }`}
                  >
                    {tool.status}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/72">{tool.description}</p>

                <dl className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <dt className="text-[11px] font-black uppercase tracking-[0.2em] text-white/45">
                      Audience
                    </dt>
                    <dd className="mt-2 text-sm text-white/80">{tool.audience}</dd>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <dt className="text-[11px] font-black uppercase tracking-[0.2em] text-white/45">
                      Primary keyword
                    </dt>
                    <dd className="mt-2 text-sm text-white/80">{tool.primaryKeyword}</dd>
                  </div>
                </dl>

                <div className="mt-6">
                  <Link
                    href={tool.href}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-white hover:bg-brand-orange/90"
                  >
                    {tool.status === 'live' ? 'Open tool' : 'View roadmap'}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-brand-plum/20 bg-brand-plum/6 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
              Content cluster
            </p>
            <h2 className="text-4xl font-heading font-black tracking-tight text-white md:text-5xl">
              The tool is the entry point. Articles do the expansion work.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65">
              The flagship page targets the calculator keyword family. Supporting content should
              answer the follow-up operator questions that create qualified traffic instead of
              generic curiosity clicks.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              'How to calculate automation ROI',
              'Best workflows to automate first',
              'Is automation worth it for small business',
              'How much time can workflow automation save'
            ].map((topic) => (
              <div key={topic} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-semibold text-white">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact2
        title="Want the next tool scoped around your buyer journey?"
        description="If you want a calculator, grader, or operator-facing tool that feeds qualified demand into your sales process, book the working session."
      />
      <Footer />
    </main>
  );
}
