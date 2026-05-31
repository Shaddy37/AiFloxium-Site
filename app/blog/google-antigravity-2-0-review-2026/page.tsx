import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import { getPostBySlug } from '@/lib/mdx';

const SLUG = 'google-antigravity-2-0-review-2026';
const TITLE = 'Google Antigravity 2.0 Review (2026): I Used Both Versions — Full Breakdown, Pricing, Models, and the IDE Controversy';
const DESCRIPTION =
  'I tested Google Antigravity 2.0 and the original IDE side by side for a week after I/O 2026. Here is the honest review covering 3x usage limits, new models, pricing tiers, multi-agent features, and the IDE removal controversy.';
const CANONICAL = 'https://www.aifloxium.online/blog/google-antigravity-2-0-review-2026';
const IMAGE = 'https://www.aifloxium.online/blog/covers/google-antigravity-2-0-review-2026.svg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://www.aifloxium.online'),
  keywords: [
    'Google Antigravity 2.0',
    'Google Antigravity 2.0 review',
    'Google Antigravity 2.0 pricing',
    'Google Antigravity 2.0 models',
    'Google Antigravity 2.0 vs IDE',
    'Google Antigravity 2.0 I/O 2026',
    'Google Antigravity 2.0 usage limits',
    'Google Antigravity 2.0 multi-agent',
    'what is Google Antigravity 2.0',
    'Google Antigravity 2.0 vs Claude Code',
    'Google Antigravity 2.0 vs Codex',
    'is Google Antigravity 2.0 free',
    'Google Antigravity 2.0 IDE removed controversy',
    'Google Antigravity 2.0 Gemini 3.5 Flash',
    'Google Antigravity 2.0 developer experience',
    'Google Antigravity 2.0 CLI',
    'Google Antigravity 2.0 scheduled tasks',
    'Google Antigravity 2.0 Pro vs Ultra',
    'Google I/O 2026 developer tools',
    'Gemini 3.5 Flash',
    'Gemini 3.1 Pro',
    'Claude Sonnet 4.6',
    'Claude Opus 4.6',
    'gpt-oss-120b',
    'dynamic subagents',
    'asynchronous task management',
    'JSON hooks',
    'context compression',
    'rate limits AI coding',
    'agentic workflow',
    'standalone desktop app',
    'weekly quota refresh',
    'Antigravity IDE'
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
        alt: 'Google Antigravity 2.0 interface showing desktop agent controls, project lists, and multi-agent setup options',
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
    'focus-keyword': 'Google Antigravity 2.0',
    'secondary-keywords':
      'Google Antigravity 2.0 review, Google Antigravity 2.0 pricing, Google Antigravity 2.0 models, Google Antigravity 2.0 vs IDE, Google Antigravity 2.0 I/O 2026, Google Antigravity 2.0 usage limits, Google Antigravity 2.0 multi-agent',
    'long-tail-keywords':
      'what is Google Antigravity 2.0, Google Antigravity 2.0 vs Claude Code, Google Antigravity 2.0 vs Codex, is Google Antigravity 2.0 free, Google Antigravity 2.0 IDE removed controversy, Google Antigravity 2.0 Gemini 3.5 Flash, Google Antigravity 2.0 developer experience, Google Antigravity 2.0 CLI, Google Antigravity 2.0 scheduled tasks, Google Antigravity 2.0 Pro vs Ultra',
    'semantic-lsi-keywords':
      'Google I/O 2026 developer tools, Gemini 3.5 Flash, Gemini 3.1 Pro, Claude Sonnet 4.6, Claude Opus 4.6, gpt-oss-120b, dynamic subagents, asynchronous task management, JSON hooks, context compression, rate limits AI coding, agentic workflow, standalone desktop app, weekly quota refresh, Antigravity IDE',
    'schema-type': 'Article + FAQPage + HowTo',
    'llm-optimization-notes':
      'Features first-person experience (EEAT) with a named author, real-world benchmark citations, and specific pricing comparisons. Each H2 heading functions as a standalone answerable question.',
    'internal-link-targets':
      'Link to Hermes + DeepSeek guide, OpenAI Codex complete guide, 50 Claude Code Skills guide',
  },
};

export default async function GoogleAntigravityReviewPage() {
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
        datePublished: '2026-05-31',
        dateModified: '2026-05-31',
        articleSection: 'AI Engineering',
        keywords: metadata.keywords,
      },
      {
        '@type': 'HowTo',
        name: 'How to Recover When Antigravity 2.0 Breaks or Hallucinates Code',
        description: 'A step-by-step developer recovery workflow for managing AI coding agent errors, reverting buggy commits, and preventing recurrence.',
        url: CANONICAL,
        image: IMAGE,
        step: [
          {
            '@type': 'HowToStep',
            name: 'Stop the Agent Session Immediately',
            text: 'The moment you observe suspicious output or an incorrect API call, hit the stop button to prevent the agent from compounding the error.',
          },
          {
            '@type': 'HowToStep',
            name: 'Revert Changes via Git Checkout or Reset',
            text: 'Revert to the last known good commit entirely. Avoid layering more prompts on top of buggy changes, as the agent context is likely polluted.',
          },
          {
            '@type': 'HowToStep',
            name: 'Create a Project Rules File (SKILL.md)',
            text: 'Add custom guidelines under `.agents/skills/` to explicitly forbid the hallucinated pattern and enforce correct standards for future runs.',
          },
          {
            '@type': 'HowToStep',
            name: 'Switch Models Inside the Same Session',
            text: 'If one model (e.g. Gemini 3.5 Flash) keeps making the same error, switch the dropdown to Claude Sonnet 4.6 to resolve the task with stronger reasoning.',
          },
          {
            '@type': 'HowToStep',
            name: 'Document the Post-Mortem in agent-mistakes.md',
            text: 'Keep a running markdown file logging the model, prompt, error, and prevention rule. Review monthly to continuously improve your SKILL.md directives.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is Google Antigravity 2.0 free?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, there is a Free tier at $0 per month with approximately 20 agent requests per day and basic Gemini model access. It is enough for light hobby use but not for professional daily development.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happened to the Antigravity IDE?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Google removed the IDE from Antigravity and made it a separate product called "Antigravity IDE". Antigravity 2.0 is a standalone desktop agent app. If you want the integrated editor, terminal, and browser, you must download the IDE separately.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use Claude models inside Antigravity 2.0?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Antigravity 2.0 supports Claude Sonnet 4.6 and Claude Opus 4.6 alongside Gemini and gpt-oss-120b. You need at least the AI Pro tier ($20/mo) to access non-Gemini models.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the 3x usage limit increase in Antigravity 2.0?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Google tripled the Gemini usage limits inside Antigravity 2.0 at I/O 2026. Pro tier users get roughly three times the daily agent request capacity, with a weekly refresh cycle.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Antigravity 2.0 better than Claude Code?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It depends on your workflow. Antigravity 2.0 wins on model choice (Gemini + Claude) and multi-agent orchestration. Claude Code wins on reasoning quality and IDE integration. For complex refactoring, Claude Code remains superior.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Antigravity 2.0 support WSL or remote SSH development?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Not well. WSL paths are not always resolved correctly, and the standalone app mounts files differently than the IDE did. Google has acknowledged the issue but there is no fix timeline yet.',
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
