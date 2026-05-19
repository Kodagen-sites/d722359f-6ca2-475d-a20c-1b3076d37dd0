"use client";

import { useState } from "react";
import { Loader2, Check } from "lucide-react";
import { siteConfig } from "@/content/site-config";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full border border-fg/15 bg-bg px-4 py-3.5 font-body text-sm text-fg placeholder:text-fg/35 transition-colors focus:border-primary focus:outline-none";
const labelClass =
  "mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-fg/45";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please call our office or hotline.");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-4 border border-primary/30 bg-primary/[0.06] p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-fg">
          Enquiry received
        </h3>
        <p className="font-body text-sm leading-relaxed text-fg/65">
          Thank you. A Sentinel operations lead will respond confidentially,
          usually within one business day. If your need is urgent, call our 24/7
          hotline on{" "}
          <a
            href={`tel:${siteConfig.contact.hotline.replace(/\s/g, "")}`}
            className="text-primary underline-offset-4 hover:underline"
          >
            {siteConfig.contact.hotline}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            placeholder="Optional"
          />
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>
            Service of interest
          </label>
          <select id="service" name="service" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {siteConfig.services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="General enquiry">General enquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-none`}
          placeholder="Tell us, in confidence, what you need. Avoid sharing sensitive specifics in this field — we will arrange a secure conversation."
        />
      </div>

      <p className="font-body text-xs leading-relaxed text-fg/45">
        Your enquiry is handled in strict confidence. By submitting, you agree to
        our{" "}
        <a href="/privacy" className="text-fg/70 underline-offset-4 hover:text-primary">
          Privacy Policy
        </a>
        .
      </p>

      {status === "error" && (
        <p className="font-body text-sm text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-3 bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-bg transition-shadow hover:shadow-[0_0_40px_-8px_rgba(201,162,75,0.7)] disabled:opacity-60"
      >
        {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "sending" ? "Sending" : "Send confidential enquiry"}
      </button>
    </form>
  );
}
