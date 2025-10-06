export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
  tags: string[];
};

const posts: Post[] = [
  {
    slug: "ai-career-helper-takeaways",
    title: "What I Learned Building AI Career Helper",
    date: "2025-08-12",
    excerpt:
      "Turning fuzzy interview prep into actionable flows takes clarity, quick iteration, and a lot of user empathy.",
    tags: ["AI", "Product", "Career"],
    content: [
      "The AI Career Helper project started as a question from classmates: how do we practice for interviews when every role expects something different? Structuring prompts with the STAR method let me keep the interface simple while still personalizing guidance.",
      "Because this was a solo build, I leaned heavily on prototyping quick React components. Tailwind’s utility classes and a clearly defined state model made it easy to extend features like the resume bullet helper without rewriting core logic.",
      "The biggest takeaway is that users crave a confident default. Offering a suggested practice plan provides momentum—even if they eventually customize it. That small nudge increases completion rates across every cohort I tested with.",
    ],
  },
  {
    slug: "scaling-etl-with-uipath",
    title: "Scaling ETL with UiPath and PDFs",
    date: "2025-07-04",
    excerpt:
      "Agentic automations help our Data Driven WV teams turn PDF reports into structured data they can trust.",
    tags: ["Automation", "UiPath", "ETL"],
    content: [
      "Our operations stack at Data Driven WV relies on state reports that still arrive as PDFs. I paired UiPath flows with LLM validation to turn them into reliable datasets, which cut manual cleanup time by over 70%.",
      "The trick was chaining deterministic parsers with human-in-the-loop checks. When a confidence score dipped, the workflow flagged the document for review, ensuring we never sacrificed quality for speed.",
      "Once the pipeline stabilized, we layered monitoring dashboards in Power BI so stakeholders could see throughput and exception trends at a glance.",
    ],
  },
  {
    slug: "agentic-automation-notes",
    title: "Building Agentic Automations for Real Teams",
    date: "2025-05-18",
    excerpt:
      "From supply chain dashboards to UiPath bots, cross-functional co-design keeps AI projects grounded.",
    tags: ["Automation", "Data", "AI"],
    content: [
      "Every internship so far reinforced the same lesson: automation only sticks when end users shape the experience. At Dot Foods I sat with operators to map daily friction points before writing the first Cognos dashboard.",
      "Inside Data Driven WV we’re experimenting with agentic AI patterns that supervise UiPath bots. The bots handle repeatable steps and escalate the edge cases, which keeps analysts in control while saving them hours each week.",
      "I’m investing time in prompt evaluation frameworks so we can prove when an agent is helpful versus when a classic script would have been faster.",
    ],
  },
];

export function getPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

