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
  CheckCircle,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  Target,
} from "lucide-react";
import { academicPath, technicalSkills } from "../data/parcours-data";

export default function AcademicJourneyPage() {
  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-20 pt-[7rem] sm:pt-[10rem] px-4 sm:px-8 md:px-16">
          <div className="absolute inset-0 bg-black" />
          <div className="relative max-w-6xl mx-auto text-center">
            <Badge
              variant="outline"
              className="w-fit border-orange-500 text-white mb-6 sm:mb-10 text-xs sm:text-base"
            >
              <GraduationCap className="w-3 h-3 mr-1" />
              Formation & Éducation
            </Badge>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Mon Parcours Académique
            </h1>

            <p className="text-sm xs:text-base sm:text-xl text-gray-300 max-w-[95vw] sm:max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              De la découverte des systèmes numériques au développement
              fullstack, découvrez mon évolution académique vers l'ingénierie
              informatique moderne.
            </p>
          </div>
        </section>

        {/* Academic Timeline */}
        <section className="py-10 sm:py-16 px-4 sm:px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-black mb-2 sm:mb-4">
                Parcours de Formation
              </h2>
              <p className="text-gray-600 max-w-[95vw] sm:max-w-2xl mx-auto text-sm xs:text-base">
                Mon évolution du Bac STI2D vers l'ingénierie informatique, avec
                une spécialisation en développement fullstack
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-yellow-500 hidden md:block" />

              <div className="space-y-8 sm:space-y-12">
                {academicPath.map((education, index) => {
                  const IconComponent = education.icon;
                  return (
                    <div key={index} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute left-2 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full border-4 border-slate-50 hidden md:block" />

                      <Card className="md:ml-10 sm:md:ml-16 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-gray-200">
                        <CardHeader>
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            <div className="space-y-3 flex-1">
                              <div className="flex items-center gap-3 flex-wrap">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-lg flex items-center justify-center">
                                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                                </div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <Badge
                                    variant="outline"
                                    className="bg-gray-50 border-gray-200 text-gray-700 text-xs sm:text-sm"
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
                                <CardTitle className="text-lg sm:text-2xl group-hover:text-orange-500 transition-colors mb-1">
                                  {education.title}
                                </CardTitle>
                                <div className="text-xs sm:text-sm text-orange-600 font-medium mb-2">
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

                            <div className="lg:text-right mt-2 lg:mt-0">
                              <div className="text-xs sm:text-sm text-gray-600 mb-1">
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

                        <CardContent className="space-y-4 sm:space-y-6">
                          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            {education.description}
                          </p>

                          <div>
                            <h4 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                              <Target className="w-4 h-4 text-orange-500" />
                              Compétences développées
                            </h4>
                            <div className="grid md:grid-cols-2 gap-2">
                              {education.highlights.map(
                                (highlight, highlightIndex) => (
                                  <div
                                    key={highlightIndex}
                                    className="flex items-start gap-2 text-xs sm:text-sm text-gray-700"
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
                              <h4 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                                <Award className="w-4 h-4 text-orange-500" />
                                Certification en cours
                              </h4>
                              <Card className="bg-gray-50 border-gray-200">
                                <CardContent className="p-3 sm:p-4">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full flex items-center justify-center">
                                      <Award className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-900 text-sm sm:text-base">
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
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-orange-500 rounded-full flex items-center justify-center">
                                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          )}

                          <div>
                            <h4 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                              <Code2 className="w-4 h-4 text-orange-500" />
                              Projets académiques
                            </h4>
                            <div className="space-y-1 sm:space-y-2">
                              {education.projects.map(
                                (project, projectIndex) => (
                                  <div
                                    key={projectIndex}
                                    className="flex items-center gap-2 text-xs sm:text-sm text-gray-700"
                                  >
                                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                                    <span>{project}</span>
                                  </div>
                                )
                              )}
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

        <section className="bg-black py-10 sm:py-16 px-4 sm:px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 flex items-center justify-center gap-2">
                <Code2 className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
                Stack Technique Maîtrisée
              </h2>
              <p className="text-gray-300 max-w-[95vw] sm:max-w-2xl mx-auto text-sm xs:text-base">
                L'ensemble des technologies et compétences acquises durant ma
                formation d'ingénieur
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {technicalSkills.map((skillGroup, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-gray-200"
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-base sm:text-lg group-hover:text-orange-500 transition-colors text-gray-900">
                      {skillGroup.category}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className={`w-fit mx-auto ${skillGroup.color} text-xs sm:text-sm`}
                    >
                      {skillGroup.level}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 sm:space-y-3">
                      {skillGroup.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center gap-2 text-xs sm:text-sm p-2 rounded-lg bg-gray-100 hover:bg-orange-50 transition-colors text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 px-4 sm:px-8 md:px-16 bg-white text-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Mon parcours vous intéresse ?
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-[95vw] sm:max-w-2xl mx-auto">
              Découvrez comment ma formation d'ingénieur et mes compétences
              fullstack peuvent contribuer à vos projets. Discutons de vos
              besoins !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-base sm:text-lg"
              >
                <Mail className="w-4 h-4 mr-2" />
                Me contacter
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white border-gray-200 text-gray-700 hover:bg-gray-100 text-base sm:text-lg"
              >
                Voir mes réalisations
              </Button>
            </div>
          </div>
        </section>
        <FooterComponent />
      </div>
    </>
  );
}
