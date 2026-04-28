import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive in-home care services in West Palm Beach — personal care, companionship, meal preparation, medication reminders, Alzheimer's support, respite care, and more.",
};

const services = [
  {
    icon: "🛁",
    title: "Personal Care",
    category: "Daily Living",
    desc: "Assistance with bathing, dressing, grooming, and personal hygiene delivered with dignity and respect. We also provide toileting and incontinence care while maintaining your loved one's comfort.",
    includes: [
      "Bathing & showering assistance",
      "Dressing & grooming",
      "Toileting & hygiene care",
      "Incontinence support",
      "Oral hygiene assistance",
    ],
  },
  {
    icon: "🚶",
    title: "Mobility Assistance",
    category: "Daily Living",
    desc: "Assistance with walking, standing, transfers, and movement to promote independence and prevent falls. Our caregivers are trained to safely assist clients with mobility challenges.",
    includes: [
      "Walking & ambulation support",
      "Transfer assistance",
      "Fall prevention",
      "Exercise & movement support",
      "Wheelchair assistance",
    ],
  },
  {
    icon: "🤝",
    title: "Companionship",
    category: "Social & Emotional",
    desc: "Engaging conversation and social interaction to promote emotional well-being and reduce loneliness. Companionship is key — we strive to develop a true caring relationship with every client.",
    includes: [
      "Meaningful conversation",
      "Activity participation",
      "Reading & games",
      "Emotional support",
      "Accompaniment to appointments",
    ],
  },
  {
    icon: "🍽️",
    title: "Meal Preparation",
    category: "Household",
    desc: "Nutritious, home-cooked meals planned around your loved one's dietary needs, restrictions, and personal preferences. We also assist with mealtime — setting up, cutting food, and feeding as needed.",
    includes: [
      "Meal planning & preparation",
      "Dietary restriction adherence",
      "Mealtime setup & assistance",
      "Feeding assistance",
      "Grocery shopping",
    ],
  },
  {
    icon: "💊",
    title: "Medication Reminders",
    category: "Health Support",
    desc: "Timely reminders to ensure medications are taken correctly and on schedule. Our non-medical caregivers provide reminders — not administration — helping clients stay on track with their prescribed regimens.",
    includes: [
      "Scheduled medication reminders",
      "Medication organization support",
      "Prescription pick-up",
      "Communication with family",
      "Routine tracking",
    ],
  },
  {
    icon: "🏡",
    title: "Light Housekeeping",
    category: "Household",
    desc: "Maintaining a clean, safe, and organized home environment. Our caregivers help with everyday household tasks so your loved one can focus on living comfortably.",
    includes: [
      "Vacuuming & dusting",
      "Laundry & folding",
      "Kitchen & bathroom cleaning",
      "Trash removal",
      "General tidying",
    ],
  },
  {
    icon: "🚗",
    title: "Transportation & Errands",
    category: "Household",
    desc: "Assistance with grocery shopping, pharmacy visits, medical appointments, and other essential errands. We make sure clients can get where they need to go safely and on time.",
    includes: [
      "Medical appointment transport",
      "Grocery shopping",
      "Pharmacy visits",
      "Community outings",
      "Essential errand running",
    ],
  },
  {
    icon: "🧠",
    title: "Alzheimer's & Dementia Support",
    category: "Specialized Care",
    desc: "Specialized, patient-centered care for individuals with cognitive conditions. Our caregivers are trained to provide consistent, structured support tailored to each stage of the disease.",
    includes: [
      "Routine & structure support",
      "Memory engagement activities",
      "Wandering safety measures",
      "Behavioral support",
      "Family communication",
    ],
  },
  {
    icon: "💆",
    title: "Respite Care",
    category: "Specialized Care",
    desc: "Temporary relief for family caregivers who need a break. We step in so you can rest, recharge, or handle other responsibilities — knowing your loved one is in caring, capable hands.",
    includes: [
      "Short-term coverage",
      "Flexible scheduling",
      "All daily living assistance",
      "Emergency respite",
      "Weekend & holiday care",
    ],
  },
  {
    icon: "🕊️",
    title: "Hospice Support",
    category: "Specialized Care",
    desc: "Compassionate support for individuals and families navigating end-of-life care. We focus on comfort, dignity, and maximizing quality of life during this deeply personal time.",
    includes: [
      "Comfort-focused personal care",
      "Companionship & presence",
      "Family support assistance",
      "Coordination with hospice teams",
      "Dignified, gentle care",
    ],
  },
];

const scheduleOptions = [
  { icon: "🌅", title: "Hourly Care", desc: "A few hours per day for help with specific tasks or companionship." },
  { icon: "☀️", title: "Part-Time Care", desc: "Regular visits on a schedule that fits your lifestyle." },
  { icon: "🌙", title: "Overnight Care", desc: "Nighttime supervision and assistance for safety and peace of mind." },
  { icon: "🏠", title: "Live-In Care", desc: "A caregiver living in the home for continuous around-the-clock support." },
  { icon: "🕐", title: "24/7 Care", desc: "Full-time rotating caregivers providing uninterrupted support." },
];

const categoryColors: Record<string, string> = {
  "Daily Living": "bg-violet-100 text-violet-700",
  "Social & Emotional": "bg-pink-100 text-pink-700",
  "Household": "bg-purple-100 text-purple-700",
  "Health Support": "bg-rose-100 text-rose-700",
  "Specialized Care": "bg-fuchsia-100 text-fuchsia-700",
};

export default function ServicesPage() {
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
              <span className="text-white text-sm font-medium">Services</span>
            </div>
            <h1 className="text-5xl font-bold text-white tracking-tight mb-5">
              Our Care Services
            </h1>
            <p className="text-violet-200 text-lg leading-relaxed mb-8">
              Comprehensive, compassionate care tailored to each individual. Every service is
              delivered by trained, licensed caregivers who genuinely care.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-700 to-pink-600 hover:from-pink-600 hover:to-pink-500 text-white font-semibold transition-all shadow-lg"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-pink-600 font-semibold text-sm uppercase tracking-wider mb-3">
              What We Offer
            </p>
            <h2 className="text-4xl font-bold text-violet-900 tracking-tight mb-4">
              Services Built Around Your Needs
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              We understand that each client has unique needs. Our flexible care plans can be
              customized to meet specific requirements — and adjusted as needs change over time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="border border-violet-100 hover:border-violet-200 rounded-2xl p-7 transition-all hover:shadow-md group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-violet-50 group-hover:bg-violet-100 flex items-center justify-center text-2xl flex-shrink-0 transition-colors">
                    {s.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-violet-900 text-lg">{s.title}</h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[s.category]}`}>
                        {s.category}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <div className="ml-[4.5rem]">
                  <p className="text-xs text-violet-500 uppercase tracking-wide font-semibold mb-2">Includes</p>
                  <ul className="grid grid-cols-2 gap-1.5">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scheduling Options ───────────────────────────────── */}
      <section className="py-24 bg-violet-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-pink-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Flexible Scheduling
            </p>
            <h2 className="text-4xl font-bold text-violet-900 tracking-tight mb-4">
              Care on Your Schedule
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              From a few hours a week to full-time around-the-clock care — we adapt to what
              works best for your family.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {scheduleOptions.map((o) => (
              <div key={o.title} className="bg-white border border-violet-100 rounded-2xl p-6 text-center hover:shadow-md hover:border-violet-200 transition-all">
                <div className="text-3xl mb-3">{o.icon}</div>
                <h3 className="font-bold text-violet-900 mb-2">{o.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-pink-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Getting Started
            </p>
            <h2 className="text-4xl font-bold text-violet-900 tracking-tight mb-4">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Book a Consultation", desc: "Call us or fill out our online booking form. We'll reach out within 24 hours." },
              { step: "02", title: "Free Assessment", desc: "We learn about your loved one's needs, preferences, and daily routine." },
              { step: "03", title: "Build a Care Plan", desc: "We design a personalized, flexible care plan tailored to your specific situation." },
              { step: "04", title: "Care Begins", desc: "Your matched caregiver starts providing professional, compassionate care." },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-700 to-pink-700 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>
                <h3 className="font-bold text-violet-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-violet-900 to-pink-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-5">
            Not Sure Which Service Is Right?
          </h2>
          <p className="text-violet-200 text-lg leading-relaxed mb-10">
            Our team will guide you through the options and help you choose the right level
            of care. Contact us today — consultations are always free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-violet-900 font-semibold hover:bg-violet-50 transition-colors"
            >
              Book a Free Consultation
            </Link>
            <a
              href="tel:5618231442"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              (561) 823-1442
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
