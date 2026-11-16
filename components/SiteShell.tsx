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
      <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <Link href={config.homeHref} className="group w-fit">
            <div className="font-serif text-xl font-semibold text-ink transition group-hover:text-forest">
              {profile.name}
            </div>
            <div className="mt-0.5 max-w-[320px] text-xs leading-5 text-muted">{profile.affiliation}</div>
          </Link>

          <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-1 text-sm">
            {config.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b px-3 py-2 transition ${
                    isActive
                      ? "border-forest font-medium text-forest"
                      : "border-transparent text-muted hover:border-line hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={alternateHref(pathname, locale)}
              title={config.switchTitle}
              className="ml-2 border-l border-line px-3 py-2 font-semibold text-forest transition hover:text-ink"
            >
              {config.switchLabel}
            </Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-line bg-white">
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
