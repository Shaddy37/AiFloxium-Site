import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import { getPostBySlug } from '@/lib/mdx';

const SLUG = 'hermes-agent-guide';
const TITLE = 'Hermes Agent: The Complete 2026 Guide — Setup, Skills, Use Cases & Everything You Need to Know';
const DESCRIPTION =
  'A complete, hands-on guide to Hermes Agent by Nous Research: what it is, how the self-improving learning loop works, step-by-step installation, model providers, messaging setup, pricing, security, and real use cases.';
const CANONICAL = 'https://www.aifloxium.online/blog/hermes-agent-guide';
const IMAGE = 'https://www.aifloxium.online/blog/covers/hermes-agent-guide.svg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://www.aifloxium.online'),
  keywords: [
    'Hermes Agent',
    'Nous Research',
    'self-improving AI agent',
    'self-hosted AI agent',
    'open source AI agent 2026',
    'Hermes Agent installation',
    'Telegram AI agent',
    'Model Context Protocol',
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
        alt: 'Hermes Agent Guide Cover showing glowing vector art representation of the AI system',
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

export default async function HermesAgentGuidePage() {
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
        datePublished: '2026-06-25',
        dateModified: '2026-06-25',
        articleSection: 'AI Automation',
        keywords: metadata.keywords,
      },
      {
        '@type': 'HowTo',
        name: 'How to install Hermes Agent',
        description: 'Install and run the Hermes Agent self-hosted AI agent in about 15 minutes.',
        url: CANONICAL,
        image: IMAGE,
        step: [
          {
            '@type': 'HowToStep',
            name: 'Install',
            text: 'Download Hermes Desktop or run the one-line CLI install command for your OS.',
          },
          {
            '@type': 'HowToStep',
            name: 'Connect a model',
            text: "Run 'hermes setup --portal' or add an API key from OpenRouter, Anthropic, or OpenAI.",
          },
          {
            '@type': 'HowToStep',
            name: 'First chat',
            text: "Start a chat, run a real task, then verify session memory with 'hermes -c'.",
          },
          {
            '@type': 'HowToStep',
            name: 'Connect messaging',
            text: 'Create a Telegram bot with BotFather and link it so you can reach Hermes from your phone.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is Hermes Agent free?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The agent software is free and open-source under the MIT license. You only pay for the LLM tokens you use through your chosen provider.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Hermes Agent the same as the Hermes 3 model?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "No. Hermes Agent is the autonomous agent software. Hermes 3 and Hermes 4.3 are Nous Research's open-weight language models. The agent is model-agnostic.",
            },
          },
          {
            '@type': 'Question',
            name: 'What do I need to run Hermes Agent?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A machine running macOS, Linux, or Windows with WSL2, or a $5+ VPS for 24/7 use, plus an LLM API key. Setup takes about 15 minutes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can Hermes Agent run 24/7?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. It is designed to run continuously on a server or VPS, survive restarts, run cron jobs, and be reachable from Telegram, Discord, Slack, WhatsApp, and Signal.',
            },
          },
          {
            '@type': 'Question',
            name: 'How is Hermes different from OpenClaw?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hermes has a closed learning loop that writes and self-improves reusable skills and maintains persistent memory, which is why many users migrated from OpenClaw in 2026.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is my data private with Hermes Agent?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Hermes has zero telemetry and stores all memory locally in ~/.hermes/. It is self-hosted, MIT-licensed, and ships with container hardening and sandboxed terminal backends.',
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

  return <BlogPostLayout slug={SLUG} code={post.code} frontmatter={post.frontmatter} jsonLd={jsonLd} />;
}
