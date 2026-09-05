"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { nav as navEn } from "@/lib/content";
import { nav as navAr } from "@/lib/content.ar";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function SiteHeader({ locale }: { locale: "en" | "ar" }) {
  const [open, setOpen] = useState(false);
  const nav = locale === "ar" ? navAr : navEn;
  const homeHref = locale === "ar" ? "/ar" : "/";
  const contactHref = locale === "ar" ? "/ar/contact" : "/contact";
  const bookLabel = locale === "ar" ? "احجز استشارة" : "Book a Consultation";
  const logoLight = locale === "ar" ? "/images/logo-full-ar.png" : "/images/logo-full-en.png";
  const logoDark = locale === "ar" ? "/images/logo-full-ar-dark.png" : "/images/logo-full-en-dark.png";

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/95 backdrop-blur dark:border-gold/20 dark:bg-forest-dark/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href={homeHref} className="flex shrink-0 items-center">
          <Image src={logoLight} alt="Digital Solutions Shield" width={500} height={500} priority className="h-16 w-auto shrink-0 dark:hidden sm:h-[4.5rem]" />
          <Image src={logoDark} alt="Digital Solutions Shield" width={500} height={500} priority className="hidden h-16 w-auto shrink-0 dark:block sm:h-[4.5rem]" />
        </Link>

        <nav className="hidden items-center gap-5 lg:gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap font-heading text-sm font-medium uppercase tracking-wide text-forest transition hover:text-gold-dark dark:text-cream dark:hover:text-gold-light"
            >
              {item.label}
            </Link>
          ))}
          <Link href={contactHref} className="btn-primary !py-2">
            {bookLabel}
          </Link>
          <LanguageSwitcher locale={locale} />
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher locale={locale} />
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="h-0.5 w-6 bg-forest dark:bg-cream" />
            <span className="h-0.5 w-6 bg-forest dark:bg-cream" />
            <span className="h-0.5 w-6 bg-forest dark:bg-cream" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-forest/10 bg-cream px-6 pb-6 dark:border-gold/20 dark:bg-forest-dark md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-heading text-sm font-medium uppercase tracking-wide text-forest dark:text-cream"
              >
                {item.label}
              </Link>
            ))}
            <Link href={contactHref} onClick={() => setOpen(false)} className="btn-primary w-full">
              {bookLabel}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
