import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import { getPostBySlug } from '@/lib/mdx';

const SLUG = 'best-ai-video-generators-2026';
const TITLE = 'Best AI Video Generators 2026: Veo 3.1 vs Kling 3.0 & 8 More Tested';
const DESCRIPTION =
  'The definitive ranking of the best AI video generators in 2026 — Google Veo 3.1 vs Kling 3.0 vs Sora 2 vs Runway Gen-4.5. Real pricing per clip, quality benchmarks, and the Sora sunset explained.';
const CANONICAL = 'https://aifloxium.online/blog/best-ai-video-generators-2026';
const IMAGE = 'https://aifloxium.online/blog/best-ai-video-generators-2026/cover.svg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://aifloxium.online'),
  keywords: [
    'best ai video generators 2026',
    'ai video generator comparison',
    'veo 3.1 vs kling 3.0',
    'sora 2 sunset',
    'runway gen-4.5 review',
    'cheapest ai video generator',
    'heygen ai video',
    'ai video pricing per clip',
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
  category: 'AI Video',
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
        alt: 'Best AI Video Generators 2026 — Veo 3.1, Kling 3.0, Runway, Sora 2 and more tested and ranked',
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

export default async function BestAIVideoGenerators2026Page() {
  const post = await getPostBySlug(SLUG);

  if (!post) {
    notFound();
  }

  const itemListJsonLd = {
    '@type': 'ItemList',
    name: 'Best AI Video Generators 2026',
    description: '8 AI video generators tested and ranked for quality, price, and real availability',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Google Veo 3.1' },
      { '@type': 'ListItem', position: 2, name: 'Kling 3.0' },
      { '@type': 'ListItem', position: 3, name: 'Sora 2' },
      { '@type': 'ListItem', position: 4, name: 'Runway Gen-4.5' },
      { '@type': 'ListItem', position: 5, name: 'HeyGen' },
      { '@type': 'ListItem', position: 6, name: 'Luma Dream Machine' },
      { '@type': 'ListItem', position: 7, name: 'Higgsfield' },
      { '@type': 'ListItem', position: 8, name: 'Seedance / Wan 2.6' },
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
        name: 'What is the best AI video generator in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Google Veo 3.1 is the best overall thanks to native audio, strong prompt adherence, and cinematic realism. Kling 3.0 is best value and HeyGen is best for talking-head video.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Sora 2 still available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Only briefly. OpenAI is sunsetting Sora 2 — the consumer app closed around April 2026 and API access ends around September 2026.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the cheapest AI video generator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kling 3.0 at roughly $0.50 per 10-second 1080p clip, with a generous free tier. Seedance 2.0 is close behind.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which AI video generator has the best audio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Google Veo 3.1, which generates synchronized audio natively alongside the video.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best free AI video generator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kling and Veo 3 (via Google AI Studio) offer the most usable free generative quality. HeyGen is best free for avatar/talking-head video.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which tool is best for talking-head or faceless videos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HeyGen. Its avatars, dubbing, and one-prompt Video Agent make it the go-to for spokespeople and faceless channels.',
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
