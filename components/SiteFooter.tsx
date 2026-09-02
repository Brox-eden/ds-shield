import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image src="/images/icon-white.png" alt="DSS" width={40} height={48} className="mb-4 h-12 w-auto" />
            <p className="max-w-xs text-sm text-cream/70">{site.tagline}</p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-gold-light">Navigate</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold-light">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-gold-light">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li>{site.domain}</li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold-light">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-xs text-cream/50">
          © {new Date().getFullYear()} Digital Solutions Shield. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
