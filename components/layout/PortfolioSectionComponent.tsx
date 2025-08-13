import { categories, projects } from "@/app/data/realisation-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Globe, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function PortfolioSectionComponent() {
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
    <section className=" bg-white py-14 px-8 xs:px-10 sm:px-14 md:px-24">
      <div className="max-w-[78rem] mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Tous mes projets
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Explorez l'ensemble de mes réalisations par catégorie
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
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
            <div className="text-muted-foreground mb-4 text-sm sm:text-base">
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
  );
}
