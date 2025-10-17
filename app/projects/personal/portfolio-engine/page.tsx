import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

const breadcrumbItems = [
  { href: "/projects", label: "Projects" },
  { href: "/projects/personal", label: "Personal Projects" },
  { href: "/projects/personal/portfolio-engine", label: "Portfolio Engine" },
];

export const metadata: Metadata = createMetadata({
  title: "Portfolio Engine",
  description: "The design system and content tooling that power this site.",
  path: "/projects/personal/portfolio-engine",
});

export default function PortfolioEnginePage() {
  return (
    <Section
      title="Portfolio Engine"
      subtitle="Design & Delivery"
      headline="Experimenting with a reusable component library, CMS-friendly content pipeline, and automated deploys so updating my portfolio never feels heavy."
      contentClassName="space-y-8"
    >
      <Breadcrumbs items={breadcrumbItems} />

      <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-ink">System goals</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-ink">
          I wanted my portfolio to feel polished while staying fast to edit. That meant codifying typography, spacing, and
          animation tokens; wiring a content pipeline; and automating deploys so new case studies go live in minutes.
        </p>
      </article>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Architecture</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Next.js App Router with static export for blazing-fast GitHub Pages deployments.</li>
            <li>Design tokens stored in TypeScript for colors, radius, shadows, and motion primitives.</li>
            <li>Composable Section, Card, and Breadcrumb components to keep layouts consistent.</li>
            <li>Contentlayer-style MDX pipeline prototype for future blog/case-study content.</li>
          </ul>
        </article>

        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Workflow automation</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>GitHub Actions script that runs lint, build, and deploys to Pages.</li>
            <li>Storybook-like playground for rapidly iterating on components without touching production pages.</li>
            <li>VS Code tasks + snippets to scaffold new project detail pages in seconds.</li>
          </ul>
        </article>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Highlights</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Consistent hover states, drop shadows, and glassmorphism treatments across all case-study cards.</li>
            <li>Responsive typography scale that keeps headings sharp on phones and desktops.</li>
            <li>Focus-visible rings and reduced-motion fallbacks baked into base components.</li>
          </ul>
        </article>

        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">What’s next</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Hook MDX posts into the existing Section component for consistent storytelling.</li>
            <li>Add light/dark theming with design tokens and CSS custom properties.</li>
            <li>Publish starter templates so other students can fork the system quickly.</li>
          </ul>
        </article>
      </div>
    </Section>
  );
}
