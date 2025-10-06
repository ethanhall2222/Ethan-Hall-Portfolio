import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";
import { getProjectBySlug } from "@/lib/projects";

const project = (() => {
  const result = getProjectBySlug("data-driven-wv");
  if (!result) {
    throw new Error("Data Driven WV project not found");
  }
  return result;
})();

export const metadata: Metadata = createMetadata({
  title: project.title,
  description: project.summary,
  path: "/projects/data-driven-wv",
});

const breadcrumbItems = [
  { href: "/projects", label: "Projects" },
  { href: "/projects/data-driven-wv", label: project.title },
];

export default function DataDrivenWVPage() {
  return (
    <Section
      title={project.title}
      subtitle="Organization Work"
      headline="Selected organization work where I learned to pair UiPath with LLM validation and keep humans in the loop—staying pragmatic with dashboards and small agentic helpers."
      contentClassName="space-y-8"
    >
      <Breadcrumbs items={breadcrumbItems} />
      <div className="grid gap-6 md:grid-cols-2">
        {project.subitems?.map((item) => (
          <article key={item.slug} className="card h-full p-6">
            <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-3 text-sm text-muted-ink">{item.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
