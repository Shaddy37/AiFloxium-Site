"use client"

import React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { CornerPlusIcons } from "@/components/ui/geometric-elements"

import { motion } from "framer-motion"
import { ArrowUpRight, Zap, Globe, Bot, LayoutTemplate, BrainCircuit } from "lucide-react"

const cardContents = [
  {
    title: "Lead Gen on Autopilot",
    description:
      "You shouldn't be chasing leads manually. I build AI systems that find, qualify, and book them — while you sleep. First response in under 90 seconds.",
    icon: <Bot className="w-6 h-6" />,
  },
  {
    title: "3D Websites Built with AI",
    description:
      "A premium 3D site used to cost $10K and take months. Using Claude Code and Codex I ship the same quality — faster, cheaper, and better than a traditional agency.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Social Content, Automated",
    description:
      "Posting consistently is a full-time job. I build AI pipelines that write, format, and schedule your content across LinkedIn, Instagram, and X — without touching it yourself.",
    icon: <LayoutTemplate className="w-6 h-6" />,
  },
  {
    title: "Carousels at Scale",
    description:
      "Carousels get 3× more reach. I use AI to produce branded, scroll-stopping carousel content — hooks, slides, captions — at a volume no human team can match.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Whatever AI Can Do for Your Business — I'll Build It",
    description:
      "CRM automation, invoice processing, internal tools, custom GPTs, voice agents, content pipelines — I find the right tool (Claude Code, Codex, n8n, Make, or anything else) and ship the system.",
    icon: <BrainCircuit className="w-6 h-6" />,
  },
]

const PlusCard: React.FC<{
  className?: string
  title: string
  description: string
  icon?: React.ReactNode
  index: number
}> = ({
  className = "",
  title,
  description,
  icon,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "liquid-glass rounded-2xl p-8 min-h-[240px] flex flex-col justify-between group transition-all duration-500 hover:shadow-[0_12px_40px_rgba(255,255,255,0.05)]",
        index === 4
          ? "border-brand-orange/30 bg-brand-orange/[0.02] hover:border-brand-orange/60 hover:bg-brand-orange/[0.05]"
          : "hover:border-brand-orange/30",
        className
      )}
    >
      <Link href="/services" className="h-full flex flex-col justify-between">
        <CornerPlusIcons className="opacity-40 group-hover:opacity-100 transition-opacity text-white" />

        {/* Icon and Title */}
        <div className="relative z-10 space-y-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white liquid-glass border border-white/10 group-hover:bg-brand-orange/20 transition-all duration-500 drop-shadow-md">
            {icon}
          </div>
          <h3
            className="text-2xl font-black font-heading tracking-tighter text-white uppercase group-hover:text-brand-orange transition-colors duration-300 drop-shadow-md"
            style={{ textShadow: "0px 2px 10px rgba(0,0,0,0.8)" }}
          >
            {title}
          </h3>
          <p
            className="text-zinc-300 text-lg leading-relaxed font-medium group-hover:text-white transition-colors drop-shadow-md"
            style={{ textShadow: "0px 2px 10px rgba(0,0,0,0.8)" }}
          >
            {description}
          </p>
        </div>

        {/* Action Link */}
        <div className="mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-orange/80 group-hover:text-brand-orange transition-colors drop-shadow-md">
          See how it works <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </Link>
    </motion.div>
  )
}

export default function RuixenBentoCards() {
  return (
    <section id="bottlenecks" data-theme="dark" className="bg-black relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/story_video_2.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
      </div>

      <div className="mx-auto container py-32 px-6 relative z-10">

        {/* Narrative Header */}
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-12 h-[1px] bg-brand-plum/30" />
            <h2 className="text-white tracking-[0.3em] font-black text-xs uppercase drop-shadow-md">
              What I Do For Your Business
            </h2>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-heading font-black text-white tracking-tighter leading-[0.85] mb-10 uppercase drop-shadow-xl"
            style={{ textShadow: "0px 4px 20px rgba(0,0,0,0.8)" }}
          >
            YOUR BUSINESS<br />
            <span className="relative inline-block mt-4">
              <span className="text-brush text-5xl md:text-8xl lg:text-9xl text-brand-orange">RUNS ON AI.</span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-1 bg-brand-orange/50 rounded-full"
              />
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-zinc-200 font-medium leading-tight max-w-2xl drop-shadow-md"
            style={{ textShadow: "0px 2px 10px rgba(0,0,0,0.8)" }}
          >
            Tell me what you want — leads, a website, content, automation, anything.
            I implement AI to make it happen. No fluff, no templates. Just results.
          </motion.p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4 md:gap-6">
          <PlusCard {...cardContents[0]} index={0} className="lg:col-span-3 lg:row-span-2" />
          <PlusCard {...cardContents[1]} index={1} className="lg:col-span-3 lg:row-span-2" />
          <PlusCard {...cardContents[2]} index={2} className="lg:col-span-4 lg:row-span-1" />
          <PlusCard {...cardContents[3]} index={3} className="lg:col-span-2 lg:row-span-1" />
          <PlusCard {...cardContents[4]} index={4} className="lg:col-span-6 lg:row-span-1 border-brand-orange/30 bg-brand-orange/[0.05] hover:border-brand-orange/60 hover:bg-brand-orange/[0.1]" />
        </div>

        {/* Section Footer Heading */}
        <div className="max-w-4xl ml-auto text-right px-4 mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2
              className="text-5xl md:text-7xl font-black font-heading tracking-tighter text-white mb-6 uppercase leading-[0.9] drop-shadow-xl"
              style={{ textShadow: "0px 4px 20px rgba(0,0,0,0.8)" }}
            >
              Any AI tool.<br />
              <span className="text-brush text-4xl md:text-6xl lg:text-7xl mt-2 text-brand-orange">Any problem.</span>
            </h2>
            <p
              className="text-zinc-300 text-2xl font-medium max-w-2xl ml-auto leading-tight drop-shadow-md"
              style={{ textShadow: "0px 2px 10px rgba(0,0,0,0.8)" }}
            >
              Claude Code, Codex, n8n, Make, custom GPTs — I pick whatever gets
              you the result. You don&apos;t need to know the tools. You just need the outcome.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.3em] text-white hover:text-brand-orange transition-colors group drop-shadow-md"
            >
              See what I can build <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
