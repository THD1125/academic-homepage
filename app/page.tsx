import Link from "next/link";
import { CourseGrid } from "@/components/AcademicLists";
import { Section, TagList } from "@/components/LayoutBlocks";
import { PublicationList } from "@/components/PublicationList";
import { SiteShell } from "@/components/SiteShell";
import { siteContent } from "@/content/content";

export default function HomePage() {
  return (
    <SiteShell locale="zh" pathname="/">
      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1.45fr)_minmax(260px,0.55fr)] lg:items-start lg:gap-20 lg:px-8 lg:py-24">
          <div className="quiet-enter max-w-4xl">
            <p className="text-xs font-semibold uppercase text-forest">
              SWUFE · School of International Business
            </p>
            <h1 className="mt-7 font-serif text-5xl font-semibold leading-none text-ink sm:text-6xl lg:text-7xl">
              {siteContent.hero.titleZh}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-forest sm:text-xl">
              {siteContent.hero.subtitleZh}
            </p>
            <p className="prose-readable mt-8 max-w-3xl border-l-2 border-forest/30 pl-5 text-base text-muted sm:text-lg">
              {siteContent.bio.homepageZh}
            </p>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium">
              <Link
                href={siteContent.links.cvPdf}
                className="border-b border-forest pb-1 text-forest transition hover:text-ink"
              >
                下载 CV ↓
              </Link>
              <Link
                href="/contact"
                className="border-b border-line pb-1 text-ink transition hover:border-forest hover:text-forest"
              >
                联系方式 →
              </Link>
            </div>
          </div>

          <aside className="quiet-enter-delay border-t-2 border-forest text-sm">
            <p className="py-4 text-xs font-semibold uppercase text-forest">Academic Profile</p>
            <dl className="divide-y divide-line border-b border-line">
              <div className="py-4">
                <dt className="text-muted">单位</dt>
                <dd className="mt-1 font-medium leading-6 text-ink">{siteContent.profile.affiliationZh}</dd>
              </div>
              <div className="py-4">
                <dt className="text-muted">职称</dt>
                <dd className="mt-1 font-medium text-ink">{siteContent.profile.titleZh}</dd>
              </div>
              <div className="py-4">
                <dt className="text-muted">邮箱</dt>
                <dd className="mt-1 font-medium text-ink">{siteContent.profile.email}</dd>
              </div>
              <div className="py-4">
                <dt className="text-muted">所在地</dt>
                <dd className="mt-1 font-medium text-ink">{siteContent.profile.locationZh}</dd>
              </div>
            </dl>
          </aside>
        </section>

        <Section title="研究方向" description="围绕数字技术、企业行为、国际投资与产业竞争展开研究。">
          <TagList items={siteContent.researchInterests.zh} />
        </Section>

        <Section title="代表性成果" description="首页展示部分代表性论文，完整列表见研究页面。*表示通讯作者。">
          <PublicationList publications={siteContent.featuredPublications} compact />
          <Link className="mt-6 inline-flex text-sm font-medium text-forest hover:text-ink" href="/research">
            查看完整研究成果
          </Link>
        </Section>

        <Section title="开设课程" description="本科、硕士、博士层面的国际商务与跨国公司战略课程。">
          <CourseGrid courses={siteContent.courses} locale="zh" />
        </Section>
      </main>
    </SiteShell>
  );
}
