"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { nav } from "@/lib/content";
import ThemeToggle from "@/components/ThemeToggle";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/95 backdrop-blur dark:border-gold/20 dark:bg-forest-dark/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo-header.png" alt="Digital Solutions Shield" width={123} height={64} priority className="h-14 w-auto dark:hidden sm:h-16" />
          <Image src="/images/logo-header-dark.png" alt="Digital Solutions Shield" width={123} height={64} priority className="hidden h-14 w-auto dark:block sm:h-16" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-heading text-sm font-medium uppercase tracking-wide text-forest transition hover:text-gold-dark dark:text-cream dark:hover:text-gold-light"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !py-2">
            Book a Consultation
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
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
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary w-full">
              Book a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
