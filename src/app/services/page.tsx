import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Calendar, Phone } from "lucide-react";
import { TREATMENTS } from "@/data/treatments";
import TreatmentCard from "@/components/ui/TreatmentCard";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Clinical Treatments & Dental Services",
  description:
    "Explore our complete range of 12 specialized dental treatments: general dentistry, dental implants, clear aligners, pain-free root canals, teeth whitening, and more.",
};

export default function ServicesPage() {
  return (
    <div className="bg-brand-warm py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-brand-muted mb-8">
          <Link href="/" className="hover:text-brand-teal transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-navy font-semibold">Treatments</span>
        </nav>

        <SectionHeader
          badge="Complete Clinical Directory"
          title="Specialized Dental Care Tailored to Your Health"
          description="Every smile is unique. Our board-certified specialists utilize minimally invasive techniques, 3D imaging, and hospital-grade sterilization across all 12 specialized procedures."
        />

        {/* Grid of all 12 Treatments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>

        {/* Bottom Booking Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-2xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-brand-mint text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized Dental Consultation</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              Unsure which treatment is right for you?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-100">
              Schedule a comprehensive examination with 3D digital imaging. Our specialists will design a clear, customized care plan for your health and budget.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/book-appointment"
              className="px-6 py-3.5 rounded-full bg-white text-brand-teal font-bold text-sm shadow-md hover:bg-brand-aqua active:scale-95 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </Link>
            <a
              href="tel:+18002872336"
              className="px-6 py-3.5 rounded-full bg-brand-navy/60 border border-white/20 text-white font-semibold text-sm hover:bg-brand-navy transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>(800) 287-2336</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
