import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { Contact2 } from "@/components/ui/contact-2";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Zap } from "lucide-react";
import { MDXRenderer } from "@/components/blog/MDXRenderer";
import { getPostBySlug, getAllPostSlugs } from "@/lib/mdx";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found | AIFLOXIUM' };
  }

  const { title, description, image } = post.frontmatter;

  return {
    title: `${title} | AIFLOXIUM`,
    description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${title} | AIFLOXIUM`,
      description,
      type: 'article',
      url: `https://aifloxium.online/blog/${slug}`,
      images: [{ url: image || '/og-image.jpg' }],
      authors: ['Muhammad Shadab Shams'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | AIFLOXIUM`,
      description,
      images: [image || '/og-image.jpg'],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { title, date, author, category, description, image } = post.frontmatter;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": image || "/og-image.jpg",
    "datePublished": date,
    "author": {
      "@type": "Person",
      "name": author || "Muhammad Shadab Shams",
    },
    "publisher": {
      "@type": "Organization",
      "name": "AIFLOXIUM",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aifloxium.online/favicon.ico"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://aifloxium.online/blog/${slug}`
    }
  };

  return (
    <main className="relative bg-background min-h-screen text-zinc-300 font-medium selection:bg-white selection:text-black overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />
      
      {/* Cinematic Hero */}
      <section className="pt-32 md:pt-40 pb-20 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-radial-glow opacity-30 pointer-events-none" />
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white hover:text-brand-orange transition-colors mb-8 md:mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-xs uppercase tracking-widest">Back to Insights</span>
          </Link>
          
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-10 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300">
            <div className="flex items-center gap-1.5 font-bold bg-white/5 px-3 py-1.5 rounded-full border border-white/10"><Calendar className="w-3 h-3 text-brand-plum" /> {date}</div>
            <div className="flex items-center gap-1.5 font-bold bg-white/5 px-3 py-1.5 rounded-full border border-white/10"><User className="w-3 h-3 text-brand-plum" /> {author}</div>
            <div className="flex items-center gap-1.5 font-bold bg-white/5 px-3 py-1.5 rounded-full border border-white/10"><Zap className="w-3 h-3 text-brand-orange" /> {category}</div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-plum tracking-tighter mb-12 leading-[0.95] uppercase">
            {title.split(':').length > 1 ? (
              <>
                <span className="text-white/40">{title.split(':')[0]}:</span> <br />
                <span className="text-brand-plum">{title.split(':')[1]}</span>
              </>
            ) : title}
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed italic border-l-2 border-zinc-800 pl-8 mb-16">
            &quot;{description}&quot;
          </p>
        </div>
      </section>

      {/* Article Content - Mixture: Light Section */}
      <article className="relative bg-white min-h-screen py-20 md:py-32 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.2)]" data-theme="light">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #581C87 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        
        <div className="max-w-3xl mx-auto px-6 md:px-0 relative z-10">
          <MDXRenderer code={post.code} />
        </div>
      </article>

      <section className="bg-zinc-950/20 py-16">
        <Contact2 
          title="Scale Your Infrastructure."
          description="Ready to build your autonomous systems? Connect with us for a deep-dive audit."
        />
      </section>

      <Footer />
    </main>
  );
}
