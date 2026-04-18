import type { Metadata } from "next";
import Link from "next/link";
import { EducationTimeline, GrantList, PositionTimeline } from "@/components/AcademicLists";
import { PageHeader, Section, TagList, TextList } from "@/components/LayoutBlocks";
import { SiteShell } from "@/components/SiteShell";
import { siteContent } from "@/content/content";

export const metadata: Metadata = {
  title: "简历",
  description: "唐浩丹的工作经历、教育背景、项目、荣誉与技能。"
};

export default function CvPage() {
  return (
    <SiteShell locale="zh" pathname="/cv">
      <main>
        <PageHeader
          eyebrow="Curriculum Vitae"
          title="简历"
          description={`CV 更新日期：${siteContent.profile.cvUpdated}`}
        />
        <section className="mx-auto max-w-6xl px-5 pt-8 sm:px-6 lg:px-8">
          <Link
            href={siteContent.links.cvPdf}
            className="inline-flex rounded-md bg-forest px-5 py-3 text-sm font-medium text-white transition hover:bg-ink"
          >
            下载 PDF 简历
          </Link>
        </section>
        <Section title="工作经历">
          <PositionTimeline positions={siteContent.positions} locale="zh" />
        </Section>
        <Section title="教育经历">
          <EducationTimeline education={siteContent.education} locale="zh" />
        </Section>
        <Section title="科研项目">
          <GrantList grants={siteContent.grants} locale="zh" />
        </Section>
        <Section title="奖励荣誉">
          <TextList items={siteContent.awards} />
        </Section>
        <Section title="技能与语言">
          <div className="space-y-5">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-muted">软件</h3>
              <TagList items={siteContent.skills.software} />
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-muted">语言</h3>
              <TagList items={siteContent.skills.languagesZh} />
            </div>
          </div>
        </Section>
      </main>
    </SiteShell>
  );
}
