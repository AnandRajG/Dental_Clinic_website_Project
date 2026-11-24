import Image from "next/image";
import { Star, CheckCircle } from "lucide-react";
import { Testimonial } from "@/data/testimonials";

interface ReviewCardProps {
  testimonial: Testimonial;
}

export default function ReviewCard({ testimonial }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-brand-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Star Rating and Verification */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < testimonial.rating
                    ? "fill-amber-400 text-amber-400"
                    : "fill-slate-200 text-slate-200"
                }`}
              />
            ))}
          </div>
          {testimonial.verified && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <CheckCircle className="w-3 h-3" />
              <span>Verified Patient</span>
            </span>
          )}
        </div>

        {/* Treatment Badge */}
        <div className="mb-3">
          <span className="text-xs font-bold text-brand-teal bg-brand-aqua/60 px-2.5 py-0.5 rounded-md">
            {testimonial.treatment}
          </span>
        </div>

        {/* Quote text */}
        <blockquote className="text-sm sm:text-base text-brand-navy/90 leading-relaxed italic mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>

      {/* Patient Avatar & Name */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-sm font-bold text-brand-navy">{testimonial.name}</h4>
          <p className="text-xs text-brand-muted">{testimonial.roleOrLocation}</p>
        </div>
      </div>
    </div>
  );
}
