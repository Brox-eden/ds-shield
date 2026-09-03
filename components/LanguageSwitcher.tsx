"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({ locale, className = "" }: { locale: "en" | "ar"; className?: string }) {
  const pathname = usePathname() || "/";

  const target =
    locale === "ar"
      ? pathname.replace(/^\/ar(\/|$)/, "/") || "/"
      : `/ar${pathname === "/" ? "" : pathname}`;

  return (
    <Link
      href={target}
      className={`flex h-9 items-center justify-center rounded-md border border-forest/20 px-3 font-heading text-sm font-medium text-forest transition hover:bg-forest/5 dark:border-gold/30 dark:text-cream dark:hover:bg-cream/10 ${className}`}
    >
      {locale === "ar" ? "EN" : "AR"}
    </Link>
  );
}
