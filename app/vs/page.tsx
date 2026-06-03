import type { ComponentType } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Scale, GitMerge, PhoneCall } from 'lucide-react';

import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/sections/Footer';
import SmoothScroll from '@/components/providers/SmoothScroll';
import { vsData } from '@/lib/vs-data';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = buildPageMetadata({
  title: 'Platform Comparisons & Alternative Analyses | AIFLOXIUM',
  description:
    'Detailed architectural comparisons of modern automation tools and developer engines. Learn how self-hosted n8n and custom Voice AI stack up against Zapier, Make.com, and Twilio.',
  path: '/vs',
  keywords: [
    'n8n vs zapier',
    'n8n vs make',
    'zapier alternative',
    'make.com alternative',
    'voice ai vs twilio autodialer',
    'self hosted automation cost',
    'workflow automation comparison'
  ],
  eyebrow: 'Architectural Platform Comparisons'
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Comparisons', path: '/vs' }
]);

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'AIFLOXIUM Platform Comparisons',
      description:
        'Detailed side-by-side matrices and ROI calculations comparing AIFLOXIUM self-hosted setups to legacy cloud service providers.',
      url: `${SITE_URL}/vs`
    },
    {
      '@type': 'ItemList',
      name: 'Platform Comparisons',
      itemListElement: Object.values(vsData).map((comp, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: comp.title,
        url: `${SITE_URL}/vs/${comp.slug}`
      }))
    }
  ]
};

const vsGraphJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [breadcrumbJsonLd, collectionJsonLd]
};

// Map slugs to representative icons for visual flavor
const comparisonIcons: Record<string, ComponentType<{ className?: string }>> = {
  'n8n-vs-zapier': Scale,
  'n8n-vs-make': GitMerge,
  'voice-ai-vs-twilio-autodialer': PhoneCall
};

export default function VsHubPage() {
  const comparisons = Object.values(vsData);

  return (
    <SmoothScroll>
      <main id="main-content" className="min-h-screen bg-brand-bg text-white overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(vsGraphJsonLd) }}
        />
        <Navbar />

        {/* Global Purple/Plum Radial Glow behind Hero */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-brand-plum-glow opacity-30 blur-[120px] pointer-events-none -z-10" />

        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pb-20 pt-36 md:pb-24 md:pt-40">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-[10%] top-10 h-56 w-56 rounded-full bg-brand-orange/5 blur-[95px]" />
            <div className="absolute right-[15%] top-12 h-72 w-72 rounded-full bg-brand-plum/20 blur-[125px]" />
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                backgroundSize: '42px 42px'
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-200 uppercase tracking-widest mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5 text-zinc-600" />
              <span className="text-white font-black">Comparisons</span>
            </div>

            <div className="max-w-3xl mb-16">
              <p className="mb-5 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.32em] text-brand-orange">
                <span className="h-px w-10 bg-brand-orange/45" />
                Architectural Breakdown
              </p>
              <h1 className="text-[2.6rem] font-heading font-black leading-[0.95] tracking-[-0.035em] text-white md:text-[5rem]">
                Platform <br className="sm:hidden" />
                <span className="text-brand-orange">comparisons</span>.
              </h1>
              <p className="mt-6 text-base leading-8 text-zinc-200 md:text-xl">
                Compare direct costs, processing speeds, security parameters, and custom code integrations of off-the-shelf cloud solutions versus our tailored self-hosted environments.
              </p>
            </div>

            {/* Grid of Comparisons */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {comparisons.map((comp) => {
                const Icon = comparisonIcons[comp.slug] || Scale;
                return (
                  <article
                    key={comp.slug}
                    className="group relative rounded-[2rem] border border-white/5 bg-zinc-950 p-6 transition-colors duration-300 hover:border-brand-orange/20 hover:bg-zinc-900 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-6">
                        <div className="h-12 w-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange transition-transform duration-300 group-hover:scale-105">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-primary">
                          Analysis
                        </span>
                      </div>

                      <h2 className="text-2xl font-heading font-black tracking-tight text-white mb-3 group-hover:text-brand-orange transition-colors">
                        {comp.title}
                      </h2>

                      <p className="text-sm leading-relaxed text-zinc-200 mb-6 line-clamp-4">
                        {comp.metaDescription}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-white/5 mt-auto flex items-center justify-between">
                      <div className="text-xs text-zinc-300 font-medium">
                        Compare {comp.competitorName}
                      </div>
                      <Link
                        href={`/vs/${comp.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-[0.15em] text-white group-hover:text-brand-orange transition-colors"
                      >
                        Read Comparison
                        <ArrowRight className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Informational Callout */}
        <section className="bg-brand-bg-dark border-t border-white/5 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-heading font-black text-white tracking-[-0.035em] mb-4">
              Need a custom performance audit?
            </h3>
            <p className="text-sm text-zinc-200 leading-relaxed max-w-2xl mx-auto mb-8">
              If you run more than 50,000 tasks per month, let us analyze your data pipelines to calculate exact migration costs and payback cycles.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] text-white hover:bg-brand-orange/90 transition-colors shadow-lg"
            >
              Request Free Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
