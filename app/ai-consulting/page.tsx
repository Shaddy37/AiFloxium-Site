import { Metadata } from 'next';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { Trust, Pricing } from "@/components/sections/HomeSections";
import { Contact2 } from "@/components/ui/contact-2";
import { RadarScanner } from "@/components/sections/RadarScanner";

export const metadata: Metadata = {
  title: 'AI Consulting for Business Automation | Aifloxium',
  description: 'Aifloxium provides elite AI digital transformation consultancy. Learn how to automate enterprise business processes with our 4-week architectural roadmap.',
  keywords: ['AI consulting for business automation', 'AI digital transformation consultancy', 'how to automate enterprise business processes with AI'],
  openGraph: {
    title: 'AI Consulting for Business Automation | Aifloxium',
    description: 'Aifloxium provides elite AI digital transformation consultancy. Learn how to automate enterprise business processes with our 4-week architectural roadmap.',
    type: 'website',
    url: 'https://aifloxium.online/ai-consulting',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Consulting for Business Automation | Aifloxium',
    description: 'Aifloxium provides elite AI digital transformation consultancy. Learn how to automate enterprise business processes with our 4-week architectural roadmap.',
  },
};

export default function AIConsultingPage() {
  return (
    <main className="relative bg-background min-h-screen">
      <Navbar />
      
      <div className="pt-40 pb-20 px-6 container mx-auto">
        <h1 className="text-6xl md:text-8xl font-heading font-black text-white tracking-tighter mb-8 leading-[0.9]">
          STRATEGIC <br/><span className="text-gradient">CONSULTING.</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium">
          Elite advisory for scaling companies looking to integrate machine logic into existing infrastructure without fracturing legacy systems.
        </p>
      </div>

      <RadarScanner />

      {/* White Audit Roadmap Section */}
      <section className="py-24 bg-white text-black my-24 border-y border-zinc-200">
         <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-16 text-center">THE 4-WEEK AUDIT.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                  { w: "Week 01: Systems Analysis", d: "We conduct a complete forensic audit of your current tech stack, API endpoints, and daily human bottlenecks to locate vector points." },
                  { w: "Week 02: Feasibility & Logic", d: "Drafting the exact architecture needed. This includes assessing LLM latency, database extraction tools, and security constraints." },
                  { w: "Week 03: Deployment Roadmap", d: "Providing a hardened, step-by-step technical execution plan containing timeline expectations and resource requirements." },
                  { w: "Week 04: Execution Handoff", d: "You receive the full architectural blueprint. Either your internal team executes it, or you retain Aifloxium to build the system." }
               ].map((wk, i) => (
                  <div key={i} className="bg-zinc-100 p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                     <span className="text-xl font-bold font-mono bg-black text-white px-4 py-1 inline-block mb-6">{wk.w}</span>
                     <p className="text-zinc-600 font-medium text-lg leading-relaxed">{wk.d}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <Trust />
      <Pricing />
      
      <section className="bg-zinc-950/20 border-t border-white/5 py-24">
        <Contact2 
          title="Schedule Your Strategy Audit."
          description="Ready to modernize your legacy infrastructure? Connect directly with our SAR team for a feasibility audit."
        />
      </section>

      <Footer />
    </main>
  );
}
