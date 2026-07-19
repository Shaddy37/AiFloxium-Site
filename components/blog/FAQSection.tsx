"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  className?: string;
}

export const FAQSection = ({
  title = "Frequently Asked Questions",
  subtitle = "Got questions? We have answers.",
  faqs,
  className,
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("my-16", className)}
    >
      {/* Section header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-brand-orange" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-plum font-black">
            {subtitle}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black">
          {title}
        </h2>
      </div>

      {/* FAQ items */}
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={cn(
              "rounded-2xl border transition-all duration-300 overflow-hidden",
              openIndex === index
                ? "border-brand-orange/30 bg-brand-orange/5 shadow-lg shadow-brand-orange/10"
                : "border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-md"
            )}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none group"
            >
              <div className="flex items-start gap-4 pr-4">
                <span
                  className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black transition-colors",
                    openIndex === index
                      ? "bg-brand-orange text-white"
                      : "bg-zinc-100 text-zinc-500 group-hover:bg-brand-orange/10 group-hover:text-brand-orange"
                  )}
                >
                  {index + 1}
                </span>
                <span
                  className={cn(
                    "text-lg font-bold transition-colors",
                    openIndex === index ? "text-brand-orange" : "text-black"
                  )}
                >
                  {faq.question}
                </span>
              </div>
              <div
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                  openIndex === index
                    ? "bg-brand-orange text-white rotate-180"
                    : "bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200"
                )}
              >
                <ChevronDown className="h-5 w-5" />
              </div>
            </button>

            <div
              className={cn(
                "transition-all duration-300 ease-in-out",
                openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              )}
            >
              <div className="px-6 pb-6 pl-[4.5rem]">
                <p className="text-black leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Schema markup for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </motion.div>
  );
};