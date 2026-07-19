import type { PostFrontmatter } from '@/lib/mdx';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Zap, ChevronRight, ArrowRight } from 'lucide-react';

import { MDXRenderer } from '@/components/blog/MDXRenderer';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { MobileBlogNav } from '@/components/blog/MobileBlogNav';
import { MobileTopTOC } from '@/components/blog/MobileTopTOC';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/sections/Footer';

import { Contact2 } from '@/components/ui/contact-2';

interface RelatedPost {
  slug: string;
  title: string;
  description: string;
  category?: string;
}

interface BlogPostLayoutProps {
  code: string;
  frontmatter: PostFrontmatter;
  jsonLd: Record<string, unknown> | Record<string, unknown>[];
  slug?: string;
  relatedPosts?: RelatedPost[];
}

export function BlogPostLayout({ code, frontmatter, jsonLd, slug, relatedPosts }: BlogPostLayoutProps) {
  const { title, date, author, category, description, updatedAt, image, canonicalUrl } = frontmatter;
  const currentSlug = slug || (canonicalUrl ? canonicalUrl.split('/').pop() : '') || '';
  const hasMeta = Boolean(date || author || category || updatedAt);
  const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--background)] text-black selection:bg-[#7B2CBF]/20 selection:text-black">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Navbar />

      <section className="relative px-6 pb-20 pt-32 md:pt-40 bg-[var(--background)]">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[1000px] w-full -translate-x-1/2 bg-[var(--brand-purple-glow)] opacity-30 blur-[120px]" />
        <div className="container relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-8 md:mb-12 flex flex-wrap items-center justify-between gap-4">
            <nav className="flex flex-wrap items-center gap-2 text-[10px] font-semibold text-black uppercase tracking-widest relative z-10 text-left font-inter">
              <Link href="/" className="transition-colors hover:text-black">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-black/50" />
              <Link href="/blog" className="transition-colors hover:text-black">
                Blog
              </Link>
              <ChevronRight className="h-3 w-3 text-black/50" />
              <span className="text-black font-bold font-inter truncate max-w-[150px] sm:max-w-md">{title}</span>
            </nav>

            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-black/40 transition-colors hover:text-[#7B2CBF]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="font-mono text-[9px] uppercase tracking-wider text-black font-semibold hidden sm:inline font-inter">Back to Insights</span>
            </Link>
          </div>

          <h1 className="mb-8 text-4xl sm:text-5xl md:text-6xl font-instrument text-black tracking-tight leading-[1.05]">
            {title}
          </h1>

          {hasMeta ? (
            <div className="mb-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-black font-inter">
              {date ? (
                <div className="flex items-center gap-1.5 rounded-full border border-black/10 bg-[var(--muted)] px-3.5 py-1.5 shadow-sm">
                  <Calendar className="h-3.5 w-3.5 text-[#7B2CBF]" /> {date}
                </div>
              ) : null}
              {author ? (
                <div className="flex items-center gap-1.5 rounded-full border border-black/10 bg-[var(--muted)] px-3.5 py-1.5 shadow-sm">
                  <User className="h-3.5 w-3.5 text-[#7B2CBF]" /> {author}
                </div>
              ) : null}
              {category ? (
                <div className="flex items-center gap-1.5 rounded-full border border-black/10 bg-[var(--muted)] px-3.5 py-1.5 shadow-sm">
                  <Zap className="h-3.5 w-3.5 text-[#7B2CBF]" /> {category}
                </div>
              ) : null}
              {updatedAt ? (
                <div className="rounded-full border border-black/10 bg-[var(--muted)] px-3.5 py-1.5 shadow-sm">
                  Updated {updatedAt}
                </div>
              ) : null}
            </div>
          ) : null}

          {description ? (
            <p className="mx-auto mb-16 max-w-3xl border-l border-black/20 pl-8 text-lg md:text-xl font-inter font-light italic leading-relaxed text-black">
              &quot;{description}&quot;
            </p>
          ) : null}
        </div>
      </section>

      {image ? (
        <section className="relative -mt-8 px-6 pb-8 md:-mt-12 md:pb-12 bg-[var(--background)]">
          <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/5 bg-black/40 glass-card">
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

      <article className="relative min-h-screen overflow-x-clip bg-[var(--background)] py-20 border-t border-black/5 md:py-32">
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-black">
          <aside className="lg:col-span-3 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto pr-2 hidden lg:flex lg:flex-col lg:gap-8 scrollbar-thin scrollbar-thumb-black/10 scrollbar-track-transparent">
            <TableOfContents />
            <div className="rounded-3xl border border-black/5 bg-black/5 p-6">
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#7B2CBF] mb-4 block">Expert Support</span>
              <p className="text-sm text-black mb-6 font-inter font-light leading-relaxed">
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
          
          <div className="lg:col-span-9 max-w-3xl prose prose-invert prose-purple prose-headings:font-instrument prose-headings:font-semibold prose-headings:text-black prose-a:text-[#7B2CBF] prose-a:no-underline hover:prose-a:underline prose-strong:text-black prose-code:text-[#7B2CBF] prose-pre:bg-[var(--muted)] prose-pre:border prose-pre:border-black/5">
            {currentSlug !== 'google-antigravity-2-0-review-2026' && <MobileTopTOC />}
            <MDXRenderer code={code} />

            <div className="mt-16 not-prose border-t border-black/5 pt-12">
              <Contact2
                title="Scale Your AI Infrastructure."
                description="Ready to transition your workflows to multi-agent automation? Contact me today for a custom implementation audit."
              />
            </div>
          </div>
        </div>
      </article>

      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-24 px-6 bg-[var(--background)] border-t border-black/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-instrument text-black tracking-tight mb-12 text-center">
              Related <span className="font-instrument text-[#7B2CBF] italic">Articles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group p-6 rounded-2xl border border-black/5 bg-black/5 hover:border-[#7B2CBF]/30 hover:bg-[#7B2CBF]/5 transition-all duration-500 flex flex-col"
                >
                  {post.category && (
                    <span className="text-[9px] font-semibold text-[#7B2CBF] uppercase tracking-wider mb-3">
                      {post.category}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-black group-hover:text-[#7B2CBF] transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-black font-light leading-relaxed flex-1 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-black/5">
                    <span className="text-[10px] font-semibold text-black/40 group-hover:text-[#7B2CBF] uppercase tracking-wider transition-colors">
                      Read more
                    </span>
                    <ArrowRight className="w-3 h-3 text-black/40 group-hover:text-[#7B2CBF] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <MobileBlogNav />

      <Footer />
    </main>
  );
}
