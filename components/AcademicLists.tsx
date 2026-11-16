import type { Course, Education, Grant, Position, Presentation } from "@/content/content";
import type { Locale } from "@/lib/site";

export function CourseGrid({ courses, locale }: { courses: Course[]; locale: Locale }) {
  return (
    <div className="grid gap-x-10 md:grid-cols-2">
      {courses.map((course) => (
        <article
          key={course.titleZh}
          className="border-t border-line py-5 transition hover:border-forest"
        >
          <h3 className="text-lg font-semibold leading-7 text-ink">
            {locale === "zh" ? course.titleZh : course.titleEn}
          </h3>
          <p className="mt-3 text-sm text-muted">
            {locale === "zh" ? course.levelZh : course.levelEn}
          </p>
          <p className="mt-1 text-sm text-forest">
            {locale === "zh" ? course.semesterZh : course.semesterEn}
          </p>
        </article>
      ))}
    </div>
  );
}

export function PositionTimeline({
  positions,
  locale
}: {
  positions: Position[];
  locale: Locale;
}) {
  return (
    <div className="space-y-5">
      {positions.map((position) => (
        <article key={`${position.start}-${position.institutionZh}`} className="border-l-2 border-forest pl-5">
          <p className="text-sm font-semibold text-forest">
            {position.start} - {locale === "zh" ? position.end : position.end.replace("至今", "Present")}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-ink">
            {locale === "zh" ? position.titleZh : position.titleEn}
          </h3>
          <p className="mt-1 text-muted">
            {locale === "zh" ? position.institutionZh : position.institutionEn}
          </p>
        </article>
      ))}
    </div>
  );
}

export function EducationTimeline({
  education,
  locale
}: {
  education: Education[];
  locale: Locale;
}) {
  return (
    <div className="space-y-5">
      {education.map((item) => (
        <article key={`${item.start}-${item.degreeZh}`} className="border-l-2 border-line pl-5 transition hover:border-forest">
          <p className="text-sm font-semibold text-forest">
            {item.start} - {item.end}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-ink">
            {locale === "zh" ? item.degreeZh : item.degreeEn}
          </h3>
          <p className="mt-1 text-muted">
            {locale === "zh" ? item.institutionZh : item.institutionEn}
          </p>
          {locale === "zh" && item.advisorZh ? (
            <p className="mt-1 text-sm text-muted">导师：{item.advisorZh}</p>
          ) : null}
          {locale === "en" && item.advisorEn ? (
            <p className="mt-1 text-sm text-muted">Advisor: {item.advisorEn}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export function GrantList({ grants, locale }: { grants: Grant[]; locale: Locale }) {
  return (
    <div className="divide-y divide-line border-t border-line">
      {grants.map((grant) => (
        <article
          key={`${grant.funderZh}-${grant.typeZh}`}
          className="py-4"
        >
          <h3 className="font-semibold leading-7 text-ink">
            {locale === "zh" ? grant.funderZh : grant.funderEn || grant.funderZh}
          </h3>
          <p className="mt-1 text-sm leading-6 text-muted">
            {[locale === "zh" ? grant.typeZh : grant.typeEn, locale === "zh" ? grant.statusZh : grant.statusEn, locale === "zh" ? grant.roleZh : grant.roleEn]
              .filter(Boolean)
              .join(" · ")}
          </p>
        </article>
      ))}
    </div>
  );
}

export function PresentationList({
  presentations,
  locale
}: {
  presentations: Presentation[];
  locale: Locale;
}) {
  return (
    <div className="space-y-3">
      {presentations.map((item) => {
        const event = locale === "zh" ? item.eventZh || item.eventEn : item.eventEn || item.eventZh;
        const institution =
          locale === "zh" ? item.institutionZh || item.institutionEn : item.institutionEn || item.institutionZh;

        return (
          <article
            key={`${item.date}-${event}`}
            className="grid gap-2 border-b border-line pb-3 transition hover:border-forest/60 sm:grid-cols-[88px_1fr]"
          >
            <p className="text-sm font-semibold text-forest">{item.date}</p>
            <p className="leading-7 text-ink">
              {event}
              {institution ? <span className="text-muted">，{institution}</span> : null}
            </p>
          </article>
        );
      })}
    </div>
  );
}
