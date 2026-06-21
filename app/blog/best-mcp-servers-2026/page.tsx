import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import { getPostBySlug } from '@/lib/mdx';

const SLUG = 'best-mcp-servers-2026';
const TITLE = 'Best MCP Servers 2026: 50+ Tested, 3-7 You Actually Need';
const DESCRIPTION =
  'The complete guide to the best MCP servers in 2026 — 50+ servers reviewed by category, starter stacks by role, security reality check (36.7% have SSRF bugs), setup snippets for Claude, Cursor, and Windsurf.';
const CANONICAL = 'https://aifloxium.online/blog/best-mcp-servers-2026';
const IMAGE = 'https://aifloxium.online/blog/best-mcp-servers-2026/cover.svg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL('https://aifloxium.online'),
  keywords: [
    'best mcp servers 2026',
    'best mcp servers for claude',
    'best mcp servers for cursor',
    'best mcp servers for windsurf',
    'mcp server list',
    'top model context protocol servers',
    'how to install mcp server',
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
  category: 'Developer Tools',
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
        alt: 'Best MCP Servers 2026 — 50+ servers reviewed with starter stacks and security guide',
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

export default async function BestMCPServers2026Page() {
  const post = await getPostBySlug(SLUG);

  if (!post) {
    notFound();
  }

  const itemListJsonLd = {
    '@type': 'ItemList',
    name: 'Best MCP Servers 2026',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Playwright' },
      { '@type': 'ListItem', position: 2, name: 'Figma' },
      { '@type': 'ListItem', position: 3, name: 'GitHub' },
      { '@type': 'ListItem', position: 4, name: 'Context7' },
      { '@type': 'ListItem', position: 5, name: 'Firecrawl' },
      { '@type': 'ListItem', position: 6, name: 'PostgreSQL / Supabase' },
      { '@type': 'ListItem', position: 7, name: 'Filesystem' },
      { '@type': 'ListItem', position: 8, name: 'Sentry' },
      { '@type': 'ListItem', position: 9, name: 'Notion' },
      { '@type': 'ListItem', position: 10, name: 'Slack' },
    ],
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
        name: 'What is the best MCP server in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is no single best MCP server; it depends on the job. By popularity, Playwright is #1 globally, followed by Figma and GitHub. For AI coding, the most impactful are GitHub, Context7, Playwright, a database server like Postgres or Supabase, and Filesystem. Start with 3-5 that match your workflow.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many MCP servers should I install?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most experts recommend 3 to 7 servers maximum. Beyond that, tool bloat floods the agent context and degrades performance. Add servers only when they solve a recurring bottleneck.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are MCP servers safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The protocol is fine but implementations vary. 2026 research found 36.7% of public servers have SSRF flaws, 41% have no authentication, and only 8.5% use OAuth, with real RCE CVEs in the wild. Use official or verified servers, prefer OAuth, apply least-privilege tokens, sandbox local servers, and audit regularly.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I install an MCP server?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Add the server to your client JSON config (claude_desktop_config.json, .cursor/mcp.json, or Windsurf mcp_config.json) as a command such as npx -y <package> with any required API keys, then restart the client. Many servers also support one-click install or remote OAuth URLs.',
        },
      },
    ],
  };

  const howToJsonLd = {
    '@type': 'HowTo',
    name: 'How to install an MCP server in Claude, Cursor, or Windsurf',
    description: 'Step-by-step guide to installing MCP servers in popular AI coding assistants.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Choose your MCP server',
        text: 'Select an MCP server that matches your workflow. Start with 3-5 essential servers like GitHub, Context7, Playwright, and a database server.',
      },
      {
        '@type': 'HowToStep',
        name: 'Open your client config',
        text: 'Open the MCP config file for your client: claude_desktop_config.json for Claude, .cursor/mcp.json for Cursor, or mcp_config.json for Windsurf.',
      },
      {
        '@type': 'HowToStep',
        name: 'Add the server configuration',
        text: 'Add the server as a JSON entry with the command (usually npx -y @package/name) and any required environment variables or API keys.',
      },
      {
        '@type': 'HowToStep',
        name: 'Restart the client',
        text: 'Restart your AI coding assistant. Verify the server shows a green "running" or connected indicator.',
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
    '@graph': [itemListJsonLd, articleJsonLd, faqJsonLd, howToJsonLd, breadcrumbJsonLd],
  };

  return <BlogPostLayout slug={SLUG} code={post.code} frontmatter={post.frontmatter} jsonLd={jsonLd} />;
}