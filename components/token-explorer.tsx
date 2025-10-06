"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Star, X } from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

type Token = TokenQuote;

type TokenExplorerProps = {
  tokens: Token[];
};

const STORAGE_KEY = "ethan-watchlist";

type SentimentConfig = {
  label: Token["sentiment"];
  tone: "positive" | "neutral" | "negative";
};

const sentimentStyles: Record<Token["sentiment"], SentimentConfig> = {
  Bullish: { label: "Bullish", tone: "positive" },
  Neutral: { label: "Neutral", tone: "neutral" },
  Bearish: { label: "Bearish", tone: "negative" },
};

export function TokenExplorer({ tokens }: TokenExplorerProps) {
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setWatchlist(JSON.parse(stored));
      }
    } catch (error) {
      console.warn("Unable to parse watchlist", error);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist));
  }, [watchlist]);

  const watchlistTokens = useMemo(
    () => tokens.filter((token) => watchlist.includes(token.symbol)),
    [tokens, watchlist],
  );

  const toggleWatchlist = (symbol: string) => {
    setWatchlist((prev) =>
      prev.includes(symbol) ? prev.filter((item) => item !== symbol) : [...prev, symbol],
    );
  };

  const toggleSelected = (symbol: string) => {
    setSelected((prev) => {
      if (prev.includes(symbol)) {
        return prev.filter((item) => item !== symbol);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), symbol];
      }
      return [...prev, symbol];
    });
  };

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200 text-left">
          <caption className="sr-only">Token quotes and sentiment snapshot</caption>
          <thead className="bg-slate-50/80">
            <tr className="text-xs font-semibold uppercase tracking-wide text-muted-ink">
              <th className="px-4 py-3">Token</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">24h</th>
              <th className="px-4 py-3">Sentiment</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {tokens.map((token) => {
              const config = sentimentStyles[token.sentiment];
              const isFavorite = watchlist.includes(token.symbol);
              const isSelected = selected.includes(token.symbol);

              return (
                <tr key={token.symbol} className="text-sm text-muted-ink">
                  <td className="px-4 py-3">
                    <div className="font-semibold text-ink">{token.name}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-ink/70">
                      {token.symbol}
                    </div>
                  </td>
                  <td className="px-4 py-3 font-semibold text-ink">
                    ${token.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td
                    className={cn(
                      "px-4 py-3 font-medium",
                      token.change24h >= 0 ? "text-emerald-600" : "text-red-500",
                    )}
                  >
                    {token.change24h >= 0 ? "+" : ""}
                    {token.change24h.toFixed(2)}%
                  </td>
                  <td className="px-4 py-3">
                    <Badge
                      className={cn(
                        config.tone === "positive" && "border-emerald-200 bg-emerald-50 text-emerald-700",
                        config.tone === "negative" && "border-red-200 bg-red-50 text-red-600",
                      )}
                    >
                      {config.label}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        className={cn(
                          "flex size-9 items-center justify-center rounded-lg border border-slate-200 bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
                          isFavorite && "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent-strong)]",
                        )}
                        onClick={() => toggleWatchlist(token.symbol)}
                        aria-pressed={isFavorite}
                        aria-label={`${isFavorite ? "Remove" : "Add"} ${token.name} to watchlist`}
                      >
                        <Star className={cn("size-4", isFavorite && "fill-current")} aria-hidden />
                      </button>
                      <button
                        type="button"
                        className={cn(
                          "flex size-9 items-center justify-center rounded-lg border border-slate-200 bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
                          isSelected && "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent-strong)]",
                        )}
                        onClick={() => toggleSelected(token.symbol)}
                        aria-pressed={isSelected}
                        aria-label={`${isSelected ? "Remove" : "Select"} ${token.name} for comparison`}
                      >
                        <ArrowUpRight className="size-4" aria-hidden />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-ink">Watchlist</p>
          {watchlistTokens.length > 0 ? (
            <ul className="flex flex-wrap gap-2 text-sm text-muted-ink">
              {watchlistTokens.map((token) => (
                <li key={token.symbol} className="rounded-full bg-slate-100 px-3 py-1">
                  {token.symbol} · ${token.price.toFixed(2)}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-ink">Tap the star icon to add tokens here.</p>
          )}
        </div>
        <Button
          variant="primary"
          disabled={selected.length < 2}
          onClick={openModal}
          aria-label="Open token comparison"
        >
          Compare {selected.length || "tokens"}
        </Button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/50 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Token comparison"
            className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-ink">Compare tokens</h3>
                <p className="text-sm text-muted-ink">
                  Side-by-side stats for your latest selections.
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="flex size-9 items-center justify-center rounded-lg border border-slate-200"
                aria-label="Close comparison"
              >
                <X className="size-4" aria-hidden />
              </button>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {selected.map((symbol) => {
                const token = tokens.find((item) => item.symbol === symbol);
                if (!token) {
                  return null;
                }
                const config = sentimentStyles[token.sentiment];
                return (
                  <div key={symbol} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-ink">{token.name}</p>
                    <p className="text-xs uppercase tracking-wider text-muted-ink/70">{token.symbol}</p>
                    <p className="mt-3 text-sm text-muted-ink">
                      ${token.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </p>
                    <p className={cn("mt-1 text-sm font-medium", token.change24h >= 0 ? "text-emerald-600" : "text-red-500")}>
                      {token.change24h >= 0 ? "+" : ""}
                      {token.change24h.toFixed(2)}%
                    </p>
                    <Badge
                      className={cn(
                        "mt-3",
                        config.tone === "positive" && "border-emerald-200 bg-emerald-50 text-emerald-700",
                        config.tone === "negative" && "border-red-200 bg-red-50 text-red-600",
                      )}
                    >
                      {config.label}
                    </Badge>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 flex justify-end">
              <Button variant="ghost" onClick={closeModal} aria-label="Close comparison dialog">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
