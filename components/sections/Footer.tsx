"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FancyTextHover from "@/components/ui/fancy-text-hover";
import {
  BRAND_NAME,
  LINKEDIN_URL,
  PERSON_NAME,
  X_URL
} from "@/lib/site";

const SOCIAL_LINKS = [
  { label: "Twitter", href: X_URL },
  { label: "LinkedIn", href: LINKEDIN_URL },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-bg border-t border-brand-plum/10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-plum/20 to-transparent" />

      <div className="container mx-auto px-6 pt-24 pb-16 border-b border-brand-plum/10">
        <p className="text-brand-plum tracking-[0.2em] font-medium text-xs uppercase text-center mb-10 flex items-center justify-center gap-4">
          <span className="w-8 h-[1px] bg-brand-plum/30" />
          Find me online
          <span className="w-8 h-[1px] bg-brand-plum/30" />
        </p>
        <FancyTextHover links={SOCIAL_LINKS} />
      </div>

      <div className="container mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-2">
            <Link href="/" className="group mb-6 inline-block">
              <span className="text-2xl font-heading font-black tracking-widest uppercase bg-gradient-to-r from-white via-white to-brand-plum bg-clip-text text-transparent drop-shadow-lg hover:from-white hover:to-brand-plum/80 transition-all duration-300 inline-block">
                {BRAND_NAME}
              </span>
            </Link>
            <p className="text-muted-foreground text-lg max-w-sm mb-4">
              <span className="text-white font-bold">{PERSON_NAME}</span> is the
              automation engineer behind {BRAND_NAME}.
            </p>
            <p className="text-muted-foreground text-sm max-w-sm mb-8">
              I build automation systems, internal tools, and product-grade AI
              workflows for startups and growing businesses.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-brand-plum/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-colors"
                aria-label="Twitter / X profile"
              >
                <span className="font-bold text-lg">X</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-brand-plum/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-colors"
                aria-label={`LinkedIn profile of ${PERSON_NAME}`}
              >
                <span className="font-bold text-lg uppercase font-heading">in</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-brand-orange font-bold mb-6 font-heading tracking-wider uppercase text-sm">Services</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/services/n8n-workflow-automation" className="text-muted-foreground hover:text-white transition-colors">n8n Workflow Automation</Link></li>
              <li><Link href="/services/vibe-coding" className="text-muted-foreground hover:text-white transition-colors">Product & Tool Builds</Link></li>
              <li><Link href="/services/autonomous-agents" className="text-muted-foreground hover:text-white transition-colors">Autonomous Agents</Link></li>
              <li><Link href="/services/agency-scaling-partner" className="text-muted-foreground hover:text-white transition-colors">Implementation Partner</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-brand-orange font-bold mb-6 font-heading tracking-wider uppercase text-sm">Pages</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-white transition-colors">About</Link></li>
              <li><Link href="/resources" className="text-muted-foreground hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="#initiate" className="text-muted-foreground hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between py-12 border-y border-brand-plum/10 mb-8">
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-6 md:mb-0">
            READY TO <br />
            <span className="text-brand-orange">BUILD?</span>
          </h2>
          <Link
            href="#initiate"
            className="h-40 w-40 rounded-full bg-brand-orange text-white font-bold text-lg flex flex-col items-center justify-center gap-2 group hover:bg-brand-orange/80 transition-colors shadow-[0_0_50px_rgba(255,107,0,0.2)]"
          >
            Book a Call
            <ArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground pt-4">
          <p>© {new Date().getFullYear()} {BRAND_NAME} by {PERSON_NAME}. All rights reserved.</p>
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
