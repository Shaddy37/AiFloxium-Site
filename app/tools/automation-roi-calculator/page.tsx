import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  Clock3,
  Coins,
  FileDown,
  ListChecks,
  Sparkles
} from 'lucide-react';

import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/sections/Footer';
import AutomationRoiCalculator from '@/components/tools/AutomationRoiCalculator';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';
import { CALENDLY_URL } from '@/lib/site';
import { calculatorUseCases } from '@/lib/tools-data';

export const metadata: Metadata = buildPageMetadata({
  title: 'Automation ROI Calculator for Small Business Teams | AIFLOXIUM',
  description:
    'Use this free automation ROI calculator to estimate time saved, payroll saved, and the cost of manual work slowing down your business.',
  path: '/tools/automation-roi-calculator',
  keywords: [
    'automation roi calculator',
    'workflow automation calculator',
    'manual process cost calculator',
    'small business automation calculator',
    'how to calculate automation roi',
    'business automation cost savings'
  ],
  eyebrow: 'Free automation ROI calculator'
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Automation ROI Calculator', path: '/tools/automation-roi-calculator' }
]);

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Automation ROI Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  description:
    'A free web calculator for startup and small business teams that estimates time saved, payroll savings, annual upside, payback timing, and the first workflows worth automating.',
  url: 'https://www.aifloxium.online/tools/automation-roi-calculator'
};

const faqItems = [
  {
    question: 'What does this automation ROI calculator actually tell me?',
    answer:
      'It gives a directional estimate of how much time your team could recover, how much manual work may be costing you each month, and which workflows are likely worth automating first.'
  },
  {
    question: 'Is automation worth it for a small business?',
    answer:
      'It usually becomes worth it when repetitive work, slow handoffs, and reporting overhead are happening every week across multiple people. This calculator is designed to help estimate that threshold.'
  },
  {
    question: 'Do I need exact numbers to use this tool?',
    answer:
      'No. Rough but honest estimates are enough to get a useful first-pass result. You can leave the average value at zero if you only want to estimate labor savings.'
  },
  {
    question: 'Why is email required for the report download?',
    answer:
      'The on-page summary stays visible for everyone. Email is only required if you want the report-style output and follow-up recommendations delivered as a downloadable asset.'
  }
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
};

const valuePoints = [
  {
    label: 'Time Saved',
    copy: 'Estimate how many hours your team could get back each month.',
    icon: Clock3
  },
  {
    label: 'Money Recovered',
    copy: 'Translate repetitive work into payroll drag and potential savings.',
    icon: Coins
  },
  {
    label: 'High-Leverage Focus',
    copy: 'See the workflows most likely to pay back before you build.',
    icon: ListChecks
  },
  {
    label: 'Markdown Report',
    copy: 'Capture the result in a shareable report after email submission.',
    icon: FileDown
  }
];

const interpretationPoints = [
  {
    title: 'Audit operational bottlenecks',
    text: 'If the calculator shows meaningful monthly time loss, you have a systemic operational drag rather than a simple optimization task.'
  },
  {
    title: 'Review the payback window',
    text: 'If the payback timeline is under 3 months, the business case for custom-engineered workflows is extremely strong.'
  },
  {
    title: 'Start with simple routing & handoffs',
    text: 'Before chasing complex AI model setups, automate simple manual routing, reporting syncs, and client onboarding handoffs.'
  },
  {
    title: 'Use as a framework, not a contract',
    text: 'Treat these numbers as a directional framework to prioritize operational development, not as a guaranteed financial projection.'
  }
];

export default function AutomationRoiCalculatorPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        suppressHydrationWarning
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/8 bg-[radial-gradient(circle_at_top,_rgba(255,107,0,0.12),_transparent_28%),radial-gradient(circle_at_75%_15%,_rgba(88,28,135,0.24),_transparent_32%),linear-gradient(180deg,#180a1f_0%,#120716_52%,#0c040f_100%)] px-6 pb-20 pt-36 md:pb-24 md:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
              backgroundSize: '42px 42px'
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs font-bold text-white/55 uppercase tracking-widest">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-600" />
            <Link href="/tools" className="transition-colors hover:text-white">
              Tools
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-600" />
            <span className="text-white font-black">Automation ROI Calculator</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.32em] text-brand-orange">
                <span className="h-px w-10 bg-brand-orange/45" />
                Interactive Operations Tool
              </p>
              <h1 className="max-w-4xl text-[3rem] font-heading font-black leading-[0.9] tracking-[-0.04em] text-white md:text-[5.8rem]">
                Quantify your team{"'"}s
                <span className="block text-brand-orange">manual workload drag.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 md:text-xl">
                Translate repetitive spreadsheet tasks, slow handoffs, and manual entries into clear time, payroll, and payback metrics.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#calculator"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-orange/90 shadow-[0_10px_30px_rgba(255,107,0,0.2)]"
                >
                  Configure Calculator
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:border-white/25 hover:bg-white/[0.08]"
                >
                  Book 1-on-1 Audit
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {valuePoints.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl"
                >
                  <div className="h-9 w-9 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <p className="mt-4 text-lg font-heading font-black tracking-tight text-white">
                    {item.label}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What It Measures Section */}
      <section className="bg-[#100612] px-6 py-16 md:py-20 border-b border-white/5">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
              Calculation Logic
            </p>
            <h2 className="text-4xl font-heading font-black tracking-tight text-white md:text-5xl leading-tight">
              An objective baseline to evaluate process changes.
            </h2>
          </div>
          <div className="rounded-[2rem] border border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] p-6 md:p-8">
            <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
              The calculator factors in team participation, hourly labor rates, weekly friction hours, and monthly volume to estimate:
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                Monthly hours lost and payroll drag.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                Downstream value leaks in high-frequency queues.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                Estimated project development cost range.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                Investment payback timeline in months.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Calculator Component */}
      <section id="calculator" className="bg-[#f6efe8] px-6 py-20 text-black md:py-24">
        <div className="mx-auto max-w-6xl">
          <AutomationRoiCalculator />
        </div>
      </section>

      {/* Interpretation Section */}
      <section className="bg-[#0e0611] px-6 py-20 md:py-24 border-t border-white/5">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
              How to Read Output
            </p>
            <h2 className="text-4xl font-heading font-black tracking-tight text-white md:text-5xl leading-tight">
              Prioritize workflows that show rapid payback.
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-zinc-400">
              Use these directional projections to spot the most expensive bottlenecks in your company, and address high-leverage steps first.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {interpretationPoints.map((item, idx) => (
              <article
                key={idx}
                className="rounded-[1.6rem] border border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-zinc-400">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Best Fit Workflows Section */}
      <section className="border-y border-black/10 bg-[#f3ece4] px-6 py-20 text-black md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-plum">
              Best-Fit Use Cases
            </p>
            <h2 className="text-4xl font-heading font-black tracking-tight text-brand-plum md:text-5xl leading-tight">
              Focus on highly repeatable workflows.
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-zinc-700">
              Automation yields the highest ROI in pipelines where data is repeatedly transcribed, checked, or routed across systems.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {calculatorUseCases.map((useCase) => (
              <div
                key={useCase}
                className="rounded-[1.4rem] border border-black/8 bg-white px-5 py-4 text-sm font-semibold text-zinc-800 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex items-center gap-3"
              >
                <span className="h-2 w-2 rounded-full bg-brand-plum shrink-0" />
                <span>{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-[#0e0611] px-6 py-20 md:py-24 border-t border-white/5">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
              Common Questions
            </p>
            <h2 className="text-4xl font-heading font-black tracking-tight text-white md:text-5xl leading-tight">
              Understanding ROI Estimates
            </h2>
          </div>

          <div className="grid gap-4">
            {faqItems.map((item, index) => (
              <article
                key={item.question}
                className="rounded-[1.7rem] border border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] p-6"
              >
                <div className="flex gap-4">
                  <span className="mt-1 text-[11px] font-black uppercase tracking-[0.2em] text-brand-orange shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-white">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#09040b] px-6 py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] p-8 shadow-[0_32px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl md:p-10">
          <p className="mb-3 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
            <Sparkles className="h-4 w-4" />
            Next Step
          </p>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-white leading-tight">
                Pressure-test your calculations with a real workflow audit.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                A calculator yields a directional estimate. In our free 30-minute scoping call, we review your current tools, mapping errors, and operational dependencies to design a precise, fixed-bid implementation plan.
              </p>
            </div>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-brand-orange/90 shadow-[0_10px_30px_rgba(255,107,0,0.2)] shrink-0"
            >
              Book Discovery Call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
