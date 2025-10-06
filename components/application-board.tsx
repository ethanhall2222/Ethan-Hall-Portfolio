"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "./button";

const columns = ["Researching", "Applied", "Interviewing"] as const;

type Column = (typeof columns)[number];

type Application = {
  id: string;
  role: string;
  company: string;
  status: Column;
};

const seed: Application[] = [
  {
    id: "1",
    role: "AI Career Helper",
    company: "Self-Initiated",
    status: "Researching",
  },
  {
    id: "2",
    role: "Data Analyst Intern",
    company: "Public Sector Partner",
    status: "Applied",
  },
  {
    id: "3",
    role: "Automation Fellow",
    company: "Data Driven WV",
    status: "Interviewing",
  },
];

export function ApplicationBoard() {
  const [applications, setApplications] = useState(seed);
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");

  const addApplication = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!role.trim() || !company.trim()) {
      return;
    }
    const entry: Application = {
      id:
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2),
      role: role.trim(),
      company: company.trim(),
      status: "Researching",
    };
    setApplications((prev) => [...prev, entry]);
    setRole("");
    setCompany("");
  };

  const updateStatus = (id: string, status: Column) => {
    setApplications((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)));
  };

  return (
    <div className="space-y-5">
      <form onSubmit={addApplication} className="grid gap-3 md:grid-cols-[1fr_1fr_auto] md:items-end">
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          Role
          <input
            value={role}
            onChange={(event) => setRole(event.target.value)}
            placeholder="Business analytics intern"
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--ring)]"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-ink">
          Company
          <input
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            placeholder="Automation lab"
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[var(--ring)]"
          />
        </label>
        <Button type="submit" aria-label="Add application">
          <Plus className="mr-2 size-4" aria-hidden /> Add
        </Button>
      </form>

      <div className="grid gap-4 md:grid-cols-3">
        {columns.map((column) => (
          <div key={column} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-ink">{column}</h3>
            <div className="mt-3 space-y-3">
              {applications.filter((app) => app.status === column).map((app) => (
                <div key={app.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-muted-ink">
                  <p className="font-semibold text-ink">{app.role}</p>
                  <p className="text-xs uppercase tracking-wide text-muted-ink/70">{app.company}</p>
                  <label className="mt-3 flex flex-col gap-1 text-xs font-semibold text-muted-ink">
                    Move to
                    <select
                      value={app.status}
                      onChange={(event) => updateStatus(app.id, event.target.value as Column)}
                      className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                    >
                      {columns.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              ))}
              {applications.every((app) => app.status !== column) && (
                <p className="rounded-lg border border-dashed border-slate-200 bg-slate-50 p-3 text-xs italic text-slate-500">
                  Add a role to populate this column.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
