import { Metadata } from 'next';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { Contact2 } from "@/components/ui/contact-2";
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Insights | AIFLOXIUM by Muhammad Shadab Shams',
  description: 'Read the latest from Muhammad Shadab Shams on AI automation, n8n workflows, and building intelligent systems that work 24/7.',
  keywords: ['AI automation insights', 'n8n workflows', 'automation tips', 'AI agents', 'workflow automation'],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Insights | AIFLOXIUM - AI Automation by Muhammad Shadab Shams',
    description: 'Essays on building intelligent systems that work 24/7 so businesses don\'t have to.',
    type: 'website',
    url: 'https://aifloxium.online/blog',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AIFLOXIUM Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights | AIFLOXIUM - Muhammad Shadab Shams',
    description: 'Insights on AI automation and workflow engineering.',
    images: ['/og-image.jpg'],
  },
};

const CornerPlusIcons = () => (
  <>
    <span className="absolute -top-3 -left-3 w-3 h-3 border-t border-l border-white/40" />
    <span className="absolute -top-3 -right-3 w-3 h-3 border-t border-r border-white/40" />
    <span className="absolute -bottom-3 -left-3 w-3 h-3 border-b border-l border-white/40" />
    <span className="absolute -bottom-3 -right-3 w-3 h-3 border-b border-r border-white/40" />
  </>
);

export default function BlogPage() {
  const articles = [
    { 
      title: "Building an Autonomous Sales Rep with n8n and Claude 3.5 Sonnet", 
      cat: "Workflow Engineering", 
      date: "May 18, 2025",
      slug: "autonomous-sales-rep",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      desc: "Learn how to build a fully autonomous sales representative using n8n and Claude"
    },
  ];

  return (
    <main className="relative bg-background min-h-screen">
      <Navbar />
      
      {/* Dark Cinematic Hero */}
      <div className="pt-40 pb-24 px-6 container mx-auto text-center">
        <h1 className="text-6xl md:text-[7rem] font-heading font-black text-white tracking-tighter mb-8 leading-[0.9]">
          <span className="text-gradient">THOUGHTS &</span> <br /> CODE.
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-medium">
          Insights on building intelligent systems that work 24/7, from n8n automation to AI agents.
        </p>
      </div>

      {/* Geometric Image Cards Grid */}
      <div className="container mx-auto px-6 max-w-6xl mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((post, i) => (
            <Link 
              key={i} 
              href={`/blog/${post.slug}`}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500">
                <CornerPlusIcons />
                {post.image ? (
                  <>
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
                    <div className="w-24 h-24 border border-white/10 flex items-center justify-center">
                      <div className="w-12 h-12 border border-white/20" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-xs font-mono text-zinc-500 mb-3 block uppercase tracking-widest">{post.cat}</span>
                  <h3 className="text-2xl md:text-3xl font-heading font-medium text-white group-hover:text-zinc-300 tracking-tight leading-tight mb-2">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base line-clamp-2">{post.desc}</p>
                  <div className="flex items-center gap-4 mt-4 text-zinc-400 font-mono text-xs uppercase tracking-widest">
                    <span>{post.date}</span>
                    <span className="w-8 h-[1px] bg-white/20" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Internal Linking: Resources Callout */}
      <section className="container mx-auto px-6 mb-32">
        <div className="glass-card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 group hover:border-white/20 transition-all duration-500">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tight mb-4">
              LOOKING FOR <span className="text-gradient">AUTOMATIONS?</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Check out my portfolio of 38+ automation projects. From workflow templates to AI agents, if it can be automated, I have built it.
            </p>
          </div>
          <Link 
            href="/resources" 
            className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:scale-105"
          >
            Explore Resources →
          </Link>
        </div>
      </section>

      {/* High-Contrast White Newsletter CTA */}
      <section className="py-24 bg-white text-black my-24 border-y border-zinc-200">
         <div className="container mx-auto px-6 max-w-4xl text-center">
             <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-6">AUTOMATE YOUR INBOX.</h2>
             <p className="text-zinc-600 font-medium text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Get weekly insights on AI automation, n8n workflows, and building systems that actually scale. No fluff, just actionable automation strategies.
             </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
               <input 
                  type="email" 
                  placeholder="name@enterprise.com" 
                  className="px-6 py-4 rounded-full bg-zinc-100 border border-zinc-200 w-full sm:w-96 text-black focus:outline-none focus:border-black transition-colors"
               />
               <button className="px-8 py-4 rounded-full bg-black text-white font-bold uppercase tracking-widest text-sm hover:opacity-80 transition-opacity">
                  Subscribe
               </button>
            </form>
         </div>
      </section>

      <section className="bg-zinc-950/20 border-t border-white/5 py-24">
        <Contact2 
          title="Scale Your Logic."
          description="Interested in implementing any of these architectural patterns? Our SAR team is ready for deployment."
        />
      </section>

      <Footer />
    </main>
  );
}
