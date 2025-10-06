import type { Metadata } from "next";

import { Badge } from "@/components/badge";
import { Section } from "@/components/section";
import { PracticePlanGenerator } from "@/components/practice-plan";
import { ResumeBulletHelper } from "@/components/resume-bullet-helper";
import { ApplicationBoard } from "@/components/application-board";
import { createMetadata } from "@/lib/seo";
import { getProjectBySlug } from "@/lib/projects";

const project = getProjectBySlug("ai-career-helper") ?? (() => {
  throw new Error("Project data missing");
})();

export const metadata: Metadata = createMetadata({
  title: project.title,
  path: "/projects/ai-career-helper",
  description: project.summary,
});

export default function AiCareerHelperPage() {
  return (
    <Section
      subtitle="Project"
      title={project.title}
      headline={project.summary}
      contentClassName="space-y-12"
    >
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <div className="card space-y-4 p-6">
            <h3 className="text-lg font-semibold text-ink">Problem</h3>
            <p>{project.problem}</p>
          </div>
          <div className="card space-y-4 p-6">
            <h3 className="text-lg font-semibold text-ink">Approach</h3>
            <p>{project.approach}</p>
          </div>
        </div>
        <aside className="space-y-6">
          <div className="card space-y-3 p-6">
            <h3 className="text-lg font-semibold text-ink">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
          <div className="card space-y-3 p-6">
            <h3 className="text-lg font-semibold text-ink">Feature Highlights</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-ink">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="card space-y-4 p-6">
        <h3 className="text-lg font-semibold text-ink">Screenshots</h3>
        <p className="text-sm text-muted-ink">
          Placeholder canvas for the STAR generator, resume helper, and kanban board. Final UI leans on layered cards with soft shadows.
        </p>
        <div className="h-48 rounded-2xl bg-gradient-to-br from-slate-100 via-white to-blue-50" aria-hidden />
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-ink">STAR Practice Plan Generator</h3>
        <p className="text-sm text-muted-ink">
          Enter a target role and focus area to get structured prompts for Situation, Task, Action, and Result storytelling. This stub simulates plan output for usability testing.
        </p>
        <PracticePlanGenerator />
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-ink">Resume Bullet Helper</h3>
        <p className="text-sm text-muted-ink">
          Combine role, action, result, and metric inputs to instantly format a polished bullet that highlights impact and quantifiable value.
        </p>
        <ResumeBulletHelper />
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-ink">Applications Board</h3>
        <p className="text-sm text-muted-ink">
          A lightweight kanban-inspired tracker with quick adds and status changes to keep opportunities visible without overhead.
        </p>
        <ApplicationBoard />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card space-y-3 p-6">
          <h3 className="text-lg font-semibold text-ink">What I Learned</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-ink">
            {project.learnings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card space-y-3 p-6">
          <h3 className="text-lg font-semibold text-ink">Next Steps</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-ink">
            {project.nextSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
