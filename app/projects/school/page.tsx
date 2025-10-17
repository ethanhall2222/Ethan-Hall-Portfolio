import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

const breadcrumbItems = [
  { href: "/projects", label: "Projects" },
  { href: "/projects/school", label: "School Projects - WVU" },
];

export const metadata: Metadata = createMetadata({
  title: "School Projects - WVU",
  description:
    "Course projects where I practiced modeling, visualization, and explaining tradeoffs. Each project includes simple explanations plus links to reports or code.",
  path: "/projects/school",
});

const projects = [
  {
    title: "Phishing Website Detection",
    subtitle: "Classifying phishing vs. legitimate sites with interpretable models.",
    tag: "Machine Learning",
    summary:
      "Cleaned a benchmark dataset of URL and page attributes, trained logistic regression and tree-based models, and compared ROC-AUC to guide rollout recommendations.",
    primary: {
      href: "/projects/school/phishing-detection",
      label: "View project details",
      aria: "View project details for Phishing Website Detection",
    },
    secondary: {
      href: "/assets/reports/phishing-website-detection-report.pdf",
      label: "Download report (PDF)",
      aria: "Download the phishing website detection report PDF",
    },
  },
  {
    title: "MIS Capstone Ticket Management System",
    subtitle: "Building a help desk app with Razor Pages and C#.",
    tag: "Application Development",
    summary:
      "Designed a lightweight ticketing platform for intake, assignment, and auditing. Implements role-based access, validation, and SQL Server persistence with stored procedures.",
    primary: {
      href: "/projects/school/ticket-system",
      label: "View project details",
      aria: "View project details for MIS Capstone Ticket Management System",
    },
    secondary: undefined,
  },
];

export default function SchoolProjectsPage() {
  return (
    <Section
      title="School Projects - WVU"
      subtitle="Course Work"
      headline="Course projects where I practiced modeling, visualization, and explaining tradeoffs. Each project includes simple explanations plus links to reports or code."
      contentClassName="space-y-8"
    >
      <Breadcrumbs items={breadcrumbItems} />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((item) => (
          <article
            key={item.title}
            className="card h-full border border-slate-200 p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{item.tag}</p>
            <h3 className="mt-2 text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-1 text-sm font-semibold text-muted-ink">{item.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-ink">{item.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={item.primary.href}
                aria-label={item.primary.aria}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-strong)]/30 bg-[var(--accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--accent-strong)] transition hover:border-[var(--accent-strong)]/60"
              >
                {item.primary.label}
              </Link>
              {item.secondary?.href && (
                <Link
                  href={item.secondary.href}
                  aria-label={item.secondary.aria}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-muted-ink transition hover:border-slate-300"
                >
                  {item.secondary.label}
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
