# DSS — Digital Solutions Shield website

Scaffold built from `DSS_Company_Profile_2026.pdf` and `DSS_Logo_Forest_Gold.pdf`. Next.js (App Router) + TypeScript + Tailwind CSS.

## Getting started

This was built without running `npm install` (no package registry access in that sandbox), so the first thing to do locally is:

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's here

- `app/` — one route per sitemap page: `/`, `/about`, `/services` (+ 3 sub-pages), `/engagement`, `/why-us`, `/contact`
- `components/` — `SiteHeader`, `SiteFooter`, `ContactForm`
- `lib/content.ts` — **all site copy lives here**, pulled from the company profile PDF. Edit this file to change wording anywhere on the site rather than hunting through pages.
- `public/images/` — logo assets extracted directly from the approved `DSS_Logo_Forest_Gold.pdf` (true vector source, rendered at 600dpi — not the earlier JPEG mockups)
- `tailwind.config.ts` — brand colors wired in as `forest` / `gold` / `cream`, matching the PDF's documented hex values exactly (`#062F21`, `#B38443`, `#FDFAF5`)

## Known placeholders / things to revisit

- **Fonts:** the brand spec calls for DIN Next LT Pro Bold (headings) and Frutiger LT Pro Roman (body) — both commercial fonts. This scaffold uses free look-alikes (Oswald + Inter via `next/font/google`) as placeholders. Swap them in `app/layout.tsx` once you have license files, or tell me and I'll wire in self-hosted `@font-face` versions.
- **Contact form:** UI only, not wired to anything yet (see `components/ContactForm.tsx`). No backend, no email, no calendar.
- **AI secretary / booking agent:** intentionally not built yet, per plan — you said n8n is already hosted, but the live demo comes in a later phase. The `/services/ai-automation` page describes it; the contact form is where it'll eventually plug in.
- **Logo edge fringing:** the transparent PNG cutouts have very minor color fringing on the gradient's highlight edges from the alpha-keying process. Fine for a scaffold; worth a clean re-export from the source PDF if you want pixel-perfect production assets.

## Pushing to GitHub

Matches the push/pull workflow from your last project:

```bash
git init
git add .
git commit -m "Initial DSS website scaffold"
git branch -M main
git remote add origin <your-empty-github-repo-url>
git push -u origin main
```

Then open the folder in VS Code and continue with the Claude Code extension from there.

## Deploying

Any of Vercel, Netlify, or Cloudflare Pages will auto-detect this as a Next.js app — connect the GitHub repo and it deploys on every push. Point your GoDaddy domain's DNS at whichever you pick (see earlier conversation for the reasoning).
