"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const SERVICES = [
  "Personal Care (Bathing, Dressing, Grooming)",
  "Mobility Assistance",
  "Companionship",
  "Meal Preparation",
  "Medication Reminders",
  "Light Housekeeping",
  "Transportation & Errands",
  "Alzheimer's & Dementia Support",
  "Respite Care",
  "Hospice Support",
  "Live-in Care",
  "24/7 / Overnight Care",
];

const FREQUENCIES = [
  "Daily",
  "A few days per week",
  "Weekends only",
  "Weekly",
  "As needed / flexible",
  "Temporary / one-time",
];

const SCHEDULES = [
  "Morning (6 AM – 12 PM)",
  "Afternoon (12 PM – 6 PM)",
  "Evening (6 PM – 10 PM)",
  "Overnight (10 PM – 6 AM)",
  "Full Day",
  "Flexible",
];

const RELATIONSHIPS = [
  "Self",
  "Spouse / Partner",
  "Parent",
  "Sibling",
  "Child",
  "Other Family Member",
  "Friend",
  "Legal Guardian",
  "Other",
];

type FormData = {
  services: string[];
  frequency: string;
  schedule: string;
  startDate: string;
  clientName: string;
  clientAge: string;
  relationship: string;
  careAddress: string;
  city: string;
  county: string;
  medicalNotes: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  contactMethod: string;
  bestTime: string;
  additionalNotes: string;
};

const EMPTY: FormData = {
  services: [],
  frequency: "",
  schedule: "",
  startDate: "",
  clientName: "",
  clientAge: "",
  relationship: "",
  careAddress: "",
  city: "",
  county: "",
  medicalNotes: "",
  contactName: "",
  contactPhone: "",
  contactEmail: "",
  contactMethod: "",
  bestTime: "",
  additionalNotes: "",
};

const steps = [
  { number: 1, label: "Services" },
  { number: 2, label: "Schedule" },
  { number: 3, label: "Client Info" },
  { number: 4, label: "Your Contact" },
  { number: 5, label: "Review" },
];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleService = (s: string) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter((x) => x !== s)
        : [...f.services, s],
    }));
  };

  const set = (key: keyof FormData, val: string) =>
    setForm((f) => ({ ...f, [key]: val }));

  const canNext = () => {
    if (step === 1) return form.services.length > 0;
    if (step === 2) return form.frequency !== "" && form.schedule !== "";
    if (step === 3)
      return form.clientName !== "" && form.relationship !== "" && form.careAddress !== "";
    if (step === 4)
      return form.contactName !== "" && form.contactPhone !== "" && form.contactEmail !== "";
    return true;
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    const { error: sbError } = await supabase.from("bookings").insert({
      services: form.services,
      frequency: form.frequency,
      schedule: form.schedule,
      start_date: form.startDate,
      client_name: form.clientName,
      client_age: form.clientAge,
      relationship: form.relationship,
      care_address: form.careAddress,
      city: form.city,
      county: form.county,
      medical_notes: form.medicalNotes,
      contact_name: form.contactName,
      contact_phone: form.contactPhone,
      contact_email: form.contactEmail,
      contact_method: form.contactMethod,
      best_time: form.bestTime,
      additional_notes: form.additionalNotes,
    });
    setLoading(false);
    if (sbError) {
      setError("Something went wrong. Please call us at (561) 823-1442.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-violet-100">
        <div className="w-20 h-20 bg-gradient-to-br from-violet-100 to-pink-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
          ✅
        </div>
        <h2 className="text-3xl font-bold text-violet-900 mb-3">
          Request Received!
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed mb-2 max-w-md mx-auto">
          Thank you, <strong className="text-violet-800">{form.contactName}</strong>. We&apos;ve received
          your consultation request for <strong className="text-violet-800">{form.clientName}</strong>.
        </p>
        <p className="text-slate-400 mb-8">
          A member of our team will contact you at <strong>{form.contactPhone}</strong> within 24 hours.
        </p>
        <div className="bg-violet-50 rounded-2xl p-5 text-sm text-slate-600 mb-8 text-left max-w-sm mx-auto">
          <p className="font-semibold text-violet-900 mb-2">While you wait, you can also reach us at:</p>
          <p>📞 <a href="tel:5618231442" className="text-violet-700 font-medium">(561) 823-1442</a></p>
          <p className="mt-1">📧 <a href="mailto:info@mbbhomecareservices.com" className="text-violet-700 font-medium">info@mbbhomecareservices.com</a></p>
        </div>
        <button
          onClick={() => { setForm(EMPTY); setStep(1); setSubmitted(false); }}
          className="text-sm text-violet-500 hover:text-violet-700 underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-violet-100 overflow-hidden">
      {/* Progress header */}
      <div className="bg-gradient-to-r from-violet-800 to-pink-800 px-8 py-6">
        <div className="flex items-center justify-between mb-1">
          <p className="text-white font-semibold">Step {step} of {steps.length}</p>
          <p className="text-violet-200 text-sm">{steps[step - 1].label}</p>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div
            className="bg-white rounded-full h-2 transition-all duration-500"
            style={{ width: `${(step / steps.length) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-3">
          {steps.map((s) => (
            <div key={s.number} className="flex flex-col items-center gap-1">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                s.number < step ? "bg-white text-violet-700" :
                s.number === step ? "bg-pink-400 text-white" :
                "bg-white/20 text-white/60"
              }`}>
                {s.number < step ? "✓" : s.number}
              </div>
              <span className={`text-xs hidden sm:block ${s.number === step ? "text-white" : "text-white/50"}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form body */}
      <div className="p-8">

        {/* ── Step 1: Services ── */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-violet-900 mb-2">What services are needed?</h2>
            <p className="text-slate-500 mb-6">Select all that apply — we&apos;ll tailor the care plan accordingly.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {SERVICES.map((s) => {
                const checked = form.services.includes(s);
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleService(s)}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                      checked
                        ? "border-violet-500 bg-violet-50 text-violet-900"
                        : "border-slate-200 hover:border-violet-200 text-slate-700"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border-2 transition-all ${
                      checked ? "bg-violet-600 border-violet-600" : "border-slate-300"
                    }`}>
                      {checked && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm font-medium">{s}</span>
                  </button>
                );
              })}
            </div>
            {form.services.length > 0 && (
              <p className="mt-4 text-sm text-violet-600 font-medium">
                {form.services.length} service{form.services.length > 1 ? "s" : ""} selected
              </p>
            )}
          </div>
        )}

        {/* ── Step 2: Schedule ── */}
        {step === 2 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-violet-900 mb-2">When is care needed?</h2>
              <p className="text-slate-500 mb-6">Tell us about the desired schedule and start date.</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-violet-900 mb-3">Care Frequency</label>
              <div className="grid sm:grid-cols-2 gap-3">
                {FREQUENCIES.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => set("frequency", f)}
                    className={`p-4 rounded-xl border-2 text-sm font-medium text-left transition-all ${
                      form.frequency === f
                        ? "border-violet-500 bg-violet-50 text-violet-900"
                        : "border-slate-200 hover:border-violet-200 text-slate-600"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-violet-900 mb-3">Preferred Schedule</label>
              <div className="grid sm:grid-cols-3 gap-3">
                {SCHEDULES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => set("schedule", s)}
                    className={`p-4 rounded-xl border-2 text-sm font-medium text-left transition-all ${
                      form.schedule === s
                        ? "border-pink-500 bg-pink-50 text-pink-900"
                        : "border-slate-200 hover:border-pink-200 text-slate-600"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-violet-900 mb-2">
                Desired Start Date <span className="font-normal text-slate-400">(approximate)</span>
              </label>
              <input
                type="date"
                value={form.startDate}
                onChange={(e) => set("startDate", e.target.value)}
                className="px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-slate-900 text-sm transition-colors w-full sm:w-auto"
              />
            </div>
          </div>
        )}

        {/* ── Step 3: Client Info ── */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-violet-900 mb-2">Tell us about the client</h2>
              <p className="text-slate-500 mb-6">This helps us match the right caregiver and build the best care plan.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-violet-900 mb-1.5">Client&apos;s Full Name *</label>
                <input
                  type="text"
                  value={form.clientName}
                  onChange={(e) => set("clientName", e.target.value)}
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-slate-900 text-sm transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-violet-900 mb-1.5">Client&apos;s Age</label>
                <input
                  type="text"
                  value={form.clientAge}
                  onChange={(e) => set("clientAge", e.target.value)}
                  placeholder="e.g., 78"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-slate-900 text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-violet-900 mb-3">Your Relationship to Client *</label>
              <div className="flex flex-wrap gap-2">
                {RELATIONSHIPS.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => set("relationship", r)}
                    className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${
                      form.relationship === r
                        ? "border-violet-500 bg-violet-50 text-violet-800"
                        : "border-slate-200 hover:border-violet-200 text-slate-600"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-violet-900 mb-1.5">Care Address *</label>
              <input
                type="text"
                value={form.careAddress}
                onChange={(e) => set("careAddress", e.target.value)}
                placeholder="Street address where care will be provided"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-slate-900 text-sm transition-colors"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-violet-900 mb-1.5">City</label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => set("city", e.target.value)}
                  placeholder="City"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-slate-900 text-sm transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-violet-900 mb-1.5">County</label>
                <select
                  value={form.county}
                  onChange={(e) => set("county", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-slate-900 text-sm transition-colors bg-white"
                >
                  <option value="">Select county...</option>
                  <option>Palm Beach County</option>
                  <option>St. Lucie County</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-violet-900 mb-1.5">
                Medical Conditions / Special Needs{" "}
                <span className="font-normal text-slate-400">(optional but helpful)</span>
              </label>
              <textarea
                rows={3}
                value={form.medicalNotes}
                onChange={(e) => set("medicalNotes", e.target.value)}
                placeholder="e.g., diabetes, limited mobility, Parkinson's disease, memory loss..."
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-slate-900 text-sm transition-colors resize-none"
              />
            </div>
          </div>
        )}

        {/* ── Step 4: Contact Info ── */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-violet-900 mb-2">Your contact information</h2>
              <p className="text-slate-500 mb-6">We&apos;ll use this to reach you within 24 hours.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-violet-900 mb-1.5">Your Full Name *</label>
                <input
                  type="text"
                  value={form.contactName}
                  onChange={(e) => set("contactName", e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-slate-900 text-sm transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-violet-900 mb-1.5">Phone Number *</label>
                <input
                  type="tel"
                  value={form.contactPhone}
                  onChange={(e) => set("contactPhone", e.target.value)}
                  placeholder="(561) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-slate-900 text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-violet-900 mb-1.5">Email Address *</label>
              <input
                type="email"
                value={form.contactEmail}
                onChange={(e) => set("contactEmail", e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-slate-900 text-sm transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-violet-900 mb-3">Preferred Contact Method</label>
              <div className="flex gap-3">
                {["Phone", "Email", "Either"].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => set("contactMethod", m)}
                    className={`px-5 py-2.5 rounded-full border-2 text-sm font-medium transition-all ${
                      form.contactMethod === m
                        ? "border-violet-500 bg-violet-50 text-violet-800"
                        : "border-slate-200 hover:border-violet-200 text-slate-600"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-violet-900 mb-1.5">Best Time to Reach You</label>
              <select
                value={form.bestTime}
                onChange={(e) => set("bestTime", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-slate-900 text-sm transition-colors bg-white"
              >
                <option value="">Select a time...</option>
                <option>Morning (8 AM – 12 PM)</option>
                <option>Afternoon (12 PM – 5 PM)</option>
                <option>Evening (5 PM – 8 PM)</option>
                <option>Anytime</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-violet-900 mb-1.5">
                Anything else we should know?{" "}
                <span className="font-normal text-slate-400">(optional)</span>
              </label>
              <textarea
                rows={3}
                value={form.additionalNotes}
                onChange={(e) => set("additionalNotes", e.target.value)}
                placeholder="Questions, concerns, or additional context..."
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-slate-900 text-sm transition-colors resize-none"
              />
            </div>
          </div>
        )}

        {/* ── Step 5: Review ── */}
        {step === 5 && (
          <div>
            <h2 className="text-2xl font-bold text-violet-900 mb-2">Review your request</h2>
            <p className="text-slate-500 mb-6">Please confirm the details below before submitting.</p>

            <div className="space-y-4">
              {[
                {
                  title: "Services Requested",
                  content: form.services.join(", "),
                  edit: 1,
                },
                {
                  title: "Schedule",
                  content: `${form.frequency} · ${form.schedule}${form.startDate ? ` · Starting ${form.startDate}` : ""}`,
                  edit: 2,
                },
                {
                  title: "Client",
                  content: `${form.clientName}${form.clientAge ? `, age ${form.clientAge}` : ""} · ${form.relationship} · ${form.careAddress}, ${form.city}${form.county ? `, ${form.county}` : ""}`,
                  edit: 3,
                },
                {
                  title: "Your Contact",
                  content: `${form.contactName} · ${form.contactPhone} · ${form.contactEmail}${form.contactMethod ? ` · Prefer ${form.contactMethod}` : ""}`,
                  edit: 4,
                },
              ].map((row) => (
                <div key={row.title} className="bg-violet-50 rounded-2xl p-5 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs text-violet-500 uppercase tracking-wide font-semibold mb-1">{row.title}</p>
                    <p className="text-slate-700 text-sm leading-relaxed">{row.content || "—"}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(row.edit)}
                    className="text-xs text-violet-600 hover:text-violet-800 font-semibold flex-shrink-0 underline"
                  >
                    Edit
                  </button>
                </div>
              ))}
            </div>

            {form.medicalNotes && (
              <div className="mt-4 bg-pink-50 rounded-2xl p-5">
                <p className="text-xs text-pink-500 uppercase tracking-wide font-semibold mb-1">Medical Notes</p>
                <p className="text-slate-700 text-sm">{form.medicalNotes}</p>
              </div>
            )}
          </div>
        )}

        {/* ── Navigation buttons ── */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-violet-100">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="px-6 py-3 rounded-full border-2 border-violet-200 text-violet-700 font-semibold text-sm hover:bg-violet-50 transition-colors"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}

          {step < 5 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext()}
              className={`px-8 py-3 rounded-full font-semibold text-sm transition-all ${
                canNext()
                  ? "bg-gradient-to-r from-violet-700 to-pink-700 hover:from-violet-600 hover:to-pink-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-400 cursor-not-allowed"
              }`}
            >
              Continue →
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-700 to-pink-700 hover:from-violet-600 hover:to-pink-600 text-white font-semibold text-sm shadow-md transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting…" : "Submit Request ✓"}
            </button>
          )}
        </div>

        {error && (
          <p className="mt-4 text-center text-sm text-red-600 font-medium">{error}</p>
        )}
      </div>
    </div>
  );
}
