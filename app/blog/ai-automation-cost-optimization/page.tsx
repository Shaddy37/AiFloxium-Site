import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import { getPostBySlug } from '@/lib/mdx';

const SLUG = 'ai-automation-cost-optimization';
const TITLE = 'AI Automation Cost Optimization: Cut Your n8n Bill 2026';
const DESCRIPTION =
  'Learn how to cut AI automation costs in 2026: smart model routing, token batching, caching, free-tier fallbacks, and self-hosted n8n + OpenRouter tactics.';
const CANONICAL = 'https://aifloxium.online/blog/ai-automation-cost-optimization';
const IMAGE = 'https://aifloxium.online/blog/covers/ai-automation-cost-optimization.svg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://aifloxium.online'),
  keywords: [
    'AI automation cost optimization',
    'reduce AI agent costs',
    'LLM cost optimization',
    'n8n token usage',
    'OpenRouter cost optimization',
    'model fallback chains',
    'token batching',
    'prompt caching',
    'cost per workflow',
    'self-hosted n8n savings',
  ],
  alternates: {
    canonical: CANONICAL,
  },
  authors: [
    {
      name: 'Muhammad Shadab Shams',
      url: 'https://www.linkedin.com/in/muhammad-shadab-shams-8b07132b6/',
    },
  ],
  creator: 'Muhammad Shadab Shams',
  publisher: 'AIFLOXIUM',
  category: 'AI Automation',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    url: CANONICAL,
    siteName: 'AIFLOXIUM',
    images: [
      {
        url: IMAGE,
        alt: 'AI Automation Cost Optimization — routing expensive token streams into efficient ones',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
  other: {
    'focus-keyword': 'AI automation cost optimization',
    'secondary-keywords':
      'reduce AI agent costs, LLM cost optimization, n8n token usage, OpenRouter cost optimization, model fallback chains, token batching, prompt caching, cost per workflow, self-hosted n8n savings',
    'schema-type': 'Article + FAQPage + BreadcrumbList',
  },
};

export default async function CostOptimizationPage() {
  const post = await getPostBySlug(SLUG);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'AI Automation Cost Optimization: Cut Your n8n + LLM Bill by 80% in 2026',
        description: DESCRIPTION,
        image: IMAGE,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': CANONICAL,
        },
        author: {
          '@type': 'Person',
          name: 'Muhammad Shadab Shams',
          url: 'https://aifloxium.online',
          sameAs: [
            'https://www.linkedin.com/in/muhammad-shadab-shams-8b07132b6/',
            'https://x.com/ShadabLoveAi',
            'https://github.com/shamsdev',
          ],
        },
        publisher: {
          '@type': 'Organization',
          name: 'AIFLOXIUM',
          url: 'https://aifloxium.online',
        },
        url: CANONICAL,
        datePublished: '2026-06-07',
        dateModified: '2026-06-07',
        articleSection: 'AI Automation',
        keywords: metadata.keywords,
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much can I save on AI automation costs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most teams cut 50-80% by combining model right-sizing, batching, caching, and self-hosting.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the biggest AI automation cost lever?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sending the model less work via batching and prompt trimming, then right-sizing the model to each task.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Blog',
            item: 'https://aifloxium.online/blog',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: TITLE,
            item: CANONICAL,
          },
        ],
      },
    ],
  };

  return <BlogPostLayout code={post.code} frontmatter={post.frontmatter} jsonLd={jsonLd} slug={SLUG} />;
}
