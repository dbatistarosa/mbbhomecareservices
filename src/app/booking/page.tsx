import type { Metadata } from "next";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule a free in-home care consultation with MBB Homecare Services. Tell us about your needs and we'll build a personalized care plan.",
};

export default function BookingPage() {
  return (
    <>
      {/* ── Page Hero ────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-violet-950 via-purple-900 to-pink-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-600/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="text-violet-300 hover:text-white text-sm transition-colors">Home</Link>
              <span className="text-violet-500">/</span>
              <span className="text-white text-sm font-medium">Book a Consultation</span>
            </div>
            <h1 className="text-5xl font-bold text-white tracking-tight mb-5">
              Book a Free Consultation
            </h1>
            <p className="text-violet-200 text-lg leading-relaxed">
              Tell us about your loved one&apos;s needs and we&apos;ll build a personalized care plan.
              Our team will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── Booking Form ─────────────────────────────────────── */}
      <section className="py-16 bg-violet-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <BookingForm />
        </div>
      </section>

      {/* ── Why Book With Us ─────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: "🆓", title: "Always Free", desc: "Consultations are completely free with no obligation." },
              { icon: "⚡", title: "Fast Response", desc: "We'll contact you within 24 hours of your request." },
              { icon: "📋", title: "Custom Plan", desc: "Your care plan is tailored specifically to your loved one." },
            ].map((b) => (
              <div key={b.title}>
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-violet-900 mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
