import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  HelpCircle,
  Activity,
  Award,
} from "lucide-react";
import { TREATMENTS } from "@/data/treatments";

import Accordion from "@/components/ui/Accordion";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TREATMENTS.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = TREATMENTS.find((t) => t.slug === slug);

  if (!treatment) {
    return {
      title: "Treatment Not Found",
    };
  }

  return {
    title: `${treatment.title} | Aura Dental Studio`,
    description: treatment.shortDescription,
    openGraph: {
      title: `${treatment.title} | Aura Dental Studio`,
      description: treatment.shortDescription,
      images: [
        {
          url: treatment.image,
          width: 1200,
          height: 630,
          alt: treatment.title,
        },
      ],
    },
  };
}

export default async function TreatmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = TREATMENTS.find((t) => t.slug === slug);

  if (!treatment) {
    notFound();
  }

  const otherTreatments = TREATMENTS.filter((t) => t.slug !== slug).slice(0, 3);

  return (
    <div className="bg-brand-warm pb-20">
      {/* Hero Header Banner */}
      <section className="bg-gradient-to-b from-brand-aqua/40 via-brand-warm to-brand-warm pt-10 pb-14 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-brand-muted mb-6">
            <Link href="/" className="hover:text-brand-teal transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-brand-teal transition-colors">
              Treatments
            </Link>
            <span>/</span>
            <span className="text-brand-navy font-semibold">{treatment.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-aqua border border-brand-teal/20 text-brand-teal text-xs font-bold uppercase tracking-wider">
                <span>{treatment.category} Dentistry</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
                {treatment.title}
              </h1>

              <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
                {treatment.shortDescription}
              </p>

              {/* Procedure Quick Specs Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-brand-border shadow-xs">
                  <span className="text-[11px] font-bold uppercase text-brand-muted block">Duration</span>
                  <span className="text-sm font-bold text-brand-navy flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>{treatment.duration}</span>
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-brand-border shadow-xs">
                  <span className="text-[11px] font-bold uppercase text-brand-muted block">Comfort Level</span>
                  <span className="text-sm font-bold text-brand-navy flex items-center gap-1.5 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="truncate">{treatment.anesthesia}</span>
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-brand-border shadow-xs col-span-2 sm:col-span-1">
                  <span className="text-[11px] font-bold uppercase text-brand-muted block">Recovery</span>
                  <span className="text-sm font-bold text-brand-navy flex items-center gap-1.5 mt-0.5">
                    <Activity className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>{treatment.recoveryTime}</span>
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
                <Link
                  href={`/book-appointment?treatment=${encodeURIComponent(treatment.slug)}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-teal text-white font-bold text-sm shadow-md shadow-brand-teal/20 hover:bg-brand-teal-dark active:scale-95 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book {treatment.title}</span>
                </Link>

                <a
                  href="tel:+18002872336"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-brand-border text-brand-navy font-semibold text-sm hover:border-brand-teal hover:text-brand-teal transition-all"
                >
                  <Phone className="w-4 h-4 text-brand-teal" />
                  <span>Ask a Specialist</span>
                </a>
              </div>
            </div>

            {/* Right Image Feature */}
            <div className="lg:col-span-5">
              <div
                className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100"
                style={{ position: "relative" }}
              >
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute top-4 right-4 bg-brand-navy/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                  {treatment.pricingGuide}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Left Clinical Details Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* 1. Clinical Overview */}
            <section className="bg-white p-8 rounded-3xl border border-brand-border shadow-xs">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Treatment Overview</h2>
              <p className="text-base text-brand-muted leading-relaxed">
                {treatment.fullDescription}
              </p>
            </section>

            {/* 2. Key Clinical Benefits */}
            <section className="bg-white p-8 rounded-3xl border border-brand-border shadow-xs">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Key Clinical Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {treatment.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-brand-warm border border-brand-border"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-brand-navy leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Step-by-Step Procedure Workflow */}
            <section className="bg-white p-8 rounded-3xl border border-brand-border shadow-xs">
              <h2 className="text-2xl font-bold text-brand-navy mb-2">Step-by-Step Procedure</h2>
              <p className="text-sm text-brand-muted mb-8">
                What to expect during your appointment from initial diagnostic assessment to aftercare.
              </p>

              <div className="space-y-6">
                {treatment.procedureSteps.map((stepItem) => (
                  <div key={stepItem.step} className="flex items-start gap-4 sm:gap-6 group">
                    <div className="w-10 h-10 rounded-2xl bg-brand-aqua text-brand-teal font-extrabold flex items-center justify-center shrink-0 border border-brand-teal/20 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                      {stepItem.step}
                    </div>
                    <div className="pt-1 flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-brand-navy">
                        {stepItem.title}
                      </h3>
                      <p className="mt-1 text-sm text-brand-muted leading-relaxed">
                        {stepItem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Who May Need This Treatment */}
            <section className="bg-white p-8 rounded-3xl border border-brand-border shadow-xs">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                Who Is a Candidate for {treatment.title}?
              </h2>
              <p className="text-sm text-brand-muted mb-6">
                You may benefit from this treatment if you present any of the following indications or oral health goals:
              </p>
              <ul className="space-y-3">
                {treatment.whoNeedsIt.map((criterion, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-brand-navy font-medium">
                    <span className="w-2 h-2 rounded-full bg-brand-teal shrink-0" />
                    <span>{criterion}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 5. Procedure-Specific FAQs */}
            <section className="bg-white p-8 rounded-3xl border border-brand-border shadow-xs">
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="w-6 h-6 text-brand-teal" />
                <h2 className="text-2xl font-bold text-brand-navy">
                  Frequently Asked Questions
                </h2>
              </div>
              <Accordion items={treatment.faqs} />
            </section>
          </div>

          {/* Right Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Booking Box */}
            <div className="sticky top-28 bg-white p-6 sm:p-7 rounded-3xl border border-brand-border shadow-md space-y-6">
              <div className="border-b border-slate-100 pb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-teal bg-brand-aqua px-2.5 py-0.5 rounded-md">
                  Consultation Ready
                </span>
                <h3 className="text-xl font-bold text-brand-navy mt-2">
                  Book Your {treatment.title} Consultation
                </h3>
                <p className="text-xs text-brand-muted mt-1">
                  Includes comprehensive digital evaluation, 3D scan, and transparent treatment plan.
                </p>
              </div>

              <div className="space-y-3 text-xs text-brand-navy font-medium">
                <div className="flex items-center justify-between">
                  <span className="text-brand-muted">Consultation Guide:</span>
                  <span className="font-bold text-brand-teal">{treatment.pricingGuide}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-brand-muted">Procedure Time:</span>
                  <span>{treatment.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-brand-muted">Anesthesia:</span>
                  <span>{treatment.anesthesia}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-brand-muted">Insurance:</span>
                  <span className="text-emerald-700 font-semibold">PPO Accepted</span>
                </div>
              </div>

              <Link
                href={`/book-appointment?treatment=${encodeURIComponent(treatment.slug)}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-brand-teal text-white font-bold text-sm shadow-md shadow-brand-teal/20 hover:bg-brand-teal-dark active:scale-95 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Appointment Slot</span>
              </Link>

              <div className="p-4 rounded-2xl bg-brand-warm border border-brand-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-brand-navy">Painless Guarantee</p>
                  <p className="text-brand-muted">Advanced computer-assisted comfort protocol.</p>
                </div>
              </div>

              {/* Related Treatments */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-3">
                  Other Services
                </h4>
                <div className="space-y-2">
                  {otherTreatments.map((ot) => (
                    <Link
                      key={ot.id}
                      href={`/services/${ot.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-brand-aqua/40 text-xs font-semibold text-brand-navy transition-colors"
                    >
                      <span>{ot.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-teal" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
