import { Container } from "./container";
import { SocialLinks } from "./social-links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-14 border-t border-[var(--border)] bg-[rgba(7,12,26,0.86)]">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-sm space-y-2 text-sm text-muted-ink">
          <p>
            Open to product, analytics, and AI-focused roles where business context and technical execution actually
            meet.
          </p>
        </div>
        <SocialLinks />
      </Container>
      <Container className="pb-8 text-xs text-muted-ink/80">
        © {year} Ethan G. Hall. Built for speed, clarity, and shipping.
      </Container>
    </footer>
  );
}
