"use client";

import React, { useState, useEffect } from "react";
import { Filter, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All FAQs",
  "Pricing & Access",
  "Security & Risk",
  "Architecture & VM",
  "Benchmarks",
];

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  "Pricing & Access": ["price", "pricing", "cost", "seat", "tier", "subscription", "supergrok", "cursor", "dollar", "$", "access", "commercial"],
  "Security & Risk": ["security", "risk", "credential", "delegation", "prompt", "injection", "attack", "safety", "permissions", "beta", "privacy"],
  "Architecture & VM": ["architecture", "computer", "cloud", "vm", "mcp", "persistent", "linux", "macos", "background", "protocol", "grok bot", "system"],
  "Benchmarks": ["benchmark", "osworld", "completion", "ceiling", "21%", "accurate", "measured", "score", "test", "opus", "claude"],
};

export const FAQFilter = ({ className }: { className?: string }) => {
  const [activeCategory, setActiveCategory] = useState("All FAQs");

  const filterAccordionItems = (category: string) => {
    setActiveCategory(category);

    const faqElements = document.querySelectorAll<HTMLElement>('[data-faq-item="true"]');
    faqElements.forEach((el) => {
      if (category === "All FAQs") {
        el.style.display = "";
        return;
      }
      const keywords = CATEGORY_KEYWORDS[category] || [];
      const contentText = el.innerText.toLowerCase();
      const isMatch = keywords.some((kw) => contentText.includes(kw));
      el.style.display = isMatch ? "" : "none";
    });
  };

  return (
    <div className={cn("my-8 space-y-3", className)}>
      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7B2CBF] font-bold">
        <Filter className="w-4 h-4 text-[#7B2CBF]" />
        <span>Filter Topics:</span>
      </div>

      {/* Horizontal Scrollable Pills Container for Mobile */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap -mx-2 px-2 sm:mx-0 sm:px-0">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => filterAccordionItems(cat)}
              className={cn(
                "whitespace-nowrap px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all flex items-center gap-2 cursor-pointer shrink-0 sm:shrink active:scale-95",
                isActive
                  ? "bg-[#7B2CBF] text-white shadow-lg shadow-[#7B2CBF]/30 border border-[#7B2CBF]"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200"
              )}
            >
              {isActive && <Check className="w-3.5 h-3.5 text-white" />}
              <span>{cat}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
