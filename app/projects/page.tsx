import { Metadata } from 'next';
import Image from 'next/image';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { Contact2 } from "@/components/ui/contact-2";
import IntegrationHero from "@/components/ui/integration-hero";

export const metadata: Metadata = {
  title: 'AI Automation Case Studies | Aifloxium Portfolio',
  description: 'View real-world examples of how Aifloxium reduces operational costs with AI agents and modernizes legacy protocols for actual enterprises.',
  keywords: ['reducing operational costs with AI agents', 'scaling AI automation in large organizations', 'enterprise AI implementation partners'],
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'AI Automation Case Studies | Aifloxium Portfolio',
    description: 'View real-world examples of how Aifloxium reduces operational costs with AI agents.',
    type: 'website',
    url: 'https://aifloxium.online/projects',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aifloxium Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Case Studies | Aifloxium Portfolio',
    description: 'View real-world examples of how Aifloxium reduces operational costs with AI agents.',
    images: ['/og-image.jpg'],
  },
};

export default function ProjectsPage() {
    const projects = [
      { name: "n8n Sales Automation", cat: "Workflow Automation", desc: "Built a fully autonomous n8n pipeline that enriches incoming leads via Clearbit and instantly fires a custom Claude-generated email.", image: "project-automation.webp" },
      { name: "Claude SaaS Dashboard", cat: "Vibe Coding (Agentic UI)", desc: "Developed a stunning, full-stack micro-SaaS dashboard in 4 days using Claude Code and Cursor, bypassing traditional slow frontend engineering.", image: "banana-code.webp" },
      { name: "Financial Data Extractor", cat: "LLM Orchestration", desc: "Automated the extraction of unstructured PDF invoices via an automated webhook loop, structured by LLMs, and injected directly into accounting software.", image: "banana-data.webp" },
      { name: "Automated Outbound Agent", cat: "Multi-Agent System", desc: "Deployed a series of AI agents that scrape dynamic property listings and synthesize personalized outreach SMS sequences on autopilot.", image: "banana-ai.webp" }
    ];

  return (
    <main className="relative bg-background min-h-screen">
      <Navbar />
      {/* Projects Hero */}
      <div className="pt-40 pb-24 px-6 container mx-auto text-center">
        <h1 className="text-6xl md:text-[7rem] font-heading font-black text-white tracking-tighter mb-8 leading-[0.9]">
          <span className="text-gradient">PROOF OF</span> <br /> CONCEPTS.
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-medium">
          Real-world examples of how we eradicate operational bottlenecks through n8n automation and Claude reasoning.
        </p>
      </div>

      {/* High-Contrast White Metrics Section */}
      <section className="py-24 bg-white text-black mb-24 border-y border-zinc-200">
         <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-zinc-400 font-bold uppercase tracking-widest text-sm mb-12 text-center md:text-left">Operational Impact Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-8 border-l-4 border-black bg-zinc-50">
                  <div className="text-6xl md:text-7xl font-heading font-black mb-2">50+</div>
                  <div className="text-xl font-bold text-zinc-600">Complex Workflows</div>
               </div>
               <div className="p-8 border-l-4 border-black bg-zinc-50">
                  <div className="text-6xl md:text-7xl font-heading font-black mb-2">85%</div>
                  <div className="text-xl font-bold text-zinc-600">Manual Time Eradicated</div>
               </div>
               <div className="p-8 border-l-4 border-black bg-zinc-50">
                  <div className="text-6xl md:text-7xl font-heading font-black mb-2">$5M+</div>
                  <div className="text-xl font-bold text-zinc-600">Cumulative Savings</div>
               </div>
            </div>
         </div>
      </section>
      
      <div className="container mx-auto px-6 max-w-7xl mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] glass-card rounded-[2rem] overflow-hidden mb-8 relative border border-white/5 group-hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-radial-glow opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <Image 
                  src={`/images/nano-banana/${p.image}`} 
                  alt={p.name}
                  fill
                  className="object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent z-10">
                   <span className="font-mono text-zinc-500 tracking-widest uppercase text-sm">{p.cat}</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold font-heading text-white mb-4 group-hover:text-zinc-300">{p.name}</h3>
              <p className="text-zinc-400 font-medium leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <IntegrationHero />
      
      <section className="bg-zinc-950/20 border-t border-white/5 py-32">
        <Contact2 
          title="Deploy Your Project."
          description="Ready to move from proof-of-concept to production? Initiate our project engineering protocol below."
        />
      </section>

      <Footer />
    </main>
  );
}
