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
    title: "Licence DEVIA FULLSTACK",
    institution: "EPSI Nantes",
    period: "2024 - 2025",
    status: "En cours",
    description:
      "Formation complète en informatique avec spécialisation en développement web",
  },
  {
    title: "Bachelor chef de projet digital",
    institution: "ESD - Ecole Supérieure du Digital",
    period: "2023",
    status: "Certifié",
    description:
      "Maîtrise approfondie de React et de l'écosystème moderne JavaScript",
  },
  {
    title: "BAC STI2D OPTION SIN",
    institution: "Lycée Brequigny",
    period: "2022",
    status: "Complété",
    description: "Principes de design d'interface et d'expérience utilisateur",
  },
];

export const projects = [
  {
    title: "Knowly App",
    description: "Applications web de ventes de cours et de leçons en ligne",
    tech: ["Next.js", "Reddis", "TailwindCSS", "Stripe"],
    image: "/image-fond-app-knowly.PNG",
  },
  {
    title: "BiblioTech App",
    description:
      "Gestionnaire de livre en ligne avec système de prêt et de retour",
    tech: ["Angular", "MySQL", "TailwindCSS"],
    image: "/image-fond-app-bibliotech.png",
  },
  {
    title: "Blog WordPress",
    description: "Blog moderne avec thème personnalisé",
    tech: ["WordPress", "PHP", "CSS"],
    image: "/placeholder.svg?height=200&width=300",
  },
];
