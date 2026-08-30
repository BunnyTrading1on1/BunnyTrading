"use client";

import { useState, type FormEvent } from "react";

export default function SimpleContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
        body: JSON.stringify({ name, email, message, company }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-success">
        <span className="eyebrow">Message sent</span>
        <p>Thanks, I&rsquo;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form className="simple-form" onSubmit={handleSubmit}>
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

      <label>
        <span>Your name</span>
        <input
          type="text"
          maxLength={200}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <span>Your email</span>
        <input
          type="email"
          maxLength={200}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>Message</span>
        <textarea
          maxLength={5000}
          rows={4}
          required
          placeholder="Where are you at with your trading, and what are you looking for?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>

      {status === "error" && <p className="contact-error">{error}</p>}

      <button
        type="submit"
        className="tier-btn"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
