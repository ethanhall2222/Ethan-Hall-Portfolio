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

type EnterpriseCaseStudy = {
  title: string;
  overview: string;
  businessProblem: string;
  architecture: string[];
  technicalStack: string[];
  outcome: string;
};

const enterpriseCaseStudies: EnterpriseCaseStudy[] = [
  {
    title: "Trusted AI Toolkit",
    overview:
      "CLI-driven AI governance toolkit aligned with IBM and Microsoft model card practices for enterprise audit workflows.",
    businessProblem:
      "Enterprise teams need repeatable governance checks before and after model deployment, but most evaluation evidence is fragmented across notebooks and ad hoc scripts.",
    architecture: [
      "Configuration layer: YAML-driven scenario definitions and policy thresholds.",
      "Validation layer: Pydantic schemas enforce run configuration and output structure.",
      "Evaluation harness: Reliability, hallucination, fairness, and red-team checks in one orchestrated run.",
      "Reporting layer: Reasoning reports plus scorecard outputs in Markdown/HTML.",
      "Observability layer: Structured JSONL telemetry logs for audit-ready traceability.",
    ],
    technicalStack: ["Python", "Pydantic", "YAML", "JSONL telemetry", "Markdown/HTML report generation"],
    outcome:
      "Creates a consistent evidence trail for model risk review and supports governance-first AI delivery without locking teams into a single vendor.",
  },
  {
    title: "Databricks RAG Pipeline",
    overview:
      "Production-minded retrieval pipeline built around a Bronze/Silver/Gold medallion flow with evaluation loops for grounded responses.",
    businessProblem:
      "Knowledge workers need reliable answers from internal documentation, but generic LLM responses can drift without retrieval quality controls.",
    architecture: [
      "Data foundation: Bronze/Silver/Gold medallion architecture for ingestion, cleansing, and curated retrieval assets.",
      "Retrieval layer: Vector search index over enterprise-ready chunks.",
      "Orchestration layer: LangChain pipeline with Azure OpenAI for prompt + retrieval chaining.",
      "ML operations layer: MLflow tracking for experiments, prompts, and model behavior comparisons.",
      "Safety layer: Hallucination-focused evaluation loop and red-team testing before rollout.",
    ],
    technicalStack: ["Databricks", "Medallion architecture", "LangChain", "Azure OpenAI", "MLflow", "Vector search"],
    outcome:
      "Improves confidence in enterprise Q&A by prioritizing grounded retrieval and measurable evaluation cycles instead of one-pass prompting.",
  },
  {
    title: "Copilot Studio + External API Integration",
    overview:
      "Enterprise agent integration pattern using Copilot Studio, AdaptiveDialog YAML, and external API orchestration with controlled remediation paths.",
    businessProblem:
      "Enterprise copilots often fail at secure system integration due to auth flow complexity, token handling edge cases, and inconsistent API error handling.",
    architecture: [
      "Conversation design: AdaptiveDialog YAML state flow for deterministic transitions.",
      "Security layer: OAuth token lifecycle handling and defensive validation for encoding/format edge cases.",
      "Integration layer: AvePoint Fly API calls wrapped with explicit request/response contracts.",
      "Resilience layer: Error-code based remediation logic to route retries, user prompts, and fallback actions.",
      "Agent orchestration: Tool invocation pattern separating dialogue intent from backend execution.",
    ],
    technicalStack: ["Copilot Studio", "AdaptiveDialog YAML", "OAuth", "AvePoint Fly API", "API orchestration"],
    outcome:
      "Demonstrates a secure, maintainable way to connect conversational interfaces to enterprise systems while reducing brittle workflow behavior.",
  },
  {
    title: "AI Document Automation Pipeline",
    overview:
      "Automation pipeline for image-based documents that combines OCR and LLM extraction with validation-first reconciliation logic.",
    businessProblem:
      "Document-heavy workflows lose time and accuracy when teams manually reconcile totals, deductions, and payment fields from inconsistent scans.",
    architecture: [
      "Ingestion layer: Batch intake for image-based PDFs.",
      "Extraction layer: OCR preprocessing and LLM-assisted field parsing.",
      "Validation layer: Deduction reconciliation and payment total verification logic.",
      "Quality loop: Error correction and reprocessing path for low-confidence outputs.",
      "Scale layer: Batch-oriented orchestration for higher-volume processing windows.",
    ],
    technicalStack: ["Python automation", "OCR", "LLM extraction", "Validation rules engine", "Batch processing design"],
    outcome:
      "Positions document handling as a production-minded system with explicit control points for data quality, exception handling, and operational scale.",
  },
];

const consultingExperience = [
  {
    title: "Data Driven WV",
    points: [
      "Led nonprofit CRM architecture builds with emphasis on maintainable data models and practical team adoption.",
      "Designed Zoho automation workflows to reduce manual handoffs and standardize recurring operations.",
      "Produced architecture blueprints and process maps to align technical delivery with stakeholder goals.",
      "Coordinated sprint planning, backlog prioritization, and handoffs across student and partner teams.",
      "Facilitated stakeholder communication cycles so project updates remained decision-oriented and actionable.",
    ],
  },
  {
    title: "Leadership and Delivery Operations",
    points: [
      "Supported architecture diagram design for implementation planning and technical onboarding.",
      "Helped coordinate team execution rhythms around scope, dependencies, and feedback loops.",
      "Focused on clear documentation to make systems easier to scale and transition between contributors.",
    ],
  },
];

const technicalDepth = [
  {
    category: "AI / ML",
    skills: ["RAG", "Prompt engineering", "Red teaming", "Evaluation frameworks", "Hallucination detection"],
  },
  {
    category: "Data Engineering",
    skills: ["Databricks", "Medallion architecture", "ETL pipelines", "Vector databases"],
  },
  {
    category: "Backend / Development",
    skills: ["Python", "C#", "Razor Pages", "API integrations", "OAuth", "YAML configuration"],
  },
  {
    category: "Analytics",
    skills: ["Tableau", "Power BI", "Excel Solver", "Linear programming models"],
  },
];

const currentlyBuilding = [
  "Expanding Trusted AI Toolkit capabilities for enterprise AI audit workflows.",
  "Designing a remediation agent framework for controlled post-evaluation response actions.",
  "Researching secure enterprise AI governance models with implementation guardrails.",
  "Exploring Azure OpenAI enterprise integration patterns for reliable deployment design.",
];

export const metadata: Metadata = createMetadata({
  title: "Projects",
  path: "/projects",
  description:
    "Three lenses on Ethan Hall's work: organization projects, coursework, and personal experiments, with links into deeper breakdowns.",
});

export default function ProjectsPage() {
  return (
    <>
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

      <Section
        id="featured-enterprise-ai-systems"
        title="Featured Enterprise AI Systems"
        subtitle="Case Studies"
        headline="Problem -> Solution architecture -> implementation details -> delivery outcomes."
        contentClassName="space-y-4"
      >
        {enterpriseCaseStudies.map((study, index) => (
          <details
            key={study.title}
            className="card group p-6"
            open={index === 0}
          >
            <summary className="cursor-pointer list-none">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-ink">{study.title}</h3>
                  <p className="mt-2 text-sm text-muted-ink">{study.overview}</p>
                </div>
                <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  Open
                </span>
              </div>
            </summary>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Business Problem</p>
                <p className="text-sm text-muted-ink">{study.businessProblem}</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Outcome / Why It Matters</p>
                <p className="text-sm text-muted-ink">{study.outcome}</p>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Architecture</p>
              <ul className="grid gap-2 text-sm text-muted-ink md:grid-cols-2">
                {study.architecture.map((item) => (
                  <li key={item} className="rounded-xl border border-[var(--border)] bg-[rgba(16,26,49,0.45)] px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Technical Stack</p>
              <div className="flex flex-wrap gap-2">
                {study.technicalStack.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-[var(--border)] bg-[rgba(16,26,49,0.6)] px-3 py-1 text-xs font-medium text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </details>
        ))}
      </Section>

      <Section
        id="consulting-leadership-experience"
        title="Consulting & Leadership Experience"
        subtitle="Execution"
        headline="Delivery experience across nonprofit systems, process automation, architecture design, and team coordination."
        contentClassName="grid gap-6 md:grid-cols-2"
      >
        {consultingExperience.map((item) => (
          <article key={item.title} className="card p-6">
            <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-ink">
              {item.points.map((point) => (
                <li key={point} className="rounded-xl border border-[var(--border)] bg-[rgba(16,26,49,0.45)] px-3 py-2">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </Section>

      <Section
        id="technical-depth"
        title="Technical Depth"
        subtitle="Capabilities"
        headline="Structured skills across AI delivery, data engineering, software implementation, and analytics."
        contentClassName="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {technicalDepth.map((group) => (
          <article key={group.category} className="card p-5">
            <h3 className="text-base font-semibold text-ink">{group.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="inline-flex items-center rounded-full border border-[var(--border)] bg-[rgba(16,26,49,0.5)] px-3 py-1 text-xs text-muted-ink"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </Section>

      <Section
        id="currently-building"
        title="Currently Building"
        subtitle="Forward Focus"
        contentClassName="space-y-4"
      >
        <div className="card p-6">
          <ul className="grid gap-3 text-sm text-muted-ink md:grid-cols-2">
            {currentlyBuilding.map((item) => (
              <li key={item} className="rounded-xl border border-[var(--border)] bg-[rgba(16,26,49,0.45)] px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
