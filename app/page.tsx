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
        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_360px] lg:items-end lg:px-8">
          <div className="quiet-enter max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-forest">
              Academic Homepage
            </p>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-none text-ink sm:text-6xl lg:text-7xl">
              {siteContent.hero.titleZh}
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-9 text-forest sm:text-2xl">
              {siteContent.hero.subtitleZh}
            </p>
            <p className="prose-readable mt-7 max-w-3xl text-base text-muted sm:text-lg">
              {siteContent.bio.homepageZh}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={siteContent.links.cvPdf}
                className="rounded-md bg-forest px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-ink hover:shadow-lift"
              >
                下载 CV
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-line bg-ivory px-5 py-3 text-sm font-medium text-forest transition hover:-translate-y-0.5 hover:border-forest"
              >
                联系方式
              </Link>
            </div>
          </div>

          <aside className="quiet-enter-delay overflow-hidden rounded-md border border-line bg-ivory shadow-lift">
            <div className="hero-mark px-6 py-7 text-white">
              <p className="text-xs uppercase tracking-[0.26em] text-white/70">SWUFE SIB</p>
              <div className="mt-8 font-serif text-6xl font-semibold leading-none">THD</div>
              <p className="mt-5 max-w-[240px] text-sm leading-7 text-white/78">
                数字经济 · 国际投资 · 创新经济
              </p>
            </div>
            <dl className="divide-y divide-line px-6 text-sm">
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

        <Section title="代表性成果" description="首页展示部分代表性论文，完整列表见研究页面。">
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
