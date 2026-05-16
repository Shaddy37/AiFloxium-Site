# Antigravity Blog System

Use this reference when converting blog drafts for the Antigravity/Redesign repo.

## Source and Destination

- Draft source: `blogs/<name>.md`
- Published content: `lib/content/posts/<slug>.mdx`
- Shared dynamic route: `app/blog/[slug]/page.tsx`
- Dedicated custom route example: `app/blog/openai-codex-tutorial-complete-guide-2026/page.tsx`

## Shared Components

- `components/blog/BlogPostLayout.tsx`
  - Handles the dark cinematic hero and editorial article wrapper
- `components/blog/MDXRenderer.tsx`
  - Handles MDX rendering, headings, tables, callouts, links, and code blocks
- `components/blog/CodeBlock.tsx`
  - Handles styled code blocks
- `components/blog/PremiumCTA.tsx`
  - Preferred CTA block

## Design Pattern

- Hero:
  - dark background
  - high-contrast white title
  - readable description
  - no low-contrast plum-on-plum headings
- Body:
  - light editorial reading surface
  - strong spacing
  - long-form readability first
- Images:
  - prefer clean 2D editorial illustrations
  - store under `public/blog/<slug>/`
- CTA usage:
  - usually 2-3 blocks max
  - place after major strategic sections or before "read next"

## SEO Pattern

- Always read and apply the `<!-- SEO PACKAGE -->` block first.
- Keep supplied metadata exact when the source gives exact values.
- Add stronger route-level metadata only when it complements, not contradicts, the package.
- Add structured data that matches the article shape:
  - `Article` almost always
  - `HowTo` when the article teaches a workflow
  - `FAQPage` when FAQs exist
  - `BreadcrumbList` on custom routes

## Internal Linking Pattern

Before adding internal links, inspect real existing content in:

- `lib/content/posts/`

Current known related posts:

- `/blog/linkedin-content-autopilot`
- `/blog/5-ai-automations-ecommerce`
- `/blog/autonomous-sales-rep`

Add internal links only where contextually natural.

## Conversion Checklist

1. Extract SEO package values.
2. Determine final slug.
3. Publish MDX with safe quoted frontmatter.
4. Preserve wording exactly unless user asked otherwise.
5. Reuse shared layout/rendering.
6. Add exact ALT text to every image slot.
7. Add internal/external links where useful.
8. Add CTA blocks where useful.
9. Add route-level metadata and schema if needed.
10. Check for frontmatter, MDX, path, and route conflicts before finishing.
