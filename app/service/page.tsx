import type { Metadata } from "next";
import { PresentationList } from "@/components/AcademicLists";
import { PageHeader, Section, TextList } from "@/components/LayoutBlocks";
import { SiteShell } from "@/components/SiteShell";
import { siteContent } from "@/content/content";

export const metadata: Metadata = {
  title: "学术服务",
  description: "唐浩丹的审稿经历与学术汇报。"
};

export default function ServicePage() {
  return (
    <SiteShell locale="zh" pathname="/service">
      <main>
        <PageHeader
          eyebrow="Service"
          title="学术服务"
          description="包括期刊审稿、学术会议与论坛汇报等学术共同体服务。"
        />
        <Section title="审稿经历">
          <TextList items={siteContent.reviewing} />
        </Section>
        <Section title="学术汇报">
          <PresentationList presentations={siteContent.presentations} locale="zh" />
        </Section>
      </main>
    </SiteShell>
  );
}
