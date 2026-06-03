import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import { getPostBySlug } from '@/lib/mdx';

const SLUG = 'best-open-source-ai-models';
const TITLE = 'Best Open Source AI Models to Try in June 2026: Complete Guide';
const DESCRIPTION =
  'The top open source LLMs you should try in June 2026 — MiniMax M3, DeepSeek V4-Pro, MiMo V2.5, Llama 4, Kimi K2.6. Real benchmarks, pricing, and deployment via Ollama & OpenRouter from an engineer who runs them in production.';
const CANONICAL = 'https://www.aifloxium.online/blog/best-open-source-ai-models';
const IMAGE = 'https://www.aifloxium.online/blog/covers/best-open-source-ai-models.svg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://www.aifloxium.online'),
  keywords: [
    'best open source AI models',
    'open source LLMs',
    'open weight models',
    'local AI',
    'self-hosted LLM',
    'AI model benchmarks',
    'inference cost',
    'coding AI',
    'agentic AI',
    'multimodal models',
    'Mixture of Experts'
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
  category: 'AI Engineering',
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
        alt: 'Best open source AI models to try in 2026 — MiniMax M3, DeepSeek V4, MiMo, Llama 4, Kimi K2.6 benchmark comparison',
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
    'focus-keyword': 'best open source AI models',
    'secondary-keywords':
      'open source LLMs, open weight models, local AI, self-hosted LLM, AI model benchmarks, inference cost, coding AI, agentic AI, multimodal models, Mixture of Experts',
    'long-tail-keywords':
      'best open source model for coding 2026, cheapest open source LLM with good performance, how to run AI models locally on GPU, MiniMax M3 vs DeepSeek V4 comparison, MiMo V2.5 review and benchmarks, Llama 4 10 million context window, open source model deployment guide Ollama OpenRouter, best local AI model single GPU, open source AI agentic coding benchmark',
    'semantic-lsi-keywords':
      'SWE-Bench Pro, SWE-Bench Verified, Terminal Bench, LiveCodeBench, Codeforces rating, MRCR v2, context window, MoE architecture, trillion parameter model, FP8 quantization, INT4 quantization, vLLM, Text Generation Inference, Ollama run, OpenRouter fallback routing, Apache-2.0 license, MIT license, DeepSeek V4-Flash price per token, MiMo-V2-Flash $0.10 per million tokens',
    'schema-type': 'Article + FAQPage + HowTo',
  },
};

export default async function BestOpenSourceAIModelsPage() {
  const post = await getPostBySlug(SLUG);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: TITLE,
        description: DESCRIPTION,
        image: IMAGE,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': CANONICAL,
        },
        author: {
          '@type': 'Person',
          name: 'Muhammad Shadab Shams',
          url: 'https://www.linkedin.com/in/muhammad-shadab-shams-8b07132b6/',
        },
        publisher: {
          '@type': 'Organization',
          name: 'AIFLOXIUM',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.aifloxium.online/brand/aifloxium-logo.png',
          },
        },
        url: CANONICAL,
        datePublished: '2026-06-03',
        dateModified: '2026-06-03',
        articleSection: 'AI Engineering',
        keywords: metadata.keywords,
      },
      {
        '@type': 'HowTo',
        name: 'How to Run and Self-Host Open Source AI Models',
        description: 'Step-by-step instructions on deploying the best open source LLMs locally using Ollama and in production using vLLM.',
        url: CANONICAL,
        image: IMAGE,
        step: [
          {
            '@type': 'HowToStep',
            name: 'Install Ollama Locally',
            text: 'Download and install Ollama on your local machine or server to run quantized models on CPU/GPU.',
          },
          {
            '@type': 'HowToStep',
            name: 'Pull and Run a Model',
            text: 'Execute the run command in your terminal (e.g., ollama run qwen3.6:27b) to automatically pull and launch the model interface.',
          },
          {
            '@type': 'HowToStep',
            name: 'Configure Unified Routing via OpenRouter',
            text: 'Sign up for OpenRouter, generate an API key, and configure endpoint connections to access hosted versions of frontier open-weight models.',
          },
          {
            '@type': 'HowToStep',
            name: 'Deploy at Scale with vLLM',
            text: 'Deploy weights using vLLM on enterprise cloud GPU clusters for optimized token throughput, FP8 quantization, and pipeline parallelism.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Which open source model is best for coding in June 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For absolute peak performance, DeepSeek V4-Pro leads with 80.6% SWE-Bench Verified. For best value, MiMo-V2-Flash delivers 73.4% at $0.10 per M tokens. For agentic workflows, MiniMax M3 combines coding, multimodality, and 1M context.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I run these models locally on my own hardware?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Llama 4 Scout (17B) and Qwen3.6-27B run on single high-end GPUs. DeepSeek V4-Flash and MiMo-V2-Flash run on multi-GPU setups or with CPU offloading via Ollama. For trillion-parameter models, expect to use 4–8 A100s or H100s.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the cheapest open source LLM with good coding performance?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'MiMo-V2-Flash at $0.10 per M input tokens offers the best price-to-performance ratio, followed by DeepSeek V4-Flash at ~$0.14 per M tokens. Both outperform many proprietary models costing 10x–30x more.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are these open weight models safe for commercial use?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most top models use permissive licenses: MIT (DeepSeek V4, MiMo-V2.5-Pro, GLM-5.1) or Apache-2.0 (MiMo-V2-Flash). MIT allows unrestricted commercial use, modification, and redistribution. Always verify the exact license file on the official Hugging Face repository before production deployment.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which model has the longest context window?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Llama 4 Scout and Llama 4 Maverick lead with 10 million tokens — roughly 10x longer than the 1M context of MiniMax M3, DeepSeek V4, and MiMo. For ingesting entire codebases or multi-year archives in a single prompt, Llama 4 is unmatched.',
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
            item: 'https://www.aifloxium.online/blog',
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
