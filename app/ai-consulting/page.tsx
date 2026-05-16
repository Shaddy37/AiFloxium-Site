import { Metadata } from 'next';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { Trust, Pricing } from "@/components/sections/HomeSections";
import { Contact2 } from "@/components/ui/contact-2";
import { RadarScanner } from "@/components/sections/RadarScanner";
import { PERSON_NAME } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `AI Consulting | ${PERSON_NAME}`,
  description:
    'Advisory for teams planning automation, internal tools, AI workflows, or product execution without guessing their next move.',
  path: '/ai-consulting',
  keywords: [
    'AI consulting for business automation',
    'AI digital transformation consultancy',
    'how to automate enterprise business processes with AI'
  ]
});

export default function AIConsultingPage() {
  return (
    <main className="relative bg-brand-bg min-h-screen">
      <Navbar />
      
      {/* Dark Cinematic Hero */}
      <div className="pt-40 pb-20 px-4 md:px-6 container mx-auto relative overflow-hidden bg-hero-gradient rounded-b-[3rem]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-plum-glow opacity-60 blur-[150px] rounded-full pointer-events-none -z-10" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-heading font-black text-white tracking-tighter mb-8 leading-[0.9] uppercase">
          STRATEGIC <br/><span className="text-brush text-3xl md:text-6xl lg:text-8xl mt-4">CONSULTING.</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium">
          For teams that know they need better systems but want a clear plan
          before they invest in the build.
        </p>
      </div>

      <RadarScanner />

      {/* Pristine White Audit Roadmap Section */}
      <section className="py-32 bg-white text-black relative -mt-4 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
         <div className="container mx-auto px-6 max-w-6xl flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/3">
              <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-8 text-brand-plum uppercase leading-[0.9]">
                THE DELIVERY <br /> <span className="text-brush text-3xl md:text-5xl mt-2">ROADMAP.</span>
              </h2>
              <p className="text-zinc-600 font-medium leading-relaxed">A structured way to go from confusion to a build-ready plan.</p>
            </div>
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
               {[
                  { w: "01", t: "Current-State Review", d: "We review the workflow, tools, bottlenecks, and business constraints so the real problem is defined clearly." },
                  { w: "02", t: "Feasibility & Scope", d: "I map what should be automated, what should stay human, and what the best implementation path looks like." },
                  { w: "03", t: "Build Plan", d: "You get a concrete delivery roadmap with scope, priorities, and the tradeoffs that matter before build work starts." },
                  { w: "04", t: "Execution Option", d: "Your team can use the roadmap internally, or I can stay involved and build the system with you." }
               ].map((wk, i) => (
                  <div key={i} className="group p-10 bg-gray-50 border border-gray-200 hover:bg-brand-plum hover:text-white transition-all duration-300">
                     <span className="text-sm font-black text-brand-orange uppercase tracking-widest mb-4 block group-hover:text-white transition-colors">Week {wk.w}</span>
                     <h3 className="text-xl font-black font-heading mb-4 text-brand-plum group-hover:text-white transition-colors">{wk.t}</h3>
                     <p className="text-zinc-600 group-hover:text-white/80 font-medium leading-relaxed transition-colors">{wk.d}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <Trust />
      <Pricing />
      
      <section className="bg-brand-bg/20 border-t border-brand-plum/10">
        <Contact2 
          title="Book a Consulting Call."
          description="Bring the workflow, product, or systems problem. I will help define the right implementation path."
        />
      </section>

      <Footer />
    </main>
  );
}
