export interface FAQ {
  question: string;
  answer: string;
  category: "General" | "Insurance" | "Procedures" | "Emergency";
}

export const CLINIC_FAQS: FAQ[] = [
  {
    question: "How does Aura Dental make treatments painless?",
    answer: "We utilize computer-assisted anesthesia delivery (The Wand®) that controls the flow of numbing solution at a microscopic rate, completely removing the sting associated with conventional syringes. In addition, we offer warm numbing gels, conscious twilight sedation, and comforting amenities like noise-canceling headphones.",
    category: "General"
  },
  {
    question: "Do you accept dental insurance, and how does billing work?",
    answer: "Yes, we work with all major dental insurance PPO providers (including Delta Dental, MetLife, Cigna, Aetna, Guardian, and Blue Cross Blue Shield). Our concierge coordinators handle claims directly on your behalf to maximize your benefits, and we provide transparent out-of-pocket estimates before any treatment begins.",
    category: "Insurance"
  },
  {
    question: "What should I expect during my first visit?",
    answer: "Your initial 60-minute visit includes a warm welcome in our hospitality lounge, comprehensive 3D low-radiation digital imaging, a gentle periodontal evaluation, oral cancer screening, and an unhurried, face-to-face consultation with your specialist to discuss your dental health goals.",
    category: "General"
  },
  {
    question: "Do you offer emergency dental appointments?",
    answer: "Yes. Dental emergencies like sudden tooth pain, broken teeth, or knocked-out crowns cannot wait. We reserve dedicated daily emergency slots and offer same-day appointments to relieve your discomfort promptly.",
    category: "Emergency"
  },
  {
    question: "What flexible financing or payment plans are available?",
    answer: "We believe exceptional dental care should be accessible. We offer 0% interest monthly payment plans through CareCredit and Sunbit, allowing you to divide treatment costs into manageable monthly installments over 6 to 24 months.",
    category: "Insurance"
  },
  {
    question: "How strict are your sterilization and hygiene protocols?",
    answer: "Our clinic operates a hospital-grade, 7-step sterilization cleanroom that exceeds CDC, OSHA, and ADA standards. All reusable instruments undergo ultrasonic enzymatic cleansing, vacuum steam autoclaving with biological indicator spore testing, and are sealed in sterile pouches until opened in front of you.",
    category: "Procedures"
  }
];
