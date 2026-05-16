import type { Metadata } from 'next';

import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/sections/Footer';
import CapabilitiesEngineered from '@/components/sections/CapabilitiesEngineered';
import Hero3D from '@/components/sections/Hero3D';
import HiddenCostSection from '@/components/sections/HiddenCostSection';
import { LazySections } from '@/components/sections/LazySections';
import { absoluteUrl, buildPageMetadata } from '@/lib/seo';
import { PERSON_NAME } from '@/lib/site';

export const metadata: Metadata = buildPageMetadata({
  title: 'AI Automation Engineer for Startups and SMBs | AIFLOXIUM',
  description:
    'AI automation systems, internal tools, SEO workflows, and product-grade builds for startups and SMBs that need practical execution.',
  path: '/',
  keywords: [
    'AI automation engineer',
    'AI automation agency',
    'n8n workflow automation',
    'internal tools development',
    'voice AI systems',
    'technical SEO automation'
  ]
});

const homeFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does AIFLOXIUM build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AIFLOXIUM builds AI automation systems, internal tools, voice workflows, technical SEO systems, and product-grade software for startups, agencies, and SMBs.'
      }
    },
    {
      '@type': 'Question',
      name: 'Who is Muhammad Shadab Shams?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Muhammad Shadab Shams is the automation engineer behind AIFLOXIUM. He designs and ships workflow automation, AI agents, and implementation systems for growing businesses.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the best fit for AIFLOXIUM services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best fit is a business with repetitive manual work, disconnected tools, slow lead handling, reporting bottlenecks, or a need for faster execution without adding headcount.'
      }
    }
  ]
};

const homeItemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      url: absoluteUrl('/services/n8n-workflow-automation'),
      name: 'n8n Workflow Automation'
    },
    {
      '@type': 'ListItem',
      position: 2,
      url: absoluteUrl('/services/autonomous-agents'),
      name: 'Autonomous Agents'
    },
    {
      '@type': 'ListItem',
      position: 3,
      url: absoluteUrl('/services/vibe-coding'),
      name: 'Vibe Coding (Claude)'
    }
  ]
};

export default function Home() {
  return (
    <main className="relative bg-brand-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeItemListJsonLd) }}
      />
      <Navbar />
      <Hero3D />
      <HiddenCostSection />
      <CapabilitiesEngineered />
      <LazySections />

      <section className="bg-white border-t border-zinc-100 px-6 py-24" data-theme="light">
        <div className="container mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-brand-plum">
              Why Teams Hire {PERSON_NAME.split(' ')[0]}
            </p>
            <h2 className="mb-6 text-4xl font-heading font-black tracking-tight text-black md:text-5xl">
              AI systems that reduce manual work and ship without agency bloat.
            </h2>
            <p className="mb-6 text-lg font-medium leading-relaxed text-zinc-700">
              AIFLOXIUM is built for founders and operators who need execution, not
              generic strategy. The work typically falls into four buckets: workflow
              automation, internal tools, autonomous agents, and SEO systems that turn
              technical fixes into qualified traffic.
            </p>
            <p className="text-lg font-medium leading-relaxed text-zinc-700">
              Most projects start with one bottleneck: slow lead follow-up, reporting
              chaos, support overload, content operations, or disconnected software.
              The goal is to replace fragile manual handoffs with a system that is
              easier to run, easier to measure, and easier to scale.
            </p>
          </div>
          <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8">
            <h3 className="mb-6 text-2xl font-heading font-black tracking-tight text-black">
              Common outcomes
            </h3>
            <ul className="space-y-4 text-base font-medium leading-relaxed text-zinc-700">
              <li>Faster lead response and cleaner CRM pipelines</li>
              <li>Less manual reporting across sales, finance, and operations</li>
              <li>Internal tools that replace spreadsheet-driven workflows</li>
              <li>AI-assisted SEO systems that support organic growth</li>
              <li>Agentic workflows with clear guardrails and human oversight</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
