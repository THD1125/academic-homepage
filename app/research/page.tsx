import type { Metadata } from "next";
import { GrantList } from "@/components/AcademicLists";
import { PageHeader, Section, TagList } from "@/components/LayoutBlocks";
import { PublicationList } from "@/components/PublicationList";
import { SiteShell } from "@/components/SiteShell";
import { siteContent } from "@/content/content";

export const metadata: Metadata = {
  title: "研究",
  description: "唐浩丹的研究方向、论文成果、出版物与科研项目。"
};

export default function ResearchPage() {
  return (
    <SiteShell locale="zh" pathname="/research">
      <main>
        <PageHeader
          eyebrow="Research"
          title="研究"
          description="研究主要集中于数字经济、国际投资、创新经济、科技金融与产业经济，关注数字技术如何影响企业行为、市场绩效、创新活动与跨境经营。"
        />

        <Section title="研究方向">
          <TagList items={siteContent.researchInterests.zh} />
        </Section>

        <Section title="已发表论文" description="按照内容文件中的完整论文列表呈现。*表示通讯作者。">
          <PublicationList publications={siteContent.publications} />
        </Section>

        <Section title="其他出版物">
          <div className="space-y-4">
            {siteContent.otherPublications.map((item) => (
              <article key={item.titleZh} className="rounded-md border border-line bg-white p-5">
                <h3 className="font-semibold text-ink">{item.titleZh}</h3>
                <p className="mt-2 leading-7 text-muted">{item.publisherZh}</p>
                {item.roleZh ? <p className="mt-1 text-sm text-forest">{item.roleZh}</p> : null}
              </article>
            ))}
          </div>
        </Section>

        <Section title="科研项目">
          <GrantList grants={siteContent.grants} locale="zh" />
        </Section>
      </main>
    </SiteShell>
  );
}
