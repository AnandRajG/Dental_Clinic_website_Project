# Aura Dental Studio — Premium Healthcare & Dental Clinic Website

[![Live Demo](https://img.shields.io/badge/Demo-Live_Website-087F8C?style=for-the-badge&logo=vercel)](https://dental-clinic-website-project.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.4-172B3A?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-087F8C?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

A modern, visually stunning, fully responsive web application built for a premier international dental healthcare practice (**Aura Dental Studio**). Designed to rival international luxury healthcare brands such as Tend, Clove Dental, and Bupa Dental Care.

The platform establishes patient trust, communicates clinical procedures with evidence-based clarity, and drives high-intent patient conversions through an integrated online appointment booking engine.

---

## 🌐 Live Production URL

- **Production URL**: [https://dental-clinic-website-project.vercel.app/](https://dental-clinic-website-project.vercel.app/)
- **Local Development**: `http://localhost:3000`

---

## 🎨 Design System & Brand Palette

The user interface follows a modern, soothing luxury healthcare aesthetic:

| Token | Hex | Semantic Purpose |
| :--- | :--- | :--- |
| **Primary** | `#087F8C` | **Deep Teal** — Brand identity, primary CTAs, active highlights |
| **Secondary** | `#DFF4F2` | **Soft Aqua** — Category tags, badges, soft card hover states |
| **Background** | `#FAFCFC` | **Warm White** — Serene, non-glare clinical page canvas |
| **Text Primary** | `#172B3A` | **Dark Navy** — High-contrast, WCAG 2.2 AA compliant headings & body |
| **Accent** | `#BDE7D8` | **Soft Mint** — Trust badges, success indicators, subtle accents |

* **Typography**: Plus Jakarta Sans via Google Fonts (400, 500, 600, 700, 800)
* **Visual Direction**: High-resolution clinical photography, rounded 3xl cards, micro-interactions, and generous whitespace.

---

## 🚀 Key Features & Website Pages

### 1. High-Conversion Homepage (`/`)
Built strictly in the requested sequential hierarchy:
1. **Top Announcement Bar**: Working clinic hours (`Mon – Sat: 8:00 AM – 8:00 PM`), clinic location, emergency hotline, and instant booking badge.
2. **Sticky Navigation Bar**: Logo with tooth & radiance crest, Treatments mega-menu with 12 services, and mobile slide-down drawer.
3. **Hero Section**: Headline *"Your Smile Deserves Expert Care."*, dual CTAs (*Book Appointment* / *Explore Treatments*), high-res operatory photography, and floating trust badges (4.9★ rating across 2,400+ reviews, 100% Painless Guarantee, 3D Intraoral Scanning).
4. **Trust & Credibility Indicators**: Key metrics (15,000+ smiles, 18+ years, 12 specialists, 99.4% satisfaction) and certifications (ADA, ISO 9001:2015, Invisalign Diamond, GBT).
5. **Featured Dental Services**: Curated grid highlighting core treatments with duration, pricing guides, and direct links.
6. **Why Choose Us (6 Pillars)**: Painless protocol, 3D intraoral scans, hospital-grade sterilization, transparent upfront pricing, comfort menu, and emergency priority.
7. **Meet Our Dental Specialists**: Senior specialist preview with credentials and direct booking options.
8. **Advanced Dental Technology**: Showcase of iTero 3D Scanners, CBCT 3D X-Ray, Waterlase Dental Lasers, and Swiss EMS Airflow Prophylaxis.
9. **Patient Testimonials**: Verified 5-star reviews with verified patient badges and treatment tags.
10. **Clinic Gallery Preview**: Grid preview of consultation suites, cleanrooms, and lounges.
11. **Frequently Asked Questions**: Accessible accordion covering insurance, pain management, first visits, and emergencies.
12. **Appointment Booking CTA Banner**: Deep teal conversion section with direct phone and booking triggers.
13. **Comprehensive Footer**: Full contact details, Google Maps link, treatment directories, accreditations, and legal disclaimers.

---

### 2. All 12 Individual Treatment Pages (`/services/[slug]`)
Every single required treatment has its own dedicated, rich, SEO-optimized page:
1. **General Dentistry** (`/services/general-dentistry`)
2. **Teeth Cleaning & Prophylaxis** (`/services/teeth-cleaning`)
3. **Root Canal Treatment** (`/services/root-canal-treatment`)
4. **Dental Implants** (`/services/dental-implants`)
5. **Teeth Whitening** (`/services/teeth-whitening`)
6. **Braces & Orthodontics** (`/services/braces-orthodontics`)
7. **Clear Aligners** (`/services/clear-aligners`)
8. **Cosmetic Dentistry & Veneers** (`/services/cosmetic-dentistry`)
9. **Dental Crowns & Bridges** (`/services/crowns-bridges`)
10. **Pediatric Dentistry** (`/services/pediatric-dentistry`)
11. **Wisdom Tooth Removal** (`/services/wisdom-tooth-removal`)
12. **Gum Treatment & Periodontics** (`/services/gum-treatment`)

**Each Treatment Page includes**:
* Clinical overview & evidence-based description
* Key clinical benefits checklist
* 4-step procedure workflow timeline (Consultation → Prep → Procedure → Aftercare)
* Candidate criteria ("Who Needs This Treatment?")
* Procedure-specific FAQ accordion
* Sticky booking sidebar pre-configured for that specific treatment

---

### 3. Functional Appointment Booking Engine (`/book-appointment`)
* **Step 1: Service & Specialist Selection**: Auto-populated if navigated from a treatment or doctor card.
* **Step 2: Date & Slot Picker**: Calendar date picker with disabled past dates + morning, afternoon, and evening time slot chips.
* **Step 3: Patient Information**: Name, phone, email, first-time patient toggle, and clinical notes.
* **Backend Persistence**: Connected to `POST /api/appointments` storing bookings with unique reference codes (`APX-2026-XXXX`).
* **Verified Confirmation Receipt**: Real booking confirmation screen with an instant **Add to Apple / Google Calendar (`.ics`)** download, print receipt button, and clinic arrival checklist.

---

### 4. Additional Pages
* **About Us (`/about`)**: Founding philosophy, mission, vision, curated comfort menu, and 7-step hospital-grade sterilization protocol.
* **Our Doctors (`/doctors`)**: Specialist faculty profiles (Prosthodontics, Orthodontics, Endodontics, Pediatric, Periodontics) with degrees, experience, and direct booking links.
* **Patient Testimonials (`/testimonials`)**: Verified reviews, star ratings breakdown, treatment categories, and verified patient badges.
* **Interactive Gallery (`/gallery`)**: Categorized photo gallery (Interiors, Operatory, Tech, Team) with fullscreen Lightbox modal.
* **Contact Us (`/contact`)**: Address, phone numbers, clinic hours, transit info, embedded Google Maps, WhatsApp chat link, and functional contact form (`POST /api/contact`).

---

### 5. Floating Quick Triggers
* **WhatsApp Direct Chat**: One-click WhatsApp link (`https://wa.me/...`) with pre-filled inquiry.
* **Click-to-Call Emergency**: Direct telephone dialer (`tel:+18002872336`).

---

## 🛠️ Technology Stack

* **Framework**: [Next.js](https://nextjs.org/) 16+ (App Router, Server Components & Client Components)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 & PostCSS
* **Icons**: [Lucide React](https://lucide.dev/)
* **Database & Persistence**: Persistent file storage layer (`data/appointments.json`, `data/messages.json`) with modular API route handlers ready for PostgreSQL / Supabase
* **SEO & Compliance**:
  * JSON-LD Structured Data (`Dentist` / `MedicalBusiness`)
  * Auto-generated XML Sitemap (`sitemap.ts`) & Robots (`robots.ts`)
  * WCAG 2.2 AA Contrast & Accessibility standards
* **Hosting**: [Vercel](https://vercel.com/) with global edge CDN

---

## 📂 Project Directory Structure

```text
├── data/
│   ├── appointments.json          # Persistent booking records
│   └── messages.json              # Persistent contact enquiries
├── src/
│   ├── app/
│   │   ├── about/page.tsx         # About Us & Sterilization cleanroom
│   │   ├── api/
│   │   │   ├── appointments/      # Booking submission & lookup API
│   │   │   └── contact/           # Contact form enquiry API
│   │   ├── book-appointment/     # 3-step appointment scheduler
│   │   ├── contact/page.tsx       # Location, Google Maps & enquiry form
│   │   ├── doctors/page.tsx       # Specialist doctor profiles
│   │   ├── gallery/page.tsx       # Lightbox photo gallery
│   │   ├── services/
│   │   │   ├── [slug]/page.tsx    # 12 dynamic treatment detail pages
│   │   │   └── page.tsx           # All treatments hub
│   │   ├── testimonials/page.tsx  # Patient reviews & ratings
│   │   ├── globals.css            # Brand design tokens & styling
│   │   ├── layout.tsx             # Root layout with header, footer & schema
│   │   ├── page.tsx               # High-conversion Homepage
│   │   ├── robots.ts              # SEO robots.txt
│   │   └── sitemap.ts             # SEO sitemap.xml
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.tsx
│   │   │   ├── FloatingActions.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   └── ui/
│   │       ├── Accordion.tsx
│   │       ├── DoctorCard.tsx
│   │       ├── ReviewCard.tsx
│   │       ├── SectionHeader.tsx
│   │       └── TreatmentCard.tsx
│   ├── data/
│   │   ├── doctors.ts             # Doctor credentials & clinical data
│   │   ├── faqs.ts                # Clinic FAQs
│   │   ├── gallery.ts             # Categorized clinic photography
│   │   ├── testimonials.ts        # Verified patient reviews
│   │   └── treatments.ts          # 12 detailed treatments dataset
│   └── lib/
│       └── db.ts                  # Persistent data storage engine
├── next.config.ts
├── postcss.config.mjs
├── package.json
└── tsconfig.json
```

---

## 💻 Getting Started Locally

### Prerequisites
* Node.js v18.17+ or v20+ installed
* npm, pnpm, or yarn

### 1. Clone the repository
```bash
git clone https://github.com/AnandRajG/Dental_Clinic_website_Project.git
cd Dental_Clinic_website_Project
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 4. Code Quality Checks
```bash
# Type check with TypeScript compiler
npx tsc --noEmit

# Run ESLint linter
npm run lint
```

---

## 🚢 Deployment (Vercel)

### Manual CLI Deployment (Recommended for Manual Control)

To deploy manually whenever you choose, run the following commands in your project root:

1. **Log in to Vercel (First-time setup only)**:
   ```bash
   npx vercel login
   ```

2. **Deploy directly to Production**:
   ```bash
   npx vercel --prod
   ```
   *This uploads and publishes your latest changes directly to your live production URL without needing Git hooks.*

3. **Deploy a Preview URL (Optional for testing before publishing)**:
   ```bash
   npx vercel
   ```

---

### Controlling Automatic GitHub Deployments

If you have connected your GitHub repository to Vercel and want to push commits **without** triggering an automatic build:

* Add **`[skip ci]`** or **`[skip vercel]`** to your commit message:
  ```bash
  git commit -m "Updated clinical notes [skip ci]"
  git push origin main
  ```
* Alternatively, in your **Vercel Dashboard → Settings → Git**, click **Disconnect** under *Connected Git Repository* to switch to 100% manual CLI deployments.

---

## 📄 License & Disclaimer

* **Disclaimer**: All clinical content, procedural descriptions, and guidance provided on this website are for educational and informational purposes. Treatments should only be undertaken following professional diagnosis by a licensed dental practitioner.
* **Copyright**: © 2026 Aura Dental Studio. All rights reserved.
