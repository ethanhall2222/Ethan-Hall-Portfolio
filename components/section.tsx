import type { PropsWithChildren, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = PropsWithChildren<{
  id?: string;
  title?: string;
  subtitle?: string;
  headline?: ReactNode;
  className?: string;
  contentClassName?: string;
}>;

export function Section({
  id,
  title,
  subtitle,
  headline,
  className,
  contentClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-14 md:py-20", className)}
      aria-labelledby={title ? `${id ?? title.toLowerCase().replace(/\s+/g, "-")}-title` : undefined}
    >
      <Container className={contentClassName}>
        {(title || subtitle || headline) && (
          <div className="mb-10 max-w-3xl">
            {subtitle && (
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {subtitle}
              </p>
            )}
            {title && (
              <h2
                id={title ? `${id ?? title.toLowerCase().replace(/\s+/g, "-")}-title` : undefined}
                className="mt-3 text-3xl font-semibold text-ink md:text-4xl"
              >
                {title}
              </h2>
            )}
            {headline && <div className="mt-4 text-lg text-muted-ink">{headline}</div>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
