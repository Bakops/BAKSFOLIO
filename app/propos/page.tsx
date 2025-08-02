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
  Calendar,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { formations, projects, technologies } from "../data/propos-data";

export default function AboutPage() {
  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen bg-[#000000] text-white">
        <section className="relative overflow-hidden py-14 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="absolute inset-0 bg-[#000000]" />
          <div className="relative max-w-6xl mx-auto mt-16 sm:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge
                    variant="outline"
                    className="w-fit border-orange-500 text-white"
                  >
                    <Calendar className="w-3 h-3 mr-1" />
                    Disponible pour de nouveaux projets
                  </Badge>

                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">
                    À propos de moi
                  </h1>

                  <div className="space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed">
                    <p>
                      Je m'appelle{" "}
                      <span className="font-semibold text-orange-400">
                        Bakou Touré
                      </span>
                      , étudiant passionné et développeur Fullstack basé à
                      Rennes.
                    </p>
                    <p>
                      J'aime concevoir des interfaces modernes, dynamiques et
                      accessibles qui offrent une expérience utilisateur
                      exceptionnelle.
                    </p>
                    <p>
                      J'utilise principalement{" "}
                      <span className="font-medium text-orange-300">
                        React, Next.js, TailwindCSS
                      </span>{" "}
                      et d'autres outils du web moderne pour créer des
                      expériences uniques.
                    </p>
                    <p>
                      Toujours curieux, j'apprends en continu pour rester à la
                      pointe des technologies.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="https://cal.com/bakou-toure/30min" target="_blank">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Me contacter
                    </Button>
                  </a>

                  <a href="https://github.com/Bakops" target="_blank">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-gray-700 bg-white bg-opacity-10 text-white hover:border-orange-500"
                    >
                      GitHub
                    </Button>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/toure-bakou-a2b05921a/"
                    target="_blank"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-gray-700 bg-white bg-opacity-10 text-white hover:border-orange-500"
                    >
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl blur-xl opacity-30 animate-pulse" />
                  <div className="relative bg-gradient-to-r from-orange-500 to-yellow-500 p-1 rounded-3xl">
                    <div className="bg-[#101010] rounded-3xl p-2">
                      <Image
                        src="/photos bakou.JPG"
                        alt="Bakou Touré"
                        width={320}
                        height={400}
                        className="rounded-2xl object-cover w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 flex align-middle mb-[5rem]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white dark:text-white">
                Technologies & Outils
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Les technologies que j'utilise quotidiennement pour créer des
                expériences web modernes.
              </p>
            </div>

            <div
              className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
        "
            >
              {technologies.map((tech, index) => (
                <Card
                  key={index}
                  className="group bg-black border border-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center w-[180px] h-[110px] min-w-[100px]"
                >
                  <CardContent className="aspect-square p-4 flex flex-col items-center justify-center text-center">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <p className="text-sm font-medium text-white">
                      {tech.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

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
                Quelques projets qui illustrent mes compétences et ma passion
                pour le développement
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

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center justify-center gap-2 text-white">
                <GraduationCap className="w-8 h-8 text-orange-500" />
                Formations
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Mon parcours académique et professionnel dans le développement
                web
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {formations.map((formation, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-orange-500 bg-[#101010] border-gray-800"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge
                        variant={
                          formation.status === "En cours"
                            ? "default"
                            : "secondary"
                        }
                        className={
                          formation.status === "En cours"
                            ? "bg-orange-500 text-white"
                            : "bg-gray-700 text-white"
                        }
                      >
                        {formation.status}
                      </Badge>
                      <span className="text-sm text-gray-400 font-medium">
                        {formation.period}
                      </span>
                    </div>
                    <CardTitle className="group-hover:text-orange-500 transition-colors text-white">
                      {formation.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1 text-gray-400">
                      <MapPin className="w-3 h-3" />
                      {formation.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {formation.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-2 sm:px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-black">
              Prêt à collaborer sur votre prochain projet ?
            </h2>
            <p className="text-base sm:text-lg text-black mb-8 max-w-2xl mx-auto">
              Je suis toujours ouvert aux nouvelles opportunités et aux projets
              passionnants. N'hésitez pas à me contacter pour discuter de vos
              idées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contactez-moi
              </Button>
              <Button
                size="lg"
                variant="outline"
                className=" text-white hover:border-orange-500 bg-[#000000]"
              >
                Télécharger mon CV
              </Button>
            </div>
          </div>
        </section>
      </div>
      <FooterComponent />
    </>
  );
}
