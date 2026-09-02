"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { nav } from "@/lib/content";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo-header.png" alt="Digital Solutions Shield" width={123} height={64} priority className="h-14 w-auto sm:h-16" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-heading text-sm font-medium uppercase tracking-wide text-forest transition hover:text-gold-dark"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !py-2">
            Book a Consultation
          </Link>
        </nav>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-6 bg-forest" />
          <span className="h-0.5 w-6 bg-forest" />
          <span className="h-0.5 w-6 bg-forest" />
        </button>
      </div>

      {open && (
        <div className="border-t border-forest/10 bg-cream px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-heading text-sm font-medium uppercase tracking-wide text-forest"
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
