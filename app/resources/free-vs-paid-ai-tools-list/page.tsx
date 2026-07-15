import { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import FreeVsPaidToolsClient from "./FreeVsPaidToolsClient";

export const metadata: Metadata = buildPageMetadata({
  title: "400+ Best AI Tools (Free vs Paid) Masterlist for 2026 | AIFLOXIUM",
  description:
    "Stop guessing which AI software is worth the cost. Explore our ultimate directory of 422 free and paid AI tools for marketing, coding, video, and automation in 2026.",
  path: "/resources/free-vs-paid-ai-tools-list",
  keywords: [
    "free vs paid AI tools",
    "generative AI software",
    "artificial intelligence apps",
    "AI automation agency",
    "best free AI generators",
    "machine learning tools",
    "AI business stack",
    "2026 AI software pricing",
    "AI productivity tools",
    "top AI software for business"
  ]
});

export default function FreeVsPaidToolsPage() {
  return <FreeVsPaidToolsClient />;
}
