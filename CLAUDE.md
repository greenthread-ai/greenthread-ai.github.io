# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GreenThread landing site - a 14-page marketing site for a distributed AI inference platform. Built with React + Vite + TypeScript + Tailwind CSS. Deployed on Vercel.

## Architecture

- **Framework**: React 18 + Vite + TypeScript
- **Routing**: React Router v6 (14 routes)
- **Styling**: Tailwind CSS with custom theme (brand colors, fonts, animations)
- **Animations**: Framer Motion for scroll-triggered effects and animated background
- **SEO**: react-helmet-async for per-page meta tags
- **Serverless API**: TypeScript functions in `api/` directory, deployed as Vercel serverless functions

## Project Structure

```
src/
├── components/
│   ├── layout/        # Header, Footer, Layout, AnimatedBackground
│   ├── ui/            # Button, Card, Badge, Input, Container
│   ├── sections/      # Hero, Features, Benefits, CTA, Team, PricingCalculator
│   └── forms/         # WaitlistForm
├── pages/
│   ├── Home.tsx, About.tsx, Pricing.tsx, Technology.tsx
│   ├── features/      # 5 feature pages
│   └── use-cases/     # 5 use-case pages
├── hooks/             # useScrollEffect, usePricingCalculator
├── lib/               # api.ts, constants.ts
└── data/              # navigation.ts, team.ts
api/
└── waitlist.ts        # Vercel serverless function for Attio CRM
public/
└── images/            # Static assets (logos, team photos, investor logos)
```

## Key Files

- `src/App.tsx` - Route definitions
- `src/components/layout/Layout.tsx` - Main layout wrapper with Header, Footer, AnimatedBackground
- `tailwind.config.js` - Custom theme with brand colors and animations
- `api/waitlist.ts` - Serverless endpoint that creates/updates contacts in Attio CRM
- `vercel.json` - Vercel deployment configuration with SPA rewrites

## Development

```bash
npm install
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Production build
npm run preview    # Preview production build
```

For testing the waitlist API endpoint locally, use Vercel CLI:
```bash
vercel dev
```

## Brand Colors (Tailwind)

- `brand-primary`: #10b981 (green)
- `brand-primary-hover`: #059669 (darker green)
- `brand-primary-light`: #34d399 (lighter green)
- `beige-50/100/200/300`: Warm off-white backgrounds

## Fonts

- **Crimson Pro** (serif): Headings
- **Inter** (sans-serif): Body text
- **Geist**: Custom font (loaded from /public/fonts)

## Routes

- `/` - Home
- `/about` - About page with team section
- `/pricing` - Pricing with interactive calculator
- `/technology` - Technical deep dive
- `/features/*` - 5 feature pages (model-multiplexing, hybrid-training, etc.)
- `/use-cases/*` - 5 use case pages (neoclouds, private-enterprise, etc.)

## Deployment

Deployed automatically via Vercel on push to main branch.

## Legacy Files

The old static HTML/CSS/JS files are still present (*.html.old, styles.css, script.js, pricing.js) but are no longer used. They can be removed once the React migration is verified in production.
