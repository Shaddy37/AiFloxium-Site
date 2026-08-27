"use client";
/* eslint-disable react-hooks/static-components */

import React, { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Image from "next/image";
import { PremiumCTA } from "./PremiumCTA";
import { ImpactStats } from "./ImpactStats";
import { CodeBlock } from "./CodeBlock";
import { PostFigurePlaceholder } from "./PostFigurePlaceholder";
import { BlogArchitecture } from "../sections/BlogArchitecture";
import { SelfHealingFlowchart } from "./SelfHealingFlowchart";
import { LeadMagnetCTA } from "./LeadMagnetCTA";
import { Accordion } from "./Accordion";
import { AuthorCard } from "./AuthorCard";
import { AuthorSection } from "./AuthorSection";
import { FAQSection } from "./FAQSection";
import { FAQSchema } from "../mdx/FAQSchema";
import { HowToSchema } from "../mdx/HowToSchema";
import { AgentCostCalculator } from "./AgentCostCalculator";
import { AgentBenchmarkVisualizer } from "./AgentBenchmarkVisualizer";
import { BlogQuickActions } from "./BlogQuickActions";
import { FAQFilter } from "./FAQFilter";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

interface MDXRendererProps {
  code: string;
}

function slugify(children: React.ReactNode): string {
  const value = React.Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child);
      }

      if (React.isValidElement<{ children?: React.ReactNode }>(child)) {
        return slugify(child.props.children);
      }

      return "";
    })
    .join("");

  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const components = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9] uppercase text-[#7B2CBF]"
      id={props.id ?? slugify(props.children)}
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="text-3xl md:text-4xl font-bold tracking-tight mb-6 mt-16 flex items-center gap-4 text-[#7B2CBF]"
      id={props.id ?? slugify(props.children)}
      {...props}
    >
      <span className="w-8 h-[1px] bg-[#7B2CBF]/30" />
      {props.children}
    </h2>
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="text-2xl font-bold tracking-tight mb-4 mt-8 text-[#7B2CBF]"
      id={props.id ?? slugify(props.children)}
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p 
      className="mb-6 text-base md:text-lg font-normal leading-relaxed text-black" 
      {...props} 
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul 
      className="mb-8 list-disc space-y-3 pl-6 text-base md:text-lg text-black marker:text-[#7B2CBF]" 
      {...props} 
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol 
      className="mb-8 list-decimal space-y-3 pl-6 text-base md:text-lg text-black marker:font-bold marker:text-[#7B2CBF]" 
      {...props} 
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="pl-1 text-black font-normal leading-relaxed" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote 
      className="border-l-4 border-[#7B2CBF] pl-8 my-12 italic text-xl md:text-2xl text-black leading-relaxed font-normal bg-[#7B2CBF]/[0.03] py-6 pr-6 rounded-r-3xl" 
      {...props} 
    />
  ),
  aside: (props: ComponentPropsWithoutRef<"aside">) => (
    <aside 
      className="my-12 rounded-[2rem] border-l-4 border-[#7B2CBF] border-y border-r border-zinc-200 bg-zinc-50/50 px-6 py-8 text-black shadow-sm md:px-8 font-normal leading-relaxed" 
      {...props} 
    />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => {
    if (!props.href) return <span {...props}>{props.children}</span>;
    if (/^https?:\/\//.test(props.href)) {
      return (
        <a
          className="font-bold text-[#7B2CBF] hover:text-[#7B2CBF]/80 underline underline-offset-4 transition-colors"
          href={props.href}
          rel="noreferrer"
          target="_blank"
        >
          {props.children}
        </a>
      );
    }
    return (
      <Link className="underline underline-offset-4 text-[#7B2CBF] hover:text-[#7B2CBF]/80 transition-colors font-bold" href={props.href}>
        {props.children}
      </Link>
    );
  },
  code: (props: ComponentPropsWithoutRef<"code">) => {
    if (props.className?.startsWith("language-")) {
      return <code {...props} />;
    }
    return (
      <code className="bg-zinc-100 border border-zinc-200 px-1.5 py-0.5 rounded text-sm font-mono text-[#7B2CBF]" {...props} />
    );
  },
  pre: (props: ComponentPropsWithoutRef<"pre">) => {
    const child = React.Children.toArray(props.children)[0] as React.ReactElement<{
      children?: string;
      className?: string;
    }> | undefined;

    if (!React.isValidElement(child)) {
      return <pre {...props} />;
    }

    const language = child.props.className?.replace("language-", "") ?? "text";
    const code = typeof child.props.children === "string" ? child.props.children : "";

    return <CodeBlock code={code} language={language} />;
  },
  hr: () => <hr className="my-14 border-zinc-200" />,
  TLDR: ({ children }: { children: React.ReactNode }) => (
    <div className="my-12 p-8 rounded-3xl bg-[#7B2CBF]/[0.03] border border-[#7B2CBF]/20 relative overflow-hidden shadow-sm">
      <div className="absolute top-0 left-0 w-2.5 h-full bg-[#7B2CBF]" />
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#7B2CBF] mb-4 font-black">Executive Summary // TL;DR</div>
      <div className="text-xl font-bold text-black leading-relaxed">
        {children}
      </div>
    </div>
  ),
  SectionHeading: ({ title, subtitle, number, id }: { title: string, subtitle?: string, number?: string, id?: string }) => (
    <div className="mt-16 md:mt-20 mb-8 group">
      <div className="flex items-center gap-4 mb-4">
        {number && <span className="text-sm font-mono text-[#7B2CBF] tracking-tighter font-black">{number}</span>}
        <span className="h-[1px] flex-1 bg-[#7B2CBF]/20 group-hover:bg-[#7B2CBF]/50 transition-colors" />
      </div>
      <h2 id={id} className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none mb-2 text-[#7B2CBF]">
        {title}
      </h2>
      {subtitle && <p className="text-sm font-mono uppercase tracking-[0.2em] text-[#7B2CBF]/70 font-bold">{subtitle}</p>}
    </div>
  ),
  TableOfContents: ({ items }: { items: { title: string, id: string }[] }) => (
    <nav className="my-12 p-8 rounded-3xl border border-[#7B2CBF]/20 bg-[#7B2CBF]/[0.03]">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#7B2CBF] mb-8 underline decoration-[#7B2CBF]/20 font-black">Navigation Architecture</div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {items.map((item, i) => (
          <li key={i} className="group flex items-center gap-4 border-b border-zinc-100 pb-2">
            <span className="text-[10px] font-mono text-[#7B2CBF]/50 group-hover:text-[#7B2CBF] transition-colors font-black">0{i+1}</span>
            <a href={`#${item.id}`} className="text-sm font-bold uppercase tracking-tight text-black hover:text-[#7B2CBF] transition-colors">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  ),
  img: (props: ComponentPropsWithoutRef<"img">) => (
    <span className="block my-10 relative rounded-[2.5rem] overflow-hidden border border-zinc-100 shadow-lg">
      <Image
        src={String(props.src) || '/og-image.jpg'}
        alt={props.alt || ''}
        width={1600}
        height={900}
        className="h-auto w-full object-cover hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 768px) 100vw, 900px"
      />
    </span>
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="my-12 relative group">
      {/* Mobile Scroll Indicator */}
      <div className="md:hidden flex items-center justify-between px-6 py-3 bg-brand-plum/5 border border-brand-plum/10 rounded-t-[2rem] mb-[-1px]">
        <span className="text-[10px] font-mono uppercase tracking-widest text-brand-plum font-black">Swipe to Explore</span>
        <ArrowRight className="w-3 h-3 text-brand-plum animate-pulse" />
      </div>
      
      <div className="overflow-x-auto rounded-b-[2rem] md:rounded-[2.5rem] border border-zinc-200 bg-white">
        <table className="w-full border-collapse text-left min-w-[700px]" {...props} />
      </div>
      
      {/* Decorative Glow similar to CTA */}
      <div className="absolute -inset-4 bg-brand-plum/5 blur-2xl rounded-[3rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  ),
  thead: (props: ComponentPropsWithoutRef<"thead">) => (
    <thead className="bg-zinc-50 border-b border-zinc-200" {...props} />
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th className="px-8 py-6 text-sm font-mono uppercase tracking-[0.3em] font-black text-brand-plum border-r border-zinc-100 last:border-none" {...props} />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="px-8 py-6 text-[15px] font-bold text-black border-r border-zinc-100 last:border-r-0" {...props} />
  ),
  tr: (props: ComponentPropsWithoutRef<"tr">) => (
    <tr className="border-b border-zinc-100 last:border-none hover:bg-zinc-50/50 transition-colors" {...props} />
  ),
  PremiumCTA,
  ImpactStats,
  BlogArchitecture,
  SelfHealingFlowchart,
  PostFigurePlaceholder,
  LeadMagnetCTA,
  Accordion,
  AuthorCard,
  AuthorSection,
  FAQSection,
  FAQSchema,
  HowToSchema,
  AgentCostCalculator,
  AgentBenchmarkVisualizer,
  BlogQuickActions,
  FAQFilter,
};

export function MDXRenderer({ code }: MDXRendererProps) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  
  return (
    <div className="mdx-content">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <Component components={components as any} />
    </div>
  );
}
