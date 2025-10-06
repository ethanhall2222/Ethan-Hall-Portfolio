import type { PropsWithChildren, ReactNode } from "react";
import { cn } from "@/lib/utils";

type TimelineItemProps = PropsWithChildren<{
  title: string;
  period: string;
  subtitle?: string;
  icon?: ReactNode;
  className?: string;
}>;

export function TimelineItem({
  title,
  subtitle,
  period,
  icon,
  className,
  children,
}: TimelineItemProps) {
  return (
    <li className={cn("relative flex gap-4 pb-10 last:pb-0", className)}>
      <div className="flex flex-col items-center">
        <span className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-[var(--card)] text-accent shadow-sm">
          {icon ?? <span className="text-sm font-semibold">EH</span>}
        </span>
        <span className="mt-2 w-px flex-1 bg-slate-200" aria-hidden />
      </div>
      <div className="flex-1 rounded-2xl border border-slate-200 bg-white/80 p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold text-ink">{title}</h3>
          <span className="text-sm font-medium text-muted-ink">{period}</span>
        </div>
        {subtitle && <p className="mt-2 text-sm text-muted-ink">{subtitle}</p>}
        {children && <div className="mt-3 text-sm text-muted-ink">{children}</div>}
      </div>
    </li>
  );
}
