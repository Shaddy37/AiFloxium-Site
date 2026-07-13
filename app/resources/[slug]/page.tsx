import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { getResourceBySlug, getAllResourceSlugs } from "@/lib/mdx";
import { PERSON_NAME, SITE_URL } from '@/lib/site';
import { absoluteUrl, buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllResourceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getResourceBySlug(slug);

  if (!post) {
    return buildPageMetadata({
      title: 'Resource Not Found | AIFLOXIUM',
      description: 'The requested resource could not be found.',
      noIndex: true
    });
  }

  const { title, description, image, canonicalUrl, keywords, date, updatedAt } =
    post.frontmatter;

  return buildPageMetadata({
    title: `${title} | AIFLOXIUM`,
    description,
    path: canonicalUrl || `/resources/${slug}`,
    type: 'article',
    images: [image || '/brand/aifloxium-logo.png'],
    keywords,
    publishedTime: date,
    modifiedTime: updatedAt || date
  });
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getResourceBySlug(slug);

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

  const postUrl = absoluteUrl(canonicalUrl || `/resources/${slug}`);
  const postImage = absoluteUrl(image || '/brand/aifloxium-logo.png');
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: title, path: canonicalUrl || `/resources/${slug}` }
  ]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
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
