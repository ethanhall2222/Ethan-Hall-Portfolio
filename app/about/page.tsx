import type { Metadata, Route } from "next";

import { Avatar } from "@/components/avatar";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { TimelineItem } from "@/components/timeline-item";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  path: "/about",
  description:
    "Meet Ethan G. Hall — MIS student at WVU focused on AI-assisted analytics, automation, and data storytelling tools.",
});

const skills = [
  "Python",
  "C#",
  "R",
  "SQL",
  "Power BI",
  "Tableau",
  "RapidMiner",
  "Alteryx",
  "IBM Cognos",
  "OpenAI/Anthropic/Mistral",
  "Excel",
  "PowerPoint",
];

export default function AboutPage() {
  return (
    <Section title="About" subtitle="Story" contentClassName="grid gap-10 md:grid-cols-[1.2fr_1fr]">
      <div className="space-y-6">
        <Avatar className="w-fit" />
        <p>
          I’m Ethan, a student at West Virginia University majoring in MIS with a Business Data Analytics minor. I like building small, reliable pieces—dashboards, automation steps, and study tools—and then learning how to make them useful for real people.
        </p>
        <div className="space-y-2">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">What I’m practicing</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-ink">
            <li>Turning loose ideas into small, shippable steps</li>
            <li>Keeping visuals and metrics honest</li>
            <li>Automating the boring parts without hiding the work</li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={"/Ethan_Hall_Resume09052025.pdf" as Route} variant="ghost" className="text-sm">
            Resume
          </Button>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-ink">Tools I rely on</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
      <aside className="space-y-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-ink">Timeline</h3>
          <ul className="mt-6">
            <TimelineItem
              title="Lewis Fellow — Data Driven WV"
              subtitle="Designed agentic AI solutions to automate ETL with UiPath and LLM-assisted flows. Improved data pipeline scalability and reliability for real operations."
              period="Aug 2025 – Present"
            />
            <TimelineItem
              title="Supply Chain Analyst Intern — Dot Foods"
              subtitle="Built IBM Cognos dashboards to track and gamify worker productivity. Deployed Power Automate workflows to scale recurring reporting."
              period="May 2025 – Aug 2025"
            />
            <TimelineItem
              title="Data Analyst — Data Driven WV"
              subtitle="Built Python workflow that converts PDFs to images, integrates with Mistral Pixtral Large, and extracts validated financial data at scale."
              period="Sep 2024 – Aug 2025"
            />
            <TimelineItem
              title="Niedermeyer Scholar — WVU"
              subtitle="Led 6+ weekly study sessions covering Econ 201 fundamentals with average grade improvements of one letter."
              period="2024 – Present"
            />
            <TimelineItem
              title="West Virginia University"
              subtitle="BSBA, Major in MIS, Minor in Business Data Analytics. GPA 3.92. Expected May 2026."
              period="2022 – 2026"
            />
          </ul>
        </div>
      </aside>
    </Section>
  );
}
