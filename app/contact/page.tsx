"use client";

import ContactSectionComponent from "@/components/layout/ContactSectionComponent";
import FooterComponent from "@/components/layout/FooterComponent";
import HeaderComponent from "@/components/layout/HeaderComponent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CursorGsap from "@/components/ui/CursorGsap";
import { Calendar, Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen bg-black">
        <section className="relative overflow-hidden py-14 pt-[7rem] sm:pt-[10rem] px-8 xs:px-10 sm:px-14 md:px-24">
          <div className="absolute inset-0 bg-black" />
          <div className="relative max-w-6xl mx-auto text-center">
            <Badge
              variant="outline"
              className="w-fit border-orange-500 text-white mb-10"
            >
              <MessageSquare className="w-3 h-3 mr-1" />
              Je suis à votre écoute
            </Badge>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Contactez-moi
            </h1>

            <p className="text-sm xs:text-base sm:text-xl text-gray-300 max-w-[95vw] sm:max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Vous avez un projet en tête ? Une question ? N'hésitez pas à me
              contacter. Je serais ravi de discuter avec vous et de voir comment
              je peux vous aider à concrétiser vos idées.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Planifier un appel
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-orange-50 bg-transparent"
              >
                <Mail className="w-4 h-4 mr-2" />
                Envoyer un email
              </Button>
            </div>
          </div>
        </section>

        <ContactSectionComponent />
        <FooterComponent />
      </div>
      <CursorGsap />
    </>
  );
}
