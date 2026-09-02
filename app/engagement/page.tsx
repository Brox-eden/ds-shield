import type { Metadata } from "next";
import Link from "next/link";
import { engagementModels } from "@/lib/content";

export const metadata: Metadata = {
  title: "Engagement Models | Digital Solutions Shield",
};

export default function EngagementPage() {
  return (
    <>
      <section className="bg-forest text-cream">
        <div className="section">
          <p className="eyebrow text-gold-light">Flexibility</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold">Engagement & Delivery Framework</h1>
          <p className="mt-4 max-w-2xl text-cream/80">
            Work with us the way that fits your organization: a defined project, ongoing advisory, or embedded capacity.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 md:grid-cols-3">
          {engagementModels.map((model) => (
            <div
              key={model.number}
              className={
                model.featured
                  ? "card bg-forest text-cream"
                  : "card"
              }
            >
              <span className={model.featured ? "font-heading text-sm text-gold-light" : "font-heading text-sm text-gold-dark"}>
                {model.number}
              </span>
              <h2 className="mt-2 font-heading text-xl font-semibold">{model.title}</h2>
              <p className={model.featured ? "mt-3 text-sm text-cream/80" : "mt-3 text-sm text-forest/70"}>
                {model.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary inline-flex">
            Discuss Your Engagement
          </Link>
        </div>
      </section>
    </>
  );
}
