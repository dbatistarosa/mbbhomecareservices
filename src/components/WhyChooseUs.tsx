const reasons = [
  {
    number: "01",
    title: "Personalized Care Plans",
    description:
      "Every care plan is custom-built around your unique needs, preferences, and daily routines. We never use a generic approach.",
  },
  {
    number: "02",
    title: "Vetted, Trained Caregivers",
    description:
      "Every caregiver is thoroughly screened, licensed, insured, and undergoes regular training to ensure the highest quality care.",
  },
  {
    number: "03",
    title: "Available Around the Clock",
    description:
      "We're here when you need us — days, nights, weekends, and holidays. Our 24/7 availability means no one is ever left without support.",
  },
  {
    number: "04",
    title: "Licensed & APD Certified",
    description:
      "We operate as a licensed non-medical nurse registry and are an approved APD provider, meeting Florida's rigorous care standards.",
  },
  {
    number: "05",
    title: "Locally Owned & Operated",
    description:
      "We're your neighbors — deeply rooted in the West Palm Beach community with a genuine investment in the people we serve.",
  },
  {
    number: "06",
    title: "100+ Years of Experience",
    description:
      "Our team of healthcare professionals brings over a century of combined experience to every care situation we encounter.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sky-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Why Choose Us
          </p>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
            The MBB Difference
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Choosing a care provider is one of the most important decisions your
            family will make. Here&apos;s what sets us apart.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-sky-500 font-bold text-4xl mb-4 group-hover:text-sky-400 transition-colors">
                {reason.number}
              </p>
              <h3 className="text-white font-semibold text-lg mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 bg-gradient-to-r from-sky-600 to-sky-700 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-bold mb-2">
              Ready to get started?
            </h3>
            <p className="text-sky-100 leading-relaxed">
              Call us today or send a message — we'll respond within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <a
              href="tel:5618231442"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sky-700 font-semibold text-sm hover:bg-sky-50 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (561) 823-1442
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-800 text-white font-semibold text-sm hover:bg-sky-900 transition-colors border border-sky-500/30"
            >
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
