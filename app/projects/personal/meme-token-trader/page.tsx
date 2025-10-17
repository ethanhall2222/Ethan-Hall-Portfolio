import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

const breadcrumbItems = [
  { href: "/projects", label: "Projects" },
  { href: "/projects/personal", label: "Personal Projects" },
  { href: "/projects/personal/meme-token-trader", label: "Meme Token Trading Explorer" },
];

export const metadata: Metadata = createMetadata({
  title: "Meme Token Trading Explorer",
  description: "Scanning emerging tokens with quick sentiment reads and side-by-side comparisons.",
  path: "/projects/personal/meme-token-trader",
});

export default function MemeTokenTraderPage() {
  return (
    <Section
      title="Meme Token Trading Explorer"
      subtitle="Product Prototype"
      headline="A playful dashboard that helps curious friends vet meme tokens quickly without doomscrolling through multiple feeds."
      contentClassName="space-y-8"
    >
      <Breadcrumbs items={breadcrumbItems} />

      <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-ink">Why I built it</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-ink">
          Meme tokens spike and crash fast, and most discovery tools bury signal under noisy charts. I wanted a single
          screen that summarized a token’s price action, social sentiment, and liquidity so friends could decide if it was
          worth deeper research.
        </p>
      </article>

      <article className="card border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-transparent p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-ink">Product snapshot</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-ink">
          The production build leans into bold token cards, sentiment chips, and a side-by-side compare modal. It ships as
          a responsive SPA with animated state transitions so the dashboard feels quick even when data refreshes.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-muted-ink">
          <li>Stateful token grid with hover reveals for liquidity, supply, and contract age.</li>
          <li>Watchlist drawer that pins favorites and keeps an eye on alert thresholds.</li>
          <li>Compact chart overlays and heatmaps tuned for mobile swipes.</li>
        </ul>
      </article>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Experience design</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Card grid that surfaces market cap, 24h change, and liquidity score at a glance.</li>
            <li>Sentiment badges that blend social chatter tags with basic momentum indicators.</li>
            <li>Watchlist persistence for quickly revisiting tokens you are tracking.</li>
            <li>Compare modal showing side-by-side stats and sparkline charts.</li>
          </ul>
        </article>

        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Technical stack</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Next.js + App Router for fast routing and static export.</li>
            <li>TypeScript and TanStack Query to simulate data fetching and caching.</li>
            <li>Tailwind CSS design system with animated cards and subtle glassmorphism accents.</li>
            <li>Recharts mock data to visualize momentum without locking the UI to real feeds.</li>
          </ul>
        </article>
      </div>

      <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-ink">What I learned</h3>
        <ul className="mt-4 space-y-2 text-sm text-muted-ink">
          <li>Designing data-dense cards that still feel breathable on mobile and desktop.</li>
          <li>Using skeletons and optimistic UI patterns to keep mock data interactions lively.</li>
          <li>Balancing playful visuals with accessibility (contrast, keyboard nav, reduced motion).</li>
        </ul>
      </article>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Next steps</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Hook into live data sources via Moralis or DexScreener APIs.</li>
            <li>Add alerting for watchlist threshold breaches and social spikes.</li>
            <li>Experiment with small agent workflows for rug-pull risk scoring.</li>
          </ul>
        </article>

        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Artifacts</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-ink">
            Prototype repo and interactive demo are in progress. I’m polishing the chart theming and pipeline for real-time
            data before sharing public links.
          </p>
        </article>
      </div>
    </Section>
  );
}
