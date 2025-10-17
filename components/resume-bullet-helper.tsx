"use client";

import { useMemo, useState } from "react";
import { Button } from "./button";

export function ResumeBulletHelper() {
  const [role, setRole] = useState("Product analyst intern");
  const [action, setAction] = useState("automated weekly performance reporting with UiPath");
  const [result, setResult] = useState("freed 6 hours for analysts each week");
  const [metric, setMetric] = useState("cut manual touches by 72%");

  const bullet = useMemo(() => {
    const segments = [role, action, result, metric]
      .map((segment) => segment.trim())
      .filter(Boolean);

    if (!segments.length) {
      return "";
    }

    return `${segments[0]} - ${segments.slice(1).join(", ")}.`;
  }, [role, action, result, metric]);

  const reset = () => {
    setRole("");
    setAction("");
    setResult("");
    setMetric("");
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          Role or context
          <input
            value={role}
            onChange={(event) => setRole(event.target.value)}
            placeholder="Product analyst intern"
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--ring)]"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          Action you took
          <input
            value={action}
            onChange={(event) => setAction(event.target.value)}
            placeholder="Automated weekly performance reporting with UiPath"
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--ring)]"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          Result
          <input
            value={result}
            onChange={(event) => setResult(event.target.value)}
            placeholder="Freed 6 hours for analysts each week"
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--ring)]"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          Metric
          <input
            value={metric}
            onChange={(event) => setMetric(event.target.value)}
            placeholder="Cut manual touches by 72%"
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--ring)]"
          />
        </label>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Suggested bullet</p>
        <p className="mt-2 text-sm text-muted-ink">
          {bullet || "Fill in the prompts above to generate a polished STAR-style bullet."}
        </p>
      </div>
      <Button variant="ghost" onClick={reset} aria-label="Reset resume bullet helper">
        Clear inputs
      </Button>
    </div>
  );
}
