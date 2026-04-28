const services = [
  {
    icon: "🛁",
    title: "Personal Care",
    description:
      "Bathing, grooming, dressing, and personal hygiene assistance delivered with dignity and respect.",
  },
  {
    icon: "🤝",
    title: "Companionship",
    description:
      "Meaningful social interaction, activities, and emotional support to combat isolation and loneliness.",
  },
  {
    icon: "🍽️",
    title: "Meal Preparation",
    description:
      "Nutritious, home-cooked meals planned around dietary needs and personal preferences.",
  },
  {
    icon: "💊",
    title: "Medication Reminders",
    description:
      "Timely reminders to ensure medications are taken correctly and on schedule.",
  },
  {
    icon: "🏡",
    title: "Light Housekeeping",
    description:
      "Laundry, vacuuming, dusting, and general tidying to maintain a clean, safe home environment.",
  },
  {
    icon: "🧠",
    title: "Alzheimer's & Dementia Support",
    description:
      "Specialized, patient-centered care for individuals with cognitive conditions, tailored to each stage.",
  },
  {
    icon: "💆",
    title: "Respite Care",
    description:
      "Temporary relief for family caregivers — giving you time to rest while your loved one is in capable hands.",
  },
  {
    icon: "🕊️",
    title: "Hospice Support",
    description:
      "Compassionate end-of-life care that prioritizes comfort, dignity, and quality time with family.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Our Care Services
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Tailored support plans designed around each client&apos;s unique
            needs — from a few hours a week to around-the-clock care.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-slate-50 hover:bg-sky-700 border border-slate-100 hover:border-sky-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-900/15 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-sky-600 shadow-sm flex items-center justify-center text-2xl mb-4 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-semibold text-slate-900 group-hover:text-white mb-2 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-500 group-hover:text-sky-100 leading-relaxed transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-slate-500 mb-4">
            Not sure which service is right for you?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky-700 hover:bg-sky-600 text-white font-semibold transition-all shadow-md"
          >
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
