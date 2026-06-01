🔍 Impeccable Audit Report — AIFLOXIUM Landing Page
Target: app/page.tsx (Home) + all rendered sections + supporting chrome (Navbar, Footer, Popups, SmoothScroll, PageLoader, Tokens)
Method: Code-level review against reference/audit.md × reference/brand.md × SKILL.md absolute bans
Anti-Patterns Verdict (read this first)
FAIL — this page reads as AI-generated. It hits at least 9 distinct AI-tells from the absolute ban list and codex defect list, several multiplied across the page. The recipe is visible: dark plum background, orange accent, border + drop-shadow ghost cards, bg-clip-text gradient on every H1, tiny tracked eyebrow above every section, 01 — 02 — 03 markers as default scaffolding, glassmorphism everywhere, feTurbulence noise overlay fixed at z-9999, and the same "icon + bold heading + bullets + Learn more" card shape repeated across 5 grids. A visitor could guess the brief ("AI automation agency, dark, futuristic, agentic") and arrive at a near-identical page in 30 seconds with a stock template. Distinctiveness test fails at first order.
Audit Health Score
#	Dimension	Score	Key Finding
1	Accessibility	1/4	prefers-reduced-motion honored in only 2 places; mobile menu lacks focus trap/Escape/aria-controls; 8 autoplay videos with no poster; no skip-link
2	Performance	1/4	8 simultaneous autoplay loop videos (no preload, no poster, no defer); Lenis + Framer Motion running in parallel; PageLoader gates content behind a setTimeout
3	Theming	1/4	Zero OKLCH; ~150 hard-coded hex colors; themeColor: '#000000' mismatches the actual body bg #130716; --font-heading: "Clash Display" referenced but never loaded
4	Responsive	2/4	Works on mobile, but H1 ceilings hit 10rem (160px) — well above the 6rem cap; h-4.5 w-4.5 is invalid Tailwind (Check icons render at default size)
5	Anti-Patterns	0/4	9+ distinct tells; AI slop gallery
Total	 	5/20	🔴 Critical — fundamental issues
Rating band: 0–5 → Critical (the band the audit considers "fundamental issues; requires a wholesale rethinking, not patches").
Executive Summary
- Score: 5/20 (Critical)
- Issue count: 6× P0 · 11× P1 · 14× P2 · 9× P3
- Top critical issues:
1. 8 simultaneous autoplay videos (4 hero/section + 3 trust-grid + 1 footer) all hit CloudFront concurrently. On a 4G phone this is the largest single perf failure on the page.
2. Font reference is broken. --font-heading: "Clash Display", ... is set in app/globals.css:39 but Clash Display is never imported via next/font/local or <link>. Every font-heading class is silently falling back to Geist Sans. (The only file that has it is remotion/AIFLOXIUMIntro.tsx which is unused on the page.)
3. Geist + Geist Mono + Permanent Marker is the 2024-25 Vercel training default. The brand register's reflex-reject list bans it. The page is screaming "I am a Vercel-deployed AI-assembled site."
4. All-caps body copy is everywhere — "STOP THE CHAOS", "SHIP WITHOUT BLOAT", "SCALE CAPACITY NOT HEADCOUNT", "BUILT FOR REAL OPERATIONS", "PROTOCOLS OF EXECUTION", "PRICING PHILOSOPHY", "DIRECT ARCHITECT ACCESS", "BACKGROUND", "CLIENT VOICE", "REACH ME", "AUTOMATION STACK". Absolute ban. The whole page is YELLING.
5. bg-clip-text gradient headings on 8+ H1/H2s. Absolute ban.
6. Glassmorphism as default surface. 80+ uses of backdrop-blur-* / glass-card / liquid-glass. Absolute ban.
- Recommended next step: polish after the targeted surgical fixes below; or a proper redesign of the page's color + type system first.
Detailed Findings
🔴 P0 — Blocking
P0-1 · 8 autoplay videos on one page
- Location: components/ui/prisma-hero.tsx:107, components/sections/PrismaFeatures.tsx:94, components/sections/ProductionEvolved.tsx:140, components/ui/ruixen-bento-cards.tsx:100, components/sections/HomeSections.tsx:229/299/332, components/sections/Footer.tsx:25
- Category: Performance
- Impact: ~30–60MB of video payload, all hitting the same CloudFront host concurrently. Time to Interactive and Largest Contentful Paint will be dominated by the slowest video. Mobile users on metered connections will abandon.
- Recommendation: Load only the hero video on first paint; lazy-mount all others with IntersectionObserver + preload="metadata"; set poster on every <video>. Convert to a single looping WebM/HEVC and use AV1 if CloudFront supports it. Target ≤1 autoplaying video on first load.
- Command: $impeccable optimize
P0-2 · Broken font reference: Clash Display never loaded
- Location: app/globals.css:39 — --font-heading: "Clash Display", var(--font-geist-sans), sans-serif;
- Category: Theming + Anti-pattern
- Impact: Every font-heading on the page (h1/h2/h3 in Hero, PrismaAbout, PrismaFeatures, HomeSections, Pricing, Footer, FeaturedProduct, all "BIG STATEMENTS") is silently rendering in Geist Sans black weight instead of a display face. This is why the whole page looks like a Vercel demo: it IS rendering as one. Identity is broken.
- Recommendation: Either (a) load Clash Display via next/font/local from a self-hosted .woff2, or (b) pick a real display face (e.g. a free replacement: Bricolage Grotesque, Boldonse, Familjen Grotesk — all banned-list-free) and load it. Also self-host to avoid the Google Fonts round trip.
- Command: $impeccable typeset
P0-3 · All-caps body copy is a screen-reader + readability failure
- Location: StoryNarrative.tsx:40–183, HomeSections.tsx:73/156/425/494, FeaturedProduct.tsx:28, ProjectFocus.tsx:61, Services.tsx:123, ChaosToClarity.tsx:36, HiddenCostSection.tsx:115, plus 5 more. Roughly 15 H1/H2 elements are full uppercase, often 6–7rem tall.
- Category: Accessibility (WCAG 1.3.1, 1.4.8) + Anti-pattern
- Impact: Absolute ban from the parent skill. Screen readers read "STOP THE CHAOS" as initialisms; non-native English readers parse worse; tracking at -0.05em plus 8vw is at the limit of legibility. The voice becomes a costume.
- Recommendation: Drop the all-caps default. Reserve UPPERCASE for ≤4-word labels, eyebrows, badges. Use font-weight: 900 + tight tracking for the "shouting" feel in a normal case sentence.
- Command: $impeccable clarify + $impeccable typeset
P0-4 · prefers-reduced-motion only honored in 2 components
- Location: Only components/providers/SmoothScroll.tsx:12 and components/ui/story-scroll.tsx:62 check the media query. Framer Motion animations in PrismaHero, PrismaAbout, PrismaFeatures, StoryNarrative, HomeSections, LazySections, FeaturedProduct, Footer, all popups do not honor it.
- Category: Accessibility (WCAG 2.3.3)
- Impact: Users who set the OS preference to reduce motion still get every WordsPullUp stagger, every whileInView translate, every hover--translate-y-1, every marquee. Vestibular disorder triggers.
- Recommendation: Wrap motion in a useReducedMotion() hook (you already have lib/use-reduced-motion.ts!) and short-circuit to the final state. Pair with the existing CSS media query in globals.css.
- Command: $impeccable animate + $impeccable harden
P0-5 · PageLoader gates content behind a 100ms timer
- Location: components/ui/page-loader.tsx:13-19
- Category: Performance + Anti-pattern
- Impact: The page mounts a black overlay + LumaSpin spinner for at least 100ms on EVERY load. The skill explicitly says "Reveal animations must enhance an already-visible default. Don't gate content visibility on a class-triggered transition." A spinner that flashes for 100ms is just a CLS contributor and a codex tell.
- Recommendation: Delete the loader entirely, or only show it after 400ms+ of real LCP delay. Also: PageLoader is imported nowhere I could find — verify it's not orphaned (dead code that still costs bundle).
- Command: $impeccable polish
P0-6 · Mobile menu lacks aria-controls, focus trap, and Escape-to-close
- Location: components/layouts/Navbar.tsx:276-338
- Category: Accessibility (WCAG 2.1.1, 2.4.3, 4.1.2)
- Impact: When the hamburger menu opens, keyboard users can't tell it's open (aria-expanded is missing), Tab still walks through the rest of the page behind it, Escape does nothing. You already have use-focus-trap in components/hooks/.
- Recommendation: Add aria-expanded={open} aria-controls="mobile-menu", wrap menu in useFocusTrap, close on Escape, return focus to the trigger on close.
- Command: $impeccable harden
🟠 P1 — Major (WCAG AA / clear quality failures)
P1-1 · themeColor: '#000000' mismatches the actual page bg #130716
- Location: app/layout.tsx:44 vs app/globals.css:18
- Category: Theming
- Impact: On Android Chrome, the address bar tints to pure black; the body plum peeks through and the seam between chrome and page is visible. Looks like a bug.
- Recommendation: Set themeColor: '#130716' to match --brand-bg.
P1-2 · No poster on any of the 8 videos
- Location: all <video> elements
- Category: Performance + Theming
- Impact: Until the first frame decodes, the video region is just the dark overlay. Hero LCP waits for video. Adding a poster (a single still) makes LCP independent of the video pipeline.
- Recommendation: Export the first frame of each video as a 1600×900 .webp and set poster per video.
P1-3 · Glassmorphism as default surface (80+ uses)
- Location: .glass-card (globals.css:84), .liquid-glass (used 6× in HomeSections/Footer), and backdrop-blur-* on ~80 elements.
- Category: Anti-pattern (absolute ban)
- Impact: Absolute ban. "Glassmorphism as default. Blurs and glass cards used decoratively. Rare and purposeful, or nothing." Every card + every nav + every popup is glass. Reads as "AI assembled from a shadcn registry."
- Recommendation: Keep glass only for: the navbar (one place where it earns its keep over a busy hero) and popups (one place where depth aids dismissal). Replace everywhere else with solid surfaces at varying brand-plum tints.
- Command: $impeccable quieter
P1-4 · bg-clip-text gradient on every H1/H2 (8+ instances)
- Location: StoryNarrative.tsx:40/110/183, HomeSections.tsx:156, ProductionEvolved.tsx:161, ruixen-bento-cards.tsx:138, Footer.tsx:50, Navbar.tsx:161, Hero.tsx:41, integrations-section.tsx:37, background-paths.tsx:93
- Category: Anti-pattern (absolute ban)
- Impact: "Decorative, never meaningful. Use a single solid color. Emphasis via weight or size." Every heading is doing the same white→accent sweep. Distinctive test fails instantly.
- Recommendation: Pick a single heading color per section. Use weight (already 900) and tight tracking for emphasis. Reserve color for the keyword in the headline, not the whole line.
- Command: $impeccable quieter + $impeccable typeset
P1-5 · Ghost-card pattern: 1px border + soft wide drop shadow on every card
- Location: StoryNarrative.tsx:48/59/70/124/135/146/197/208/219 (×9), PrismaFeatures.tsx:25/85, ProductionEvolved.tsx:183, ruixen-bento-cards.tsx:58, HomeSections.tsx:176, CapabilitiesEngineered.tsx, etc.
- Category: Anti-pattern (codex defect)
- Impact: The skill says: don't pair them. Pick one. The current pattern is "1px border white/5 + shadow-[0_4px_30px_rgba(0,0,0,0.3)]" repeated dozens of times. It is a codex tell.
- Recommendation: Drop the drop shadow OR raise the border to a defined brand color at 1.5–2px, and remove the shadow. One treatment per surface, not both.
- Command: $impeccable polish
P1-6 · 01 — 02 — 03 markers used as default scaffolding on non-sequences
- Location: StoryNarrative.tsx:34/103/176 (the only place it arguably works because the section is genuinely a 3-act story), PrismaFeatures.tsx:113/158/204 (these are 3 unrelated product offerings, NOT a sequence), HomeSections.tsx Process (genuine 4-step process — OK)
- Category: Anti-pattern (absolute ban)
- Impact: "Numbered section markers as default scaffolding. Putting 01 · About / 02 · Process / 03 · Pricing above every section is the eyebrow trope one tier deeper." The PrismaFeatures cards are not a sequence; numbering them is a label dressed as information.
- Recommendation: Keep the 01–03 only on genuine sequences (the Story acts, the Process steps). On product-card grids, drop the number and let the icon carry the hierarchy.
- Command: $impeccable typeset
P1-7 · Eyebrow above every section heading
- Location: Roughly 12+ instances. "01 — The Problem", "AGENTIC SYSTEMS EXPERT", "METHODOLOGY", "WHAT WE SOLVE", "MY VISION", "ARSENAL & TOOLING", "INVESTMENT", "DIRECT ARCHITECT ACCESS", "BACKGROUND", "AUTOMATION STACK", "REACH ME", "CLIENT VOICE", "FEATURED PRODUCT", "WHY IT MATTERS HERE", "FIND ME ONLINE".
- Category: Anti-pattern (absolute ban)
- Impact: "The 2023-era kicker is now the saturated AI scaffold; it appears on 55-95% of generations regardless of brief, which is the definition of a tell. One named kicker as a deliberate brand system is voice; an eyebrow on every section is AI grammar."
- Recommendation: Pick ONE named kicker pattern as a brand system (e.g. "ALWAYS / SHIPPING / IN PRODUCTION" — a recurring three-word motif). Use it 3-4× max on the page, not 15.
- Command: $impeccable typeset
P1-8 · display heading letter-spacing of -0.05em (Tighter than the -0.04em floor)
- Location: Everywhere tracking-tighter is used on font-heading — 50+ matches. tracking-tighter in Tailwind is -0.05em.
- Category: Anti-pattern (typography ceiling violation)
- Impact: Letters touch at 900 weight, especially with "STOP THE CHAOS" or "SHIP WITHOUT BLOAT" at 6.5rem. Skill: "Display letter-spacing floor: ≥ -0.04em."
- Recommendation: Replace tracking-tighter with tracking-[-0.035em] (or -0.04em for true display sizes). One global value, not per-section.
- Command: $impeccable typeset
P1-9 · Hero H1 ceilings exceed the 6rem (96px) cap
- Location: StoryNarrative.tsx:40/110/183 (clamp(2.5rem, 8vw, 6.5rem) = 104px), HiddenCostSection.tsx:115 (md:text-[7rem] = 112px), Hero.tsx:38 (lg:text-[10rem] = 160px), about page H1 (lg:text-8xl = 96px OK), blog page (lg:text-[10rem] = 160px).
- Category: Anti-pattern (typography ceiling violation)
- Impact: "Hero / display heading ceiling: clamp() max ≤ 6rem (~96px). Above that the page is shouting, not designing."
- Recommendation: Cap all display H1/H2 at clamp(_, _, 6rem). Make ONE exception only for not-found-2.tsx where the 404 visual language justifies it.
- Command: $impeccable typeset
P1-10 · h-4.5 w-4.5 is not a valid Tailwind class
- Location: PrismaFeatures.tsx:131/177/223 (3× in the checklists)
- Category: Theming (bug) + Accessibility (touch target — Check icons render at 24px, not 18px)
- Impact: Tailwind doesn't ship 4.5 as a default spacing scale. The Check icons render at their lucide-react default size (24px), not 18px as intended. The 3 checklists visually mismatch the intended grid.
- Recommendation: Replace with h-4 w-4 or h-[18px] w-[18px].
- Command: $impeccable polish
P1-11 · Mismatched themeColor + body bg + hero video
- Location: app/layout.tsx:44 (#000000) vs app/globals.css:18 (#130716) vs PrismaHero's bg-black wrapper.
- Category: Theming
- Impact: The hero's outer bg-black is visible as a 1–2px sliver around the rounded inner card. Either commit to plum or commit to black, but don't mix.
- Recommendation: Pick ONE base for the page. The plum (#130716) is more on-brand; change the outer hero to bg-brand-bg.
🟡 P2 — Minor
- P2-1 · Permanent Marker brush accent is a costume. Used as .text-brush on a single keyword in 4 places. Skill: "monospace as lazy shorthand for 'technical / developer' is a ban." Same logic applies: a graffiti font used as a decorative accent reads as "designer who grabbed a brush font because the brief said edgy." Either commit to a real brush face (e.g. Caveat Brush, Wedges) and use it as a system, or drop it.
- P2-2 · CornerPlusIcons at every card corner. A constant 4-corner + glyph marks ~10 surfaces. Reads as the 2024 shadcn registry export, not a brand mark. Remove or turn into a real brand watermark.
- P2-3 · noise-overlay / grainy-overlay (feTurbulence SVG) on top of every section. grainy-overlay is fixed at z-9999 (skill: "Build a semantic z-index scale — dropdown → sticky → modal-backdrop → modal → toast → tooltip. Never arbitrary values like 999 or 9999.") Plus the SVG itself is a codex defect.
- P2-4 · hover:-translate-y-1 on every card (StoryNarrative.tsx:48/59/70/124/135/146/197/208/219, PrismaFeatures.tsx:25, ProductionEvolved.tsx:183, etc.) → layout thrashing and the same exact hover micro-interaction across 12+ cards. Distinctive test fails.
- P2-5 · Marketing buzzwords still in the codebase. components/ui/integrations-section.tsx:37 — "Supercharge your workflow" (forbidden: "streamline / empower / supercharge / leverage / unleash / transform / seamless / world-class / enterprise-grade / next-generation / cutting-edge / game-changer / mission-critical"). Also "elite ones automate it" in StoryNarrative.tsx:85 (the "X theater" cadence that the skill bans).
- P2-6 · Duplicate video URLs across sections. Some CloudFront URLs appear once, but the same d8j0ntlcm91z4 host serves all of them — if CloudFront has a single-region failure, the entire page goes dark. Add a fallback poster AND consider a next/video setup with proper CDN.
- P2-7 · Three competing primary CTAs on the hero/strip. Map My System (Free), Book a Call, Get My Free System Blueprint, plus 2 popups (scroll-lead-magnet, exit-intent-call). Skill: "A page with N equally-weighted CTAs has zero CTAs." Pick one.
- P2-8 · PERSON_NAME is repeated as a personal brand 3× on the home page alone (Hero subtitle via PERSON_ROLE, About section, FeaturedProduct). For a brand site the person can lead once; the rest is product.
- P2-9 · 2024-Now and 2023-2024 dates in the Trust section reference a brand timeline dated to last year. Verify these are intentional, not stale.
- P2-10 · elena brooks testimonial has no source link. "Halcyon" is an unverified client name. Either cite the source or remove — unattributed quotes damage trust.
- P2-11 · founder-headshot.webp is rendered grayscale opacity-60 group-hover:grayscale-0 in HomeSections.tsx:Founder. The lazy loading is good, but the dim+grayscale effect on a person's photo reads as "stock portrait I haven't replaced yet." If the headshot is real, show it at full opacity and color from first paint.
- P2-12 · Hard-coded hex values everywhere (~150 occurrences of #130716, #FF6B00, #581C87, #fafafa as raw hex in class= attributes). Skill mandate: OKLCH tokens. The current scheme has 5 named tokens but is bypassed everywhere.
- P2-13 · text-zinc-500 and text-zinc-600 body text on bg-zinc-900/30 cards. Below 4.5:1 contrast on multiple surfaces. Skill: "Muted gray body text on a tinted near-white. If the contrast is even close, bump the body color toward the ink end of the ramp."
- P2-14 · tracking-[0.2em] and tracking-[0.25em] and tracking-[0.3em] on 30+ labels — inconsistent kicker tracking. Pick one. Also: the use of both font-mono and font-sans for similar eyebrow text across sections is inconsistent.
🟢 P3 — Polish
- P3-1 · <html lang="en"> is correct, but no dir attribute is set (harmless for English, but if i18n is on the roadmap, set dir="ltr" explicitly).
- P3-2 · 8+ icon imports from lucide-react on the home page alone. lucide-react tree-shakes, so this is fine — but consider a single Icon barrel file for tidiness.
- P3-3 · data-theme="light" / data-theme="dark" is used on a few sections for the navbar color flip, but it's a code-only contract. Document the contract in DESIGN.md.
- P3-4 · use-popup-state cooldown logic (use-popup-state) is well-architected, but mobileBackButton: true on the exit-intent hook fires the popup on Android back-button — that may not match user intent on every path.
- P3-5 · SmoothScroll.tsx exposes lenis on window for debugging — fine in dev, but strip the (window as any).lenis = ... lines in production builds (gated by process.env.NODE_ENV).
- P3-6 · app/globals.css body color is var(--foreground) but Hero section overrides with bg-black. Inline bg-black over bg-background is inconsistent — the body is plum, the hero is true black.
- P3-7 · font-permanent-marker CSS variable is loaded but Permanent Marker is never actually referenced in any tsx component (only via --font-brush in the .text-brush class, which IS used). The class is fine; just noting the font weight was hard-pinned to 400 (no other weights), which limits its use.
- P3-8 · The <script type="application/ld+json"> for homeGraphJsonLd and rootGraphJsonLd are duplicated. Both FAQ and ItemList schemas appear on the home page. Verify both render in Google's Rich Results test.
- P3-9 · reactCompiler: true is enabled — but the codebase still uses several useCallback/useMemo patterns (e.g. Navbar.tsx:64-108) that the compiler could auto-handle. After compiler adoption, audit for unnecessary manual memoization.
Patterns & Systemic Issues
1. The "dark plum + orange + Geist + ghost card + glass + gradient + eyebrow + 01" stack is monoculture. Every panel on the page is a permutation of these 7 elements. There is no section that breaks the formula — the whole page is one rhythm. The brand register asks: "in one sentence, describe what you're about to build the way a competitor would describe theirs." AIFLOXIUM's sentence right now: "We are a dark, plum-tinted, orange-accented AI agency with glass cards, gradient text, and ghost cards in a 01-02-03 scrollytelling." That fits 80% of AI-automation-agency landing pages shipped in 2024–25. The whole system needs a different aesthetic lane (terminal-native, brutalist-utility, editorial-typographic, etc.), not just a different color.
2. No design tokens, only Tailwind class soup. ~150 hard-coded hex colors in class attributes. 50 hard-coded tracking-[-Npx] or tracking-[Npx] magic numbers. 30 hard-coded clamp(_, _, _rem) values. There is no single source of truth for anything — colors, type, spacing. Whatever system exists is being bypassed per component.
3. Two separate motion engines running in parallel (Lenis + Framer Motion). They fight each other on scrollY reads and produce jank on low-end devices. Pick one or document the contract.
4. No reduced-motion compliance outside 2 files. The site is motion-heavy and the OS preference is barely respected.
5. Video as ambient atmosphere is the entire visual strategy. Every section uses video as the bg. Strip the video and the page is empty panels. The 2D design underneath the video was never finished.
Positive Findings
- SEO is exceptional. app/layout.tsx has full metadata, OG, Twitter, JSON-LD, robots, manifest, sitemap, llms.txt, openapi.json, DMCA. The structured data is well-shaped (FAQ + ItemList + root). This is real production-quality SEO work.
- Accessibility intent exists. aria-label on the nav toggle, social icons, popups. role="dialog" on modals. The use-focus-trap and use-reduced-motion hooks are already written — they just aren't applied everywhere.
- Performance intent exists. Lenis smooth scroll, lazy video fade-in, loading="lazy" on the founder headshot, Next/Image with sizes, dynamic({ ssr: false }) for LumaSpin.
- The brand voice has a real POV. "Agentic OS", "Bottleneck Analysis", "Speed-to-Lead" — these are specific operational nouns, not the "supercharge / unleash / 10x" generic AI agency vocabulary (mostly — see P2-5 for the one offender).
- The dark plum + orange palette is committed in a way most AI sites aren't. brand-bg, brand-plum, brand-orange are real tokens, not 30 random Tailwind classes. The token system is the right shape; the discipline to use it is what's missing.
- SmoothScroll.tsx cleanup is correct — RAF is canceled, Lenis is destroyed, ref is cleared. The exit path is the way all client-side effects should be written.
- Page transitions exist (PageTransition.tsx).
Recommended Actions (in priority order)
 1. 🔴 P0 $impeccable optimize — Drop 7 of the 8 autoplay videos. Add poster to the remaining one. Lazy-mount with IntersectionObserver.
 2. 🔴 P0 $impeccable typeset — Load Clash Display (or replace with a free alternative), kill the all-caps headings, cap display H1 at 6rem, set letter-spacing to a single global -0.035em for display.
 3. 🔴 P0 $impeccable harden — Apply use-reduced-motion to every Framer Motion component. Add skip-link, mobile menu focus trap + Escape close + aria-expanded + aria-controls. Fix the themeColor mismatch.
 4. 🔴 P0 $impeccable quieter — Strip the bg-clip-text gradients from every H1/H2. Replace with a single solid heading color per section, with the keyword in brand-orange only.
 5. 🟠 P1 $impeccable typeset — Pick ONE eyebrow pattern (or none). Kill the 01—02—03 markers on non-sequence sections. Replace h-4.5 w-4.5 with real values.
 6. 🟠 P1 $impeccable polish — Strip the ghost-card border + drop-shadow combo. Keep one or the other. Remove hover:-translate-y-1 from every card.
 7. 🟠 P1 $impeccable quieter — Reduce backdrop-blur-* / glass-card to one or two surfaces (navbar, popup). Solid fills elsewhere.
 8. 🟠 P1 $impeccable clearer — Replace "supercharge" + "elite" + aphoristic rebuttals with specific nouns.
 9. 🟡 P2 $impeccable colorize — Migrate the ~150 hard-coded hex values into OKLCH tokens. Define a single bg, surface, surface-2, ink, ink-muted, accent ladder. Remove the raw #130716 / #FF6B00 / #581C87 from class attributes.
10. 🟡 P2 $impeccable layout — Make ONE section break the dark-grid rhythm. Asymmetric composition, larger type, less video, more typography. The page is asking for a single moment of stillness.
11. 🟢 P3 $impeccable adapt — Verify all headings at 320px, 375px, 414px, 768px, 1024px, 1280px, 1536px. The hero "AIFLOXIUM" with text-[12vw] at 320px is 38px tall and may overlap the subhead. Test, don't guess.
12. 🟢 P3 $impeccable audit (re-run) — After fixes, re-score. Target: ≥14/20.
You can ask me to run these one at a time, all at once, or in any order you prefer.

Re-run $impeccable audit after fixes to see your score improve.
Note on PRODUCT.md: The skill's setup script reports NO_PRODUCT_MD. For a deeper audit and to use craft / shape commands, you'll want to create one (the skill's init flow covers it). For this audit task the code itself was sufficient context.