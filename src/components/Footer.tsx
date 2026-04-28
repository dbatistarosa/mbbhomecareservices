const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Personal Care",
  "Companionship",
  "Meal Preparation",
  "Medication Reminders",
  "Light Housekeeping",
  "Alzheimer's & Dementia Support",
  "Respite Care",
  "Hospice Support",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-sky-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">MBB</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  MBB Homecare Services
                </p>
                <p className="text-slate-500 text-xs">West Palm Beach, FL</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Licensed non-medical nurse registry and APD approved provider
              dedicated to compassionate, dignified in-home care.
            </p>
            <div className="flex items-center gap-2 text-sky-400 font-medium text-sm">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available 24/7
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm hover:text-sky-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <p className="leading-relaxed">
                801 Northpoint Parkway, Suite 4
                <br />
                West Palm Beach, FL 33407
              </p>
              <div>
                <a
                  href="tel:5618231442"
                  className="hover:text-sky-400 transition-colors block"
                >
                  (561) 823-1442
                </a>
                <a
                  href="tel:5618233539"
                  className="hover:text-sky-400 transition-colors block"
                >
                  (561) 823-3539
                </a>
              </div>
              <a
                href="mailto:info@mbbhomecareservices.com"
                className="hover:text-sky-400 transition-colors block"
              >
                info@mbbhomecareservices.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} MBB Homecare Services, LLC. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600">
              Licensed Nurse Registry · APD Approved Provider
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
