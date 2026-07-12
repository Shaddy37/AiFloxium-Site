import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import { getPostBySlug } from '@/lib/mdx';

const SLUG = 'best-ai-presentation-tools-2026';
const TITLE = 'Best AI Presentation Tools in 2026: Gamma vs Canva & 8 More Tested & Ranked';
const DESCRIPTION =
  'I compared the best AI presentation makers and slide builders of 2026—Gamma, Canva, Plus AI, Beautiful.ai, and more—by speed, design, and PPTX export.';
const CANONICAL = 'https://aifloxium.online/blog/best-ai-presentation-tools-2026';
const IMAGE = 'https://aifloxium.online/blog/best-ai-presentation-tools-2026/cover.svg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://aifloxium.online'),
  keywords: [
    'best AI presentation tools 2026',
    'AI slide makers',
    'Gamma vs Canva',
    'Plus AI review',
    'Beautiful.ai presentation',
    'AI powerpoint generators',
    'best free AI presentation maker',
    'Magic Design Canva',
    'discontinued Tome alternatives',
    'AI pitch deck builder',
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
        alt: 'Best AI Presentation Tools in 2026 — tested and ranked',
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

export default async function BestAIPresentationTools2026Page() {
  const post = await getPostBySlug(SLUG);

  if (!post) {
    notFound();
  }

  const itemListJsonLd = {
    '@type': 'ItemList',
    name: 'Best AI Presentation Tools in 2026',
    description: '7 AI presentation tools compared and ranked',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Gamma' },
      { '@type': 'ListItem', position: 2, name: 'Canva (Magic Design)' },
      { '@type': 'ListItem', position: 3, name: 'Plus AI' },
      { '@type': 'ListItem', position: 4, name: 'Beautiful.ai' },
      { '@type': 'ListItem', position: 5, name: 'Microsoft Copilot in PowerPoint' },
      { '@type': 'ListItem', position: 6, name: 'Pitch' },
      { '@type': 'ListItem', position: 7, name: 'Presentations.AI' },
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
        name: 'What is the best AI presentation tool in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gamma is the best overall — it generates a full, polished deck from a single prompt and uniquely combines strong text, design, and images. Canva is the best free all-in-one option.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Gamma or Canva better for presentations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gamma is better for fast, AI-generated decks from a prompt and viewer analytics. Canva is better for brand consistency, design flexibility, video, and has a more generous free plan.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which AI tool works inside PowerPoint and Google Slides?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Plus AI and Microsoft Copilot generate and edit slides natively inside PowerPoint and Google Slides, avoiding export issues.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Tome still a good option in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No — Tome was discontinued and is no longer a practical choice. Gamma, Canva, and Plus AI are the recommended alternatives.',
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
