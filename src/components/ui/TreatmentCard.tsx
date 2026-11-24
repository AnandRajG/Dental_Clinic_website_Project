import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, ShieldCheck, Sparkles, Activity, Anchor, SunMedium, Grid, EyeOff, Smile, Shield, HeartHandshake, Zap, Flame } from "lucide-react";
import { Treatment } from "@/data/treatments";

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

interface TreatmentCardProps {
  treatment: Treatment;
}

export default function TreatmentCard({ treatment }: TreatmentCardProps) {
  const Icon = treatmentIcons[treatment.slug] || Sparkles;

  return (
    <div className="bg-white rounded-3xl border border-brand-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Treatment Image Preview */}
      <div
        className="relative h-48 w-full overflow-hidden bg-slate-100"
        style={{ position: "relative", height: "12rem" }}
      >
        <Image
          src={treatment.image}
          alt={treatment.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-brand-teal shadow-sm">
            {treatment.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-brand-aqua text-brand-teal flex items-center justify-center shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-colors">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-teal transition-colors">
            {treatment.title}
          </h3>
        </div>

        <p className="text-sm text-brand-muted line-clamp-2 mb-4 leading-relaxed flex-1">
          {treatment.shortDescription}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-brand-muted mb-4">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-teal" />
            <span>{treatment.duration}</span>
          </div>
          <span className="font-semibold text-brand-teal">{treatment.pricingGuide}</span>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <Link
            href={`/services/${treatment.slug}`}
            className="flex-1 text-center py-2.5 px-4 rounded-xl border border-brand-border text-brand-navy text-xs sm:text-sm font-semibold hover:border-brand-teal hover:text-brand-teal transition-colors"
          >
            Learn Details
          </Link>
          <Link
            href={`/book-appointment?treatment=${treatment.slug}`}
            className="flex items-center justify-center gap-1 py-2.5 px-4 rounded-xl bg-brand-teal text-white text-xs sm:text-sm font-semibold hover:bg-brand-teal-dark transition-colors shadow-sm"
          >
            <span>Book</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
