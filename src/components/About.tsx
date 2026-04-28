const credentials = [
  {
    icon: "🏛️",
    title: "Licensed Nurse Registry",
    desc: "Fully licensed non-medical nurse registry operating under Florida state regulations.",
  },
  {
    icon: "✅",
    title: "APD Approved Provider",
    desc: "Recognized by the Agency for Persons with Disabilities to deliver quality care.",
  },
  {
    icon: "🛡️",
    title: "Licensed & Insured",
    desc: "All caregivers are thoroughly screened, licensed, and insured for your protection.",
  },
  {
    icon: "📚",
    title: "Continuous Training",
    desc: "Caregivers undergo regular training to stay current with best care practices.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-sky-800 to-slate-900 p-10 min-h-[480px] flex flex-col justify-between">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-600/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-600/20 rounded-full blur-3xl" />

              {/* Mission block */}
              <div className="relative">
                <p className="text-sky-400 text-sm font-semibold uppercase tracking-wider mb-4">
                  Our Mission
                </p>
                <p className="text-white text-xl font-medium leading-relaxed">
                  &ldquo;Providing services and support that allow clients to
                  remain as independent as possible in their homes while
                  enabling a quality of life for their clients and
                  families.&rdquo;
                </p>
              </div>

              {/* Vision block */}
              <div className="relative mt-8 pt-8 border-t border-white/10">
                <p className="text-sky-400 text-sm font-semibold uppercase tracking-wider mb-4">
                  Our Vision
                </p>
                <p className="text-slate-300 leading-relaxed">
                  To assist clients with maintaining their independence and
                  quality of life in their own home — on their own terms.
                </p>
              </div>

              {/* Bottom stat */}
              <div className="relative mt-8 flex items-center gap-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-white">100+</p>
                  <p className="text-sky-300 text-sm mt-1">
                    Years Combined Experience
                  </p>
                </div>
                <div className="h-12 w-px bg-white/20" />
                <div className="text-center">
                  <p className="text-4xl font-bold text-white">24/7</p>
                  <p className="text-sky-300 text-sm mt-1">
                    Always Available
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-xl">
                  ⭐
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">
                    Locally Owned
                  </p>
                  <p className="text-slate-500 text-xs">
                    West Palm Beach, FL
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-3">
              About Us
            </p>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">
              Healthcare Professionals <br />
              You Can Trust
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              MBB Homecare Services is a locally owned and operated agency run
              by dedicated healthcare professionals with over one hundred years
              of combined experience. We understand what it means to care for a
              loved one — because we&apos;ve been there ourselves.
            </p>
            <p className="text-slate-500 leading-relaxed mb-10">
              We believe that every person deserves to live with dignity,
              comfort, and independence. Our individualized care plans are
              designed around each client&apos;s specific needs, routines, and
              goals — not a one-size-fits-all approach.
            </p>

            {/* Credentials grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((c) => (
                <div
                  key={c.title}
                  className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl"
                >
                  <span className="text-2xl flex-shrink-0">{c.icon}</span>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-1">
                      {c.title}
                    </p>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
