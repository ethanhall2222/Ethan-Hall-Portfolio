import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Route } from "next";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";

type ProjectCardProps = {
  title: string;
  blurb: string;
  href: Route;
  stack: string[];
  className?: string;
  children?: ReactNode;
};

export function ProjectCard({ title, blurb, href, stack, className, children }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-[var(--card)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus-within:-translate-y-1 focus-within:shadow-xl",
        className,
      )}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-ink">{title}</h3>
          <ArrowUpRight
            aria-hidden
            className="size-5 text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </div>
        <p className="text-sm text-muted-ink">{blurb}</p>
        {children}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
      <Link
        href={href}
        className="sr-only"
        aria-label={`Read more about ${title}`}
        prefetch
      >
        {title}
      </Link>
    </article>
  );
}
