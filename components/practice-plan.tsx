"use client";

import { useState } from "react";
import { Button } from "./button";

type PlanEntry = {
  stage: string;
  prompt: string;
};

type PracticePlan = {
  focus: string;
  entries: PlanEntry[];
};

function buildPlan(role: string, focus: string): PracticePlan {
  const base = role || "the role";
  const emphasis = focus || "impact";
  return {
    focus: emphasis,
    entries: [
      {
        stage: "Situation",
        prompt: `Describe the moment you first spotted an opportunity to apply ${emphasis} for ${base}.`,
      },
      {
        stage: "Task",
        prompt: `Outline the measurable objective you owned while delivering value to ${base}.`,
      },
      {
        stage: "Action",
        prompt: `List 3 specific actions you took, highlighting data and AI tools that supported your decision making.`,
      },
      {
        stage: "Result",
        prompt: `Quantify the outcome and explain how you iterated based on feedback or metrics.`,
      },
    ],
  };
}

export function PracticePlanGenerator() {
  const [role, setRole] = useState("");
  const [focus, setFocus] = useState("AI automation");
  const [plan, setPlan] = useState<PracticePlan | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPlan(buildPlan(role.trim(), focus.trim()));
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          Target role
          <input
            value={role}
            onChange={(event) => setRole(event.target.value)}
            placeholder="Product analyst intern"
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--ring)]"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          Focus area
          <input
            value={focus}
            onChange={(event) => setFocus(event.target.value)}
            placeholder="AI automation"
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--ring)]"
          />
        </label>
        <Button type="submit" aria-label="Generate STAR practice plan">
          Generate plan
        </Button>
      </form>
      {plan && (
        <div className="grid gap-4 md:grid-cols-2">
          {plan.entries.map((entry) => (
            <div key={entry.stage} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {entry.stage}
              </p>
              <p className="mt-2 text-sm text-muted-ink">{entry.prompt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
