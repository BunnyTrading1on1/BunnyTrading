"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function PortalLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "working" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("working");
    setError("");

    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });
      if (authError) throw authError;
      router.push("/portal");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Try again.");
    }
  }

  return (
    <div className="portal-wrap">
      <div className="portal-card">
        <p className="portal-eyebrow">Bunny Trading</p>
        <h1 className="portal-title">Student Login</h1>
        <p className="portal-sub">Sign in with the email and password Bunny set up for you.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="portal-input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <input
            type="password"
            className="portal-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
          <button type="submit" className="portal-btn" disabled={status === "working"}>
            {status === "working" ? "Signing in…" : "Log In"}
          </button>
        </form>

        {status === "error" && <p className="portal-error">{error}</p>}

        <p className="portal-note">
          Don&rsquo;t have an account yet?{" "}
          <a href="/contact" style={{ color: "var(--p-gold)" }}>
            DM Bunny to get set up →
          </a>
        </p>
      </div>
    </div>
  );
}
