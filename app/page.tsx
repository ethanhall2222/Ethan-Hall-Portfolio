import { ArrowRight, Mail, Linkedin, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";

import { Button } from "@/components/button";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { getProjectBySlug } from "@/lib/projects";

export default function HomePage() {
  const dataDriven = getProjectBySlug("data-driven-wv");

  return (
    <>
      {/* HERO / ABOUT */}
      <Section id="about" contentClassName="pt-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,240px)_1fr] md:items-start">
          {/* LEFT: headshot + social links (fixed narrow column, stacked vertically) */}
          <aside className="flex flex-col items-start gap-6">
            <div className="w-48">
              <div className="rounded-full border-4 border-white/80 bg-gradient-to-br from-blue-50 via-white to-transparent p-1 shadow-subtle">
                <Image
                  src="/images/EthanHallHeadshot.jpeg"
                  alt="Ethan G. Hall headshot"
                  width={200}
                  height={200}
                  priority
                  className="h-48 w-48 rounded-full object-cover shadow-lg"
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
      <Section
        id="learning"
        subtitle="Currently"
        contentClassName="grid gap-8 md:grid-cols-[1.4fr_1fr]"
      >
        <div className="space-y-4 text-lg text-muted-ink">
          <p>
            My coursework at WVU has focused on building a strong foundation in data analytics, business intelligence, and information systems. I have taken courses in database management, data mining, business analytics, and information systems strategy. I have also gained hands-on experience through internships and projects, where I have applied my knowledge to real-world problems. I&apos;m currently taking a computational statistics class where I answer real business questions using R to analyze the data.
          </p>
          <p>
            On the side I&apos;ve been working on developing two different web applications. The first is a meme token trading website that allows users to browse and compare meme tokens. The second is an AI career helper that helps users prepare for interviews and write resumes.
          </p>
        </div>

        <div>

        </div>
      </Section>

      {/* FEATURED PROJECTS */}
      <Section id="featured" title="Featured work" subtitle="Projects" contentClassName="space-y-4">
        <div className="grid gap-6 md:grid-cols-2">
          {dataDriven && (
            <ProjectCard
              title="Data Driven WV — Applied Projects"
              blurb={dataDriven.summary}
              stack={dataDriven.stack ?? []}
              href={`/projects/${dataDriven.slug}` as Route}
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
            stack={["Next.js", "Tailwind"]}
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
          <Link href="/projects/school" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-strong)]">
            School Projects
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </Section>
    </>
  );
}
