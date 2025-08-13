"use client";
import CTAComponent from "@/components/layout/CTAComponent";
import FooterComponent from "@/components/layout/FooterComponent";
import HeaderComponent from "@/components/layout/HeaderComponent";
import PortfolioSectionComponent from "@/components/layout/PortfolioSectionComponent";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

export default function RealisationsPage() {
  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen bg-[#000000] ">
        <section className="relative overflow-hidden py-20 pt-[7rem] sm:pt-[10rem] px-4 sm:px-8 md:px-16">
          <div className="absolute inset-0 bg-black" />
          <div className="relative max-w-6xl mx-auto text-center">
            <Badge
              variant="outline"
              className="w-fit border-orange-500 text-white mb-10"
            >
              <Award className="w-3 h-3 mr-1" />
              Portfolio & Réalisations
            </Badge>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Mes Réalisations
            </h1>
            <p className="text-sm xs:text-base sm:text-xl text-gray-300 max-w-[95vw] sm:max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Découvrez une sélection de mes projets les plus récents. Chaque
              réalisation reflète mon engagement pour l'excellence technique et
              l'innovation design.
            </p>
          </div>
        </section>
        <PortfolioSectionComponent />
        <CTAComponent />
      </div>
      <FooterComponent />
    </>
  );
}
