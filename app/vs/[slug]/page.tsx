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
        i % 2 === 1 ? <strong key={i} className="text-white font-black">{part}</strong> : part
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
      <main id="main-content" className="relative min-h-screen bg-brand-bg text-foreground overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonGraphJsonLd) }}
        />

        {/* Global Purple/Plum Radial Glow behind Hero */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-brand-plum-glow opacity-30 blur-[120px] pointer-events-none -z-10" />

        <Navbar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative">
          
          {/* Breadcrumbs & Back */}
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs font-bold text-white/55 uppercase tracking-widest relative z-10">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-600" />
            <Link href="/vs" className="transition-colors hover:text-white">
              Comparisons
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-600" />
            <span className="text-white font-black">{data.title}</span>
          </nav>

          {/* Hero Header */}
          <div className="max-w-4xl mb-16">
            <span className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.25em] mb-4">
              Platform vs Platform Analysis
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white leading-[1.1] mb-6">
              {data.h1}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-zinc-200 leading-relaxed">
              {renderFormattedText(data.overview)}
            </p>
          </div>

          {/* TL;DR Summary Block (Restructured) */}
          <div className="rounded-[2rem] border border-white/5 bg-zinc-950/80 p-6 md:p-8 mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
            <h2 className="text-lg font-heading font-black text-white tracking-[-0.035em] mb-3 flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              The verdict
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 mt-4">
              <div>
                <p className="text-sm leading-relaxed text-zinc-200">
                  {renderFormattedText(data.whyAlternative)}
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/5 bg-white/[0.01] p-5 flex flex-col justify-center">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Architectural Verdict</p>
                <p className="text-xs text-zinc-200 leading-relaxed">
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
              <h2 className="text-3xl font-heading font-black text-white tracking-tight">
                Cost & Operation Calculator
              </h2>
              <p className="text-sm text-zinc-200 mt-2">
                Evaluate direct cost savings when migrating away from legacy tools to AIFLOXIUM’s engineered pipelines.
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
              <h2 className="text-3xl font-heading font-black text-white tracking-tight">
                Feature Comparison Matrix
              </h2>
              <p className="text-sm text-zinc-200 mt-2">
                A point-by-point breakdown of architectural capabilities and limits.
              </p>
            </div>

            <div className="overflow-x-auto rounded-[2rem] border border-white/5">
              <table className="w-full text-left border-collapse bg-zinc-950">
                <thead>
                  <tr className="border-b border-white/5 bg-zinc-950/60">
                    <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-white w-[25%]">Feature / Metric</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary w-[35%]">AIFLOXIUM {data.ourName}</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 w-[30%]">{data.competitorName}</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-white text-center w-[10%]">Winner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {data.features.map((feature, i) => (
                    <tr key={i} className="hover:bg-white/[0.01] transition-colors">
                      <td className="p-6 font-bold text-sm text-white">
                        {feature.name}
                        <span className="block mt-1.5 text-xs text-zinc-200 font-normal">
                          {feature.details}
                        </span>
                      </td>
                      <td className="p-6 text-sm text-zinc-300 leading-relaxed font-medium bg-primary/[0.01]">
                        {feature.ourValue}
                      </td>
                      <td className="p-6 text-sm text-zinc-200 leading-relaxed">
                        {feature.competitorValue}
                      </td>
                      <td className="p-6 text-center">
                        {feature.winner === 'us' && (
                          <span className="inline-flex h-7 px-3 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-wider">
                            AIFLOXIUM
                          </span>
                        )}
                        {feature.winner === 'them' && (
                          <span className="inline-flex h-7 px-3 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 text-[10px] font-black uppercase tracking-wider">
                            {data.competitorName}
                          </span>
                        )}
                        {feature.winner === 'tie' && (
                          <span className="inline-flex h-7 px-3 items-center justify-center rounded-full bg-white/5 text-white/50 text-[10px] font-black uppercase tracking-wider">
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

          {/* Deep Dive Paragraph Comparisons */}
          <section className="mb-20">
            <div className="mb-10">
              <h2 className="text-3xl font-heading font-black text-white tracking-tight">
                Deep-Dive Capability Comparison
              </h2>
              <p className="text-sm text-zinc-200 mt-2">
                A closer look at how operational architecture differs in production.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.deepComparison.map((section, idx) => {
                const Icon = iconMap[section.icon] || Zap;
                return (
                   <div key={idx} className="rounded-[2rem] border border-white/5 bg-zinc-950/80 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-heading font-black text-white">
                          {section.title}
                        </h3>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">
                            AIFLOXIUM Setup
                          </p>
                          <p className="text-sm leading-relaxed text-zinc-200">
                            {renderFormattedText(section.ourText)}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.2em] mb-2">
                            Standard {data.competitorName} Setup
                          </p>
                          <p className="text-sm leading-relaxed text-zinc-200">
                            {renderFormattedText(section.competitorText)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5">
                      <div className="text-xs italic text-zinc-200">
                        <strong className="text-white not-italic uppercase tracking-wider text-[10px] block mb-1">{"Architect's Summary"}</strong>
                        {section.summary}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Who is Best For section */}
          <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Best for AIFLOXIUM */}
            <div className="p-6 md:p-8 rounded-[2rem] border border-primary/20 bg-primary/[0.02]">
              <h3 className="text-xl font-heading font-black text-white flex items-center gap-3">
                <Check className="h-6 w-6 text-primary shrink-0" />
                Who Should Choose AIFLOXIUM
              </h3>
              <p className="text-xs text-zinc-300 mt-2 mb-6">
                Our custom-engineered infrastructure is ideal if you fit the following profiles:
              </p>
              <ul className="space-y-4">
                {data.whoIsBestFor.us.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm leading-relaxed text-zinc-300">
                    <span className="h-5 w-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Best for Competitor */}
            <div className="p-6 md:p-8 rounded-[2rem] border border-white/5 bg-zinc-950/20">
              <h3 className="text-xl font-heading font-black text-zinc-300 flex items-center gap-3">
                <X className="h-6 w-6 text-zinc-600 shrink-0" />
                Who is Better Off with {data.competitorName}
              </h3>
              <p className="text-xs text-zinc-300 mt-2 mb-6">
                The off-the-shelf competitor is a reasonable path under these scenarios:
              </p>
              <ul className="space-y-4">
                {data.whoIsBestFor.competitor.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm leading-relaxed text-zinc-200">
                    <span className="h-5 w-5 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 shrink-0 mt-0.5">
                      <X className="h-3 w-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Actionable CTA Section */}
          <section className="mb-20 rounded-[2.5rem] border border-primary/20 bg-gradient-to-br from-purple-950/20 via-zinc-950 to-black p-8 md:p-12 text-center relative overflow-hidden">
            {/* Radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[80px] pointer-events-none -z-10" />

            <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.25em] mb-6 inline-block">
              Free Process Audit
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white mb-6 font-black leading-tight">
              Stop Paying the Scaling Tax.<br className="hidden sm:inline" /> Deploy Engineered Workflows.
            </h2>
            <p className="text-sm sm:text-base text-zinc-200 max-w-2xl mx-auto leading-relaxed mb-10">
              Skip brittle templates, unpredictable operations counts, and high-maintenance cloud configurations. Let's design a custom self-hosted environment that scales autonomously.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white hover:bg-primary/95 transition-all shadow-[0_10px_30px_rgba(255,107,0,0.2)]"
              >
                Book Discovery Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={serviceMapping[slug]?.href || '/services'}
                className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-all"
              >
                {serviceMapping[slug]?.label || 'Explore Services'}
              </Link>
            </div>
          </section>

          {/* FAQ Accordion Section */}
          <section className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-black text-white tracking-tight flex items-center justify-center gap-3">
                <HelpCircle className="h-7 w-7 text-primary" />
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-zinc-200 mt-2">
                Common questions about architectural migrations, hosting setups, and support.
              </p>
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-white/5 bg-zinc-950">
                  <h3 className="text-base font-bold text-white mb-2 flex gap-3 items-start">
                    <span className="h-6 w-6 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs shrink-0 mt-0.5">Q</span>
                    <span>{faq.question}</span>
                  </h3>
                  <div className="pl-9 text-sm leading-relaxed text-zinc-200">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
