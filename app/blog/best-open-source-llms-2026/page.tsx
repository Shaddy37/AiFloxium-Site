import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import { getPostBySlug } from '@/lib/mdx';

const SLUG = 'best-open-source-llms-2026';
const TITLE = 'Best Open-Source LLMs in 2026: 10 Models Tested & Ranked';
const DESCRIPTION =
  'A hands-on, no-hype ranking of the best open-source (open-weight) LLMs in 2026, including DeepSeek V4, GLM-5, Qwen 3.6, Kimi K2.5, Llama 4, Gemma 4 and Mistral Large — with benchmarks, hardware requirements, and license guidelines.';
const CANONICAL = 'https://aifloxium.online/blog/best-open-source-llms-2026';
const IMAGE = 'https://aifloxium.online/blog/best-open-source-llms-2026/cover.svg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://aifloxium.online'),
  keywords: [
    'best open-source LLMs 2026',
    'open-weight LLMs ranking',
    'DeepSeek V4',
    'GLM-5',
    'Qwen 3.6',
    'run LLM locally',
    'local LLM hardware VRAM',
    'Llama 4 Scout',
    'Gemma 4',
    'commercial use LLM licenses',
    'Ollama guide',
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
  category: 'AI Models',
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
        alt: 'Best Open-Source LLMs in 2026 — 10 models tested and ranked',
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

export default async function BestOpenSourceLLMs2026Page() {
  const post = await getPostBySlug(SLUG);

  if (!post) {
    notFound();
  }

  const itemListJsonLd = {
    '@type': 'ItemList',
    name: 'Best Open-Source LLMs in 2026',
    description: '10 open-source LLM families tested and ranked',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'DeepSeek V4' },
      { '@type': 'ListItem', position: 2, name: 'GLM-5 / 5.1 (Z.AI)' },
      { '@type': 'ListItem', position: 3, name: 'Qwen 3.5 / 3.6' },
      { '@type': 'ListItem', position: 4, name: 'Kimi K2.5 / K2.6' },
      { '@type': 'ListItem', position: 5, name: 'MiniMax M3 / M2.5' },
      { '@type': 'ListItem', position: 6, name: 'Gemma 4' },
      { '@type': 'ListItem', position: 7, name: 'Llama 4' },
      { '@type': 'ListItem', position: 8, name: 'Mistral Large 3 / Small 4' },
      { '@type': 'ListItem', position: 9, name: 'GPT-oss 120B' },
      { '@type': 'ListItem', position: 10, name: 'Nemotron / Phi-4' },
    ],
  };

  const articleJsonLd = {
    '@type': 'Article',
    headline: TITLE,
    description: DESCRIPTION,
    image: IMAGE,
    datePublished: '2026-06-24',
    dateModified: '2026-06-24',
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
        name: 'What is the best open-source LLM in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For raw capability, DeepSeek V4 and GLM-5 are the best open-weight models, rivaling top proprietary models on reasoning and coding. For the best model you can actually run locally, Qwen 3.5/3.6 is the top recommendation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which open-source LLM is best for coding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GLM-5 (excellent at autonomously fixing real bugs), Qwen3-Coder-Next, and Kimi K2.5 are the strongest for code. GPT-oss 20B also scored 98.3% on one independent 38-task coding benchmark.',
        },
      },
      {
        '@type': 'Question',
        name: 'What\'s the best open-source LLM I can run on a normal computer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On a 24GB GPU, run Qwen 3.6-27B or GLM-4.7-Flash at 20–40 tokens/sec. On an 8GB laptop, run Gemma 4 or Qwen3 8B. Use Ollama (developers) or LM Studio (beginners) to get started.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are open-source LLMs as good as GPT or Claude now?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On most benchmarks they\'re within single digits. Top open models like GLM-5, Kimi K2.5, and DeepSeek V4 match or approach GPT-4o and Claude Sonnet on reasoning. Proprietary models still lead in some multimodal and voice areas.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use open-source LLMs commercially for free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Often yes — models under Apache 2.0 (Qwen, Gemma, Mistral Small, GPT-oss) and MIT (DeepSeek, Kimi) are commercial-safe. Be careful with Llama 4 (Meta Community License, 700M MAU clause), Mistral Large (custom), and MiniMax M2.7+ (non-commercial).',
        },
      },
      {
        '@type': 'Question',
        name: 'How much VRAM do I need to run a local LLM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Minimum 8GB RAM (CPU-only, slow). For a good experience, an 8GB GPU runs 7B models well; 16GB is a solid entry; 24GB is the sweet spot for 27–35B models. 128GB+ Apple Silicon or multi-GPU rigs handle the largest models.',
        },
      },
      {
        '@type': 'Question',
        name: 'What\'s the difference between open-source and open-weight?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most open LLMs are technically open-weight: the trained model is downloadable and runnable, but the training data and pipeline aren\'t released. For builders this is still extremely valuable — you can run, fine-tune, and self-host the model.',
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
