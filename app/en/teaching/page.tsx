import type { Metadata } from "next";
import { CourseGrid } from "@/components/AcademicLists";
import { PageHeader, Section } from "@/components/LayoutBlocks";
import { SiteShell } from "@/components/SiteShell";
import { siteContent } from "@/content/content";

export const metadata: Metadata = {
  title: {
    absolute: "Teaching | Haodan Tang"
  },
  description: "Courses taught by Haodan Tang."
};

export default function EnglishTeachingPage() {
  return (
    <SiteShell locale="en" pathname="/en/teaching">
      <main>
        <PageHeader
          eyebrow="Teaching"
          title="Teaching"
          description="Courses in international business and multinational corporation strategy in the digital economy."
        />
        <Section title="Courses">
          <CourseGrid courses={siteContent.courses} locale="en" />
        </Section>
      </main>
    </SiteShell>
  );
}
