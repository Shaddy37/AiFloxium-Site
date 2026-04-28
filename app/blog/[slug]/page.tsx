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
      <section className="pt-40 pb-20 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-radial-glow opacity-30 pointer-events-none" />
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-xs uppercase tracking-widest">Back to Insights</span>
          </Link>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
            <div className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {date}</div>
            <div className="flex items-center gap-2"><User className="w-3 h-3" /> {author}</div>
            <div className="flex items-center gap-2"><Zap className="w-3 h-3 text-white" /> {category}</div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-black text-white tracking-tighter mb-12 leading-[0.85] uppercase">
            {title.split(':').length > 1 ? (
              <>
                <span className="text-zinc-600">{title.split(':')[0]}:</span> <br />
                <span className="text-gradient">{title.split(':')[1]}</span>
              </>
            ) : title}
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed italic border-l-2 border-zinc-800 pl-8 mb-16">
            &quot;{description}&quot;
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-32 px-6">
        <div className="container mx-auto max-w-3xl">
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
