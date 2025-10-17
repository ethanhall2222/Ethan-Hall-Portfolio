import React from "react";

const BOOKINGS_URL =
  "https://outlook.office.com/bookwithme/user/a629f516c98f43a8bdfab45b3c5081db@mail.wvu.edu/meetingtype/fyn28bteO0WFROeRZLiyfw2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata = {
  title: "Contact",
  description: "Schedule a meeting or reach out directly.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="mb-10 text-3xl font-bold tracking-tight text-ink">Contact</h1>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,2.25fr)_minmax(0,1fr)]">
        {/* Left card: Outlook Bookings */}
        <section
          aria-labelledby="schedule-title"
          className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-sm"
        >
          <h2 id="schedule-title" className="text-2xl font-semibold">
            Schedule a meeting
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-ink">
            Use the calendar below to pick a time. It checks my Outlook calendar
            and only shows when I am available.
          </p>

          <iframe
            title="Schedule a meeting with Ethan Hall"
            src={BOOKINGS_URL}
            className="mt-6 w-full grow rounded-[28px] border border-slate-200 bg-white"
            style={{ minHeight: 520 }}
            loading="lazy"
          />

          <a
            href={BOOKINGS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm font-semibold text-[var(--accent-strong)] underline"
          >
            Open full scheduling page
          </a>
        </section>

        {/* Right card: Direct contact */}
        <section
          aria-labelledby="direct-title"
          className="flex h-full flex-col gap-6 rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-sm"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-32 overflow-hidden rounded-full border-4 border-white shadow-lg">
              <img
                src={`${basePath}/images/EthanHallHeadshot.jpeg`}
                alt="Ethan Hall"
                className="h-32 w-32 object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-4 space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Contact me directly
              </p>
              <h2 id="direct-title" className="text-xl font-semibold text-ink">
                Let’s connect
              </h2>
              <p className="text-sm text-muted-ink">
                Prefer to reach out yourself? Drop me a note or send a quick connection request.
              </p>
            </div>
          </div>

          <div className="mt-2 space-y-4 text-sm text-ink">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                className="text-[var(--accent-strong)] underline"
                href="mailto:egh00012@mix.wvu.edu"
              >
                egh00012@mix.wvu.edu
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              <a
                className="text-[var(--accent-strong)] underline"
                href="tel:+13042402680"
              >
                (304) 240-2680
              </a>
            </p>
            <p>
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                className="text-[var(--accent-strong)] underline"
                href="https://www.linkedin.com/in/ethanghall/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/ethanghall
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
