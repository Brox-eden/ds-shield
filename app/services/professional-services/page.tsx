import type { Metadata } from "next";
import Link from "next/link";
import { servicePillars } from "@/lib/content";

export const metadata: Metadata = {
  title: "Professional Services | Digital Solutions Shield",
};

const pillar = servicePillars.find((p) => p.slug === "professional-services")!;

export default function ProfessionalServicesPage() {
  return (
    <>
      <section className="bg-forest text-cream">
        <div className="section">
          <p className="eyebrow text-gold-light">Engineering · {pillar.number}</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold">{pillar.title}</h1>
          <p className="mt-4 max-w-2xl text-cream/80">{pillar.summary}</p>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 md:grid-cols-2">
          {pillar.items.map((item) => (
            <div key={item.title} className="card">
              <h2 className="font-heading text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-forest/70">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary inline-flex">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
