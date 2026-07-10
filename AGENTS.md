# AGENTS.md - Developer Guidelines for This Project

> **SESSION START INSTRUCTION**: When opening this codebase for the first time in a new session, always read this file. It provides comprehensive guidelines for AI coding agents working on this project.
> 
> **CRITICAL MEMORY SYNCHRONIZATION RULE (SECOND BRAIN)**:
> 1. **Start of Session**: Read the Second Brain configuration notes at `C:\Users\Cc\Desktop\Second Brain\Home.md` (and related `Projects/`, `System/` or `Skills/` notes) to bootstrap your context.
> 2. **During Session**: If codebases, files, features, configurations, templates, or schemas are added, edited, or removed, you MUST automatically update the corresponding Second Brain note under `C:\Users\Cc\Desktop\Second Brain\Projects/` or `System/` or `Skills/`.
> 3. **End of Session**: Log a summary of actions, code modifications, and where the next session should begin inside the Daily Journal: `C:\Users\Cc\Desktop\Second Brain\Journal/YYYY-MM-DD.md` (creating it if it doesn't exist).

---

## Project Overview

- **Framework**: Next.js 16.2.1 (React 19.2.4) using App Router.
- **Language**: TypeScript (strict mode enabled).
- **Styling**: Tailwind CSS 4.0 (CSS-first styling configured in `app/globals.css`).
- **Animations**: Framer Motion, GSAP, and Lenis (for smooth scrolling).
- **3D Graphics**: Three.js (`@react-three/fiber`, `@react-three/drei`).
- **React Compiler**: Enabled (`reactCompiler: true` in `next.config.ts`) for automatic optimizations.

---

## Development Commands

- **Start Dev Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Start Production Server**: `npm run start`
- **Lint Code**: `npm run lint`

---

## File Structure

```
app/                    # Next.js App Router pages
├── page.tsx            # Home page route
├── layout.tsx          # Root layout
├── globals.css         # Global styles & Tailwind v4 theme variables
├── about/              # About page
├── services/           # Service-specific landing pages
└── blog/               # Blog pages (list and dynamic post views)

components/
├── ui/                 # Atomic UI components (buttons, inputs, cards)
├── layouts/            # Layout components (Navbar, Footer, etc.)
├── sections/           # Large page sections (Hero, Features, Vision)
├── three/              # 3D-specific components and scenes
└── providers/          # Context providers (SmoothScroll, etc.)

lib/
├── utils.ts            # Utility functions (cn() helper, etc.)
├── site.ts             # Global metadata & branding constants
└── content/
    └── posts/          # Published blog posts in MDX format
```

---

## Code Style & Development Conventions

### 1. TypeScript Rules
- Explicitly type all function parameters and return types where applicable.
- Path aliases: use `@/*` for absolute imports (e.g., `@/components/ui/button`).
- Do not add manual type casting/suppressions unless absolutely necessary.

### 2. Imports Ordering
Group imports in the following order (separated by empty lines):
1. Type imports (first)
2. React and built-in Node modules
3. Project local imports using `@/*`
4. UI component imports
5. Third-party packages
6. CSS and side-effect imports (last)

### 3. Naming Conventions
- **Component Files / Folder Names**: kebab-case (e.g. `ruixen-bento-cards.tsx`)
- **React Components**: PascalCase (e.g. `RuixenBentoCards`)
- **Functions & Variables**: camelCase (e.g. `getActiveIndex`)
- **Constants**: UPPER_SNAKE_CASE (e.g. `BRAND_NAME`)
- **Interfaces**: PascalCase with `Props` suffix (e.g. `ButtonProps`)

### 4. Component Patterns
- Use React Server Components by default. Add `"use client"` directive only if using client-side hooks, animations, or 3D canvas libraries.
- React Compiler is enabled: avoid manual `useMemo` or `useCallback` unless specifically required for reference equality in WebGL context frames or animation timelines.
- Use CVA (`class-variance-authority`) for managing component variants.
- Wrap 3D elements in `Suspense` and `ErrorBoundary` components to prevent runtime crashes.

### 5. Tailwind CSS v4 usage
- Leverage `@theme` in `app/globals.css` rather than old `tailwind.config.js` setups.
- Use CSS variables (`bg-background`, `text-foreground`, etc.) defined in globals.css for consistent branding.
- Avoid arbitrary values—stick to custom theme tokens.
- Use the `cn()` utility to merge Tailwind classes dynamically.

### 6. Blog Content Guidelines
- Drafts are stored in `blogs/*.md`.
- Published posts go to `lib/content/posts/*.mdx`.
- Blog rendering is driven by the dynamic route `app/blog/[slug]/page.tsx` using a shared layout component.
- Apply SEO packages directly at the top of markdown/MDX files.
