import type { Metadata } from 'next';

import {
  ADDRESS_COUNTRY,
  ADDRESS_LOCALITY,
  BRAND_NAME,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  LINKEDIN_URL,
  ORGANIZATION_NAME,
  PERSON_NAME,
  PERSON_ROLE,
  PHONE_NUMBER,
  PRIMARY_EMAIL,
  SITE_LOCALE,
  SITE_URL,
  X_HANDLE,
  X_URL
} from '@/lib/site';

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  type?: 'website' | 'article';
  images?: string[];
  eyebrow?: string;
  imageAlt?: string;
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
};

export function absoluteUrl(path = '/') {
  if (path.startsWith('/')) {
    return new URL(path, SITE_URL).toString();
  }

  if (path.includes('aifloxium.online')) {
    const relativePart = path.split('aifloxium.online').pop() || '';
    return new URL(relativePart, SITE_URL).toString();
  }

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  return new URL(path, SITE_URL).toString();
}

export function buildOgImageUrl({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  eyebrow = 'AI Automation Systems'
}: Pick<PageMetadataOptions, 'title' | 'description' | 'path' | 'eyebrow'>) {
  const ogUrl = new URL('/api/og', SITE_URL);
  ogUrl.searchParams.set('title', title);
  ogUrl.searchParams.set('description', description);
  ogUrl.searchParams.set('eyebrow', eyebrow);
  ogUrl.searchParams.set('path', absoluteUrl(path).replace(/^https?:\/\//, ''));
  return ogUrl.toString();
}

export function buildPageMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  keywords,
  type = 'website',
  images,
  eyebrow,
  imageAlt,
  noIndex = false,
  publishedTime,
  modifiedTime
}: PageMetadataOptions): Metadata {
  const metadataImages =
    images && images.length > 0
      ? images
      : [
          buildOgImageUrl({
            title,
            description,
            path,
            eyebrow: eyebrow || (type === 'article' ? 'Featured Article' : 'AI Automation Systems')
          })
        ];
  const openGraphImages = metadataImages.map((image) => ({
    url: absoluteUrl(image),
    width: 1200,
    height: 630,
    alt: imageAlt || title
  }));

  return {
    title,
    description,
    applicationName: BRAND_NAME,
    referrer: 'origin-when-cross-origin',
    keywords,
    authors: [{ name: PERSON_NAME, url: LINKEDIN_URL }],
    creator: PERSON_NAME,
    publisher: ORGANIZATION_NAME,
    alternates: {
      canonical: absoluteUrl(path)
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1
          }
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1
          }
        },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: ORGANIZATION_NAME,
      locale: SITE_LOCALE,
      type,
      images: openGraphImages,
      ...(type === 'article'
        ? {
            publishedTime,
            modifiedTime,
            authors: [PERSON_NAME]
          }
        : {})
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: X_HANDLE,
      creator: X_HANDLE,
      images: openGraphImages.map((image) => image.url)
    },
    category: 'technology'
  };
}

export function buildBreadcrumbJsonLd(
  items: Array<{
    name: string;
    path: string;
  }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}#person`,
  name: PERSON_NAME,
  url: SITE_URL,
  image: absoluteUrl('/brand/aifloxium-logo.png'),
  description: DEFAULT_DESCRIPTION,
  email: PRIMARY_EMAIL,
  telephone: PHONE_NUMBER,
  jobTitle: PERSON_ROLE,
  worksFor: {
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: ORGANIZATION_NAME
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: ADDRESS_LOCALITY,
    addressCountry: ADDRESS_COUNTRY
  },
  sameAs: [LINKEDIN_URL, X_URL]
};

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}#organization`,
  name: ORGANIZATION_NAME,
  url: SITE_URL,
  logo: absoluteUrl('/brand/aifloxium-logo.png'),
  email: PRIMARY_EMAIL,
  telephone: PHONE_NUMBER,
  foundingDate: '2025',
  founder: {
    '@type': 'Person',
    '@id': `${SITE_URL}#person`,
    name: PERSON_NAME
  },
  sameAs: [LINKEDIN_URL, X_URL]
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}#website`,
  name: BRAND_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  publisher: {
    '@id': `${SITE_URL}#organization`
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/blog?query={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
};

export const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}#service`,
  name: BRAND_NAME,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  email: PRIMARY_EMAIL,
  telephone: PHONE_NUMBER,
  areaServed: 'Worldwide',
  founder: {
    '@type': 'Person',
    '@id': `${SITE_URL}#person`,
    name: PERSON_NAME
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: ADDRESS_LOCALITY,
    addressCountry: ADDRESS_COUNTRY
  },
  sameAs: [LINKEDIN_URL, X_URL]
};
