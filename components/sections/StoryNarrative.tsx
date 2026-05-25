import FlowArt, { FlowSection } from '@/components/ui/story-scroll';
import { CALENDLY_URL } from '@/lib/site';

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
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-orange">Hours Wasted</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Your team wastes 20+ hours weekly on manual data copy-pasting across scattered tools and spreadsheets.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-orange">Lead Leakage</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Prospects go cold because follow-up is manual. Leads sitting for over 5 minutes decrease conversion rates by 80%.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-orange">Payroll Bloat</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Hiring administrative staff for repetitive &quot;robot work&quot; kills margins and limits scaling capacity.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-brand-plum/30 opacity-100" />
        <p className="mt-auto ml-auto max-w-[50ch] text-right text-[clamp(1rem,2.5vw,2rem)] font-medium leading-relaxed italic text-zinc-400">
          Every business has operational friction. The elite ones automate it.
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
          Founded by AI Automation Engineer Muhammad Shadab Shams, AIFLOXIUM builds deterministic, secure, self-hosted operational infrastructure. We replace fragile manual handoffs with systems that scale capacity 24/7.
        </p>
        <hr className="my-[2vw] border-none border-t border-zinc-200" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-plum">Self-Hosted n8n</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-zinc-600">
              Visual automation pipelines running on your own VPS with zero data leaks and zero third-party transaction fees.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-plum">Low-Latency Voice</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-zinc-600">
              Vapi & Retell AI agents with under 500ms latency that answer, qualify, and book inbound leads in real-time.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-plum">Bespoke Portals</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-zinc-600">
              Next.js and Supabase internal tools vibe-coded and shipped in weeks, replacing bloated spreadsheets.
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
            Capacity
            <br />
            Not Headcount
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-medium leading-relaxed">
          Smart custom automation allows B2B agencies and SMBs to scale operational capacity 24/7 without growing headcount.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Speed-To-Lead</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-90">
              Qualifications and automatic follow-ups in under 5 minutes, capturing hot leads before they go cold.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">85% Invoicing Speedup</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-90">
              AI-powered OCR extracts PDF invoice data and updates accounting systems with zero manual entry errors.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Outbound Lead Gen</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-90">
              Extract 500+ qualified leads weekly, automatically enriched and synced to CRM with 80% less research time.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <div className="mt-auto ml-auto">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-black py-3 px-8 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-zinc-900">
            Book Discovery Call
          </a>
        </div>
      </FlowSection>

    </FlowArt>
  );
}
