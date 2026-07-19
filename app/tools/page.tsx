import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { Contact2 } from "@/components/ui/contact-2";
import { ChevronRight, ArrowRight } from "lucide-react";
import { buildPageMetadata, absoluteUrl } from "@/lib/seo";
import { toolsHubCards } from '@/lib/tools-data';
import ToolWaitlistForm from '@/components/tools/ToolWaitlistForm';

const liveTool = toolsHubCards.find((tool) => tool.status === 'live') ?? toolsHubCards[0]!;
const plannedTools = toolsHubCards.filter((tool) => tool.status === 'planned');

export const metadata: Metadata = buildPageMetadata({
  title: 'Free AI Automation Tools | AIFLOXIUM',
  description:
    'Free interactive tools to quantify the cost of manual workflow friction. ROI calculator, lead response time loss calculator, and more.',
  path: '/tools',
  keywords: [
    'AI automation tools',
    'ROI calculator',
    'workflow automation calculator',
    'free automation tools'
  ]
});

export default function ToolsPage() {
  return (
    <main className="relative bg-white min-h-screen text-zinc-800 selection:bg-[#7B2CBF] selection:text-zinc-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-gradient-to-b from-black to-[#0a0608] rounded-b-[3rem]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] rounded-full bg-[#7B2CBF]/5 blur-[120px]" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <nav className="mb-8 flex justify-center items-center gap-2 text-[10px] font-semibold text-white/50 uppercase tracking-widest font-inter">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3 text-white/30" />
            <span className="text-white font-bold">Tools</span>
          </nav>

          <div className="flex flex-col items-center text-center">
            <p className="text-[9px] font-semibold text-zinc-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3 font-inter">
              <span className="w-6 h-[1px] bg-zinc-100 inline-block" />
              Engineer Operations
              <span className="w-6 h-[1px] bg-zinc-100 inline-block" />
            </p>

            <h1 className="text-[clamp(2.75rem,6vw,5.5rem)] font-instrument text-white tracking-tight leading-[1.05] mb-8">
              Free interactive <br />
              <span className="font-instrument text-[#E0AAFF] italic">tools.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12 font-inter font-light">
              Quantify the cost of manual workflow friction before you start building.
              Estimate time saved, payroll overhead, and payback projections.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-6 py-24 space-y-20">
        {/* Live Tool */}
        <section>
          <div className="flex flex-col lg:flex-row gap-10 lg:items-center mb-16">
            <div className="flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7B2CBF] mb-4 font-inter">Featured Tool</p>
              <h2 className="text-4xl md:text-5xl font-instrument text-zinc-900 tracking-tight leading-[1.05] mb-4">
                {liveTool.title}
              </h2>
              <p className="text-zinc-500 font-inter font-light leading-relaxed max-w-xl">{liveTool.description}</p>
              <div className="mt-8">
                <Link
                  href={liveTool.href}
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white px-8 py-4 text-xs font-semibold uppercase tracking-wider hover:bg-[#7B2CBF] transition-all duration-300 button-glow font-inter"
                >
                  Launch Tool
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex-1 rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 liquid-glass-light shadow-sm">
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-emerald-600 font-inter">
                live
              </span>
              <h3 className="mt-4 text-2xl font-semibold font-inter tracking-wide text-zinc-900">{liveTool.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 font-inter font-light">{liveTool.shortValue}</p>
              <Link
                href={liveTool.href}
                className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white border border-zinc-200 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-900 hover:bg-zinc-100 transition-colors font-inter"
              >
                Open Interactive Tool
                <ArrowRight className="h-4 w-4 text-[#7B2CBF]" />
              </Link>
            </div>
          </div>
        </section>

        {/* Planned Tools */}
        <section>
          <div className="mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7B2CBF] mb-4 font-inter">Coming Soon</p>
            <h2 className="text-3xl md:text-4xl font-instrument text-zinc-900 tracking-tight">Tools in development</h2>
            <p className="text-zinc-500 font-inter font-light mt-2">More ways to quantify operational friction before you build.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {plannedTools.map((tool) => (
              <article
                key={tool.slug}
                className="rounded-[1.8rem] border border-zinc-200 bg-white p-6 flex flex-col justify-between liquid-glass-light shadow-sm"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7B2CBF] font-inter">{tool.eyebrow}</span>
                      <h4 className="mt-2 text-xl font-semibold font-inter tracking-wide text-zinc-900">{tool.title}</h4>
                    </div>
                    <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500 shrink-0 font-inter">planned</span>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-500 font-inter font-light">{tool.description}</p>
                  <div className="mt-4">
                    <ToolWaitlistForm toolSlug={tool.slug} toolTitle={tool.title} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="py-24 bg-zinc-900 text-white border-y border-white/5">
        <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E0AAFF] mb-4 font-inter">Need More?</p>
            <h2 className="text-4xl md:text-5xl font-instrument tracking-tight mb-4 text-white">
              Not sure what you need?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed font-inter font-light">
              Use the ROI calculator to model your first automation, or book a free scoping call and I will help you figure it out.
            </p>
          </div>
          <div className="shrink-0 flex flex-col gap-4 font-inter">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E0AAFF] transition-all duration-300 button-glow text-center"
            >
              Book a Call →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
