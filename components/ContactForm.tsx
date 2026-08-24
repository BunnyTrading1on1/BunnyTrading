"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { useSearchParams } from "next/navigation";
import { UTM_STORAGE_KEY } from "@/components/UtmCapture";

const LEVELS = ["Foundations", "Active Trader", "Elite"];
const LEVEL_OPTIONS = [...LEVELS, "Not sure yet"];

const STEPS = ["name", "email", "level", "location", "message"] as const;
type Step = (typeof STEPS)[number];

const QUESTIONS: Record<Step, string> = {
  name: "What’s your name?",
  email: "What’s your email?",
  level: "What are you interested in?",
  location: "Where are you from?",
  message: "What’s on your mind?",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const searchParams = useSearchParams();
  const prefillLevel = searchParams.get("tier");

  const [stepIndex, setStepIndex] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [level, setLevel] = useState(
    prefillLevel && LEVELS.includes(prefillLevel) ? prefillLevel : "",
  );
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  const fieldRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);
  const step = STEPS[stepIndex];
  const isLast = stepIndex === STEPS.length - 1;

  useEffect(() => {
    fieldRef.current?.focus();
  }, [stepIndex]);

  function canContinue() {
    if (step === "name") return name.trim().length > 0;
    if (step === "email") return EMAIL_RE.test(email.trim());
    return true;
  }

  function next() {
    if (!canContinue()) return;
    setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
  }

  function back() {
    setStepIndex((i) => Math.max(i - 1, 0));
  }

  function handleFieldKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      next();
    }
  }

  function pickLevel(option: string) {
    setLevel(option === "Not sure yet" ? "" : option);
    next();
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLast) {
      next();
      return;
    }
    setStatus("submitting");
    setError("");

    let utm: Record<string, string> = {};
    try {
      utm = JSON.parse(window.sessionStorage.getItem(UTM_STORAGE_KEY) || "{}");
    } catch {
      // ignore malformed/missing UTM data
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, location, level, message, company, utm }),
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

      <div className="step-progress">
        <span>
          {stepIndex + 1} / {STEPS.length}
        </span>
        <div className="step-progress-track">
          <div
            className="step-progress-fill"
            style={{ width: `${((stepIndex + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {stepIndex > 0 && (
        <button type="button" className="step-back" onClick={back}>
          ← Back
        </button>
      )}

      <div className="form-step" key={step}>
        <label className="step-question" htmlFor={step !== "level" ? step : undefined}>
          {QUESTIONS[step]}
          {step === "location" && <span className="step-optional">(optional)</span>}
        </label>

        {step === "name" && (
          <input
            ref={fieldRef}
            id="name"
            type="text"
            maxLength={200}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleFieldKeyDown}
          />
        )}

        {step === "email" && (
          <input
            ref={fieldRef}
            id="email"
            type="email"
            maxLength={200}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleFieldKeyDown}
          />
        )}

        {step === "level" && (
          <div className="step-options">
            {LEVEL_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                className={`step-option${
                  (option === "Not sure yet" ? level === "" : level === option)
                    ? " is-selected"
                    : ""
                }`}
                onClick={() => pickLevel(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {step === "location" && (
          <input
            ref={fieldRef}
            id="location"
            type="text"
            maxLength={200}
            placeholder="Country or city"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={handleFieldKeyDown}
          />
        )}

        {step === "message" && (
          <textarea
            ref={fieldRef}
            id="message"
            maxLength={5000}
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        )}
      </div>

      {status === "error" && <p className="contact-error">{error}</p>}

      <div className="step-actions">
        {step === "location" && (
          <button type="button" className="step-skip" onClick={next}>
            Skip
          </button>
        )}

        {!isLast ? (
          step !== "level" && (
            <button
              type="button"
              className="contact-submit"
              disabled={!canContinue()}
              onClick={next}
            >
              Continue<span className="cta-arrow">→</span>
            </button>
          )
        ) : (
          <button
            type="submit"
            className="contact-submit"
            disabled={status === "submitting" || message.trim().length === 0}
          >
            {status === "submitting" ? (
              "Sending…"
            ) : (
              <>
                Send Message<span className="cta-arrow">→</span>
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
}
