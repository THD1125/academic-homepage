import type { Metadata } from "next";
import { PageHeader, Section, TagList } from "@/components/LayoutBlocks";
import { PublicationList } from "@/components/PublicationList";
import { SiteShell } from "@/components/SiteShell";
import { siteContent } from "@/content/content";

export const metadata: Metadata = {
  title: {
    absolute: "Research | Haodan Tang"
  },
  description: "Research interests and selected publications of Haodan Tang."
};

export default function EnglishResearchPage() {
  const englishPublications = siteContent.publications.filter((publication) => publication.language === "en");

  return (
    <SiteShell locale="en" pathname="/en/research">
      <main>
        <PageHeader
          eyebrow="Research"
          title="Research"
          description="His research focuses on the digital economy, international investment, innovation economics, technology finance, and industrial economics."
        />
        <Section title="Research Interests">
          <TagList items={siteContent.researchInterests.en} />
        </Section>
        <Section title="Selected Publications" description="The English section presents core English-language publications. The Chinese site provides a more complete list.">
          <PublicationList publications={englishPublications} compact />
        </Section>
      </main>
    </SiteShell>
  );
}
