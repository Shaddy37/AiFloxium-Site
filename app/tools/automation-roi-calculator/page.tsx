import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Clock3, Coins, Gauge, ListChecks } from 'lucide-react';

import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/sections/Footer';
import AutomationRoiCalculator from '@/components/tools/AutomationRoiCalculator';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';
import { CALENDLY_URL } from '@/lib/site';

export const metadata: Metadata = buildPageMetadata({
  title: 'AI Automation ROI Calculator | AIFLOXIUM',
  description:
    'Calculate how much repetitive work, payroll drag, and workflow leakage your team can recover with AI automation.',
  path: '/tools/automation-roi-calculator',
  keywords: [
    'automation roi calculator',
    'workflow automation calculator',
    'process automation savings calculator',
    'ai automation cost savings',
    'automation opportunity score'
  ]
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'AI Automation ROI Calculator', path: '/tools/automation-roi-calculator' }
]);

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AI Automation ROI Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  description:
    'A free calculator that estimates time savings, payroll savings, annual upside, payback window, and automation opportunity score for startup and SMB operations teams.',
    url: 'https://www.aifloxium.online/tools/automation-roi-calculator'
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does this automation ROI calculator estimate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It estimates recoverable hours, monthly payroll savings, annual upside, payback window, and the highest-priority workflow automations based on your current operating model.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is the result gated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The summary is visible without submitting a form. Email is only used to unlock the fuller roadmap, implementation context, and the top workflows to automate first.'
      }
    },
    {
      '@type': 'Question',
      name: 'Who is this tool for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is designed for startup and SMB operators, founders, and teams dealing with repetitive manual work, reporting drag, broken handoffs, or costly workflow delays.'
      }
    }
  ]
};

const valuePoints = [
  {
    label: 'Hours recovered',
    copy: 'See how much operator capacity your team can get back each month.',
    icon: Clock3
  },
  {
    label: 'Cost visibility',
    copy: 'Translate repetitive work into payroll drag and rough payback timing.',
    icon: Coins
  },
  {
    label: 'Priority roadmap',
    copy: 'Get the most likely workflows to automate first instead of guessing.',
    icon: ListChecks
  },
  {
    label: 'Opportunity score',
    copy: 'Quickly assess whether this is a minor cleanup or a high-leverage systems problem.',
    icon: Gauge
  }
];

const faqItems = [
  {
    question: 'How accurate is the estimate?',
    answer:
      'It is directional, not contractual. The calculator is intentionally conservative and meant to frame the size of the opportunity before a workflow audit.'
  },
  {
    question: 'What should I use for operational volume?',
    answer:
      'Use the number that best represents how often the workflow happens: leads, orders, support tickets, client onboardings, approvals, or tasks per month.'
  },
  {
    question: 'What if I do not know the average value?',
    answer:
      'Leave it at zero or use a rough average. The calculator will still estimate labor recovery even without revenue-leakage inputs.'
  },
  {
    question: 'What happens after I unlock the full report?',
    answer:
      'You will see the fuller roadmap inline on the page and can book a discovery call if you want the recommendation pressure-tested against your real process.'
  }
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

      <section className="relative overflow-hidden rounded-b-[3rem] bg-hero-gradient px-6 pb-24 pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-plum-glow opacity-60 blur-[110px]" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
              backgroundSize: '48px 48px'
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <nav className="mb-10 flex items-center gap-2 text-sm font-medium text-white/55">
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

          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.32em] text-brand-orange">
                <span className="h-px w-10 bg-brand-orange/45" />
                Flagship free tool
              </p>
              <h1 className="text-[3.2rem] font-heading font-black leading-[0.88] tracking-tighter text-white md:text-[6rem]">
                AI AUTOMATION
                <br />
                <span className="text-brand-orange">ROI CALCULATOR.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/76 md:text-xl">
                See how much time, payroll, and revenue leakage your workflows are costing you,
                then identify the highest-leverage automations to ship first.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#calculator"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-white hover:bg-brand-orange/90"
                >
                  Run the calculator
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-white hover:border-brand-orange hover:text-brand-orange"
                >
                  Book discovery call
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {valuePoints.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl"
                >
                  <item.icon className="h-5 w-5 text-brand-orange" />
                  <p className="mt-4 text-lg font-heading font-black tracking-tight text-white">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <AutomationRoiCalculator />
        </div>
      </section>

      <section className="border-y border-brand-plum/20 bg-brand-plum/6 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
              What to do with the result
            </p>
            <h2 className="text-4xl font-heading font-black tracking-tight text-white md:text-5xl">
              Use the score to prioritize action, not to admire the number.
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              'If the summary already shows meaningful monthly drag, the problem is operationally expensive enough to scope immediately.',
              'If the top recommendation points to n8n workflow automation, start with routing, syncs, reporting, or repetitive back-office flows.',
              'If the pattern looks more like spreadsheet sprawl or brittle handoffs, the better answer may be a focused internal tool build.',
              'If requests, tasks, or conversations need reasoning before action, agent-based triage usually becomes the higher-leverage path.'
            ].map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm leading-relaxed text-white/78">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
              FAQ
            </p>
            <h2 className="text-4xl font-heading font-black tracking-tight text-white md:text-5xl">
              Questions operators usually ask before acting.
            </h2>
          </div>
          <div className="grid gap-4">
            {faqItems.map((item, index) => (
              <article
                key={item.question}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                <div className="flex gap-4">
                  <span className="mt-1 text-[11px] font-black uppercase tracking-[0.2em] text-brand-orange">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl font-heading font-black tracking-tight text-white">
                      {item.question}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/68 md:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
