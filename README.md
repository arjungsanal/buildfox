# buildfox

Landing page and admin dashboard for [buildfox](https://buildfox.space) — an indie micro-SaaS studio based in Kerala, India.

Built with Next.js, Supabase, and Tailwind CSS.

## Stack

- **Next.js 16** — App Router, TypeScript, Turbopack
- **Tailwind CSS v4** — utility-first styling with custom design tokens
- **Supabase** — Postgres database + magic link auth (`@supabase/ssr`)
- **ISR** — public page pre-built at deploy, revalidates every 60s

## Features

- Public landing page — hero, projects bento grid, hire/consult section, about, footer
- Dark/light theme — persisted in `localStorage`, no flash on load
- Custom cursor, scroll reveal animations, ticker marquee
- `/admin` dashboard — protected by Supabase Auth (magic link, owner-only)
  - Add, edit, delete, and reorder projects
  - Toggle project visibility without deleting
  - Edit social links and contact email

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/arjungsanal/buildfox
cd landing
npm install
```

### 2. Set up Supabase

Create a project at [supabase.com](https://supabase.com), then run the schema:

```bash
# paste the contents of supabase-schema.sql into your Supabase SQL editor
```

### 3. Configure environment variables

```bash
cp .env.local.example .env.local
```

Fill in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-publishable-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
ADMIN_EMAIL=you@example.com
```

`ADMIN_EMAIL` restricts magic link login to a single owner email — anyone else who attempts to log in is rejected before Supabase is even contacted.

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the public site and [http://localhost:3000/admin](http://localhost:3000/admin) for the dashboard.

## Project Structure

```
src/
  app/
    page.tsx              — public landing page (ISR, revalidate: 60s)
    layout.tsx            — root layout: fonts, theme, metadata
    globals.css           — design tokens (CSS custom properties), keyframes
    admin/                — protected dashboard routes
    auth/callback/        — Supabase OAuth callback handler
  components/
    landing/              — all public page sections
    admin/                — admin UI components
  lib/
    actions.ts            — server actions (mutations + auth)
    queries.ts            — typed Supabase fetch functions
    supabase/             — server + client Supabase instances
  proxy.ts                — Next.js 16 auth middleware (protects /admin/*)
  types/index.ts          — Project and Settings types
```

## Deployment

Deploy to [Vercel](https://vercel.com) — connect the repo, add the same environment variables from `.env.local`, and set `NEXT_PUBLIC_SITE_URL` to your production domain.

## License

MIT — see [LICENSE](LICENSE).
