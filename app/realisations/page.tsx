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
  ArrowRight,
  Award,
  Briefcase,
  Calendar,
  Code2,
  ExternalLink,
  Github,
  Globe,
  Mail,
  Palette,
  Search,
  ShoppingCart,
  Smartphone,
  Users,
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
];

const projects = [
  {
    id: 1,
    title: "Boutique Mode Luxe",
    description:
      "E-commerce haut de gamme avec expérience d'achat premium et intégration Shopify avancée",
    category: "ecommerce",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Shopify", "TailwindCSS", "Framer Motion"],
    year: "2024",
    client: "Fashion Luxe Paris",
    duration: "8 semaines",
    featured: true,
    metrics: {
      conversion: "+45%",
      performance: "98/100",
      users: "10K+",
    },
    testimonial: {
      text: "Bakou a transformé notre vision en une boutique en ligne exceptionnelle. Les ventes ont augmenté de 45% dès le premier mois.",
      author: "Marie Dubois",
      role: "Directrice Marketing",
    },
    liveUrl: "#",
    githubUrl: "#",
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
        {/* Hero Section */}
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

        {/* All Projects */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Tous mes projets</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explorez l'ensemble de mes réalisations par catégorie
              </p>
            </div>

            {/* Filters */}
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
                  className="w-full pl-10 pr-4 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
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
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        >
                          <Github className="w-3 h-3" />
                        </Button>
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
                      <Button
                        size="sm"
                        variant="ghost"
                        className="group-hover:text-orange-500 transition-colors"
                      >
                        Voir plus
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
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

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 dark:from-orange-500/5 dark:to-yellow-500/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Votre projet sera le prochain ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Chaque projet est unique et mérite une approche personnalisée.
              Discutons de vos idées et créons quelque chose d'exceptionnel
              ensemble.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600"
              >
                <Mail className="w-4 h-4 mr-2" />
                Démarrer un projet
              </Button>
              <Button size="lg" variant="outline">
                Voir mes services
              </Button>
            </div>
          </div>
        </section>
      </div>
      <FooterComponent />
    </>
  );
}
