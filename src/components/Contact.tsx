"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Contact Us
          </p>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Let&apos;s Talk About Your Care Needs
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Reach out today for a free consultation. We&apos;ll listen,
            answer your questions, and help you find the right care plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-6">
                Get In Touch
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-lg flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm mb-1">
                      Our Office
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      801 Northpoint Parkway, Suite 4<br />
                      West Palm Beach, FL 33407
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-lg flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:5618231442"
                      className="text-sky-600 hover:text-sky-700 text-sm font-medium block"
                    >
                      (561) 823-1442
                    </a>
                    <a
                      href="tel:5618233539"
                      className="text-sky-600 hover:text-sky-700 text-sm font-medium block"
                    >
                      (561) 823-3539
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-lg flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@mbbhomecareservices.com"
                      className="text-sky-600 hover:text-sky-700 text-sm font-medium"
                    >
                      info@mbbhomecareservices.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-lg flex-shrink-0">
                    🕐
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm mb-1">
                      Availability
                    </p>
                    <p className="text-slate-500 text-sm">
                      24 hours a day, 7 days a week
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-sky-700 rounded-2xl p-6 text-center">
              <p className="text-sky-200 text-sm mb-1">Serving</p>
              <p className="text-white font-bold text-lg">
                West Palm Beach &amp; Surrounding Areas
              </p>
              <p className="text-sky-200 text-sm mt-1">Palm Beach County, FL</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    ✅
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-500">
                    Thank you for reaching out. A member of our team will
                    contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-slate-900 placeholder-slate-400 text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        placeholder="(561) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-slate-900 placeholder-slate-400 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-slate-900 placeholder-slate-400 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Service of Interest
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-slate-900 text-sm transition-colors bg-white"
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
                      <option>Not sure — need guidance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Tell Us More
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Tell us about your loved one's needs, schedule preferences, or any questions you have..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-slate-900 placeholder-slate-400 text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-sky-700 hover:bg-sky-600 text-white font-semibold text-sm transition-colors shadow-md shadow-sky-900/20"
                  >
                    Send Message
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    Or call us directly at{" "}
                    <a
                      href="tel:5618231442"
                      className="text-sky-600 font-medium"
                    >
                      (561) 823-1442
                    </a>{" "}
                    — we&apos;re available 24/7.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
