import type { Metadata, Route } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  path: "/blog",
  description: "Notes on AI builds, automation experiments, and analytics lessons from the field.",
});

export const dynamic = "force-static";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <Section
      title="Blog"
      subtitle="Field Notes"
      headline="Experiments from internships, classroom labs, and personal builds."
      contentClassName="space-y-10"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => {
          const postHref = `/blog/${post.slug}` as Route;
          return (
            <article key={post.slug} className="card flex h-full flex-col justify-between p-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {new Date(post.date).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <h3 className="text-lg font-semibold text-ink">{post.title}</h3>
                <p className="text-sm text-muted-ink">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-muted-ink">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={postHref}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-strong)]"
              >
                Read post
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
