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
};

type TimelineProps = {
  current: TimelineItem[];
  history: TimelineItem[];
};

export function Timeline({ current, history }: TimelineProps) {
  return (
    <div className="space-y-10">
      {current.length > 0 && <TimelineGroup title="Current" items={current} />}
      {history.length > 0 && <TimelineGroup title="History" items={history} />}
    </div>
  );
}

function TimelineGroup({ title, items }: TimelineGroupProps) {
  return (
    <section aria-label={title} className="space-y-6">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <ol className="relative space-y-6">
        <div
          className="pointer-events-none absolute left-[22px] top-0 h-full w-px bg-slate-200"
          aria-hidden="true"
        />
        {items.map((item) => (
          <TimelineRow key={`${item.role}-${item.org}-${item.start}`} item={item} />
        ))}
      </ol>
    </section>
  );
}

function TimelineRow({ item }: { item: TimelineItem }) {
  return (
    <li className="grid grid-cols-[48px_1fr] items-start gap-4 md:grid-cols-[64px_1fr]">
      <div className="relative flex justify-center md:justify-start">
        <span className="mt-3 inline-flex h-3 w-3 -translate-x-[1px] items-center justify-center rounded-full border-2 border-white bg-[var(--accent-strong)] shadow" />
      </div>
      <article className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
        <header className="flex flex-wrap items-baseline justify-between gap-2">
          <h4 className="text-base font-semibold text-ink">
            {item.role}
            <span className="text-sm font-normal text-muted-ink"> · {item.org}</span>
          </h4>
          <time className="text-sm text-muted-ink">{formatRange(item.start, item.end)}</time>
        </header>
        {item.location && <p className="mt-1 text-sm text-muted-ink">{item.location}</p>}
        {item.notes && item.notes.length > 0 && (
          <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-muted-ink">
            {item.notes.map((note, index) => (
              <li key={`${item.role}-${index}`}>{note}</li>
            ))}
          </ul>
        )}
      </article>
    </li>
  );
}

function formatRange(startISO: string, endISO: string | null) {
  const format = (date: Date) =>
    date.toLocaleDateString(undefined, { month: "short", year: "numeric" });
  const start = format(new Date(startISO));
  const end = endISO ? format(new Date(endISO)) : "Present";
  return `${start} — ${end}`;
}
