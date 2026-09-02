import Image from "next/image";
import Link from "next/link";
import {
  about,
  differentiators,
  mission,
  servicePillars,
  site,
  vision,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-8 md:grid-cols-2 md:items-center md:py-32">
          <div>
            <p className="eyebrow text-gold-light">Cybersecurity · Technology · Professional Services</p>
            <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              Building secure, resilient digital infrastructure for government and enterprise.
            </h1>
            <p className="mt-6 max-w-xl text-cream/80">{site.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary bg-gold text-forest hover:bg-gold-light">
                Book a Consultation
              </Link>
              <Link href="/services" className="btn-secondary border-cream text-cream hover:bg-cream hover:text-forest">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/icon-white.png"
              alt="DSS shield mark"
              width={312}
              height={380}
              className="h-64 w-auto opacity-90 sm:h-80"
              priority
            />
          </div>
        </div>
      </section>

      {/* ABOUT SUMMARY */}
      <section className="section">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">About DSS</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold">{site.shortName}: Digital Solutions Shield</h2>
            <p className="mt-4 text-forest/80">{about}</p>
            <Link href="/about" className="mt-6 inline-block font-heading text-sm font-semibold uppercase tracking-wide text-gold-dark hover:underline">
              More about DSS →
            </Link>
          </div>
          <div className="space-y-6">
            <div className="card">
              <h3 className="font-heading text-lg font-semibold text-gold-dark">Vision</h3>
              <p className="mt-2 text-sm text-forest/80">{vision}</p>
            </div>
            <div className="card">
              <h3 className="font-heading text-lg font-semibold text-gold-dark">Mission</h3>
              <p className="mt-2 text-sm text-forest/80">{mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE PILLARS */}
      <section className="bg-white">
        <div className="section">
          <p className="eyebrow">Coverage</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold">Service Portfolio</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {servicePillars.map((pillar) => (
              <Link
                key={pillar.slug}
                href={`/services/${pillar.slug}`}
                className="card flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading text-sm text-gold-dark">{pillar.number}</span>
                  <h3 className="mt-2 font-heading text-xl font-semibold">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-forest/70">{pillar.summary}</p>
                </div>
                <span className="mt-6 inline-block font-heading text-sm font-semibold uppercase tracking-wide text-gold-dark">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="section">
        <p className="eyebrow">Difference</p>
        <h2 className="mt-3 font-heading text-3xl font-semibold">Why Digital Solutions Shield?</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {differentiators.map((d) => (
            <div key={d.number} className="card">
              <span className="font-heading text-sm text-gold-dark">{d.number}</span>
              <h3 className="mt-2 font-heading text-lg font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm text-forest/70">{d.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI TEASER */}
      <section className="bg-forest text-cream">
        <div className="section flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-gold-light">New: AI Tools & Automation</p>
            <h2 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">
              We build n8n-powered AI agents, too.
            </h2>
            <p className="mt-3 max-w-xl text-cream/80">
              From client-facing booking assistants to internal HR agents, see what we build and where this site&apos;s own AI secretary is headed.
            </p>
          </div>
          <Link href="/services/ai-automation" className="btn-primary bg-gold text-forest hover:bg-gold-light whitespace-nowrap">
            See AI Tools & Automation
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl">Ready to strengthen your digital infrastructure?</h2>
        <p className="mx-auto mt-3 max-w-xl text-forest/70">
          Book a consultation with our team and let&apos;s talk about your compliance, engineering, or automation needs.
        </p>
        <Link href="/contact" className="btn-primary mt-6 inline-flex">
          Book a Consultation
        </Link>
      </section>
    </>
  );
}
