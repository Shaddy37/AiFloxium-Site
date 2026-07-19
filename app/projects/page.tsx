import { Metadata } from 'next';
import ProjectsPageClient from '@/components/pages/ProjectsPageClient';
import { PERSON_NAME } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `Projects | ${PERSON_NAME}`,
  description:
    'Practical AI systems for startups and growing businesses: automation, internal software, product builds, and workflows that save real time.',
  path: '/projects',
  keywords: [
    'AI automation projects',
    'n8n workflows',
    'Claude Code projects',
    'AI agent projects'
  ]
});

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
