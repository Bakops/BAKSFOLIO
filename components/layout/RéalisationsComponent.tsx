import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
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

export default function RéalisationsComponent() {
  return (
    <>
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <Badge
              variant="outline"
              className="w-fit border-orange-500 text-orange-400 mb-4 mx-auto"
            >
              <Calendar className="w-3 h-3 mr-1" />
              Disponible pour de nouveaux projets
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
              Aperçu de mes réalisations
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base">
              Quelques projets qui illustrent mes compétences et ma passion pour
              le développement
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-100 border-gray-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Button
                    size="sm"
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-500 text-white"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-orange-500 transition-colors text-black text-base sm:text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700 text-sm sm:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-gray-400 text-gray-800"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              size="lg"
              variant="outline"
              className="group bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
            >
              Voir tous mes projets
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
