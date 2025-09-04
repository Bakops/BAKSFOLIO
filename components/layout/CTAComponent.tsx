import { Download, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CTABlackComponent() {
  return (
    <section className="py-14 px-8 xs:px-10 sm:px-14 md:px-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-orange-500 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-yellow-500 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 text-black">
          Prêt à collaborer sur votre prochain projet ?
        </h2>

        <p className="text-base sm:text-lg text-black mb-8 max-w-2xl mx-auto">
          Je suis toujours ouvert aux nouvelles opportunités et aux projets
          passionnants. N'hésitez pas à me contacter pour discuter de vos idées.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white transition-all hover:shadow-lg hover:shadow-orange-500/20 active:scale-95"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contactez-moi
            </Button>
          </Link>
          <a href="/Toure-Bakou-Étudiant Développeur Fullstack.pdf" download className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-white border-white hover:border-orange-500 hover:text-orange-500 bg-black/50 transition-all hover:shadow-lg hover:shadow-white/10 active:scale-95"
            >
              <Download className="w-4 h-4 mr-2" />
              Télécharger mon CV
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
