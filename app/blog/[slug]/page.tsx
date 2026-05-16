import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { getPostBySlug, getAllPostSlugs } from "@/lib/mdx";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs().filter(
    (slug) => slug !== 'openai-codex-tutorial-complete-guide-2026'
  );
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found | AIFLOXIUM' };
  }

  const { title, description, image } = post.frontmatter;

  return {
    title: `${title} | AIFLOXIUM`,
    description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${title} | AIFLOXIUM`,
      description,
      type: 'article',
      url: `https://aifloxium.online/blog/${slug}`,
      images: [{ url: image || '/og-image.jpg' }],
      authors: ['Muhammad Shadab Shams'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | AIFLOXIUM`,
      description,
      images: [image || '/og-image.jpg'],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { title, description, image, date, author } = post.frontmatter;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": image || "/og-image.jpg",
    "datePublished": date,
    "author": {
      "@type": "Person",
      "name": author || "Muhammad Shadab Shams",
    },
    "publisher": {
      "@type": "Organization",
      "name": "AIFLOXIUM",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aifloxium.online/favicon.ico"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://aifloxium.online/blog/${slug}`
    }
  };

  return <BlogPostLayout code={post.code} frontmatter={post.frontmatter} jsonLd={jsonLd} />;
}
