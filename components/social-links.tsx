import { Mail, MapPin, Linkedin, type LucideIcon } from "lucide-react";
type SocialItem = {
  href: string;
  label: string;
  text: string;
  icon: LucideIcon;
};

const socials: SocialItem[] = [
  {
    href: "mailto:egh00012@mix.wvu.edu",
    label: "Email Ethan",
    text: "egh00012@mix.wvu.edu",
    icon: Mail,
  },
  {
    href: "https://www.linkedin.com/in/EthanGHall",
    label: "Ethan Hall on LinkedIn",
    text: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.google.com/maps/place/Martinsburg,+WV",
    label: "Martinsburg, WV",
    text: "Martinsburg, WV",
    icon: MapPin,
  },
];

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-4 text-sm text-muted-ink">
      {socials.map(({ href, icon: Icon, label, text }) => {
        const classes =
          "inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2 transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]";

        const linkProps = href.startsWith("http")
          ? { href, target: "_blank", rel: "noopener noreferrer" as const }
          : { href };

        return (
          <li key={href}>
            <a {...linkProps} className={classes} aria-label={label}>
              <Icon className="size-4" aria-hidden />
              <span>{text}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
