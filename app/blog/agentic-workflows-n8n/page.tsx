import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import { getPostBySlug } from '@/lib/mdx';

const SLUG = 'agentic-workflows-n8n';
const TITLE = 'Agentic Workflows in n8n: Build Multi-Agent Systems 2026';
const DESCRIPTION =
  'Learn how to build production-grade agentic workflows in n8n: multi-agent orchestration, MCP tools, human-in-the-loop, and governance that survives real workloads.';
const CANONICAL = 'https://www.aifloxium.online/blog/agentic-workflows-n8n';
const IMAGE = 'https://www.aifloxium.online/blog/covers/agentic-workflows-n8n.svg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://www.aifloxium.online'),
  keywords: [
    'agentic workflows in n8n',
    'multi-agent orchestration',
    'AI agent workflow',
    'orchestrator-worker pattern',
    'MCP tools n8n',
    'agent-to-agent (A2A)',
    'human-in-the-loop',
    'governance-as-code',
    'autonomous workflow',
    'digital assembly line',
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
        alt: 'Agentic Workflows in n8n: Build Multi-Agent Systems 2026 cover image featuring conductors, orchestration, and automation layouts',
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
    'focus-keyword': 'agentic workflows in n8n',
    'secondary-keywords':
      'multi-agent orchestration, AI agent workflow, orchestrator-worker pattern, MCP tools n8n, human-in-the-loop, governance-as-code, autonomous workflow, digital assembly line',
    'schema-type': 'Article + FAQPage + HowTo + BreadcrumbList',
  },
};

export default async function AgenticWorkflowsN8nPage() {
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
        datePublished: '2026-06-16',
        dateModified: '2026-06-16',
        articleSection: 'AI Automation',
        keywords: metadata.keywords,
      },
      {
        '@type': 'HowTo',
        name: 'How to Build Agentic Workflows in n8n',
        description: 'A step-by-step implementation guide to building multi-agent systems with tools, memory, and checkpoints in n8n.',
        url: CANONICAL,
        image: IMAGE,
        step: [
          {
            '@type': 'HowToStep',
            name: 'Set up the Trigger',
            text: 'Configure a Chat Trigger, webhook, or schedule to kick off the workflow.',
          },
          {
            '@type': 'HowToStep',
            name: 'Add the Orchestrator AI Agent Node',
            text: 'Initialize an AI Agent node with a clear system prompt, a goal, and dynamic memory.',
          },
          {
            '@type': 'HowToStep',
            name: 'Attach Specialist Tools',
            text: 'Wire HTTP tools, sub-workflows, and MCP clients for domain-specific agent actions.',
          },
          {
            '@type': 'HowToStep',
            name: 'Implement Human-in-the-Loop Checks',
            text: 'Insert approval gates before any irreversible actions like payments or notifications.',
          },
          {
            '@type': 'HowToStep',
            name: 'Wrap in Governance & Error Workflows',
            text: 'Attach global Error triggers, spend caps, and full audit logging for production safety.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is an agentic workflow in simple terms?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It’s an automation where an AI agent decides how to reach a goal — picking which tools to use and in what order — instead of following a fixed, pre-wired script. You give it a goal and guardrails; it figures out the steps.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is n8n good for building AI agents?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. n8n is one of the most popular platforms for production agentic workflows because it combines visual building with deterministic logic, native AI Agent and MCP nodes, human-in-the-loop steps, error handling, and audit trails — the things you need to run agents safely.',
            },
          },
          {
            '@type': 'Question',
            name: 'What’s the difference between an AI agent and an agentic workflow?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An AI agent is a single reasoning actor. An agentic workflow is the whole system around one or more agents: triggers, tools, memory, human checkpoints, and error handling. The workflow is what makes the agent reliable.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need multiple agents, or is one enough?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Start with one for simple tasks. Move to multiple specialized agents when the work has distinct stages, needs different tools, or a single prompt becomes too complex to maintain. Multi-agent systems are more reliable and cheaper to run at scale.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is MCP and why does it matter for agents?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'MCP (Model Context Protocol) is the universal standard for giving agents tools and data access. It removes the need to build a custom integration for every tool, and in 2026 it’s supported by every major AI platform — making it the default way to extend agents.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I keep an autonomous agent from doing something harmful?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Use governance-as-code: allow-lists for tools, spend caps, and human-in-the-loop approval before any irreversible action. Default tools to read-only and gate anything destructive behind a human checkpoint.',
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
