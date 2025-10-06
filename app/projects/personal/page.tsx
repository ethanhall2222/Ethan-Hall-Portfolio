import type { Metadata, Route } from "next";
import { ArrowRight } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";
import { getProjectsByCategory } from "@/lib/projects";

const personalProjects = getProjectsByCategory("personal");

export const metadata: Metadata = createMetadata({
  title: "Personal Projects",
  description: "Personal experiments where I practice building small, student-friendly tools.",
  path: "/projects/personal",
});

const breadcrumbItems = [
  { href: "/projects", label: "Projects" },
  { href: "/projects/personal", label: "Personal Projects" },
];

export default function PersonalProjectsPage() {
  return (
    <Section
      title="Personal Projects"
      subtitle="Independent Work"
      headline="Personal builds where I practice shipping simple, reliable tools and learn how to improve them through iteration."
      contentClassName="space-y-8"
    >
      <Breadcrumbs items={breadcrumbItems} />
      <div className="grid gap-6 md:grid-cols-2">
        {personalProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            blurb={project.summary}
            stack={project.stack ?? []}
            href={`/projects/${project.slug}` as Route}
          >
            <div className="flex items-center gap-2 text-sm text-[var(--accent-strong)]">
              <span>View project</span>
              <ArrowRight className="size-4" aria-hidden />
            </div>
          </ProjectCard>
        ))}
      </div>
    </Section>
  );
}
