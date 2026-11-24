import type { Metadata, Viewport } from "next";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";

export const viewport: Viewport = {
  themeColor: "#087F8C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://auradentalstudio.com"),
  title: {
    default: "Aura Dental Studio | Premium Dental Care & Specialist Clinic",
    template: "%s | Aura Dental Studio",
  },
  description:
    "Experience world-class, painless dental healthcare in a modern, serene environment. Advanced 3D digital dentistry, certified specialists, and bespoke smile care.",
  keywords: [
    "dental clinic",
    "cosmetic dentistry",
    "dental implants",
    "clear aligners",
    "teeth whitening",
    "emergency dentist",
    "painless root canal",
    "pediatric dentist",
    "Aura Dental Studio",
  ],
  authors: [{ name: "Aura Dental Studio Specialists" }],
  creator: "Aura Dental Healthcare",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://auradentalstudio.com",
    title: "Aura Dental Studio | Premium Dental Care & Specialist Clinic",
    description:
      "Modern, gentle, and hospital-grade dental care. Book an appointment with board-certified dental specialists.",
    siteName: "Aura Dental Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Aura Dental Studio Modern Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Dental Studio | Premium Dental Care",
    description: "Modern, gentle, and hospital-grade dental care. Book your consultation today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Aura Dental Studio",
  image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
  "@id": "https://auradentalstudio.com",
  url: "https://auradentalstudio.com",
  telephone: "+1-800-287-2336",
  email: "care@auradental.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "450 Lexington Avenue, Suite 1400",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10017",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7527,
    longitude: -73.9744,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    "https://facebook.com/auradentalstudio",
    "https://instagram.com/auradentalstudio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-warm text-brand-navy antialiased selection:bg-brand-aqua selection:text-brand-teal">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
