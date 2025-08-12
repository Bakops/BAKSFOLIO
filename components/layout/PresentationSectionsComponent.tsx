import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";
import Image from "next/image";

export default function PresentationSectionsComponent() {
  return (
    <section className="relative overflow-hidden py-14 px-8 xs:px-10 sm:px-14 md:px-24">
      <div className="absolute inset-0 bg-white" />
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="w-fit border-orange-500 text-black text-xs sm:text-sm px-3 py-1"
              >
                <Calendar className="w-3 h-3 mr-1" />
                Disponible pour de nouveaux projets
              </Badge>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-6xl font-bold text-black">
                À propos de moi
              </h1>
              <div className="space-y-4 text-sm xs:text-base sm:text-lg text-black leading-relaxed">
                <p>
                  Je m'appelle{" "}
                  <span className="font-semibold text-orange-400">
                    Bakou Touré
                  </span>
                  , étudiant passionné et développeur Fullstack basé à Rennes.
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
                  et d'autres outils du web moderne pour créer des expériences
                  uniques.
                </p>
                <p>
                  Toujours curieux, j'apprends en continu pour rester à la
                  pointe des technologies.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Me contacter
                </Button>
              </a>
              <a
                href="https://github.com/Bakops"
                target="_blank"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-gray-700 bg-white bg-opacity-10 text-black hover:border-orange-500"
                >
                  GitHub
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/toure-bakou-a2b05921a/"
                target="_blank"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-gray-700 bg-white bg-opacity-10 text-black hover:border-orange-500"
                >
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
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
  );
}
