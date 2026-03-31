# Antigravity Redesign

Modern AI agency website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Features 3D sections using Three.js/React Three Fiber, smooth animations with Framer Motion and GSAP, and smooth scrolling with Lenis.

## Features

- Next.js 16 App Router with React 19
- Tailwind CSS v4 with CSS-first configuration
- 3D sections with React Three Fiber
- Smooth animations with Framer Motion & GSAP
- Lenis smooth scrolling
- Contact form with Resend API
- SEO optimized with sitemap and robots.txt
- Responsive design with dark mode aesthetic

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

Create a `.env.local` file with:

```env
GOOGLE_AI_STUDIO_API_KEY=your_google_api_key
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL_TO=your_email@example.com
CONTACT_EMAIL_FROM=your_domain@resend.dev
```

## Tech Stack

- **Framework**: Next.js 16.2.1 + React 19.2.4
- **Styling**: Tailwind CSS v4
- **3D**: Three.js, @react-three/fiber, @react-three/drei
- **Animation**: Framer Motion, GSAP, maath
- **Scroll**: Lenis
- **Fonts**: Geist (Google Fonts via Next.js)
- **Email**: Resend

## License

MIT License - see LICENSE file for details.