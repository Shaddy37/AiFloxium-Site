# CLAUDE.md

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