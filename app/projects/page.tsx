import type { Metadata, Route } from "next";
import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";
import { projects } from "@/lib/projects";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  path: "/projects",
  description: "Featured builds including Meme Token Trading Website and AI Career Helper with detailed case studies.",
});

export default function ProjectsPage() {
  return (
    <Section
      title="Projects"
      subtitle="Case Studies"
      headline="Two flagship builds that explore sentiment-driven crypto dashboards and AI career guidance tools."
      contentClassName="grid gap-6 md:grid-cols-2"
    >
      {projects.map((project) => (
        (() => {
          const href = `/projects/${project.slug}` as Route;
          return (
            <ProjectCard
              key={project.slug}
              title={project.title}
              blurb={project.summary}
              href={href}
              stack={project.stack}
            >
              <p className="text-sm text-muted-ink">{project.approach}</p>
              <Link
                href={href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-strong)]"
              >
                Read more
              </Link>
            </ProjectCard>
          );
        })()
      ))}
    </Section>
  );
}
