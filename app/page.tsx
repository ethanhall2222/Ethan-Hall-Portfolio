import { ArrowRight } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";

import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { getPosts } from "@/lib/posts";
import { projects } from "@/lib/projects";

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
  const recentPosts = getPosts().slice(0, 3);

  return (
    <>
      <Section className="pt-16" contentClassName="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Ethan G. Hall
          </p>
          <h1 className="text-balance text-4xl font-semibold text-ink md:text-5xl">
            MIS + Business Data Analytics at WVU building AI-powered tools, analytics, and automation.
          </h1>
          <p className="text-lg text-muted-ink">
            I design data-informed products that help teams move faster—from meme token dashboards and application trackers to agentic automations for public sector partners.
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
        <div className="card h-full bg-gradient-to-br from-white via-white to-blue-50/80 p-6">
          <p className="text-sm font-semibold text-ink">Now</p>
          <p className="mt-3 text-sm text-muted-ink">
            Helping Data Driven WV automate ETL with UiPath and LLM validation. Building AI Career Helper to guide students through targeted prep and application tracking.
          </p>
          <div className="mt-6 space-y-4 text-sm text-muted-ink">
            <p className="font-semibold text-ink">Focus Areas</p>
            <ul className="space-y-2">
              <li>• AI-assisted workflow design</li>
              <li>• Visualization and analytics for operations</li>
              <li>• Product strategy for student success tools</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="featured"
        title="Featured Work"
        subtitle="Projects"
        contentClassName="grid gap-6 md:grid-cols-2"
      >
        {projects.slice(0, 2).map((project) => {
          const href = `/projects/${project.slug}` as Route;
          return (
            <ProjectCard
              key={project.slug}
              title={project.title}
              blurb={project.summary}
              stack={project.stack}
              href={href}
            >
              <div className="flex items-center gap-2 text-sm text-[var(--accent-strong)]">
                <span>Explore case study</span>
                <ArrowRight className="size-4" aria-hidden />
              </div>
            </ProjectCard>
          );
        })}
      </Section>

      <Section
        id="recent"
        title="Recent"
        subtitle="Updates"
        headline="Notes from internships, build logs, and experiments with automation."
        contentClassName="grid gap-6 md:grid-cols-3"
      >
        {recentPosts.map((post) => (
          <article key={post.slug} className="card flex h-full flex-col justify-between p-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {new Date(post.date).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <h3 className="text-lg font-semibold text-ink">{post.title}</h3>
              <p className="text-sm text-muted-ink">{post.excerpt}</p>
            </div>
            <Link
              href={`/blog/${post.slug}` as Route}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-strong)]"
            >
              Read post
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </article>
        ))}
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
