type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-line bg-white">
      <div className="quiet-enter mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase text-forest">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="prose-readable mt-5 max-w-3xl text-base text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

type SectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  id?: string;
};

export function Section({ title, description, children, id }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="grid gap-7 border-t border-line pt-8 lg:grid-cols-[210px_1fr] lg:gap-16">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-ink">{title}</h2>
          {description ? <p className="mt-4 text-sm leading-7 text-muted">{description}</p> : null}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export function SimpleSection({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-8 sm:px-6 lg:px-8">
      <h2 className="mb-5 text-xl font-semibold text-ink">{title}</h2>
      {children}
    </section>
  );
}

export function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-x-7 gap-y-3">
      {items.map((item) => (
        <span
          key={item}
          className="relative border-b border-forest/30 pb-1 text-sm font-medium text-forest"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function TextList({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-line border-t border-line">
      {items.map((item) => (
        <li key={item} className="py-4 leading-7 text-ink">
          {item}
        </li>
      ))}
    </ul>
  );
}
