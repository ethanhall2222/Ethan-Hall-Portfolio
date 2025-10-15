import React from "react";
import { Timeline, TimelineItem } from "./timeline";

export const metadata = {
  title: "About",
  description: "About Ethan G. Hall",
};

const current: TimelineItem[] = [
  {
    role: "Lewis Fellow",
    org: "Data Driven WV",
    start: "2024-08-01",
    end: null,
    location: "WVU",
    notes: [
      "Client analytics projects for WV organizations",
      "Databricks Lakehouse and dashboarding",
      "Automation of reporting workflows",
    ],
  },
  {
    role: "Neidermeyer Scholar",
    org: "West Virginia University",
    start: "2022-01-01",
    end: null,
    location: "WVU",
    notes: ["Tutoring Econ 201", "Mentoring students"],
  },
];

const history: TimelineItem[] = [
  {
    role: "Supply Chain Analyst Intern",
    org: "Dot Foods",
    start: "2024-05-15",
    end: "2024-08-15",
    location: "Remote / On site",
    notes: ["IBM Cognos dashboards", "Power Automate workflows"],
  },
  {
    role: "Data Analyst",
    org: "Data Driven WV",
    start: "2022-09-01",
    end: "2023-08-31",
    location: "WVU",
    notes: ["Data cleaning and reporting", "Stakeholder presentations"],
  },
  {
    role: "Student",
    org: "West Virginia University",
    start: "2021-08-15",
    end: "2025-05-10",
    location: "Morgantown, WV",
    notes: ["MIS major, BUDA minor"],
  },
];

function sortData() {
  const cur = [...current].sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime());
  const hist = [...history].sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
  return { cur, hist };
}

const bioParagraph = `I’m Ethan G. Hall from the eastern panhandle of West Virginia, based in Martinsburg. I study Management Information Systems with a Business Data Analytics minor at West Virginia University. I gravitate toward technology because I enjoy turning messy data and manual steps into clear systems that save time and help people make better decisions. My goal is to build a career as a Technology Consultant or Business Analyst focused on data and AI projects that deliver measurable outcomes.`;

const interestBadges = ["Analytics", "Automation", "AI", "Simple tools", "Databricks", "Client outcomes"];

const tools = ["Python", "SQL", "Power BI", "Databricks", "Power Automate", "Excel", "Figma", "Notion"];

export default function AboutPage() {
  const { cur, hist } = sortData();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
        <section className="rounded-2xl border p-8 shadow-sm">
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-600">
                EG
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight text-ink">Ethan G. Hall</h1>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">From Martinsburg, WV</p>
                <p className="text-base leading-relaxed text-muted-ink">{bioParagraph}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Interests & Focus</h2>
              <div className="flex flex-wrap gap-2">
                {interestBadges.map((badge) => (
                  <span key={badge} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-muted-ink">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border p-8 shadow-sm">
          <div className="flex h-full flex-col">
            <h2 className="text-xl font-semibold text-ink">Tools I rely on</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-muted-ink">
                  {tool}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-ink">
              I focus on building simple, reliable systems that help real teams move faster and make confident decisions.
            </p>
          </div>
        </section>
      </header>

      <section aria-labelledby="timeline-title" className="mt-16 space-y-6">
        <div>
          <h2 id="timeline-title" className="text-2xl font-semibold text-ink">Timeline</h2>
          <p className="text-sm text-muted-ink">Current roles first, followed by a chronological history of work and study.</p>
        </div>
        <Timeline current={cur} history={hist} />
      </section>
    </main>
  );
}
