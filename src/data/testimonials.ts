export interface Testimonial {
  id: string;
  name: string;
  roleOrLocation: string;
  rating: number;
  treatment: string;
  reviewDate: string;
  quote: string;
  avatar: string;
  verified: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Alexandra Hawthorne",
    roleOrLocation: "Manhattan, NY",
    rating: 5,
    treatment: "Dental Implants",
    reviewDate: "November 2025",
    quote: "I was terrified of getting a dental implant after a sports accident. Dr. Sterling and the Aura team made the entire process completely painless. The 3D scan and guided surgery took under an hour, and my new tooth looks and feels 100% natural. Truly a world-class clinic.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    verified: true
  },
  {
    id: "t2",
    name: "Marcus Holloway",
    roleOrLocation: "Brooklyn, NY",
    rating: 5,
    treatment: "Clear Aligners",
    reviewDate: "January 2026",
    quote: "As a corporate consultant who speaks on stage, I couldn't wear traditional braces. Dr. Vance designed a 9-month clear aligner plan that worked wonders. Most of my colleagues never even realized I was wearing aligners. The results exceeded all my expectations!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    verified: true
  },
  {
    id: "t3",
    name: "Sophia Chen-Miller",
    roleOrLocation: "Jersey City, NJ",
    rating: 5,
    treatment: "Teeth Whitening & Veneers",
    reviewDate: "February 2026",
    quote: "The clinic looks more like a luxury boutique hotel than a dental practice! The noise-canceling headphones and ceiling entertainment helped me completely relax. My teeth are 7 shades lighter and my porcelain veneers look so natural that people just think I was born with perfect teeth.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    verified: true
  },
  {
    id: "t4",
    name: "David K. Reynolds",
    roleOrLocation: "White Plains, NY",
    rating: 5,
    treatment: "Root Canal Treatment",
    reviewDate: "December 2025",
    quote: "I arrived with an excruciating toothache on a Saturday morning. Dr. Rivera saw me immediately. I did not feel a single pinch during the entire procedure. He saved my molar in one single visit. The relief was instantaneous. I cannot recommend this clinic enough.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    verified: true
  },
  {
    id: "t5",
    name: "Elena Rostova",
    roleOrLocation: "Greenwich, CT",
    rating: 5,
    treatment: "Pediatric Dentistry",
    reviewDate: "October 2025",
    quote: "My 6-year-old son used to cry at the mere mention of a dentist. Dr. Claire Zhang turned the appointment into an interactive adventure! Now he actually asks when we are going back to the dental clinic. Exceptional care and warmth.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    verified: true
  },
  {
    id: "t6",
    name: "Julian Gomez",
    roleOrLocation: "Queens, NY",
    rating: 5,
    treatment: "Teeth Cleaning & Airflow",
    reviewDate: "November 2025",
    quote: "The Swiss Airflow cleaning was a revelation. Zero painful scraping, warm water, and all my stubborn coffee stains disappeared in 40 minutes. My teeth have never felt this clean and polished before.",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200",
    verified: true
  }
];
