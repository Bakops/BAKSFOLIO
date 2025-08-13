"use client";
import { projects } from "@/app/data/realisation-data";
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
  Calendar,
  ChevronLeft,
  ChevronRight,
  Github,
  Globe,
  PenIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function RéalisationsComponent() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Calcul du nombre de slides en fonction de l'écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesCount = isMobile
    ? projects.length
    : Math.ceil(projects.length / 3);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideIndex((prev) => (prev + 1) % slidesCount);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideIndex((prev) => (prev - 1 + slidesCount) % slidesCount);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Projets visibles dans la slide actuelle
  const visibleProjects = isMobile
    ? [projects[slideIndex]]
    : projects.slice(slideIndex * 3, slideIndex * 3 + 3);

  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="w-fit border-orange-500 text-black bg-white/80 mb-4 mx-auto text-xs sm:text-sm px-4 py-2 shadow-sm"
          >
            <Calendar className="w-3 h-3 mr-1" />
            Disponible pour de nouveaux projets
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-black tracking-tight">
            Aperçu de mes réalisations
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
            Quelques projets qui illustrent mes compétences et ma passion pour
            le développement
          </p>
        </div>

        <div className="relative">
          {/* Boutons de navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white/80 p-2 rounded-full shadow-md hover:bg-white z-10"
          >
            <ChevronLeft className="w-6 h-6 text-orange-500" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white/80 p-2 rounded-full shadow-md hover:bg-white z-10"
          >
            <ChevronRight className="w-6 h-6 text-orange-500" />
          </button>

          {/* Conteneur des slides */}
          <div className="overflow-hidden">
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500 ${
                isTransitioning ? "opacity-70" : "opacity-100"
              }`}
            >
              {visibleProjects.map((project, index) => (
                <Card
                  key={`${slideIndex}-${index}`}
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
          </div>

          {/* Indicateurs de slide */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: slidesCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setSlideIndex(index);
                    setTimeout(() => setIsTransitioning(false), 500);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  slideIndex === index ? "bg-orange-500 w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/realisations">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white transition"
            >
              <PenIcon className="w-4 h-4 mr-2" />
              Voir tous mes projets
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
