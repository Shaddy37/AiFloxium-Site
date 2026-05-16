---
name: antigravity-blog-conversion
description: Convert source blog drafts in `blogs/*.md` into published Next.js blog posts for the Antigravity/Redesign project. Use when a markdown draft contains an SEO PACKAGE comment block, image ALT notes, or long-form article content that must be published without rewriting. Applies the exact SEO package, preserves wording, publishes to `lib/content/posts/*.mdx`, reuses the shared blog layout/rendering system, adds internal and external links, CTA sections, structured data, and 2D editorial visuals, and checks for MDX/frontmatter/rendering issues.
---

# Antigravity Blog Conversion

Convert raw blog drafts into production-ready posts for this repository without changing the author's meaning or voice.

## Start Here

1. Read the draft in `blogs/<name>.md`.
2. Read `references/blog-system.md` before editing anything.
3. Extract the SEO package exactly as written.
4. Preserve the article text exactly unless the user explicitly asks for attribution changes or content edits.

## Core Rules

- Do not rewrite, shorten, summarize, or paraphrase the article body unless the user explicitly asks.
- Treat the `<!-- SEO PACKAGE -->` block as authoritative for title, description, slug, canonical, keywords, schema intent, and image-alt rules.
- Quote frontmatter string values in MDX when they contain punctuation, dates, or colons.
- Apply ALT text exactly when the draft marks image slots with `ALT:`.
- Reuse the shared blog system rather than inventing a new one.
- Favor 2D editorial illustrations for new visuals and save them under `public/blog/<slug>/`.

## Workflow

### 1. Source Analysis

- Find the slug, title tag, meta description, canonical URL, keywords, schema type, internal link targets, and ALT notes from the SEO package.
- Identify whether the draft includes FAQ content, step-by-step workflows, comparison tables, code fences, or CTA opportunities.
- Check existing posts in `lib/content/posts/` so new internal links point to real content.

### 2. Publishing Structure

- Publish the article in `lib/content/posts/<slug>.mdx`.
- Use the shared dynamic route at `app/blog/[slug]/page.tsx` by default.
- Create a dedicated route at `app/blog/<slug>/page.tsx` only when the post needs custom metadata or custom JSON-LD beyond the shared route.

### 3. Rendering Standards

- Reuse:
  - `components/blog/BlogPostLayout.tsx`
  - `components/blog/MDXRenderer.tsx`
  - `components/blog/CodeBlock.tsx`
  - `components/blog/PremiumCTA.tsx`
- Maintain the established visual language:
  - dark cinematic hero
  - high-contrast white hero title
  - readable hero description
  - light editorial article body
  - strong code blocks, tables, callouts, and CTA spacing
  - mobile-safe reading experience

### 4. Content Enhancements

These are allowed because they improve publishing quality without rewriting the article:

- convert placeholders into real image blocks
- add relevant internal links to real site content
- add relevant external links to primary destinations
- insert 2-3 tasteful CTA blocks where they fit naturally
- convert raw sections into better MDX structure when needed
- add FAQ schema if the article includes FAQs
- add breadcrumb schema when a dedicated route is created

### 5. Images

- If the draft already references final images, render them directly.
- If the draft only includes ALT notes or placeholders, create 2D editorial visuals that match the article topic.
- Keep visuals clean, diagrammatic, and professional. Avoid generic stock-looking output.
- Store new assets in `public/blog/<slug>/`.

### 5A. Main Cover Image Rules

- Every published post must have one main cover image referenced by frontmatter `image:`.
- The main cover image is not optional when converting a draft unless the user explicitly tells you to skip it.
- Save the main cover in `public/blog/<slug>/` when the post has its own asset folder, or in the current shared cover location used by the project if that pattern is already established.
- Prefer a 1200x630 social-safe aspect ratio for the main cover so the same asset works for:
  - blog index cards
  - single-post hero image
  - OpenGraph and Twitter previews
- Do not rely on externally hosted stock images when you are expected to generate the post visual yourself.

### 5B. Cover Composition Standard

- Use a clean 2D editorial cover, not a photo collage.
- The cover should communicate the topic first and branding second.
- If founder artwork is used, keep it secondary unless the user explicitly wants a portrait-led cover.
- Prefer:
  - short eyebrow or category label
  - 1-2 line headline maximum
  - 1 short supporting line if needed
  - strong contrast background
  - generous safe margins on all sides
- Avoid:
  - paragraphs on the image
  - tiny body text
  - more than 3 major text blocks
  - text touching rounded corners or outer edges
  - visuals that depend on embedded external images inside SVGs unless you are sure the project renderer supports them

### 5C. Text-Fit Constraints For Cover Images

- Assume the image may be shown in cropped cards, responsive containers, and social previews.
- Keep all important text inside a conservative safe area.
- Use these practical constraints:
  - headline should usually stay at or below 2 lines
  - supporting line should usually stay at or below 1 line
  - bottom text must not sit too close to the lower edge
  - leave enough empty space that `object-contain` and `object-cover` both remain readable if the layout changes later
- If the title is too long, shorten the on-image wording while keeping the article title unchanged in metadata and body content.
- The cover image may use a tighter visual title than the full SEO title when necessary for readability.

### 5D. Implementation Rules For Generated Covers

- After generating a main image, update the post frontmatter `image:` path immediately.
- Make sure the referenced path is local and actually exists.
- If the post uses a dedicated route with custom metadata, update its OG/Twitter image references too.
- If the shared blog layout already renders `frontmatter.image`, reuse that instead of inventing a one-off rendering path.
- If the shared layout does not render the main cover yet, update the layout as part of the conversion task so published posts visibly show their cover image.

### 6. SEO and Schema

- Apply title, description, canonical, OpenGraph, Twitter, keywords, and other metadata from the SEO package exactly when provided.
- Extend with strong technical SEO only if it does not alter the supplied metadata:
  - `metadataBase`
  - `robots`
  - OG image alt
  - `Article`
  - `HowTo`
  - `FAQPage`
  - `BreadcrumbList`
- Prefer route-level metadata for post-specific behavior.

### 7. Verification

Before claiming completion:

- check for broken YAML frontmatter
- check for malformed MDX/JSX
- check for unresolved placeholders
- check for dead internal links you introduced
- check that all referenced local image paths exist
- check that the main cover image text is readable at blog-card scale and social-preview scale
- check that the cover does not depend on a broken nested asset reference
- check that the slug does not conflict with dynamic/static routing
- if Node tooling is unavailable, state that verification limit explicitly

## Deliverable

When complete, report:

- files created
- files updated
- whether a dedicated route was needed
- whether new image assets were created
- any verification limits

## References

- Read `references/blog-system.md` for the exact project file map, design system expectations, and publishing checklist.
