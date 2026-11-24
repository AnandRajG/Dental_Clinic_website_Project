"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ZoomIn } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";
import SectionHeader from "@/components/ui/SectionHeader";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: "all", label: "All Spaces" },
    { id: "interiors", label: "Lobby & Lounges" },
    { id: "treatment-rooms", label: "Operatory Suites" },
    { id: "technology", label: "3D Technology & Cleanroom" },
    { id: "team", label: "Our Clinical Team" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-brand-warm py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-brand-muted mb-8">
          <Link href="/" className="hover:text-brand-teal transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-navy font-semibold">Clinic Gallery</span>
        </nav>

        <SectionHeader
          badge="Architectural & Clinical Tour"
          title="Inside Our Modern Dental Sanctuary"
          description="Explore our light-filled reception lounges, state-of-the-art operatory rooms, hospital-grade cleanroom, and advanced 3D scanning equipment."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-brand-teal text-white shadow-sm"
                  : "bg-white text-brand-navy border border-brand-border hover:border-brand-teal hover:text-brand-teal"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-brand-border shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div
                className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100"
                style={{ position: "relative" }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-brand-navy/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="w-12 h-12 rounded-full bg-white/90 text-brand-teal flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal bg-brand-aqua px-2.5 py-0.5 rounded-md">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-brand-navy mt-2 group-hover:text-brand-teal transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-brand-navy/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div
                className="relative h-[400px] sm:h-[520px] w-full bg-slate-900"
                style={{ position: "relative" }}
              >
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-white border-t border-brand-border">
                <span className="text-xs font-bold uppercase text-brand-teal bg-brand-aqua px-2.5 py-0.5 rounded-md">
                  {selectedImage.category}
                </span>
                <h3 className="text-xl font-bold text-brand-navy mt-2">{selectedImage.title}</h3>
                <p className="text-sm text-brand-muted mt-1">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
