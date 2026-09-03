import type { Metadata } from "next";
import { about, coreValues, mission, vision } from "@/lib/content";

export const metadata: Metadata = {
  title: "About | Digital Solutions Shield",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-forest text-cream dark:bg-gold dark:text-forest-dark">
        <div className="section">
          <p className="eyebrow text-gold-light dark:text-forest-dark">About</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold">About Digital Solutions Shield</h1>
        </div>
      </section>

      <section className="section">
        <p className="max-w-3xl text-lg text-muted-strong">{about}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="card">
            <h2 className="font-heading text-xl font-semibold text-accent">Vision</h2>
            <p className="mt-3 text-muted-strong">{vision}</p>
          </div>
          <div className="card">
            <h2 className="font-heading text-xl font-semibold text-accent">Mission</h2>
            <p className="mt-3 text-muted-strong">{mission}</p>
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow">Core Values</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {coreValues.map((value) => (
              <div key={value} className="rounded-lg border border-forest/10 bg-white p-5 text-center font-heading font-medium dark:border-gold/15 dark:bg-forest">
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
