import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { getPostBySlug, getAllPostSlugs } from "@/lib/mdx";
import { PERSON_NAME, SITE_URL } from '@/lib/site';
import { absoluteUrl, buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs().filter(
    (slug) =>
      slug !== 'openai-codex-tutorial-complete-guide-2026' &&
      slug !== 'claude-code-vs-codex-comparison' &&
      slug !== 'google-antigravity-2-0-review-2026' &&
      slug !== 'best-open-source-ai-models' &&
      slug !== 'self-healing-n8n-workflows' &&
      slug !== 'ai-automation-cost-optimization' &&
      slug !== 'agentic-workflows-n8n' &&
      slug !== 'gemini-3-5-flash-review' &&
      slug !== 'best-mcp-servers-2026' &&
      slug !== 'best-ai-coding-agents-2026'
  );
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return buildPageMetadata({
      title: 'Post Not Found | AIFLOXIUM',
      description: 'The requested blog post could not be found.',
      noIndex: true
    });
  }

  const { title, description, image, canonicalUrl, keywords, date, updatedAt } =
    post.frontmatter;

  return buildPageMetadata({
    title: `${title} | AIFLOXIUM`,
    description,
    path: canonicalUrl || `/blog/${slug}`,
    type: 'article',
    images: [image || '/brand/aifloxium-logo.png'],
    keywords,
    publishedTime: date,
    modifiedTime: updatedAt || date
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const {
    title,
    description,
    image,
    date,
    author,
    canonicalUrl,
    updatedAt
  } = post.frontmatter;

  const postUrl = absoluteUrl(canonicalUrl || `/blog/${slug}`);
  const postImage = absoluteUrl(image || '/brand/aifloxium-logo.png');
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: title, path: canonicalUrl || `/blog/${slug}` }
  ]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: [
      {
        '@type': 'ImageObject',
        url: postImage,
        width: 1200,
        height: 630
      }
    ],
    datePublished: date,
    dateModified: updatedAt || date,
    author: {
      '@type': 'Person',
      name: author || PERSON_NAME
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}#organization`,
      name: 'AIFLOXIUM',
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/brand/aifloxium-logo.png'),
        width: 600,
        height: 60
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl
    },
    url: postUrl
  };

  return (
    <BlogPostLayout
      slug={slug}
      code={post.code}
      frontmatter={post.frontmatter}
      jsonLd={[jsonLd, breadcrumbJsonLd]}
    />
  );
}
