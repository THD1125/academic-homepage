import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLinks } from "@/components/ExternalLinks";
import { PageHeader, Section } from "@/components/LayoutBlocks";
import { SiteShell } from "@/components/SiteShell";
import { siteContent } from "@/content/content";

export const metadata: Metadata = {
  title: {
    absolute: "Contact | Haodan Tang"
  },
  description: "Contact information for Haodan Tang."
};

export default function EnglishContactPage() {
  return (
    <SiteShell locale="en" pathname="/en/contact">
      <main>
        <PageHeader
          eyebrow="Contact"
          title="Contact"
          description="For research and academic inquiries, please contact by email."
        />
        <Section title="Contact Information">
          <dl className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-md border border-line bg-ivory p-5">
              <dt className="text-sm text-muted">Email</dt>
              <dd className="mt-2 font-medium text-ink">
                <a className="hover:text-forest" href={`mailto:${siteContent.profile.email}`}>
                  {siteContent.profile.email}
                </a>
              </dd>
            </div>
            <div className="rounded-md border border-line bg-ivory p-5">
              <dt className="text-sm text-muted">Affiliation</dt>
              <dd className="mt-2 font-medium text-ink">{siteContent.profile.affiliationEn}</dd>
            </div>
            <div className="rounded-md border border-line bg-ivory p-5">
              <dt className="text-sm text-muted">Location</dt>
              <dd className="mt-2 font-medium text-ink">{siteContent.profile.locationEn}</dd>
            </div>
            <div className="rounded-md border border-line bg-ivory p-5">
              <dt className="text-sm text-muted">CV</dt>
              <dd className="mt-2 font-medium text-ink">
                <Link className="hover:text-forest" href={siteContent.links.cvPdf}>
                  Download PDF CV
                </Link>
              </dd>
            </div>
          </dl>
        </Section>
        <Section title="External Links">
          <ExternalLinks emptyLabel="To be added" />
        </Section>
      </main>
    </SiteShell>
  );
}
