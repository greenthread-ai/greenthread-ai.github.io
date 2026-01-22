# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GreenThread landing site - a static marketing site for a distributed AI inference platform. Deployed on Vercel.

## Architecture

- **Static frontend**: Single-page landing site with vanilla HTML/CSS/JS (no build step)
- **Serverless API**: TypeScript functions in `api/` directory, deployed as Vercel serverless functions
- **Styling**: Custom CSS with CSS variables for theming (green brand colors: `#10b981`, `#059669`)
- **Fonts**: Crimson Pro (serif, for headings), Inter (sans-serif, for body), Geist (custom)

## Key Files

- `index.html` - Main landing page
- `styles.css` - All styles including responsive design, animated background effects
- `script.js` - Client-side JS for scroll effects, intersection observer animations, waitlist form handling
- `api/waitlist.ts` - Serverless endpoint that creates/updates contacts in Attio CRM
- `vercel.json` - Vercel deployment configuration (10s function timeout)

## Development

No build process required. Open `index.html` directly in browser for frontend development.

For testing the waitlist API endpoint locally, use Vercel CLI:
```bash
vercel dev
```

## Deployment

Deployed automatically via Vercel on push to main branch.
