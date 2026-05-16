# AGENTS.md - Developer Guidelines for This Project

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16.2.1 project designed for redesigning the AIFLOXIUM WordPress site with advanced 3D styles, animations, and a premium look. The project uses the App Router architecture, TypeScript, and Tailwind CSS for styling.

## Development Commands

- Start development server: `npm run dev`
- Build for production: `npm run build`
- Start production server: `npm run start`
- Lint code: `npm run lint`
- Format code (if Prettier is added): `npm run format`

Note: This project does not have a test suite configured. To add testing, consider installing a testing framework like Jest or Vitest.

## Code Architecture

### Next.js App Router Structure

This project uses Next.js 16.2.1 with the App Router (introduced in Next.js 13). The main application code is located in the `app` directory.

Key directories and files:
- `app/`: Contains all route segments using the App Router
  - `layout.tsx`: Root layout shared across all pages
  - `page.tsx`: Home page (index route) component
  - Additional route folders will be created as the site expands (e.g., `app/about/`, `app/products/`)

### Technology Stack

- **Framework**: Next.js 16.2.1 (React 19.2.4)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Build Tool**: Next.js built-in compiler with React Compiler enabled
- **Linting**: ESLint with Next.js configuration

### Configuration Files

- `next.config.ts`: Next.js configuration with React Compiler enabled
- `tsconfig.json`: TypeScript configuration
- `tailwindcss.config.mjs` (implied): Tailwind CSS configuration
- `eslint.config.mjs`: ESLint configuration
- `postcss.config.mjs`: PostCSS configuration for Tailwind

## 3D and Animation Focus

As this project aims to create an advanced and premium look with 3D styles and animations, consider the following when implementing features:

### Recommended Libraries for 3D/Animations
- **Three.js** (@react-three/fiber, @react-three/drei) for 3D graphics
- **Framer Motion** for complex animations
- **GSAP** for high-performance animations
- **React Spring** for spring-based animations
- **Lottie-react** for JSON-based animations

### Implementation Approach
1. Create reusable 3D components in a dedicated `components/` directory
2. Use Tailwind CSS for base styling and layout
3. Implement animations using Framer Motion or GSAP for better control
4. Consider performance implications of 3D content (lazy loading, optimization)
5. Ensure accessibility with reduced motion preferences

## Styling Guidelines

### Tailwind CSS Usage
- Utility-first approach for rapid UI development
- Customize Tailwind configuration in `tailwind.config.js` (create if needed)
- Use CSS variables for theme colors in `globals.css`
- Leverage Tailwind's dark mode support (already configured in base template)

### CSS Structure
- `globals.css`: Global styles, Tailwind base/utilities/components
- Component-specific styling: Use Tailwind classes directly or CSS modules
- Consider CSS-in-JS solutions like styled-components if needed for complex themes

## Component Organization

As the project grows, organize components following this structure:
```
components/
├── ui/              # Reusable UI components (buttons, cards, modals)
├── layout/          # Layout components (headers, footers, sidebars)
├── three/           # 3D-specific components and scenes
├── animations/      # Animation wrappers and presets
└── sections/        # Page sections (hero, features, testimonials)
```

## Performance Considerations

### For 3D Content
- Implement lazy loading for heavy 3D models
- Use compressed model formats (glb/gltf with Draco compression)
- Consider low-poly models for better performance
- Implement loading skeletons or placeholders

### General Next.js Optimization
- Use `next/image` for optimized image loading
- Leverage React Server Components where appropriate
- Implement proper caching strategies
- Use Next.js built-in image optimization

## Important Notes

### Next.js Version Specifics
- This version may have breaking changes from earlier Next.js versions
- Refer to the official Next.js documentation in `node_modules/next/dist/docs/` for API details
- The React Compiler is enabled (see `next.config.ts`) for automatic optimizations

### File Conventions
- All components use `.tsx` extension for TypeScript with JSX
- Follow PascalCase for component naming
- Use functional components with hooks (no class components)
- Export components as default or named exports appropriately

### Development Best Practices
- Create reusable components early to avoid duplication
- Use TypeScript interfaces for prop typing
- Implement proper error boundaries for 3D content
- Consider edge cases for animation performance on lower-end devices
- Test animations with prefers-reduced-media media query

### Deployment
- The project is configured for easy deployment to Vercel
- For other platforms, ensure Node.js 18+ is available
- Environment variables should be managed via `.env.local` (not committed)

### Reference Materials
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS Documentation: https://tailwindcss.com
- TypeScript Documentation: https://www.typescriptlang.org/docs/

## AGENTS.md Reference

See `AGENTS.md` for additional agent-specific rules that supplement this file.


<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Project Overview

Next.js 16.2.1 + React 19.2.4 TypeScript application with Tailwind CSS v4. AI agency website with 3D sections (Three.js/React Three Fiber), animations (Framer Motion, GSAP), smooth scrolling (Lenis), Vercel Speed Insights, and Vercel Analytics.

---

## Commands

### Development

```bash
npm run dev          # Start dev server (port 3000)
npm run build        # Build for production
npm run start        # Start production server
```

### Linting

```bash
npm run lint         # Run ESLint on entire project
npm run lint -- --fix  # Auto-fix linting issues
npm run lint <path>   # Lint specific file/folder
```

### Testing

**No test framework configured** - To add testing, install Vitest or Jest.

---

## Code Style Guidelines

### TypeScript

- **Strict Mode**: Enabled in `tsconfig.json` - all strict checks on
- **Path Alias**: Use `@/*` for absolute imports (e.g., `@/components/ui/Button`)
- **Type Annotations**: Prefer explicit types for function parameters and return types
- **NoEmit**: TypeScript doesn't emit files - use Next.js built-in type checking

### Imports (Grouped Order)

```typescript
// 1. Type imports (first)
import type { NextConfig } from "next";
// 2. React imports
import React from "react";
// 3. Project imports (@/)
import { cn } from "@/lib/utils";
// 4. Component imports
import { Button } from "@/components/ui/button";
// 5. Third-party imports
import { Slot } from "@radix-ui/react-slot";
// 6. Side effects (last)
import "./globals.css";
```

### Naming Conventions

| Type | Convention | Example |
| :--- | :--- | :--- |
| Files | kebab-case | `my-component.tsx` |
| Components | PascalCase | `MyComponent` |
| Functions | camelCase | `myHelperFunction` |
| Constants | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT` |
| Interfaces | PascalCase + Props suffix | `ButtonProps` |

### Formatting

- 2 spaces indentation (no tabs)
- Semicolons at statement end
- Single quotes for strings (except JSX props)
- No trailing commas in function parameters
- Max line length: 100 characters

### Component Patterns

```typescript
// Use React.forwardRef for components needing ref forwarding
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
  }
)
Button.displayName = "Button"

// Use CVA for component variants
import { cva, type VariantProps } from "class-variance-authority"
const buttonVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", destructive: "..." },
    size: { default: "...", sm: "...", lg: "..." },
  },
  defaultVariants: { variant: "default", size: "default" },
})
```

### Tailwind CSS v4

- CSS-first config in `app/globals.css` with `@theme` directive
- Use `@import "tailwindcss"` (not @tailwind directives)
- Use CSS variables: `bg-background`, `text-foreground`
- Use `cn()` utility from `@/lib/utils` to merge tailwind classes
- Avoid arbitrary values - use theme tokens instead

### Error Handling

- Use TypeScript types to prevent runtime errors
- Use try/catch with proper error boundaries for async operations
- Add `suppressHydrationWarning` to client components with hydration issues
- Handle Three.js/React Three Fiber errors with Suspense/fallback
- Wrap 3D scenes in ErrorBoundary components

---

## File Structure

```
app/                    # Next.js App Router pages
├── page.tsx           # Route pages
├── layout.tsx         # Root/layout pages  
├── globals.css        # Global styles (Tailwind v4)
├── blog/              # Blog pages (add new posts here)
├── api/               # API routes (contact, etc.)
└── [slug]/           # Dynamic routes

components/
├── ui/               # Reusable UI components
├── layouts/          # Layout components (Navbar, etc.)
├── sections/         # Page sections
└── providers/        # Context providers

lib/
└── utils.ts          # Utility functions (cn() etc.)
```

---

## Third-Party Libraries

| Category | Libraries |
| :--- | :--- |
| UI | Radix UI primitives (@radix-ui/react-slot, @radix-ui/react-label) |
| Styling | Tailwind CSS v4, clsx, tailwind-merge, class-variance-authority |
| 3D | Three.js, @react-three/fiber, @react-three/drei |
| Animation | Framer Motion, GSAP, maath |
| Scroll | Lenis (smooth scrolling) |
| Fonts | Next.js Google Fonts (Geist) |
| Email | Resend |
| Analytics | @vercel/speed-insights, @vercel/analytics |

---

## React Compiler

This project has React Compiler enabled (`reactCompiler: true` in next.config.ts). This allows automatic memoization but requires:

- Valid React code (no incorrect hooks usage)
- No manual memoization (useMemo, useCallback) unless necessary

---

## Client vs Server Components

```typescript
// Server Component (default) - no "use client" directive
export default function Page() { ... }

// Client Component - add at top of file
"use client"
export default function ClientComponent() { ... }
```

---

## 3D/Animation Guidelines

### Performance

- Lazy load 3D scenes with `next/dynamic` (NOT with ssr: false in Next.js 16+)
- Use low-poly models with Draco compression
- Implement loading skeletons/placeholders for 3D content

### Accessibility

- Respect `prefers-reduced-motion` media query
- Provide fallbacks for users without WebGL support

---

## Blog

Add new blog posts by creating folders under `app/blog/` (e.g., `app/blog/my-new-post/page.tsx`).

## Blog Conversion Rules

- Source drafts may live in `blogs/*.md`
- Published long-form content should live in `lib/content/posts/*.mdx`
- Blog routes are rendered through `app/blog/[slug]/page.tsx` unless a dedicated static route needs custom metadata or behavior
- SEO metadata is defined in the `<!-- SEO PACKAGE -->` callout at the top of source `.md` files
- Never rewrite or shorten content during conversion; apply formatting only
- Image alt texts marked inline as `(ALT: ...)` must be applied exactly to the rendered image slot
- Reuse the shared blog post layout component for rendered posts

---

## Git Workflow

- **Never commit**: node_modules, .next, .env*, build output, .DS_Store
- **Always run** `npm run lint` before committing
- Create feature branches for new features
- Test locally with `npm run dev` before pushing
- Use descriptive commit messages (imperative mood)
