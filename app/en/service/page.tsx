import type { Metadata } from "next";
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
  return (
    <SiteShell locale="en" pathname="/en/service">
      <main>
        <PageHeader
          eyebrow="Service"
          title="Academic Service"
          description="Selected journal reviewing service."
        />
        <Section title="Reviewing">
          <TextList items={siteContent.reviewing} />
        </Section>
      </main>
    </SiteShell>
  );
}
