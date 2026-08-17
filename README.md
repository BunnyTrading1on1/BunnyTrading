# Bunny Trading

One-on-one XAU/USD trading mentorship site. Next.js (App Router) + TypeScript, with a live position sizing tool and a contact form that emails you via [Resend](https://resend.com).

## Pages

- `/` — Home
- `/pricing` — Mentorship tiers
- `/position-sizing` — XAUUSD position sizing calculator
- `/contact` — DM form (emails you)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

The contact form needs these to actually send email. Copy the example file and fill it in:

```bash
cp .env.local.example .env.local
```

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | From [resend.com/api-keys](https://resend.com/api-keys) |
| `CONTACT_EMAIL` | Yes | Inbox that DM submissions get sent to |
| `CONTACT_FROM` | No | Sender address. Defaults to Resend's shared `onboarding@resend.dev`, which works fine but only delivers to the email you verified on your Resend account. Verify your own domain in Resend to send from your own address instead. |

`.env.local` is gitignored — never commit it.

## Deploying (Vercel)

1. Push this repo to GitHub (see below if you haven't yet).
2. Go to [vercel.com/new](https://vercel.com/new), import the GitHub repo. Vercel auto-detects Next.js — no config needed.
3. In the project's **Settings → Environment Variables**, add `RESEND_API_KEY` and `CONTACT_EMAIL` (and `CONTACT_FROM` if you're using a verified domain).
4. Deploy. Every push to `main` redeploys automatically.

### Pushing this repo to GitHub for the first time

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

Create the empty repo on GitHub first (no README/gitignore — this project already has both), then run the commands above.

## Also works on Netlify

Netlify supports Next.js via its built-in Next.js Runtime — import the repo at [app.netlify.com](https://app.netlify.com), it auto-detects the framework, and the same environment variables go in **Site configuration → Environment variables**.
