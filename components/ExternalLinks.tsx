import { siteContent } from "@/content/content";

const externalLinkItems = [
  ["googleScholar", "Google Scholar"],
  ["orcid", "ORCID"],
  ["researchGate", "ResearchGate"],
  ["ssrn", "SSRN"],
  ["github", "GitHub"],
  ["departmentPage", "院系主页"]
] as const;

export function ExternalLinks({
  emptyLabel = "待补充"
}: {
  emptyLabel?: string;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {externalLinkItems.map(([key, label]) => {
        const href = siteContent.links[key];

        return (
          <div
            key={key}
            className="rounded-md border border-line bg-ivory p-4 text-sm transition hover:border-forest/60"
          >
            <span className="font-medium text-ink">{label}</span>
            {href ? (
              <a
                className="ml-2 break-all text-forest underline decoration-line underline-offset-4 hover:text-ink"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                {href}
              </a>
            ) : (
              <span className="ml-2 text-muted">{emptyLabel}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
