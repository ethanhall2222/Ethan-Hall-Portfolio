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

type BlogPageProps = {
  searchParams?: {
    page?: string;
  };
};

const POSTS_PER_PAGE = 6;

export default function BlogPage({ searchParams }: BlogPageProps) {
  const posts = getPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const currentPage = (() => {
    const raw = searchParams?.page ? Number(searchParams.page) : 1;
    if (!Number.isFinite(raw) || raw < 1) return 1;
    if (raw > totalPages) return totalPages;
    return raw;
  })();

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = posts.slice(start, start + POSTS_PER_PAGE);

  return (
    <Section
      title="Blog"
      subtitle="Field Notes"
      headline="Experiments from internships, classroom labs, and personal builds."
      contentClassName="space-y-10"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {pagePosts.map((post) => {
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
      {totalPages > 1 && (
        <nav className="flex items-center justify-between text-sm" aria-label="Blog pagination">
          <Link
            aria-disabled={currentPage === 1}
            className="rounded-lg border border-slate-200 px-3 py-2 text-muted-ink transition hover:text-ink aria-disabled:pointer-events-none aria-disabled:opacity-40"
            href={`/blog?page=${Math.max(1, currentPage - 1)}` as Route}
          >
            Previous
          </Link>
          <p className="text-muted-ink">
            Page {currentPage} of {totalPages}
          </p>
          <Link
            aria-disabled={currentPage === totalPages}
            className="rounded-lg border border-slate-200 px-3 py-2 text-muted-ink transition hover:text-ink aria-disabled:pointer-events-none aria-disabled:opacity-40"
            href={`/blog?page=${Math.min(totalPages, currentPage + 1)}` as Route}
          >
            Next
          </Link>
        </nav>
      )}
    </Section>
  );
}
