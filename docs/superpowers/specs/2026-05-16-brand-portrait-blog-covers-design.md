# Brand Portrait And Blog Cover Design

## Summary

Replace the current text-led site mark with a founder-based flat 2D portrait system derived from the photos in `mine/`, update the logo lockup text to `AIFLOXIUM by Shadab`, and add branded topic-specific main cover images for every currently published blog post.

## Goals

- Create a clean flat portrait asset based on the founder face for use as the brand mark.
- Use the portrait mark as the favicon and shared logo icon.
- Change the visible small logo lockup text from `by Muhammad` to `by Shadab`.
- Add topic-specific branded main images for all currently published blog posts.
- Keep the visual language consistent across favicon, logo mark, and blog covers.

## Non-Goals

- Do not rename the founder everywhere on the site.
- Do not rewrite published blog content.
- Do not redesign the broader site layout unless required to support the new assets.

## Inputs

- Source images:
  - `mine/IMG_0768.jpg`
  - `mine/Man_in_blazer_studio_photo_d55dcc8a23.jpeg`
- Current shared site brand wiring:
  - `components/layouts/navbar.tsx`
  - `app/layout.tsx`
  - `lib/site.ts`
  - `lib/seo.ts`
- Current published blog content:
  - `lib/content/posts/5-ai-automations-ecommerce.mdx`
  - `lib/content/posts/autonomous-sales-rep.mdx`
  - `lib/content/posts/linkedin-content-autopilot.mdx`
  - `lib/content/posts/openai-codex-tutorial-complete-guide-2026.mdx`

## Recommended Approach

Create one reusable flat founder portrait mark from the face in the source photo set, optimize it for small-size readability, and deploy it as the shared brand icon. Then create one topic-specific cover image per published post using the same portrait style, color system, and editorial composition rules so the blog archive reads as one branded series instead of a mixed asset collection.

This approach balances consistency and variety. The favicon and navbar need a simple mark that stays legible at very small sizes, while blog covers need stronger topic signaling and should not all look duplicated.

## Alternatives Considered

### 1. Single repeated portrait for every blog cover

Pros:

- Fastest implementation
- Lowest design variance risk

Cons:

- Blog grid feels repetitive
- Weak topic differentiation for readers and social previews

### 2. Portrait only for favicon/logo and text-only blog covers

Pros:

- Simplest brand rollout
- Minimal visual complexity

Cons:

- Does not solve the missing main-image problem strongly
- Leaves blog archive with weaker editorial identity

## Asset Design

### Founder Portrait Mark

- Style: clean flat 2D vector-like portrait
- Subject framing: face only
- Intended uses: favicon, shared logo mark, potentially social/logo metadata
- Constraints:
  - Must remain recognizable at favicon sizes
  - Must avoid intricate facial shading that collapses when reduced
  - Must work on dark and light contexts already present in the navbar and metadata surfaces

### Logo Lockup

- Text changes from the current small secondary line to `by Shadab`
- Primary brand text remains `AIFLOXIUM`
- Portrait mark becomes the icon component paired with the text lockup

### Blog Cover System

- One cover per currently published post
- Covers should be topic-specific while preserving a shared brand language
- Shared system elements:
  - same portrait illustration style
  - same palette family as the site branding
  - similar composition rhythm and spacing
  - readable headline area and subject hierarchy
- Topic-specific differentiation should come from supporting shapes, symbols, or scene motifs tied to each article theme

## Content Scope

Update all currently published posts in `lib/content/posts/`:

1. `5-ai-automations-ecommerce`
2. `autonomous-sales-rep`
3. `linkedin-content-autopilot`
4. `openai-codex-tutorial-complete-guide-2026`

Each post should point to a local branded image asset in `public/` or a dedicated blog asset subdirectory under `public/blog/`.

## Technical Plan

### Branding Integration

- Add new portrait-based brand assets under `public/`
- Update navbar branding in `components/layouts/navbar.tsx`
- Update metadata icon references in the app shell where needed
- Keep founder naming elsewhere unchanged unless the text belongs directly to the logo lockup

### Blog Integration

- Replace current per-post `image` frontmatter values with new local branded cover paths
- Ensure the shared blog route and metadata generation continue using those values for page render and SEO/social previews
- Review any route-specific blog metadata overrides so they reference the new branded assets consistently

### Verification

- Confirm build/lint passes after path updates
- Confirm every published post resolves a valid cover image path
- Confirm favicon and shared logo assets render without broken references

## Risks And Mitigations

### Risk: Small-size portrait loses clarity

Mitigation:

- Keep favicon mark face-only with simplified shapes and strong silhouette contrast

### Risk: Blog covers feel inconsistent

Mitigation:

- Use one shared portrait style and one palette system across all covers

### Risk: Existing route-specific metadata bypasses updated frontmatter

Mitigation:

- Review both the generic blog route and the dedicated OpenAI Codex route during implementation

## Open Decisions Resolved

- Portrait style: clean flat logo-like 2D
- Icon crop: face only
- Blog covers: topic-specific, not repeated
- Text lockup change: `by Shadab`
- Broader founder-name replacement: no, not unless part of the logo lockup

## Implementation Boundary

This spec covers asset generation, shared branding integration, favicon replacement, and published-blog cover rollout. It does not cover sitewide author/byline renaming, broader copy edits, or unrelated visual redesign work.
