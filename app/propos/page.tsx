import CTAComponent from "@/components/layout/CTAComponent";
import FooterComponent from "@/components/layout/FooterComponent";
import FormationsSectionsComponent from "@/components/layout/FormationsSectionsComponent";
import HeaderComponent from "@/components/layout/HeaderComponent";
import PresentationSectionsComponent from "@/components/layout/PresentationSectionsComponent";
import RéalisationsComponent from "@/components/layout/RéalisationsComponent";
import TechnologieSections from "@/components/layout/TechnologieSections";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen bg-[#000000] text-white">
        <section className="relative overflow-hidden py-20 pt-[7rem] sm:pt-[10rem] px-6 sm:px-12 md:px-24">
          <div className="absolute inset-0 bg-black" />
          <div className="relative max-w-6xl mx-auto text-center">
            <Badge
              variant="outline"
              className="w-fit border-orange-500 text-white mb-10"
            >
              <Award className="w-3 h-3 mr-1" />A propos de moi
            </Badge>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Bienvenue sur mon portfolio
            </h1>
            <p className="text-sm xs:text-base sm:text-xl text-gray-300 max-w-[95vw] sm:max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Je suis Bakou Touré, étudiant en développement web et passionné
              par la création d'expériences numériques modernes et accessibles.
              Découvrez mon parcours, mes compétences et mes projets récents.
            </p>
          </div>
        </section>
        <PresentationSectionsComponent />
        <TechnologieSections />
        <RéalisationsComponent />
        <FormationsSectionsComponent />
        <CTAComponent />
      </div>
      <FooterComponent />
    </>
  );
}
