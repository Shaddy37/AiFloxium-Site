import type { PostFrontmatter } from '@/lib/mdx';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Zap } from 'lucide-react';

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
    <main className="relative min-h-screen overflow-x-hidden bg-background font-medium text-zinc-300 selection:bg-brand-orange selection:text-white">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Navbar />

      <section className="relative px-6 pb-20 pt-32 md:pt-40">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[1000px] w-full -translate-x-1/2 bg-radial-glow opacity-30" />
        <div className="container relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-8 md:mb-12 flex items-center justify-start">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-brand-orange"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-300 font-bold hidden sm:inline">Back to Insights</span>
            </Link>
          </div>

          <h1 className="mb-8 text-3xl font-black leading-[0.95] tracking-tighter text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] md:text-5xl lg:text-6xl">
            {title}
          </h1>

          {hasMeta ? (
            <div className="mb-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300">
              {date ? (
                <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-bold shadow-sm">
                  <Calendar className="h-3 w-3 text-brand-orange" /> {date}
                </div>
              ) : null}
              {author ? (
                <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-bold shadow-sm">
                  <User className="h-3 w-3 text-brand-orange" /> {author}
                </div>
              ) : null}
              {category ? (
                <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-bold shadow-sm">
                  <Zap className="h-3 w-3 text-brand-orange" /> {category}
                </div>
              ) : null}
              {updatedAt ? (
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-bold shadow-sm">
                  Updated {updatedAt}
                </div>
              ) : null}
            </div>
          ) : null}

          {description ? (
            <p className="mx-auto mb-16 max-w-3xl border-l-2 border-brand-orange/50 pl-8 text-xl italic leading-relaxed text-zinc-300 md:text-2xl">
              &quot;{description}&quot;
            </p>
          ) : null}
        </div>
      </section>

      {image ? (
        <section className="relative -mt-8 px-6 pb-8 md:-mt-12 md:pb-12">
          <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
            <Image
              src={image}
              alt={title}
              width={1200}
              height={630}
              className="h-auto w-full bg-brand-bg object-contain"
              sizes="(max-width: 1024px) 100vw, 1100px"
              priority
            />
          </div>
        </section>
      ) : null}

      <article
        className="relative min-h-screen overflow-x-clip bg-white py-20 shadow-[0_-20px_50px_rgba(0,0,0,0.2)] md:py-32"
        data-theme="light"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #581C87 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-zinc-800">
          <aside className="lg:col-span-3 lg:sticky lg:top-32 hidden lg:flex lg:flex-col lg:gap-8">
            <TableOfContents />
            <div className="rounded-3xl border border-brand-plum/10 bg-brand-plum/5 p-6 shadow-sm">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-plum font-black mb-4">Expert Support</h3>
              <p className="text-sm text-zinc-700 mb-6 font-bold leading-relaxed">
                Ready to scale your autonomous systems? Let&apos;s talk strategy.
              </p>
              <Link 
                href="/contact" 
                className="block text-center w-full rounded-full bg-brand-plum px-4 py-3 text-xs font-bold text-white shadow-md transition-transform hover:scale-105"
              >
                BOOK A CONSULTATION
              </Link>
            </div>
          </aside>
          
          <div className="lg:col-span-9 max-w-3xl prose prose-zinc prose-headings:text-brand-plum">
            {currentSlug !== 'google-antigravity-2-0-review-2026' && <MobileTopTOC />}
            <MDXRenderer code={code} />

            <div className="mt-16 not-prose border-t border-zinc-200 pt-12">
              <Contact2
                title="Scale Your AI Infrastructure."
                description="Ready to transition your workflows to multi-agent automation? Contact AiFloxium today for a custom implementation audit."
              />
            </div>
          </div>
        </div>
      </article>

      {currentSlug === 'google-antigravity-2-0-review-2026' && <MobileBlogNav />}

      <Footer />
    </main>
  );
}
