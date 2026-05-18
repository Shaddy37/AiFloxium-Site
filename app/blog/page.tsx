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
    <main className="relative bg-brand-bg min-h-screen text-white font-medium selection:bg-brand-orange selection:text-black overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexJsonLd) }}
      />
      <Navbar />
      
      {/* Blog Hero */}
      <section className="pt-40 pb-20 px-6 relative bg-hero-gradient overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-brand-plum-glow opacity-80 pointer-events-none" />
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/5 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-white">Research & Intelligence</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white tracking-tighter mb-12 leading-[0.8] uppercase animate-fade-in-up delay-100">
            INSIGHTS <br /><span className="text-brush text-5xl md:text-7xl lg:text-9xl ml-4">HUB.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto leading-relaxed italic border-l-2 border-zinc-800 pl-8 animate-fade-in delay-200">
            &quot;Decoding the engineering behind autonomous systems, workflow automation, and practical AI execution.&quot;
          </p>
        </div>
      </section>

      {/* Featured Post (First one) */}
      {posts.length > 0 && (
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <Link href={`/blog/${posts[0].slug}`} className="group block relative overflow-hidden rounded-[3rem] border border-brand-plum/20 bg-brand-plum/5 backdrop-blur-xl hover:bg-brand-plum/10 transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="aspect-[16/10] lg:aspect-auto relative overflow-hidden order-1 lg:order-2 bg-brand-bg/50">
                   <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-bg via-brand-bg/30 to-transparent opacity-80" />
                   <Image
                     src={posts[0].frontmatter.image || '/brand/aifloxium-logo.png'}
                     alt={posts[0].frontmatter.title}
                     fill
                     className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
                     sizes="(max-width: 1024px) 100vw, 50vw"
                   />
                </div>
                
                <div className="p-12 md:p-16 flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex items-center gap-6 mb-8 text-[10px] font-mono uppercase tracking-widest text-white">
                    <span className="flex items-center gap-2 text-brand-orange"><Zap className="w-3 h-3 fill-brand-orange" /> {posts[0].frontmatter.category}</span>
                    <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {posts[0].frontmatter.date}</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-black text-brand-orange tracking-tighter leading-[0.9] mb-8 group-hover:text-brand-orange transition-all duration-500">
                    {posts[0].frontmatter.title}
                  </h2>
                  
                  <p className="text-lg text-white mb-12 leading-relaxed max-w-lg">
                    {posts[0].frontmatter.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-white">
                    Read Intelligence <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid - Mixture: Light Section */}
      <section className="py-32 px-6 bg-white border-y border-gray-100 relative overflow-hidden" data-theme="light">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #581C87 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-gray-100 pb-12">
             <div className="max-w-xl">
               <h3 className="text-4xl font-black text-black tracking-tighter uppercase mb-4">Latest Research</h3>
               <p className="text-black font-bold">Technological explorations in neural workflows, agentic reasoning, and scalable AI architectures.</p>
             </div>
             
             <p className="max-w-sm text-sm font-medium leading-relaxed text-zinc-600">
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
                className="group p-8 md:p-12 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-brand-plum/30 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-20px_rgba(88,28,135,0.15)]"
              >
                <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-brand-plum/10 bg-white">
                  <Image
                    src={post.frontmatter.image || '/brand/aifloxium-logo.png'}
                    alt={post.frontmatter.title}
                    fill
                    className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex items-center justify-between mb-8">
                  <span className="px-3 py-1 rounded-full bg-white text-[10px] font-mono text-black border border-brand-plum/10 uppercase tracking-widest">
                    {post.frontmatter.category}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> {post.frontmatter.date}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-black tracking-tighter leading-[0.9] mb-6 group-hover:text-brand-orange transition-colors">
                  {post.frontmatter.title}
                </h3>
                
                <p className="text-black text-sm font-medium leading-relaxed mb-10 line-clamp-3">
                  {post.frontmatter.description}
                </p>
                
                <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center font-black text-[10px] text-black">
                      {post.frontmatter.author?.charAt(0) || 'A'}
                    </div>
                    <span className="text-[10px] font-mono text-zinc-800 font-bold uppercase tracking-widest">{post.frontmatter.author}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-brand-plum group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-plum/5 py-16 border-t border-brand-plum/10">
        <Contact2 
          title="Custom Workflows Built for Scale."
          description="Ready to automate your operations with state-of-the-art AI infrastructure? Let's connect."
        />
      </section>

      <Footer />
    </main>
  );
}
