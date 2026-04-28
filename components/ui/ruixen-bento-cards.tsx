"use client"

import React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { CornerPlusIcons } from "@/components/ui/geometric-elements"

import { motion } from "framer-motion"
import { ArrowUpRight, Zap, Target, Layers, Bot, BarChart3 } from "lucide-react"

const cardContents = [
  {
    title: "The Silent Cost of 'Manual'",
    description:
      "Every hour your team spends on data entry, lead sorting, or repetitive follow-ups is an hour stolen from high-level strategy. Deterministic n8n logic replaces human error, and it's automated.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: "SDRs That Never Sleep",
    description:
      "60% of leads vanish due to slow response times. Vapi-powered voice agents work 24/7, qualifying and booking appointments with zero latency and perfect brand recall.",
    icon: <Bot className="w-6 h-6" />,
  },
  {
    title: "Fragmented Tech Stacks",
    description:
      "Your tools aren't talking to each other, creating data silos that silently bleed revenue. The fix: an invisible backbone that forces your entire stack to work as one unified system.",
    icon: <Zap className="w-6 h-6" />,
  },  
  {
    title: "Ghosting & Lead Decay",
    description:
      "Leads go cold in minutes, not hours. Autonomous social engines engage prospects the moment they show intent on LinkedIn or X, ensuring you're always first to the table.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Deterministic ROI",
    description:
      "Stop gambling on AI prompts that hallucinate. Production-ready systems with strict logic gates and 80% automation guarantees. If it isn't measurable, it doesn't ship.",
    icon: <BarChart3 className="w-6 h-6" />,
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
        "relative border border-dashed border-gray-200 rounded-2xl p-8 bg-white/50 backdrop-blur-sm min-h-[240px]",
        "flex flex-col justify-between group hover:border-brand-plum/30 hover:bg-white transition-all duration-500",
        "shadow-[0_0_0_1px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(88,28,135,0.1)]",
        className
      )}
    >
      <Link href="/services" className="h-full flex flex-col justify-between">
        <CornerPlusIcons className="opacity-20 group-hover:opacity-100 transition-opacity" />
        
        {/* Icon and Title */}
        <div className="relative z-10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-brand-plum/5 flex items-center justify-center text-brand-plum group-hover:bg-brand-plum group-hover:text-white transition-all duration-500">
            {icon}
          </div>
          <h3 className="text-2xl font-black font-heading tracking-tighter text-brand-plum uppercase group-hover:text-brand-orange transition-colors duration-300">
            {title}
          </h3>
          <p className="text-zinc-500 text-lg leading-relaxed font-medium group-hover:text-zinc-700 transition-colors">{description}</p>
        </div>

        {/* Action Link */}
        <div className="mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-plum/40 group-hover:text-brand-orange transition-colors">
          Analyze Vector <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </Link>
    </motion.div>
  )
}

export default function RuixenBentoCards() {
  return (
    <section id="bottlenecks" className="bg-white border-y border-gray-100 relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #581C87 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      
      <div className="mx-auto container border-x border-gray-100 py-32 border-t-0 px-6 relative z-10">
        
        {/* Narrative Header */}
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-12 h-[1px] bg-brand-plum/30" />
            <h2 className="text-brand-plum tracking-[0.3em] font-black text-xs uppercase">
              Operational Forensic Audit
            </h2>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-heading font-black text-brand-plum tracking-tighter leading-[0.85] mb-10 uppercase"
          >
            YOUR REVENUE IS <br /> 
            <span className="relative inline-block mt-4">
              <span className="text-brush text-5xl md:text-8xl lg:text-9xl">LEAKING.</span>
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-1 bg-brand-orange/20 rounded-full"
              />
            </span>
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-zinc-600 font-medium leading-tight max-w-2xl"
          >
            You do not have a talent problem. You have systems that were never built to scale. I find exactly where you are losing time and money, then I build the fix.
          </motion.p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4 md:gap-6">
          <PlusCard {...cardContents[0]} index={0} className="lg:col-span-3 lg:row-span-2 bg-gray-50/30" />
          <PlusCard {...cardContents[1]} index={1} className="lg:col-span-3 lg:row-span-2 bg-gray-50/30" />
          <PlusCard {...cardContents[2]} index={2} className="lg:col-span-4 lg:row-span-1 bg-gray-50/30" />
          <PlusCard {...cardContents[3]} index={3} className="lg:col-span-2 lg:row-span-1 bg-gray-50/30" />
          <PlusCard {...cardContents[4]} index={4} className="lg:col-span-6 lg:row-span-1 border-brand-orange/20 bg-brand-orange/[0.02] hover:border-brand-orange/40 hover:bg-brand-orange/[0.04]" />
        </div>

        {/* Section Footer Heading */}
        <div className="max-w-4xl ml-auto text-right px-4 mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-black font-heading tracking-tighter text-brand-plum mb-6 uppercase leading-[0.9]">
              Built for scale. <br /> 
              <span className="text-brush text-4xl md:text-6xl lg:text-7xl mt-2">Engineered for dominance.</span>
            </h2>
            <p className="text-zinc-500 text-2xl font-medium max-w-2xl ml-auto leading-tight">
              I don&apos;t sell &apos;AI tools&apos;. I sell hours returned to your day and certainty in your bottom line. Let&apos;s build the systems that make your competition irrelevant.
            </p>
            <Link 
              href="/services"
              className="inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.3em] text-brand-plum hover:text-brand-orange transition-colors group"
            >
              Explore the core skills <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
