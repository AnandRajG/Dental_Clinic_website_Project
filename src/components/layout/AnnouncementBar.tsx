import Link from "next/link";
import { Phone, Clock, MapPin, Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-navy text-white text-xs sm:text-sm py-2 px-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-300">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-mint" />
            <span>Mon – Sat: 8:00 AM – 8:00 PM</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-mint" />
            <span>Bus Stand,Dharmapuri</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:+18002872336"
            className="flex items-center gap-1.5 text-brand-mint font-semibold hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Emergency: (+91) 999999999</span>
          </a>
          <span className="text-white/30">•</span>
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-teal text-white text-xs font-medium hover:bg-brand-teal-light transition-colors"
          >
            <Sparkles className="w-3 h-3 text-brand-mint" />
            <span>Instant Booking</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
