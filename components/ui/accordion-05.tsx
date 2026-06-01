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
    title: "Who I Am",
    content:
      "I am Muhammad Shadab Shams, an automation engineer focused on workflows, internal tools, and practical AI systems for real businesses.",
  },
  {
    id: "2",
    title: "What I Build",
    content:
      "I build n8n workflows, product MVPs, internal dashboards, content systems, AI agents, and integrations that remove repeated manual work.",
  },
  {
    id: "3",
    title: "My Philosophy",
    content:
      "Good automation should be useful, understandable, and maintainable. If the system saves time but the team cannot trust it, it is not finished.",
  },
  {
    id: "4",
    title: "The Geometric Approach",
    content:
      "I start by mapping where the work breaks, then I simplify the flow until the logic is clear enough to build and hand over.",
  },
  {
    id: "5",
    title: "What Sets Me Apart",
    content:
      "I am not selling generic AI packaging. I combine strategy, implementation, and product thinking so the work actually ships.",
  },
  {
    id: "6",
    title: "Who I Serve",
    content:
      "My best-fit clients are startups, SMBs, and service businesses that need better systems without hiring a full internal engineering team.",
  },
  {
    id: "7",
    title: "My Stack",
    content:
      "n8n, Next.js, TypeScript, Claude-powered workflows, APIs, custom product builds, and the surrounding stack needed to ship and maintain them.",
  },
  {
    id: "8",
    title: "Let's Build",
    content:
      "If you need automation, internal tools, or a product-minded technical partner, reach out and tell me what is blocking the business right now.",
  },
];

export function Accordion05() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" defaultValue="5" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="last:border-b border-brand-plum/20">
            <AccordionTrigger className="text-left pl-6 md:pl-14 overflow-hidden text-white/20 hover:text-white data-[state=open]:text-white duration-200 hover:no-underline cursor-pointer -space-y-6 data-[state=open]:space-y-0 [&>svg]:hidden">
              <div className="flex flex-1 items-start gap-4">
                <p className="text-xs font-mono text-brand-orange/60">{item.id}</p>
                <h1
                  className={cn(
                    "relative text-center text-3xl md:text-5xl font-heading font-black tracking-[-0.035em] transition-colors duration-300"
                  )}
                >
                  {item.title}
                </h1>
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-zinc-300 pb-6 pl-6 md:px-20 font-medium leading-relaxed">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
