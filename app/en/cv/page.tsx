import type { Metadata } from "next";
import Link from "next/link";
import { EducationTimeline, PositionTimeline } from "@/components/AcademicLists";
import { PageHeader, Section, TagList } from "@/components/LayoutBlocks";
import { SiteShell } from "@/components/SiteShell";
import { siteContent } from "@/content/content";

export const metadata: Metadata = {
  title: {
    absolute: "CV | Haodan Tang"
  },
  description: "CV of Haodan Tang."
};

export default function EnglishCvPage() {
  return (
    <SiteShell locale="en" pathname="/en/cv">
      <main>
        <PageHeader
          eyebrow="Curriculum Vitae"
          title="CV"
          description={`CV last updated: ${siteContent.profile.cvUpdated}`}
        />
        <section className="mx-auto max-w-6xl px-5 pt-8 sm:px-6 lg:px-8">
          <Link
            href={siteContent.links.cvPdf}
            className="inline-flex border-b border-forest pb-1 text-sm font-medium text-forest transition hover:text-ink"
          >
            Download PDF CV ↓
          </Link>
        </section>
        <Section title="Academic Position">
          <PositionTimeline positions={siteContent.positions} locale="en" />
        </Section>
        <Section title="Education">
          <EducationTimeline education={siteContent.education} locale="en" />
        </Section>
        <Section title="Skills and Languages">
          <div className="space-y-5">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-muted">Software</h3>
              <TagList items={siteContent.skills.software} />
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-muted">Languages</h3>
              <TagList items={siteContent.skills.languagesEn} />
            </div>
          </div>
        </Section>
      </main>
    </SiteShell>
  );
}
