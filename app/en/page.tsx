import Link from "next/link";
import type { Metadata } from "next";
import { CourseGrid } from "@/components/AcademicLists";
import { Section, TagList } from "@/components/LayoutBlocks";
import { PublicationList } from "@/components/PublicationList";
import { SiteShell } from "@/components/SiteShell";
import { siteContent } from "@/content/content";

export const metadata: Metadata = {
  title: {
    absolute: siteContent.seo.siteTitleEn
  },
  description: siteContent.seo.siteDescriptionEn
};

export default function EnglishHomePage() {
  const selectedEnglishPublications = siteContent.featuredPublications.filter(
    (publication) => publication.language === "en"
  );

  return (
    <SiteShell locale="en" pathname="/en">
      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1.45fr)_minmax(260px,0.55fr)] lg:items-start lg:gap-20 lg:px-8 lg:py-24">
          <div className="quiet-enter max-w-4xl">
            <p className="text-xs font-semibold uppercase text-forest">
              SWUFE · School of International Business
            </p>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-none text-ink sm:text-6xl lg:text-7xl">
              {siteContent.hero.titleEn}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-forest sm:text-xl">
              {siteContent.hero.subtitleEn}
            </p>
            <p className="prose-readable mt-8 max-w-3xl border-l-2 border-forest/30 pl-5 text-base text-muted sm:text-lg">
              {siteContent.bio.homepageEn}
            </p>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium">
              <Link
                href={siteContent.links.cvPdf}
                className="border-b border-forest pb-1 text-forest transition hover:text-ink"
              >
                Download CV ↓
              </Link>
              <Link
                href="/en/contact"
                className="border-b border-line pb-1 text-ink transition hover:border-forest hover:text-forest"
              >
                Contact →
              </Link>
            </div>
          </div>

          <aside className="quiet-enter-delay border-t-2 border-forest text-sm">
            <p className="py-4 text-xs font-semibold uppercase text-forest">Academic Profile</p>
            <dl className="divide-y divide-line border-b border-line">
              <div className="py-4">
                <dt className="text-muted">Affiliation</dt>
                <dd className="mt-1 font-medium leading-6 text-ink">{siteContent.profile.affiliationEn}</dd>
              </div>
              <div className="py-4">
                <dt className="text-muted">Title</dt>
                <dd className="mt-1 font-medium text-ink">{siteContent.profile.titleEn}</dd>
              </div>
              <div className="py-4">
                <dt className="text-muted">Email</dt>
                <dd className="mt-1 font-medium text-ink">{siteContent.profile.email}</dd>
              </div>
              <div className="py-4">
                <dt className="text-muted">Location</dt>
                <dd className="mt-1 font-medium text-ink">{siteContent.profile.locationEn}</dd>
              </div>
            </dl>
          </aside>
        </section>

        <Section title="Research Interests">
          <TagList items={siteContent.researchInterests.en} />
        </Section>

        <Section title="Selected Publications" description="An asterisk (*) denotes corresponding author.">
          <PublicationList publications={selectedEnglishPublications} compact />
          <Link className="mt-6 inline-flex text-sm font-medium text-forest hover:text-ink" href="/en/research">
            View research
          </Link>
        </Section>

        <Section title="Teaching">
          <CourseGrid courses={siteContent.courses} locale="en" />
        </Section>
      </main>
    </SiteShell>
  );
}
