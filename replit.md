# VertexAI - AI Development Agency Website

## Overview

This is a marketing website for an AI and computer vision software development agency called VertexAI (also referred to as NexusAI in the header). The site is built as a single-page application showcasing the agency's services, portfolio, process, and contact information. It targets small to medium businesses looking to integrate AI and computer vision solutions into their desktop and web applications.

The project was created using v0.app and is deployed on Vercel. It's a static marketing site with no backend functionality - forms are client-side only and don't submit to any server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js 16** with App Router - chosen for its excellent performance, built-in optimizations, and seamless Vercel deployment
- **React 19** - latest React version for modern component patterns
- **TypeScript** - provides type safety across the codebase

### Styling Approach
- **Tailwind CSS** - utility-first CSS framework for rapid styling
- **CSS Variables** - custom properties defined in `app/globals.css` for theming (dark theme by default)
- **OKLCH Color Space** - modern color format for better color manipulation
- **tw-animate-css** - animation utilities for Tailwind

### Component Library
- **shadcn/ui** - headless component primitives built on Radix UI
- **Radix UI** - extensive collection of accessible, unstyled components (accordion, dialog, dropdown, tabs, etc.)
- **Lucide React** - icon library
- **class-variance-authority (CVA)** - for building variant-based component APIs

### Key Design Patterns
- Components are organized in `/components` with UI primitives in `/components/ui`
- Each page section is a separate component (HeroSection, ServicesSection, etc.)
- Client components use `"use client"` directive for interactivity
- Utility functions in `/lib/utils.ts` (primarily the `cn` function for class merging)

### Page Structure
The main page (`app/page.tsx`) composes these sections:
1. AnimatedBackground - Canvas-based particle animation
2. Header - Fixed navigation with scroll effects
3. HeroSection - Main landing area
4. ServicesSection - Service cards grid
5. PortfolioCarousel - Before/after project showcases using Embla Carousel
6. ExpertiseSection - Detailed service descriptions
7. ProcessSection - Four-step process timeline
8. CTASection - Call to action with footer
9. ContactFormSection - Contact form (UI only, no backend)
10. EstimateBuilderWidget - Floating estimate calculator widget

## External Dependencies

### Deployment & Analytics
- **Vercel** - hosting platform with automatic deployments from v0.app
- **@vercel/analytics** - usage analytics integration

### UI Components (Radix UI ecosystem)
Full suite of Radix primitives for accessible UI components including dialogs, dropdowns, tooltips, tabs, accordions, and more.

### Additional Libraries
- **embla-carousel-react** - touch-friendly carousel for portfolio section
- **date-fns** - date manipulation utilities
- **@hookform/resolvers** - form validation (installed but forms are currently simple)
- **next-themes** - theme provider (dark mode infrastructure in place)
- **cmdk** - command palette component
- **input-otp** - OTP input component

### Fonts
- **Geist & Geist Mono** - Google Fonts loaded via `next/font`

### Static Assets
- Portfolio images expected in `/public/portfolio/` directory
- Favicon files with light/dark mode support
