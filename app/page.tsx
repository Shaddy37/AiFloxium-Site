import type { Metadata } from 'next';

import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/sections/Footer';

import { PrismaHero } from '@/components/ui/prisma-hero';
import PrismaAbout from '@/components/sections/PrismaAbout';
import PrismaFeatures from '@/components/sections/PrismaFeatures';
import StoryNarrative from '@/components/sections/StoryNarrative';
import ProductionEvolved from '@/components/sections/ProductionEvolved';
import { LazySections } from '@/components/sections/LazySections';
import { absoluteUrl, buildPageMetadata } from '@/lib/seo';

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

const homeGraphJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
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
    },
    {
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
          url: absoluteUrl('/services/autonomous-voice-agents'),
          name: 'Autonomous Voice Agents'
        },
        {
          '@type': 'ListItem',
          position: 3,
          url: absoluteUrl('/services/vibe-coding'),
          name: 'Vibe Coding (Claude)'
        },
        {
          '@type': 'ListItem',
          position: 4,
          url: absoluteUrl('/services/seo-optimization'),
          name: 'AI-Powered SEO'
        },
        {
          '@type': 'ListItem',
          position: 5,
          url: absoluteUrl('/services/autonomous-agents'),
          name: 'Autonomous Agents'
        },
        {
          '@type': 'ListItem',
          position: 6,
          url: absoluteUrl('/services/agency-scaling-partner'),
          name: 'Agency Scaling Partner'
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <main id="main-content" className="relative bg-brand-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeGraphJsonLd) }}
      />
      <Navbar />
      <PrismaHero />
      <PrismaAbout />
      <PrismaFeatures />

      <StoryNarrative />
      <ProductionEvolved />
      <LazySections />
      <Footer />
    </main>
  );
}
