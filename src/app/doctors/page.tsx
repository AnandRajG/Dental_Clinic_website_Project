import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Award, ShieldCheck } from "lucide-react";
import { DOCTORS } from "@/data/doctors";
import DoctorCard from "@/components/ui/DoctorCard";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Our Dental Specialists & Doctors",
  description:
    "Meet our multidisciplinary team of board-certified prosthodontists, orthodontists, endodontists, periodontists, and pediatric dentists at Aura Dental Studio.",
};

export default function DoctorsPage() {
  return (
    <div className="bg-brand-warm py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-brand-muted mb-8">
          <Link href="/" className="hover:text-brand-teal transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-navy font-semibold">Our Specialists</span>
        </nav>

        <SectionHeader
          badge="Board-Certified Faculty"
          title="Exceptional Clinical Minds, Dedicated to Your Care"
          description="Our dentists and surgical specialists hold fellowships and degrees from premier institutions including Columbia, Harvard, and international dental academies."
        />

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {/* Clinical Standards Box */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-white border border-brand-border shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-aqua text-brand-teal flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-brand-navy">Continuous Education</h4>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                  Our clinicians complete over 100 hours of specialized continuing medical education annually in laser and 3D digital dentistry.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-aqua text-brand-teal flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-brand-navy">Ethical Care Commitment</h4>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                  We pledge absolute transparency. We never recommend procedures you do not genuinely need and provide full diagnostic evidence.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-aqua text-brand-teal flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-brand-navy">Collaborative Consultations</h4>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                  Complex cases are reviewed collaboratively by our prosthodontists, periodontists, and orthodontists for comprehensive care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
