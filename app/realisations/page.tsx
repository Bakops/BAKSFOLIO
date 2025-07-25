"use client";
import FooterComponent from "@/components/layout/FooterComponent";
import HeaderComponent from "@/components/layout/HeaderComponent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Award,
  Briefcase,
  Calendar,
  Code2,
  Github,
  Globe,
  Palette,
  Search,
  ShoppingCart,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const categories = [
  { id: "all", name: "Tous les projets", icon: Globe },
  { id: "ecommerce", name: "E-commerce", icon: ShoppingCart },
  { id: "portfolio", name: "Portfolio", icon: Briefcase },
  { id: "webapp", name: "Web App", icon: Code2 },
  { id: "mobile", name: "Mobile", icon: Smartphone },
  { id: "design", name: "UI/UX", icon: Palette },
  { id: "api", name: "API", icon: Code2 },
  { id: "ai", name: "Modèle IA", icon: Zap },
];

const projects = [
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
    title: "Dashboard Analytics SaaS",
    description:
      "Interface d'administration moderne pour plateforme d'analytics avec visualisations de données avancées",
    category: "webapp",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "TypeScript", "Chart.js", "Tailwind"],
    year: "2024",
    client: "DataViz Pro",
    duration: "12 semaines",
    featured: true,
    metrics: {
      users: "5K+",
      performance: "96/100",
      satisfaction: "4.8/5",
    },
    testimonial: {
      text: "L'interface est intuitive et les performances exceptionnelles. Nos utilisateurs adorent la nouvelle expérience.",
      author: "Thomas Martin",
      role: "CTO",
    },
    liveUrl: "#",
    githubUrl: "#",
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

const stats = [
  { label: "Projets réalisés", value: "50+", icon: Briefcase },
  { label: "Clients satisfaits", value: "35+", icon: Users },
  { label: "Années d'expérience", value: "3+", icon: Calendar },
  { label: "Taux de satisfaction", value: "98%", icon: Award },
];

export default function RealizationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen bg-black ">
        <section className="relative overflow-hidden py-20 pt-[10rem] px-4">
          <div className="absolute inset-0 bg-black" />
          <div className="relative max-w-6xl mx-auto text-center">
            <Badge
              variant="outline"
              className="w-fit border-orange-500 text-white mb-10"
            >
              <Award className="w-3 h-3 mr-1" />
              Portfolio & Réalisations
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent">
              Mes Réalisations
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Découvrez une sélection de mes projets les plus récents. Chaque
              réalisation reflète mon engagement pour l'excellence technique et
              l'innovation design.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-[78rem] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Tous mes projets</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explorez l'ensemble de mes réalisations par catégorie
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 mb-12">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={
                        selectedCategory === category.id ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className={
                        selectedCategory === category.id
                          ? "bg-gradient-to-r from-orange-500 to-yellow-500"
                          : ""
                      }
                    >
                      <IconComponent className="w-3 h-3 mr-1" />
                      {category.name}
                    </Button>
                  );
                })}
              </div>

              <div className="relative lg:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Rechercher un projet..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-400 bg-white text-black rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  onClick={() => {
                    if (project.liveUrl && project.liveUrl !== "#") {
                      window.open(project.liveUrl, "_blank");
                    }
                  }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-4">
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Globe className="w-8 h-8 text-white" />
                          </div>
                        )}
                        {project.githubUrl && project.githubUrl !== "#" && (
                          <div
                            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.githubUrl, "_blank");
                            }}
                          >
                            <Github className="w-8 h-8 text-white" />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Globe className="w-4 h-4 text-white" />
                          </div>
                        )}
                        {project.githubUrl && project.githubUrl !== "#" && (
                          <div
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.githubUrl, "_blank");
                            }}
                          >
                            <Github className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                    </div>

                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-yellow-500">
                        Phare
                      </Badge>
                    )}
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{project.year}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {project.duration}
                      </span>
                    </div>
                    <CardTitle className="group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t">
                      <span className="text-sm text-muted-foreground">
                        {project.client}
                      </span>
                      <div className="flex gap-2">
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="group-hover:text-orange-500 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.liveUrl, "_blank");
                            }}
                          >
                            <Globe className="w-3 h-3 mr-1" />
                            Live
                          </Button>
                        )}
                        {project.githubUrl && project.githubUrl !== "#" && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="group-hover:text-orange-500 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.githubUrl, "_blank");
                            }}
                          >
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <div className="text-muted-foreground mb-4">
                  Aucun projet trouvé pour cette recherche
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
      <FooterComponent />
    </>
  );
}
