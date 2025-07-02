"use client";
import SlideAnimation from "@/components/layout/BandeauxComponent"; // Animation des technos
import HeaderComponent from "@/components/layout/HeaderComponent";
import Image from "next/image";
import Link from "next/link";

const formations = [
  {
    title: "Licence Informatique",
    school: "Université de Paris",
    year: "2022 - 2025",
  },
  {
    title: "Certification React",
    school: "OpenClassrooms",
    year: "2023",
  },
  {
    title: "Formation UI/UX Design",
    school: "Udemy",
    year: "2022",
  },
];

const apercuRealisations = [
  {
    title: "Portfolio Créatif",
    image: "/images/realisation-1.jpg",
    link: "/realisations",
  },
  {
    title: "Boutique Shopify",
    image: "/images/realisation-2.jpg",
    link: "/realisations",
  },
  {
    title: "Blog WordPress",
    image: "/images/realisation-3.jpg",
    link: "/realisations",
  },
];

export default function ProposPage() {
  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen bg-[#000] pt-24 pb-12 px-4 flex flex-col items-center">
        {/* Présentation + photo */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl mb-12">
          {/* Texte présentation */}
          <div className="flex-1 text-white text-lg md:text-xl font-poppins">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FA9F18]">
              À propos de moi
            </h1>
            <p>
              Je m'appelle{" "}
              <span className="font-bold text-[#FA9F18]">Bakou Touré</span>,
              étudiant passionné et développeur front-end.
              <br />
              J'aime concevoir des interfaces modernes, dynamiques et
              accessibles.
              <br />
              J'utilise principalement{" "}
              <span className="font-semibold text-[#FA9F18]">
                React, Next.js, TailwindCSS
              </span>{" "}
              et d'autres outils du web pour créer des expériences uniques.
              <br />
              Toujours curieux, j'apprends en continu pour rester à la pointe
              des technologies.
            </p>
          </div>
          {/* Photo */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FA9F18]">
              <Image
                src="/images/photo-profil.jpg"
                alt="Photo de Bakou Touré"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Animation des technos */}
        <div className="w-full max-w-4xl mb-12">
          <SlideAnimation />
        </div>

        {/* Formations */}
        <div className="w-full max-w-4xl mb-12">
          <h2 className="text-3xl font-bold text-[#FA9F18] mb-6 font-poppins">
            Formations
          </h2>
          <ul className="space-y-4">
            {formations.map((f, idx) => (
              <li
                key={idx}
                className="bg-[#222] rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between border-l-4 border-[#FA9F18]"
              >
                <div>
                  <span className="font-semibold text-white">{f.title}</span>
                  <span className="block text-gray-400">{f.school}</span>
                </div>
                <span className="text-[#FA9F18] font-bold">{f.year}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Aperçu réalisations */}
        <div className="w-full max-w-4xl mb-12">
          <h2 className="text-3xl font-bold text-[#FA9F18] mb-6 font-poppins">
            Aperçu de mes réalisations
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            {apercuRealisations.map((r, idx) => (
              <Link
                href={r.link}
                key={idx}
                className="flex-1 bg-[#222] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform border border-[#FA9F18]/30"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center text-white font-semibold">
                  {r.title}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <Link
              href="/realisations"
              className="px-6 py-2 rounded-full bg-[#FA9F18] text-white font-semibold shadow hover:bg-[#c3cc50] transition"
            >
              Voir toutes les réalisations
            </Link>
          </div>
        </div>

        {/* Bloc contactez-moi */}
        <div className="w-full max-w-2xl bg-[#FA9F18] rounded-3xl p-8 flex flex-col items-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-poppins">
            Contactez-moi
          </h2>
          <p className="text-white mb-6 text-center">
            Un projet, une question ou envie d'échanger ?<br />
            N'hésitez pas à me contacter, je réponds rapidement !
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full bg-white text-[#FA9F18] font-bold text-lg shadow hover:bg-[#f4f4f4] transition"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </>
  );
}
