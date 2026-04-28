const groups = [
  {
    icon: "👴",
    title: "Seniors",
    description:
      "We help older adults maintain their independence and quality of life at home. Our caregivers provide the support needed to age gracefully in familiar surroundings, surrounded by family and community.",
    highlights: [
      "Daily living assistance",
      "Fall prevention support",
      "Social engagement",
      "Grocery & errand help",
    ],
  },
  {
    icon: "🎖️",
    title: "Veterans",
    description:
      "Our nation's heroes deserve exceptional care. MBB Homecare Services is honored to serve veterans with dedicated caregivers who understand the unique needs and lifestyle adjustments that come with service.",
    highlights: [
      "VA benefit assistance guidance",
      "Flexible scheduling",
      "Respectful, structured care",
      "Companion support",
    ],
  },
  {
    icon: "♿",
    title: "Individuals with Disabilities",
    description:
      "As an APD (Agency for Persons with Disabilities) approved provider, we specialize in personalized care plans that empower individuals with disabilities to live as independently as possible.",
    highlights: [
      "APD approved provider",
      "Individualized care plans",
      "Daily living skills support",
      "Community integration",
    ],
  },
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Who We Serve
          </p>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Care for Every Journey
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Every client has a unique story. We build care plans that honor
            individual needs, preferences, and goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((group, i) => (
            <div
              key={group.title}
              className={`rounded-3xl p-8 ${
                i === 1
                  ? "bg-sky-700 text-white"
                  : "bg-white border border-slate-100 shadow-sm"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${
                  i === 1 ? "bg-sky-600" : "bg-sky-50"
                }`}
              >
                {group.icon}
              </div>
              <h3
                className={`text-2xl font-bold mb-3 ${
                  i === 1 ? "text-white" : "text-slate-900"
                }`}
              >
                {group.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  i === 1 ? "text-sky-100" : "text-slate-500"
                }`}
              >
                {group.description}
              </p>
              <ul className="space-y-2">
                {group.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        i === 1 ? "bg-sky-500" : "bg-sky-100"
                      }`}
                    >
                      <svg
                        className={`w-3 h-3 ${
                          i === 1 ? "text-white" : "text-sky-600"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        i === 1 ? "text-sky-50" : "text-slate-700"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
