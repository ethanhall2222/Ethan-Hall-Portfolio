import { ArrowRight, Mail, Linkedin, MapPin, Sparkles, ChartNoAxesCombined, BrainCircuit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";

import { Button } from "@/components/button";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const recentWins = [
  {
    title: "Earned Databricks Fundamentals Certification",
    description:
      "Built practical fluency with Lakehouse workflows, data pipelines, and analytics architecture used by business teams.",
  },
  {
    title: "Developed Interview Coach AI Web App",
    description:
      "Shipped a role-specific mock interview experience that generates prompts and evaluates responses with structured feedback.",
  },
  {
    title: "Launched Portfolio and Case Study Hub",
    description:
      "Turned projects into clear narratives with measurable outcomes, implementation details, and working demos.",
  },
];

const projectOverviews: Array<{ title: string; blurb: string; href: Route }> = [
  {
    title: "Data Driven WV Projects",
    blurb:
      "Applied AI and process analysis with public-sector and nonprofit partners to produce operational improvements.",
    href: "/projects/data-driven-wv",
  },
  {
    title: "School Projects",
    blurb:
      "WVU coursework focused on data systems, analytics, and product execution under real deadlines.",
    href: "/projects/school",
  },
  {
    title: "Personal Projects",
    blurb:
      "Fast-turn experiments where I pressure-test stacks, validate ideas, and iterate in public.",
    href: "/projects/personal",
  },
];

const stats = [
  { label: "Active Builds", value: "02" },
  { label: "Major Tracks", value: "03" },
  { label: "Focus", value: "AI + Data" },
];

export default function HomePage() {
  return (
    <>
      <Section id="about" className="pt-8 md:pt-14" contentClassName="space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
          <div className="space-y-7 reveal">
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[rgba(16,26,49,0.8)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              <Sparkles className="size-3.5" aria-hidden />
              Ethan G. Hall
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              Business-minded builder turning <span className="text-[var(--accent)]">messy workflows</span> into
              real systems.
            </h1>

            <p className="max-w-2xl text-lg text-muted-ink">
              I&apos;m a senior at West Virginia University studying Management Information Systems with a minor in
              Business Data Analytics. Through Data Driven WV, I work on agentic AI repository analysis and nonprofit
              CRM implementation.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                href={"/res.pdf" as Route}
                aria-label="View resume"
                className="min-w-[170px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </Button>
              <Button href={"/contact" as Route} aria-label="Contact Ethan" variant="ghost" className="min-w-[170px]">
                Contact Me
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-2xl px-4 py-3">
                  <p className="text-xl font-bold text-ink">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-ink">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="glass floaty rounded-3xl p-6 sm:p-8">
            <div className="mx-auto mb-6 w-fit rounded-full border border-[var(--border)] bg-[rgba(11,17,32,0.72)] p-2">
              <Image
                src={`${basePath}/images/EthanHallHeadshot.jpeg`}
                alt="Ethan G. Hall headshot"
                width={240}
                height={240}
                className="h-44 w-44 rounded-full object-cover sm:h-56 sm:w-56"
                priority
              />
            </div>

            <ul className="space-y-3 text-sm text-muted-ink">
              <li>
                <a
                  href="mailto:egh00012@mix.wvu.edu"
                  className="inline-flex w-full items-center gap-3 rounded-xl border border-[var(--border)] bg-[rgba(16,26,49,0.7)] px-4 py-2.5 transition hover:border-[var(--accent)] hover:text-ink"
                >
                  <Mail className="size-4" aria-hidden />
                  <span>egh00012@mix.wvu.edu</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/EthanGHall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center gap-3 rounded-xl border border-[var(--border)] bg-[rgba(16,26,49,0.7)] px-4 py-2.5 transition hover:border-[var(--accent)] hover:text-ink"
                >
                  <Linkedin className="size-4" aria-hidden />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Martinsburg,+WV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center gap-3 rounded-xl border border-[var(--border)] bg-[rgba(16,26,49,0.7)] px-4 py-2.5 transition hover:border-[var(--accent)] hover:text-ink"
                >
                  <MapPin className="size-4" aria-hidden />
                  <span>Martinsburg, WV</span>
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </Section>

      <Section
        id="currently"
        contentClassName="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start"
      >
        <div className="glass rounded-3xl p-6 sm:p-8">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            <ChartNoAxesCombined className="size-4" aria-hidden />
            Currently
          </div>
          <div className="space-y-5 text-base text-muted-ink sm:text-lg">
            <p>
              My WVU coursework centers on analytics, business intelligence, and information systems strategy. I&apos;ve
              worked through database management, data mining, and business analytics with a focus on practical
              execution.
            </p>
            <p>
              Right now I&apos;m in computational statistics using R for business decision-making and building two web
              apps on the side: a meme-token comparison platform and an AI career helper for interview and resume prep.
            </p>
          </div>
        </div>

        <aside className="glass rounded-3xl p-6 sm:p-8">
          <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            <BrainCircuit className="size-4" aria-hidden />
            Recent Wins
          </div>
          <div className="space-y-7 border-l border-[var(--border)] pl-6">
            {recentWins.map((win) => (
              <div key={win.title} className="relative">
                <span className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_0_6px_rgba(36,212,198,0.16)]" aria-hidden />
                <h3 className="text-lg font-semibold text-ink">{win.title}</h3>
                <p className="mt-1 text-sm text-muted-ink">{win.description}</p>
              </div>
            ))}
          </div>
        </aside>
      </Section>

      <Section
        id="featured"
        title="Project snapshots"
        subtitle="Explore"
        headline="Deep dives across partner work, coursework, and personal builds."
        contentClassName="space-y-6"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {projectOverviews.map((project) => (
            <ProjectCard key={project.title} title={project.title} blurb={project.blurb} stack={[]} href={project.href}>
              <Link
                href={project.href}
                prefetch
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition hover:text-ink"
              >
                <span>View details</span>
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </ProjectCard>
          ))}
        </div>
      </Section>
    </>
  );
}
