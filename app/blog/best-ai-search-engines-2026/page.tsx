import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import { getPostBySlug } from '@/lib/mdx';

const SLUG = 'best-ai-search-engines-2026';
const TITLE = 'Best AI Search Engines 2026: Perplexity vs ChatGPT Search & 9 More Tested';
const DESCRIPTION =
  'The definitive ranking of the best AI search engines in 2026 — Perplexity vs Google AI Mode vs ChatGPT Search vs Phind. Real accuracy benchmarks, pricing breakdowns, community consensus, and which engine wins by use case.';
const CANONICAL = 'https://aifloxium.online/blog/best-ai-search-engines-2026';
const IMAGE = 'https://aifloxium.online/blog/best-ai-search-engines-2026/cover.svg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://aifloxium.online'),
  keywords: [
    'best ai search engines 2026',
    'ai search engine comparison',
    'perplexity vs chatgpt search',
    'google ai mode review',
    'best answer engine 2026',
    'ai powered search',
    'phind for developers',
    'duckduckgo ai search',
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
  category: 'AI Productivity',
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
        alt: 'Best AI Search Engines 2026 — Perplexity, Google AI Mode, ChatGPT Search, Phind and more tested and ranked',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

export default async function BestAISearchEngines2026Page() {
  const post = await getPostBySlug(SLUG);

  if (!post) {
    notFound();
  }

  const itemListJsonLd = {
    '@type': 'ItemList',
    name: 'Best AI Search Engines 2026',
    description: '9 AI search engines tested and ranked for research, development, and everyday use',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Perplexity' },
      { '@type': 'ListItem', position: 2, name: 'Google AI Mode' },
      { '@type': 'ListItem', position: 3, name: 'ChatGPT Search' },
      { '@type': 'ListItem', position: 4, name: 'Microsoft Copilot' },
      { '@type': 'ListItem', position: 5, name: 'Gemini' },
      { '@type': 'ListItem', position: 6, name: 'Phind' },
      { '@type': 'ListItem', position: 7, name: 'You.com / Brave Search' },
      { '@type': 'ListItem', position: 8, name: 'DuckDuckGo' },
      { '@type': 'ListItem', position: 9, name: 'Grok' },
    ],
  };

  const articleJsonLd = {
    '@type': 'Article',
    headline: TITLE,
    description: DESCRIPTION,
    image: IMAGE,
    datePublished: '2026-07-10',
    dateModified: '2026-07-10',
    author: {
      '@type': 'Person',
      name: 'Muhammad Shadab Shams',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AIFLOXIUM',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aifloxium.online/brand/aifloxium-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': CANONICAL,
    },
    url: CANONICAL,
  };

  const faqJsonLd = {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best AI search engine in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Perplexity is the best overall — it cites sources on every answer, updates in near real-time, and scored about 92% factual accuracy in independent tests. Google AI Mode is the best mainstream replacement.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Perplexity better than ChatGPT for research?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Perplexity provides inline citations, a real-time index, and higher factual accuracy, making it faster and safer for research. ChatGPT is better for original writing and coding.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which AI search engine is best for privacy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DuckDuckGo provides AI-assisted answers without collecting your search history and lets you opt out of AI features entirely.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can AI search engines replace Google?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For many queries yes — Perplexity and Google AI Mode already serve as everyday replacements. For high-stakes facts, verify against cited sources.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do AI search engines hallucinate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — even the best engines produce confident-sounding wrong answers. Always verify high-stakes claims against the cited sources. Perplexity inline citations make verification easier.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which AI search engine is best for developers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Phind focuses on developer knowledge sources — debugging, docs lookups, and technical comparisons with clean code blocks and context-aware follow-ups.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://aifloxium.online',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://aifloxium.online/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: TITLE,
        item: CANONICAL,
      },
    ],
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [itemListJsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd],
  };

  return <BlogPostLayout slug={SLUG} code={post.code} frontmatter={post.frontmatter} jsonLd={jsonLd} />;
}
