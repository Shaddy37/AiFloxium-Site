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

const calculatorGraphJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [breadcrumbJsonLd, softwareJsonLd, faqJsonLd]
};

export default function AutomationRoiCalculatorPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#0a0608] text-white selection:bg-[#7B2CBF] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorGraphJsonLd) }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#0a0608] px-6 pb-20 pt-36 md:pb-24 md:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.01]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
              backgroundSize: '42px 42px'
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-white/50 uppercase tracking-widest font-inter">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-white/30" />
            <Link href="/tools" className="transition-colors hover:text-white">
              Tools
            </Link>
            <ChevronRight className="h-3 w-3 text-white/30" />
            <span className="text-white font-bold font-inter">Automation ROI Calculator</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
            <div>
              <span className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#E0AAFF] font-inter">
                <span className="h-px w-10 bg-[#7B2CBF]/45" />
                Interactive Operations Tool
              </span>
              <h1 className="max-w-4xl text-[3rem] font-instrument leading-[1.05] tracking-tight text-white md:text-[5.8rem]">
                Quantify your team{"'"}s <br />
                <span className="font-instrument text-[#E0AAFF] italic">manual workload drag.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/70 font-inter font-light">
                Translate repetitive spreadsheet tasks, slow handoffs, and manual entries into clear time, payroll, and payback metrics.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row font-inter">
                <a
                  href="#calculator"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-4 text-xs font-semibold uppercase tracking-wider hover:bg-[#E0AAFF] transition-all duration-300 button-glow"
                >
                  Configure Calculator
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/5"
                >
                  Book 1-on-1 Audit
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {valuePoints.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.7rem] border border-white/5 bg-white/[0.01] p-5 liquid-glass"
                >
                  <div className="h-9 w-9 rounded-xl bg-[#7B2CBF]/5 border border-[#7B2CBF]/20 flex items-center justify-center text-[#E0AAFF]">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-lg font-semibold tracking-wide text-white font-inter">
                    {item.label}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-white/60 font-inter font-light">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What It Measures Section */}
      <section className="bg-[#0a0608] px-6 py-16 md:py-20 border-b border-white/5">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div>
            <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E0AAFF] block font-inter">
              Calculation Logic
            </span>
            <h2 className="text-4xl font-instrument text-white tracking-tight leading-[1.05]">
              An objective baseline to evaluate process changes.
            </h2>
          </div>
          <div className="rounded-[2rem] border border-white/5 bg-white/[0.01] p-6 md:p-8 liquid-glass">
            <p className="text-sm sm:text-base leading-relaxed text-white/70 font-inter font-light">
              The calculator factors in team participation, hourly labor rates, weekly friction hours, and monthly volume to estimate:
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/60 font-inter font-light">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E0AAFF]" />
                Monthly hours lost and payroll drag.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E0AAFF]" />
                Downstream value leaks in high-frequency queues.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E0AAFF]" />
                Estimated project development cost range.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E0AAFF]" />
                Investment payback timeline in months.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Calculator Component */}
      <section id="calculator" className="bg-[#0a0608] px-6 py-20 text-white md:py-24 border-b border-white/5">
        <div className="mx-auto max-w-6xl">
          <AutomationRoiCalculator />
        </div>
      </section>

      {/* Interpretation Section */}
      <section className="bg-[#0a0608] px-6 py-20 md:py-24 border-b border-white/5">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
          <div>
            <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E0AAFF] block font-inter">
              How to Read Output
            </span>
            <h2 className="text-4xl font-instrument text-white tracking-tight leading-[1.05]">
              Prioritize workflows that show rapid payback.
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/60 font-inter font-light">
              Use these directional projections to spot the most expensive bottlenecks in your company, and address high-leverage steps first.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {interpretationPoints.map((item, idx) => (
              <article
                key={idx}
                className="rounded-[1.6rem] border border-white/5 bg-white/[0.01] p-5 flex flex-col justify-between liquid-glass"
              >
                <div>
                  <h3 className="text-base font-semibold text-white mb-2 font-inter tracking-wide">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-white/60 font-inter font-light">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Best Fit Workflows Section */}
      <section className="bg-[#0a0608] px-6 py-20 text-white md:py-24 border-b border-white/5">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
          <div>
            <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E0AAFF] block font-inter">
              Best-Fit Use Cases
            </span>
            <h2 className="text-4xl font-instrument text-white tracking-tight leading-[1.05]">
              Focus on highly repeatable workflows.
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/60 font-inter font-light">
              Automation yields the highest ROI in pipelines where data is repeatedly transcribed, checked, or routed across systems.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {calculatorUseCases.map((useCase) => (
              <div
                key={useCase}
                className="rounded-[1.4rem] border border-white/5 bg-white/[0.01] px-5 py-4 text-sm font-semibold text-white/80 shadow-sm flex items-center gap-3 liquid-glass font-inter"
              >
                <span className="h-2 w-2 rounded-full bg-[#E0AAFF] shrink-0" />
                <span>{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-[#0a0608] px-6 py-20 md:py-24 border-b border-white/5">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E0AAFF] block font-inter">
              Common Questions
            </span>
            <h2 className="text-4xl font-instrument text-white tracking-tight leading-[1.05]">
              Understanding ROI Estimates
            </h2>
          </div>

          <div className="grid gap-4">
            {faqItems.map((item, index) => (
              <article
                key={item.question}
                className="rounded-[1.7rem] border border-white/5 bg-white/[0.01] p-6 liquid-glass"
              >
                <div className="flex gap-4">
                  <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E0AAFF] shrink-0 font-inter">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-wide text-white font-inter">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60 font-inter font-light">
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
      <section className="bg-[#0a0608] px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-[2.4rem] border border-white/5 bg-white/[0.01] p-8 md:p-10 liquid-glass">
          <span className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E0AAFF] font-inter">
            <Sparkles className="h-4 w-4" />
            Next Step
          </span>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-instrument text-white tracking-tight leading-[1.05]">
                Pressure-test your calculations <br />{' '}
                <span className="font-instrument text-[#E0AAFF] italic">with a real workflow audit.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/60 font-inter font-light">
                A calculator yields a directional estimate. In my free 30-minute scoping call, I review your current tools, mapping errors, and operational dependencies to design a precise, fixed-bid implementation plan.
              </p>
            </div>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-4 text-xs font-semibold uppercase tracking-wider hover:bg-[#E0AAFF] transition-all duration-300 button-glow shrink-0 font-inter"
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
