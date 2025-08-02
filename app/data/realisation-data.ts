import {
  Briefcase,
  Code2,
  Globe,
  Palette,
  ShoppingCart,
  Smartphone,
  Zap,
} from "lucide-react";

export const categories = [
  { id: "tout", name: "Tous les projets", icon: Globe },
  { id: "site web", name: "Site web", icon: ShoppingCart },
  { id: "portfolio", name: "Portfolio", icon: Briefcase },
  { id: "webapp", name: "Web App", icon: Code2 },
  { id: "mobile", name: "Mobile", icon: Smartphone },
  { id: "design", name: "UI/UX", icon: Palette },
  { id: "api", name: "API", icon: Code2 },
  { id: "ai", name: "Modèle IA", icon: Zap },
];

export const projects = [
  {
    id: 1,
    title: "Knowly App",
    description: "Applications web de ventes de cours et de leçons en ligne",
    category: "webapp",
    image: "/image-fond-app-knowly.PNG",
    technologies: ["Next.js", "Stripe", "TailwindCSS", "Reddis"],
    year: "2024",
    client: "Fashion Luxe Paris",
    duration: "4 semaines",
    featured: true,
    metrics: {
      conversion: "+45%",
      performance: "98/100",
      users: "10K+",
    },

    liveUrl: "https://knowly-app-front-next.vercel.app/",
    githubUrl: "https://github.com/Bakops/Knowly-App-Front-NEXT",
  },
  {
    id: 2,
    title: "Bibliotech",
    description:
      "Applications web de gestions de livres et de cathégories en ligne ",
    category: "webapp",
    image: "/image-fond-app-bibliotech.png",
    technologies: ["Angular", "TypeScript", "CSS", "Tailwind"],
    year: "2025",
    duration: "1 semaines",
    featured: true,
    liveUrl: "https://epsi-tp-01-angular-seven.vercel.app/",
    githubUrl: "https://github.com/Bakops/epsi-tp-01-ANGULAR",
  },
  {
    id: 3,
    title: "API REST E-commerce",
    description:
      "API complète pour plateforme e-commerce avec authentification JWT et paiements Stripe",
    category: "api",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    year: "2024",
    client: "Projet Open Source",
    duration: "6 semaines",
    featured: false,
    liveUrl: "https://api-ecommerce-docs.vercel.app",
    githubUrl: "https://github.com/baktoure/api-ecommerce",
  },
  {
    id: 4,
    title: "Modèle Classification IA",
    description:
      "Modèle d'intelligence artificielle pour classification d'images avec interface web",
    category: "ai",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    year: "2024",
    client: "Recherche Personnelle",
    duration: "8 semaines",
    featured: false,
    liveUrl: "https://ai-classifier-demo.vercel.app",
    githubUrl: "https://github.com/baktoure/ai-image-classifier",
  },
];
