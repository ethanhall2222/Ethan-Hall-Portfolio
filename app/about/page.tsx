import { BriefcaseBusiness, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/button";
import { Timeline, TimelineItem } from "./timeline";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata = {
  title: "About",
  description:
    "Ethan Hall is a Technical Transformation Analyst at Deloitte and WVU graduate pursuing a master's in Applied AI and Data Analytics.",
};

const current: TimelineItem[] = [
  {
    role: "Technical Transformation Analyst",
    org: "Deloitte",
    dateLabel: "2026 - Present",
    end: null,
    notes: [
      "Support technology transformation work across implementation, process design, and client delivery.",
      "Translate business needs into structured technical requirements and practical implementation plans.",
      "Build experience navigating complex stakeholder, system, and change-management considerations.",
    ],
  },
  {
    role: "Master’s Student · Applied AI & Data Analytics",
    org: "West Virginia University",
    dateLabel: "2026 - Present",
    end: null,
    notes: [
      "Deepening my understanding of applied AI systems, analytics, and responsible implementation.",
      "Connecting graduate coursework to enterprise technology and data transformation challenges.",
    ],
  },
];

const history: TimelineItem[] = [
  {
    role: "Lewis Fellow · Product & Analytics Lead",
    org: "Data Driven WV",
    start: "2025-08-01",
    end: "2026-05-10",
    location: "Morgantown, WV · Hybrid",
    notes: [
      "Guided nonprofit and agency partners through discovery, data cleanup, and system design.",
      "Prototyped AI tools for codebase understanding and enterprise knowledge workflows.",
      "Coordinated student teams through stakeholder interviews, sprint planning, and delivery.",
    ],
  },
  {
    role: "Neidermeyer Scholar",
    org: "West Virginia University",
    start: "2023-08-01",
    end: "2026-05-10",
    location: "Morgantown, WV",
    notes: [
      "Mentored business students on systems thinking and leadership habits.",
      "Helped translate classroom analytics into clear, client-ready deliverables.",
    ],
  },
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
    role: "B.S. · Management Information Systems",
    org: "West Virginia University",
    start: "2022-08-15",
    end: "2026-05-10",
    location: "Morgantown, WV",
    notes: [
      "Graduated with a minor in Business Data Analytics.",
      "Capstone research on AI-assisted interview preparation and talent matching.",
      "Peer tutor for Econ 201 and analytics coursework; lead presenter for case competitions.",
    ],
  },
];

const quickFacts = [
  { label: "Currently", value: "Technical Transformation Analyst · Deloitte" },
  { label: "Graduate", value: "M.S. · Applied AI & Data Analytics" },
  { label: "Certified", value: "Anthropic Claude Associate" },
  { label: "Bachelor’s", value: "MIS · Business Data Analytics minor" },
];

const narrativeParagraphs = [
  "I’m Ethan, a Technical Transformation Analyst at Deloitte focused on the point where business needs, technology implementation, and people come together. I like taking complicated processes apart, finding the friction, and rebuilding them into systems that are easier to understand and use.",
  "I graduated from West Virginia University with a bachelor’s degree in Management Information Systems and a minor in Business Data Analytics. I’m now continuing at WVU in a master’s program in Applied AI and Data Analytics, and I recently earned the Anthropic Claude Associate Certification.",
  "Before Deloitte, I worked across analytics, automation, AI prototyping, and nonprofit systems through Data Driven WV and an industry internship. Those experiences taught me to pair technical execution with clear communication, careful documentation, and the realities of how teams adopt change.",
];

const interests = [
  { title: "Structured problem solving", detail: "Breaking broad transformation challenges into clear, buildable work." },
  { title: "Technical translation", detail: "Connecting business context with implementation details and system constraints." },
  { title: "Team enablement", detail: "Documentation, facilitation, and practical handoffs that help change stick." },
  { title: "Applied AI", detail: "Exploring useful, governed AI patterns for knowledge, automation, and decision support." },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-16 px-6 py-16">
      <section className="flex flex-col gap-6 lg:flex-row">
        <aside className="glass flex shrink-0 flex-col gap-6 rounded-3xl p-6 lg:w-[330px]">
          <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[rgba(11,17,32,0.72)] p-3">
            <div className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-[rgba(36,212,198,0.18)] blur-2xl" aria-hidden />
            <div className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src={`${basePath}/images/EthanHallHeadshot.jpeg`}
                alt="Portrait of Ethan G. Hall"
                width={280}
                height={280}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight text-ink">Ethan G. Hall</h1>
              <p className="text-base text-muted-ink">
                Technical transformation analyst building practical systems at the intersection of business, data, and AI.
              </p>
            </div>

            <div className="space-y-3 text-sm text-muted-ink">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-[var(--border)] bg-[rgba(16,26,49,0.62)] px-4 py-3">
                  <span className="min-w-[92px] shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {fact.label}
                  </span>
                  <span className="mt-1 block leading-relaxed text-ink">{fact.value}</span>
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

        <article className="glass flex-1 rounded-3xl p-7 sm:p-10">
          <header className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-strong)]/30 bg-[var(--accent)]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              <Sparkles className="size-3.5" aria-hidden />
              About Ethan
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-ink">
              Turning transformation goals into systems teams can actually carry forward.
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
                <li key={item.title} className="interactive-card rounded-2xl border border-[var(--border)] bg-[rgba(16,26,49,0.55)] px-4 py-3 text-sm text-muted-ink">
                  <p className="font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 text-sm">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section aria-labelledby="timeline-title" className="glass space-y-8 rounded-3xl p-7 sm:p-10">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-strong)]/30 bg-[var(--accent)]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            <BriefcaseBusiness className="size-3.5" aria-hidden />
            Journey
          </span>
          <h2 id="timeline-title" className="text-2xl font-semibold text-ink">
            Experience Chapters
          </h2>
          <p className="text-sm text-muted-ink">
            Education and work that shaped how I approach implementation, analytics, AI, and organizational change.
          </p>
        </div>

        <Timeline current={current} history={history} />
      </section>
    </main>
  );
}
