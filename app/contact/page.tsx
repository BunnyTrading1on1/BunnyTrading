import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact — Gold Trading Mentorship | Bunny Trading",
  description:
    "DM to start — send a message and get a reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <section className="line-top">
      <div className="wrap contact-grid">
        <div className="contact-aside">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <div className="section-head">
            <span className="eyebrow">DM to start</span>
            <h1>Send a message.</h1>
            <p>
              Tell me a bit about where you&rsquo;re at and what you&rsquo;re
              looking for — I reply within 24 hours.
            </p>
          </div>
          <ul className="contact-points">
            <li>
              <span className="pt-num">01</span>
              No sales call required to start
            </li>
            <li>
              <span className="pt-num">02</span>
              Real reply from me, not a team inbox
            </li>
            <li>
              <span className="pt-num">03</span>
              Month to month, cancel anytime
            </li>
          </ul>
          <div className="contact-alt">
            <span>Prefer WhatsApp?</span>
            <a
              href="https://wa.me/27787514006?text=Hi%2C%20I'm%20interested%20in%20Bunny%20Trading%20mentorship."
              target="_blank"
              rel="noopener noreferrer"
            >
              Message me directly →
            </a>
          </div>
        </div>
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </div>
    </section>
  );
}
