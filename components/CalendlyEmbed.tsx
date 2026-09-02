"use client";

import Script from "next/script";

const CALENDLY_URL = "https://calendly.com/ds-shield-info/30min";

export default function CalendlyEmbed() {
  return (
    <>
      <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      <div
        className="calendly-inline-widget rounded-lg"
        data-url={CALENDLY_URL}
        style={{ minWidth: "320px", height: "700px" }}
      />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </>
  );
}
