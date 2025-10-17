import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

const breadcrumbItems = [
  { href: "/projects", label: "Projects" },
  { href: "/projects/data-driven-wv", label: "Data Driven WV - Applied Projects" },
  { href: "/projects/data-driven-wv/bridle-paths-crm", label: "Bridle Paths CRM Implementation" },
];

export const metadata: Metadata = createMetadata({
  title: "Bridle Paths CRM Implementation",
  description: "Deploying Zoho CRM to streamline operations for Bridle Paths, a therapeutic riding nonprofit.",
  path: "/projects/data-driven-wv/bridle-paths-crm",
});

export default function BridlePathsCrmPage() {
  return (
    <Section
      title="Bridle Paths CRM Implementation"
      subtitle="Case Study"
      headline="Modernizing Bridle Paths’ volunteer, donor, and lesson management by rolling out a full Zoho CRM environment tailored to their therapeutic riding programs."
      contentClassName="space-y-10"
    >
      <Breadcrumbs items={breadcrumbItems} />

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Project overview</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-ink">
            Bridle Paths needed a centralized system to manage volunteers, riders, and donors without losing the
            personal touch that defines their community. I scoped workflows with the executive director, then configured
            Zoho CRM modules, automations, and views so the team could capture intake information, schedule lessons, and
            coordinate communication in one place.
          </p>
        </article>

        <aside className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Role & responsibilities</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Interviewed staff to document current processes and identify pain points.</li>
            <li>Built custom modules for volunteers, riders, horses, and donor profiles.</li>
            <li>Automated reminder emails, lesson follow-ups, and donor stewardship touchpoints.</li>
            <li>Delivered training resources and a governance plan so staff could maintain the system.</li>
          </ul>
        </aside>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Impact</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Reduced time spent on manual scheduling and follow-up emails by more than 50%.</li>
            <li>Gave leadership real-time visibility into volunteer coverage and donor pipeline health.</li>
            <li>Improved consistency of rider onboarding and safety documentation.</li>
          </ul>
        </article>

        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Stack & tooling</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Zoho CRM with custom modules, workflows, and dashboards.</li>
            <li>Zoho Flow for cross-app automations and scheduling integrations.</li>
            <li>Google Workspace for document storage and shared calendars.</li>
            <li>Notion playbooks for training, SOPs, and governance guidelines.</li>
          </ul>
        </article>
      </div>
    </Section>
  );
}
