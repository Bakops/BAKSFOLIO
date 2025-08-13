import {
  SiAngular,
  SiAuth0,
  SiDocker,
  SiFastapi,
  SiFigma,
  SiGithub,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";

export const technologies = [
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
  { name: "Stripe", icon: <SiStripe className="text-[#635BFF]" /> },
  { name: "Angular", icon: <SiAngular className="text-[#DD0031]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#00758F]" /> },
  { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
  { name: "WordPress", icon: <SiWordpress className="text-[#21759B]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
  { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
  { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" /> },
  { name: "Auth0", icon: <SiAuth0 className="text-white" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-[#219b3b]" /> },
];

export const formations = [
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
      "Application fullstack de visualisation de données pandémiques (COVID-19/Monkeypox)",
      "API REST avec tests automatisés complets",
      "Application mobile Flutter",
    ],
    current: false,
    imageUrl: "/epsi-logo.png",
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
    imageUrl: "/esd-logo.png",
  },
  {
    period: "2022",
    title:
      "Baccalauréat STI2D OPTION SIN (Systèmes informatique et numériques)",
    level: "Bac général et technologique",
    institution: "Lycée Brequigny",
    location: "Rennes, France",
    status: "Diplômé",
    certification: {
      title:
        "Baccalauréat Sciences et Technologies de l'Industrie et du Développement Durable",
      code: "Diplôme National",
      type: "Diplôme",
    },
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
    imageUrl: "/logo-lycée-brequigny.png",
  },
];

export const projects = [
  {
    title: "Portfolio Créatif",
    description: "Site portfolio personnel avec animations modernes",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Boutique Shopify",
    description: "E-commerce personnalisé avec intégrations avancées",
    tech: ["Shopify", "Liquid", "JavaScript"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Blog WordPress",
    description: "Blog moderne avec thème personnalisé",
    tech: ["WordPress", "PHP", "CSS"],
    image: "/placeholder.svg?height=200&width=300",
  },
];
