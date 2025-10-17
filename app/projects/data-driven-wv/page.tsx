import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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

const projects = [
  {
    title: "UiPath + LLM-validated ETL",
    subtitle: "Automating tax document extraction and data validation.",
    summary:
      "Partnered with a statewide tax team to automate intake of scanned PDF filings using UiPath bots, Python ETL, and LLM validation.",
    href: "/projects/data-driven-wv/uipath-llm",
  },
  {
    title: "Kentro AI + Databricks Integration",
    subtitle: "Building intelligent automation inside a modern data stack.",
    summary:
      "Teamed with Kentro’s analytics group to prototype an AI agent that orchestrates Databricks workflows and improves model iteration.",
    href: "/projects/data-driven-wv/kentro-databricks",
  },
  {
    title: "Bridle Paths CRM Implementation",
    subtitle: "Modernizing nonprofit operations with Zoho CRM.",
    summary:
      "Worked alongside Bridle Paths leadership to launch a Zoho CRM that unifies volunteers, donors, and lesson scheduling in one system.",
    href: "/projects/data-driven-wv/bridle-paths-crm",
  },
];

export default function DataDrivenWVPage() {
  return (
    <>
      <Section
        title={project.title}
        subtitle="Organization Work"
        headline="Showcase selected organization work completed as part of Data Driven WV at West Virginia University. These projects focused on applying automation, data engineering, and AI-driven solutions to real-world business challenges, from tax document parsing and data validation to CRM automation and AI agent development."
        contentClassName="space-y-8"
      >
        <Breadcrumbs items={breadcrumbItems} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((item) => (
            <article
              key={item.title}
              className="card h-full border border-slate-200 p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                {item.subtitle}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-ink">{item.summary}</p>
              <div className="mt-5">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-strong)]/30 bg-[var(--accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--accent-strong)] transition hover:border-[var(--accent-strong)]/60"
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
          Curious how data automation and AI can transform your organization? Reach out to learn more about my applied
          analytics and automation projects.
        </p>
      </Section>
    </>
  );
}
