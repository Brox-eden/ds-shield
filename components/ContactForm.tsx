"use client";

import { useState } from "react";

// Presentational only for now. No submission backend wired up yet.
// When the AI secretary / booking workflow (n8n) is ready, point this
// form's onSubmit at that webhook instead of the placeholder below.
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card">
        <h2 className="font-heading text-lg font-semibold text-gold-dark">Thanks! We&apos;ll be in touch.</h2>
        <p className="mt-2 text-sm text-forest/70">
          This is a placeholder confirmation. Submission isn&apos;t wired up to email or a calendar yet.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <div>
        <label className="block font-heading text-sm font-medium">Name</label>
        <input
          required
          type="text"
          className="mt-1 w-full rounded-md border border-forest/20 px-3 py-2 focus:border-gold focus:outline-none"
        />
      </div>
      <div>
        <label className="block font-heading text-sm font-medium">Email</label>
        <input
          required
          type="email"
          className="mt-1 w-full rounded-md border border-forest/20 px-3 py-2 focus:border-gold focus:outline-none"
        />
      </div>
      <div>
        <label className="block font-heading text-sm font-medium">Organization</label>
        <input
          type="text"
          className="mt-1 w-full rounded-md border border-forest/20 px-3 py-2 focus:border-gold focus:outline-none"
        />
      </div>
      <div>
        <label className="block font-heading text-sm font-medium">What do you need help with?</label>
        <textarea
          required
          rows={4}
          className="mt-1 w-full rounded-md border border-forest/20 px-3 py-2 focus:border-gold focus:outline-none"
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Send
      </button>
    </form>
  );
}
