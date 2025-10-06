import type { Metadata, Route } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";
import { getProjectBySlug, getProjectsByCategory } from "@/lib/projects";

const dataDriven = getProjectBySlug("data-driven-wv");
const schoolProjects = getProjectBySlug("school-projects");
const personalProjects = getProjectsByCategory("personal");

export const metadata: Metadata = createMetadata({
  title: "Projects",
  path: "/projects",
  description:
    "Grouped snapshots covering Data Driven WV work, personal experiments, and coursework at WVU.",
});

export default function ProjectsPage() {
  return (
    <Section
      title="Projects"
      subtitle="Collections"
      headline="A student snapshot of organization work, personal experiments, and coursework that help me learn how to build reliable tools."
      contentClassName="space-y-12"
    >
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-ink">Data Driven WV</h3>
        {dataDriven && (
          <ProjectCard
            title={dataDriven.title}
            blurb={dataDriven.summary}
            href={`/projects/${dataDriven.slug}` as Route}
            stack={dataDriven.stack ?? []}
          >
            <ul className="mt-4 space-y-1 text-sm text-muted-ink">
              {dataDriven.subitems?.map((item) => (
                <li key={item.slug}>• {item.title}</li>
              ))}
            </ul>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-strong)]">
              <span>Visit hub</span>
              <ArrowRight className="size-4" aria-hidden />
            </div>
          </ProjectCard>
        )}
      </div>

      <div className="space-y-6">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-xl font-semibold text-ink">Personal Projects</h3>
          <Link
            href="/projects/personal"
            className="text-sm font-semibold text-[var(--accent-strong)]"
          >
            See all
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {personalProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              blurb={project.summary}
              href={`/projects/${project.slug}` as Route}
              stack={project.stack ?? []}
            >
              <div className="flex items-center gap-2 text-sm text-[var(--accent-strong)]">
                <span>View project</span>
                <ArrowRight className="size-4" aria-hidden />
              </div>
            </ProjectCard>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-ink">School Projects</h3>
        {schoolProjects && (
          <ProjectCard
            title={schoolProjects.title}
            blurb={schoolProjects.summary}
            href={`/projects/${schoolProjects.slug}` as Route}
            stack={schoolProjects.stack ?? []}
          >
            <ul className="mt-4 space-y-1 text-sm text-muted-ink">
              {schoolProjects.subitems?.map((item) => (
                <li key={item.slug}>• {item.title}</li>
              ))}
            </ul>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-strong)]">
              <span>Review coursework</span>
              <ArrowRight className="size-4" aria-hidden />
            </div>
          </ProjectCard>
        )}
      </div>
    </Section>
  );
}
