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
      <main id="main-content" className="min-h-screen bg-[#0a0608] text-white overflow-x-hidden selection:bg-[#7B2CBF] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(vsGraphJsonLd) }}
        />
        <Navbar />

        {/* Global Purple/Plum Radial Glow behind Hero */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[#7B2CBF]/5 opacity-30 blur-[120px] pointer-events-none -z-10" />

        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pb-20 pt-36 md:pb-24 md:pt-40">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-[10%] top-10 h-56 w-56 rounded-full bg-[#7B2CBF]/5 blur-[95px]" />
            <div className="absolute right-[15%] top-12 h-72 w-72 rounded-full bg-[#7B2CBF]/10 blur-[125px]" />
            <div
              className="absolute inset-0 opacity-[0.01]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                backgroundSize: '42px 42px'
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-[10px] font-semibold text-white/50 uppercase tracking-widest mb-8 font-inter">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3 text-white/30" />
              <span className="text-white font-bold">Comparisons</span>
            </div>

            <div className="max-w-3xl mb-16">
              <span className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#E0AAFF] font-inter">
                <span className="h-px w-10 bg-[#7B2CBF]/45" />
                Architectural Breakdown
              </span>
              <h1 className="text-[2.6rem] font-instrument text-white leading-[1.05] tracking-tight md:text-[5rem]">
                Platform <br className="sm:hidden" />
                <span className="font-instrument text-[#E0AAFF] italic">comparisons.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/70 font-inter font-light">
                Compare direct costs, processing speeds, security parameters, and custom code integrations of off-the-shelf cloud solutions versus my tailored self-hosted environments.
              </p>
            </div>

            {/* Grid of Comparisons */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {comparisons.map((comp) => {
                const Icon = comparisonIcons[comp.slug] || Scale;
                return (
                  <article
                    key={comp.slug}
                    className="group relative rounded-[2rem] border border-white/5 bg-white/[0.01] p-6 transition-colors duration-300 hover:border-[#7B2CBF]/30 hover:bg-[#7B2CBF]/5 flex flex-col justify-between liquid-glass"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-6">
                        <div className="h-12 w-12 rounded-2xl bg-[#7B2CBF]/5 border border-[#7B2CBF]/20 flex items-center justify-center text-[#E0AAFF] transition-transform duration-300 group-hover:scale-105">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50 font-inter">
                          Analysis
                        </span>
                      </div>

                      <h2 className="text-2xl font-semibold font-inter tracking-wide text-white mb-3 group-hover:text-[#E0AAFF] transition-colors">
                        {comp.title}
                      </h2>

                      <p className="text-sm leading-relaxed text-white/60 mb-6 line-clamp-4 font-inter font-light">
                        {comp.metaDescription}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-white/5 mt-auto flex items-center justify-between font-inter">
                      <div className="text-xs text-white/50 font-light">
                        Compare {comp.competitorName}
                      </div>
                      <Link
                        href={`/vs/${comp.slug}`}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#E0AAFF] group-hover:text-white transition-colors"
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
        <section className="bg-[#0a0608] border-t border-white/5 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center rounded-[2.4rem] border border-white/5 bg-white/[0.01] p-10 liquid-glass">
            <h3 className="text-2xl font-instrument text-white tracking-tight leading-[1.05] mb-4">
              Need a custom <span className="font-instrument text-[#E0AAFF] italic">performance audit?</span>
            </h3>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-2xl mx-auto mb-8 font-inter font-light">
              If you run more than 50,000 tasks per month, let me analyze your data pipelines to calculate exact migration costs and payback cycles.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#E0AAFF] transition-all duration-300 button-glow shadow-sm"
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
