import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import { getPostBySlug } from '@/lib/mdx';

const SLUG = 'claude-code-vs-codex-comparison';
const TITLE = 'Claude Code vs Codex (2026): Which AI Coding Agent Should You Actually Use?';
const DESCRIPTION =
  'I tested Claude Code and Codex side by side for months. Here is a full 2026 comparison covering benchmarks, pricing, token efficiency, privacy, multi-agent, and the exact decision framework for solo devs, teams, and non-coders.';
const CANONICAL = 'https://www.aifloxium.online/blog/claude-code-vs-codex-comparison';
const IMAGE = 'https://www.aifloxium.online/blog/covers/claude-code-vs-codex-comparison.svg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://www.aifloxium.online'),
  keywords: [
    'Claude Code vs Codex',
    'Claude Code vs Codex 2026',
    'Claude Code vs OpenAI Codex comparison',
    'which is better Claude Code or Codex',
    'Claude Code vs Codex pricing',
    'Claude Code vs Codex benchmarks',
    'Claude Code vs Codex token efficiency comparison 2026',
    'Claude Code vs Codex for non-coders',
    'when to use Claude Code instead of Codex',
    'when to use Codex instead of Claude Code',
    'local AI coding agent',
    'cloud sandbox execution',
    'agentic workflow',
    'GPT-5.5 Codex',
    'Opus 4.7',
    'CLAUDE.md file',
    'AGENTS.md file'
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
        alt: 'Claude Code vs Codex side-by-side graphic featuring local terminal execution model vs cloud sandbox container model',
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
    'focus-keyword': 'Claude Code vs Codex',
    'secondary-keywords':
      'Claude Code vs Codex 2026, Claude Code vs OpenAI Codex comparison, which is better Claude Code or Codex, Claude Code vs Codex pricing, Claude Code vs Codex benchmarks',
    'long-tail-keywords':
      'Claude Code vs Codex token efficiency comparison 2026, Claude Code vs Codex for non-coders, when to use Claude Code instead of Codex, when to use Codex instead of Claude Code',
    'semantic-lsi-keywords':
      'local AI coding agent, cloud sandbox execution, agentic workflow, GPT-5.5 Codex, Opus 4.7, CLAUDE.md file, AGENTS.md file',
    'schema-type': 'Article + FAQPage + HowTo',
    'llm-optimization-notes':
      'Features first-person experience (EEAT) with a named author, real-world benchmark citations, and specific pricing comparisons. Each H2 heading functions as a standalone answerable question.',
    'internal-link-targets':
      'Link to Hermes + DeepSeek guide, OpenAI Codex complete guide, 50 Claude Code Skills guide',
  },
};

export default async function ClaudeCodeVsCodexComparisonPage() {
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
        datePublished: '2026-05-25',
        dateModified: '2026-05-25',
        articleSection: 'AI Engineering',
        keywords: metadata.keywords,
      },
      {
        '@type': 'HowTo',
        name: 'How to Set Up a Hybrid AI Coding Workflow with Claude Code and Codex',
        description: 'Step-by-step setup to leverage Claude Code for local interactive logic and OpenAI Codex for cloud background automation.',
        url: CANONICAL,
        image: IMAGE,
        step: [
          {
            '@type': 'HowToStep',
            name: 'Configure Shared Context Files',
            text: 'Initialize CLAUDE.md and AGENTS.md in the project root to store coding standards, project context, and custom directives for both tools.',
          },
          {
            '@type': 'HowToStep',
            name: 'Run Local Interactive Sessions in Claude Code',
            text: 'Launch Claude Code in the terminal to handle deep, complex refactoring tasks, architecture planning, and real-time pair programming.',
          },
          {
            '@type': 'HowToStep',
            name: 'Execute Parallel Background Tasks in Codex',
            text: 'Delegate boilerplates, test suite expansions, and standard documentation generation to Codex running in parallel in isolated cloud containers.',
          },
          {
            '@type': 'HowToStep',
            name: 'Synchronize and Review via Git',
            text: 'Perform regular code reviews and merge background PRs from Codex, ensuring the codebase stays synchronized under local git control.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is Claude Code better than Codex in 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Neither is universally better. Claude Opus 4.7 leads on SWE-bench Pro (64.3% vs 58.6%), while GPT-5.5 leads on standard SWE-bench Verified (88.7% vs 87.6%) and Terminal-Bench 2.0 (82.7% vs 69.4%). Claude is stronger at complex reasoning on novel code, while Codex excels at shell execution and autonomous background tasks.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which should I use at the $20 per month tier?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Codex. Claude Code Pro runs out of usage in 2 to 3 days of heavy work because it consumes more tokens. Codex Plus at $20 typically lasts the full month for the same workload due to better token efficiency.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Claude Code upload my code to the cloud?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Your code files remain on your local machine. Claude Code only sends the conversation context (your prompts and relevant code snippets) to Anthropic\'s API. Codex is different: it clones your repository into an OpenAI-managed cloud container to run tasks.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is CLAUDE.md and do I need it?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CLAUDE.md is a markdown file placed in your project root that Claude Code reads automatically at the start of every session. It provides coding conventions, instructions, and task states so Claude stays immediately productive without manual explanation.',
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

  return <BlogPostLayout code={post.code} frontmatter={post.frontmatter} jsonLd={jsonLd} />;
}
