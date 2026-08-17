import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Bunny Trading",
  description:
    "DM to start — send a message and get a reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <section className="line-top">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">DM to start</span>
          <h2>Send a message.</h2>
          <p>
            Tell me a bit about where you&rsquo;re at and what you&rsquo;re
            looking for — I reply within 24 hours.
          </p>
        </div>
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </div>
    </section>
  );
}
