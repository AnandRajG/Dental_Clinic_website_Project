export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "interiors" | "treatment-rooms" | "technology" | "team";
  description: string;
  image: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Executive Reception & Hospitality Lounge",
    category: "interiors",
    description: "Serene hospitality lounge featuring organic wood acoustics, organic tea bar, and ambient air purification.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "g2",
    title: "Surgical Operatory Suite A",
    category: "treatment-rooms",
    description: "Private operatory with ceiling video streaming, ergonomic memory foam seating, and Class-B surgical air filtration.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "g3",
    title: "3D CBCT Cone-Beam Imaging Center",
    category: "technology",
    description: "Ultra-low-dose 3D volumetric tomography providing sub-millimeter anatomical insight for implant precision.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "g4",
    title: "Cosmetic Smile Design Consultation Studio",
    category: "interiors",
    description: "High-definition portrait lighting and digital smile mock-up screens where patients preview their transformed smiles.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "g5",
    title: "7-Step Hospital Grade Sterilization Lab",
    category: "technology",
    description: "Visible glass-enclosed cleanroom utilizing computerized autoclaves, barcode instrument tracking, and enzymatic washers.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "g6",
    title: "Child-Friendly Pediatric Dental Suite",
    category: "treatment-rooms",
    description: "Specially calibrated playful space featuring interactive touch screens, ceiling cartoons, and gentle pediatric equipment.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "g7",
    title: "iTero 3D Digital Intraoral Optical Scanner",
    category: "technology",
    description: "Powder-free 3D color scanner generating 6,000 frames per second, replacing traditional messy dental impression molds.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "g8",
    title: "Specialist Dental Clinical Team",
    category: "team",
    description: "Our multidisciplinary board-certified dental surgeons, prosthodontists, orthodontists, and hygienists.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200"
  }
];
