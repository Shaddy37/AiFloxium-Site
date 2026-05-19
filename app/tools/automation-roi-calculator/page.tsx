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
    label: 'Time saved',
    copy: 'Estimate how many hours your team could get back each month.',
    icon: Clock3
  },
  {
    label: 'Money saved',
    copy: 'Translate repetitive work into payroll drag and potential savings.',
    icon: Coins
  },
  {
    label: 'What to automate first',
    copy: 'See the workflows most likely to pay back before you overbuild.',
    icon: ListChecks
  },
  {
    label: 'Report download',
    copy: 'Capture the result in a shareable report after email submission.',
    icon: FileDown
  }
];

const interpretationPoints = [
  'If the calculator shows meaningful time loss every month, you likely have a real operations problem rather than a minor cleanup issue.',
  'If the payback window is short, the business case for workflow automation is usually already strong enough to scope.',
  'If the recommended workflows involve routing, reporting, or repetitive handoffs, start there before chasing more advanced AI use cases.',
  'If your result still feels uncertain, use the number as a conversation starter, not a final budget or guaranteed projection.'
];

export default function AutomationRoiCalculatorPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />

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
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm font-medium text-white/55">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/tools" className="transition-colors hover:text-white">
              Tools
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Automation ROI Calculator</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.32em] text-brand-orange">
                <span className="h-px w-10 bg-brand-orange/45" />
                Free automation calculator
              </p>
              <h1 className="max-w-4xl text-[3rem] font-heading font-black leading-[0.9] tracking-[-0.04em] text-white md:text-[5.8rem]">
                See how much
                <span className="block text-brand-orange">manual work is costing your team.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 md:text-xl">
                This free automation ROI calculator helps you estimate time saved, payroll saved,
                and which workflows are worth automating first, without forcing you to decode
                jargon before you start.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#calculator"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-orange/90"
                >
                  Run the calculator
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:border-white/25 hover:bg-white/[0.08]"
                >
                  Book discovery call
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {valuePoints.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl"
                >
                  <item.icon className="h-5 w-5 text-brand-orange" />
                  <p className="mt-4 text-xl font-heading font-black tracking-tight text-white">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/66">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#100612] px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
              What this tool measures
            </p>
            <h2 className="text-4xl font-heading font-black tracking-tight text-white md:text-5xl">
              It is a quick way to estimate whether automation is worth attention right now.
            </h2>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 md:p-8">
            <p className="text-base leading-8 text-white/72">
              The calculator combines team size, repetitive work, workflow count, and operating
              volume to estimate how many hours you may be losing, what that drag costs per month,
              and where automation is most likely to pay back first.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                'automation roi calculator',
                'manual process cost calculator',
                'small business automation calculator'
              ].map((term) => (
                <span
                  key={term}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs font-semibold text-white/76"
                >
                  {term}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="bg-[#f6efe8] px-6 py-20 text-black md:py-24">
        <div className="mx-auto max-w-6xl">
          <AutomationRoiCalculator />
        </div>
      </section>

      <section className="bg-[#0e0611] px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
              How to read the result
            </p>
            <h2 className="text-4xl font-heading font-black tracking-tight text-white md:text-5xl">
              Use the number to prioritize action, not to pretend a rough estimate is a contract.
            </h2>
          </div>

          <div className="grid gap-4">
            {interpretationPoints.map((item) => (
              <article
                key={item}
                className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5"
              >
                <p className="text-sm leading-7 text-white/74">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f3ece4] px-6 py-20 text-black md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-plum">
              Best fit workflows
            </p>
            <h2 className="text-4xl font-heading font-black tracking-tight text-brand-plum md:text-5xl">
              The biggest gains usually come from repeatable workflows, not one-off tasks.
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-700">
              If your process looks like one of these patterns, the calculator output tends to be
              especially useful.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {calculatorUseCases.map((useCase) => (
              <div
                key={useCase}
                className="rounded-[1.4rem] border border-black/8 bg-white px-5 py-4 text-sm font-semibold text-zinc-800 shadow-[0_14px_35px_rgba(0,0,0,0.05)]"
              >
                {useCase}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#130716_0%,#0d050f_100%)] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
              FAQ
            </p>
            <h2 className="text-4xl font-heading font-black tracking-tight text-white md:text-5xl">
              Questions people ask before they trust an automation ROI estimate.
            </h2>
          </div>

          <div className="grid gap-4">
            {faqItems.map((item, index) => (
              <article
                key={item.question}
                className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6"
              >
                <div className="flex gap-4">
                  <span className="mt-1 text-[11px] font-black uppercase tracking-[0.2em] text-brand-orange">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl font-heading font-black tracking-tight text-white">
                      {item.question}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-white/68 md:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#09040b] px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-8 shadow-[0_32px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl md:p-10">
          <p className="mb-3 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
            <Sparkles className="h-4 w-4" />
            Next step
          </p>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-heading font-black tracking-tight text-white md:text-5xl">
                If the result looks serious, scope the first workflow instead of debating the idea forever.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/68">
                The calculator gives a directional answer. The discovery call is where the rough
                estimate gets pressure-tested against your actual workflow, tools, and constraints.
              </p>
            </div>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-orange/90"
            >
              Book discovery call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
