import type { Metadata } from "next";

import { Badge } from "@/components/badge";
import { Section } from "@/components/section";
import { TokenExplorer } from "@/components/token-explorer";
import { createMetadata } from "@/lib/seo";
import { getDetailedProject } from "@/lib/projects";

const project = getDetailedProject("meme-token-trader");

const tokens: TokenQuote[] = [
  { symbol: "PEPE", name: "Pepe Signal", price: 0.000001, change24h: 6.45, sentiment: "Bullish" },
  { symbol: "WIF", name: "Dogwifhat", price: 3.58, change24h: -2.15, sentiment: "Neutral" },
  { symbol: "FLOKI", name: "Floki Sprint", price: 0.00032, change24h: 12.81, sentiment: "Bullish" },
  { symbol: "BONK", name: "Bonk Pulse", price: 0.000019, change24h: 4.97, sentiment: "Bullish" },
  { symbol: "TURBO", name: "Turbo Vibe", price: 0.00022, change24h: -7.21, sentiment: "Bearish" },
  { symbol: "AIDOGE", name: "AI Doge", price: 0.00000042, change24h: 3.67, sentiment: "Neutral" },
];

export const metadata: Metadata = createMetadata({
  title: project.title,
  path: "/projects/meme-token-trader",
  description: project.summary,
});

export default function MemeTokenTraderPage() {
  return (
    <Section
      subtitle="Project"
      title={project.title}
      headline={project.summary}
      contentClassName="space-y-12"
    >
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <div className="card space-y-4 p-6">
            <h3 className="text-lg font-semibold text-ink">Problem</h3>
            <p>{project.problem}</p>
          </div>
          <div className="card space-y-4 p-6">
            <h3 className="text-lg font-semibold text-ink">Approach</h3>
            <p>{project.approach}</p>
          </div>
        </div>
        <aside className="space-y-6">
          <div className="card space-y-3 p-6">
            <h3 className="text-lg font-semibold text-ink">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
          <div className="card space-y-3 p-6">
            <h3 className="text-lg font-semibold text-ink">Features</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-ink">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="card space-y-4 p-6">
        <h3 className="text-lg font-semibold text-ink">Screenshots</h3>
        <p className="text-sm text-muted-ink">
          Placeholder imagery for the dashboard layout and comparison view. Final visuals will mix token cards with dense data tables.
        </p>
        <div className="h-48 rounded-2xl bg-gradient-to-br from-blue-100 via-white to-blue-50" aria-hidden />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-ink">Token Explorer Demo</h3>
        <p className="text-sm text-muted-ink">
          Aggregated token listings with sentiment signals, a local watchlist, and a compare modal. Data is mocked to illustrate the interaction model.
        </p>
        <TokenExplorer tokens={tokens} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card space-y-3 p-6">
          <h3 className="text-lg font-semibold text-ink">What I Learned</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-ink">
            {project.learnings.map((learning) => (
              <li key={learning}>{learning}</li>
            ))}
          </ul>
        </div>
        <div className="card space-y-3 p-6">
          <h3 className="text-lg font-semibold text-ink">Next Steps</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-ink">
            {project.nextSteps.map((next) => (
              <li key={next}>{next}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
