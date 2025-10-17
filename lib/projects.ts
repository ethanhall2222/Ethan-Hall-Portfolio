export type ProjectCategory = "data-driven-wv" | "personal" | "school";

export type ProjectSubitem = {
  slug: string;
  title: string;
  summary: string;
  href?: string;
  stack?: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  subitems?: ProjectSubitem[];
  stack?: string[];
  problem?: string;
  approach?: string;
  features?: string[];
  learnings?: string[];
  nextSteps?: string[];
};

export const projects: Project[] = [
  {
    slug: "meme-token-trader",
    title: "Meme Token Trading Website",
    summary:
      "Lightweight market discovery for trending meme tokens with sentiment snapshots and quick comparisons (mock data for MVP).",
    category: "personal",
    stack: ["Next.js", "TypeScript", "Tailwind", "lucide-react"],
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
      "STAR practice prompts, resume-bullet helper, and a simple applications board focused on student workflows.",
    category: "personal",
    stack: ["Next.js", "TypeScript", "Tailwind", "lucide-react"],
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
  {
    slug: "data-driven-wv",
    title: "Data Driven WV - Applied Projects",
    summary:
      "Selected organization work where I learned to pair UiPath with LLM validation and keep humans in the loop, staying pragmatic with dashboards and small agentic helpers.",
    category: "data-driven-wv",
    subitems: [
      {
        slug: "uipath-llm-etl",
        title: "UiPath + LLM-validated ETL",
        summary:
          "Automating PDF-to-structured data flows with human-in-the-loop checks to increase trust.",
      },
      {
        slug: "ops-dashboards",
        title: "Operations Dashboards",
        summary:
          "Iterative dashboards that keep weekly work visible without over-engineering.",
      },
      {
        slug: "agentic-prototypes",
        title: "Agentic Automation Prototypes",
        summary:
          "Small, composable bots that reduce repetitive steps and handoffs.",
      },
    ],
  },
  {
    slug: "school-projects",
    title: "School Projects - WVU",
    summary:
      "Course projects that helped me practice modeling, visualization, and explaining limitations.",
    category: "school",
    subitems: [
      {
        slug: "credit-balance-analysis",
        title: "Credit Balance Modeling (ISLR/BI)",
        summary:
          "Exploring drivers of balance with clear visuals, model comparison, and limitations.",
      },
      {
        slug: "queuing-and-ops",
        title: "Queueing & Ops Analytics",
        summary:
          "Applying M/M/1 and M/M/c intuition to service tradeoffs with simple sanity checks.",
      },
      {
        slug: "land-price-models",
        title: "Land Price Models (MinnLand)",
        summary:
          "Feature engineering + cross-validation practice with transparent reporting.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((project) => project.category === category);
}

export type DetailedProject = Project & {
  problem: string;
  approach: string;
  features: string[];
  learnings: string[];
  nextSteps: string[];
  stack: string[];
};

export function getDetailedProject(slug: string): DetailedProject {
  const project = getProjectBySlug(slug);
  if (
    !project ||
    !project.problem ||
    !project.approach ||
    !project.features ||
    !project.learnings ||
    !project.nextSteps ||
    !project.stack
  ) {
    throw new Error(`Detailed project data missing for ${slug}`);
  }

  return project as DetailedProject;
}
