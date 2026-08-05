"use client";

import { useState } from "react";
import { MapPin, Package2, Mail, Users, Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  website: "", // honeypot — kept empty by real visitors
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data?.errors) {
          setErrors(data.errors);
          setStatus("idle");
        } else {
          setErrorMessage(data?.error || "Something went wrong. Please try again.");
          setStatus("error");
        }
        return;
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-surface">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-[1fr_1fr] gap-14">
        <Reveal>
          <p className="eyebrow text-[12px] tracking-[0.25em] text-secondary font-semibold mb-4">
            CONTACT US
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
            Let&rsquo;s start your sourcing partnership
          </h2>
          <p className="mt-5 text-ink/70 text-[15px] leading-relaxed max-w-lg">
            We welcome importers, exporters, wholesalers, distributors,
            retailers, supermarkets, and institutional buyers from around
            the world to partner with us for reliable sourcing and
            international trade solutions.
          </p>

          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:info@sjfkfintech.com"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-ink font-semibold text-sm px-6 py-3.5 rounded-md hover:bg-primary-light transition-colors"
          >
            <Mail size={16} />
            Enquire Now
          </motion.a>

          <RevealGroup
            delay={0.1}
            staggerChildren={0.1}
            className="mt-10 bg-white rounded-xl border border-ink/10 p-8 space-y-7"
          >
            <RevealItem className="flex gap-4">
              <span className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center shrink-0">
                <MapPin size={17} className="text-primary" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">
                  Corporate Address
                </p>
                <p className="mt-1.5 text-sm text-ink/65 leading-relaxed">
                  SJFK FINTECH PRIVATE LIMITED
                  <br />
                  OFF, No. 6, Plot No. 48 &amp; 49, Jay Ambe Oil Compound
                  <br />
                  MAFCO Road, Above Green Field Hotel, Vashi
                  <br />
                  Navi Mumbai, Thane, Maharashtra &ndash; 400703, India
                </p>
              </div>
            </RevealItem>

            <RevealItem className="flex gap-4">
              <span className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center shrink-0">
                <Package2 size={17} className="text-primary" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Business</p>
                <p className="mt-1.5 text-sm text-ink/65">
                  Import &amp; Export &mdash; Pulses, Spices, Vegetables, Onion
                  &amp; Potato
                </p>
              </div>
            </RevealItem>

            <RevealItem className="flex gap-4">
              <span className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center shrink-0">
                <Users size={17} className="text-primary" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">
                  We Partner With
                </p>
                <p className="mt-1.5 text-sm text-ink/65">
                  Importers, exporters, wholesalers, distributors, retailers,
                  supermarkets &amp; institutional buyers
                </p>
              </div>
            </RevealItem>
          </RevealGroup>
        </Reveal>

        <Reveal delay={0.1} className="bg-white rounded-xl border border-ink/10 p-8">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center h-full py-10">
              <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle2 size={24} className="text-primary" />
              </span>
              <p className="text-base font-semibold text-ink">Message sent</p>
              <p className="mt-2 text-sm text-ink/65 max-w-xs">
                Thanks for reaching out — we&rsquo;ve emailed you a
                confirmation and will get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <p className="text-sm font-semibold text-ink mb-1">
                Send us a message
              </p>

              {/* Honeypot field — hidden from real users */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Full name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  autoComplete="name"
                />
                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  autoComplete="email"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Phone (optional)"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  autoComplete="tel"
                />
                <Field
                  label="Company (optional)"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  autoComplete="organization"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-ink/70 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're looking to source..."
                  className={`w-full rounded-md border bg-surface/40 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-primary ${
                    errors.message ? "border-red-400" : "border-ink/15"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              {status === "error" && (
                <p className="text-xs text-red-500">{errorMessage}</p>
              )}

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={status === "submitting"}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-ink font-semibold text-sm px-6 py-3.5 rounded-md hover:bg-primary-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send message"
                )}
              </motion.button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, error, type = "text", autoComplete }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-semibold text-ink/70 mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className={`w-full rounded-md border bg-surface/40 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-primary ${
          error ? "border-red-400" : "border-ink/15"
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
