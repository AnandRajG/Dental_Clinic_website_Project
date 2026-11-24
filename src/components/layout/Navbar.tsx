"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Sparkles,
  Calendar,
  ShieldCheck,
  Smile,
  Activity,
  Anchor,
  SunMedium,
  Grid,
  EyeOff,
  Shield,
  HeartHandshake,
  Zap,
  Flame,
} from "lucide-react";
import { TREATMENTS } from "@/data/treatments";

const treatmentIcons: Record<string, React.ElementType> = {
  "general-dentistry": ShieldCheck,
  "teeth-cleaning": Sparkles,
  "root-canal-treatment": Activity,
  "dental-implants": Anchor,
  "teeth-whitening": SunMedium,
  "braces-orthodontics": Grid,
  "clear-aligners": EyeOff,
  "cosmetic-dentistry": Smile,
  "crowns-bridges": Shield,
  "pediatric-dentistry": HeartHandshake,
  "wisdom-tooth-removal": Zap,
  "gum-treatment": Flame,
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Doctors", href: "/doctors" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-border/80"
          : "bg-white border-b border-brand-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" onClick={closeAllMenus} className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-teal to-brand-teal-dark flex items-center justify-center text-white shadow-md shadow-brand-teal/20 group-hover:scale-105 transition-transform">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="w-6 h-6 fill-current shrink-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C8.5 2 6 4.5 6 7.5c0 2.2 1.2 4.1 2.2 5.8 1.1 1.9 2.1 3.9 1.8 6.7-.1 1 .7 1.8 1.7 1.8.8 0 1.5-.6 1.6-1.4.3-2.1.8-3.4 1.7-4.4.9 1 1.4 2.3 1.7 4.4.1.8.8 1.4 1.6 1.4 1 0 1.8-.8 1.7-1.8-.3-2.8.7-4.8 1.8-6.7 1-1.7 2.2-3.6 2.2-5.8C22 4.5 19.5 2 12 2z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-brand-navy">
                AURA<span className="text-brand-teal font-extrabold ml-1">DENTAL</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-muted -mt-1">
                Studio & Specialist Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              onClick={closeAllMenus}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/"
                  ? "text-brand-teal bg-brand-aqua/50"
                  : "text-brand-navy hover:text-brand-teal hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            {/* Treatments Mega-Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-brand-teal bg-brand-aqua/50"
                    : "text-brand-navy hover:text-brand-teal hover:bg-slate-50"
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Treatments</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-brand-teal" : ""
                  }`}
                />
              </button>

              {/* Treatments Mega-Menu */}
              {servicesDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[720px] max-w-[90vw] animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white rounded-2xl shadow-xl border border-brand-border p-5 grid grid-cols-2 gap-3">
                    <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                        Our 12 Clinical Treatments
                      </span>
                      <Link
                        href="/services"
                        onClick={closeAllMenus}
                        className="text-xs font-semibold text-brand-teal hover:underline flex items-center gap-1"
                      >
                        <span>View All Treatments</span>
                        <span>→</span>
                      </Link>
                    </div>

                    {TREATMENTS.map((item) => {
                      const Icon = treatmentIcons[item.slug] || Sparkles;
                      return (
                        <Link
                          key={item.id}
                          href={`/services/${item.slug}`}
                          onClick={closeAllMenus}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-aqua/40 transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-brand-aqua text-brand-teal flex items-center justify-center shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-brand-navy group-hover:text-brand-teal transition-colors">
                              {item.title}
                            </span>
                            <span className="text-xs text-brand-muted line-clamp-1">
                              {item.shortDescription}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeAllMenus}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === link.href
                    ? "text-brand-teal bg-brand-aqua/50"
                    : "text-brand-navy hover:text-brand-teal hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+18002872336"
              className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-brand-navy hover:text-brand-teal transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-teal" />
              <span>(800) 287-2336</span>
            </a>
            <Link
              href="/book-appointment"
              onClick={closeAllMenus}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-teal text-white text-sm font-semibold shadow-md shadow-brand-teal/20 hover:bg-brand-teal-dark active:scale-95 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/book-appointment"
              onClick={closeAllMenus}
              className="p-2 rounded-full bg-brand-teal text-white hover:bg-brand-teal-dark transition-colors"
              aria-label="Book appointment"
            >
              <Calendar className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-teal"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-brand-border bg-white max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              onClick={closeAllMenus}
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                pathname === "/" ? "bg-brand-aqua text-brand-teal" : "text-brand-navy"
              }`}
            >
              Home
            </Link>

            <Link
              href="/services"
              onClick={closeAllMenus}
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                pathname === "/services" ? "bg-brand-aqua text-brand-teal" : "text-brand-navy"
              }`}
            >
              All Treatments (12)
            </Link>

            {/* Mobile Treatment Sub-links Accordion */}
            <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-brand-aqua ml-3 my-1">
              {TREATMENTS.map((item) => (
                <Link
                  key={item.id}
                  href={`/services/${item.slug}`}
                  onClick={closeAllMenus}
                  className="block px-2 py-1.5 text-sm text-brand-navy hover:text-brand-teal font-medium"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeAllMenus}
                className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                  pathname === link.href ? "bg-brand-aqua text-brand-teal" : "text-brand-navy"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:+18002872336"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-brand-border text-brand-navy font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-brand-teal" />
                <span>Call Clinic: (800) 287-2336</span>
              </a>
              <Link
                href="/book-appointment"
                onClick={closeAllMenus}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-teal text-white font-semibold text-sm shadow-md shadow-brand-teal/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
