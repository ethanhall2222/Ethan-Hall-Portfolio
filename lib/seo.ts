import type { Metadata } from "next";

export const siteMeta = {
  name: "Ethan Hall — Portfolio",
  titleTemplate: "%s — Ethan Hall",
  description: "MIS + Business Data Analytics student at WVU building AI-powered tools, analytics, and automation.",
  url: "https://ethanhall.dev",
  ogImage: "/og.jpg",
};

type MetadataInput = {
  title: string;
  description?: string;
  path?: string;
};

export function createMetadata({ title, description, path }: MetadataInput): Metadata {
  const resolvedTitle = title === siteMeta.name ? title : `${title} — Ethan Hall`;
  const fullUrl = path ? new URL(path, siteMeta.url).toString() : siteMeta.url;
  const resolvedDescription = description ?? siteMeta.description;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: fullUrl,
      type: "website",
      siteName: siteMeta.name,
      images: [
        {
          url: siteMeta.ogImage,
          width: 1200,
          height: 630,
          alt: "Ethan Hall portfolio cover image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [siteMeta.ogImage],
    },
  };
}
