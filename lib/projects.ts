export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  features: string[];
  stack: string[];
  learnings: string[];
  nextSteps: string[];
};

export const projects: Project[] = [
  {
    slug: "meme-token-trader",
    title: "Meme Token Trading Website",
    summary:
      "A market discovery interface that surfaces trending meme tokens, sentiment snapshots, and lightweight comparison tools.",
    problem:
      "Meme tokens move fast and are noisy. It is hard to assess momentum and sentiment quickly.",
    approach:
      "Simple, fast UI to browse tokens, see basic quote data, and skim sentiment tags. Add to a personal watchlist and compare candidates in one view.",
    features: [
      "Token grid with quote summary and quick filters",
      "Sentiment badges that mix social chatter with basic momentum flags",
      "Compare modal for side-by-side stats",
      "Favorites with local persistence",
      "Lightweight search and categorization",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "lucide-react"],
    learnings: [
      "Balancing noisy signals with simple presentation",
      "Building flexible card layouts that scale",
      "State management with local persistence",
    ],
    nextSteps: [
      "Plug in real data sources and websocket quotes",
      "Add a backtesting sandbox for common strategies",
      "Ship opt-in notifications for watchlist alerts",
    ],
  },
  {
    slug: "ai-career-helper",
    title: "AI Career Helper",
    summary:
      "Tools for job seekers to draft resume bullets, generate interview prep plans, and track applications across stages.",
    problem:
      "Job seekers need targeted prep and clear resume bullets, but lack structure and feedback loops.",
    approach:
      "A suite of lightweight tools that generate STAR-style prompts, assist with resume bullets, and track applications with a simple board.",
    features: [
      "STAR practice plan generator (stub)",
      "Resume bullet helper (role + action + result + metric → bullet)",
      "Application board with status columns",
      "Persistent local storage and quick edit actions",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "lucide-react"],
    learnings: [
      "Turning fuzzy goals into structured flows",
      "Designing for clarity and low friction",
      "Keeping feedback loops tight for iteration",
    ],
    nextSteps: [
      "Integrate LLM APIs for dynamic bullet drafts",
      "Export plans to PDF and Notion",
      "Sync applications with Google Sheets",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

