"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "./container";

const navItems: Array<{ name: string; href: Route }> = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-[var(--bg)]/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold text-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
          aria-label="Ethan Hall home"
          onClick={close}
        >
          <span className="rounded-xl bg-[var(--accent)] px-3 py-1 text-base font-bold text-white shadow-sm">
            Ethan G. Hall
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch
              className={cn(
                "text-sm font-medium text-muted-ink transition hover:text-[var(--accent-strong)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]",
                pathname === item.href && "text-ink",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-xl border border-slate-200 text-ink md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </Container>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="md:hidden"
        >
          <Container className="grid gap-2 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                prefetch
                className={cn(
                  "rounded-xl border border-slate-200 bg-[var(--card)] px-4 py-3 text-sm font-medium text-ink shadow-sm",
                  pathname === item.href && "border-[var(--accent)] text-[var(--accent-strong)]",
                )}
              >
                {item.name}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
