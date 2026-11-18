"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Route } from "next";
import {
  ArrowUpRight,
  FileText,
  FolderKanban,
  Home,
  Mail,
  Search,
  Sparkles,
  UserRound,
  X,
  type LucideIcon,
} from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type CommandItem = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
  keywords: string;
  external?: boolean;
};

const commands: CommandItem[] = [
  { label: "Home", description: "Start at the overview", href: "/", icon: Home, keywords: "landing intro" },
  {
    label: "Projects",
    description: "Explore systems and case studies",
    href: "/projects",
    icon: FolderKanban,
    keywords: "work portfolio ai data",
  },
  { label: "About", description: "Experience and education", href: "/about", icon: UserRound, keywords: "bio wvu deloitte" },
  { label: "Contact", description: "Start a conversation", href: "/contact", icon: Mail, keywords: "email connect" },
  { label: "Resume", description: "Open the latest resume", href: `${basePath}/res.pdf`, icon: FileText, keywords: "cv pdf", external: true },
];

export function ExperienceLayer() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ambientRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const paletteRef = useRef<HTMLElement>(null);

  const filteredCommands = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return commands;
    return commands.filter((command) =>
      `${command.label} ${command.description} ${command.keywords}`.toLowerCase().includes(normalized),
    );
  }, [query]);

  useEffect(() => {
    const openPalette = () => setOpen(true);
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("portfolio:open-command", openPalette);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("portfolio:open-command", openPalette);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => inputRef.current?.focus());
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const focusable = paletteRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", trapFocus);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", trapFocus);
    };
  }, [open]);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      progressRef.current?.style.setProperty("transform", `scaleX(${Math.min(1, Math.max(0, progress))})`);
    };
    const handleScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    let latest = { x: window.innerWidth / 2, y: window.innerHeight / 5 };
    const paint = () => {
      frame = 0;
      ambientRef.current?.style.setProperty("--pointer-x", `${latest.x}px`);
      ambientRef.current?.style.setProperty("--pointer-y", `${latest.y}px`);
    };
    const handlePointer = (event: PointerEvent) => {
      latest = { x: event.clientX, y: event.clientY };
      if (!frame) frame = requestAnimationFrame(paint);

      const card = (event.target as HTMLElement).closest<HTMLElement>(".interactive-card");
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
      }
    };
    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointer);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={ambientRef} className="ambient-field" aria-hidden />
      <div className="experience-noise" aria-hidden />
      <div ref={progressRef} className="scroll-progress" aria-hidden />

      {open && (
        <div className="command-shell" role="presentation" onMouseDown={() => setOpen(false)}>
          <section
            ref={paletteRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="command-title"
            className="command-palette"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <header className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3">
              <Search className="size-5 text-[var(--accent)]" aria-hidden />
              <label id="command-title" className="sr-only" htmlFor="command-search">
                Navigate the portfolio
              </label>
              <input
                ref={inputRef}
                id="command-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Jump to a page or action..."
                className="min-w-0 flex-1 bg-transparent py-2 text-sm text-ink outline-none placeholder:text-muted-ink/70"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex size-8 items-center justify-center rounded-lg border border-[var(--border)] text-muted-ink transition hover:text-ink"
                aria-label="Close command menu"
              >
                <X className="size-4" aria-hidden />
              </button>
            </header>

            <div className="p-2">
              <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-ink">
                Quick navigation
              </p>
              <div className="space-y-1">
                {filteredCommands.map((command) => {
                  const Icon = command.icon;
                  const content = (
                    <>
                      <span className="flex size-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(36,212,198,0.08)] text-[var(--accent)]">
                        <Icon className="size-4" aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-ink">{command.label}</span>
                        <span className="block truncate text-xs text-muted-ink">{command.description}</span>
                      </span>
                      <ArrowUpRight className="size-4 text-muted-ink" aria-hidden />
                    </>
                  );
                  const classes =
                    "flex w-full items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-left transition hover:border-[var(--border)] hover:bg-[rgba(36,212,198,0.08)] focus-visible:border-[var(--accent)] focus-visible:outline-none";

                  return command.external ? (
                    <a key={command.label} href={command.href} target="_blank" rel="noopener noreferrer" className={classes} onClick={() => setOpen(false)}>
                      {content}
                    </a>
                  ) : (
                    <Link key={command.label} href={command.href as Route} className={classes} onClick={() => setOpen(false)}>
                      {content}
                    </Link>
                  );
                })}
              </div>
              {filteredCommands.length === 0 && (
                <div className="px-3 py-8 text-center">
                  <Sparkles className="mx-auto mb-2 size-5 text-[var(--accent)]" aria-hidden />
                  <p className="text-sm text-muted-ink">No matches. Try “projects,” “resume,” or “contact.”</p>
                </div>
              )}
            </div>

            <footer className="flex items-center justify-between border-t border-[var(--border)] px-4 py-3 text-[10px] uppercase tracking-[0.16em] text-muted-ink">
              <span>Fast path through the portfolio</span>
              <span>Esc to close</span>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}
