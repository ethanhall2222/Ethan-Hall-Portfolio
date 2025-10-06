import type { MetadataRoute } from "next";
import { siteMeta } from "@/lib/seo";
import { projects } from "@/lib/projects";
import { getPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteMeta.url;
  const staticRoutes = ["/", "/about", "/projects", "/blog", "/contact"].map((path) => ({
    url: new URL(path, base).toString(),
    lastModified: new Date().toISOString(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: new URL(`/projects/${project.slug}`, base).toString(),
    lastModified: new Date().toISOString(),
  }));

  const postRoutes = getPosts().map((post) => ({
    url: new URL(`/blog/${post.slug}`, base).toString(),
    lastModified: post.date,
  }));

  return [...staticRoutes, ...projectRoutes, ...postRoutes];
}
