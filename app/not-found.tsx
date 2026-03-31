import type { Metadata } from "next";
import { NotFound } from "@/components/ui/not-found-2";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Aifloxium",
  description:
    "The page you're looking for doesn't exist or has been moved. Return to Aifloxium to explore our AI automation and agentic workflow services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundPage() {
  return <NotFound />;
}
