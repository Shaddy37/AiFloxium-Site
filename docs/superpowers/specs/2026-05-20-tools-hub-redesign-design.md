# Tools Hub Redesign Design

Date: 2026-05-20
Project: `E:\Antigravity\Redesign`
Scope: `/tools`, `/tools/automation-roi-calculator`, and the shared calculator UX/content layer

## Goal

Turn the current tools hub and flagship calculator into pages that can:

- rank for high-intent automation calculator searches
- convert search visitors into email leads and discovery calls
- explain the tool in plain English instead of jargon-heavy operator language
- look consistent with the stronger homepage quality instead of feeling like a basic bolt-on page
- work properly on mobile

## Approved Product Direction

These decisions were confirmed in chat:

- visible copy should be plain-English first, while metadata and search targeting can stay technical where needed
- `/tools` should be a hybrid page:
  - the live calculator should dominate the page
  - planned tools should still remain visible to support topical authority
- the main post-calculation conversion model should be:
  - useful summary visible on-page
  - email required for downloading the report
  - discovery call positioned as the stronger next step after interest is established

## Core Strategy

The pages should follow an SEO-first funnel.

That means:

- the calculator remains usable without forcing email first
- the page contains enough visible value to rank and satisfy search intent
- email capture is tied to a downloadable report, not the basic on-page result
- the on-page interpretation should make the result understandable even for a non-technical founder or ops lead
- the downloadable asset and discovery call become conversion layers on top of an already useful page

This is the best tradeoff for ranking, trust, shareability, and qualified lead capture.

## Problems In The Current Implementation

### UX and visual issues

- the hub and calculator repeat the same purple-heavy treatment, so sections blur together
- the calculator feels like a generic form block rather than a product-grade tool
- the page hierarchy is weak on mobile
- the result explanation assumes the user already understands ROI and automation language
- the hub does not visually prioritize the one live tool enough

### Copy and comprehension issues

- headings are too abstract or too internal-facing
- terms like `ROI`, `workflow drag`, and `opportunity score` are not always self-explanatory
- the user should quickly understand:
  - what this tool does
  - what to type in
  - what the output means
  - what to do next

### SEO and semantic issues

- metadata is present but not broad enough for long-tail coverage
- the visible content is too thin for stronger semantic relevance
- the hub page does not do enough topic-cluster work
- the calculator page needs clearer informational sections for search intent beyond pure tool usage
- the content is not optimized enough for LLM retrieval and answer generation

## Information Architecture

## `/tools`

`/tools` should become a hybrid authority page with this structure:

1. Hero focused on the live calculator
2. Plain-English explanation of what these tools help teams figure out
3. Featured live tool block with stronger CTA
4. Supporting value section:
   - time savings
   - manual process cost visibility
   - missed revenue from slow workflows
5. Planned tools section for topical breadth and future internal linking
6. Supporting keyword/topic cluster section
7. Conversion section into discovery call

The live calculator should get clear visual dominance over the roadmap cards.

## `/tools/automation-roi-calculator`

The flagship tool page should follow this flow:

1. Hero with plain-English promise
2. Quick explanation of what the calculator measures
3. Calculator section with grouped inputs and clearer helper text
4. Immediate result summary
5. Downloadable report CTA with email capture
6. Interpretation section:
   - what your result means
   - when automation is worth it
   - what to automate first
7. FAQ section targeting long-tail searches
8. CTA section for discovery call

## Copy Direction

The page should target technical query intent while speaking to humans in simpler language.

### Copy rules

- keep `automation ROI calculator` in metadata and support copy
- avoid making `ROI` the first concept users must decode
- use plain phrasing like:
  - `See how much manual work is costing your team`
  - `Estimate time saved, money saved, and missed revenue recovered`
  - `Find the first workflows worth automating`
- if a technical term stays on-page, define it immediately in plain language

### Terminology translation

- `ROI` becomes `return on automation investment` when explained, then mostly translates into:
  - time saved
  - payroll saved
  - revenue recovered
- `opportunity score` becomes a support label, not the main headline concept
- `workflow drag` becomes `manual work slowing your team down`

## SEO Strategy

## Search intent model

The flagship page needs to satisfy both:

- tool intent: user wants a calculator now
- informational intent: user wants to understand whether automation is worth it

## Primary keyword target

- `automation roi calculator`

## Secondary keyword targets

- `workflow automation calculator`
- `process automation savings calculator`
- `business automation cost savings`
- `manual process cost calculator`
- `time savings calculator for operations teams`
- `is automation worth it for small business`
- `how to calculate automation roi`
- `how much time is manual work costing my business`
- `small business automation calculator`
- `operations automation savings estimate`

## Semantic SEO plan

The visible content should naturally cover concepts related to:

- manual workflows
- repetitive admin work
- process bottlenecks
- labor cost waste
- operational inefficiency
- lead leakage
- reporting overhead
- internal tools
- workflow automation software
- AI automation for small business

## On-page SEO implementation

- stronger title and description alignment with plain-English benefits
- one clear H1 per page
- H2 sections that reflect informational queries
- more substantial intro copy and explanation blocks
- stronger internal links:
  - from `/tools` to the live calculator
  - from the calculator to relevant service pages
  - from both pages to future supporting content topics
- expanded FAQ targeting long-tail search terms

## LLM and AI-search optimization

The tool pages should be easier for AI systems to quote and summarize.

Implementation direction:

- use direct explanatory paragraphs that answer:
  - what the tool does
  - who it is for
  - what inputs it needs
  - what outputs it gives
- keep structured lists with clear labels
- strengthen schema accuracy and visible-page/schema alignment
- make headings more answer-like instead of purely promotional
- keep machine-readable summaries aligned with visible copy

## Schema Strategy

## `/tools`

Keep and improve:

- `CollectionPage`
- `BreadcrumbList`

Potential additions if content supports it:

- `ItemList` for live and planned tools

## `/tools/automation-roi-calculator`

Keep and improve:

- `SoftwareApplication`
- `FAQPage`
- `BreadcrumbList`

Possible enhancement:

- enrich the software schema description and application category language
- ensure FAQ questions match visible copy exactly

## UX and Visual Design

## Visual direction

Keep the overall site brand, but stop repeating the same purple treatment everywhere.

The tool pages should shift toward a warmer operator-dashboard feel:

- dark outer shell for continuity with the main site
- lighter result surfaces for contrast and readability
- orange used as emphasis, not as a blanket color
- clearer section separation through tone, spacing, and surface changes
- better card hierarchy and more obvious CTA contrast

## Mobile-first behavior

The redesign should assume mobile first, not desktop first.

Requirements:

- hero text scales down cleanly
- cards stack in a deliberate order
- calculator inputs remain readable and tappable
- result summary remains scan-friendly without horizontal crowding
- gated report form stacks cleanly
- CTA buttons remain obvious and easy to hit

## Calculator UX Changes

## Inputs

Inputs should be grouped and simplified.

Direction:

- clearer labels
- friendlier helper text
- less intimidating ordering
- optional explanation text for harder fields like average value
- better grouping around team, workload, and value assumptions

## Results

The result summary should emphasize plain-English meaning first.

Priority display:

1. time saved each month
2. money saved each month
3. possible annual upside
4. estimated payback period

The opportunity score can stay, but it should not be the lead story.

## Report gate

The current partial gate should become a download-focused gate.

Behavior:

- on-page summary remains visible
- fuller report is positioned as something to download by email
- the report should feel like a tangible asset, not just a hidden text block
- discovery call remains the stronger action after the user sees enough value

If implementation remains inline for now, the copy should still frame it as a report-style deliverable rather than a generic unlock.

## Content Additions

Both pages need richer content to support ranking and comprehension.

### `/tools`

Add sections that explain:

- what kinds of business problems these tools help estimate
- who the tools are built for
- how operators should use the outputs
- what future tools will cover

### Calculator page

Add sections that answer:

- what this calculator actually tells you
- when automation is worth it for a small business
- what kinds of workflows usually have the best payoff
- how to use the result without over-trusting a rough estimate

## Internal Linking Plan

- `/tools` should strongly link to `/tools/automation-roi-calculator`
- the calculator should link to:
  - `/services/n8n-workflow-automation`
  - `/services/autonomous-agents`
  - `/services/vibe-coding`
- future supporting articles should be linked once they exist:
  - how to calculate automation ROI
  - best workflows to automate first
  - is automation worth it for small business
  - how much time workflow automation can save

## Implementation Scope

Files expected to change:

- `app/tools/page.tsx`
- `app/tools/automation-roi-calculator/page.tsx`
- `components/tools/AutomationRoiCalculator.tsx`
- `lib/tools-data.ts`

Possible supporting changes:

- `app/sitemap.ts` only if needed for future topic entries
- `lib/seo.ts` only if a metadata helper needs a small extension

## Non-Goals

- building the next planned tools now
- adding a full downloadable PDF pipeline in this pass unless already trivial
- changing homepage navigation or unrelated site sections
- broad brand redesign outside the tools area

## Verification Plan

When Node is available, verify with:

```bash
npm run lint
npm run build
```

Manual review should confirm:

- mobile layout quality on `/tools`
- mobile layout quality on `/tools/automation-roi-calculator`
- heading clarity for non-technical users
- visible SEO content depth improvement
- report-gate flow clarity
- schema content still matches visible content

## Open Implementation Note

The best practical first implementation is:

- keep the report unlock inline if a true downloadable asset is not already wired
- rewrite the gate copy so email is clearly tied to getting the report
- make the page visibly useful before the gate
- improve the on-page result interpretation enough that the page can still rank well

That preserves momentum while moving the experience much closer to the intended SEO-first funnel.
