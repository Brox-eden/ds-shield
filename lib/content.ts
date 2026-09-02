// Central place for site copy, sourced from DSS_Company_Profile_2026.pdf
// and the brand-and-content-brief.md project doc. Edit here, not in pages.

export const site = {
  name: "Digital Solutions Shield",
  shortName: "DSS",
  tagline:
    "A cybersecurity consulting and technology company helping organizations build secure, resilient, and compliant digital environments.",
  domain: "ds-shield.com",
  email: "info@ds-shield.com",
};

export const vision =
  "To become the trusted advisory and technology shield for secure digital transformation and cyber-asset protection across Saudi Arabia and the region.";

export const mission =
  "To integrate regulatory alignment, operational efficiency and engineering excellence, strengthening continuity and infrastructure resilience.";

export const about =
  "Digital Solutions Shield (DSS) is a consulting and technology company specializing in cybersecurity strategy, IT governance and advanced professional services. We enable government and private-sector organizations to build digital infrastructure that is secure, resilient and aligned with the controls that shape their operating environment.";

export const coreValues = [
  "Professional integrity",
  "Engineering excellence",
  "Rigorous compliance",
  "Continuous innovation",
];

export const servicePillars = [
  {
    slug: "consulting-compliance",
    number: "01",
    title: "Consulting & Compliance",
    summary: "GRC, policy and risk programs, NCA and international alignment, secure architecture advisory.",
    items: [
      {
        title: "Governance, Risk & Compliance",
        description:
          "Cybersecurity policies and procedures, governance models, and technical and enterprise risk registers.",
      },
      {
        title: "NCA Control Alignment",
        description:
          "Gap assessment and remediation planning across ECC, CSCC and CCC requirements.",
      },
      {
        title: "International Frameworks",
        description:
          "Alignment with NIST CSF 2.0 and ISO/IEC 27001 to strengthen governance and assurance.",
      },
      {
        title: "Secure Architecture",
        description:
          "Reference architectures, infrastructure design and Zero Trust frameworks shaped around operating needs.",
      },
    ],
  },
  {
    slug: "professional-services",
    number: "02",
    title: "Professional Services",
    summary: "Application and web security, identity, PAM and endpoint protection, technical staffing and outsourcing.",
    items: [
      {
        title: "Application Delivery & Web Security",
        description:
          "LTM/GSLB, web application firewalls, routing and filtering policies designed for resilient delivery.",
      },
      {
        title: "PAM & Identity Governance",
        description:
          "Secure-channel policies, privileged-session monitoring and controls that restrict administrative access.",
      },
      {
        title: "Endpoint Security & EDR/XDR",
        description:
          "Advanced protection policies, malware defense and integration with investigation and response platforms.",
      },
      {
        title: "Staff Augmentation & Outsourcing",
        description:
          "Qualified engineers and consultants for government entities and large enterprises through service contracts and Ajeer-compliant assignments.",
      },
    ],
  },
  {
    slug: "ai-automation",
    number: "03",
    title: "AI Tools & Automation",
    summary: "n8n-powered AI agents that extend your team, from client-facing assistants to internal workflow automation.",
    items: [
      {
        title: "AI Secretary & Booking Agents",
        description:
          "A conversational assistant that answers visitor questions and books consultations straight into your calendar. It's the same kind of agent that will run behind the scenes on this site once it's live.",
      },
      {
        title: "HR & Internal Specialist Agents",
        description:
          "Agents that handle first-line HR questions, onboarding steps and internal requests, freeing your team from repetitive tickets.",
      },
      {
        title: "Workflow & Integration Automation",
        description:
          "n8n workflows that connect your existing tools (CRM, calendar, ticketing, email) so information moves without manual handoffs.",
      },
      {
        title: "Custom Agent Design",
        description:
          "Scoped, built and deployed around the specific process you want automated, not a one-size-fits-all bot.",
      },
    ],
    note:
      "This is a new service line. The live demo (the AI secretary on this site) is coming in a later phase. This page describes what we build.",
  },
];

export const engagementModels = [
  {
    number: "01",
    title: "Project-Based Professional Services",
    description: "End-to-end implementation and configuration through final delivery and user acceptance testing.",
  },
  {
    number: "02",
    title: "Consulting Retainer",
    description: "Recurring advisory, compliance audits and readiness assessments delivered annually or quarterly.",
    featured: true,
  },
  {
    number: "03",
    title: "Subcontracting & Staffing",
    description: "Dedicated engineering and advisory resources embedded within major government and enterprise projects.",
  },
];

export const differentiators = [
  {
    number: "01",
    title: "Local regulatory alignment",
    description: "Working knowledge of NCA controls and the realities of Saudi operating environments.",
  },
  {
    number: "02",
    title: "Advisory-to-engineering continuity",
    description: "The same outcome remains visible from policy and architecture through configuration and validation.",
  },
  {
    number: "03",
    title: "Operational practicality",
    description: "Recommendations are designed to work with teams, systems and delivery constraints, not only on paper.",
  },
  {
    number: "04",
    title: "Flexible specialist capacity",
    description: "Project delivery, recurring advisory and embedded experts under clear contractual models.",
  },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/engagement", label: "Engagement" },
  { href: "/why-us", label: "Why DSS" },
  { href: "/contact", label: "Contact" },
];
