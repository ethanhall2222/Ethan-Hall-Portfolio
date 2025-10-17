import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

const breadcrumbItems = [
  { href: "/projects", label: "Projects" },
  { href: "/projects/data-driven-wv", label: "Data Driven WV - Applied Projects" },
  { href: "/projects/data-driven-wv/uipath-llm", label: "UiPath + LLM-validated ETL" },
];

export const metadata: Metadata = createMetadata({
  title: "UiPath + LLM-validated ETL",
  description:
    "Automated tax document extraction and validation using UiPath bots, Python ETL, and large language models.",
  path: "/projects/data-driven-wv/uipath-llm",
});

export default function UiPathLlmPage() {
  return (
    <Section
      title="UiPath + LLM-validated ETL"
      subtitle="Case Study"
      headline="Automating tax document extraction and validation for a statewide team by pairing UiPath bots with Python ETL steps and LLM cross-checks."
      contentClassName="space-y-10"
    >
      <Breadcrumbs items={breadcrumbItems} />

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Project overview</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-ink">
            The state’s tax department relied on manual review of scanned PDF filings. Each document contained nuanced
            language, tables, and handwritten notes that slowed compliance teams down. I architected an automation flow
            that let UiPath bots collect documents, while Python and Mistral AI parsed text, generated summaries, and
            highlighted discrepancies for specialists to review.
          </p>
        </article>

        <aside className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Role & responsibilities</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Designed the end-to-end ETL pipeline and orchestrated UiPath bot scheduling.</li>
            <li>Implemented Python extractors to normalize OCR output across diverse PDF templates.</li>
            <li>Used Mistral AI and OpenAI APIs to structure CSV exports and produce reviewer-ready briefs.</li>
            <li>Created validation rules that flagged anomalies before data entered downstream systems.</li>
          </ul>
        </aside>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Impact</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Cut preparation time per filing from 20 minutes to fewer than 5 minutes.</li>
            <li>Delivered structured CSV outputs that fed directly into the agency’s compliance dashboards.</li>
            <li>Provided human reviewers with concise bullet summaries and confidence scores.</li>
          </ul>
        </article>

        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Stack & tooling</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>UiPath Orchestrator and Studio for bot development and scheduling.</li>
            <li>Python, Pandas, and PyPDF for extraction and data shaping.</li>
            <li>Mistral AI and OpenAI GPT APIs for summarization and schema validation.</li>
            <li>Azure Functions to run nightly batches and monitor completion status.</li>
          </ul>
        </article>
      </div>
    </Section>
  );
}
