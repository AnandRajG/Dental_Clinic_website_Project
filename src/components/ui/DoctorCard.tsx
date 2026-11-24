import Image from "next/image";
import Link from "next/link";
import { Award, Calendar, CheckCircle2 } from "lucide-react";
import { Doctor } from "@/data/doctors";

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-brand-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      <div
        className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100"
        style={{ position: "relative", height: "20rem" }}
      >
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-brand-teal shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span>{doctor.experienceYears}+ Yrs Experience</span>
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="mb-2">
          <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-teal transition-colors">
            {doctor.name}
          </h3>
          <p className="text-xs font-semibold text-brand-teal mt-0.5">{doctor.role}</p>
          <p className="text-[11px] text-brand-muted mt-0.5">{doctor.degrees}</p>
        </div>

        <p className="text-xs sm:text-sm text-brand-muted line-clamp-3 mb-4 leading-relaxed flex-1">
          {doctor.bio}
        </p>

        {/* Specializations Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {doctor.specializations.slice(0, 3).map((spec) => (
            <span
              key={spec}
              className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-md bg-brand-aqua/50 text-brand-navy font-medium"
            >
              <CheckCircle2 className="w-3 h-3 text-brand-teal" />
              <span>{spec}</span>
            </span>
          ))}
        </div>

        <Link
          href={`/book-appointment?doctor=${encodeURIComponent(doctor.name)}`}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-navy text-white text-xs sm:text-sm font-semibold hover:bg-brand-teal transition-colors shadow-sm"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Consultation with {doctor.name.split(" ")[1]}</span>
        </Link>
      </div>
    </div>
  );
}
