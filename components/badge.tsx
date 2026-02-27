import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = PropsWithChildren<{
  className?: string;
}>;

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--border)] bg-[rgba(36,212,198,0.12)] px-3 py-1 text-xs font-medium text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
