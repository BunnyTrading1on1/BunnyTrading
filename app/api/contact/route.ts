import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Per-instance in-memory limiter — Vercel runs multiple serverless instances,
// so this caps abuse per-instance rather than globally, but stops a single
// script from hammering the endpoint without needing an external store.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

interface ContactBody {
  name?: string;
  email?: string;
  location?: string;
  level?: string;
  message?: string;
  company?: string; // honeypot — real users never fill this in
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages sent — try again in a few minutes." },
      { status: 429 },
    );
  }

  const body = (await req.json().catch(() => null)) as ContactBody | null;

  if (!body) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, location, level, message, company } = body;

  if (company) {
    // Bot filled the honeypot field — pretend success, drop it silently.
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email.trim())) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }
  if (
    name.length > 200 ||
    email.length > 200 ||
    (location?.length ?? 0) > 200 ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { error: "One of the fields is too long." },
      { status: 400 },
    );
  }

  const to = process.env.CONTACT_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || !to) {
    console.error(
      "Contact form is missing RESEND_API_KEY or CONTACT_EMAIL env vars.",
    );
    return NextResponse.json(
      { error: "Contact form isn't set up yet — please try again later." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const from = process.env.CONTACT_FROM || "Bunny Trading <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email.trim(),
      subject: `New DM from ${name.trim()}${level ? ` — ${level}` : ""}`,
      text: `From: ${name.trim()} <${email.trim()}>\nLocation: ${location?.trim() || "Not specified"}\nInterested in: ${level || "Not specified"}\n\n${message.trim()}`,
    });

    if (error) {
      console.error("Resend returned an error", error);
      return NextResponse.json(
        { error: "Couldn't send your message. Try again in a bit." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("Failed to send contact email", err);
    return NextResponse.json(
      { error: "Couldn't send your message. Try again in a bit." },
      { status: 502 },
    );
  }

  // Best-effort confirmation to the sender — never fails the request.
  // Requires a verified sending domain in Resend; silently no-ops on
  // accounts still in sandbox mode.
  try {
    await resend.emails.send({
      from,
      to: email.trim(),
      subject: "Got your message — Bunny Trading",
      text: `Hey ${name.trim()},\n\nThanks for reaching out — I got your message and will reply within 24 hours.\n\n— Bunny Trading`,
    });
  } catch (err) {
    console.error("Confirmation email failed (non-fatal)", err);
  }

  return NextResponse.json({ ok: true });
}
