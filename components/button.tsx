import Link from "next/link";
import type { Route } from "next";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-teal-200/40 bg-gradient-to-r from-[rgba(36,212,198,0.94)] to-[rgba(14,165,233,0.86)] text-slate-950 shadow-[0_16px_30px_-18px_var(--glow)] transition hover:-translate-y-0.5 hover:brightness-110",
  ghost:
    "border border-[var(--border)] bg-[rgba(16,26,49,0.7)] text-ink transition hover:border-[var(--accent)] hover:bg-[rgba(36,212,198,0.14)]",
};

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
};

type ButtonProps = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { href?: undefined };

type AnchorProps = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> & { href: Route };

export function Button(props: ButtonProps | AnchorProps) {
  const { variant = "primary", className, ...rest } = props;
  const classes = cn(baseClasses, variantClasses[variant], className);

  if ("href" in rest && rest.href) {
    const { href, children, ...anchorProps } = rest;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return <button className={classes} {...(rest as ButtonProps)} />;
}
