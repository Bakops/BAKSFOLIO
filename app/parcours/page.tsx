"use client";
import CertificationsComponenent from "@/components/layout/CertificationsComponenent";
import CTAComponent from "@/components/layout/CTAComponent";
import FooterComponent from "@/components/layout/FooterComponent";
import HeaderComponent from "@/components/layout/HeaderComponent";
import ParcoursFormationComponenent from "@/components/layout/ParcoursFormationComponenent";
import { Badge } from "@/components/ui/badge";
import CursorGsap from "@/components/ui/CursorGsap";
import { GraduationCap } from "lucide-react";

export default function Parcours() {
  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-white">
        <section className="relative overflow-hidden py-16 sm:py-20 pt-[7rem] sm:pt-[10rem] px-4 sm:px-8 md:px-16">
          <div className="absolute inset-0 bg-black" />
          <div className="relative max-w-6xl mx-auto text-center">
            <Badge
              variant="outline"
              className="w-fit border-orange-500 text-white mb-10"
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
        <ParcoursFormationComponenent />
        <CertificationsComponenent />
        <CTAComponent />
        <FooterComponent />
      </div>
      <CursorGsap />
    </>
  );
}
