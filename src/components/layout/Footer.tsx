import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import { TREATMENTS } from "@/data/treatments";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Clinic Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-teal flex items-center justify-center text-white shadow-md">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="w-5 h-5 fill-current shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C8.5 2 6 4.5 6 7.5c0 2.2 1.2 4.1 2.2 5.8 1.1 1.9 2.1 3.9 1.8 6.7-.1 1 .7 1.8 1.7 1.8.8 0 1.5-.6 1.6-1.4.3-2.1.8-3.4 1.7-4.4.9 1 1.4 2.3 1.7 4.4.1.8.8 1.4 1.6 1.4 1 0 1.8-.8 1.7-1.8-.3-2.8.7-4.8 1.8-6.7 1-1.7 2.2-3.6 2.2-5.8C22 4.5 19.5 2 12 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white">
                  AURA<span className="text-brand-mint ml-1">DENTAL</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400">
                  Premium Dental Healthcare
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Setting international benchmarks for painless, technologically advanced, and
              compassionate dental care in a boutique clinical environment.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-mint shrink-0" />
                <span>450 Lexington Avenue, Suite 1400, New York, NY 10017</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-mint shrink-0" />
                <a href="tel:+18002872336" className="hover:text-white transition-colors">
                  +1 (800) 287-2336 (Toll-Free & Emergency)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-mint shrink-0" />
                <a href="mailto:care@auradental.com" className="hover:text-white transition-colors">
                  care@auradental.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-mint shrink-0" />
                <span>Mon – Sat: 8:00 AM – 8:00 PM (Emergency 24/7 on call)</span>
              </div>
            </div>

            {/* Accreditations Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-mint" />
                <span>ADA Member</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-mint" />
                <span>ISO 9001:2015</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-mint" />
                <span>GBT Certified</span>
              </span>
            </div>
          </div>

          {/* Column 2: Clinical Treatments (1 - 6) */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-mint mb-4">
              Core Treatments
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {TREATMENTS.slice(0, 6).map((treatment) => (
                <li key={treatment.id}>
                  <Link
                    href={`/services/${treatment.slug}`}
                    className="hover:text-brand-mint transition-colors flex items-center justify-between group"
                  >
                    <span>{treatment.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Clinical Treatments (7 - 12) */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-mint mb-4">
              Specialized Care
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {TREATMENTS.slice(6, 12).map((treatment) => (
                <li key={treatment.id}>
                  <Link
                    href={`/services/${treatment.slug}`}
                    className="hover:text-brand-mint transition-colors flex items-center justify-between group"
                  >
                    <span>{treatment.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Patient Resources */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-mint mb-4">
              Patient Care
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-brand-mint transition-colors">
                  About Our Clinic
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-brand-mint transition-colors">
                  Meet Our Specialists
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="hover:text-brand-mint transition-colors">
                  Book an Appointment
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-brand-mint transition-colors">
                  Patient Reviews & Stories
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-brand-mint transition-colors">
                  Clinic Tour & Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-mint transition-colors">
                  Location & Directions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Aura Dental Studio. All rights reserved. Registered Healthcare Facility.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Patient Service</span>
            <span>Medical Ethics & Disclaimers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
