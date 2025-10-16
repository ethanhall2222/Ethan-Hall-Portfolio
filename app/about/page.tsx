import { ArrowUpRight, BarChart3, Bot, Mail, MapPin, Sparkles, Users } from "lucide-react";

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
    start: "2024-08-01",
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
    start: "2022-01-01",
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
    start: "2024-05-20",
    end: "2024-08-10",
    location: "Mount Sterling, IL · Remote blend",
    notes: [
      "Automated Power Automate + Teams workflows to surface late-load risks hours sooner.",
      "Built IBM Cognos dashboards that gave planners live visibility into product allocations.",
    ],
  },
  {
    role: "Data Analyst & Project Lead",
    org: "Data Driven WV",
    start: "2022-09-01",
    end: "2024-05-01",
    location: "Morgantown, WV",
    notes: [
      "Delivered weekly reporting for statewide broadband initiatives and economic studies.",
      "Designed Notion + Airtable systems that replaced email spreadsheets across partner teams.",
    ],
  },
  {
    role: "Student · MIS & Business Data Analytics",
    org: "West Virginia University",
    start: "2021-08-15",
    end: "2025-05-10",
    location: "Morgantown, WV",
    notes: [
      "Capstone research on AI-assisted interview preparation and talent matching.",
      "Peer tutor for Econ 201 and analytics coursework; lead presenter for case competitions.",
    ],
  },
];

const quickFacts = [
  { label: "Currently", value: "Lewis Fellow @ Data Driven WV" },
  { label: "Roots", value: "Martinsburg in West Virginia’s eastern panhandle" },
  { label: "Focus", value: "Analytics workflow design · AI copilots · Product strategy" },
  { label: "Studying", value: "MIS major + Business Data Analytics minor at WVU" },
];

const highlightCards = [
  {
    title: "Designing calm data products",
    description:
      "I translate messy spreadsheets and siloed reports into clear workflows so teammates can make decisions without a 40-tab binder.",
    Icon: BarChart3,
    tone: "from-blue-100/80 via-white to-transparent",
  },
  {
    title: "Building AI helpers with purpose",
    description:
      "Every experiment starts with a partner’s real problem—then I craft AI copilots that answer their questions faster, not just generate more noise.",
    Icon: Bot,
    tone: "from-purple-100/80 via-white to-transparent",
  },
  {
    title: "Leading with empathy",
    description:
      "Whether I’m mentoring student teams or facilitating client workshops, I build trust first so change feels safe and people stay engaged.",
    Icon: Users,
    tone: "from-amber-100/80 via-white to-transparent",
  },
];

const narrativeParagraphs = [
  "Hi, I’m Ethan. I grew up in Martinsburg tinkering with computers, spreadsheets, and anything that could make my parents’ workdays a little easier. That curiosity turned into a mission: help teams who feel buried in data, manual tasks, or unclear processes find clarity and momentum.",
  "At WVU, that mission sits at the center of everything I do. My MIS coursework gives me the systems lens; my Business Data Analytics minor keeps me deep in the numbers. Pair that with real partnerships through Data Driven WV and I get to pressure-test ideas with businesses, nonprofits, and public agencies every week.",
  "When I’m not building, I’m exploring new espresso spots, trading book recommendations, or hiking with friends. My best ideas usually land when I’m scribbling notes on a napkin or whiteboard—so if you have a challenge, I’d love to jam on it together.",
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 space-y-20">
      <section className="grid items-start gap-10 lg:grid-cols-[minmax(0,320px)_1fr]">
        <aside className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-subtle backdrop-blur">
          <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-blue-100/60 via-white to-transparent p-4">
            <div className="relative overflow-hidden rounded-xl bg-white/70 shadow-lg">
              <img
                src={`${basePath}/images/EthanHallHeadshot.jpeg`}
                alt="Portrait of Ethan G. Hall"
                width={360}
                height={360}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute inset-x-6 bottom-4 flex items-center justify-between rounded-full border border-white/70 bg-white/80 px-4 py-2 shadow-md backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-medium text-ink">
                <Sparkles className="h-4 w-4 text-[var(--accent-strong)]" aria-hidden />
                Building data products with heart
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-ink" aria-hidden />
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight text-ink">Ethan G. Hall</h1>
              <p className="text-base text-muted-ink">
                Product-minded analyst helping Appalachian teams turn data into confident action.
              </p>
            </div>

            <div className="space-y-4 text-sm text-muted-ink">
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
              <Button href="mailto:egh00012@mix.wvu.edu" aria-label="Email Ethan" className="min-w-[160px]">
                <Mail className="h-4 w-4" aria-hidden />
                <span>Say Hello</span>
              </Button>
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

        <article className="space-y-10 rounded-3xl border border-slate-200 bg-white/70 p-10 shadow-subtle backdrop-blur">
          <header className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-strong)]/30 bg-[var(--accent)]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-strong)]">
              About Ethan
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-ink">
              Turning questions into confident decisions for the teams I serve.
            </h2>
          </header>

          <div className="space-y-5 text-base leading-relaxed text-muted-ink">
            {narrativeParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {highlightCards.map(({ title, description, Icon, tone }) => (
              <div
                key={title}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${tone} p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
              >
                <Icon className="mb-3 h-6 w-6 text-[var(--accent-strong)]" aria-hidden />
                <h3 className="text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm text-muted-ink">{description}</p>
              </div>
            ))}
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
