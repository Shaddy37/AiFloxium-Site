import fs from 'fs';
import path from 'path';

import { MetadataRoute } from 'next';

import { getAllPosts } from '@/lib/mdx';
import { servicesData } from '@/lib/services-data';
import { vsData } from '@/lib/vs-data';
import { SITE_URL } from '@/lib/site';

function getFileLastModified(relativePath: string) {
  const absolutePath = path.join(process.cwd(), relativePath);
  return fs.statSync(absolutePath).mtime;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: Array<{
    path: string;
    file: string;
    changeFrequency:
      | 'always'
      | 'hourly'
      | 'daily'
      | 'weekly'
      | 'monthly'
      | 'yearly'
      | 'never';
    priority: number;
  }> = [
    { path: '/', file: 'app/page.tsx', changeFrequency: 'weekly', priority: 1 },
    { path: '/about', file: 'app/about/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/blog', file: 'app/blog/page.tsx', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/contact', file: 'app/contact/page.tsx', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/projects', file: 'app/projects/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/resources', file: 'app/resources/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/services', file: 'app/services/page.tsx', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/tools', file: 'app/tools/page.tsx', changeFrequency: 'weekly', priority: 0.9 },
    {
      path: '/tools/automation-roi-calculator',
      file: 'app/tools/automation-roi-calculator/page.tsx',
      changeFrequency: 'weekly',
      priority: 0.9
    },
    { path: '/vs', file: 'app/vs/page.tsx', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/ai-consulting', file: 'app/ai-consulting/page.tsx', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/privacy', file: 'app/privacy/page.tsx', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms', file: 'app/terms/page.tsx', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/dmca', file: 'app/dmca/page.tsx', changeFrequency: 'yearly', priority: 0.3 }
  ];

  const pages = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: getFileLastModified(route.file),
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));

  const serviceLastModified = getFileLastModified('lib/services-data.ts');
  const serviceRoutes = servicesData.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: serviceLastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.frontmatter.updatedAt || post.frontmatter.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  const vsLastModified = getFileLastModified('lib/vs-data.ts');
  const vsRoutes = Object.keys(vsData).map((slug) => ({
    url: `${SITE_URL}/vs/${slug}`,
    lastModified: vsLastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));

  return [...pages, ...serviceRoutes, ...blogRoutes, ...vsRoutes];
}
