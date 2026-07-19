"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({ title, subtitle, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="my-6 rounded-3xl border border-zinc-200 bg-zinc-50/50 overflow-hidden transition-all duration-300 shadow-sm hover:border-zinc-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-8 py-6 text-left focus:outline-none"
      >
        <div className="flex flex-col gap-1 pr-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-plum/60 font-black">
            {subtitle || "Detail Segment"}
          </span>
          <h4 className="text-xl font-extrabold tracking-tight text-black">
            {title}
          </h4>
        </div>
        <div 
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition-transform duration-300 ${
            isOpen ? "rotate-180 text-brand-orange border-brand-orange/30" : "text-zinc-500"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>
      
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[5000px] opacity-100 border-t border-zinc-100 bg-white" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-8 py-6 text-black">
          {children}
        </div>
      </div>
    </div>
  );
}
