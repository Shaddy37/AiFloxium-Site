"use client";

import React, { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { PremiumCTA } from "./PremiumCTA";
import { ImpactStats } from "./ImpactStats";
import { BlogArchitecture } from "../sections/BlogArchitecture";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

interface MDXRendererProps {
  code: string;
}

type MDXComponentProps = ComponentPropsWithoutRef<"h1">;

const components = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[0.9] uppercase" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6 mt-16 flex items-center gap-4" {...props}>
      <span className="w-8 h-[1px] bg-brand-plum/30" />
      {props.children}
    </h2>
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-2xl font-bold text-white tracking-tight mb-4 mt-8" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="text-lg leading-relaxed text-zinc-400 mb-6 font-medium" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-none space-y-4 mb-8" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="flex items-start gap-3 text-zinc-400 text-lg group" {...props}>
      <span className="w-1.5 h-1.5 rounded-full bg-brand-plum/30 mt-3 group-hover:bg-brand-orange transition-colors" />
      <span>{props.children}</span>
    </li>
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="border-l-2 border-brand-plum/30 pl-8 my-12 italic text-xl md:text-2xl text-zinc-400 leading-relaxed font-light" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => {
    if (!props.href) return <span {...props}>{props.children}</span>;
    return (
      <Link className="text-white underline underline-offset-4 hover:text-brand-orange transition-colors" href={props.href}>
        {props.children}
      </Link>
    );
  },
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code className="bg-brand-plum/10 border border-brand-plum/20 px-1.5 py-0.5 rounded text-sm font-mono text-zinc-300" {...props} />
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
