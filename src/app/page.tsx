import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MBB Homecare Services | Compassionate Care in West Palm Beach, FL",
  description:
    "Licensed non-medical nurse registry and APD approved provider serving seniors, veterans, and individuals with disabilities in Palm Beach & St. Lucie Counties. Available 24/7.",
};

const trustBadges = [
  { icon: "⭐", label: "BBB Accredited", sub: "A Rating" },
  { icon: "✅", label: "CareScout Quality", sub: "Network Member" },
  { icon: "🏛️", label: "APD Approved", sub: "Provider" },
  { icon: "📋", label: "Licensed Nurse", sub: "Registry FL" },
  { icon: "🕐", label: "Available", sub: "24/7" },
];

const featuredServices = [
  {
    icon: "🛁",
    title: "Personal Care",
    desc: "Bathing, dressing, grooming, and mobility assistance delivered with dignity and respect.",
  },
  {
    icon: "🤝",
    title: "Companionship",
    desc: "Engaging conversation and social interaction to promote emotional well-being and reduce loneliness.",
  },
  {
    icon: "🍽️",
    title: "Meal Preparation",
    desc: "Nutritious home-cooked meals planned around dietary needs and personal preferences.",
  },
  {
    icon: "🧠",
    title: "Alzheimer's & Dementia",
    desc: "Specialized, patient-centered care for individuals with cognitive conditions.",
  },
];

const testimonials = [
  {
    quote:
      "I have been truly happy with the service I have received from MBB Home care services agency.",
    author: "Maritza",
    role: "Client",
  },
  {
    quote:
      "The owner is a nurse and is truly compassionate about her clients. They give excellent care.",
    author: "Verified Reviewer",
    role: "Chamber of Commerce",
  },
  {
    quote:
      "I had an amazing experience with MBB HOMECARE SERVICES. Professional, reliable, and kind.",
    author: "Verified Client",
    role: "CareScout Review",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-violet-950">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-purple-900 to-pink-900" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-pink-600/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-800/20 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-8">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-violet-200 text-sm font-medium">
                  Serving Palm Beach & St. Lucie Counties
                </span>
              </div>

              <h1 className="text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight mb-6">
                Compassionate Care{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-pink-300">
                  In the Comfort
                </span>{" "}
                of Your Home
              </h1>

              <p className="text-lg text-violet-200 leading-relaxed mb-10 max-w-xl">
                MBB Homecare Services is a licensed non-medical nurse registry and APD
                approved provider dedicated to helping seniors, veterans, and individuals
                with disabilities live independently and with dignity — 24 hours a day,
                7 days a week.
              </p>

              <div className="flex flex-wrap gap-4 mb-14">
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-700 to-pink-600 hover:from-pink-600 hover:to-pink-500 text-white font-semibold transition-all shadow-lg shadow-pink-900/40 hover:-translate-y-0.5"
                >
                  Book a Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/25 text-white font-semibold hover:bg-white/10 transition-all"
                >
                  Explore Services
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                {[
                  { value: "100+", label: "Years Combined Experience" },
                  { value: "24/7", label: "Care Availability" },
                  { value: "A", label: "BBB Rating" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
                    <p className="text-sm text-violet-300 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — info cards */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-violet-600/30 flex items-center justify-center text-2xl">🏠</div>
                  <div>
                    <p className="text-white font-semibold">In-Home Care</p>
                    <p className="text-violet-300 text-sm">Personalized plans</p>
                  </div>
                </div>
                <p className="text-violet-200 text-sm leading-relaxed">
                  We build individualized care plans tailored to each client's unique needs,
                  preferences, and daily routines.
                </p>
              </div>

              <div className="bg-pink-900/30 backdrop-blur border border-pink-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-pink-600/30 flex items-center justify-center text-2xl">👩‍⚕️</div>
                  <div>
                    <p className="text-white font-semibold">Owner is a Nurse</p>
                    <p className="text-pink-300 text-sm">Clinically led care</p>
                  </div>
                </div>
                <p className="text-pink-100 text-sm leading-relaxed">
                  Founded by Marjorie B. Bazile, a licensed nurse who is truly compassionate
                  about her clients and the care they receive.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-violet-800/40 rounded-xl p-3 text-center">
                    <p className="text-white font-bold text-lg">APD</p>
                    <p className="text-violet-300 text-xs">Approved Provider</p>
                  </div>
                  <div className="bg-pink-800/40 rounded-xl p-3 text-center">
                    <p className="text-white font-bold text-lg">BBB ⭐</p>
                    <p className="text-pink-300 text-xs">Accredited A-Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-violet-400">
          <div className="w-px h-8 bg-gradient-to-b from-violet-400 to-transparent" />
        </div>
      </section>

      {/* ── Trust Badges ─────────────────────────────────────── */}
      <section className="bg-white border-b border-violet-100 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex items-center gap-2.5">
                <span className="text-xl">{b.icon}</span>
                <div>
                  <p className="font-semibold text-violet-900 text-sm leading-tight">{b.label}</p>
                  <p className="text-violet-400 text-xs">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Services ─────────────────────────────────── */}
      <section className="py-24 bg-violet-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-pink-600 font-semibold text-sm uppercase tracking-wider mb-3">
              What We Offer
            </p>
            <h2 className="text-4xl font-bold text-violet-900 tracking-tight mb-4">
              Care Services Built Around You
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Flexible care plans customized to meet the specific needs of each
              client — from a few hours a week to around-the-clock care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {featuredServices.map((s) => (
              <div
                key={s.title}
                className="group bg-white border border-violet-100 hover:border-violet-300 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-100"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-50 group-hover:bg-violet-100 flex items-center justify-center text-2xl mb-4 transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-violet-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-violet-800 hover:bg-violet-700 text-white font-semibold transition-colors"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Who We Serve ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-pink-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Who We Serve
            </p>
            <h2 className="text-4xl font-bold text-violet-900 tracking-tight mb-4">
              Care for Every Journey
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "👴",
                title: "Seniors",
                color: "violet",
                desc: "We help older adults maintain independence and quality of life at home. Our caregivers provide the support needed to age gracefully in familiar surroundings.",
                items: ["Daily living assistance", "Fall prevention", "Social engagement", "Grocery & errand help"],
              },
              {
                icon: "🎖️",
                title: "Veterans",
                color: "pink",
                desc: "Our nation's heroes deserve exceptional care. MBB Homecare Services is honored to serve veterans with dedicated caregivers who understand their unique needs.",
                items: ["Flexible scheduling", "Respectful structured care", "Companion support", "Transportation"],
              },
              {
                icon: "♿",
                title: "With Disabilities",
                color: "violet",
                desc: "As an APD approved provider, we specialize in personalized care plans that empower individuals with disabilities to live as independently as possible.",
                items: ["APD approved provider", "Individualized care plans", "Daily living skills", "Community integration"],
              },
            ].map((g, i) => (
              <div
                key={g.title}
                className={`rounded-3xl p-8 ${
                  i === 1
                    ? "bg-gradient-to-br from-violet-800 to-pink-800 text-white"
                    : "bg-violet-50 border border-violet-100"
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 ${i === 1 ? "bg-white/15" : "bg-white"}`}>
                  {g.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${i === 1 ? "text-white" : "text-violet-900"}`}>
                  {g.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 ${i === 1 ? "text-violet-100" : "text-slate-500"}`}>
                  {g.desc}
                </p>
                <ul className="space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${i === 1 ? "bg-white/20" : "bg-violet-100"}`}>
                        <svg className={`w-2.5 h-2.5 ${i === 1 ? "text-white" : "text-violet-700"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`text-sm font-medium ${i === 1 ? "text-violet-100" : "text-slate-700"}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-violet-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-800/30 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-pink-300 font-semibold text-sm uppercase tracking-wider mb-3">
              What Families Say
            </p>
            <h2 className="text-4xl font-bold text-white tracking-tight">
              Trusted by Our Community
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-7">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-pink-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.author}</p>
                  <p className="text-violet-300 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-violet-300 text-sm">
              Rated <strong className="text-white">5.0 stars</strong> from 11 reviewers on Chamber of Commerce
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-pink-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Get Started Today
          </p>
          <h2 className="text-4xl font-bold text-violet-900 tracking-tight mb-5">
            Your Loved One Deserves the Best Care
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation. We&apos;ll listen, understand your
            needs, and build a personalized care plan that puts your loved one first.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-700 to-pink-700 hover:from-violet-600 hover:to-pink-600 text-white font-semibold text-base transition-all shadow-xl shadow-violet-900/20 hover:-translate-y-0.5"
            >
              Book a Free Consultation
            </Link>
            <a
              href="tel:5618231442"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-violet-200 text-violet-800 font-semibold text-base hover:border-violet-400 hover:bg-violet-50 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (561) 823-1442
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
