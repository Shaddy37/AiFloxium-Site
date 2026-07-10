import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import { getPostBySlug } from '@/lib/mdx';

const SLUG = 'chatgpt-5-6-sol-terra-luna';
const TITLE = "GPT-5.6 Sol, Terra & Luna: OpenAI's New Three-Model Family (2026)";
const DESCRIPTION =
  "A complete deep-dive into OpenAI's GPT-5.6 family (Sol, Terra, Luna): pricing, benchmarks, max effort reasoning, GPT-Live, ChatGPT Work, and plan availability.";
const CANONICAL = 'https://aifloxium.online/blog/chatgpt-5-6-sol-terra-luna';
const IMAGE = 'https://aifloxium.online/blog/chatgpt-5-6-sol-terra-luna/cover.svg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://aifloxium.online'),
  keywords: [
    'GPT-5.6 Sol Terra Luna',
    'OpenAI GPT 5.6 family',
    'GPT-5.6 pricing',
    'Sol vs Terra vs Luna',
    'GPT-5.6 benchmarks',
    'Programmatic Tool Calling',
    'ChatGPT Work agent',
    'GPT-Live voice models',
    'max reasoning effort OpenAI',
    'Sol Ultra Terminal-Bench',
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
  category: 'AI Frontiers',
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
        alt: 'GPT-5.6 Sol, Terra and Luna — OpenAI new three-model family',
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

export default async function ChatGPT56SolTerraLunaPage() {
  const post = await getPostBySlug(SLUG);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESCRIPTION,
    image: IMAGE,
    datePublished: '2026-07-10',
    dateModified: '2026-07-10',
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
        name: 'Is ChatGPT 5.6 free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. GPT-5.6 Sol is not available on Free or Go plans or to logged-out users. You need at least a Plus subscription for Sol in standard chat; Terra and Luna are available via ChatGPT Work, Codex, and the API. Codex offers Terra to Free and Go users.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do Sol, Terra, and Luna mean?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'They are capability tiers, not versions. Sol is the flagship, Terra is the balanced everyday model, and Luna is the fast, low-cost tier. The 5.6 is the generation and the names persist across future upgrades.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does the GPT-5.6 API cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Per 1M tokens: Sol is $5 input / $30 output, Terra is $2.50 / $15, and Luna is $1 / $6. Cached input reads get a 90% discount and cache writes cost 1.25x the uncached input rate.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between max and ultra mode?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'max is a reasoning-effort level that gives a single model more time to think. ultra is a multi-agent mode that spawns parallel subagents and synthesizes their results, which is why Sol Ultra scores higher than plain Sol on Terminal-Bench 2.1.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is GPT-5.6 better than Claude Opus 4.8 or Gemini 3.1 Pro?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For agentic coding, GPT-5.6 Sol leads Terminal-Bench 2.1. For deep no-tools reasoning and some long-context tasks, Claude competes or leads, and Gemini is stronger for multimodal work. They are close at the frontier, so test on your own tasks.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is GPT-Live?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GPT-Live is OpenAI\'s new real-time voice model family launched July 8, 2026 that can listen and speak simultaneously, enabling natural interruptions and live translation. It upgrades ChatGPT voice mode and can offload harder requests to GPT-5.5.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is ChatGPT Work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT Work is a long-running agent that researches, works across connected apps and files, and produces finished documents, spreadsheets, presentations, reports, and Sites, with steerable progress and Scheduled Tasks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why was GPT-5.6 delayed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'OpenAI voluntarily limited the June 26 preview to "trusted partners" at the U.S. government\'s request so the Department of Commerce could review national-security (cyber) risks. The public launch went ahead on July 9 after the hold lifted.',
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
    '@graph': [articleJsonLd, faqJsonLd, breadcrumbJsonLd],
  };

  return <BlogPostLayout slug={SLUG} code={post.code} frontmatter={post.frontmatter} jsonLd={jsonLd} />;
}
