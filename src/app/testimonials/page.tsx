import type { Metadata } from "next";
import Link from "next/link";
import { Star, ShieldCheck, Calendar } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import ReviewCard from "@/components/ui/ReviewCard";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Patient Testimonials & Reviews",
  description:
    "Read genuine, verified patient reviews and smile transformation stories from patients treated at Aura Dental Studio.",
};

export default function TestimonialsPage() {
  return (
    <div className="bg-brand-warm py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-brand-muted mb-8">
          <Link href="/" className="hover:text-brand-teal transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-navy font-semibold">Testimonials</span>
        </nav>

        <SectionHeader
          badge="Patient Success Stories"
          title="Voices of Care: Real Experiences from Our Patients"
          description="Read verified feedback from patients who entrusted us with their oral health, from simple cleanings to full mouth reconstructions."
        />

        {/* Ratings Overview Summary Banner */}
        <div className="mb-14 p-8 sm:p-10 rounded-3xl bg-white border border-brand-border shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            <div className="space-y-2 border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-8">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-5xl font-black text-brand-teal">4.9</span>
                <span className="text-lg font-bold text-brand-muted">/ 5.0</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-brand-muted font-medium">
                Overall score across 2,400+ verified patient reviews
              </p>
            </div>

            <div className="space-y-2 border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-8">
              <div className="flex items-center justify-between text-xs font-semibold text-brand-navy">
                <span>Painless Experience</span>
                <span className="text-brand-teal">99.4%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-brand-teal w-[99.4%]" />
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-brand-navy pt-1">
                <span>Doctor Bedside Manner</span>
                <span className="text-brand-teal">99.8%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-brand-teal w-[99.8%]" />
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-brand-navy pt-1">
                <span>Clinic Cleanliness & Hygiene</span>
                <span className="text-brand-teal">100%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-brand-teal w-full" />
              </div>
            </div>

            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 w-fit mx-auto md:mx-0">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Verified Patient Reviews</span>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                All patient reviews are collected post-treatment through authenticated patient SMS and email links.
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <ReviewCard key={review.id} testimonial={review} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-teal text-white font-bold text-sm shadow-md hover:bg-brand-teal-dark transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Your Smile Consultation</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
