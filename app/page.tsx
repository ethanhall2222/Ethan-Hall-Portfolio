import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { Route } from "next";
import Link from "next/link";

import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { getProjectBySlug } from "@/lib/projects";

const highlights = [
  {
    title: "Internships",
    items: [
      "Lewis Fellow – Data Driven WV",
      "Supply Chain Analyst Intern – Dot Foods",
      "Deloitte Student Mentorship Program",
    ],
  },
  {
    title: "Skills",
    items: [
      "Python • C# • R • SQL",
      "Power BI • Tableau • RapidMiner • Alteryx",
      "Anthropic • OpenAI • Mistral",
    ],
  },
  {
    title: "Leadership",
    items: [
      "Niedermeyer Scholar leading weekly study labs",
      "Data Analyst – Data Driven WV",
      "AWS Cloud Practitioner (in progress)",
    ],
  },
];

export default function HomePage() {
  const dataDriven = getProjectBySlug("data-driven-wv");

  return (
    <>
      <Section className="pt-16" contentClassName="grid gap-10 md:grid-cols-[1.6fr_1fr] md:items-start">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            ETHAN G. HALL
          </p>
          <h1 className="text-balance text-4xl font-semibold text-ink md:text-5xl">
            MIS student at WVU exploring AI-assisted tools, analytics, and automation.
          </h1>
          <p className="text-lg text-muted-ink">
            I’m a Management Information Systems student (Business Data Analytics minor) at West Virginia University. I’m actively building and studying data-informed products—from simple personal tools to team-oriented automations—while learning how to ship things that stay useful.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/projects" aria-label="View projects" className="min-w-[160px]">
              View Projects
            </Button>
            <Button
              href="/contact"
              aria-label="Contact Ethan"
              variant="ghost"
              className="min-w-[160px]"
            >
              Contact Me
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 pt-2 text-sm text-muted-ink">
            <Badge>Based in Martinsburg, WV</Badge>
            <Badge>GPA 3.92</Badge>
            <Badge>John Chambers College</Badge>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex justify-center md:justify-end">
            <Image
              src="/headshot.jpg"
              alt="Ethan Hall headshot"
              width={192}
              height={192}
              priority
              className="h-44 w-44 rounded-full border border-slate-200 object-cover shadow-sm"
            />
          </div>
          <div className="card h-full bg-gradient-to-br from-white via-white to-blue-50/80 p-6">
            <p className="text-sm font-semibold text-ink">Now</p>
            <p className="mt-3 text-sm text-muted-ink">
              Learning how to scale reliable ETL at Data Driven WV with UiPath and LLM validation. Prototyping AI Career Helper to support student prep and application tracking.
            </p>
            <div className="mt-6 space-y-4 text-sm text-muted-ink">
              <p className="font-semibold text-ink">Focus Areas</p>
              <ul className="space-y-2">
                <li>• AI-assisted workflow design</li>
                <li>• Visualization & analytics for operations</li>
                <li>• Product strategy for student success tools</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="featured"
        title="Featured Work"
        subtitle="Projects"
        contentClassName="space-y-4"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {dataDriven && (
            <ProjectCard
              title="Data Driven WV — Applied Projects"
              blurb={dataDriven.summary}
              stack={dataDriven.stack ?? []}
              href={"/projects/data-driven-wv" as Route}
            >
              <p className="text-sm text-muted-ink">UiPath + LLM ETL • Ops Dashboards • Agentic Prototypes</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-strong)]">
                <span>Visit hub</span>
                <ArrowRight className="size-4" aria-hidden />
              </div>
            </ProjectCard>
          )}
          <ProjectCard
            title="Personal Projects"
            blurb="Student-built tools where I test ideas quickly and keep scope friendly."
            stack={[]}
            href={"/projects/personal" as Route}
          >
            <p className="text-sm text-muted-ink">Meme Token Trading • AI Career Helper</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-strong)]">
              <span>See builds</span>
              <ArrowRight className="size-4" aria-hidden />
            </div>
          </ProjectCard>
        </div>
        <div>
          <Link
            href={"/projects/school" as Route}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-strong)]"
          >
            School Projects
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </Section>

      <Section
        id="connect"
        title="Let’s connect"
        subtitle="Coffee Chat"
        contentClassName="max-w-3xl space-y-4"
      >
        <div className="card space-y-4 p-6">
          <p className="text-sm text-muted-ink">
            I love hearing how other students and builders are approaching data, AI, and automation at school or in internships. Grab a few minutes and we can compare notes over a coffee chat.
          </p>
          <Button
            href={"/contact" as Route}
            className="w-full sm:w-auto"
            aria-label="Schedule a coffee chat"
          >
            Schedule a coffee chat
          </Button>
        </div>
      </Section>

      <Section
        id="highlights"
        title="Highlights"
        subtitle="Snapshot"
        contentClassName="grid gap-6 md:grid-cols-3"
      >
        {highlights.map((highlight) => (
          <div key={highlight.title} className="card h-full p-6">
            <h3 className="text-lg font-semibold text-ink">{highlight.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-ink">
              {highlight.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>
    </>
  );
}
