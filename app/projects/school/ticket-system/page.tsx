import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

const breadcrumbItems = [
  { href: "/projects", label: "Projects" },
  { href: "/projects/school", label: "School Projects - WVU" },
  { href: "/projects/school/ticket-system", label: "MIS Capstone Ticket Management System" },
];

export const metadata: Metadata = createMetadata({
  title: "MIS Capstone Ticket Management System",
  description: "Building a lightweight help desk platform with Razor Pages, C#, and SQL Server.",
  path: "/projects/school/ticket-system",
});

export default function TicketSystemPage() {
  return (
    <Section
      title="MIS Capstone Ticket Management System"
      subtitle="Application Development"
      headline="Designing a help desk application that handles intake, assignment, and auditing using Razor Pages and a SQL Server backend."
      contentClassName="space-y-8"
    >
      <Breadcrumbs items={breadcrumbItems} />

      <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-ink">Overview</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-ink">
          The MIS capstone challenged our team to deliver an internal ticket management system for a fictitious support
          desk. I led the architecture and implementation, focusing on fast intake, clear ownership, and transparent
          status tracking. The project culminated in a working prototype, documentation, and presentation for faculty and
          peers.
        </p>
      </article>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Tech stack</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-ink">
            Built with C#, .NET 8, Razor Pages, SQL Server, and Dapper for lightweight data access. Authentication uses
            ASP.NET Identity, and the UI relies on Tailwind for consistent styling.
          </p>
        </article>

        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Core features</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Ticket intake form with validation, priority, and category selection.</li>
            <li>Assignment workflow with reassignment history and SLA reminders.</li>
            <li>Comments, attachments, and status transitions logged for every change.</li>
            <li>Search, filtering, and basic analytics for teams to monitor workload.</li>
          </ul>
        </article>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Data model</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Users, Tickets, Comments, Attachments, and StatusHistory core tables.</li>
            <li>Reference tables for Priority, Category, and Status to keep logic consistent.</li>
            <li>Stored procedures handling create/update flows and permission checks.</li>
          </ul>
        </article>

        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Security and roles</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Admin: manage users, categories, and system configuration.</li>
            <li>Agent: work assigned tickets, update status, log comments, attach files.</li>
            <li>Requester: submit requests, view their ticket history, add clarifying notes.</li>
          </ul>
        </article>
      </div>

      <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-ink">Screens & flow</h3>
        <ul className="mt-4 space-y-2 text-sm text-muted-ink">
          <li>Tickets/List: dashboard with filters by status, priority, and assignee.</li>
          <li>Tickets/Create: guided intake with validation and default routing rules.</li>
          <li>Tickets/Details: full ticket history, comments, attachments, and audit log.</li>
          <li>Admin/Users: manage roles and reset passwords.</li>
          <li>Admin/Categories: maintain category and priority reference data.</li>
        </ul>
      </article>

      <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-ink">Next steps</h3>
        <ul className="mt-4 space-y-2 text-sm text-muted-ink">
          <li>Deploy to Azure App Service with managed SQL database.</li>
          <li>Add SLA timers, email notifications, and CSV export.</li>
          <li>Integrate dashboards for backlog vs. throughput trends.</li>
        </ul>
      </article>
    </Section>
  );
}
