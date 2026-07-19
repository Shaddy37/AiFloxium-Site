"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FancyTextHover from "@/components/ui/fancy-text-hover";
import {
  BRAND_NAME,
  CALENDLY_URL,
  LINKEDIN_URL,
  PERSON_NAME,
  X_URL
} from "@/lib/site";

import { LazyVideo } from "@/components/ui/lazy-video";

const SOCIAL_LINKS = [
  { label: "Twitter", href: X_URL },
  { label: "LinkedIn", href: LINKEDIN_URL },
];

const socialIconStyle = { backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", background: "rgba(0, 0, 0, 0.4)" } as const;

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LazyVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          className="object-cover w-full h-full opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
      </div>

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 border-b border-white/10">
        <p className="text-white/50 tracking-[0.2em] font-semibold text-[10px] sm:text-xs uppercase text-center mb-10 flex items-center justify-center gap-4 font-inter">
          <span className="w-8 h-[1px] bg-white/10" />
          Find me online
          <span className="w-8 h-[1px] bg-white/10" />
        </p>
        <FancyTextHover links={SOCIAL_LINKS} />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-2">
            <Link href="/" className="group mb-6 inline-block">
              <span className="text-2xl font-dancing text-white tracking-wide hover:text-white/80 transition-colors duration-300 inline-block">
                Aifloxium
              </span>
            </Link>
            <p className="text-zinc-400 text-base max-w-sm mb-4 font-inter font-light">
              <span className="text-white font-semibold">{PERSON_NAME}</span> is the
              automation engineer behind {BRAND_NAME}.
            </p>
            <p className="text-zinc-500 text-sm max-w-sm mb-8 font-inter font-light">
              I build automation systems, internal tools, and product-grade AI
              workflows for startups and growing businesses.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center liquid-glass border border-white/10 hover:bg-white hover:border-white hover:text-black transition-[background-color,border-color,transform] duration-200 active:scale-95"
                style={socialIconStyle}
                aria-label="Twitter / X profile"
              >
                <span className="font-semibold text-sm text-white font-inter">X</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center liquid-glass border border-white/10 hover:bg-white hover:border-white hover:text-black transition-[background-color,border-color,transform] duration-200 active:scale-95"
                style={socialIconStyle}
                aria-label={`LinkedIn profile of ${PERSON_NAME}`}
              >
                <span className="font-semibold text-sm uppercase text-white font-inter">in</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white/40 font-semibold mb-6 tracking-widest uppercase text-xs font-inter">Services</h3>
            <ul className="flex flex-col gap-4 font-inter text-sm font-light">
              <li><Link href="/services/n8n-workflow-automation" className="text-zinc-400 hover:text-white transition-colors">n8n Workflow Automation</Link></li>
              <li><Link href="/services/vibe-coding" className="text-zinc-400 hover:text-white transition-colors">Product & Tool Builds</Link></li>
              <li><Link href="/services/autonomous-agents" className="text-zinc-400 hover:text-white transition-colors">Autonomous Agents</Link></li>
              <li><Link href="/services/agency-scaling-partner" className="text-zinc-400 hover:text-white transition-colors">Implementation Partner</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white/40 font-semibold mb-6 tracking-widest uppercase text-xs font-inter">Pages</h3>
            <ul className="flex flex-col gap-4 font-inter text-sm font-light">
              <li><Link href="/about" className="text-zinc-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/tools" className="text-zinc-400 hover:text-white transition-colors">Tools</Link></li>
              <li><Link href="/resources" className="text-zinc-400 hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/pricing" className="text-zinc-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="text-zinc-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/projects" className="text-zinc-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between py-8 md:py-12 mb-8 border-t border-white/5 pt-12">
          <h2 className="text-4xl md:text-6xl font-instrument text-white leading-[0.95] tracking-tight mb-6 md:mb-0">
            Ready to <br />
            <span className="font-instrument text-white italic">build?</span>
          </h2>
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-40 w-40 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider flex flex-col items-center justify-center gap-2 group transition-all duration-300 hover:bg-white/90 button-glow shrink-0 active:scale-[0.97]"
          >
            Book a Call
            <ArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-200" />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 pt-4 border-t border-white/5">
          <p>© {new Date().getFullYear()} {BRAND_NAME} by {PERSON_NAME}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-inter font-light">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/dmca" className="hover:text-white transition-colors">DMCA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
