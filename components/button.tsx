import Link from "next/link";
import type { Route } from "next";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[var(--accent-strong)] text-white shadow-sm transition hover:bg-[var(--accent)]",
  ghost: "border border-slate-300 bg-white/80 text-ink transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]",
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
