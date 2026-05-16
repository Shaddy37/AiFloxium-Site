import type { Metadata } from "next";
import { NotFound } from "@/components/ui/not-found-2";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: '404 | Page Not Found | AIFLOXIUM',
  description:
    "The page you're looking for doesn't exist or has been moved. Return to the site to explore automation services, projects, and product work.",
  noIndex: true
});

export default function NotFoundPage() {
  return <NotFound />;
}
