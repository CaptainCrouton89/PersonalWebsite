# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Architecture

This is a Next.js personal portfolio website that exports as a static site. The project has been migrated from a Vite/React setup to Next.js with TypeScript.

### Key Structure

- `app/` - Next.js app directory structure
  - `page.tsx` - Main homepage with profile and timeline
  - `layout.tsx` - Root layout with metadata
  - `components/` - React components including Timeline system
  - `data/timelineData.tsx` - Timeline data with JSX content
  - `types/timeline.ts` - TypeScript interfaces
  - `assets/` - Images and static assets

### Timeline System

The core feature is a timeline component system that displays career/project history:

- `Timeline.tsx` - Main timeline container
- `TimelineBlock.tsx` - Individual timeline entries
- `Connectors/` - Visual connectors between timeline blocks
- Timeline data includes JSX content, stats, and expandable sections

### Technology Stack

- **Framework**: Next.js 15 with static export
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS
- **Icons**: PrimeIcons
- **Special**: sr-quick for typewriter effect

### Build Configuration

- Static export enabled (`output: 'export'`)
- Image optimization disabled for static builds
- TypeScript path aliases configured (`@/*` -> `app/*`)

## Code Quality

Always run both `npm run lint` and `npm run type-check` before committing changes to ensure code quality and type safety.