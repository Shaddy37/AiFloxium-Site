import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { RadarScanner } from "@/components/sections/RadarScanner";
import { Contact2 } from "@/components/ui/contact-2";
import { CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import { PERSON_NAME, CALENDLY_URL } from "@/lib/site";
import { absoluteUrl, buildPageMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `AI Consulting | ${PERSON_NAME}`,
  description:
    'Strategic AI consulting for teams that need a clear plan before they invest in the build. System audits, feasibility scoping, and delivery roadmaps.',
  path: '/ai-consulting',
  keywords: [
    'AI consulting',
    'automation strategy',
    'workflow audit',
    'AI roadmap'
  ]
});

const consultingJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'AI Consulting', path: '/ai-consulting' }
    ]),
    {
      '@type': 'ProfessionalService',
      name: 'AIFLOXIUM AI Consulting',
      description: 'Strategic AI consulting for teams that need a clear plan before they invest in the build.',
      url: absoluteUrl('/ai-consulting'),
      serviceType: 'AI Consulting'
    }
  ]
};

const roadmapSteps = [
  {
    w: "01",
    t: "Current-State Review",
    d: "I review the workflow, tools, bottlenecks, and business constraints so the real problem is defined clearly."
  },
  {
    w: "02",
    t: "Feasibility & Scope",
    d: "I map what should be automated, what should stay human, and what the best implementation path looks like."
  },
  {
    w: "03",
    t: "Build Plan",
    d: "You get a concrete delivery roadmap with scope, priorities, and the tradeoffs that matter before build work starts."
  },
  {
    w: "04",
    t: "Execution Option",
    d: "Your team can use the roadmap internally, or I can stay involved and build the system with you."
  }
];

const consultingServices = [
  {
    title: "Workflow Audit",
    desc: "A deep analysis of your current operations to identify bottlenecks, redundancies, and high-leverage automation opportunities.",
    price: "Free 15-min scoping call"
  },
  {
    title: "Tech Stack Assessment",
    desc: "Evaluate your existing tools and integrations to determine what can be connected, what needs replacing, and the fastest path to ROI.",
    price: "Included in audit"
  },
  {
    title: "ROI Modeling",
    desc: "Get concrete financial projections — hours saved, payroll recovered, and payback timelines — before any commitment.",
    price: "Free with consultation"
  },
  {
    title: "Implementation Planning",
    desc: "A phased delivery roadmap with prioritized milestones, resource requirements, and risk mitigation for each stage.",
    price: "Custom quote"
  }
];

export default function AIConsultingPage() {
  return (
    <main className="relative bg-[var(--background)] text-white min-h-screen selection:bg-[#7B2CBF] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consultingJsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <div className="pt-40 pb-24 px-6 container mx-auto relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--brand-purple-glow)] opacity-50 blur-[150px] rounded-full pointer-events-none -z-10" />

        <nav className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-white/50 uppercase tracking-widest relative z-10 font-inter">
          <Link href="/" className="transition-colors hover:text-white">Home</Link>
          <ChevronRight className="h-3 w-3 text-white/30" />
          <span className="text-white font-bold">AI Consulting</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-instrument text-white tracking-tight mb-8 leading-[1.05]">
          Strategic <span className="font-instrument text-[#E0AAFF] italic">consulting.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-inter font-light leading-relaxed">
          For teams that know they need better systems but want a clear plan before they invest in the build.
        </p>
      </div>

      {/* Radar Scanner Section */}
      <RadarScanner />

      {/* Delivery Roadmap */}
      <section className="py-24 md:py-32 px-6 bg-[var(--background)] text-white relative border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-[#7B2CBF]/5 blur-[130px] pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <p className="text-[9px] font-semibold text-[#E0AAFF] uppercase tracking-[0.25em] mb-4 flex items-center justify-center gap-3 font-inter">
              <span className="w-8 h-[1px] bg-[#E0AAFF]/40 inline-block" />
              The Process
              <span className="w-8 h-[1px] bg-[#E0AAFF]/40 inline-block" />
            </p>
            <h2 className="text-4xl md:text-6xl font-instrument text-white tracking-tight leading-[1.05]">
              The delivery <span className="font-instrument text-[#E0AAFF] italic">roadmap.</span>
            </h2>
            <p className="text-zinc-400 font-inter font-light mt-4 max-w-xl mx-auto">A structured way to go from confusion to a build-ready plan.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#7B2CBF]/40 via-[#7B2CBF]/20 to-transparent" />

            {roadmapSteps.map((step, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-12 last:mb-0 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full bg-[#7B2CBF] border-[3px] border-[var(--background)] -translate-x-1/2 z-10 shadow-[0_0_12px_rgba(123,44,191,0.4)]" />

                <div className="md:w-[calc(50%-2rem)] ml-16 md:ml-0">
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-[#7B2CBF]/30 hover:bg-white/[0.04] transition-all duration-500 liquid-glass">
                    <span className="text-[9px] font-semibold text-[#E0AAFF] uppercase tracking-wider mb-4 block font-inter">Step {step.w}</span>
                    <h3 className="text-xl font-semibold font-inter mb-3 text-white">{step.t}</h3>
                    <p className="text-zinc-400 font-inter font-light leading-relaxed">{step.d}</p>
                  </div>
                </div>

                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-[var(--background)] border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-[9px] font-semibold text-[#E0AAFF] uppercase tracking-[0.25em] mb-4 font-inter">What You Get</p>
            <h2 className="text-4xl md:text-5xl font-instrument text-white tracking-tight leading-[1.05]">
              Consulting <span className="font-instrument text-[#E0AAFF] italic">services.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consultingServices.map((service, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-[#7B2CBF]/30 hover:bg-white/[0.04] transition-all duration-500 liquid-glass">
                <h3 className="text-xl font-semibold font-inter mb-3 text-white">{service.title}</h3>
                <p className="text-zinc-400 font-inter font-light leading-relaxed mb-6">{service.desc}</p>
                <span className="text-[10px] font-semibold text-[#E0AAFF] uppercase tracking-wider font-inter">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[var(--background)] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(123,44,191,0.05)_0%,_transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-instrument text-white tracking-tight mb-6 leading-[1.05]">
            Need a clear <span className="font-instrument text-[#E0AAFF] italic">plan?</span>
          </h2>
          <p className="text-zinc-400 font-inter font-light max-w-xl mx-auto mb-10">
            Book a free 15-minute scoping call. No obligation, just clarity.
          </p>
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E0AAFF] button-glow transition-all duration-300 font-inter"
          >
            Book a Discovery Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
