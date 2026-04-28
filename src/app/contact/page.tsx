"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Page Hero ────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-violet-950 via-purple-900 to-pink-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-600/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="text-violet-300 hover:text-white text-sm transition-colors">Home</Link>
              <span className="text-violet-500">/</span>
              <span className="text-white text-sm font-medium">Contact</span>
            </div>
            <h1 className="text-5xl font-bold text-white tracking-tight mb-5">Contact Us</h1>
            <p className="text-violet-200 text-lg leading-relaxed">
              We&apos;re here to answer your questions and help you find the right care.
              Reach out today — our team responds within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Section ──────────────────────────────────── */}
      <section className="py-20 bg-violet-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Info column */}
            <div className="lg:col-span-2 space-y-5">
              {/* Contact cards */}
              {[
                {
                  icon: "📍",
                  title: "Our Office",
                  lines: ["801 Northpoint Parkway, Suite 4", "West Palm Beach, FL 33407"],
                },
                {
                  icon: "📞",
                  title: "Phone",
                  lines: ["(561) 823-1442", "(561) 823-3539"],
                  links: ["tel:5618231442", "tel:5618233539"],
                },
                {
                  icon: "✉️",
                  title: "Email",
                  lines: ["info@mbbhomecareservices.com"],
                  links: ["mailto:info@mbbhomecareservices.com"],
                },
              ].map((card) => (
                <div key={card.title} className="bg-white border border-violet-100 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center text-xl flex-shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-violet-900 text-sm mb-1">{card.title}</p>
                    {card.lines.map((line, i) =>
                      card.links?.[i] ? (
                        <a
                          key={line}
                          href={card.links[i]}
                          className="block text-sm text-violet-600 hover:text-pink-600 font-medium transition-colors"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="text-sm text-slate-500 leading-relaxed">{line}</p>
                      )
                    )}
                  </div>
                </div>
              ))}

              {/* Hours */}
              <div className="bg-white border border-violet-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center text-xl">🕐</div>
                  <p className="font-semibold text-violet-900 text-sm">Hours</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Office (Mon–Fri)</span>
                    <span className="font-medium text-slate-700">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Office (Sat–Sun)</span>
                    <span className="font-medium text-slate-400">Closed</span>
                  </div>
                  <div className="pt-2 border-t border-violet-100 flex justify-between">
                    <span className="text-slate-500">Care Services</span>
                    <span className="font-semibold text-pink-600">24/7 Available</span>
                  </div>
                </div>
              </div>

              {/* Service area */}
              <div className="bg-gradient-to-br from-violet-800 to-pink-800 rounded-2xl p-6">
                <p className="text-violet-300 text-xs uppercase tracking-wide font-semibold mb-2">Service Area</p>
                <p className="text-white font-bold text-lg mb-1">Palm Beach County</p>
                <p className="text-white font-bold text-lg mb-3">St. Lucie County</p>
                <p className="text-violet-200 text-sm">
                  Not sure if we serve your area? Give us a call and we&apos;ll let you know.
                </p>
              </div>

              {/* Social */}
              <div className="bg-white border border-violet-100 rounded-2xl p-6">
                <p className="font-semibold text-violet-900 text-sm mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/Mbbhomecareservices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-50 hover:bg-violet-100 text-violet-700 text-sm font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/mbbhomecare/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-700 text-sm font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Form column */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-violet-100 rounded-3xl p-8 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-pink-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-5">
                      ✅
                    </div>
                    <h3 className="text-2xl font-bold text-violet-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-500 mb-6">
                      Thank you for reaching out. A member of our team will contact you within 24 hours.
                    </p>
                    <p className="text-slate-400 text-sm mb-6">
                      For urgent needs, call us directly at{" "}
                      <a href="tel:5618231442" className="text-violet-600 font-semibold">(561) 823-1442</a>
                    </p>
                    <button
                      onClick={() => { setForm({ name: "", phone: "", email: "", service: "", message: "" }); setSubmitted(false); }}
                      className="text-sm text-violet-500 hover:text-violet-700 underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-violet-900 mb-2">Send Us a Message</h2>
                    <p className="text-slate-500 text-sm mb-7">
                      Fill out the form below and we&apos;ll get back to you within 24 hours. Prefer to call?{" "}
                      <a href="tel:5618231442" className="text-violet-600 font-medium">(561) 823-1442</a>
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-violet-900 mb-1.5">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-slate-900 text-sm transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-violet-900 mb-1.5">Phone Number</label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="(561) 000-0000"
                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-slate-900 text-sm transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-violet-900 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-slate-900 text-sm transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-violet-900 mb-1.5">Service of Interest</label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-slate-900 text-sm transition-colors bg-white"
                        >
                          <option value="">Select a service...</option>
                          <option>Personal Care</option>
                          <option>Companionship</option>
                          <option>Meal Preparation</option>
                          <option>Medication Reminders</option>
                          <option>Light Housekeeping</option>
                          <option>Alzheimer&apos;s & Dementia Support</option>
                          <option>Respite Care</option>
                          <option>Hospice Support</option>
                          <option>Live-in / Overnight Care</option>
                          <option>Not sure — need guidance</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-violet-900 mb-1.5">Message *</label>
                        <textarea
                          rows={5}
                          required
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us about your loved one's needs, your questions, or how we can help..."
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-slate-900 text-sm transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-700 to-pink-700 hover:from-violet-600 hover:to-pink-600 text-white font-semibold transition-all shadow-md shadow-violet-900/20 text-sm"
                      >
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick CTA ────────────────────────────────────────── */}
      <section className="py-14 bg-white border-t border-violet-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-slate-500 mb-3">Ready to book care right away?</p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-700 to-pink-700 hover:from-violet-600 hover:to-pink-600 text-white font-semibold transition-all shadow-lg"
          >
            Start Booking Process
          </Link>
        </div>
      </section>
    </>
  );
}
