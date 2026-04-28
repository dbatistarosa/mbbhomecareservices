import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-900"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-950 via-slate-900 to-sky-900" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-600/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-300 text-sm font-medium">
                Available 24/7 — West Palm Beach, FL
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Compassionate Care{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
                In Your Home
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl">
              MBB Homecare Services is a licensed non-medical nurse registry and
              APD approved provider dedicated to helping seniors, veterans, and
              individuals with disabilities live independently and comfortably.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-semibold text-base transition-all shadow-lg shadow-sky-900/40 hover:shadow-sky-700/40 hover:-translate-y-0.5"
              >
                Get Started Today
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all"
              >
                Our Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {[
                { value: "100+", label: "Years Combined Experience" },
                { value: "24/7", label: "Care Availability" },
                { value: "APD", label: "Approved Provider" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-400 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating cards */}
          <div className="hidden lg:block relative">
            <div className="relative space-y-4">
              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 ml-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center text-2xl">
                    🏠
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Personal Care Services
                    </p>
                    <p className="text-slate-400 text-sm">
                      Dignity-first approach
                    </p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Bathing, grooming, dressing, and personal hygiene assistance
                  delivered with the utmost respect and compassion.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-sky-600/20 backdrop-blur-sm border border-sky-500/20 rounded-2xl p-6 mr-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center text-2xl">
                    🤝
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      Companionship Care
                    </p>
                    <p className="text-slate-400 text-sm">
                      Caring relationships
                    </p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Meaningful companionship that combats loneliness and supports
                  emotional well-being at home.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 ml-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">
                      Licensed &amp; Insured Caregivers
                    </p>
                    <p className="text-slate-400 text-xs">
                      All caregivers are thoroughly vetted, licensed, and
                      undergo continuous training.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -right-8 -top-8 w-64 h-64 border border-sky-500/10 rounded-full" />
            <div className="absolute -right-4 -top-4 w-48 h-48 border border-sky-500/10 rounded-full" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  );
}
