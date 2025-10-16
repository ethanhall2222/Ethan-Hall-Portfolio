import { ArrowRight, Mail, Linkedin, MapPin } from "lucide-react";
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
      "Gained hands-on experience with the Lakehouse platform, integrating data pipelines and analytics workflows for real-world business use cases.",
  },
  {
    title: "Developed “Interview Coach” AI Web App",
    description:
      "Built a mock interview tool that generates role-based questions, analyzes answers, and provides feedback using OpenAI models.",
  },
  {
    title: "Launched Personal Portfolio Website",
    description:
      "Designed and deployed this site to showcase my projects, learning progress, and professional experiences.",
  },
];

const projectOverviews: Array<{ title: string; blurb: string; href: Route }> = [
  {
    title: "Data Driven WV Projects",
    blurb:
      "I apply analytics and AI alongside partners to turn messy processes into measurable, sustainable workflows.",
    href: "/projects/data-driven-wv",
  },
  {
    title: "School Projects",
    blurb:
      "Coursework at WVU where I practice core data, systems, and product skills against real rubrics and deadlines.",
    href: "/projects/school",
  },
  {
    title: "Personal Projects",
    blurb:
      "Experiments where I explore stacks quickly, ship small tools, and learn by building for problems I notice.",
    href: "/projects/personal",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO / ABOUT */}
      <Section id="about" contentClassName="pt-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,240px)_1fr] md:items-start">
          {/* LEFT: headshot + social links (fixed narrow column, stacked vertically) */}
          <aside className="flex flex-col items-start gap-6">
            <div className="w-48">
              <div className="rounded-full border-4 border-white/80 bg-gradient-to-br from-blue-50 via-white to-transparent p-1 shadow-subtle">
                <img
                  src={`${basePath}/images/EthanHallHeadshot.jpeg`}
                  alt="Ethan G. Hall headshot"
                  width={200}
                  height={200}
                  className="h-48 w-48 rounded-full object-cover shadow-lg"
                  loading="eager"
                />
              </div>
            </div>

            <div className="w-full">
              <ul className="flex flex-col gap-3 text-sm text-muted-ink">
                <li>
                  <a
                    href="mailto:egh00012@mix.wvu.edu"
                    className="inline-flex items-center gap-3 rounded-full border border-transparent px-4 py-2 transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
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
                    className="inline-flex items-center gap-3 rounded-full border border-transparent px-4 py-2 transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
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
                    className="inline-flex items-center gap-3 rounded-full border border-transparent px-4 py-2 transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
                  >
                    <MapPin className="size-4" aria-hidden />
                    <span>Martinsburg, WV</span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          {/* RIGHT: about copy + calls to action */}
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">ETHAN G. HALL</p>

            <p className="text-lg text-muted-ink">
              I&apos;m a senior at West Virginia University studying Management Information Systems with a minor in Business Data Analytics. My main interests revolve around solving real business problems with technology. I&apos;m currently a Lewis Fellow with Data Driven WV where I work on two projects. The first project explores how agentic AI can help you gain a functional understanding of code repositories within the government sector. The other project is implementing a CRM for a nonprofit.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                href={"/res.pdf" as Route}
                aria-label="View resume"
                className="min-w-[160px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </Button>
              <Button href={"/contact" as Route} aria-label="Contact Ethan" variant="ghost" className="min-w-[160px]">
                Contact Me
              </Button>
            </div>

 
          </div>
        </div>
      </Section>

      {/* CURRENTLY */}
      <Section id="currently" contentClassName="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
        <div className="space-y-4 text-lg text-muted-ink">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Currently</h2>
          <p>
            My coursework at WVU has focused on building a strong foundation in data analytics, business intelligence, and information systems. I have taken courses in database management, data mining, business analytics, and information systems strategy. I have also gained hands-on experience through internships and projects, where I have applied my knowledge to real-world problems. I&apos;m currently taking a computational statistics class where I answer real business questions using R to analyze the data.
          </p>
          <p>
            On the side I&apos;ve been working on developing two different web applications. The first is a meme token trading website that allows users to browse and compare meme tokens. The second is an AI career helper that helps users prepare for interviews and write resumes.
          </p>
        </div>
        <aside className="space-y-6 text-muted-ink">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-500">Recent Wins</h2>
          <div className="space-y-8 border-l border-gray-200 pl-6">
            {recentWins.map((win) => (
              <div key={win.title} className="relative">
                <span className="absolute -left-3 top-1 h-2 w-2 rounded-full bg-blue-500" aria-hidden />
                <h3 className="text-lg font-semibold text-gray-900">{win.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{win.description}</p>
              </div>
            ))}
          </div>
        </aside>
      </Section>

      {/* PROJECT SNAPSHOTS */}
      <Section id="featured" title="Project snapshots" subtitle="Explore" contentClassName="space-y-6">
        <div className="grid gap-6 md:grid-cols-3">
          {projectOverviews.map((project) => (
            <ProjectCard key={project.title} title={project.title} blurb={project.blurb} stack={[]} href={project.href}>
              <Link
                href={project.href}
                prefetch
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-strong)] transition hover:underline"
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
