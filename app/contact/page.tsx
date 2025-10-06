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
    <Section title="Contact" subtitle="Let's Talk" contentClassName="grid gap-10 md:grid-cols-[1.2fr_1fr]">
      <div className="space-y-4">
        <p className="text-lg text-muted-ink">
          Need help shaping analytics, automation, or AI-assisted products? Drop a note and I’ll respond within a day.
        </p>
        <ContactForm />
      </div>
      <aside className="card space-y-4 p-6">
        <h3 className="text-lg font-semibold text-ink">Stay connected</h3>
        <p className="text-sm text-muted-ink">
          Prefer to connect another way? Find me on LinkedIn or send an email directly—always happy to chat projects and opportunities.
        </p>
        <SocialLinks />
      </aside>
    </Section>
  );
}
