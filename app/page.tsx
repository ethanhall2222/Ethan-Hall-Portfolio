import { ArrowRight, Mail, Linkedin, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { getProjectBySlug } from "@/lib/projects";

const highlights = [
  {
    title: "Internship Experience",
    items: [
      "Data Analyst Intern – Data Driven WV",
      "Supply Chain Analyst Intern – Dot Foods",
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
    title: "Leadership Experience",
    items: [
      "Niedermeyer Scholar - West Virginia University",
      "Lewis Fellow - Data Driven WV",
    
    ],
  },
];

export default function HomePage() {
  const dataDriven = getProjectBySlug("data-driven-wv");

  return (
    <>
      {/* HERO / ABOUT */}
      <Section id="about" subtitle="About Me" contentClassName="pt-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,240px)_1fr] md:items-start">
          {/* LEFT: headshot + social links (fixed narrow column, stacked vertically) */}
          <aside className="flex flex-col items-start gap-6">
            <div className="w-44">
              <div className="rounded-full border-4 border-white/80 bg-gradient-to-br from-blue-50 via-white to-transparent p-1 shadow-subtle">
                <Image
                  src="/headshot.jpg"
                  alt="Ethan G. Hall"
                  width={192}
                  height={192}
                  priority
                  className="h-44 w-44 rounded-full object-cover"
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
            <Button href="/resume.pdf" className="w-full md:w-auto" aria-label="View resume">
              View Resume
            </Button>
          </aside>

          {/* RIGHT: about copy + calls to action */}
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">ETHAN G. HALL</p>

            <p className="text-lg text-muted-ink">
              I’m a senior at West Virginia University studying Management Information Systems with a minor in Business Data Analytics.My main interests revolve around solving real business problems with technology. I currently am a Lewis Fellow with Data Driven WV where i work on two projects. The first project is analyzing how the use of Agentic AI can help you gain a functional understadning of code reposiories within the government sector. The other project is implementing a CRM for a non profit. 
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="/projects" aria-label="View projects" className="min-w-[160px]">
                View Projects
              </Button>
              <Button href="/contact" aria-label="Contact Ethan" variant="ghost" className="min-w-[160px]">
                Contact Me
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 text-sm text-muted-ink">
              <Badge>From Martinsburg, WV</Badge>
              <Badge>GPA 3.92</Badge>
              <Badge>West Virginia University</Badge>
            </div>
          </div>
        </div>
      </Section>

      {/* CURRENTLY LEARNING */}
      <Section
        id="learning"
        subtitle="Focus"
        contentClassName="grid gap-8 md:grid-cols-[1.4fr_1fr]"
      >
        <div className="space-y-4 text-lg text-muted-ink">
          <p>
            My coursework at WVU has focused on building a strong foundation in data analytics, business intelligence, and information systems. I have taken courses in database management, data mining, business analytics, and information systems strategy. I have also gained hands-on experience through internships and projects, where I have applied my knowledge to real-world problems. Currently I am taking a computational statistics class where I am answering real business questions using R to analyze the data. 
          </p>
          <p>
            On the side I&apos;ve been working on developing two different web applications. The first is a meme token trading website that allows users to browse and compare meme tokens. The second is a AI career helper that helps users prepare for interviews and write resumes.
          </p>
        </div>

        <div className="card h-full bg-gradient-to-br from-white via-white to-blue-50/80 p-6">
          <p className="text-sm font-semibold text-ink">Focus Areas</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>• AI-assisted workflow design</li>
            <li>• Visualization & analytics for operations</li>
            <li>• Product strategy for student success tools</li>
          </ul>
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
              href={`/projects/${dataDriven.slug}`}
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
            href="/projects/personal"
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

      {/* HIGHLIGHTS */}
      <Section id="highlights" title="Highlights" subtitle="Snapshot" contentClassName="grid gap-6 md:grid-cols-3">
        {highlights.map((h) => (
          <div key={h.title} className="card h-full p-6">
            <h3 className="text-lg font-semibold text-ink">{h.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-ink">
              {h.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>
    </>
  );
}
