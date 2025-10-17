import { MapPin } from "lucide-react";

import { Button } from "@/components/button";
import { Timeline, TimelineItem } from "./timeline";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata = {
  title: "About",
  description: "The story, values, and milestones behind Ethan G. Hall.",
};

const current: TimelineItem[] = [
  {
    role: "Lewis Fellow · Product & Analytics Lead",
    org: "Data Driven WV",
    start: "2025-08-01",
    end: null,
    location: "Morgantown, WV · Hybrid",
    notes: [
      "Guide nonprofit and agency partners through discovery, data cleanup, and impact dashboards.",
      "Prototype AI copilots that summarize codebases and reduce onboarding time for volunteer developers.",
      "Coach student analytics teams on stakeholder interviews, experiments, and storytelling.",
    ],
  },
  {
    role: "Neidermeyer Scholar",
    org: "West Virginia University",
    start: "2023-08-01",
    end: null,
    location: "Morgantown, WV",
    notes: [
      "Mentor first-year business students on systems thinking and leadership habits.",
      "Run workshops on translating classroom analytics into client-ready deliverables.",
    ],
  },
];

const history: TimelineItem[] = [
  {
    role: "Supply Chain Analytics Intern",
    org: "Dot Foods",
    start: "2025-05-20",
    end: "2025-08-10",
    location: "Mount Sterling, IL · Remote blend",
    notes: [
      "Automated Power Automate + Teams workflows to surface late-load risks hours sooner.",
      "Built IBM Cognos dashboards that gave planners live visibility into product allocations.",
    ],
  },
  {
    role: "Data Analyst & Project Lead",
    org: "Data Driven WV",
    start: "2024-09-01",
    end: "2025-08-01",
    location: "Morgantown, WV",
    notes: [
      "Delivered weekly reporting for statewide broadband initiatives and economic studies.",
      "Designed Notion + Airtable systems that replaced email spreadsheets across partner teams.",
    ],
  },
  {
    role: "Student · MIS & Business Data Analytics",
    org: "West Virginia University",
    start: "2022-08-15",
    end: "2026-05-10",
    location: "Morgantown, WV",
    notes: [
      "Capstone research on AI-assisted interview preparation and talent matching.",
      "Peer tutor for Econ 201 and analytics coursework; lead presenter for case competitions.",
    ],
  },
];

const quickFacts = [
  { label: "Currently", value: "Lewis Fellow · Data Driven WV" },
  { label: "Based", value: "Martinsburg & Morgantown, WV" },
  { label: "Focus", value: "Analytics storytelling & AI helpers" },
];

const narrativeParagraphs = [
  "Hey, I’m Ethan. I grew up in Martinsburg helping family and friends make sense of spreadsheets, and I never stopped experimenting with ways to make work feel calmer. That curiosity pushed me toward systems thinking, analytics, and building tools that people actually enjoy using.",
  "At Data Driven WV and in my WVU coursework, I lead projects that translate messy operational questions into dashboards, workflows, and AI helpers. My favorite work happens when I can embed with a team, listen, and ship improvements that are measurable within a week.",
  "Outside of client work, I teach newer students how to manage projects, host work sessions to unblock friends on technical hurdles, and document playbooks so knowledge doesn’t vanish. I’m usually sketching ideas in Notion, tracking metrics in a spreadsheet, or experimenting with a new model.",
];

const interests = [
  { title: "Quick experiments", detail: "Rapid prototypes to test ideas before investing in heavy builds." },
  { title: "Story-driven analytics", detail: "Turning data into narratives that help execs and teammates act quickly." },
  { title: "Team enablement", detail: "Documentation, office hours, and workshops that keep everyone aligned." },
  { title: "AI with intent", detail: "Helpful copilots for research, onboarding, and repetitive analysis tasks." },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-16">
      <section className="flex flex-col gap-6 lg:flex-row">
        <aside className="flex shrink-0 flex-col gap-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-subtle backdrop-blur lg:w-[300px]">
          <div className="overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-blue-100/60 via-white to-transparent p-3">
            <div className="overflow-hidden rounded-xl bg-white/70 shadow-lg">
              <img
                src={`${basePath}/images/EthanHallHeadshot.jpeg`}
                alt="Portrait of Ethan G. Hall"
                width={280}
                height={280}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>

            <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight text-ink">Ethan G. Hall</h1>
              <p className="text-base text-muted-ink">
                Product-minded analyst helping Appalachian teams turn data into confident action.
              </p>
            </div>

            <div className="space-y-3 text-sm text-muted-ink">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="flex gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3">
                  <span className="min-w-[92px] shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {fact.label}
                  </span>
                  <span className="leading-relaxed">{fact.value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                href="https://www.google.com/maps/place/Martinsburg,+WV"
                variant="ghost"
                aria-label="View Ethan&apos;s location in Martinsburg, WV"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[160px]"
              >
                <MapPin className="h-4 w-4" aria-hidden />
                <span>Martinsburg, WV</span>
              </Button>
            </div>
          </div>
        </aside>

        <article className="flex-1 rounded-3xl border border-slate-200 bg-white/70 p-10 shadow-subtle backdrop-blur">
          <header className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-strong)]/30 bg-[var(--accent)]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-strong)]">
              About Ethan
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-ink">
              Turning questions into confident decisions for the teams I serve.
            </h2>
          </header>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-ink">
            {narrativeParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold text-ink">What I’m known for</h3>
            <ul className="grid gap-3 md:grid-cols-2">
              {interests.map((item) => (
                <li key={item.title} className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-muted-ink">
                  <p className="font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 text-sm">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section aria-labelledby="timeline-title" className="space-y-8 rounded-3xl border border-slate-200 bg-white/70 p-10 shadow-subtle backdrop-blur">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-strong)]/30 bg-[var(--accent)]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-strong)]">
            Journey
          </span>
          <h2 id="timeline-title" className="text-2xl font-semibold text-ink">
            Experience Chapters
          </h2>
          <p className="text-sm text-muted-ink">
            A blend of fellowships, internships, and studio work that sharpened my ability to listen, build quickly, and
            deliver measurable impact.
          </p>
        </div>

        <Timeline current={current} history={history} />
      </section>
    </main>
  );
}
