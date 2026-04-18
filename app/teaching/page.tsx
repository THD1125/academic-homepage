import type { Metadata } from "next";
import { CourseGrid } from "@/components/AcademicLists";
import { PageHeader, Section } from "@/components/LayoutBlocks";
import { SiteShell } from "@/components/SiteShell";
import { siteContent } from "@/content/content";

export const metadata: Metadata = {
  title: "教学",
  description: "唐浩丹开设课程信息。"
};

export default function TeachingPage() {
  return (
    <SiteShell locale="zh" pathname="/teaching">
      <main>
        <PageHeader
          eyebrow="Teaching"
          title="教学"
          description="课程涵盖国际商务、数字化经济中的跨国公司战略管理等主题，面向本科、硕士、博士及留学生层次。"
        />
        <Section title="开设课程">
          <CourseGrid courses={siteContent.courses} locale="zh" />
        </Section>
      </main>
    </SiteShell>
  );
}
