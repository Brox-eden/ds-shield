import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/lib/content.ar";

export const metadata: Metadata = {
  title: `${site.shortName} | ${site.name}`,
  description: site.tagline,
  openGraph: {
    title: `${site.shortName} | ${site.name}`,
    description: site.tagline,
    locale: "ar_SA",
    type: "website",
  },
};

export default function ArabicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div dir="rtl">
      <SiteHeader locale="ar" />
      <main className="flex-1">{children}</main>
      <SiteFooter locale="ar" />
    </div>
  );
}
