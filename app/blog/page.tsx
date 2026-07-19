import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { Contact2 } from "@/components/ui/contact-2";
import { ArrowRight, Calendar, Zap, ChevronRight } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: 'Blog | AIFLOXIUM AI Automation Insights',
  description:
    'Deep-dives into AI agents, n8n workflows, LinkedIn automation, ecommerce automations, and the future of autonomous business systems.',
  path: '/blog',
  keywords: [
    'AI automation blog',
    'n8n workflow tutorials',
    'AI agents guide',
    'ecommerce automation',
    'technical SEO automation'
  ]
});

export default async function BlogPage() {
  const posts = await getAllPosts();
  const blogIndexJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'AIFLOXIUM Blog Posts',
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: absoluteUrl(`/blog/${post.slug}`),
      name: post.frontmatter.title,
      description: post.frontmatter.description
    }))
  };

  return (
    <main id="main-content" className="relative bg-[var(--background)] min-h-screen text-white selection:bg-[#7B2CBF] selection:text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexJsonLd) }}
        suppressHydrationWarning
      />
      <Navbar />
      
      {/* Blog Hero */}
      <section className="pt-40 pb-20 px-6 relative bg-[var(--background)] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[var(--brand-purple-glow)] opacity-50 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <nav className="mb-8 flex justify-center items-center gap-2 text-[10px] font-semibold text-white/50 uppercase tracking-widest relative z-10 font-inter">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-white/30" />
            <span className="text-white font-bold">Blog</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 glass-card">
            <span className="w-2 h-2 rounded-full bg-[#E0AAFF] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/60">Research & Intelligence</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[6rem] font-instrument text-white tracking-tight mb-12 leading-[1.05]">
            Insights <br /><span className="font-instrument text-[#E0AAFF] italic">hub.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed italic border-l border-white/20 pl-8 font-inter font-light">
            &quot;Decoding the engineering behind autonomous systems, workflow automation, and practical AI execution.&quot;
          </p>
        </div>
      </section>

      {/* Featured Post (First one) */}
      {posts.length > 0 && (
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <Link href={`/blog/${posts[0].slug}`} className="group block relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[var(--muted)]/50 hover:border-[#E0AAFF]/30 hover:bg-white/5 transition-colors duration-500 glass-card">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="aspect-[16/10] lg:aspect-auto relative overflow-hidden order-1 lg:order-2 bg-black/40 rounded-[2rem] m-6">
                  <Image
                    src={posts[0].frontmatter.image || '/brand/aifloxium-logo.png'}
                    alt={posts[0].frontmatter.title}
                    fill
                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                
                <div className="p-8 md:p-16 flex flex-col justify-center order-2 lg:order-1 font-inter">
                  <div className="flex items-center gap-6 mb-8 text-[9px] font-semibold uppercase tracking-wider text-white/50">
                    <span className="flex items-center gap-2 text-[#E0AAFF]"><Zap className="w-3.5 h-3.5 fill-[#E0AAFF]/20" /> {posts[0].frontmatter.category}</span>
                    <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-white/40" /> {posts[0].frontmatter.date}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-instrument text-white tracking-tight leading-[1.05] mb-8 group-hover:text-[#E0AAFF] transition-all duration-500">
                    {posts[0].frontmatter.title}
                  </h2>
                  
                  <p className="text-base text-zinc-500 mb-12 leading-relaxed max-w-lg font-light">
                    {posts[0].frontmatter.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[#E0AAFF] group-hover:text-zinc-900 transition-all">
                    Read Intelligence <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-32 px-6 bg-[var(--background)] border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-white/5 pb-12">
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-4xl font-instrument text-white tracking-tight uppercase mb-4">Latest Research</h3>
              <p className="text-white/60 font-inter font-light">Technological explorations in neural workflows, agentic reasoning, and scalable AI architectures.</p>
            </div>
            
            <p className="max-w-sm text-sm font-inter font-light leading-relaxed text-white/50">
              Detailed breakdowns of AI workflows, SEO systems, agents, and internal
              tooling. Each post is written to help operators make a better technical
              decision, not just skim a trend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.slice(1).map((post, index) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group p-8 md:p-12 rounded-[2rem] border border-white/5 bg-white/[0.01] hover:border-[#7B2CBF]/30 hover:bg-[#7B2CBF]/5 transition-all duration-500 liquid-glass flex flex-col justify-between"
              >
                <div>
                  <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/5 bg-black/40 glass-card">
                    <Image
                      src={post.frontmatter.image || '/brand/aifloxium-logo.png'}
                      alt={post.frontmatter.title}
                      fill
                      className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-8 font-inter">
                    <span className="px-2.5 py-1 rounded-md bg-white/5 text-[9px] font-semibold text-[#E0AAFF] border border-white/10 uppercase tracking-wider">
                      {post.frontmatter.category}
                    </span>
                    <span className="text-[9px] font-semibold text-white/40 uppercase tracking-wider flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" /> {post.frontmatter.date}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-semibold font-inter tracking-wide leading-snug mb-6 text-white group-hover:text-[#E0AAFF] transition-colors">
                    {post.frontmatter.title}
                  </h3>
                  
                  <p className="text-white/60 text-sm font-inter font-light leading-relaxed mb-10 line-clamp-3">
                    {post.frontmatter.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-8 border-t border-white/5 font-inter">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-[10px] text-white">
                      {post.frontmatter.author?.charAt(0) || 'A'}
                    </div>
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-white/50">{post.frontmatter.author}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#E0AAFF] group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--background)] border-t border-white/5">
        <Contact2 
          title="Custom Workflows Built for Scale."
          description="Ready to automate your operations with state-of-the-art AI infrastructure? Let's connect."
        />
      </section>

      <Footer />
    </main>
  );
}
