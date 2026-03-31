"use client"

import React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { CornerPlusIcons } from "@/components/ui/geometric-elements"

const cardContents = [
  {
     title: "The Silent Cost of &apos;Manual&apos;",
    description:
      "Every hour your team spends on data entry, lead sorting, or repetitive follow-ups is an hour stolen from high-level strategy. We replace human error with deterministic n8n logic.",
  },
  {
    title: "SDRs That Never Sleep",
    description:
      "Most agencies lose 60% of leads due to slow response times. Our Vapi-powered voice agents qualify and book appointments 24/7 with zero latency and perfect brand recall.",
  },
  {
    title: "Fragmented Tech Stacks",
    description:
       "Your tools aren&apos;t talking to each other, creating &apos;data silos&apos; that kill efficiency. We engineer the &apos;Invisible Backbone&apos;—a multi-agent orchestration layer that forces your entire stack to work as a single, unified organism.",
  },  
  {
    title: "Ghosting & Lead Decay",
    description:
      "Leads go cold in minutes, not hours. We deploy autonomous social engines that engage prospects on LinkedIn and X the moment they show intent, ensuring you're always first to the table.",
  },
       {
     title: "Deterministic ROI",
     description:
       "Stop gambling on &apos;AI prompts&apos; that hallucinate. We build production-ready systems with strict logic gates and 80% automation guarantees. If it isn&apos;t measurable, we don&apos;t ship it.",
   },
]


const PlusCard: React.FC<{
  className?: string
  title: string
  description: string
}> = ({
  className = "",
  title,
  description,
}) => {
  return (
    <div
      className={cn(
        "relative border border-dashed border-zinc-400 dark:border-zinc-700 rounded-lg p-8 bg-white dark:bg-zinc-950 min-h-[240px]",
        "flex flex-col justify-between group hover:bg-zinc-900/50 transition-colors duration-300",
        className
      )}
    ><Link href="/services">
      <CornerPlusIcons />
      {/* Content */}
      <div className="relative z-10 space-y-4">
        <h3 className="text-2xl font-black font-heading tracking-tighter text-gray-900 dark:text-gray-100 uppercase">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-zinc-400 text-lg leading-relaxed font-medium">{description}</p>
      </div></Link>
    </div>
  )
}

export default function RuixenBentoCards() {
  return (
    <section id="bottlenecks" className="bg-white dark:bg-black dark:bg-transparent border-y border-gray-200 dark:border-zinc-800">
      <div className="mx-auto container border-x border-gray-200 dark:border-zinc-800 py-24 border-t-0 px-6">
        
        {/* Narrative Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-zinc-500 tracking-[0.2em] font-medium text-xs md:text-sm uppercase mb-4 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-zinc-700" /> Operational Audit
          </h2>
          <h3 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter leading-[0.9] mb-8">
            STOP LEAKING <br /> <span className="text-gradient">REVENUE.</span>
          </h3>
             <p className="text-xl text-zinc-400 font-medium leading-relaxed">
               Most businesses don&apos;t have a talent problem; they have an infrastructure problem. We identify the friction points in your workflow and eliminate them with deterministic engineering.
             </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-6">
          <PlusCard {...cardContents[0]} className="lg:col-span-3 lg:row-span-2" />
          <PlusCard {...cardContents[1]} className="lg:col-span-3 lg:row-span-2" />
          <PlusCard {...cardContents[2]} className="lg:col-span-4 lg:row-span-1" />
          <PlusCard {...cardContents[3]} className="lg:col-span-2 lg:row-span-1" />
          <PlusCard {...cardContents[4]} className="lg:col-span-6 lg:row-span-1 border-primary/20 bg-primary/5" />
        </div>

        {/* Section Footer Heading */}
        <div className="max-w-3xl ml-auto text-right px-4 mt-20">
          <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tighter text-black dark:text-white mb-6 uppercase">
            Built for scale. <br /> Engineered for dominance.
          </h2>
             <p className="text-gray-600 dark:text-zinc-400 text-xl font-medium">
               We don&apos;t sell &apos;AI tools&apos;. We sell hours returned to your day and certainty in your bottom line. Let&apos;s build the systems that make your competition irrelevant.
             </p>
        </div>
      </div>
    </section>
  )
}
