import type { Metadata, Route } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

const projectSections: Array<{ title: string; description: string; href: Route }> = [
  {
    title: "Data Driven WV Projects",
    description:
      "I apply analytics and AI to real partner problems, turning messy processes into clear, measurable workflows that help teams move faster.",
    href: "/projects/data-driven-wv",
  },
  {
    title: "School Projects",
    description:
      "I practice core data, systems, and product skills in a structured setting, then test them against real rubrics and deadlines.",
    href: "/projects/school",
  },
  {
    title: "Personal Projects",
    description:
      "I explore ideas quickly, learn new stacks, and ship small tools that scratch my own itch.",
    href: "/projects/personal",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Projects",
  path: "/projects",
  description:
    "Three lenses on Ethan Hall's work—organization projects, coursework, and personal experiments—with links into deeper breakdowns.",
});

export default function ProjectsPage() {
  return (
    <Section
      
      subtitle="Projects"
      headline="Three active lanes where I learn how to build reliable tools, then stress-test them in different contexts."
      contentClassName="space-y-10"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {projectSections.map((section) => (
          <article key={section.title} className="card h-full p-6">
            <h3 className="text-lg font-semibold text-ink">{section.title}</h3>
            <p className="mt-3 text-sm text-muted-ink">{section.description}</p>
            <Link
              href={section.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-strong)]"
              prefetch
            >
              View details
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
