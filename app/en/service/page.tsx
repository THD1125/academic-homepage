import type { Metadata } from "next";
import { PresentationList } from "@/components/AcademicLists";
import { PageHeader, Section, TextList } from "@/components/LayoutBlocks";
import { SiteShell } from "@/components/SiteShell";
import { siteContent } from "@/content/content";

export const metadata: Metadata = {
  title: {
    absolute: "Service | Haodan Tang"
  },
  description: "Academic service of Haodan Tang."
};

export default function EnglishServicePage() {
  const englishPresentations = siteContent.presentations.filter((item) => item.eventEn);

  return (
    <SiteShell locale="en" pathname="/en/service">
      <main>
        <PageHeader
          eyebrow="Service"
          title="Academic Service"
          description="Selected journal reviewing and conference presentations."
        />
        <Section title="Reviewing">
          <TextList items={siteContent.reviewing} />
        </Section>
        <Section title="Presentations">
          <PresentationList presentations={englishPresentations} locale="en" />
        </Section>
      </main>
    </SiteShell>
  );
}
