import type { PostFrontmatter } from '@/lib/mdx';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Zap, ChevronRight } from 'lucide-react';

import { MDXRenderer } from '@/components/blog/MDXRenderer';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { MobileBlogNav } from '@/components/blog/MobileBlogNav';
import { MobileTopTOC } from '@/components/blog/MobileTopTOC';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/sections/Footer';

import { Contact2 } from '@/components/ui/contact-2';

interface BlogPostLayoutProps {
  code: string;
  frontmatter: PostFrontmatter;
  jsonLd: Record<string, unknown> | Record<string, unknown>[];
  slug?: string;
}

export function BlogPostLayout({ code, frontmatter, jsonLd, slug }: BlogPostLayoutProps) {
  const { title, date, author, category, description, updatedAt, image, canonicalUrl } = frontmatter;
  const currentSlug = slug || (canonicalUrl ? canonicalUrl.split('/').pop() : '') || '';
  const hasMeta = Boolean(date || author || category || updatedAt);
  const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white text-zinc-800 selection:bg-[#7B2CBF] selection:text-zinc-900">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Navbar />

      <section className="relative px-6 pb-20 pt-32 md:pt-40 bg-gradient-to-b from-black to-[#0a0608]">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[1000px] w-full -translate-x-1/2 bg-[#7B2CBF]/5 opacity-30 blur-[120px]" />
        <div className="container relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-8 md:mb-12 flex flex-wrap items-center justify-between gap-4">
            <nav className="flex flex-wrap items-center gap-2 text-[10px] font-semibold text-white/50 uppercase tracking-widest relative z-10 text-left font-inter">
              <Link href="/" className="transition-colors hover:text-zinc-900">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-white/30" />
              <Link href="/blog" className="transition-colors hover:text-zinc-900">
                Blog
              </Link>
              <ChevronRight className="h-3 w-3 text-white/30" />
              <span className="text-zinc-900 font-bold font-inter truncate max-w-[150px] sm:max-w-md">{title}</span>
            </nav>

            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-white/40 transition-colors hover:text-[#E0AAFF]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 font-semibold hidden sm:inline font-inter">Back to Insights</span>
            </Link>
          </div>

          <h1 className="mb-8 text-4xl sm:text-5xl md:text-6xl font-instrument text-zinc-900 tracking-tight leading-[1.05]">
            {title}
          </h1>

          {hasMeta ? (
            <div className="mb-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50 font-inter">
              {date ? (
                <div className="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white/[0.01] px-3.5 py-1.5 shadow-sm liquid-glass">
                  <Calendar className="h-3.5 w-3.5 text-[#E0AAFF]" /> {date}
                </div>
              ) : null}
              {author ? (
                <div className="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white/[0.01] px-3.5 py-1.5 shadow-sm liquid-glass">
                  <User className="h-3.5 w-3.5 text-[#E0AAFF]" /> {author}
                </div>
              ) : null}
              {category ? (
                <div className="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white/[0.01] px-3.5 py-1.5 shadow-sm liquid-glass">
                  <Zap className="h-3.5 w-3.5 text-[#E0AAFF]" /> {category}
                </div>
              ) : null}
              {updatedAt ? (
                <div className="rounded-full border border-zinc-200 bg-white/[0.01] px-3.5 py-1.5 shadow-sm liquid-glass">
                  Updated {updatedAt}
                </div>
              ) : null}
            </div>
          ) : null}

          {description ? (
            <p className="mx-auto mb-16 max-w-3xl border-l-2 border-[#7B2CBF]/50 pl-8 text-lg md:text-xl font-inter font-light italic leading-relaxed text-zinc-600">
              &quot;{description}&quot;
            </p>
          ) : null}
        </div>
      </section>

      {image ? (
        <section className="relative -mt-8 px-6 pb-8 md:-mt-12 md:pb-12 bg-white">
          <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/5 bg-black/40 liquid-glass">
            <Image
              src={image}
              alt={title}
              width={1200}
              height={630}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 1100px"
              priority
              unoptimized
            />
          </div>
        </section>
      ) : null}

      <article className="relative min-h-screen overflow-x-clip bg-white py-20 border-t border-white/5 md:py-32">
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-zinc-800">
          <aside className="lg:col-span-3 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto pr-2 hidden lg:flex lg:flex-col lg:gap-8 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            <TableOfContents />
            <div className="rounded-3xl border border-white/5 bg-white/[0.01] p-6 liquid-glass">
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E0AAFF] mb-4 block">Expert Support</span>
              <p className="text-sm text-zinc-600 mb-6 font-inter font-light leading-relaxed">
                Ready to scale your autonomous systems? Let&apos;s talk strategy.
              </p>
              <Link 
                href="/contact" 
                className="block text-center w-full rounded-full bg-white text-black px-4 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#E0AAFF] transition-all duration-300 button-glow font-inter cursor-pointer"
              >
                BOOK A CONSULTATION
              </Link>
            </div>
          </aside>
          
          <div className="lg:col-span-9 max-w-3xl prose prose-invert prose-purple prose-headings:font-instrument prose-headings:font-semibold prose-headings:text-zinc-900 prose-a:text-[#E0AAFF] prose-a:no-underline hover:prose-a:underline prose-strong:text-zinc-900 prose-code:text-[#E0AAFF] prose-pre:bg-white/[0.01] prose-pre:border prose-pre:border-white/5 prose-pre:liquid-glass">
            {currentSlug !== 'google-antigravity-2-0-review-2026' && <MobileTopTOC />}
            <MDXRenderer code={code} />

            <div className="mt-16 not-prose border-t border-white/5 pt-12">
              <Contact2
                title="Scale Your AI Infrastructure."
                description="Ready to transition your workflows to multi-agent automation? Contact me today for a custom implementation audit."
              />
            </div>
          </div>
        </div>
      </article>

      <MobileBlogNav />

      <Footer />
    </main>
  );
}
