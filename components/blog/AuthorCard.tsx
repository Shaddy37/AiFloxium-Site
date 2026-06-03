"use client";

import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SocialLink {
  platform: "linkedin" | "twitter" | "github" | "website";
  url: string;
}

interface AuthorCardProps {
  name?: string;
  role?: string;
  bio?: string;
  socials?: SocialLink[];
  className?: string;
}

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const iconMap = {
  linkedin: LinkedinIcon,
  twitter: XIcon,
  github: GithubIcon,
  website: GlobeIcon,
};

export const AuthorCard = ({
  name = "Muhammad Shadab Shams",
  role = "Software Engineer & AI Automation Expert",
  bio = "I architect agentic operating systems and build production-grade AI workflows at AIFLOXIUM. This guide is based on first-hand testing, live deployment experience, and continuous monitoring of the open-source AI landscape.",
  socials = [
    { platform: "linkedin", url: "https://www.linkedin.com/in/muhammad-shadab-shams-8b07132b6/" },
    { platform: "twitter", url: "https://x.com/ShadabLoveAi" },
    { platform: "github", url: "https://github.com/Shaddy37" },
    { platform: "website", url: "https://www.aifloxium.online" },
  ],
  className,
}: AuthorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "my-12 p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-zinc-50 to-white border border-zinc-200/80 relative overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      {/* Decorative vertical gradient bar on left */}
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-brand-plum to-brand-orange" />
      
      {/* Background glow effects on hover */}
      <div className="absolute top-0 right-0 w-52 h-52 bg-brand-plum/5 rounded-full blur-3xl -mr-24 -mt-24 group-hover:bg-brand-plum/10 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-orange/5 rounded-full blur-3xl -ml-20 -mb-20 group-hover:bg-brand-orange/10 transition-colors duration-500" />

      <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6 md:gap-8">
        {/* Avatar Frame */}
        <div className="relative flex-shrink-0">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-brand-plum to-brand-orange p-[2px] shadow-md group-hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              {/* Initials or placeholder icon */}
              <User className="w-10 h-10 md:w-12 md:h-12 text-brand-plum" />
            </div>
          </div>
          <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-brand-orange border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
            ✓
          </span>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <div className="mb-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-plum/60 font-black">
              Author Spotlight
            </span>
            <h4 className="text-2xl font-black text-black tracking-tight leading-tight mt-1">
              {name}
            </h4>
            <p className="text-xs font-mono uppercase tracking-wider text-brand-orange font-bold mt-0.5">
              {role}
            </p>
          </div>
          
          <p className="text-zinc-700 text-base md:text-lg leading-relaxed font-bold mb-6">
            {bio}
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3">
            {socials.map((social, idx) => {
              const Icon = iconMap[social.platform];
              return (
                <Link
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 bg-white text-zinc-600 hover:text-white hover:bg-brand-plum hover:border-brand-plum transition-all duration-300 shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
