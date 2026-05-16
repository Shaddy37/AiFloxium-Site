import type { Metadata } from 'next';

import ProjectsPageClient from '@/components/pages/ProjectsPageClient';
import { buildPageMetadata } from '@/lib/seo';

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

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
