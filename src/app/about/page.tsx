import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Calendar,
  ArrowRight,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Aura Dental Studio",
  description:
    "Learn about our clinic philosophy, board-certified dental faculty, cutting-edge 3D technology, and hospital-grade 7-step sterilization cleanroom.",
};

export default function AboutPage() {
  const sterilizationSteps = [
    { step: 1, title: "Decontamination & Pre-Soak", description: "Enzymatic bath immediately breaks down all organic matter at molecular level." },
    { step: 2, title: "Ultrasonic Cavitation Wash", description: "High-frequency acoustic vibrations dissolve microscopic debris from intricate instrument hinges." },
    { step: 3, title: "Automated Disinfection Wash", description: "Medical-grade thermal washer disinfects instruments at 93°C (200°F)." },
    { step: 4, title: "Inspection & Individual Pouching", description: "Instruments are dried, micro-inspected under magnification, and sealed in medical vapor-seal pouches with chemical indicators." },
    { step: 5, title: "Class-B Vacuum Steam Autoclaving", description: "Hospital-grade vacuum pressure autoclaving destroys all bacterial spores and viruses at 134°C." },
    { step: 6, title: "Biological Spore Testing", description: "Weekly third-party laboratory biological spore testing certifies 100% sterilization efficacy." },
    { step: 7, title: "Point-of-Care Unsealing", description: "Pouches remain hermetically sealed until opened directly before your eyes in the operatory suite." },
  ];

  return (
    <div className="bg-brand-warm pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-aqua/40 via-brand-warm to-brand-warm pt-12 pb-16 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-brand-aqua text-brand-teal border border-brand-teal/20">
            About Our Clinic
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
            Redefining Healthcare with Clinical Excellence & Serenity
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
            Founded with the belief that a dental visit should feel restorative rather than stressful,
            Aura Dental Studio combines hospital-grade clinical precision with boutique hospitality.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        {/* Mission & Vision Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-border shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-aqua text-brand-teal flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Our Mission</h2>
              <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
                To deliver uncompromising, evidence-based dental healthcare utilizing cutting-edge digital
                imaging and gentle, computer-assisted anesthesia. We treat patients with clinical honesty,
                transparency, and genuine empathy, ensuring long-term oral health and confidence.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-brand-teal">
              <CheckCircle2 className="w-4 h-4" />
              <span>Evidence-based clinical dentistry with zero overtreatment</span>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-border shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-aqua text-brand-teal flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Our Vision</h2>
              <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
                To be the international benchmark for modern dental clinics—where state-of-the-art
                digital robotics and human-centered design create an environment of complete trust,
                comfort, and life-changing smile transformations.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-brand-teal">
              <CheckCircle2 className="w-4 h-4" />
              <span>Setting global standards for patient comfort & safety</span>
            </div>
          </div>
        </section>

        {/* The Clinic Experience & Comfort Menu */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-brand-border shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-aqua px-3 py-1 rounded-full">
                Patient-Centric Approach
              </span>
              <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
                Our Curated Comfort Menu: Your Care, Your Terms
              </h2>
              <p className="text-base text-brand-muted leading-relaxed">
                Dental anxiety affects more than 60% of adults. We actively engineered every aspect
                of our clinical suites to alleviate sensory stress and create an oasis of tranquility.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-brand-warm border border-brand-border">
                  <h4 className="font-bold text-brand-navy text-sm mb-1">Bose Noise-Canceling Audio</h4>
                  <p className="text-xs text-brand-muted">Block out all clinical sounds with relaxing acoustic playlists or podcasts.</p>
                </div>
                <div className="p-4 rounded-2xl bg-brand-warm border border-brand-border">
                  <h4 className="font-bold text-brand-navy text-sm mb-1">Ceiling Streaming Displays</h4>
                  <p className="text-xs text-brand-muted">Enjoy Netflix, Disney+, or nature documentaries during your procedure.</p>
                </div>
                <div className="p-4 rounded-2xl bg-brand-warm border border-brand-border">
                  <h4 className="font-bold text-brand-navy text-sm mb-1">Lavender Aromatherapy</h4>
                  <p className="text-xs text-brand-muted">Clinical-grade organic essential oils naturally lower heart rate and stress.</p>
                </div>
                <div className="p-4 rounded-2xl bg-brand-warm border border-brand-border">
                  <h4 className="font-bold text-brand-navy text-sm mb-1">Sedation Options</h4>
                  <p className="text-xs text-brand-muted">Nitrous oxide & conscious twilight sedation for worry-free treatment.</p>
                </div>
              </div>
            </div>

            <div
              className="lg:col-span-5 relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border-4 border-white"
              style={{ position: "relative" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                alt="Clinic Comfort Lounge"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 7-Step Hospital-Grade Sterilization */}
        <section className="bg-brand-navy text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-mint bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Safety & Hygiene Benchmark
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-3">
              Our 7-Step Hospital-Grade Sterilization Protocol
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Your safety is sacred. Our visible glass cleanroom exceeds international CDC, OSHA, and ADA
              infection prevention protocols to protect every patient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sterilizationSteps.map((step) => (
              <div key={step.step} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-brand-teal text-brand-mint font-bold flex items-center justify-center text-sm mb-3">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="text-center bg-white p-10 sm:p-14 rounded-3xl border border-brand-border shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
            Experience the Aura Dental Standard in Person
          </h2>
          <p className="mt-3 text-brand-muted max-w-xl mx-auto text-sm sm:text-base">
            We welcome new patients with warmth, respect, and unhurried care.
            Schedule your comprehensive first consultation today.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book-appointment"
              className="px-8 py-3.5 rounded-full bg-brand-teal text-white font-bold text-sm shadow-md hover:bg-brand-teal-dark transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your First Visit</span>
            </Link>
            <Link
              href="/doctors"
              className="px-6 py-3.5 rounded-full bg-brand-aqua text-brand-teal font-semibold text-sm hover:bg-brand-aqua/80 transition-all flex items-center gap-2"
            >
              <span>Meet Our Doctors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
