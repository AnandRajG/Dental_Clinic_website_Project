import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  Star,
  Sparkles,
  CheckCircle2,
  Clock,
  Phone,
  HeartHandshake,
  Award,
  Zap,
  Activity,
  Layers,
  Check,
} from "lucide-react";
import { TREATMENTS } from "@/data/treatments";
import { DOCTORS } from "@/data/doctors";
import { TESTIMONIALS } from "@/data/testimonials";
import { GALLERY_ITEMS } from "@/data/gallery";
import { CLINIC_FAQS } from "@/data/faqs";
import SectionHeader from "@/components/ui/SectionHeader";
import TreatmentCard from "@/components/ui/TreatmentCard";
import DoctorCard from "@/components/ui/DoctorCard";
import ReviewCard from "@/components/ui/ReviewCard";
import Accordion from "@/components/ui/Accordion";

export default function HomePage() {
  const featuredTreatments = TREATMENTS.filter((t) => t.featured).slice(0, 6);
  const featuredDoctors = DOCTORS.slice(0, 3);
  const featuredReviews = TESTIMONIALS.slice(0, 3);
  const galleryPreview = GALLERY_ITEMS.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-aqua/40 via-brand-warm to-brand-warm pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Subtle Decorative Background Circles */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-brand-aqua/60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 -ml-24 w-80 h-80 rounded-full bg-brand-mint/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-aqua border border-brand-teal/20 text-brand-teal text-xs sm:text-sm font-bold shadow-xs">
                <Sparkles className="w-4 h-4 text-brand-teal" />
                <span>Next-Generation Luxury Dental Care</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-brand-navy leading-[1.12]">
                Your Smile Deserves <br className="hidden sm:inline" />
                <span className="text-brand-teal underline decoration-brand-mint decoration-4 underline-offset-6">
                  Expert Care.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-brand-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience world-class, painless dental healthcare in a serene clinical sanctuary.
                From 3D digital implants and invisible clear aligners to gentle preventive care,
                our board-certified specialists redefine patient comfort.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <Link
                  href="/book-appointment"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-brand-teal text-white text-base font-bold shadow-lg shadow-brand-teal/25 hover:bg-brand-teal-dark active:scale-95 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </Link>

                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white border border-brand-border text-brand-navy text-base font-semibold shadow-xs hover:border-brand-teal hover:text-brand-teal transition-all"
                >
                  <span>Explore Treatments</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust Indicators Strip Under CTAs */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-brand-navy font-medium">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    {TESTIMONIALS.slice(0, 3).map((item, idx) => (
                      <div
                        key={idx}
                        className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-200 shrink-0"
                      >
                        <Image
                          src={item.avatar}
                          alt="Patient"
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] text-brand-muted">
                      <strong>4.9/5 Rating</strong> (2,400+ reviews)
                    </span>
                  </div>
                </div>

                <div className="hidden sm:block h-6 w-px bg-slate-200" />

                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-teal" />
                  <span className="text-xs sm:text-sm">100% Painless Guarantee</span>
                </div>

                <div className="hidden sm:block h-6 w-px bg-slate-200" />

                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-teal" />
                  <span className="text-xs sm:text-sm">Board-Certified Doctors</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Clinic Portrait */}
                <div
                  className="relative h-[430px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100"
                  style={{ position: "relative", minHeight: "430px" }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
                    alt="Aura Dental Studio Luxury Operatory"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />

                  {/* On-Image Floating Caption */}
                  <div className="absolute bottom-5 left-5 right-5 text-white p-4 rounded-2xl bg-brand-navy/80 backdrop-blur-md border border-white/20">
                    <p className="text-xs uppercase tracking-wider text-brand-mint font-bold mb-1">
                      Boutique Healthcare Sanctuary
                    </p>
                    <p className="text-sm font-medium text-slate-100">
                      Designed with natural acoustic wood, ambient lighting, and noise-canceling audio for total relaxation.
                    </p>
                  </div>
                </div>

                {/* Floating Top Badge */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-brand-border flex items-center gap-3 animate-bounce-subtle">
                  <div className="w-10 h-10 rounded-xl bg-brand-aqua text-brand-teal flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-navy">3D Intraoral Scanning</p>
                    <p className="text-[11px] text-brand-muted">No Messy Molds</p>
                  </div>
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white rounded-2xl p-3.5 shadow-xl border border-brand-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-navy">Hospital-Grade Clean</p>
                    <p className="text-[11px] text-brand-muted">Class-B Sterilization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUST AND CREDIBILITY INDICATORS */}
      <section className="bg-white py-12 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-brand-teal">15,000+</p>
              <p className="text-xs sm:text-sm font-semibold text-brand-navy">Smiles Transformed</p>
              <p className="text-xs text-brand-muted">Over 18 years of clinical care</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-brand-teal">4.9 / 5.0</p>
              <p className="text-xs sm:text-sm font-semibold text-brand-navy">Patient Satisfaction</p>
              <p className="text-xs text-brand-muted">Verified across Google & Zocdoc</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-brand-teal">12 Specialists</p>
              <p className="text-xs sm:text-sm font-semibold text-brand-navy">Board-Certified Doctors</p>
              <p className="text-xs text-brand-muted">MDS, FICOI, AAO accredited</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-brand-teal">100% Digital</p>
              <p className="text-xs sm:text-sm font-semibold text-brand-navy">CBCT & Laser Dentistry</p>
              <p className="text-xs text-brand-muted">Low radiation & pain-free care</p>
            </div>
          </div>

          {/* Accreditations Row */}
          <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-teal" /> American Dental Association
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-teal" /> ISO 9001:2015 Certified Cleanroom
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-teal" /> Invisalign Diamond Provider
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-teal" /> Guided Biofilm Therapy (GBT)
            </span>
          </div>
        </div>
      </section>

      {/* 5. OUR DENTAL SERVICES */}
      <section className="py-20 lg:py-28 bg-brand-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-brand-aqua text-brand-teal border border-brand-teal/20">
                Comprehensive Dentistry
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
                Specialized Treatments for Every Stage of Your Smile
              </h2>
              <p className="mt-3 text-base sm:text-lg text-brand-muted">
                From preventive cleanings and invisible aligners to complex single-visit dental implants,
                our multidisciplinary clinic covers all your oral health needs under one roof.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-brand-border text-brand-navy font-semibold text-sm hover:border-brand-teal hover:text-brand-teal shadow-xs transition-all shrink-0 self-start md:self-end"
            >
              <span>View All 12 Treatments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid of 6 Featured Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTreatments.map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-brand-muted mb-4">
              Looking for pediatric care, wisdom tooth extraction, or gum treatments?
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-teal hover:text-brand-teal-dark hover:underline"
            >
              <span>Browse our complete clinical directory of 12 procedures</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHY PATIENTS CHOOSE OUR CLINIC */}
      <section className="py-20 lg:py-28 bg-white border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Aura Difference"
            title="Why Discerning Patients Choose Our Clinic"
            description="We have eliminated everything patients traditionally dread about dental appointments—replacing anxiety and delays with technology, comfort, and clinical precision."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 rounded-3xl bg-brand-warm border border-brand-border hover:border-brand-teal/40 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-brand-aqua text-brand-teal flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">100% Painless Dentistry Protocol</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Computer-controlled localized anesthesia delivery, warm pre-numbing gels, and twilight sedation options ensure zero discomfort during any procedure.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-3xl bg-brand-warm border border-brand-border hover:border-brand-teal/40 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-brand-aqua text-brand-teal flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">3D Digital Intraoral Scanners</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Say goodbye to gag-inducing impression goop. Our optical scanners capture 6,000 frames per second, yielding instant, hyper-accurate digital dental models.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-3xl bg-brand-warm border border-brand-border hover:border-brand-teal/40 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-brand-aqua text-brand-teal flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Hospital-Grade 7-Step Sterilization</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Our visible glass cleanroom exceeds CDC and OSHA guidelines. Every instrument undergoes ultrasonic enzymatic washing and Class-B steam autoclaving.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-8 rounded-3xl bg-brand-warm border border-brand-border hover:border-brand-teal/40 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-brand-aqua text-brand-teal flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Transparent, Upfront Pricing</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                No hidden fees or surprise invoices. You receive a detailed cost breakdown and insurance benefit calculation before any treatment commences, plus 0% EMI plans.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="p-8 rounded-3xl bg-brand-warm border border-brand-border hover:border-brand-teal/40 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-brand-aqua text-brand-teal flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Curated Comfort Menu</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Choose from noise-canceling headphones, ceiling Netflix screens, lavender aromatherapy, and memory foam chairs to transform your visit into a restorative pause.
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="p-8 rounded-3xl bg-brand-warm border border-brand-border hover:border-brand-teal/40 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-brand-aqua text-brand-teal flex items-center justify-center mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Immediate Emergency Priority</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Severe toothaches, sports trauma, and dislodged crowns cannot wait. We reserve daily emergency priority blocks for same-day relief and diagnosis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MEET OUR DENTAL SPECIALISTS */}
      <section className="py-20 lg:py-28 bg-brand-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-brand-aqua text-brand-teal border border-brand-teal/20">
                Clinical Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
                Meet Our Board-Certified Specialists
              </h2>
              <p className="mt-3 text-base sm:text-lg text-brand-muted max-w-2xl">
                Our multidisciplinary faculty holds advanced degrees from leading medical institutions,
                bringing decades of specialized expertise to your smile.
              </p>
            </div>
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-brand-border text-brand-navy font-semibold text-sm hover:border-brand-teal hover:text-brand-teal shadow-xs transition-all shrink-0 self-start md:self-end"
            >
              <span>View All Doctors & Credentials</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. ADVANCED DENTAL TECHNOLOGY SECTION */}
      <section className="py-20 lg:py-28 bg-brand-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeader
            badge="Cutting-Edge Science"
            title="Advanced Dental Technology for Precision Outcomes"
            description="Investing in world-class digital diagnostic and therapeutic technologies allows us to deliver faster treatments, pinpoint diagnostic accuracy, and virtually pain-free recoveries."
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-mint/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-teal flex items-center justify-center text-white mb-4">
                <Zap className="w-6 h-6 text-brand-mint" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">iTero 3D Scanner</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Captures 6,000 frames per second for instant digital impressions, removing physical trays while simulating aligner outcomes in minutes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-mint/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-teal flex items-center justify-center text-white mb-4">
                <Layers className="w-6 h-6 text-brand-mint" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">3D CBCT Imaging</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ultra-low-radiation cone-beam CT creates a sub-millimeter 3D model of bone and nerves for computer-guided implant surgeries.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-mint/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-teal flex items-center justify-center text-white mb-4">
                <Sparkles className="w-6 h-6 text-brand-mint" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Waterlase Dental Laser</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Painless laser energy and water droplets treat gum disease and contour smile lines without scalpels, bleeding, or sutures.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-mint/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-teal flex items-center justify-center text-white mb-4">
                <ShieldCheck className="w-6 h-6 text-brand-mint" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">EMS Airflow Prophylaxis</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Swiss Guided Biofilm Therapy gently removes plaque and deep stains with warmed water aerosol, protecting enamel surfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PATIENT TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-brand-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-brand-aqua text-brand-teal border border-brand-teal/20">
                Patient Stories
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
                Real Experiences, Authentic Smiles
              </h2>
              <p className="mt-3 text-base sm:text-lg text-brand-muted max-w-2xl">
                Read how our gentle approach and specialized clinical care transformed our patients&apos; lives and health.
              </p>
            </div>
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-brand-border text-brand-navy font-semibold text-sm hover:border-brand-teal hover:text-brand-teal shadow-xs transition-all shrink-0 self-start md:self-end"
            >
              <span>View All 2,400+ Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} testimonial={review} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. CLINIC GALLERY SHOWCASE */}
      <section className="py-20 lg:py-28 bg-white border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Clinic Tour"
            title="A Healthcare Sanctuary Designed for Comfort"
            description="Take a visual tour of our bespoke suites, sterilization lab, and hospitality lounge created to ensure your total serenity."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryPreview.map((item) => (
              <div
                key={item.id}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-brand-border bg-slate-100 shadow-sm"
                style={{ position: "relative", height: "17rem" }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-mint">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold leading-snug line-clamp-2 mt-0.5">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-aqua text-brand-teal font-bold text-sm hover:bg-brand-teal hover:text-white transition-all shadow-xs"
            >
              <span>Explore Full Clinic Photo Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 lg:py-28 bg-brand-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Patient Information"
            title="Frequently Asked Questions"
            description="Clear answers regarding dental insurance, pain management protocols, first visit expectations, and emergency support."
          />

          <Accordion items={CLINIC_FAQS} />

          <div className="mt-10 p-6 rounded-2xl bg-white border border-brand-border text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="text-base font-bold text-brand-navy">Have a specific question not covered here?</h4>
              <p className="text-xs text-brand-muted">Our clinical coordinators are available to help you immediately.</p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-xl bg-brand-teal text-white text-xs sm:text-sm font-semibold hover:bg-brand-teal-dark transition-colors shrink-0"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* 12. APPOINTMENT BOOKING CTA BANNER */}
      <section className="bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-mint text-xs sm:text-sm font-bold mb-6">
            <Calendar className="w-4 h-4" />
            <span>Ready for a Brighter, Healthier Smile?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
            Schedule Your Comprehensive Dental Consultation Today
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed">
            Take the first step toward optimal dental health and lasting smile confidence.
            Appointments available within 24 to 48 hours.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-brand-teal text-base font-bold shadow-xl hover:bg-brand-aqua active:scale-95 transition-all"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment Online</span>
            </Link>

            <a
              href="tel:+18002872336"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-navy/60 border border-white/30 text-white text-base font-semibold hover:bg-brand-navy transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call (800) 287-2336</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-brand-mint font-medium">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4" /> Zero Waiting Time Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4" /> Instant Online Confirmation
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4" /> Major Insurances Accepted
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
