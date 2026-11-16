import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLinks } from "@/components/ExternalLinks";
import { PageHeader, Section } from "@/components/LayoutBlocks";
import { SiteShell } from "@/components/SiteShell";
import { siteContent } from "@/content/content";

export const metadata: Metadata = {
  title: "联系方式",
  description: "唐浩丹联系方式。"
};

export default function ContactPage() {
  return (
    <SiteShell locale="zh" pathname="/contact">
      <main>
        <PageHeader
          eyebrow="Contact"
          title="联系方式"
          description="欢迎通过电子邮件联系，也可访问下方学术主页与院系主页。"
        />
        <Section title="联系信息">
          <dl className="grid gap-x-10 sm:grid-cols-2">
            <div className="border-t border-line py-5">
              <dt className="text-sm text-muted">邮箱</dt>
              <dd className="mt-2 font-medium text-ink">
                <a className="hover:text-forest" href={`mailto:${siteContent.profile.email}`}>
                  {siteContent.profile.email}
                </a>
              </dd>
            </div>
            <div className="border-t border-line py-5">
              <dt className="text-sm text-muted">单位</dt>
              <dd className="mt-2 font-medium text-ink">{siteContent.profile.affiliationZh}</dd>
            </div>
            <div className="border-t border-line py-5">
              <dt className="text-sm text-muted">所在地</dt>
              <dd className="mt-2 font-medium text-ink">{siteContent.profile.locationZh}</dd>
            </div>
            <div className="border-t border-line py-5">
              <dt className="text-sm text-muted">CV</dt>
              <dd className="mt-2 font-medium text-ink">
                <Link className="hover:text-forest" href={siteContent.links.cvPdf}>
                  下载 PDF 简历
                </Link>
              </dd>
            </div>
          </dl>
        </Section>
        <Section title="外部链接">
          <ExternalLinks />
        </Section>
      </main>
    </SiteShell>
  );
}
