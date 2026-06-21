import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import { getPostBySlug } from '@/lib/mdx';

const SLUG = 'gemini-3-5-flash-review';
const TITLE = 'Gemini 3.5 Flash Review (2026): Speed, Benchmarks, Pricing & Honest Verdict';
const DESCRIPTION =
  'An honest, hands-on Gemini 3.5 Flash review for 2026 — real benchmarks, pricing, speed tests, the token-cost problem nobody mentions, and how it compares to GPT-5.5 and Claude. Verdict + FAQ inside.';
const CANONICAL = 'https://aifloxium.online/blog/gemini-3-5-flash-review';
const IMAGE = 'https://aifloxium.online/blog/gemini-3-5-flash-review/cover.svg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://aifloxium.online'),
  keywords: [
    'Gemini 3.5 Flash review',
    'gemini 3.5 flash benchmarks',
    'gemini 3.5 flash pricing',
    'gemini 3.5 flash vs gpt 5.5',
    'gemini 3.5 flash vs claude',
    'gemini 3.5 flash speed',
    'is gemini 3.5 flash good',
    'gemini 3.5 flash coding',
    'gemini 3.5 flash agentic',
    'google antigravity',
    'gemini api',
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
  category: 'AI Model Review',
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
        alt: 'Gemini 3.5 Flash review cover showing speed benchmarks, pricing, and honest verdict',
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

export default async function Gemini35FlashReviewPage() {
  const post = await getPostBySlug(SLUG);

  if (!post) {
    notFound();
  }

  const reviewJsonLd = {
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: 'Gemini 3.5 Flash',
      applicationCategory: 'AI Model',
      operatingSystem: 'Web, API',
      author: { '@type': 'Organization', name: 'Google DeepMind' },
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '4.2',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Person',
      name: 'Muhammad Shadab Shams',
      url: 'https://aifloxium.online',
    },
    publisher: { '@type': 'Organization', name: 'AIFLOXIUM' },
    datePublished: '2026-06-21',
    name: TITLE,
    url: CANONICAL,
  };

  const articleJsonLd = {
    '@type': 'Article',
    headline: TITLE,
    description: DESCRIPTION,
    image: IMAGE,
    datePublished: '2026-06-21',
    dateModified: '2026-06-21',
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
        name: 'Is Gemini 3.5 Flash free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is free in the Gemini app and AI Mode in Google Search, and the Google AI Studio free tier has no input/output charge with rate limits. Paid API usage is $1.50 per 1M input tokens and $9.00 per 1M output tokens.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Gemini 3.5 Flash better than Gemini 3.1 Pro?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On most coding and agentic benchmarks yes, and it is faster and cheaper. For the very hardest reasoning a full Pro/flagship model can still edge ahead.',
        },
      },
      {
        '@type': 'Question',
        name: 'How fast is Gemini 3.5 Flash?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Roughly 150 to 280 tokens per second depending on configuration, about 4x faster than comparable frontier models.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is my Gemini 3.5 Flash bill so high?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The price tripled versus Gemini 3 Flash and the model generates many thinking and output tokens. Lower thinking effort, cap max output tokens, use context caching, and route cheap work to Flash-Lite.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the context window and knowledge cutoff?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A 1,000,000-token context window with up to ~64K output tokens and a knowledge cutoff of January 2025. It accepts text, images, audio, video, and PDFs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Gemini 3.5 Flash support Computer Use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not yet. It supports function calling, structured output, code execution, and search-as-a-tool, but not Computer Use.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Gemini 3.5 Flash good for coding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes for agentic and iterative coding, especially in Antigravity with a clear plan. For the hardest single-shot tasks, Claude Opus 4.7 and GPT-5.5 score higher on SWE-Bench Pro.',
        },
      },
      {
        '@type': 'Question',
        name: 'Gemini 3.5 Flash vs GPT-5.5 which should I choose?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Choose Gemini 3.5 Flash for speed, agentic and MCP workflows, multimodal input, and 1M context at lower cost. Choose GPT-5.5 for the strongest single-shot coding and a mature Codex/ChatGPT ecosystem.',
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
    '@graph': [reviewJsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd],
  };

  return <BlogPostLayout slug={SLUG} code={post.code} frontmatter={post.frontmatter} jsonLd={jsonLd} />;
}