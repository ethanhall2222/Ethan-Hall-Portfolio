import React from "react";

const BOOKINGS_URL =
  "https://outlook.office.com/bookwithme/user/a629f516c98f43a8bdfab45b3c5081db@mail.wvu.edu/meetingtype/fyn28bteO0WFROeRZLiyfw2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile";

export const metadata = {
  title: "Contact",
  description: "Schedule a meeting or reach out directly.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-10 text-3xl font-bold tracking-tight">Contact</h1>

      <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
        {/* Left card: Outlook Bookings */}
        <section
          aria-labelledby="schedule-title"
          className="flex h-full flex-col rounded-2xl border p-8 shadow-sm"
        >
          <h2 id="schedule-title" className="text-2xl font-semibold">
            Schedule a meeting
          </h2>
          <p className="mt-2 text-gray-600">
            Use the calendar below to pick a time. It checks my Outlook calendar
            and only shows when I am available.
          </p>

          <iframe
            title="Schedule a meeting with Ethan Hall"
            src={BOOKINGS_URL}
            className="mt-6 w-full grow rounded-xl border"
            loading="lazy"
          />

          <a
            href={BOOKINGS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-blue-600 underline"
          >
            Open full scheduling page
          </a>
        </section>

        {/* Right card: Direct contact */}
        <section
          aria-labelledby="direct-title"
          className="flex h-full flex-col justify-between rounded-2xl border p-8 shadow-sm"
        >
          <div>
            <h2 id="direct-title" className="text-2xl font-semibold">
              Contact me directly
            </h2>
            <p className="mt-2 text-gray-600">
              Prefer to reach out yourself. Send me an email or connect on
              LinkedIn.
            </p>
          </div>

          <div className="mt-8 space-y-4 text-gray-800">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                className="text-blue-600 underline"
                href="mailto:egh00012@mix.wvu.edu"
              >
                egh00012@mix.wvu.edu
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              <a
                className="text-blue-600 underline"
                href="tel:+13042402680"
              >
                (304) 240-2680
              </a>
            </p>
            <p>
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                className="text-blue-600 underline"
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
