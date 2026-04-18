import { navEn, navZh, siteContent } from "@/content/content";

export type Locale = "zh" | "en";

export const localeConfig = {
  zh: {
    nav: navZh,
    homeHref: "/",
    switchLabel: "EN",
    switchTitle: "English",
    cvLabel: "下载 CV",
    contactLabel: "联系",
    researchLabel: "研究",
    updatedLabel: "CV 更新",
    lang: "zh-CN"
  },
  en: {
    nav: navEn,
    homeHref: "/en",
    switchLabel: "中文",
    switchTitle: "中文",
    cvLabel: "Download CV",
    contactLabel: "Contact",
    researchLabel: "Research",
    updatedLabel: "CV updated",
    lang: "en"
  }
} as const;

export function alternateHref(pathname: string, locale: Locale) {
  if (locale === "zh") {
    if (pathname === "/") return "/en";
    return `/en${pathname}`;
  }

  if (pathname === "/en") return "/";
  return pathname.replace(/^\/en/, "") || "/";
}

export function profileFor(locale: Locale) {
  const p = siteContent.profile;
  return {
    name: locale === "zh" ? p.nameZh : p.nameEn,
    title: locale === "zh" ? p.titleZh : p.titleEn,
    affiliation: locale === "zh" ? p.affiliationZh : p.affiliationEn,
    location: locale === "zh" ? p.locationZh : p.locationEn,
    email: p.email,
    cvUpdated: p.cvUpdated
  };
}

export function pageTitle(title: string, locale: Locale) {
  return locale === "zh" ? title : `${title}`;
}
