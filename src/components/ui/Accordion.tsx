"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="space-y-3.5">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div
            key={index}
            className={`border rounded-2xl transition-all duration-200 ${
              isOpen
                ? "bg-white border-brand-teal/30 shadow-sm"
                : "bg-white/80 border-brand-border hover:border-brand-teal/20 hover:bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded-2xl"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg font-bold text-brand-navy pr-4">
                {item.question}
              </span>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                  isOpen ? "bg-brand-aqua text-brand-teal rotate-180" : "bg-slate-100 text-brand-navy"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-brand-muted leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
