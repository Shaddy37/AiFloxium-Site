"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const integrations = [
  "https://cdn-icons-png.flaticon.com/512/2111/2111615.png", // WhatsApp
  "https://cdn-icons-png.flaticon.com/512/906/906334.png", // Telegram
  "https://cdn-icons-png.flaticon.com/512/2111/2111616.png", // Discord
  "https://cdn-icons-png.flaticon.com/512/5968/5968854.png", // n8n
  "https://cdn-icons-png.flaticon.com/512/732/732221.png", // OpenAI
  "https://cdn-icons-png.flaticon.com/512/733/733609.png", // Claude
  "https://cdn-icons-png.flaticon.com/512/5969/5969023.png", // Slack
  "https://cdn-icons-png.flaticon.com/512/4922/4922079.png", // Stripe
  "https://cdn-icons-png.flaticon.com/512/882/882280.png", // GitHub
  "https://cdn-icons-png.flaticon.com/512/881/881366.png", // Notion
  "https://cdn-icons-png.flaticon.com/512/565/565619.png", // Airtable
  "https://cdn-icons-png.flaticon.com/512/3480/3480856.png", // Make
  "https://cdn-icons-png.flaticon.com/512/349/349228.png", // Shopify
  "https://cdn-icons-png.flaticon.com/512/518/518505.png", // Zapier
  "https://cdn-icons-png.flaticon.com/512/270/270798.png", // PostgreSQL
  "https://cdn-icons-png.flaticon.com/512/888/888879.png", // TypeScript
  "https://cdn-icons-png.flaticon.com/512/281/281763.png", // Python
  "https://cdn-icons-png.flaticon.com/512/174/174857.png", // Google
];

export default function IntegrationsSection() {
  return (
    <section className="max-w-7xl mx-auto my-20 px-6 grid md:grid-cols-2 gap-10 items-center border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2rem] bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-sm">
      {/* Left Side */}
      <div>
        <p className="uppercase text-sm font-bold tracking-[0.2em] text-zinc-500 dark:text-zinc-500 mb-4">
          Ecosystem
        </p>
        <h2 className="text-5xl md:text-6xl font-black mt-2 mb-6 leading-tight tracking-tighter">
          Supercharge your <span className="bg-gradient-to-r from-zinc-400 to-zinc-100 bg-clip-text text-transparent">workflow</span>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-lg font-medium leading-relaxed">
           Scale your operations with autonomous agentic workflows. We integrate the world&apos;s most powerful AI models directly into your tech stack.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="rounded-2xl px-8 font-bold">
            <Link href="/services">Our Capabilities</Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="rounded-2xl px-8 border-zinc-200 dark:border-zinc-800 font-bold">
            <Link href="/services">Get Built →</Link>
          </Button>
        </div>
      </div>


      {/* Right Side */}
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-6">
        {integrations.map((url, idx) => (
          <div
            key={idx}
            className="relative w-14 h-14 p-2.5 bg-white dark:bg-zinc-300 shadow-md border border-zinc-200 dark:border-zinc-700 group flex items-center justify-center rounded-full hover:scale-110 transition-transform duration-300"
          >
            <Image
              src={url}
              alt={`integration-${idx}`}
              width={40}
              height={40}
              unoptimized
              className="object-contain filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
