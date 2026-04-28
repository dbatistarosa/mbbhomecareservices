import Link from "next/link";

const services = [
  "Personal Care",
  "Companionship",
  "Meal Preparation",
  "Medication Reminders",
  "Light Housekeeping",
  "Alzheimer's & Dementia Support",
  "Respite Care",
  "Hospice Support",
  "Live-in & Overnight Care",
];

export default function Footer() {
  return (
    <footer className="bg-violet-950 text-violet-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-pink-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">MBB</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">MBB Homecare Services</p>
                <p className="text-violet-400 text-xs">West Palm Beach, FL</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Licensed non-medical nurse registry and APD approved provider. Compassionate, personalized
              care for seniors, veterans, and individuals with disabilities.
            </p>
            <div className="flex items-center gap-2 text-pink-400 font-medium text-sm mb-4">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Care Available 24/7
            </div>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/Mbbhomecareservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-violet-800 hover:bg-violet-700 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/mbbhomecare/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-violet-800 hover:bg-violet-700 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Our Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Book a Consultation", href: "/booking" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-pink-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-violet-400 text-xs uppercase tracking-wide mb-1">Address</p>
                <p className="leading-relaxed">
                  801 Northpoint Parkway, Suite 4<br />
                  West Palm Beach, FL 33407
                </p>
              </div>
              <div>
                <p className="text-violet-400 text-xs uppercase tracking-wide mb-1">Phone</p>
                <a href="tel:5618231442" className="hover:text-pink-400 transition-colors block">
                  (561) 823-1442
                </a>
                <a href="tel:5618233539" className="hover:text-pink-400 transition-colors block">
                  (561) 823-3539
                </a>
              </div>
              <div>
                <p className="text-violet-400 text-xs uppercase tracking-wide mb-1">Office Hours</p>
                <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
                <p className="text-pink-400 text-xs mt-0.5">Care services available 24/7</p>
              </div>
              <div>
                <p className="text-violet-400 text-xs uppercase tracking-wide mb-1">Service Area</p>
                <p>Palm Beach County</p>
                <p>St. Lucie County</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-violet-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-violet-500">
            © {new Date().getFullYear()} MBB Homecare Services, LLC. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-violet-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-600" />
              Licensed Nurse Registry
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-600" />
              APD Approved Provider
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-600" />
              BBB Accredited A-Rating
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
