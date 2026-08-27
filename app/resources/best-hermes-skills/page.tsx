import { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import BestHermesSkillsClient from "./BestHermesSkillsClient";

export const metadata: Metadata = buildPageMetadata({
  title: "Best Hermes Skills in 2026: The 17 I Would Install First | AIFLOXIUM",
  description:
    "The 17 Hermes agent skills worth installing in 2026, with live star counts, install commands, day-one order, and the four I would skip at first.",
  path: "/resources/best-hermes-skills",
  keywords: [
    "Hermes skills",
    "best Hermes skills",
    "Hermes agent skills",
    "agent skills 2026",
    "how to install Hermes skills",
    "Hermes Agent setup",
    "what are agent skills",
    "Hermes skills install command",
    "best agent skills for coding",
    "agent skill for YouTube transcripts",
    "how to remove AI writing tells",
    "agent skills star count",
    "oh-my-hermes vs superpowers",
    "do agent skills use context window",
    "best free agent skills",
    "Hermes Agent Nous Research skills"
  ]
});

export default function BestHermesSkillsPage() {
  return <BestHermesSkillsClient />;
}
