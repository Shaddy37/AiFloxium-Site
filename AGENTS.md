# AGENTS.md - Developer Guidelines for This Project

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Project Overview

This is a Next.js 16.2.1 + React 19.2.4 TypeScript application with Tailwind CSS v4. The project is an AI agency website featuring 3D sections (Three.js/React Three Fiber), animations (Framer Motion, GSAP), and smooth scrolling (Lenis).

---

## Commands

### Development

```bash
npm run dev          # Start development server (port 3000)
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

**No test framework configured** - Tests are not run as part of CI/CD. To add testing, consider installing Vitest or Jest.

---

## Code Style Guidelines

### TypeScript

- **Strict Mode**: Enabled in `tsconfig.json` - all strict checks are on
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

- Use 2 spaces for indentation (no tabs)
- Use semicolons at statement end
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

- Use CSS-first configuration in `app/globals.css` with `@theme` directive
- Use `@import "tailwindcss"` (not @tailwind directives)
- Use CSS variables for colors: `bg-background`, `text-foreground`
- Use `cn()` utility from `@/lib/utils` to merge tailwind classes
- Avoid arbitrary values - use theme tokens instead

### Error Handling

- Use TypeScript types to prevent runtime errors
- Use try/catch with proper error boundaries for async operations
- Add `suppressHydrationWarning` to client components with hydration issues
- Handle Three.js/React Three Fiber errors gracefully with Suspense/fallback
- Wrap 3D scenes in ErrorBoundary components

---

## File Structure

```text
app/                    # Next.js App Router pages
├── page.tsx           # Route pages
├── layout.tsx         # Root/layout pages  
├── globals.css        # Global styles (Tailwind v4)
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

- Lazy load 3D scenes with `next/dynamic` and `ssr: false`
- Use low-poly models with Draco compression
- Implement loading skeletons/placeholders for 3D content

### Accessibility

- Respect `prefers-reduced-motion` media query
- Provide fallbacks for users without WebGL support

---

## Git Workflow

- **Never commit**: node_modules, .next, .env*, build output, .DS_Store
- **Always run** `npm run lint` before committing
- Create feature branches for new features
- Test locally with `npm run dev` before pushing
- Use descriptive commit messages (imperative mood)