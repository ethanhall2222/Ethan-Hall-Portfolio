import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

const breadcrumbItems = [
  { href: "/projects", label: "Projects" },
  { href: "/projects/personal", label: "Personal Projects" },
  { href: "/projects/personal/ai-career-helper", label: "AI Career Helper" },
];

export const metadata: Metadata = createMetadata({
  title: "AI Career Helper",
  description: "Structured prep tools for STAR stories, resume bullets, and applications tracking.",
  path: "/projects/personal/ai-career-helper",
});

export default function AiCareerHelperPage() {
  return (
    <Section
      title="AI Career Helper"
      subtitle="Student Workflow Toolkit"
      headline="Turning fuzzy job-search tasks into structured flows with AI-assisted prompts, bullet drafting, and a lightweight board."
      contentClassName="space-y-8"
    >
      <Breadcrumbs items={breadcrumbItems} />

      <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-ink">Motivation</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-ink">
          My classmates constantly ask for help turning experiences into resume bullets and STAR stories. I designed this
          toolkit to give them a structured starting point, rapid feedback, and a simple tracking system so they stay on
          top of applications.
        </p>
      </article>

      <article className="card border border-slate-200 bg-gradient-to-br from-purple-50 via-white to-transparent p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-ink">Product snapshot</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-ink">
          The latest build presents a clean workspace theme, with sidebar navigation for tools and focus modes that make
          interview prep less overwhelming. Panels slide in for prompt guidance while the application board stays only a
          click away.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-muted-ink">
          <li>Color-coded status columns and drag-and-drop prioritization.</li>
          <li>Inline AI suggestions with tone toggles (friendly, concise, data-heavy).</li>
          <li>Session autosave and reminders surfaced at the top of the workspace.</li>
        </ul>
      </article>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Core capabilities</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>STAR story generator that suggests prompts and follow-up questions.</li>
            <li>Resume bullet helper that guides users through role, action, and impact, then drafts polished bullets.</li>
            <li>Applications board with swimlanes, quick edits, and reminders for follow-ups.</li>
            <li>Session persistence so progress is saved between visits.</li>
          </ul>
        </article>

        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Implementation</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Next.js and TypeScript for component-driven UI and predictable state.</li>
            <li>Zustand store to sync data across tools without heavy boilerplate.</li>
            <li>Prompt templates designed for Anthropic Claude and OpenAI GPT models (swappable providers).</li>
            <li>Tailwind + Radix primitives for accessible dialogs and keyboard-friendly flows.</li>
          </ul>
        </article>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">What’s working</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Students stay focused because each tool enforces a clear, minimal workflow.</li>
            <li>Generated bullets are editable line-by-line, helping users learn the structure rather than copy-paste.</li>
            <li>The application board delivers quick wins with drag-and-drop and inline notes.</li>
          </ul>
        </article>

        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Next iterations</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Integrate Google Calendar reminders and email nudges for follow-ups.</li>
            <li>Expose export to Notion and PDF for sharing progress with mentors.</li>
            <li>Layer in analytics to show conversion rates across application stages.</li>
          </ul>
        </article>
      </div>

      <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-ink">Artifacts</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-ink">
          Planning docs and Figma flows are available on request while I harden the authentication path for a public
          release.
        </p>
      </article>
    </Section>
  );
}
