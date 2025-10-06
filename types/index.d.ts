export type SiteNavItem = {
  name: string;
  href: string;
};

export type TokenQuote = {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  sentiment: "Bullish" | "Neutral" | "Bearish";
};

declare global {
  // Re-export for global convenience inside app directory modules
  type SiteNavItem = import("./index").SiteNavItem;
  type TokenQuote = import("./index").TokenQuote;
}

export {};
