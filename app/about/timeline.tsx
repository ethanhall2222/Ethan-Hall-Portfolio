import React from "react";

export type TimelineItem = {
  role: string;
  org: string;
  start: string;
  end: string | null;
  location?: string;
  notes?: string[];
};

type TimelineGroupProps = {
  title: string;
  items: TimelineItem[];
  accent: "accent" | "slate";
};

type TimelineProps = {
  current: TimelineItem[];
  history: TimelineItem[];
};

export function Timeline({ current, history }: TimelineProps) {
  return (
    <div className="space-y-12">
      {current.length > 0 && <TimelineGroup title="In Progress" items={current} accent="accent" />}
      {history.length > 0 && <TimelineGroup title="Previous Chapters" items={history} accent="slate" />}
    </div>
  );
}

function TimelineGroup({ title, items, accent }: TimelineGroupProps) {
  return (
    <section aria-label={title} className="space-y-4">
      <div className="flex items-center gap-3">
        <div
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
            accent === "accent"
              ? "border border-[var(--accent-strong)]/30 bg-[var(--accent)]/10 text-[var(--accent-strong)]"
              : "border border-slate-200 bg-white/80 text-muted-ink"
          }`}
        >
          {title}
        </div>
        <div className="h-px flex-1 bg-slate-200" aria-hidden />
      </div>

      <ol className="relative space-y-8 pl-6">
        <div className="pointer-events-none absolute left-1 top-0 h-full w-0.5 bg-gradient-to-b from-[var(--accent-strong)]/60 via-slate-200 to-slate-200" aria-hidden />
        {items.map((item) => (
          <TimelineRow key={`${item.role}-${item.org}-${item.start}`} item={item} />
        ))}
      </ol>
    </section>
  );
}

function TimelineRow({ item }: { item: TimelineItem }) {
  return (
    <li className="relative pl-6">
      <span className="absolute left-[-11px] top-2 z-10 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white bg-[var(--accent-strong)] shadow-md" />
      <article className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <header className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-ink">{item.role}</h3>
            <p className="text-sm text-muted-ink">
              {item.org}
              {item.location ? ` · ${item.location}` : ""}
            </p>
          </div>
          <div className="text-right text-sm font-medium text-muted-ink">
            <time>{formatRange(item.start, item.end)}</time>
            <p className="text-xs font-normal uppercase tracking-[0.2em] text-slate-400">{formatDuration(item.start, item.end)}</p>
          </div>
        </header>

        {item.notes && item.notes.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            {item.notes.map((note, index) => (
              <li key={`${item.role}-${index}`} className="flex items-start gap-2">
                <span aria-hidden className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-strong)]" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        )}
      </article>
    </li>
  );
}

function formatRange(startISO: string, endISO: string | null) {
  const format = (date: Date) => date.toLocaleDateString(undefined, { month: "short", year: "numeric" });
  const start = format(new Date(startISO));
  const end = endISO ? format(new Date(endISO)) : "Present";
  return `${start} - ${end}`;
}

function formatDuration(startISO: string, endISO: string | null) {
  const endDate = endISO ? new Date(endISO) : new Date();
  const startDate = new Date(startISO);
  const months = Math.max(1, monthsBetween(startDate, endDate));
  if (months < 12) return `${months} mo`;
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  return remainingMonths ? `${years} yr ${remainingMonths} mo` : `${years} yr`;
}

function monthsBetween(start: Date, end: Date) {
  let months = (end.getFullYear() - start.getFullYear()) * 12;
  months += end.getMonth() - start.getMonth();
  if (end.getDate() < start.getDate()) {
    months -= 1;
  }
  return months;
}
