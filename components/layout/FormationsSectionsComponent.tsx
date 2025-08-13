import { formations } from "@/app/data/propos-data";
import {
  CheckCircle,
  Code2,
  GraduationCap,
  MapPin,
  PenIcon,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function FormationsSectionsComponent() {
  return (
    <>
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <GraduationCap className="w-8 h-8 text-orange-500" />
              Formations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mon parcours académique condensé vers l'ingénierie informatique et
              le développement fullstack
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-yellow-500 hidden md:block" />
            <div className="space-y-8">
              {formations.map((formation, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full border-4 border-background hidden md:block" />
                  <Card className="md:ml-16 group border border-white/20 bg-white/5 backdrop-blur-sm text-white">
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="space-y-3 flex-1">
                          <div className="flex items-center gap-3">
                            <div className="w-30 h-30 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-white/10">
                              <img
                                src={formation.imageUrl || "/placeholder.svg"}
                                alt={`${formation.institution} logo`}
                                width={48}
                                height={48}
                                className="object-contain p-1"
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="text-white/80 border-white/30 bg-white/5"
                              >
                                {formation.period}
                              </Badge>
                              <Badge
                                className={
                                  formation.status === "En cours"
                                    ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white"
                                    : "bg-green-500/10 text-green-300 border-green-500/20"
                                }
                              >
                                {formation.status}
                              </Badge>
                            </div>
                          </div>

                          <div>
                            <CardTitle className="text-xl text-white transition-colors mb-1">
                              {formation.title}
                            </CardTitle>
                            <div className="text-sm text-orange-400 font-medium mb-2">
                              {formation.level}
                              {formation.certification && (
                                <span className="block text-xs text-white/60 mt-1">
                                  {formation.certification.title} (
                                  {formation.certification.code})
                                </span>
                              )}
                            </div>
                            <div className="flex flex-col gap-1 text-white/80 text-sm">
                              <span className="flex items-center gap-1">
                                <GraduationCap className="w-4 h-4 text-orange-400" />
                                {formation.institution}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-orange-400" />
                                {formation.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="lg:text-right">
                          <div className="text-sm text-white/60 mb-1">
                            Domaine
                          </div>
                          <Badge
                            variant="outline"
                            className="text-xs text-white/80 border-white/30 bg-white/5"
                          >
                            {formation.domain}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-white/80 leading-relaxed text-sm">
                        {formation.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 pt-2">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm text-white border-b border-white/10 pb-2">
                            <CheckCircle className="w-4 h-4 text-orange-400" />
                            Compétences clés
                          </h4>
                          <div className="space-y-2">
                            {formation.highlights.map((highlight, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-2 text-sm text-white/80"
                              >
                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0 mt-2" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm text-white border-b border-white/10 pb-2">
                            <Code2 className="w-4 h-4 text-orange-400" />
                            Projets réalisés
                          </h4>
                          <div className="space-y-2">
                            {formation.projects.map((project, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-2 text-sm text-white/80"
                              >
                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0 mt-2" />
                                <span>{project}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="/parcours">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white transition"
            >
              <PenIcon className="w-4 h-4 mr-2" />
              Voir tous mes projets
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
