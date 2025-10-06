import Link from "next/link";

type BreadcrumbItem = {
  href: string;
  label: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ href: "/", label: "Home" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-ink">
      <ol className="flex flex-wrap items-center gap-1">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <li key={`${item.href}-${item.label}`} className="flex items-center gap-1">
              {isLast ? (
                <span aria-current="page" className="font-medium text-ink">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition hover:text-[var(--accent-strong)]"
                >
                  {item.label}
                </Link>
              )}
              {!isLast && <span aria-hidden className="text-slate-300">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
