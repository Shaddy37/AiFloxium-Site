import type { Metadata } from 'next';
import ZeroDollarAgenticCodingStackClient from './ZeroDollarAgenticCodingStackClient';
import { buildPageMetadata } from '@/lib/seo';

const TITLE = 'Complete Setup Guide: $0 Agentic Coding Stack (North Mini Code & GLM-5.2)';
const DESCRIPTION =
  'A step-by-step setup guide to deploying a production-ready developer agent stack for $0. Learn how to configure Cohere North Mini Code and GLM-5.2 with OpenRouter and Cloudflare Workers AI for developer frameworks.';
const CANONICAL = 'https://www.aifloxium.online/resources/zero-dollar-agentic-coding-stack';
const IMAGE = 'https://www.aifloxium.online/blog/covers/zero-dollar-agentic-coding-stack.svg';

export const metadata: Metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/resources/zero-dollar-agentic-coding-stack',
  type: 'article',
  images: [IMAGE],
  keywords: [
    'agentic coding stack',
    'free AI coding models',
    'Cohere North Mini Code',
    'GLM-5.2 Cloudflare',
    'Cloudflare Workers AI tutorial',
    'free OpenRouter models',
    'Hermes Agent configuration',
    'OpenCode model setup',
  ],
});

export default function ZeroDollarAgenticCodingStackPage() {
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
        datePublished: '2026-06-27',
        dateModified: '2026-06-27',
        articleSection: 'AI Automation',
        keywords: [
          'agentic coding stack',
          'free AI coding models',
          'Cohere North Mini Code',
          'GLM-5.2 Cloudflare',
          'Cloudflare Workers AI tutorial',
        ],
      },
      {
        '@type': 'HowTo',
        name: 'How to set up a $0 agentic coding stack',
        description: 'Configure Cohere North Mini Code via OpenRouter and GLM-5.2 via Cloudflare Workers AI to run local developer agents for free.',
        url: CANONICAL,
        image: IMAGE,
        step: [
          {
            '@type': 'HowToStep',
            name: 'Create an OpenRouter Account & API Key',
            text: 'Sign up at OpenRouter and generate an API key (e.g., Coding Agents) to access the free Cohere model tier.',
          },
          {
            '@type': 'HowToStep',
            name: 'Configure Environment Variables',
            text: 'Export the OPENROUTER_API_KEY environment variable in your terminal or configure it in your workspace .env file.',
          },
          {
            '@type': 'HowToStep',
            name: 'Set up Cloudflare Workers AI',
            text: 'Sign up for a free Cloudflare account, retrieve your Account ID, and click REST API on the Workers AI dashboard.',
          },
          {
            '@type': 'HowToStep',
            name: 'Create Custom Workers AI API Token',
            text: 'Go to My Profile -> API Tokens and create a custom token with Workers AI Edit permissions.',
          },
          {
            '@type': 'HowToStep',
            name: 'Configure Model Providers and Launch Your Agent',
            text: 'Add the custom OpenAI-compatible endpoint configurations for OpenRouter and Cloudflare, and run your developer agent client.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is this agentic coding stack really free to run?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Yes, both OpenRouter's Cohere North Mini Code (cohere/north-mini-code:free) and Cloudflare Workers AI GLM-5.2 (@cf/zai-org/glm-5.2) models are available on free/zero-cost tiers with no daily caps or payment details required.",
            },
          },
          {
            '@type': 'Question',
            name: 'Which model is better for agentic coding workflows?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Cohere North Mini Code is a 30B MoE model tuned for multi-step agent actions. GLM-5.2 is a general-purpose model with native tool-calling and a massive 262k context window. Both are excellent for starting agent environments.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which developer clients can I use with these models?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can use any OpenAI-compatible client, such as Hermes Agent, OpenCode, or Claude Code, by setting the custom Base URL and Bearer Authorization headers.',
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
            name: 'Home',
            item: 'https://www.aifloxium.online/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Resources',
            item: 'https://www.aifloxium.online/resources',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Zero-Dollar Agentic Coding Stack Guide',
            item: CANONICAL,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ZeroDollarAgenticCodingStackClient />
    </>
  );
}
