"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* WhatsApp Quick Chat */}
      <a
        href="https://wa.me/18002872336?text=Hello%20Aura%20Dental,%20I%20would%20like%20to%20enquire%20about%20booking%20a%20dental%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with our dental coordinator on WhatsApp"
        className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-xs sm:text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all group"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>

      {/* Click to Call Emergency Line */}
      <a
        href="tel:+18002872336"
        aria-label="Call clinic directly"
        className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-teal text-white font-semibold text-xs sm:text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all group"
      >
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">Call (800) 287-2336</span>
      </a>
    </div>
  );
}
