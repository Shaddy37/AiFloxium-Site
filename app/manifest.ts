import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AIFLOXIUM',
    short_name: 'AIFLOXIUM',
    description:
      'AIFLOXIUM builds AI automation systems, internal tools, technical SEO workflows, and product-grade software.',
    start_url: '/',
    display: 'standalone',
    background_color: '#04050b',
    theme_color: '#04050b',
    icons: [
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png'
      }
    ]
  };
}
