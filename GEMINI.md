# GEMINI.md - Aifloxium Redesign Project Instructions

This project is a high-end, cinematic redesign of the Aifloxium AI agency website, built with Next.js 16.2.1 and React 19.2.4. It emphasizes premium 3D visuals, smooth animations, and a modern "glassmorphism" aesthetic.

## Project Overview

*   **Framework:** Next.js 16.2.1 (App Router)
*   **Language:** TypeScript
*   **React Version:** 19.2.4 (React Compiler enabled)
*   **Styling:** Tailwind CSS 4.0 (using `@theme` and custom CSS variables)
*   **Animations:** Framer Motion, GSAP, Lenis (for smooth scrolling)
*   **3D Graphics:** Three.js (@react-three/fiber, @react-three/drei)
*   **Core Aesthetic:** Zinc-based dark theme, glass cards, radial glows, and text gradients.

## Building and Running

*   **Development:** `npm run dev` - Starts the development server.
*   **Build:** `npm run build` - Creates a production-ready build.
*   **Start:** `npm run start` - Runs the production server.
*   **Lint:** `npm run lint` - Runs ESLint for code quality checks.
*   **Testing:** (Placeholder) No test suite currently configured. TODO: Add Jest or Vitest.

## Development Conventions

*   **Architecture:** Follows the App Router pattern. Use Server Components by default; add `"use client"` only when interactive hooks (useState, useEffect) or animation/3D libraries are required.
*   **Component Structure:**
    *   `app/`: Route segments and layouts.
    *   `components/ui/`: Reusable, atomic UI elements (buttons, inputs, cards).
    *   `components/layouts/`: Shared layout pieces (Navbar, Footer).
    *   `components/sections/`: Large page sections (Hero, Services, Vision).
    *   `components/providers/`: Context providers and global effect wrappers (SmoothScroll).
    *   `components/three/`: 3D-specific components and scenes.
*   **Naming:** PascalCase for component files and functions (e.g., `Hero.tsx`).
*   **Styling:** Prefer Tailwind 4.0 utility classes. Global variables and complex styles like `.glass-card` are defined in `app/globals.css`.
*   **React Compiler:** The project has `reactCompiler: true` in `next.config.ts`. Avoid manual `useMemo` or `useCallback` unless specifically necessary for fine-tuned performance or dependency management outside the compiler's scope.
*   **Animations:**
    *   Use `framer-motion` for declarative UI animations.
    *   Use `gsap` for high-performance or complex timeline-based animations.
    *   Ensure all scrolling is handled within the `SmoothScroll` (Lenis) provider.

## Troubleshooting

*   **Turbopack Fatal Error:** If you encounter a `FATAL: An unexpected Turbopack error occurred` with a "Slow filesystem detected" warning (common on E: or network drives), the project is configured to use **Webpack** as a fallback. 
    *   The `dev` script uses `next dev --webpack`. 
    *   To try Turbopack again (if the filesystem issues are resolved), remove the `--webpack` flag.

⚠️ **Important:** This version of Next.js contains breaking changes and new APIs compared to earlier versions (e.g., v13-v15). 
*   Always refer to the internal documentation in `node_modules/next/dist/docs/` when unsure of API usage.
*   Heed deprecation notices in the terminal and editor.
*   See `AGENTS.md` and `CLAUDE.md` for supplementary AI-specific instructions and architecture details.
