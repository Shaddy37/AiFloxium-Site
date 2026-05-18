import FlowArt, { FlowSection } from '@/components/ui/story-scroll';

export default function StoryNarrative() {
  return (
    <FlowArt aria-label="AIFLOXIUM Story">
      
      {/* 01: The Problem (Replacing Hidden Costs) */}
      <FlowSection aria-label="The Problem" style={{ backgroundColor: '#130716', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">01 — The Problem</p>
        <hr className="my-[2vw] border-none border-t border-brand-plum/30 opacity-100" />
        <div>
          <h1
            className="text-[clamp(3.5rem,12vw,14rem)] font-heading font-black leading-[0.85] uppercase tracking-tight text-white"
          >
            Stop
            <br />
            The
            <br />
            Chaos
          </h1>
        </div>
        <hr className="my-[2vw] border-none border-t border-brand-plum/30 opacity-100" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-orange">Hours Lost</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Your team spends 20+ hours weekly on tasks that a configured workflow handles in minutes.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-orange">Dead Leads</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Prospects go cold because follow-up is manual. Automate so every lead is contacted in 5 minutes.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-orange">Scattered Data</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Customer info lives in 5 different tools. Connect the dots and see your business clearly.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-brand-plum/30 opacity-100" />
        <p className="mt-auto ml-auto max-w-[50ch] text-right text-[clamp(1rem,2.5vw,2rem)] font-medium leading-relaxed italic text-zinc-400">
          Every business has bottlenecks. The difference is who fixes them.
        </p>
      </FlowSection>

      {/* 02: The Mission (Replacing Why Teams Hire) */}
      <FlowSection aria-label="The Mission" style={{ backgroundColor: '#ffffff', color: '#000' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-plum">02 — The Mission</p>
        <hr className="my-[2vw] border-none border-t border-zinc-200" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-heading font-black leading-[0.85] uppercase tracking-tight"
          >
            Ship
            <br />
            Without
            <br />
            Bloat
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-zinc-200" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-medium leading-relaxed text-zinc-700">
          AIFLOXIUM is built for founders and operators who need execution, not generic strategy. We replace fragile manual handoffs with systems that are easier to run, measure, and scale.
        </p>
        <hr className="my-[2vw] border-none border-t border-zinc-200" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-plum">Automations</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-zinc-600">
              End-to-end n8n pipelines that run your business 24/7 without breaking.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-plum">Agents</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-zinc-600">
              Agentic workflows with clear guardrails, human oversight, and absolute reliability.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-plum">Tools</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-zinc-600">
              Internal tools and micro-SaaS that replace spreadsheet-driven chaos.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* 03: Outcomes (Replacing Common Outcomes) */}
      <FlowSection aria-label="Outcomes" style={{ backgroundColor: '#FF6B00', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">03 — Outcomes</p>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-heading font-black leading-[0.85] uppercase tracking-tight"
          >
            Scale
            <br />
            Revenue
            <br />
            Not Headcount
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-medium leading-relaxed">
          Smart automation means you grow without bloating your payroll. Same team, double the output.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Fast Response</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-90">
              Cleaner CRM pipelines and instant prospect follow-ups that close deals.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Automated Reporting</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-90">
              Less manual data entry across sales, finance, and operational channels.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">SEO Growth</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-90">
              AI-assisted workflows that drive qualified organic traffic at scale.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <div className="mt-auto ml-auto">
          <a href="/#initiate" className="inline-flex items-center gap-2 rounded-full bg-black py-3 px-8 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-zinc-900">
            Book Discovery Call
          </a>
        </div>
      </FlowSection>

    </FlowArt>
  );
}
