export interface ProcedureStep {
  step: number;
  title: string;
  description: string;
}

export interface TreatmentFAQ {
  question: string;
  answer: string;
}

export interface Treatment {
  id: string;
  slug: string;
  title: string;
  category: "Preventive" | "Restorative" | "Cosmetic" | "Orthodontics" | "Surgical" | "Periodontics" | "Pediatric";
  shortDescription: string;
  fullDescription: string;
  duration: string;
  anesthesia: string;
  recoveryTime: string;
  pricingGuide: string;
  iconName: string;
  featured: boolean;
  image: string;
  benefits: string[];
  whoNeedsIt: string[];
  procedureSteps: ProcedureStep[];
  faqs: TreatmentFAQ[];
}

export const TREATMENTS: Treatment[] = [
  {
    id: "general-dentistry",
    slug: "general-dentistry",
    title: "General Dentistry",
    category: "Preventive",
    shortDescription: "Comprehensive oral examinations, digital cavity screenings, tooth-colored fillings, and preventative care.",
    fullDescription: "Our general dentistry practice focuses on diagnosing, preventing, and treating common oral health conditions before they require extensive intervention. Using digital low-radiation radiography, high-definition intraoral cameras, and biocompatible composite resin fillings, we preserve your natural tooth structure with precision and comfort.",
    duration: "45 - 60 mins",
    anesthesia: "Optional / Local Numbing Gel",
    recoveryTime: "Immediate",
    pricingGuide: "Consultation & Exam from $85",
    iconName: "ShieldCheck",
    featured: true,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Early detection of hidden decay and enamel demineralization",
      "Mercury-free, tooth-colored composite restorations that match your smile",
      "Oral cancer screening with advanced fluorescence visualization",
      "Personalized preventive oral hygiene blueprints for home care"
    ],
    whoNeedsIt: [
      "Individuals due for their routine 6-month checkup",
      "Patients experiencing tooth sensitivity to hot, cold, or sweet foods",
      "Anyone noticing rough edges, food traps, or chipping on teeth",
      "Patients with worn or outdated silver amalgam fillings"
    ],
    procedureSteps: [
      { step: 1, title: "3D Digital Imaging & Assessment", description: "High-resolution digital X-rays and intraoral photo capture to evaluate tooth structure, bone levels, and hidden decay." },
      { step: 2, title: "Comprehensive Examination", description: "Detailed clinical evaluation of teeth, gums, occlusion (bite), and soft tissues including oral cancer screening." },
      { step: 3, title: "Minimally Invasive Treatment", description: "Gentle cavity preparation and placement of layered, shade-matched composite resin cured with specialized LED light." },
      { step: 4, title: "Finishing & Bite Optimization", description: "Sculpting, micro-polishing to high luster, and fine-tuning your bite alignment for natural chewing comfort." }
    ],
    faqs: [
      { question: "How often should I schedule a general dental checkup?", answer: "We recommend visiting every six months for a comprehensive exam and cleaning. Patients with active periodontal conditions or higher cavity risk may benefit from appointments every 3 to 4 months." },
      { question: "Are dental composite fillings noticeable?", answer: "Not at all. We custom-blend multiple shades of biocompatible composite resin to match the exact translucency, shade, and contours of your natural enamel." },
      { question: "Do routine exams hurt?", answer: "Routine checkups are completely painless. If any sensitive area requires treatment, we utilize gentle topical numbing gels and computer-assisted local anesthesia to guarantee comfort." }
    ]
  },
  {
    id: "teeth-cleaning",
    slug: "teeth-cleaning",
    title: "Teeth Cleaning & Prophylaxis",
    category: "Preventive",
    shortDescription: "Advanced ultrasonic calculus removal, Swiss EMS Airflow stain therapy, and enamel mineral glaze.",
    fullDescription: "Experience the next evolution of dental hygiene with Guided Biofilm Therapy (GBT) powered by Swiss EMS Airflow technology. Unlike traditional scraping, our gentle aerosolized warm-water and erythritol powder system removes stubborn plaque, bacterial biofilm, and surface stains painlessly, even beneath the gumline.",
    duration: "40 - 50 mins",
    anesthesia: "None required / Painless GBT Protocol",
    recoveryTime: "Immediate",
    pricingGuide: "Prophylaxis & Airflow from $120",
    iconName: "Sparkles",
    featured: true,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Removes 100% of bacterial biofilm and tartar without enamel scratching",
      "Erases stubborn coffee, tea, red wine, and tobacco stains naturally",
      "Gentle warm-water delivery prevents tooth sensitivity during cleaning",
      "Reverses early gingivitis and delivers lasting fresh breath"
    ],
    whoNeedsIt: [
      "Anyone due for regular 6-month preventative hygiene maintenance",
      "Individuals with tea, coffee, smoking, or dietary enamel staining",
      "Patients experiencing swollen, bleeding gums when flossing or brushing",
      "Orthodontic patients wearing braces or aligners needing deep biofilm clearance"
    ],
    procedureSteps: [
      { step: 1, title: "Biofilm Disclosing", description: "Application of a natural dye that highlights bacterial plaque, allowing you and your hygienist to see exact target areas." },
      { step: 2, title: "Swiss Airflow Therapy", description: "Warm water, air, and fine erythritol micro-powder gently cleanse plaque, biofilm, and surface discolorations." },
      { step: 3, title: "Ultrasonic Piezon Scaling", description: "Targeted acoustic cavitation dissolves hard calcified tartar deposits with zero pain or pressure on sensitive roots." },
      { step: 4, title: "Fluoride / Bio-Enamel Remineralization", description: "Application of high-potency fluoride varnish or hydroxyapatite seal to reinforce enamel against future acid attacks." }
    ],
    faqs: [
      { question: "Is Airflow cleaning painful if I have sensitive teeth?", answer: "No. The water temperature is warmed to body comfort (37°C), and the erythritol powder particles are microscopic (14 microns), making it significantly gentler than traditional scraper tools." },
      { question: "How does deep cleaning differ from routine cleaning?", answer: "Routine cleaning addresses plaque above the gumline. If calculus has progressed deeper into periodontal pockets, a specialized deep cleaning (scaling and root planing) is performed to prevent bone loss." },
      { question: "Can I eat right after my teeth cleaning?", answer: "Yes, though if a fluoride treatment was applied, we advise waiting 30 minutes before drinking hot beverages or eating crunchy, acidic foods." }
    ]
  },
  {
    id: "root-canal-treatment",
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    category: "Restorative",
    shortDescription: "Single-visit microscopic endodontics to eliminate severe toothache and preserve your natural tooth.",
    fullDescription: "Root canal therapy has been completely revolutionized. Utilizing high-magnification dental surgical microscopes, digital 3D apex locators, and flexible nickel-titanium rotary instruments, our endodontic specialists eliminate deep nerve infections comfortably in a single relaxed appointment—saving your natural tooth for a lifetime.",
    duration: "60 - 75 mins",
    anesthesia: "Advanced Local Anesthesia (100% Numb Guarantee)",
    recoveryTime: "1 - 2 days (Mild soreness)",
    pricingGuide: "Root Canal Therapy from $450",
    iconName: "Activity",
    featured: true,
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Instantly relieves throbbing toothache and nerve inflammation",
      "Saves your natural tooth structure, avoiding costly extractions and bone loss",
      "Single-visit efficiency with continuous 3D digital imaging accuracy",
      "Modern anesthesia ensures the procedure is as comfortable as a simple filling"
    ],
    whoNeedsIt: [
      "Patients experiencing severe, spontaneous, or lingering throbbing tooth pain",
      "Prolonged sensitivity to temperature changes lasting long after food is removed",
      "Pimple-like swelling or abscess on the gums near a troubled tooth",
      "Deep untreated dental decay or trauma that has breached the inner pulp chamber"
    ],
    procedureSteps: [
      { step: 1, title: "Precise 3D Mapping & Numbing", description: "Digital CBCT imaging maps internal canal anatomy; profound local anesthesia guarantees complete painlessness." },
      { step: 2, title: "Rubber Dam Isolation & Access", description: "A sterile medical barrier isolates the tooth from saliva and bacteria while conservative access to the pulp chamber is created." },
      { step: 3, title: "Microscopic Canal Debridement", description: "Rotary nickel-titanium instruments and laser-activated antimicrobial irrigation cleanse and sterilize root micro-canals." },
      { step: 4, title: "Bioceramic 3D Hermetic Seal", description: "Canals are sealed with biocompatible gutta-percha and bioceramic cement, followed by preparation for a protective crown." }
    ],
    faqs: [
      { question: "Does a root canal hurt?", answer: "This is the most common dental myth. The infection causes pain; the root canal eliminates it. Under modern local anesthesia, the procedure is as gentle and pain-free as receiving a standard filling." },
      { question: "Why do I need a crown after a root canal?", answer: "Without its inner blood supply, a treated tooth becomes brittle over time. A custom porcelain or zirconia crown protects the tooth from biting forces and prevents fractures." },
      { question: "Can a root canal be completed in one visit?", answer: "Yes, over 90% of our root canal procedures are completed in a single, relaxed 60-to-75 minute session using high-precision rotary technology." }
    ]
  },
  {
    id: "dental-implants",
    slug: "dental-implants",
    title: "Dental Implants",
    category: "Restorative",
    shortDescription: "Permanent, titanium and zirconia root replacements that look, feel, and function like natural teeth.",
    fullDescription: "Dental implants are the gold standard for replacing missing teeth. Consisting of a biocompatible titanium or ceramic post fused securely to your jawbone, topped with a custom-milled zirconia crown, implants restore 100% of your biting power and prevent the facial bone recession caused by missing teeth.",
    duration: "45 - 90 mins per implant",
    anesthesia: "Local Anesthesia or Conscious Sedation",
    recoveryTime: "3 - 5 days initial healing; osseointegration over 3 months",
    pricingGuide: "Full Implant & Custom Crown from $1,450",
    iconName: "Anchor",
    featured: true,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Permanent solution that never decays, slips, or requires removal",
      "Preserves facial jawbone density and prevents premature facial aging",
      "Restores full natural chewing force for steaks, apples, and crunchy foods",
      "Preserves adjacent healthy teeth without cutting them down for bridges"
    ],
    whoNeedsIt: [
      "Anyone missing one, several, or all natural teeth",
      "Patients frustrated with loose, uncomfortable, or clicking dentures",
      "Individuals with non-restorable, broken, or severely infected teeth",
      "Adults seeking a permanent, natural-feeling tooth restoration"
    ],
    procedureSteps: [
      { step: 1, title: "3D CBCT Virtual Surgery Planning", description: "3D computerized tomography maps bone volume and nerve paths; a custom surgical guide is 3D printed for sub-millimeter precision." },
      { step: 2, title: "Guided Implant Placement", description: "The biocompatible medical titanium post is inserted into the jawbone using gentle, computer-guided surgical protocols." },
      { step: 3, title: "Osseointegration & Healing", description: "Over 8 to 12 weeks, the bone naturally integrates with the microscopic implant surface, creating a permanent bond." },
      { step: 4, title: "Custom Zirconia Crown Delivery", description: "An intraoral 3D scan captures the implant's exact angle to fabricate and seat a lifelike, custom-shaded porcelain or zirconia crown." }
    ],
    faqs: [
      { question: "How long do dental implants last?", answer: "With regular brushing, flossing, and 6-month dental checkups, dental implants are designed to last a lifetime, boasting an industry-leading success rate over 98%." },
      { question: "What if I do not have enough jawbone for an implant?", answer: "We routinely perform modern bone grafting or sinus lifts using biocompatible graft materials, rebuilding the necessary foundation safely and reliably." },
      { question: "Will I be left without a tooth while the implant heals?", answer: "Never. We provide discreet, aesthetic temporary teeth so you can smile, speak, and eat comfortably throughout the healing period." }
    ]
  },
  {
    id: "teeth-whitening",
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    category: "Cosmetic",
    shortDescription: "Philips Zoom® in-clinic laser brightening and custom-molded take-home whitening systems.",
    fullDescription: "Achieve a dazzling, radiant smile up to 8 shades lighter in just 45 minutes. Our medical-grade whitening protocols utilize pH-balanced hydrogen peroxide formulas activated by safe LED light, combined with proprietary ACP (Amorphous Calcium Phosphate) technology to virtually eliminate post-treatment tooth sensitivity.",
    duration: "45 - 60 mins",
    anesthesia: "None required / Enamel Desensitizer included",
    recoveryTime: "Immediate (White diet for 48 hrs)",
    pricingGuide: "In-Clinic Laser Whitening from $280",
    iconName: "SunMedium",
    featured: true,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Brightens teeth by up to 8 shades in a single comfortable clinical session",
      "Enamel-safe, pH-neutral medical gel protects tooth structure and restorations",
      "Proprietary ACP desensitizing formula ensures comfortable post-treatment care",
      "Long-lasting radiance with our complimentary take-home touch-up kit"
    ],
    whoNeedsIt: [
      "Patients with discoloration from coffee, dark tea, red wine, or tobacco",
      "Individuals preparing for milestone events: weddings, interviews, or photo shoots",
      "Anyone whose enamel has naturally yellowed or darkened with age",
      "Patients who have completed orthodontic treatment and want a smile glow"
    ],
    procedureSteps: [
      { step: 1, title: "Shade Shade Analysis & Gum Barrier", description: "Baseline shade recorded with digital spectrophotometer; liquid dental dam protects gums and lips securely." },
      { step: 2, title: "Zoom Gel Application", description: "Application of professional 25% hydrogen peroxide gel with built-in desensitizing agents across aesthetic smile zone." },
      { step: 3, title: "LED Light Activation", description: "Three 15-minute cycles of gentle blue LED light accelerate molecular breakdown of deep internal enamel stains." },
      { step: 4, title: "Enamel Seal & Post-Care", description: "Application of Relief ACP calcium-phosphate booster to remineralize enamel, seal pores, and lock in brilliant luster." }
    ],
    faqs: [
      { question: "Does professional whitening damage tooth enamel?", answer: "No. Professional in-office whitening is clinically proven to be completely safe for enamel. The gel opens microscopic pores to lift deep organic stains without degrading mineral density." },
      { question: "How long do teeth whitening results last?", answer: "Results typically last 12 to 24 months depending on dietary habits. With occasional touch-ups using custom take-home trays and good hygiene, your brilliant shade can last indefinitely." },
      { question: "Will whitening work on existing crowns or veneers?", answer: "Whitening gels only lift stains on natural tooth enamel. If you have crowns or veneers in your smile zone, we plan your shade goals so restorations seamlessly harmonize." }
    ]
  },
  {
    id: "braces-orthodontics",
    slug: "braces-orthodontics",
    title: "Braces & Orthodontics",
    category: "Orthodontics",
    shortDescription: "Aesthetic ceramic, self-ligating Damon, and traditional braces for precise bite and alignment correction.",
    fullDescription: "Modern orthodontics combines aesthetic subtlety with clinical engineering. Whether you choose discreet tooth-colored ceramic brackets or low-friction Damon self-ligating systems, our board-certified orthodontists correct complex misalignments, crossbites, and crowding gently and efficiently.",
    duration: "12 - 24 months total care",
    anesthesia: "Non-invasive placement",
    recoveryTime: "2 - 3 days mild adjustment soreness",
    pricingGuide: "Comprehensive Orthodontics from $2,200",
    iconName: "Grid",
    featured: false,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Resolves even the most severe skeletal bite misalignments and complex crowding",
      "Clear ceramic brackets blend naturally with tooth enamel for understated wear",
      "Damon low-friction brackets mean faster treatment times and fewer office visits",
      "Corrects airway constriction, speech clarity, and uneven jaw joint wear"
    ],
    whoNeedsIt: [
      "Teens and adults with moderate to severe crowding or gaps",
      "Patients with overbites, underbites, crossbites, or open bites",
      "Individuals experiencing jaw clicking, TMJ strain, or uneven tooth wear",
      "Anyone desiring lifelong structural symmetry and functional chewing harmony"
    ],
    procedureSteps: [
      { step: 1, title: "Comprehensive 3D Cephalometric Scan", description: "Full digital facial analysis, dental models, and bone density scans to formulate a tailored orthodontic biomechanical plan." },
      { step: 2, title: "Precision Bracket Bonding", description: "Ultra-precise placement of low-profile ceramic or titanium brackets bonded with light-cured dental resin." },
      { step: 3, title: "Custom Archwire Engagement", description: "Thermal memory wires apply gentle, continuous biological forces that guide teeth into their ideal physiological positions." },
      { step: 4, title: "Progress Checks & Refinements", description: "Periodic 6-to-8 week quick adjustments to evaluate tooth trajectory, culminating in custom retainers to lock in your smile." }
    ],
    faqs: [
      { question: "Am I too old for braces?", answer: "Never! Healthy teeth can be moved at any age. Over 35% of our orthodontic patients are adults choosing aesthetic ceramic or self-ligating braces." },
      { question: "Are ceramic braces noticeable?", answer: "Ceramic braces use translucent polycrystalline alumina brackets that match your natural tooth color, making them remarkably discreet in photos and conversation." },
      { question: "How often will I need adjustment appointments?", answer: "With our modern high-tech wire alloys, office check-ins are typically scheduled every 6 to 8 weeks, respecting your busy calendar." }
    ]
  },
  {
    id: "clear-aligners",
    slug: "clear-aligners",
    title: "Clear Aligners",
    category: "Orthodontics",
    shortDescription: "Nearly invisible, custom-milled removable aligners to straighten teeth discreetly and comfortably.",
    fullDescription: "Transform your smile without wires, metal brackets, or dietary restrictions. Using our 3D iTero intraoral scanner, we simulate your entire smile transformation before treatment begins. You will receive a series of crystal-clear, BPA-free medical polyurethane trays that gently guide your teeth into optimal alignment week by week.",
    duration: "6 - 15 months average",
    anesthesia: "Completely Non-invasive",
    recoveryTime: "Zero downtime",
    pricingGuide: "Full Clear Aligner System from $1,850",
    iconName: "EyeOff",
    featured: true,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Virtually invisible in person and on camera—straighten teeth in total confidence",
      "Removable for effortless eating, flossing, brushing, and special occasions",
      "Predictable 3D visual outcome software shows your final smile before you start",
      "No sharp wires or bracket friction; smooth scalloped edges maximize gum comfort"
    ],
    whoNeedsIt: [
      "Professionals and adults desiring discreet, unnoticeable orthodontic care",
      "Individuals with mild to moderate tooth crowding, spacing, or relapse",
      "Patients who value flossing and eating without hardware food traps",
      "Anyone who wants fewer in-clinic appointments with convenient home wear"
    ],
    procedureSteps: [
      { step: 1, title: "3D Digital iTero Scan", description: "Instant 6,000-frame-per-second optical scan replaces messy alginate impressions and models your dental arches in real time." },
      { step: 2, title: "ClinCheck 3D Treatment Simulation", description: "Review a photorealistic 3D animation mapping every micro-movement from day one to your final radiant smile." },
      { step: 3, title: "Custom Aligner Fabrication", description: "Trays are 3D printed with SmartTrack medical polymer for gentle, consistent biological pressure." },
      { step: 4, title: "Bi-Weekly Tray Progression", description: "Switch to a new custom tray set every 10 to 14 days, with convenient virtual and periodic in-clinic progress milestones." }
    ],
    faqs: [
      { question: "How many hours per day must I wear my aligners?", answer: "For optimal biological tooth movement, aligners should be worn 20 to 22 hours daily, removing them only for meals, hot drinks, brushing, and flossing." },
      { question: "Will clear aligners affect my speech?", answer: "Most patients adjust within 24 to 48 hours. A very subtle lisp may occur initially as your tongue adapts, disappearing rapidly." },
      { question: "Can aligners fix bite issues as well as crooked teeth?", answer: "Yes! Modern aligners with precision attachments and elastics can successfully resolve deep bites, open bites, crossbites, and severe crowding." }
    ]
  },
  {
    id: "cosmetic-dentistry",
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry & Veneers",
    category: "Cosmetic",
    shortDescription: "Ultra-thin porcelain veneers, composite bonding, and digital smile makeovers tailored to your facial harmony.",
    fullDescription: "Elevate your smile into a masterpiece of symmetry and natural brilliance. Combining artistic eye with digital smile design (DSD), we craft custom micro-thin porcelain veneers, aesthetic gum contours, and composite bonding that enhance your facial features while preserving maximum natural tooth structure.",
    duration: "2 - 3 visits over 2 weeks",
    anesthesia: "Local Anesthesia / Comfort Sedation",
    recoveryTime: "1 - 2 days adaptation",
    pricingGuide: "Handcrafted Porcelain Veneer from $650 / tooth",
    iconName: "Smile",
    featured: true,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Permanently resolves severe discoloration, gaps, chips, and irregular lengths",
      "Custom hand-layered ceramic mimics natural enamel light transmission and fluorescence",
      "Stain-resistant porcelain retains glossy shine against wine, coffee, and spices",
      "Digital Smile Design enables you to test-drive your new smile in your mouth first"
    ],
    whoNeedsIt: [
      "Patients with chipped, fractured, or naturally undersized teeth",
      "Individuals with severe tetracycline stains or fluorosis resistant to bleaching",
      "Anyone unhappy with uneven, asymmetrical, or gummy smile proportions",
      "Those seeking a transformative, celebrity-caliber smile transformation"
    ],
    procedureSteps: [
      { step: 1, title: "Digital Smile Design Consultation", description: "Facial videography, high-res photography, and 3D digital impressions establish optimal facial and lip proportions." },
      { step: 2, title: "Aesthetic Trial Smile (Mock-Up)", description: "We fabricate a temporary, reversible resin trial smile placed directly over your teeth so you can preview the aesthetics in the mirror." },
      { step: 3, title: "Microscopic Enamel Preparation", description: "Ultra-conservative preparation (0.3mm to 0.5mm) ensures maximum preservation of healthy natural tooth enamel." },
      { step: 4, title: "Bonding & Master Ceramic Seating", description: "Master ceramist porcelain veneers are permanently bonded with resin cement, polished to high-sheen perfection." }
    ],
    faqs: [
      { question: "How long do porcelain veneers last?", answer: "High-grade porcelain veneers routinely last 15 to 20+ years when cared for with regular brushing, flossing, and wearing a nightguard if you clench." },
      { question: "Do veneers look fake or unnaturally bulky?", answer: "Not at Aura Dental. We work with master dental ceramists who hand-layer incisal translucency, subtle mamelons, and micro-textures to match natural enamel." },
      { question: "Is the veneer procedure reversible?", answer: "Because a microscopic layer of enamel is contoured to ensure a flush, seamless margin, porcelain veneers are considered a permanent, lifetime restoration." }
    ]
  },
  {
    id: "crowns-bridges",
    slug: "crowns-bridges",
    title: "Dental Crowns & Bridges",
    category: "Restorative",
    shortDescription: "CAD/CAM milled monolithic zirconia and e.max® ceramic restorations for cracked, heavily restored, or missing teeth.",
    fullDescription: "Restore damaged, broken, or missing teeth with full strength and lifelike beauty. Our clinic employs computer-aided design and manufacturing (CAD/CAM) to fabricate precision-fitting metal-free zirconia and IPS e.max lithium disilicate crowns and bridges that seamlessly blend with your surrounding dentition.",
    duration: "1 - 2 visits (Digital Scan)",
    anesthesia: "Gentle Local Anesthesia",
    recoveryTime: "Immediate",
    pricingGuide: "All-Ceramic Zirconia Crown from $580",
    iconName: "Shield",
    featured: false,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Protects fragile, root-canal-treated, or cracked teeth from fracture under bite force",
      "Metal-free ceramic eliminates the unsightly dark gray line at the gumline",
      "Fixed dental bridges bridge the gap of one or more missing consecutive teeth",
      "Micro-precision digital scan ensures exact margin seal, preventing future recurrent decay"
    ],
    whoNeedsIt: [
      "Patients with extensive existing fillings that have fractured or weakened",
      "Teeth that have undergone root canal therapy needing reinforcement",
      "Individuals missing 1 or 2 adjacent teeth who are not candidates for implants",
      "Severely worn down, abraded, or cosmetically disfigured teeth"
    ],
    procedureSteps: [
      { step: 1, title: "Preparation & Digital Impression", description: "Removal of decay and gentle shaping of the tooth under local anesthesia, followed by a powder-free 3D optical scan." },
      { step: 2, title: "Custom Temporary Protection", description: "An aesthetic provisional crown is placed to protect the tooth and maintain normal chewing function during fabrication." },
      { step: 3, title: "CAD/CAM Robotic Milling", description: "A solid block of medical zirconia or lithium disilicate is robotically carved to exact micron tolerances and furnace-glazed." },
      { step: 4, title: "Permanent Adhesive Cementation", description: "The restoration is checked for bite precision and permanently bonded with high-bond resin cement." }
    ],
    faqs: [
      { question: "What is the difference between a crown and a bridge?", answer: "A crown caps and strengthens a single damaged tooth. A bridge uses crowns on adjacent anchor teeth to suspend an artificial replacement tooth across a missing tooth gap." },
      { question: "Can zirconia crowns chip or break?", answer: "Monolithic zirconia is one of the strongest materials in modern dentistry—virtually indestructible under normal physiological chewing pressures." },
      { question: "How do I clean underneath a dental bridge?", answer: "We supply specialized super-floss or interdental brushes designed to slide smoothly underneath the pontic (suspended tooth) to keep gums healthy." }
    ]
  },
  {
    id: "pediatric-dentistry",
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    category: "Pediatric",
    shortDescription: "Gentle, fear-free dental care for infants, children, and teens in a playful, comforting setting.",
    fullDescription: "Instilling positive, lifelong oral health habits begins in childhood. Our pediatric dental suite is designed specifically to alleviate anxiety through 'Tell-Show-Do' techniques, gentle preventative cleanings, protective molar sealants, and early interceptive orthodontic assessments in a fun, reassuring atmosphere.",
    duration: "30 - 45 mins",
    anesthesia: "Gentle / Nitrous Oxide 'Laughing Gas' available",
    recoveryTime: "Immediate",
    pricingGuide: "Child Exam, Cleaning & Fluoride from $75",
    iconName: "HeartHandshake",
    featured: false,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Child-centered 'Tell-Show-Do' approach builds excitement rather than dental fear",
      "Painless pit-and-fissure sealants protect developing molars from 80% of cavities",
      "Biocompatible fluoride treatments remineralize baby and permanent enamel",
      "Early jaw development screening identifies airway or bite issues proactively"
    ],
    whoNeedsIt: [
      "Infants reaching their 1st birthday or erupting their first primary tooth",
      "Children and adolescents requiring routine 6-month checkups and cleanings",
      "Kids with active cavities, tooth sensitivity, or thumb-sucking habits",
      "Young athletes requiring custom-fitted mouthguards for sports protection"
    ],
    procedureSteps: [
      { step: 1, title: "Friendly Welcome & Room Exploration", description: "Our team introduces the child to the dental chair, instruments, and dental 'magic water' in an unhurried, playful manner." },
      { step: 2, title: "Gentle Tooth Count & Polish", description: "Gentle cleaning of soft plaque with kid-approved flavored polish and soft spinning brush." },
      { step: 3, title: "Protective Enamel Sealants", description: "Quick, painless liquid resin brushed into deep grooves of back chewing teeth and cured with gentle blue light." },
      { step: 4, title: "Parent Coaching & Reward", description: "Guidance for parents on diet, flossing techniques, and milestone development, topped off with a trip to our treasure box!" }
    ],
    faqs: [
      { question: "When should my child have their first dental visit?", answer: "The American Academy of Pediatric Dentistry recommends scheduling their first visit by age one, or within six months after their first baby tooth erupts." },
      { question: "Why treat baby teeth if they fall out anyway?", answer: "Baby teeth are crucial for chewing, speech development, and holding space in the jaw for permanent teeth. Untreated infections can damage underlying adult teeth." },
      { question: "What if my child is extremely anxious?", answer: "We specialize in compassionate pediatric management. We also offer gentle nitrous oxide ('laughing gas') which relaxes children safely while keeping them awake and cooperative." }
    ]
  },
  {
    id: "wisdom-tooth-removal",
    slug: "wisdom-tooth-removal",
    title: "Wisdom Tooth Removal",
    category: "Surgical",
    shortDescription: "Gentle, atraumatic third molar extraction with sedation options and advanced platelet-rich healing.",
    fullDescription: "Impacted or misaligned wisdom teeth can trigger painful crowding, cystic lesions, and severe recurring gum infections. Our oral surgery team provides gentle, computer-planned wisdom tooth extractions using atraumatic piezosurgery and IV sedation options, ensuring you sleep peacefully through the procedure with minimal swelling.",
    duration: "45 - 60 mins for all 4 teeth",
    anesthesia: "Profound Local Anesthesia or IV Twilight Sedation",
    recoveryTime: "3 - 5 days typical recovery",
    pricingGuide: "Surgical Extraction from $240 / tooth",
    iconName: "Zap",
    featured: false,
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Prevents painful pericoronitis (gum infection) and severe jawline swelling",
      "Eliminates destructive pressure crowding against newly straightened front teeth",
      "Piezosurgery ultrasound technology cuts bone gently while sparing soft tissues and nerves",
      "PReduced recovery time with advanced PRF (Platelet-Rich Fibrin) natural healing membranes"
    ],
    whoNeedsIt: [
      "Teens and young adults between ages 16 and 25 with developing third molars",
      "Patients experiencing pain, stiffness, or difficulty opening the jaw",
      "Impacted teeth caught beneath the bone or emerging sideways against second molars",
      "Individuals with recurrent food traps and inflammation at the back of the mouth"
    ],
    procedureSteps: [
      { step: 1, title: "3D CBCT Panoramic Nerve Localization", description: "Advanced 3D scan pinpoints root curvature and verifies distance from the inferior alveolar nerve for absolute safety." },
      { step: 2, title: "Comfort Sedation Induction", description: "You are comfortably numbed or gently guided into twilight sedation so you experience zero awareness or discomfort." },
      { step: 3, title: "Atraumatic Tooth Sectioning", description: "The tooth is sectioned into microscopic fragments to remove it gently without aggressive bone removal or tissue trauma." },
      { step: 4, title: "PRF Placement & Dissolvable Sutures", description: "Platelet-rich fibrin is placed in the socket to supercharge blood clotting, followed by gentle dissolvable stitches." }
    ],
    faqs: [
      { question: "Will I feel pain during wisdom tooth extraction?", answer: "No. With our profound local anesthesia and conscious sedation options, you will feel zero sharp sensations during the entire extraction." },
      { question: "Do all wisdom teeth have to be removed?", answer: "Not necessarily. If a wisdom tooth is fully erupted, completely functional, painless, and cleanable, it can often remain. We evaluate each case individually using 3D imaging." },
      { question: "How long before I can resume normal diet and workouts?", answer: "Soft foods are recommended for the first 48 hours. Most patients resume light activities and work within 2 to 3 days, and full athletic exercise within 5 to 7 days." }
    ]
  },
  {
    id: "gum-treatment",
    slug: "gum-treatment",
    title: "Gum Treatment & Periodontics",
    category: "Periodontics",
    shortDescription: "Laser-assisted periodontal therapy, pocket reduction, and gum health restoration to safeguard tooth stability.",
    fullDescription: "Healthy gums are the living foundation of your entire smile. Gum disease (periodontitis) is the leading cause of adult tooth loss and has proven links to cardiovascular health. Our board-certified periodontists utilize minimally invasive Biolase® Waterlase lasers to vaporize disease bacteria beneath the gums painlessly without scalpels or cutting.",
    duration: "45 - 60 mins per quadrant",
    anesthesia: "Gentle Topical & Local Numbing",
    recoveryTime: "1 - 2 days (Virtually no downtime)",
    pricingGuide: "Periodontal Laser Therapy from $190 / quadrant",
    iconName: "Flame",
    featured: false,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Vaporizes 99% of periodontopathogenic bacteria without invasive surgical cuts",
      "Halts bone loss and regenerates attached collagen fibers around loose teeth",
      "Eliminates chronic bleeding, puffy red gums, and persistent bad breath",
      "Virtually pain-free laser recovery with zero sutures or prolonged bleeding"
    ],
    whoNeedsIt: [
      "Individuals whose gums bleed during routine brushing, eating, or flossing",
      "Patients with receding gums causing teeth to look unusually elongated",
      "Anyone experiencing persistent bad breath or unpleasant taste in the mouth",
      "Patients diagnosed with deep periodontal pockets greater than 4mm"
    ],
    procedureSteps: [
      { step: 1, title: "Comprehensive Periodontal Charting", description: "Gentle computerized probe measures the millimeter depth of pockets around every individual tooth to map severity." },
      { step: 2, title: "Ultrasonic Deep Debridement", description: "Subgingival calculus and bacterial crusts are gently cleared from root surfaces using specialized micro-scalers." },
      { step: 3, title: "Biolase Laser Sterilization", description: "A selective laser fiber vaporizes diseased pocket lining and sterilizes microscopic root crevices painlessly." },
      { step: 4, title: "Biological Gum Re-Attachment", description: "A clean blood clot forms naturally, allowing the gum tissue to snugly re-adhere to the root and close deep pockets." }
    ],
    faqs: [
      { question: "Can periodontitis be cured permanently?", answer: "While gum disease cannot be 100% cured once bone is lost, it can be 100% arrested and permanently stabilized with laser treatment and diligent 3-to-4 month maintenance cleanings." },
      { question: "How does laser gum therapy differ from traditional surgery?", answer: "Traditional surgery involved cutting gums with a scalpel and placing stitches. Our Waterlase laser operates without scalpels, eliminating bleeding, swelling, and surgical discomfort." },
      { question: "Is gum disease linked to heart health?", answer: "Yes. Extensive medical research shows that chronic periodontal bacteria can enter the bloodstream, contributing to systemic arterial inflammation, diabetes complications, and heart disease." }
    ]
  }
];
