"use client";

import React, { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Image from "next/image";
import { PremiumCTA } from "./PremiumCTA";
import { ImpactStats } from "./ImpactStats";
import { CodeBlock } from "./CodeBlock";
import { PostFigurePlaceholder } from "./PostFigurePlaceholder";
import { BlogArchitecture } from "../sections/BlogArchitecture";
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
      className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9] uppercase text-black"
      id={props.id ?? slugify(props.children)}
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="text-3xl md:text-4xl font-bold tracking-tight mb-6 mt-16 flex items-center gap-4 text-black"
      id={props.id ?? slugify(props.children)}
      {...props}
    >
      <span className="w-8 h-[1px] bg-brand-plum/30" />
      {props.children}
    </h2>
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="text-2xl font-bold tracking-tight mb-4 mt-8 text-black"
      id={props.id ?? slugify(props.children)}
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mb-6 text-lg font-medium leading-relaxed text-black" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="mb-8 list-disc space-y-4 pl-6 text-lg text-black marker:text-brand-plum" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="mb-8 list-decimal space-y-4 pl-6 text-lg text-black marker:font-bold marker:text-brand-plum" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="pl-1 text-black" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="border-l-2 border-brand-plum/30 pl-8 my-12 italic text-xl md:text-2xl text-zinc-900 leading-relaxed font-light" {...props} />
  ),
  aside: (props: ComponentPropsWithoutRef<"aside">) => (
    <aside className="my-12 rounded-[2rem] border border-zinc-200 bg-zinc-50 px-6 py-6 text-black shadow-sm md:px-8" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => {
    if (!props.href) return <span {...props}>{props.children}</span>;
    if (/^https?:\/\//.test(props.href)) {
      return (
        <a
          className="font-bold text-brand-plum underline underline-offset-4 transition-colors hover:text-brand-orange"
          href={props.href}
          rel="noreferrer"
          target="_blank"
        >
          {props.children}
        </a>
      );
    }
    return (
      <Link className="underline underline-offset-4 text-brand-plum hover:text-brand-orange transition-colors font-bold" href={props.href}>
        {props.children}
      </Link>
    );
  },
  code: (props: ComponentPropsWithoutRef<"code">) => {
    if (props.className?.startsWith("language-")) {
      return <code {...props} />;
    }
    return (
      <code className="bg-brand-plum/5 border border-brand-plum/10 px-1.5 py-0.5 rounded text-sm font-mono text-brand-plum" {...props} />
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
    <div className="my-12 p-8 rounded-3xl bg-brand-plum/5 border border-brand-plum/10 relative overflow-hidden shadow-sm">
      <div className="absolute top-0 left-0 w-2 h-full bg-brand-plum" />
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-plum/60 mb-4 font-black">Executive Summary // TL;DR</div>
      <div className="text-xl font-bold text-brand-plum leading-relaxed">
        {children}
      </div>
    </div>
  ),
  SectionHeading: ({ title, subtitle, number, id }: { title: string, subtitle?: string, number?: string, id?: string }) => (
    <div className="mt-16 md:mt-20 mb-8 group" id={id}>
      <div className="flex items-center gap-4 mb-4">
        {number && <span className="text-sm font-mono text-brand-plum/40 tracking-tighter font-black">{number}</span>}
        <span className="h-[1px] flex-1 bg-brand-plum/10 group-hover:bg-brand-plum/30 transition-colors" />
      </div>
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none mb-2 text-brand-plum">
        {title}
      </h2>
      {subtitle && <p className="text-sm font-mono uppercase tracking-[0.2em] text-brand-plum/60 font-black">{subtitle}</p>}
    </div>
  ),
  TableOfContents: ({ items }: { items: { title: string, id: string }[] }) => (
    <nav className="my-12 p-8 rounded-3xl border border-brand-plum/10 bg-brand-plum/5">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-plum mb-8 underline decoration-brand-plum/20 font-black">Navigation Architecture</div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {items.map((item, i) => (
          <li key={i} className="group flex items-center gap-4 border-b border-brand-plum/5 pb-2">
            <span className="text-[10px] font-mono text-brand-plum/30 group-hover:text-brand-plum transition-colors font-black">0{i+1}</span>
            <a href={`#${item.id}`} className="text-sm font-bold uppercase tracking-tight text-brand-plum hover:text-brand-orange transition-colors">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  ),
  img: (props: ComponentPropsWithoutRef<"img">) => (
    <div className="my-10 relative rounded-[2.5rem] overflow-hidden border border-zinc-100 shadow-lg">
      <Image
        src={props.src || '/og-image.jpg'}
        alt={props.alt || ''}
        width={1600}
        height={900}
        className="h-auto w-full object-cover hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 768px) 100vw, 900px"
      />
    </div>
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="my-12 relative group">
      {/* Mobile Scroll Indicator */}
      <div className="md:hidden flex items-center justify-between px-6 py-3 bg-brand-plum/5 border border-brand-plum/10 rounded-t-[2rem] mb-[-1px]">
        <span className="text-[10px] font-mono uppercase tracking-widest text-brand-plum font-black">Swipe to Explore</span>
        <ArrowRight className="w-3 h-3 text-brand-plum animate-pulse" />
      </div>
      
      <div className="overflow-x-auto rounded-b-[2rem] md:rounded-[2.5rem] border border-zinc-200 shadow-2xl bg-white">
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
  PostFigurePlaceholder,
};

export function MDXRenderer({ code }: MDXRendererProps) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  
  return (
    <div className="mdx-content">
      <Component components={components as any} />
    </div>
  );
}
