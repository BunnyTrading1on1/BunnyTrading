"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";

const LEVELS = ["Foundations", "Active Trader", "Elite"];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const prefillLevel = searchParams.get("tier");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [level, setLevel] = useState(
    prefillLevel && LEVELS.includes(prefillLevel) ? prefillLevel : "Active Trader",
  );
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          location,
          level,
          message,
          company,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setLocation("");
      setLevel("Active Trader");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-success">
        <span className="eyebrow">Message sent</span>
        <p>Thanks — I&rsquo;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form className="contact-panel" onSubmit={handleSubmit}>
      <input
        type="text"
        name="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="hp-field"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          required
          maxLength={200}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required
          maxLength={200}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="location">Where Are You From</label>
        <input
          id="location"
          type="text"
          maxLength={200}
          placeholder="Country or city"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="level">Interested In</label>
        <select
          id="level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="">Not sure yet</option>
          {LEVELS.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Questions?</label>
        <textarea
          id="message"
          required
          maxLength={5000}
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {status === "error" && <p className="contact-error">{error}</p>}

      <button
        type="submit"
        className="contact-submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          "Sending…"
        ) : (
          <>
            Send Message<span className="cta-arrow">→</span>
          </>
        )}
      </button>
    </form>
  );
}
