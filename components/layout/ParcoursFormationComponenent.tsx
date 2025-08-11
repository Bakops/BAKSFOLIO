import { academicPath } from "@/app/data/parcours-data";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Award,
  CheckCircle,
  Code2,
  GraduationCap,
  MapPin,
  Target,
} from "lucide-react";
import Image from "next/image";

export default function ParcoursFormationComponenent() {
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl text-black font-bold mb-4 flex items-center justify-center gap-2">
            <Award className="w-8 h-8 text-orange-500" />
            Parcours de formation
          </h2>
          <p className="text-gray-600 max-w-[95vw] sm:max-w-2xl mx-auto text-sm xs:text-base">
            Mon évolution du Bac STI2D vers l'ingénierie informatique, avec une
            spécialisation en développement fullstack
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-yellow-500 hidden md:block" />

          <div className="space-y-8 sm:space-y-12">
            {academicPath.map((education, index) => {
              return (
                <div key={index} className="relative">
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full border-4 border-slate-50 hidden md:block" />

                  <Card className={`md:ml-16 group  bg-white border-gray-200`}>
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="space-y-3 flex-1">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                              <Image
                                src={
                                  education.imageUrl ||
                                  "/placeholder.svg?height=48&width=48&query=school logo"
                                }
                                alt={`${education.institution} logo`}
                                width={48}
                                height={48}
                                className="object-contain"
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-gray-50 border-gray-200 text-gray-700"
                              >
                                {education.period}
                              </Badge>
                              <Badge
                                variant={
                                  education.status === "En cours"
                                    ? "default"
                                    : "secondary"
                                }
                                className={
                                  education.status === "En cours"
                                    ? "bg-gradient-to-r from-orange-500 to-yellow-500"
                                    : "bg-green-100 text-green-800 border-green-300"
                                }
                              >
                                {education.status}
                              </Badge>
                            </div>
                          </div>

                          <div>
                            <CardTitle className="text-2xl group-hover:text-orange-500 transition-colors mb-1">
                              {education.title}
                            </CardTitle>
                            <div className="text-sm text-orange-600 font-medium mb-2">
                              {education.level}
                            </div>
                            <CardDescription className="flex flex-col gap-1 text-gray-600">
                              <span className="flex items-center gap-1">
                                <GraduationCap className="w-4 h-4 text-gray-600" />
                                {education.institution}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-gray-600" />
                                {education.location}
                              </span>
                            </CardDescription>
                          </div>
                        </div>

                        <div className="lg:text-right">
                          <div className="text-sm text-gray-600 mb-1">
                            Domaine
                          </div>
                          <Badge
                            variant="outline"
                            className="bg-gray-50 border-gray-200 text-gray-700 text-xs"
                          >
                            {education.domain}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-gray-600 leading-relaxed">
                        {education.description}
                      </p>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4 text-orange-500" />
                          Compétences développées
                        </h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {education.highlights.map(
                            (highlight, highlightIndex) => (
                              <div
                                key={highlightIndex}
                                className="flex items-start gap-2 text-sm text-gray-700"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                      {education.certification && (
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Award className="w-4 h-4 text-orange-500" />
                            {education.status === "En cours"
                              ? "Certification en cours"
                              : "Diplôme / Certification"}
                          </h4>
                          <Card className="bg-gray-50 border-gray-200">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full flex items-center justify-center">
                                  <Award className="w-5 h-5 text-orange-500" />
                                </div>
                                <div className="flex-1">
                                  <h5 className="font-semibold text-gray-900">
                                    {education.certification.title}
                                  </h5>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Badge
                                      variant="outline"
                                      className="text-xs bg-gray-100 border-gray-300 text-gray-700"
                                    >
                                      {education.certification.type}
                                    </Badge>
                                    <span className="text-xs text-gray-600 font-mono">
                                      {education.certification.code}
                                    </span>
                                  </div>
                                </div>
                                {education.status === "En cours" && (
                                  <div className="w-5 h-5 border-2 border-orange-500 rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      )}

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Code2 className="w-4 h-4 text-orange-500" />
                          Projets académiques
                        </h4>
                        <div className="space-y-2">
                          {education.projects.map((project, projectIndex) => (
                            <div
                              key={projectIndex}
                              className="flex items-center gap-2 text-sm text-gray-700"
                            >
                              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                              <span>{project}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
