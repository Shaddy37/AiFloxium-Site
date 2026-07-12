import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import { getPostBySlug } from '@/lib/mdx';

const SLUG = 'best-ai-note-taking-apps-2026';
const TITLE = 'Best AI Note-Taking Apps in 2026: Granola vs Otter & 8 More Tested & Ranked';
const DESCRIPTION =
  'I compared the best AI note-taking and meeting-notes apps of 2026—Granola, Fathom, Otter, Fireflies, Notion AI, and more—by accuracy, workflow, and price.';
const CANONICAL = 'https://aifloxium.online/blog/best-ai-note-taking-apps-2026';
const IMAGE = 'https://aifloxium.online/blog/best-ai-note-taking-apps-2026/cover.svg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://aifloxium.online'),
  keywords: [
    'best AI note-taking apps 2026',
    'AI meeting note takers',
    'Granola vs Otter',
    'Fathom AI review',
    'Fireflies.ai CRM integration',
    'Notion AI meeting notes',
    'bot-free AI note taker',
    'AI meeting assistants',
    'best transcription apps 2026',
    'meeting notes automation',
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
        alt: 'Best AI Note-Taking Apps in 2026 — tested and ranked',
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

export default async function BestAINoteTakingApps2026Page() {
  const post = await getPostBySlug(SLUG);

  if (!post) {
    notFound();
  }

  const itemListJsonLd = {
    '@type': 'ItemList',
    name: 'Best AI Note-Taking Apps in 2026',
    description: '8 AI note-taking and meeting tools compared and ranked',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Granola' },
      { '@type': 'ListItem', position: 2, name: 'Fathom' },
      { '@type': 'ListItem', position: 3, name: 'Otter' },
      { '@type': 'ListItem', position: 4, name: 'Fireflies' },
      { '@type': 'ListItem', position: 5, name: 'Notion AI' },
      { '@type': 'ListItem', position: 6, name: 'tl;dv & Avoma' },
      { '@type': 'ListItem', position: 7, name: 'Convo' },
      { '@type': 'ListItem', position: 8, name: 'Student-focused tools' },
    ],
  };

  const articleJsonLd = {
    '@type': 'Article',
    headline: TITLE,
    description: DESCRIPTION,
    image: IMAGE,
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    author: {
      '@type': 'Person',
      name: 'Muhammad Shadab Shams',
      url: 'https://aifloxium.online',
      jobTitle: 'AI Automation Consultant',
      sameAs: [
        'https://www.linkedin.com/in/muhammad-shadab-shams-8b07132b6/',
        'https://x.com/ShadabLoveAi',
        'https://github.com/shamsdev',
      ],
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
        name: 'What is the best AI note-taking app in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Granola is the best overall for its bot-free capture and "you write, AI expands" workflow. Fathom is the best free option, and Otter is best for transcription accuracy and search.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best free AI note-taking app?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fathom has the most generous free plan with reliable summaries. Otter, Fireflies, and Granola also offer limited free tiers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which AI note-taker doesn\'t put a bot in the meeting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Granola captures audio locally on Mac without a bot joining the call, ideal for client and sensitive conversations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it legal to record meetings with an AI note-taker?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Laws vary by jurisdiction and many require consent from all parties. Always inform participants and get consent before recording.',
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
