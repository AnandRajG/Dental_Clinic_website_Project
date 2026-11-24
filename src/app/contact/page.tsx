"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Dental Enquiry",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit message");
      }

      setSuccessMessage(
        "Thank you! Your message has been received. Our clinical coordinator will contact you shortly."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Dental Enquiry",
        message: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please call the clinic directly.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-brand-warm py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-brand-muted mb-8">
          <Link href="/" className="hover:text-brand-teal transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-navy font-semibold">Contact & Location</span>
        </nav>

        <SectionHeader
          badge="Connect with Our Clinic"
          title="We Are Here to Answer Your Questions"
          description="Have a question about a treatment, dental insurance, or emergency tooth care? Reach out via form, direct phone, or WhatsApp."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
          {/* Left Contact Information Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-brand-border shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-brand-navy">Clinic Information</h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-aqua text-brand-teal flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Address</h4>
                    <p className="text-brand-muted mt-0.5 leading-relaxed">
                      450 Lexington Avenue, Suite 1400<br />
                      New York, NY 10017
                    </p>
                    <p className="text-xs text-brand-teal font-semibold mt-1">
                      Grand Central Terminal entrance (2 mins walk)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-aqua text-brand-teal flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Phone Numbers</h4>
                    <p className="text-brand-muted mt-0.5">
                      Toll-Free: <a href="tel:+18002872336" className="text-brand-teal font-semibold hover:underline">+1 (800) 287-2336</a>
                    </p>
                    <p className="text-brand-muted">
                      Direct Line: <a href="tel:+12125550198" className="hover:underline">+1 (212) 555-0198</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-aqua text-brand-teal flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Email Inquiries</h4>
                    <p className="text-brand-muted mt-0.5">
                      <a href="mailto:care@auradental.com" className="text-brand-teal font-semibold hover:underline">care@auradental.com</a>
                    </p>
                    <p className="text-xs text-brand-muted">Fast response within 2 business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-aqua text-brand-teal flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Clinic Hours</h4>
                    <div className="text-brand-muted mt-0.5 space-y-0.5 text-xs">
                      <p>Monday – Friday: 8:00 AM – 8:00 PM</p>
                      <p>Saturday: 9:00 AM – 5:00 PM</p>
                      <p>Sunday: Emergency appointments on-call</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="https://wa.me/18002872336?text=Hi%20Aura%20Dental,%20I%20have%20an%20enquiry%20regarding%20dental%20treatments."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#25D366] text-white font-bold text-sm shadow-sm hover:opacity-95 transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Parking and Transit Card */}
            <div className="bg-brand-aqua/40 p-6 rounded-3xl border border-brand-teal/20 text-xs text-brand-navy space-y-2">
              <h4 className="font-bold text-sm flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-teal" />
                <span>Valet Parking & Transit Info</span>
              </h4>
              <p className="text-brand-muted leading-relaxed">
                Complimentary 2-hour validated valet parking available at the 450 Lexington parking garage. Subways 4, 5, 6, 7 and S lines stop directly at Grand Central-42 St.
              </p>
            </div>
          </div>

          {/* Right Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-brand-border shadow-xs">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">Send Us an Enquiry</h3>
              <p className="text-sm text-brand-muted mb-6">
                Fill in the details below, and our patient concierge team will get back to you promptly.
              </p>

              {successMessage && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{successMessage}</span>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3 animate-in fade-in">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-brand-navy uppercase mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 text-sm text-brand-navy outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-brand-navy uppercase mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 text-sm text-brand-navy outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-brand-navy uppercase mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 text-sm text-brand-navy outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-brand-navy uppercase mb-1.5">
                      Enquiry Topic
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 text-sm text-brand-navy outline-none bg-white transition-all"
                    >
                      <option value="General Dental Enquiry">General Dental Enquiry</option>
                      <option value="Appointment Availability">Appointment Availability</option>
                      <option value="Dental Insurance Coverage">Dental Insurance Coverage</option>
                      <option value="Emergency Dental Care">Emergency Dental Care</option>
                      <option value="Cosmetic Smile Consultation">Cosmetic Smile Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-brand-navy uppercase mb-1.5">
                    Your Message / Dental Concern *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please describe how we can assist you..."
                    className="w-full px-4 py-3 rounded-xl border border-brand-border focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 text-sm text-brand-navy outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-brand-teal text-white font-bold text-sm shadow-md shadow-brand-teal/20 hover:bg-brand-teal-dark active:scale-95 disabled:opacity-50 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "Sending Message..." : "Submit Enquiry"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps Embed Section */}
        <div className="mt-16 bg-white p-4 sm:p-6 rounded-3xl border border-brand-border shadow-xs">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-brand-navy">Interactive Clinic Map & Directions</h3>
            <p className="text-xs text-brand-muted">Find us at 450 Lexington Avenue, Midtown Manhattan, NY.</p>
          </div>

          <div className="relative w-full h-[380px] sm:h-[450px] rounded-2xl overflow-hidden border border-slate-200">
            <iframe
              title="Aura Dental Studio Map Location"
              src="https://maps.google.com/maps?q=450+Lexington+Ave,+New+York,+NY+10017&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
