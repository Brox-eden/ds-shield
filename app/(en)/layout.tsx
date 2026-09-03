import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader locale="en" />
      <main className="flex-1">{children}</main>
      <SiteFooter locale="en" />
    </>
  );
}
