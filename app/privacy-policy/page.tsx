import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Bunny Trading",
  description:
    "What information this site collects, why, and who it's shared with, in plain language.",
};

export default function PrivacyPolicy() {
  return (
    <section className="line-top">
      <div className="wrap">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
        <div className="section-head">
          <span className="eyebrow">Please read</span>
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: August 24, 2026</p>
        </div>
        <div className="prose">
          <p>
            This page explains what information Bunny Trading collects when
            you use this site, why, and who it&rsquo;s shared with. It&rsquo;s
            written in plain language rather than
            formal legal text. If you need a version reviewed for a
            specific jurisdiction&rsquo;s compliance requirements, that
            hasn&rsquo;t been done here.
          </p>

          <h2 style={{ marginTop: 32 }}>What this site collects</h2>
          <p>
            <b>Contact form.</b> If you submit the contact form, we collect
            your name, email address, and message, plus whatever you
            optionally provide for location and which tier you&rsquo;re
            interested in. This is sent by email so a reply can be sent to
            you. It is not added to a mailing list or used for
            anything besides responding to your message.
          </p>
          <p>
            <b>Analytics.</b> This site uses Google Analytics (GA4) and
            Vercel Analytics to understand traffic: which pages get
            visited, roughly where from (country/city level, not precise
            location), and which device or browser was used. Google
            Analytics sets cookies to do this; Vercel Analytics does not.
          </p>
          <p>
            <b>Campaign tracking.</b> If you arrive via a link with tracking
            parameters (e.g. from a social post or ad), those parameters are
            temporarily stored in your browser and included with a contact
            form submission if you send one, so we know which channel a DM
            came from. This isn&rsquo;t shared with anyone outside of that.
          </p>
          <p>
            <b>What we don&rsquo;t collect.</b> There are no user accounts
            or passwords on this site, and no payment or card details are
            ever entered here. Mentorship payment is arranged
            directly once you&rsquo;ve messaged in.
          </p>

          <h2 style={{ marginTop: 32 }}>Who it&rsquo;s shared with</h2>
          <p>
            Contact form messages are sent through Resend, an email delivery
            service, to reach Bunny&rsquo;s inbox. Analytics data is
            processed by Google and Vercel under their own privacy
            policies. This site is hosted on Vercel. None of these
            providers are permitted to sell your data, and nobody else
            receives it.
          </p>

          <h2 style={{ marginTop: 32 }}>Your options</h2>
          <p>
            You can browse this entire site without submitting the contact
            form, in which case nothing personally identifiable is
            collected beyond standard analytics. If you&rsquo;ve already
            sent a message and want it deleted, or have any other question
            about this policy, message through the{" "}
            <a href="/contact" style={{ color: "var(--gold-text)" }}>
              contact form
            </a>{" "}
            or WhatsApp and it&rsquo;ll be handled directly. There&rsquo;s
            no automated system to route the request through.
          </p>
        </div>
      </div>
    </section>
  );
}
