import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Personal Projects",
  description: "Side builds where I prototype ideas, test stacks, and keep shipping small improvements.",
  path: "/projects/personal",
});

const breadcrumbItems = [
  { href: "/projects", label: "Projects" },
  { href: "/projects/personal", label: "Personal Projects" },
];

const personalHighlights = [
  {
    title: "Meme Token Trading Explorer",
    subtitle: "Scanning emerging tokens with sentiment snapshots and quick comparisons.",
    summary:
      "Responsive dashboard that surfaces price moves, social momentum, and a watchlist so friends can vet meme tokens without bouncing between tabs.",
    href: "/projects/personal/meme-token-trader",
    badge: "Next.js · Tailwind · Charts",
  },
  {
    title: "AI Career Helper",
    subtitle: "Structured prep tools for STAR stories, resume bullets, and application tracking.",
    summary:
      "Suite of AI-assisted utilities that help students turn fuzzy experience into polished bullet points, practice prompts, and a clean applications board.",
    href: "/projects/personal/ai-career-helper",
    badge: "Next.js · TypeScript · LLM prototyping",
  },
  {
    title: "Portfolio Engine",
    subtitle: "Design system + CMS experiments that power this site.",
    summary:
      "Component library, content pipeline, and deployment workflow that keep my portfolio fast, accessible, and easy to iterate on without debt.",
    href: "/projects/personal/portfolio-engine",
    badge: "Design tokens · Contentlayer · Vercel",
  },
];

export default function PersonalProjectsPage() {
  return (
    <>
      <Section
        title="Personal Projects"
        subtitle="Independent Work"
        headline="Personal builds where I explore new stacks, test ideas quickly, and make the polish level match the problem I am solving."
        contentClassName="space-y-8"
      >
        <Breadcrumbs items={breadcrumbItems} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {personalHighlights.map((project) => (
            <article
              key={project.title}
              className="card h-full border border-slate-200 p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{project.badge}</p>
              <h3 className="mt-3 text-lg font-semibold text-ink">{project.title}</h3>
              <p className="mt-1 text-sm font-semibold text-muted-ink">{project.subtitle}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-ink">{project.summary}</p>
              <div className="mt-6">
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-strong)]/30 bg-[var(--accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--accent-strong)] transition hover:border-[var(--accent-strong)]/60"
                  aria-label={`Read more about ${project.title}`}
                >
                  <span>Read more</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section contentClassName="max-w-3xl text-center">
        <p className="text-base text-muted-ink">
          Have an idea that needs a quick prototype or polish pass? I enjoy taking scrappy concepts and turning them into
          usable tools fast, let’s build something together.
        </p>
      </Section>
    </>
  );
}
