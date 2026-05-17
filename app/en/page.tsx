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
        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_360px] lg:items-end lg:px-8">
          <div className="quiet-enter max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-forest">
              Academic Homepage
            </p>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-none text-ink sm:text-6xl lg:text-7xl">
              {siteContent.hero.titleEn}
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-9 text-forest sm:text-2xl">
              {siteContent.hero.subtitleEn}
            </p>
            <p className="prose-readable mt-7 max-w-3xl text-base text-muted sm:text-lg">
              {siteContent.bio.homepageEn}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={siteContent.links.cvPdf}
                className="rounded-md bg-forest px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-ink hover:shadow-lift"
              >
                Download CV
              </Link>
              <Link
                href="/en/contact"
                className="rounded-md border border-line bg-ivory px-5 py-3 text-sm font-medium text-forest transition hover:-translate-y-0.5 hover:border-forest"
              >
                Contact
              </Link>
            </div>
          </div>

          <aside className="quiet-enter-delay overflow-hidden rounded-md border border-line bg-ivory shadow-lift">
            <div className="hero-mark px-6 py-7 text-white">
              <p className="text-xs uppercase tracking-[0.26em] text-white/70">SWUFE SIB</p>
              <div className="mt-8 font-serif text-6xl font-semibold leading-none">THD</div>
              <p className="mt-5 max-w-[250px] text-sm leading-7 text-white/78">
                Digital economy · International investment · Innovation
              </p>
            </div>
            <dl className="divide-y divide-line px-6 text-sm">
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
