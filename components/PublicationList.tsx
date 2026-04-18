import type { Publication } from "@/content/content";

type PublicationListProps = {
  publications: Publication[];
  compact?: boolean;
};

export function PublicationList({ publications, compact = false }: PublicationListProps) {
  return (
    <ol className="space-y-1">
      {publications.map((publication) => (
        <li
          key={`${publication.year}-${publication.title}`}
          className="group border-b border-line py-5 transition first:pt-0 last:border-b-0 hover:border-forest/50"
        >
          <article className="grid gap-2 sm:grid-cols-[74px_1fr]">
            <div className="pt-1 text-sm font-semibold text-forest transition group-hover:text-brick">
              {publication.year}
            </div>
            <div>
              <p className="leading-7 text-ink sm:text-[15.5px]">
                <span className="font-medium">{publication.authors}</span>. {publication.title}.
              </p>
              <p className="mt-1 text-sm leading-6 text-muted">
                <span className="font-medium text-ink">{publication.outlet}</span>
                {publication.details ? `, ${publication.details}` : ""}
              </p>
              {!compact && publication.notes?.length ? (
                <ul className="mt-2 space-y-1 text-sm leading-6 text-brick">
                  {publication.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}
