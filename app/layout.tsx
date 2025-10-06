import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { Analytics } from "@/components/analytics";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { siteMeta } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: { default: siteMeta.name, template: siteMeta.titleTemplate },
  description: siteMeta.description,
  openGraph: {
    title: siteMeta.name,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: siteMeta.name,
    images: [
      {
        url: siteMeta.ogImage,
        width: 1200,
        height: 630,
        alt: "Ethan Hall portfolio cover image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.name,
    description: siteMeta.description,
    images: [siteMeta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteMeta.url,
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("flex min-h-screen flex-col bg-[var(--bg)]", inter.variable, plusJakarta.variable)}>
        <a
          href="#main-content"
          className="absolute left-4 top-4 -translate-y-20 rounded-lg bg-ink px-3 py-2 text-sm font-semibold text-white focus:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)]"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
