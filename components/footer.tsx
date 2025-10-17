import { Container } from "./container";
import { SocialLinks } from "./social-links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white/70">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-sm space-y-2 text-sm text-muted-ink">
          <p>
            Let me know if you want to collaborate or swap ideas anytime—I’m always looking for thoughtful teams and
            interesting problems.
          </p>
        </div>
        <SocialLinks />
      </Container>
      <Container className="pb-8 text-xs text-muted-ink">
        © {year} Ethan G. Hall. All rights reserved.
      </Container>
    </footer>
  );
}
