import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import { getPostBySlug } from '@/lib/mdx';

const SLUG = 'openai-codex-tutorial-complete-guide-2026';
const TITLE = 'OpenAI Codex Tutorial: Zero to Deployed App in 1 Hour (2026 Complete Guide)';
const DESCRIPTION =
  'Learn OpenAI Codex from scratch. This hands-on guide covers setup, AGENTS.md, Plan Mode, reusable skills, GitHub + Vercel deployment, browser automation, and weekly task scheduling in a complete practical walkthrough.';
const CANONICAL = 'https://aifloxium.online/blog/openai-codex-tutorial-complete-guide-2026';
const IMAGE = 'https://aifloxium.online/blog/openai-codex/codex-desktop-interface.svg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://aifloxium.online'),
  keywords: [
    'OpenAI Codex tutorial',
    'Codex app setup',
    'AGENTS.md Codex guide',
    'Plan Mode Codex',
    'Codex vs Claude Code',
    'reusable skills Codex',
    'deploy Codex Vercel',
    'how to use OpenAI Codex for beginners 2026',
    'how to build reusable skills in OpenAI Codex',
    'OpenAI Codex AGENTS.md setup step by step',
    'how to deploy a Codex project to Vercel with GitHub',
    'Codex plan mode vs full auto explained',
    'ChatGPT coding agent',
    'local AI coding agent',
    'GPT-5.5 model',
    'agentic workflow',
    'browser use automation',
    'YouTube comment intelligence',
    'MCP server Codex',
    'Codex plugins',
    'Excel automation AI',
    'AI dashboard deployment',
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
  category: 'OpenAI Codex Tutorial',
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
        alt: 'OpenAI Codex desktop app showing workspace, model controls, and chat interface in a 2D editorial illustration',
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
    'focus-keyword': 'OpenAI Codex tutorial',
    'secondary-keywords':
      'Codex app setup, AGENTS.md Codex guide, Plan Mode Codex, Codex vs Claude Code, reusable skills Codex, deploy Codex Vercel',
    'long-tail-keywords':
      'how to use OpenAI Codex for beginners 2026, how to build reusable skills in OpenAI Codex, OpenAI Codex AGENTS.md setup step by step, how to deploy a Codex project to Vercel with GitHub, Codex plan mode vs full auto explained',
    'semantic-lsi-keywords':
      'ChatGPT coding agent, local AI coding agent, GPT-5.5 model, agentic workflow, browser use automation, YouTube comment intelligence, MCP server Codex, Codex plugins, Excel automation AI, AI dashboard deployment',
    'schema-type': 'HowTo + Article + FAQPage',
    'llm-optimization-notes':
      'Include FAQ section with exact questions people ask AI assistants. Define every term on first use. Use numbered steps for all workflows. Use clear internal links, external citations, and practical workflow language.',
    'internal-link-targets':
      'Link to LinkedIn Content Autopilot, 5 AI Automations Every Ecommerce Brand Should Have Running, The Autonomous Sales Rep',
  },
};

export default async function OpenAICodexTutorialPage() {
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
            url: 'https://aifloxium.online/favicon.ico',
          },
        },
        url: CANONICAL,
        datePublished: '2026-05-16',
        dateModified: '2026-05-16',
        articleSection: 'OpenAI Codex Tutorial',
        keywords: metadata.keywords,
      },
      {
        '@type': 'HowTo',
        name: TITLE,
        description: DESCRIPTION,
        url: CANONICAL,
        image: IMAGE,
        step: [
          {
            '@type': 'HowToStep',
            name: 'Create a Codex project and AGENTS.md file',
            text: 'Create a real project folder, start a new project, and define AGENTS.md so Codex loads the project context in every session.',
          },
          {
            '@type': 'HowToStep',
            name: 'Start in Plan Mode',
            text: 'Enable Plan Mode before execution so Codex proposes the build approach, assumptions, and workflow before touching files.',
          },
          {
            '@type': 'HowToStep',
            name: 'Connect the YouTube Data API',
            text: 'Enable YouTube Data API v3 in Google Cloud, create an API key, store it in a local .env file, and test comment retrieval.',
          },
          {
            '@type': 'HowToStep',
            name: 'Export insights to Excel',
            text: 'Pull comments, analyze sentiment and themes, then export raw data, summary stats, and charts into a workbook.',
          },
          {
            '@type': 'HowToStep',
            name: 'Create reusable Codex skills',
            text: 'Define reusable markdown skills so future prompts can trigger full workflows without re-explaining the process.',
          },
          {
            '@type': 'HowToStep',
            name: 'Build and deploy the dashboard',
            text: 'Generate a dashboard, push the project to GitHub, and deploy it on Vercel for a live web URL.',
          },
          {
            '@type': 'HowToStep',
            name: 'Automate updates and QA',
            text: 'Schedule GitHub Actions to refresh data weekly, redeploy the dashboard, and run browser-based QA checks.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the difference between OpenAI Codex and ChatGPT?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ChatGPT is a browser-based AI chat tool. OpenAI Codex is an agentic tool that can read files, write code, run commands, automate a browser, and deploy software on your behalf.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need coding experience to use OpenAI Codex?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. You can use plain-English prompting, review the output, and ask Codex to iterate. Basic familiarity with file systems helps, but it is not required for the desktop app.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does AGENTS.md do in OpenAI Codex?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AGENTS.md is a markdown file in your project folder that Codex reads automatically at the start of new chat sessions. It acts like a persistent project brief.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I deploy a Codex project to Vercel?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Initialize Git in your project, push to GitHub, connect the repository to Vercel, and deploy. You can also install the Vercel plugin in Codex for direct deployment prompts.',
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
            item: 'https://aifloxium.online/blog',
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
