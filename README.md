# Gaza For All — Official Website

The public digital home of the Gaza For All Movement: a civic-political institution in
Nasarawa State, Nigeria, built for permanence — not a campaign microsite.

> **One People. One Vision. One Future.**
> Support is not surrender.

## What this is

A production-quality, mobile-first, accessible static website implementing
`G4A-WEB-PRD v2.0`. It is architecturally ready for a future public information
assistant ("G4A Guide") and an internal operating platform ("G4A Command"), without
pretending either already exists.

## Technology stack

Deliberately dependency-free:

- **HTML5 / CSS3 / vanilla JS** — no framework, no build step, no `npm install`.
- **Google Fonts** (Fraunces + Public Sans) loaded via CDN `<link>` at runtime.
- Fully static — deployable to GitHub Pages, Netlify, Vercel, or any static host
  with zero configuration changes.

This keeps the codebase portable per the PRD's requirement that the site not be
locked into one hosting provider or framework.

## Project structure

```
/
├── index.html              Homepage
├── about.html               Who We Are · Why We Exist · Vision & Mission · Values · "For All"
├── why-gaza.html             Why We Support Gaza · Leadership & Record · Our Principles
├── our-work.html            Community Engagement · Civic Participation · Volunteerism ·
│                             Leadership Development · Partnerships · Events
├── community-voice.html     Share a Concern · Community Priorities · Community Updates
├── accountability.html      Our Approach · Commitments · Reports · Updates
├── get-involved.html        Join · Volunteer · Partner · Attend an Event
├── news.html                News & Updates
├── resources.html           Reports · Public Documents · FAQs · Media Resources
├── leadership.html          Leadership
├── contact.html             Contact
├── css/style.css            Design system: tokens, type scale, components
├── js/main.js               Progressive-enhancement nav behaviour only
├── assets/img/               Brand assets (logo, approved candidate image)
├── robots.txt / sitemap.xml  SEO foundation
└── README.md
```

Every page shares the same `<head>` meta pattern, header/navigation, and footer,
generated from a single template so the institution's voice stays consistent.
Component classes (`.card`, `.btn`, `.badge-*`, `.flow-line`, `.identity-row`,
`.status-pill`, `.placeholder-note`, `.form-privacy-note`) are defined once in
`css/style.css` and reused across every page.

## Development

No build step. Open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

## Content governance

- **Never invent content.** Anywhere real, approved content does not yet exist,
  the site uses an explicit placeholder such as `[Approved biography to be
  inserted]` — never a fabricated statistic, testimonial, quote, or event.
- **Content types are distinguished** using `FACT` / `POSITION` / `ASPIRATION` /
  `REPORT` badges (see `css/style.css` `.badge-*` classes) so a claim's status is
  visible, not implied.
- **Institutional positioning** on the candidate uses only the language approved
  in the PRD; the website does not put words in the candidate's mouth, and does
  not present the movement as identical to the candidate or a political party.

## Data & privacy boundaries

- The public website is a **PUBLIC**-tier system only. It contains no member
  database, no internal dashboard, and no confidential or safeguarding data.
- The **Community Voice** and **Join** forms are private-by-default in design —
  submission is not published automatically, and safeguarding-related content is
  never displayed publicly. **These forms are front-end only in this MVP**: they
  are not yet wired to a backend/data store. Before going live, connect them to a
  vetted backend (form service, serverless function, or the future G4A Command
  API) that enforces the same privacy rules described here — do not simply point
  them at a public spreadsheet or open endpoint.
- No API keys, credentials, or secrets are present anywhere in this repository.
  If a backend is added later, use environment variables on the hosting platform
  — never commit secrets to this repo.

## Security

- Static site: no server-side attack surface by default.
- If/when forms are connected to a backend, add server-side input validation,
  rate limiting/abuse controls, and sanitize any content before it is ever
  rendered back to a browser.
- Add security headers (CSP, `X-Content-Type-Options`, `Referrer-Policy`, etc.)
  at the hosting/CDN layer once a specific host is chosen.

## Accessibility

Targets WCAG 2.2 AA: skip link, visible focus states, semantic landmarks and
heading order, labelled form fields, sufficient color contrast, and
`prefers-reduced-motion` support. Please re-check contrast and heading order
whenever new content sections are added.

## Future architecture (not built yet, and intentionally so)

- **G4A Guide** (Phase 2) — a public information agent operating only on
  approved public sources, using a `VERIFIED / SUPPORTED / UNVERIFIED / UNKNOWN`
  confidence taxonomy. Nothing resembling an open chatbot exists in this MVP.
- **Evidence Layer / Accountability Intelligence** — future retrieval and
  corroboration layer behind G4A Guide.
- **G4A Command** — a separate, internal, authenticated operating platform.
  The public website must never directly expose G4A Command's database; any
  future integration should go through controlled, authorized APIs only.

## Deployment

This repository is ready for GitHub Pages: enable Pages on the `main` branch,
root folder, in repository Settings once pushed.

## Contribution conventions

Use meaningful, scoped commit messages, e.g. `feat: add accountability
architecture`, `fix: improve mobile nav focus order`, `perf: compress hero
image`. See `G4A-WEB-PRD v2.0` for the full institutional and product
requirements this repository implements.
