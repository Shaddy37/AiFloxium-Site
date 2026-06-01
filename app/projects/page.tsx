import type { Metadata } from 'next';

import ProjectsPageClient from '@/components/pages/ProjectsPageClient';
import { projects } from '@/lib/projects-data';
import { buildPageMetadata, absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Projects and Workflow Case Studies | AIFLOXIUM',
  description:
    'Explore shipped AI systems, workflow automations, product builds, and delivery proof across operations, sales, content, and internal tooling.',
  path: '/projects',
  keywords: [
    'AI automation case studies',
    'workflow automation projects',
    'n8n case studies',
    'AI systems portfolio',
    'automation engineer projects'
  ]
});

const projectsGraphJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'AIFLOXIUM Projects and Case Studies',
      description:
        'Shipped AI systems, workflow automations, product builds, and delivery proof across operations, sales, content, and internal tooling.',
      url: absoluteUrl('/projects'),
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${absoluteUrl('/')}#website`
      }
    },
    {
      '@type': 'ItemList',
      name: 'AIFLOXIUM Projects',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: project.title,
        url: absoluteUrl('/projects')
      }))
    }
  ]
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsGraphJsonLd) }}
      />
      <ProjectsPageClient />
    </>
  );
}
