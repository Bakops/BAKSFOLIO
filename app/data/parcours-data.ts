import {
  BookOpen,
  Calendar,
  Code2,
  Globe,
  Server,
  Smartphone,
  TrendingUp,
} from "lucide-react";

export const academicPath = [
  {
    period: "2024 - 2025",
    title: "Bachelor DevOps Fullstack",
    level: "Bac+3, Bac+4 (Licence, Maîtrise)",
    institution: "EPSI - L'école d'ingénierie informatique",
    location: "Nantes, France",
    status: "En cours",
    certification: {
      title: "Développeur en Intelligence Artificielle et Data Science",
      code: "RNCP36581",
      type: "Certification RNCP",
    },
    description:
      "Formation d'ingénierie informatique spécialisée en développement fullstack et DevOps avec certification en Intelligence Artificielle et Data Science",
    highlights: [
      "Développement en langages objet (Java, Python)",
      "Frameworks modernes (Spring Boot, Angular, Django)",
      "Technologies mobiles (Flutter) et backend (Nest.js)",
      "Tests automatisés (unitaires, E2E, performance)",
      "Méthodologies DevOps et intégration continue",
      "Intelligence Artificielle et Data Science (RNCP36581)",
    ],
    domain: "Développement informatique",
    projects: [
      "Application fullstack avec Spring Boot et Angular",
      "API REST avec tests automatisés complets",
      "Application mobile Flutter avec backend Nest.js",
    ],
    current: false,
    icon: Server,
  },
  {
    period: "2022 - 2024",
    title: "Bachelor Digital et Multimédia",
    level: "Bac+2 (BTS, DUT)",
    institution: "ESD - École Supérieure Du Digital",
    location: "Nantes, France",
    status: "Diplômé",
    description:
      "Formation complète en développement web et design numérique avec une approche créative et technique du digital",
    highlights: [
      "Développement web (HTML/CSS, JavaScript, SASS)",
      "UX/UI Design et maquettage (Figma)",
      "Gestion de contenu (WordPress, CMS)",
      "Marketing digital et stratégies numériques",
      "Containerisation avec Docker",
    ],
    domain: "Intégration informatique",
    projects: [
      "Sites web WordPress personnalisés",
      "Développement HTML/CSS/JavaScript",
      "Maquettes et prototypes sur Figma",
    ],
    current: false,
    icon: Globe,
  },
  {
    period: "2022",
    title: "Baccalauréat STI2D",
    level: "Bac général et technologique",
    institution: "Lycée Brequigny",
    location: "Rennes, France",
    status: "Diplômé",
    description:
      "Baccalauréat Sciences et Technologies de l'Industrie et du Développement Durable avec spécialisation en systèmes numériques",
    highlights: [
      "Développement informatique (Arduino, HTML, CSS)",
      "Sciences de l'Ingénieur",
      "Introduction aux réseaux informatiques",
      "Systèmes numériques (binaire, hexadécimal)",
      "Programmation de microcontrôleurs Arduino",
    ],
    domain: "Développement informatique",
    projects: [
      "Projets Arduino avec capteurs et actionneurs",
      "Sites web statiques en HTML/CSS",
      "Systèmes embarqués et programmation",
    ],
    current: false,
    icon: Smartphone,
  },
];

export const technicalSkills = [
  {
    category: "Langages Backend",
    items: ["Java", "Python", "JavaScript/Node.js"],
    level: "Expert",
    color: "bg-slate-900 border-slate-700 text-slate-300",
  },
  {
    category: "Frameworks Backend",
    items: ["Spring Boot", "Django", "Nest.js"],
    level: "Avancé",
    color: "bg-slate-900 border-slate-700 text-slate-300",
  },
  {
    category: "Frontend & Mobile",
    items: ["Angular", "Flutter", "HTML/CSS", "SASS"],
    level: "Avancé",
    color: "bg-slate-900 border-slate-700 text-slate-300",
  },
  {
    category: "DevOps & Tests",
    items: ["Docker", "Tests E2E", "Tests unitaires", "Tests performance"],
    level: "Intermédiaire",
    color: "bg-slate-900 border-slate-700 text-slate-300",
  },
  {
    category: "Design & UX",
    items: ["UX/UI Design", "CMS", "Marketing digital"],
    level: "Intermédiaire",
    color: "bg-slate-900 border-slate-700 text-slate-300",
  },
];

export const stats = [
  { label: "Années de formation", value: "3+", icon: Calendar },
  { label: "Projets académiques", value: "15+", icon: BookOpen },
  { label: "Technologies maîtrisées", value: "20+", icon: Code2 },
  { label: "Niveau d'études", value: "Bac+4", icon: TrendingUp },
];
