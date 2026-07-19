import type { Metadata } from 'next';
import SereneLandingClient from '@/components/sections/SereneLandingClient';
import { absoluteUrl, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Muhammad Shadab Shams | Agentic Systems Developer | AIFLOXIUM',
  description:
    'Custom AI automation systems, SaaS builds, mini-SaaS products, and enterprise n8n workflows designed by Muhammad Shadab Shams.',
  path: '/',
  keywords: [
    'Muhammad Shadab Shams',
    'AI automation engineer',
    'AI automation agency',
    'SaaS development',
    'mini SaaS',
    'n8n workflow automation',
    'agentic systems developer'
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
          name: 'What does Muhammad Shadab Shams build?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Muhammad Shadab Shams builds custom SaaS systems, mini-SaaS products, agentic AI systems, and automated workflows using enterprise tools and frameworks.'
          }
        },
        {
          '@type': 'Question',
          name: 'Who is Muhammad Shadab Shams?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Muhammad Shadab Shams is the Agentic Systems Developer and founder behind AIFLOXIUM, designing advanced automation pipelines for growing businesses.'
          }
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeGraphJsonLd) }}
      />
      <SereneLandingClient />
    </main>
  );
}
