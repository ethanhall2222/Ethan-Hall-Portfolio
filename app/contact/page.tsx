import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/section";
import { SocialLinks } from "@/components/social-links";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  path: "/contact",
  description: "Reach out to collaborate on AI products, analytics, or automation initiatives.",
});

export default function ContactPage() {
  return (
    <Section title="Schedule a coffee chat" subtitle="Let’s Talk" contentClassName="grid gap-10 md:grid-cols-[1.2fr_1fr]">
      <div className="space-y-4">
        <p className="text-lg text-muted-ink">
          Want to compare notes on analytics, automation, or student projects? Drop a note and I’ll follow up with a few options so we can grab a short coffee chat.
        </p>
        <ContactForm />
      </div>
      <aside className="card space-y-4 p-6">
        <h3 className="text-lg font-semibold text-ink">Pick a time</h3>
        <p className="text-sm text-muted-ink">
          Prefer to reach out directly? Send an email or ping me on LinkedIn with a couple of times that work—always happy to meet virtually or on campus.
        </p>
        <SocialLinks />
      </aside>
    </Section>
  );
}
