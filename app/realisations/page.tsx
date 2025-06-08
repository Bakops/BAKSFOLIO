"use client";
import HeaderComponent from "@/components/layout/HeaderComponent";
import Image from "next/image";

const realisations = [
  {
    title: "Portfolio Créatif",
    description:
      "Site vitrine moderne pour un designer freelance, réalisé avec Next.js, TailwindCSS et animations GSAP.",
    image: "/images/realisation-1.jpg",
    link: "#",
  },
  {
    title: "Boutique Shopify",
    description:
      "Développement d'une boutique e-commerce performante, intégration Shopify et personnalisation avancée.",
    image: "/images/realisation-2.jpg",
    link: "#",
  },
  {
    title: "Blog WordPress",
    description:
      "Création d'un blog responsive, optimisé SEO, avec gestion de contenu facile sous WordPress.",
    image: "/images/realisation-3.jpg",
    link: "#",
  },
  {
    title: "Application Web",
    description:
      "Application web sur-mesure pour la gestion de projets, interface intuitive et sécurisée.",
    image: "/images/realisation-4.jpg",
    link: "#",
  },
];

export default function RealisationsPage() {
  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen bg-[#181818] py-16 px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-poppins">
          Mes Réalisations
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          {realisations.map((real, idx) => (
            <div
              key={idx}
              className="bg-[#222] rounded-3xl shadow-lg overflow-hidden flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300 border border-[#FA9F18]/30"
            >
              <div className="w-full h-56 relative">
                <Image
                  src={real.image}
                  alt={real.title}
                  fill
                  className="object-cover"
                  style={{
                    borderTopLeftRadius: "1.5rem",
                    borderTopRightRadius: "1.5rem",
                  }}
                />
              </div>
              <div className="p-6 flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold text-[#FA9F18] mb-2 font-poppins">
                  {real.title}
                </h2>
                <p className="text-white text-base mb-4">{real.description}</p>
                <a
                  href={real.link}
                  className="inline-block mt-2 px-6 py-2 rounded-full bg-[#FA9F18] text-white font-semibold shadow hover:bg-[#c3cc50] transition"
                >
                  Voir le projet
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
