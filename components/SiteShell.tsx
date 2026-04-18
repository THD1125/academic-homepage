import Link from "next/link";
import type { Locale } from "@/lib/site";
import { alternateHref, localeConfig, profileFor } from "@/lib/site";
import { siteContent } from "@/content/content";

type SiteShellProps = {
  locale: Locale;
  pathname: string;
  children: React.ReactNode;
};

export function SiteShell({ locale, pathname, children }: SiteShellProps) {
  const config = localeConfig[locale];
  const profile = profileFor(locale);

  return (
    <div lang={config.lang} className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-line/70 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <Link href={config.homeHref} className="group w-fit">
            <div className="text-lg font-semibold tracking-normal text-ink transition group-hover:text-forest">
              {profile.name}
            </div>
            <div className="mt-0.5 max-w-[320px] text-xs leading-5 text-muted">{profile.affiliation}</div>
          </Link>

          <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-1.5 text-sm">
            {config.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-2 transition ${
                    isActive
                      ? "bg-forest text-white shadow-subtle"
                      : "text-muted hover:bg-ivory hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={alternateHref(pathname, locale)}
              title={config.switchTitle}
              className="ml-1 rounded-md border border-line bg-ivory/70 px-3 py-2 font-medium text-forest transition hover:border-forest hover:bg-white"
            >
              {config.switchLabel}
            </Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-line bg-ivory/55">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © 2026 {profile.name}. {profile.affiliation}
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-forest" href={`mailto:${siteContent.profile.email}`}>
              {siteContent.profile.email}
            </a>
            <Link className="hover:text-forest" href={siteContent.links.cvPdf}>
              CV
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
