import type { Metadata } from "next";
import { NotFound } from "@/components/ui/not-found-2";

export const metadata: Metadata = {
  title: "404 | Page Not Found | Muhammad Shadab Shams",
  description:
    "The page you're looking for doesn't exist or has been moved. Return to the portfolio to explore automation services, projects, and product work.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundPage() {
  return <NotFound />;
}
