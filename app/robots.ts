import { MetadataRoute } from 'next';

import { SITE_HOST, SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/']
      },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Google-Extended'
        ],
        allow: '/',
        disallow: ['/api/', '/_next/']
      }
    ],
    host: SITE_HOST,
    sitemap: [`${SITE_URL}/sitemap.xml`]
  };
}
