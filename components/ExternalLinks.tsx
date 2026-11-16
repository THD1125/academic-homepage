import { siteContent } from "@/content/content";

const externalLinkItems = [
  ["googleScholar", "Google Scholar", "Google Scholar"],
  ["orcid", "ORCID", "ORCID"],
  ["ssrn", "SSRN", "SSRN"],
  ["departmentPage", "院系主页", "Department Profile"]
] as const;

export function ExternalLinks({
  emptyLabel = "待补充",
  locale = "zh"
}: {
  emptyLabel?: string;
  locale?: "zh" | "en";
}) {
  return (
    <div className="grid gap-x-10 sm:grid-cols-2">
      {externalLinkItems.map(([key, labelZh, labelEn]) => {
        const href = siteContent.links[key];
        const label = locale === "zh" ? labelZh : labelEn;

        return (
          <div key={key} className="border-t border-line py-5 text-sm">
            {href ? (
              <a
                className="group flex items-center justify-between gap-4 font-medium text-ink transition hover:text-forest"
                href={href}
                target="_blank"
                rel="noreferrer"
                title={href}
              >
                <span>{label}</span>
                <span aria-hidden="true" className="text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-forest">↗</span>
              </a>
            ) : (
              <>
                <span className="font-medium text-ink">{label}</span>
                <span className="ml-2 text-muted">{emptyLabel}</span>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
