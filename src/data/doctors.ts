export interface Doctor {
  id: string;
  name: string;
  role: string;
  degrees: string;
  experienceYears: number;
  specializations: string[];
  bio: string;
  image: string;
  memberships: string[];
  availableDays: string[];
}

export const DOCTORS: Doctor[] = [
  {
    id: "dr-michael-sterling-GG",
    name: "Dr. Michael Sterling",
    role: "Chief Prosthodontist & Implantologist",
    degrees: "DDS, MDS (Prosthodontics), FICOI",
    experienceYears: 16,
    specializations: ["Dental Implants", "Full Mouth Reconstruction", "CAD/CAM Restorations", "Zirconia Crowns"],
    bio: "Dr. Sterling is a globally recognized prosthodontist who completed his advanced surgical fellowship at Columbia University. Having successfully placed over 4,500 dental implants, he combines digital CBCT navigation with biocompatible ceramic dentistry to deliver restorative transformations with natural aesthetics.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
    memberships: ["International Congress of Oral Implantologists (ICOI)", "American College of Prosthodontists (ACP)", "American Dental Association (ADA)"],
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"]
  },
  {
    id: "dr-evelyn-vance",
    name: "Dr. Evelyn Vance",
    role: "Senior Orthodontist & Clear Aligner Specialist",
    degrees: "DMD, MS (Orthodontics)",
    experienceYears: 13,
    specializations: ["Clear Aligners", "Aesthetic Ceramic Braces", "Airway-Focused Orthodontics", "Interceptive Pediatric Aligners"],
    bio: "Dr. Vance is a Diamond-tier Clear Aligner provider who completed her orthodontic specialty residency at Harvard School of Dental Medicine. She focuses on airway health, facial symmetry, and non-extraction clear aligner therapies for teenagers and working professionals.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=800",
    memberships: ["American Association of Orthodontists (AAO)", "World Federation of Orthodontists", "Roth Williams International Society"],
    availableDays: ["Monday", "Wednesday", "Friday", "Saturday"]
  },
  {
    id: "dr-julian-rivera",
    name: "Dr. Julian Rivera",
    role: "Microscopic Endodontist & Pain Specialist",
    degrees: "DDS, Certificate in Endodontics",
    experienceYears: 14,
    specializations: ["Painless Root Canal Therapy", "Endodontic Microsurgery", "Dental Trauma Management", "Internal Bleaching"],
    bio: "Passionate about dispelling dental anxiety, Dr. Rivera is celebrated for his gentle touch and mastery of dental operating microscopes. He has completed over 6,000 root canal procedures with a 99.2% success rate, ensuring patients remain completely comfortable from start to finish.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800",
    memberships: ["American Association of Endodontists (AAE)", "New York State Dental Association"],
    availableDays: ["Tuesday", "Wednesday", "Thursday", "Friday"]
  },
  {
    id: "dr-claire-zhang",
    name: "Dr. Claire Zhang",
    role: "Pediatric Dentist & Preventive Specialist",
    degrees: "BDS, MSc (Pediatric Dentistry)",
    experienceYears: 11,
    specializations: ["Child Psychology in Dentistry", "Laser Frenectomy", "Pit & Fissure Sealants", "Sedation Dentistry"],
    bio: "Dr. Zhang has an extraordinary gift for making children feel calm, safe, and excited about dental visits. She emphasizes preventative habit coaching, painless laser treatments, and positive reinforcement to establish lifelong oral health confidence.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
    memberships: ["American Academy of Pediatric Dentistry (AAPD)", "International Association of Paediatric Dentistry"],
    availableDays: ["Monday", "Tuesday", "Thursday", "Saturday"]
  },
  {
    id: "dr-arthur-pendelton",
    name: "Dr. Arthur Pendelton",
    role: "Board Certified Periodontist & Oral Surgeon",
    degrees: "DDS, Board Certified Periodontist",
    experienceYears: 18,
    specializations: ["Minimally Invasive Laser Periodontics", "Platelet-Rich Fibrin (PRF) Healing", "Wisdom Tooth Surgery", "Gum Grafting"],
    bio: "Dr. Pendelton is a pioneer in laser-assisted periodontics and soft-tissue grafting. He is dedicated to helping patients save loose teeth and reverse gum disease without aggressive scalpel surgery, employing biological growth factors for rapid recovery.",
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&q=80&w=800",
    memberships: ["American Academy of Periodontology (AAP)", "Academy of Osseointegration (AO)"],
    availableDays: ["Monday", "Tuesday", "Thursday", "Friday"]
  }
];
