import type { Metadata } from "next";
import "./globals.css";
import { siteContent } from "@/content/content";

export const metadata: Metadata = {
  title: {
    default: siteContent.seo.siteTitleZh,
    template: `%s | ${siteContent.profile.nameZh}`
  },
  description: siteContent.seo.siteDescriptionZh,
  keywords: [...siteContent.seo.keywordsZh, ...siteContent.seo.keywordsEn]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans">{children}</body>
    </html>
  );
}
