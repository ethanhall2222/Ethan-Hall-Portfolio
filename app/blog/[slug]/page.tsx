import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";
import { getPostBySlug, getPosts } from "@/lib/posts";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return createMetadata({ title: "Post", path: `/blog/${params.slug}` });
  }
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <Section
      title={post.title}
      subtitle={new Date(post.date).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      })}
      contentClassName="prose max-w-3xl space-y-6"
    >
      <div className="flex flex-wrap gap-2 text-xs">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-muted-ink">
            {tag}
          </span>
        ))}
      </div>
      {post.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </Section>
  );
}
