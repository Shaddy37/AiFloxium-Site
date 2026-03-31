"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils"; 

const items = [
  {
    id: "1",
    title: "Who We Are",
    content:
      "We are architects of the impossible. Aifloxium bridges the gap between human creativity and machine intelligence — building autonomous systems that think, adapt, and execute.",
  },
  {
    id: "2",
    title: "What We Build",
    content:
      "Intelligent automation ecosystems. From custom AI agents to enterprise-scale RAG architectures, we engineer systems that reduce operational costs by up to 80% while scaling infinitely.",
  },
  {
    id: "3",
    title: "Our Philosophy",
    content:
      "We don't just automate — we elevate. Every workflow we design is built on the belief that intelligent automation is the absolute standard for scaling enterprise revenue without permanently scaling human capital.",
  },
  {
    id: "4",
    title: "The Geometric Approach",
    content:
      "We see patterns where others see chaos. Our methodology transforms complex, scattered operations into clean, geometric workflows — every element purposeful, every connection deliberate.",
  },
  {
    id: "5",
    title: "What Sets Us Apart",
    content:
      "We don't template. Every architecture is engineered from first principles to match your exact operational DNA. No off-the-shelf solutions — just precision-built intelligence.",
  },
  {
    id: "6",
    title: "Who We Serve",
    content:
      "Enterprises ready to transcend legacy limitations. From finance to healthcare, we work with organizations that demand more than automation — they demand transformation.",
  },
  {
    id: "7",
    title: "Our Stack",
    content:
      "Python, Next.js, LangChain, autonomous agents, vector databases, and custom ML pipelines. We use whatever serves the vision — but always with surgical precision.",
  },
  {
    id: "8",
    title: "Let's Build",
    content:
      "Ready to transform your operations? Reach out at contact@aifloxium.online or connect with us directly. The future waits for no one.",
  },
];

export function Accordion05() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" defaultValue="5" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="last:border-b border-zinc-800">
            <AccordionTrigger className="text-left pl-6 md:pl-14 overflow-hidden text-white/20 duration-200 hover:no-underline cursor-pointer -space-y-6 data-[state=open]:space-y-0 data-[state=open]:text-white [&>svg]:hidden">
              <div className="flex flex-1 items-start gap-4">
                <p className="text-xs font-mono text-zinc-500">{item.id}</p>
                <h1
                  className={cn(
                    "uppercase relative text-center text-3xl md:text-5xl font-heading font-black tracking-tighter transition-colors duration-300",
                    "hover:text-zinc-300"
                  )}
                >
                  {item.title}
                </h1>
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-zinc-400 pb-6 pl-6 md:px-20 font-medium leading-relaxed">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
