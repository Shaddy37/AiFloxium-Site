import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Check, 
  X, 
  ChevronRight, 
  HelpCircle, 
  ArrowRight,
  Code,
  Shield,
  Coins,
  Scale,
  Cpu,
  GitMerge,
  Phone,
  Zap,
  Info
} from 'lucide-react';

import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/sections/Footer';
import SmoothScroll from '@/components/providers/SmoothScroll';
import VsCostCalculator from '@/components/tools/VsCostCalculator';
import { vsData } from '@/lib/vs-data';
import { buildPageMetadata, buildBreadcrumbJsonLd } from '@/lib/seo';
import { CALENDLY_URL, SITE_URL } from '@/lib/site';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const iconMap = {
  Code,
  Shield,
  Coins,
  Scale,
  Cpu,
  GitMerge,
  Phone,
  Zap
};

const serviceMapping: Record<string, { label: string; href: string }> = {
  'n8n-vs-zapier': { label: 'Explore n8n Services', href: '/services/n8n-workflow-automation' },
  'n8n-vs-make': { label: 'Explore n8n Services', href: '/services/n8n-workflow-automation' },
  'voice-ai-vs-twilio-autodialer': { label: 'Explore Voice AI Services', href: '/services/autonomous-agents' }
};

// Simple bold tag formatter helper
function renderFormattedText(text: string) {
  if (!text) return null;
  const parts = text.split('**');
  return (
    <>
      {parts.map((part, i) => (
        i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
      ))}
    </>
  );
}

export async function generateStaticParams() {
  return [
    { slug: 'n8n-vs-zapier' },
    { slug: 'n8n-vs-make' },
    { slug: 'voice-ai-vs-twilio-autodialer' }
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = vsData[slug];
  if (!data) return {};

  return buildPageMetadata({
    title: `${data.metaTitle} | AIFLOXIUM`,
    description: data.metaDescription,
    path: `/vs/${slug}`,
    keywords: data.metaKeywords,
    eyebrow: 'Platform Comparison'
  });
}

export default async function VsComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const data = vsData[slug];

  if (!data) {
    notFound();
  }

  // Build JSON-LD structured schemas
  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Comparisons', path: '/vs' },
    { name: data.title, path: `/vs/${slug}` }
  ]);

  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: data.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const comparisonWebPageSchema = {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/vs/${slug}#webpage`,
    url: `${SITE_URL}/vs/${slug}`,
    name: `${data.title} Comparison`,
    description: data.metaDescription,
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/brand/aifloxium-logo.png`
    },
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`
    }
  };

  const productSchema = {
    '@type': 'Product',
    name: `AIFLOXIUM ${data.ourName} Setup`,
    image: `${SITE_URL}/brand/aifloxium-logo.png`,
    description: data.overview,
    brand: {
      '@type': 'Brand',
      name: 'AIFLOXIUM'
    },
    category: 'AI Automation Software',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '1500.00',
      highPrice: '10000.00',
      offerCount: 3,
      url: `${SITE_URL}/pricing`
    }
  };

  const comparisonGraphJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema,
      faqSchema,
      comparisonWebPageSchema,
      productSchema
    ]
  };

  return (
    <SmoothScroll>
      <main id="main-content" className="relative min-h-screen bg-[#0a0608] text-white overflow-x-hidden selection:bg-[#7B2CBF] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonGraphJsonLd) }}
        />

        {/* Global Purple/Plum Radial Glow behind Hero */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[#7B2CBF]/5 opacity-30 blur-[120px] pointer-events-none -z-10" />

        <Navbar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative">
          
          {/* Breadcrumbs & Back */}
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-white/50 uppercase tracking-widest relative z-10 font-inter">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-white/30" />
            <Link href="/resources#comparisons" className="transition-colors hover:text-white">
              Comparisons
            </Link>
            <ChevronRight className="h-3 w-3 text-white/30" />
            <span className="text-white font-bold font-inter">{data.title}</span>
          </nav>

          {/* Hero Header */}
          <div className="max-w-4xl mb-16">
            <span className="inline-block px-3 py-1 rounded-full border border-[#7B2CBF]/20 bg-[#7B2CBF]/5 text-[#E0AAFF] text-[9px] font-semibold uppercase tracking-[0.25em] mb-4 font-inter">
              Platform vs Platform Analysis
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-instrument text-white leading-[1.05] tracking-tight mb-6">
              {data.h1}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed font-inter font-light">
              {renderFormattedText(data.overview)}
            </p>
          </div>

          {/* TL;DR Summary Block (Restructured) */}
          <div className="rounded-[2rem] border border-white/5 bg-white/[0.01] p-6 md:p-8 mb-16 relative overflow-hidden liquid-glass">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#7B2CBF]" />
            <h2 className="text-lg font-semibold font-inter tracking-wide text-white mb-3 flex items-center gap-2">
              <Info className="h-5 w-5 text-[#E0AAFF]" />
              The verdict
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 mt-4">
              <div>
                <p className="text-sm leading-relaxed text-white/60 font-inter font-light">
                  {renderFormattedText(data.whyAlternative)}
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/5 bg-white/[0.01] p-5 flex flex-col justify-center liquid-glass">
                <span className="text-[9px] font-semibold text-[#E0AAFF] uppercase tracking-wider mb-2 font-inter">Architectural Verdict</span>
                <p className="text-xs text-white/70 leading-relaxed font-inter font-light">
                  {data.slug.includes('voice-ai') 
                    ? 'Voice AI operates with sub-500ms response times and direct CRM pipeline writes. Traditional IVRs and manual calling are a major drain on conversion speed.'
                    : 'Self-hosted n8n removes execution licensing taxes completely. Your operations scale on a flat VPS fee with complete developer control.'}
                </p>
              </div>
            </div>
          </div>

          {/* Cost Savings Calculator Section */}
          <section className="mb-20">
            <div className="mb-8">
              <h2 className="text-3xl font-instrument text-white tracking-tight">
                Cost & Operation Calculator
              </h2>
              <p className="text-sm text-white/60 mt-2 font-inter font-light">
                Evaluate direct cost savings when migrating away from legacy tools to my engineered pipelines.
              </p>
            </div>
            <VsCostCalculator
              competitorName={data.competitorName}
              ourName={data.ourName}
              competitorCostPerUnit={data.valueBreakdown.calculator.competitorCostPerUnit}
              ourCostPerUnit={data.valueBreakdown.calculator.ourCostPerUnit}
              fixedCost={data.valueBreakdown.calculator.fixedCost}
              unitName={data.valueBreakdown.calculator.unitName}
              defaultUnits={data.valueBreakdown.calculator.defaultUnits}
              competitorMathLabel={data.valueBreakdown.calculator.competitorMathLabel}
              ourMathLabel={data.valueBreakdown.calculator.ourMathLabel}
            />
          </section>

          {/* Feature Matrix / Side-by-Side Table */}
          <section className="mb-20">
            <div className="mb-8">
              <h2 className="text-3xl font-instrument text-white tracking-tight">
                Feature Comparison Matrix
              </h2>
              <p className="text-sm text-white/60 mt-2 font-inter font-light">
                A point-by-point breakdown of architectural capabilities and limits.
              </p>
            </div>

            <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-white/[0.01] liquid-glass">
              <table className="w-full text-left border-collapse font-inter">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-6 text-[10px] font-semibold uppercase tracking-wider text-white/70 w-[25%]">Feature / Metric</th>
                    <th className="p-6 text-[10px] font-semibold uppercase tracking-wider text-[#E0AAFF] w-[35%]">AIFLOXIUM {data.ourName}</th>
                    <th className="p-6 text-[10px] font-semibold uppercase tracking-wider text-white/40 w-[30%]">{data.competitorName}</th>
                    <th className="p-6 text-[10px] font-semibold uppercase tracking-wider text-white/70 text-center w-[10%]">Winner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {data.features.map((feature, i) => (
                    <tr key={i} className="hover:bg-white/[0.01] transition-colors duration-200">
                      <td className="p-6 font-semibold text-sm text-white">
                        {feature.name}
                        <span className="block mt-1.5 text-xs text-white/50 font-normal font-light">
                          {feature.details}
                        </span>
                      </td>
                      <td className="p-6 text-sm text-[#E0AAFF] leading-relaxed font-medium bg-[#7B2CBF]/2">
                        {feature.ourValue}
                      </td>
                      <td className="p-6 text-sm text-white/60 leading-relaxed font-light">
                        {feature.competitorValue}
                      </td>
                      <td className="p-6 text-center">
                        {feature.winner === 'us' && (
                          <span className="inline-flex h-7 px-3 items-center justify-center rounded-full bg-[#7B2CBF]/10 border border-[#7B2CBF]/20 text-[#E0AAFF] text-[9px] font-semibold uppercase tracking-wider">
                            AIFLOXIUM
                          </span>
                        )}
                        {feature.winner === 'them' && (
                          <span className="inline-flex h-7 px-3 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/40 text-[9px] font-semibold uppercase tracking-wider">
                            {data.competitorName}
                          </span>
                        )}
                        {feature.winner === 'tie' && (
                          <span className="inline-flex h-7 px-3 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/30 text-[9px] font-semibold uppercase tracking-wider font-light">
                            Tie
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Deep-Dive Paragraph Comparisons */}
          <section className="mb-20">
            <div className="mb-10">
              <h2 className="text-3xl font-instrument text-white tracking-tight">
                Deep-Dive Capability Comparison
              </h2>
              <p className="text-sm text-white/60 mt-2 font-inter font-light">
                A closer look at how operational architecture differs in production.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.deepComparison.map((section, idx) => {
                const Icon = iconMap[section.icon] || Zap;
                return (
                  <div key={idx} className="rounded-[2rem] border border-white/5 bg-white/[0.01] p-6 md:p-8 flex flex-col justify-between liquid-glass">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-12 w-12 rounded-2xl bg-[#7B2CBF]/5 border border-[#7B2CBF]/20 flex items-center justify-center text-[#E0AAFF]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold font-inter tracking-wide text-white">
                          {section.title}
                        </h3>
                      </div>
                      
                      <div className="space-y-6 font-inter">
                        <div>
                          <span className="text-[9px] font-semibold text-[#E0AAFF] uppercase tracking-wider mb-2 block">
                            AIFLOXIUM Setup
                          </span>
                          <p className="text-sm leading-relaxed text-white/70 font-light">
                            {renderFormattedText(section.ourText)}
                          </p>
                        </div>
                        
                        <div>
                          <span className="text-[9px] font-semibold text-white/40 uppercase tracking-wider mb-2 block">
                            Standard {data.competitorName} Setup
                          </span>
                          <p className="text-sm leading-relaxed text-white/60 font-light">
                            {renderFormattedText(section.competitorText)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5 font-inter">
                      <div className="text-xs italic text-white/50 font-light">
                        <strong className="text-white not-italic uppercase tracking-wider text-[9px] block mb-1">{"Architect's Summary"}</strong>
                        {section.summary}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Who is Best For section */}
          <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 font-inter">
            {/* Best for AIFLOXIUM */}
            <div className="p-6 md:p-8 rounded-[2rem] border border-[#7B2CBF]/20 bg-[#7B2CBF]/5">
              <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                <Check className="h-5 w-5 text-[#E0AAFF] shrink-0" />
                Who Should Choose AIFLOXIUM
              </h3>
              <p className="text-xs text-[#E0AAFF]/70 mt-2 mb-6 font-light">
                My custom-engineered infrastructure is ideal if you fit the following profiles:
              </p>
              <ul className="space-y-4">
                {data.whoIsBestFor.us.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm leading-relaxed text-white/75 font-light">
                    <span className="h-5 w-5 rounded-full bg-[#7B2CBF]/10 border border-[#7B2CBF]/20 flex items-center justify-center text-[#E0AAFF] shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Best for Competitor */}
            <div className="p-6 md:p-8 rounded-[2rem] border border-white/5 bg-white/[0.01] liquid-glass">
              <h3 className="text-xl font-semibold text-white/80 flex items-center gap-3">
                <X className="h-5 w-5 text-white/40 shrink-0" />
                Who is Better Off with {data.competitorName}
              </h3>
              <p className="text-xs text-white/40 mt-2 mb-6 font-light">
                The off-the-shelf competitor is a reasonable path under these scenarios:
              </p>
              <ul className="space-y-4">
                {data.whoIsBestFor.competitor.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm leading-relaxed text-white/60 font-light">
                    <span className="h-5 w-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 shrink-0 mt-0.5">
                      <X className="h-3 w-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Actionable CTA Section */}
          <section className="mb-20 rounded-[2.5rem] border border-white/5 bg-white/[0.01] p-8 md:p-12 text-center relative overflow-hidden liquid-glass">
            {/* Radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7B2CBF]/5 blur-[80px] pointer-events-none -z-10" />

            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-white/40 text-[9px] font-semibold uppercase tracking-[0.25em] mb-6 inline-block font-inter">
              Free Process Audit
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-instrument text-white tracking-tight leading-[1.05] mb-6">
              Stop Paying the Scaling Tax.<br className="hidden sm:inline" /> Deploy <span className="font-instrument text-[#E0AAFF] italic">Engineered Workflows.</span>
            </h2>
            <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto leading-relaxed mb-10 font-inter font-light">
              Skip brittle templates, unpredictable operations counts, and high-maintenance cloud configurations. Let&apos;s design a custom self-hosted environment that scales autonomously.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-inter">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-full bg-white text-black px-8 py-4 text-xs font-semibold uppercase tracking-wider hover:bg-[#E0AAFF] transition-all duration-300 button-glow"
              >
                Book Discovery Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={serviceMapping[slug]?.href || '/services'}
                className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-full border border-white/20 bg-transparent hover:bg-white/5 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white transition-all"
              >
                {serviceMapping[slug]?.label || 'Explore Services'}
              </Link>
            </div>
          </section>

          {/* FAQ Accordion Section */}
          <section className="max-w-4xl mx-auto font-inter">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-instrument text-white tracking-tight flex items-center justify-center gap-3">
                <HelpCircle className="h-7 w-7 text-[#E0AAFF]" />
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-white/60 mt-2 font-light">
                Common questions about architectural migrations, hosting setups, and support.
              </p>
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] liquid-glass">
                  <h3 className="text-base font-semibold text-white mb-2 flex gap-3 items-start tracking-wide">
                    <span className="h-6 w-6 rounded-lg bg-[#7B2CBF]/10 border border-[#7B2CBF]/20 flex items-center justify-center text-[#E0AAFF] text-xs shrink-0 mt-0.5">Q</span>
                    <span>{faq.question}</span>
                  </h3>
                  <div className="pl-9 text-sm leading-relaxed text-white/60 font-light">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Other Comparisons ──────────────────────────────────────── */}
          <section className="mb-20 font-inter">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-instrument text-white tracking-tight">
                Other <span className="font-instrument text-[#E0AAFF] italic">Comparisons</span>
              </h2>
              <p className="text-sm text-white/60 mt-2 font-light">
                Explore more side-by-side breakdowns.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {Object.values(vsData)
                .filter((other) => other.slug !== slug)
                .slice(0, 3)
                .map((other) => (
                  <Link
                    key={other.slug}
                    href={`/vs/${other.slug}`}
                    className="group relative bg-white/[0.01] border border-white/5 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#7B2CBF]/30 hover:bg-[#7B2CBF]/5 transition-all duration-500 liquid-glass"
                  >
                    <h3 className="text-lg font-semibold tracking-wide text-white group-hover:text-[#E0AAFF] transition-colors leading-snug">
                      {other.title}
                    </h3>
                    <p className="text-sm text-white/50 font-light leading-relaxed flex-1 line-clamp-3">
                      {other.overview.replace(/\*\*/g, '').slice(0, 150)}...
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                      <span className="text-[10px] font-semibold text-[#E0AAFF] uppercase tracking-wider">
                        Read comparison →
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </section>

        </div>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
