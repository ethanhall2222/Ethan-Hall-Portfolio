# Ethan Hall - Portfolio

A light, responsive portfolio for Ethan G. Hall built with Next.js 14 App Router, TypeScript, and Tailwind CSS. The site highlights projects, resume milestones, writing, and a contact flow, all surfaced from structured data modules for easy updates.

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with theme tokens and utility-first layout
- Zod for form validation, lucide-react icon set
- Static data modules for projects and posts, dynamic metadata helpers, sitemap/robots

## Local Development
```bash
npm install
npm run dev
```
Visit http://localhost:3000 and edit files under `app/` or `components/` to iterate.

### Quality Checks
```bash
npm run lint   # ESLint (custom config with React + accessibility rules)
npx tsc --noEmit  # TypeScript type safety
```

> **Note:** `npm run build` fetches Google Fonts (Inter and Plus Jakarta Sans). If the environment has no outbound network access the build will fail; rerun once connectivity is available.

## Project Structure
```
app/            # App Router routes and API handler
components/     # Reusable UI building blocks
lib/            # Content registry, SEO utilities, analytics hook
public/         # Optimized imagery and favicons
types/          # Shared type declarations
```

Key content lives in `lib/projects.ts` and `lib/posts.ts`; update those arrays to refresh project cards, case studies, and blog entries without touching the views.

## Deployment
GitHub Pages is preconfigured via Actions. Push to `main` and the workflow in `.github/workflows/deploy.yml` will build and publish to `https://ethanhall2222.github.io/Ethan-Hall-Portfolio/`.

Local static export still works with: 
```bash
npm run build
npx serve out
```
The app also deploys cleanly to any Next.js-compatible host (Vercel, Netlify, etc.) if you prefer a dynamic platform.
