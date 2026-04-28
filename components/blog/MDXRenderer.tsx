"use client";

import React, { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { PremiumCTA } from "./PremiumCTA";
import { ImpactStats } from "./ImpactStats";
import { BlogArchitecture } from "../sections/BlogArchitecture";
import Link from "next/link";

interface MDXRendererProps {
  code: string;
}

const components = {
  h1: (props: any) => (
    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[0.9] uppercase" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6 mt-16 flex items-center gap-4" {...props}>
      <span className="w-8 h-[1px] bg-zinc-800" />
      {props.children}
    </h2>
  ),
  h3: (props: any) => (
    <h3 className="text-2xl font-bold text-white tracking-tight mb-4 mt-8" {...props} />
  ),
  p: (props: any) => (
    <p className="text-lg leading-relaxed text-zinc-400 mb-6 font-medium" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-none space-y-4 mb-8" {...props} />
  ),
  li: (props: any) => (
    <li className="flex items-start gap-3 text-zinc-400 text-lg group" {...props}>
      <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-3 group-hover:bg-white transition-colors" />
      <span>{props.children}</span>
    </li>
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-2 border-zinc-800 pl-8 my-12 italic text-xl md:text-2xl text-zinc-400 leading-relaxed font-light" {...props} />
  ),
  a: (props: any) => {
    if (!props.href) return <span {...props}>{props.children}</span>;
    return (
      <Link className="text-white underline underline-offset-4 hover:text-zinc-300 transition-colors" href={props.href}>
        {props.children}
      </Link>
    );
  },
  code: (props: any) => (
    <code className="bg-zinc-900 border border-white/5 px-1.5 py-0.5 rounded text-sm font-mono text-zinc-300" {...props} />
  ),
  PremiumCTA,
  ImpactStats,
  BlogArchitecture,
};

export function MDXRenderer({ code }: MDXRendererProps) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  
  return (
    <div className="mdx-content">
      <Component components={components as any} />
    </div>
  );
}
