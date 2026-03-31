"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import FancyTextHover from "@/components/ui/fancy-text-hover";

const SOCIAL_LINKS = [
  { label: "Twitter",  href: "https://x.com/ShadabLoveAi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-shadab-shams-8b07132b6/" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Structural Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* ── Fancy Social Links ───────────────────────────────── */}
      <div className="container mx-auto px-6 pt-24 pb-16 border-b border-white/5">
        <p className="text-zinc-700 tracking-[0.2em] font-medium text-xs uppercase text-center mb-10 flex items-center justify-center gap-4">
          <span className="w-8 h-[1px] bg-zinc-800" />
          Find us online
          <span className="w-8 h-[1px] bg-zinc-800" />
        </p>
        <FancyTextHover links={SOCIAL_LINKS} />
      </div>

      {/* ── Main Footer Grid ─────────────────────────────────── */}
      <div className="container mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">

          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-black border border-white/20">
                <Image 
                  src="/logo.svg" 
                  alt="AIFLOXIUM" 
                  width={36} 
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-heading font-black tracking-tighter text-white">
                AIFLOXIUM
              </span>
            </Link>
            <p className="text-muted-foreground text-lg max-w-sm mb-8">
              Architecting the intelligent enterprise. We build AI systems and premium digital experiences that scale.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/ShadabLoveAi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Twitter / X"
              >
                <span className="font-bold text-lg">𝕏</span>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-shadab-shams-8b07132b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <span className="font-bold text-lg uppercase font-heading">in</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-wider uppercase text-sm">Services</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/services/n8n-workflow-automation" className="text-muted-foreground hover:text-white transition-colors">n8n Workflow Automation</Link></li>
              <li><Link href="/services/vibe-coding" className="text-muted-foreground hover:text-white transition-colors">Vibe Coding (Claude)</Link></li>
              <li><Link href="/services/autonomous-agents" className="text-muted-foreground hover:text-white transition-colors">Autonomous Agents</Link></li>
              <li><Link href="/services/agency-scaling-partner" className="text-muted-foreground hover:text-white transition-colors">Agency Scaling Partner</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-wider uppercase text-sm">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/resources" className="text-muted-foreground hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="#initiate" className="text-muted-foreground hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

        </div>

        {/* Massive Call to Action */}
        <div className="flex flex-col md:flex-row items-center justify-between py-12 border-y border-white/10 mb-8">
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-6 md:mb-0">
            READY TO <br />
            <span className="text-accent">SCALE?</span>
          </h2>
          <Link
            href="#initiate"
            className="h-40 w-40 rounded-full bg-white text-black font-bold text-lg flex flex-col items-center justify-center gap-2 group hover:bg-zinc-200 transition-colors"
          >
            Let&apos;s Talk
            <ArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground pt-4">
          <p>© {new Date().getFullYear()} Aifloxium AI Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/dmca" className="hover:text-white transition-colors">DMCA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
