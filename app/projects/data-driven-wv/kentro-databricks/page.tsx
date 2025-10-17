import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

const breadcrumbItems = [
  { href: "/projects", label: "Projects" },
  { href: "/projects/data-driven-wv", label: "Data Driven WV - Applied Projects" },
  { href: "/projects/data-driven-wv/kentro-databricks", label: "Kentro AI + Databricks Integration" },
];

export const metadata: Metadata = createMetadata({
  title: "Kentro AI + Databricks Integration",
  description: "Prototyping an AI agent to orchestrate data workflows inside Kentro’s Databricks environment.",
  path: "/projects/data-driven-wv/kentro-databricks",
});

export default function KentroDatabricksPage() {
  return (
    <Section
      title="Kentro AI + Databricks Integration"
      subtitle="Case Study"
      headline="Helping Kentro’s analytics team design an AI agent that keeps Databricks workflows running smoothly while giving data scientists tighter feedback loops."
      contentClassName="space-y-10"
    >
      <Breadcrumbs items={breadcrumbItems} />

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Project overview</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-ink">
            Kentro needed a way to experiment with generative AI inside its Databricks estate without disrupting
            production workloads. I partnered with their platform engineers to prototype an agent that could orchestrate
            data pipeline runs, surface context to ML engineers, and log every action for auditability. The pilot focused
            on augmented workflow management rather than replacing human decision-making.
          </p>
        </article>

        <aside className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Role & responsibilities</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Mapped existing Delta Live Tables jobs to identify automation opportunities.</li>
            <li>Integrated the Databricks Assistant API to provide contextual recommendations to engineers.</li>
            <li>Configured MLflow model registry triggers so the agent could monitor deployment-ready artifacts.</li>
            <li>Documented governance guardrails and human-in-the-loop checkpoints for leadership sign-off.</li>
          </ul>
        </aside>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Impact</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Reduced time-to-feedback on pipeline failures by automatically bundling logs and metadata.</li>
            <li>Enabled faster iteration on model experiments through automated notebook scaffolding.</li>
            <li>Established a reusable pattern for safe AI orchestration inside regulated data environments.</li>
          </ul>
        </article>

        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Stack & tooling</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Databricks Lakehouse with Delta Live Tables and Unity Catalog.</li>
            <li>MLflow for experiment tracking and model registry automation.</li>
            <li>Databricks Assistant and Azure OpenAI for contextual agent responses.</li>
            <li>dbt Core for downstream transformation alignment.</li>
          </ul>
        </article>
      </div>
    </Section>
  );
}
