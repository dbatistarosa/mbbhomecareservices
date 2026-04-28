import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MBB Homecare Services — founded by nurse Marjorie B. Bazile, serving West Palm Beach with compassionate, personalized in-home care since 2021.",
};

const credentials = [
  {
    icon: "📋",
    title: "Licensed Nurse Registry",
    desc: "Fully licensed non-medical nurse registry operating under Florida state regulations (LID 550995).",
  },
  {
    icon: "✅",
    title: "APD Approved Provider",
    desc: "Recognized by the Agency for Persons with Disabilities to deliver quality, person-centered care.",
  },
  {
    icon: "⭐",
    title: "BBB Accredited — A Rating",
    desc: "Accredited by the Better Business Bureau since July 2025 with an A rating.",
  },
  {
    icon: "🏅",
    title: "CareScout Quality Network",
    desc: "Verified member of the CareScout Quality Network — meeting rigorous standards for licensure, staffing, and financial health.",
  },
  {
    icon: "🛡️",
    title: "Licensed & Insured Caregivers",
    desc: "Every caregiver is thoroughly screened, licensed, insured, and undergoes continuous training.",
  },
  {
    icon: "📚",
    title: "Continuous Education",
    desc: "Our team stays current with the latest medical practices and care techniques through regular training.",
  },
];

const values = [
  {
    icon: "💜",
    title: "Compassion",
    desc: "We genuinely care about every person we serve. Empathy is at the heart of every interaction.",
  },
  {
    icon: "🤝",
    title: "Dignity",
    desc: "We honor each client's individuality, privacy, and right to make their own choices.",
  },
  {
    icon: "✨",
    title: "Excellence",
    desc: "We hold ourselves to the highest standards — for our clients, their families, and our community.",
  },
  {
    icon: "🔒",
    title: "Reliability",
    desc: "When families count on us, we show up. Our 24/7 availability means no one is ever without support.",
  },
];

export default function AboutPage() {
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
              <span className="text-white text-sm font-medium">About Us</span>
            </div>
            <h1 className="text-5xl font-bold text-white tracking-tight mb-5">
              About MBB Homecare Services
            </h1>
            <p className="text-violet-200 text-lg leading-relaxed">
              Founded by a nurse who understands what compassionate care truly means —
              MBB Homecare Services has been serving West Palm Beach families since 2021.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual block */}
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-violet-800 to-pink-800 p-10 min-h-[440px] flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl" />
                <div className="relative">
                  <p className="text-violet-300 text-sm font-semibold uppercase tracking-wider mb-4">Our Mission</p>
                  <p className="text-white text-xl font-medium leading-relaxed">
                    &ldquo;Providing services and support that allow clients to remain as independent as possible
                    in their homes or residences while enabling a quality of life for their clients and families.&rdquo;
                  </p>
                </div>
                <div className="relative pt-8 border-t border-white/10">
                  <p className="text-violet-300 text-sm font-semibold uppercase tracking-wider mb-3">Our Vision</p>
                  <p className="text-violet-100 leading-relaxed">
                    To assist clients with maintaining their independence and quality of life in their own home —
                    on their own terms, surrounded by everything that matters to them.
                  </p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-5 border border-violet-100">
                <p className="text-violet-900 font-bold text-sm">Locally Owned</p>
                <p className="text-slate-500 text-xs">West Palm Beach, FL</p>
                <p className="text-pink-600 text-xs font-medium mt-1">Est. 2021</p>
              </div>
            </div>

            {/* Story content */}
            <div>
              <p className="text-pink-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
              <h2 className="text-4xl font-bold text-violet-900 tracking-tight mb-6">
                Care Led by a Nurse Who Truly Understands
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-5">
                MBB Homecare Services was founded by <strong className="text-violet-900">Marjorie B. Bazile</strong>,
                a licensed nurse whose passion for patient well-being drove her to create a home care agency
                built on real clinical expertise and genuine compassion.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                With over <strong>100 years of combined experience</strong> across our healthcare team, we understand
                that true care goes beyond completing daily tasks — it&apos;s about building relationships, honoring
                individuality, and empowering people to live fully.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We believe everyone should have access to high-quality home health care services. That&apos;s why
                we offer flexible, affordable care plans designed to meet the unique needs and budgets of the
                families we serve across <strong>Palm Beach and St. Lucie Counties</strong>.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2021", label: "Founded" },
                  { value: "100+", label: "Yrs Combined Exp." },
                  { value: "24/7", label: "Care Availability" },
                  { value: "5★", label: "Community Rating" },
                ].map((s) => (
                  <div key={s.label} className="bg-violet-50 rounded-xl p-4">
                    <p className="text-2xl font-bold text-violet-800 mb-1">{s.value}</p>
                    <p className="text-sm text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ───────────────────────────────────────── */}
      <section className="py-24 bg-violet-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-pink-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Values</p>
            <h2 className="text-4xl font-bold text-violet-900 tracking-tight mb-4">
              What Guides Everything We Do
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-violet-100 rounded-2xl p-7 text-center hover:shadow-md hover:border-violet-200 transition-all">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-violet-900 text-lg mb-3">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Credentials ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-pink-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Certifications & Credentials
            </p>
            <h2 className="text-4xl font-bold text-violet-900 tracking-tight mb-4">
              Licensed, Verified, and Trusted
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              We meet Florida&apos;s rigorous care standards and maintain memberships in the industry&apos;s
              leading quality networks.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((c) => (
              <div key={c.title} className="flex items-start gap-4 p-6 bg-violet-50 border border-violet-100 rounded-2xl">
                <span className="text-3xl flex-shrink-0">{c.icon}</span>
                <div>
                  <h3 className="font-bold text-violet-900 mb-2">{c.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ─────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-violet-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-pink-300 font-semibold text-sm uppercase tracking-wider mb-3">Service Area</p>
              <h2 className="text-3xl font-bold text-white mb-5">Proudly Serving South Florida</h2>
              <p className="text-violet-200 leading-relaxed mb-8">
                We provide compassionate in-home care services throughout Palm Beach and St. Lucie Counties,
                with our office conveniently located in West Palm Beach.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { area: "Palm Beach County", primary: true },
                  { area: "St. Lucie County", primary: true },
                  { area: "West Palm Beach", primary: false },
                  { area: "Surrounding Communities", primary: false },
                ].map((a) => (
                  <div key={a.area} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${a.primary ? "bg-pink-400" : "bg-violet-400"}`} />
                    <span className="text-white text-sm font-medium">{a.area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-8">
              <p className="text-violet-300 text-sm mb-4">Office Location</p>
              <p className="text-white font-bold text-xl mb-2">801 Northpoint Parkway, Suite 4</p>
              <p className="text-violet-200 mb-6">West Palm Beach, FL 33407</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-violet-300">Office Hours</span>
                  <span className="text-white font-medium">Mon–Fri 9AM–6PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-violet-300">Care Services</span>
                  <span className="text-pink-300 font-medium">24/7 Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-violet-300">Phone</span>
                  <a href="tel:5618231442" className="text-white font-medium hover:text-pink-300 transition-colors">
                    (561) 823-1442
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-violet-900 mb-4">
            Ready to Experience the MBB Difference?
          </h3>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Schedule a free consultation and let us show you how we can help your loved one
            live more independently and comfortably at home.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-700 to-pink-700 hover:from-violet-600 hover:to-pink-600 text-white font-semibold transition-all shadow-lg shadow-violet-900/20"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
