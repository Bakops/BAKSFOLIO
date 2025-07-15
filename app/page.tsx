"use client";
import { ScrollBasedVelocityDemo } from "@/components/layout/animescroll";
import CTAComponent from "@/components/layout/CTAComponent";
import FooterComponent from "@/components/layout/FooterComponent";
import HeroHeadersComponent from "@/components/layout/HeroHeadersComponent";
import RéalisationsComponent from "@/components/layout/RéalisationsComponent";
import TechnologieSections from "@/components/layout/TechnologieSections";
import TexteComponent from "@/components/layout/TexteComponent";
import CursorGsap from "@/components/ui/CursorGsap";
import { Feature } from "@/components/ui/feature-with-advantages";

export default function Home() {
  return (
    <>
      <HeroHeadersComponent />
      <TexteComponent />
      <ScrollBasedVelocityDemo />
      <Feature />
      <TechnologieSections />
      <RéalisationsComponent />
      <CTAComponent />
      <FooterComponent />
      <CursorGsap />
    </>
  );
}
